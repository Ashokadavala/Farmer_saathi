import { LanguageCode } from '../types';

export interface LanguageConfigItem {
  name: string;
  nativeName: string;
  speechLang: string;
  langPrefix: string;
  unavailableNotice: string;
}

export const LANGUAGE_CONFIG: Record<LanguageCode, LanguageConfigItem> = {
  te: {
    name: 'Telugu',
    nativeName: 'తెలుగు',
    speechLang: 'te-IN',
    langPrefix: 'te',
    unavailableNotice: 'తెలుగు ఆడియో ప్లే అవుతోంది...',
  },
  kn: {
    name: 'Kannada',
    nativeName: 'ಕನ್ನಡ',
    speechLang: 'kn-IN',
    langPrefix: 'kn',
    unavailableNotice: 'ಕನ್ನಡ ಆಡಿಯೋ ಪ್ಲೇ ಆಗುತ್ತಿದೆ...',
  },
  hi: {
    name: 'Hindi',
    nativeName: 'हिंदी',
    speechLang: 'hi-IN',
    langPrefix: 'hi',
    unavailableNotice: 'हिंदी ऑडियो चल रहा है...',
  },
  en: {
    name: 'English',
    nativeName: 'English',
    speechLang: 'en-IN',
    langPrefix: 'en',
    unavailableNotice: 'Playing English audio guide...',
  },
};

export const LANG_SPEECH_CODES: Record<LanguageCode, string> = {
  te: 'te-IN',
  kn: 'kn-IN',
  hi: 'hi-IN',
  en: 'en-IN',
};

export const LANG_NAMES: Record<LanguageCode, string> = {
  te: 'తెలుగు (Telugu)',
  kn: 'ಕನ್ನಡ (Kannada)',
  hi: 'हिंदी (Hindi)',
  en: 'English',
};

interface IWindow extends Window {
  webkitSpeechRecognition?: any;
  SpeechRecognition?: any;
}

export interface VoiceUnavailableDetails {
  lang: LanguageCode;
  langName: string;
  speechCode: string;
  message: string;
  originalText: string;
}

class VoiceService {
  private static instance: VoiceService;
  private currentAudio: HTMLAudioElement | null = null;
  private isCurrentlySpeaking = false;
  private isCurrentlyListening = false;
  private recognition: any = null;
  private onSpeechEndCallback?: () => void;
  private currentLang: LanguageCode = 'te';
  private onVoiceUnavailableListeners: ((details: VoiceUnavailableDetails) => void)[] = [];
  private abortController: AbortController | null = null;

  private constructor() {
    this.initRecognition();
  }

  public static getInstance(): VoiceService {
    if (!VoiceService.instance) {
      VoiceService.instance = new VoiceService();
    }
    return VoiceService.instance;
  }

