import React, { useState, useEffect } from 'react';
import { Search, Mic, Volume2, VolumeX, Sparkles, Send, BookOpen, AlertCircle, X, CheckCircle2, Play, Pause, RotateCcw } from 'lucide-react';
import { CropGuide, LanguageCode } from '../types';
import { CROPS_CATALOG, getLocalizedCrop, getLocalizedCropName } from '../data/cropsData';
import { getT } from '../i18n/translations';
import { voiceService, VoiceUnavailableDetails } from '../services/voiceService';
import { api } from '../services/api';
import { generateCompleteCropAudioGuide, CompleteCropAudioGuide } from '../utils/cropAudioGuideGenerator';
import { resolveAgriProductVisual, resolveDiseaseVisual, getCropGrowthStages } from '../utils/productImages';

interface CropInfoViewProps {
  currentLang: LanguageCode;
  isGlobalSpeaking: boolean;
  onStopGlobalAudio: () => void;
  initialCropId?: string;
}

export const CropInfoView: React.FC<CropInfoViewProps> = ({
  currentLang,
  isGlobalSpeaking,
  onStopGlobalAudio,
  initialCropId,
}) => {
  const t = getT(currentLang);

  const [selectedCrop, setSelectedCrop] = useState<CropGuide>(() => {
    if (initialCropId) {
      const found = CROPS_CATALOG.find((c) => c.id === initialCropId);
      if (found) return found;
    }
    return CROPS_CATALOG[0];
  });

  useEffect(() => {
    if (initialCropId) {
      const found = CROPS_CATALOG.find((c) => c.id === initialCropId);
      if (found) setSelectedCrop(found);
    }
  }, [initialCropId]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSpeakingLocal, setIsSpeakingLocal] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'fertilizer' | 'pests' | 'harvest'>('overview');

  // Full Audio Guide Modal / Player State
  const [isAudioGuideModalOpen, setIsAudioGuideModalOpen] = useState<boolean>(false);
  const [currentAudioGuide, setCurrentAudioGuide] = useState<CompleteCropAudioGuide | null>(null);
  const [voiceNotice, setVoiceNotice] = useState<string | null>(null);

  // Question on selected crop
  const [cropQuestion, setCropQuestion] = useState<string>('');
  const [cropAnswer, setCropAnswer] = useState<string>('');
  const [isAsking, setIsAsking] = useState<boolean>(false);
  const [isListeningCropQ, setIsListeningCropQ] = useState<boolean>(false);

  const localizedCrop = getLocalizedCrop(selectedCrop, currentLang);
  const cropDisplayName = getLocalizedCropName(selectedCrop, currentLang);

  // Re-generate guide whenever crop or language changes
  useEffect(() => {
    const guide = generateCompleteCropAudioGuide(selectedCrop, currentLang);
    setCurrentAudioGuide(guide);
  }, [selectedCrop, currentLang]);

  // Listen for voice unavailability events
  useEffect(() => {
    const unsubscribe = voiceService.subscribeVoiceUnavailable((details: VoiceUnavailableDetails) => {
      if (details.lang === currentLang) {
        setVoiceNotice(details.message);
      }
    });
    return unsubscribe;
  }, [currentLang]);

  // Filter crops based on search query
  const filteredCrops = CROPS_CATALOG.filter((c) => {
    const q = searchQuery.toLowerCase();
    return (
      c.nameEn.toLowerCase().includes(q) ||
      c.nameTe.toLowerCase().includes(q) ||
      c.nameKn.toLowerCase().includes(q) ||
      c.nameHi.toLowerCase().includes(q) ||
      c.category.toLowerCase().includes(q)
    );
  });

  /**
   * Complete Audio Guide Narration:
   * Strictly speaks in currentLang (Telugu, Kannada, Hindi, English).
   * Opens the reader modal so the farmer can both hear and read along.
   */
  const handleStartCompleteAudioGuide = () => {
    onStopGlobalAudio();
    setVoiceNotice(null);

    const guide = generateCompleteCropAudioGuide(selectedCrop, currentLang);
    setCurrentAudioGuide(guide);
    setIsAudioGuideModalOpen(true);

    setIsSpeakingLocal(true);
    const success = voiceService.speak(
      guide.fullSpokenScript,
      currentLang,
      () => setIsSpeakingLocal(true),
      () => setIsSpeakingLocal(false),
      (err) => {
        setIsSpeakingLocal(false);
      },
      (details) => {
        setVoiceNotice(details.message);
        setIsSpeakingLocal(false);
      }
    );

    if (!success) {
      setIsSpeakingLocal(false);
    }
  };

  const stopSpeaking = () => {
    voiceService.stopSpeaking();
    setIsSpeakingLocal(false);
  };

  // Voice crop search
  const handleVoiceSearch = () => {
    onStopGlobalAudio();
    voiceService.startListening(
      currentLang,
      (text) => {
        setSearchQuery(text);
        const match = CROPS_CATALOG.find(
          (c) =>
            c.nameEn.toLowerCase().includes(text.toLowerCase()) ||
            c.nameTe.toLowerCase().includes(text.toLowerCase()) ||
            c.nameKn.toLowerCase().includes(text.toLowerCase()) ||
            c.nameHi.toLowerCase().includes(text.toLowerCase())
        );
        if (match) {
          setSelectedCrop(match);
        }
      },
      () => {},
      () => {}
    );
  };

  // Ask specific question about selected crop
  const handleAskCropQuestion = async (queryText?: string) => {
    const q = (queryText || cropQuestion).trim();
    if (!q) return;

    setIsAsking(true);
    try {
      const prompt = `Regarding ${cropDisplayName} (${selectedCrop.nameEn}) crop cultivation: ${q}`;
      const res = await api.askVoiceQuestion(prompt, currentLang, 'Farm Field');
      setCropAnswer(res.answer);
      voiceService.speak(res.answer, currentLang);
    } catch (e) {
      setCropAnswer(t.errorOccurred || 'Could not fetch answer. Please try again.');
    } finally {
      setIsAsking(false);
    }
  };

  const toggleVoiceCropQuestion = () => {
    if (isListeningCropQ) {
      voiceService.stopListening();
      setIsListeningCropQ(false);
      return;
    }

    setCropQuestion('');
    setIsListeningCropQ(true);

    voiceService.startListening(
      currentLang,
      (text, isFinal) => {
        setCropQuestion(text);
        if (isFinal && text.trim().length > 3) {
          handleAskCropQuestion(text);
        }
      },
      () => setIsListeningCropQ(false),
      () => setIsListeningCropQ(false)
    );
  };

  const tabs = [
    { id: 'overview', label: t.tabOverview },
    { id: 'stages', label: currentLang === 'te' ? '🌱 పంట దశలు' : currentLang === 'kn' ? '🌱 ಬೆಳೆಯ ಹಂತಗಳು' : currentLang === 'hi' ? '🌱 फसल अवस्थाएं' : '🌱 Growth Stages' },
    { id: 'fertilizer', label: t.tabFertilizer },
    { id: 'pests', label: t.tabPests },
    { id: 'harvest', label: t.tabHarvest },
  ];

  return (
    <div id="crop-info-container" className="space-y-6 animate-fadeIn">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 text-white rounded-3xl p-5 sm:p-7 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-400 text-emerald-950 flex items-center justify-center shadow-lg font-bold text-2xl">
              🌾
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold">{t.cropInfoTitle}</h2>
              <p className="text-xs sm:text-sm text-emerald-100">{t.cropInfoSubtitle}</p>
            </div>
          </div>

          {/* Search bar with Voice & Typing */}
          <div className="flex items-center space-x-2 w-full md:w-80">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-emerald-300 absolute left-3.5 top-3" />
              <input
                id="input-search-crop"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchCropPlaceholder}
                className="w-full bg-emerald-900/80 border border-emerald-600/70 rounded-xl pl-9 pr-3 py-2 text-white placeholder-emerald-300/70 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
            <button
              id="btn-voice-search-crop"
              type="button"
              onClick={handleVoiceSearch}
              className="p-2 bg-amber-400 hover:bg-amber-300 text-emerald-950 rounded-xl font-bold transition-transform active:scale-95 cursor-pointer"
              title={t.speak}
            >
              <Mic className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Crop Selector Pills */}
        <div className="mt-5 pt-4 border-t border-emerald-700/60 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {filteredCrops.map((crop) => (
            <button
              key={crop.id}
              type="button"
              onClick={() => {
                setSelectedCrop(crop);
                setCropAnswer('');
                stopSpeaking();
              }}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                selectedCrop.id === crop.id
                  ? 'bg-amber-400 text-emerald-950 shadow-md scale-105'
                  : 'bg-emerald-900/60 hover:bg-emerald-900 text-white border border-emerald-700'
              }`}
            >
              <span className="text-base">{crop.icon}</span>
              <span>{getLocalizedCropName(crop, currentLang)}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Crop Detailed Guide Card */}
      <div className="bg-white rounded-3xl border border-stone-200 shadow-xl overflow-hidden space-y-6 pb-6">
        
        {/* Header with Crop Image & Audio Guide Button */}
        <div className="relative bg-stone-900 text-white min-h-[160px] sm:min-h-[180px] flex items-end p-5 sm:p-7 overflow-hidden">
          <img
            src={selectedCrop.image}
            alt={cropDisplayName}
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />

          <div className="relative z-10 w-full flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs bg-amber-400 text-emerald-950 font-bold px-2.5 py-0.5 rounded-md uppercase tracking-wider mb-1 inline-block">
                {localizedCrop.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold flex items-center gap-2">
                <span>{selectedCrop.icon}</span>
                <span>{cropDisplayName}</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-300">
                {t.cropDuration}: <span className="text-amber-300 font-semibold">{localizedCrop.cropDuration}</span>
              </p>
            </div>

            {/* Listen Audio Button */}
            {isSpeakingLocal ? (
              <button
                id="btn-stop-crop-audio"
                type="button"
                onClick={stopSpeaking}
                className="flex items-center space-x-2 bg-amber-400 hover:bg-amber-500 text-stone-900 px-5 py-2.5 rounded-2xl font-extrabold text-sm animate-pulse shadow-md cursor-pointer"
              >
                <VolumeX className="w-5 h-5" />
                <span>{t.stopAudio}</span>
              </button>
            ) : (
              <button
                id="btn-speak-crop-guide"
                type="button"
                onClick={handleStartCompleteAudioGuide}
                className="flex items-center space-x-2 bg-amber-400 hover:bg-amber-300 text-emerald-950 px-5 py-2.5 rounded-2xl font-extrabold text-xs sm:text-sm shadow-lg active:scale-95 transition-all cursor-pointer group"
              >
                <Volume2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>🔊 {t.listenFullGuide}</span>
              </button>
            )}
          </div>
        </div>

        {/* Tab Navigation for Comprehensive Points */}
        <div className="px-5 sm:px-8 border-b border-stone-200">
          <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-none">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`pb-2.5 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
                  activeTab === tab.id
                    ? 'border-emerald-700 text-emerald-900'
                    : 'border-transparent text-stone-500 hover:text-stone-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* TAB 1: OVERVIEW & SOWING */}
        {activeTab === 'overview' && (
          <div className="px-5 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-5 animate-fadeIn">
            
            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 space-y-1.5">
              <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block">
                ☀️ 1. {t.suitableSeason}
              </span>
              <p className="text-sm font-bold text-stone-900">{localizedCrop.suitableSeason}</p>
              <p className="text-xs text-stone-600 font-medium">{localizedCrop.suitableMonths}</p>
            </div>

            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 space-y-1.5">
              <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block">
                🌱 2. {t.soilRequirements}
              </span>
              <p className="text-xs sm:text-sm font-medium text-stone-800 leading-relaxed">
                {localizedCrop.soil}
              </p>
            </div>

            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 space-y-1.5">
              <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block">
                🚜 3. {t.landPreparation}
              </span>
              <p className="text-xs sm:text-sm font-medium text-stone-800 leading-relaxed">
                {localizedCrop.landPreparation}
              </p>
            </div>

            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 space-y-1.5">
              <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block">
                🌾 4. {t.seedPlanting}
              </span>
              <p className="text-xs sm:text-sm font-medium text-stone-800 leading-relaxed">
                {localizedCrop.seedPlanting}
              </p>
            </div>

            <div className="md:col-span-2 bg-emerald-50/70 p-4 rounded-2xl border border-emerald-200 space-y-1.5">
              <span className="text-[11px] font-bold text-emerald-900 uppercase tracking-wider block">
                💧 5. {t.irrigationSchedule}
              </span>
              <p className="text-xs sm:text-sm font-medium text-emerald-950 leading-relaxed">
                {localizedCrop.irrigation}
              </p>
            </div>

          </div>
        )}

        {/* TAB: GROWTH STAGES */}
        {activeTab === 'stages' && (
          <div className="px-5 sm:px-8 space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-stone-800 flex items-center gap-2">
                <span>🌱</span>
                <span>{currentLang === 'te' ? 'పంట అభివృద్ధి దశలు & సమయపాలన' : currentLang === 'kn' ? 'ಬೆಳೆಯ ಬೆಳವಣಿಗೆಯ ಹಂತಗಳು' : currentLang === 'hi' ? 'फसल विकास के चरण' : 'Crop Growth Stages & Timelines'} - {cropDisplayName}</span>
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {getCropGrowthStages(selectedCrop.id).map((stage) => (
                <div
                  key={stage.stageNumber}
                  className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div className="relative h-32 bg-stone-900">
                    <img
                      src={stage.imageUrl}
                      alt={stage.stageNameEn}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
                    <div className="absolute top-2 left-2 bg-emerald-600 text-white font-black text-[10px] px-2 py-0.5 rounded-full shadow-xs">
                      {stage.stageNumber}
                    </div>
                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-xs text-stone-900 font-bold text-[10px] px-2 py-0.5 rounded-full shadow-xs">
                      ⏱️ {stage.daysRange}
                    </div>
                    <div className="absolute bottom-2 left-3 right-3">
                      <p className="text-xs font-black text-white drop-shadow-sm">
                        {currentLang === 'te' ? stage.stageNameTe : stage.stageNameEn}
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 space-y-1.5 bg-stone-50/50 flex-1 flex flex-col justify-between">
                    <p className="text-[11px] text-stone-700 font-medium leading-relaxed">
                      🎯 <strong className="text-stone-900">{currentLang === 'te' ? 'కీలక చర్య:' : 'Key Action:'}</strong>{' '}
                      {currentLang === 'te' ? stage.keyActionTe : stage.keyActionEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: STAGE-WISE FERTILIZERS */}
        {activeTab === 'fertilizer' && (
          <div className="px-5 sm:px-8 space-y-4 animate-fadeIn">
            <h4 className="text-sm font-bold text-stone-800 flex items-center gap-2">
              <span>🧪</span>
              <span>{t.tabFertilizer} - {cropDisplayName}</span>
            </h4>

            <div className="space-y-4">
              {localizedCrop.fertilizerRequirements.map((fert, idx) => {
                const visual = resolveAgriProductVisual(fert.nutrient + ' ' + fert.stage, 'fertilizer');
                return (
                  <div
                    key={idx}
                    className="bg-stone-50 border border-stone-200 rounded-2xl p-4 space-y-3 shadow-xs"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold text-emerald-900 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                        {t.stageNumber} {idx + 1}: {fert.stage}
                      </span>
                      <span className="text-xs font-bold text-stone-700">{fert.nutrient}</span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 items-start">
                      {visual ? (
                        <div className="w-full sm:w-48 shrink-0 bg-white p-2.5 rounded-xl border border-stone-200 shadow-xs flex flex-col items-center text-center">
                          <img
                            src={visual.imageUrl}
                            alt={visual.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-24 object-cover rounded-lg"
                          />
                          <span className="text-[11px] font-bold text-stone-900 mt-1.5 line-clamp-1">
                            {visual.name}
                          </span>
                          <span className="text-[9px] text-emerald-700 font-bold">
                            {visual.commonBrands.slice(0, 2).join(', ')}
                          </span>
                          <span className="text-[9px] text-stone-500 font-mono mt-0.5">
                            {visual.chemicalFormula}
                          </span>
                        </div>
                      ) : (
                        <div className="w-full sm:w-48 shrink-0 bg-stone-100 p-2 rounded-xl border border-stone-200 flex items-center justify-center text-[10px] text-stone-500 font-semibold h-24">
                          {currentLang === 'te' ? 'ఉత్పత్తి చిత్రం అందుబాటులో లేదు' : 'Product image unavailable'}
                        </div>
                      )}

                      <div className="flex-1 space-y-1.5">
                        <p className="text-xs sm:text-sm font-bold text-stone-900">
                          {t.dosage} <span className="text-emerald-800 font-black">{fert.dosage}</span>
                        </p>
                        <p className="text-xs text-stone-600 font-medium leading-relaxed">
                          💡 <strong>{t.applicationTip}</strong> {fert.notes}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 3: PESTS & PREVENTION */}
        {activeTab === 'pests' && (
          <div className="px-5 sm:px-8 space-y-4 animate-fadeIn">
            <h4 className="text-sm font-bold text-stone-800 flex items-center gap-2">
              <span>🛡️</span>
              <span>{t.tabPests} - {cropDisplayName}</span>
            </h4>

            <div className="space-y-4">
              {localizedCrop.pestDiseasePrevention.map((pest, idx) => {
                const productVisual = resolveAgriProductVisual(pest.prevention + ' ' + pest.problem, 'fungicide');
                const diseaseVisual = resolveDiseaseVisual(pest.problem, selectedCrop.id);

                return (
                  <div
                    key={idx}
                    className="bg-amber-50/40 border border-amber-200 rounded-2xl p-4 space-y-4 shadow-xs"
                  >
                    <div className="flex items-center justify-between">
                      <h5 className="text-xs sm:text-sm font-extrabold text-amber-950 flex items-center gap-1.5">
                        <span>⚠️</span> {pest.problem}
                      </h5>
                    </div>

                    {/* Dual Visual: Disease Symptoms & Medicine */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* 1. Disease Symptom Identification */}
                      <div className="bg-white p-3 rounded-xl border border-stone-200 shadow-xs flex flex-col space-y-2">
                        <span className="text-[10px] font-extrabold text-stone-500 uppercase tracking-wider">
                          📸 {currentLang === 'te' ? 'లక్షణాలు / తెగులు గుర్తింపు' : 'Symptom & Disease Visual'}
                        </span>
                        <img
                          src={diseaseVisual.imageUrl}
                          alt={diseaseVisual.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-28 object-cover rounded-lg"
                        />
                        <p className="text-xs text-stone-700 leading-relaxed font-medium">
                          <strong className="text-stone-900">{t.symptoms}</strong> {pest.symptoms}
                        </p>
                      </div>

                      {/* 2. Medicine / Control Product */}
                      <div className="bg-white p-3 rounded-xl border border-emerald-200 shadow-xs flex flex-col space-y-2">
                        <span className="text-[10px] font-extrabold text-emerald-800 uppercase tracking-wider">
                          💊 {currentLang === 'te' ? 'సిఫార్సు చేసిన మందు & బ్రాండ్లు' : 'Recommended Input / Medicine'}
                        </span>
                        {productVisual ? (
                          <>
                            <img
                              src={productVisual.imageUrl}
                              alt={productVisual.name}
                              referrerPolicy="no-referrer"
                              className="w-full h-28 object-cover rounded-lg"
                            />
                            <span className="text-[11px] font-bold text-stone-900">
                              {productVisual.name}
                            </span>
                            <span className="text-[10px] text-emerald-800 font-bold">
                              {productVisual.commonBrands.join(', ')}
                            </span>
                          </>
                        ) : null}
                        <div className="bg-emerald-50 p-2 rounded-lg text-xs font-bold text-emerald-950 mt-1">
                          <strong>{t.recommendedControl}</strong> {pest.prevention}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 4: HARVEST & MARKET */}
        {activeTab === 'harvest' && (
          <div className="px-5 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-5 animate-fadeIn">
            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 space-y-2">
              <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block">
                🧺 6. {t.harvestMethod}
              </span>
              <p className="text-xs sm:text-sm font-medium text-stone-800 leading-relaxed">
                {localizedCrop.harvest}
              </p>
            </div>

            <div className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-200 space-y-2">
              <span className="text-[11px] font-bold text-emerald-900 uppercase tracking-wider block">
                💰 7. {t.marketInformation}
              </span>
              <p className="text-xs sm:text-sm font-medium text-emerald-950 leading-relaxed">
                {localizedCrop.marketInfo}
              </p>
            </div>
          </div>
        )}

        {/* ASK QUESTIONS ABOUT THIS CROP */}
        <div className="px-5 sm:px-8 pt-4 border-t border-stone-200 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs sm:text-sm font-bold text-stone-800 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-700" />
              {t.askCropQuestionHeading}
            </span>
          </div>

          <div className="flex space-x-2">
            <input
              id="input-ask-crop"
              type="text"
              value={cropQuestion}
              onChange={(e) => setCropQuestion(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAskCropQuestion()}
              placeholder={t.askCropQuestionPlaceholder}
              className="flex-1 bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
            <button
              id="btn-voice-crop-question"
              type="button"
              onClick={toggleVoiceCropQuestion}
              className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                isListeningCropQ
                  ? 'bg-red-600 text-white border-red-600 animate-pulse'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-700 border-stone-300'
              }`}
              title={t.speak}
            >
              <Mic className="w-4 h-4" />
            </button>
            <button
              id="btn-submit-crop-question"
              type="button"
              onClick={() => handleAskCropQuestion()}
              disabled={isAsking || !cropQuestion.trim()}
              className="bg-emerald-700 hover:bg-emerald-800 disabled:bg-stone-300 text-white px-4 rounded-xl font-bold text-xs sm:text-sm transition-colors cursor-pointer"
            >
              {isAsking ? '...' : <Send className="w-4 h-4" />}
            </button>
          </div>

          {cropAnswer && (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-xs sm:text-sm text-stone-800 space-y-1.5">
              <div className="font-bold text-emerald-950 flex items-center justify-between">
                <span>💡 {t.answerTitle}</span>
                <button
                  type="button"
                  onClick={() => voiceService.speak(cropAnswer, currentLang)}
                  className="text-xs text-emerald-700 hover:underline flex items-center gap-1 cursor-pointer font-bold"
                >
                  <Volume2 className="w-3.5 h-3.5" /> {t.listenAnswer}
                </button>
              </div>
              <p className="leading-relaxed">{cropAnswer}</p>
            </div>
          )}
        </div>

      </div>

      {/* COMPLETE AUDIO GUIDE MODAL & READER (Interactive, 100% Localized, Zero English Leakage) */}
      {isAudioGuideModalOpen && currentAudioGuide && (
        <div
          id="modal-complete-audio-guide"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
        >
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-emerald-300 overflow-hidden">
            
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white p-5 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-amber-400 text-emerald-950 flex items-center justify-center font-bold text-xl shadow">
                  🎧
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg">
                    {cropDisplayName} — {t.listenFullGuide}
                  </h3>
                  <p className="text-xs text-emerald-200">
                    {currentLang === 'te'
                      ? 'సమగ్ర సాగు మార్గదర్శి ఆడియో & స్క్రిప్ట్'
                      : currentLang === 'kn'
                      ? 'ಸಮಗ್ರ ಕೃಷಿ ಮಾರ್ಗದರ್ಶಿ ಆಡಿಯೋ ಮತ್ತು ವಿವರ'
                      : currentLang === 'hi'
                      ? 'संपूर्ण फसल मार्गदर्शिका ऑडियो एवं विवरण'
                      : 'Complete Crop Cultivation Audio Guide'}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  stopSpeaking();
                  setIsAudioGuideModalOpen(false);
                }}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Notification if Native Voice is Unavailable on this Device */}
            {voiceNotice && (
              <div className="bg-amber-50 border-b border-amber-200 p-4 flex items-start space-x-3 text-amber-900 text-xs sm:text-sm">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-bold">{voiceNotice}</p>
                  <p className="text-[11px] text-amber-700 mt-0.5">
                    {currentLang === 'te'
                      ? 'మీకు సౌలభ్యంగా ఉండటానికి క్రింద పూర్తి వివరాలు తెలుగులో ఇవ్వబడ్డాయి.'
                      : currentLang === 'kn'
                      ? 'ನಿಮ್ಮ ಸುಲಭಕ್ಕಾಗಿ ಕೆಳಗೆ ಸಂಪೂರ್ಣ ವಿವರಗಳನ್ನು ಕನ್ನಡದಲ್ಲಿ ನೀಡಲಾಗಿದೆ.'
                      : currentLang === 'hi'
                      ? 'आपकी सुविधा के लिए नीचे पूरी जानकारी दी गई है।'
                      : 'Complete information is provided below for reading.'}
                  </p>
                </div>
              </div>
            )}

            {/* Audio Controls Bar */}
            <div className="bg-emerald-50/90 border-b border-emerald-200 px-5 py-3 flex items-center justify-between gap-2">
              <div className="flex items-center space-x-2">
                {isSpeakingLocal ? (
                  <button
                    id="btn-pause-guide-audio"
                    type="button"
                    onClick={stopSpeaking}
                    className="flex items-center space-x-1.5 bg-amber-400 hover:bg-amber-500 text-emerald-950 px-4 py-2 rounded-xl font-bold text-xs shadow cursor-pointer animate-pulse"
                  >
                    <Pause className="w-4 h-4" />
                    <span>{t.stopAudio}</span>
                  </button>
                ) : (
                  <button
                    id="btn-play-guide-audio"
                    type="button"
                    onClick={handleStartCompleteAudioGuide}
                    className="flex items-center space-x-1.5 bg-emerald-700 hover:bg-emerald-800 text-white px-4 py-2 rounded-xl font-bold text-xs shadow cursor-pointer active:scale-95 transition-all"
                  >
                    <Play className="w-4 h-4" />
                    <span>{currentLang === 'te' ? 'ఆడియో ప్రారంభించండి' : currentLang === 'kn' ? 'ಆಡಿಯೋ ಪ್ರಾರಂಭಿಸಿ' : currentLang === 'hi' ? 'ऑडियो शुरू करें' : 'Play Audio'}</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={handleStartCompleteAudioGuide}
                  className="flex items-center space-x-1 bg-white hover:bg-stone-100 text-stone-700 border border-stone-300 px-3 py-2 rounded-xl font-semibold text-xs cursor-pointer"
                  title="Restart"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{currentLang === 'te' ? 'మొదటి నుండి' : 'Restart'}</span>
                </button>
              </div>

              <span className="text-xs font-bold text-emerald-900 flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{currentAudioGuide.structuredSections.length} {currentLang === 'te' ? 'ప్రధాన విభాగాలు' : 'Key Sections'}</span>
              </span>
            </div>

            {/* Scrollable Structured Full Guide Content */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-4 flex-1">
              {currentAudioGuide.structuredSections.map((sec, idx) => (
                <div
                  key={idx}
                  className="bg-stone-50 hover:bg-emerald-50/50 transition-colors border border-stone-200 rounded-2xl p-4 space-y-1.5"
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-base">{sec.icon}</span>
                    <h4 className="text-xs sm:text-sm font-extrabold text-stone-900">
                      {idx + 1}. {sec.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700 font-medium leading-relaxed pl-6">
                    {sec.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="bg-stone-100 p-4 border-t border-stone-200 flex items-center justify-between">
              <span className="text-[11px] text-stone-500 font-medium">
                🌱 {currentLang === 'te' ? 'రైతు సాథి అధికారిక సాగు మార్గదర్శి' : 'Farmer Saathi Official Guide'}
              </span>
              <button
                type="button"
                onClick={() => {
                  stopSpeaking();
                  setIsAudioGuideModalOpen(false);
                }}
                className="bg-stone-800 hover:bg-stone-900 text-white px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer"
              >
                {t.close}
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
