import { CropAdvisoryRecord } from '../cropAdvisoryData';
import { GROUNDNUT_ADVISORY } from './groundnutAdvisory';
import { TOMATO_ADVISORY } from './tomatoAdvisory';
import { ONION_ADVISORY } from './onionAdvisory';
import { PADDY_ADVISORY } from './paddyAdvisory';
import { COTTON_ADVISORY } from './cottonAdvisory';
import { CHILLI_ADVISORY } from './chilliAdvisory';
import { MAIZE_ADVISORY } from './maizeAdvisory';
import { SUGARCANE_ADVISORY } from './sugarcaneAdvisory';

export const ALL_CROP_ADVISORIES: Record<string, CropAdvisoryRecord> = {
  groundnut: GROUNDNUT_ADVISORY,
  tomato: TOMATO_ADVISORY,
  onion: ONION_ADVISORY,
  paddy: PADDY_ADVISORY,
  cotton: COTTON_ADVISORY,
  chilli: CHILLI_ADVISORY,
  maize: MAIZE_ADVISORY,
  sugarcane: SUGARCANE_ADVISORY,
};

/**
 * Strictly returns crop advisory for the identified crop.
 * IMPORTANT: NEVER returns a fallback or default crop!
 * If not found, returns undefined so the UI can explicitly prompt the user to clarify.
 */
export function getCropAdvisory(cropId: string | null | undefined): CropAdvisoryRecord | undefined {
  if (!cropId) return undefined;
  const normalized = cropId.toLowerCase().trim();
  return ALL_CROP_ADVISORIES[normalized];
}

export function getAllSupportedAdvisories(): CropAdvisoryRecord[] {
  return Object.values(ALL_CROP_ADVISORIES);
}
