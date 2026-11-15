// Crop Identification Utility for Multilingual Voice and Text Inputs
// Supports Telugu, Kannada, Hindi, and English crop names and common regional variations.

export interface CropIdentifierMatch {
  cropId: string;
  matchedTerm: string;
  confidence: number;
}

export const CROP_SYNONYMS: Record<string, string[]> = {
  tomato: [
    'tomato',
    'tomatoes',
    'టమాట',
    'టమోటా',
    'టొమాటో',
    'టామాట',
    'టొమేటో',
    'టామోటా',
    'ಟೊಮೆಟೊ',
    'ಟೊಮ್ಯಾಟೊ',
    'ಟೊಮಾಟೊ',
    'टमाटर',
    'tamatar',
  ],
  groundnut: [
    'groundnut',
    'peanut',
    'peanuts',
    'monkeynut',
    'వేరుశనగ',
    'వేరుశెనగ',
    'వేరు సెనగ',
    'పల్లీ',
    'పల్లీలు',
    'పల్లీ పంట',
    'శనక్కాయ',
    'సెనక్కాయ',
    'కడలెకాయి',
    'ಕಡಲೆಕಾಯಿ',
    'ನೆಲಗಡಲೆ',
    'ನೆಲಗಡಲೆಕಾಯಿ',
    'ಮೂಂಗ್‌ಫಲಿ',
    'मूंगफली',
    'मूँगफली',
    'चीनिया बादाम',
    'mungfali',
    'palli',
  ],
  onion: [
    'onion',
    'onions',
    'shallot',
    'ఉల్లి',
    'ఉల్లిపాయ',
    'ఉల్లిగడ్డ',
    'ఎర్రగడ్డ',
    'ఎర్రగడ్డలు',
    'నీరుల్లి',
    'ఈరుళ్ళి',
    'ಈರುಳ್ಳಿ',
    'ಈರುಳ್ಳಿಯ',
    'ఉల్లి సాగు',
    'प्याज',
    'कांदा',
    'pyaj',
    'kanda',
  ],
  paddy: [
    'paddy',
    'rice',
    'rice crop',
    'వరి',
    'వరిపంట',
    'వరిసాగు',
    'వరిధాన్యం',
    'వరి నాట్లు',
    'వరి విత్తనాలు',
    'వరి చేను',
    'వరికంకి',
    'ధాన్యం',
    'బియ్యం',
    'భత్త',
    'ಭತ್ತ',
    'ಭತ್ತದ',
    'ಅಕ್ಕಿ',
    'धान',
    'चावल',
    'dhan',
    'bhatta',
  ],
  cotton: [
    'cotton',
    'cotton crop',
    'పత్తి',
    'పత్తిపంట',
    'పత్తిసాగు',
    'పత్తిచేను',
    'దూది',
    'ప్రత్తి',
    'హత్తి',
    'ಹತ್ತಿ',
    'ಹತ್ತಿಯ',
    'ಕಪಾಸ್',
    'कपास',
    'रूई',
    'kapas',
    'hatti',
  ],
  chilli: [
    'chilli',
    'chili',
    'chillies',
    'hot pepper',
    'red chilli',
    'green chilli',
    'మిరప',
    'మిరపపంట',
    'మిరపసాగు',
    'మిర్చి',
    'పచ్చిమిర్చి',
    'ఎండుమిర్చి',
    'మిరపకాయ',
    'మెణసినకాయి',
    'ಮೆಣಸಿನಕಾಯಿ',
    'ಖಾರದ ಪುಡಿ',
    'मिर्च',
    'हरी मिर्च',
    'लाल मिर्च',
    'mirchi',
    'mirapa',
  ],
  maize: [
    'maize',
    'corn',
    'sweet corn',
    'corn cob',
    'మొక్కజొన్న',
    'మక్కజొన్న',
    'జొన్న',
    'మక్కజొన్న కంకి',
    'మక్కలు',
    'మెక్కేజోళ',
    'ಮೆಕ್ಕೆಜೋಳ',
    'ಜೋಳ',
    'मक्का',
    'भुट्टा',
    'मकई',
    'makka',
    'makkajonna',
  ],
  sugarcane: [
    'sugarcane',
    'sugar cane',
    'cane',
    'చెరకు',
    'చెరుకు',
    'చెరకుతోట',
    'చెరకు సాగు',
    'కబ్బిన',
    'ಕಬ್ಬು',
    'ಕಬ್ಬಿನ',
    'गन्ना',
    'ईख',
    'ganna',
    'cheruku',
  ],
};

/**
 * Identifies a crop from user text or speech transcript.
 * Returns the exact matched cropId (e.g. 'groundnut', 'tomato', 'onion', etc.)
 * Returns NULL if no crop is identified.
 * CRITICAL RULE: Never defaults to tomato or any fallback crop!
 */
export function identifyCropFromQuery(query: string): string | null {
  if (!query || typeof query !== 'string') return null;
  const lower = query.toLowerCase().trim();

  // Search through all crop synonyms
  for (const [cropId, synonyms] of Object.entries(CROP_SYNONYMS)) {
    for (const syn of synonyms) {
      if (lower.includes(syn.toLowerCase())) {
        return cropId;
      }
    }
  }

  return null;
}

/**
 * Checks if a given cropId is valid in the crop database
 */
export function isValidCropId(cropId: string): boolean {
  return cropId in CROP_SYNONYMS;
}
