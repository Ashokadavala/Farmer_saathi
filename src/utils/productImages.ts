// Product image database and resolver for agricultural inputs
// Maps specific chemical formulations and commercial products to verified, high-quality images

export interface AgriProductVisual {
  name: string;
  category: 'fungicide' | 'insecticide' | 'bio' | 'fertilizer' | 'micronutrient' | 'seed_treatment';
  imageUrl: string;
  chemicalFormula?: string;
  commonBrands: string[];
}

export const AGRI_PRODUCTS_DATABASE: Record<string, AgriProductVisual> = {
  // --- FUNGICIDES ---
  mancozeb: {
    name: 'Mancozeb 75% WP',
    category: 'fungicide',
    imageUrl: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?w=600&auto=format&fit=crop&q=80',
    chemicalFormula: 'Manganese Ethylenebis(dithiocarbamate) (polymeric) complex with zinc salt',
    commonBrands: ['Dithane M-45', 'Indofil M-45', 'Uthane M-45'],
  },
  saaf: {
    name: 'Carbendazim 12% + Mancozeb 63% WP',
    category: 'fungicide',
    imageUrl: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?w=600&auto=format&fit=crop&q=80',
    chemicalFormula: 'Carbendazim + Mancozeb',
    commonBrands: ['SAAF (UPL)', 'Sixer (Dhanuka)', 'Sprint'],
  },
  hexaconazole: {
    name: 'Hexaconazole 5% EC / 5% SC',
    category: 'fungicide',
    imageUrl: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?w=600&auto=format&fit=crop&q=80',
    chemicalFormula: 'Hexaconazole 5% EC',
    commonBrands: ['Contaf Plus (Tata Rallis)', 'Sitara', 'Glow'],
  },
  copper_oxychloride: {
    name: 'Copper Oxychloride 50% WP',
    category: 'fungicide',
    imageUrl: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?w=600&auto=format&fit=crop&q=80',
    chemicalFormula: '3Cu(OH)2.CuCl2',
    commonBrands: ['Blitox 50 (Rallis)', 'Fytolan', 'Blue Copper'],
  },
  chlorothalonil: {
    name: 'Chlorothalonil 75% WP',
    category: 'fungicide',
    imageUrl: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?w=600&auto=format&fit=crop&q=80',
    chemicalFormula: 'Tetrachloroisophthalonitrile',
    commonBrands: ['Kavach (Syngenta)', 'Ishaan', 'Daconil'],
  },
  tricyclazole: {
    name: 'Tricyclazole 75% WP',
    category: 'fungicide',
    imageUrl: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?w=600&auto=format&fit=crop&q=80',
    chemicalFormula: '5-methyl-1,2,4-triazolo[3,4-b][1,3]benzothiazole',
    commonBrands: ['Beam (Corteva)', 'Baan', 'Bavistin'],
  },
  propiconazole: {
    name: 'Propiconazole 25% EC',
    category: 'fungicide',
    imageUrl: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?w=600&auto=format&fit=crop&q=80',
    chemicalFormula: 'Propiconazole 25% EC',
    commonBrands: ['Tilt (Syngenta)', 'Bumper', 'Radar'],
  },

  // --- INSECTICIDES ---
  imidacloprid: {
    name: 'Imidacloprid 17.8% SL',
    category: 'insecticide',
    imageUrl: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?w=600&auto=format&fit=crop&q=80',
    chemicalFormula: '1-(6-chloro-3-pyridylmethyl)-N-nitroimidazolidin-2-ylideneamine',
    commonBrands: ['Confidor (Bayer)', 'Tatamida', 'Victor'],
  },
  chlorpyrifos: {
    name: 'Chlorpyrifos 20% EC',
    category: 'insecticide',
    imageUrl: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?w=600&auto=format&fit=crop&q=80',
    chemicalFormula: 'O,O-diethyl O-3,5,6-trichloropyridin-2-yl phosphorothioate',
    commonBrands: ['Dursban', 'Tafaban (Rallis)', 'Classic'],
  },
  emamectin: {
    name: 'Emamectin Benzoate 5% SG',
    category: 'insecticide',
    imageUrl: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?w=600&auto=format&fit=crop&q=80',
    chemicalFormula: 'Emamectin Benzoate 5% SG',
    commonBrands: ['Proclaim (Syngenta)', 'EM-1 (Dhanuka)', 'Missile'],
  },
  coragen: {
    name: 'Chlorantraniliprole 18.5% SC',
    category: 'insecticide',
    imageUrl: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?w=600&auto=format&fit=crop&q=80',
    chemicalFormula: 'Chlorantraniliprole 18.5% SC',
    commonBrands: ['Coragen (FMC)', 'Cover', 'Shenzi'],
  },
  dimethoate: {
    name: 'Dimethoate 30% EC',
    category: 'insecticide',
    imageUrl: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?w=600&auto=format&fit=crop&q=80',
    chemicalFormula: 'O,O-dimethyl S-[2-(methylamino)-2-oxoethyl] phosphorodithioate',
    commonBrands: ['Rogor (Rallis)', 'Tara 909', 'Novor'],
  },

  // --- BIO-INPUTS & ORGANIC ---
  neem_oil: {
    name: 'Neem Oil 10,000 PPM (Azadirachtin 1% EC)',
    category: 'bio',
    imageUrl: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&auto=format&fit=crop&q=80',
    chemicalFormula: 'Botanical Azadirachtin / Cold Pressed Neem Seed Extract',
    commonBrands: ['Econeem Plus', 'Neemazal', 'Bioneem'],
  },
  trichoderma: {
    name: 'Trichoderma viride 1% WP (Bio-Fungicide)',
    category: 'bio',
    imageUrl: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&auto=format&fit=crop&q=80',
    chemicalFormula: 'Trichoderma viride 2x10^6 cfu/g min',
    commonBrands: ['Niprot', 'Bio-Derma', 'Tricho-X'],
  },
  pseudomonas: {
    name: 'Pseudomonas fluorescens 1% WP (Bio-Bactericide)',
    category: 'bio',
    imageUrl: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&auto=format&fit=crop&q=80',
    chemicalFormula: 'Pseudomonas fluorescens 1x10^8 cfu/g',
    commonBrands: ['Bio-Cure-B', 'Spot-Out', 'Eco-Guard'],
  },

  // --- FERTILIZERS & SOIL AMENDMENTS ---
  gypsum: {
    name: 'Agricultural Gypsum (Calcium Sulphate CaSO4.2H2O)',
    category: 'fertilizer',
    imageUrl: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?w=600&auto=format&fit=crop&q=80',
    chemicalFormula: 'CaSO4 · 2H2O (Calcium 23%, Sulphur 18%)',
    commonBrands: ['Coromandel Gypsum', 'IPL Agri Gypsum', 'GSFC Gypsum'],
  },
  ssp: {
    name: 'Single Super Phosphate (SSP 16% P2O5 + 11% S)',
    category: 'fertilizer',
    imageUrl: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?w=600&auto=format&fit=crop&q=80',
    chemicalFormula: 'Ca(H2PO4)2 + CaSO4 (Phosphorus 16%, Sulphur 11%, Calcium 19%)',
    commonBrands: ['Gromor SSP', 'Khaitan SSP', 'Rama SSP'],
  },
  npk_19_19_19: {
    name: '19:19:19 NPK Water Soluble Foliar Fertilizer',
    category: 'fertilizer',
    imageUrl: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?w=600&auto=format&fit=crop&q=80',
    chemicalFormula: '19% N : 19% P2O5 : 19% K2O (100% Water Soluble)',
    commonBrands: ['IFFCO 19-19-19', 'Mahadhan 19:19:19', 'Gromor WSF'],
  },
  potash_0_0_50: {
    name: '00:00:50 Sulphate of Potash (SOP) or MOP',
    category: 'fertilizer',
    imageUrl: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?w=600&auto=format&fit=crop&q=80',
    chemicalFormula: 'Potassium Sulphate K2SO4 (Potassium 50%, Sulphur 17.5%)',
    commonBrands: ['Mahadhan 0:0:50', 'IFFCO SOP', 'Gromor SOP'],
  },
  potassium_nitrate: {
    name: '13:00:45 Potassium Nitrate (Multi-K)',
    category: 'fertilizer',
    imageUrl: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?w=600&auto=format&fit=crop&q=80',
    chemicalFormula: 'KNO3 (Nitrate Nitrogen 13%, Potassium 45%)',
    commonBrands: ['Haifa Multi-K', 'Mahadhan 13:0:45', 'Gromor WSF'],
  },

  // --- MICRONUTRIENTS ---
  zinc_sulphate: {
    name: 'Zinc Sulphate Monohydrate 33% / Heptahydrate 21%',
    category: 'micronutrient',
    imageUrl: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?w=600&auto=format&fit=crop&q=80',
    chemicalFormula: 'ZnSO4 · H2O (Zinc 33%, Sulphur 15%)',
    commonBrands: ['Aries Chelamin', 'Gromor Zinc 33', 'Uttam Zinc'],
  },
  boron_20: {
    name: 'Boron 20% (Disodium Octaborate Tetrahydrate)',
    category: 'micronutrient',
    imageUrl: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?w=600&auto=format&fit=crop&q=80',
    chemicalFormula: 'Na2B8O13 · 4H2O (Boron 20% Foliar Grade)',
    commonBrands: ['Aries Solubor', 'Mahadhan Boron 20', 'Borax Core'],
  },
  formula_4: {
    name: 'Formula-4 / AP Government Recommended Foliar Micronutrient Mix',
    category: 'micronutrient',
    imageUrl: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?w=600&auto=format&fit=crop&q=80',
    chemicalFormula: 'Zn 5.0%, Fe 2.0%, Mn 1.0%, B 0.5%, Cu 0.5%',
    commonBrands: ['Agromin Max (Aries)', 'Gromor Formula 4', 'Multiplex Max'],
  },
};

