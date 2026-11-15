import React, { useState } from 'react';
import { Phone, Volume2, VolumeX, ShieldCheck, Clock, Globe2, AlertCircle } from 'lucide-react';
import { KisanHelpline, LanguageCode } from '../types';
import { KISAN_HELPLINES } from '../data/helplinesData';
import { getT } from '../i18n/translations';
import { voiceService } from '../services/voiceService';

interface KisanHelpViewProps {
  currentLang: LanguageCode;
  isGlobalSpeaking: boolean;
  onStopGlobalAudio: () => void;
}

export const KisanHelpView: React.FC<KisanHelpViewProps> = ({
  currentLang,
  isGlobalSpeaking,
  onStopGlobalAudio,
}) => {
  const t = getT(currentLang);
  const [isSpeakingLocal, setIsSpeakingLocal] = useState<boolean>(false);

  const speakHelpline = (h: KisanHelpline) => {
    onStopGlobalAudio();

    let text = '';
    const name = h.nameLocal?.[currentLang] || h.name;
    if (currentLang === 'te') {
      text = `${name}. ఫోన్ నెంబర్ ${h.phoneNumber}. పని వేళలు ${h.timings}. ఉద్దేశం: ${h.purpose}. మీరు నేరుగా కాల్ చేసి వ్యవసాయ నిపుణులతో మాట్లాడవచ్చు.`;
    } else if (currentLang === 'kn') {
      text = `${name}. ಸಹಾಯವಾಣಿ ಸಂಖ್ಯೆ ${h.phoneNumber}. ಕೃಷಿ ಸಲಹೆಗಳಿಗಾಗಿ ಕರೆ ಮಾಡಿ.`;
    } else if (currentLang === 'hi') {
      text = `${name}। टोल फ्री नंबर ${h.phoneNumber}। कृषि विशेषज्ञों से बात करने के लिए कॉल करें।`;
    } else {
      text = `${h.name}. Phone number: ${h.phoneNumber}. Timings: ${h.timings}. Purpose: ${h.purpose}.`;
    }

    setIsSpeakingLocal(true);
    voiceService.speak(
      text,
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

  return (
    <div id="kisan-help-container" className="space-y-6 animate-fadeIn">
      
      {/* Banner */}
      <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 text-white rounded-3xl p-5 sm:p-7 shadow-xl">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-400 text-emerald-950 flex items-center justify-center shadow-lg font-bold text-2xl">
            📞
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">{t.kisanHelpTitle}</h2>
            <p className="text-xs sm:text-sm text-emerald-100">{t.kisanHelpSubtitle}</p>
          </div>
        </div>
      </div>

      {/* Verified Helplines Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {KISAN_HELPLINES.map((h) => (
          <div
            key={h.id}
            className="bg-white rounded-3xl border border-stone-200 shadow-sm hover:shadow-md transition-all p-5 sm:p-6 flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full inline-block mb-1.5">
                    {h.tollFree ? '🆓 Toll-Free 24x7 / Regular' : 'Official Helpdesk'}
                  </span>
                  <h3 className="text-base sm:text-lg font-extrabold text-stone-900 leading-snug">
                    {h.nameLocal?.[currentLang] || h.name}
                  </h3>
                </div>

                {/* Listen button */}
                <button
                  type="button"
                  onClick={() => speakHelpline(h)}
                  className="p-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-emerald-950 transition-colors cursor-pointer shrink-0"
                  title="Listen Helpline Info"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>

              {/* Timing */}
              <div className="flex items-center gap-1.5 text-xs text-stone-600 bg-stone-50 p-2.5 rounded-xl border border-stone-100">
                <Clock className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>{h.timings}</span>
              </div>

              {/* Purpose */}
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {h.purpose}
              </p>

              {/* Supported Languages */}
              <div className="text-[11px] text-stone-500 flex items-center gap-1">
                <Globe2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Languages: {h.languages.slice(0, 4).join(', ')} + more</span>
              </div>

              <div className="text-[10px] text-stone-400">
                Source: {h.officialSource}
              </div>

            </div>

            {/* Direct Call Button */}
            <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-3">
              <div>
                <span className="text-[10px] text-stone-400 block">Dial Number:</span>
                <span className="text-base font-extrabold text-emerald-900">{h.phoneNumber}</span>
              </div>

              <a
                href={`tel:${h.phoneNumber.replace(/[^0-9+]/g, '')}`}
                className="flex items-center space-x-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-2xl shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>📞 {t.callNow}</span>
              </a>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
