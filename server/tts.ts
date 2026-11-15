// Language mappings for speech synthesis
export const TTS_LANG_MAP: Record<string, string> = {
  te: 'te',
  'te-IN': 'te',
  kn: 'kn',
  'kn-IN': 'kn',
  hi: 'hi',
  'hi-IN': 'hi',
  en: 'en-IN',
  'en-IN': 'en-IN',
  'en-US': 'en',
};

// In-memory LRU audio cache to deliver instant audio for frequently spoken texts
const audioCache = new Map<string, { buffer: Buffer; timestamp: number }>();
const MAX_CACHE_SIZE = 150;

function cleanTextForSpeech(text: string): string {
  return text
    .replace(/[*_#`~>\[\]]/g, '')
    .replace(/₹/g, 'రూపాయలు ')
    .replace(/http\S+/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Split long text into natural sentence fragments suitable for cloud TTS (<180 chars)
 */
function splitIntoTTSChunks(text: string, maxLen = 160): string[] {
  const cleaned = cleanTextForSpeech(text);
  if (!cleaned) return [];

  // Match sentences on full stops, question marks, exclamation marks, colons, danda, or commas
  const sentences = cleaned.split(/(?<=[.!?:\n।,;।])\s+/);
  const chunks: string[] = [];
  let current = '';

  for (const sentence of sentences) {
    const trimmed = sentence.trim();
    if (!trimmed) continue;

    if ((current + ' ' + trimmed).length <= maxLen) {
      current = current ? current + ' ' + trimmed : trimmed;
    } else {
      if (current) chunks.push(current);
      // If a single sentence is abnormally long, break it by words
      if (trimmed.length > maxLen) {
        const words = trimmed.split(' ');
        let wordChunk = '';
        for (const w of words) {
          if ((wordChunk + ' ' + w).length <= maxLen) {
            wordChunk = wordChunk ? wordChunk + ' ' + w : w;
          } else {
            if (wordChunk) chunks.push(wordChunk);
            wordChunk = w;
          }
        }
        if (wordChunk) current = wordChunk;
        else current = '';
      } else {
        current = trimmed;
      }
    }
  }
  if (current) chunks.push(current);

  return chunks.length > 0 ? chunks : [cleaned.substring(0, maxLen)];
}

/**
 * Synthesize genuine cloud audio for Telugu (te), Kannada (kn), Hindi (hi), or English (en)
 */
export async function synthesizeSpeech(text: string, language: string): Promise<Buffer | null> {
  const langKey = (language || 'te').toLowerCase().trim();
  const ttsLang = TTS_LANG_MAP[langKey] || (langKey.startsWith('te') ? 'te' : langKey.startsWith('kn') ? 'kn' : langKey.startsWith('hi') ? 'hi' : 'en-IN');

  const cacheKey = `${ttsLang}:::${text.trim()}`;
  if (audioCache.has(cacheKey)) {
    const cached = audioCache.get(cacheKey)!;
    cached.timestamp = Date.now();
    return cached.buffer;
  }

  const chunks = splitIntoTTSChunks(text);
  if (chunks.length === 0) return null;

  try {
    const audioBuffers: Buffer[] = [];

    for (const chunk of chunks) {
      if (!chunk.trim()) continue;

      const encodedText = encodeURIComponent(chunk.trim());
      const url = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=${ttsLang}&q=${encodedText}`;

      const response = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          Referer: 'https://translate.google.com/',
        },
      });

      if (!response.ok) {
        console.warn(`[TTS] Failed chunk for lang=${ttsLang}, status=${response.status}`);
        continue;
      }

      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      if (buffer.length > 0) {
        audioBuffers.push(buffer);
      }
    }

    if (audioBuffers.length === 0) {
      return null;
    }

    // Concatenate MP3 frames
    const fullAudioBuffer = Buffer.concat(audioBuffers);

    // Save in LRU cache
    if (audioCache.size >= MAX_CACHE_SIZE) {
      let oldestKey = '';
      let oldestTime = Infinity;
      for (const [k, v] of audioCache.entries()) {
        if (v.timestamp < oldestTime) {
          oldestTime = v.timestamp;
          oldestKey = k;
        }
      }
      if (oldestKey) audioCache.delete(oldestKey);
    }

    audioCache.set(cacheKey, {
      buffer: fullAudioBuffer,
      timestamp: Date.now(),
    });

    return fullAudioBuffer;
  } catch (error) {
    console.error('[TTS] Audio generation error:', error);
    return null;
  }
}