/**
 * Resolves the most accurate product visual representation based on product name,
 * chemical formulation, and input type.
 */
export function resolveAgriProductVisual(productName?: string, type?: string): AgriProductVisual | null {
  if (!productName && !type) return null;
  const p = (productName || '').toLowerCase();
  const t = (type || '').toLowerCase();

  // Groundnut specific inputs
  if (p.includes('gypsum') || p.includes('జిప్సం') || p.includes('జిప్సమ్') || p.includes('जिप्सम') || p.includes('ಜಿಪ್ಸಮ್')) {
    return AGRI_PRODUCTS_DATABASE.gypsum;
  }
  if (p.includes('ssp') || p.includes('single super phosphate') || p.includes('ఫాస్ఫేట్') || p.includes('సూపర్ ఫాస్ఫేట్')) {
    return AGRI_PRODUCTS_DATABASE.ssp;
  }
  if (p.includes('saaf') || (p.includes('carbendazim') && p.includes('mancozeb')) || p.includes('సాఫ్') || p.includes('సిక్సర్')) {
    return AGRI_PRODUCTS_DATABASE.saaf;
  }
  if (p.includes('hexaconazole') || p.includes('contaf') || p.includes('హెక్సాకొనజోల్') || p.includes('కాంటాఫ్')) {
    return AGRI_PRODUCTS_DATABASE.hexaconazole;
  }
  if (p.includes('chlorothalonil') || p.includes('kavach') || p.includes('క్లోరోథలోనిల్') || p.includes('కవచ్')) {
    return AGRI_PRODUCTS_DATABASE.chlorothalonil;
  }
  if (p.includes('mancozeb') || p.includes('dithane') || p.includes('మాంకోజెబ్') || p.includes('డైథేన్')) {
    return AGRI_PRODUCTS_DATABASE.mancozeb;
  }
  if (p.includes('copper') || p.includes('blitox') || p.includes('కాపర్ ఆక్సీక్లోరైడ్') || p.includes('బ్లైటాక్స్')) {
    return AGRI_PRODUCTS_DATABASE.copper_oxychloride;
  }
  if (p.includes('tricyclazole') || p.includes('beam') || p.includes('ట్రైసైక్లాజోల్') || p.includes('బీమ్')) {
    return AGRI_PRODUCTS_DATABASE.tricyclazole;
  }
  if (p.includes('propiconazole') || p.includes('tilt') || p.includes('ప్రొపికొనజోల్') || p.includes('టిల్ట్')) {
    return AGRI_PRODUCTS_DATABASE.propiconazole;
  }
  if (p.includes('imidacloprid') || p.includes('confidor') || p.includes('ఇమిడాక్లోప్రిడ్') || p.includes('కాన్ఫిడార్')) {
    return AGRI_PRODUCTS_DATABASE.imidacloprid;
  }
  if (p.includes('chlorpyrifos') || p.includes('dursban') || p.includes('క్లోరోపైరిఫాస్') || p.includes('క్లోరిపైరిఫాస్')) {
    return AGRI_PRODUCTS_DATABASE.chlorpyrifos;
  }
  if (p.includes('emamectin') || p.includes('proclaim') || p.includes('ఎమామెక్టిన్') || p.includes('ప్రోక్లెయిమ్')) {
    return AGRI_PRODUCTS_DATABASE.emamectin;
  }
  if (p.includes('coragen') || p.includes('chlorantraniliprole') || p.includes('కోరాజెన్')) {
    return AGRI_PRODUCTS_DATABASE.coragen;
  }
  if (p.includes('dimethoate') || p.includes('rogor') || p.includes('డైమిథోయేట్') || p.includes('రోగార్')) {
    return AGRI_PRODUCTS_DATABASE.dimethoate;
  }
  if (p.includes('neem') || p.includes('azadirachtin') || p.includes('వేప నూనె') || p.includes('ಬೇವಿನ ಎಣ್ಣೆ') || p.includes('नीम तेल')) {
    return AGRI_PRODUCTS_DATABASE.neem_oil;
  }
  if (p.includes('trichoderma') || p.includes('ట్రైకోడెర్మా') || p.includes('ಟ್ರೈಕೋಡರ್ಮಾ')) {
    return AGRI_PRODUCTS_DATABASE.trichoderma;
  }
  if (p.includes('pseudomonas') || p.includes('సూడోమోనాస్')) {
    return AGRI_PRODUCTS_DATABASE.pseudomonas;
  }
  if (p.includes('19-19-19') || p.includes('19:19:19') || p.includes('npk')) {
    return AGRI_PRODUCTS_DATABASE.npk_19_19_19;
  }
  if (p.includes('0-0-50') || p.includes('00:00:50') || p.includes('potash') || p.includes('sop') || p.includes('పొటాష్')) {
    return AGRI_PRODUCTS_DATABASE.potash_0_0_50;
  }
  if (p.includes('13-0-45') || p.includes('13:00:45') || p.includes('potassium nitrate')) {
    return AGRI_PRODUCTS_DATABASE.potassium_nitrate;
  }
  if (p.includes('zinc') || p.includes('జింక్') || p.includes('ಸತು') || p.includes('जिंक')) {
    return AGRI_PRODUCTS_DATABASE.zinc_sulphate;
  }
  if (p.includes('boron') || p.includes('బోరాన్') || p.includes('ಬೋರಾನ್') || p.includes('बोरॉन')) {
    return AGRI_PRODUCTS_DATABASE.boron_20;
  }
  if (p.includes('formula') || p.includes('micronutrient') || p.includes('సూక్ష్మ పోషకాలు')) {
    return AGRI_PRODUCTS_DATABASE.formula_4;
  }

  // Generic fallback by category
  if (t.includes('fungicide') || t.includes('శిలీంధ్ర') || t.includes('ఫంగిసైడ్') || t.includes('कवक')) {
    return AGRI_PRODUCTS_DATABASE.mancozeb;
  }
  if (t.includes('insecticide') || t.includes('పురుగు') || t.includes('కీటక') || t.includes('कीटनाशक')) {
    return AGRI_PRODUCTS_DATABASE.imidacloprid;
  }
  if (t.includes('bio') || t.includes('organic') || t.includes('జీవ') || t.includes('సహజ') || t.includes('जैविक')) {
    return AGRI_PRODUCTS_DATABASE.neem_oil;
  }
  if (t.includes('fertilizer') || t.includes('ఎరువు') || t.includes('ಗೊಬ್ಬರ') || t.includes('उर्वरक')) {
    return AGRI_PRODUCTS_DATABASE.npk_19_19_19;
  }
  if (t.includes('micronutrient') || t.includes('పోషక') || t.includes('ಪೋಷಕಾಂಶ')) {
    return AGRI_PRODUCTS_DATABASE.zinc_sulphate;
  }

  return null;
}

