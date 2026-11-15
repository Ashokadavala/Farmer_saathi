import React, { useState, useEffect } from 'react';
import { Mic, MicOff, CheckCircle2, User, MapPin, Building, Sparkles, X, Volume2, ArrowRight, RotateCcw } from 'lucide-react';
import { FarmerLocation, LanguageCode, UserProfile } from '../types';
import { getT } from '../i18n/translations';
import { voiceService } from '../services/voiceService';
import { api } from '../services/api';

interface VoiceOnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: LanguageCode;
  onCompleteProfile: (profile: UserProfile) => void;
}

export const VoiceOnboardingModal: React.FC<VoiceOnboardingModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  onCompleteProfile,
}) => {
  const t = getT(currentLang);

  const [isListening, setIsListening] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [spokenTranscript, setSpokenTranscript] = useState<string>('');
  const [detectedProfile, setDetectedProfile] = useState<{
    name: string;
    state: string;
    district: string;
    village: string;
    mobile?: string;
  } | null>(null);

  const [promptMessage, setPromptMessage] = useState<string>('');
  const [missingFieldStep, setMissingFieldStep] = useState<'none' | 'village' | 'name'>('none');
  const [errorMsg, setErrorMsg] = useState<string>('');

  // Initial welcome prompt text in farmer's active language
  useEffect(() => {
    if (isOpen) {
      const initialPrompt =
        currentLang === 'te'
          ? 'రైతు సోదరా, మీ పేరు మరియు మీ గ్రామం, జిల్లా పేరు చెప్పండి.'
          : currentLang === 'kn'
          ? 'ರೈತ ಮಿತ್ರರೇ, ನಿಮ್ಮ ಹೆಸರು ಮತ್ತು ನಿಮ್ಮ ಗ್ರಾಮ, ಜಿಲ್ಲೆಯ ಹೆಸರನ್ನು ಹೇಳಿ.'
          : currentLang === 'hi'
          ? 'किसान भाई, अपना नाम और अपने गाँव व जिले का नाम बोलें।'
          : 'Dear Farmer, please speak your name, village, and district.';

      setPromptMessage(initialPrompt);
      setDetectedProfile(null);
      setSpokenTranscript('');
      setErrorMsg('');
      setMissingFieldStep('none');

      // Greet the farmer by voice
      voiceService.speak(initialPrompt, currentLang);
    }
  }, [isOpen, currentLang]);

  if (!isOpen) return null;

  const handleStartVoice = () => {
    if (isListening) {
      voiceService.stopListening();
      setIsListening(false);
      return;
    }

    voiceService.stopSpeaking();
    setErrorMsg('');
    setIsListening(true);

    const started = voiceService.startListening(
      currentLang,
      (text, isFinal) => {
        setSpokenTranscript(text);
        if (isFinal && text.trim().length > 3) {
          processSpokenVoice(text);
        }
      },
      () => {
        setIsListening(false);
      },
      (err) => {
        setIsListening(false);
        setErrorMsg(err);
      }
    );

    if (!started) {
      setIsListening(false);
      setErrorMsg(t.speechNotSupported);
    }
  };

  const processSpokenVoice = async (text: string) => {
    setIsProcessing(true);
    setIsListening(false);
    setErrorMsg('');

    try {
      // Check if farmer said "ఇది తప్పు" (This is wrong) or "మార్చు" (Change)
      const lower = text.toLowerCase();
      const isCorrection =
        lower.includes('తప్పు') ||
        lower.includes('మార్చు') ||
        lower.includes('ತಪ್ಪು') ||
        lower.includes('बदलो') ||
        lower.includes('गलत') ||
        lower.includes('wrong') ||
        lower.includes('change');

      if (isCorrection && detectedProfile) {
        const corrMsg =
          currentLang === 'te'
            ? 'సరే, మీ సరైన వివరాలను మళ్లీ చెప్పండి.'
            : currentLang === 'kn'
            ? 'ಸರಿ, ನಿಮ್ಮ ಸರಿಯಾದ ವಿವರವನ್ನು ಮತ್ತೆ ಹೇಳಿ.'
            : currentLang === 'hi'
            ? 'ठीक है, अपना सही विवरण पुनः बोलें।'
            : 'Sure, please speak your correct details again.';
        setPromptMessage(corrMsg);
        setDetectedProfile(null);
        voiceService.speak(corrMsg, currentLang, () => {
          handleStartVoice();
        });
        setIsProcessing(false);
        return;
      }

      // If we were explicitly asking for a missing village
      if (missingFieldStep === 'village' && detectedProfile) {
        const updatedVillage = text.replace(/^(గ్రామం|నా ఊరు|ఊరు|గ్రామం పేరు|ಗ್ರಾಮ|गांव|village)\s*/i, '').trim();
        const updated = {
          ...detectedProfile,
          village: updatedVillage || 'Gotluru',
        };
        setDetectedProfile(updated);
        setMissingFieldStep('none');

        const confirmMsg =
          currentLang === 'te'
            ? `మీ గ్రామం ${updated.village} గా గుర్తించాము. మీ ప్రొఫైల్ సిద్ధమైంది.`
            : `Updated your village to ${updated.village}. Profile is ready.`;
        setPromptMessage(confirmMsg);
        voiceService.speak(confirmMsg, currentLang);
        setIsProcessing(false);
        return;
      }

      // General voice profile extraction via AI
      const parsed = await api.parseFarmerVoice(text, currentLang);

      // Verify if village is present
      if (!parsed.village || parsed.village === 'Unknown' || parsed.village === '') {
        setDetectedProfile({
          name: parsed.name || 'Farmer',
          state: parsed.state || 'Andhra Pradesh',
          district: parsed.district || 'Sri Sathya Sai',
          village: '',
          mobile: parsed.mobile || '',
        });
        setMissingFieldStep('village');
        const askVillageMsg =
          currentLang === 'te'
            ? `${parsed.name ? parsed.name + ' గారు, ' : ''}మీ గ్రామం పేరు ఏమిటి? దయచేసి చెప్పండి.`
            : currentLang === 'kn'
            ? `${parsed.name ? parsed.name + ', ' : ''}ನಿಮ್ಮ ಗ್ರಾಮದ ಹೆಸರೇನು? ದಯವಿಟ್ಟು ತಿಳಿಸಿ.`
            : currentLang === 'hi'
            ? `${parsed.name ? parsed.name + ', ' : ''}आपके गाँव का नाम क्या है? कृपया बोलें।`
            : 'What is your village name? Please speak.';

        setPromptMessage(askVillageMsg);
        voiceService.speak(askVillageMsg, currentLang, () => {
          // auto listen for the missing village
          handleStartVoice();
        });
        setIsProcessing(false);
        return;
      }

      const completed = {
        name: parsed.name || 'Ashok',
        state: parsed.state || 'Andhra Pradesh',
        district: parsed.district || 'Sri Sathya Sai',
        village: parsed.village || 'Gotluru',
        mobile: parsed.mobile || '',
      };
      setDetectedProfile(completed);
      setMissingFieldStep('none');

      const confirmMsg =
        parsed.spokenConfirmation ||
        (currentLang === 'te'
          ? `రైతు ${completed.name} గారు, మీ గ్రామం: ${completed.village}, జిల్లా: ${completed.district}, రాష్ట్రం: ${completed.state} గా విజయవంతంగా గుర్తించాము.`
          : currentLang === 'kn'
          ? `ರೈತ ${completed.name}, ನಿಮ್ಮ ಗ್ರಾಮ: ${completed.village}, ಜಿಲ್ಲೆ: ${completed.district}, ರಾಜ್ಯ: ${completed.state} ಎಂದು ಯಶಸ್ವಿಯಾಗಿ ಗುರುತಿಸಲಾಗಿದೆ.`
          : currentLang === 'hi'
          ? `किसान ${completed.name}, आपका गाँव: ${completed.village}, जिला: ${completed.district}, राज्य: ${completed.state} दर्ज कर लिया गया है।`
          : `Identified: ${completed.name}, Village: ${completed.village}, District: ${completed.district}, State: ${completed.state}.`);

      setPromptMessage(confirmMsg);
      voiceService.speak(confirmMsg, currentLang);
    } catch (e: any) {
      console.error('Error in voice onboarding:', e);
      setErrorMsg(
        currentLang === 'te'
          ? 'మాటలను గుర్తించలేకపోయాము. దయచేసి మైక్రోఫోన్ బటన్ నొక్కి మళ్లీ స్పష్టంగా చెప్పండి.'
          : 'Could not recognize voice. Please click the button and speak clearly.'
      );
    } finally {
      setIsProcessing(false);
    }
  };

  const handleConfirmAndSave = async () => {
    if (!detectedProfile) return;

    try {
      const updatedUser: UserProfile = {
        id: 'farmer_' + Date.now(),
        name: detectedProfile.name || 'Ashok',
        mobile: detectedProfile.mobile || '9876543210',
        location: {
          state: detectedProfile.state || 'Andhra Pradesh',
          district: detectedProfile.district || 'Sri Sathya Sai',
          village: detectedProfile.village || 'Gotluru',
        },
        language: currentLang,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      await api.updateProfile({
        name: updatedUser.name,
        mobile: updatedUser.mobile,
        state: updatedUser.location.state,
        district: updatedUser.location.district,
        village: updatedUser.location.village || 'Gotluru',
        language: currentLang,
      });

      onCompleteProfile(updatedUser);
      onClose();
    } catch (e) {
      console.error('Failed to save profile:', e);
      // Still complete locally
      onCompleteProfile({
        id: 'farmer_' + Date.now(),
        name: detectedProfile.name || 'Ashok',
        mobile: detectedProfile.mobile || '9876543210',
        location: {
          state: detectedProfile.state || 'Andhra Pradesh',
          district: detectedProfile.district || 'Sri Sathya Sai',
          village: detectedProfile.village || 'Gotluru',
        },
        language: currentLang,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl border-2 border-emerald-500 overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 text-white p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-400 text-emerald-950 flex items-center justify-center shadow-md font-bold text-2xl">
              🗣️
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black">
                {currentLang === 'te'
                  ? 'వాయిస్ ప్రొఫైల్ నమోదు'
                  : currentLang === 'kn'
                  ? 'ಧ್ವನಿ ಪ್ರೊಫೈಲ್ ನೋಂದಣಿ'
                  : currentLang === 'hi'
                  ? 'आवाज से प्रोफाइल बनाएं'
                  : 'Voice Profile Registration'}
              </h2>
              <p className="text-xs text-emerald-200">
                {currentLang === 'te'
                  ? 'టైప్ చేయాల్సిన అవసరం లేదు — మాట్లాడితే చాలు!'
                  : 'No typing needed — just speak naturally!'}
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
        <div className="p-6 sm:p-8 space-y-6 flex flex-col items-center text-center">
          
          {/* Spoken Prompt Guidance */}
          <div className="w-full bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-emerald-950 text-sm sm:text-base font-semibold leading-relaxed">
            <p className="flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
              <span>{promptMessage}</span>
            </p>
          </div>

          {/* GIANT SPEAK BUTTON */}
          <div className="py-2 flex flex-col items-center justify-center">
            <button
              id="btn-voice-onboarding-speak"
              type="button"
              onClick={handleStartVoice}
              disabled={isProcessing}
              className={`w-28 h-28 sm:w-32 sm:h-32 rounded-full flex flex-col items-center justify-center shadow-2xl transition-all active:scale-95 cursor-pointer ${
                isListening
                  ? 'bg-red-500 text-white animate-pulse ring-8 ring-red-200 shadow-red-300'
                  : isProcessing
                  ? 'bg-amber-400 text-emerald-950 ring-8 ring-amber-100'
                  : 'bg-emerald-600 hover:bg-emerald-700 text-white ring-8 ring-emerald-100 hover:ring-emerald-200'
              }`}
            >
              {isListening ? (
                <>
                  <MicOff className="w-10 h-10 animate-bounce" />
                  <span className="text-xs font-black mt-1">వినబడుతోంది...</span>
                </>
              ) : isProcessing ? (
                <>
                  <RotateCcw className="w-10 h-10 animate-spin" />
                  <span className="text-xs font-black mt-1">గుర్తిస్తోంది...</span>
                </>
              ) : (
                <>
                  <Mic className="w-12 h-12" />
                  <span className="text-xs sm:text-sm font-black mt-1">
                    {currentLang === 'te' ? 'మాట్లాడండి' : currentLang === 'kn' ? 'ಮಾತನಾಡಿ' : currentLang === 'hi' ? 'बोलें' : 'Speak'}
                  </span>
                </>
              )}
            </button>

            <p className="text-xs text-stone-500 mt-4 max-w-sm">
              {currentLang === 'te'
                ? 'ఉదాహరణ: "నా పేరు అశోక్. నేను శ్రీ సత్య సాయి జిల్లా ఆంధ్రప్రదేశ్ లోని గోట్లూరు గ్రామానికి చెందినవాడిని."'
                : 'Example: "My name is Ashok, from Gotluru village, Sri Sathya Sai district, Andhra Pradesh."'}
            </p>
          </div>

          {/* Live Transcript */}
          {spokenTranscript && (
            <div className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 text-xs sm:text-sm text-stone-700 text-left">
              <span className="font-bold text-stone-500 block mb-1">మీరు చెప్పిన మాటలు:</span>
              <p className="italic">"{spokenTranscript}"</p>
            </div>
          )}

          {/* Error Message */}
          {errorMsg && (
            <div className="w-full bg-red-50 border border-red-200 rounded-xl p-3 text-xs text-red-700">
              {errorMsg}
            </div>
          )}

          {/* Structured Confirmation Card */}
          {detectedProfile && (
            <div className="w-full bg-emerald-50/80 border-2 border-emerald-400 rounded-2xl p-5 text-left space-y-3 animate-fadeIn">
              <div className="flex items-center justify-between pb-2 border-b border-emerald-200">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  {currentLang === 'te' ? 'గుర్తించబడిన వివరాలు' : 'Detected Details'}
                </span>
                <button
                  type="button"
                  onClick={() => processSpokenVoice('మార్చు')}
                  className="text-xs text-emerald-700 hover:text-emerald-900 font-semibold underline cursor-pointer"
                >
                  {currentLang === 'te' ? 'సవరించండి (మార్చు)' : 'Change / Edit'}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
                <div>
                  <span className="text-stone-500 block text-[11px]">
                    {currentLang === 'te' ? 'పేరు:' : 'Name:'}
                  </span>
                  <span className="font-extrabold text-stone-900 text-base">{detectedProfile.name || 'Ashok'}</span>
                </div>
                <div>
                  <span className="text-stone-500 block text-[11px]">
                    {currentLang === 'te' ? 'గ్రామం:' : 'Village:'}
                  </span>
                  <span className="font-extrabold text-stone-900 text-base">{detectedProfile.village || 'Gotluru'}</span>
                </div>
                <div>
                  <span className="text-stone-500 block text-[11px]">
                    {currentLang === 'te' ? 'జిల్లా:' : 'District:'}
                  </span>
                  <span className="font-extrabold text-stone-900 text-base">{detectedProfile.district || 'Sri Sathya Sai'}</span>
                </div>
                <div>
                  <span className="text-stone-500 block text-[11px]">
                    {currentLang === 'te' ? 'రాష్ట్రం:' : 'State:'}
                  </span>
                  <span className="font-extrabold text-stone-900 text-base">{detectedProfile.state || 'Andhra Pradesh'}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex items-center gap-3">
                <button
                  id="btn-confirm-voice-profile"
                  type="button"
                  onClick={handleConfirmAndSave}
                  className="flex-1 bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 px-4 rounded-xl text-sm sm:text-base flex items-center justify-center space-x-2 shadow-lg transition-all active:scale-95 cursor-pointer"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span>
                    {currentLang === 'te'
                      ? 'ఖరారు చేసి ప్రారంభించండి'
                      : currentLang === 'kn'
                      ? 'ದೃಢೀಕರಿಸಿ ಪ್ರಾರಂಭಿಸಿ'
                      : currentLang === 'hi'
                      ? 'पुष्टि करें और शुरू करें'
                      : 'Confirm & Start'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
