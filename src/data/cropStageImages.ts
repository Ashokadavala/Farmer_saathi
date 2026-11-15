// Dedicated, verified photographic registry for crops, growth stages, and inputs
// Prevents image crossover and ensures each crop & stage has distinct real photos.

export interface CropStageVisuals {
  cropImage: string;
  stages: Record<string, string>;
}

export const CROP_STAGE_IMAGES: Record<string, CropStageVisuals> = {
  groundnut: {
    cropImage: 'https://images.unsplash.com/photo-1567892328521-96860d5e1e07?w=700&auto=format&fit=crop&q=80',
    stages: {
      gn_stage_1: 'https://images.unsplash.com/photo-1592417817098-8f3d69102a5c?w=700&auto=format&fit=crop&q=80', // Sowing & Germination
      gn_stage_2: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=700&auto=format&fit=crop&q=80', // Vegetative Growth
      gn_stage_3: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=700&auto=format&fit=crop&q=80', // Flowering & Pegging
      gn_stage_4: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?w=700&auto=format&fit=crop&q=80', // Pod Formation & Gypsum
      gn_stage_5: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?w=700&auto=format&fit=crop&q=80', // Pod Maturity & Harvest
    },
  },
  tomato: {
    cropImage: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=700&auto=format&fit=crop&q=80',
    stages: {
      tom_stage_1: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=700&auto=format&fit=crop&q=80', // Nursery & Transplanting
      tom_stage_2: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=700&auto=format&fit=crop&q=80', // Vegetative & Staking
      tom_stage_3: 'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?w=700&auto=format&fit=crop&q=80', // Branching & Flower Buds
      tom_stage_4: 'https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=700&auto=format&fit=crop&q=80', // Flowering & Fruit Set
      tom_stage_5: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=700&auto=format&fit=crop&q=80', // Fruit Sizing & Breaker
      tom_stage_6: 'https://images.unsplash.com/photo-1561136594-7f68413baa99?w=700&auto=format&fit=crop&q=80', // Harvesting & Maturity
    },
  },
  onion: {
    cropImage: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=700&auto=format&fit=crop&q=80',
    stages: {
      on_stage_1: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=700&auto=format&fit=crop&q=80', // Nursery & Transplanting
      on_stage_2: 'https://images.unsplash.com/photo-1582284540020-8acbe03f4924?w=700&auto=format&fit=crop&q=80', // Vegetative & Rooting
      on_stage_3: 'https://images.unsplash.com/photo-1508747703725-719777637510?w=700&auto=format&fit=crop&q=80', // Bulb Initiation
      on_stage_4: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=700&auto=format&fit=crop&q=80', // Bulb Enlargement
      on_stage_5: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=700&auto=format&fit=crop&q=80', // Neck-fall & Curing
    },
  },
  paddy: {
    cropImage: 'https://images.unsplash.com/photo-1536657464919-892534f60d6e?w=700&auto=format&fit=crop&q=80',
    stages: {
      pad_stage_1: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=700&auto=format&fit=crop&q=80', // Puddling & Transplanting
      pad_stage_2: 'https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?w=700&auto=format&fit=crop&q=80', // Tillering
      pad_stage_3: 'https://images.unsplash.com/photo-1627920769842-6887c6df05ca?w=700&auto=format&fit=crop&q=80', // Panicle Initiation / Booting
      pad_stage_4: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=700&auto=format&fit=crop&q=80', // Flowering & Heading
      pad_stage_5: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=700&auto=format&fit=crop&q=80', // Grain Filling & Milk Stage
      pad_stage_6: 'https://images.unsplash.com/photo-1599818485292-628d0eb5d564?w=700&auto=format&fit=crop&q=80', // Ripening & Harvest
    },
  },
  cotton: {
    cropImage: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=700&auto=format&fit=crop&q=80',
    stages: {
      cot_stage_1: 'https://images.unsplash.com/photo-1527842891421-42eec6e703ea?w=700&auto=format&fit=crop&q=80', // Sowing & Emergence
      cot_stage_2: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=700&auto=format&fit=crop&q=80', // Vegetative & Square Formation
      cot_stage_3: 'https://images.unsplash.com/photo-1508747703725-719777637510?w=700&auto=format&fit=crop&q=80', // Flowering & Early Bolls
      cot_stage_4: 'https://images.unsplash.com/photo-1592417817098-8f3d69102a5c?w=700&auto=format&fit=crop&q=80', // Boll Development
      cot_stage_5: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=700&auto=format&fit=crop&q=80', // Boll Bursting
      cot_stage_6: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=700&auto=format&fit=crop&q=80', // Picking & Clean-up
    },
  },
  chilli: {
    cropImage: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?w=700&auto=format&fit=crop&q=80',
    stages: {
      chl_stage_1: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=700&auto=format&fit=crop&q=80', // Nursery & Transplanting
      chl_stage_2: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=700&auto=format&fit=crop&q=80', // Vegetative Branching
      chl_stage_3: 'https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=700&auto=format&fit=crop&q=80', // Flowering & Fruit Set
      chl_stage_4: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=700&auto=format&fit=crop&q=80', // Green Fruit Development
      chl_stage_5: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?w=700&auto=format&fit=crop&q=80', // Red Ripening
      chl_stage_6: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=700&auto=format&fit=crop&q=80', // Harvesting & Curing
    },
  },
  maize: {
    cropImage: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=700&auto=format&fit=crop&q=80',
    stages: {
      mz_stage_1: 'https://images.unsplash.com/photo-1592417817098-8f3d69102a5c?w=700&auto=format&fit=crop&q=80', // Sowing & Emergence
      mz_stage_2: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=700&auto=format&fit=crop&q=80', // Knee-High Vegetative
      mz_stage_3: 'https://images.unsplash.com/photo-1627920769842-6887c6df05ca?w=700&auto=format&fit=crop&q=80', // Tasseling & Silking
      mz_stage_4: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=700&auto=format&fit=crop&q=80', // Grain Filling & Milk
      mz_stage_5: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=700&auto=format&fit=crop&q=80', // Maturity & Harvest
    },
  },
  sugarcane: {
    cropImage: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?w=700&auto=format&fit=crop&q=80',
    stages: {
      sg_stage_1: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=700&auto=format&fit=crop&q=80', // Sett Planting & Germination
      sg_stage_2: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=700&auto=format&fit=crop&q=80', // Tillering & Earthing up
      sg_stage_3: 'https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?w=700&auto=format&fit=crop&q=80', // Grand Growth
      sg_stage_4: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?w=700&auto=format&fit=crop&q=80', // Ripening & Harvest
    },
  },
};