  private initRecognition() {
    if (typeof window === 'undefined') return;
    const windowObj = window as IWindow;
    const SpeechRecognition = windowObj.SpeechRecognition || windowObj.webkitSpeechRecognition;
    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = false;
      this.recognition.interimResults = true;
      this.recognition.maxAlternatives = 1;
    }
  }

  public isRecognitionSupported(): boolean {
    if (typeof window === 'undefined') return false;
    const windowObj = window as IWindow;
    return !!(windowObj.SpeechRecognition || windowObj.webkitSpeechRecognition);
  }

  public isSynthesisSupported(): boolean {
    return true;
  }

  public getSpeakingState(): boolean {
    return this.isCurrentlySpeaking;
  }

  public getIsSpeaking(): boolean {
    return this.isCurrentlySpeaking;
  }

  public getCurrentLanguage(): LanguageCode {
    return this.currentLang;
  }

  public subscribeVoiceUnavailable(listener: (details: VoiceUnavailableDetails) => void) {
    this.onVoiceUnavailableListeners.push(listener);
    return () => {
      this.onVoiceUnavailableListeners = this.onVoiceUnavailableListeners.filter((l) => l !== listener);
    };
  }

  /**
   * Unified Central Text-To-Speech (TTS) Engine:
   * Generates genuine Telugu (te-IN), Kannada (kn-IN), Hindi (hi-IN), or English (en-IN) audio
   * using the backend Cloud TTS service and plays it directly in the browser.
   */
  public async speak(
    text: string,
    lang: LanguageCode,
    onStart?: () => void,
    onEnd?: () => void,
    onError?: (err: any) => void,
    onVoiceUnavailable?: (details: VoiceUnavailableDetails) => void
  ): Promise<boolean> {
    if (!text || !text.trim()) return false;

    // 1. Immediately halt any running audio or speech
    this.stopSpeaking();

    this.currentLang = lang;
    this.onSpeechEndCallback = onEnd;
    this.isCurrentlySpeaking = true;

    // Abort previous fetch if pending
    if (this.abortController) {
      this.abortController.abort();
    }
    this.abortController = new AbortController();

    try {
      console.log(`[Farmer Saathi Cloud TTS] Generating genuine audio for language: ${lang.toUpperCase()} (Text length: ${text.length})`);

      if (onStart) onStart();

      const response = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, language: lang }),
        signal: this.abortController.signal,
      });

      if (!response.ok) {
        throw new Error(`TTS server error: ${response.status}`);
      }

      const data = await response.json();
      if (!data.audioBase64) {
        throw new Error('No audio data received from server');
      }

      // Create and configure Audio element
      const audio = new Audio(data.audioBase64);
      this.currentAudio = audio;

      audio.onplay = () => {
        this.isCurrentlySpeaking = true;
      };

      audio.onended = () => {
        this.isCurrentlySpeaking = false;
        this.currentAudio = null;
        if (this.onSpeechEndCallback) {
          this.onSpeechEndCallback();
        }
      };

      audio.onerror = (err) => {
        console.warn('[Farmer Saathi Audio Player] Error event:', err);
        this.isCurrentlySpeaking = false;
        this.currentAudio = null;
        if (onError) onError(err);
      };

      await audio.play();
      return true;
    } catch (err: any) {
      if (err.name === 'AbortError') {
        return false;
      }
      console.warn('[Farmer Saathi TTS] Server TTS fetch failed, attempting streaming fallback:', err);

      try {
        // Fallback: Direct stream endpoint
        const streamUrl = `/api/tts/stream?text=${encodeURIComponent(text.substring(0, 300))}&language=${lang}`;
        const audio = new Audio(streamUrl);
        this.currentAudio = audio;

        audio.onended = () => {
          this.isCurrentlySpeaking = false;
          this.currentAudio = null;
          if (this.onSpeechEndCallback) this.onSpeechEndCallback();
        };

        audio.onerror = (e) => {
          this.isCurrentlySpeaking = false;
          this.currentAudio = null;
          if (onError) onError(e);
        };

        await audio.play();
        return true;
      } catch (streamErr) {
        console.error('[Farmer Saathi TTS] Playback failed:', streamErr);
        this.isCurrentlySpeaking = false;
        if (onError) onError(streamErr);
        return false;
      }
    }
  }

  /**
   * Stop any active audio speech playback immediately
   */
  public stopSpeaking() {
    if (this.abortController) {
      this.abortController.abort();
      this.abortController = null;
    }

    if (this.currentAudio) {
      try {
        this.currentAudio.pause();
        this.currentAudio.currentTime = 0;
      } catch (e) {
        // Ignore
      }
      this.currentAudio = null;
    }

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch (e) {
        // Ignore
      }
    }

    this.isCurrentlySpeaking = false;
  }

  /**
   * Start speech recognition for the selected language
   */
  public startListening(
    lang: LanguageCode,
    onResult: (text: string, isFinal: boolean) => void,
    onEnd?: () => void,
    onError?: (error: string) => void
  ): boolean {
    if (!this.recognition) {
      this.initRecognition();
      if (!this.recognition) {
        if (onError) onError('Speech recognition is not supported in this browser.');
        return false;
      }
    }

    try {
      this.stopSpeaking();
      if (this.isCurrentlyListening) {
        try {
          this.recognition.abort();
        } catch (e) {
          // ignore
        }
      }

      const config = LANGUAGE_CONFIG[lang] || LANGUAGE_CONFIG.te;
      this.recognition.lang = config.speechLang;
      this.isCurrentlyListening = true;

      this.recognition.onresult = (event: any) => {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          } else {
            interimTranscript += event.results[i][0].transcript;
          }
        }

        const text = finalTranscript || interimTranscript;
        if (text) {
          onResult(text, !!finalTranscript);
        }
      };

      this.recognition.onerror = (event: any) => {
        this.isCurrentlyListening = false;
        console.warn('[Farmer Saathi Voice Input] Event:', event.error);
        if (onError) onError(event.error || 'Voice input error');
      };

      this.recognition.onend = () => {
        this.isCurrentlyListening = false;
        if (onEnd) onEnd();
      };

      this.recognition.start();
      return true;
    } catch (err: any) {
      console.error('[Farmer Saathi Voice Input] Start error:', err);
      this.isCurrentlyListening = false;
      if (onError) onError(err.message || 'Failed to start microphone');
      return false;
    }
  }

  public stopListening() {
    if (this.recognition && this.isCurrentlyListening) {
      try {
        this.recognition.stop();
      } catch (e) {
        // Ignore
      }
      this.isCurrentlyListening = false;
    }
  }
}

export const voiceService = VoiceService.getInstance();
