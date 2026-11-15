import React, { useState } from 'react';
import {
  CloudSun,
  Camera,
  Coins,
  FileText,
  Volume2,
  PhoneCall,
  MapPin,
  Sparkles,
  TrendingUp,
  TrendingDown,
  Minus,
  ArrowRight,
  RefreshCw,
  Droplets,
  Mic,
  ChevronRight,
  ShieldCheck,
  Settings,
} from 'lucide-react';
import {
  FarmerProfile,
  LanguageCode,
  MarketPriceItem,
  NavigationTab,
  WeatherData,
  WeatherWarning,
} from '../types';
import { getT } from '../i18n/translations';
import { voiceService } from '../services/voiceService';

interface DashboardProps {
  user: FarmerProfile;
  weather: WeatherData | null;
  warnings: WeatherWarning[];
  prices: MarketPriceItem[];
  currentLang: LanguageCode;
  onNavigate: (tab: NavigationTab) => void;
  onOpenVoiceAsk: () => void;
  onChangeLocation: () => void;
  isGlobalSpeaking: boolean;
  onStopGlobalAudio: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  user,
  weather,
  warnings,
  prices,
  currentLang,
  onNavigate,
  onOpenVoiceAsk,
  onChangeLocation,
  isGlobalSpeaking,
  onStopGlobalAudio,
}) => {
  const t = getT(currentLang);
  const [quickQuery, setQuickQuery] = useState('');

  const speakGreetingAndWeather = () => {
    onStopGlobalAudio();

    let text = '';
    const name = user.name || (currentLang === 'te' ? 'రైతు సోదరా' : currentLang === 'kn' ? 'ರೈತ ಮಿತ್ರರೇ' : currentLang === 'hi' ? 'किसान भाई' : 'Farmer');
    const loc = `${user.location.village ? user.location.village + ', ' : ''}${user.location.district}`;
    const temp = weather ? Math.round(weather.current.temperature) : 28;
    const condition = weather?.current.condition || (currentLang === 'te' ? 'అనుకూల వాతావరణం' : currentLang === 'kn' ? 'ಅನುಕೂಲಕರ ಹವಾಮಾನ' : currentLang === 'hi' ? 'अनुकूल मौसम' : 'Fair Weather');

    if (currentLang === 'te') {
      text = `నమస్కారం ${name} గారు. రైతు సారథికి స్వాగతం. ${loc} ప్రాంతంలో ప్రస్తుత ఉష్ణోగ్రత ${temp} డిగ్రీల సెల్సియస్, వాతావరణం ${condition}. ఏదైనా అడగడానికి మైక్ నొక్కండి.`;
    } else if (currentLang === 'kn') {
      text = `ನಮಸ್ಕಾರ ${name} ಅವರೇ. ಕಿಸಾನ್ ಸಾರಥಿಗೆ ಸ್ವಾಗತ. ${loc} ಭಾಗದಲ್ಲಿ ತಾಪಮಾನ ${temp} ಡಿಗ್ರಿ ಆಗಿದೆ.`;
    } else if (currentLang === 'hi') {
      text = `नमस्ते ${name} जी। किसान साथी में आपका स्वागत है। ${loc} में वर्तमान तापमान ${temp} डिग्री सेल्सियस है।`;
    } else {
      text = `Welcome ${name} to Farmer Saathi. Current weather in ${loc} is ${temp} degrees Celsius, ${condition}. Click the mic to speak any question.`;
    }

    voiceService.speak(text, currentLang);
  };

  const handleQuickSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenVoiceAsk();
  };

  const topPrices = prices.length > 0 ? prices.slice(0, 2) : [
    {
      id: 'demo-1',
      cropName: currentLang === 'te' ? 'టమాటా (Tomato)' : currentLang === 'kn' ? 'ಟೊಮೆಟೊ (Tomato)' : currentLang === 'hi' ? 'टमाटर (Tomato)' : 'Tomato',
      variety: 'Hybrid Local',
      mandiName: `${user.location.district || 'Kadiri'} APMC`,
      district: user.location.district || 'Sri Sathya Sai',
      state: user.location.state || 'Andhra Pradesh',
      modalPrice: 2400,
      minPrice: 2100,
      maxPrice: 2800,
      unit: 'Quintal',
      trend: 'higher' as const,
      priceDate: 'Today',
      source: 'e-NAM',
    },
    {
      id: 'demo-2',
      cropName: currentLang === 'te' ? 'వేరుశనగ (Groundnut)' : currentLang === 'kn' ? 'ಕಡಲೆಕಾಯಿ (Groundnut)' : currentLang === 'hi' ? 'मूंगफली (Groundnut)' : 'Groundnut',
      variety: 'K-6 Bold',
      mandiName: `${user.location.district || 'Anantapur'} APMC`,
      district: user.location.district || 'Sri Sathya Sai',
      state: user.location.state || 'Andhra Pradesh',
      modalPrice: 6850,
      minPrice: 6500,
      maxPrice: 7200,
      unit: 'Quintal',
      trend: 'stable' as const,
      priceDate: 'Today',
      source: 'e-NAM',
    },
  ];

  return (
    <div id="dashboard-bento-container" className="space-y-5 animate-fadeIn">
      
      {/* Bento Grid Main Canvas */}
      <main className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-5">
        
        {/* Bento 1: Large Ask Anything Box (Span 8) */}
        <div className="md:col-span-8 bg-white rounded-3xl p-5 sm:p-7 border-2 border-emerald-100 flex flex-col justify-between shadow-sm relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div className="max-w-lg">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full text-xs font-bold mb-2">
                <span>🌾</span>
                <span>{currentLang === 'te' ? 'AI వ్యవసాయ సహాయకుడు' : currentLang === 'kn' ? 'AI ಕೃಷಿ ಸಹಾಯಕ' : currentLang === 'hi' ? 'AI कृषि सहायक' : 'AI Agricultural Assistant'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
                {t.voiceAsk}{' '}
                <span className="text-emerald-700 block text-lg sm:text-xl font-bold mt-0.5">
                  {t.voiceAskSub}
                </span>
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">
                {t.voiceAskSubtitle}
              </p>
            </div>

            <div className="hidden sm:flex h-20 w-20 bg-emerald-50 rounded-2xl items-center justify-center text-4xl shadow-inner border border-emerald-100 shrink-0">
              👨‍🌾
            </div>
          </div>

          {/* Quick Voice / Type Input Box */}
          <form onSubmit={handleQuickSearchSubmit} className="relative flex items-center mt-2">
            <input
              id="input-quick-dash-search"
              type="text"
              value={quickQuery}
              onChange={(e) => setQuickQuery(e.target.value)}
              onClick={onOpenVoiceAsk}
              placeholder={t.typeYourQuestion}
              className="w-full py-3.5 pl-4 pr-14 sm:pr-32 bg-slate-50 hover:bg-slate-100/80 focus:bg-white rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-medium text-slate-800 cursor-pointer transition-colors shadow-xs"
            />
            <div className="absolute right-1.5 flex items-center gap-1.5">
              <button
                id="btn-dash-quick-speak"
                type="button"
                onClick={onOpenVoiceAsk}
                className="p-2 sm:px-4 sm:py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold text-xs flex items-center gap-1.5 shadow-md shadow-emerald-200 active:scale-95 transition-all cursor-pointer"
                title={t.voiceAsk}
              >
                <Mic className="w-4 h-4 text-white animate-pulse" />
                <span className="hidden sm:inline">{currentLang === 'te' ? 'మాట్లాడండి' : currentLang === 'kn' ? 'ಮಾತನಾಡಿ' : currentLang === 'hi' ? 'बोलें' : 'Speak'}</span>
              </button>
            </div>
          </form>
        </div>

        {/* Bento 2: Weather & Warnings Box (Span 4) */}
        <div
          id="bento-weather-card"
          className="md:col-span-4 bg-gradient-to-br from-teal-700 to-cyan-800 text-white rounded-3xl p-5 sm:p-6 relative overflow-hidden flex flex-col justify-between shadow-sm group cursor-pointer"
          onClick={() => onNavigate('weather')}
        >
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-1.5 text-cyan-100 text-xs font-bold uppercase tracking-wider">
                <CloudSun className="w-4 h-4 text-amber-300" />
                <span>{t.weather}</span>
              </div>
              <p className="text-4xl sm:text-5xl font-black mt-1 tracking-tight">
                {weather ? Math.round(weather.current.temperature) : 28}°C
              </p>
              <p className="text-xs sm:text-sm text-cyan-100 font-semibold tracking-wide mt-0.5 truncate">
                {weather?.current.condition || t.weatherSunny} • {weather?.current.rainProbability || 20}% {currentLang === 'te' ? 'వర్షం' : currentLang === 'kn' ? 'ಮಳೆ' : currentLang === 'hi' ? 'बारिश' : 'Rain'}
              </p>
            </div>
            <span className="text-5xl group-hover:scale-110 transition-transform">⛅</span>
          </div>

          <div className="mt-4 space-y-2">
            <div className="py-1.5 px-3 bg-white/20 backdrop-blur-xs rounded-xl text-xs font-medium text-white flex items-center gap-1.5">
              <span>⚠️</span>
              <span className="truncate">
                {weather?.current.rainProbability && weather.current.rainProbability > 50
                  ? (currentLang === 'te' ? 'నేడు వర్షం అవకాశం ఉంది. పిచికారీ వాయిదా వేయండి.' : currentLang === 'kn' ? 'ಇಂದು ಮಳೆಯ ಸಾಧ್ಯತೆ ಇದೆ. ಸಿಂಪರಣೆ ಮುಂದೂಡಿ.' : currentLang === 'hi' ? 'आज बारिश की संभावना है। छिड़काव स्थगित करें।' : 'Rain expected today. Plan spraying accordingly.')
                  : (currentLang === 'te' ? 'వ్యవసాయ పనులకు వాతావరణం అనుకూలంగా ఉంది.' : currentLang === 'kn' ? 'ಕೃಷಿ ಕೆಲಸಗಳಿಗೆ ಹವಾಮಾನ ಅನುಕೂಲಕರವಾಗಿದೆ.' : currentLang === 'hi' ? 'कृषि कार्यों के लिए मौसम अनुकूल है।' : 'Weather suitable for agricultural operations.')}
              </span>
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-xs text-cyan-100 font-bold group-hover:underline">
                {t.forecastTitle} →
              </span>
              <button
                id="btn-listen-weather-bento"
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  speakGreetingAndWeather();
                }}
                className="bg-white/20 hover:bg-white/30 text-white px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer"
                title={t.listenWeather}
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>{currentLang === 'te' ? 'వినండి' : currentLang === 'kn' ? 'ಆಲಿಸಿ' : currentLang === 'hi' ? 'सुनें' : 'Listen'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bento 3: Crop Doctor Box (Span 4) */}
        <div
          id="bento-crop-doctor-card"
          className="md:col-span-4 bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 flex flex-col justify-between shadow-sm"
        >
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg sm:text-xl font-bold text-slate-800 flex items-center gap-2">
                <span className="p-2 bg-orange-100 text-orange-700 rounded-xl text-lg">🩺</span>
                <span>{t.cropDoctor}</span>
              </h3>
              <span className="text-[10px] font-bold bg-orange-50 text-orange-700 px-2 py-0.5 rounded-full border border-orange-100">
                AI Diagnosis
              </span>
            </div>
            <p className="text-slate-500 text-xs">
              {t.photoUploadHint}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 my-3">
            <button
              id="btn-bento-take-photo"
              type="button"
              onClick={() => onNavigate('crop-doctor')}
              className="flex flex-col items-center justify-center p-3 sm:p-4 border-2 border-dashed border-slate-200 hover:border-emerald-400 bg-slate-50 hover:bg-emerald-50/60 rounded-2xl transition-all active:scale-95 cursor-pointer group"
            >
              <span className="text-2xl sm:text-3xl mb-1 group-hover:scale-110 transition-transform">📷</span>
              <span className="text-[11px] sm:text-xs font-extrabold text-slate-700 group-hover:text-emerald-800">
                {t.takePhoto}
              </span>
            </button>
            
            <button
              id="btn-bento-upload-photo"
              type="button"
              onClick={() => onNavigate('crop-doctor')}
              className="flex flex-col items-center justify-center p-3 sm:p-4 border-2 border-dashed border-slate-200 hover:border-emerald-400 bg-slate-50 hover:bg-emerald-50/60 rounded-2xl transition-all active:scale-95 cursor-pointer group"
            >
              <span className="text-2xl sm:text-3xl mb-1 group-hover:scale-110 transition-transform">📁</span>
              <span className="text-[11px] sm:text-xs font-extrabold text-slate-700 group-hover:text-emerald-800">
                {t.uploadPhoto}
              </span>
            </button>
          </div>

          <div className="p-2.5 bg-slate-50 rounded-xl text-[11px] text-slate-600 flex items-center justify-between">
            <span>{currentLang === 'te' ? 'తక్షణ వ్యాధి గుర్తింపు & నివారణ' : currentLang === 'kn' ? 'ತ್ವರಿತ ರೋಗ ಪತ್ತೆ ಮತ್ತು ಪರಿಹಾರ' : currentLang === 'hi' ? 'तुरंत रोग पहचान एवं उपचार' : 'Instant disease diagnosis'}</span>
            <button
              onClick={() => onNavigate('crop-doctor')}
              className="text-emerald-700 font-bold hover:underline"
            >
              {currentLang === 'te' ? 'తెరవండి →' : currentLang === 'kn' ? 'ತೆರೆಯಿರಿ →' : currentLang === 'hi' ? 'खोलें →' : 'Open →'}
            </button>
          </div>
        </div>

        {/* Bento 4: Market Prices Box (Span 5) */}
        <div
          id="bento-market-prices-card"
          className="md:col-span-5 bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
        >
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg sm:text-xl font-bold text-slate-800 flex items-center gap-2">
                <span className="p-2 bg-amber-100 text-amber-800 rounded-xl text-lg">💰</span>
                <span>{t.marketPrices}</span>
              </h3>
              <button
                id="btn-dash-refresh-prices"
                type="button"
                onClick={() => onNavigate('market-prices')}
                className="text-xs text-emerald-800 hover:text-emerald-900 font-bold flex items-center gap-1 bg-emerald-50 px-2.5 py-1 rounded-lg cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" />
                <span>e-NAM Live</span>
              </button>
            </div>

            {/* List of 2 Top Prices */}
            <div className="space-y-2.5">
              {topPrices.map((item) => (
                <div
                  key={item.id}
                  onClick={() => onNavigate('market-prices')}
                  className="flex justify-between items-center p-3 bg-slate-50 hover:bg-slate-100/90 rounded-2xl border border-slate-100 transition-colors cursor-pointer"
                >
                  <div>
                    <p className="font-bold text-slate-800 text-xs sm:text-sm">
                      {item.cropName}
                    </p>
                    <p className="text-[10px] text-slate-500">
                      {item.mandiName} • {item.variety}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 justify-end">
                      <p className="font-extrabold text-emerald-800 text-xs sm:text-sm">
                        ₹{item.modalPrice.toLocaleString('en-IN')}
                      </p>
                      {item.trend === 'higher' ? (
                        <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                      ) : item.trend === 'lower' ? (
                        <TrendingDown className="w-3.5 h-3.5 text-rose-600" />
                      ) : (
                        <Minus className="w-3.5 h-3.5 text-slate-400" />
                      )}
                    </div>
                    <p className="text-[10px] text-slate-400">/ {currentLang === 'te' ? 'క్వింటాల్' : currentLang === 'kn' ? 'ಕ್ವಿಂಟಾಲ್' : currentLang === 'hi' ? 'क्विंटल' : 'Quintal'}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            id="btn-dash-ask-mandi-price"
            type="button"
            onClick={() => onNavigate('market-prices')}
            className="w-full mt-3 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <span>📊</span>
            <span>{currentLang === 'te' ? 'అన్ని మార్కెట్ల ధరలు చూడండి' : currentLang === 'kn' ? 'ಎಲ್ಲಾ ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳನ್ನು ನೋಡಿ' : currentLang === 'hi' ? 'सभी मंडियों के भाव देखें' : 'View All Nearby APMC Mandis & Rates'}</span>
          </button>
        </div>

        {/* Bento 5: Govt Schemes Box (Span 3) */}
        <div
          id="bento-govt-schemes-card"
          onClick={() => onNavigate('schemes')}
          className="md:col-span-3 bg-purple-800 text-white rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-sm cursor-pointer hover:bg-purple-900 transition-colors group"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-base sm:text-lg font-bold">{t.governmentSchemes}</h3>
              <p className="text-xs text-purple-200 font-medium">{t.governmentSchemesSub}</p>
            </div>
            <span className="text-3xl group-hover:scale-110 transition-transform">🏛️</span>
          </div>

          <div className="my-2">
            <p className="text-xs text-purple-100 font-medium leading-relaxed">
              {currentLang === 'te' ? 'పీఎం కిసాన్ ₹6,000, పంట బీమా, మరియు 90% సబ్సిడీ డ్రిప్ వివరాలు.' : currentLang === 'kn' ? 'ಪಿಎಂ ಕಿಸಾನ್ ₹6,000, ಫಸಲ್ ಬಿಮಾ ಹಾಗೂ ಹನಿ ನೀರಾವರಿ 90% ಸಬ್ಸಿಡಿ ಮಾಹಿತಿ.' : currentLang === 'hi' ? 'पीएम-किसान ₹6,000, फसल बीमा और 90% सब्सिडी ड्रिप सिंचाई विवरण।' : 'PM-Kisan ₹6,000, Fasal Bima, and Micro-Irrigation subsidy schemes.'}
            </p>
          </div>

          <button
            type="button"
            className="w-full py-2 bg-white/20 hover:bg-white/30 rounded-xl font-bold text-xs text-white transition-colors cursor-pointer"
          >
            {currentLang === 'te' ? 'పథకాల వివరాలు →' : currentLang === 'kn' ? 'ಯೋಜನೆಗಳ ವಿವರ →' : currentLang === 'hi' ? 'योजनाएं देखें →' : 'View Benefits →'}
          </button>
        </div>

        {/* Bento 6: Rainfall Box (Span 3) */}
        <div
          id="bento-rainfall-card"
          onClick={() => onNavigate('weather')}
          className="md:col-span-3 bg-amber-600 text-white rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-sm cursor-pointer hover:bg-amber-700 transition-colors group"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-base sm:text-lg font-bold">{t.rainfall}</h3>
              <p className="text-xs text-amber-100 font-medium">{t.rainfallSub}</p>
            </div>
            <span className="text-3xl group-hover:scale-110 transition-transform">🌧️</span>
          </div>

          <div className="my-2">
            <p className="text-2xl sm:text-3xl font-black">
              {weather?.current?.rainfallMm !== undefined ? `${weather.current.rainfallMm} mm` : '0.0 mm'}
            </p>
            <p className="text-xs text-amber-100 font-semibold">
              {currentLang === 'te' ? 'గత 24 గంటల్లో నమోదైన వర్షం' : currentLang === 'kn' ? 'ಕಳೆದ 24 ಗಂಟೆಗಳಲ್ಲಿ ದಾಖಲಾದ ಮಳೆ' : currentLang === 'hi' ? 'पिछले 24 घंटों में दर्ज बारिश' : 'Recorded in Last 24 Hours'}
            </p>
          </div>

          <button
            type="button"
            className="w-full py-2 bg-black/15 hover:bg-black/25 rounded-xl font-bold text-xs text-white transition-colors cursor-pointer"
          >
            {currentLang === 'te' ? 'వర్షపాతం వివరాలు →' : currentLang === 'kn' ? 'ಮಳೆ ಇತಿಹಾಸ →' : currentLang === 'hi' ? 'वर्षा विवरण →' : 'Rainfall History →'}
          </button>
        </div>

        {/* Bento 7: Quick Actions & Helplines (Span 3) */}
        <div
          onClick={() => onNavigate('kisan-help')}
          className="md:col-span-3 bg-white border border-slate-200 hover:border-emerald-300 rounded-3xl p-5 flex items-center justify-between gap-3 font-bold text-slate-800 shadow-sm hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              📞
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800">{t.kisanHelp}</p>
              <p className="text-xs text-slate-500 font-normal">1800-180-1551</p>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-700 group-hover:translate-x-1 transition-transform" />
        </div>

        {/* Bento 8: Crop Advisor (Span 3) */}
        <div
          onClick={() => onNavigate('crop-advisory')}
          className="md:col-span-3 bg-white border border-slate-200 hover:border-emerald-300 rounded-3xl p-5 flex items-center justify-between gap-3 font-bold text-slate-800 shadow-sm hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-lime-100 text-lime-800 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              🌾
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800">{t.cropAdvisory}</p>
              <p className="text-xs text-slate-500 font-normal">{currentLang === 'te' ? 'దశలవారీ ఎరువుల సలహాలు' : currentLang === 'kn' ? 'ಹಂತವಾರು ಗೊಬ್ಬರ ಸಲಹೆಗಳು' : currentLang === 'hi' ? 'चरणवार खाद सलाह' : 'Stage-wise Advisory'}</p>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-700 group-hover:translate-x-1 transition-transform" />
        </div>

        {/* Bento 9: Crop Cultivation Guide (Span 3) */}
        <div
          onClick={() => onNavigate('crop-info')}
          className="md:col-span-3 bg-white border border-slate-200 hover:border-emerald-300 rounded-3xl p-5 flex items-center justify-between gap-3 font-bold text-slate-800 shadow-sm hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-amber-100 text-amber-800 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              📖
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800">{t.cropInfo}</p>
              <p className="text-xs text-slate-500 font-normal">{currentLang === 'te' ? '11 సమగ్ర సాగు అంశాలు' : currentLang === 'kn' ? '11 ಸಮಗ್ರ ಕೃಷಿ ಹಂತಗಳು' : currentLang === 'hi' ? '11 संपूर्ण कृषि चरण' : '11 Crop Steps'}</p>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-700 group-hover:translate-x-1 transition-transform" />
        </div>

        {/* Bento 10: Nearby Mandis (Span 3) */}
        <div
          onClick={() => onNavigate('nearby-mandi')}
          className="md:col-span-3 bg-white border border-slate-200 hover:border-emerald-300 rounded-3xl p-5 flex items-center justify-between gap-3 font-bold text-slate-800 shadow-sm hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-teal-100 text-teal-800 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              📍
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800">{t.nearbyMandi}</p>
              <p className="text-xs text-slate-500 font-normal">{currentLang === 'te' ? 'సమీప ఏపీఎంసీ మార్కెట్లు' : currentLang === 'kn' ? 'ಹತ್ತಿರದ ಎಪಿಎಂಸಿ ಮಂಡಿಗಳು' : currentLang === 'hi' ? 'निकटतम एपीएमसी मंडियां' : 'APMC Mandi Yards'}</p>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-700 group-hover:translate-x-1 transition-transform" />
        </div>

      </main>

      {/* Quick Location & Profile Bar */}
      <div className="bg-white rounded-2xl p-3 sm:p-4 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>
            📍 <strong>{user.location.village ? `${user.location.village}, ` : ''}{user.location.district}</strong> ({user.location.state})
          </span>
          <span>•</span>
          <button
            id="btn-dash-change-location-footer"
            type="button"
            onClick={onChangeLocation}
            className="text-emerald-700 hover:underline font-bold cursor-pointer"
          >
            {t.changeLocation}
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button
            id="btn-dash-edit-profile-footer"
            type="button"
            onClick={() => onNavigate('profile')}
            className="flex items-center gap-1.5 text-slate-700 hover:text-slate-900 font-bold cursor-pointer"
          >
            <Settings className="w-3.5 h-3.5 text-slate-500" />
            <span>{t.farmerProfile}</span>
          </button>
        </div>
      </div>

    </div>
  );
};
