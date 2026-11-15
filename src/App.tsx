import React, { useState, useEffect } from 'react';
import {
  Sprout,
  Mic,
  Camera,
  CloudSun,
  DollarSign,
  User,
  MapPin,
  Home,
  Volume2,
  VolumeX,
  X,
  Phone,
  Landmark,
  Activity,
  AlertTriangle,
} from 'lucide-react';
import {
  FarmerLocation,
  LanguageCode,
  MarketPriceRecord,
  UserProfile,
  WeatherData,
  WeatherWarning,
} from './types';
import { getT } from './i18n/translations';
import { voiceService, VoiceUnavailableDetails } from './services/voiceService';
import { api } from './services/api';

// Components
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { WeatherView } from './components/WeatherView';
import { WeatherWarningView } from './components/WeatherWarningView';
import { CropDoctorView } from './components/CropDoctorView';
import { CropInfoView } from './components/CropInfoView';
import { CropAdvisoryView } from './components/CropAdvisoryView';
import { MarketPricesView } from './components/MarketPricesView';
import { NearbyMandiView } from './components/NearbyMandiView';
import { SchemesView } from './components/SchemesView';
import { KisanHelpView } from './components/KisanHelpView';
import { ProfileView } from './components/ProfileView';
import { LocationSelector } from './components/LocationSelector';
import { VoiceAskModal } from './components/VoiceAskModal';
import { VoiceOnboardingModal } from './components/VoiceOnboardingModal';