export interface CommodityVisual {
  name: string;
  icon: string;
  imageUrl: string;
  category: string;
}

export const COMMODITY_VISUALS_MAP: Record<string, CommodityVisual> = {
  onion: {
    name: 'Onion (ఉల్లిపాయ)',
    icon: '🧅',
    imageUrl: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=600&auto=format&fit=crop&q=80',
    category: 'Vegetables',
  },
  tomato: {
    name: 'Tomato (టమోటా)',
    icon: '🍅',
    imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&auto=format&fit=crop&q=80',
    category: 'Vegetables',
  },
  groundnut: {
    name: 'Groundnut / Peanut (వేరుశనగ)',
    icon: '🥜',
    imageUrl: 'https://images.unsplash.com/photo-1567892326500-2f96028a3811?w=600&auto=format&fit=crop&q=80',
    category: 'Oilseeds',
  },
  cotton: {
    name: 'Cotton (పత్తి)',
    icon: '☁️',
    imageUrl: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=600&auto=format&fit=crop&q=80',
    category: 'Commercial Crops',
  },
  chilli: {
    name: 'Chilli (మిరప)',
    icon: '🌶️',
    imageUrl: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?w=600&auto=format&fit=crop&q=80',
    category: 'Spices & Condiments',
  },
  paddy: {
    name: 'Paddy / Rice (వరి)',
    icon: '🌾',
    imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&auto=format&fit=crop&q=80',
    category: 'Cereals',
  },
  potato: {
    name: 'Potato (బంగాళాదుంప)',
    icon: '🥔',
    imageUrl: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&auto=format&fit=crop&q=80',
    category: 'Vegetables',
  },
  maize: {
    name: 'Maize / Corn (మొక్కజొన్న)',
    icon: '🌽',
    imageUrl: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=600&auto=format&fit=crop&q=80',
    category: 'Cereals',
  },
  bengal_gram: {
    name: 'Bengal Gram / Chana (శనగ)',
    icon: '🥣',
    imageUrl: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=600&auto=format&fit=crop&q=80',
    category: 'Pulses',
  },
  red_gram: {
    name: 'Red Gram / Toor (కంది)',
    icon: '🥣',
    imageUrl: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=600&auto=format&fit=crop&q=80',
    category: 'Pulses',
  },
  banana: {
    name: 'Banana (అరటి)',
    icon: '🍌',
    imageUrl: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&auto=format&fit=crop&q=80',
    category: 'Fruits',
  },
  mango: {
    name: 'Mango (మామిడి)',
    icon: '🥭',
    imageUrl: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=600&auto=format&fit=crop&q=80',
    category: 'Fruits',
  },
  turmeric: {
    name: 'Turmeric (పసుపు)',
    icon: '🟨',
    imageUrl: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&auto=format&fit=crop&q=80',
    category: 'Spices',
  },
};

