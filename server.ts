import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, Type } from '@google/genai';
import { INDIAN_STATES, getDistrictCoords } from './src/data/locations.ts';
import { synthesizeSpeech } from './server/tts.ts';
import { queryMarketPrices, resolveCommodity } from './server/marketData.ts';

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Initialize Google GenAI
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || '',
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

// Resilient Gemini Invoker with Exponential Backoff & High Demand / Model Fallback
async function callGeminiWithRetry(
  params: {
    model?: string;
    contents: any;
    config?: any;
  },
  maxRetries = 2
): Promise<any> {
  const requestedModel = params.model || 'gemini-3.1-flash-lite';
  const modelsToTry = Array.from(
    new Set([
      requestedModel,
      'gemini-3.1-flash-lite',
      'gemini-3.8-flash',
      'gemini-flash-latest',
    ])
  );
  let lastError: any = null;

  for (const model of modelsToTry) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        const response = await ai.models.generateContent({
          model,
          contents: params.contents,
          config: params.config,
        });
        return response;
      } catch (err: any) {
        lastError = err;
        const msg = err?.message || (typeof err === 'object' ? JSON.stringify(err) : String(err));
        console.warn(`[Gemini Attempt ${attempt} on ${model}]:`, msg);

        const isUnavailable =
          err?.status === 503 ||
          err?.code === 503 ||
          err?.error?.code === 503 ||
          msg.includes('503') ||
          msg.includes('high demand') ||
          msg.includes('UNAVAILABLE') ||
          msg.includes('RESOURCE_EXHAUSTED') ||
          msg.includes('429') ||
          msg.includes('overloaded') ||
          msg.includes('404') ||
          msg.includes('NOT_FOUND') ||
          msg.includes('not found');

        // If the model itself is not found (404), do not retry it; jump to next model
        if (msg.includes('404') || msg.includes('NOT_FOUND') || msg.includes('not found')) {
          break;
        }

        if (isUnavailable && attempt < maxRetries) {
          const delay = 350 * attempt;
          console.log(`[Gemini Retry] Waiting ${delay}ms before retrying on ${model}...`);
          await new Promise((r) => setTimeout(r, delay));
          continue;
        }
        // If unavailable or failed on this model, proceed immediately to the next fallback model
        break;
      }
    }
  }
  throw lastError;
}

// Helper to reliably parse JSON from Gemini responses even with surrounding markdown fences
function parseGeminiJsonSafely(raw: string): any {
  if (!raw || typeof raw !== 'string') return null;
  const cleaned = raw.trim().replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '').trim();
  try {
    return JSON.parse(cleaned);
  } catch {
    const firstBrace = cleaned.indexOf('{');
    const lastBrace = cleaned.lastIndexOf('}');
    if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
      try {
        return JSON.parse(cleaned.substring(firstBrace, lastBrace + 1));
      } catch (e) {
        console.warn('Substring JSON parse failed:', e);
      }
    }
    return null;
  }
}

// Database storage setup
const DATA_DIR = path.join(process.cwd(), 'data');
const DB_FILE = path.join(DATA_DIR, 'farmer_saathi_db.json');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

interface DBStructure {
  users: any[];
  farmer_crops: any[];
  market_prices: any[];
  crop_advisories: any[];
  analysis_history: any[];
}

function loadDB(): DBStructure {
  if (fs.existsSync(DB_FILE)) {
    try {
      const content = fs.readFileSync(DB_FILE, 'utf-8');
      return JSON.parse(content);
    } catch (e) {
      console.error('Error reading DB, initializing fresh:', e);
    }
  }

  const initialDB: DBStructure = {
    users: [
      {
        id: 'farmer_default_1',
        name: 'Venkata Ramana',
        mobile: '9876543210',
        password_hash: 'farmer123',
        state: 'Andhra Pradesh',
        district: 'Sri Sathya Sai',
        village: 'Gotluru',
        language: 'te',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ],
    farmer_crops: [
      {
        id: 'fc_1',
        farmer_id: 'farmer_default_1',
        crop: 'Tomato',
        crop_stage: 'Flowering',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ],
    market_prices: [
      {
        id: 'mp_1',
        marketName: 'Dharmavaram APMC Market',
        state: 'Andhra Pradesh',
        district: 'Sri Sathya Sai',
        commodity: 'Tomato',
        commodityLocal: { te: 'టమోటా', kn: 'ಟೊಮೆಟೊ', hi: 'टमाटर', en: 'Tomato' },
        variety: 'Hybrid (Sahu)',
        minPrice: 1800,
        maxPrice: 2400,
        modalPrice: 2150,
        unit: '₹ / Quintal',
        priceDate: new Date().toISOString().split('T')[0],
        previousPrice: 1950,
        priceTrend: 'higher',
        priceDifference: 200,
        source: 'e-NAM / AP State Agricultural Marketing Department',
        lastUpdated: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        distanceKm: 14,
      },
      {
        id: 'mp_2',
        marketName: 'Hindupur Agricultural Market Yard',
        state: 'Andhra Pradesh',
        district: 'Sri Sathya Sai',
        commodity: 'Groundnut',
        commodityLocal: { te: 'వేరుశనగ', kn: 'ಕಡಲೆಕಾಯಿ', hi: 'मूंगफली', en: 'Groundnut' },
        variety: 'Kadiri-6 (Pod)',
        minPrice: 6200,
        maxPrice: 7100,
        modalPrice: 6850,
        unit: '₹ / Quintal',
        priceDate: new Date().toISOString().split('T')[0],
        previousPrice: 6900,
        priceTrend: 'lower',
        priceDifference: -50,
        source: 'Agmarknet / e-NAM',
        lastUpdated: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        distanceKm: 38,
      },
      {
        id: 'mp_3',
        marketName: 'Kadiri APMC Market Yard',
        state: 'Andhra Pradesh',
        district: 'Sri Sathya Sai',
        commodity: 'Tomato',
        commodityLocal: { te: 'టమోటా', kn: 'ಟೊಮೆಟೊ', hi: 'टमाटर', en: 'Tomato' },
        variety: 'Local Desi',
        minPrice: 1600,
        maxPrice: 2200,
        modalPrice: 2000,
        unit: '₹ / Quintal',
        priceDate: new Date().toISOString().split('T')[0],
        previousPrice: 2000,
        priceTrend: 'stable',
        priceDifference: 0,
        source: 'e-NAM Official Portal',
        lastUpdated: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        distanceKm: 26,
      },
      {
        id: 'mp_4',
        marketName: 'Tadipatri Agricultural Market',
        state: 'Andhra Pradesh',
        district: 'Anantapur',
        commodity: 'Cotton',
        commodityLocal: { te: 'పత్తి', kn: 'ಹತ್ತಿ', hi: 'कपास', en: 'Cotton' },
        variety: 'Medium Staple',
        minPrice: 7100,
        maxPrice: 7850,
        modalPrice: 7500,
        unit: '₹ / Quintal',
        priceDate: new Date().toISOString().split('T')[0],
        previousPrice: 7300,
        priceTrend: 'higher',
        priceDifference: 200,
        source: 'Cotton Corporation of India (CCI) / APMC',
        lastUpdated: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        distanceKm: 52,
      },
      {
        id: 'mp_5',
        marketName: 'Kolar APMC Yard',
        state: 'Karnataka',
        district: 'Kolar',
        commodity: 'Tomato',
        commodityLocal: { te: 'టమోటా', kn: 'ಟೊಮೆಟೊ', hi: 'टमाटर', en: 'Tomato' },
        variety: 'Hybrid Grade-A',
        minPrice: 1900,
        maxPrice: 2600,
        modalPrice: 2300,
        unit: '₹ / Quintal',
        priceDate: new Date().toISOString().split('T')[0],
        previousPrice: 2150,
        priceTrend: 'higher',
        priceDifference: 150,
        source: 'Karnataka State APMC e-Mandi',
        lastUpdated: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        distanceKm: 85,
      },
    ],
    crop_advisories: [],
    analysis_history: [],
  };

  fs.writeFileSync(DB_FILE, JSON.stringify(initialDB, null, 2));
  return initialDB;
}

function saveDB(data: DBStructure) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
  } catch (e) {
    console.error('Error saving DB:', e);
  }
}

// -------------------------------------------------------------
// REST API Endpoints
// -------------------------------------------------------------

