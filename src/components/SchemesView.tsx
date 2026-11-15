import React, { useState } from 'react';
import { Landmark, Volume2, VolumeX, ExternalLink, CheckCircle2, FileText, ArrowRight, Sparkles } from 'lucide-react';
import { GovernmentScheme, LanguageCode } from '../types';
import { GOVERNMENT_SCHEMES } from '../data/schemesData';
import { getT } from '../i18n/translations';
import { voiceService } from '../services/voiceService';

interface SchemesViewProps {
  currentLang: LanguageCode;
  isGlobalSpeaking: boolean;
  onStopGlobalAudio: () => void;
}

export const SchemesView: React.FC<SchemesViewProps> = ({
  currentLang,
  isGlobalSpeaking,
  onStopGlobalAudio,
}) => {
  const t = getT(currentLang);
  const [selectedScheme, setSelectedScheme] = useState<GovernmentScheme>(GOVERNMENT_SCHEMES[0]);
  const [isSpeakingLocal, setIsSpeakingLocal] = useState<boolean>(false);

  const speakScheme = (scheme: GovernmentScheme) => {
    onStopGlobalAudio();

    const summaryText = scheme.audioSummary?.[currentLang] || scheme.audioSummary?.en || `${scheme.name}. ${scheme.purpose}. Benefits: ${scheme.benefits}.`;

    setIsSpeakingLocal(true);
    voiceService.speak(
      summaryText,
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

  const getLocalizedSchemeName = (scheme: GovernmentScheme) => {
    return scheme.nameLocal?.[currentLang] || scheme.name;
  };

  return (
    <div id="schemes-container" className="space-y-6 animate-fadeIn">
      
      {/* Banner */}
      <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 text-white rounded-3xl p-5 sm:p-7 shadow-xl">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-400 text-emerald-950 flex items-center justify-center shadow-lg font-bold text-2xl">
            🏛️
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">{t.schemesTitle}</h2>
            <p className="text-xs sm:text-sm text-emerald-100">{t.schemesSubtitle}</p>
          </div>
        </div>

        {/* Scheme Selector Pills */}
        <div className="mt-5 pt-4 border-t border-emerald-700/60 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {GOVERNMENT_SCHEMES.map((scheme) => (
            <button
              key={scheme.id}
              type="button"
              onClick={() => {
                setSelectedScheme(scheme);
                stopSpeaking();
              }}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                selectedScheme.id === scheme.id
                  ? 'bg-amber-400 text-emerald-950 shadow-md scale-105'
                  : 'bg-emerald-900/60 hover:bg-emerald-900 text-white border border-emerald-700'
              }`}
            >
              {scheme.name.split('(')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Scheme Detail Card */}
      <div className="bg-white rounded-3xl border border-stone-200 shadow-xl overflow-hidden space-y-6 pb-6">
        
        {/* Scheme Header */}
        <div className="bg-gradient-to-r from-stone-900 to-emerald-950 text-white p-5 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[11px] font-extrabold bg-amber-400 text-emerald-950 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              {selectedScheme.level} • {selectedScheme.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold">
              {getLocalizedSchemeName(selectedScheme)}
            </h3>
            <p className="text-xs text-stone-300">
              Source: {selectedScheme.officialSource}
            </p>
          </div>

          {/* Listen Button */}
          {isSpeakingLocal ? (
            <button
              type="button"
              onClick={stopSpeaking}
              className="flex items-center space-x-2 bg-amber-400 hover:bg-amber-500 text-stone-900 px-5 py-2.5 rounded-2xl font-extrabold text-sm animate-pulse shadow-md cursor-pointer shrink-0"
            >
              <VolumeX className="w-5 h-5" />
              <span>{t.stopAudio}</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => speakScheme(selectedScheme)}
              className="flex items-center space-x-2 bg-amber-400 hover:bg-amber-300 text-emerald-950 px-5 py-2.5 rounded-2xl font-extrabold text-sm shadow-lg active:scale-95 transition-all cursor-pointer shrink-0"
            >
              <Volume2 className="w-5 h-5" />
              <span>🔊 {t.listenScheme}</span>
            </button>
          )}
        </div>

        <div className="px-5 sm:px-8 space-y-6">
          
          {/* Purpose & Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            <div className="bg-stone-50 p-4 sm:p-5 rounded-2xl border border-stone-200 space-y-2">
              <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block">
                🎯 {t.schemePurpose} (పథకం ఉద్దేశం)
              </span>
              <p className="text-xs sm:text-sm font-medium text-stone-800 leading-relaxed">
                {selectedScheme.purpose}
              </p>
            </div>

            <div className="bg-emerald-50/80 p-4 sm:p-5 rounded-2xl border border-emerald-200 space-y-2">
              <span className="text-[11px] font-bold text-emerald-900 uppercase tracking-wider block">
                💰 {t.schemeBenefits} (రైతుకు లభించే లబ్ధి)
              </span>
              <p className="text-xs sm:text-sm font-bold text-emerald-950 leading-relaxed">
                {selectedScheme.benefits}
              </p>
            </div>

          </div>

          {/* Eligibility & Documents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* Eligibility */}
            <div className="bg-stone-50 p-4 sm:p-5 rounded-2xl border border-stone-200 space-y-2.5">
              <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block">
                ✅ {t.schemeEligibility} (అర్హతలు)
              </span>
              <ul className="space-y-1.5">
                {selectedScheme.eligibility.map((e, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-stone-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Required Documents */}
            <div className="bg-stone-50 p-4 sm:p-5 rounded-2xl border border-stone-200 space-y-2.5">
              <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block">
                📄 {t.schemeDocuments} (కావలసిన పత్రాలు)
              </span>
              <ul className="space-y-1.5">
                {selectedScheme.requiredDocuments.map((doc, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-stone-800">
                    <FileText className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* How to Apply */}
          <div className="bg-amber-50/60 border border-amber-200 rounded-2xl p-4 sm:p-5 space-y-2">
            <span className="text-[11px] font-bold text-amber-900 uppercase tracking-wider block">
              📝 {t.schemeApply} (దరఖాస్తు విధానం)
            </span>
            <p className="text-xs sm:text-sm font-medium text-stone-800 leading-relaxed">
              {selectedScheme.howToApply}
            </p>
          </div>

          {/* Official Source Link */}
          {selectedScheme.sourceUrl && (
            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-stone-500">Official Portal: {selectedScheme.officialSource}</span>
              <a
                href={selectedScheme.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 underline"
              >
                <span>Visit Official Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
