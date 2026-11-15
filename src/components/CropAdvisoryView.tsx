import React, { useState, useEffect } from 'react';
import {
  Search,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Droplets,
  FlaskConical,
  ShieldAlert,
  Sparkles,
  AlertCircle,
  HelpCircle,
  CheckCircle2,
  Layers,
  Clock,
  ListChecks,
  ImageOff,
  ChevronRight,
  ShieldCheck,
  CalendarCheck,
  Tractor,
  Sprout,
} from 'lucide-react';
import { FarmerLocation, LanguageCode } from '../types';
import { getT } from '../i18n/translations';
import { voiceService } from '../services/voiceService';
import { identifyCropFromQuery } from '../utils/cropIdentifier';
import {
  ALL_CROP_ADVISORIES,
  getCropAdvisory,
  getAllSupportedAdvisories,
} from '../data/advisories';
import { CropAdvisoryRecord, CropGrowthStage } from '../data/cropAdvisoryData';
import { PackageOfPracticesView } from './advisory/PackageOfPracticesView';
import { NutrientMasterPlanView } from './advisory/NutrientMasterPlanView';

interface CropAdvisoryViewProps {
  location: FarmerLocation;
  currentLang: LanguageCode;
  isGlobalSpeaking: boolean;
  onStopGlobalAudio: () => void;
  initialCropId?: string;
}

