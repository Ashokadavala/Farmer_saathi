import React, { useState, useEffect } from 'react';
import { MapPin, Mic, MicOff, Search, Check, ListFilter, Keyboard } from 'lucide-react';
import { FarmerLocation, LanguageCode } from '../types';
import { INDIAN_STATES, resolveLocationFromText } from '../data/locations';
import { getT } from '../i18n/translations';
import { voiceService } from '../services/voiceService';

interface LocationSelectorProps {
  currentLocation: FarmerLocation;
  currentLang: LanguageCode;
  onSaveLocation: (newLocation: FarmerLocation) => void;
  onCancel?: () => void;
}

type InputMode = 'select' | 'type' | 'voice';

export const LocationSelector: React.FC<LocationSelectorProps> = ({
  currentLocation,
  currentLang,
  onSaveLocation,
  onCancel,
}) => {
  const t = getT(currentLang);
  const [mode, setMode] = useState<InputMode>('select');

  // State for dropdown selections
  const [selectedState, setSelectedState] = useState<string>(currentLocation.state || 'Andhra Pradesh');
  const [selectedDistrict, setSelectedDistrict] = useState<string>(currentLocation.district || 'Sri Sathya Sai');
  const [selectedVillage, setSelectedVillage] = useState<string>(currentLocation.village || 'Gotluru');

  // State for free-text search / typing
  const [typeQuery, setTypeQuery] = useState<string>('');

  // State for voice recognition
  const [isListening, setIsListening] = useState<boolean>(false);
  const [voiceTranscript, setVoiceTranscript] = useState<string>('');
  const [voiceFeedback, setVoiceFeedback] = useState<string>('');
  const [matchedLocationPreview, setMatchedLocationPreview] = useState<FarmerLocation | null>(null);

  // Available districts for chosen state
  const currentStateObj = INDIAN_STATES.find((s) => s.name === selectedState) || INDIAN_STATES[0];
  const availableDistricts = currentStateObj.districts;

  // Available villages for chosen district
  const currentDistrictObj = availableDistricts.find((d) => d.name === selectedDistrict) || availableDistricts[0];
  const popularVillages = currentDistrictObj ? currentDistrictObj.popularVillages : ['Gotluru', 'Puttaparthi'];

  // Handle State Change
  const handleStateChange = (stateName: string) => {
    setSelectedState(stateName);
    const stateObj = INDIAN_STATES.find((s) => s.name === stateName);
    if (stateObj && stateObj.districts.length > 0) {
      const firstDist = stateObj.districts[0];
      setSelectedDistrict(firstDist.name);
      setSelectedVillage(firstDist.popularVillages[0] || 'Main');
    }
  };

  // Handle District Change
  const handleDistrictChange = (distName: string) => {
    setSelectedDistrict(distName);
    const distObj = availableDistricts.find((d) => d.name === distName);
    if (distObj && distObj.popularVillages.length > 0) {
      setSelectedVillage(distObj.popularVillages[0]);
    }
  };

  // Process free text / typing
  const handleTypeSearch = (text: string) => {
    setTypeQuery(text);
    if (!text.trim()) {
      setMatchedLocationPreview(null);
      return;
    }
    const res = resolveLocationFromText(text);
    if (res.matched && res.state && res.district) {
      setMatchedLocationPreview({
        state: res.state,
        district: res.district,
        village: res.village || selectedVillage,
        latitude: res.lat,
        longitude: res.lon,
      });
    } else {
      setMatchedLocationPreview(null);
    }
  };

  // Process Voice Recognition for location
  const toggleVoiceInput = () => {
    if (isListening) {
      voiceService.stopListening();
      setIsListening(false);
      return;
    }

    setVoiceTranscript('');
    setVoiceFeedback(t.listening);
    setIsListening(true);

    const started = voiceService.startListening(
      currentLang,
      (text, isFinal) => {
        setVoiceTranscript(text);
        const resolved = resolveLocationFromText(text);
        if (resolved.matched && resolved.state && resolved.district) {
          const loc: FarmerLocation = {
            state: resolved.state,
            district: resolved.district,
            village: resolved.village || 'Gotluru',
            latitude: resolved.lat,
            longitude: resolved.lon,
          };
          setMatchedLocationPreview(loc);
          setSelectedState(resolved.state);
          setSelectedDistrict(resolved.district);
          if (resolved.village) setSelectedVillage(resolved.village);
          setVoiceFeedback(`✅ Recognized: ${resolved.district} (${resolved.state})`);
        } else {
          setVoiceFeedback(`Listening: "${text}"...`);
        }
      },
      () => {
        setIsListening(false);
      },
      (err) => {
        setIsListening(false);
        setVoiceFeedback(`Voice error: ${err}`);
      }
    );

    if (!started) {
      setIsListening(false);
      setVoiceFeedback(t.speechNotSupported);
    }
  };

  const handleApplyPreview = () => {
    if (matchedLocationPreview) {
      setSelectedState(matchedLocationPreview.state);
      setSelectedDistrict(matchedLocationPreview.district);
      setSelectedVillage(matchedLocationPreview.village);
      onSaveLocation(matchedLocationPreview);
    }
  };

  const handleSave = () => {
    const newLoc: FarmerLocation = {
      state: selectedState,
      district: selectedDistrict,
      village: selectedVillage.trim() || 'Main Village',
      latitude: currentDistrictObj?.lat,
      longitude: currentDistrictObj?.lon,
    };
    onSaveLocation(newLoc);
  };

  return (
    <div id="location-selector-card" className="bg-white rounded-2xl border border-emerald-100 shadow-xl overflow-hidden">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-800 to-teal-800 text-white p-4 sm:p-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-700/80 flex items-center justify-center border border-emerald-500/40">
            <MapPin className="w-6 h-6 text-amber-300" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold">{t.changeLocation}</h2>
            <p className="text-xs sm:text-sm text-emerald-100">{t.savedLocation}: {currentLocation.village}, {currentLocation.district}, {currentLocation.state}</p>
          </div>
        </div>

        {/* Input Mode Selector (Select / Type / Voice) */}
        <div className="grid grid-cols-3 gap-2 mt-4 bg-emerald-950/40 p-1.5 rounded-xl border border-emerald-600/40">
          <button
            id="btn-loc-mode-select"
            type="button"
            onClick={() => setMode('select')}
            className={`flex items-center justify-center space-x-1.5 py-2 px-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              mode === 'select'
                ? 'bg-amber-400 text-emerald-950 shadow-sm'
                : 'text-emerald-100 hover:bg-emerald-800/60'
            }`}
          >
            <ListFilter className="w-4 h-4" />
            <span>1. {t.typeOrSelect.split('/')[1] || 'Select'}</span>
          </button>

          <button
            id="btn-loc-mode-type"
            type="button"
            onClick={() => setMode('type')}
            className={`flex items-center justify-center space-x-1.5 py-2 px-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              mode === 'type'
                ? 'bg-amber-400 text-emerald-950 shadow-sm'
                : 'text-emerald-100 hover:bg-emerald-800/60'
            }`}
          >
            <Keyboard className="w-4 h-4" />
            <span>2. {t.typeOrSelect.split('/')[0] || 'Type'}</span>
          </button>

          <button
            id="btn-loc-mode-voice"
            type="button"
            onClick={() => {
              setMode('voice');
              if (!isListening) toggleVoiceInput();
            }}
            className={`flex items-center justify-center space-x-1.5 py-2 px-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              mode === 'voice'
                ? 'bg-amber-400 text-emerald-950 shadow-sm'
                : 'text-emerald-100 hover:bg-emerald-800/60'
            }`}
          >
            <Mic className={`w-4 h-4 ${isListening ? 'animate-bounce text-red-700' : ''}`} />
            <span>3. 🎤 {t.speak}</span>
          </button>
        </div>
      </div>

      <div className="p-4 sm:p-6 space-y-5">

        {/* METHOD 1: SELECT (State -> District -> Village) */}
        {mode === 'select' && (
          <div className="space-y-4 animate-fadeIn">
            {/* State Select */}
            <div>
              <label className="block text-xs sm:text-sm font-bold text-stone-700 mb-1.5">
                🏛️ {t.state}
              </label>
              <select
                id="select-state"
                value={selectedState}
                onChange={(e) => handleStateChange(e.target.value)}
                className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-stone-800 font-medium focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm"
              >
                {INDIAN_STATES.map((s) => (
                  <option key={s.name} value={s.name}>
                    {s.name} ({s.districts.length} Districts Supported)
                  </option>
                ))}
              </select>
            </div>

            {/* District Select */}
            <div>
              <label className="block text-xs sm:text-sm font-bold text-stone-700 mb-1.5">
                📍 {t.district} (Complete Supported List)
              </label>
              <select
                id="select-district"
                value={selectedDistrict}
                onChange={(e) => handleDistrictChange(e.target.value)}
                className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-stone-800 font-medium focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm"
              >
                {availableDistricts.map((d) => (
                  <option key={d.name} value={d.name}>
                    {d.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Village Select & Custom input */}
            <div>
              <label className="block text-xs sm:text-sm font-bold text-stone-700 mb-1.5">
                🏡 {t.village}
              </label>
              <div className="space-y-2">
                <input
                  id="input-village"
                  type="text"
                  value={selectedVillage}
                  onChange={(e) => setSelectedVillage(e.target.value)}
                  placeholder="Enter or select your village (e.g., Gotluru)"
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-stone-800 font-medium focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm"
                />
                <div className="flex flex-wrap gap-1.5 items-center">
                  <span className="text-[11px] text-stone-500">Popular:</span>
                  {popularVillages.map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => setSelectedVillage(v)}
                      className={`text-xs px-2.5 py-1 rounded-lg border transition-colors cursor-pointer ${
                        selectedVillage === v
                          ? 'bg-emerald-600 text-white border-emerald-600 font-semibold'
                          : 'bg-stone-100 text-stone-700 border-stone-200 hover:bg-stone-200'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* METHOD 2: TYPE (Search District/Village) */}
        {mode === 'type' && (
          <div className="space-y-4 animate-fadeIn">
            <div>
              <label className="block text-xs sm:text-sm font-bold text-stone-700 mb-1.5">
                ⌨️ {currentLang === 'te' ? 'జిల్లా లేదా గ్రామం పేరు టైప్ చేయండి' : currentLang === 'kn' ? 'ಜಿಲ್ಲೆ ಅಥವಾ ಗ್ರಾಮದ ಹೆಸರನ್ನು ಟೈಪ್ ಮಾಡಿ' : currentLang === 'hi' ? 'जिले या गांव का नाम टाइप करें' : 'Type District or Village Name'}
              </label>
              <div className="relative">
                <Search className="w-5 h-5 text-stone-400 absolute left-3.5 top-3" />
                <input
                  id="input-type-location"
                  type="text"
                  value={typeQuery}
                  onChange={(e) => handleTypeSearch(e.target.value)}
                  placeholder={currentLang === 'te' ? 'ఉదా: శ్రీ సత్యసాయి, గోట్లూరు, అనంతపురం, పుట్టపర్తి...' : 'Type e.g., "Sri Sathya Sai", "Gotluru", "Anantapur"...'}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl pl-10 pr-4 py-2.5 text-stone-800 font-medium focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm"
                />
              </div>
              <p className="text-xs text-stone-500 mt-1.5">
                💡 {currentLang === 'te' ? 'ఆంధ్రప్రదేశ్, తెలంగాణ లేదా భారతీయ ఏ జిల్లా లేదా గ్రామం అయినా శోధించవచ్చు.' : 'Search any Indian state, district or village.'}
              </p>
            </div>

            {matchedLocationPreview && (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3.5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-emerald-900">{currentLang === 'te' ? 'గుర్తించిన లొకేషన్:' : 'Matched Location:'}</p>
                  <p className="text-sm font-semibold text-emerald-800">
                    📍 {matchedLocationPreview.village}, {matchedLocationPreview.district} ({matchedLocationPreview.state})
                  </p>
                </div>
                <button
                  id="btn-apply-typed-loc"
                  type="button"
                  onClick={handleApplyPreview}
                  className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-3 py-2 rounded-lg transition-colors cursor-pointer"
                >
                  {currentLang === 'te' ? 'ఎంచుకోండి' : 'Select'}
                </button>
              </div>
            )}
          </div>
        )}

        {/* METHOD 3: VOICE (Speak District / Village) */}
        {mode === 'voice' && (
          <div className="space-y-4 text-center py-2 animate-fadeIn">
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
              <p className="text-xs sm:text-sm font-medium text-emerald-900 mb-2">
                🎤 {t.voiceLocationHint}
              </p>
              
              <button
                id="btn-voice-record-loc"
                type="button"
                onClick={toggleVoiceInput}
                className={`w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full flex flex-col items-center justify-center transition-all shadow-lg active:scale-95 cursor-pointer ${
                  isListening
                    ? 'bg-red-600 text-white animate-pulse ring-8 ring-red-200'
                    : 'bg-emerald-700 hover:bg-emerald-800 text-white'
                }`}
              >
                {isListening ? (
                  <>
                    <Mic className="w-8 h-8 sm:w-10 sm:h-10 animate-bounce" />
                    <span className="text-[10px] font-bold mt-1">{t.listening}</span>
                  </>
                ) : (
                  <>
                    <Mic className="w-8 h-8 sm:w-10 sm:h-10 text-amber-300" />
                    <span className="text-[10px] font-bold mt-1">{t.speak}</span>
                  </>
                )}
              </button>

              {/* Real-time speech display */}
              <div className="mt-4 min-h-[44px]">
                {voiceTranscript ? (
                  <p className="text-sm font-bold text-stone-800 bg-white p-2 rounded-xl border border-stone-200 inline-block shadow-sm">
                    "{voiceTranscript}"
                  </p>
                ) : (
                  <p className="text-xs text-stone-500">
                    {voiceFeedback || (currentLang === 'te' ? 'మైక్ నొక్కి మీ జిల్లా లేదా గ్రామం పేరు చెప్పండి' : 'Tap the mic and say your district or village name')}
                  </p>
                )}
              </div>
            </div>

            {matchedLocationPreview && (
              <div className="bg-emerald-100/80 border border-emerald-300 rounded-xl p-3.5 flex items-center justify-between text-left">
                <div>
                  <p className="text-xs font-bold text-emerald-900">✨ {currentLang === 'te' ? 'గుర్తించిన లొకేషన్:' : 'Recognized Location:'}</p>
                  <p className="text-sm font-bold text-emerald-950">
                    📍 {matchedLocationPreview.village}, {matchedLocationPreview.district} ({matchedLocationPreview.state})
                  </p>
                </div>
                <button
                  id="btn-apply-voice-loc"
                  type="button"
                  onClick={handleApplyPreview}
                  className="bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold px-3.5 py-2 rounded-lg shadow-sm transition-colors cursor-pointer"
                >
                  {currentLang === 'te' ? 'దీనిని వాడండి' : 'Use This'}
                </button>
              </div>
            )}
          </div>
        )}

        {/* Selected Summary & Save Button */}
        <div className="pt-2 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-stone-600 text-center sm:text-left">
            <span className="font-bold text-stone-800">{currentLang === 'te' ? 'ఎంచుకున్న లొకేషన్:' : 'Final Location:'}</span> {selectedVillage}, {selectedDistrict}, {selectedState}
          </div>

          <div className="flex items-center space-x-2 w-full sm:w-auto">
            {onCancel && (
              <button
                id="btn-cancel-location"
                type="button"
                onClick={onCancel}
                className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl border border-stone-300 text-stone-700 font-semibold text-xs sm:text-sm hover:bg-stone-100 transition-colors cursor-pointer"
              >
                {t.back}
              </button>
            )}
            <button
              id="btn-save-location"
              type="button"
              onClick={handleSave}
              className="flex-1 sm:flex-initial flex items-center justify-center space-x-2 bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <Check className="w-4 h-4" />
              <span>{t.saveLocation}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