export function resolveCommodityVisual(commodityName: string): CommodityVisual {
  const c = (commodityName || '').toLowerCase();

  if (c.includes('onion') || c.includes('ఉల్లి') || c.includes('ఈరుಳ್ಳಿ') || c.includes('प्याज')) {
    return COMMODITY_VISUALS_MAP.onion;
  }
  if (c.includes('tomato') || c.includes('టమోటా') || c.includes('టమాటా') || c.includes('ಟೊಮೆಟೊ') || c.includes('टमाटर')) {
    return COMMODITY_VISUALS_MAP.tomato;
  }
  if (c.includes('groundnut') || c.includes('peanut') || c.includes('వేరుశనగ') || c.includes('ಕಡಲೆಕಾಯಿ') || c.includes('मूंगफली')) {
    return COMMODITY_VISUALS_MAP.groundnut;
  }
  if (c.includes('cotton') || c.includes('పత్తి') || c.includes('ಹತ್ತಿ') || c.includes('कपास')) {
    return COMMODITY_VISUALS_MAP.cotton;
  }
  if (c.includes('chilli') || c.includes('chili') || c.includes('మిరప') || c.includes('ಮೆಣಸಿನಕಾಯಿ') || c.includes('मिर्च')) {
    return COMMODITY_VISUALS_MAP.chilli;
  }
  if (c.includes('paddy') || c.includes('rice') || c.includes('వరి') || c.includes('ಭತ್ತ') || c.includes('धान')) {
    return COMMODITY_VISUALS_MAP.paddy;
  }
  if (c.includes('potato') || c.includes('బంగాళాదుంప') || c.includes('ಆಲೂಗಡ್ಡೆ') || c.includes('आलू')) {
    return COMMODITY_VISUALS_MAP.potato;
  }
  if (c.includes('maize') || c.includes('corn') || c.includes('మొక్కజొన్న') || c.includes('ಮೆಕ್ಕೆಜೋಳ') || c.includes('मक्का')) {
    return COMMODITY_VISUALS_MAP.maize;
  }
  if (c.includes('gram') || c.includes('chana') || c.includes('శనగ') || c.includes('ಕಡಲೆ') || c.includes('चना')) {
    return COMMODITY_VISUALS_MAP.bengal_gram;
  }
  if (c.includes('toor') || c.includes('arhar') || c.includes('కంది') || c.includes('ತೊಗರಿ') || c.includes('अरहर')) {
    return COMMODITY_VISUALS_MAP.red_gram;
  }
  if (c.includes('banana') || c.includes('అరటి') || c.includes('ಬಾಳೆಹಣ್ಣು') || c.includes('केला')) {
    return COMMODITY_VISUALS_MAP.banana;
  }
  if (c.includes('mango') || c.includes('మామిడి') || c.includes('ಮಾವಿನಹಣ್ಣು') || c.includes('आम')) {
    return COMMODITY_VISUALS_MAP.mango;
  }
  if (c.includes('turmeric') || c.includes('పసుపు') || c.includes('ಅರಿಶಿನ') || c.includes('हल्दी')) {
    return COMMODITY_VISUALS_MAP.turmeric;
  }

  // Generic fallback with appropriate agricultural image
  return {
    name: commodityName,
    icon: '🌾',
    imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&auto=format&fit=crop&q=80',
    category: 'Agricultural Produce',
  };
}