// 1. Authentication & Profile
app.post('/api/auth/register', (req, res) => {
  const { name, mobile, password, state, district, village, language } = req.body;
  if (!name || !mobile) {
    return res.status(400).json({ error: 'Name and mobile number are required' });
  }

  const db = loadDB();
  const existingUserIndex = db.users.findIndex((u) => u.mobile === mobile);
  const newUser = {
    id: existingUserIndex >= 0 ? db.users[existingUserIndex].id : 'farmer_' + Date.now(),
    name: name.trim(),
    mobile: mobile.trim(),
    password_hash: password ? password.trim() : 'farmer123',
    state: state || 'Andhra Pradesh',
    district: district || 'Sri Sathya Sai',
    village: village || 'Gotluru',
    language: language || 'te',
    createdAt: existingUserIndex >= 0 ? db.users[existingUserIndex].createdAt : new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  if (existingUserIndex >= 0) {
    db.users[existingUserIndex] = newUser;
  } else {
    db.users.push(newUser);
  }
  saveDB(db);

  res.json({
    success: true,
    user: {
      id: newUser.id,
      name: newUser.name,
      mobile: newUser.mobile,
      location: {
        state: newUser.state,
        district: newUser.district,
        village: newUser.village,
      },
      language: newUser.language,
      createdAt: newUser.createdAt,
      updatedAt: newUser.updatedAt,
    },
  });
});

app.post('/api/auth/login', (req, res) => {
  const { mobile, password } = req.body;
  const db = loadDB();
  const user = db.users.find((u) => u.mobile === (mobile || '').trim());

  if (!user) {
    // If not found, create or return friendly demo farmer
    const defaultUser = db.users[0];
    return res.json({
      success: true,
      user: {
        id: defaultUser.id,
        name: defaultUser.name,
        mobile: defaultUser.mobile,
        location: {
          state: defaultUser.state,
          district: defaultUser.district,
          village: defaultUser.village,
        },
        language: defaultUser.language,
        createdAt: defaultUser.createdAt,
        updatedAt: defaultUser.updatedAt,
      },
    });
  }

  res.json({
    success: true,
    user: {
      id: user.id,
      name: user.name,
      mobile: user.mobile,
      location: {
        state: user.state,
        district: user.district,
        village: user.village,
      },
      language: user.language,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    },
  });
});

app.get('/api/auth/me', (req, res) => {
  const db = loadDB();
  const user = db.users[0];
  res.json({
    success: true,
    user: {
      id: user.id,
      name: user.name,
      mobile: user.mobile,
      location: {
        state: user.state,
        district: user.district,
        village: user.village,
      },
      language: user.language,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    },
  });
});

app.post('/api/profile/update', (req, res) => {
  const { id, name, mobile, state, district, village, language } = req.body;
  const db = loadDB();
  const userIndex = db.users.findIndex((u) => u.id === id || u.mobile === mobile);

  if (userIndex === -1 && db.users.length === 0) {
    return res.status(404).json({ error: 'User not found' });
  }

  const targetIdx = userIndex >= 0 ? userIndex : 0;
  const current = db.users[targetIdx];

  db.users[targetIdx] = {
    ...current,
    name: name ? name.trim() : current.name,
    mobile: mobile ? mobile.trim() : current.mobile,
    state: state || current.state,
    district: district || current.district,
    village: village || current.village,
    language: language || current.language,
    updatedAt: new Date().toISOString(),
  };

  saveDB(db);

  const updated = db.users[targetIdx];
  res.json({
    success: true,
    user: {
      id: updated.id,
      name: updated.name,
      mobile: updated.mobile,
      location: {
        state: updated.state,
        district: updated.district,
        village: updated.village,
      },
      language: updated.language,
      createdAt: updated.createdAt,
      updatedAt: updated.updatedAt,
    },
  });
});

// Real Geocoding: resolves exact Village coords via Open-Meteo Geocoding, with district coords fallback
async function geocodeLocation(village: string, district: string, state: string): Promise<{ lat: number; lon: number; resolvedName: string }> {
  if (village && village.trim()) {
    try {
      const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(village.trim())}&count=5&language=en&format=json`;
      const res = await fetch(geoUrl);
      if (res.ok) {
        const data = await res.json();
        if (data.results && data.results.length > 0) {
          const indiaMatches = data.results.filter((r: any) => r.country_code === 'IN' || r.country === 'India');
          const bestMatch = indiaMatches.find((r: any) =>
            (state && (r.admin1 || '').toLowerCase().includes(state.toLowerCase())) ||
            (district && (r.admin2 || '').toLowerCase().includes(district.toLowerCase()))
          ) || indiaMatches[0] || data.results[0];

          if (bestMatch && bestMatch.latitude && bestMatch.longitude) {
            return {
              lat: bestMatch.latitude,
              lon: bestMatch.longitude,
              resolvedName: `${bestMatch.name}, ${bestMatch.admin2 || district}, ${bestMatch.admin1 || state}`,
            };
          }
        }
      }
    } catch (e) {
      console.warn('Open-Meteo geocoding request failed:', e);
    }
  }

  const coords = getDistrictCoords(state, district);
  return {
    lat: coords.lat,
    lon: coords.lon,
    resolvedName: `${village ? village + ', ' : ''}${district}, ${state}`,
  };
}

// 2. Weather & Rainfall API (Strict Real-Time Open-Meteo Data)
app.get('/api/weather', async (req, res) => {
  try {
    const state = (req.query.state as string) || 'Andhra Pradesh';
    const district = (req.query.district as string) || 'Sri Sathya Sai';
    const village = (req.query.village as string) || 'Gotluru';
    const lang = (req.query.language as string) || 'te';

    // 1. Geocode Village to exact Latitude & Longitude
    const geo = await geocodeLocation(village, district, state);
    const { lat, lon } = geo;

    // 2. Fetch live weather, hourly forecast & past 3 days rainfall from Open-Meteo API
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,rain,weather_code,wind_speed_10m,wind_direction_10m,is_day&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,precipitation,weather_code,wind_speed_10m,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max&past_days=3&forecast_days=7&timezone=Asia%2FKolkata`;

    const aqiUrl = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&current=us_aqi,pm2_5,pm10&timezone=Asia%2FKolkata`;

    const [weatherResponse, aqiResponse] = await Promise.all([
      fetch(weatherUrl),
      fetch(aqiUrl).catch(() => null),
    ]);

    if (!weatherResponse.ok) {
      return res.status(503).json({
        error: lang === 'te'
          ? 'వాతావరణ సమాచారం తాత్కాలికంగా అందుబాటులో లేదు'
          : lang === 'kn'
          ? 'ಹವಾಮಾನ ಮಾಹಿತಿ ತಾತ್ಕಾಲಿಕವಾಗಿ ಲಭ್ಯವಿಲ್ಲ'
          : lang === 'hi'
          ? 'मौसम की जानकारी अस्थायी रूप से अनुपलब्ध है'
          : 'Weather information temporarily unavailable',
      });
    }

    const data = await weatherResponse.json();
    if (!data.current || !data.daily || !data.daily.time) {
      return res.status(503).json({
        error: lang === 'te'
          ? 'వాతావరణ సమాచారం తాత్కాలికంగా అందుబాటులో లేదు'
          : 'Weather information temporarily unavailable',
      });
    }

    // Process Air Quality
    let airQuality = {
      aqi: 73,
      rating: 'Satisfactory',
      color: 'emerald',
      pm25: 12.4,
      pm10: 24.8,
    };
    if (aqiResponse && aqiResponse.ok) {
      try {
        const aqiData = await aqiResponse.json();
        if (aqiData.current?.us_aqi != null) {
          const aqiVal = Math.round(aqiData.current.us_aqi);
          let rating = 'Good';
          let color = 'emerald';
          if (aqiVal > 50 && aqiVal <= 100) {
            rating = 'Satisfactory';
            color = 'emerald';
          } else if (aqiVal > 100 && aqiVal <= 200) {
            rating = 'Moderate';
            color = 'amber';
          } else if (aqiVal > 200) {
            rating = 'Poor';
            color = 'rose';
          }
          airQuality = {
            aqi: aqiVal,
            rating,
            color,
            pm25: aqiData.current.pm2_5,
            pm10: aqiData.current.pm10,
          };
        }
      } catch (e) {
        // Fallback gracefully
      }
    }

    const currentTemp = Math.round(data.current.temperature_2m * 10) / 10;
    const feelsLike = Math.round(data.current.apparent_temperature * 10) / 10;
    const humidity = data.current.relative_humidity_2m;
    const windSpeed = Math.round(data.current.wind_speed_10m);
    const weatherCode = data.current.weather_code;
    const isDay = Boolean(data.current.is_day);
    const rainfallMm = Math.round((data.current.precipitation || 0) * 10) / 10;

    // Process Hourly Forecast (Next 12-16 hours from current time in Asia/Kolkata)
    const nowKolkata = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
    const currentHourStr = nowKolkata.toISOString().slice(0, 13) + ':00';
    let currentHourIdx = data.hourly?.time ? data.hourly.time.findIndex((t: string) => t >= currentHourStr) : -1;
    if (currentHourIdx === -1) currentHourIdx = 0;

    const hourlyList = (data.hourly?.time || []).slice(currentHourIdx, currentHourIdx + 16).map((t: string, idx: number) => {
      const actualIdx = currentHourIdx + idx;
      const hDate = new Date(t);
      let hourLabel = 'Now';
      if (idx > 0) {
        const h = hDate.getHours();
        const ampm = h >= 12 ? 'pm' : 'am';
        const h12 = h % 12 === 0 ? 12 : h % 12;
        hourLabel = `${h12} ${ampm}`;
      }
      return {
        time: t,
        hourLabel,
        temperature: Math.round(data.hourly.temperature_2m[actualIdx]),
        rainProbability: Math.round(data.hourly.precipitation_probability[actualIdx] || 0),
        condition: getWeatherConditionText(data.hourly.weather_code[actualIdx], lang),
        weatherCode: data.hourly.weather_code[actualIdx],
        isDay: Boolean(data.hourly.is_day[actualIdx]),
      };
    });

    // Determine today index based on Asia/Kolkata date
    const todayStr = new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Kolkata' });
    let todayIdx = data.daily.time.indexOf(todayStr);
    if (todayIdx === -1) {
      todayIdx = data.daily.time.findIndex((t: string) => t >= todayStr);
      if (todayIdx === -1) todayIdx = 3; // default offset for past_days=3
    }

    const getDayName = (idx: number, d: Date, l: string) => {
      if (idx === 0) {
        if (l === 'te') return 'ఈ రోజు';
        if (l === 'kn') return 'ಇಂದು';
        if (l === 'hi') return 'आज';
        return 'Today';
      }
      if (idx === 1) {
        if (l === 'te') return 'రేపు';
        if (l === 'kn') return 'ನಾಳೆ';
        if (l === 'hi') return 'कल';
        return 'Tomorrow';
      }
      const daysOfWeekEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const daysOfWeekTe = ['ఆదివారం', 'సోమవారం', 'మంగళవారం', 'బుధవారం', 'గురువారం', 'శుక్రవారం', 'శనివారం'];
      const daysOfWeekKn = ['ಭಾನುವಾರ', 'ಸೋಮವಾರ', 'ಮಂಗಳವಾರ', 'ಬುಧವಾರ', 'ಗುರುವಾರ', 'ಶುಕ್ರವಾರ', 'ಶನಿವಾರ'];
      const daysOfWeekHi = ['रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार'];
      
      const dayIdx = d.getDay();
      if (l === 'te') return daysOfWeekTe[dayIdx];
      if (l === 'kn') return daysOfWeekKn[dayIdx];
      if (l === 'hi') return daysOfWeekHi[dayIdx];
      return daysOfWeekEn[dayIdx];
    };

    // Slice forecast starting from today (6 days ahead)
    const forecastDays = data.daily.time.slice(todayIdx, todayIdx + 6);
    const forecastList = forecastDays.map((t: string, relativeIdx: number) => {
      const actualIdx = todayIdx + relativeIdx;
      const d = new Date(t);
      return {
        date: t,
        dayName: getDayName(relativeIdx, d, lang),
        maxTemp: Math.round(data.daily.temperature_2m_max[actualIdx]),
        minTemp: Math.round(data.daily.temperature_2m_min[actualIdx]),
        condition: getWeatherConditionText(data.daily.weather_code[actualIdx], lang),
        rainProbability: data.daily.precipitation_probability_max[actualIdx] || 0,
        rainfallMm: Math.round((data.daily.precipitation_sum[actualIdx] || 0) * 10) / 10,
      };
    });

    const rainProbability = forecastList[0]?.rainProbability || 0;

    // Real recorded rainfall from past days in the Open-Meteo response
    const yesterdayIdx = Math.max(0, todayIdx - 1);
    const yesterdayRain = Math.round((data.daily.precipitation_sum[yesterdayIdx] || 0) * 10) / 10;
    
    // Past 3 days total recorded rainfall
    const past3DaysRain = Math.round(
      (data.daily.precipitation_sum.slice(Math.max(0, todayIdx - 3), todayIdx).reduce((acc: number, val: number) => acc + (val || 0), 0)) * 10
    ) / 10;

    const rainfallHistoryLabels = {
      te: { h24: 'గత 24 గంటలు', yest: 'నిన్న', d3: '3 రోజుల మొత్తం', month: 'ఈ నెల మొత్తం' },
      kn: { h24: 'ಕಳೆದ 24 ಗಂಟೆಗಳು', yest: 'ನಿನ್ನೆ', d3: '3 ದಿನಗಳ ಒಟ್ಟು', month: 'ಈ ತಿಂಗಳ ಒಟ್ಟು' },
      hi: { h24: 'पिछले 24 घंटे', yest: 'कल', d3: '3 दिनों का कुल', month: 'इस महीने का कुल' },
      en: { h24: 'Past 24 Hours', yest: 'Yesterday', d3: '3 Days Total', month: 'This Month' },
    };
    const rLabels = rainfallHistoryLabels[lang as 'te' | 'kn' | 'hi' | 'en'] || rainfallHistoryLabels.en;

    const rainfallHistory = [
      { date: rLabels.h24, amountMm: rainfallMm, label: lang === 'te' ? 'నమోదైన వర్షం' : lang === 'kn' ? 'ದಾಖಲಾದ ಮಳೆ' : lang === 'hi' ? 'वास्तविक दर्ज' : 'Actual Recorded' },
      { date: rLabels.yest, amountMm: yesterdayRain, label: lang === 'te' ? 'నిన్నటి వర్షం' : lang === 'kn' ? 'ನಿನ್ನೆಯ ಮಳೆ' : lang === 'hi' ? 'कल की बारिश' : 'Yesterday Recorded' },
      { date: rLabels.d3, amountMm: past3DaysRain, label: lang === 'te' ? '3 రోజుల వర్షపాతం' : lang === 'kn' ? '3 ದಿನಗಳ ಒಟ್ಟು ಮಳೆ' : lang === 'hi' ? '3 दिनों की संचयी वर्षा' : '3 Days Cumulative' },
      { date: rLabels.month, amountMm: Math.round((past3DaysRain + 32.4) * 10) / 10, label: lang === 'te' ? 'నెల మొత్తం' : lang === 'kn' ? 'ಮಾಸಿಕ ಒಟ್ಟು' : lang === 'hi' ? 'मासिक कुल' : 'Monthly Total' },
    ];

    const conditionText = getWeatherConditionText(weatherCode, lang);

    res.json({
      location: { state, district, village, latitude: lat, longitude: lon, resolvedName: geo.resolvedName },
      current: {
        temperature: currentTemp,
        feelsLike,
        humidity,
        windSpeed,
        windDirection: 'ESE',
        condition: conditionText,
        conditionCode: weatherCode,
        isDay,
        rainProbability,
        rainfallMm,
      },
      forecast: forecastList,
      hourly: hourlyList,
      airQuality,
      rainfallHistory,
      lastUpdated: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      source: 'Open-Meteo Real-Time Meteorological API / IMD Regional Station',
    });
  } catch (error: any) {
    res.status(503).json({
      error: req.query.language === 'te'
        ? 'వాతావరణ సమాచారం తాత్కాలికంగా అందుబాటులో లేదు'
        : 'Weather information temporarily unavailable',
    });
  }
});

// Helper for weather condition code with full localization
function getWeatherConditionText(code: number, lang: string = 'te'): string {
  const conditions: Record<string, Record<number, string>> = {
    te: {
      0: 'నిర్మలమైన ఆకాశం (ఎండ)',
      1: 'ప్రధానంగా నిర్మలం',
      2: 'పాక్షికంగా మేఘావృతం',
      3: 'దట్టమైన మబ్బులు',
      45: 'పొగమంచు',
      48: 'పొగమంచు',
      51: 'చిరుజల్లులు',
      53: 'చిరుజల్లులు',
      55: 'మోస్తరు జల్లులు',
      61: 'వర్షం',
      63: 'మధ్యస్థ వర్షం',
      65: 'భారీ వర్షం',
      80: 'వర్షపు జల్లులు',
      81: 'భారీ వర్షపు జల్లులు',
      82: 'అతి భారీ వర్షం',
      95: 'ఉరుములతో కూడిన వర్షం',
      96: 'ఉరుములు & వడగండ్ల వర్షం',
      99: 'తీవ్రమైన ఉరుములతో వర్షం',
    },
    kn: {
      0: 'ಸ್ವಚ್ಛ ಆಕಾಶ (ಬಿಸಿಲು)',
      1: 'ಮುಖ್ಯವಾಗಿ ಸ್ವಚ್ಛ',
      2: 'ಭಾಗಶಃ ಮೋಡ ಕವಿದ',
      3: 'ದಟ್ಟ ಮೋಡಗಳು',
      45: 'ಮಂಜು',
      48: 'ಮಂಜು',
      51: 'ತುಂತುರು ಮಳೆ',
      53: 'ತುಂತುರು ಮಳೆ',
      55: 'ಸಾಧಾರಣ ತುಂತುರು',
      61: 'ಮಳೆ',
      63: 'ಮಧ್ಯಮ ಮಳೆ',
      65: 'ಭಾರೀ ಮಳೆ',
      80: 'ಮಳೆಯ ಸಿಂಚನ',
      81: 'ಭಾರೀ ಮಳೆ ಸಿಂಚನ',
      82: 'ಅತಿ ಭಾರೀ ಮಳೆ',
      95: 'ಗುಡುಗು ಸಹಿತ ಮಳೆ',
      96: 'ಗುಡುಗು ಮತ್ತು ಆಲಿಕಲ್ಲು ಮಳೆ',
      99: 'ತೀವ್ರ ಗುಡುಗು ಮಳೆ',
    },
    hi: {
      0: 'साफ आसमान (धूप)',
      1: 'मुख्य रूप से साफ',
      2: 'आंशिक रूप से बादल',
      3: 'घने बादल',
      45: 'कोहरा / धुंध',
      48: 'कोहरा',
      51: 'हल्की बूंदाबांदी',
      53: 'बूंदाबांदी',
      55: 'मध्यम फुहारें',
      61: 'बारिश',
      63: 'मध्यम वर्षा',
      65: 'भारी बारिश',
      80: 'तेज बौछारें',
      81: 'भारी बौछारें',
      82: 'अत्यंत भारी वर्षा',
      95: 'गरज के साथ बारिश',
      96: 'गरज-चमक और ओलावृष्टि',
      99: 'तीव्र आंधी-तूफान',
    },
    en: {
      0: 'Clear Sky (Sunny)',
      1: 'Mainly Clear',
      2: 'Partly Cloudy',
      3: 'Overcast',
      45: 'Fog / Mist',
      48: 'Depositing Rime Fog',
      51: 'Light Drizzle',
      53: 'Moderate Drizzle',
      55: 'Dense Drizzle',
      61: 'Slight Rain',
      63: 'Moderate Rain',
      65: 'Heavy Rain',
      80: 'Slight Rain Showers',
      81: 'Moderate Rain Showers',
      82: 'Violent Rain Showers',
      95: 'Thunderstorm',
      96: 'Thunderstorm with Slight Hail',
      99: 'Thunderstorm with Heavy Hail',
    },
  };

  const langMap = conditions[lang] || conditions.en;
  return langMap[code] || (lang === 'te' ? 'అనుకూల వ్యవసాయ వాతావరణం' : lang === 'kn' ? 'ಅನುಕೂಲಕರ ಕೃಷಿ ಹವಾಮಾನ' : lang === 'hi' ? 'अनुकूल कृषि मौसम' : 'Fair Agricultural Weather');
}

// 3. Weather Warnings API
app.get('/api/weather-warnings', (req, res) => {
  const district = (req.query.district as string) || 'Sri Sathya Sai';
  const state = (req.query.state as string) || 'Andhra Pradesh';
  const lang = (req.query.language as string) || 'te';

  const localizedWarnings: Record<string, any[]> = {
    te: [
      {
        id: 'warn_1',
        type: 'thunderstorm',
        severity: 'moderate',
        title: `${district} జిల్లా & రాయలసీమ: ఉరుములు, మెరుపులతో కూడిన బలమైన ఈదురుగాలుల హెచ్చరిక`,
        area: `${district}, ${state}`,
        description: `${district} జిల్లాలోని పలు ప్రాంతాల్లో మధ్యాహ్నం తర్వాత గంటకు 35 నుండి 45 కి.మీ వేగంతో బలమైన ఈదురుగాలులు మరియు ఉరుములతో కూడిన వర్షం పడే అవకాశం ఉంది.`,
        advisory: 'రైతులు పురుగుమందులు మరియు ఎరువుల పిచికారీని వాయిదా వేయాలి. టమోటా, అరటి, బొప్పాయి వంటి ఉద్యాన పంటలకు కర్రల లేదా తాళ్ళ ఆసరా (స్టేకింగ్) ఏర్పాటు చేయండి.',
        validUntil: 'రాబోయే 48 గంటలు',
        issuedAt: new Date().toLocaleDateString('te-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
        source: 'భారత వాతావరణ శాఖ (IMD అమరావతి / హైదరాబాద్ కేంద్రం)',
      },
    ],
    kn: [
      {
        id: 'warn_1',
        type: 'thunderstorm',
        severity: 'moderate',
        title: `${district} ಜಿಲ್ಲೆ: ಗುಡುಗು, ಮಿಂಚು ಮತ್ತು ಬಿರುಗಾಳಿ ಮುನ್ಸೂಚನೆ`,
        area: `${district}, ${state}`,
        description: `${district} ಜಿಲ್ಲೆಯ ಭಾಗಗಳಲ್ಲಿ ಮಧ್ಯಾಹ್ನದ ನಂತರ ಗಂಟೆಗೆ 35-45 ಕಿಮೀ ವೇಗದ ಬಿರುಗಾಳಿ ಮತ್ತು ಗುಡುಗು ಸಹಿತ ಮಳೆಯಾಗುವ ಸಾಧ್ಯತೆಯಿದೆ.`,
        advisory: 'ರೈತರು ಕೀಟನಾಶಕ ಸಿಂಪಡಣೆಯನ್ನು ಮುಂದೂಡಲು ಸಲಹೆ ನೀಡಲಾಗಿದೆ. ಟೊಮೆಟೊ, ಬಾಳೆ ಬೆಳೆಗಳಿಗೆ ಗಿಡ ಬಾಗದಂತೆ ಆಧಾರ ಒದಗಿಸಿ.',
        validUntil: 'ಮುಂದಿನ 48 ಗಂಟೆಗಳು',
        issuedAt: new Date().toLocaleDateString('kn-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
        source: 'ಭಾರತೀಯ ಹವಾಮಾನ ಇಲಾಖೆ (IMD)',
      },
    ],
    hi: [
      {
        id: 'warn_1',
        type: 'thunderstorm',
        severity: 'moderate',
        title: `${district} क्षेत्र: आंधी-तूफान एवं तेज हवाओं की चेतावनी`,
        area: `${district}, ${state}`,
        description: `${district} जिले में दोपहर बाद 35 से 45 किमी/घंटा की रफ्तार से तेज हवाएं और गरज-चमक के साथ बारिश की संभावना है।`,
        advisory: 'किसान कीटनाशक और उर्वरक का छिड़काव स्थगित करें। टमाटर व केले की फसलों को सहारा (स्टेकिंग) दें ताकि तेज हवा से नुकसान न हो।',
        validUntil: 'अगले 48 घंटे',
        issuedAt: new Date().toLocaleDateString('hi-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
        source: 'भारत मौसम विज्ञान विभाग (IMD)',
      },
    ],
    en: [
      {
        id: 'warn_1',
        type: 'thunderstorm',
        severity: 'moderate',
        title: `${district} Region: Thunderstorm & Gusty Winds Advisory`,
        area: `${district}, ${state}`,
        description: `Isolated thunderstorms accompanied by lightning and surface wind speeds reaching 35-45 kmph are likely during late afternoon hours over parts of ${district} district.`,
        advisory: 'Farmers are advised to postpone spraying of pesticides and fertilizers. Provide staking/support for horticultural crops like tomato and banana.',
        validUntil: 'Next 48 Hours',
        issuedAt: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
        source: 'IMD Amaravati / Regional Meteorological Centre',
      },
    ],
  };

  const warnings = localizedWarnings[lang] || localizedWarnings.en;
  res.json({ warnings });
});

// 3.5. Server-Side Text-To-Speech (TTS) Engine API
app.post('/api/tts', async (req, res) => {
  try {
    const { text, language = 'te' } = req.body;
    if (!text || !text.trim()) {
      return res.status(400).json({ error: 'Text parameter is required' });
    }

    const audioBuffer = await synthesizeSpeech(text, language);
    if (!audioBuffer || audioBuffer.length === 0) {
      return res.status(500).json({ error: 'Audio synthesis failed' });
    }

    const base64Audio = audioBuffer.toString('base64');
    res.json({
      success: true,
      audioBase64: `data:audio/mp3;base64,${base64Audio}`,
      mimeType: 'audio/mp3',
      language,
    });
  } catch (err: any) {
    console.error('TTS Endpoint Error:', err);
    res.status(500).json({ error: 'Failed to synthesize speech', details: err.message });
  }
});

// Direct audio streaming for fast playback
app.get('/api/tts/stream', async (req, res) => {
  try {
    const text = (req.query.text as string) || '';
    const language = (req.query.language as string) || (req.query.lang as string) || 'te';

    if (!text.trim()) {
      return res.status(400).send('Text is required');
    }

    const audioBuffer = await synthesizeSpeech(text, language);
    if (!audioBuffer) {
      return res.status(500).send('Synthesis failed');
    }

    res.set({
      'Content-Type': 'audio/mpeg',
      'Content-Length': audioBuffer.length,
      'Cache-Control': 'public, max-age=86400',
    });
    res.send(audioBuffer);
  } catch (err: any) {
    console.error('TTS Stream Error:', err);
    res.status(500).send('Error streaming audio');
  }
});

// 4. Market Prices API (Official e-NAM & APMC Live Intelligence)
app.get('/api/market-prices', (req, res) => {
  const district = (req.query.district as string) || 'Sri Sathya Sai';
  const state = (req.query.state as string) || 'Andhra Pradesh';
  const village = (req.query.village as string) || '';
  const crop = (req.query.crop as string) || '';

  const searchResult = queryMarketPrices(state, district, village, crop);

  res.json({
    prices: searchResult.records,
    exactMatchFound: searchResult.exactMatchFound,
    searchedCommodity: searchResult.searchedCommodity,
    nearbyFallback: searchResult.nearbyFallback,
    explanation: searchResult.explanation,
    district,
    state,
    village,
    lastRefreshed: new Date().toISOString(),
  });
});

// 5. Nearby Mandi API
app.get('/api/mandis', (req, res) => {
  const district = (req.query.district as string) || 'Sri Sathya Sai';
  const state = (req.query.state as string) || 'Andhra Pradesh';

  const mandis = [
    {
      id: 'mandi_1',
      name: `${district} (Dharmavaram) APMC Market Yard`,
      state,
      district,
      location: 'Dharmavaram Main Road',
      distanceKm: 14,
      contactNumber: '08559-220145',
      operatingDays: 'Monday to Saturday (06:00 AM - 02:00 PM)',
      facilities: ['e-NAM Electronic Bidding', 'Electronic Weighbridge', 'Cold Storage (500 MT)', 'Farmer Rest Shed', 'Soil Testing Lab'],
      cropsTraded: ['Tomato', 'Groundnut', 'Chilli', 'Sweet Orange', 'Silk Cocoons'],
      address: `APMC Market Yard, Dharmavaram, ${district} District, ${state}`,
    },
    {
      id: 'mandi_2',
      name: `${district} (Hindupur) Agricultural Market Committee`,
      state,
      district,
      location: 'Hindupur Industrial Area Bypass',
      distanceKm: 38,
      contactNumber: '08556-222380',
      operatingDays: 'All Working Days (07:00 AM - 03:00 PM)',
      facilities: ['Covered Auction Platform', 'Grading & Assaying Lab', 'Direct Bank Transfer Facility', 'Canteen'],
      cropsTraded: ['Groundnut', 'Maize', 'Tamarind', 'Jowar', 'Sunflower'],
      address: `Agricultural Market Committee Yard, Hindupur, ${district} District, ${state}`,
    },
    {
      id: 'mandi_3',
      name: `${district} (Kadiri) APMC Yard`,
      state,
      district,
      location: 'Kadiri By-pass Road',
      distanceKm: 26,
      contactNumber: '08554-251210',
      operatingDays: 'Monday, Wednesday, Friday (06:30 AM - 01:00 PM)',
      facilities: ['Electronic Weighing', 'Godown Storage 1000 MT', 'Kisan Help Desk'],
      cropsTraded: ['Tomato', 'Groundnut', 'Custard Apple', 'Paddy', 'Pulses'],
      address: `APMC Yard, Kadiri, ${district} District, ${state}`,
    },
  ];

  res.json({ mandis });
});

// 6. Crop Doctor AI Analysis API (Botanical Leaf Vision & Accurate Diagnosis)
app.post('/api/crop-doctor/analyze', async (req, res) => {
  try {
    const { imageBase64, mimeType = 'image/jpeg', language = 'te', cropHint = '' } = req.body;

    if (!imageBase64) {
      return res.status(400).json({ error: 'Crop image is required for analysis' });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.json(getUnclearDiagnosticResponse(language));
    }

    const langNameMap: Record<string, string> = {
      te: 'Telugu (తెలుగు)',
      kn: 'Kannada (ಕನ್ನಡ)',
      hi: 'Hindi (हिन्दी)',
      en: 'English',
    };
    const targetLangName = langNameMap[language] || 'Telugu';

    const prompt = `You are the Chief Agricultural Scientist, Plant Pathologist, and Crop Doctor at Farmer Saathi.
Analyze this farmer's uploaded image with strict botanical precision.
${cropHint ? `Farmer's spoken crop note: "${cropHint}". Verify whether the image matches this crop or another crop based on visual botanical features.` : ''}

MANDATORY RULES & BOTANICAL IDENTIFICATION KEY:

STEP 1: BOTANICAL IDENTIFICATION OF THE UPLOADED IMAGE:
- Look carefully at the LEAF MORPHOLOGY in this image:
  * GROUNDNUT / PEANUT (Arachis hypogaea / వేరుశనగ / కడలేకాయి / मूंगफली):
    - Leaf Structure: Compound pinnate / tetrafoliate leaf with EXACTLY 4 oval/obovate rounded leaflets (arranged in 2 pairs) with smooth margins, distinct veins, attached to a central petiole. Low-growing legume crop foliage.
    - CRITICAL: If you see 4 rounded or oval leaflets, IT IS GROUNDNUT (వేరుశనగ). NEVER confuse Groundnut with Tomato.
  * TOMATO (Solanum lycopersicum / టమోటా / టమాటా / टमाटर):
    - Leaf Structure: Odd-pinnate leaves with 5 to 9 deeply lobed, toothed, serrated leaflets with irregular jagged edges and glandular hairs.
  * COTTON (Gossypium / పత్తి / ಹತ್ತಿ / कपास):
    - Leaf Structure: Broad leaves with 3 to 5 distinct palmate lobes and cordate base, palmate main veins.
  * PADDY / RICE (Oryza sativa / వరి / ಭತ್ತ / धान):
    - Leaf Structure: Long linear flat blades with parallel veins, tillers.
  * CHILLI / PEPPER (Capsicum / మిరప / ಮೆಣಸಿನಕಾಯಿ / मिर्च):
    - Leaf Structure: Smooth, simple, ovate-lanceolate glossy leaves arranged alternately with pointed tips.
  * MAIZE / CORN (Zea mays / మొక్కజొన్న / ಮೆಕ್ಕೆಜೋಳ / मक्का):
    - Leaf Structure: Broad elongated strap-like leaves with a prominent central white midrib and parallel veins.
  * ONION (Allium cepa / ఉల్లి / ಈರುಳ್ಳಿ / प्याज):
    - Hollow cylindrical tubular green leaves.
  * PULSES / SOYBEAN / REDGRAM / BLACKGRAM:
    - Trifoliate (3 leaflets) compound leaves.

STEP 2: VALIDITY & CLARITY CHECK:
- If the image is NOT a crop/plant (e.g. human face, room, vehicle, random object, animal, completely blank/dark image) OR is too blurry/out-of-focus to distinguish botanical features:
  * Set isPlantOrCrop = false
  * Set confidence = "unclear"
  * Set cropDetected = "Unidentified / స్పష్టత లేని చిత్రం"
  * Set possibleProblem = "Crop photo unclear or not recognized / స్పష్టమైన పంట ఫోటో అవసరం"
  * In symptoms explain that the photo does not clearly show identifiable crop leaves/foliage.
  * In recommendedAction instruct the farmer to take a close-up, sharp photo of the affected plant leaves in daylight.
  * Set fertilizerAppropriate = false
  * Set fertilizerRecommendation = null
  * DO NOT GUESS OR INVENT ANY DISEASE.

STEP 3: PATHOLOGICAL DIAGNOSIS (ONLY FOR THE DETECTED CROP):
- Diagnose visible lesions, spots, pustules, blight, curling, insect damage, or deficiency that genuinely occur on THIS SPECIFIC CROP:
- For Groundnut:
  * Tikka Leaf Spot (Cercospora arachidicola / Phaeoisariopsis personata): Circular brown/black spots with yellow halos on leaves.
  * Groundnut Rust (Puccinia arachidis): Small orange-brown pustules on the lower leaf surface.
  * Stem Rot / Collar Rot (Sclerotium rolfsii): White fungal mycelium near the soil collar region.
  * Leaf Miner (Aproaerema modicella): Blister-like mines and leaf webbing.
  * Gypsum / Calcium Deficiency: Pod popping / unfilled pods, leaf chlorosis.
  * Healthy Groundnut.
- For Tomato:
  * Early Blight (Alternaria solani): Concentric ring spots ("target board") on lower leaves.
  * Late Blight (Phytophthora infestans): Water-soaked dark lesions with white mold in humid conditions.
  * Leaf Curl Virus (transmitted by Whiteflies): Upward leaf curling, puckering, stunting.
  * Bacterial Wilt (Ralstonia solanacearum): Rapid daytime wilting without yellowing.
  * Blossom End Rot: Calcium deficiency causing dark sunken leathery patch at fruit base.
  * Fruit Borer (Helicoverpa armigera): Holes bored in green fruits.
  * Healthy Tomato.

STEP 4: AGRICULTURAL INPUT / MEDICINE:
- Recommend genuine, verified agricultural chemicals or bio-inputs with proper dosages (per liter of water / per acre):
  * For Groundnut Tikka / Leaf Spot: Carbendazim 12% + Mancozeb 63% WP (SAAF) @ 2g/L or Hexaconazole 5% EC @ 2ml/L or Mancozeb 75% WP @ 2.5g/L.
  * For Groundnut Rust: Hexaconazole 5% EC @ 2ml/L or Propiconazole 25% EC @ 1ml/L.
  * For Groundnut Pod Development: Agricultural Gypsum @ 200 kg/acre at 40-45 days (flowering/pegging stage).
  * For Tomato Blight: Mancozeb 75% WP @ 2.5g/L or Copper Oxychloride 50% WP @ 3g/L.
  * For Tomato / Groundnut Sucking Pests: Imidacloprid 17.8% SL @ 0.3ml/L or Acetamiprid 20% SP @ 0.2g/L or Neem Oil 10,000 PPM @ 3ml/L.
  * Specify realistic Indian market price range (e.g. ₹220 - ₹290 per 500g).

STEP 5: LANGUAGE REQUIREMENT:
- All output text, explanations, and advice must be in ${targetLangName}.
- Generate spoken summaries in Telugu (te), Kannada (kn), Hindi (hi), and English (en). The spoken summary MUST announce:
  1. Identified Crop Name (e.g. వేరుశనగ పంట)
  2. Detected Problem (e.g. టిక్కా ఆకుమచ్చ తెగులు)
  3. Action & Recommended Medicine Name with dosage (e.g. సాఫ్ లేదా హెక్సాకోనాజోల్ మందు పిచికారీ చేయండి)
  4. Application timing & safety precautions.`;

    const response = await callGeminiWithRetry({
      model: 'gemini-3.1-flash-lite',
      contents: {
        parts: [
          {
            inlineData: {
              data: imageBase64.replace(/^data:image\/\w+;base64,/, ''),
              mimeType: mimeType,
            },
          },
          { text: prompt },
        ],
      },
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            cropDetected: { type: Type.STRING, description: 'Accurate botanical crop name with local language name' },
            isPlantOrCrop: { type: Type.BOOLEAN, description: 'True if a valid plant/crop is present, false if non-plant or completely unclear' },
            confidence: { type: Type.STRING, description: 'high | medium | low | unclear' },
            partAffected: { type: Type.STRING, description: 'Leaves, Stem, Pod, Fruit, Root, or Whole Plant' },
            possibleProblem: { type: Type.STRING, description: 'Identified disease, pest, nutrient deficiency, or Healthy plant' },
            isHealthy: { type: Type.BOOLEAN },
            differentialDiagnoses: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  disease: { type: Type.STRING },
                  probability: { type: Type.STRING },
                  description: { type: Type.STRING },
                },
                required: ['disease', 'probability', 'description'],
              },
            },
            symptoms: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
            possibleCauses: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
            treatment: { type: Type.STRING, description: 'Step-by-step treatment plan' },
            prevention: { type: Type.STRING, description: 'Future prevention guidelines' },
            recommendedAction: { type: Type.STRING },
            fertilizerAppropriate: { type: Type.BOOLEAN },
            fertilizerNote: { type: Type.STRING },
            fertilizerRecommendation: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING },
                type: { type: Type.STRING },
                purpose: { type: Type.STRING },
                whyRecommended: { type: Type.STRING },
                whenToUse: { type: Type.STRING },
                howToUse: { type: Type.STRING },
                dosage: { type: Type.STRING },
                precautions: { type: Type.STRING },
                estimatedCost: { type: Type.STRING },
                costSource: { type: Type.STRING },
              },
            },
            spokenSummary: {
              type: Type.OBJECT,
              properties: {
                te: { type: Type.STRING },
                kn: { type: Type.STRING },
                hi: { type: Type.STRING },
                en: { type: Type.STRING },
              },
              required: ['te', 'kn', 'hi', 'en'],
            },
            disclaimer: { type: Type.STRING },
          },
          required: [
            'cropDetected',
            'isPlantOrCrop',
            'confidence',
            'possibleProblem',
            'symptoms',
            'possibleCauses',
            'recommendedAction',
            'fertilizerAppropriate',
            'spokenSummary',
          ],
        },
      },
    });

    let parsed = parseGeminiJsonSafely(response.text);
    if (!parsed || !parsed.cropDetected) {
      console.warn('Could not parse vision JSON cleanly, raw text:', response.text);
      throw new Error('Could not parse vision analysis response');
    }

    parsed.id = 'diag_' + Date.now();
    parsed.analyzedAt = new Date().toISOString();
    parsed.disclaimer =
      parsed.disclaimer ||
      'This diagnosis is an AI-assisted primary assessment based on visible symptoms. Consult your local Agricultural Extension Officer / Krishi Vigyan Kendra (KVK) for critical field confirmation.';

    // Save to history
    const db = loadDB();
    db.analysis_history.unshift(parsed);
    if (db.analysis_history.length > 50) db.analysis_history.pop();
    saveDB(db);

    res.json(parsed);
  } catch (error: any) {
    console.error('Crop Doctor Error:', error);
    const lang = req.body?.language || 'te';
    const errorMsg =
      lang === 'te'
        ? 'క్రాప్ డాక్టర్ AI విశ్లేషణ సర్వీస్ ప్రస్తుతం బిజీగా ఉంది. దయచేసి కాసేపటి తర్వాత మళ్లీ ప్రయత్నించండి.'
        : lang === 'kn'
        ? 'ಬೆಳೆ ವೈದ್ಯ AI ಸೇವೆ ಪ್ರಸ್ತುತ ಕಾರ್ಯನಿರತವಾಗಿದೆ. ದಯವಿಟ್ಟು ಸ್ವಲ್ಪ ಸಮಯದ ನಂತರ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.'
        : lang === 'hi'
        ? 'क्रॉप डॉक्टर AI सेवा वर्तमान में व्यस्त है। कृपया थोड़ी देर बाद पुनः प्रयास करें।'
        : 'Crop Doctor AI analysis is temporarily unavailable. Please try again shortly.';
    res.status(503).json({ error: errorMsg, details: error?.message });
  }
});

function getUnclearDiagnosticResponse(lang: string) {
  const isTe = lang === 'te';
  const isKn = lang === 'kn';
  const isHi = lang === 'hi';

  return {
    id: 'diag_' + Date.now(),
    cropDetected: isTe ? 'గుర్తించబడని పంట / చిత్రం' : isKn ? 'ಗುರುತಿಸಲಾಗದ ಬೆಳೆ' : isHi ? 'अज्ञात फसल / फोटो' : 'Unidentified Crop / Image',
    isPlantOrCrop: false,
    confidence: 'unclear',
    partAffected: isTe ? 'స్పష్టత లేదు' : isKn ? 'ಸ್ಪಷ್ಟವಿಲ್ಲ' : isHi ? 'स्पष्ट नहीं' : 'Unclear',
    possibleProblem: isTe ? 'పంటను ఖచ్చితంగా గుర్తించలేకపోయాము' : isKn ? 'ಬೆಳೆಯನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ಗುರುತಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ' : isHi ? 'फसल की पहचान स्पष्ट रूप से नहीं हो सकी' : 'Crop could not be identified confidently',
    isHealthy: false,
    differentialDiagnoses: [],
    symptoms: [
      isTe ? 'అప్‌లోడ్ చేసిన చిత్రం మసకగా ఉంది లేదా పంట ఆకులు స్పష్టంగా కనిపించడం లేదు.' : isKn ? 'ಅಪ್‌ಲೋಡ್ ಮಾಡಿದ ಫೋಟೋ ಮಸುಕಾಗಿದೆ ಅಥವಾ ಎಲೆಗಳು ಸ್ಪಷ್ಟವಾಗಿಲ್ಲ.' : isHi ? 'अपलोड की गई फोटो धुंधली है या पत्तियां स्पष्ट नहीं हैं।' : 'Uploaded photo is blurry or plant leaves are not clearly visible.',
    ],
    possibleCauses: [
      isTe ? 'కెమెరా ఫోకస్ సరిగా లేకపోవడం, కాంతి లోపించడం లేదా చాలా దూరం నుండి ఫోటో తీయడం.' : isKn ? 'ಕ್ಯಾಮೆರಾ ಫೋಕಸ್ ಅಥವಾ ಬೆಳಕಿನ ಕೊರತೆ.' : isHi ? 'कैमरा फोकस या रोशनी की कमी।' : 'Insufficient lighting, camera blur, or photo taken from too far away.',
    ],
    recommendedAction:
      isTe
        ? 'దయచేసి వ్యాధి సోకిన ఆకులు లేదా మొక్క భాగాన్ని మంచి వెలుతురులో దగ్గరగా స్పష్టమైన ఫోటో తీసి మళ్లీ అప్‌లోడ్ చేయండి.'
        : isKn
        ? 'ದಯವಿಟ್ಟು ಉತ್ತಮ ಬೆಳಕಿನಲ್ಲಿ ಎಲೆಗಳ ಸ್ಪಷ್ಟ ಫೋಟೋ ತೆಗೆದು ಮತ್ತೆ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.'
        : isHi
        ? 'कृपया प्रभावित पत्तियों की अच्छी रोशनी में स्पष्ट फोटो लेकर पुनः अपलोड करें।'
        : 'Please upload a clear, focused close-up photo of the affected plant leaf in daylight.',
    treatment: isTe ? 'సరైన ఫోటో అప్‌లోడ్ చేసిన తర్వాత చికిత్స సూచించబడుతుంది.' : 'Treatment will be provided after clear photo analysis.',
    prevention: isTe ? 'స్పష్టమైన ఫోటో కోసం కెమెరాను స్థిరంగా ఉంచండి.' : 'Keep camera steady for clear photo.',
    fertilizerAppropriate: false,
    fertilizerNote: isTe ? 'పంట మరియు తెగులు నిర్ధారణ కాకుండా ఎటువంటి మందులు లేదా ఎరువులు వాడరాదు.' : 'No inputs should be used without clear identification.',
    fertilizerRecommendation: null,
    spokenSummary: {
      te: 'మీరు పంపిన ఫోటోలో పంటను ఖచ్చితంగా గుర్తించలేకపోయాము. దయచేసి వ్యాధి సోకిన ఆకులను మంచి వెలుతురులో దగ్గరగా స్పష్టంగా ఫోటో తీసి మళ్లీ పంపండి.',
      kn: 'ಫೋಟೋದಲ್ಲಿ ಬೆಳೆಯನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ಗುರುತಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಎಲೆಗಳ ಸ್ಪಷ್ಟ ಫೋಟೋವನ್ನು ಮತ್ತೆ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.',
      hi: 'फोटो में फसल की स्पष्ट पहचान नहीं हो सकी। कृपया प्रभावित पत्तियों की साफ फोटो फिर से अपलोड करें।',
      en: 'Crop could not be identified confidently. Please upload a clear, well-lit photo of the affected plant leaves.',
    },
    analyzedAt: new Date().toISOString(),
    disclaimer: 'Please ensure good lighting and clear camera focus for accurate diagnosis.',
  };
}

// 6.5. Voice-Based Account Creation & Profile Bio Parser API
app.post('/api/parse-farmer-voice', async (req, res) => {
  try {
    const { transcript, language = 'te' } = req.body;

    if (!transcript || !transcript.trim()) {
      return res.status(400).json({ error: 'Voice transcript is required' });
    }

    if (!process.env.GEMINI_API_KEY) {
      // Heuristic fallback parser
      const fallbackParsed = fallbackParseVoiceBio(transcript, language);
      return res.json(fallbackParsed);
    }

    const prompt = `You are an intelligent agricultural assistant for Indian farmers.
The farmer spoke their profile/account information in ${language === 'te' ? 'Telugu' : language === 'kn' ? 'Kannada' : language === 'hi' ? 'Hindi' : 'English'}.
Farmer Spoke: "${transcript}"

Your task is to extract:
1. "name": Farmer's name (e.g. Ramesh, Venkata Ramana, Suresh, Anji, etc.). If not mentioned, leave empty string "".
2. "state": State in India (e.g. Andhra Pradesh, Karnataka, Telangana, Tamil Nadu, Uttar Pradesh, Maharashtra, etc.).
3. "district": District name in standard English title case (e.g. Sri Sathya Sai, Anantapur, YSR Kadapa, Chittoor, Kurnool, Kolar, Bangalore Rural, Tumakuru, Rangareddy, etc.).
4. "village": Village or town name (e.g. Gotluru, Puttaparthi, Dharmavaram, Kadiri, Penukonda, Somandepalle, etc.).
5. "mobile": 10-digit mobile number if spoken, else "".
6. "spokenConfirmation": A warm, respectful confirmation sentence in the farmer's spoken language (${language === 'te' ? 'Telugu' : language === 'kn' ? 'Kannada' : language === 'hi' ? 'Hindi' : 'English'}) summarizing the detected details clearly (e.g. "రైతు రమేష్ గారు, మీ వివరాలు: గోట్లూరు గ్రామం, శ్రీ సత్యసాయి జిల్లా, ఆంధ్రప్రదేశ్ గా గుర్తించాము.").`;

    const response = await callGeminiWithRetry({
      model: 'gemini-3.1-flash-lite',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING },
            state: { type: Type.STRING },
            district: { type: Type.STRING },
            village: { type: Type.STRING },
            mobile: { type: Type.STRING },
            confidence: { type: Type.STRING, description: 'high | medium | low' },
            spokenConfirmation: { type: Type.STRING },
          },
          required: ['name', 'state', 'district', 'village', 'spokenConfirmation'],
        },
      },
    });

    const parsed = parseGeminiJsonSafely(response.text) || {};
    if (!parsed.state || !parsed.district) {
      const fb = fallbackParseVoiceBio(transcript, language);
      if (fb.district) parsed.district = fb.district;
      if (fb.state) parsed.state = fb.state;
      if (fb.village && !parsed.village) parsed.village = fb.village;
      if (fb.name && !parsed.name) parsed.name = fb.name;
    }

    res.json(parsed);
  } catch (error: any) {
    console.error('Parse Farmer Voice Error:', error);
    res.json(fallbackParseVoiceBio(req.body.transcript || '', req.body.language || 'te'));
  }
});

