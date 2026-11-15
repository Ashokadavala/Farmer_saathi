// Crop-Specific Advisory Database Interfaces & Types
// Every crop has its OWN dedicated advisory data, growth stages, fertilizers, timings, and pest/disease management.
// STRICT RULE: Never mix or reuse information across crops.

export interface StageFertilizer {
  productName: string;
  productImage: string;
  category: 'fertilizer' | 'micronutrient' | 'bio' | 'soil_amendment';
  whenToApply: {
    en: string;
    te: string;
    kn: string;
    hi: string;
  };
  purpose: {
    en: string;
    te: string;
    kn: string;
    hi: string;
  };
  applicationMethod: {
    en: string;
    te: string;
    kn: string;
    hi: string;
  };
  dosage: string;
  applicationsCount?: string;
  precautions: {
    en: string;
    te: string;
    kn: string;
    hi: string;
  };
}

export interface StagePestDisease {
  name: {
    en: string;
    te: string;
    kn: string;
    hi: string;
  };
  problemType: 'pest' | 'disease';
  symptomImage: string;
  symptoms: {
    en: string;
    te: string;
    kn: string;
    hi: string;
  };
  prevention: {
    en: string;
    te: string;
    kn: string;
    hi: string;
  };
  treatment: {
    en: string;
    te: string;
    kn: string;
    hi: string;
  };
  recommendedProduct: string;
  productImage: string;
  applicationTiming: {
    en: string;
    te: string;
    kn: string;
    hi: string;
  };
  safetyPrecautions?: {
    en: string;
    te: string;
    kn: string;
    hi: string;
  };
}

export interface CropGrowthStage {
  id: string;
  order: number;
  name: {
    en: string;
    te: string;
    kn: string;
    hi: string;
  };
  timing: {
    en: string;
    te: string;
    kn: string;
    hi: string;
  };
  stageImage: string;
  whatToDo: {
    en: string;
    te: string;
    kn: string;
    hi: string;
  };
  irrigationGuide: {
    en: string;
    te: string;
    kn: string;
    hi: string;
  };
  weatherPrecaution: {
    en: string;
    te: string;
    kn: string;
    hi: string;
  };
  fertilizers: StageFertilizer[];
  pestsAndDiseases: StagePestDisease[];
}

export interface CropPracticeSection {
  title: { en: string; te: string; kn: string; hi: string };
  image: string;
  imageCaption: { en: string; te: string; kn: string; hi: string };
  description: { en: string; te: string; kn: string; hi: string };
  details: { en: string; te: string; kn: string; hi: string }[];
  precautions?: { en: string; te: string; kn: string; hi: string };
}

export interface NutrientDetailItem {
  nutrientName: string;
  fertilizerProduct: string;
  productImage: string;
  category: 'primary' | 'secondary' | 'micronutrient';
  whenToApply: { en: string; te: string; kn: string; hi: string };
  purpose: { en: string; te: string; kn: string; hi: string };
  howToApply: { en: string; te: string; kn: string; hi: string };
  dosage: string;
  precautions: { en: string; te: string; kn: string; hi: string };
}

export interface PostHarvestSection {
  maturity: CropPracticeSection;
  harvesting: CropPracticeSection;
  dryingAndCuring: CropPracticeSection;
  storage: CropPracticeSection;
}

export interface CropAdvisoryRecord {
  cropId: string;
  cropName: {
    en: string;
    te: string;
    kn: string;
    hi: string;
  };
  category: {
    en: string;
    te: string;
    kn: string;
    hi: string;
  };
  icon: string;
  cropImage: string;
  suitableSeason: {
    en: string;
    te: string;
    kn: string;
    hi: string;
  };
  soilRequirements: {
    en: string;
    te: string;
    kn: string;
    hi: string;
  };
  seedAndSowing: {
    en: string;
    te: string;
    kn: string;
    hi: string;
  };
  cropDuration: {
    en: string;
    te: string;
    kn: string;
    hi: string;
  };
  stages: CropGrowthStage[];
  harvestingGuide: {
    en: string;
    te: string;
    kn: string;
    hi: string;
  };
  precautions: {
    en: string;
    te: string;
    kn: string;
    hi: string;
  };
  // Detailed Practice Modules with Mandatory Photos
  soilAndClimate?: CropPracticeSection;
  landPreparation?: CropPracticeSection;
  seedAndSowingPractice?: {
    seed: CropPracticeSection;
    treatment: CropPracticeSection;
    sowing: CropPracticeSection;
  };
  waterAndWeedManagement?: {
    irrigation: CropPracticeSection;
    weeding: CropPracticeSection;
  };
  criticalMilestone?: CropPracticeSection;
  nutrientsMasterPlan?: {
    primary: NutrientDetailItem[];
    secondary: NutrientDetailItem[];
    micronutrients: NutrientDetailItem[];
  };
  postHarvest?: PostHarvestSection;
}

// Re-export groundnut advisory
export { GROUNDNUT_ADVISORY } from './advisories/groundnutAdvisory';