export interface DiseaseVisual {
  name: string;
  imageUrl: string;
  symptomTitle: string;
}

export function resolveDiseaseVisual(diseaseName: string, cropName?: string): DiseaseVisual {
  const d = (diseaseName || '').toLowerCase();

  if (d.includes('tikka') || d.includes('cercospora') || d.includes('టిక్కా') || d.includes('ఆకుమచ్చ')) {
    return {
      name: 'Tikka Disease / Cercospora Leaf Spot',
      imageUrl: 'https://images.unsplash.com/photo-1567892326500-2f96028a3811?w=600&auto=format&fit=crop&q=80',
      symptomTitle: 'Dark circular spots with yellow chlorotic rings on leaves',
    };
  }

  if (d.includes('early blight') || d.includes('ప్రారంభ ఆకుమచ్చ') || d.includes('alternaria')) {
    return {
      name: 'Early Blight (Alternaria solani)',
      imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&auto=format&fit=crop&q=80',
      symptomTitle: 'Target-board concentric rings on mature leaves',
    };
  }

  if (d.includes('late blight') || d.includes('లేట్ బ్లైట్') || d.includes('మాడు తెగులు') || d.includes('phytophthora')) {
    return {
      name: 'Late Blight (Phytophthora infestans)',
      imageUrl: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb22509?w=600&auto=format&fit=crop&q=80',
      symptomTitle: 'Water-soaked dark lesions and white fungal growth underneath',
    };
  }

  if (d.includes('leaf curl') || d.includes('ఆకుముడత') || d.includes('వైరస్') || d.includes('virus')) {
    return {
      name: 'Leaf Curl Virus',
      imageUrl: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?w=600&auto=format&fit=crop&q=80',
      symptomTitle: 'Severe upward puckering, curling and stunted leaf nodes',
    };
  }

  if (d.includes('blast') || d.includes('అగ్గితెగులు') || d.includes('pyricularia')) {
    return {
      name: 'Paddy Blast (Pyricularia oryzae)',
      imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&auto=format&fit=crop&q=80',
      symptomTitle: 'Spindle-shaped lesions with ash-grey centers and brown margins',
    };
  }

  if (d.includes('borer') || d.includes('తొలుచు') || d.includes('పురుగు') || d.includes('caterpillar')) {
    return {
      name: 'Fruit / Stem Borer (Helicoverpa / Spodoptera)',
      imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&auto=format&fit=crop&q=80',
      symptomTitle: 'Bored entry holes with larval frass and internal tissue damage',
    };
  }

  if (d.includes('bollworm') || d.includes('గులాబీ రంగు') || d.includes('pink bollworm')) {
    return {
      name: 'Pink Bollworm (Pectinophora gossypiella)',
      imageUrl: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=600&auto=format&fit=crop&q=80',
      symptomTitle: 'Rosetted flowers and punctured unopened squares/bolls',
    };
  }

  if (d.includes('rust') || d.includes('తుప్పు') || d.includes('పువాసి')) {
    return {
      name: 'Rust (Puccinia / Uromyces)',
      imageUrl: 'https://images.unsplash.com/photo-1567892326500-2f96028a3811?w=600&auto=format&fit=crop&q=80',
      symptomTitle: 'Pustules of reddish-brown powdery fungal spores on leaf underside',
    };
  }

  if (d.includes('powdery mildew') || d.includes('బూడిద తెగులు') || d.includes('oidium')) {
    return {
      name: 'Powdery Mildew (Oidium)',
      imageUrl: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?w=600&auto=format&fit=crop&q=80',
      symptomTitle: 'White flour-like powdery patches covering leaf surface',
    };
  }

  return {
    name: diseaseName || 'Crop Pathogen / Pest Issue',
    imageUrl: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb22509?w=600&auto=format&fit=crop&q=80',
    symptomTitle: 'Visual discoloration and foliar distress observed',
  };
}