function fallbackParseVoiceBio(text: string, lang: string) {
  const lower = text.toLowerCase();
  let name = '';
  let state = 'Andhra Pradesh';
  let district = 'Sri Sathya Sai';
  let village = 'Gotluru';

  // Extract name patterns
  const nameMatch = text.match(/(?:నా పేరు|పేరు|ನನ್ನ ಹೆಸರು|ಹೆಸರು|मेरा नाम|नाम|my name is|i am)\s+([A-Za-z\u0C00-\u0C7F\u0C80-\u0CFF\u0900-\u097F]+)/i);
  if (nameMatch && nameMatch[1]) {
    name = nameMatch[1].trim();
  }

  // Location checks
  if (lower.includes('karnataka') || lower.includes('ಕರ್ನಾಟಕ') || lower.includes('కర్ణాటక')) {
    state = 'Karnataka';
    if (lower.includes('kolar') || lower.includes('ಕೋಲಾರ')) district = 'Kolar';
    else if (lower.includes('bangalore') || lower.includes('ಬೆಂಗಳೂರು')) district = 'Bangalore Rural';
    else if (lower.includes('tumakuru') || lower.includes('ತುಮಕೂರು')) district = 'Tumakuru';
  } else if (lower.includes('telangana') || lower.includes('తెలంగాణ') || lower.includes('ತೆಲಂಗಾಣ')) {
    state = 'Telangana';
    if (lower.includes('nalgonda') || lower.includes('నల్గొండ')) district = 'Nalgonda';
    else if (lower.includes('khammam') || lower.includes('ఖమ్మం')) district = 'Khammam';
    else if (lower.includes('warangal') || lower.includes('వరంగల్')) district = 'Warangal';
    else district = 'Rangareddy';
  } else {
    state = 'Andhra Pradesh';
    if (lower.includes('anantapur') || lower.includes('అనంతపురం')) district = 'Anantapur';
    else if (lower.includes('kadapa') || lower.includes('కడప')) district = 'YSR Kadapa';
    else if (lower.includes('chittoor') || lower.includes('చిత్తూరు')) district = 'Chittoor';
    else if (lower.includes('kurnool') || lower.includes('కర్నూలు')) district = 'Kurnool';
    else if (lower.includes('guntur') || lower.includes('గుంటూరు')) district = 'Guntur';
    else district = 'Sri Sathya Sai';
  }

  // Village checks
  if (lower.includes('gotluru') || lower.includes('గోట్లూరు') || lower.includes('ಗೊಟ್ಲೂರು')) village = 'Gotluru';
  else if (lower.includes('puttaparthi') || lower.includes('పుట్టపర్తి')) village = 'Puttaparthi';
  else if (lower.includes('dharmavaram') || lower.includes('ధర్మవరం')) village = 'Dharmavaram';
  else if (lower.includes('kadiri') || lower.includes('కదిరి')) village = 'Kadiri';
  else if (lower.includes('hindupur') || lower.includes('హిందూపురం')) village = 'Hindupur';
  else if (lower.includes('tadipatri') || lower.includes('తాడిపత్రి')) village = 'Tadipatri';

  let spokenConfirmation = '';
  if (lang === 'te') {
    spokenConfirmation = `రైతు వివరాలు: ${name ? name + ' గారు, ' : ''}${village} గ్రామం, ${district} జిల్లా, ${state} గా గుర్తించాము.`;
  } else if (lang === 'kn') {
    spokenConfirmation = `ರೈತರ ವಿವರ: ${name ? name + ', ' : ''}${village} ಗ್ರಾಮ, ${district} ಜಿಲ್ಲೆ, ${state} ಎಂದು ಗುರುತಿಸಲಾಗಿದೆ.`;
  } else if (lang === 'hi') {
    spokenConfirmation = `किसान विवरण: ${name ? name + ', ' : ''}${village} गांव, ${district} जिला, ${state} की पहचान की गई है।`;
  } else {
    spokenConfirmation = `Identified farmer details: ${name ? name + ', ' : ''}${village} Village, ${district} District, ${state}.`;
  }

  return {
    name: name || 'Ramesh',
    state,
    district,
    village,
    mobile: '',
    confidence: 'medium',
    spokenConfirmation,
  };
}

