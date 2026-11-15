import React from 'react';
import { Sprout, Volume2, VolumeX, Mic, User, MapPin, Globe, Keyboard } from 'lucide-react';
import { LanguageCode, UserProfile } from '../types';
import { LANGUAGES, getT } from '../i18n/translations';

interface NavbarProps {
  user: UserProfile;
  currentLang: LanguageCode;
  onLanguageChange: (lang: LanguageCode) => void;
  onOpenVoiceAsk: () => void;
  onOpenProfile: () => void;
  isSpeaking: boolean;
  onStopAudio: () => void;
  activeView: string;
  onNavigate: (view: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  user,
  currentLang,
  onLanguageChange,
  onOpenVoiceAsk,
  onOpenProfile,
  isSpeaking,
  onStopAudio,
  activeView,
  onNavigate,
}) => {
  const t = getT(currentLang);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-3">
          
          {/* Brand Logo & Name */}
          <div
            id="nav-brand-logo"
            onClick={() => onNavigate('dashboard')}
            className="flex items-center space-x-3 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 bg-green-600 rounded-2xl flex items-center justify-center shadow-md shadow-green-100 group-hover:scale-105 transition-transform text-white">
              <Sprout className="w-6 h-6 sm:w-7 sm:h-7 text-amber-300" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold tracking-tight text-slate-800 flex items-center gap-1.5">
                Farmer Saathi <span className="text-green-600 font-medium text-xs sm:text-sm">రైతు సారథి</span>
              </h1>
              <p className="text-[11px] sm:text-xs text-slate-500 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-green-600 shrink-0" />
                <span>{user.location.village ? `${user.location.village}, ` : ''}{user.location.district}</span>
              </p>
            </div>
          </div>

          {/* Center/Right Controls */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            
            {/* Audio Playing Indicator / Stop Button */}
            {isSpeaking && (
              <button
                id="btn-stop-audio"
                onClick={onStopAudio}
                className="flex items-center space-x-1.5 px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-xl font-bold text-xs sm:text-sm animate-pulse shadow-xs transition-colors cursor-pointer"
                title="Stop Audio"
              >
                <VolumeX className="w-4 h-4" />
                <span className="hidden sm:inline">{t.stopAudio}</span>
              </button>
            )}

            {/* Quick Type Search Trigger */}
            <button
              id="btn-nav-type-ask"
              onClick={onOpenVoiceAsk}
              className="hidden md:flex items-center space-x-1.5 px-3.5 py-2 border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100 rounded-xl font-medium text-xs sm:text-sm text-slate-700 transition-colors cursor-pointer"
            >
              <Keyboard className="w-4 h-4 text-slate-500" />
              <span>Type</span>
            </button>

            {/* Quick Speak Trigger */}
            <button
              id="btn-nav-voice-ask"
              onClick={onOpenVoiceAsk}
              className="flex items-center space-x-1.5 bg-green-600 hover:bg-green-700 text-white px-3.5 sm:px-4 py-2 rounded-xl font-bold text-xs sm:text-sm shadow-md shadow-green-100 transition-all active:scale-95 cursor-pointer"
            >
              <Mic className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white animate-bounce" />
              <span className="hidden sm:inline">{t.voiceAsk}</span>
              <span className="sm:hidden font-bold">🎤 Speak</span>
            </button>

            {/* Language Selector Dropdown */}
            <div className="relative inline-block">
              <div className="flex items-center bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl px-2.5 py-1.5 sm:py-2 text-xs sm:text-sm text-slate-700 transition-colors">
                <Globe className="w-3.5 h-3.5 mr-1.5 text-green-600" />
                <select
                  id="select-language-nav"
                  value={currentLang}
                  onChange={(e) => onLanguageChange(e.target.value as LanguageCode)}
                  className="bg-transparent text-slate-800 font-semibold focus:outline-none cursor-pointer pr-1"
                >
                  {LANGUAGES.map((lang) => (
                    <option key={lang.code} value={lang.code} className="bg-white text-slate-800 py-1">
                      {lang.flag} {lang.nativeLabel}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Location & Profile Badge */}
            <button
              id="btn-nav-profile"
              onClick={onOpenProfile}
              className="flex items-center space-x-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl text-left transition-colors cursor-pointer"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-green-100 text-green-700 flex items-center justify-center font-bold text-xs">
                <User className="w-4 h-4" />
              </div>
              <div className="hidden lg:block">
                <p className="text-xs font-bold text-slate-800 leading-tight truncate max-w-[110px]">
                  {user.name || t.farmerName}
                </p>
                <p className="text-[10px] text-slate-500 truncate max-w-[110px]">
                  {user.location.district}
                </p>
              </div>
            </button>

          </div>
        </div>
      </div>
    </header>
  );
};