export default function App() {
  // Current active farmer profile & location
  const [user, setUser] = useState<UserProfile>({
    id: 'farmer_default_1',
    name: 'Venkata Ramana',
    mobile: '9876543210',
    location: {
      state: 'Andhra Pradesh',
      district: 'Sri Sathya Sai',
      village: 'Gotluru',
      latitude: 14.167,
      longitude: 77.811,
    },
    language: 'te',
  });

  // Global Language State with LocalStorage Persistence
  const [currentLang, setCurrentLang] = useState<LanguageCode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('farmerSaathiLanguage') as LanguageCode;
      if (saved && ['te', 'kn', 'hi', 'en'].includes(saved)) {
        return saved;
      }
    }
    return 'te';
  });

  const [activeView, setActiveView] = useState<string>('dashboard');
  const [selectedCropId, setSelectedCropId] = useState<string>('tomato');
  const [selectedCommodity, setSelectedCommodity] = useState<string>('');

  // Modals
  const [isVoiceAskOpen, setIsVoiceAskOpen] = useState<boolean>(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState<boolean>(false);
  const [isVoiceOnboardingOpen, setIsVoiceOnboardingOpen] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return !localStorage.getItem('farmerSaathiProfileCreated');
    }
    return false;
  });

  // Audio playing state
  const [isGlobalSpeaking, setIsGlobalSpeaking] = useState<boolean>(false);
  const [voiceNotice, setVoiceNotice] = useState<VoiceUnavailableDetails | null>(null);

  // Remote Data states
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [warnings, setWarnings] = useState<WeatherWarning[]>([]);
  const [prices, setPrices] = useState<MarketPriceRecord[]>([]);
  const [mandis, setMandis] = useState<any[]>([]);
  const [isLoadingData, setIsLoadingData] = useState<boolean>(false);

  const t = getT(currentLang);

  // Sync speech state with voiceService
  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlobalSpeaking(voiceService.getIsSpeaking());
    }, 250);
    return () => clearInterval(interval);
  }, []);

  // Listen to voice unavailable events to show farmer-friendly on-screen notice
  useEffect(() => {
    const unsubscribe = voiceService.subscribeVoiceUnavailable((details) => {
      setVoiceNotice(details);
      // Auto-hide toast after 8 seconds
      setTimeout(() => {
        setVoiceNotice((curr) => (curr?.message === details.message ? null : curr));
      }, 8000);
    });
    return () => unsubscribe();
  }, []);

  // Fetch initial profile & data
  useEffect(() => {
    loadUserData();
  }, []);

  // Reload weather and market data whenever user location or language changes
  useEffect(() => {
    if (user.location) {
      loadLocationData(user.location, currentLang);
    }
  }, [user.location, currentLang]);

  const loadUserData = async () => {
    try {
      const me = await api.getMe();
      if (me) {
        setUser(me);
        const saved = typeof window !== 'undefined' ? (localStorage.getItem('farmerSaathiLanguage') as LanguageCode) : null;
        if (!saved && me.language && ['te', 'kn', 'hi', 'en'].includes(me.language)) {
          setCurrentLang(me.language as LanguageCode);
        }
      }
    } catch (e) {
      console.warn('Could not fetch remote user profile, using active state:', e);
    }
  };

  const loadLocationData = async (loc: FarmerLocation, lang: LanguageCode = currentLang) => {
    setIsLoadingData(true);
    try {
      const [wData, warnData, priceData, mandiData] = await Promise.all([
        api.getWeather(loc, lang),
        api.getWeatherWarnings(loc, lang),
        api.getMarketPrices(loc),
        api.getNearbyMandis(loc),
      ]);
      setWeather(wData);
      setWarnings(warnData);
      setPrices(priceData);
      setMandis(mandiData);
    } catch (e) {
      console.error('Error loading location data:', e);
    } finally {
      setIsLoadingData(false);
    }
  };

  const handleLanguageChange = (lang: LanguageCode) => {
    setCurrentLang(lang);
    setUser((prev) => ({ ...prev, language: lang }));
    if (typeof window !== 'undefined') {
      localStorage.setItem('farmerSaathiLanguage', lang);
    }
    setVoiceNotice(null);
    voiceService.stopSpeaking();
  };

  const handleSaveLocation = async (newLocation: FarmerLocation) => {
    setUser((prev) => ({ ...prev, location: newLocation }));
    setIsLocationModalOpen(false);
    try {
      await api.updateProfile({
        id: user.id,
        name: user.name,
        mobile: user.mobile,
        state: newLocation.state,
        district: newLocation.district,
        village: newLocation.village,
        language: currentLang,
      });
    } catch (e) {
      console.warn('Failed to sync location to backend:', e);
    }
  };

  const handleStopAudio = () => {
    voiceService.stopSpeaking();
    setIsGlobalSpeaking(false);
  };

  return (
    <div className="min-h-screen bg-[#F4F7F2] text-slate-900 flex flex-col font-sans selection:bg-green-200 selection:text-green-950 pb-20 sm:pb-8">
      
      {/* Top Main Navigation Bar */}
      <Navbar
        user={user}
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        onOpenVoiceAsk={() => setIsVoiceAskOpen(true)}
        onOpenProfile={() => setActiveView('profile')}
        isSpeaking={isGlobalSpeaking}
        onStopAudio={handleStopAudio}
        activeView={activeView}
        onNavigate={(v) => {
          setActiveView(v);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Secondary Quick Navigation Breadcrumb */}
      {activeView !== 'dashboard' && (
        <div className="bg-white/80 backdrop-blur-md border-b border-slate-200 py-2.5 px-4 sm:px-8 sticky top-16 sm:top-18 z-30 shadow-xs">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <button
              id="btn-back-to-home-crumb"
              type="button"
              onClick={() => {
                setActiveView('dashboard');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center space-x-1.5 text-xs sm:text-sm font-bold text-green-700 hover:text-green-900 transition-colors cursor-pointer"
            >
              <Home className="w-4 h-4" />
              <span>{t.home}</span>
              <span className="text-slate-300">/</span>
              <span className="text-slate-800 capitalize">{activeView.replace('-', ' ')}</span>
            </button>

            <button
              id="btn-crumb-change-loc"
              type="button"
              onClick={() => setIsLocationModalOpen(true)}
              className="text-xs text-slate-600 hover:text-green-700 font-semibold flex items-center gap-1 cursor-pointer bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-lg"
            >
              <MapPin className="w-3 h-3 text-green-600" />
              <span>{user.location.village ? `${user.location.village}, ` : ''}{user.location.district}</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        
        {/* Device Voice Support Notice (Displayed only when native TTS pack is absent) */}
        {voiceNotice && (
          <div
            id="voice-unavailable-toast"
            className="mb-6 bg-amber-50 border-2 border-amber-300 rounded-2xl p-4 sm:p-5 shadow-lg flex items-start justify-between gap-3 text-amber-950 animate-fadeIn"
          >
            <div className="flex items-start space-x-3">
              <div className="w-9 h-9 rounded-xl bg-amber-200 text-amber-900 flex items-center justify-center font-bold text-lg shrink-0 mt-0.5">
                📢
              </div>
              <div className="space-y-1">
                <p className="font-bold text-sm sm:text-base leading-snug">
                  {voiceNotice.message}
                </p>
                <p className="text-xs text-amber-800">
                  {currentLang === 'te'
                    ? 'మీ సౌలభ్యం కోసం స్క్రీన్‌పై ఉన్న పూర్తి సమాచారాన్ని తెలుగులోనే స్పష్టంగా చదువుకోవచ్చు.'
                    : currentLang === 'kn'
                    ? 'ನಿಮ್ಮ ಸುಲಭಕ್ಕಾಗಿ ಪರದೆಯ ಮೇಲಿನ ಎಲ್ಲ ವಿವರಗಳನ್ನು ಕನ್ನಡದಲ್ಲೇ ಓದಬಹುದು.'
                    : currentLang === 'hi'
                    ? 'आपकी सुविधा के लिए स्क्रीन पर सभी जानकारी हिंदी में उपलब्ध है।'
                    : 'All detailed information is presented on screen in your chosen language.'}
                </p>
              </div>
            </div>
            <button
              id="btn-close-voice-toast"
              type="button"
              onClick={() => setVoiceNotice(null)}
              className="p-1.5 rounded-lg hover:bg-amber-200 text-amber-800 transition-colors cursor-pointer shrink-0"
              aria-label="Close notice"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}

        {activeView === 'dashboard' && (
          <Dashboard
            user={user}
            currentLang={currentLang}
            weather={weather}
            prices={prices}
            onNavigate={(v) => {
              setActiveView(v);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenVoiceAsk={() => setIsVoiceAskOpen(true)}
            onChangeLocation={() => setIsLocationModalOpen(true)}
            isGlobalSpeaking={isGlobalSpeaking}
            onStopGlobalAudio={handleStopAudio}
          />
        )}

        {activeView === 'weather' && (
          <WeatherView
            weather={weather}
            location={user.location}
            currentLang={currentLang}
            isLoading={isLoadingData}
            onRefresh={() => loadLocationData(user.location)}
            onChangeLocation={() => setIsLocationModalOpen(true)}
            isGlobalSpeaking={isGlobalSpeaking}
            onStopGlobalAudio={handleStopAudio}
          />
        )}

        {activeView === 'weather-warning' && (
          <WeatherWarningView
            warnings={warnings}
            location={user.location}
            currentLang={currentLang}
            isLoading={isLoadingData}
            onRefresh={() => loadLocationData(user.location)}
            isGlobalSpeaking={isGlobalSpeaking}
            onStopGlobalAudio={handleStopAudio}
          />
        )}

        {activeView === 'crop-doctor' && (
          <CropDoctorView
            currentLang={currentLang}
            isGlobalSpeaking={isGlobalSpeaking}
            onStopGlobalAudio={handleStopAudio}
          />
        )}

        {activeView === 'crop-info' && (
          <CropInfoView
            currentLang={currentLang}
            isGlobalSpeaking={isGlobalSpeaking}
            onStopGlobalAudio={handleStopAudio}
            initialCropId={selectedCropId}
          />
        )}

        {activeView === 'crop-advisory' && (
          <CropAdvisoryView
            location={user.location}
            currentLang={currentLang}
            isGlobalSpeaking={isGlobalSpeaking}
            onStopGlobalAudio={handleStopAudio}
            initialCropId={selectedCropId}
          />
        )}

        {activeView === 'market-prices' && (
          <MarketPricesView
            prices={prices}
            location={user.location}
            currentLang={currentLang}
            isLoading={isLoadingData}
            onRefresh={() => loadLocationData(user.location)}
            onChangeLocation={() => setIsLocationModalOpen(true)}
            isGlobalSpeaking={isGlobalSpeaking}
            onStopGlobalAudio={handleStopAudio}
            initialCommodity={selectedCommodity}
          />
        )}

        {activeView === 'nearby-mandi' && (
          <NearbyMandiView
            mandis={mandis}
            location={user.location}
            currentLang={currentLang}
            isGlobalSpeaking={isGlobalSpeaking}
            onStopGlobalAudio={handleStopAudio}
          />
        )}

        {activeView === 'schemes' && (
          <SchemesView
            currentLang={currentLang}
            isGlobalSpeaking={isGlobalSpeaking}
            onStopGlobalAudio={handleStopAudio}
          />
        )}

        {activeView === 'kisan-help' && (
          <KisanHelpView
            currentLang={currentLang}
            isGlobalSpeaking={isGlobalSpeaking}
            onStopGlobalAudio={handleStopAudio}
          />
        )}

        {activeView === 'profile' && (
          <ProfileView
            user={user}
            currentLang={currentLang}
            onUpdateProfile={(updated) => setUser(updated)}
            onBackToDashboard={() => setActiveView('dashboard')}
          />
        )}

      </main>

      {/* Global Voice Ask Modal */}
      <VoiceAskModal
        isOpen={isVoiceAskOpen}
        onClose={() => setIsVoiceAskOpen(false)}
        user={user}
        currentLang={currentLang}
        isGlobalSpeaking={isGlobalSpeaking}
        onStopGlobalAudio={handleStopAudio}
        onUpdateUser={(updated) => setUser(updated)}
        onNavigate={(v, params) => {
          if (params?.cropId) {
            setSelectedCropId(params.cropId);
          }
          if (params?.commodity) {
            setSelectedCommodity(params.commodity);
          }
          setActiveView(v);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Zero-Typing Voice Profile Onboarding Modal */}
      <VoiceOnboardingModal
        isOpen={isVoiceOnboardingOpen}
        onClose={() => setIsVoiceOnboardingOpen(false)}
        currentLang={currentLang}
        onCompleteProfile={(updatedProfile) => {
          setUser(updatedProfile);
          if (typeof window !== 'undefined') {
            localStorage.setItem('farmerSaathiProfileCreated', 'true');
          }
        }}
      />

      {/* Location Change Modal / Overlay */}
      {isLocationModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/70 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <LocationSelector
              currentLocation={user.location}
              currentLang={currentLang}
              onSaveLocation={handleSaveLocation}
              onCancel={() => setIsLocationModalOpen(false)}
            />
          </div>
        </div>
      )}

      {/* Mobile-First Sticky Bottom Action Bar */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 flex items-center justify-around shadow-lg">
        
        {/* Home */}
        <button
          id="btn-bottom-home"
          type="button"
          onClick={() => setActiveView('dashboard')}
          className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-colors cursor-pointer ${
            activeView === 'dashboard' ? 'text-green-700 font-bold' : 'text-slate-500'
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] mt-0.5">{t.home}</span>
        </button>

        {/* Weather */}
        <button
          id="btn-bottom-weather"
          type="button"
          onClick={() => setActiveView('weather')}
          className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-colors cursor-pointer ${
            activeView === 'weather' ? 'text-green-700 font-bold' : 'text-slate-500'
          }`}
        >
          <CloudSun className="w-5 h-5" />
          <span className="text-[10px] mt-0.5">{t.weather}</span>
        </button>

        {/* CENTER PRIMARY: VOICE ASK BUTTON */}
        <button
          id="btn-bottom-voice"
          type="button"
          onClick={() => setIsVoiceAskOpen(true)}
          className="flex flex-col items-center justify-center -mt-5 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg shadow-green-200 active:scale-95 transition-transform border-4 border-white cursor-pointer"
        >
          <Mic className="w-5 h-5 animate-pulse text-white" />
          <span className="text-[9px] font-extrabold mt-0.5">Ask</span>
        </button>

        {/* Crop Doctor */}
        <button
          id="btn-bottom-doctor"
          type="button"
          onClick={() => setActiveView('crop-doctor')}
          className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-colors cursor-pointer ${
            activeView === 'crop-doctor' ? 'text-green-700 font-bold' : 'text-slate-500'
          }`}
        >
          <Camera className="w-5 h-5" />
          <span className="text-[10px] mt-0.5">Doctor</span>
        </button>

        {/* Mandi */}
        <button
          id="btn-bottom-mandi"
          type="button"
          onClick={() => setActiveView('market-prices')}
          className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-colors cursor-pointer ${
            activeView === 'market-prices' ? 'text-green-700 font-bold' : 'text-slate-500'
          }`}
        >
          <DollarSign className="w-5 h-5" />
          <span className="text-[10px] mt-0.5">{t.marketPrices}</span>
        </button>

      </nav>

    </div>
  );
}