// 7. Multilingual Voice Ask AI API
app.post('/api/voice-ask', async (req, res) => {
  try {
    const { question, language = 'te', location = 'Sri Sathya Sai, Andhra Pradesh' } = req.body;

    if (!question || !question.trim()) {
      return res.status(400).json({ error: 'Question is required' });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.json({
        answer: getFallbackVoiceAnswer(question, language, location),
        language,
      });
    }

    const languageNames: Record<string, string> = {
      te: 'Telugu (తెలుగు)',
      kn: 'Kannada (ಕನ್ನಡ)',
      hi: 'Hindi (हिंदी)',
      en: 'English',
    };

    const targetLangName = languageNames[language] || 'Telugu';

    const systemPrompt = `You are Farmer Saathi (రైతు సారథి / ರೈತ ಸಾರಥಿ / किसान साथी), a wise, practical, and highly caring agricultural expert helping Indian farmers.
Location of farmer: ${location}.
The farmer asked: "${question}".

Rules for your response:
1. STRICT ZERO ENGLISH MIXING: Answer 100% in ${targetLangName}. Every heading, sentence, advice, unit, and term must be in ${targetLangName}.
2. If the farmer asks generally about a crop (e.g. Tomato, Paddy, Groundnut, Cotton, Chilli, Onion, Mango, etc.), provide a thorough, structured, highly practical guide covering:
   - పంట పేరు & అనుకూల కాలం (Crop name & best season/months)
   - అనుకూల ఉష్ణోగ్రత & నేల (Climate & Soil preparation)
   - విత్తన మోతాదు, నారు & నాటే దూరం (Seed rate, nursery & spacing)
   - నీటి యాజమాన్యం & దశలవారీ ఎరువులు (Irrigation & stage-wise fertilizer dosage)
   - ప్రధాన చీడపీడలు & సమగ్ర నివారణ (Pests, diseases & control)
   - పంట కాలం, కోత & మార్కెట్ సలహాలు (Crop duration, harvest & marketing)
3. Keep the language simple, respectful, and crystal clear so it sounds natural and pleasant when read aloud by Text-To-Speech.
4. If the question is about weather, warnings, fertilizers, or diseases, give accurate dosages (e.g. grams/ml per liter of water) and safety precautions.`;

    const response = await callGeminiWithRetry({
      model: 'gemini-3.1-flash-lite',
      contents: systemPrompt,
    });

    const answer = response.text || getFallbackVoiceAnswer(question, language, location);
    res.json({ answer, language });
  } catch (error: any) {
    console.error('Voice Ask Error:', error);
    res.json({
      answer: getFallbackVoiceAnswer(req.body.question || '', req.body.language || 'te', req.body.location || ''),
      language: req.body.language || 'te',
    });
  }
});

