import React, { useState } from 'react';
import { X, Mic, Send, Volume2, VolumeX, Sparkles, ArrowRight, CheckCircle2, ShieldAlert, Package, Sprout, DollarSign, CloudSun, Camera, User } from 'lucide-react';
import { LanguageCode, FarmerLocation, UserProfile } from '../types';
import { getT } from '../i18n/translations';
import { voiceService } from '../services/voiceService';
import { api } from '../services/api';
import { CROPS_CATALOG } from '../data/cropsData';
import { resolveAgriProductVisual, AgriProductVisual } from '../utils/productImages';

interface VoiceAskModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserProfile;
  currentLang: LanguageCode;
  isGlobalSpeaking: boolean;
  onStopGlobalAudio: () => void;
  onNavigate?: (view: string, extraParams?: any) => void;
  onUpdateUser?: (updated: UserProfile) => void;
}

export const VoiceAskModal: React.FC<VoiceAskModalProps> = ({
  isOpen,
  onClose,
  user,
  currentLang,
  isGlobalSpeaking,
  onStopGlobalAudio,
  onNavigate,
  onUpdateUser,
}) => {
  const t = getT(currentLang);

  const [question, setQuestion] = useState<string>('');
  const [isListening, setIsListening] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [answer, setAnswer] = useState<string>('');
  const [isSpeakingAnswer, setIsSpeakingAnswer] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [detectedRoute, setDetectedRoute] = useState<{
    view: string;
    label: string;
    icon: string;
    params?: any;
  } | null>(null);
  const [recommendedProducts, setRecommendedProducts] = useState<AgriProductVisual[]>([]);

  if (!isOpen) return null;

  const toggleVoiceInput = () => {
    if (isListening) {
      voiceService.stopListening();
      setIsListening(false);
      return;
    }

    onStopGlobalAudio();
    setIsSpeakingAnswer(false);
    setErrorMsg('');
    setDetectedRoute(null);
    setRecommendedProducts([]);
    setIsListening(true);

    const started = voiceService.startListening(
      currentLang,
      (text, isFinal) => {
        setQuestion(text);
        if (isFinal && text.trim().length > 3) {
          handleAsk(text);
        }
      },
      () => {
        setIsListening(false);
      },
      (err) => {
        setIsListening(false);
        setErrorMsg(currentLang === 'te' ? 'మైక్రోఫోన్ లోపం: ' + err : 'Microphone error: ' + err);
      }
    );

    if (!started) {
      setIsListening(false);
      setErrorMsg(t.speechNotSupported);
    }
  };

  const detectSpokenIntent = (q: string): { view: string; label: string; icon: string; params?: any } | null => {
    const lower = q.toLowerCase();

    // Helper to extract crop id
    let matchedCropId = '';
    if (lower.includes('వేరుశనగ') || lower.includes('కడలెకాయి') || lower.includes('ಕಡಲೆಕಾಯಿ') || lower.includes('మూంగఫలీ') || lower.includes('मूंगफली') || lower.includes('groundnut') || lower.includes('peanut')) {
      matchedCropId = 'groundnut';
    } else if (lower.includes('టమాట') || lower.includes('టమోటా') || lower.includes('టొమాటో') || lower.includes('ಟೊಮೆಟೊ') || lower.includes('टमाटर') || lower.includes('tomato')) {
      matchedCropId = 'tomato';
    } else if (lower.includes('వరి') || lower.includes('భత్త') || lower.includes('ಭತ್ತ') || lower.includes('ధాన్') || lower.includes('धान') || lower.includes('paddy') || lower.includes('rice')) {
      matchedCropId = 'paddy';
    } else if (lower.includes('పత్తి') || lower.includes('హత్తి') || lower.includes('ಹತ್ತಿ') || lower.includes('కపాస్') || lower.includes('कपास') || lower.includes('cotton')) {
      matchedCropId = 'cotton';
    } else if (lower.includes('మిరప') || lower.includes('మెణసినకాయి') || lower.includes('ಮೆಣಸಿನಕಾಯಿ') || lower.includes('మిర్చి') || lower.includes('मिर्च') || lower.includes('chilli') || lower.includes('chili')) {
      matchedCropId = 'chilli';
    } else if (lower.includes('మొక్కజొన్న') || lower.includes('ಮೆಕ್ಕೆಜೋಳ') || lower.includes('मक्का') || lower.includes('maize') || lower.includes('corn')) {
      matchedCropId = 'maize';
    } else if (lower.includes('ఉల్లి') || lower.includes('ఈరుళ్ళి') || lower.includes('ಈರುಳ್ಳಿ') || lower.includes('ప్యాజ్') || lower.includes('प्याज') || lower.includes('onion')) {
      matchedCropId = 'onion';
    }

    // 1. Market Prices / Mandi intent (e.g. "టమాట మార్కెట్ ధర ఎంత?", "ఉల్లి రేటు")
    if (
      lower.includes('ధర') ||
      lower.includes('రేటు') ||
      lower.includes('మార్కెట్') ||
      lower.includes('మండి') ||
      lower.includes('ಧಾರಣೆ') ||
      lower.includes('ಬೆಲೆ') ||
      lower.includes('भाव') ||
      lower.includes('मंडी') ||
      lower.includes('price') ||
      lower.includes('rate') ||
      lower.includes('mandi')
    ) {
      return {
        view: 'market-prices',
        label: currentLang === 'te' ? 'మార్కెట్ ధరల పేజీని తెరవండి' : 'Open Market Prices',
        icon: '💰',
        params: { commodity: matchedCropId || (lower.includes('onion') || lower.includes('ఉల్లి') ? 'onion' : '') },
      };
    }

    // 2. Crop Info / Fertilizer guidance intent
    if (
      lower.includes('పంట గురించి') ||
      lower.includes('గురించి చెప్పు') ||
      lower.includes('గురించి చెప్పండి') ||
      lower.includes('సాగు విధానం') ||
      lower.includes('ఎరువు') ||
      lower.includes('ఎరువులు') ||
      lower.includes('బೆಳೆ ಮಾಹಿತಿ') ||
      lower.includes('ಗೊಬ್ಬರ') ||
      lower.includes('की खेती') ||
      lower.includes('खाद') ||
      lower.includes('crop info') ||
      lower.includes('cultivation') ||
      lower.includes('fertilizer') ||
      matchedCropId !== ''
    ) {
      return {
        view: 'crop-info',
        label: currentLang === 'te' ? 'పంట పూర్తి వివరాల పేజీకి వెళ్లండి' : 'Open Crop Guide',
        icon: '🌱',
        params: { cropId: matchedCropId || 'tomato' },
      };
    }

    // 3. Weather intent
    if (
      lower.includes('వర్షం') ||
      lower.includes('వాతావరణం') ||
      lower.includes('మబ్బు') ||
      lower.includes('మಳೆ') ||
      lower.includes('ಹವಾಮಾನ') ||
      lower.includes('बारिश') ||
      lower.includes('मौसम') ||
      lower.includes('rain') ||
      lower.includes('weather')
    ) {
      return {
        view: 'weather',
        label: currentLang === 'te' ? 'వాతావరణ సూచన పేజీని తెరవండి' : 'Open Weather Forecast',
        icon: '🌧️',
      };
    }

    // 4. Crop Doctor / Disease intent
    if (
      lower.includes('వ్యాధి') ||
      lower.includes('తెగులు') ||
      lower.includes('పురుగు') ||
      lower.includes('ఫోటో') ||
      lower.includes('మచ్చలు') ||
      lower.includes('ముడత') ||
      lower.includes('ఎండిపో') ||
      lower.includes('ರೋಗ') ||
      lower.includes('रोग') ||
      lower.includes('कीट') ||
      lower.includes('disease') ||
      lower.includes('doctor')
    ) {
      return {
        view: 'crop-doctor',
        label: currentLang === 'te' ? 'క్రాప్ డాక్టర్ కెమెరా తెరవండి' : 'Open Crop Doctor',
        icon: '📸',
      };
    }

    // 5. Profile intent
    if (lower.includes('నా పేరు') || lower.includes('నా ఊరు') || lower.includes('ప్రొఫైల్') || lower.includes('ವಿವರ') || lower.includes('प्रोफाइल')) {
      return {
        view: 'profile',
        label: currentLang === 'te' ? 'ప్రొఫైల్ పేజీని తెరవండి' : 'Open Profile',
        icon: '👤',
      };
    }

    return null;
  };

  const handleAsk = async (queryText?: string) => {
    const q = (queryText || question).trim();
    if (!q) return;

    if (isListening) {
      voiceService.stopListening();
      setIsListening(false);
    }

    setIsLoading(true);
    setErrorMsg('');

    // Check if user spoke profile details
    const lower = q.toLowerCase();
    const hasProfileKeywords =
      lower.includes('నా పేరు') ||
      lower.includes('మాది') ||
      lower.includes('గ్రామం') ||
      lower.includes('జిల్లా') ||
      lower.includes('ఆంధ్రప్రదేశ్') ||
      lower.includes('తెలంగాణ') ||
      lower.includes('ಕರ್ನಾಟಕ') ||
      lower.includes('ನನ್ನ ಹೆಸರು') ||
      lower.includes('ಗ್ರಾಮ') ||
      lower.includes('मेरा नाम') ||
      lower.includes('गांव') ||
      lower.includes('my name is');

    if (hasProfileKeywords && onUpdateUser) {
      try {
        const parsed = await api.parseFarmerVoice(q, currentLang);
        if (parsed.name || parsed.village || parsed.district) {
          const updatedUser: UserProfile = {
            ...user,
            name: parsed.name || user.name,
            location: {
              ...user.location,
              village: parsed.village || user.location.village,
              district: parsed.district || user.location.district,
              state: parsed.state || user.location.state,
            },
          };
          onUpdateUser(updatedUser);
          if (typeof window !== 'undefined') {
            localStorage.setItem('farmerSaathiUser', JSON.stringify(updatedUser));
            localStorage.setItem('farmerSaathiProfileCreated', 'true');
          }
        }
      } catch (e) {
        console.warn('Voice profile parsing skipped in query:', e);
      }
    }

    // Check routing intent
    const route = detectSpokenIntent(q);
    setDetectedRoute(route);

    try {
      const locStr = `${user.location.village ? user.location.village + ', ' : ''}${user.location.district}, ${user.location.state}`;
      const res = await api.askVoiceQuestion(q, currentLang, locStr);
      setAnswer(res.answer);

      // Extract relevant product visuals mentioned in query or answer
      const matchedProducts: AgriProductVisual[] = [];
      const keywords = ['mancozeb', 'saaf', 'coragen', 'gypsum', 'ssp', '19-19-19', '0-0-50', 'neem', 'imidacloprid', 'boron', 'formula-4'];
      for (const kw of keywords) {
        if (res.answer.toLowerCase().includes(kw) || q.toLowerCase().includes(kw)) {
          const vis = resolveAgriProductVisual(kw);
          if (vis && !matchedProducts.some((p) => p.name === vis.name)) {
            matchedProducts.push(vis);
          }
        }
      }
      setRecommendedProducts(matchedProducts.slice(0, 3));

      // Speak complete answer in active language
      speakAnswer(res.answer);
    } catch (err: any) {
      setErrorMsg(
        err.message ||
          (currentLang === 'te'
            ? 'సమాధానం పొందడంలో సమస్య ఎదురైంది. దయచేసి మళ్ళీ ప్రయత్నించండి.'
            : 'Failed to get answer. Please try again.')
      );
    } finally {
      setIsLoading(false);
    }
  };

  const speakAnswer = (textToSpeak: string) => {
    if (!textToSpeak) return;
    onStopGlobalAudio();
    setIsSpeakingAnswer(true);

    voiceService.speak(
      textToSpeak,
      currentLang,
      () => setIsSpeakingAnswer(true),
      () => setIsSpeakingAnswer(false),
      () => setIsSpeakingAnswer(false)
    );
  };

  const stopSpeakingAnswer = () => {
    voiceService.stopSpeaking();
    setIsSpeakingAnswer(false);
  };

  const handleRouteClick = () => {
    if (detectedRoute && onNavigate) {
      onNavigate(detectedRoute.view, detectedRoute.params);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/70 backdrop-blur-sm animate-fadeIn">
      <div
        id="modal-voice-ask"
        className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-emerald-100 overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 text-white p-4 sm:p-5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-400 text-emerald-950 flex items-center justify-center shadow-md font-bold">
              <Mic className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold">{t.voiceAskTitle}</h2>
              <p className="text-xs text-emerald-200">
                {currentLang === 'te' ? 'మీ ప్రశ్నను స్పష్టంగా అడగండి' : 'Speak your agricultural question'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-4">
          
          {/* Main Voice Button Hero */}
          <div className="flex flex-col items-center justify-center p-4 bg-emerald-50/70 rounded-2xl border border-emerald-200">
            <button
              id="btn-voice-modal-record"
              type="button"
              onClick={toggleVoiceInput}
              disabled={isLoading}
              className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full flex flex-col items-center justify-center shadow-xl transition-transform active:scale-95 cursor-pointer ${
                isListening
                  ? 'bg-red-500 text-white animate-pulse ring-8 ring-red-100'
                  : 'bg-emerald-600 hover:bg-emerald-700 text-white ring-8 ring-emerald-100'
              }`}
            >
              <Mic className="w-8 h-8 sm:w-10 sm:h-10" />
              <span className="text-[10px] sm:text-xs font-bold mt-1">
                {isListening
                  ? currentLang === 'te' ? 'వింటోంది...' : 'Listening...'
                  : currentLang === 'te' ? 'మాట్లాడండి' : 'Speak'}
              </span>
            </button>
            <p className="text-xs text-stone-500 mt-3 text-center">
              {currentLang === 'te'
                ? 'బటన్ నొక్కి మీ వ్యవసాయ ప్రశ్న అడగండి'
                : 'Click and speak your farming query'}
            </p>
          </div>

          {/* Text Input fallback */}
          <div className="flex items-center space-x-2">
            <input
              id="input-voice-text"
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
              placeholder={
                currentLang === 'te'
                  ? 'ప్రశ్న రాయండి లేదా మాట్లాడండి (ఉదా: టమాట సాగు, రేపటి వాతావరణం, ఉల్లి ధర)...'
                  : 'Type or speak question...'
              }
              className="flex-1 bg-stone-50 border border-stone-300 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button
              id="btn-submit-voice-text"
              type="button"
              onClick={() => handleAsk()}
              disabled={isLoading || !question.trim()}
              className="bg-emerald-700 hover:bg-emerald-800 disabled:opacity-50 text-white p-2.5 rounded-xl font-bold transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

          {/* Error Notice */}
          {errorMsg && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-xs text-red-700">
              {errorMsg}
            </div>
          )}

          {/* Loading Indicator */}
          {isLoading && (
            <div className="flex items-center justify-center space-x-2 py-6 text-emerald-800">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping"></div>
              <span className="text-xs sm:text-sm font-semibold">
                {currentLang === 'te' ? 'రైతు సారథి విశ్లేషిస్తోంది...' : 'Farmer Saathi is analyzing...'}
              </span>
            </div>
          )}

          {/* Intelligent Navigation Route Banner */}
          {detectedRoute && (
            <div className="bg-amber-50 border-2 border-amber-400 rounded-2xl p-4 flex items-center justify-between gap-3 animate-fadeIn">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{detectedRoute.icon}</span>
                <div>
                  <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider block">
                    {currentLang === 'te' ? 'సూచించిన విభాగం' : 'Direct Navigation'}
                  </span>
                  <p className="text-sm font-extrabold text-stone-900">{detectedRoute.label}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleRouteClick}
                className="bg-amber-400 hover:bg-amber-500 text-stone-950 font-bold px-3.5 py-2 rounded-xl text-xs flex items-center space-x-1.5 shadow cursor-pointer"
              >
                <span>{currentLang === 'te' ? 'తెరువండి' : 'Open'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* AI Response Card */}
          {answer && (
            <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-4 sm:p-5 space-y-3 animate-fadeIn">
              <div className="flex items-center justify-between pb-2 border-b border-emerald-200">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-emerald-700" />
                  <span className="text-xs font-bold text-emerald-900">
                    {currentLang === 'te' ? 'రైతు సారథి సమాధానం' : 'Farmer Saathi Answer'}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => (isSpeakingAnswer ? stopSpeakingAnswer() : speakAnswer(answer))}
                  className={`p-1.5 rounded-lg text-xs font-bold flex items-center space-x-1 cursor-pointer ${
                    isSpeakingAnswer
                      ? 'bg-amber-400 text-stone-900 animate-pulse'
                      : 'bg-emerald-200/80 hover:bg-emerald-300 text-emerald-950'
                  }`}
                >
                  {isSpeakingAnswer ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                  <span>{isSpeakingAnswer ? t.stopAudio : (currentLang === 'te' ? 'వినండి' : currentLang === 'kn' ? 'ಆಲಿಸಿ' : currentLang === 'hi' ? 'सुनें' : 'Listen')}</span>
                </button>
              </div>

              <div className="text-xs sm:text-sm text-stone-800 whitespace-pre-line leading-relaxed">
                {answer}
              </div>

              {/* Recommended Product Visuals */}
              {recommendedProducts.length > 0 && (
                <div className="pt-3 border-t border-emerald-200/80 space-y-2">
                  <span className="text-[11px] font-bold text-emerald-900 uppercase tracking-wider block">
                    {currentLang === 'te' ? 'సిఫార్సు చేయబడిన మందులు / ఎరువుల చిత్రాలు:' : 'Recommended Product Visuals:'}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {recommendedProducts.map((p, idx) => (
                      <div key={idx} className="bg-white rounded-xl p-2.5 border border-emerald-200 flex items-center space-x-3 shadow-xs">
                        <img
                          src={p.imageUrl}
                          alt={p.name}
                          referrerPolicy="no-referrer"
                          className="w-12 h-12 rounded-lg object-cover border border-stone-200"
                        />
                        <div className="min-w-0 flex-1">
                          <h5 className="font-bold text-xs text-stone-900 truncate">{p.name}</h5>
                          <span className="text-[10px] text-emerald-800 font-medium block">
                            {p.commonBrands.slice(0, 2).join(', ')}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
