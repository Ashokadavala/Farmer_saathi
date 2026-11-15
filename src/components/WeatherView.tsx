import React, { useState, useEffect } from 'react';
import {
  Search,
  Mic,
  Camera,
  MoreVertical,
  ChevronDown,
  ChevronUp,
  Volume2,
  VolumeX,
  RefreshCw,
  MapPin,
  Wind,
  Droplets,
  CloudRain,
  Activity,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { FarmerLocation, LanguageCode, WeatherData, ForecastDay } from '../types';
import { getT } from '../i18n/translations';
import { voiceService } from '../services/voiceService';
import { GoogleWeatherIcon } from './WeatherIcons';
import { WeatherFrog } from './WeatherFrog';

interface WeatherViewProps {
  weather: WeatherData | null;
  location: FarmerLocation;
  currentLang: LanguageCode;
  isLoading: boolean;
  onRefresh: () => void;
  onChangeLocation: () => void;
  isGlobalSpeaking: boolean;
  onStopGlobalAudio: () => void;
}

export const WeatherView: React.FC<WeatherViewProps> = ({
  weather,
  location,
  currentLang,
  isLoading,
  onRefresh,
  onChangeLocation,
  isGlobalSpeaking,
  onStopGlobalAudio,
}) => {
  const t = getT(currentLang);
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(0);
  const [isSpeakingLocal, setIsSpeakingLocal] = useState<boolean>(false);

  // Accordion state for expandable detail tiles
  const [expandedTile, setExpandedTile] = useState<string | null>(null);

  const toggleTile = (tileName: string) => {
    setExpandedTile(prev => (prev === tileName ? null : tileName));
  };

  // Reset selected day when weather data refreshes
  useEffect(() => {
    setSelectedDayIndex(0);
  }, [weather?.lastUpdated]);

  const selectedForecast: ForecastDay | null =
    weather && weather.forecast && weather.forecast[selectedDayIndex]
      ? weather.forecast[selectedDayIndex]
      : null;

  const isToday = selectedDayIndex === 0;
  const isTomorrow = selectedDayIndex === 1;

  const displayTemp = isToday
    ? Math.round(weather?.current.temperature || 33)
    : selectedForecast?.maxTemp || 33;

  const displayCondition = isToday
    ? weather?.current.condition || (currentLang === 'te' ? 'చిరుజల్లులు' : 'Light rain')
    : selectedForecast?.condition || (currentLang === 'te' ? 'మేఘావృతం' : 'Cloudy');

  const displayRainProb = isToday
    ? (weather?.current.rainProbability != null ? weather.current.rainProbability : 40)
    : (selectedForecast?.rainProbability != null ? selectedForecast.rainProbability : 40);

  const displayRainMm = isToday
    ? weather?.current.rainfallMm || 0.1
    : selectedForecast?.rainfallMm || 0;

  const villageName = location.village || 'Gotluru';
  const querySearchText = `${villageName.toLowerCase()} weather`;

  // Spoken audio summary in farmer's language
  const speakWeatherSummary = () => {
    if (!weather) return;
    onStopGlobalAudio();

    const place = `${location.village ? location.village + ', ' : ''}${location.district}`;
    let textToSpeak = '';

    if (isToday) {
      const temp = Math.round(weather.current.temperature);
      const feels = Math.round(weather.current.feelsLike);
      const humidity = weather.current.humidity;
      const condition = weather.current.condition;
      const rainProb = weather.current.rainProbability || 40;
      const windSpd = weather.current.windSpeed;

      if (currentLang === 'te') {
        textToSpeak = `${place} వాతావరణం: ప్రస్తుతం ఉష్ణోగ్రత ${temp} డిగ్రీల సెల్సియస్, అనుభవమయ్యేది ${feels} డిగ్రీలు. వాతావరణం ${condition}. వర్షం పడే అవకాశం ${rainProb} శాతం ఉంది. గాలి వేగం గంటకు ${windSpd} కిలోమీటర్లు, గాలిలో తేమ ${humidity} శాతం ఉంది.`;
      } else if (currentLang === 'kn') {
        textToSpeak = `${place} ಹವಾಮಾನ: ಪ್ರಸ್ತುತ ತಾಪಮಾನ ${temp} ಡಿಗ್ರಿ, ಅನುಭವವಾಗುವ ತಾಪಮಾನ ${feels} ಡಿಗ್ರಿ. ಹವಾಮಾನ ${condition}. ಮಳೆ ಬರುವ ಸಾಧ್ಯತೆ ${rainProb} ಪ್ರತಿಶತ.`;
      } else if (currentLang === 'hi') {
        textToSpeak = `${place} का मौसम: वर्तमान तापमान ${temp} डिग्री सेल्सियस है, महसूस होने वाला तापमान ${feels} डिग्री। मौसम ${condition} है। वर्षा की संभावना ${rainProb} प्रतिशत है।`;
      } else {
        textToSpeak = `Weather for ${place}: Currently ${temp} degrees Celsius, feels like ${feels} degrees with ${condition}. Rain probability is ${rainProb} percent. Wind speed is ${windSpd} km/h and humidity is ${humidity} percent.`;
      }
    } else if (selectedForecast) {
      const dayLabel = selectedForecast.dayName;
      const maxT = selectedForecast.maxTemp;
      const minT = selectedForecast.minTemp;
      const cond = selectedForecast.condition;
      const rProb = selectedForecast.rainProbability;

      if (currentLang === 'te') {
        textToSpeak = `${dayLabel} రోజున ${place} ప్రాంతంలో గరిష్ఠ ఉష్ణోగ్రత ${maxT} డిగ్రీలు, కనిష్ఠం ${minT} డిగ్రీలు ఉండవచ్చు. వాతావరణం ${cond}. వర్షం అవకాశం ${rProb} శాతం ఉంది.`;
      } else if (currentLang === 'kn') {
        textToSpeak = `${dayLabel} ರಂದು ${place} ಭಾಗದಲ್ಲಿ ಗರಿಷ್ಠ ತಾಪಮಾನ ${maxT} ಡಿಗ್ರಿ, ಕನಿಷ್ಠ ${minT} ಡಿಗ್ರಿ ಇರಬಹುದು. ಹವಾಮಾನ ${cond}.`;
      } else if (currentLang === 'hi') {
        textToSpeak = `${dayLabel} को ${place} में अधिकतम ${maxT} डिग्री और न्यूनतम ${minT} डिग्री रहेगा। मौसम ${cond} रहेगा।`;
      } else {
        textToSpeak = `Forecast for ${dayLabel} in ${place}: High of ${maxT} degrees, low of ${minT} degrees with ${cond}. Rain chance is ${rProb} percent.`;
      }
    }

    setIsSpeakingLocal(true);
    voiceService.speak(
      textToSpeak,
      currentLang,
      () => setIsSpeakingLocal(true),
      () => setIsSpeakingLocal(false),
      () => setIsSpeakingLocal(false)
    );
  };

  const stopSpeaking = () => {
    voiceService.stopSpeaking();
    setIsSpeakingLocal(false);
  };

  // Farmer agricultural advisory
  const getFarmingAdvisory = () => {
    if (displayRainProb >= 50 || displayCondition.toLowerCase().includes('rain') || displayCondition.toLowerCase().includes('వర్షం')) {
      if (currentLang === 'te') return 'వర్షం / చిరుజల్లులు పడే అవకాశం ఉంది. ఎరువులు మరియు పురుగుమందుల పిచికారీని వాయిదా వేయండి.';
      if (currentLang === 'kn') return 'ಮಳೆಯಾಗುವ ಸಾಧ್ಯತೆಯಿದೆ. ರಸಗೊಬ್ಬರ ಮತ್ತು ಕೀಟನಾಶಕ ಸಿಂಪಡಣೆಯನ್ನು ಮುಂದೂಡಿ.';
      if (currentLang === 'hi') return 'बारिश या बूंदाबांदी की संभावना है। कीटनाशक छिड़काव अभी टालें।';
      return 'Light rain expected. Postpone spraying fertilizers and pesticides until leaves are dry.';
    } else if (displayTemp >= 35) {
      if (currentLang === 'te') return 'ఎండ తీవ్రత ఎక్కువగా ఉంటుంది. ఉదయం లేదా సాయంత్రం వేళల్లో పంటకు తడి అందించండి.';
      if (currentLang === 'kn') return 'ಬಿಸಿಲು ಹೆಚ್ಚಾಗಿರುತ್ತದೆ. ಮುಂಜಾನೆ ಅಥವಾ ಸಂಜೆ ಬೆಳೆಗೆ ನೀರು ಹಾಯಿಸಿ.';
      if (currentLang === 'hi') return 'धूप तेज रहेगी। सुबह या शाम के समय ही फसलों की सिंचाई करें।';
      return 'High temperature expected. Irrigate crops during morning or evening hours.';
    } else {
      if (currentLang === 'te') return 'వ్యవసాయ పనులకు మరియు పంట యాజమాన్యానికి వాతావరణం చాలా అనుకూలంగా ఉంది.';
      if (currentLang === 'kn') return 'ಕೃಷಿ ಕೆಲಸಗಳಿಗೆ ಮತ್ತು ಬೆಳೆ ನಿರ್ವಹಣೆಗೆ ಹವಾಮಾನವು ಅತ್ಯಂತ ಸೂಕ್ತವಾಗಿದೆ.';
      if (currentLang === 'hi') return 'कृषि कार्यों और फसल प्रबंधन के लिए मौसम अनुकूल है।';
      return 'Weather is favorable for farm operations and general field management.';
    }
  };

  // Helper for 3-letter day name
  const getShortDayName = (dateStr: string, index: number): string => {
    if (index === 0) return 'Today';
    const d = new Date(dateStr);
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[d.getDay()] || 'Day';
  };

  return (
    <div
      id="google-weather-container"
      className="max-w-xl mx-auto bg-[#121316] text-[#f2f2f6] rounded-3xl p-4 sm:p-6 shadow-2xl border border-stone-800 space-y-6 font-sans select-none"
    >
      {/* 1. TOP GOOGLE SEARCH BAR */}
      <div className="flex items-center justify-between bg-[#1e1f23] rounded-full px-4 py-2.5 shadow-sm border border-stone-800">
        <div className="flex items-center space-x-3 overflow-hidden">
          <Search className="w-5 h-5 text-stone-400 shrink-0" />
          <span className="text-sm font-medium text-stone-200 truncate tracking-wide">
            {querySearchText}
          </span>
        </div>
        <div className="flex items-center space-x-3 shrink-0">
          <button
            type="button"
            onClick={onChangeLocation}
            title="Change village location"
            className="text-stone-400 hover:text-stone-200 transition-colors cursor-pointer"
          >
            <MapPin className="w-4 h-4 text-emerald-400" />
          </button>
          <div className="w-5 h-5 flex items-center justify-center">
            {/* Google Colorful Mic Icon */}
            <svg viewBox="0 0 24 24" className="w-4 h-4">
              <path fill="#4285F4" d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
              <path fill="#34A853" d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
            </svg>
          </div>
          <div className="w-5 h-5 flex items-center justify-center">
            {/* Google Lens Icon */}
            <svg viewBox="0 0 24 24" className="w-4 h-4">
              <path fill="#EA4335" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" opacity="0.2"/>
              <circle cx="12" cy="12" r="4" fill="#4285F4"/>
              <path fill="#FBBC05" d="M18.5 7.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* 2. HEADER TITLE BAR */}
      <div className="flex items-center justify-between px-1">
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Weather
        </h1>
        <div className="flex items-center space-x-3">
          {/* Spoken Audio Narration Button for Farmers */}
          {isSpeakingLocal ? (
            <button
              id="btn-stop-weather-audio"
              type="button"
              onClick={stopSpeaking}
              className="flex items-center space-x-1.5 bg-amber-400 text-stone-950 px-3 py-1.5 rounded-full text-xs font-bold animate-pulse cursor-pointer shadow-md"
            >
              <VolumeX className="w-3.5 h-3.5" />
              <span>{t.stopAudio || 'ఆపండి'}</span>
            </button>
          ) : (
            <button
              id="btn-speak-weather"
              type="button"
              onClick={speakWeatherSummary}
              className="flex items-center space-x-1.5 bg-[#2a2b30] hover:bg-[#323338] text-amber-300 px-3 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer border border-stone-700"
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>🔊 {t.listenWeather}</span>
            </button>
          )}

          {/* Refresh Button */}
          <button
            type="button"
            onClick={onRefresh}
            disabled={isLoading}
            className="p-1.5 text-stone-400 hover:text-white transition-colors cursor-pointer"
            title="Refresh weather"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin text-emerald-400' : ''}`} />
          </button>

          {/* 3-dots Menu */}
          <button
            type="button"
            onClick={onChangeLocation}
            className="p-1.5 text-stone-400 hover:text-white transition-colors cursor-pointer"
          >
            <MoreVertical className="w-5 h-5" />
          </button>

          {/* Plant Icon Badge */}
          <div className="w-7 h-7 rounded-full bg-[#1b3427] border border-emerald-500/40 flex items-center justify-center text-sm shadow-sm">
            🌱
          </div>
        </div>
      </div>

      {/* 3. HERO CURRENT TEMPERATURE & CONDITION ("Now") */}
      <div className="flex items-center justify-between px-2 pt-1">
        <div>
          <span className="text-sm font-medium text-stone-400 block mb-1">
            Now
          </span>
          <div className="flex items-center space-x-3">
            <span className="text-6xl sm:text-7xl font-light tracking-tight text-white">
              {displayTemp}°
            </span>
            {/* Soft Cloud with Raindrop Icon */}
            <div className="scale-110 sm:scale-125 ml-1">
              <GoogleWeatherIcon
                code={weather?.current.conditionCode || 51}
                isDay={weather?.current.isDay ?? true}
                size="md"
              />
            </div>
          </div>
        </div>

        <div className="text-right space-y-1">
          <span className="text-lg sm:text-xl font-medium text-stone-100 block">
            {displayCondition}
          </span>
          <span className="text-sm font-normal text-stone-400 block">
            Feels like {Math.round(weather?.current.feelsLike || 35)}°
          </span>
        </div>
      </div>

      {/* 4. HOURLY FORECAST CAROUSEL */}
      <div className="pt-2">
        <div className="flex items-center space-x-4 overflow-x-auto pb-3 pt-1 scrollbar-none scroll-smooth">
          {weather?.hourly && weather.hourly.length > 0 ? (
            weather.hourly.map((h, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-between min-w-[56px] space-y-2 shrink-0 py-1"
              >
                {/* Temperature */}
                <span className="text-sm font-semibold text-white">
                  {h.temperature}°
                </span>

                {/* Rain Probability % in Blue */}
                <div className="h-4 flex items-center justify-center">
                  {h.rainProbability > 0 ? (
                    <span className="text-[11px] font-bold text-[#60a5fa]">
                      {h.rainProbability}%
                    </span>
                  ) : (
                    <span className="text-[11px] text-transparent">-</span>
                  )}
                </div>

                {/* Condition Icon */}
                <div className="my-1">
                  <GoogleWeatherIcon
                    code={h.weatherCode}
                    isDay={h.isDay}
                    size="sm"
                  />
                </div>

                {/* Hour Label */}
                <span className="text-xs text-stone-400 font-medium whitespace-nowrap">
                  {h.hourLabel}
                </span>
              </div>
            ))
          ) : (
            /* Sample fallback matching screenshot */
            [
              { temp: 33, rain: 40, label: 'Now', code: 51, isDay: true },
              { temp: 32, rain: 40, label: '7 pm', code: 51, isDay: false },
              { temp: 31, rain: 50, label: '8 pm', code: 53, isDay: false },
              { temp: 29, rain: 30, label: '9 pm', code: 51, isDay: false },
              { temp: 29, rain: 0, label: '10 pm', code: 1, isDay: false },
              { temp: 28, rain: 80, label: '11 pm', code: 61, isDay: false },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-between min-w-[56px] space-y-2 shrink-0 py-1"
              >
                <span className="text-sm font-semibold text-white">{item.temp}°</span>
                <span className="text-[11px] font-bold text-[#60a5fa]">{item.rain ? `${item.rain}%` : ''}</span>
                <GoogleWeatherIcon code={item.code} isDay={item.isDay} size="sm" />
                <span className="text-xs text-stone-400 font-medium">{item.label}</span>
              </div>
            ))
          )}
        </div>
      </div>

      {/* 5. WEATHER FROG NATURE ARTWORK (Google Weather Signature) */}
      <div className="rounded-2xl overflow-hidden shadow-lg border border-stone-800/80">
        <WeatherFrog
          isRainy={displayRainProb > 30 || displayCondition.toLowerCase().includes('rain') || displayCondition.toLowerCase().includes('జల్లు')}
          conditionCode={weather?.current.conditionCode}
        />
      </div>

      {/* 6. 5-DAY FORECAST CARDS */}
      {weather?.forecast && weather.forecast.length > 0 && (
        <div className="grid grid-cols-5 gap-2 pt-1">
          {weather.forecast.slice(0, 5).map((fDay, idx) => {
            const isSelected = selectedDayIndex === idx;
            const shortName = getShortDayName(fDay.date, idx);

            return (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedDayIndex(idx)}
                className={`py-3 px-1 rounded-2xl flex flex-col items-center justify-between space-y-2 transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#25272c] ring-1 ring-white/90 shadow-md'
                    : 'bg-[#1e1f23] hover:bg-[#25272c] opacity-85 hover:opacity-100'
                }`}
              >
                {/* Day name */}
                <span className={`text-xs font-semibold ${isSelected ? 'text-white' : 'text-stone-300'}`}>
                  {shortName}
                </span>

                {/* Weather Icon */}
                <div className="my-0.5">
                  <GoogleWeatherIcon
                    code={fDay.rainProbability > 40 ? 51 : 2}
                    isDay={true}
                    size="sm"
                  />
                </div>

                {/* Max / Min Temp */}
                <span className="text-[11px] sm:text-xs font-medium text-stone-200 tracking-tight whitespace-nowrap">
                  {fDay.maxTemp}°/{fDay.minTemp}°
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* 7. EXPANDABLE DETAIL TILES (Google Weather Material You Dark Cards) */}
      <div className="space-y-3 pt-2">

        {/* Card A: Precipitation */}
        <div className="bg-[#1e1f23] rounded-2xl border border-stone-800 overflow-hidden">
          <button
            type="button"
            onClick={() => toggleTile('precipitation')}
            className="w-full flex items-center justify-between p-4 cursor-pointer hover:bg-stone-800/40 transition-colors"
          >
            <div className="flex items-center space-x-3 text-stone-200">
              <CloudRain className="w-5 h-5 text-stone-300" />
              <span className="text-sm font-medium">
                Precipitation • <span className="font-semibold text-white">{displayRainProb}%</span>
              </span>
            </div>
            {expandedTile === 'precipitation' ? (
              <ChevronUp className="w-4 h-4 text-stone-400" />
            ) : (
              <ChevronDown className="w-4 h-4 text-stone-400" />
            )}
          </button>

          {expandedTile === 'precipitation' && (
            <div className="px-4 pb-4 pt-1 border-t border-stone-800/80 text-xs text-stone-300 space-y-2">
              <div className="flex justify-between py-1">
                <span className="text-stone-400">Current rain volume:</span>
                <span className="font-medium text-white">{displayRainMm} mm</span>
              </div>
              {weather?.rainfallHistory && weather.rainfallHistory.length > 0 && (
                <div className="pt-2 border-t border-stone-800/60">
                  <span className="text-stone-400 block mb-1">Recent rainfall:</span>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {weather.rainfallHistory.slice(0, 3).map((item, i) => (
                      <div key={i} className="bg-stone-900/60 rounded-xl p-2">
                        <span className="block text-[10px] text-stone-400">{item.date}</span>
                        <span className="font-bold text-sky-400 text-sm">{item.amountMm} mm</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Card B: Wind */}
        <div className="bg-[#1e1f23] rounded-2xl border border-stone-800 overflow-hidden">
          <button
            type="button"
            onClick={() => toggleTile('wind')}
            className="w-full flex items-center justify-between p-4 cursor-pointer hover:bg-stone-800/40 transition-colors"
          >
            <div className="flex items-center space-x-3 text-stone-200">
              <Wind className="w-5 h-5 text-stone-300" />
              <span className="text-sm font-medium">
                Wind • <span className="font-semibold text-white">{weather?.current.windSpeed || 16} kph</span>
              </span>
            </div>
            {expandedTile === 'wind' ? (
              <ChevronUp className="w-4 h-4 text-stone-400" />
            ) : (
              <ChevronDown className="w-4 h-4 text-stone-400" />
            )}
          </button>

          {expandedTile === 'wind' && (
            <div className="px-4 pb-4 pt-1 border-t border-stone-800/80 text-xs text-stone-300 space-y-2">
              <div className="flex justify-between py-1">
                <span className="text-stone-400">Wind Direction:</span>
                <span className="font-medium text-white">{weather?.current.windDirection || 'ESE'}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-stone-400">Pesticide Spray Condition:</span>
                <span className="font-medium text-emerald-400">
                  {(weather?.current.windSpeed || 16) > 20
                    ? 'Windy - Postpone spraying'
                    : 'Gentle breeze - Suitable for spraying'}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Card C: Humidity */}
        <div className="bg-[#1e1f23] rounded-2xl border border-stone-800 overflow-hidden">
          <button
            type="button"
            onClick={() => toggleTile('humidity')}
            className="w-full flex items-center justify-between p-4 cursor-pointer hover:bg-stone-800/40 transition-colors"
          >
            <div className="flex items-center space-x-3 text-stone-200">
              <Droplets className="w-5 h-5 text-stone-300" />
              <span className="text-sm font-medium">
                Humidity • <span className="font-semibold text-white">{weather?.current.humidity || 45}%</span>
              </span>
            </div>
            {expandedTile === 'humidity' ? (
              <ChevronUp className="w-4 h-4 text-stone-400" />
            ) : (
              <ChevronDown className="w-4 h-4 text-stone-400" />
            )}
          </button>

          {expandedTile === 'humidity' && (
            <div className="px-4 pb-4 pt-1 border-t border-stone-800/80 text-xs text-stone-300 space-y-2">
              <div className="flex justify-between py-1">
                <span className="text-stone-400">Dew Point:</span>
                <span className="font-medium text-white">
                  {Math.round((weather?.current.temperature || 33) - (100 - (weather?.current.humidity || 45)) / 5)}°C
                </span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-stone-400">Soil Moisture Retention:</span>
                <span className="font-medium text-stone-200">
                  {(weather?.current.humidity || 45) > 70 ? 'High' : (weather?.current.humidity || 45) > 40 ? 'Moderate' : 'Low'}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Card D: Air Quality */}
        <div className="bg-[#1e1f23] rounded-2xl border border-stone-800 overflow-hidden">
          <button
            type="button"
            onClick={() => toggleTile('airquality')}
            className="w-full flex items-center justify-between p-4 cursor-pointer hover:bg-stone-800/40 transition-colors"
          >
            <div className="flex items-center space-x-3 text-stone-200">
              <Activity className="w-5 h-5 text-stone-300" />
              <span className="text-sm font-medium flex items-center gap-1.5">
                Air quality • <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="font-semibold text-white">{weather?.airQuality?.aqi || 73}</span> • {weather?.airQuality?.rating || 'Satisfactory'}
              </span>
            </div>
            {expandedTile === 'airquality' ? (
              <ChevronUp className="w-4 h-4 text-stone-400" />
            ) : (
              <ChevronDown className="w-4 h-4 text-stone-400" />
            )}
          </button>

          {expandedTile === 'airquality' && (
            <div className="px-4 pb-4 pt-1 border-t border-stone-800/80 text-xs text-stone-300 space-y-2">
              <div className="flex justify-between py-1">
                <span className="text-stone-400">PM2.5:</span>
                <span className="font-medium text-white">{weather?.airQuality?.pm25 || 9.6} µg/m³</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-stone-400">PM10:</span>
                <span className="font-medium text-white">{weather?.airQuality?.pm10 || 16.4} µg/m³</span>
              </div>
              <p className="text-[11px] text-stone-400 pt-1">
                Air quality is acceptable for outdoor agricultural work and field operations.
              </p>
            </div>
          )}
        </div>

        {/* Card E: Farming Advisory Note */}
        <div className="bg-[#1b2520] rounded-2xl border border-emerald-800/40 p-4 space-y-2">
          <div className="flex items-center space-x-2 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <span>💡</span>
            <span>{currentLang === 'te' ? 'రైతుకు సలహా:' : currentLang === 'kn' ? 'ರೈತರಿಗೆ ಸಲಹೆ:' : currentLang === 'hi' ? 'किसान सलाह:' : 'Farmer Advisory:'}</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
            {getFarmingAdvisory()}
          </p>
          <div className="pt-2 flex items-center justify-between text-[11px] text-emerald-400/80 border-t border-emerald-900/50">
            <span>📍 {location.village}, {location.district}</span>
            <span>{weather?.location?.latitude?.toFixed(4)}°N, {weather?.location?.longitude?.toFixed(4)}°E</span>
          </div>
        </div>

      </div>

      {/* 8. FOOTER GOOGLE WEATHER ATTRIBUTION */}
      <div className="pt-2 pb-1 border-t border-stone-800 text-center">
        <span className="text-xs text-stone-400 underline font-medium hover:text-stone-200 transition-colors">
          Google Weather
        </span>
        <p className="text-[10px] text-stone-500 mt-1">
          Open-Meteo Real-Time Weather • Updated {weather?.lastUpdated || 'just now'}
        </p>
      </div>

    </div>
  );
};