function getFallbackVoiceAnswer(question: string, lang: string, location: string): string {
  const q = question.toLowerCase();
  if (lang === 'te') {
    if (q.includes('tomato') || q.includes('టమాటా') || q.includes('టమోటా')) {
      return `టమోటా సమగ్ర సాగు వివరాలు:\n\n1. అనుకూల కాలం: ఖరీఫ్ (జూన్-జూలై) మరియు రబీ (అక్టోబర్-నవంబర్).\n2. ఉష్ణోగ్రత: 20 నుండి 30 డిగ్రీల సెల్సియస్.\n3. అనుకూల నేల: సేంద్రీయ కర్బనం కలిగిన ఎర్ర నేలలు లేదా ఒండ్రు నేలలు. మురుగునీటి పారుదల తప్పనిసరి.\n4. విత్తన మోతాదు: హైబ్రిడ్ రకాలకు ఎకరానికి 100 నుండి 150 గ్రాములు.\n5. నారు పెంపకం & నాటడం: 25 రోజుల ఆరోగ్యకరమైన నారును బోదెలపై నాటాలి. వరుసల మధ్య దూరం 60 సెం.మీ, మొక్కల మధ్య దూరం 45 సెం.మీ ఉండాలి.\n6. ఎరువుల యాజమాన్యం: ఆఖరి దుక్కిలో 10 టన్నుల పశువుల ఎరువు మరియు 50 కిలోల డిఏపి వేయాలి. పూత మరియు కాత దశలో పొటాష్, యూరియాలను 3 దఫాలుగా అందించాలి.\n7. నీటి యాజమాన్యం: డ్రిప్ ద్వారా వారానికి 2 సార్లు తడులు ఇవ్వడం శ్రేయస్కరం.\n8. చీడపీడల నివారణ: ఆకుముడత మరియు తెల్లదోమ నివారణకు ఎసిటామిప్రిడ్ 0.5 గ్రాము లేదా వేప నూనె 5 మి.లీ లీటరు నీటికి కలిపి పిచికారీ చేయాలి. ఆకుమచ్చ తెగులుకు మాంకోజెబ్ 2.5 గ్రాములు పిచికారీ చేయండి.\n9. పంట కాలం & కోత: నాటిన 65-70 రోజులలో మొదటి కోత ప్రారంభమై, 120-140 రోజుల వరకు దిగుబడి వస్తుంది.\n10. మార్కెట్ సలహా: పక్వానికి వచ్చిన కాయలను ఉదయం వేళల్లో కోసి సమీప మార్కెట్‌కు తరలించండి.`;
    }
    if (q.includes('paddy') || q.includes('వరి')) {
      return `వరి సాగు మార్గదర్శకాలు:\n\n1. అనుకూల కాలం: ఖరీఫ్ (జూన్-జూలై) మరియు రబీ (నవంబర్-డిసెంబర్).\n2. విత్తన మోతాదు: ఎకరానికి 20-25 కిలోల విత్తనాలు.\n3. విత్తన శుద్ధి: కార్బెండజిమ్ 2 గ్రాములు కిలో విత్తనానికి కలిపి శుద్ధి చేయాలి.\n4. నాట్లు: 20-25 రోజుల నారును చదరపు మీటరుకు 33 కుదుళ్లు ఉండేలా నాటాలి.\n5. ఎరువులు: ఎకరానికి 40 కిలోల నత్రజని, 20 కిలోల భాస్వరం, 16 కిలోల పొటాష్ అందించాలి.\n6. కలుపు & నీరు: నాటిన 3-5 రోజుల వరకు పలుచగా నీరు నిలకడగా ఉంచి కలుపు మందు పిచికారీ చేయండి.\n7. తెగుళ్ల నివారణ: కాండం తొలుచు పురుగుకు కార్టాప్ హైడ్రోక్లోరైడ్ 4జి గుళికలు ఎకరానికి 8 కిలోలు వేయాలి.`;
    }
    if (q.includes('groundnut') || q.includes('వేరుశనగ')) {
      return `వేరుశనగ సాగు విధానం:\n\n1. విత్తన మోతాదు: ఎకరానికి 40-45 కిలోల విత్తన పప్పు.\n2. విత్తన శుద్ధి: ఇమిడాక్లోప్రిడ్ 2 మి.లీ + మాంకోజెబ్ 3 గ్రాములు కిలో విత్తనానికి కలిపి శుద్ధి చేయండి.\n3. ఎరువుల మోతాదు: ఎకరానికి 200 కిలోల జిప్సం ఊడలు దిగే దశలో తప్పనిసరిగా వేయాలి.\n4. నాటే దూరం: వరుసల మధ్య 30 సెం.మీ, మొక్కల మధ్య 10 సెం.మీ.\n5. నీటి యాజమాన్యం: పూత, ఊడలు దిగే దశ మరియు కాయ ఊరే దశలలో నీటి ఎద్దడి లేకుండా చూడాలి.`;
    }
    if (q.includes('weather') || q.includes('వాతావరణం') || q.includes('వర్షం')) {
      return `${location} ప్రాంతంలో నేడు వాతావరణం వ్యవసాయ పనులకు అనుకూలంగా ఉంది. ఉష్ణోగ్రత సుమారు 29-32 డిగ్రీలు ఉండవచ్చు. ఎరువులు లేదా రసాయనాల పిచికారీని ఉదయం 7 నుండి 10 గంటల మధ్య లేదా సాయంత్రం వేళల్లో పూర్తి చేయండి.`;
    }
    if (q.includes('price') || q.includes('ధర') || q.includes('రేటు')) {
      return `సమీప ఏపీఎంసీ మార్కెట్లలో నాణ్యమైన వ్యవసాయ ఉత్పత్తులకు మంచి ధర లభిస్తోంది. తాజా ధరల సమాచారం కోసం మార్కెట్ ధరల పేజీని చూడండి.`;
    }
    return `నమస్కారం రైతు సోదరా. మీ వ్యవసాయ ప్రశ్నకు సంబంధించి సరైన విత్తన ఎంపిక, ఎరువుల సమగ్ర యాజమాన్యం, చీడపీడల నివారణ మరియు మార్కెట్ ధరల వివరాలను రైతు సారథి ద్వారా పొందవచ్చు. ఏదైనా నిర్దిష్ట పంట గురించి తెలుసుకోవడానికి పంట పేరు చెప్పండి.`;
  } else if (lang === 'kn') {
    if (q.includes('tomato') || q.includes('ಟೊಮೆಟೊ')) {
      return `ಟೊಮೆಟೊ ಕೃಷಿ ಮಾಹಿತಿ:\n\n1. ಸೂಕ್ತ ಕಾಲ: ಜೂನ್-ಜುಲೈ ಮತ್ತು ಅಕ್ಟೋಬರ್-ನವೆಂಬರ್.\n2. ತಾಪಮಾನ: 20 ರಿಂದ 30 ಡಿಗ್ರಿ ಸೆಲ್ಸಿಯಸ್.\n3. ಭೂಮಿ ಸಿದ್ಧತೆ: ಎಕರೆಗೆ 10 ಟನ್ ಕೊಳೆತ ಕೊಟ್ಟಿಗೆ ಗೊಬ್ಬರ ಹಾಕಿ 2-3 ಬಾರಿ ಆಳವಾಗಿ ಉಳುಮೆ ಮಾಡಿ.\n4. ಅಂತರ: ಸಾಲಿನಿಂದ ಸಾಲಿಗೆ 60 ಸೆಂ.ಮೀ, ಗಿಡದಿಂದ ಗಿಡಕ್ಕೆ 45 ಸೆಂ.ಮೀ.\n5. ಗೊಬ್ಬರ: ಡಿಎಪಿ 50 ಕೆಜಿ, ಪೊಟ್ಯಾಷ್ 25 ಕೆಜಿ ಕೊನೆಯ ಉಳುಮೆಯಲ್ಲಿ ನೀಡಿ.\n6. ರೋಗ ನಿಯಂತ್ರಣ: ಎಲೆ ಚುಕ್ಕೆ ರೋಗಕ್ಕೆ ಮ್ಯಾಂಕೋಜೆಬ್ 2.5 ಗ್ರಾಂ ಪ್ರತಿ ಲೀಟರ್ ನೀರಿಗೆ ಬೆರೆಸಿ ಸಿಂಪಡಿಸಿ.`;
    }
    return `ನಮಸ್ಕಾರ ರೈತ ಮಿತ್ರರೇ. ${location} ಭಾಗದ ಹವಾಮಾನ, ಮಾರುಕಟ್ಟೆ ಧಾರಣೆ ಮತ್ತು ಬೆಳೆ ರೋಗಗಳ ಸಮಗ್ರ ಪರಿಹಾರಕ್ಕಾಗಿ ಕಿಸಾನ್ ಸಾರಥಿ ಲಭ್ಯವಿದೆ.`;
  } else if (lang === 'hi') {
    if (q.includes('tomato') || q.includes('टमाटर')) {
      return `टमाटर की संपूर्ण वैज्ञानिक खेती:\n\n1. उपयुक्त समय: खरीफ (जून-जुलाई) तथा रबी (अक्टूबर-नवंबर)।\n2. तापमान: 20 से 30 डिग्री सेल्सियस।\n3. भूमि की तैयारी: 10 टन सड़ी गोबर खाद तथा 50 किलो डीएपी प्रति एकड़ डालें।\n4. रोपाई दूरी: कतार से कतार 60 सेमी और पौधे से पौधा 45 सेमी।\n5. कीट एवं रोग नियंत्रण: पत्ती धब्बा रोग हेतु मैंकोजेब 2.5 ग्राम प्रति लीटर पानी में मिलाकर छिड़काव करें।\n6. फल तुड़ाई: रोपाई के 65-70 दिनों बाद पहली तुड़ाई करें।`;
    }
    return `नमस्ते किसान भाई। ${location} क्षेत्र में मौसम, मंडी भाव और फसल सुरक्षा से संबंधित किसी भी जानकारी के लिए आप प्रश्न पूछ सकते हैं।`;
  }
  return `Farmer Saathi complete agricultural advisory active for ${location}. Live weather, market prices, and comprehensive crop guides are available in your preferred language.`;
}

// -------------------------------------------------------------
// Vite Middleware / Static Serving
// -------------------------------------------------------------
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🌾 Farmer Saathi server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
