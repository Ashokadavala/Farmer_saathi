import React, { useState } from 'react';
import { User, Phone, MapPin, Globe, Save, Check, ArrowLeft, Mic, MicOff, Sparkles, Volume2, VolumeX, AlertTriangle, ShieldCheck } from 'lucide-react';
import { FarmerLocation, LanguageCode, UserProfile } from '../types';
import { LANGUAGES, getT } from '../i18n/translations';
import { LocationSelector } from './LocationSelector';
import { api } from '../services/api';
import { voiceService } from '../services/voiceService';

interface ProfileViewProps {
  user: UserProfile;
  currentLang: LanguageCode;
  onUpdateProfile: (updated: UserProfile) => void;
  onBackToDashboard: () => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({
  user,
  currentLang,
  onUpdateProfile,
  onBackToDashboard,
}) => {
  const t = getT(currentLang);

  const [name, setName] = useState<string>(user.name || '');
  const [mobile, setMobile] = useState<string>(user.mobile || '');
  const [language, setLanguage] = useState<LanguageCode>(user.language || currentLang);
  const [location, setLocation] = useState<FarmerLocation>(user.location);
  const [isEditingLocation, setIsEditingLocation] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  // Voice Account Registration / Spoken Bio Parser State
  const [isListeningBio, setIsListeningBio] = useState<boolean>(false);
  const [isParsingBio, setIsParsingBio] = useState<boolean>(false);
  const [spokenTranscript, setSpokenTranscript] = useState<string>('');
  const [parsedPreview, setParsedPreview] = useState<{
    name: string;
    state: string;
    district: string;
    village: string;
    spokenConfirmation?: string;
  } | null>(null);

  // Field-specific voice recognition states
  const [isListeningName, setIsListeningName] = useState<boolean>(false);
  const [isListeningMobile, setIsListeningMobile] = useState<boolean>(false);

  // 1. Full Voice Profile Intake
  const toggleVoiceBio = () => {
    if (isListeningBio) {
      voiceService.stopListening();
      setIsListeningBio(false);
      return;
    }

    setSpokenTranscript('');
    setParsedPreview(null);
    setErrorMsg('');
    setIsListeningBio(true);

    const started = voiceService.startListening(
      language,
      (text, isFinal) => {
        setSpokenTranscript(text);
        if (isFinal && text.trim().length > 5) {
          handleParseSpokenBio(text);
        }
      },
      () => {
        setIsListeningBio(false);
      },
      (err) => {
        setIsListeningBio(false);
        setErrorMsg(`Voice error: ${err}`);
      }
    );

    if (!started) {
      setIsListeningBio(false);
      setErrorMsg(t.speechNotSupported);
    }
  };

  const handleParseSpokenBio = async (text: string) => {
    if (!text.trim()) return;
    setIsParsingBio(true);
    setErrorMsg('');

    try {
      const parsed = await api.parseFarmerVoice(text, language);
      setParsedPreview(parsed);

      if (parsed.name) setName(parsed.name);
      if (parsed.state && parsed.district) {
        setLocation((prev) => ({
          ...prev,
          state: parsed.state,
          district: parsed.district,
          village: parsed.village || prev.village || 'Gotluru',
        }));
      }

      // Read back spoken confirmation in farmer's language
      if (parsed.spokenConfirmation) {
        voiceService.speak(parsed.spokenConfirmation, language);
      }
    } catch (e: any) {
      console.error('Failed to parse bio:', e);
      setErrorMsg(currentLang === 'te' ? 'మాటల గుర్తింపు విఫలమైంది. దయచేసి వివరాలను స్పష్టంగా చెప్పండి.' : 'Could not parse spoken details. Please speak clearly.');
    } finally {
      setIsParsingBio(false);
    }
  };

  // 2. Inline voice recognition for Name
  const toggleVoiceName = () => {
    if (isListeningName) {
      voiceService.stopListening();
      setIsListeningName(false);
      return;
    }

    setIsListeningName(true);
    voiceService.startListening(
      language,
      (text, isFinal) => {
        const cleaned = text.replace(/^(నా పేరు|పేరు|ನನ್ನ ಹೆಸರು|मेरा नाम|my name is)\s*/i, '').trim();
        setName(cleaned);
        if (isFinal) setIsListeningName(false);
      },
      () => setIsListeningName(false),
      () => setIsListeningName(false)
    );
  };

  // 3. Inline voice recognition for Mobile
  const toggleVoiceMobile = () => {
    if (isListeningMobile) {
      voiceService.stopListening();
      setIsListeningMobile(false);
      return;
    }

    setIsListeningMobile(true);
    voiceService.startListening(
      language,
      (text, isFinal) => {
        const digits = text.replace(/\D/g, '');
        if (digits) setMobile(digits);
        if (isFinal) setIsListeningMobile(false);
      },
      () => setIsListeningMobile(false),
      () => setIsListeningMobile(false)
    );
  };

  // Apply parsed preview into form and save
  const handleConfirmAndSaveVoiceBio = async () => {
    if (!parsedPreview) return;
    setIsSaving(true);
    setErrorMsg('');

    try {
      const updated = await api.updateProfile({
        id: user.id,
        name: parsedPreview.name || name || 'Farmer',
        mobile: mobile || user.mobile || '9876543210',
        state: parsedPreview.state || location.state,
        district: parsedPreview.district || location.district,
        village: parsedPreview.village || location.village,
        language: language,
      });

      onUpdateProfile(updated);
      setParsedPreview(null);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3500);

      const confirmMsg = language === 'te'
        ? 'మీ ప్రొఫైల్ మరియు చిరునామా విజయవంతంగా భద్రపరచబడ్డాయి!'
        : language === 'kn'
        ? 'ನಿಮ್ಮ ವಿವರಗಳು ಯಶಸ್ವಿಯಾಗಿ ಉಳಿಸಲಾಗಿದೆ!'
        : language === 'hi'
        ? 'आपकी जानकारी सफलतापूर्वक सुरक्षित कर ली गई है!'
        : 'Profile details saved successfully!';

      voiceService.speak(confirmMsg, language);
    } catch (err: any) {
      setErrorMsg(err.message || 'Failed to update profile.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !mobile.trim()) {
      setErrorMsg(currentLang === 'te' ? 'రైతు పేరు మరియు మొబైల్ నంబర్ తప్పనిసరి.' : 'Farmer Name and Mobile Number are required.');
      return;
    }

    setIsSaving(true);
    setErrorMsg('');
    try {
      const updated = await api.updateProfile({
        id: user.id,
        name: name.trim(),
        mobile: mobile.trim(),
        state: location.state,
        district: location.district,
        village: location.village,
        language: language,
      });

      onUpdateProfile(updated);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);

      const confirmMsg = language === 'te'
        ? `${name} గారి వివరాలు భద్రపరచబడ్డాయి.`
        : language === 'kn'
        ? `${name} ಅವರ ವಿವರಗಳನ್ನು ಉಳಿಸಲಾಗಿದೆ.`
        : language === 'hi'
        ? `${name} जी का विवरण सुरक्षित किया गया।`
        : 'Farmer profile saved successfully.';

      voiceService.speak(confirmMsg, language);
    } catch (err: any) {
      setErrorMsg(err.message || 'Failed to update profile.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div id="profile-container" className="space-y-6 animate-fadeIn max-w-3xl mx-auto">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          id="btn-back-from-profile"
          type="button"
          onClick={onBackToDashboard}
          className="flex items-center space-x-1.5 text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-900 bg-emerald-50 px-3.5 py-2 rounded-xl border border-emerald-200 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.back}</span>
        </button>

        <h2 className="text-lg sm:text-xl font-bold text-stone-900">
          {t.farmerProfile}
        </h2>
        <div className="w-16" />
      </div>

      {/* FEATURE 1: VOICE ACCOUNT REGISTRATION & SPOKEN PROFILE CARD */}
      <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 text-white rounded-3xl p-5 sm:p-7 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-400 text-emerald-950 rounded-full text-xs font-black">
              <span>🎙️</span>
              <span>{currentLang === 'te' ? 'వాయిస్ ప్రొఫైల్ నమోదు' : currentLang === 'kn' ? 'ಧ್ವನಿ ಪ್ರೊಫೈಲ್ ನೋಂದಣಿ' : currentLang === 'hi' ? 'बोलकर प्रोफाइल बनाएं' : 'Voice Account Setup'}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black">
              {currentLang === 'te'
                ? 'మీ వివరాలు మాట్లాడండి (రైతు ఖాతా నమోదు)'
                : currentLang === 'kn'
                ? 'ನಿಮ್ಮ ವಿವರಗಳನ್ನು ಮಾತನಾಡಿ'
                : currentLang === 'hi'
                ? 'बोलकर अपनी जानकारी दर्ज करें'
                : 'Speak Your Information to Setup Profile'}
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed max-w-xl">
              {currentLang === 'te'
                ? 'ఉదాహరణకు: "నా పేరు రమేష్. నేను గోట్లూరు గ్రామం, శ్రీ సత్యసాయి జిల్లా, ఆంధ్రప్రదేశ్‌లో నివసిస్తున్నాను."'
                : currentLang === 'kn'
                ? 'ಉದಾಹರಣೆ: "ನನ್ನ ಹೆಸರು ರಮೇಶ್. ನಾನು ಗೊಟ್ಲೂರು ಗ್ರಾಮ, ಶ್ರೀ ಸತ್ಯಸಾಯಿ ಜಿಲ್ಲೆ, ಆಂಧ್ರಪ್ರದೇಶ."'
                : currentLang === 'hi'
                ? 'उदाहरण: "मेरा नाम रमेश है। मैं गोडलूरु गांव, श्री सत्य साईं जिला, आंध्र प्रदेश में रहता हूं।"'
                : 'Example: "My name is Ramesh. I live in Gotluru village, Sri Sathya Sai district, Andhra Pradesh."'}
            </p>
          </div>

          <button
            id="btn-voice-bio-record"
            type="button"
            onClick={toggleVoiceBio}
            className={`px-6 py-3.5 rounded-2xl font-black text-sm flex items-center justify-center space-x-2 shadow-lg transition-all active:scale-95 cursor-pointer shrink-0 ${
              isListeningBio
                ? 'bg-red-500 text-white animate-pulse border-2 border-white'
                : 'bg-amber-400 hover:bg-amber-300 text-emerald-950 border-2 border-amber-300'
            }`}
          >
            {isListeningBio ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
            <span>{isListeningBio ? (currentLang === 'te' ? '⏹️ ఆపండి' : currentLang === 'kn' ? '⏹️ ನಿಲ್ಲಿಸಿ' : currentLang === 'hi' ? '⏹️ रोकें' : '⏹️ Stop') : (currentLang === 'te' ? '🎙️ మాట్లాడండి' : currentLang === 'kn' ? '🎙️ ಮಾತನಾಡಿ' : currentLang === 'hi' ? '🎙️ बोलें' : '🎙️ Tap to Speak')}</span>
          </button>
        </div>

        {/* Live spoken status & parsing */}
        {isListeningBio && (
          <div className="bg-white/10 rounded-2xl p-3.5 border border-white/20 text-xs sm:text-sm space-y-1">
            <span className="text-amber-300 font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-400 animate-ping" />
              {t.listening}...
            </span>
            <p className="text-white italic">"{spokenTranscript || (currentLang === 'te' ? 'మీ పేరు, ఊరు, జిల్లా మాట్లాడండి...' : 'Listening to your voice...')}"</p>
          </div>
        )}

        {isParsingBio && (
          <div className="bg-white/15 rounded-2xl p-3.5 border border-white/20 text-xs text-amber-200 flex items-center gap-2 animate-pulse">
            <Sparkles className="w-4 h-4 text-amber-300 animate-spin" />
            <span>{currentLang === 'te' ? 'AI మీ వివరాలను గుర్తిస్తోంది...' : 'AI is analyzing your spoken details...'}</span>
          </div>
        )}

        {/* Detected Info Confirmation Card */}
        {parsedPreview && (
          <div className="bg-white text-stone-900 rounded-2xl p-4 sm:p-5 shadow-lg border-2 border-amber-400 space-y-3 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-stone-100 pb-2">
              <span className="text-xs font-black text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                {currentLang === 'te' ? 'గుర్తించిన రైతు సమాచారం (నిర్ధారించండి)' : 'Detected Farmer Information'}
              </span>
              <span className="bg-emerald-100 text-emerald-900 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                AI Detected
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-200">
                <span className="text-stone-500 block text-[10px] font-bold uppercase">{t.farmerName}</span>
                <span className="font-extrabold text-stone-900 text-sm">{parsedPreview.name || name || '—'}</span>
              </div>
              <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-200">
                <span className="text-stone-500 block text-[10px] font-bold uppercase">{t.village}</span>
                <span className="font-extrabold text-stone-900 text-sm">{parsedPreview.village || '—'}</span>
              </div>
              <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-200">
                <span className="text-stone-500 block text-[10px] font-bold uppercase">{t.district}</span>
                <span className="font-extrabold text-stone-900 text-sm">{parsedPreview.district || '—'}</span>
              </div>
              <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-200">
                <span className="text-stone-500 block text-[10px] font-bold uppercase">{t.state}</span>
                <span className="font-extrabold text-stone-900 text-sm">{parsedPreview.state || '—'}</span>
              </div>
            </div>

            {parsedPreview.spokenConfirmation && (
              <p className="text-xs text-stone-600 bg-amber-50/70 p-2.5 rounded-xl border border-amber-200/60 font-medium">
                🔊 {parsedPreview.spokenConfirmation}
              </p>
            )}

            <div className="flex gap-2 pt-1">
              <button
                type="button"
                onClick={handleConfirmAndSaveVoiceBio}
                disabled={isSaving}
                className="flex-1 bg-emerald-700 hover:bg-emerald-800 text-white py-2.5 rounded-xl font-black text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-md active:scale-98 cursor-pointer"
              >
                <Check className="w-4 h-4" />
                <span>{isSaving ? 'Saving...' : (currentLang === 'te' ? '✅ నిర్ధారించి భద్రపరచండి' : currentLang === 'kn' ? '✅ ದೃಢೀಕರಿಸಿ ಉಳಿಸಿ' : currentLang === 'hi' ? '✅ पुष्टि कर सुरक्षित करें' : 'Confirm & Save')}</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Main Profile Form (Typing + Individual Voice Mics) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xl space-y-6">
        
        <div className="flex items-center space-x-4 border-b border-stone-100 pb-5">
          <div className="w-16 h-16 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shadow-md font-bold text-2xl">
            <User className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-stone-900">
              {name || 'Farmer'}
            </h3>
            <p className="text-xs text-stone-500 flex items-center gap-1 mt-0.5">
              <MapPin className="w-3 h-3 text-amber-500" />
              {location.village}, {location.district}, {location.state}
            </p>
          </div>
        </div>

        {errorMsg && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-3.5 rounded-xl text-xs font-semibold">
            {errorMsg}
          </div>
        )}

        {saveSuccess && (
          <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 p-3.5 rounded-xl text-xs font-bold flex items-center space-x-2">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>{currentLang === 'te' ? 'రైతు వివరాలు విజయవంతంగా భద్రపరచబడ్డాయి!' : 'Profile and Location saved successfully in database!'}</span>
          </div>
        )}

        <form onSubmit={handleSaveProfile} className="space-y-5">
          
          {/* Name with Typing + Voice */}
          <div>
            <label className="block text-xs sm:text-sm font-bold text-stone-700 mb-1.5">
              👤 {t.farmerName} <span className="text-xs text-stone-400 font-normal">({currentLang === 'te' ? 'టైప్ చేయండి లేదా మైక్ నొక్కండి' : 'Type or Speak'})</span>
            </label>
            <div className="flex space-x-2">
              <input
                id="input-profile-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Venkata Ramana"
                className="flex-1 bg-stone-50 border border-stone-300 rounded-xl px-4 py-2.5 text-stone-900 font-medium text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                required
              />
              <button
                type="button"
                onClick={toggleVoiceName}
                className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                  isListeningName
                    ? 'bg-red-600 text-white border-red-600 animate-pulse'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-700 border-stone-300'
                }`}
                title={t.speak}
              >
                <Mic className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Mobile with Typing + Voice */}
          <div>
            <label className="block text-xs sm:text-sm font-bold text-stone-700 mb-1.5">
              📱 {t.mobileNumber} <span className="text-xs text-stone-400 font-normal">({currentLang === 'te' ? '10 అంకెల మొబైల్ నంబర్' : '10-digit number'})</span>
            </label>
            <div className="flex space-x-2">
              <input
                id="input-profile-mobile"
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="10-digit mobile number"
                className="flex-1 bg-stone-50 border border-stone-300 rounded-xl px-4 py-2.5 text-stone-900 font-medium text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                required
              />
              <button
                type="button"
                onClick={toggleVoiceMobile}
                className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                  isListeningMobile
                    ? 'bg-red-600 text-white border-red-600 animate-pulse'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-700 border-stone-300'
                }`}
                title={t.speak}
              >
                <Mic className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Language Preference */}
          <div>
            <label className="block text-xs sm:text-sm font-bold text-stone-700 mb-1.5">
              🌐 {t.selectLanguage}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => setLanguage(l.code)}
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                    language === l.code
                      ? 'bg-emerald-700 text-white border-emerald-700 shadow-md font-bold'
                      : 'bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-200'
                  }`}
                >
                  <span className="text-base block mb-0.5">{l.flag}</span>
                  <span className="text-xs">{l.nativeLabel}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Location Details / Selector */}
          <div className="pt-2">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs sm:text-sm font-bold text-stone-700">
                📍 {t.savedLocation}
              </label>
              <button
                type="button"
                onClick={() => setIsEditingLocation(!isEditingLocation)}
                className="text-xs text-emerald-700 font-bold hover:underline cursor-pointer"
              >
                {isEditingLocation ? (currentLang === 'te' ? 'లొకేషన్ మార్పు ముగించు' : 'Close Location Picker') : (currentLang === 'te' ? 'లొకేషన్ మార్చండి (రాష్ట్రం / జిల్లా / గ్రామం)' : 'Change Location (State / District / Village)')}
              </button>
            </div>

            {isEditingLocation ? (
              <LocationSelector
                currentLocation={location}
                currentLang={language}
                onSaveLocation={(newLoc) => {
                  setLocation(newLoc);
                  setIsEditingLocation(false);
                }}
                onCancel={() => setIsEditingLocation(false)}
              />
            ) : (
              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-stone-500">{currentLang === 'te' ? 'ప్రస్తుత గ్రామం & జిల్లా:' : 'Active Village & District:'}</p>
                  <p className="text-sm font-bold text-stone-900">
                    {location.village}, {location.district} ({location.state})
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsEditingLocation(true)}
                  className="bg-emerald-100 text-emerald-900 hover:bg-emerald-200 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer"
                >
                  {currentLang === 'te' ? 'సవరించు' : 'Edit'}
                </button>
              </div>
            )}
          </div>

          {/* Save Button */}
          <div className="pt-4 border-t border-stone-100">
            <button
              id="btn-save-farmer-profile"
              type="submit"
              disabled={isSaving}
              className="w-full flex items-center justify-center space-x-2 bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold py-3.5 rounded-2xl shadow-lg transition-all active:scale-98 cursor-pointer text-sm sm:text-base"
            >
              <Save className="w-5 h-5" />
              <span>{isSaving ? (currentLang === 'te' ? 'భద్రపరుస్తున్నాము...' : 'Saving Profile...') : t.saveProfile}</span>
            </button>
          </div>

        </form>

      </div>

    </div>
  );
};
