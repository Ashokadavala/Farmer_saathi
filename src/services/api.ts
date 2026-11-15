import { CropDoctorResult, FarmerLocation, MarketPriceRecord, MandiInfo, WeatherData, WeatherWarning, UserProfile } from '../types';

export const api = {
  // Auth & Profile
  async register(data: { name: string; mobile: string; state: string; district: string; village: string; language: string; password?: string }): Promise<UserProfile> {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json.error || 'Registration failed');
    return json.user;
  },

  async login(mobile: string, password?: string): Promise<UserProfile> {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mobile, password }),
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json.error || 'Login failed');
    return json.user;
  },

  async getMe(): Promise<UserProfile> {
    const res = await fetch('/api/auth/me');
    const json = await res.json();
    return json.user;
  },

  async updateProfile(data: { id?: string; name: string; mobile: string; state: string; district: string; village: string; language: string }): Promise<UserProfile> {
    const res = await fetch('/api/profile/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json.error || 'Update failed');
    return json.user;
  },

  // Weather & Warnings
  async getWeather(loc: FarmerLocation, language: string = 'te'): Promise<WeatherData> {
    const params = new URLSearchParams({
      state: loc.state,
      district: loc.district,
      village: loc.village,
      language: language,
    });
    const res = await fetch(`/api/weather?${params.toString()}`);
    if (!res.ok) throw new Error('Failed to fetch weather');
    return res.json();
  },

  async getWeatherWarnings(loc: FarmerLocation, language: string = 'te'): Promise<WeatherWarning[]> {
    const params = new URLSearchParams({
      state: loc.state,
      district: loc.district,
      language: language,
    });
    const res = await fetch(`/api/weather-warnings?${params.toString()}`);
    if (!res.ok) return [];
    const data = await res.json();
    return data.warnings || [];
  },

  // Market Prices & Mandis
  async getMarketPrices(loc: FarmerLocation, crop?: string): Promise<MarketPriceRecord[]> {
    const params = new URLSearchParams({
      state: loc.state,
      district: loc.district,
      crop: crop || '',
    });
    const res = await fetch(`/api/market-prices?${params.toString()}`);
    if (!res.ok) return [];
    const data = await res.json();
    return data.prices || [];
  },

  async getNearbyMandis(loc: FarmerLocation): Promise<MandiInfo[]> {
    const params = new URLSearchParams({
      state: loc.state,
      district: loc.district,
    });
    const res = await fetch(`/api/mandis?${params.toString()}`);
    if (!res.ok) return [];
    const data = await res.json();
    return data.mandis || [];
  },

  // Crop Doctor AI
  async analyzeCropPhoto(imageBase64: string, language: string): Promise<CropDoctorResult> {
    const res = await fetch('/api/crop-doctor/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ imageBase64, language }),
    });
    const json = await res.json();
    if (!res.ok) {
      if (json.unclearDiagnosis) return json.unclearDiagnosis;
      throw new Error(json.error || 'Failed to analyze photo');
    }
    return json;
  },

  // Voice Account Registration & Profile Parser
  async parseFarmerVoice(transcript: string, language: string): Promise<{
    name: string;
    state: string;
    district: string;
    village: string;
    mobile?: string;
    confidence?: string;
    spokenConfirmation?: string;
  }> {
    const res = await fetch('/api/parse-farmer-voice', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ transcript, language }),
    });
    if (!res.ok) throw new Error('Failed to parse spoken details');
    return res.json();
  },

  // Voice Question Answering
  async askVoiceQuestion(question: string, language: string, locationStr: string): Promise<{ answer: string; language: string }> {
    const res = await fetch('/api/voice-ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question, language, location: locationStr }),
    });
    if (!res.ok) throw new Error('Voice query failed');
    return res.json();
  },
};