export const CropAdvisoryView: React.FC<CropAdvisoryViewProps> = ({
  location,
  currentLang,
  isGlobalSpeaking,
  onStopGlobalAudio,
  initialCropId,
}) => {
  const t = getT(currentLang);

  // Active state - initialized to initialCropId if valid, otherwise groundnut
  const [selectedCropId, setSelectedCropId] = useState<string>(() => {
    if (initialCropId && ALL_CROP_ADVISORIES[initialCropId.toLowerCase()]) {
      return initialCropId.toLowerCase();
    }
    return 'groundnut';
  });
  const [activeSubTab, setActiveSubTab] = useState<'stages' | 'practices' | 'nutrients'>('stages');
  const [selectedStageIndex, setSelectedStageIndex] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isListeningVoice, setIsListeningVoice] = useState<boolean>(false);
  const [unrecognizedPrompt, setUnrecognizedPrompt] = useState<string | null>(null);
  const [isSpeakingLocal, setIsSpeakingLocal] = useState<boolean>(false);
  const [brokenImages, setBrokenImages] = useState<Record<string, boolean>>({});

  // Sync if initialCropId changes from navigation
  useEffect(() => {
    if (initialCropId && ALL_CROP_ADVISORIES[initialCropId.toLowerCase()]) {
      setSelectedCropId(initialCropId.toLowerCase());
    }
  }, [initialCropId]);

  // Retrieve advisory for selected crop - STRICT RULE: Never returns another crop
  const currentAdvisory: CropAdvisoryRecord | undefined = getCropAdvisory(selectedCropId);
  const allCrops = getAllSupportedAdvisories();

  // Reset stage index and audio when crop changes
  useEffect(() => {
    setSelectedStageIndex(0);
    stopSpeaking();
  }, [selectedCropId]);

  const handleImageError = (imgKey: string) => {
    setBrokenImages((prev) => ({ ...prev, [imgKey]: true }));
  };

  // Handle Text Search Query
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const detectedId = identifyCropFromQuery(searchQuery);
    if (detectedId && ALL_CROP_ADVISORIES[detectedId]) {
      setSelectedCropId(detectedId);
      setUnrecognizedPrompt(null);
      setSearchQuery('');
    } else {
      setUnrecognizedPrompt(searchQuery.trim());
    }
  };

  // Handle Voice Search / Speech
  const toggleVoiceSearch = () => {
    if (isListeningVoice) {
      voiceService.stopListening();
      setIsListeningVoice(false);
      return;
    }

    onStopGlobalAudio();
    stopSpeaking();
    setIsListeningVoice(true);
    setUnrecognizedPrompt(null);

    voiceService.startListening(
      currentLang,
      (transcript, isFinal) => {
        setSearchQuery(transcript);
        if (isFinal && transcript.trim().length > 1) {
          setIsListeningVoice(false);
          const detectedId = identifyCropFromQuery(transcript);
          if (detectedId && ALL_CROP_ADVISORIES[detectedId]) {
            setSelectedCropId(detectedId);
            setUnrecognizedPrompt(null);
            setSearchQuery('');
          } else {
            setUnrecognizedPrompt(transcript.trim());
          }
        }
      },
      () => setIsListeningVoice(false),
      () => setIsListeningVoice(false)
    );
  };

  // Text-To-Speech for Current View - Adapts to Growth Stages, POP, or Nutrients Plan
  const speakCurrentAdvisory = () => {
    if (!currentAdvisory) return;
    onStopGlobalAudio();

    const cropName = currentAdvisory.cropName[currentLang] || currentAdvisory.cropName.en;
    let speechText = '';

    if (activeSubTab === 'practices') {
      const pop = currentAdvisory;
      if (currentLang === 'te') {
        speechText = `${cropName} పంట సమగ్ర సాగు పద్ధతుల సలహా. నేల అవసరాలు: ${pop.soilRequirements.te}. విత్తనం మరియు విత్తే పద్ధతి: ${pop.seedAndSowing.te}. `;
        if (pop.landPreparation) speechText += `భూమి తయారీ: ${pop.landPreparation.description.te}. `;
        if (pop.seedAndSowingPractice) speechText += `విత్తన శుద్ధి: ${pop.seedAndSowingPractice.treatment.description.te}. `;
        if (pop.waterAndWeedManagement) speechText += `కలుపు నివారణ: ${pop.waterAndWeedManagement.weeding.description.te}. `;
        if (pop.harvestingGuide) speechText += `కోత విధానం: ${pop.harvestingGuide.te}.`;
      } else if (currentLang === 'kn') {
        speechText = `${cropName} ಸಮಗ್ರ ಕೃಷಿ ಪದ್ಧತಿಗಳ ಸಲಹೆ. ಮಣ್ಣು: ${pop.soilRequirements.kn}. ಬಿತ್ತನೆ: ${pop.seedAndSowing.kn}. `;
        if (pop.landPreparation) speechText += `ಭೂಮಿ ಸಿದ್ಧತೆ: ${pop.landPreparation.description.kn}. `;
        if (pop.harvestingGuide) speechText += `ಕಟಾವು: ${pop.harvestingGuide.kn}.`;
      } else if (currentLang === 'hi') {
        speechText = `${cropName} सम्पूर्ण पैकेज ऑफ प्रैक्टिसेज सलाह। मिट्टी: ${pop.soilRequirements.hi}। बीज एवं बुवाई: ${pop.seedAndSowing.hi}। `;
        if (pop.landPreparation) speechText += `खेत की तैयारी: ${pop.landPreparation.description.hi}। `;
        if (pop.seedAndSowingPractice) speechText += `बीजोपचार: ${pop.seedAndSowingPractice.treatment.description.hi}। `;
        if (pop.harvestingGuide) speechText += `कटाई एवं भंडारण: ${pop.harvestingGuide.hi}।`;
      } else {
        speechText = `Complete Package of Practices for ${cropName}. Soil: ${pop.soilRequirements.en}. Sowing: ${pop.seedAndSowing.en}. `;
        if (pop.landPreparation) speechText += `Land preparation: ${pop.landPreparation.description.en}. `;
        if (pop.seedAndSowingPractice) speechText += `Seed treatment: ${pop.seedAndSowingPractice.treatment.description.en}. `;
        if (pop.harvestingGuide) speechText += `Harvesting: ${pop.harvestingGuide.en}.`;
      }
    } else if (activeSubTab === 'nutrients') {
      const plan = currentAdvisory.nutrientsMasterPlan;
      if (plan) {
        const prim = plan.primary.map((p) => `${p.fertilizerProduct}: ${p.dosage}`).join('. ');
        const sec = plan.secondary.map((s) => `${s.fertilizerProduct}: ${s.dosage}`).join('. ');
        const micro = plan.micronutrients.map((m) => `${m.fertilizerProduct}: ${m.dosage}`).join('. ');

        if (currentLang === 'te') {
          speechText = `${cropName} పూర్తి సీజన్ ఎరువుల యాజమాన్యం. ప్రధాన ఎరువులు: ${prim}. ద్వితీయ పోషకాలు: ${sec}. సూక్ష్మ పోషకాలు: ${micro}.`;
        } else if (currentLang === 'kn') {
          speechText = `${cropName} ಪೋಷಕಾಂಶಗಳ ಸಮಗ್ರ ಯೋಜನೆ. ಮುಖ್ಯ ಗೊಬ್ಬರಗಳು: ${prim}. ಇತರ ಪೋಷಕಾಂಶಗಳು: ${sec}. ಲಘು ಪೋಷಕಾಂಶಗಳು: ${micro}.`;
        } else if (currentLang === 'hi') {
          speechText = `${cropName} सम्पूर्ण पोषण मास्टर प्लान। मुख्य उर्वरक: ${prim}। द्वितीयक पोषक तत्व: ${sec}। सूक्ष्म पोषक तत्व: ${micro}।`;
        } else {
          speechText = `Nutrient master plan for ${cropName}. Primary fertilizers: ${prim}. Secondary: ${sec}. Micronutrients: ${micro}.`;
        }
      } else {
        speechText = `${cropName} nutrient management plan.`;
      }
    } else {
      // stages
      const stage: CropGrowthStage | undefined = currentAdvisory.stages[selectedStageIndex];
      if (!stage) return;

      const stageName = stage.name[currentLang] || stage.name.en;
      const timing = stage.timing[currentLang] || stage.timing.en;
      const whatToDoText = stage.whatToDo ? (stage.whatToDo[currentLang] || stage.whatToDo.en) : '';
      const irrigation = stage.irrigationGuide[currentLang] || stage.irrigationGuide.en;
      const weather = stage.weatherPrecaution[currentLang] || stage.weatherPrecaution.en;

      const fertilizersDesc = stage.fertilizers
        .map(
          (f) =>
            `${f.productName}: మోతాదు ${f.dosage}. ${f.purpose[currentLang] || f.purpose.en}. ${f.applicationMethod[currentLang] || f.applicationMethod.en}`
        )
        .join('. ');

      const pestsDesc = stage.pestsAndDiseases
        .map(
          (p) =>
            `${p.name[currentLang] || p.name.en}. ${p.symptoms[currentLang] || p.symptoms.en}. ${p.treatment[currentLang] || p.treatment.en}`
        )
        .join('. ');

      if (currentLang === 'te') {
        speechText = `${cropName} పంట సలహా. ${stageName}, కాల వ్యవధి: ${timing}. `;
        if (whatToDoText) speechText += `ఈ దశలో చేయవలసిన ముఖ్యమైన పనులు: ${whatToDoText}. `;
        speechText += `నీటి యాజమాన్యం: ${irrigation}. వాతావరణ హెచ్చరిక: ${weather}. `;
        if (fertilizersDesc) speechText += `సిఫార్సు చేసిన ఎరువులు మరియు పోషకాలు: ${fertilizersDesc}. `;
        if (pestsDesc) speechText += `చీడపీడల నివారణ: ${pestsDesc}. `;
      } else if (currentLang === 'kn') {
        speechText = `${cropName} ಬೆಳೆ ಸಲಹೆ. ${stageName}, ಅವಧಿ: ${timing}. `;
        if (whatToDoText) speechText += `ಈ ಹಂತದಲ್ಲಿ ಮಾಡಬೇಕಾದ ಕೆಲಸಗಳು: ${whatToDoText}. `;
        speechText += `ನೀರಾವರಿ ಮಾರ್ಗದರ್ಶನ: ${irrigation}. ಹವಾಮಾನ ಮುನ್ನೆಚ್ಚರಿಕೆ: ${weather}. `;
        if (fertilizersDesc) speechText += `ಗೊಬ್ಬರ ಮತ್ತು ಪೋಷಕಾಂಶಗಳು: ${fertilizersDesc}. `;
        if (pestsDesc) speechText += `ಕೀಟ ಮತ್ತು ರೋಗ ನಿರ್ವಹಣೆ: ${pestsDesc}. `;
      } else if (currentLang === 'hi') {
        speechText = `${cropName} फसल की कृषि सलाह। ${stageName}, समय: ${timing}। `;
        if (whatToDoText) speechText += `इस अवस्था में मुख्य कार्य: ${whatToDoText}। `;
        speechText += `सिंचाई प्रबंधन: ${irrigation}। मौसम सावधानी: ${weather}। `;
        if (fertilizersDesc) speechText += `उर्वरक एवं पोषक तत्व: ${fertilizersDesc}। `;
        if (pestsDesc) speechText += `कीट एवं रोग नियंत्रण: ${pestsDesc}। `;
      } else {
        speechText = `Crop advisory for ${cropName}. ${stageName}, timing: ${timing}. `;
        if (whatToDoText) speechText += `What to do in this stage: ${whatToDoText}. `;
        speechText += `Irrigation: ${irrigation}. Weather precaution: ${weather}. `;
        if (fertilizersDesc) speechText += `Nutrient management: ${fertilizersDesc}. `;
        if (pestsDesc) speechText += `Pest and disease control: ${pestsDesc}. `;
      }
    }

    setIsSpeakingLocal(true);
    voiceService.speak(
      speechText,
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

  const currentStage: CropGrowthStage | undefined = currentAdvisory?.stages[selectedStageIndex];

  // Helper translations for UI labels
  const uiLabels = {
    whatToDoTitle: {
      en: 'What to Do in this Growth Stage',
      te: 'ఈ దశలో రైతు చేయవలసిన ముఖ్యమైన పనులు',
      kn: 'ಈ ಹಂತದಲ್ಲಿ ರೈತರು ಮಾಡಬೇಕಾದ ಮುಖ್ಯ ಕೆಲಸಗಳು',
      hi: 'इस वृद्धि अवस्था में किसान के मुख्य कार्य',
    },
    whatToDoSubtitle: {
      en: 'Field operations, shoot care, weeding, and essential stage actions',
      te: 'క్షేత్ర పనులు, మొక్కల సంరక్షణ, కలుపు నివారణ మరియు సకాలంలో తీసుకోవాల్సిన జాగ్రత్తలు',
      kn: 'ಕ್ಷೇತ್ರದ ಕೆಲಸಗಳು, ಸಸ್ಯ ಪೋಷಣೆ, ಕಳೆ ನಿಯಂತ್ರಣ ಮತ್ತು ಅಗತ್ಯ ಕ್ರಮಗಳು',
      hi: 'खेत की देखभाल, पौधों की सार-संभाल, निराई-गुड़ाई एवं आवश्यक कार्य',
    },
    stageVisualBadge: {
      en: 'Stage Visual',
      te: 'దశ ఛాయాచిత్రం',
      kn: 'ಹಂತದ ಚಿತ್ರ',
      hi: 'अवस्था फोटो',
    },
    imgUnavailable: {
      en: 'Product image unavailable',
      te: 'ఉత్పత్తి చిత్రం అందుబాటులో లేదు',
      kn: 'ಉತ್ಪನ್ನದ ಚಿತ್ರ ಲಭ್ಯವಿಲ್ಲ',
      hi: 'उत्पाद फोटो उपलब्ध नहीं है',
    },
    fertilizerHeader: {
      en: 'Mandatory Fertilizers & Nutrients',
      te: 'ఈ దశకు నిర్దిష్టమైన ఎరువులు & పోషకాలు',
      kn: 'ಈ ಹಂತದ ನಿರ್ದಿಷ್ಟ ಗೊಬ್ಬರಗಳು',
      hi: 'इस अवस्था के अनिवार्य उर्वरक एवं पोषक तत्व',
    },
    whenToApply: {
      en: 'When to apply:',
      te: 'ఎప్పుడు వేయాలి:',
      kn: 'ಯಾವಾಗ ನೀಡಬೇಕು:',
      hi: 'कब दें:',
    },
    whyPurpose: {
      en: 'Why (Agronomic Purpose):',
      te: 'ఎందుకు / ప్రయోజనం:',
      kn: 'ಏಕೆ / ಪ್ರಯೋಜನ:',
      hi: 'उद्देश्य एवं लाभ:',
    },
    howToApply: {
      en: 'How to apply:',
      te: 'ఎలా వేయాలి (విధానం):',
      kn: 'ಹೇಗೆ ನೀಡಬೇಕು:',
      hi: 'कैसे दें (विधि):',
    },
    dosageLabel: {
      en: 'Dosage (Per Acre):',
      te: 'ఎకరానికి సిఫార్సు మోతాదు:',
      kn: 'ಎಕರೆಗೆ ನಿಖರ ಪ್ರಮಾಣ:',
      hi: 'प्रति एकड़ निर्धारित मात्रा:',
    },
    precautionsLabel: {
      en: 'Precautions:',
      te: 'జాగ్రత్తలు:',
      kn: 'ಮುನ್ನೆಚ್ಚರಿಕೆಗಳು:',
      hi: 'सावधानियां:',
    },
  };

  return (
    <div id="crop-advisory-root" className="space-y-6 animate-fadeIn pb-12">
      
      {/* 1. TOP HEADER & SEARCH / VOICE BAR */}
      <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-stone-900 text-white rounded-3xl p-5 sm:p-7 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-400 text-emerald-950 flex items-center justify-center shadow-lg font-bold text-2xl shrink-0">
              🌱
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight">{t.cropAdvisoryTitle}</h2>
              <p className="text-xs sm:text-sm text-emerald-200">{t.cropAdvisorySubtitle}</p>
            </div>
          </div>

          {/* Voice Search & Text Input */}
          <form onSubmit={handleSearchSubmit} className="flex items-center gap-2 max-w-md w-full sm:w-auto">
            <div className="relative flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  currentLang === 'te'
                    ? 'పంట పేరును వెతకండి (ఉదా: టమాట, వేరుశనగ)...'
                    : currentLang === 'kn'
                    ? 'ಬೆಳೆ ಹೆಸರು ಹುಡುಕಿ (ಉದಾ: ಟೊಮೆಟೊ, ಈರುಳ್ಳಿ)...'
                    : currentLang === 'hi'
                    ? 'फसल खोजें (उदा: टमाटर, प्याज, धान)...'
                    : 'Search crop (e.g. Tomato, Groundnut)...'
                }
                className="w-full bg-stone-800/90 text-white placeholder-stone-400 text-xs sm:text-sm pl-9 pr-3 py-2.5 rounded-2xl border border-stone-700 focus:outline-none focus:border-amber-400"
              />
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
            </div>

            <button
              type="button"
              onClick={toggleVoiceSearch}
              className={`p-2.5 rounded-2xl font-bold cursor-pointer transition-all shadow-md shrink-0 ${
                isListeningVoice
                  ? 'bg-rose-500 text-white animate-pulse'
                  : 'bg-amber-400 hover:bg-amber-300 text-emerald-950'
              }`}
              title="Voice Search Crop"
            >
              {isListeningVoice ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
            </button>
          </form>
        </div>

        {/* CROP SELECTOR CHIPS */}
        <div className="pt-3 border-t border-emerald-800/80">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider">
              {currentLang === 'te'
                ? 'పంటను ఎంచుకోండి:'
                : currentLang === 'kn'
                ? 'ಬೆಳೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ:'
                : currentLang === 'hi'
                ? 'फसल का चयन करें:'
                : 'Select Specific Crop:'}
            </span>
            <span className="text-[11px] text-emerald-400 font-medium">
              8 {currentLang === 'te' ? 'పంటల సలహాలు సిద్ధం' : 'Crops Available'}
            </span>
          </div>

          <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
            {allCrops.map((crop) => {
              const isSelected = selectedCropId === crop.cropId;
              const cropNameLocalized = crop.cropName[currentLang] || crop.cropName.en;
              return (
                <button
                  key={crop.cropId}
                  id={`btn-crop-select-${crop.cropId}`}
                  type="button"
                  onClick={() => {
                    setSelectedCropId(crop.cropId);
                    setUnrecognizedPrompt(null);
                    stopSpeaking();
                  }}
                  className={`flex items-center space-x-2 px-3.5 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer shrink-0 shadow-sm ${
                    isSelected
                      ? 'bg-amber-400 text-emerald-950 scale-105 shadow-md ring-2 ring-amber-300'
                      : 'bg-stone-800/80 hover:bg-stone-800 text-stone-200 border border-stone-700'
                  }`}
                >
                  <span className="text-base">{crop.icon}</span>
                  <span>{cropNameLocalized}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* UNRECOGNIZED CROP CLARIFICATION ALERT (If crop identification fails - Rule: Do NOT guess!) */}
      {unrecognizedPrompt && (
        <div className="bg-amber-50 border-2 border-amber-300 rounded-3xl p-5 shadow-sm text-stone-800 flex items-start space-x-3.5">
          <HelpCircle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-amber-900">
              {currentLang === 'te'
                ? `"${unrecognizedPrompt}" పంట సరిగ్గా గుర్తించబడలేదు.`
                : currentLang === 'kn'
                ? `"${unrecognizedPrompt}" ಬೆಳೆ ಗುರುತಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ.`
                : currentLang === 'hi'
                ? `"${unrecognizedPrompt}" फसल की पहचान नहीं हो सकी।`
                : `Crop "${unrecognizedPrompt}" was not recognized.`}
            </h4>
            <p className="text-xs text-amber-800 leading-relaxed">
              {currentLang === 'te'
                ? 'దయచేసి మీ పంట పేరును స్పష్టంగా మాట్లాడండి లేదా పైన ఉన్న బటన్ల నుండి నేరుగా ఎంచుకోండి. మేము ఎలాంటి ఇతర పంట సమాచారాన్ని పొరపాటున చూపించము.'
                : currentLang === 'kn'
                ? 'ದಯವಿಟ್ಟು ಬೆಳೆಯ ಹೆಸರನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ಉಚ್ಚರಿಸಿ ಅಥವಾ ಮೇಲಿನ ಪಟ್ಟಿಯಿಂದ ನೇರವಾಗಿ ಆಯ್ಕೆಮಾಡಿ.'
                : currentLang === 'hi'
                ? 'कृपया फसल का नाम स्पष्ट बोलें या ऊपर दिए गए विकल्पों में से अपनी फसल चुनें।'
                : 'Please speak the crop name clearly or choose from the supported crops above. We do not substitute generic crop data.'}
            </p>
          </div>
        </div>
      )}

      {/* 2. DEDICATED CROP HEADER CARD */}
      {currentAdvisory && (
        <div className="bg-white rounded-3xl border border-stone-200 p-5 sm:p-7 shadow-sm space-y-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div className="flex items-center space-x-4">
              <img
                src={currentAdvisory.cropImage}
                alt={currentAdvisory.cropName.en}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover shadow-md border border-stone-200"
                onError={() => handleImageError(`crop_${currentAdvisory.cropId}`)}
              />
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{currentAdvisory.icon}</span>
                  <h3 className="text-xl sm:text-2xl font-black text-stone-900">
                    {currentAdvisory.cropName[currentLang] || currentAdvisory.cropName.en}
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-2 pt-0.5">
                  <span className="bg-emerald-100 text-emerald-800 font-bold text-[11px] px-2.5 py-0.5 rounded-full">
                    {currentAdvisory.category[currentLang] || currentAdvisory.category.en}
                  </span>
                  <span className="bg-amber-100 text-amber-900 font-semibold text-[11px] px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {currentAdvisory.cropDuration[currentLang] || currentAdvisory.cropDuration.en}
                  </span>
                </div>
              </div>
            </div>

            {/* Audio Listen / Stop Button */}
            <div className="flex items-center gap-3">
              {isSpeakingLocal ? (
                <button
                  id="btn-stop-advisory-audio"
                  type="button"
                  onClick={stopSpeaking}
                  className="flex items-center space-x-2 bg-amber-400 hover:bg-amber-500 text-stone-950 px-5 py-2.5 rounded-2xl font-black text-xs sm:text-sm shadow-md animate-pulse cursor-pointer"
                >
                  <VolumeX className="w-4 h-4" />
                  <span>{t.stopAudio}</span>
                </button>
              ) : (
                <button
                  id="btn-listen-advisory-audio"
                  type="button"
                  onClick={speakCurrentAdvisory}
                  className="flex items-center space-x-2 bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-2.5 rounded-2xl font-black text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>{t.listenAdvisory}</span>
                </button>
              )}
            </div>
          </div>

          {/* Soil & Sowing Specifics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-stone-50 p-4 sm:p-5 rounded-2xl border border-stone-200/80">
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">
                {currentLang === 'te' ? 'నేల అవసరాలు:' : currentLang === 'kn' ? 'ಮಣ್ಣಿನ ಅಗತ್ಯತೆ:' : currentLang === 'hi' ? 'मिट्टी की आवश्यकता:' : 'Soil Requirements:'}
              </span>
              <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-medium">
                {currentAdvisory.soilRequirements[currentLang] || currentAdvisory.soilRequirements.en}
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">
                {currentLang === 'te' ? 'విత్తనం, రకాలు & విత్తే పద్ధతి:' : currentLang === 'kn' ? 'ಬೀಜ ಮತ್ತು ಬಿತ್ತನೆ:' : currentLang === 'hi' ? 'बीज दर एवं बुवाई:' : 'Seed & Sowing Method:'}
              </span>
              <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-medium">
                {currentAdvisory.seedAndSowing[currentLang] || currentAdvisory.seedAndSowing.en}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 2.5. SUB-TABS NAVIGATION (Stages vs POP vs Nutrients) */}
      {currentAdvisory && (
        <div className="flex items-center gap-2 p-1.5 bg-stone-100 rounded-2xl border border-stone-200 shadow-xs">
          <button
            id="btn-subtab-stages"
            type="button"
            onClick={() => {
              setActiveSubTab('stages');
              stopSpeaking();
            }}
            className={`flex-1 flex items-center justify-center space-x-2 py-3 px-3 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
              activeSubTab === 'stages'
                ? 'bg-emerald-800 text-white shadow-sm'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
            }`}
          >
            <CalendarCheck className="w-4 h-4 shrink-0" />
            <span className="truncate">
              {currentLang === 'te'
                ? 'దశలవారీ సాగు & సస్యరక్షణ'
                : currentLang === 'kn'
                ? 'ಹಂತವಾರು ಬೆಳೆ ನಿರ್ವಹಣೆ'
                : currentLang === 'hi'
                ? 'अवस्था-वार फसल प्रबंधन'
                : 'Growth Stages & Tasks'}
            </span>
          </button>

          <button
            id="btn-subtab-practices"
            type="button"
            onClick={() => {
              setActiveSubTab('practices');
              stopSpeaking();
            }}
            className={`flex-1 flex items-center justify-center space-x-2 py-3 px-3 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
              activeSubTab === 'practices'
                ? 'bg-emerald-800 text-white shadow-sm'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
            }`}
          >
            <Tractor className="w-4 h-4 shrink-0" />
            <span className="truncate">
              {currentLang === 'te'
                ? 'సమగ్ర సాగు పద్ధతులు (POP)'
                : currentLang === 'kn'
                ? 'ಸಮಗ್ರ ಕೃಷಿ ಪದ್ಧತಿಗಳು (POP)'
                : currentLang === 'hi'
                ? 'पैकेज ऑफ प्रैक्टिसेज (POP)'
                : 'Package of Practices (POP)'}
            </span>
          </button>

          <button
            id="btn-subtab-nutrients"
            type="button"
            onClick={() => {
              setActiveSubTab('nutrients');
              stopSpeaking();
            }}
            className={`flex-1 flex items-center justify-center space-x-2 py-3 px-3 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
              activeSubTab === 'nutrients'
                ? 'bg-emerald-800 text-white shadow-sm'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
            }`}
          >
            <FlaskConical className="w-4 h-4 shrink-0" />
            <span className="truncate">
              {currentLang === 'te'
                ? 'ఎరువుల మాస్టర్ ప్లాన్'
                : currentLang === 'kn'
                ? 'ಪೋಷಕಾಂಶಗಳ ಯೋಜನೆ'
                : currentLang === 'hi'
                ? 'उर्वरक मास्टर प्लान'
                : 'Nutrient Master Plan'}
            </span>
          </button>
        </div>
      )}

      {/* 3. STAGE SELECTOR CAROUSEL FOR THIS SPECIFIC CROP */}
      {currentAdvisory && activeSubTab === 'stages' && (
        <div className="bg-white rounded-3xl p-5 border border-stone-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Layers className="w-4 h-4 text-emerald-700" />
              <h3 className="text-xs sm:text-sm font-bold text-stone-800 uppercase tracking-wider">
                {currentLang === 'te'
                  ? `${currentAdvisory.cropName[currentLang] || currentAdvisory.cropName.en} దశను ఎంచుకోండి:`
                  : currentLang === 'kn'
                  ? `${currentAdvisory.cropName[currentLang] || currentAdvisory.cropName.en} ಹಂತವನ್ನು ಆಯ್ಕೆಮಾಡಿ:`
                  : currentLang === 'hi'
                  ? `${currentAdvisory.cropName[currentLang] || currentAdvisory.cropName.en} की अवस्था चुनें:`
                  : `Select Growth Stage for ${currentAdvisory.cropName.en}:`}
              </h3>
            </div>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              {selectedStageIndex + 1} / {currentAdvisory.stages.length}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {currentAdvisory.stages.map((stage, idx) => {
              const isSelected = selectedStageIndex === idx;
              return (
                <button
                  key={stage.id}
                  id={`btn-stage-${stage.id}`}
                  type="button"
                  onClick={() => {
                    setSelectedStageIndex(idx);
                    stopSpeaking();
                  }}
                  className={`p-3.5 rounded-2xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-800 text-white border-emerald-800 shadow-md ring-2 ring-emerald-500 scale-102'
                      : 'bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-200'
                  }`}
                >
                  <div className="space-y-1">
                    <span
                      className={`text-[10px] font-black px-2 py-0.5 rounded-md inline-block ${
                        isSelected ? 'bg-amber-400 text-emerald-950' : 'bg-stone-200 text-stone-700'
                      }`}
                    >
                      Stage {stage.order}
                    </span>
                    <h4 className="text-xs font-bold leading-snug line-clamp-2">
                      {stage.name[currentLang] || stage.name.en}
                    </h4>
                  </div>
                  <span
                    className={`text-[10px] font-semibold mt-2 pt-1 border-t ${
                      isSelected ? 'border-emerald-700 text-emerald-100' : 'border-stone-200 text-stone-500'
                    }`}
                  >
                    {stage.timing[currentLang] || stage.timing.en}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 4. ACTIVE STAGE HERO CARD: STAGE PHOTO + "WHAT TO DO IN THIS STAGE" */}
      {currentStage && activeSubTab === 'stages' && (
        <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden space-y-0">
          
          {/* Stage Banner with Visual & Key Details */}
          <div className="p-5 sm:p-7 bg-gradient-to-r from-stone-900 to-emerald-950 text-white flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
              
              {/* Stage Photo with Graceful Fallback */}
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden bg-stone-800 border-2 border-emerald-400/40 shrink-0 shadow-lg relative group">
                {currentStage.stageImage && !brokenImages[currentStage.id] ? (
                  <img
                    src={currentStage.stageImage}
                    alt={currentStage.name.en}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={() => handleImageError(currentStage.id)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-center p-2 text-stone-400">
                    <ImageOff className="w-6 h-6 mb-1 text-stone-500" />
                    <span className="text-[10px] font-semibold">Stage Photo Unavailable</span>
                  </div>
                )}
                <div className="absolute bottom-0 inset-x-0 bg-stone-950/80 backdrop-blur-xs py-0.5 text-center text-[9px] font-bold text-amber-300">
                  {uiLabels.stageVisualBadge[currentLang] || uiLabels.stageVisualBadge.en}
                </div>
              </div>

              {/* Stage Identification */}
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 text-stone-950 font-black text-xs">
                  <CalendarCheck className="w-3.5 h-3.5" />
                  <span>Stage {currentStage.order} of {currentAdvisory?.stages.length}</span>
                </div>
                <h3 className="text-lg sm:text-2xl font-black text-white">
                  {currentStage.name[currentLang] || currentStage.name.en}
                </h3>
                <p className="text-xs sm:text-sm text-emerald-200 font-semibold flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>{currentStage.timing[currentLang] || currentStage.timing.en}</span>
                </p>
              </div>
            </div>

            {/* Quick Badge */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl px-4 py-2.5 border border-white/10 text-right self-stretch sm:self-auto flex sm:flex-col justify-between items-center sm:items-end">
              <span className="text-[11px] text-emerald-300 font-medium">
                {currentLang === 'te' ? 'పంట సంరక్షణ మార్గదర్శి' : 'Growth Milestone'}
              </span>
              <span className="text-xs font-bold text-white">
                {currentAdvisory?.cropName[currentLang] || currentAdvisory?.cropName.en}
              </span>
            </div>
          </div>

          {/* "WHAT TO DO IN THIS STAGE" - Step by Step Detailed Instructions */}
          {currentStage.whatToDo && (
            <div className="p-5 sm:p-7 border-t border-stone-200 bg-amber-50/30 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-500 text-stone-950 flex items-center justify-center font-bold shadow-sm">
                  <ListChecks className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-black text-stone-900">
                    {uiLabels.whatToDoTitle[currentLang] || uiLabels.whatToDoTitle.en}
                  </h4>
                  <p className="text-xs text-stone-500">
                    {uiLabels.whatToDoSubtitle[currentLang] || uiLabels.whatToDoSubtitle.en}
                  </p>
                </div>
              </div>

              {/* Formatted Numbered Steps */}
              <div className="grid grid-cols-1 gap-2.5 pt-1">
                {(currentStage.whatToDo[currentLang] || currentStage.whatToDo.en)
                  .split('\n')
                  .filter((step) => step.trim().length > 0)
                  .map((step, sIdx) => (
                    <div
                      key={sIdx}
                      className="bg-white p-3.5 sm:p-4 rounded-2xl border border-stone-200 shadow-xs flex items-start space-x-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-900 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {sIdx + 1}
                      </div>
                      <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-medium">
                        {step.replace(/^[0-9]+[\.\)]\s*/, '')}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Water Management & Weather Alerts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 sm:p-7 border-t border-stone-200 bg-stone-50">
            {/* Irrigation Schedule Card */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200 space-y-2">
              <div className="flex items-center space-x-2.5 text-blue-700">
                <Droplets className="w-4 h-4" />
                <h5 className="text-xs sm:text-sm font-black text-stone-900">{t.irrigationSchedule}</h5>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 font-medium leading-relaxed bg-blue-50/70 p-3 rounded-xl border border-blue-100">
                {currentStage.irrigationGuide[currentLang] || currentStage.irrigationGuide.en}
              </p>
            </div>

            {/* Weather Hazards Precaution Card */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200 space-y-2">
              <div className="flex items-center space-x-2.5 text-purple-700">
                <Sparkles className="w-4 h-4" />
                <h5 className="text-xs sm:text-sm font-black text-stone-900">{t.weatherAdvisory}</h5>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 font-medium leading-relaxed bg-purple-50/70 p-3 rounded-xl border border-purple-100">
                {currentStage.weatherPrecaution[currentLang] || currentStage.weatherPrecaution.en}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 5. CROP-SPECIFIC FERTILIZERS & NUTRIENT DOSAGE FOR THIS STAGE */}
      {/* STRICT RULE: Fertilizer Name + Photo Compulsory; If photo fails, graceful "Product image unavailable" */}
      {currentStage && activeSubTab === 'stages' && currentStage.fertilizers.length > 0 && (
        <div className="bg-white rounded-3xl p-5 sm:p-7 border border-stone-200 shadow-sm space-y-5">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold shadow-sm">
                <FlaskConical className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black text-stone-900">
                  {uiLabels.fertilizerHeader[currentLang] || uiLabels.fertilizerHeader.en}
                </h3>
                <p className="text-xs text-stone-500">
                  {currentStage.name[currentLang] || currentStage.name.en}
                </p>
              </div>
            </div>

            <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
              {currentStage.fertilizers.length} {currentLang === 'te' ? 'సిఫార్సులు' : 'Verified Products'}
            </span>
          </div>

          <div className="space-y-5">
            {currentStage.fertilizers.map((fert, fIdx) => {
              const imgKey = `fert_${currentStage.id}_${fIdx}`;
              const isBroken = brokenImages[imgKey];

              return (
                <div
                  key={fIdx}
                  className="bg-stone-50 rounded-3xl p-5 border border-stone-200 shadow-xs flex flex-col md:flex-row gap-5 items-start"
                >
                  {/* COMPULSORY PRODUCT PHOTO WITH RELIABLE FALLBACK */}
                  <div className="w-full md:w-44 flex flex-col items-center shrink-0">
                    <div className="w-full h-44 bg-white rounded-2xl border border-stone-200 overflow-hidden flex items-center justify-center p-2 relative shadow-xs">
                      {fert.productImage && !isBroken ? (
                        <img
                          src={fert.productImage}
                          alt={fert.productName}
                          className="w-full h-full object-contain"
                          onError={() => handleImageError(imgKey)}
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-center p-3 bg-stone-100 text-stone-500 rounded-xl">
                          <ImageOff className="w-8 h-8 mb-2 text-stone-400" />
                          <span className="text-xs font-bold leading-tight">
                            {uiLabels.imgUnavailable[currentLang] || uiLabels.imgUnavailable.en}
                          </span>
                        </div>
                      )}
                    </div>
                    <span className="text-[10px] text-stone-500 font-semibold mt-1.5 text-center">
                      Verified Fertilizer Photo
                    </span>
                  </div>

                  {/* Complete Structured Information Table */}
                  <div className="flex-1 space-y-3 w-full">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
                        Fertilizer Recommendation
                      </span>
                      <h4 className="text-base sm:text-lg font-black text-stone-900 mt-1">
                        {fert.productName}
                      </h4>
                    </div>

                    {/* Dosage Banner */}
                    <div className="bg-emerald-700 text-white px-4 py-2 rounded-2xl shadow-xs inline-flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider opacity-90">
                        {uiLabels.dosageLabel[currentLang] || uiLabels.dosageLabel.en}
                      </span>
                      <span className="text-sm font-black text-amber-300">
                        {fert.dosage}
                      </span>
                    </div>

                    {/* When & How to Apply */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-white p-3.5 rounded-2xl border border-stone-200">
                      <div>
                        <span className="font-bold text-stone-900 block text-[11px] uppercase tracking-wider text-stone-500">
                          {uiLabels.whenToApply[currentLang] || uiLabels.whenToApply.en}
                        </span>
                        <span className="font-semibold text-stone-800">
                          {fert.whenToApply[currentLang] || fert.whenToApply.en}
                        </span>
                      </div>
                      <div>
                        <span className="font-bold text-stone-900 block text-[11px] uppercase tracking-wider text-stone-500">
                          {uiLabels.howToApply[currentLang] || uiLabels.howToApply.en}
                        </span>
                        <span className="font-semibold text-stone-800">
                          {fert.applicationMethod[currentLang] || fert.applicationMethod.en}
                        </span>
                      </div>
                    </div>

                    {/* Why / Purpose */}
                    <div className="bg-white p-3.5 rounded-2xl border border-stone-200 text-xs space-y-1">
                      <span className="font-bold text-stone-900 flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-stone-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        {uiLabels.whyPurpose[currentLang] || uiLabels.whyPurpose.en}
                      </span>
                      <p className="font-medium text-stone-800 leading-relaxed">
                        {fert.purpose[currentLang] || fert.purpose.en}
                      </p>
                    </div>

                    {/* Precautions */}
                    {fert.precautions && (
                      <div className="text-xs text-amber-900 bg-amber-50/80 p-3 rounded-2xl border border-amber-200 flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold block text-[11px]">
                            {uiLabels.precautionsLabel[currentLang] || uiLabels.precautionsLabel.en}
                          </span>
                          <span className="font-medium">
                            {fert.precautions[currentLang] || fert.precautions.en}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 6. CROP-SPECIFIC PESTS & DISEASES FOR THIS STAGE */}
      {currentStage && activeSubTab === 'stages' && currentStage.pestsAndDiseases.length > 0 && (
        <div className="bg-white rounded-3xl p-5 sm:p-7 border border-stone-200 shadow-sm space-y-5">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-900 flex items-center justify-center font-bold shadow-sm">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-stone-900">
                {t.tabPests} ({currentStage.name[currentLang] || currentStage.name.en})
              </h3>
              <p className="text-xs text-stone-500">
                {currentLang === 'te'
                  ? 'ఈ దశలో ఆశించే ప్రధాన పురుగులు, తెగుళ్లు మరియు సమగ్ర నివారణ'
                  : currentLang === 'kn'
                  ? 'ಈ ಹಂತದಲ್ಲಿ ಕಾಡುವ ಕೀಟ-ರೋಗಗಳು ಮತ್ತು ಪರಿಹಾರ'
                  : currentLang === 'hi'
                  ? 'इस अवस्था में लगने वाले प्रमुख कीट-रोग एवं उनका सटीक उपचार'
                  : 'Stage-specific pests, diseases, symptoms, and chemical controls'}
              </p>
            </div>
          </div>

          <div className="space-y-5">
            {currentStage.pestsAndDiseases.map((pest, pIdx) => {
              const pestImgKey = `pest_${currentStage.id}_${pIdx}`;
              const isPestBroken = brokenImages[pestImgKey];

              return (
                <div
                  key={pIdx}
                  className="bg-stone-50 rounded-3xl p-5 border border-stone-200 space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 pb-3">
                    <div className="flex items-center space-x-2.5">
                      <span
                        className={`text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                          pest.problemType === 'pest'
                            ? 'bg-rose-100 text-rose-800'
                            : 'bg-amber-100 text-amber-900'
                        }`}
                      >
                        {pest.problemType === 'pest' ? '🐛 PEST / పురుగు' : '🍄 DISEASE / తెగులు'}
                      </span>
                      <h4 className="text-sm sm:text-base font-black text-stone-900">
                        {pest.name[currentLang] || pest.name.en}
                      </h4>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Symptoms & Symptom Image */}
                    <div className="space-y-2 bg-white p-3.5 rounded-2xl border border-stone-200">
                      <span className="text-[11px] font-bold text-rose-800 uppercase tracking-wider flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {currentLang === 'te' ? 'గుర్తింపు లక్షణాలు:' : currentLang === 'kn' ? 'ರೋಗಲಕ್ಷಣಗಳು:' : currentLang === 'hi' ? 'पहचान के लक्षण:' : 'Symptoms:'}
                      </span>
                      <p className="text-xs text-stone-700 leading-relaxed font-medium">
                        {pest.symptoms[currentLang] || pest.symptoms.en}
                      </p>
                    </div>

                    {/* Prevention & Cultural Management */}
                    <div className="space-y-2 bg-white p-3.5 rounded-2xl border border-stone-200">
                      <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {currentLang === 'te' ? 'ముందస్తు నివారణ చర్యలు:' : currentLang === 'kn' ? 'ಮುಂಜಾಗ್ರತಾ ಕ್ರಮಗಳು:' : currentLang === 'hi' ? 'रोकथाम एवं जैविक उपाय:' : 'Prevention:'}
                      </span>
                      <p className="text-xs text-stone-700 leading-relaxed font-medium">
                        {pest.prevention[currentLang] || pest.prevention.en}
                      </p>
                    </div>
                  </div>

                  {/* Chemical Treatment & Product Image */}
                  <div className="bg-amber-50/70 p-4 rounded-2xl border border-amber-200 flex flex-col sm:flex-row gap-4 items-start">
                    <div className="w-20 h-20 bg-white rounded-xl border border-amber-200 overflow-hidden flex items-center justify-center shrink-0 p-1">
                      {pest.productImage && !isPestBroken ? (
                        <img
                          src={pest.productImage}
                          alt={pest.recommendedProduct}
                          className="w-full h-full object-contain"
                          onError={() => handleImageError(pestImgKey)}
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-center p-1 bg-stone-100 text-stone-500 rounded-lg">
                          <ImageOff className="w-4 h-4 mb-1 text-stone-400" />
                          <span className="text-[8px] font-bold leading-tight">
                            Image Unavailable
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="flex-1 space-y-1.5">
                      <span className="text-[11px] font-black text-amber-900 uppercase tracking-wider">
                        {currentLang === 'te' ? 'సిఫార్సు చేసిన మందు & పిచికారీ విధానం:' : currentLang === 'kn' ? 'ಶಿಫಾರಸು ಮಾಡಿದ ಔಷಧ:' : currentLang === 'hi' ? 'सिफारिश की गई दवा एवं छिड़काव विधि:' : 'Chemical Remedy & Timing:'}
                      </span>
                      <h5 className="text-xs sm:text-sm font-black text-stone-900">
                        {pest.recommendedProduct}
                      </h5>
                      <p className="text-xs text-stone-800 leading-relaxed font-medium">
                        {pest.treatment[currentLang] || pest.treatment.en}
                      </p>
                      <div className="text-[11px] text-stone-600 pt-1">
                        <span className="font-bold">
                          {currentLang === 'te' ? 'పిచికారీ సమయం:' : currentLang === 'kn' ? 'ಸಿಂಪರಣೆ ಸಮಯ:' : currentLang === 'hi' ? 'छिड़काव का सही समय:' : 'Timing:'}{' '}
                        </span>
                        {pest.applicationTiming[currentLang] || pest.applicationTiming.en}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 7. HARVESTING & POST-HARVEST STORAGE GUIDE */}
      {currentAdvisory && activeSubTab === 'stages' && (
        <div className="bg-white rounded-3xl p-5 sm:p-7 border border-stone-200 shadow-sm space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-400 text-stone-900 flex items-center justify-center font-black text-lg shadow-sm">
              🧺
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-stone-900">{t.tabHarvest}</h3>
              <p className="text-xs text-stone-500">
                {currentLang === 'te'
                  ? `${currentAdvisory.cropName[currentLang] || currentAdvisory.cropName.en} కోత సమయం, పద్ధతి & నిల్వ మార్గదర్శకాలు`
                  : currentLang === 'kn'
                  ? 'ಕೊಯ್ಲು ಮತ್ತು ಶೇಖರಣಾ ಮಾರ್ಗದರ್ಶನ'
                  : currentLang === 'hi'
                  ? 'कटाई, सुखाई एवं भंडारण दिशा-निर्देश'
                  : 'Maturity indicators, harvesting procedure, curing, and storage'}
              </p>
            </div>
          </div>

          <div className="bg-amber-50/50 p-4 sm:p-5 rounded-2xl border border-amber-200/80 text-xs sm:text-sm text-stone-800 leading-relaxed font-medium">
            {currentAdvisory.harvestingGuide[currentLang] || currentAdvisory.harvestingGuide.en}
          </div>
        </div>
      )}

      {/* PACKAGE OF PRACTICES (POP) TAB */}
      {currentAdvisory && activeSubTab === 'practices' && (
        <PackageOfPracticesView
          advisory={currentAdvisory}
          currentLang={currentLang}
          onImageError={handleImageError}
          brokenImages={brokenImages}
        />
      )}

      {/* NUTRIENT MASTER PLAN TAB */}
      {currentAdvisory && activeSubTab === 'nutrients' && (
        <NutrientMasterPlanView
          advisory={currentAdvisory}
          currentLang={currentLang}
          onImageError={handleImageError}
          brokenImages={brokenImages}
        />
      )}

      {/* 8. KEY PRECAUTIONS & GOLDEN RULES */}
      {currentAdvisory && (
        <div className="bg-stone-900 text-white rounded-3xl p-5 sm:p-7 shadow-lg space-y-3">
          <div className="flex items-center space-x-2 text-amber-400">
            <AlertCircle className="w-5 h-5" />
            <h4 className="text-sm sm:text-base font-black uppercase tracking-wider">
              {currentLang === 'te'
                ? `${currentAdvisory.cropName[currentLang] || currentAdvisory.cropName.en} సాగులో ముఖ్యమైన జాగ్రత్తలు`
                : currentLang === 'kn'
                ? 'ಪ್ರಮುಖ ಎಚ್ಚರಿಕೆಗಳು'
                : currentLang === 'hi'
                ? 'खेती के महत्वपूर्ण नियम एवं सावधानियां'
                : 'Golden Rules & Precautions'}
            </h4>
          </div>

          <div className="text-xs sm:text-sm text-stone-300 font-normal leading-relaxed whitespace-pre-line bg-stone-800/80 p-4 rounded-2xl border border-stone-700">
            {currentAdvisory.precautions[currentLang] || currentAdvisory.precautions.en}
          </div>
        </div>
      )}

    </div>
  );
};
