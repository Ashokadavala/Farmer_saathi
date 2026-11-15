import React, { useState } from 'react';
import { Building2, Phone, MapPin, Clock, CheckCircle2, Volume2, VolumeX, Navigation } from 'lucide-react';
import { FarmerLocation, LanguageCode, MandiInfo } from '../types';
import { getT } from '../i18n/translations';
import { voiceService } from '../services/voiceService';

interface NearbyMandiViewProps {
  mandis: MandiInfo[];
  location: FarmerLocation;
  currentLang: LanguageCode;
  isGlobalSpeaking: boolean;
  onStopGlobalAudio: () => void;
}

export const NearbyMandiView: React.FC<NearbyMandiViewProps> = ({
  mandis,
  location,
  currentLang,
  isGlobalSpeaking,
  onStopGlobalAudio,
}) => {
  const t = getT(currentLang);
  const [isSpeakingLocal, setIsSpeakingLocal] = useState<boolean>(false);

  const speakMandi = (m: MandiInfo) => {
    onStopGlobalAudio();

    let text = '';
    if (currentLang === 'te') {
      text = `${m.name}. దూరం సుమారు ${m.distanceKm} కిలోమీటర్లు. పని వేళలు: ${m.operatingDays}. ప్రధానంగా ట్రేడ్ అయ్యే పంటలు: ${m.cropsTraded?.join(', ')}. సంప్రదించు ఫోన్ నెంబర్: ${m.contactNumber}.`;
    } else if (currentLang === 'kn') {
      text = `${m.name}. ದೂರ ${m.distanceKm} ಕಿಲೋಮೀಟರ್. ಸಂಪರ್ಕ ಸಂಖ್ಯೆ: ${m.contactNumber}.`;
    } else if (currentLang === 'hi') {
      text = `${m.name}. दूरी लगभग ${m.distanceKm} किमी। संपर्क नंबर: ${m.contactNumber}।`;
    } else {
      text = `${m.name}, located approximately ${m.distanceKm} kilometers away. Working hours: ${m.operatingDays}. Contact: ${m.contactNumber}.`;
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
    <div id="nearby-mandi-container" className="space-y-6 animate-fadeIn">
      
      {/* Banner */}
      <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 text-white rounded-3xl p-5 sm:p-7 shadow-xl">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-400 text-emerald-950 flex items-center justify-center shadow-lg font-bold text-2xl">
            📍
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">{t.nearbyMandiTitle}</h2>
            <p className="text-xs sm:text-sm text-emerald-100 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-amber-300" />
              Verified APMC Markets around {location.district}, {location.state}
            </p>
          </div>
        </div>
      </div>

      {/* Mandi Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {mandis.map((m) => (
          <div
            key={m.id}
            className="bg-white rounded-3xl border border-stone-200 shadow-sm hover:shadow-md transition-all p-5 sm:p-6 flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full inline-block mb-1.5">
                    ~{m.distanceKm} km from your village
                  </span>
                  <h3 className="text-base sm:text-lg font-extrabold text-stone-900">
                    {m.name}
                  </h3>
                  <p className="text-xs text-stone-500">{m.address}</p>
                </div>

                {/* Listen button */}
                <button
                  type="button"
                  onClick={() => speakMandi(m)}
                  className="p-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-emerald-950 transition-colors cursor-pointer shrink-0"
                  title="Listen Mandi details"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>

              {/* Operating hours */}
              <div className="flex items-center gap-1.5 text-xs text-stone-700 bg-stone-50 p-2.5 rounded-xl border border-stone-100">
                <Clock className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>{m.operatingDays}</span>
              </div>

              {/* Crops traded */}
              {m.cropsTraded && (
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block">
                    Major Commodities Traded:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {m.cropsTraded.map((crop, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-emerald-50 text-emerald-900 border border-emerald-200 font-semibold px-2.5 py-1 rounded-lg"
                      >
                        {crop}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Facilities */}
              {m.facilities && (
                <div className="space-y-1 pt-1">
                  <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block">
                    Mandi Facilities:
                  </span>
                  <div className="grid grid-cols-2 gap-1 text-[11px] text-stone-600">
                    {m.facilities.map((fac, idx) => (
                      <span key={idx} className="flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span className="truncate">{fac}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Direct Call Button & Contact */}
            <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-3">
              <div>
                <span className="text-[10px] text-stone-400 block">Yard Contact Phone:</span>
                <span className="text-xs font-bold text-stone-800">{m.contactNumber}</span>
              </div>

              <a
                href={`tel:${m.contactNumber.replace(/[^0-9+]/g, '')}`}
                className="flex items-center space-x-1.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-sm transition-all active:scale-95 cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Mandi</span>
              </a>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
