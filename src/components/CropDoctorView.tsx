import React, { useState, useRef } from 'react';
import { Camera, Upload, Mic, RefreshCw, Volume2, VolumeX, Sparkles, AlertTriangle, CheckCircle2, ShieldAlert, DollarSign, Send, HelpCircle, ShieldCheck, Package, Info, EyeOff } from 'lucide-react';
import { CropDoctorResult, LanguageCode } from '../types';
import { getT } from '../i18n/translations';
import { voiceService } from '../services/voiceService';
import { api } from '../services/api';
import { resolveAgriProductVisual, resolveCommodityVisual, resolveDiseaseVisual } from '../utils/productImages';

interface CropDoctorViewProps {
  currentLang: LanguageCode;
  isGlobalSpeaking: boolean;
  onStopGlobalAudio: () => void;
}

// Utility to compress and resize image client-side to ensure lightning-fast diagnosis
async function compressImageClientSide(file: File): Promise<{ base64: string; mimeType: string }> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Failed to read image file'));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error('Failed to decode image'));
      img.onload = () => {
        const maxDimension = 1024;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxDimension) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
          }
        } else {
          if (height > maxDimension) {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          return resolve({ base64: reader.result as string, mimeType: file.type });
        }

        ctx.drawImage(img, 0, 0, width, height);
        const compressedBase64 = canvas.toDataURL('image/jpeg', 0.82);
        resolve({ base64: compressedBase64, mimeType: 'image/jpeg' });
      };
      img.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  });
}

