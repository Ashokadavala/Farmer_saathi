import React, { useState } from 'react';
import {
  FlaskConical,
  CheckCircle2,
  AlertCircle,
  Clock,
  Layers,
  ImageOff,
  Sparkles,
} from 'lucide-react';
import { CropAdvisoryRecord, NutrientDetailItem } from '../../data/cropAdvisoryData';
import { LanguageCode } from '../../types';

interface NutrientMasterPlanViewProps {
  advisory: CropAdvisoryRecord;
  currentLang: LanguageCode;
  onImageError: (key: string) => void;
  brokenImages: Record<string, boolean>;
}

export const NutrientMasterPlanView: React.FC<NutrientMasterPlanViewProps> = ({
  advisory,
  currentLang,
  onImageError,
  brokenImages,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'primary' | 'secondary' | 'micronutrient'>('all');

  const plan = advisory.nutrientsMasterPlan;

  if (!plan) {
    return (
      <div className="bg-white rounded-3xl p-8 border border-stone-200 text-center space-y-3">
        <FlaskConical className="w-10 h-10 text-stone-400 mx-auto" />
        <h4 className="text-base font-bold text-stone-800">
          {currentLang === 'te'
            ? 'ఈ పంటకు సంబంధించిన పోషకాల ప్రణాళిక సిద్ధమవుతోంది.'
            : 'Nutrient master plan is being updated for this crop.'}
        </h4>
      </div>
    );
  }

  const allNutrients: NutrientDetailItem[] = [
    ...(plan.primary || []),
    ...(plan.secondary || []),
    ...(plan.micronutrients || []),
  ];

  const displayedNutrients =
    selectedCategory === 'all'
      ? allNutrients
      : selectedCategory === 'primary'
      ? plan.primary || []
      : selectedCategory === 'secondary'
      ? plan.secondary || []
      : plan.micronutrients || [];

  const categoryLabels = {
    all: {
      en: 'All Season Nutrients',
      te: 'మొత్తం పోషకాలు',
      kn: 'ಎಲ್ಲಾ ಪೋಷಕಾಂಶಗಳು',
      hi: 'सभी पोषक तत्व',
    },
    primary: {
      en: 'Primary N-P-K',
      te: 'ప్రధాన పోషకాలు (NPK)',
      kn: 'ಮುಖ್ಯ ಪೋಷಕಾಂಶಗಳು (NPK)',
      hi: 'मुख्य पोषक तत्व (NPK)',
    },
    secondary: {
      en: 'Secondary (Ca, Mg, S)',
      te: 'ద్వితీయ పోషకాలు (సున్నం, మెగ్నీషియం, గంధకం)',
      kn: 'ದ್ವಿತೀಯ ಪೋಷಕಾಂಶಗಳು (Ca, Mg, S)',
      hi: 'द्वितीयक पोषक तत्व (Ca, Mg, S)',
    },
    micronutrient: {
      en: 'Micronutrients (Zn, B, Fe)',
      te: 'సూక్ష్మ పోషకాలు (జింక్, బోరాన్, ఇనుము)',
      kn: 'ಲಘು ಪೋಷಕಾಂಶಗಳು (Zn, B, Fe)',
      hi: 'सूक्ष्म पोषक तत्व (Zn, B, Fe)',
    },
  };

  const uiLabels = {
    planTitle: {
      en: 'Season-Long Scientific Nutrient Master Plan',
      te: 'పూర్తి సీజన్ శాస్త్రీయ ఎరువుల యాజమాన్య ప్రణాళిక',
      kn: 'ಸಂಪೂರ್ಣ ಋತುವಿನ ವೈಜ್ಞಾನಿಕ ರಸಗೊಬ್ಬರ ನಿರ್ವಹಣೆ',
      hi: 'सम्पूर्ण फसल चक्र वैज्ञानिक पोषक तत्व प्रबंधन योजना',
    },
    planSubtitle: {
      en: 'Balanced split application schedule designed for maximum uptake and zero fertilizer wastage',
      te: 'ఎరువులు వృథా కాకుండా సమతుల్య మోతాదులలో అందించే దఫాలవారీ షెడ్యూల్',
      kn: 'ಗೊಬ್ಬರ ವ್ಯರ್ಥವಾಗದಂತೆ ಸಮತೋಲಿತ ಪ್ರಮಾಣದಲ್ಲಿ ನೀಡುವ ಹಂತವಾರು ವೇಳಾಪಟ್ಟಿ',
      hi: 'उर्वरक की बर्बादी रोकने एवं अधिकतम पैदावार हेतु संतुलित चरणबद्ध पोषण योजना',
    },
    dosageLabel: {
      en: 'Dosage (Per Acre):',
      te: 'ఎకరానికి సిఫార్సు మోతాదు:',
      kn: 'ಎಕರೆಗೆ ನಿಖರ ಪ್ರಮಾಣ:',
      hi: 'प्रति एकड़ निर्धारित मात्रा:',
    },
    whenToApply: {
      en: 'When to Apply (Split Schedule):',
      te: 'ఎప్పుడు వేయాలి (దశ & సమయం):',
      kn: 'ಯಾವಾಗ ನೀಡಬೇಕು (ವೇಳಾಪಟ್ಟಿ):',
      hi: 'कब दें (समय व अवस्था):',
    },
    howToApply: {
      en: 'Application Method:',
      te: 'వేసే విధానం (పద్ధతి):',
      kn: 'ಹಾಕುವ ವಿಧಾನ:',
      hi: 'देने की सटीक विधि:',
    },
    purpose: {
      en: 'Crop Physiological Purpose:',
      te: 'పంటకు ఉపయోగం & ప్రాముఖ్యత:',
      kn: 'ಬೆಳೆಗೆ ಪ್ರಯೋಜನ:',
      hi: 'फसल के लिए शारीरिक उपयोग व महत्व:',
    },
    precautions: {
      en: 'Critical Restriction / Precaution:',
      te: 'ముఖ్యమైన జాగ్రత్తలు & నియంత్రణలు:',
      kn: 'ಮುಖ್ಯ ಮುನ್ನೆಚ್ಚರಿಕೆಗಳು:',
      hi: 'महत्वपूर्ण नियम व सावधानियां:',
    },
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-teal-950 to-stone-900 text-white p-5 sm:p-7 rounded-3xl shadow-sm space-y-2">
        <div className="inline-flex items-center space-x-2 bg-amber-400 text-stone-950 px-3 py-1 rounded-full text-xs font-black">
          <FlaskConical className="w-3.5 h-3.5" />
          <span>Full Season Soil Fertility</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-black">
          {uiLabels.planTitle[currentLang] || uiLabels.planTitle.en}
        </h3>
        <p className="text-xs sm:text-sm text-emerald-200">
          {uiLabels.planSubtitle[currentLang] || uiLabels.planSubtitle.en}
        </p>
      </div>

      {/* Category Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {(['all', 'primary', 'secondary', 'micronutrient'] as const).map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              id={`btn-fert-cat-${cat}`}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer shrink-0 shadow-xs ${
                isSelected
                  ? 'bg-emerald-800 text-white scale-102 shadow-sm'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {categoryLabels[cat][currentLang] || categoryLabels[cat].en}
            </button>
          );
        })}
      </div>

      {/* Nutrients Cards Grid */}
      <div className="space-y-5">
        {displayedNutrients.map((item, idx) => {
          const imgKey = `nutr_${advisory.cropId}_${item.category}_${idx}`;
          const isBroken = brokenImages[imgKey];

          return (
            <div
              key={idx}
              className="bg-white rounded-3xl p-5 sm:p-7 border border-stone-200 shadow-sm flex flex-col md:flex-row gap-6 items-start"
            >
              {/* Product Packaging Image */}
              <div className="w-full md:w-48 flex flex-col items-center shrink-0">
                <div className="w-full h-48 bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden flex items-center justify-center p-3 relative shadow-xs">
                  {item.productImage && !isBroken ? (
                    <img
                      src={item.productImage}
                      alt={item.fertilizerProduct}
                      className="w-full h-full object-contain"
                      onError={() => onImageError(imgKey)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-center p-3 bg-stone-100 text-stone-500 rounded-xl">
                      <ImageOff className="w-8 h-8 mb-2 text-stone-400" />
                      <span className="text-xs font-bold leading-tight">Product Pack Visual</span>
                    </div>
                  )}
                </div>
                <span className="text-[11px] text-stone-600 font-semibold mt-2 text-center">
                  {item.fertilizerProduct}
                </span>
              </div>

              {/* Full Details Content */}
              <div className="flex-1 space-y-3.5 w-full">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-2.5">
                  <div>
                    <span
                      className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                        item.category === 'primary'
                          ? 'bg-emerald-100 text-emerald-900'
                          : item.category === 'secondary'
                          ? 'bg-blue-100 text-blue-900'
                          : 'bg-purple-100 text-purple-900'
                      }`}
                    >
                      {item.category === 'primary'
                        ? 'PRIMARY / ప్రధాన పోషకం'
                        : item.category === 'secondary'
                        ? 'SECONDARY / ద్వితీయ పోషకం'
                        : 'MICRONUTRIENT / సూక్ష్మ పోషకం'}
                    </span>
                    <h4 className="text-base sm:text-lg font-black text-stone-900 mt-1">
                      {item.nutrientName}
                    </h4>
                  </div>

                  {/* Dosage Tag */}
                  <div className="bg-amber-400 text-stone-950 px-3.5 py-1.5 rounded-2xl shadow-xs inline-flex items-center gap-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider">
                      {uiLabels.dosageLabel[currentLang] || uiLabels.dosageLabel.en}
                    </span>
                    <span className="text-xs sm:text-sm font-black text-stone-950">
                      {item.dosage}
                    </span>
                  </div>
                </div>

                {/* When to Apply & How to Apply Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-stone-50 p-4 rounded-2xl border border-stone-200">
                  <div className="space-y-1">
                    <span className="font-black text-stone-900 flex items-center gap-1 text-[11px] uppercase tracking-wider text-stone-600">
                      <Clock className="w-3.5 h-3.5 text-emerald-700" />
                      {uiLabels.whenToApply[currentLang] || uiLabels.whenToApply.en}
                    </span>
                    <p className="text-stone-800 font-medium leading-relaxed">
                      {item.whenToApply[currentLang] || item.whenToApply.en}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="font-black text-stone-900 flex items-center gap-1 text-[11px] uppercase tracking-wider text-stone-600">
                      <Layers className="w-3.5 h-3.5 text-blue-700" />
                      {uiLabels.howToApply[currentLang] || uiLabels.howToApply.en}
                    </span>
                    <p className="text-stone-800 font-medium leading-relaxed">
                      {item.howToApply[currentLang] || item.howToApply.en}
                    </p>
                  </div>
                </div>

                {/* Purpose */}
                <div className="bg-emerald-50/50 p-3.5 rounded-2xl border border-emerald-100 text-xs space-y-1">
                  <span className="font-black text-emerald-950 flex items-center gap-1 text-[11px] uppercase tracking-wider">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                    {uiLabels.purpose[currentLang] || uiLabels.purpose.en}
                  </span>
                  <p className="text-emerald-950 font-medium leading-relaxed">
                    {item.purpose[currentLang] || item.purpose.en}
                  </p>
                </div>

                {/* Precautions */}
                {item.precautions && (
                  <div className="bg-amber-50 p-3.5 rounded-2xl border border-amber-200 text-xs flex items-start space-x-2 text-amber-950">
                    <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <span className="font-black text-[11px] uppercase tracking-wider block">
                        {uiLabels.precautions[currentLang] || uiLabels.precautions.en}
                      </span>
                      <p className="font-medium leading-relaxed">
                        {item.precautions[currentLang] || item.precautions.en}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
