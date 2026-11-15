export type LanguageCode = 'te' | 'kn' | 'hi' | 'en';

export type CropStage =
  | 'Sowing / Seedling'
  | 'Vegetative'
  | 'Flowering'
  | 'Fruiting'
  | 'Harvest';

export interface LanguageOption {
  code: LanguageCode;
  label: string;
  nativeLabel: string;
  flag: string;
}

export interface FarmerLocation {
  state: string;
  district: string;
  village: string;
  latitude?: number;
  longitude?: number;
}

export interface UserProfile {
  id: string;
  name: string;
  mobile: string;
  location: FarmerLocation;
  language: LanguageCode;
  crops?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface ForecastDay {
  date: string;
  dayName: string;
  maxTemp: number;
  minTemp: number;
  condition: string;
  rainProbability: number;
  rainfallMm: number;
}

export type FarmerProfile = UserProfile;
export type NavigationTab = string;

export interface MarketPriceItem {
  id: string;
  cropName: string;
  variety: string;
  mandiName: string;
  district: string;
  state: string;
  modalPrice: number;
  minPrice: number;
  maxPrice: number;
  unit: string;
  trend: 'higher' | 'lower' | 'stable';
  priceDate: string;
  source: string;
}

export interface HourlyForecast {
  time: string;
  hourLabel: string; // "Now", "7 pm", "8 pm", etc.
  temperature: number;
  rainProbability: number;
  condition: string;
  weatherCode: number;
  isDay: boolean;
}

export interface AirQuality {
  aqi: number;
  rating: string; // "Good" | "Satisfactory" | "Moderate" | "Poor"
  color: string;
  pm25?: number;
  pm10?: number;
}

export interface WeatherData {
  location: FarmerLocation;
  current: {
    temperature: number; // in °C
    feelsLike: number;
    humidity: number; // in %
    windSpeed: number; // in km/h
    windDirection: string;
    condition: string;
    conditionCode: number;
    isDay: boolean;
    rainProbability?: number; // in %
    rainfallMm?: number; // mm in last 24h
  };
  hourly: HourlyForecast[];
  airQuality?: AirQuality;
  forecast: ForecastDay[];
  rainfallHistory: {
    date: string;
    amountMm: number;
    label: string;
  }[];
  lastUpdated: string;
  source: string;
}

export interface WeatherWarning {
  id: string;
  type: 'heavy_rainfall' | 'thunderstorm' | 'cyclone' | 'heatwave' | 'strong_winds' | 'flood_alert' | 'frost';
  severity: 'moderate' | 'severe' | 'extreme';
  title: string;
  area: string;
  description: string;
  advisory: string;
  validUntil: string;
  issuedAt: string;
  source: string;
}

export interface LocalizedCropContent {
  name: string;
  category: string;
  suitableSeason: string;
  suitableMonths: string;
  soil: string;
  landPreparation: string;
  seedPlanting: string;
  irrigation: string;
  cropDuration: string;
  fertilizerRequirements: {
    stage: string;
    nutrient: string;
    dosage: string;
    notes: string;
  }[];
  pestDiseasePrevention: {
    problem: string;
    symptoms: string;
    prevention: string;
  }[];
  harvest: string;
  marketInfo: string;
}

export interface CropGuide {
  id: string;
  nameEn: string;
  nameTe: string;
  nameKn: string;
  nameHi: string;
  category: string;
  icon: string;
  image: string;
  suitableSeason: string;
  suitableMonths: string;
  soil: string;
  landPreparation: string;
  seedPlanting: string;
  irrigation: string;
  cropDuration: string;
  fertilizerRequirements: {
    stage: string;
    nutrient: string;
    dosage: string;
    notes: string;
  }[];
  pestDiseasePrevention: {
    problem: string;
    symptoms: string;
    prevention: string;
  }[];
  harvest: string;
  marketInfo: string;
  translations?: {
    te: LocalizedCropContent;
    kn: LocalizedCropContent;
    hi: LocalizedCropContent;
    en: LocalizedCropContent;
  };
}

export interface DifferentialDiagnosisItem {
  disease: string;
  probability: string;
  description: string;
}

export interface CropDoctorResult {
  id: string;
  cropDetected: string;
  isPlantOrCrop: boolean;
  confidence: 'high' | 'medium' | 'low' | 'unclear';
  partAffected: string;
  possibleProblem: string;
  isHealthy: boolean;
  differentialDiagnoses?: DifferentialDiagnosisItem[];
  symptoms: string[];
  possibleCauses: string[];
  recommendedAction: string;
  treatment?: string;
  prevention?: string;
  fertilizerAppropriate: boolean;
  fertilizerNote?: string;
  fertilizerRecommendation?: {
    name: string;
    type: string;
    purpose: string;
    whyRecommended?: string;
    whenToUse?: string;
    howToUse: string;
    dosage?: string;
    precautions: string;
    productImage?: string;
    estimatedCost?: string;
    costSource?: string;
  };
  spokenSummary: {
    te: string;
    kn: string;
    hi: string;
    en: string;
  };
  imageUrl?: string;
  analyzedAt: string;
  disclaimer: string;
}

export interface MarketPriceRecord {
  id: string;
  marketName: string;
  state: string;
  district: string;
  commodity: string;
  commodityLocal: {
    te: string;
    kn: string;
    hi: string;
    en: string;
  };
  variety?: string;
  minPrice: number;
  maxPrice: number;
  modalPrice: number; // in ₹ per Quintal
  unit: string;
  priceDate: string;
  previousPrice?: number;
  priceTrend?: 'higher' | 'lower' | 'stable' | 'insufficient_data';
  priceDifference?: number;
  source: string;
  lastUpdated: string;
  distanceKm?: number;
}

export interface MandiInfo {
  id: string;
  name: string;
  state: string;
  district: string;
  location: string;
  distanceKm: number;
  contactNumber: string;
  operatingDays: string;
  facilities: string[];
  cropsTraded: string[];
  address: string;
}

export interface GovernmentScheme {
  id: string;
  name: string;
  nameLocal: {
    te: string;
    kn: string;
    hi: string;
    en: string;
  };
  level: 'Central' | 'State (Andhra Pradesh)' | 'State (Karnataka)' | 'State (All)';
  category: string;
  purpose: string;
  benefits: string;
  eligibility: string[];
  requiredDocuments: string[];
  howToApply: string;
  officialSource: string;
  sourceUrl: string;
  audioSummary: {
    te: string;
    kn: string;
    hi: string;
    en: string;
  };
}

export interface KisanHelpline {
  id: string;
  name: string;
  nameLocal: {
    te: string;
    kn: string;
    hi: string;
    en: string;
  };
  phoneNumber: string;
  tollFree: boolean;
  timings: string;
  languages: string[];
  purpose: string;
  officialSource: string;
}

export interface CropAdvisoryRecord {
  id: string;
  crop: string;
  stage: 'Sowing/Transplanting' | 'Vegetative' | 'Flowering' | 'Fruiting/Grain Filling' | 'Maturity/Harvest';
  season: 'Kharif' | 'Rabi' | 'Zaid';
  advice: {
    irrigation: string;
    fertilizer: string;
    pestControl: string;
    weatherPrecautions: string;
  };
  source: string;
  updatedAt: string;
}