export interface GrowthStageVisual {
  stageNumber: number;
  stageNameTe: string;
  stageNameEn: string;
  daysRange: string;
  imageUrl: string;
  keyActionTe: string;
  keyActionEn: string;
}

export function getCropGrowthStages(cropId: string): GrowthStageVisual[] {
  const c = (cropId || '').toLowerCase();

  if (c.includes('groundnut') || c.includes('వేరుశనగ')) {
    return [
      {
        stageNumber: 1,
        stageNameTe: 'విత్తనం & మొలకెత్తే దశ',
        stageNameEn: 'Seed & Germination Stage',
        daysRange: '0 - 10 Days',
        imageUrl: 'https://images.unsplash.com/photo-1567892326500-2f96028a3811?w=600&auto=format&fit=crop&q=80',
        keyActionTe: 'విత్తన శుద్ధి (మాంకోజెబ్ లేదా ట్రైకోడెర్మా), నేల తేమ నిర్ధారణ',
        keyActionEn: 'Seed treatment (Mancozeb/Trichoderma), optimal soil moisture',
      },
      {
        stageNumber: 2,
        stageNameTe: 'శాఖీయ పెరుగుదల దశ',
        stageNameEn: 'Vegetative Growth Stage',
        daysRange: '15 - 30 Days',
        imageUrl: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb22509?w=600&auto=format&fit=crop&q=80',
        keyActionTe: 'కలుపు నివారణ & 19:19:19 ఎరువుల పిచికారీ',
        keyActionEn: 'Weeding, inter-cultivation & 19:19:19 foliar spray',
      },
      {
        stageNumber: 3,
        stageNameTe: 'పూత దశ (పసుపు పూలు)',
        stageNameEn: 'Flowering Stage (Yellow Blooms)',
        daysRange: '35 - 45 Days',
        imageUrl: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=600&auto=format&fit=crop&q=80',
        keyActionTe: 'ఈ దశలో తేమ కొరత రాకూడదు, పురుగుల నివారణ',
        keyActionEn: 'Prevent moisture stress, monitor for leaf miners',
      },
      {
        stageNumber: 4,
        stageNameTe: 'ఊడలు దిగే దశ & కాయ తయారీ (Pegging)',
        stageNameEn: 'Pegging & Pod Formation Stage',
        daysRange: '50 - 75 Days',
        imageUrl: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?w=600&auto=format&fit=crop&q=80',
        keyActionTe: 'ఎకరానికి 200 కిలోల జిప్సం వేసి పాదులు కదపకుండా నీరు పెట్టాలి',
        keyActionEn: 'Apply 200 kg Gypsum/acre and irrigate gently',
      },
      {
        stageNumber: 5,
        stageNameTe: 'కాయ పక్వత & కోత దశ',
        stageNameEn: 'Pod Maturity & Harvesting Stage',
        daysRange: '95 - 110 Days',
        imageUrl: 'https://images.unsplash.com/photo-1567892326500-2f96028a3811?w=600&auto=format&fit=crop&q=80',
        keyActionTe: 'కాయ లోపలి పొర నల్లబడినప్పుడు చెట్లు పీకి ఆరబెట్టాలి',
        keyActionEn: 'Harvest when inner pod shell turns brownish-black, dry well',
      },
    ];
  }

  if (c.includes('paddy') || c.includes('rice') || c.includes('వరి')) {
    return [
      {
        stageNumber: 1,
        stageNameTe: 'నారుమడి & మొలక దశ',
        stageNameEn: 'Nursery & Seedling Stage',
        daysRange: '0 - 25 Days',
        imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&auto=format&fit=crop&q=80',
        keyActionTe: 'విత్తన శుద్ధి & కార్బోఫ్యూరాన్ గుళికలు వేయడం',
        keyActionEn: 'Seed treatment, carbofuran granules for nursery protection',
      },
      {
        stageNumber: 2,
        stageNameTe: 'నాట్లు & పిలకలు తొడిగే దశ',
        stageNameEn: 'Transplanting & Tillering Stage',
        daysRange: '30 - 55 Days',
        imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&auto=format&fit=crop&q=80',
        keyActionTe: 'నాట్లు వేయడం, యూరియా + జింక్ సల్ఫేట్ టాప్ డ్రెస్సింగ్',
        keyActionEn: 'Transplanting with 2-3 seedlings/hill, Urea + Zinc application',
      },
      {
        stageNumber: 3,
        stageNameTe: 'చిరుపొట్ట & వెన్ను బయటకు వచ్చే దశ',
        stageNameEn: 'Panicle Initiation & Booting Stage',
        daysRange: '60 - 80 Days',
        imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&auto=format&fit=crop&q=80',
        keyActionTe: 'పొటాష్ ఎరువు వేయడం & అగ్గితెగులు (బ్లాస్ట్) నివారణకు ట్రైసైక్లాజోల్ పిచికారీ',
        keyActionEn: 'MOP application, Tricyclazole foliar spray for blast control',
      },
      {
        stageNumber: 4,
        stageNameTe: 'పాలుపోసుకునే & గింజ గట్టిపడే దశ',
        stageNameEn: 'Milking & Grain Filling Stage',
        daysRange: '85 - 110 Days',
        imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&auto=format&fit=crop&q=80',
        keyActionTe: '0:0:50 లేదా 13:0:45 పిచికారీ, తగినంత తేమ నిర్వహణ',
        keyActionEn: 'Foliar spray of 0:0:50 SOP for plump golden grains',
      },
      {
        stageNumber: 5,
        stageNameTe: 'కోత & నూర్పిడి దశ',
        stageNameEn: 'Maturity & Harvesting Stage',
        daysRange: '120 - 135 Days',
        imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&auto=format&fit=crop&q=80',
        keyActionTe: 'వెన్నులలో 80% గింజలు పసుపు రంగులోకి మారినప్పుడు కోయాలి',
        keyActionEn: 'Harvest when 80-85% of grains turn golden yellow',
      },
    ];
  }

  // Default Tomato / Vegetables stages
  return [
    {
      stageNumber: 1,
      stageNameTe: 'నారు దశ (Seedling)',
      stageNameEn: 'Nursery & Seedling Stage',
      daysRange: '0 - 25 Days',
      imageUrl: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb22509?w=600&auto=format&fit=crop&q=80',
      keyActionTe: 'కోకోపీట్ ట్రేలలో నాణ్యమైన విత్తనాలు మొలకెత్తించడం & కాపర్ స్ప్రే',
      keyActionEn: 'Healthy nursery raising in pro-trays, seedling protection',
    },
    {
      stageNumber: 2,
      stageNameTe: 'నాటడం & శాఖీయ ఎదుగుదల',
      stageNameEn: 'Transplanting & Vegetative Stage',
      daysRange: '25 - 45 Days',
      imageUrl: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb22509?w=600&auto=format&fit=crop&q=80',
      keyActionTe: 'సాయంత్రం వేళల్లో నాటడం, డ్రిప్ ద్వారా 19:19:19 ఎరువు అందించడం',
      keyActionEn: 'Evening transplanting on raised beds, 19:19:19 fertigation',
    },
    {
      stageNumber: 3,
      stageNameTe: 'పూత దశ (Flowering)',
      stageNameEn: 'Flowering & Fruit Set Stage',
      daysRange: '45 - 65 Days',
      imageUrl: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=600&auto=format&fit=crop&q=80',
      keyActionTe: 'పూత రాలకుండా 13:0:45 + బోరాన్ పిచికారీ చేయడం & కాయతొలుచు పురుగు నివారణ',
      keyActionEn: 'Spray 13:0:45 + Solubor Boron, install pheromone traps',
    },
    {
      stageNumber: 4,
      stageNameTe: 'కాయ అభివృద్ధి & రంగు మారే దశ',
      stageNameEn: 'Fruit Development & Breaker Stage',
      daysRange: '70 - 95 Days',
      imageUrl: 'https://images.unsplash.com/photo-1561136594-7f68413baa99?w=600&auto=format&fit=crop&q=80',
      keyActionTe: 'కాయ బరువు, నిగారింపు కోసం 0:0:50 + కాల్షియం నైట్రేట్ పిచికారీ',
      keyActionEn: 'Apply 0:0:50 SOP + Calcium Nitrate for firm shiny tomatoes',
    },
    {
      stageNumber: 5,
      stageNameTe: 'కోత దశ (Harvesting)',
      stageNameEn: 'Harvesting & Grading Stage',
      daysRange: '95 - 130 Days',
      imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&auto=format&fit=crop&q=80',
      keyActionTe: 'మార్కెట్ దూరాన్ని బట్టి బ్రేకర్‌స్టేజ్ లేదా ఎరుపు రంగులో క్రేట్లలో కోయాలి',
      keyActionEn: 'Harvest into clean plastic crates at turning breaker stage',
    },
  ];
}

