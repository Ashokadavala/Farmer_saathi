import React, { useState } from 'react';
import {
  Compass,
  Tractor,
  Sprout,
  Droplets,
  Sparkles,
  Archive,
  ImageOff,
  CheckCircle2,
  AlertCircle,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { CropAdvisoryRecord, CropPracticeSection } from '../../data/cropAdvisoryData';
import { LanguageCode } from '../../types';

interface PackageOfPracticesViewProps {
  advisory: CropAdvisoryRecord;
  currentLang: LanguageCode;
  onImageError: (key: string) => void;
  brokenImages: Record<string, boolean>;
}

export const PackageOfPracticesView: React.FC<PackageOfPracticesViewProps> = ({
  advisory,
  currentLang,
  onImageError,
  brokenImages,
}) => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    soil: true,
    landPrep: true,
    seed: true,
    waterWeed: true,
    milestone: true,
    postHarvest: true,
  });

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const renderPracticeCard = (
    title: { en: string; te: string; kn: string; hi: string },
    image: string,
    imageCaption: { en: string; te: string; kn: string; hi: string },
    description: { en: string; te: string; kn: string; hi: string },
    details: { en: string; te: string; kn: string; hi: string }[],
    imageKey: string,
    precautions?: { en: string; te: string; kn: string; hi: string }
  ) => {
    const isBroken = brokenImages[imageKey];

    return (
      <div className="bg-stone-50 rounded-3xl p-5 sm:p-6 border border-stone-200 shadow-xs space-y-4">
        {/* Title */}
        <h4 className="text-base sm:text-lg font-black text-stone-900 leading-snug">
          {title[currentLang] || title.en}
        </h4>

        {/* Photo & Caption */}
        <div className="space-y-2">
          <div className="w-full h-52 sm:h-64 rounded-2xl overflow-hidden bg-stone-900 border border-stone-200 relative group shadow-sm">
            {image && !isBroken ? (
              <img
                src={image}
                alt={title.en}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                onError={() => onImageError(imageKey)}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-center p-4 text-stone-400 bg-stone-100">
                <ImageOff className="w-8 h-8 mb-2 text-stone-400" />
                <span className="text-xs font-bold text-stone-500">Practice Visual Unavailable</span>
              </div>
            )}
          </div>
          {imageCaption && (
            <p className="text-xs text-stone-600 italic font-medium px-1">
              📸 {imageCaption[currentLang] || imageCaption.en}
            </p>
          )}
        </div>

        {/* Descriptive Text */}
        <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-medium">
          {description[currentLang] || description.en}
        </p>

        {/* Key Parameter Bullets */}
        {details && details.length > 0 && (
          <div className="space-y-2 pt-1">
            {details.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-2.5 bg-white p-3 sm:p-3.5 rounded-2xl border border-stone-200/80 shadow-xs"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-stone-800 font-medium leading-relaxed">
                  {item[currentLang] || item.en}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Precautions Alert */}
        {precautions && (
          <div className="bg-amber-50 border border-amber-200 p-3.5 rounded-2xl text-amber-900 flex items-start space-x-2.5 text-xs">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <span className="font-semibold leading-relaxed">
              {precautions[currentLang] || precautions.en}
            </span>
          </div>
        )}
      </div>
    );
  };

  const labels = {
    popHeader: {
      en: 'Complete Package of Practices (POP)',
      te: 'సమగ్ర సాగు పద్ధతుల మార్గదర్శి (POP)',
      kn: 'ಸಮಗ್ರ ಕೃಷಿ ಪದ್ಧತಿಗಳ ಕೈಪಿಡಿ (POP)',
      hi: 'सम्पूर्ण पैकेज ऑफ प्रैक्टिसेज (POP)',
    },
    popSubtitle: {
      en: 'Standard agricultural university verified step-by-step cultivation protocols',
      te: 'వ్యవసాయ విశ్వవిద్యాలయాలచే ధ్రువీకరించబడిన ప్రామాణిక సాగు విధానాలు',
      kn: 'ಕೃಷಿ ವಿಶ್ವವಿದ್ಯಾಲಯ ಪ್ರಮಾಣಿತ ಹಂತ-ಹಂತದ ಬೇಸಾಯ ಕ್ರಮಗಳು',
      hi: 'कृषि विश्वविद्यालय द्वारा प्रमाणित चरणबद्ध फसल प्रबंधन दिशानिर्देश',
    },
    soil: {
      en: '1. Soil & Climatic Requirements',
      te: '1. నేల స్వభావం & శీతోష్ణస్థితి అవసరాలు',
      kn: '1. ಮಣ್ಣು ಮತ್ತು ಹವಾಮಾನ ಅಗತ್ಯತೆಗಳು',
      hi: '1. मिट्टी एवं जलवायु की आवश्यकताएं',
    },
    landPrep: {
      en: '2. Land Preparation, Tillage & FYM',
      te: '2. భూమి తయారీ, లోతు దుక్కి & సేంద్రియ ఎరువులు',
      kn: '2. ಭೂಮಿ ಸಿದ್ಧತೆ ಮತ್ತು ಕೊಟ್ಟಿಗೆ ಗೊಬ್ಬರ',
      hi: '2. खेत की तैयारी, जुताई एवं जैविक खाद',
    },
    seed: {
      en: '3. Seed Selection, Treatment & Sowing',
      te: '3. విత్తన ఎంపిక, విత్తన శుద్ధి & విత్తే పద్ధతులు',
      kn: '3. ಬೀಜೋಪಚಾರ ಮತ್ತು ಬಿತ್ತನೆ ವಿಧಾನಗಳು',
      hi: '3. बीज चयन, बीजोपचार एवं बुवाई',
    },
    waterWeed: {
      en: '4. Irrigation & Weed Management',
      te: '4. నీటి యాజమాన్యం & సమగ్ర కలుపు నివారణ',
      kn: '4. ನೀರಾವರಿ ಮತ್ತು ಕಳೆ ನಿರ್ವಹಣೆ',
      hi: '4. सिंचाई एवं खरपतवार नियंत्रण',
    },
    milestone: {
      en: '5. Critical Flowering / Reproductive Milestone',
      te: '5. అత్యంత కీలకమైన పూత / దిగుబడి నిర్ణాయక దశ',
      kn: '5. ನಿರ್ಣಾಯಕ ಹೂವಾಡುವ / ಇಳುವರಿ ಹಂತ',
      hi: '5. क्रांतिक पुष्पन / फलन एवं उपज निर्धारण अवस्था',
    },
    postHarvest: {
      en: '6. Harvesting, Sun Drying, Curing & Storage',
      te: '6. పంట కోత, ఆరబెట్టడం & సురక్షిత నిల్వ విధానాలు',
      kn: '6. ಕಟಾವು, ಒಣಗಿಸುವಿಕೆ ಮತ್ತು ಸುರಕ್ಷಿತ ಶೇಖರಣೆ',
      hi: '6. कटाई, सुखाई, क्यूरिंग एवं वैज्ञानिक भंडारण',
    },
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-900 to-stone-900 text-white p-5 sm:p-7 rounded-3xl shadow-sm space-y-1.5">
        <div className="inline-flex items-center space-x-2 bg-amber-400 text-stone-950 px-3 py-1 rounded-full text-xs font-black">
          <span>ICAR / ANGRAU Standards</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-black">
          {labels.popHeader[currentLang] || labels.popHeader.en}
        </h3>
        <p className="text-xs sm:text-sm text-emerald-200">
          {labels.popSubtitle[currentLang] || labels.popSubtitle.en}
        </p>
      </div>

      {/* 1. SOIL & CLIMATE */}
      {advisory.soilAndClimate && (
        <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden">
          <button
            type="button"
            onClick={() => toggleSection('soil')}
            className="w-full p-5 sm:p-6 flex items-center justify-between text-left hover:bg-stone-50 cursor-pointer transition-colors"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-black text-stone-900">
                {labels.soil[currentLang] || labels.soil.en}
              </h3>
            </div>
            {expandedSections.soil ? (
              <ChevronUp className="w-5 h-5 text-stone-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-stone-500" />
            )}
          </button>

          {expandedSections.soil && (
            <div className="p-5 sm:p-6 pt-0 border-t border-stone-100">
              {renderPracticeCard(
                advisory.soilAndClimate.title,
                advisory.soilAndClimate.image,
                advisory.soilAndClimate.imageCaption,
                advisory.soilAndClimate.description,
                advisory.soilAndClimate.details,
                `practice_soil_${advisory.cropId}`,
                advisory.soilAndClimate.precautions
              )}
            </div>
          )}
        </div>
      )}

      {/* 2. LAND PREPARATION */}
      {advisory.landPreparation && (
        <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden">
          <button
            type="button"
            onClick={() => toggleSection('landPrep')}
            className="w-full p-5 sm:p-6 flex items-center justify-between text-left hover:bg-stone-50 cursor-pointer transition-colors"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-stone-100 text-stone-800 flex items-center justify-center font-bold">
                <Tractor className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-black text-stone-900">
                {labels.landPrep[currentLang] || labels.landPrep.en}
              </h3>
            </div>
            {expandedSections.landPrep ? (
              <ChevronUp className="w-5 h-5 text-stone-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-stone-500" />
            )}
          </button>

          {expandedSections.landPrep && (
            <div className="p-5 sm:p-6 pt-0 border-t border-stone-100">
              {renderPracticeCard(
                advisory.landPreparation.title,
                advisory.landPreparation.image,
                advisory.landPreparation.imageCaption,
                advisory.landPreparation.description,
                advisory.landPreparation.details,
                `practice_landprep_${advisory.cropId}`,
                advisory.landPreparation.precautions
              )}
            </div>
          )}
        </div>
      )}

      {/* 3. SEED & SOWING PRACTICE */}
      {advisory.seedAndSowingPractice && (
        <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden">
          <button
            type="button"
            onClick={() => toggleSection('seed')}
            className="w-full p-5 sm:p-6 flex items-center justify-between text-left hover:bg-stone-50 cursor-pointer transition-colors"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold">
                <Sprout className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-black text-stone-900">
                {labels.seed[currentLang] || labels.seed.en}
              </h3>
            </div>
            {expandedSections.seed ? (
              <ChevronUp className="w-5 h-5 text-stone-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-stone-500" />
            )}
          </button>

          {expandedSections.seed && (
            <div className="p-5 sm:p-6 pt-0 border-t border-stone-100 space-y-5">
              {/* Seed Selection */}
              {renderPracticeCard(
                advisory.seedAndSowingPractice.seed.title,
                advisory.seedAndSowingPractice.seed.image,
                advisory.seedAndSowingPractice.seed.imageCaption,
                advisory.seedAndSowingPractice.seed.description,
                advisory.seedAndSowingPractice.seed.details,
                `practice_seed_${advisory.cropId}`
              )}

              {/* Seed Treatment */}
              {renderPracticeCard(
                advisory.seedAndSowingPractice.treatment.title,
                advisory.seedAndSowingPractice.treatment.image,
                advisory.seedAndSowingPractice.treatment.imageCaption,
                advisory.seedAndSowingPractice.treatment.description,
                advisory.seedAndSowingPractice.treatment.details,
                `practice_treatment_${advisory.cropId}`
              )}

              {/* Sowing / Transplanting */}
              {renderPracticeCard(
                advisory.seedAndSowingPractice.sowing.title,
                advisory.seedAndSowingPractice.sowing.image,
                advisory.seedAndSowingPractice.sowing.imageCaption,
                advisory.seedAndSowingPractice.sowing.description,
                advisory.seedAndSowingPractice.sowing.details,
                `practice_sowing_${advisory.cropId}`
              )}
            </div>
          )}
        </div>
      )}

      {/* 4. WATER & WEED MANAGEMENT */}
      {advisory.waterAndWeedManagement && (
        <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden">
          <button
            type="button"
            onClick={() => toggleSection('waterWeed')}
            className="w-full p-5 sm:p-6 flex items-center justify-between text-left hover:bg-stone-50 cursor-pointer transition-colors"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-900 flex items-center justify-center font-bold">
                <Droplets className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-black text-stone-900">
                {labels.waterWeed[currentLang] || labels.waterWeed.en}
              </h3>
            </div>
            {expandedSections.waterWeed ? (
              <ChevronUp className="w-5 h-5 text-stone-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-stone-500" />
            )}
          </button>

          {expandedSections.waterWeed && (
            <div className="p-5 sm:p-6 pt-0 border-t border-stone-100 space-y-5">
              {renderPracticeCard(
                advisory.waterAndWeedManagement.irrigation.title,
                advisory.waterAndWeedManagement.irrigation.image,
                advisory.waterAndWeedManagement.irrigation.imageCaption,
                advisory.waterAndWeedManagement.irrigation.description,
                advisory.waterAndWeedManagement.irrigation.details,
                `practice_irrigation_${advisory.cropId}`
              )}

              {renderPracticeCard(
                advisory.waterAndWeedManagement.weeding.title,
                advisory.waterAndWeedManagement.weeding.image,
                advisory.waterAndWeedManagement.weeding.imageCaption,
                advisory.waterAndWeedManagement.weeding.description,
                advisory.waterAndWeedManagement.weeding.details,
                `practice_weeding_${advisory.cropId}`
              )}
            </div>
          )}
        </div>
      )}

      {/* 5. CRITICAL MILESTONE */}
      {advisory.criticalMilestone && (
        <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden">
          <button
            type="button"
            onClick={() => toggleSection('milestone')}
            className="w-full p-5 sm:p-6 flex items-center justify-between text-left hover:bg-stone-50 cursor-pointer transition-colors"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-900 flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-black text-stone-900">
                {labels.milestone[currentLang] || labels.milestone.en}
              </h3>
            </div>
            {expandedSections.milestone ? (
              <ChevronUp className="w-5 h-5 text-stone-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-stone-500" />
            )}
          </button>

          {expandedSections.milestone && (
            <div className="p-5 sm:p-6 pt-0 border-t border-stone-100">
              {renderPracticeCard(
                advisory.criticalMilestone.title,
                advisory.criticalMilestone.image,
                advisory.criticalMilestone.imageCaption,
                advisory.criticalMilestone.description,
                advisory.criticalMilestone.details,
                `practice_milestone_${advisory.cropId}`,
                advisory.criticalMilestone.precautions
              )}
            </div>
          )}
        </div>
      )}

      {/* 6. POST-HARVEST & STORAGE */}
      {advisory.postHarvest && (
        <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden">
          <button
            type="button"
            onClick={() => toggleSection('postHarvest')}
            className="w-full p-5 sm:p-6 flex items-center justify-between text-left hover:bg-stone-50 cursor-pointer transition-colors"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
                <Archive className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-black text-stone-900">
                {labels.postHarvest[currentLang] || labels.postHarvest.en}
              </h3>
            </div>
            {expandedSections.postHarvest ? (
              <ChevronUp className="w-5 h-5 text-stone-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-stone-500" />
            )}
          </button>

          {expandedSections.postHarvest && (
            <div className="p-5 sm:p-6 pt-0 border-t border-stone-100 space-y-5">
              {/* Maturity Signs */}
              {renderPracticeCard(
                advisory.postHarvest.maturity.title,
                advisory.postHarvest.maturity.image,
                advisory.postHarvest.maturity.imageCaption,
                advisory.postHarvest.maturity.description,
                advisory.postHarvest.maturity.details,
                `practice_maturity_${advisory.cropId}`
              )}

              {/* Harvesting Technique */}
              {renderPracticeCard(
                advisory.postHarvest.harvesting.title,
                advisory.postHarvest.harvesting.image,
                advisory.postHarvest.harvesting.imageCaption,
                advisory.postHarvest.harvesting.description,
                advisory.postHarvest.harvesting.details,
                `practice_harvesting_${advisory.cropId}`
              )}

              {/* Curing / Drying */}
              {renderPracticeCard(
                advisory.postHarvest.dryingAndCuring.title,
                advisory.postHarvest.dryingAndCuring.image,
                advisory.postHarvest.dryingAndCuring.imageCaption,
                advisory.postHarvest.dryingAndCuring.description,
                advisory.postHarvest.dryingAndCuring.details,
                `practice_drying_${advisory.cropId}`
              )}

              {/* Storage */}
              {renderPracticeCard(
                advisory.postHarvest.storage.title,
                advisory.postHarvest.storage.image,
                advisory.postHarvest.storage.imageCaption,
                advisory.postHarvest.storage.description,
                advisory.postHarvest.storage.details,
                `practice_storage_${advisory.cropId}`
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