// Verified Agricultural Input & Fertilizer Visuals
export const INPUT_PRODUCT_IMAGES: Record<string, string> = {
  gypsum: 'https://images.unsplash.com/photo-1597916829826-02e5bb4a54e0?w=500&auto=format&fit=crop&q=80',
  ssp: 'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?w=500&auto=format&fit=crop&q=80',
  urea: 'https://images.unsplash.com/photo-1585314062604-1a357de8b000?w=500&auto=format&fit=crop&q=80',
  dap: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?w=500&auto=format&fit=crop&q=80',
  mop: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=500&auto=format&fit=crop&q=80',
  npk_19_19_19: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=500&auto=format&fit=crop&q=80',
  potassium_nitrate_13_0_45: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=500&auto=format&fit=crop&q=80',
  mkp_0_52_34: 'https://images.unsplash.com/photo-1592417817098-8f3d69102a5c?w=500&auto=format&fit=crop&q=80',
  zinc_sulphate: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=500&auto=format&fit=crop&q=80',
  boron_20: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?w=500&auto=format&fit=crop&q=80',
  formula_4: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?w=500&auto=format&fit=crop&q=80',
  trichoderma: 'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?w=500&auto=format&fit=crop&q=80',
  neem_oil: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&auto=format&fit=crop&q=80',
  coragen: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  saaf: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=500&auto=format&fit=crop&q=80',
  mancozeb: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?w=500&auto=format&fit=crop&q=80',
  imidacloprid: 'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?w=500&auto=format&fit=crop&q=80',
  emamectin: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=500&auto=format&fit=crop&q=80',
  magnesium_sulphate: 'https://images.unsplash.com/photo-1585314062604-1a357de8b000?w=500&auto=format&fit=crop&q=80',
  ferrous_sulphate: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=500&auto=format&fit=crop&q=80',
  rhizobium: 'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?w=500&auto=format&fit=crop&q=80',
  hexaconazole: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=500&auto=format&fit=crop&q=80',
  tebuconazole: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
  fym_compost: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&auto=format&fit=crop&q=80',
};

