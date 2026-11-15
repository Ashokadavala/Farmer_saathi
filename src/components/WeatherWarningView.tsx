import React, { useState } from 'react';
import { AlertTriangle, ShieldAlert, Volume2, VolumeX, MapPin, Calendar, Clock, RefreshCw } from 'lucide-react';
import { FarmerLocation, LanguageCode, WeatherWarning } from '../types';
import { getT } from '../i18n/translations';
import { voiceService } from '../services/voiceService';

interface WeatherWarningViewProps {
  warnings: WeatherWarning[];
  location: FarmerLocation;
  currentLang: LanguageCode;
  isLoading: boolean;
  onRefresh: () => void;
  isGlobalSpeaking: boolean;
  onStopGlobalAudio: () => void;
}

export const WeatherWarningView: React.FC<WeatherWarningViewProps> = ({
  warnings,
  location,
  currentLang,
  isLoading,
  onRefresh,
  isGlobalSpeaking,
  onStopGlobalAudio,
}) => {
  const t = getT(currentLang);
  const [isSpeakingLocal, setIsSpeakingLocal] = useState<boolean>(false);

  const speakWarning = (warning: WeatherWarning) => {
    onStopGlobalAudio();

    let text = '';
    const locStr = `${location.district}, ${location.state}`;
    if (currentLang === 'te') {
      text = `వాతావరణ హెచ్చరిక: ${warning.title}. ${warning.description}. రైతులకు సూచన: ${warning.advisory}`;
    } else if (currentLang === 'kn') {
      text = `ಹವಾಮಾನ ಎಚ್ಚರಿಕೆ: ${warning.title}. ${warning.description}. ರೈತರಿಗೆ ಸಲಹೆ: ${warning.advisory}`;
    } else if (currentLang === 'hi') {
      text = `मौसम चेतावनी: ${warning.title}। ${warning.description}। किसानों के लिए सलाह: ${warning.advisory}`;
    } else {
      text = `Weather Warning: ${warning.title}. ${warning.description}. Farmer Advisory: ${warning.advisory}`;
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
    <div id="weather-warning-container" className="space-y-6 animate-fadeIn">
      
      {/* Banner */}
      <div className="bg-gradient-to-r from-amber-700 via-orange-800 to-red-900 text-white rounded-3xl p-5 sm:p-7 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-400 text-amber-950 flex items-center justify-center shadow-lg font-bold text-2xl animate-pulse">
              ⚠️
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold">{t.weatherWarningTitle}</h2>
              <p className="text-xs sm:text-sm text-amber-100 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                Active Alerts for {location.district}, {location.state}
              </p>
            </div>
          </div>

          <button
            id="btn-refresh-warnings"
            type="button"
            onClick={onRefresh}
            disabled={isLoading}
            className="p-2 bg-white/20 hover:bg-white/30 rounded-xl text-white transition-colors cursor-pointer self-start sm:self-auto"
            title="Refresh Warning Status"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      {/* Warnings List */}
      <div className="space-y-4">
        {warnings.map((w) => (
          <div
            key={w.id}
            className="bg-white rounded-3xl border-2 border-amber-300 shadow-md overflow-hidden"
          >
            <div className="bg-amber-50 p-5 sm:p-6 space-y-4">
              
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="bg-amber-500 text-amber-950 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      Severity: {w.severity}
                    </span>
                    <span className="text-xs text-stone-500 font-medium">
                      Valid: {w.validUntil}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-stone-900">
                    {w.title}
                  </h3>
                </div>

                {/* Listen Audio Button */}
                {isSpeakingLocal ? (
                  <button
                    type="button"
                    onClick={stopSpeaking}
                    className="flex items-center space-x-1.5 bg-amber-500 hover:bg-amber-600 text-stone-900 px-4 py-2 rounded-xl text-xs font-bold animate-pulse shadow-sm cursor-pointer"
                  >
                    <VolumeX className="w-4 h-4" />
                    <span>{t.stopAudio}</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => speakWarning(w)}
                    className="flex items-center space-x-1.5 bg-amber-400 hover:bg-amber-300 text-stone-950 px-4 py-2 rounded-xl text-xs font-bold shadow-md active:scale-95 transition-all cursor-pointer shrink-0"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>🔊 Listen Warning</span>
                  </button>
                )}
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-stone-800 leading-relaxed bg-white p-3.5 rounded-2xl border border-amber-200">
                {w.description}
              </p>

              {/* Farmer Agricultural Advisory */}
              <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-4 space-y-1.5">
                <h4 className="text-xs sm:text-sm font-bold text-emerald-950 flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-emerald-700" />
                  Recommended Action for Farmers (రైతులకు అత్యవసర సూచన):
                </h4>
                <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed font-medium">
                  {w.advisory}
                </p>
              </div>

              {/* Source & Date */}
              <div className="text-[11px] text-stone-500 flex flex-wrap items-center justify-between gap-2 pt-1">
                <span>📡 Source: {w.source}</span>
                <span>Issued: {w.issuedAt}</span>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
