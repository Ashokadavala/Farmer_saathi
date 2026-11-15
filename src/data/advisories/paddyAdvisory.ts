import { CropAdvisoryRecord } from '../cropAdvisoryData';
import { CROP_STAGE_IMAGES, INPUT_PRODUCT_IMAGES, CROP_PRACTICE_IMAGES } from '../cropStageImages';

export const PADDY_ADVISORY: CropAdvisoryRecord = {
  cropId: 'paddy',
  cropName: {
    en: 'Paddy / Rice',
    te: 'వరి (వరిసాగు)',
    kn: 'ಭತ್ತ',
    hi: 'धान (चावल)',
  },
  category: {
    en: 'Cereal Grain Crop',
    te: 'ధాన్యపు పంట',
    kn: 'ಧಾನ್ಯದ ಬೆಳೆ',
    hi: 'अन्न / अनाज फसल',
  },
  icon: '🌾',
  cropImage: CROP_STAGE_IMAGES.paddy.cropImage,
  suitableSeason: {
    en: 'Kharif / Sarva (June–July sowing), Rabi / Dalwa (Nov–Dec sowing)',
    te: 'ఖరీఫ్ / సార్వ (జూన్-జూలై), రబీ / దాళ్వా (నవంబర్-డిసెంబర్)',
    kn: 'ಖಾರಿಫ್ (ಜೂನ್-ಜುಲೈ), ರಬಿ (ನವೆಂಬರ್-ಡಿಸೆಂಬರ್)',
    hi: 'खरीफ (जून-जुलाई), रबी / दलवा (नवंबर-दिसंबर)',
  },
  soilRequirements: {
    en: 'Heavy clay or clay loam soils with high water retention capacity and subsoil hard pan. Optimal pH: 5.5 to 7.0.',
    te: 'నీటిని నిలుపుకునే బంకమన్ను నేలలు లేదా నల్లరేగడి నేలలు అత్యంత అనుకూలం. pH 5.5 నుండి 7.0 మధ్య ఉండాలి.',
    kn: 'ನೀರು ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳುವ ಜೇಡಿಮಣ್ಣು ಅಥವಾ ಕಪ್ಪು ಮಣ್ಣು ಅತ್ಯುತ್ತಮ. pH 5.5 ರಿಂದ 7.0 ಇರಬೇಕು.',
    hi: 'जल धारण क्षमता वाली भारी मटियार या चिकनी दोमट मिट्टी। पीएच मान 5.5 से 7.0 उपयुक्त है।',
  },
  seedAndSowing: {
    en: 'Seed rate: 20–25 kg/acre (BPT 5204 Samba Mahsuri, MTU 1010, RNR 15048 Telangana Sona). Raise nursery for 20–25 days. Transplant 2–3 seedlings per hill at 20 cm × 15 cm spacing.',
    te: 'విత్తన మోతాదు: ఎకరానికి 20-25 కిలోలు (బీపీటీ 5204 సాంబ మసూరి, ఎంటీయూ 1010, ఆర్ఎన్ఆర్ 15048 తెలంగాణ సోనా). 20-25 రోజుల నారును కుదురుకు 2-3 మొక్కలు చొప్పున 20 సెం.మీ × 15 సెం.మీ దూరంలో నాటాలి.',
    kn: 'ಬೀಜದ ಪ್ರಮಾಣ: ಎಕರೆಗೆ 20-25 ಕೆಜಿ. 20-25 ದಿನಗಳ ಸಸಿಗಳನ್ನು ಸಾಲಿಗೆ 20 ಸೆಂ.ಮೀ × 15 ಸೆಂ.ಮೀ ಅಂತರದಲ್ಲಿ ನಾಟಿ ಮಾಡಿ.',
    hi: 'बीज दर: 20-25 किग्रा/एकड़। 20-25 दिन की पौध की 20 सेमी × 15 सेमी दूरी पर 2-3 पौधे प्रति स्थान रोपाई करें।',
  },
  cropDuration: {
    en: '125 to 150 days depending on variety (Short/Medium/Long duration).',
    te: 'రకాన్ని బట్టి 125 నుండి 150 రోజులు.',
    kn: 'ತಳಿಯನ್ನು ಅವಲಂಬಿಸಿ 125 ರಿಂದ 150 ದಿನಗಳು.',
    hi: 'किस्म के अनुसार 125 से 150 दिन।',
  },
  stages: [
    {
      id: 'pad_stage_1',
      order: 1,
      name: {
        en: '1. Nursery & Puddling Transplanting Stage',
        te: '1. నారుమడి & దమ్ము చేసి నాట్లు వేసే దశ',
        kn: '1. ನರ್ಸರಿ ಮತ್ತು ಗದ್ದೆ ನಾಟಿ ಹಂತ',
        hi: '1. नर्सरी एवं लेह (पडलिंग) युक्त खेत में रोपाई अवस्था',
      },
      timing: {
        en: '0 to 20 Days After Transplanting (DAT)',
        te: 'నాటిన 0 నుండి 20 రోజులు',
        kn: 'ನಾಟಿ ಮಾಡಿದ 0 ರಿಂದ 20 ದಿನಗಳು',
        hi: 'रोपाई के 0 से 20 दिन',
      },
      stageImage: CROP_STAGE_IMAGES.paddy.stages.pad_stage_1,
      whatToDo: {
        en: '1. Puddle soil thoroughly and level with wooden plank (leveller).\n2. Apply entire basal DAP (50kg) + MOP (25kg) + Zinc Sulphate (10kg) before final levelling.\n3. Transplant 20–25 day seedlings at shallow depth (2–3 cm) with 2–3 seedlings per hill.\n4. Maintain 2 cm standing water for 7 days until roots establish.',
        te: '1. పొలాన్ని రెండు మూడు సార్లు దమ్ము చేసి చెక్క పలకతో సమాంతరంగా చదును చేయాలి.\n2. ఆఖరి దమ్ములో ఎకరానికి 50 కిలోల DAP, 25 కిలోల MOP మరియు 10 కిలోల జింక్ సల్ఫేట్ వేసి కలియదున్నాలి.\n3. 20-25 రోజుల లేత నారును కుదురుకు 2-3 మొక్కల చొప్పున 2-3 సెం.మీ లోతులో మాత్రమే నాటాలి.\n4. వేర్లు కుదురుకునే వరకు మొదటి వారం పాటు 2 సెం.మీ మేర పలుచటి నీటిని ఉంచాలి.',
        kn: '1. ಗದ್ದೆಯನ್ನು ಚೆನ್ನಾಗಿ ಕೆಸರು ಮಾಡಿ ಸಮತಟ್ಟಾಗಿಸಿ.\n2. ಕೊನೆಯ ಕೆಸರು ಮಾಡುವಾಗ ಡಿಎಪಿ, ಎಂಒಪಿ ಮತ್ತು ಜಿಂಕ್ ಮಣ್ಣಿಗೆ ಹಾಕಿ.\n3. 20-25 ದಿನಗಳ ಸಸಿಗಳನ್ನು ಆಳವಿಲ್ಲದೆ (2-3 ಸೆಂ.ಮೀ) ನಾಟಿ ಮಾಡಿ.\n4. ಮೊದಲ ವಾರ 2 ಸೆಂ.ಮೀ ನೀರು ನಿಲ್ಲಿಸಿ.',
        hi: '1. खेत में अच्छी तरह लेह (पडलिंग) करें और पाटा लगाकर समतल करें।\n2. अंतिम लेह के समय डीएपी 50 किग्रा, एमओपी 25 किग्रा और जिंक सल्फेट 10 किग्रा प्रति एकड़ डालें।\n3. 20-25 दिन की पौध को 2-3 सेमी उथली गहराई पर 2-3 पौधे प्रति हिल लगाएं।\n4. रोपाई के शुरुआती 7 दिनों तक खेत में 2 सेमी पानी बनाए रखें।',
      },
      irrigationGuide: {
        en: 'Maintain shallow water layer of 2 cm for the first week to promote quick rooting, then 3–5 cm.',
        te: 'మొదటి వారం 2 సెం.మీ పలుచటి నీరుంచాలి, ఆ తర్వాత 3-5 సెం.మీ నీటి మట్టం నిర్వహించాలి.',
        kn: 'ಮೊದಲ ವಾರ 2 ಸೆಂ.ಮೀ, ನಂತರ 3-5 ಸೆಂ.ಮೀ ನೀರು ನಿಲ್ಲಿಸಿ.',
        hi: 'पहले सप्ताह 2 सेमी और फिर 3-5 सेमी पानी का स्तर रखें।',
      },
      weatherPrecaution: {
        en: 'Do not transplant in deep standing water (>5 cm); tender seedlings will submerge and rot.',
        te: 'ఎక్కువ నీరు ఉన్నప్పుడు నాటరాదు, నారు మునిగిపోయి కుళ్ళిపోతుంది.',
        kn: 'ಹೆಚ್ಚು ನೀರಿದ್ದಾಗ ನಾಟಿ ಮಾಡಬೇಡಿ.',
        hi: 'खेत में गहरा पानी भरकर रोपाई न करें, पौध डूबकर सड़ सकती है।',
      },
      fertilizers: [
        {
          productName: 'Di-Ammonium Phosphate (DAP 18:46:0) + Zinc Sulphate 21%',
          productImage: INPUT_PRODUCT_IMAGES.dap,
          category: 'fertilizer',
          whenToApply: {
            en: 'Basal application in puddle before final planking/levelling.',
            te: 'ఆఖరి దమ్ములో నాట్లకు ముందే చల్లి పలక తోలాలి.',
            kn: 'ಕೊನೆಯ ಕೆಸರು ಮಾಡುವಾಗ ಮಣ್ಣಿಗೆ ಹಾಕಿ.',
            hi: 'अंतिम लेह के समय पाटा लगाने से पहले खेत में मिलाएं।',
          },
          purpose: {
            en: 'Phosphorus is critical for root anchoring; Zinc prevents "Khaira" disease (rusty leaf bronzing).',
            te: 'భాస్వరం వేర్ల వ్యవస్థను దృఢపరుస్తుంది; జింక్ వలన ఖైరా తెగులు (ఆకులు తుప్పు రంగులోకి మారడం) రాకుండా ఉంటుంది.',
            kn: 'ಬೇರುಗಳ ಬೆಳವಣಿಗೆ ಮತ್ತು ಜಿಂಕ್ ಕೊರತೆಯ ರೋಗ ತಡೆಯಲು ಸಹಕಾರಿ.',
            hi: 'जड़ों को मजबूत बनाता है और खैरा रोग से बचाव करता है।',
          },
          applicationMethod: {
            en: 'Broadcast into puddle mud and incorporate.',
            te: 'దమ్ములో చల్లి పలక తోలాలి.',
            kn: 'ಕೆಸರಿನಲ್ಲಿ ಸಮವಾಗಿ ಎರಚಿ.',
            hi: 'लेह वाले खेत में बिखरकर मिलाएं।',
          },
          dosage: '50 kg DAP + 25 kg MOP + 10 kg Zinc Sulphate per acre',
          precautions: {
            en: 'Do not apply Zinc Sulphate together with Phosphate in the same handful; broadcast separately.',
            te: 'జింక్ సల్ఫేట్ మరియు DAP లను ఒకదానితో ఒకటి కలిపి ఎక్కువసేపు ఉంచకూడదు, విడివిడిగా చల్లాలి.',
            kn: 'ಜಿಂಕ್ ಮತ್ತು ಡಿಎಪಿಯನ್ನು ಒಟ್ಟಿಗೆ ಬೆರೆಸಬೇಡಿ.',
            hi: 'जिंक और डीएपी को एक साथ मिलाकर ज्यादा देर न रखें, अलग-अलग डालें।',
          },
        },
      ],
      pestsAndDiseases: [],
    },
    {
      id: 'pad_stage_2',
      order: 2,
      name: {
        en: '2. Active Tillering & Vegetative Stage',
        te: '2. పిలకలు తొడిగే & శాఖీయ దశ',
        kn: '2. ಕವಲೊಡೆಯುವ ಮತ್ತು ಸಸ್ಯಕ ಬೆಳವಣಿಗೆ ಹಂತ',
        hi: '2. कल्ले निकलने (टिलरिंग) की सक्रिय अवस्था',
      },
      timing: {
        en: '20 to 45 DAT',
        te: 'నాటిన 20 నుండి 45 రోజులు',
        kn: 'ನಾಟಿ ಮಾಡಿದ 20 ರಿಂದ 45 ದಿನಗಳು',
        hi: 'रोपाई के 20 से 45 दिन',
      },
      stageImage: CROP_STAGE_IMAGES.paddy.stages.pad_stage_2,
      whatToDo: {
        en: '1. Top-dress 1st split Urea (30kg/acre) at 20–25 DAT.\n2. Practice Alternate Wetting and Drying (AWD) to aerate roots and trigger maximum productive tillers.\n3. Scout for Yellow Stem Borer (dead hearts) and Leaf Folder.\n4. Run cono-weeder at 25 DAT to incorporate weeds and oxygenate mud.',
        te: '1. నాటిన 20-25 రోజులకు మొదటి విడత యూరియా (30 కిలోలు) పైపాటుగా వేయాలి.\n2. ఆరుతడి పద్ధతి (AWD) పాటించాలి; నీరు ఆరిన తర్వాత మళ్లీ పెట్టడం వల్ల వేర్లకు గాలి తగిలి ఎక్కువ పిలకలు వస్తాయి.\n3. కాండం తొలిచే పురుగు (ఎండిన మొవ్వులు/డెడ్ హార్ట్స్) మరియు ఆకుచుట్టు పురుగులను గమనించాలి.\n4. కోనోవీడర్‌తో దమ్ము మధ్య తిప్పడం ద్వారా కలుపు తొక్కి వేర్లకు ఆక్సిజన్ అందుతుంది.',
        kn: '1. 20-25 ದಿನಗಳಲ್ಲಿ ಮೊದಲ ಕಂತಿನ ಯೂರಿಯಾ (30 ಕೆಜಿ) ಹಾಕಿ.\n2. ಆರುತಡಿ ಪದ್ಧತಿ ಅನುಸರಿಸಿ ಹೆಚ್ಚು ಕವಲುಗಳು ಬರುವಂತೆ ಮಾಡಿ.\n3. ಕಾಂಡ ಕೊರೆಯುವ ಹುಳು ಮತ್ತು ಎಲೆ ಸುರುಳಿ ಹುಳು ಗಮನಿಸಿ.\n4. ಕೋನೋವೀಡರ್ ಬಳಸಿ ಕಳೆ ನಿಯಂತ್ರಿಸಿ.',
        hi: '1. रोपाई के 20-25 दिन बाद पहली यूरिया (30 किग्रा/एकड़) डालें।\n2. एकांतर गीला और सूखा (AWD) पद्धति अपनाएं जिससे जड़ों को हवा मिले और अधिक कल्ले फूटें।\n3. तना छेदक (डेड हार्ट) और पत्ती लपेटक कीट की निगरानी करें।\n4. कोनो-वीडर चलाकर खरपतवार को मिट्टी में दबाएं।',
      },
      irrigationGuide: {
        en: 'Alternate Wetting and Drying (AWD). Allow water to recede until hairline cracks appear, then re-flood with 3 cm water.',
        te: 'ఆరుతడి పద్ధతి: నీరు ఆరిపోయి నేలపై సన్నటి పగుళ్లు వచ్చిన తర్వాత మాత్రమే మళ్లీ 3 సెం.మీ నీరు పెట్టాలి.',
        kn: 'ಆರುತಡಿ ಪದ್ಧತಿ: ನೀರು ಇಂಗಿದ ನಂತರವೇ ಮತ್ತೆ ನೀರು ಹಾಯಿಸಿ.',
        hi: 'पानी सूखने पर जब हल्की दरारें दिखने लगें तभी दोबारा 3 सेमी पानी लगाएं।',
      },
      weatherPrecaution: {
        en: 'Drain field before applying Nitrogen top-dress to prevent nitrogen leaching.',
        te: 'యూరియా వేసే ముందు మడిలోని నీటిని తగ్గించాలి, లేదంటే ఎరువు నీటితో కొట్టుకుపోతుంది.',
        kn: 'ಯೂರಿಯಾ ಹಾಕುವ ಮುನ್ನ ಗದ್ದೆಯ ನೀರನ್ನು ತಗ್ಗಿಸಿ.',
        hi: 'यूरिया डालने से पहले खेत का अतिरिक्त पानी निकाल दें।',
      },
      fertilizers: [
        {
          productName: 'Neem Coated Urea (1st Split)',
          productImage: INPUT_PRODUCT_IMAGES.urea,
          category: 'fertilizer',
          whenToApply: {
            en: 'Top dress at 20–25 DAT in thin sheet of water.',
            te: 'నాటిన 20-25 రోజుల వద్ద పలుచటి నీటి పొర ఉన్నప్పుడు చల్లాలి.',
            kn: '20-25 ದಿನಗಳಲ್ಲಿ ನೀರು ಕಡಿಮೆಯಿದ್ದಾಗ ಮೇಲುಗೊಬ್ಬರವಾಗಿ ಹಾಕಿ.',
            hi: '20-25 दिन पर खेत में हल्का पानी होने पर बिखरकर दें।',
          },
          purpose: {
            en: 'Supplies Nitrogen for rapid vegetative tillering (aim for 20–25 tillers per hill).',
            te: 'మొక్కల నుండి బలమైన పిలకలు ఎక్కువగా (కుదురుకు 20-25 పిలకలు) రావడానికి నత్రజని తోడ్పడుతుంది.',
            kn: 'ಹೆಚ್ಚು ಕವಲುಗಳು ಒಡೆಯಲು ನೈಟ್ರೋಜನ್ ಸಹಕಾರಿ.',
            hi: 'कल्लों की संख्या बढ़ाने (20-25 कल्ले प्रति हिल) के लिए नाइट्रोजन देता है।',
          },
          applicationMethod: {
            en: 'Broadcast evenly.',
            te: 'చేను అంతటా సమంగా చల్లాలి.',
            kn: 'ಸಮವಾಗಿ ಎರಚಿ.',
            hi: 'खेत में एकसमान बिखरें।',
          },
          dosage: '30 kg Neem Coated Urea per acre',
          precautions: {
            en: 'Do not drain water for 48 hours after application.',
            te: 'ఎరువు వేసిన 48 గంటల వరకు నీటిని బయటకు వదలకూడదు.',
            kn: 'ಗೊಬ್ಬರ ಹಾಕಿದ 48 ಗಂಟೆಗಳ ಕಾಲ ನೀರನ್ನು ಹೊರಹಾಕಬೇಡಿ.',
            hi: 'खाद डालने के 48 घंटे तक खेत से पानी बाहर न बहने दें।',
          },
        },
      ],
      pestsAndDiseases: [
        {
          name: {
            en: 'Yellow Stem Borer (Scirpophaga incertulas)',
            te: 'కాండం తొలిచే పురుగు (మొవ్వు పురుగు)',
            kn: 'ಕಾಂಡ ಕೊರೆಯುವ ಹುಳು',
            hi: 'पीला तना छेदक (स्टेम बोरर)',
          },
          problemType: 'pest',
          symptomImage: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&auto=format&fit=crop&q=80',
          symptoms: {
            en: 'Central vegetative shoot dries up completely, producing classic "Dead Heart" easily pulled out.',
            te: 'నడిమొవ్వు ఎండిపోయి చేత్తో లాగితే సులువుగా పైకి ఊడివస్తుంది (డెడ్ హార్ట్).',
            kn: 'ಮಧ್ಯದ ಕುಡಿ ಒಣಗಿ ಸುಲಭವಾಗಿ ಕಿತ್ತು ಬರುತ್ತದೆ (ಡೆಡ್ ಹಾರ್ಟ್).',
            hi: 'केंद्रीय प्ररोह सूख जाता है और खींचने पर आसानी से बाहर आ जाता है (डेड हार्ट)।',
          },
          prevention: {
            en: 'Clip seedling tips before transplanting to remove egg masses.',
            te: 'నాటే ముందు నారు కొసలను తుంచడం ద్వారా గుడ్ల సముదాయాలు నాశనమవుతాయి.',
            kn: 'ನಾಟಿಗೆ ಮುನ್ನ ಸಸಿಗಳ ತುದಿಯನ್ನು ಕತ್ತರಿಸಿ.',
            hi: 'रोपाई से पहले पौध के ऊपरी सिरे काट दें ताकि अंडों के गुच्छे नष्ट हो जाएं।',
          },
          treatment: {
            en: 'Broadcast Chlorantraniliprole 0.4% GR (Ferterra 4kg/acre) or spray Coragen (0.3ml/L).',
            te: 'ఎకరానికి 4 కిలోల ఫెర్టెర్రా గుళికలను ఇసుకలో కలిపి చల్లాలి లేదా లీటరు నీటికి 0.3 మి.లీ కోరాజెన్ పిచికారీ చేయాలి.',
            kn: 'ಫರ್ಟೆರ್ರಾ (4 ಕೆಜಿ/ಎಕರೆ) ಮರಳಿನೊಂದಿಗೆ ಬೆರೆಸಿ ಹಾಕಿ ಅಥವಾ ಕೋರಾಜೆನ್ ಸಿಂಪಡಿಸಿ.',
            hi: 'फर्टेरा (4 किग्रा/एकड़) रेत में मिलाकर बिखरें या कोराजन (0.3 मिली/लीटर) का छिड़काव करें।',
          },
          recommendedProduct: 'Chlorantraniliprole 0.4% GR (Ferterra) / Coragen',
          productImage: INPUT_PRODUCT_IMAGES.coragen,
          applicationTiming: {
            en: 'Apply at ETL: 1 egg mass per sq.meter or 5% dead hearts.',
            te: '5% కంటే ఎక్కువ మొవ్వులు ఎండిపోయినప్పుడు వెంటనే వాడాలి.',
            kn: 'ಶೇ. 5 ರಷ್ಟು ಮೊಗ್ಗುಗಳು ಒಣಗಿದಾಗ ತಕ್ಷಣ ಬಳಸಿ.',
            hi: '5% डेड हार्ट दिखने पर तुरंत प्रयोग करें।',
          },
        },
      ],
    },
    {
      id: 'pad_stage_3',
      order: 3,
      name: {
        en: '3. Panicle Initiation & Booting Stage',
        te: '3. చిరుపొట్ట & చిరువెన్ను దశ (బూటింగ్)',
        kn: '3. ತೆನೆ ಮೂಡುವ ಮತ್ತು ಗರ್ಭಾವಸ್ಥೆಯ ಹಂತ',
        hi: '3. बाली शुरुआत एवं गभोट (बूटिंग) अवस्था',
      },
      timing: {
        en: '45 to 70 DAT',
        te: 'నాటిన 45 నుండి 70 రోజులు',
        kn: 'ನಾಟಿ ಮಾಡಿದ 45 ರಿಂದ 70 ದಿನಗಳು',
        hi: 'रोपाई के 45 से 70 दिन',
      },
      stageImage: CROP_STAGE_IMAGES.paddy.stages.pad_stage_3,
      whatToDo: {
        en: '1. Top-dress final Urea (25kg) + MOP (25kg/acre) at panicle initiation.\n2. Potash is CRITICAL now for panicle length, grain count, and stem strength against lodging.\n3. Maintain constant 4–5 cm standing water without drying.\n4. Scout for Rice Blast spindle spots and Sheath Blight snakeskin patches on leaf sheaths.',
        te: '1. చిరుపొట్ట దశలో ఆఖరి విడత యూరియా (25 కిలోలు) మరియు పొటాష్ MOP (25 కిలోలు) పైపాటుగా వేయాలి.\n2. వెన్ను పొడవు పెరగడానికి, గింజల సంఖ్య పెరగడానికి మరియు పైరు పడిపోకుండా ఉండటానికి పొటాష్ అత్యంత ముఖ్యం.\n3. చేనులో నిరంతరం 4-5 సెం.మీ మేర నీరు నిల్వ ఉండేలా చూడాలి.\n4. అగ్గితెగులు (కండె ఆకారపు మచ్చలు) మరియు పాముపొడ తెగులు (షీత్ బ్లైట్) ఆశించకుండా గమనించాలి.',
        kn: '1. ತೆನೆ ಬರುವ ಹಂತದಲ್ಲಿ ಕೊನೆಯ ಕಂತಿನ ಯೂರಿಯಾ ಮತ್ತು ಪೊಟ್ಯಾಶ್ ಹಾಕಿ.\n2. ತೆನೆ ಉದ್ದ ಮತ್ತು ಕಾಳುಗಳ ಸಂಖ್ಯೆ ಹೆಚ್ಚಲು ಪೊಟ್ಯಾಶ್ ಅತಿ ಮುಖ್ಯ.\n3. ನಿರಂತರ 4-5 ಸೆಂ.ಮೀ ನೀರು ನಿಲ್ಲಿಸಿ.\n4. ಬೆಂಕಿ ರೋಗ ಮತ್ತು ಕವಚ ಕೊಳೆ ರೋಗವನ್ನು ಗಮನಿಸಿ.',
        hi: '1. गभोट अवस्था में अंतिम यूरिया (25 किग्रा) और एमओपी (25 किग्रा) प्रति एकड़ डालें।\n2. बाली की लंबाई, दानों की संख्या बढ़ाने और फसल को गिरने से बचाने के लिए पोटाश अत्यंत जरूरी है।\n3. खेत में 4-5 सेमी पानी लगातार बनाए रखें।\n4. झुलसा (ब्लास्ट) और शीथ ब्लाइट रोग की निगरानी करें।',
      },
      irrigationGuide: {
        en: 'WATER-SENSITIVE STAGE! Maintain 4–5 cm standing water continuously. Water stress during panicle initiation produces chaffy / sterile spikelets.',
        te: 'అత్యంత కీలకమైన నీటి దశ! నిరంతరం 4-5 సెం.మీ నీరుండాలి. ఈ సమయంలో నీటి కొరత వస్తే తాలు గింజలు ఏర్పడి దిగుబడి పోతుంది.',
        kn: 'ಅತಿ ಮುಖ್ಯ ಹಂತ! ಸದಾ 4-5 ಸೆಂ.ಮೀ ನೀರು ನಿಲ್ಲಿಸಿ. ನೀರಿನ ಕೊರತೆಯಾದರೆ ಜೊಳ್ಳು ಕಾಳುಗಳಾಗುತ್ತವೆ.',
        hi: 'अत्यंत संवेदनशील अवस्था! लगातार 4-5 सेमी पानी रखें। इस समय पानी की कमी से बालियां थोथी रह जाएंगी।',
      },
      weatherPrecaution: {
        en: 'Heavy morning dew + overcast weather triggers Blast disease outbreak; scout daily.',
        te: 'మంచు ఎక్కువగా ఉండి చల్లటి వాతావరణం ఉంటే అగ్గితెగులు వేగంగా వ్యాపిస్తుంది.',
        kn: 'ಮಂಜು ಮತ್ತು ಮೋಡ ಕವಿದ ವಾತಾವರಣದಲ್ಲಿ ಬ್ಲಾಸ್ಟ್ ರೋಗ ಬರುತ್ತದೆ.',
        hi: 'घनी ओस और बादलों के मौसम में ब्लास्ट रोग तेजी से फैलता है।',
      },
      fertilizers: [
        {
          productName: 'Muriate of Potash (MOP 0:0:60) + Urea (Final Top Dress)',
          productImage: INPUT_PRODUCT_IMAGES.mop,
          category: 'fertilizer',
          whenToApply: {
            en: 'Apply at Panicle Initiation (PI) stage (around 50–55 DAT).',
            te: 'చిరుపొట్ట దశలో నాటిన 50-55 రోజుల వద్ద వేయాలి.',
            kn: 'ತೆನೆ ಮೂಡುವ 50-55 ದಿನಗಳಲ್ಲಿ ಹಾಕಿ.',
            hi: 'बाली शुरुआत (50-55 दिन) पर डालें।',
          },
          purpose: {
            en: 'Potassium increases grain weight, stiffens straw against lodging, and minimizes chaffiness.',
            te: 'గింజ బరువు పెరగడానికి, పైరు నేలవాలకుండా కాండం గట్టిపడటానికి మరియు తాలు గింజలు తగ్గడానికి పొటాష్ అత్యవసరం.',
            kn: 'ಕಾಳುಗಳು ಗಟ್ಟಿಯಾಗಲು ಮತ್ತು ಬೆಳೆ ನೆಲಕ್ಕುರುಳದಂತೆ ಕಾಂಡ ಗಟ್ಟಿಗೊಳಿಸಲು ಸಹಕಾರಿ.',
            hi: 'दानों का वजन बढ़ाता है, तने को मजबूत कर फसल को गिरने से रोकता है और थोथापन घटाता है।',
          },
          applicationMethod: {
            en: 'Broadcast into 3 cm standing water.',
            te: 'చేనులో తక్కువ నీరు ఉన్నప్పుడు సమంగా చల్లాలి.',
            kn: 'ನೀರಿರುವಾಗ ಸಮವಾಗಿ ಎರಚಿ.',
            hi: 'हल्के पानी में बिखरकर दें।',
          },
          dosage: '25 kg MOP + 25 kg Urea per acre',
          precautions: {
            en: 'Never delay Potash beyond panicle initiation stage.',
            te: 'పొటాష్ ఎరువును వెన్ను బయటకు వచ్చిన తర్వాత వేస్తే ఫలితం ఉండదు.',
            kn: 'ತೆನೆ ಹೊರಬಂದ ನಂತರ ಪೊಟ್ಯಾಶ್ ಹಾಕಬೇಡಿ.',
            hi: 'बाली निकलने के बाद पोटाश डालने का कोई लाभ नहीं होता।',
          },
        },
      ],
      pestsAndDiseases: [
        {
          name: {
            en: 'Sheath Blight (Rhizoctonia solani)',
            te: 'పాముపొడ తెగులు (షీత్ బ్లైట్)',
            kn: 'ಹಾವು ಪೊರೆ ರೋಗ (ಕವಚ ಕೊಳೆ ರೋಗ)',
            hi: 'शीथ ब्लाइट (तने का झुलसा रोग)',
          },
          problemType: 'disease',
          symptomImage: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&auto=format&fit=crop&q=80',
          symptoms: {
            en: 'Oval snake-skin like greenish-grey spots with dark purple borders on leaf sheath near water line.',
            te: 'నీటి మట్టం వద్ద కాండం తొడుగులపై పాము చర్మం లాంటి బూడిద రంగు మచ్చలు ఏర్పడి పైకి పాకుతాయి.',
            kn: 'ನೀರಿನ ಮಟ್ಟದಲ್ಲಿ ಕಾಂಡದ ಮೇಲೆ ಹಾವಿನ ಚರ್ಮದಂತಹ ಕಂದು-ಬೂದು ಮಚ್ಚೆಗಳು ಉಂಟಾಗುತ್ತವೆ.',
            hi: 'पानी की सतह के पास तने के छिलके पर सांप की केंचुली जैसे भूरे-धूसर धब्बे बनते हैं।',
          },
          prevention: {
            en: 'Avoid excess nitrogen fertilizer; keep bunds weed-free.',
            te: 'నత్రజని ఎరువులు మోతాదుకు మించి వేయకూడదు, గట్లపై కలుపు లేకుండా చూసుకోవాలి.',
            kn: 'ಅತಿಯಾದ ಯೂರಿಯಾ ಬಳಸಬೇಡಿ.',
            hi: 'अधिक यूरिया का प्रयोग न करें और मेड़ों को साफ रखें।',
          },
          treatment: {
            en: 'Spray Hexaconazole 5% SC (2ml/L) or Trifloxystrobin + Tebuconazole (Nativo 0.4g/L).',
            te: 'లీటరు నీటికి 2 మి.లీ హెక్సాకొనజోల్ లేదా 0.4 గ్రాముల నేటివో కలిపి మొదళ్లపై బాగా తడిసేలా పిచికారీ చేయాలి.',
            kn: 'ಹೆಕ್ಸಾಕೊನಜೋಲ್ (2 ಮಿ.ಲೀ/ಲೀಟರ್) ಸಿಂಪಡಿಸಿ.',
            hi: 'हेक्साकोनाजोल (2 मिली/लीटर) या नेटिवो (0.4 ग्राम/लीटर) का छिड़काव तने तक पहुंचे ऐसा करें।',
          },
          recommendedProduct: 'Hexaconazole 5% SC (Contaf Plus)',
          productImage: INPUT_PRODUCT_IMAGES.mancozeb,
          applicationTiming: {
            en: 'Direct spray towards base of the hills at first sight of lesions.',
            te: 'మొక్కల మొదళ్లు బాగా తడిసేలా పిచికారీ చేయాలి.',
            kn: 'ಬುಡಕ್ಕೆ ತಲುಪುವಂತೆ ಸಿಂಪಡಿಸಿ.',
            hi: 'पौधों के आधार भाग पर अच्छी तरह छिड़काव करें।',
          },
        },
      ],
    },
    {
      id: 'pad_stage_4',
      order: 4,
      name: {
        en: '4. Flowering & Heading Stage (Anthesis)',
        te: '4. ఈనెలు బయటకు వచ్చే & పూత దశ',
        kn: '4. ತೆನೆ ಹೊರಬರುವ ಮತ್ತು ಹೂಬಿಡುವ ಹಂತ',
        hi: '4. बाली निकलना एवं पुष्पन (एंथेसिस) अवस्था',
      },
      timing: {
        en: '70 to 90 DAT',
        te: 'నాటిన 70 నుండి 90 రోజులు',
        kn: 'ನಾಟಿ ಮಾಡಿದ 70 ರಿಂದ 90 ದಿನಗಳು',
        hi: 'रोपाई के 70 से 90 दिन',
      },
      stageImage: CROP_STAGE_IMAGES.paddy.stages.pad_stage_4,
      whatToDo: {
        en: '1. Maintain steady 3–5 cm water depth.\n2. STRICTLY DO NOT SPRAY any chemical insecticide during morning pollination hours (9 AM to 12 PM).\n3. Scout for White Earhead caused by late stem borer attack.\n4. Check leaf sheaths at waterline for Brown Planthopper (BPH).',
        te: '1. చేనులో నిరంతరం 3-5 సెం.మీ నీరు ఉండేలా చూడాలి.\n2. ఉదయం 9 నుండి మధ్యాహ్నం 12 గంటల వరకు పరాగసంపర్కం జరిగే సమయంలో ఎలాంటి రసాయన పురుగుమందులను పిచికారీ చేయరాదు.\n3. చివరలో కాండం తొలిచే పురుగు వలన తెల్ల వెన్నులు (వైట్ ఇయర్ హెడ్స్) వస్తున్నాయేమో గమనించాలి.\n4. నీటి మట్టం వద్ద మొదళ్లలో సుడిదోమ (BPH) చేరిందేమో పైరును పక్కకు తప్పించి చూడాలి.',
        kn: '1. 3-5 ಸೆಂ.ಮೀ ನೀರು ನಿಲ್ಲಿಸಿ.\n2. ಬೆಳಗ್ಗೆ 9 ರಿಂದ 12 ಗಂಟೆಯವರೆಗೆ ಪರಾಗಸ್ಪರ್ಶ ನಡೆಯುವಾಗ ಯಾವುದೇ ರಾಸಾಯನಿಕ ಸಿಂಪಡಿಸಬೇಡಿ.\n3. ಬಿಳಿ ತೆನೆ (ವೈಟ್ ಇಯರ್‌ಹೆಡ್) ಬರುತ್ತಿದೆಯೇ ಗಮನಿಸಿ.\n4. ಗಿಡದ ಬುಡದಲ್ಲಿ ಕಂದು ಜಿಗಿಹುಳು (BPH) ಗಮನಿಸಿ.',
        hi: '1. 3-5 सेमी पानी बनाए रखें।\n2. सुबह 9 से 12 बजे के बीच जब परागण हो रहा हो तब किसी भी कीटनाशक का छिड़काव न करें।\n3. सफेद बाली (White Earhead) की निगरानी करें।\n4. पानी की सतह के पास तने पर भूरा फुदका (BPH) की जांच करें।',
      },
      irrigationGuide: {
        en: 'Continuous 3–5 cm standing water. Drought during anthesis causes flowers to desiccate and yield collapses.',
        te: 'నిరంతరం 3-5 సెం.మీ నీరుండాలి. పూత సమయంలో బెట్ట తగిలితే వెన్నులన్నీ తాలుగా మారిపోతాయి.',
        kn: 'ನಿರಂತರ ನೀರು ನಿಲ್ಲಿಸಿ. ಈ ಹಂತದಲ್ಲಿ ನೀರಿನ ಕೊರತೆಯಾದರೆ ತೆನೆಗಳು ಜೊಳ್ಳಾಗುತ್ತವೆ.',
        hi: 'लगातार 3-5 सेमी पानी रखें। पानी की कमी से बालियां सफेद व खाली रह जाएंगी।',
      },
      weatherPrecaution: {
        en: 'High winds or downpour during anthesis will wash away pollen grains; inspect after heavy weather.',
        te: 'పూత విచ్చుకునే సమయంలో వర్షం పడితే పరాగరేణువులు కొట్టుకుపోతాయి.',
        kn: 'ಮಳೆಯಿಂದ ಪರಾಗ ಕಣಗಳು ಕೊಚ್ಚಿಹೋಗದಂತೆ ಗಮನಿಸಿ.',
        hi: 'बारिश से परागकण धुल सकते हैं।',
      },
      fertilizers: [],
      pestsAndDiseases: [],
    },
    {
      id: 'pad_stage_5',
      order: 5,
      name: {
        en: '5. Milk to Dough Grain Filling Stage',
        te: '5. పాల & గింజ గట్టిపడే దశ (గింజ ఊరే దశ)',
        kn: '5. ಹಾಲಿನ ಮತ್ತು ಕಾಳು ಗಟ್ಟಿಯಾಗುವ ಹಂತ',
        hi: '5. दुग्ध एवं दाना भराव (मिल्किंग टू डो) अवस्था',
      },
      timing: {
        en: '90 to 115 DAT',
        te: 'నాటిన 90 నుండి 115 రోజులు',
        kn: 'ನಾಟಿ ಮಾಡಿದ 90 ರಿಂದ 115 ದಿನಗಳು',
        hi: 'रोपाई के 90 से 115 दिन',
      },
      stageImage: CROP_STAGE_IMAGES.paddy.stages.pad_stage_5,
      whatToDo: {
        en: '1. Maintain saturated to thin water layer (2 cm); do not dry field completely yet.\n2. Foliar spray 13:0:45 Potassium Nitrate (Multi-K 10g/L) to make grains heavy, golden, and lustrous.\n3. STRICT MONITORING FOR BPH (Brown Planthopper): Part hills and inspect water line for "hopper burn" patches.\n4. Walk through field to disperse Rice Gandhi Bugs feeding on tender milky grains.',
        te: '1. నేలలో తడి ఆరకుండా 2 సెం.మీ మేర పలుచటి నీటిని నిర్వహించాలి.\n2. గింజలు బరువుగా, నిగనిగలాడే బంగారు రంగులో నిండటానికి 13-0-45 (పొటాషియం నైట్రేట్) లీటరు నీటికి 10 గ్రాములు కలిపి ఆకులపై పిచికారీ చేయాలి.\n3. సుడిదోమ (BPH) ఉధృతిని పసిగట్టడానికి మొదళ్లను గమనించాలి; ఆలస్యమైతే చేను గుండ్రంగా మాడిపోతుంది (హాపర్ బర్న్).\n4. పాల కంకుల నుండి రసం పీల్చే గాంధీ పురుగు నివారణ చర్యలు చేపట్టాలి.',
        kn: '1. ಗದ್ದೆಯಲ್ಲಿ 2 ಸೆಂ.ಮೀ ನೀರು ನಿಲ್ಲಿಸಿ.\n2. ಕಾಳು ತೂಕ ಮತ್ತು ಹೊಳಪು ಬರಲು 13:0:45 ಸಿಂಪಡಿಸಿ.\n3. ಕಂದು ಜಿಗಿಹುಳುವಿನ ಬಾಧೆ (ಹಾಪ್ಪರ್ ಬರ್ನ್) ಬರದಂತೆ ಗಮನಿಸಿ.\n4. ಹಾಲಿನ ಕಾಳುಗಳಿಂದ ರಸ ಹೀರುವ ಗಂಧಿ ಕೀಟವನ್ನು ನಿಯಂತ್ರಿಸಿ.',
        hi: '1. खेत में 2 सेमी पानी बनाए रखें।\n2. दाना चमकदार और भारी बनाने के लिए 13:0:45 (10 ग्राम/लीटर) का छिड़काव करें।\n3. भूरा फुदका (BPH) के कारण होने वाले "हॉपर बर्न" (खेत का जलना) की कड़ी निगरानी करें।\n4. दुग्ध अवस्था में रस चूसने वाले गंधी बग कीट की रोकथाम करें।',
      },
      irrigationGuide: {
        en: 'Maintain thin water layer (2 cm). Start drying field gradually as dough stage completes.',
        te: '2 సెం.మీ పలుచటి నీరుంచాలి. గింజ గట్టిపడిన తర్వాత క్రమంగా నీటిని తగ్గించాలి.',
        kn: '2 ಸೆಂ.ಮೀ ನೀರು ನಿಲ್ಲಿಸಿ, ಕಾಳು ಗಟ್ಟಿಯಾದ ನಂತರ ನೀರನ್ನು ಇಳಿಸಿ.',
        hi: '2 सेमी पानी रखें, दाना कड़ा होने पर धीरे-धीरे पानी सुखाना शुरू करें।',
      },
      weatherPrecaution: {
        en: 'Sudden heavy downpour can lodge heavy top-heavy crops; drain excess runoff swiftly.',
        te: 'వెన్ను బరువుగా ఉన్నప్పుడు భారీ వర్షం వస్తే పైరు పడిపోతుంది, నీటిని వెంటనే బయటకు పంపాలి.',
        kn: 'ಮಳೆ ಬಂದಾಗ ನೀರನ್ನು ತಕ್ಷಣ ಹೊರಹಾಕಿ ಬೆಳೆ ನೆಲಕ್ಕುರುಳದಂತೆ ನೋಡಿಕೊಳ್ಳಿ.',
        hi: 'भारी बारिश में फसल गिरने से बचाने के लिए तुरंत जल निकासी करें।',
      },
      fertilizers: [
        {
          productName: '13:00:45 Potassium Nitrate (Multi-K Foliar Spray)',
          productImage: INPUT_PRODUCT_IMAGES.potassium_nitrate_13_0_45,
          category: 'fertilizer',
          whenToApply: {
            en: 'Foliar spray at 50% heading and early milk stage (around 95–100 DAT).',
            te: 'వెన్ను బయటకు వచ్చి పాలు పోసుకునే సమయంలో ఆకులపై పిచికారీ చేయాలి.',
            kn: 'ತೆನೆ ಹಾಲು ತುಂಬುವ ಸಮಯದಲ್ಲಿ ಎಲೆಗಳ ಮೇಲೆ ಸಿಂಪಡಿಸಿ.',
            hi: 'बाली में दूध भरते समय पत्तियों पर छिड़काव करें।',
          },
          purpose: {
            en: 'Enhances grain starch filling, maximizes 1,000-grain test weight, and prevents tip grain abortion.',
            te: 'వెన్ను చివర గింజలు కూడా గట్టిగా నిండటానికి, ధాన్యం బరువు పెరగడానికి, నూకలు తగ్గడానికి సహాయపడుతుంది.',
            kn: 'ಕಾಳುಗಳು ತೂಕವಾಗಿ ಬರಲು ಮತ್ತು ಕೊನೆ ಕಾಳುಗಳು ಜೊಳ್ಳಾಗದಂತೆ ತಡೆಯಲು ಸಹಕಾರಿ.',
            hi: 'दाने में ठोस भराव, वजन में वृद्धि और अंतिम दानों को खाली रहने से बचाता है।',
          },
          applicationMethod: {
            en: 'Foliar spray in late afternoon.',
            te: 'సాయంత్రం వేళల్లో పిచికారీ చేయాలి.',
            kn: 'ಸಂಜೆ ವೇಳೆ ಸಿಂಪಡಿಸಿ.',
            hi: 'शाम के समय पत्तियों पर छिड़काव करें।',
          },
          dosage: '10 grams 13:0:45 per liter of water (2 kg per acre in 200L water)',
          precautions: {
            en: 'Ensure complete spray coverage over panicles and flag leaves.',
            te: 'కంకులు మరియు జెండా ఆకు బాగా తడిసేలా పిచికారీ చేయాలి.',
            kn: 'ತೆನೆ ಮತ್ತು ಎಲೆಗಳು ಸಂಪೂರ್ಣ ಒದ್ದೆಯಾಗುವಂತೆ ಸಿಂಪಡಿಸಿ.',
            hi: 'बालियों और झंडा पत्ती पर अच्छी तरह छिड़काव होना चाहिए।',
          },
        },
      ],
      pestsAndDiseases: [
        {
          name: {
            en: 'Brown Planthopper - BPH (Nilaparvata lugens)',
            te: 'సుడిదోమ (బ్రౌన్ ప్లాంట్‌హాపర్)',
            kn: 'ಕಂದು ಜಿಗಿಹುಳು (BPH)',
            hi: 'भूरा फुदका (ब्राउन प्लांट हॉपर - बीपीएच)',
          },
          problemType: 'pest',
          symptomImage: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&auto=format&fit=crop&q=80',
          symptoms: {
            en: 'Congregates in thousands at base of stems sucking sap; circular patches dry up and collapse like fire burnt ("Hopper Burn").',
            te: 'మొక్కల మొదళ్ల వద్ద వేలాదిగా చేరి రసం పీల్చడం వలన చేనులో గుండ్రని మచ్చలుగా పైరు ఎండిపోయి కాలిపోయినట్లు కనిపిస్తుంది (సుడిదోమ / హాపర్ బర్న్).',
            kn: 'ಸಾವಿರಾರು ಕೀಟಗಳು ಬುಡದಲ್ಲಿ ಸೇರಿ ರಸ ಹೀರುವುದರಿಂದ ಬೆಳೆ ಬೆಂಕಿಯಲ್ಲಿ ಸುಟ್ಟಂತೆ ಒಣಗುತ್ತದೆ (ಹಾಪ್ಪರ್ ಬರ್ನ್).',
            hi: 'हजारों की संख्या में पौधों के आधार पर रस चूसते हैं जिससे खेत में गोल-गोल जले हुए जैसे चकत्ते बन जाते हैं (हॉपर बर्न)।',
          },
          prevention: {
            en: 'Provide alleyways (paths of 30 cm) every 2 meters for aeration and sunlight; avoid excess urea.',
            te: 'ప్రతి 2 మీటర్లకు 30 సెం.మీ సందులు (బాటలు) తీసి గాలి వెలుతురు సోకేలా చేయాలి.',
            kn: 'ಪ್ರತಿ 2 ಮೀಟರ್‌ಗೆ ಸಾಲು ಬಿಟ್ಟು ಗಾಳಿಯಾಡುವಂತೆ ಮಾಡಿ.',
            hi: 'हर 2 मीटर पर 30 सेमी की गलियां बनाएं जिससे धूप और हवा लगे; अत्यधिक यूरिया न डालें।',
          },
          treatment: {
            en: 'Drain standing water completely for 2 days. Spray Triflumezopyrim 10% SC (Pexalon 94ml/acre) or Pymetrozine 50% WG (Chess 120g/acre) directed strictly to the base.',
            te: 'మడిలోని నీటిని 2 రోజులు తీసివేయాలి. లీటరు నీటికి 0.5 మి.లీ పెక్సాలోన్ లేదా 0.6 గ్రాముల ఛెస్ కలిపి మొక్కల మొదళ్లు బాగా తడిసేలా పిచికారీ చేయాలి.',
            kn: 'ಗದ್ದೆಯ ನೀರನ್ನು 2 ದಿನ ಹೊರಹಾಕಿ. ಪೆಕ್ಸಾಲೋನ್ (94 ಮಿ.ಲೀ/ಎಕರೆ) ಬುಡಕ್ಕೆ ತಲುಪುವಂತೆ ಸಿಂಪಡಿಸಿ.',
            hi: 'खेत का पानी 2 दिन के लिए निकाल दें। पेक्सलोन (94 मिली/एकड़) या चेस का छिड़काव सीधे तने के आधार पर करें।',
          },
          recommendedProduct: 'Triflumezopyrim 10% SC (Pexalon) / Pymetrozine (Chess)',
          productImage: INPUT_PRODUCT_IMAGES.imidacloprid,
          applicationTiming: {
            en: 'Apply immediately at ETL: 5–10 hoppers per hill before hopper burn occurs.',
            te: 'కుదురుకు 5-10 దోమలు కనిపించిన వెంటనే మొదళ్ల వద్ద పిచికారీ చేయాలి.',
            kn: 'ಕುಡಿಗೆ 5-10 ಹುಳುಗಳು ಕಂಡ ತಕ್ಷಣ ಸಿಂಪಡಿಸಿ.',
            hi: 'प्रति हिल 5-10 फुदके दिखने पर तुरंत छिड़काव करें।',
          },
        },
      ],
    },
    {
      id: 'pad_stage_6',
      order: 6,
      name: {
        en: '6. Golden Ripening & Harvesting Stage',
        te: '6. పైరు బంగారు రంగుకు మారడం & కోత దశ',
        kn: '6. ಕಾಳು ಮಾಗುವ ಮತ್ತು ಕಟಾವು ಹಂತ',
        hi: '6. परिपक्वता एवं कटाई अवस्था',
      },
      timing: {
        en: '115 to 140+ DAT',
        te: 'నాటిన 115 నుండి 140+ రోజులు',
        kn: 'ನಾಟಿ ಮಾಡಿದ 115 ರಿಂದ 140+ ದಿನಗಳು',
        hi: 'रोपाई के 115 से 140+ दिन',
      },
      stageImage: CROP_STAGE_IMAGES.paddy.stages.pad_stage_6,
      whatToDo: {
        en: '1. Completely drain field 10–12 days before harvest so soil hardens for combine harvester / manual sickles.\n2. Harvest when 85–90% of panicles turn golden yellow and lower grains are hard.\n3. Thresh immediately and dry paddy to 12–14% moisture for milling and safe bagging.',
        te: '1. కోతకు 10-12 రోజుల ముందే నీటిని పూర్తిగా తీసివేయాలి, తద్వారా నేల గట్టిపడి హార్వెస్టర్ లేదా కూలీలు దిగడానికి అనువుగా ఉంటుంది.\n2. 85-90% కంకులు బంగారు పసుపు రంగులోకి మారి కింది గింజలు గట్టిపడినప్పుడు కోత కోయాలి.\n3. వెంటనే నూర్పిడి చేసి ధాన్యాన్ని ఎండబెట్టి తేమ 12-14% కి చేరిన తర్వాత బస్తాల్లో నింపాలి.',
        kn: '1. ಕಟಾವಿಗೆ 10-12 ದಿನ ಮುನ್ನ ನೀರನ್ನು ಸಂಪೂರ್ಣ ಹೊರಹಾಕಿ.\n2. ಶೇ. 85-90 ರಷ್ಟು ತೆನೆಗಳು ಬಂಗಾರದ ಬಣ್ಣಕ್ಕೆ ತಿರುಗಿದಾಗ ಕಟಾವು ಮಾಡಿ.\n3. ತೇವಾಂಶ 12-14% ಇರುವಂತೆ ಒಣಗಿಸಿ ಚೀಲಗಳಲ್ಲಿ ತುಂಬಿ.',
        hi: '1. कटाई से 10-12 दिन पहले खेत का पूरा पानी निकाल दें ताकि कंबाइन हार्वेस्टर या मजदूरों के लिए जमीन सख्त हो जाए।\n2. जब 85-90% बालियां सुनहरी पीली हो जाएं तब कटाई करें।\n3. तुरंत मड़ाई करें और धूप में सुखाकर नमी 12-14% होने पर बोरियों में भरें।',
      },
      irrigationGuide: {
        en: 'Drain field completely dry 10–12 days before harvest.',
        te: 'కోతకు 10-12 రోజుల ముందే నీరు పూర్తిగా తీసి ఆరబెట్టాలి.',
        kn: 'ಕಟಾವಿಗೆ 10-12 ದಿನ ಮುನ್ನ ನೀರು ಸಂಪೂರ್ಣ ಹೊರಹಾಕಿ.',
        hi: 'कटाई से 10-12 दिन पहले खेत को पूरी तरह सुखा दें।',
      },
      weatherPrecaution: {
        en: 'Avoid harvesting under threatening cyclone / depression rains; lodge risk is high.',
        te: 'తుఫాను లేదా వర్ష సూచన ఉన్నప్పుడు జాగ్రత్త వహించాలి.',
        kn: 'ಮಳೆಯ ಮುನ್ಸೂಚನೆ ಇದ್ದಾಗ ಎಚ್ಚರಿಕೆ ವಹಿಸಿ.',
        hi: 'चक्रवात या बारिश के पूर्वानुमान पर तुरंत कटाई व सुरक्षित स्थान पर रखने की व्यवस्था करें।',
      },
      fertilizers: [],
      pestsAndDiseases: [],
    },
  ],
  harvestingGuide: {
    en: 'Harvest when 85–90% grains turn golden yellow. Drain field 10–12 days prior. Dry paddy on clean thresher yard to 12–14% moisture before bagging.',
    te: '85-90% కంకులు బంగారు రంగులోకి మారినప్పుడు కోయాలి. 10-12 రోజుల ముందే నీరు తీసివేయాలి. తేమ 12-14% వచ్చే వరకు ఆరబెట్టాలి.',
    kn: 'ಶೇ. 85-90 ಕಾಳುಗಳು ಹಳದಿಯಾದಾಗ ಕಟಾವು ಮಾಡಿ 12-14% ತೇವಾಂಶಕ್ಕೆ ಒಣಗಿಸಿ.',
    hi: '85-90% बालियां सुनहरी होने पर कटाई करें। 10-12 दिन पहले पानी निकालें। 12-14% नमी पर सुखाकर भंडारित करें।',
  },
  precautions: {
    en: '1. Follow Alternate Wetting & Drying (AWD) at tillering to boost shoots.\n2. Never apply chemical sprays during 9 AM–12 PM anthesis.\n3. Strictly apply Potash at panicle initiation for grain weight.',
    te: '1. పిలకల దశలో ఆరుతడి పద్ధతి పాటించి ఎక్కువ పిలకలు వచ్చేలా చేయాలి.\n2. ఉదయం 9-12 గంటల మధ్య పూత సమయంలో మందులు పిచికారీ చేయరాదు.\n3. చిరుపొట్ట దశలో పొటాష్ ఎరువు తప్పనిసరిగా వేయాలి.',
    kn: '1. ಆರುತಡಿ ಪದ್ಧತಿ ಅನುಸರಿಸಿ.\n2. ಬೆಳಗ್ಗೆ 9-12 ಗಂಟೆಯ ಪರಾಗಸ್ಪರ್ಶ ಸಮಯದಲ್ಲಿ ಸಿಂಪಡಣೆ ಮಾಡಬೇಡಿ.\n3. ತೆನೆ ಬರುವಾಗ ಪೊಟ್ಯಾಶ್ ಹಾಕುವುದು ಕಡ್ಡಾಯ.',
    hi: '1. कल्ले निकलते समय एडब्ल्यूडी (गीला-सूखा) विधि अपनाएं।\n2. सुबह 9-12 बजे पुष्पन के समय छिड़काव न करें।\n3. गभोट अवस्था में पोटाश अवश्य डालें।',
  },
  // 1. Soil & Climate
  soilAndClimate: {
    title: {
      en: 'Suitable Climate & Soil Requirements',
      te: 'వరి పంటకు అనుకూల వాతావరణం & నేలల వివరాలు',
      kn: 'ಭತ್ತಕ್ಕೆ ಸೂಕ್ತ ಹವಾಮಾನ ಮತ್ತು ಮಣ್ಣಿನ ವಿವರಗಳು',
      hi: 'धान के लिए अनुकूल जलवायु एवं उपयुक्त मिट्टी',
    },
    image: CROP_PRACTICE_IMAGES.paddy.soil,
    imageCaption: {
      en: 'Heavy clay and clay loam soils with high water retention capacity',
      te: 'నీటిని నిల్వ ఉంచుకునే బరువైన నల్లరేగడి మరియు జిలేబి నేలలు',
      kn: 'ನೀರು ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳುವ ಫಲವತ್ತಾದ ಜೇಡಿ ಮಣ್ಣು',
      hi: 'अधिक जलधारण क्षमता वाली भारी मटियार एवं दोमट मिट्टी',
    },
    description: {
      en: 'Paddy thrives in hot and humid tropical climates (22–32°C). Heavy alluvial clay loams or clay soils with high water holding capacity and pH between 5.5 to 7.0 are best suited for wetland puddled rice.',
      te: 'వరి పంటకు వేడి మరియు తేమతో కూడిన వాతావరణం (22-32°C) అనుకూలం. నీరు ఇంకిపోకుండా నిల్వ ఉంచే బంకమన్ను, బరువైన నల్లరేగడి నేలలు లేదా ఒండ్రు నేలలు శ్రేష్టం.',
      kn: 'ಬಿಸಿ ಮತ್ತು ತೇವಾಂಶದ ಹವೆ (22-32°C) ಸೂಕ್ತ. ಜೇಡಿ ಮಣ್ಣು ಉತ್ತಮ.',
      hi: 'गर्म एवं आर्द्र जलवायु (22-32°C) उपयुक्त है। भारी मटियार या चिकनी दोमट मिट्टी सर्वोत्तम होती है।',
    },
    details: [
      {
        en: 'Water Requirement: 1100 to 1250 mm throughout crop lifecycle.',
        te: 'నీటి అవసరం: పంట కాలం మొత్తంలో 1100 నుండి 1250 మి.మీ నీరు అవసరం.',
        kn: 'ಬೆಳೆಗೆ 1100-1250 ಮಿ.ಮೀ ನೀರು ಬೇಕು.',
        hi: 'फसल अवधि में 1100 से 1250 मिमी पानी की आवश्यकता होती है।',
      },
    ],
  },
  // 2. Land Preparation
  landPreparation: {
    title: {
      en: 'Wetland Puddling & Leveling',
      te: 'దమ్ము చేయడం & సమాంతరంగా లెవలింగ్',
      kn: 'ಕೆಸರು ಗದ್ದೆ ಸಿದ್ಧತೆ ಮತ್ತು ಸಮತಟ್ಟಾಗಿಸುವಿಕೆ',
      hi: 'लेव (कदवा) लगाना एवं पाटा लगाना',
    },
    image: CROP_PRACTICE_IMAGES.paddy.landPrep,
    imageCaption: {
      en: 'Tractor cage-wheel wetland puddling creating impermeable hard pan to prevent deep percolation',
      te: 'కేజ్ వీల్స్‌తో దమ్ము చేసి నీరు ఇంకిపోకుండా కింద గట్టి పొరను తయారుచేయడం',
      kn: 'ಟ್ರಾಕ್ಟರ್ ಮೂಲಕ ಕೆಸರು ಮಾಡಿ ನೀರು ಇಳಿಯದಂತೆ ಮಾಡುವುದು',
      hi: 'ट्रैक्टर केजव्हील से कदवा (पडलिंग) कर रिसाव रोकना',
    },
    description: {
      en: 'Plough dry field once, let in water, and puddle twice with cage wheel tractor at 7-day intervals. Level the field perfectly with a wooden plank or laser land leveler to ensure uniform water depth (2–3 cm) and avoid patchy weed growth.',
      te: 'ముందుగా పొడి దుక్కి దున్ని, నీరు పెట్టి కేజ్ వీల్స్ సాయంతో రెండుసార్లు దమ్ము చేయాలి. నీరు సమానంగా నిలవడానికి చెక్క బల్లతో చదును (లెవలింగ్) చేయాలి.',
      kn: 'ಎರಡು ಬಾರಿ ಕೆಸರು ಮಾಡಿ ಮರದ ಹಲಗೆಯಿಂದ ಗದ್ದೆಯನ್ನು ಸಮತಟ್ಟು ಮಾಡಿ.',
      hi: 'खेत में पानी भरकर दो बार कदवा (पडलिंग) करें और पाटा लगाकर खेत को बिल्कुल समतल करें।',
    },
    details: [
      {
        en: 'Impermeable Layer: Puddling churns soil aggregates into a dense muddy slurry, reducing water percolation by 60%.',
        te: 'నీటి సంరక్షణ: దమ్ము చేయడం వలన నీరు భూమి లోపలికి ఇంకిపోకుండా 60% వరకు నీటిని ఆదా చేయవచ్చు.',
        kn: 'ನೀರಿನ ಸೋರುವಿಕೆ ತಡೆಯುತ್ತದೆ.',
        hi: 'पडलिंग से पानी का नीचे रिसाव 60% तक कम हो जाता है।',
      },
    ],
  },
  // 3. Seed & Sowing Practice
  seedAndSowingPractice: {
    seed: {
      title: {
        en: 'Certified Seed Selection & Wet Nursery',
        te: 'విత్తన ఎంపిక & తడి నారుమడి యాజమాన్యం',
        kn: 'ಪ್ರಮಾಣಿತ ಬೀಜದ ಆಯ್ಕೆ ಮತ್ತು ನರ್ಸರಿ',
        hi: 'प्रमाणित बीज चयन एवं भीगी नर्सरी',
      },
      image: CROP_PRACTICE_IMAGES.paddy.seed,
      imageCaption: {
        en: 'Healthy 22-day old dark green rice seedlings ready for transplanting',
        te: 'నాటడానికి సిద్ధంగా ఉన్న 22-25 రోజుల ఆరోగ్యకరమైన వరి నారు',
        kn: 'ನಾಟಿಗೆ ಸಿದ್ಧವಾದ 22-25 ದಿನಗಳ ಹಸಿರು ಭತ್ತದ ಸಸಿಗಳು',
        hi: 'रोपाई हेतु तैयार 22-25 दिन की हरी-भरी स्वस्थ पौध',
      },
      description: {
        en: 'Select certified high-yielding varieties: BPT-5204 (Samba Mahsuri), MTU-1010, RNR-15048 (Telangana Sona), MTU-1061, or IR-64. Prepare 5 cents (200 sq.m) nursery bed per acre.',
        te: 'బిపిటి-5204 (సాంబ మసూరి), ఎంటియు-1010, ఆర్ఎన్ఆర్-15048 (తెలంగాణ సోనా), ఎంటియు-1061 వంటి మేలైన రకాలను ఎన్నుకోవాలి. ఎకరానికి 5 సెంట్ల నారుమడి సిద్ధం చేయాలి.',
        kn: 'ಬಿಪಿಟಿ-5204, ಎಂಟಿಯು-1010 ಅಥವಾ ಆರ್ಎನ್ಆರ್-15048 ತಳಿಗಳನ್ನು ಆರಿಸಿ.',
        hi: 'बीपीटी-5204, एमटीयू-1010, आरएनआर-15048 (तेलंगाना सोना) किस्मों का चयन करें।',
      },
      details: [
        {
          en: 'Seed Rate: 20 to 25 kg/acre for coarse varieties; 15 to 20 kg/acre for fine varieties.',
          te: 'విత్తన మోతాదు: సన్న రకాలకు ఎకరానికి 15-20 కిలోలు, లావు రకాలకు 20-25 కిలోలు.',
          kn: 'ಬೀಜದ ಪ್ರಮಾಣ: ಎಕರೆಗೆ 15-20 ಕೆಜಿ ಸಣ್ಣ ತಳಿ, 20-25 ಕೆಜಿ ದಪ್ಪ ತಳಿ.',
          hi: 'बीज दर: महीन किस्मों के लिए 15-20 किग्रा, मोटी किस्मों के लिए 20-25 किग्रा प्रति एकड़।',
        },
      ],
    },
    treatment: {
      title: {
        en: 'Brine Test & Fungicide Sprouting Treatment',
        te: 'ఉప్పు నీటి పరీక్ష & విత్తన శుద్ధి విధానం',
        kn: 'ಉಪ್ಪು ನೀರು ಪರೀಕ್ಷೆ ಮತ್ತು ಬೀಜೋಪಚಾರ',
        hi: 'नमक के घोल से जांच एवं फफूंदनाशी उपचार',
      },
      image: CROP_PRACTICE_IMAGES.paddy.seedTreatment,
      imageCaption: {
        en: 'Discarding floating chaffy seeds in 10% brine and soaking healthy seeds in Carbendazim solution',
        te: 'ఉప్పు నీటిలో తేలిన తాలు గింజలను తీసివేసి మునిగిన గింజలను మందుతో శుద్ధి చేయడం',
        kn: 'ಉಪ್ಪು ನೀರಿನಲ್ಲಿ ತೇಲುವ ಜೊಳ್ಳು ಬೀಜಗಳನ್ನು ಬೇರ್ಪಡಿಸಿ ಬೀಜೋಪಚಾರ',
        hi: 'नमक के पानी में हल्के बीज निकालकर कार्बेंडाजिम से बीज शोधन',
      },
      description: {
        en: 'Float seeds in 10% brine solution (1 kg salt in 10 L water; egg should float). Discard light floating seeds. Rinse sinkers 2–3 times in fresh water. Soak in Carbendazim 50% WP (2 g/kg) or Tricyclazole 75% WP (1.5 g/kg) for 24 hours, then incubate under moist gunny bag for 24 hours for uniform sprouting.',
        te: '10 లీటర్ల నీటిలో 1 కిలో ఉప్పు కలిపి విత్తనాలు వేయాలి. పైకి తేలిన తాలును తీసేసి, అడుగున మునిగిన మంచి గింజలను మంచినీటితో కడగాలి. కిలో విత్తనానికి 2 గ్రాముల కార్బండజిమ్ కలిపి 24 గంటలు నానబెట్టి, మండె కట్టి మొలకలు రప్పించాలి.',
        kn: 'ಉಪ್ಪು ನೀರಿನಲ್ಲಿ ಜೊಳ್ಳು ತೆಗೆದು ಶಿಲೀಂಧ್ರನಾಶಕದಿಂದ ಬೀಜೋಪಚಾರ ಮಾಡಿ ಮೊಳಕೆ ಬರಿಸಿ.',
        hi: '10% नमक के घोल में तैरने वाले बीजों को निकालें। भारी बीजों को कार्बेंडाजिम (2 ग्राम/किग्रा) में 24 घंटे भिगोकर अंकुरित करें।',
      },
      details: [
        {
          en: 'Shields from Blast & Foot Rot: Completely eradicates seed-borne spores of Pyricularia oryzae and Bakanae disease.',
          te: 'అగ్గి తెగులు నివారణ: విత్తనం ద్వారా వ్యాపించే అగ్గి తెగులు, బకానె తెగుళ్ళను 100% నివారిస్తుంది.',
          kn: 'ಬೆಂಕಿ ರೋಗ ತಡೆಯುತ್ತದೆ.',
          hi: 'झुलसा (ब्लास्ट) और बकाने रोग को जड़ से रोकता है।',
        },
      ],
    },
    sowing: {
      title: {
        en: 'Line Transplanting with Alleyways (20 cm × 15 cm)',
        te: 'బాటలతో కూడిన వరుస నాటు పద్ధతి',
        kn: 'ಸಾಲು ನಾಟಿ ಮತ್ತು ಗಾಳಿಗಾಗಿ ದಾರಿ (ಅಂತರ)',
        hi: 'कतारों में रोपाई एवं गलियां छोड़ना',
      },
      image: CROP_PRACTICE_IMAGES.paddy.sowing,
      imageCaption: {
        en: 'Line transplanting 2–3 seedlings per hill at shallow 2–3 cm depth with 30 cm alleys every 2 m',
        te: 'ప్రతి గుబురుకు 2-3 మొక్కల చొప్పున 20 × 15 సెం.మీ దూరంలో నాటడం మరియు బాటలు తీయడం',
        kn: 'ಪ್ರತಿ ಗುಂಪಿಗೆ 2-3 ಸಸಿಗಳಂತೆ ಸಾಲಿನಲ್ಲಿ ನಾಟಿ',
        hi: '20 सेमी × 15 सेमी की दूरी पर 2-3 पौध प्रति हिल रोपना एवं गलियां छोड़ना',
      },
      description: {
        en: 'Transplant 20–25 day old seedlings at 2–3 seedlings per hill. Maintain 20 cm × 15 cm spacing (33 hills/sq.m). Leave a 30 cm alleyway every 2 meters (skip 1 row) to allow sunlight penetration and stop Brown Planthopper (BPH) multiplication.',
        te: '20-25 రోజుల నారును కొండకు 2-3 మొక్కల చొప్పున 20 × 15 సెం.మీ ఎడంలో నాటాలి. ప్రతి 2 మీటర్లకు 30 సెం.మీ బాటలు తీయడం వల్ల గాలి వెలుతురు సోకి సుడిదోమ చేరదు.',
        kn: 'ಪ್ರತಿ 2 ಮೀಟರ್‌ಗೆ 30 ಸೆಂ.ಮೀ ದಾರಿ ಬಿಟ್ಟು ಸಾಲಿನಲ್ಲಿ ನಾಟಿ ಮಾಡಿ.',
        hi: '20-25 दिन की पौध को 20 × 15 सेमी पर रोपें। हर 2 मीटर पर 30 सेमी की गली छोड़ें ताकि बीपीएच कीट न पनपे।',
      },
      details: [
        {
          en: 'Shallow Depth: Plant only 2–3 cm deep. Deep planting (>5 cm) delays tillering by 15 days.',
          te: 'నాటే లోతు: 2-3 సెం.మీ లోతులోనే నాటాలి; లోతుగా నాటితే పిలకలు రావడం బాగా తగ్గుతుంది.',
          kn: '2-3 ಸೆಂ.ಮೀ ಆಳದಲ್ಲಿ ಮಾತ್ರ ನಾಟಿ ಮಾಡಿ.',
          hi: '2-3 सेमी उथली रोपाई करें, गहरी रोपाई से कल्ले कम निकलते हैं।',
        },
      ],
    },
  },
  // 4. Water and Weed Management
  waterAndWeedManagement: {
    irrigation: {
      title: {
        en: 'Alternate Wetting and Drying (AWD) & Critical Stages',
        te: 'ఆరుతడి నీటి యాజమాన్యం & కీలక దశలు',
        kn: 'ಆರುತಡಿ ನೀರಾವರಿ ಪದ್ಧತಿ ಮತ್ತು ಪ್ರಮುಖ ಹಂತಗಳು',
        hi: 'वैकल्पिक गीला-सूखा (एडब्ल्यूडी) एवं क्रांतिक अवस्थाएं',
      },
      image: CROP_PRACTICE_IMAGES.paddy.irrigation,
      imageCaption: {
        en: 'Perforated pani pipe monitoring water table 15 cm below soil before re-flooding',
        te: 'నీటి నిల్వను కొలిచే పానీ పైపుతో కూడిన ఆరుతడి నీటి యాజమాన్యం',
        kn: 'ಪಾನಿ ಪೈಪ್ ಬಳಸಿ ನೀರಿನ ಮಟ್ಟ ಪರೀಕ್ಷಿಸಿ ನೀರುಣಿಸುವಿಕೆ',
        hi: 'पानी पाइप द्वारा मिट्टी में नमी नापकर सिंचाई करने की विधि',
      },
      description: {
        en: 'Maintain 2 cm water for 7 days after transplanting for seedling establishment. During tillering, practice Alternate Wetting and Drying (AWD) by allowing water to disappear for 2 days until hairline cracks appear, then re-flood. Keep 5 cm standing water during Panicle Initiation and Flowering.',
        te: 'నాటిన మొదటి వారం రోజులు 2 సెం.మీ నీరు ఉంచాలి. పిలకలు వచ్చే దశలో పొలం ఆరి నెర్రలు వచ్చే వరకు ఉంచి మళ్ళీ నీరు పెట్టే ఆరుతడి పద్ధతి పాటించాలి. చిరుపొట్ట మరియు పూత దశలో 5 సెం.మీ నీరు తప్పనిసరి.',
        kn: 'ಪಿಲಕೆ ಬರುವಾಗ ಆರುತಡಿ ಅನುಸರಿಸಿ, ತೆನೆ ಮತ್ತು ಹೂವಾಡುವಾಗ 5 ಸೆಂ.ಮೀ ನೀರು ನಿಲ್ಲಿಸಿ.',
        hi: 'कल्ले निकलने पर गीला-सूखा तरीका अपनाएं। गभोट और पुष्पन अवस्था में 5 सेमी पानी अवश्य बनाए रखें।',
      },
      details: [
        {
          en: 'Saves 30% Water: Promotes deep root aeration and prevents accumulation of toxic soil sulphides.',
          te: 'లాభం: 30% నీరు ఆదా అవుతుంది, వేర్లకు ప్రాణవాయువు అంది పిలకలు ఎక్కువగా వస్తాయి.',
          kn: 'ಶೇ. 30 ನೀರು ಉಳಿತಾಯ ಮತ್ತು ಹೆಚ್ಚು ಪಿಲಕೆಗಳು.',
          hi: '30% पानी की बचत और जड़ों को ऑक्सीजन मिलने से अधिक कल्ले निकलते हैं।',
        },
      ],
    },
    weeding: {
      title: {
        en: 'Early Herbicide Application & Cono-Weeding',
        te: 'కలుపు మందుల పిచికారీ & కోనో వీడర్ విధానం',
        kn: 'ಕಳೆನಾಶಕ ಸಿಂಪರಣೆ ಮತ್ತು ಕೋನೋ ವೀಡರ್ ಬಳಕೆ',
        hi: 'शाकनाशी का प्रयोग एवं कोनो-वीडर द्वारा निराई',
      },
      image: CROP_PRACTICE_IMAGES.paddy.weeding,
      imageCaption: {
        en: 'Rotary cono-weeder incorporating weeds into mud between lines and aerating root rhizosphere',
        te: 'వరి సాళ్ళ మధ్య కోనో వీడర్ నడిపి కలుపును మట్టిలో తొక్కించడం',
        kn: 'ಸಾಲುಗಳ ನಡುವೆ ಕೋನೋ ವೀಡರ್ ಬಳಸಿ ಕಳೆ ತುಳಿಯುವುದು',
        hi: 'कतारों के बीच कोनो-वीडर चलाकर खरपतवार को मिट्टी में दबाना',
      },
      description: {
        en: 'Apply Pretilachlor 50% EC @ 500 ml/acre mixed with 20 kg sand within 3–5 days of transplanting in 2 cm standing water. At 15 and 30 DAT, run a rotary Cono-Weeder between rows to crush weeds into the puddle as green manure.',
        te: 'నాటిన 3-5 రోజుల్లో 2 సెం.మీ నీరు ఉన్నప్పుడు ప్రిటిలాక్లోర్ (500 మి.లీ/ఎకరాకు) ఇసుకలో కలిపి చల్లాలి. నాటిన 15 మరియు 30 రోజులకు కోనో వీడర్‌తో సాళ్ళ మధ్య ఉన్న కలుపును తొక్కించాలి.',
        kn: 'ನಾಟಿ ಮಾಡಿದ 3-5 ದಿನಗಳಲ್ಲಿ ಪ್ರಿಟಿಲಾಕ್ಲೋರ್ ಹಾಕಿ. 15 ಮತ್ತು 30 ದಿನಕ್ಕೆ ಕೋನೋ ವೀಡರ್ ಚಲಾಯಿಸಿ.',
        hi: 'रोपाई के 3-5 दिन में प्रिटिलाक्लोर डालें और 15 व 30 दिन पर कोनो-वीडर चलाएं।',
      },
      details: [
        {
          en: 'Rhizosphere Aeration: Cono-weeding injects oxygen into anaerobic mud, doubling root mass.',
          te: 'వేర్లకు బలం: కోనో వీడర్ వల్ల వేర్లకు గాలి తగిలి తెల్ల వేర్లు రెట్టింపు వేగంతో పెరుగుతాయి.',
          kn: 'ಬೇರುಗಳಿಗೆ ಗಾಳಿ ಸಿಕ್ಕು ಸಸ್ಯ ಹುಲುಸಾಗಿ ಬೆಳೆಯುತ್ತದೆ.',
          hi: 'जड़ों को हवा मिलती है जिससे सफेद जड़ें तेजी से बढ़ती हैं।',
        },
      ],
    },
  },
  // 5. Panicle Initiation Milestone
  criticalMilestone: {
    title: {
      en: 'Panicle Initiation & Flag Leaf Milestone',
      te: 'చిరుపొట్ట దశ (వెన్ను బయలుదేరే సమయం) & జెండా ఆకు సంరక్షణ',
      kn: 'ತೆನೆ ಮೂಡುವ ಹಂತ (ಗರ್ಭಾವಸ್ಥೆ) ಮತ್ತು ಧ್ವಜ ಎಲೆ ಸಂರಕ್ಷಣೆ',
      hi: 'गभोट अवस्था (बाली निकलना) एवं झंडा पत्ती प्रबंधन',
    },
    image: CROP_PRACTICE_IMAGES.paddy.milestone,
    imageCaption: {
      en: 'Emerging panicle within leaf sheath and fully green disease-free flag leaf supporting grain filling',
      te: 'పొట్టలోంచి బయటకు వస్తున్న నిండు వెన్ను మరియు పచ్చని జెండా ఆకు',
      kn: 'ಗರ್ಭಾವಸ್ಥೆಯಲ್ಲಿದ್ದ ತೆನೆ ಹೊರಬರುವ ಹಂತ ಮತ್ತು ಹಸಿರು ಧ್ವಜ ಎಲೆ',
      hi: 'गोभ से निकलती हुई बाली और दाना भराव हेतु पूर्णतः स्वस्थ झंडा पत्ती',
    },
    description: {
      en: 'Occurs around 60–70 DAT. The flag leaf provides 70% of total carbohydrates required for filling grains. Apply final split of Potash (MOP 20 kg/acre) + Neem Coated Urea (25 kg/acre). Protect flag leaves strictly from Leaf Folder and Neck Blast.',
      te: 'నాటిన 60-70 రోజులకు చిరుపొట్ట దశ వస్తుంది. జెండా ఆకు ద్వారానే గింజలకు 70% పిండిపదార్థాలు అందుతాయి. ఈ సమయంలో ఆఖరి దఫాగా ఎకరానికి 20 కిలోల పొటాష్ + 25 కిలోల యూరియా వేయాలి.',
      kn: '60-70 ದಿನಕ್ಕೆ ತೆನೆ ಬರುತ್ತದೆ. ಧ್ವಜ ಎಲೆಯನ್ನು ರೋಗಗಳಿಂದ ರಕ್ಷಿಸಿ, ಪೊಟ್ಯಾಶ್ ಹಾಕಿ.',
      hi: '60-70 दिन पर गभोट अवस्था में 20 किग्रा पोटाश और 25 किग्रा यूरिया डालें। झंडा पत्ती को रोगमुक्त रखें।',
    },
    details: [
      {
        en: 'Grain Filling Fuel: Potash translocates sugars directly into developing grains, eliminating tip chaffiness.',
        te: 'గింజ బరువు: పొటాష్ ఎరువు వెన్ను చివర ఉన్న గింజలు కూడా తాలు కాకుండా బరువుగా ఉండేలా చేస్తుంది.',
        kn: 'ಕಾಳು ಜೊಳ್ಳಾಗದಂತೆ ತಡೆಯುತ್ತದೆ.',
        hi: 'पोटाश दानों में ठोस भराव करता है और अंतिम दानों को खाली रहने से बचाता है।',
      },
    ],
  },
  // 6. Nutrients Master Plan
  nutrientsMasterPlan: {
    primary: [
      {
        nutrientName: 'Basal DAP 18:46:0',
        fertilizerProduct: 'Di-Ammonium Phosphate (DAP)',
        productImage: INPUT_PRODUCT_IMAGES.dap_18_46_0,
        category: 'primary',
        whenToApply: {
          en: 'Apply during final puddling just before transplanting.',
          te: 'ఆఖరి దమ్ము సమయంలో నాటడానికి ముందు వేయాలి.',
          kn: 'ಕಡೆಯ ಕೆಸರು ಮಾಡುವಾಗ ನಾಟಿ ಮುನ್ನ ಹಾಕಿ.',
          hi: 'अंतिम कदवा (पडलिंग) के समय रोपाई से पहले डालें।',
        },
        purpose: {
          en: 'Provides phosphorus in root zone for rapid seedling establishment and tillering node formation.',
          te: 'వేర్లు వేగంగా నాటుకోవడానికి మరియు పిలకలు ఎక్కువగా పుట్టడానికి భాస్వరం అందిస్తుంది.',
          kn: 'ಬೇರು ಗಟ್ಟಿಯಾಗಿ ಹೆಚ್ಚು ಪಿಲಕೆಗಳು ಬರಲು.',
          hi: 'शीघ्र जड़ विकास और अधिक कल्ले फूटने के लिए।',
        },
        howToApply: {
          en: 'Broadcast into mud @ 50 kg (1 bag) per acre.',
          te: 'ఎకరానికి 50 కిలోలు (1 బస్తా) దమ్ములో చల్లాలి.',
          kn: 'ಎಕರೆಗೆ 50 ಕೆಜಿ ಮಣ್ಣಿನಲ್ಲಿ ಚಲ್ಲಿ.',
          hi: '50 किग्रा प्रति एकड़ अंतिम कदवा में बिखरें।',
        },
        dosage: '50 kg/acre basal',
        precautions: {
          en: 'Incorporate well into mud before planting; do not broadcast on deep standing water.',
          te: 'ఎక్కువ నీరు ఉన్నప్పుడు చల్లకూడదు; దమ్ములో బాగా కలపాలి.',
          kn: 'ಹೆಚ್ಚು ನೀರಿರುವಾಗ ಹಾಕಬೇಡಿ.',
          hi: 'अधिक पानी होने पर न डालें, कीचड़ में अच्छी तरह मिलाएं।',
        },
      },
      {
        nutrientName: 'Muriate of Potash (MOP 0:0:60)',
        fertilizerProduct: 'Muriate of Potash (Potassium Chloride 60% K2O)',
        productImage: INPUT_PRODUCT_IMAGES.mop_0_0_60,
        category: 'primary',
        whenToApply: {
          en: 'Apply in 2 equal splits: 50% at final puddling (15 kg) and 50% at Panicle Initiation (15 kg).',
          te: 'రెండు దఫాలుగా: 15 కిలోలు ఆఖరి దమ్ములో, మరో 15 కిలోలు చిరుపొట్ట దశలో వేయాలి.',
          kn: 'ಎರಡು ಕಂತುಗಳಲ್ಲಿ: ಕಡೆಯ ಕೆಸರಿನಲ್ಲಿ 15 ಕೆಜಿ, ತೆನೆ ಮೂಡುವಾಗ 15 ಕೆಜಿ ಹಾಕಿ.',
          hi: 'दो भागों में: 15 किग्रा अंतिम कदवा में और 15 किग्रा गभोट अवस्था में डालें।',
        },
        purpose: {
          en: 'Strengthens stems against lodging, induces pest/disease immunity, and maximizes 1,000-grain weight.',
          te: 'వరి పైరు గాలివానకు పడిపోకుండా కాండం గట్టిపడటానికి, తెగుళ్ళను తట్టుకోవడానికి, ధాన్యం బరువు పెరగడానికి సహాయపడుతుంది.',
          kn: 'ಕಾಂಡ ಗಟ್ಟಿಯಾಗಿ ಬೆಳೆ ಬೀಳದಂತೆ ಮತ್ತು ಕಾಳು ತೂಕವಾಗಲು.',
          hi: 'पौधों को गिरने (लॉजिंग) से बचाता है और दानों का वजन बढ़ाता है।',
        },
        howToApply: {
          en: 'Broadcast into moist soil @ 15 kg per split (total 30 kg/acre).',
          te: 'తేమ గల నేలలో ఎకరానికి 15 కిలోలు చల్లాలి.',
          kn: 'ತೇವಾಂಶವಿರುವಾಗ ಎಕರೆಗೆ 15 ಕೆಜಿ ಚಲ್ಲಿ.',
          hi: '15 किग्रा प्रति एकड़ मिट्टी में बिखरें।',
        },
        dosage: '30 kg/acre total in 2 splits',
        precautions: {
          en: 'Do not miss the second split at panicle initiation; it is critical for grain filling.',
          te: 'చిరుపొట్ట దశలో వేసే రెండో దఫా పొటాష్‌ను ఎట్టి పరిస్థితుల్లోనూ మానకూడదు.',
          kn: 'ತೆನೆ ಬರುವಾಗ ಪೊಟ್ಯಾಶ್ ಹಾಕುವುದು ಮರೆಯಬೇಡಿ.',
          hi: 'गभोट अवस्था वाली दूसरी खुराक कभी न छोड़ें।',
        },
      },
    ],
    secondary: [
      {
        nutrientName: 'Zinc Sulphate 33% (Monohydrate)',
        fertilizerProduct: 'Zinc Sulphate Monohydrate (Zn 33%, S 15%)',
        productImage: INPUT_PRODUCT_IMAGES.zinc_sulphate_33,
        category: 'micronutrient',
        whenToApply: {
          en: 'Broadcast at 10–14 DAT or spray at tillering.',
          te: 'నాటిన 10-14 రోజులకు చల్లాలి లేదా పిలకల దశలో పిచికారీ చేయాలి.',
          kn: 'ನಾಟಿ ಮಾಡಿದ 10-14 ದಿನಕ್ಕೆ ಚಲ್ಲಿ.',
          hi: 'रोपाई के 10-14 दिन बाद बिखरें या कल्ले निकलते समय छिड़कें।',
        },
        purpose: {
          en: 'COMPULSORY: Prevents "Khaira" disease (rusty reddish-brown bronzing of lower leaves) and stunted tillering.',
          te: 'వరికి అత్యంత ముఖ్యమైనది: ఖైరా తెగులు (ఆకులపై తుప్పు రంగు మచ్చలు) రాకుండా కాపాడి పిలకలు బాగా వచ్చేలా చేస్తుంది.',
          kn: 'ಭತ್ತಕ್ಕೆ ಕಡ್ಡಾಯ: ಕೈರಾ ರೋಗ (ತುಕ್ಕು ಬಣ್ಣದ ಕಲೆಗಳು) ತಡೆಯುತ್ತದೆ.',
          hi: 'धान के लिए अनिवार्य: खैरा रोग (पत्तियों पर कत्थई धब्बे) से बचाता है और कल्ले बढ़ाता है।',
        },
        howToApply: {
          en: 'Soil: 10 kg per acre mixed with moist soil, OR Foliar: 2 g/L + 10 g urea/L.',
          te: 'నేలలో ఎకరానికి 10 కిలోలు లేదా లీటరు నీటికి 2 గ్రాముల జింక్ + 10 గ్రాముల యూరియా కలిపి పిచికారీ.',
          kn: 'ಎಕರೆಗೆ 10 ಕೆಜಿ ಮಣ್ಣಿನಲ್ಲಿ ಬೆರೆಸಿ ಹಾಕಿ.',
          hi: '10 किग्रा प्रति एकड़ मिट्टी में या 2 ग्राम/लीटर यूरिया के साथ छिड़काव करें।',
        },
        dosage: '10 kg/acre soil application',
        precautions: {
          en: 'NEVER mix Zinc Sulphate with DAP or Single Super Phosphate (forms insoluble Zinc Phosphate).',
          te: 'జింక్ సల్ఫేట్‌ను డిఎపి లేదా సూపర్ ఫాస్ఫేట్‌తో అస్సలు కలపకూడదు.',
          kn: 'ಡಿಎಪಿ ಜೊತೆ ಬೆರೆಸಲೇಬೇಡಿ.',
          hi: 'डीएपी या सुपर फॉस्फेट के साथ कभी न मिलाएं।',
        },
      },
    ],
    micronutrients: [
      {
        nutrientName: 'Ferrous Sulphate 19%',
        fertilizerProduct: 'Iron Sulphate (Fe 19%)',
        productImage: INPUT_PRODUCT_IMAGES.ferrous_sulphate,
        category: 'micronutrient',
        whenToApply: {
          en: 'Foliar spray at early nursery or active tillering in calcareous/alkaline soils.',
          te: 'సున్నపు నేలల్లో నారుమడిలో లేదా నాటిన 20-30 రోజులకు పిచికారీ చేయాలి.',
          kn: 'ಸುಣ್ಣದ ಅಂಶವಿರುವ ಮಣ್ಣಿನಲ್ಲಿ 20-30 ದಿನಕ್ಕೆ ಸಿಂಪಡಿಸಿ.',
          hi: 'चूनेदार मिट्टी में नर्सरी या कल्ले निकलने के समय छिड़कें।',
        },
        purpose: {
          en: 'Treats iron chlorosis (new emerging leaves turning completely bleached white or yellow).',
          te: 'ఇనుము లోపం వల్ల లేత ఆకులు తెల్లగా లేదా పసుపుగా మారడాన్ని నివారిస్తుంది.',
          kn: 'ಎಳೆಯ ಎಲೆಗಳು ಬಿಳಿಯಾಗುವುದನ್ನು ತಡೆಯುತ್ತದೆ.',
          hi: 'लोहे की कमी से नई पत्तियों का सफेद या पीला पड़ना ठीक करता है।',
        },
        howToApply: {
          en: 'Foliar spray @ 5 g Ferrous Sulphate + 2 g Citric acid per liter of water.',
          te: 'లీటరు నీటికి 5 గ్రాముల అన్నభేది (ఫెర్రస్ సల్ఫేట్) + 2 గ్రాముల నిమ్మ ఉప్పు కలిపి పిచికారీ చేయాలి.',
          kn: 'ಲೀಟರ್ ನೀರಿಗೆ 5 ಗ್ರಾಂ ಫೆರಸ್ ಸಲ್ಫೇಟ್ ಬೆರೆಸಿ ಸಿಂಪಡಿಸಿ.',
          hi: '5 ग्राम फेरस सल्फेट + 2 ग्राम नींबू का सत्व प्रति लीटर पानी में मिलाकर छिड़कें।',
        },
        dosage: '5 g/L foliar spray',
        precautions: {
          en: 'Always add citric acid (lemon salt) to keep iron in soluble ferrous form.',
          te: 'మందు బాగా పనిచేయడానికి నిమ్మ ఉప్పు తప్పనిసరిగా కలపాలి.',
          kn: 'ಲಿಂಬೆ ಉಪ್ಪು ಬೆರೆಸುವುದು ಕಡ್ಡಾಯ.',
          hi: 'नींबू का सत्व (साइट्रिक एसिड) अवश्य मिलाएं।',
        },
      },
    ],
  },
  // 7. Post-Harvest
  postHarvest: {
    maturity: {
      title: {
        en: 'Golden Panicle Maturity (85–90% Grains Ripe)',
        te: 'పంట పరిపక్వత లక్షణం (85-90% కంకులు బంగారు రంగులోకి మారడం)',
        kn: 'ಕೊಯ್ಲಿನ ಲಕ್ಷಣ (ಶೇ. 85-90 ತೆನೆಗಳು ಬಂಗಾರದ ಬಣ್ಣಕ್ಕೆ ತಿರುಗುವುದು)',
        hi: 'परिपक्वता की पहचान (85-90% बालियों का सुनहरा पीला होना)',
      },
      image: CROP_PRACTICE_IMAGES.paddy.maturity,
      imageCaption: {
        en: 'Upper and middle panicles turned bright straw-golden with hard flinty grains',
        te: 'కంకులు బంగారు పసుపు రంగులోకి మారి గింజలు గట్టిపడటం',
        kn: 'ತೆನೆಗಳು ಬಂಗಾರದ ಬಣ್ಣಕ್ಕೆ ತಿರುಗಿ ಕಾಳು ಗಟ್ಟಿಯಾಗುವುದು',
        hi: 'बालियों का चमकीला सुनहरा पीला होना और दाने का सख्त होना',
      },
      description: {
        en: 'Harvest when 85% to 90% of grains in panicles have turned bright straw-golden and the bottom grains are in hard dough stage. Drain the field water completely 10 to 12 days prior to harvest to firm up soil for combine harvester movement.',
        te: 'కంకుల్లో 85-90% గింజలు బంగారు రంగులోకి మారినప్పుడు కోయాలి. కంబైన్డ్ హార్వెస్టర్ మిషన్లు సులభంగా తిరగడానికి కోతకు 10-12 రోజుల ముందే పొలంలో నీటిని పూర్తిగా తీసివేయాలి.',
        kn: 'ಶೇ. 85-90 ಕಾಳುಗಳು ಬಂಗಾರದ ಬಣ್ಣಕ್ಕೆ ತಿರುಗಿದಾಗ ಕೊಯ್ಲು ಮಾಡಿ. 10 ದಿನ ಮುಂಚೆ ನೀರು ತೆಗೆಯಿರಿ.',
        hi: 'जब 85-90% बालियां सुनहरी पीली हो जाएं तब कटाई करें। कटाई से 10-12 दिन पहले खेत का पानी निकाल दें।',
      },
      details: [
        {
          en: 'Prevents Shattering: Over-matured crop suffers shattering losses up to 15% during cutting.',
          te: 'రాలడం నివారణ: పంట ముదిరిపోతే కోత సమయంలో ధాన్యం నేలరాలి నష్టం జరుగుతుంది.',
          kn: 'ಕಾಳು ಉದುರುವುದನ್ನು ತಡೆಯುತ್ತದೆ.',
          hi: 'फसल ज्यादा पकने पर दाना खेत में झड़ने लगता है।',
        },
      ],
    },
    harvesting: {
      title: {
        en: 'Combine Harvesting & Manual Reaping',
        te: 'కంబైన్డ్ హార్వెస్టర్ లేదా చేతితో కోత కోయడం',
        kn: 'ಕಟಾವು ಯಂತ್ರ ಅಥವಾ ಕೈಯಿಂದ ಕೊಯ್ಲು',
        hi: 'कंबाइन हार्वेस्टर या हंसिया द्वारा कटाई',
      },
      image: CROP_PRACTICE_IMAGES.paddy.harvesting,
      imageCaption: {
        en: 'Self-propelled track combine harvester cutting, threshing, and cleaning paddy simultaneously',
        te: 'వరిని కోసి, నూర్చి, శుభ్రపరిచే కంబైన్డ్ హార్వెస్టర్ యంత్రం',
        kn: 'ಒಂದೇ ಬಾರಿಗೆ ಕೊಯ್ಲು ಮತ್ತು ಒಕ್ಕಣೆ ಮಾಡುವ ಕಟಾವು ಯಂತ್ರ',
        hi: 'धान की एक साथ कटाई, गहाई और सफाई करने वाला कंबाइन हार्वेस्टर',
      },
      description: {
        en: 'Use modern track-type combine harvesters on dry soil. It cuts at 10 cm above ground, threshes, and winnows grains into tanker directly, eliminating manual labour and bird loss.',
        te: 'నేల ఆరిన తర్వాత కంబైన్డ్ హార్వెస్టర్ ద్వారా కోయడం వలన ఒకేసారి కోత, నూర్పిడి పూర్తయి శ్రమ ఆదా అవుతుంది.',
        kn: 'ಕಟಾವು ಯಂತ್ರ ಬಳಸಿ ಸಮಯ ಮತ್ತು ಖರ್ಚು ಉಳಿಸಿ.',
        hi: 'कंबाइन हार्वेस्टर का उपयोग करें जिससे समय और मजदूरी की भारी बचत होती है।',
      },
      details: [
        {
          en: 'Milling Recovery: Harvesting at 20–22% moisture prevents grain cracking and increases whole head rice recovery by 10%.',
          te: 'నూకలు తగ్గడం: సరైన తేమ ఉన్నప్పుడు కోస్తే మిల్లింగ్‌లో నూకలు కాకుండా పూర్తి బియ్యం రికవరీ పెరుగుతుంది.',
          kn: 'ಅಕ್ಕಿ ಒಡೆಯುವುದು ಕಡಿಮೆಯಾಗುತ್ತದೆ.',
          hi: 'सही समय पर कटाई करने से मिलिंग में चावल टूटता नहीं है।',
        },
      ],
    },
    dryingAndCuring: {
      title: {
        en: 'Sun Drying on Tarpaulin to 12–14% Moisture',
        te: 'టార్పాలిన్లపై 12-14% తేమ వచ్చే వరకు ఆరబెట్టడం',
        kn: 'ಟಾರ್ಪಲಿನ್ ಮೇಲೆ 12-14% ತೇವಾಂಶಕ್ಕೆ ಒಣಗಿಸುವುದು',
        hi: 'तिरपाल पर 12-14% नमी तक धूप में सुखाना',
      },
      image: CROP_PRACTICE_IMAGES.paddy.drying,
      imageCaption: {
        en: 'Spreading freshly threshed paddy thin (5 cm) on clean tarpaulin with periodic turning every 2 hours',
        te: 'టార్పాలిన్లపై 5 సెం.మీ మందాన ధాన్యం పరచి ప్రతి 2 గంటలకు తిరగేస్తూ ఆరబెట్టడం',
        kn: 'ಸ್ವಚ್ಛವಾದ ಟಾರ್ಪಲಿನ್ ಮೇಲೆ ಭತ್ತವನ್ನು ಹರಡಿ ತಿರುವಿ ಒಣಗಿಸುವುದು',
        hi: 'साफ तिरपाल पर 5 सेमी की परत में फैलाकर हर 2 घंटे में पलटते हुए सुखाना',
      },
      description: {
        en: 'Spread harvested grain in a 5 cm thin layer over clean tarpaulin sheets or concrete drying yards. Stir periodically every 2 hours during morning hours (8 AM to 12 PM). Avoid fierce midday sun (12 PM–2 PM) which cracks the grain endosperm.',
        te: 'శుభ్రమైన టార్పాలిన్లపై 5 సెం.మీ మందంలో ధాన్యాన్ని పలచగా పరచి, ప్రతి రెండు గంటలకొకసారి కలియబెట్టాలి. మధ్యాహ్నం 12 నుండి 2 గంటల వరకు ఎండ ఎక్కువగా ఉన్నప్పుడు ఆరబెడితే గింజ లోపల పగుళ్ళు ఏర్పడి నూకలవుతాయి.',
        kn: 'ಬೆಳಗಿನ ಬಿಸಿಲಿನಲ್ಲಿ ಒಣಗಿಸಿ, ಮಧ್ಯಾಹ್ನದ ಕಡು ಬಿಸಿಲಿನಲ್ಲಿ ಅಕ್ಕಿ ಒಡೆಯುತ್ತದೆ.',
        hi: 'सुबह 8 से 12 बजे तक सुखाएं। दोपहर 12 से 2 बजे की तेज धूप से बचाएं ताकि चावल टूटे नहीं।',
      },
      details: [
        {
          en: 'Safe Storage Moisture: 12% for seed paddy; 13–14% for commercial milling.',
          te: 'నిల్వ తేమ: విత్తనానికి 12% తేమ, అమ్మకానికి 13-14% తేమ ఉండాలి.',
          kn: 'ಶೇಖರಣೆಗೆ 12-14% ತೇವಾಂಶ ಇರಬೇಕು.',
          hi: 'बीज के लिए 12% और मिलिंग के लिए 13-14% नमी आवश्यक है।',
        },
      ],
    },
    storage: {
      title: {
        en: 'Hermetic Bag Storage & Pest Fumigation',
        te: 'హెర్మెటిక్ సూపర్ బ్యాగులు & ధాన్యం నిల్వ పద్ధతులు',
        kn: 'ಸೂಪರ್ ಬ್ಯಾಗ್ ಶೇಖರಣೆ ಮತ್ತು ಕೀಟ ನಿಯಂತ್ರಣ',
        hi: 'हर्मेटिक सुपर बैग भंडारण एवं कीट रोकथाम',
      },
      image: CROP_PRACTICE_IMAGES.paddy.storage,
      imageCaption: {
        en: 'Multi-layer hermetic airtight grain bags neatly stacked on wooden dunnage pallets in dry godown',
        te: 'చెక్క బల్లలపై గాలి చొరబడని సూపర్ బ్యాగులలో భద్రపరిచిన ధాన్యం',
        kn: 'ಮರದ ಹಲಗೆಗಳ ಮೇಲೆ ಗಾಳಿಯಾಡದ ಸೂಪರ್ ಬ್ಯಾಗ್ಗಳಲ್ಲಿ ಸಂಗ್ರಹಿಸಿದ ಭತ್ತ',
        hi: 'लकड़ी के तख्तों पर सीलबंद हर्मेटिक बैग में सुरक्षित रखा गया धान',
      },
      description: {
        en: 'Store dried paddy in multi-layer hermetic bags (PICS / GrainPro) or clean HDPE bags placed on wooden pallets 30 cm away from walls. For bulk gunny storage, place Aluminium Phosphide tablets (Celphos 3g/tonne) under gas-proof cover to control Rice Weevil (Sitophilus oryzae) and Grain Moth.',
        te: 'ఎండిన ధాన్యాన్ని గాలి చొరబడని హెర్మెటిక్ సూపర్ బ్యాగులలో నింపి, నేలకు మరియు గోడలకు తగలకుండా చెక్క బల్లలపై పేర్చాలి. పురుగు పట్టకుండా అల్యూమినియం ఫాస్ఫైడ్ మాత్రలు వేయాలి.',
        kn: 'ಗೋಡೆಯಿಂದ ದೂರ ಮರದ ಹಲಗೆಗಳ ಮೇಲೆ ಸೂಪರ್ ಬ್ಯಾಗ್ಗಳಲ್ಲಿ ಶೇಖರಿಸಿ.',
        hi: 'दीवार से 30 सेमी दूर लकड़ी के तख्तों पर हर्मेटिक बैग में रखें। घुन से बचाव हेतु एल्युमिनियम फॉस्फाइड का प्रयोग करें।',
      },
      details: [
        {
          en: 'Dunnage pallets prevent ground moisture absorption and fungal mycotoxins (aflatoxin).',
          te: 'చెక్క బల్లలు: నేల తేమ వల్ల ధాన్యం బూజు పట్టకుండా కాపాడుతాయి.',
          kn: 'ನೆಲದ ತೇವಾಂಶ ತಾಗದಂತೆ ರಕ್ಷಿಸುತ್ತದೆ.',
          hi: 'लकड़ी के तख्ते नीचे से सीलन नहीं आने देते जिससे फफूंद नहीं लगती।',
        },
      ],
    },
  },
};