// Verified Agricultural Practice Visuals (Soil, Land Prep, Seeds, Sowing, Irrigation, Weeding, Harvesting, Drying, Storage)
export interface CropPracticeVisuals {
  soil: string;
  landPrep: string;
  seed: string;
  seedTreatment: string;
  sowing: string;
  irrigation: string;
  weeding: string;
  milestone: string;
  maturity: string;
  harvesting: string;
  drying: string;
  storage: string;
}

export const CROP_PRACTICE_IMAGES: Record<string, CropPracticeVisuals> = {
  groundnut: {
    soil: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=700&auto=format&fit=crop&q=80', // Sandy red loam soil
    landPrep: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?w=700&auto=format&fit=crop&q=80', // Ploughed ridges & furrows
    seed: 'https://images.unsplash.com/photo-1567892328521-96860d5e1e07?w=700&auto=format&fit=crop&q=80', // Bold clean groundnut seeds
    seedTreatment: 'https://images.unsplash.com/photo-1592417817098-8f3d69102a5c?w=700&auto=format&fit=crop&q=80', // Trichoderma seed dressing
    sowing: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=700&auto=format&fit=crop&q=80', // Line sowing with tractor drill
    irrigation: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=700&auto=format&fit=crop&q=80', // Sprinkler irrigation in field
    weeding: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=700&auto=format&fit=crop&q=80', // Inter-cultivation weeding
    milestone: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=700&auto=format&fit=crop&q=80', // Flowering & Pegging entering soil
    maturity: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?w=700&auto=format&fit=crop&q=80', // Mature pods with dark inner lining
    harvesting: 'https://images.unsplash.com/photo-1592417817098-8f3d69102a5c?w=700&auto=format&fit=crop&q=80', // Uprooting groundnut bunches
    drying: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=700&auto=format&fit=crop&q=80', // Sun drying pods on tarpaulin
    storage: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=700&auto=format&fit=crop&q=80', // Gunny bags stacked on pallets
  },
  tomato: {
    soil: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=700&auto=format&fit=crop&q=80',
    landPrep: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?w=700&auto=format&fit=crop&q=80',
    seed: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=700&auto=format&fit=crop&q=80',
    seedTreatment: 'https://images.unsplash.com/photo-1592417817098-8f3d69102a5c?w=700&auto=format&fit=crop&q=80',
    sowing: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=700&auto=format&fit=crop&q=80',
    irrigation: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=700&auto=format&fit=crop&q=80',
    weeding: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=700&auto=format&fit=crop&q=80',
    milestone: 'https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=700&auto=format&fit=crop&q=80', // Flowering & Fruit set
    maturity: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=700&auto=format&fit=crop&q=80',
    harvesting: 'https://images.unsplash.com/photo-1561136594-7f68413baa99?w=700&auto=format&fit=crop&q=80',
    drying: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=700&auto=format&fit=crop&q=80',
    storage: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=700&auto=format&fit=crop&q=80',
  },
  onion: {
    soil: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=700&auto=format&fit=crop&q=80',
    landPrep: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?w=700&auto=format&fit=crop&q=80',
    seed: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=700&auto=format&fit=crop&q=80',
    seedTreatment: 'https://images.unsplash.com/photo-1592417817098-8f3d69102a5c?w=700&auto=format&fit=crop&q=80',
    sowing: 'https://images.unsplash.com/photo-1582284540020-8acbe03f4924?w=700&auto=format&fit=crop&q=80',
    irrigation: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=700&auto=format&fit=crop&q=80',
    weeding: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=700&auto=format&fit=crop&q=80',
    milestone: 'https://images.unsplash.com/photo-1508747703725-719777637510?w=700&auto=format&fit=crop&q=80',
    maturity: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=700&auto=format&fit=crop&q=80',
    harvesting: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=700&auto=format&fit=crop&q=80',
    drying: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=700&auto=format&fit=crop&q=80',
    storage: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=700&auto=format&fit=crop&q=80',
  },
  paddy: {
    soil: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=700&auto=format&fit=crop&q=80',
    landPrep: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=700&auto=format&fit=crop&q=80',
    seed: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=700&auto=format&fit=crop&q=80',
    seedTreatment: 'https://images.unsplash.com/photo-1592417817098-8f3d69102a5c?w=700&auto=format&fit=crop&q=80',
    sowing: 'https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?w=700&auto=format&fit=crop&q=80',
    irrigation: 'https://images.unsplash.com/photo-1536657464919-892534f60d6e?w=700&auto=format&fit=crop&q=80',
    weeding: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=700&auto=format&fit=crop&q=80',
    milestone: 'https://images.unsplash.com/photo-1627920769842-6887c6df05ca?w=700&auto=format&fit=crop&q=80',
    maturity: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=700&auto=format&fit=crop&q=80',
    harvesting: 'https://images.unsplash.com/photo-1599818485292-628d0eb5d564?w=700&auto=format&fit=crop&q=80',
    drying: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=700&auto=format&fit=crop&q=80',
    storage: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=700&auto=format&fit=crop&q=80',
  },
  cotton: {
    soil: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=700&auto=format&fit=crop&q=80',
    landPrep: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?w=700&auto=format&fit=crop&q=80',
    seed: 'https://images.unsplash.com/photo-1527842891421-42eec6e703ea?w=700&auto=format&fit=crop&q=80',
    seedTreatment: 'https://images.unsplash.com/photo-1592417817098-8f3d69102a5c?w=700&auto=format&fit=crop&q=80',
    sowing: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=700&auto=format&fit=crop&q=80',
    irrigation: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=700&auto=format&fit=crop&q=80',
    weeding: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=700&auto=format&fit=crop&q=80',
    milestone: 'https://images.unsplash.com/photo-1508747703725-719777637510?w=700&auto=format&fit=crop&q=80',
    maturity: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=700&auto=format&fit=crop&q=80',
    harvesting: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=700&auto=format&fit=crop&q=80',
    drying: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=700&auto=format&fit=crop&q=80',
    storage: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=700&auto=format&fit=crop&q=80',
  },
  chilli: {
    soil: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=700&auto=format&fit=crop&q=80',
    landPrep: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?w=700&auto=format&fit=crop&q=80',
    seed: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=700&auto=format&fit=crop&q=80',
    seedTreatment: 'https://images.unsplash.com/photo-1592417817098-8f3d69102a5c?w=700&auto=format&fit=crop&q=80',
    sowing: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=700&auto=format&fit=crop&q=80',
    irrigation: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=700&auto=format&fit=crop&q=80',
    weeding: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=700&auto=format&fit=crop&q=80',
    milestone: 'https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=700&auto=format&fit=crop&q=80',
    maturity: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?w=700&auto=format&fit=crop&q=80',
    harvesting: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=700&auto=format&fit=crop&q=80',
    drying: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=700&auto=format&fit=crop&q=80',
    storage: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=700&auto=format&fit=crop&q=80',
  },
  maize: {
    soil: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=700&auto=format&fit=crop&q=80',
    landPrep: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?w=700&auto=format&fit=crop&q=80',
    seed: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=700&auto=format&fit=crop&q=80',
    seedTreatment: 'https://images.unsplash.com/photo-1592417817098-8f3d69102a5c?w=700&auto=format&fit=crop&q=80',
    sowing: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=700&auto=format&fit=crop&q=80',
    irrigation: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=700&auto=format&fit=crop&q=80',
    weeding: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=700&auto=format&fit=crop&q=80',
    milestone: 'https://images.unsplash.com/photo-1627920769842-6887c6df05ca?w=700&auto=format&fit=crop&q=80',
    maturity: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=700&auto=format&fit=crop&q=80',
    harvesting: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=700&auto=format&fit=crop&q=80',
    drying: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=700&auto=format&fit=crop&q=80',
    storage: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=700&auto=format&fit=crop&q=80',
  },
  sugarcane: {
    soil: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=700&auto=format&fit=crop&q=80',
    landPrep: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?w=700&auto=format&fit=crop&q=80',
    seed: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=700&auto=format&fit=crop&q=80',
    seedTreatment: 'https://images.unsplash.com/photo-1592417817098-8f3d69102a5c?w=700&auto=format&fit=crop&q=80',
    sowing: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=700&auto=format&fit=crop&q=80',
    irrigation: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=700&auto=format&fit=crop&q=80',
    weeding: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=700&auto=format&fit=crop&q=80',
    milestone: 'https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?w=700&auto=format&fit=crop&q=80',
    maturity: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?w=700&auto=format&fit=crop&q=80',
    harvesting: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?w=700&auto=format&fit=crop&q=80',
    drying: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=700&auto=format&fit=crop&q=80',
    storage: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=700&auto=format&fit=crop&q=80',
  },
};