export const CropDoctorView: React.FC<CropDoctorViewProps> = ({
  currentLang,
  isGlobalSpeaking,
  onStopGlobalAudio,
}) => {
  const t = getT(currentLang);

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [diagnosisResult, setDiagnosisResult] = useState<CropDoctorResult | null>(null);
  const [isSpeakingLocal, setIsSpeakingLocal] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  // Follow-up question state
  const [followUpQuestion, setFollowUpQuestion] = useState<string>('');
  const [isListeningFollowUp, setIsListeningFollowUp] = useState<boolean>(false);
  const [followUpAnswer, setFollowUpAnswer] = useState<string>('');
  const [isFollowUpLoading, setIsFollowUpLoading] = useState<boolean>(false);

  // Hidden file inputs
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const uploadInputRef = useRef<HTMLInputElement>(null);

  // Handle image capture from Camera or File Upload with instant client-side compression
  const handleImageSelected = async (file: File) => {
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setErrorMsg(
        currentLang === 'te'
          ? 'దయచేసి సరైన ఫోటో ఫైల్‌ను ఎంచుకోండి.'
          : currentLang === 'kn'
          ? 'ದಯವಿಟ್ಟು ಮಾನ್ಯ ಫೋಟೋ ಫೈಲ್ ಆಯ್ಕೆಮಾಡಿ.'
          : currentLang === 'hi'
          ? 'कृपया सही फोटो फाइल चुनें।'
          : 'Please select a valid image file (JPG/PNG).'
      );
      return;
    }

    try {
      setIsAnalyzing(true);
      setErrorMsg('');
      setDiagnosisResult(null);
      setFollowUpAnswer('');

      // 1. Fast client-side compression
      const { base64 } = await compressImageClientSide(file);
      setImagePreview(base64);

      // 2. Immediate backend AI diagnosis
      const result = await api.analyzeCropPhoto(base64, currentLang);
      setDiagnosisResult(result);
      setIsAnalyzing(false);

      // 3. Audio generated AFTER diagnosis is ready
      const spokenSummary = result.spokenSummary?.[currentLang] || result.spokenSummary?.en || '';
      if (spokenSummary) {
        speakDiagnosis(spokenSummary);
      }
    } catch (err: any) {
      console.error('Diagnosis error:', err);
      setIsAnalyzing(false);
      setErrorMsg(
        currentLang === 'te'
          ? 'వ్యాధి విశ్లేషణ విఫలమైంది. దయచేసి ఆకులు లేదా కాయల స్పష్టమైన ఫోటోను తీయండి.'
          : currentLang === 'kn'
          ? 'ವಿಶ್ಲೇಷಣೆ ವಿಫಲವಾಗಿದೆ. ದಯವಿಟ್ಟು ಸ್ಪಷ್ಟವಾದ ಫೋಟೋ ತೆಗೆದುಕೊಳ್ಳಿ.'
          : currentLang === 'hi'
          ? 'विश्लेषण विफल रहा। कृपया स्पष्ट फोटो लें।'
          : 'Analysis failed. Please ensure a clear photo of the plant leaves or fruit.'
      );
    }
  };

  const speakDiagnosis = (textToSpeak?: string) => {
    const summary =
      textToSpeak ||
      diagnosisResult?.spokenSummary?.[currentLang] ||
      diagnosisResult?.spokenSummary?.en ||
      diagnosisResult?.recommendedAction ||
      '';
    if (!summary) return;

    onStopGlobalAudio();
    setIsSpeakingLocal(true);

    voiceService.speak(
      summary,
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

  const handleFollowUpAsk = async (queryText?: string) => {
    const q = (queryText || followUpQuestion).trim();
    if (!q || !diagnosisResult) return;

    setIsFollowUpLoading(true);
    try {
      const prompt = `Regarding the crop doctor diagnosis for ${diagnosisResult.cropDetected} (${diagnosisResult.possibleProblem}): ${q}`;
      const res = await api.askVoiceQuestion(prompt, currentLang, 'Farm');
      setFollowUpAnswer(res.answer);
      voiceService.speak(res.answer, currentLang);
    } catch (e) {
      setFollowUpAnswer(
        currentLang === 'te'
          ? 'సమాధానం పొందడంలో సమస్య ఎదురైంది.'
          : currentLang === 'kn'
          ? 'ಉತ್ತರ ಪಡೆಯುವಲ್ಲಿ ದೋಷ.'
          : currentLang === 'hi'
          ? 'उत्तर प्राप्त करने में त्रुटि।'
          : 'Could not fetch answer.'
      );
    } finally {
      setIsFollowUpLoading(false);
    }
  };

  const toggleVoiceFollowUp = () => {
    if (isListeningFollowUp) {
      voiceService.stopListening();
      setIsListeningFollowUp(false);
      return;
    }

    setFollowUpQuestion('');
    setIsListeningFollowUp(true);

    voiceService.startListening(
      currentLang,
      (text, isFinal) => {
        setFollowUpQuestion(text);
        if (isFinal && text.trim().length > 3) {
          handleFollowUpAsk(text);
        }
      },
      () => setIsListeningFollowUp(false),
      () => setIsListeningFollowUp(false)
    );
  };

  const resetScanner = () => {
    setImagePreview(null);
    setDiagnosisResult(null);
    setFollowUpAnswer('');
    setErrorMsg('');
    stopSpeaking();
  };

  // Resolve verified product, crop, and disease visuals
  const resolvedVisual = diagnosisResult?.fertilizerRecommendation
    ? resolveAgriProductVisual(
        diagnosisResult.fertilizerRecommendation.name,
        diagnosisResult.fertilizerRecommendation.type
      )
    : null;

  const resolvedCropVisual = diagnosisResult?.cropDetected
    ? resolveCommodityVisual(diagnosisResult.cropDetected)
    : null;

  const resolvedDiseaseVisual = diagnosisResult?.possibleProblem
    ? resolveDiseaseVisual(diagnosisResult.possibleProblem, diagnosisResult.cropDetected)
    : null;

  const isUnclearOrNonPlant =
    diagnosisResult &&
    (diagnosisResult.confidence === 'unclear' ||
      diagnosisResult.isPlantOrCrop === false ||
      diagnosisResult.cropDetected?.toLowerCase().includes('unidentified') ||
      diagnosisResult.cropDetected?.toLowerCase().includes('గుర్తించబడని'));

  return (
    <div id="crop-doctor-container" className="space-y-6 animate-fadeIn max-w-4xl mx-auto">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 text-white rounded-3xl p-5 sm:p-7 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-400 text-emerald-950 flex items-center justify-center shadow-lg font-bold text-2xl">
              🩺
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold">{t.cropDoctorTitle}</h2>
              <p className="text-xs sm:text-sm text-emerald-100">{t.cropDoctorSubtitle}</p>
            </div>
          </div>

          {diagnosisResult && (
            <button
              id="btn-scan-another-crop"
              type="button"
              onClick={resetScanner}
              className="flex items-center space-x-1.5 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-white/20 transition-all cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              <span>
                {currentLang === 'te'
                  ? 'మరో ఫోటో తీయండి'
                  : currentLang === 'kn'
                  ? 'ಮತ್ತೊಂದು ಫೋಟೋ ತೆಗೆಯಿರಿ'
                  : currentLang === 'hi'
                  ? 'अन्य फोटो लें'
                  : 'Take Another Photo'}
              </span>
            </button>
          )}
        </div>
      </div>

      {/* Hidden File Inputs for Native Mobile Camera and Gallery Upload */}
      <input
        ref={cameraInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            handleImageSelected(e.target.files[0]);
          }
        }}
      />
      <input
        ref={uploadInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            handleImageSelected(e.target.files[0]);
          }
        }}
      />

      {/* STEP 1: Two Prominent Buttons: Camera & Upload */}
      {!imagePreview && (
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm text-center space-y-6">
          <div className="max-w-md mx-auto space-y-2">
            <span className="text-4xl">📸</span>
            <h3 className="text-lg sm:text-xl font-bold text-stone-800">
              {t.takePhotoTitle}
            </h3>
            <p className="text-xs sm:text-sm text-stone-500">
              {t.photoUploadHint}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-xl mx-auto pt-2">
            {/* 1. Camera Button */}
            <button
              id="btn-take-photo-camera"
              type="button"
              onClick={() => cameraInputRef.current?.click()}
              className="bg-emerald-700 hover:bg-emerald-800 active:scale-95 text-white p-6 sm:p-8 rounded-3xl shadow-lg flex flex-col items-center justify-center space-y-3 transition-all border-2 border-emerald-600 cursor-pointer group"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-amber-400 text-emerald-950 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Camera className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-950" />
              </div>
              <div>
                <span className="text-base sm:text-lg font-extrabold block">
                  📷 {t.takePhoto}
                </span>
                <span className="text-xs text-emerald-100 font-medium">
                  {currentLang === 'te'
                    ? 'ఫోన్ కెమెరాతో నేరుగా ఫోటో తీయండి'
                    : currentLang === 'kn'
                    ? 'ಫೋನ್ ಕ್ಯಾಮೆರಾದಿಂದ ಫೋಟೋ ತೆಗೆಯಿರಿ'
                    : currentLang === 'hi'
                    ? 'फोन कैमरा से फोटो लें'
                    : 'Take photo with camera'}
                </span>
              </div>
            </button>

            {/* 2. Upload Button */}
            <button
              id="btn-upload-photo-gallery"
              type="button"
              onClick={() => uploadInputRef.current?.click()}
              className="bg-stone-50 hover:bg-emerald-50 active:scale-95 text-stone-800 p-6 sm:p-8 rounded-3xl shadow-md flex flex-col items-center justify-center space-y-3 transition-all border-2 border-stone-200 hover:border-emerald-500 cursor-pointer group"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <Upload className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-700" />
              </div>
              <div>
                <span className="text-base sm:text-lg font-extrabold block">
                  📁 {t.uploadPhoto}
                </span>
                <span className="text-xs text-stone-500 font-medium">
                  {currentLang === 'te'
                    ? 'గ్యాలరీ నుండి ఫోటో ఎంచుకోండి'
                    : currentLang === 'kn'
                    ? 'ಗ್ಯಾಲರಿಯಿಂದ ಆಯ್ಕೆಮಾಡಿ'
                    : currentLang === 'hi'
                    ? 'गैलरी से फोटो चुनें'
                    : 'Select from gallery'}
                </span>
              </div>
            </button>
          </div>

          <div className="pt-2 text-center text-xs text-stone-400">
            <span>
              🌾 {currentLang === 'te'
                ? 'వేరుశనగ, టమాటా, వరి, పత్తి, మిరప, మొక్కజొన్న, ఉల్లి, పప్పుధాన్యాలు తదితర పంటలను AI ఆటోమేటిక్‌గా గుర్తిస్తుంది.'
                : currentLang === 'kn'
                ? 'ಕಡಲೆಕಾಯಿ, ಟೊಮೆಟೊ, ಭತ್ತ, ಹತ್ತಿ, ಮೆಣಸಿನಕಾಯಿ ಮುಂತಾದ ಬೆಳೆಗಳನ್ನು AI ಸ್ವತಂತ್ರವಾಗಿ ಗುರುತಿಸುತ್ತದೆ.'
                : currentLang === 'hi'
                ? 'मूंगफली, टमाटर, धान, कपास, मिर्च, मक्का आदि सभी फसलों की AI स्वतंत्र पहचान करता है।'
                : 'Independently identifies Groundnut, Tomato, Paddy, Cotton, Chilli, Maize, Pulses, etc.'}
            </span>
          </div>
        </div>
      )}

      {/* Loading Progress State */}
      {isAnalyzing && (
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-emerald-200 shadow-md text-center space-y-5 animate-pulse">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-emerald-100 flex items-center justify-center">
            <Sparkles className="w-10 h-10 text-emerald-700 animate-spin" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-emerald-950">
              {t.analyzingPhoto}
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              {currentLang === 'te'
                ? 'చిత్రం ఆధారంగా పంటను గుర్తించి, వ్యాధి లక్షణాలు మరియు సిఫార్సు చేసిన మందులను విశ్లేషిస్తున్నాము...'
                : currentLang === 'kn'
                ? 'ಚಿತ್ರವನ್ನು ಪರಿಶೀಲಿಸಿ ಬೆಳೆ ಮತ್ತು ರೋಗ ಲಕ್ಷಣಗಳನ್ನು ವಿಶ್ಲೇಷಿಸಲಾಗುತ್ತಿದೆ...'
                : currentLang === 'hi'
                ? 'चित्र से फसल पहचान व रोग लक्षणों का विश्लेषण किया जा रहा है...'
                : 'Identifying crop from image and analyzing pathology & inputs rapidly...'}
            </p>
          </div>
        </div>
      )}

      {/* Error display */}
      {errorMsg && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-2xl text-xs sm:text-sm font-semibold flex items-center space-x-2">
          <AlertTriangle className="w-5 h-5 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* UNCLEAR PHOTO / NON-PLANT WARNING CARD */}
      {isUnclearOrNonPlant && (
        <div className="bg-amber-50 border-2 border-amber-300 rounded-3xl p-6 sm:p-8 shadow-md space-y-6 text-stone-900">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-200 flex items-center justify-center shrink-0">
              <EyeOff className="w-6 h-6 text-amber-900" />
            </div>
            <div className="space-y-1">
              <span className="inline-block bg-amber-200 text-amber-950 text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                {currentLang === 'te' ? 'స్పష్టత లేని ఫోటో' : currentLang === 'kn' ? 'ಅಸ್ಪಷ್ಟ ಫೋಟೋ' : currentLang === 'hi' ? 'अस्पष्ट फोटो' : 'Unclear Photo'}
              </span>
              <h3 className="text-lg sm:text-xl font-black text-amber-950">
                {diagnosisResult.possibleProblem ||
                  (currentLang === 'te'
                    ? 'పంటను ఖచ్చితంగా గుర్తించలేకపోయాము. దయచేసి స్పష్టమైన ఫోటో తీయండి.'
                    : 'Crop could not be identified confidently. Please upload a clearer photo.')}
              </h3>
              <p className="text-xs sm:text-sm text-amber-900 font-medium">
                {diagnosisResult.recommendedAction ||
                  (currentLang === 'te'
                    ? 'తప్పుడు మందులను వాడకుండా ఉండేందుకు, AI ఊహించదు. స్పష్టమైన ఆకు చిత్రం ఉన్నప్పుడు మాత్రమే సరైన చికిత్స లభిస్తుంది.'
                    : 'To avoid wrong medication, the AI will not guess. Please provide a clear close-up leaf photo.')}
              </p>
            </div>
          </div>

          {/* Photography Tips */}
          <div className="bg-white rounded-2xl p-5 border border-amber-200 space-y-3">
            <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider flex items-center gap-1.5">
              <Info className="w-4 h-4 text-amber-600" />
              <span>
                {currentLang === 'te'
                  ? 'స్పష్టమైన ఫోటో తీయడానికి సూచనలు:'
                  : currentLang === 'kn'
                  ? 'ಉತ್ತಮ ಫೋಟೋ ಸಲಹೆಗಳು:'
                  : currentLang === 'hi'
                  ? 'अच्छी फोटो लेने के सुझाव:'
                  : 'Photo Guidelines for Accurate Diagnosis:'}
              </span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-700">
              <div className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">1.</span>
                <span>{currentLang === 'te' ? 'మంచి సూర్యకాంతి లేదా పగటి వెలుతురులో ఫోటో తీయండి.' : 'Take photo in good natural daylight.'}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">2.</span>
                <span>{currentLang === 'te' ? 'వ్యాధి సోకిన ఆకుకు 15–20 సెం.మీ దగ్గరగా కెమెరా ఉంచండి.' : 'Keep camera 15-20 cm close to the affected leaf.'}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">3.</span>
                <span>{currentLang === 'te' ? 'ఆకుపై ఉన్న మచ్చలు లేదా తెగులు స్పష్టంగా కనిపించేలా ఫోకస్ చేయండి.' : 'Ensure spots/lesions on leaf are in sharp focus.'}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">4.</span>
                <span>{currentLang === 'te' ? 'చేయి కదలకుండా స్థిరంగా పట్టుకోండి.' : 'Hold phone steady without shaking.'}</span>
              </div>
            </div>
          </div>

          {/* Retry Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="button"
              onClick={() => cameraInputRef.current?.click()}
              className="flex-1 flex items-center justify-center space-x-2 bg-emerald-700 hover:bg-emerald-800 text-white py-3 px-5 rounded-2xl font-bold text-sm shadow-md cursor-pointer"
            >
              <Camera className="w-5 h-5 text-amber-300" />
              <span>{currentLang === 'te' ? 'కెమెరాతో మళ్లీ ఫోటో తీయండి' : currentLang === 'kn' ? 'ಮತ್ತೆ ಫೋಟೋ ತೆಗೆಯಿರಿ' : currentLang === 'hi' ? 'फिर से फोटो लें' : 'Retake with Camera'}</span>
            </button>
            <button
              type="button"
              onClick={() => uploadInputRef.current?.click()}
              className="flex-1 flex items-center justify-center space-x-2 bg-white hover:bg-stone-100 text-stone-800 py-3 px-5 rounded-2xl font-bold text-sm border border-stone-300 cursor-pointer"
            >
              <Upload className="w-5 h-5 text-emerald-700" />
              <span>{currentLang === 'te' ? 'మరో ఫోటో అప్‌లోడ్ చేయండి' : currentLang === 'kn' ? 'ಫೋಟೋ ಅಪ್‌ಲೋಡ್' : currentLang === 'hi' ? 'फोटो अपलोड करें' : 'Upload Another Photo'}</span>
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: COMPLETE DIAGNOSTIC CARD (When clear crop & disease diagnosed) */}
      {diagnosisResult && !isUnclearOrNonPlant && (
        <div className="bg-white rounded-3xl border border-stone-200 shadow-xl overflow-hidden space-y-6 pb-6">
          {/* Header Bar with Crop Identity & Voice Button */}
          <div className="bg-gradient-to-r from-emerald-800 to-teal-800 text-white p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="inline-block bg-amber-400 text-emerald-950 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  🌾 {currentLang === 'te' ? 'గుర్తించిన పంట:' : currentLang === 'kn' ? 'ಗುರುತಿಸಲಾದ ಬೆಳೆ:' : currentLang === 'hi' ? 'पहचानी गई फसल:' : 'Identified Crop:'} {diagnosisResult.cropDetected}
                </span>
                <span className="inline-block bg-white/20 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                  {currentLang === 'te' ? 'ఖచ్చితత్వం:' : currentLang === 'kn' ? 'ನಿಖರತೆ:' : currentLang === 'hi' ? 'सटीकता:' : 'Confidence:'} {diagnosisResult.confidence === 'high' ? '95%+' : diagnosisResult.confidence}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
                {diagnosisResult.isHealthy
                  ? currentLang === 'te'
                    ? '✅ ఆరోగ్యకరమైన మొక్క'
                    : currentLang === 'kn'
                    ? '✅ ಆರೋಗ್ಯಕರ ಸಸ್ಯ'
                    : currentLang === 'hi'
                    ? '✅ स्वस्थ पौधा'
                    : '✅ Healthy Plant'
                  : `⚠️ ${diagnosisResult.possibleProblem}`}
              </h3>
              <p className="text-xs text-emerald-100">
                {currentLang === 'te' ? 'బాధిత భాగం:' : currentLang === 'kn' ? 'ಬಾಧಿತ ಭಾಗ:' : currentLang === 'hi' ? 'प्रभावित भाग:' : 'Affected Part:'}{' '}
                <span className="font-semibold text-white">{diagnosisResult.partAffected}</span>
              </p>
            </div>

            {/* Listen Spoken Diagnosis Button */}
            {isSpeakingLocal ? (
              <button
                id="btn-stop-doctor-audio"
                type="button"
                onClick={stopSpeaking}
                className="flex items-center space-x-2 bg-amber-400 hover:bg-amber-500 text-stone-900 px-5 py-2.5 rounded-2xl font-extrabold text-sm shadow-md animate-pulse cursor-pointer shrink-0"
              >
                <VolumeX className="w-5 h-5" />
                <span>{t.stopAudio}</span>
              </button>
            ) : (
              <button
                id="btn-speak-doctor-summary"
                type="button"
                onClick={() => speakDiagnosis()}
                className="flex items-center space-x-2 bg-amber-400 hover:bg-amber-300 text-emerald-950 px-5 py-2.5 rounded-2xl font-extrabold text-sm shadow-lg active:scale-95 transition-all cursor-pointer shrink-0"
              >
                <Volume2 className="w-5 h-5" />
                <span>🔊 {t.explainVoice}</span>
              </button>
            )}
          </div>

          <div className="px-5 sm:px-8 space-y-6">
            {/* Visual Verification Gallery: Crop + Uploaded Sample + Disease Reference */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {/* 1. Identified Crop Reference */}
              {resolvedCropVisual && (
                <div className="rounded-2xl overflow-hidden border border-stone-200 bg-stone-50 shadow-sm flex flex-col">
                  <div className="h-44 bg-stone-100 relative overflow-hidden">
                    <img
                      src={resolvedCropVisual.imageUrl}
                      alt={diagnosisResult.cropDetected}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-emerald-900/80 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-lg">
                      🌱 {currentLang === 'te' ? 'పంట చిత్రం' : currentLang === 'kn' ? 'ಬೆಳೆ ಚಿತ್ರ' : currentLang === 'hi' ? 'फसल फोटो' : 'Crop Image'}
                    </div>
                  </div>
                  <div className="p-2.5 bg-emerald-900 text-white text-xs font-bold text-center">
                    🌱 {diagnosisResult.cropDetected}
                  </div>
                </div>
              )}

              {/* 2. Farmer Uploaded Leaf Photo */}
              {imagePreview && (
                <div className="rounded-2xl overflow-hidden border-2 border-emerald-600 bg-stone-100 shadow-md flex flex-col">
                  <div className="h-44 bg-stone-100 relative overflow-hidden">
                    <img
                      src={imagePreview}
                      alt="Analyzed crop sample"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-stone-900/80 backdrop-blur-xs text-amber-300 text-[11px] font-bold px-2.5 py-1 rounded-lg">
                      📸 {currentLang === 'te' ? 'మీరు తీసిన ఫోటో' : currentLang === 'kn' ? 'ನೀವು ತೆಗೆದ ಫೋಟೋ' : currentLang === 'hi' ? 'आपकी ली गई फोटो' : 'Farmer Upload'}
                    </div>
                  </div>
                  <div className="p-2.5 bg-stone-900 text-stone-100 text-xs font-bold text-center">
                    🔍 {currentLang === 'te' ? 'విశ్లేషించిన ఆకు నమూనా' : 'Analyzed Sample'}
                  </div>
                </div>
              )}

              {/* 3. Disease Reference Visual (if applicable) */}
              {resolvedDiseaseVisual ? (
                <div className="rounded-2xl overflow-hidden border border-amber-300 bg-amber-50/50 shadow-sm flex flex-col">
                  <div className="h-44 bg-stone-100 relative overflow-hidden">
                    <img
                      src={resolvedDiseaseVisual.imageUrl}
                      alt={diagnosisResult.possibleProblem}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-amber-900/80 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-lg">
                      🔬 {currentLang === 'te' ? 'తెగులు రిఫరెన్స్' : currentLang === 'kn' ? 'ರೋಗ ಲಕ್ಷಣ' : currentLang === 'hi' ? 'रोग लक्षण फोटो' : 'Symptom Reference'}
                    </div>
                  </div>
                  <div className="p-2.5 bg-amber-950 text-amber-100 text-xs font-bold text-center truncate px-2">
                    ⚠️ {resolvedDiseaseVisual.name}
                  </div>
                </div>
              ) : (
                <div className="rounded-2xl overflow-hidden border border-emerald-200 bg-emerald-50/60 p-4 flex flex-col justify-center items-center text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                  <span className="font-bold text-xs text-emerald-900">
                    {diagnosisResult.isHealthy
                      ? currentLang === 'te' ? 'ఆరోగ్యకరమైన పంట లక్షణాలు' : 'Healthy Plant Growth'
                      : diagnosisResult.possibleProblem}
                  </span>
                  <p className="text-[11px] text-emerald-700">
                    {diagnosisResult.partAffected}
                  </p>
                </div>
              )}
            </div>

            {/* Symptoms & Underlying Causes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-stone-50 p-4 sm:p-5 rounded-2xl border border-stone-200">
                {/* Symptoms */}
                <div>
                  <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">
                    🔍 {t.symptoms}
                  </h4>
                  <ul className="space-y-1.5">
                    {diagnosisResult.symptoms?.map((s, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-stone-800">
                        <span className="text-emerald-700 font-bold">•</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Causes */}
                <div className="pt-2 border-t border-stone-100 sm:pt-0 sm:border-t-0 sm:border-l sm:border-stone-200 sm:pl-4">
                  <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">
                    ❓ {t.whyHappened}
                  </h4>
                  <ul className="space-y-1.5">
                    {diagnosisResult.possibleCauses?.map((c, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-stone-700">
                        <span className="text-amber-600 font-bold">→</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
            </div>

            {/* DIFFERENTIAL DIAGNOSES SECTION */}
            {diagnosisResult.differentialDiagnoses && diagnosisResult.differentialDiagnoses.length > 0 && (
              <div className="bg-stone-50 rounded-2xl p-4 sm:p-5 border border-stone-200 space-y-3">
                <h4 className="text-xs font-bold text-stone-600 uppercase tracking-wider flex items-center gap-1.5">
                  <Info className="w-4 h-4 text-emerald-700" />
                  <span>
                    {currentLang === 'te'
                      ? 'ఇతర సాధ్యమయ్యే తెగులు నిర్ధారణలు (డిఫరెన్షియల్ డయాగ్నోసిస్):'
                      : currentLang === 'kn'
                      ? 'ಇತರ ಸಂಭವನೀಯ ರೋಗಗಳು:'
                      : currentLang === 'hi'
                      ? 'अन्य संभावित रोग व संभावना:'
                      : 'Differential Diagnoses & Probabilities:'}
                  </span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {diagnosisResult.differentialDiagnoses.map((d, i) => (
                    <div key={i} className="bg-white p-3 rounded-xl border border-stone-200 space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-stone-900">{d.disease}</span>
                        <span className="bg-emerald-100 text-emerald-800 font-extrabold px-2 py-0.5 rounded-md text-[11px]">
                          {d.probability}
                        </span>
                      </div>
                      <p className="text-[11px] text-stone-600 leading-snug">{d.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* WHAT TO DO NOW / TREATMENT CARD */}
            <div className="bg-emerald-50/90 border border-emerald-300 rounded-2xl p-4 sm:p-5 space-y-2">
              <h4 className="text-sm font-bold text-emerald-950 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                <span>
                  {currentLang === 'te'
                    ? 'ఇప్పుడు చేయవలసిన ముఖ్యమైన చర్యలు (ట్రీట్‌మెంట్):'
                    : currentLang === 'kn'
                    ? 'ತಕ್ಷಣದ ಪರಿಹಾರ ಕ್ರಮಗಳು:'
                    : currentLang === 'hi'
                    ? 'तुरंत किए जाने वाले उपाय:'
                    : 'What to Do Now / Treatment Plan:'}
                </span>
              </h4>
              <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed font-medium">
                {diagnosisResult.treatment || diagnosisResult.recommendedAction}
              </p>
            </div>

            {/* FERTILIZER / INPUT RECOMMENDATION WITH COMPULSORY VERIFIED PRODUCT PHOTO */}
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <h4 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                  <Package className="w-5 h-5 text-emerald-700" />
                  <span>{t.fertilizerRecommendation}</span>
                </h4>

                {/* Fertilizer appropriateness badge */}
                {!diagnosisResult.fertilizerAppropriate ? (
                  <span className="bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 border border-amber-300">
                    <ShieldAlert className="w-3.5 h-3.5 text-amber-700" />
                    {currentLang === 'te'
                      ? 'రసాయన ఎరువులు వేయరాదు (రక్షణ మందు మాత్రమే)'
                      : currentLang === 'kn'
                      ? 'ರಾಸಾಯನಿಕ ಗೊಬ್ಬರ ಬೇಡ'
                      : currentLang === 'hi'
                      ? 'रासायनिक खाद न दें'
                      : 'Fertilizer Not Recommended'}
                  </span>
                ) : (
                  <span className="bg-emerald-100 text-emerald-900 text-xs font-bold px-3 py-1 rounded-full border border-emerald-300 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                    {currentLang === 'te'
                      ? 'సిఫార్సు చేయబడిన మందు / ఎరువు'
                      : 'Recommended Input'}
                  </span>
                )}
              </div>

              {/* Warning if Fertilizer NOT Appropriate */}
              {!diagnosisResult.fertilizerAppropriate && (
                <div className="bg-amber-50 border-l-4 border-amber-500 p-3.5 rounded-r-xl space-y-1">
                  <p className="text-xs sm:text-sm font-bold text-amber-900">
                    ⚠️{' '}
                    {diagnosisResult.fertilizerNote ||
                      (currentLang === 'te'
                        ? 'ఈ దశలో సాధారణ రసాయన ఎరువులు వేయడం వలన తెగులు మరింత ఉధృతమయ్యే అవకాశం ఉంది. ఎరువులు వాడరాదు.'
                        : 'Fertilizer may not be the correct treatment for this problem.')}
                  </p>
                  <p className="text-xs text-amber-800">
                    {currentLang === 'te'
                      ? 'తెగులు నివారణకు క్రింద సూచించిన రక్షణ మందును మాత్రమే సరైన మోతాదులో పిచికారీ చేయండి.'
                      : 'Apply only recommended protective fungicide or bio-spray.'}
                  </p>
                </div>
              )}

              {/* Recommended Product Details Card with COMPULSORY REAL PHOTO */}
              {diagnosisResult.fertilizerRecommendation && (
                <div className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200 shadow-sm space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-center">
                    {/* Verified Product Packaging Image */}
                    <div className="sm:col-span-1 rounded-xl overflow-hidden border border-stone-200 bg-stone-100 h-36 flex flex-col items-center justify-center relative">
                      {resolvedVisual?.imageUrl ? (
                        <>
                          <img
                            src={resolvedVisual.imageUrl}
                            alt={diagnosisResult.fertilizerRecommendation.name}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute bottom-0 inset-x-0 bg-black/70 text-white text-[9px] text-center py-0.5 font-bold tracking-tight">
                            {resolvedVisual.category.toUpperCase()}
                          </div>
                        </>
                      ) : (
                        <div className="p-3 text-center space-y-1">
                          <Package className="w-8 h-8 text-stone-400 mx-auto" />
                          <span className="text-[10px] text-stone-500 block font-medium">
                            {currentLang === 'te' ? 'చిత్రం అందుబాటులో లేదు' : 'Product Image Unavailable'}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="sm:col-span-3 space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="bg-emerald-100 text-emerald-800 text-[11px] font-extrabold px-2.5 py-0.5 rounded-md">
                          {diagnosisResult.fertilizerRecommendation.type || 'Agricultural Input'}
                        </span>
                        {resolvedVisual?.commonBrands && resolvedVisual.commonBrands.length > 0 && (
                          <span className="text-[11px] text-stone-500 font-medium">
                            ({resolvedVisual.commonBrands.slice(0, 2).join(', ')})
                          </span>
                        )}
                      </div>

                      <h5 className="font-extrabold text-stone-900 text-base sm:text-lg">
                        {diagnosisResult.fertilizerRecommendation.name}
                      </h5>

                      {resolvedVisual?.chemicalFormula && (
                        <p className="text-[11px] text-stone-500 font-mono">
                          🧪 {resolvedVisual.chemicalFormula}
                        </p>
                      )}

                      <p className="text-xs text-stone-700">
                        <span className="font-bold text-stone-800">
                          {currentLang === 'te' ? 'ఉద్దేశం:' : currentLang === 'kn' ? 'ಉದ್ದೇಶ:' : currentLang === 'hi' ? 'उद्देश्य:' : 'Purpose:'}
                        </span>{' '}
                        {diagnosisResult.fertilizerRecommendation.purpose}
                      </p>

                      {diagnosisResult.fertilizerRecommendation.whyRecommended && (
                        <p className="text-xs text-stone-600">
                          <span className="font-bold text-stone-700">
                            {currentLang === 'te' ? 'ఎందుకు సిఫార్సు చేయబడింది:' : 'Why Recommended:'}
                          </span>{' '}
                          {diagnosisResult.fertilizerRecommendation.whyRecommended}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Timing, Application & Precautions Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-stone-100 text-xs">
                    {/* When to Use */}
                    <div className="bg-stone-50 p-3 rounded-xl border border-stone-200 space-y-1">
                      <span className="text-[11px] font-bold text-stone-600 uppercase tracking-wider block">
                        🕒 {currentLang === 'te' ? 'ఎప్పుడు వాడాలి' : currentLang === 'kn' ? 'ಯಾವಾಗ ಬಳಸಬೇಕು' : currentLang === 'hi' ? 'कब उपयोग करें' : 'When to Use'}
                      </span>
                      <p className="text-stone-800 font-medium text-xs">
                        {diagnosisResult.fertilizerRecommendation.whenToUse ||
                          (currentLang === 'te' ? 'లక్షణాలు కనిపించిన వెంటనే ఉదయం లేదా సాయంత్రం వేళల్లో' : 'At early disease onset during cool hours')}
                      </p>
                    </div>

                    {/* How to Apply & Dosage */}
                    <div className="bg-emerald-50/60 p-3 rounded-xl border border-emerald-200 space-y-1">
                      <span className="text-[11px] font-bold text-emerald-900 uppercase tracking-wider block">
                        💧 {currentLang === 'te' ? 'మోతాదు & పిచికారీ విధానం' : currentLang === 'kn' ? 'ಬಳಕೆ ಪ್ರಮಾಣ' : currentLang === 'hi' ? 'मात्रा व विधि' : 'Dosage & Method'}
                      </span>
                      <p className="font-semibold text-emerald-950 text-xs">
                        {diagnosisResult.fertilizerRecommendation.dosage
                          ? `${diagnosisResult.fertilizerRecommendation.dosage} — ${diagnosisResult.fertilizerRecommendation.howToUse}`
                          : diagnosisResult.fertilizerRecommendation.howToUse}
                      </p>
                    </div>

                    {/* Precautions */}
                    <div className="bg-red-50/60 p-3 rounded-xl border border-red-200 space-y-1">
                      <span className="text-[11px] font-bold text-red-700 uppercase tracking-wider block">
                        ⚠️ {currentLang === 'te' ? 'ముఖ్య జాగ్రత్తలు' : currentLang === 'kn' ? 'ಮುನ್ನೆಚ್ಚರಿಕೆಗಳು' : currentLang === 'hi' ? 'सावधानियां' : 'Precautions'}
                      </span>
                      <p className="text-xs text-red-900 font-medium">
                        {diagnosisResult.fertilizerRecommendation.precautions}
                      </p>
                    </div>
                  </div>

                  {/* Price Estimate */}
                  {diagnosisResult.fertilizerRecommendation.estimatedCost && (
                    <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-5 h-5 text-amber-700" />
                        <div>
                          <span className="text-xs font-bold text-stone-900">
                            {currentLang === 'te'
                              ? 'అంచనా మార్కెట్ ధర:'
                              : currentLang === 'kn'
                              ? 'ಅಂದಾಜು ಬೆಲೆ:'
                              : currentLang === 'hi'
                              ? 'अनुमानित मूल्य:'
                              : 'Approx Market Price:'}{' '}
                            <span className="text-emerald-800 font-extrabold">{diagnosisResult.fertilizerRecommendation.estimatedCost}</span>
                          </span>
                          <p className="text-[10px] text-stone-500">
                            {diagnosisResult.fertilizerRecommendation.costSource ||
                              (currentLang === 'te'
                                ? 'అధికారిక పీఏసీఎస్ / ఎరువుల డీలర్ ధరల ఆధారంగా'
                                : 'Approximate retail rate at authorized dealers')}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* FUTURE PREVENTION SECTION */}
            {diagnosisResult.prevention && (
              <div className="bg-teal-50 border border-teal-200 rounded-2xl p-4 sm:p-5 space-y-2">
                <h4 className="text-xs sm:text-sm font-bold text-teal-950 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-teal-700" />
                  <span>
                    {currentLang === 'te'
                      ? 'భవిష్యత్తులో ఈ తెగులు రాకుండా నివారణ చర్యలు:'
                      : currentLang === 'kn'
                      ? 'ಭವಿಷ್ಯದ ಮುನ್ನೆಚ್ಚರಿಕೆ ಕ್ರಮಗಳು:'
                      : currentLang === 'hi'
                      ? 'भविष्य में रोकथाम के उपाय:'
                      : 'Future Prevention Guidelines:'}
                  </span>
                </h4>
                <p className="text-xs sm:text-sm text-teal-900 leading-relaxed font-medium">
                  {diagnosisResult.prevention}
                </p>
              </div>
            )}

            {/* Disclaimer */}
            <p className="text-[11px] text-stone-400 italic text-center">
              ℹ️ {diagnosisResult.disclaimer}
            </p>

            {/* FOLLOW UP VOICE / TEXT QUESTION */}
            <div className="pt-4 border-t border-stone-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm font-bold text-stone-800 flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4 text-emerald-700" />
                  <span>
                    {currentLang === 'te'
                      ? 'ఈ రోగం లేదా మందుల గురించి ప్రశ్న అడగండి:'
                      : currentLang === 'kn'
                      ? 'ಈ ರೋಗದ ಕುರಿತು ಪ್ರಶ್ನೆ ಕೇಳಿ:'
                      : currentLang === 'hi'
                      ? 'इस रोग के बारे में प्रश्न पूछें:'
                      : 'Have a question about this diagnosis?'}
                  </span>
                </span>
                <span className="text-xs text-stone-400">
                  {currentLang === 'te'
                    ? 'మాట్లాడండి లేదా టైప్ చేయండి'
                    : currentLang === 'kn'
                    ? 'ಮಾತನಾಡಿ ಅಥವಾ ಟೈಪ್ ಮಾಡಿ'
                    : currentLang === 'hi'
                    ? 'बोलें या टाइप करें'
                    : 'Speak or Type'}
                </span>
              </div>

              <div className="flex space-x-2">
                <input
                  id="input-followup-doctor"
                  type="text"
                  value={followUpQuestion}
                  onChange={(e) => setFollowUpQuestion(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleFollowUpAsk()}
                  placeholder={
                    currentLang === 'te'
                      ? 'ఉదా: ఈ మందును ఇతర మందులతో కలపవచ్చా? లేదా ఎప్పుడు పిచికారీ చేయాలి?'
                      : currentLang === 'kn'
                      ? 'ಉದಾ: ಈ ಔಷಧವನ್ನು ಯಾವಾಗ ಸಿಂಪಡಿಸಬೇಕು?'
                      : currentLang === 'hi'
                      ? 'उदा: छिड़काव का सही समय क्या है?'
                      : 'e.g. Can I mix this spray? When to spray?'
                  }
                  className="flex-1 bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />

                <button
                  id="btn-voice-followup"
                  type="button"
                  onClick={toggleVoiceFollowUp}
                  className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                    isListeningFollowUp
                      ? 'bg-red-600 text-white border-red-600 animate-pulse'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-700 border-stone-300'
                  }`}
                  title={t.speak}
                >
                  <Mic className="w-4 h-4" />
                </button>

                <button
                  id="btn-submit-followup"
                  type="button"
                  onClick={() => handleFollowUpAsk()}
                  disabled={isFollowUpLoading || !followUpQuestion.trim()}
                  className="bg-emerald-700 hover:bg-emerald-800 disabled:bg-stone-300 text-white px-4 rounded-xl font-bold text-xs sm:text-sm transition-colors cursor-pointer flex items-center"
                >
                  {isFollowUpLoading ? (
                    <RefreshCw className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </button>
              </div>

              {followUpAnswer && (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3.5 text-xs sm:text-sm text-stone-800 space-y-1">
                  <div className="font-bold text-emerald-950 flex items-center justify-between">
                    <span>💡 {t.answerTitle}:</span>
                    <button
                      type="button"
                      onClick={() => speakDiagnosis(followUpAnswer)}
                      className="text-xs text-emerald-700 hover:underline flex items-center gap-1 cursor-pointer font-bold"
                    >
                      <Volume2 className="w-3.5 h-3.5" /> {t.listenAnswer}
                    </button>
                  </div>
                  <p className="leading-relaxed">{followUpAnswer}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
