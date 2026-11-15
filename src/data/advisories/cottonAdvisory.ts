import { CropAdvisoryRecord } from '../cropAdvisoryData';
import { CROP_STAGE_IMAGES, INPUT_PRODUCT_IMAGES, CROP_PRACTICE_IMAGES } from '../cropStageImages';

export const COTTON_ADVISORY: CropAdvisoryRecord = {
  cropId: 'cotton',
  cropName: {
    en: 'Cotton',
    te: 'పత్తి',
    kn: 'ಹತ್ತಿ',
    hi: 'कपास',
  },
  category: {
    en: 'Commercial Fiber Crop',
    te: 'వాణిజ్య పీచు పంట',
    kn: 'ವಾಣಿಜ್ಯ ನಾರಿನ ಬೆಳೆ',
    hi: 'व्यावसायिक रेशा फसल',
  },
  icon: '☁️',
  cropImage: CROP_STAGE_IMAGES.cotton.cropImage,
  suitableSeason: {
    en: 'Kharif (June–July sowing under rainfed or irrigated conditions)',
    te: 'ఖరీఫ్ (జూన్-జూలై విత్తే కాలం)',
    kn: 'ಖಾರಿಫ್ (ಜೂನ್-ಜುಲೈ ಬಿತ್ತನೆ)',
    hi: 'खरीफ (जून-जुलाई बुवाई)',
  },
  soilRequirements: {
    en: 'Deep black cotton soils (Vertisols) or well-drained fertile red loamy soils. pH 6.5 to 8.0. Highly susceptible to waterlogging.',
    te: 'లోతైన నల్లరేగడి నేలలు లేదా నీరు ఇంకే గరప నేలలు శ్రేష్టం. pH 6.5 నుండి 8.0 మధ్య ఉండాలి. చేనులో నీరు నిల్వ ఉండరాదు.',
    kn: 'ಆಳವಾದ ಕಪ್ಪು ಹತ್ತಿ ಮಣ್ಣು ಅಥವಾ ಕೆಂಪು ಗೋಡು ಮಣ್ಣು. pH 6.5 ರಿಂದ 8.0 ಇರಬೇಕು.',
    hi: 'गहरी काली कपास वाली मिट्टी या उपजाऊ दोमट मिट्टी। पीएच मान 6.5 से 8.0 उपयुक्त है। जलभराव के प्रति संवेदनशील।',
  },
  seedAndSowing: {
    en: 'Seed rate: 1–1.5 packets (450g each)/acre (Bt Cotton hybrids). Dibble 1 seed per hill at 90 cm × 60 cm (rainfed) or 120 cm × 60 cm (irrigated).',
    te: 'విత్తన మోతాదు: ఎకరానికి 1-1.5 ప్యాకెట్లు (బిటి పత్తి హైబ్రిడ్లు). గుంటుక లేదా చేతితో కుదురుకు ఒక విత్తనం చొప్పున 90 సెం.మీ × 60 సెం.మీ దూరంలో నాటాలి.',
    kn: 'ಬೀಜದ ಪ್ರಮಾಣ: ಎಕರೆಗೆ 1-1.5 ಪ್ಯಾಕೆಟ್ (ಬಿಟಿ ಹತ್ತಿ). ಸಾಲಿನ ಅಂತರ 90-120 ಸೆಂ.ಮೀ × 60 ಸೆಂ.ಮೀ ಇರಲಿ.',
    hi: 'बीज दर: 1-1.5 पैकेट (450 ग्राम)/एकड़ (बीटी कॉटन)। कतार से कतार 90-120 सेमी और पौधे से पौधा 60 सेमी दूरी पर 1 बीज बोएं।',
  },
  cropDuration: {
    en: '150 to 180 days.',
    te: '150 నుండి 180 రోజులు.',
    kn: '150 ರಿಂದ 180 ದಿನಗಳು.',
    hi: '150 से 180 दिन।',
  },
  stages: [
    {
      id: 'cot_stage_1',
      order: 1,
      name: {
        en: '1. Sowing & Seedling Emergence Stage',
        te: '1. విత్తడం & మొలక దశ',
        kn: '1. ಬಿತ್ತನೆ ಮತ್ತು ಮೊಳಕೆಯೊಡೆಯುವ ಹಂತ',
        hi: '1. बुवाई एवं अंकुरण अवस्था',
      },
      timing: {
        en: '0 to 25 Days After Sowing (DAS)',
        te: 'విత్తిన 0 నుండి 25 రోజులు',
        kn: 'ಬಿತ್ತಿದ 0 ರಿಂದ 25 ದಿನಗಳು',
        hi: 'बुवाई के 0 से 25 दिन',
      },
      stageImage: CROP_STAGE_IMAGES.cotton.stages.cot_stage_1,
      whatToDo: {
        en: '1. Treat seeds with Imidacloprid 70% WS (5g/kg) to protect from sucking pests for initial 30 days.\n2. Dibble seed at 3–4 cm depth in moist soil.\n3. Thin out weak seedlings at 15 DAS leaving one healthy seedling per hill.\n4. Inter-cultivate with blade harrow at 20 DAS to mulch soil and destroy weeds.',
        te: '1. విత్తనాలను ఇమిడాక్లోప్రిడ్ (5 గ్రా/కిలో)తో విత్తన శుద్ధి చేసుకోవాలి, దీనివల్ల మొదటి 30 రోజులు రసం పీల్చే పురుగులు ఆశించవు.\n2. తేమ ఉన్నప్పుడు 3-4 సెం.మీ లోతులో విత్తనాన్ని నాటాలి.\n3. విత్తిన 15 రోజులకు పలచనం చేసి కుదురుకు ఒక ఆరోగ్యవంతమైన మొక్కను మాత్రమే ఉంచాలి.\n4. 20వ రోజున గుంటుక లేదా దంతితో అంతరకృషి చేసి నేలను గుల్లబరచి కలుపును నివారించాలి.',
        kn: '1. ಬೀಜಕ್ಕೆ ಇಮಿಡಾಕ್ಲೋಪ್ರಿಡ್ ಲೇಪಿಸಿ ಬಿತ್ತನೆ ಮಾಡಿ.\n2. ತೇವಾಂಶವಿರುವಾಗ 3-4 ಸೆಂ.ಮೀ ಆಳದಲ್ಲಿ ಬಿತ್ತಿ.\n3. 15 ದಿನಗಳಲ್ಲಿ ಕುಡಿಗೆ ಒಂದೇ ಗಿಡ ಬಿಟ್ಟು ಉಳಿದ ಸಸಿಗಳನ್ನು ತೆಗೆಯಿರಿ.\n4. 20 ದಿನಗಳಲ್ಲಿ ಎಡೆಕುಂಟೆ ಹೊಡೆದು ಕಳೆ ನಿಯಂತ್ರಿಸಿ.',
        hi: '1. बुवाई से पहले बीजों को इमिडाक्लोप्रिड (5 ग्राम/किग्रा) से उपचारित करें ताकि 30 दिन तक रस चूसक कीट न लगें।\n2. 3-4 सेमी गहराई पर पर्याप्त नमी में बीज बोएं।\n3. 15 दिन बाद छंटाई (थिनिंग) करके प्रति स्थान एक ही स्वस्थ पौधा रखें।\n4. 20 दिन बाद कुल्पा चलाकर खेत में गोड़ाई करें।',
      },
      irrigationGuide: {
        en: 'Provide light life irrigation on day 4–5 if topsoil is dry; avoid standing water.',
        te: 'తేమ తక్కువగా ఉంటే 4-5వ రోజున తేలికపాటి తడి ఇవ్వాలి; నీరు నిల్వ ఉండరాదు.',
        kn: 'ಮಣ್ಣು ಒಣಗಿದ್ದರೆ 4-5 ನೇ ದಿನ ಲಘು ನೀರು ನೀಡಿ.',
        hi: 'मिट्टी सूखने पर 4-5 दिन पर हल्की सिंचाई करें; पानी जमा न होने दें।',
      },
      weatherPrecaution: {
        en: 'Heavy rain causing waterlogging within 7 days of sowing leads to seedling wilt; provide instant drain furrows.',
        te: 'విత్తిన మొదటి వారంలో భారీ వర్షం పడి నీరు నిలిస్తే మొలక కుళ్ళిపోతుంది, వెంటనే నీటిని బయటకు పంపాలి.',
        kn: 'ಮಳೆ ನೀರು ಹೊಲದಲ್ಲಿ ನಿಲ್ಲದಂತೆ ಬಸಿದು ಹೋಗಲು ದಾರಿ ಮಾಡಿ.',
        hi: 'शुरुआती दिनों में जलभराव से पौध सूख जाती है, तुरंत निकासी की व्यवस्था करें।',
      },
      fertilizers: [
        {
          productName: 'Di-Ammonium Phosphate (DAP 18:46:0) + MOP',
          productImage: INPUT_PRODUCT_IMAGES.dap,
          category: 'fertilizer',
          whenToApply: {
            en: 'Basal application placed 5 cm away and 5 cm deeper than seed.',
            te: 'విత్తే సమయంలో విత్తనానికి 5 సెం.మీ పక్కన మరియు లోతుగా వేయాలి.',
            kn: 'ಬಿತ್ತನೆ ಸಮಯದಲ್ಲಿ ಸಾಲಿನಲ್ಲಿ ಹಾಕಿ.',
            hi: 'बुवाई के समय बीज से 5 सेमी दूर और गहरा डालें।',
          },
          purpose: {
            en: 'Phosphorus accelerates deep taproot penetration into subsoil for drought resilience.',
            te: 'భాస్వరం తల్లివేరు లోతుగా భూమిలోకి చొచ్చుకుపోయేలా చేసి వర్షాభావ పరిస్థితులను తట్టుకునేలా చేస్తుంది.',
            kn: 'ಬೇರುಗಳು ಆಳವಾಗಿ ಇಳಿಯಲು ರಂಜಕ ಸಹಕಾರಿ.',
            hi: 'मूसला जड़ को गहराई तक ले जाने में फॉस्फोरस मदद करता है।',
          },
          applicationMethod: {
            en: 'Band placement along rows.',
            te: 'సాలుల్లో పక్కగా వేయాలి.',
            kn: 'ಸಾಲಿನಲ್ಲಿ ಹಾಕಿ.',
            hi: 'कतारों में साइड में डालें।',
          },
          dosage: '50 kg DAP + 20 kg MOP per acre',
          precautions: {
            en: 'Never place fertilizer in direct contact with seed.',
            te: 'ఎరువును విత్తనానికి నేరుగా తాకేలా వేయరాదు.',
            kn: 'ಗೊಬ್ಬರವನ್ನು ಬೀಜಕ್ಕೆ ನೇರವಾಗಿ ತಾಗಿಸಬೇಡಿ.',
            hi: 'खाद को सीधे बीज के संपर्क में न आने दें।',
          },
        },
      ],
      pestsAndDiseases: [],
    },
    {
      id: 'cot_stage_2',
      order: 2,
      name: {
        en: '2. Vegetative Branching & Square Formation (Early Squaring)',
        te: '2. కొమ్మలు వేసే & గుడ్డి మొగ్గ దశ (స్క్వేరింగ్)',
        kn: '2. ಕವಲೊಡೆಯುವ ಮತ್ತು ಹೂಮೊಗ್ಗು ಕಟ್ಟುವ ಹಂತ',
        hi: '2. वानस्पतिक शाखाएं एवं कली (स्क्वायर) बनने की अवस्था',
      },
      timing: {
        en: '25 to 60 DAS',
        te: 'విత్తిన 25 నుండి 60 రోజులు',
        kn: 'ಬಿತ್ತಿದ 25 ರಿಂದ 60 ದಿನಗಳು',
        hi: 'बुवाई के 25 से 60 दिन',
      },
      stageImage: CROP_STAGE_IMAGES.cotton.stages.cot_stage_2,
      whatToDo: {
        en: '1. Top-dress 1st split Urea (35kg) + MOP (15kg/acre) at 35 DAS.\n2. Earth-up soil around plant stems at 45 DAS to support growing canopy and facilitate furrow irrigation.\n3. Spray 19:19:19 (5g/L) + Magnesium Sulphate (10g/L) to prevent leaf reddening.\n4. Install yellow & blue sticky traps (10 each/acre) to control Jassids and Thrips.',
        te: '1. విత్తిన 35 రోజులకు మొదటి విడత యూరియా (35 కిలోలు) మరియు MOP (15 కిలోలు) మొక్కల మొదళ్లలో వేయాలి.\n2. 45వ రోజున మొక్క మొదళ్ల వద్ద మట్టిని ఎగదోయడం (ఎర్తింగ్-అప్) ద్వారా మొక్క నిలదొక్కుకుంటుంది.\n3. ఆకులు ఎర్రబారకుండా 19-19-19 (5 గ్రా/లీ) మరియు మెగ్నీషియం సల్ఫేట్ (10 గ్రా/లీ) పిచికారీ చేయాలి.\n4. పచ్చదోమ మరియు తామర పురుగుల కోసం ఎకరానికి 10 పసుపు, 10 నీలి జిగురు అట్టలు పెట్టాలి.',
        kn: '1. 35 ದಿನಗಳಲ್ಲಿ ಯೂರಿಯಾ ಮತ್ತು ಪೊಟ್ಯಾಶ್ ಮೇಲುಗೊಬ್ಬರವಾಗಿ ನೀಡಿ.\n2. 45 ದಿನಗಳಲ್ಲಿ ಗಿಡದ ಬುಡಕ್ಕೆ ಮಣ್ಣು ಏರಿಸಿ.\n3. ಎಲೆ ಕೆಂಪಾಗುವುದನ್ನು ತಡೆಯಲು ಮೆಗ್ನೀಸಿಯಮ್ ಸಲ್ಫೇಟ್ ಸಿಂಪಡಿಸಿ.\n4. ಹಳದಿ ಮತ್ತು ನೀಲಿ ಬಲೆಗಳನ್ನು ಅಳವಡಿಸಿ.',
        hi: '1. बुवाई के 35 दिन बाद पहली यूरिया (35 किग्रा) और एमओपी (15 किग्रा) प्रति एकड़ दें।\n2. 45 दिन बाद पौधों की जड़ों पर मिट्टी चढ़ाएं (अर्थिंग-अप) ताकि पौधे मजबूत रहें।\n3. पत्तियां लाल होने से रोकने के लिए 19:19:19 (5 ग्राम) + मैग्नीशियम सल्फेट (10 ग्राम/लीटर) का छिड़काव करें।\n4. हरा तेला और थ्रिप्स के लिए पीले व नीले कार्ड लगाएं।',
      },
      irrigationGuide: {
        en: 'Irrigate alternate furrows every 10–14 days in dry spells. Cotton does not tolerate damp soggy roots.',
        te: 'వర్షాభావ పరిస్థితుల్లో సాలు విడిచి సాలు పద్ధతిలో 10-14 రోజులకు ఒకసారి తడి ఇవ్వాలి.',
        kn: '10-14 ದಿನಗಳಿಗೊಮ್ಮೆ ಸಾಲು ಬಿಟ್ಟು ಸಾಲು ನೀರಾವರಿ ನೀಡಿ.',
        hi: 'सूखे के समय 10-14 दिन के अंतराल पर एक कतार छोड़कर सिंचाई करें।',
      },
      weatherPrecaution: {
        en: 'Water stagnation for >24 hours triggers immediate squaring drop and yellowing.',
        te: '24 గంటలకు మించి చేనులో నీరు నిలిస్తే పూత మొగ్గలు రాలిపోయి ఆకులు పసుపుబారతాయి.',
        kn: 'ಹೊಲದಲ್ಲಿ ನೀರು ನಿಲ್ಲದಂತೆ ತಕ್ಷಣ ಬಸಿದು ಹೋಗಲು ದಾರಿ ಮಾಡಿ.',
        hi: '24 घंटे से ज्यादा पानी जमा रहने से कलियां झड़ जाती हैं।',
      },
      fertilizers: [
        {
          productName: 'Neem Coated Urea + Magnesium Sulphate (MgSO4)',
          productImage: INPUT_PRODUCT_IMAGES.urea,
          category: 'fertilizer',
          whenToApply: {
            en: 'Top-dress at 35–40 DAS in moist root zone.',
            te: 'విత్తిన 35-40 రోజుల వద్ద నేలలో తేమ ఉన్నప్పుడు వేయాలి.',
            kn: '35-40 ದಿನಗಳಲ್ಲಿ ತೇವಾಂಶವಿರುವಾಗ ಬುಡಕ್ಕೆ ಹಾಕಿ.',
            hi: 'बुवाई के 35-40 दिन बाद मिट्टी में नमी होने पर डालें।',
          },
          purpose: {
            en: 'Promotes rapid formation of sympodial fruiting branches; Magnesium prevents red leaf disease.',
            te: 'కాయలు కాసే కొమ్మలు ఎక్కువగా రావడానికి, ఆకులు ఎర్రబారకుండా పచ్చగా ఉండటానికి సహాయపడుతుంది.',
            kn: 'ಹೂ ಬಿಡುವ ಕವಲುಗಳು ಹೆಚ್ಚಲು ಮತ್ತು ಎಲೆ ಕೆಂಪಾಗುವುದನ್ನು ತಡೆಯಲು ಸಹಕಾರಿ.',
            hi: 'फल देने वाली शाखाओं की संख्या बढ़ाने और पत्तियों को लाल होने से बचाने के लिए जरूरी है।',
          },
          applicationMethod: {
            en: 'Side dress 10 cm away from plant stem and cover with soil.',
            te: 'మొక్క మొదలుకు 10 సెం.మీ దూరంలో వేసి మట్టి కప్పాలి.',
            kn: 'ಗಿಡದ ಬುಡದಿಂದ 10 ಸೆಂ.ಮೀ ದೂರದಲ್ಲಿ ಹಾಕಿ ಮಣ್ಣು ಮುಚ್ಚಿ.',
            hi: 'पौधे के तने से 10 सेमी दूर डालकर मिट्टी से ढक दें।',
          },
          dosage: '35 kg Urea + 15 kg MOP + 10 kg Magnesium Sulphate per acre',
          precautions: {
            en: 'Always cover fertilizer with moist soil during earthing up.',
            te: 'ఎరువు వేసిన తర్వాత మట్టిని కప్పడం మర్చిపోకూడదు.',
            kn: 'ಗೊಬ್ಬರದ ಮೇಲೆ ಮಣ್ಣು ಮುಚ್ಚಿ.',
            hi: 'खाद डालने के बाद मिट्टी जरूर चढ़ाएं।',
          },
        },
      ],
      pestsAndDiseases: [
        {
          name: {
            en: 'Cotton Leafhopper / Jassid (Amrasca biguttula)',
            te: 'పచ్చదోమ (జాసిడ్స్)',
            kn: 'ಹಸಿರು ಜಿಗಿಹುಳು (ಜಾಸಿಡ್)',
            hi: 'हरा फुदका (जैसिड)',
          },
          problemType: 'pest',
          symptomImage: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&auto=format&fit=crop&q=80',
          symptoms: {
            en: 'Downward curling of leaves; yellowing and burnt-red margins ("hopper burn") resulting in crinkled leaves.',
            te: 'ఆకుల అంచులు కిందికి ముడుచుకుపోయి పసుపు రంగులోకి మారి చివరకు ఎర్రగా మాడిపోతాయి (హాపర్ బర్న్).',
            kn: 'ಎಲೆಗಳ ಅಂಚು ಕೆಳಮುಖವಾಗಿ ಮುದುರಿಕೊಂಡು ಕೆಂಪು ಬಣ್ಣಕ್ಕೆ ತಿರುಗಿ ಒಣಗುತ್ತವೆ.',
            hi: 'पत्तियों के किनारे नीचे की ओर मुड़ जाते हैं, पीले पड़कर लाल-कत्थई होकर सूख जाते हैं।',
          },
          prevention: {
            en: 'Install yellow sticky traps (10/acre); spray 5% NSKE (Neem Seed Kernel Extract).',
            te: 'ఎకరానికి 10 పసుపు జిగురు అట్టలు పెట్టాలి, 5% వేప గింజల కషాయం పిచికారీ చేయాలి.',
            kn: 'ಹಳದಿ ಬಲೆ ಅಳವಡಿಸಿ, ಬೇವಿನ ಕಷಾಯ ಸಿಂಪಡಿಸಿ.',
            hi: 'पीले स्टिकी ट्रैप लगाएं और नीम के तेल का छिड़काव करें।',
          },
          treatment: {
            en: 'Spray Flonicamid 50% WG (Ulala 0.4g/L) or Dinotefuran 20% SG (0.5g/L).',
            te: 'లీటరు నీటికి 0.4 గ్రాముల ఉలాలా లేదా 0.5 గ్రాముల డైనోటెఫురాన్ కలిపి పిచికారీ చేయాలి.',
            kn: 'ಉಲಾಲಾ (0.4 ಗ್ರಾಂ/ಲೀಟರ್) ಸಿಂಪಡಿಸಿ.',
            hi: 'उलाला (0.4 ग्राम/लीटर) या डाइनोटेफुरान (0.5 ग्राम/लीटर) का छिड़काव करें।',
          },
          recommendedProduct: 'Flonicamid 50% WG (Ulala)',
          productImage: INPUT_PRODUCT_IMAGES.imidacloprid,
          applicationTiming: {
            en: 'Spray at ETL: 2 nymphs per leaf on top leaves.',
            te: 'పై ఆకులపై ఆకుకు 2 పచ్చదోమ పిల్లలు కనిపించిన వెంటనే పిచికారీ చేయాలి.',
            kn: 'ಎಲೆಗೆ 2 ಹುಳುಗಳು ಕಂಡ ತಕ್ಷಣ ಸಿಂಪಡಿಸಿ.',
            hi: 'प्रति पत्ती 2 कीट दिखने पर तुरंत छिड़काव करें।',
          },
        },
      ],
    },
    {
      id: 'cot_stage_3',
      order: 3,
      name: {
        en: '3. Flowering & Boll Setting Stage',
        te: '3. పూత & కాయ (కాత) కట్టే దశ',
        kn: '3. ಹೂವು ಮತ್ತು ಕಾಯಿ ಕಟ್ಟುವ ಹಂತ',
        hi: '3. पुष्पन एवं गूलर (बॉल) बनने की अवस्था',
      },
      timing: {
        en: '60 to 90 DAS',
        te: 'విత్తిన 60 నుండి 90 రోజులు',
        kn: 'ಬಿತ್ತಿದ 60 ರಿಂದ 90 ದಿನಗಳು',
        hi: 'बुवाई के 60 से 90 दिन',
      },
      stageImage: CROP_STAGE_IMAGES.cotton.stages.cot_stage_3,
      whatToDo: {
        en: '1. Top dress final Urea (30kg) + MOP (20kg/acre) at 60 DAS.\n2. Foliar spray 13:0:45 (10g/L) + Boron 20% (1g/L) to prevent square and young boll dropping.\n3. Install Pink Bollworm pheromone traps (8 traps/acre) with Pectino-lure.\n4. Detop (nip off terminal shoot tip) at 80–90 DAS to restrict apical height to 4.5–5 feet.',
        te: '1. 60వ రోజున ఆఖరి విడత యూరియా (30 కిలోలు) మరియు MOP (20 కిలోలు) వేయాలి.\n2. పూత, పిందె రాలకుండా ఉండటానికి లీటరు నీటికి 10 గ్రాముల 13-0-45 మరియు 1 గ్రాము బోరాన్ 20% పిచికారీ చేయాలి.\n3. గులాబీ రంగు కాయతొలుచు పురుగు (పింక్ బోల్‌వార్మ్) నిఘా కోసం ఎకరానికి 8 లింగాకర్షక బుట్టలు పెట్టాలి.\n4. మొక్క 4.5 నుండి 5 అడుగుల ఎత్తు పెరిగిన తర్వాత పై కొనను తుంచివేయాలి (డీటాపింగ్), దీనివల్ల కొమ్మలు లావై కాయలు బాగా పడతాయి.',
        kn: '1. 60 ದಿನಗಳಲ್ಲಿ ಕೊನೆಯ ಯೂರಿಯಾ ಮತ್ತು ಪೊಟ್ಯಾಶ್ ಹಾಕಿ.\n2. ಹೂ ಮತ್ತು ಕಾಯಿ ಉದುರುವುದನ್ನು ತಡೆಯಲು 13:0:45 ಮತ್ತು ಬೋರಾನ್ ಸಿಂಪಡಿಸಿ.\n3. ಗುಲಾಬಿ ಕಾಯಿ ಕೊರೆಯುವ ಹುಳುವಿಗೆ ಮೋಹಕ ಬಲೆ ಅಳವಡಿಸಿ.\n4. ಗಿಡದ ತುದಿಯನ್ನು ಚಿವುಟಿ ಎತ್ತರ ನಿಯಂತ್ರಿಸಿ.',
        hi: '1. 60 दिन पर अंतिम यूरिया (30 किग्रा) और एमओपी (20 किग्रा) डालें।\n2. कली व गूलर झड़ने से रोकने के लिए 13:0:45 (10 ग्राम) + बोरॉन (1 ग्राम/लीटर) का छिड़काव करें।\n3. गुलाबी सुंडी के लिए 8 फेरोमोन ट्रैप प्रति एकड़ लगाएं।\n4. 80-90 दिन पर पौधे का ऊपरी सिरा तोड़ दें (डी-टॉपिंग) ताकि कद नियंत्रित रहे और फल बड़े बनें।',
      },
      irrigationGuide: {
        en: 'CRITICAL MOISTURE PERIOD. Water stress during flowering causes massive shedding of squares and young bolls.',
        te: 'అత్యంత కీలకమైన దశ! ఈ సమయంలో నీటి ఎద్దడి వస్తే పూత, పిందె విపరీతంగా రాలిపోతుంది.',
        kn: 'ಅತಿ ಮುಖ್ಯ ಹಂತ. ನೀರಿನ ಕೊರತೆಯಾದರೆ ಹೂ-ಕಾಯಿ ಉದುರುತ್ತದೆ.',
        hi: 'अत्यंत महत्वपूर्ण अवस्था! पानी की कमी से फूल और छोटे गूलर भारी मात्रा में गिर जाते हैं।',
      },
      weatherPrecaution: {
        en: 'Continuous cloudy overcast weather causes physiological shedding of young squares; spray Planofix (0.25ml/4.5L water) to retain buds.',
        te: 'వరుసగా మబ్బులు పట్టి ఉంటే పూత రాలిపోతుంది, ప్లానోఫిక్స్ పిచికారీ చేసి పూత రాలకుండా కాపాడుకోవాలి.',
        kn: 'ಮೋಡ ಕವಿದ ವಾತಾವರಣವಿದ್ದರೆ ಹೂ ಉದುರದಂತೆ ಪ್ಲಾನೋಫಿಕ್ಸ್ ಸಿಂಪಡಿಸಿ.',
        hi: 'लगातार बादल रहने पर कलियां झड़ने लगती हैं, प्लेनोफिक्स का छिड़काव करें।',
      },
      fertilizers: [
        {
          productName: '13:00:45 Potassium Nitrate + Boron 20%',
          productImage: INPUT_PRODUCT_IMAGES.potassium_nitrate_13_0_45,
          category: 'fertilizer',
          whenToApply: {
            en: 'Foliar spray at 65 and 80 DAS during peak flowering.',
            te: 'విత్తిన 65 మరియు 80 రోజుల వద్ద పూత జోరుగా ఉన్నప్పుడు పిచికారీ చేయాలి.',
            kn: '65 ಮತ್ತು 80 ದಿನಗಳಲ್ಲಿ ಹೂಬಿಡುವಾಗ ಸಿಂಪಡಿಸಿ.',
            hi: '65 और 80 दिन पर पुष्पन के समय पत्तियों पर छिड़काव करें।',
          },
          purpose: {
            en: 'Drastically halts boll shedding, delivers Potassium for lint elongation, and Boron ensures complete boll locule filling.',
            te: 'పూత మరియు పిందె రాలకుండా ఆపుతుంది; దూది నాణ్యతను, కాయ సైజును పెంచుతుంది.',
            kn: 'ಹೂ-ಕಾಯಿ ಉದುರುವುದನ್ನು ನಿಲ್ಲಿಸುತ್ತದೆ ಮತ್ತು ಹತ್ತಿಯ ಗುಣಮಟ್ಟ ಹೆಚ್ಚಿಸುತ್ತದೆ.',
            hi: 'गूलर झड़ने से रोकता है और रेशे की लंबाई व गुणवत्ता बढ़ाता है।',
          },
          applicationMethod: {
            en: 'Foliar spray in late afternoon.',
            te: 'సాయంత్రం వేళల్లో పిచికారీ చేయాలి.',
            kn: 'ಸಂಜೆ ವೇಳೆ ಸಿಂಪಡಿಸಿ.',
            hi: 'शाम के समय पत्तियों पर छिड़काव करें।',
          },
          dosage: '10g 13:0:45 + 1g Boron 20% per liter of water',
          precautions: {
            en: 'Never exceed recommended Boron dose.',
            te: 'బోరాన్ మోతాదును మించకూడదు.',
            kn: 'ಬೋರಾನ್ ಪ್ರಮಾಣ ಹೆಚ್ಚಿಸಬೇಡಿ.',
            hi: 'बोरॉन की मात्रा न बढ़ाएं।',
          },
        },
      ],
      pestsAndDiseases: [
        {
          name: {
            en: 'Pink Bollworm (Pectinophora gossypiella)',
            te: 'గులాబీ రంగు కాయతొలుచు పురుగు (పింక్ బోల్‌వార్మ్)',
            kn: 'ಗುಲಾಬಿ ಕಾಯಿ ಕೊರೆಯುವ ಹುಳು',
            hi: 'गुलाबी सुंडी (पिंक बॉलवर्म)',
          },
          problemType: 'pest',
          symptomImage: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&auto=format&fit=crop&q=80',
          symptoms: {
            en: 'Rosette flowers (petals twist and remain closed like a rose bud); tiny entry holes sealed over in developing green bolls; stained lint and eaten seeds.',
            te: 'పూలు రోజా పువ్వు లాగా విచ్చుకోకుండా ముడుచుకుపోతాయి (రోసెట్ పూలు); కాయ లోపలికి తొలిచి గింజలను తిని దూదిని నల్లగా మారుస్తాయి.',
            kn: 'ಹೂವುಗಳು ಗುಲಾಬಿ ಮೊಗ್ಗಿನಂತೆ ಮುದುರಿಕೊಳ್ಳುತ್ತವೆ; ಕಾಯಿಯೊಳಗೆ ನುಗ್ಗಿ ಬೀಜ ಮತ್ತು ಹತ್ತಿ ಹಾಳುಮಾಡುತ್ತವೆ.',
            hi: 'फूल गुलाब की कली की तरह बंद रह जाते हैं (रोसेट फूल); गूलर के अंदर घुसकर बीजों को खाती है और रुई को दागदार बना देती है।',
          },
          prevention: {
            en: 'Install 8 pheromone traps/acre with Pectino-lure; inspect 20 flowers weekly.',
            te: 'ఎకరానికి 8 లింగాకర్షక బుట్టలు పెట్టి గులాబీ పురుగు ఉనికిని గమనించాలి.',
            kn: 'ಎಕರೆಗೆ 8 ಮೋಹಕ ಬಲೆಗಳನ್ನು ಅಳವಡಿಸಿ.',
            hi: '8 फेरोमोन ट्रैप प्रति एकड़ लगाएं और साप्ताहिक निगरानी करें।',
          },
          treatment: {
            en: 'Spray Profenofos 50% EC (2ml/L) or Emamectin Benzoate 5% SG (0.5g/L) or Chlorantraniliprole (0.3ml/L).',
            te: 'లీటరు నీటికి 2 మి.లీ ప్రొఫెనోఫాస్ లేదా 0.5 గ్రాముల ఎమామెక్టిన్ బెంజోయేట్ కలిపి పిచికారీ చేయాలి.',
            kn: 'ಪ್ರೊಫೆನೋಫಾಸ್ (2 ಮಿ.ಲೀ/ಲೀಟರ್) ಅಥವಾ ಎಮಾಮೆಕ್ಟಿನ್ ಸಿಂಪಡಿಸಿ.',
            hi: 'प्रोफेनोफॉस (2 मिली/लीटर) या एमामेक्टिन बेंजोएट (0.5 ग्राम/लीटर) का छिड़काव करें।',
          },
          recommendedProduct: 'Profenofos 50% EC / Emamectin Benzoate 5% SG',
          productImage: INPUT_PRODUCT_IMAGES.coragen,
          applicationTiming: {
            en: 'Spray at ETL: 8 moths/trap/day for 3 consecutive days or 10% rosette flowers.',
            te: 'వరుసగా 3 రోజులు బుట్టలో రోజుకు 8 రెక్కల పురుగులు పడినప్పుడు వెంటనే పిచికారీ చేయాలి.',
            kn: 'ಬಲೆಯಲ್ಲಿ ಹುಳುಗಳು ಹೆಚ್ಚಿದಾಗ ತಕ್ಷಣ ಸಿಂಪಡಿಸಿ.',
            hi: 'लगातार 3 दिन 8 पतंगे प्रति ट्रैप आने पर तुरंत छिड़काव करें।',
          },
        },
      ],
    },
    {
      id: 'cot_stage_4',
      order: 4,
      name: {
        en: '4. Boll Development & Bursting Stage',
        te: '4. కాయ ముదిరే & పత్తి పగిలే దశ',
        kn: '4. ಕಾಯಿ ಬೆಳೆಯುವ ಮತ್ತು ಹತ್ತಿ ಒಡೆಯುವ ಹಂತ',
        hi: '4. गूलर परिपक्वता एवं कपास खिलने (बस्टिंग) की अवस्था',
      },
      timing: {
        en: '90 to 140 DAS',
        te: 'విత్తిన 90 నుండి 140 రోజులు',
        kn: 'ಬಿತ್ತಿದ 90 ರಿಂದ 140 ದಿನಗಳು',
        hi: 'बुवाई के 90 से 140 दिन',
      },
      stageImage: CROP_STAGE_IMAGES.cotton.stages.cot_stage_4,
      whatToDo: {
        en: '1. Foliar spray 0:0:50 SOP (10g/L) to maximize boll weight and fibre staple length.\n2. Cease all chemical insecticide sprays once bolls start bursting to avoid lint chemical staining.\n3. Defoliate dense upper canopy if sunlight does not penetrate bottom branches.\n4. Protect opening bolls from Red Cotton Bug (Dysdercus cingulatus) which stains lint yellow-brown.',
        te: '1. కాయ బరువు పెరగడానికి మరియు దూది నాణ్యత కోసం లీటరు నీటికి 10 గ్రాముల 0-0-50 పొటాష్ పిచికారీ చేయాలి.\n2. కాయలు పగలడం ప్రారంభమైన తర్వాత దూదిపై రసాయన మచ్చలు పడకుండా పురుగుమందుల పిచికారీ ఆపేయాలి.\n3. కింది కాయలకు గాలి వెలుతురు తగిలేలా అనవసరమైన ఆకులను తొలగించాలి.\n4. దూదిని పసుపు-ఎరుపు రంగులోకి మార్చే ఎర్ర పురుగు (రెడ్ కాటన్ బగ్) రాకుండా చూడాలి.',
        kn: '1. ಕಾಯಿ ತೂಕ ಮತ್ತು ಹತ್ತಿ ಗುಣಮಟ್ಟಕ್ಕೆ 0:0:50 ಸಿಂಪಡಿಸಿ.\n2. ಹತ್ತಿ ಒಡೆಯಲು ಪ್ರಾರಂಭಿಸಿದಾಗ ಕೀಟನಾಶಕ ಸಿಂಪಡಿಸಬೇಡಿ.\n3. ಕೆಳಗಿನ ಕಾಯಿಗಳಿಗೆ ಬಿಸಿಲು ತಾಗುವಂತೆ ಮಾಡಿ.\n4. ಹತ್ತಿಗೆ ಕಲೆ ಮಾಡುವ ಕೆಂಪು ಹುಳುಗಳನ್ನು ನಿಯಂತ್ರಿಸಿ.',
        hi: '1. गूलर का वजन और रेशे की गुणवत्ता बढ़ाने के लिए 0:0:50 (10 ग्राम/लीटर) का छिड़काव करें।\n2. गूलर खिलने पर कीटनाशक छिड़काव बंद कर दें ताकि रुई पर दाग न लगे।\n3. निचली शाखाओं तक धूप पहुंचने दें।\n4. रुई को पीला करने वाले लाल बग कीट की रोकथाम करें।',
      },
      irrigationGuide: {
        en: 'Reduce irrigation interval. Over-watering now causes boll rot (black rotting of unopened bolls).',
        te: 'నీటి తడులను తగ్గించాలి. ఎక్కువ నీరు పెడితే కాయ కుళ్ళు తెగులు వచ్చి కాయలు పగలకుండా నల్లబడిపోతాయి.',
        kn: 'ನೀರಿನ ಪ್ರಮಾಣ ತಗ್ಗಿಸಿ. ಹೆಚ್ಚು ನೀರು ಕೊಟ್ಟರೆ ಕಾಯಿ ಕೊಳೆಯುತ್ತದೆ.',
        hi: 'सिंचाई कम कर दें। अधिक पानी से गूलर सड़ने (बॉल रॉट) की समस्या होती है।',
      },
      weatherPrecaution: {
        en: 'Rain on open burst bolls severely degrades cotton grade and causes discoloured yellow fibre; pick open cotton before rain.',
        te: 'విచ్చుకున్న పత్తిపై వర్షం పడితే దూది రంగు మారి మార్కెట్ ధర తగ్గిపోతుంది; వర్షానికి ముందే కోత పూర్తి చేయాలి.',
        kn: 'ಮಳೆಯಿಂದ ಹತ್ತಿ ಹಾಳಾಗದಂತೆ ಮೊದಲೇ ಬಿಡಿಸಿಕೊಳ್ಳಿ.',
        hi: 'खुली रुई पर बारिश पड़ने से गुणवत्ता खराब हो जाती है, बारिश से पहले चुन लें।',
      },
      fertilizers: [
        {
          productName: '00:00:50 Sulphate of Potash (SOP Foliar Spray)',
          productImage: INPUT_PRODUCT_IMAGES.potassium_nitrate_13_0_45,
          category: 'fertilizer',
          whenToApply: {
            en: 'Apply at 100 and 115 DAS during boll maturation.',
            te: 'విత్తిన 100 మరియు 115 రోజుల వద్ద కాయ ముదిరే దశలో పిచికారీ చేయాలి.',
            kn: '100 ಮತ್ತು 115 ದಿನಗಳಲ್ಲಿ ಕಾಯಿ ಬೆಳೆಯುವಾಗ ಸಿಂಪಡಿಸಿ.',
            hi: '100 और 115 दिन पर गूलर विकास के समय छिड़काव करें।',
          },
          purpose: {
            en: 'Directly powers cellulose deposition inside boll fibres, boosting boll weight and lint ginning percentage.',
            te: 'దూదిలో పీచు బలంగా ఏర్పడటానికి, కాయ బరువు పెరిగి దిగుబడి ఎక్కువగా రావడానికి తోడ్పడుతుంది.',
            kn: 'ಹತ್ತಿ ತೂಕ ಮತ್ತು ಗುಣಮಟ್ಟ ಹೆಚ್ಚಿಸಲು ಸಹಕಾರಿ.',
            hi: 'कपास के रेशे को मजबूत बनाता है और गूलर का वजन बढ़ाता है।',
          },
          applicationMethod: {
            en: 'Foliar spray.',
            te: 'ఆకులపై పిచికారీ చేయాలి.',
            kn: 'ಎಲೆ ಸಿಂಪರಣೆ ಮೂಲಕ.',
            hi: 'पत्तियों पर छिड़काव करें।',
          },
          dosage: '10 grams per liter of water (2 kg per acre)',
          precautions: {
            en: 'Spray only in cool morning or evening hours.',
            te: 'ఉదయం లేదా సాయంత్రం చల్లటి వేళల్లో మాత్రమే పిచికారీ చేయాలి.',
            kn: 'ತಂಪಾದ ವೇಳೆಯಲ್ಲಿ ಸಿಂಪಡಿಸಿ.',
            hi: 'ठंडे मौसम में ही छिड़काव करें।',
          },
        },
      ],
      pestsAndDiseases: [],
    },
    {
      id: 'cot_stage_5',
      order: 5,
      name: {
        en: '5. Picking & Multi-Harvest Stage',
        te: '5. పత్తి తీత దశ (వరుస తీతలు)',
        kn: '5. ಹತ್ತಿ ಬಿಡಿಸುವ ಹಂತ',
        hi: '5. कपास चुगाई एवं संचयन अवस्था',
      },
      timing: {
        en: '130 to 180 DAS',
        te: 'విత్తిన 130 నుండి 180 రోజులు',
        kn: 'ಬಿತ್ತಿದ 130 ರಿಂದ 180 ದಿನಗಳು',
        hi: 'बुवाई के 130 से 180 दिन',
      },
      stageImage: CROP_STAGE_IMAGES.cotton.stages.cot_stage_5,
      whatToDo: {
        en: '1. Pick cotton clean when bolls are fully burst and fluffy dry in warm sunny afternoons.\n2. Pick strictly without dry bracts, dried leaves, or trash.\n3. Store in clean cotton bags; NEVER use plastic/polypropylene woven bags (plastic fibers contaminate spinning mills).\n4. Terminate crop by December–January; avoid taking ratoon to break Pink Bollworm lifecycle.',
        te: '1. ఎండ బాగా కాసిన మధ్యాహ్నం వేళల్లో పూర్తిగా విచ్చుకున్న తెల్లటి పత్తిని మాత్రమే తీయాలి.\n2. ఎండుటాకులు, కాయ తొక్కలు, చెత్త లేకుండా శుభ్రంగా పత్తిని వేరు చేయాలి.\n3. కాటన్ గుడ్డ సంచులలో మాత్రమే నిల్వ చేయాలి; ప్లాస్టిక్ లేదా నైలాన్ సంచులను అస్సలు వాడకూడదు.\n4. డిసెంబర్-జనవరి కల్లా పత్తి పైరును తీసేయాలి; కార్శి (రెండవ పంట) ఉంచితే గులాబీ పురుగు తర్వాతి ఏట తీవ్రమవుతుంది.',
        kn: '1. ಮಧ್ಯಾಹ್ನದ ಬಿಸಿಲಿನಲ್ಲಿ ಚೆನ್ನಾಗಿ ಒಡೆದ ಹತ್ತಿಯನ್ನು ಬಿಡಿಸಿ.\n2. ಕಸ ಕಡ್ಡಿ, ಒಣ ಎಲೆಗಳಿಲ್ಲದೆ ಸ್ವಚ್ಛವಾಗಿ ಬಿಡಿಸಿ.\n3. ಹತ್ತಿ ಬಟ್ಟೆಯ ಚೀಲಗಳಲ್ಲಿ ತುಂಬಿ; ಪ್ಲಾಸ್ಟಿಕ್ ಚೀಲ ಬಳಸಬೇಡಿ.\n4. ಡಿಸೆಂಬರ್-ಜನವರಿ ವೇಳೆಗೆ ಬೆಳೆಯನ್ನು ಮುಕ್ತಾಯಗೊಳಿಸಿ, ಕಾರ್ಶಿ ಬೆಳೆ ಇಡಬೇಡಿ.',
        hi: '1. खिली हुई धूप में दोपहर के समय पूरी तरह से खिले सूखे गूलर से साफ कपास चुनें।\n2. सूखी पत्तियां, कचरा आदि रुई में न मिलने दें।\n3. सूती कपड़े के थैलों में रखें; प्लास्टिक/नायलॉन की बोरियों का प्रयोग कभी न करें।\n4. दिसंबर-जनवरी तक फसल समाप्त करें; पेड़ी (रतून) न रखें ताकि गुलाबी सुंडी का चक्र टूट सके।',
      },
      irrigationGuide: {
        en: 'Completely stop irrigation during picking flushes.',
        te: 'పత్తి తీత సమయంలో నీటి తడులు పూర్తిగా ఆపివేయాలి.',
        kn: 'ಹತ್ತಿ ಬಿಡಿಸುವಾಗ ನೀರು ನಿಲ್ಲಿಸಿ.',
        hi: 'चुगाई के समय पानी पूरी तरह बंद रखें।',
      },
      weatherPrecaution: {
        en: 'Never pick dew-wet or rain-damp cotton; wet cotton rots, turns yellow, and fetches lowest price.',
        te: 'మంచు లేదా వర్షంతో తడిసిన పత్తిని తీయరాదు; తడి పత్తి రంగు మారి ముక్కిపోతుంది.',
        kn: 'ತೇವವಿರುವ ಹತ್ತಿಯನ್ನು ಬಿಡಿಸಬೇಡಿ.',
        hi: 'ओस या बारिश से भीगी हुई रुई न चुनें, वह पीली पड़कर खराब हो जाएगी।',
      },
      fertilizers: [],
      pestsAndDiseases: [],
    },
  ],
  harvestingGuide: {
    en: 'Pick fully opened fluffy dry bolls in bright sunny afternoons. Keep trash, bracts, and stained cotton separate. Store exclusively in cotton bags, never in plastic sacks.',
    te: 'మంచి ఎండ ఉన్నప్పుడు పూర్తిగా విచ్చుకున్న పత్తిని తీయాలి. చెత్త, మచ్చబారిన పత్తిని వేరు చేయాలి. కేవలం కాటన్ సంచులలోనే నిల్వ చేయాలి.',
    kn: 'ಬಿಸಿಲಿನಲ್ಲಿ ಪೂರ್ಣ ಒಡೆದ ಹತ್ತಿ ಬಿಡಿಸಿ. ಹತ್ತಿ ಚೀಲದಲ್ಲಿ ಶೇಖರಿಸಿ, ಪ್ಲಾಸ್ಟಿಕ್ ಬಳಸಬೇಡಿ.',
    hi: 'खिली धूप में साफ कपास चुनें। कचरा अलग रखें। केवल सूती थैलों में रखें।',
  },
  precautions: {
    en: '1. Strictly terminate crop by January; never ratoon to stop Pink Bollworm.\n2. Never use synthetic fertilizer contact with seed.\n3. Do not pack picked cotton into plastic sacks.',
    te: '1. గులాబీ రంగు పురుగు నివారణకు జనవరి నాటికి పంటను తీసేయాలి, కార్శి ఉంచకూడదు.\n2. విత్తనానికి తాకేలా రసాయన ఎరువులు వేయరాదు.\n3. తీసిన పత్తిని ప్లాస్టిక్ సంచులలో నింపరాదు.',
    kn: '1. ಕಾರ್ಶಿ ಬೆಳೆ ಇಡಬೇಡಿ.\n2. ಬೀಜಕ್ಕೆ ಗೊಬ್ಬರ ತಾಗಿಸಬೇಡಿ.\n3. ಪ್ಲಾಸ್ಟಿಕ್ ಚೀಲ ಬಳಸಬೇಡಿ.',
    hi: '1. गुलाबी सुंडी रोकने के लिए फसल जनवरी में समाप्त करें, पेड़ी न रखें।\n2. बीज के संपर्क में खाद न डालें।\n3. प्लास्टिक की बोरियों का उपयोग न करें।',
  },
  // 1. Soil & Climate
  soilAndClimate: {
    title: {
      en: 'Deep Black Cotton Soil & Sub-Tropical Climate',
      te: 'లోతైన నల్లరేగడి నేలలు & వాతావరణ అవసరాలు',
      kn: 'ಕಪ್ಪು ಹತ್ತಿ ಮಣ್ಣು ಮತ್ತು ಹವಾಮಾನ ಅಗತ್ಯಗಳು',
      hi: 'गहरी काली कपास मिट्टी एवं उपोष्ण जलवायु',
    },
    image: CROP_PRACTICE_IMAGES.cotton.soil,
    imageCaption: {
      en: 'Deep black soil (Vertisols) with excellent moisture retention and neutral pH (6.5 to 8.0)',
      te: 'తేమను బాగా నిల్వ ఉంచుకునే లోతైన నల్లరేగడి నేలలు',
      kn: 'ತೇವಾಂಶ ಹಿಡಿದಿಡುವ ಆಳವಾದ ಕಪ್ಪು ಮಣ್ಣು',
      hi: 'उत्तम नमी धारण करने वाली गहरी काली मिट्टी (वर्टीसोल)',
    },
    description: {
      en: 'Cotton is a semi-xerophytic perennial crop grown as an annual. Requires warm, sunny climate (25–35°C) and at least 180 frost-free days. Deep black cotton soils (Vertisols) with a depth of at least 60–90 cm and pH between 6.5 and 8.0 are ideal.',
      te: 'పత్తికి వేడి మరియు ఎండతో కూడిన వాతావరణం (25-35°C) అవసరం. కనీసం 60-90 సెం.మీ లోతు గల నల్లరేగడి నేలలు లేదా నీరు ఇంకే ఎర్ర నేలలు అనుకూలం.',
      kn: 'ಬಿಸಿ ಮತ್ತು ಬಿಸಿಲಿನ ಹವೆ (25-35°C) ಸೂಕ್ತ. ಕಪ್ಪು ಮಣ್ಣು ಅತ್ಯುತ್ತಮ.',
      hi: 'गर्म एवं धूप वाला मौसम (25-35°C) आवश्यक है। कम से कम 60-90 सेमी गहरी काली मिट्टी सर्वोत्तम है।',
    },
    details: [
      {
        en: 'Waterlogging Sensitivity: Cotton cannot tolerate even 24 hours of standing water at seedling stage.',
        te: 'మురుగు నీరు సున్నితత్వం: లేత దశలో 24 గంటలకు మించి నీరు నిలిస్తే మొక్కలు పసుపుగా మారి చనిపోతాయి.',
        kn: 'ನೀರು ನಿಲ್ಲದಂತೆ ನೋಡಿಕೊಳ್ಳಿ.',
        hi: 'शुरुआती अवस्था में खेत में 24 घंटे भी पानी भरा रहने से पौधे मर जाते हैं।',
      },
    ],
  },
  // 2. Land Preparation
  landPreparation: {
    title: {
      en: 'Deep Summer Ploughing & Broad Bed Furrow (BBF)',
      te: 'వేసవి లోతు దుక్కులు & బోదెలు-కాలువల తయారీ',
      kn: 'ಬೇಸಿಗೆ ಆಳವಾದ ಉಳುಮೆ ಮತ್ತು ಸಾಲು-ಬದುಗಳ ನಿರ್ಮಾಣ',
      hi: 'ग्रीष्मकालीन गहरी जुताई एवं मेड़-नाली (BBF) विधि',
    },
    image: CROP_PRACTICE_IMAGES.cotton.landPrep,
    imageCaption: {
      en: 'Well-pulverized soil formed into ridges and furrows at 90 cm intervals for drainage and aeration',
      te: 'మురుగునీటి నివారణకు 90 సెం.మీ ఎడంలో బోదెలు, కాలువలు వేయడం',
      kn: '90 ಸೆಂ.ಮೀ ಅಂತರದಲ್ಲಿ ಬದು ಮತ್ತು ಸಾಲುಗಳ ಸಿದ್ಧತೆ',
      hi: 'जल निकास हेतु 90 सेमी पर बनाई गई मेड़ें और नालियां',
    },
    description: {
      en: 'Conduct deep summer ploughing with disc or mouldboard plough to destroy pupae of Pink Bollworm and root nematodes. Apply 8–10 tonnes of well-rotted FYM/compost per acre and prepare ridges and furrows at 90 cm or 120 cm intervals.',
      te: 'గులాబీ రంగు పురుగు కోశస్థ దశలను నాశనం చేయడానికి వేసవిలో లోతు దుక్కులు దున్నాలి. ఎకరానికి 8-10 టన్నుల పశువుల ఎరువు వేసి, 90 లేదా 120 సెం.మీ ఎడంలో బోదెలు మరియు కాలువలు చేసుకోవాలి.',
      kn: 'ಬೇಸಿಗೆಯಲ್ಲಿ ಆಳವಾಗಿ ಉಳುಮೆ ಮಾಡಿ 8-10 ಟನ್ ತಿಪ್ಪೆ ಗೊಬ್ಬರ ಹಾಕಿ ಸಾಲುಗಳನ್ನು ಮಾಡಿ.',
      hi: 'गुलाबी सुंडी की प्यूपा नष्ट करने हेतु गहरी जुताई करें। 8-10 टन गोबर खाद डालकर 90 या 120 सेमी पर मेड़ें बनाएं।',
    },
    details: [
      {
        en: 'Broad Bed Furrow: Facilitates quick drainage during heavy monsoon rains and conserves moisture during drought.',
        te: 'బోదె పద్ధతి: భారీ వర్షాలకు మురుగునీరు పోవడానికి మరియు బెట్ట సమయంలో తేమను కాపాడటానికి ఉపయోగపడుతుంది.',
        kn: 'ಹೆಚ್ಚುವರಿ ನೀರು ಹೊರಹೋಗಲು ಸಹಕಾರಿ.',
        hi: 'अतिरिक्त बारिश का पानी निकालने और सूखे में नमी बचाने में मददगार है।',
      },
    ],
  },
  // 3. Seed & Sowing Practice
  seedAndSowingPractice: {
    seed: {
      title: {
        en: 'Certified Bt-Cotton Seed & Refuge Border',
        te: 'ధ్రువీకరించిన బిటి-పత్తి విత్తనం & నాన్-బిటి రక్షణ అంచు',
        kn: 'ಪ್ರಮಾಣಿತ ಬಿಟಿ-ಹತ್ತಿ ಬೀಜ ಮತ್ತು ಆಶ್ರಯ ಸಾಲುಗಳು',
        hi: 'प्रमाणित बीटी-कपास बीज एवं शरण (रिफ्यूज) कतारें',
      },
      image: CROP_PRACTICE_IMAGES.cotton.seed,
      imageCaption: {
        en: 'Packaged delinted certified BG-II hybrid cotton seeds with companion non-Bt refuge packet',
        te: 'ప్యాకెట్లలో లభించే బిజి-II హైబ్రిడ్ పత్తి విత్తనాలు మరియు నాన్-బిటి విత్తనాలు',
        kn: 'ಗುಣಮಟ್ಟದ ಬಿಟಿ ಹತ್ತಿ ಬೀಜದ ಪ್ಯಾಕೆಟ್',
        hi: 'प्रमाणित बीजी-II संकर कपास के बीज एवं गैर-बीटी रिफ्यूज बीज',
      },
      description: {
        en: 'Use government approved BG-II (Bollgard II) hybrid seeds suitable for the region. Always sow 5 border rows of non-Bt cotton (refuge seeds provided in packet) around the field to prevent pest resistance buildup.',
        te: 'ప్రాంతానికి సరిపడే బిజి-II (బోల్‌గార్డ్ II) హైబ్రిడ్ విత్తనాలను వాడాలి. గులాబీ పురుగులో నిరోధకత రాకుండా పొలం చుట్టూ 5 వరుసల నాన్-బిటి విత్తనాలను తప్పక విత్తాలి.',
        kn: 'ಸರ್ಕಾರ ಮಾನ್ಯತೆ ಪಡೆದ ಬಿಟಿ-2 ಹೈಬ್ರಿಡ್ ಬೀಜ ಬಳಸಿ. ಸುತ್ತಲೂ ನಾನ್-ಬಿಟಿ ಸಾಲುಗಳನ್ನು ಬಿತ್ತಿ.',
        hi: 'स्वीकृत बीजी-II संकर बीज बोएं। कीटों में प्रतिरोधक क्षमता रोकने हेतु चारों ओर 5 कतारें गैर-बीटी कपास की लगाएं।',
      },
      details: [
        {
          en: 'Seed Rate: 2 packets (450g each + refuge) per acre (approx 900g to 1 kg total).',
          te: 'విత్తన మోతాదు: ఎకరానికి 2 ప్యాకెట్లు (ఒక్కో ప్యాకెట్ 450 గ్రాములు).',
          kn: 'ಬೀಜದ ಪ್ರಮಾಣ: ಎಕರೆಗೆ 2 ಪ್ಯಾಕೆಟ್.',
          hi: 'बीज दर: 2 पैकेट (प्रति पैकेट 450 ग्राम + रिफ्यूज) प्रति एकड़।',
        },
      ],
    },
    treatment: {
      title: {
        en: 'Bio-Inoculant & Secondary Systemic Seed Coating',
        te: 'జీవ రసాయనాలు & పురుగు నివారణ విత్తన శుద్ధి',
        kn: 'ಜೈವಿಕ ಬೀಜೋಪಚಾರ ವಿಧಾನ',
        hi: 'जैव उर्वरक एवं प्रणालीगत कीटनाशी बीज शोधन',
      },
      image: CROP_PRACTICE_IMAGES.cotton.seedTreatment,
      imageCaption: {
        en: 'Seeds treated with Azospirillum and Trichoderma viride to protect taproot from seedling wilt',
        te: 'ట్రైకోడెర్మా విరిడే మరియు అజోస్పైరిల్లమ్‌తో విత్తన శుద్ధి',
        kn: 'ಟ್ರೈಕೋಡರ್ಮಾ ಮತ್ತು ಜೈವಿಕ ಗೊಬ್ಬರದಿಂದ ಬೀಜೋಪಚಾರ',
        hi: 'ट्राइकोडर्मा एवं एजोस्पाइरिलम से बीज उपचार ताकि उकठा (विल्ट) न लगे',
      },
      description: {
        en: 'Commercial BG-II seeds are usually pre-treated with Imidacloprid. Enhance biological root defense by treating seeds with Trichoderma viride @ 4 g/kg seed + Azospirillum bio-fertilizer @ 10 g/kg seed 2 hours before dibbling.',
        te: 'ప్యాకెట్ విత్తనాలు ఇప్పటికే రసాయన మందుతో శుద్ధి చేయబడి ఉంటాయి. విత్తే 2 గంటల ముందు కిలో విత్తనానికి 4 గ్రాముల ట్రైకోడెర్మా విరిడే + 10 గ్రాముల అజోస్పైరిల్లమ్ కలిపి నీడలో ఆరబెట్టాలి.',
        kn: 'ಬಿತ್ತುವ ಮುನ್ನ ಟ್ರೈಕೋಡರ್ಮಾ (4 ಗ್ರಾಂ/ಕೆಜಿ) ಬೆರೆಸಿ ನೆರಳಿನಲ್ಲಿ ಒಣಗಿಸಿ.',
        hi: 'बीज पहले से उपचारित होते हैं। बुवाई से 2 घंटे पहले ट्राइकोडर्मा (4 ग्राम/किग्रा) एवं एजोस्पाइरिलम से उपचारित करें।',
      },
      details: [
        {
          en: 'Root Rot Protection: Completely eliminates Rhizoctonia dry root rot and promotes vigorous primary taproot penetration.',
          te: 'వేరుకుళ్ళు నివారణ: వేరుకుళ్ళు తెగులు రాకుండా కాపాడి తల్లివేరు లోతుగా దిగడానికి తోడ్పడుతుంది.',
          kn: 'ಬೇರು ಕೊಳೆ ರೋಗ ತಡೆಯುತ್ತದೆ.',
          hi: 'जड़ गलन और उकठा रोग से शत-प्रतिशत सुरक्षा प्रदान करता है।',
        },
      ],
    },
    sowing: {
      title: {
        en: 'Dibbling on Ridge Shoulders (90 cm × 60 cm)',
        te: 'బోదెల పక్కన 90 × 60 సెం.మీ ఎడంలో గింజలు నాటడం (దిబ్బలింగ్)',
        kn: 'ಬದುಗಳ ಮೇಲೆ 90 × 60 ಸೆಂ.ಮೀ ಅಂತರದಲ್ಲಿ ಬೀಜ ಊರುವುದು',
        hi: 'मेड़ों के किनारों पर 90 × 60 सेमी पर बीज की चौपाई (डिबलिंग)',
      },
      image: CROP_PRACTICE_IMAGES.cotton.sowing,
      imageCaption: {
        en: 'Dibbling 1–2 seeds per hill at 3–4 cm depth along the slope of the ridge',
        te: 'బోదె వాలులో 3-4 సెం.మీ లోతులో గింజలను గుచ్చడం',
        kn: 'ಬದುವಿನ ಇಳಿಜಾರಿನಲ್ಲಿ 3-4 ಸೆಂ.ಮೀ ಆಳದಲ್ಲಿ ಬೀಜ ಊರುವುದು',
        hi: 'मेड़ के ढलान पर 3-4 सेमी गहराई पर बीज रोपना',
      },
      description: {
        en: 'Dibble 1–2 seeds per hill at 3–4 cm depth on ridge slopes (not on top crest or bottom of furrow). For hybrid cotton maintain 90 cm × 60 cm (7,400 plants/acre) or 120 cm × 45 cm for high-density intercropping.',
        te: 'బోదె వాలు ప్రాంతంలో 3-4 సెం.మీ లోతులో గుంటకు 1-2 గింజలు నాటాలి. హైబ్రిడ్ పత్తికి 90 × 60 సెం.మీ లేదా 120 × 45 సెం.మీ ఎడం పాటించాలి.',
        kn: '90 × 60 ಸೆಂ.ಮೀ ಅಂತರದಲ್ಲಿ ಬದುವಿನ ಬದಿಯಲ್ಲಿ ಬೀಜ ಊರಿ.',
        hi: 'मेड़ के किनारे पर 3-4 सेमी की गहराई पर 1-2 बीज लगाएं। कतार से कतार 90 सेमी और पौधे से पौधा 60 सेमी रखें।',
      },
      details: [
        {
          en: 'Gap Filling: Conduct gap filling within 7–10 days using soaked seeds to maintain uniform plant population.',
          te: 'ఖాళీల భర్తీ: మొలక రాని చోట్ల విత్తిన 7-10 రోజుల్లోనే నానబెట్టిన విత్తనాలతో ఖాళీలను పూరించాలి.',
          kn: '7-10 ದಿನದಲ್ಲಿ ಖಾಲಿ ಜಾಗ ತುಂಬಿ.',
          hi: '7-10 दिन के अंदर खाली स्थानों पर दोबारा बीज लगाकर पौध संख्या पूरी करें।',
        },
      ],
    },
  },
  // 4. Water and Weed Management
  waterAndWeedManagement: {
    irrigation: {
      title: {
        en: 'Furrow Irrigation at Critical Moisture Milestones',
        te: 'బోదెల పద్ధతిలో కీలక దశల్లో నీటి తడులు',
        kn: 'ಸಾಲು ನೀರಾವರಿ ಮತ್ತು ನಿರ್ಣಾಯಕ ಹಂತಗಳು',
        hi: 'नाली विधि द्वारा क्रांतिक अवस्थाओं पर सिंचाई',
      },
      image: CROP_PRACTICE_IMAGES.cotton.irrigation,
      imageCaption: {
        en: 'Alternate furrow irrigation directing water into alternate furrows to save 35% water',
        te: 'ఒకటి విడిచి ఒక కాలువలో నీరు పెట్టే ఆరుతడి పద్ధతి',
        kn: 'ಒಂದು ಬಿಟ್ಟು ಒಂದು ಸಾಲಿನಲ್ಲಿ ನೀರು ಹಾಯಿಸುವುದು',
        hi: 'एकांतर नाली (एक नाली छोड़कर) सिंचाई विधि जिससे 35% पानी बचता है',
      },
      description: {
        en: 'Irrigate immediately after dibbling, followed by a life-saving irrigation at 4–5 days. Critical stages requiring mandatory moisture: Square Initiation (35–45 DAS), Flowering (55–70 DAS), and Boll Development (80–110 DAS). Moisture stress during flowering causes catastrophic drop of squares and young bolls.',
        te: 'విత్తిన వెంటనే నీరు పెట్టాలి; 4-5 రోజులకు మరో తడి ఇవ్వాలి. పూత మొగ్గ దశ (35-45 రోజులు), పూత దశ (55-70 రోజులు), మరియు కాయలు పెరిగే దశ (80-110 రోజులు) లో నీటి ఎద్దడి రాకుండా చూడాలి; లేదంటే పూత, పిందె రాలిపోతాయి.',
        kn: 'ಮೊಗ್ಗು ಬಿಡುವಾಗ, ಹೂವಾಡುವಾಗ ಮತ್ತು ಕಾಯಿ ಬೆಳೆಯುವಾಗ ನೀರು ಕೊಡುವುದು ಕಡ್ಡಾಯ.',
        hi: 'कली (स्क्वायर) बनते समय (35-45 दिन), फूल आते समय (55-70 दिन) और टिंडे बनते समय सिंचाई अनिवार्य है।',
      },
      details: [
        {
          en: 'Alternate Furrow Method: Irrigating alternate furrows saves 35% water without reducing seed cotton yield.',
          te: 'ఆదా: ఒకటి విడిచి ఒక కాలువలో నీరు పెట్టడం వల్ల 35% నీరు ఆదా అవుతుంది.',
          kn: 'ಶೇ. 35 ನೀರು ಉಳಿತಾಯವಾಗುತ್ತದೆ.',
          hi: 'एक नाली छोड़कर पानी देने से 35% पानी की बचत होती है।',
        },
      ],
    },
    weeding: {
      title: {
        en: 'Early Herbicide Blanket & Inter-Cultivation',
        te: 'మొలక ముందు కలుపు మందు & గుంటుక తోలడం',
        kn: 'ಕಳೆನಾಶಕ ಸಿಂಪರಣೆ ಮತ್ತು ಎಡೆಕುಂಟೆ ಹೊಡೆಯುವುದು',
        hi: 'खरपतवार नियंत्रण एवं कोल्पा/बैल चालित निराई-गुड़ाई',
      },
      image: CROP_PRACTICE_IMAGES.cotton.weeding,
      imageCaption: {
        en: 'Bullock-drawn blade harrow (danti) running between 90 cm cotton rows creating dust mulch',
        te: 'పత్తి సాళ్ళ మధ్య గుంటుక తోలి మట్టిని వదులు చేయడం మరియు కలుపు తీయడం',
        kn: 'ಸಾಲುಗಳ ನಡುವೆ ಎಡೆಕುಂಟೆ ಹೊಡೆದು ಮಣ್ಣು ಸಡಿಲಗೊಳಿಸುವುದು',
        hi: 'कतारों के बीच बैलों से कोल्पा चलाकर मिट्टी चढ़ाना एवं खरपतवार निकालना',
      },
      description: {
        en: 'Spray Pendimethalin 38.7% CS @ 700 ml/acre within 24–48 hours of sowing on moist soil. At 25, 45, and 60 DAS, perform inter-cultivation using bullock-drawn blade harrows or power weeders between rows to aerate soil and form a protective dust mulch.',
        te: 'విత్తిన 24-48 గంటల్లో పెండిమిథాలిన్ (700 మి.లీ/ఎకరాకు) తడి నేలపై పిచికారీ చేయాలి. 25, 45, మరియు 60 రోజులకు సాళ్ళ మధ్య గుంటుక తోలి కలుపును నివారించాలి.',
        kn: 'ಬಿತ್ತಿದ 48 ಗಂಟೆಯಲ್ಲಿ ಪೆಂಡಿಮಿಥಾಲಿನ್ ಸಿಂಪಡಿಸಿ. ನಂತರ ಸಾಲುಗಳಲ್ಲಿ ಎಡೆಕುಂಟೆ ಹೊಡೆಯಿರಿ.',
        hi: 'बुवाई के 48 घंटे में पेंडिमेथालिन छिड़कें। 25, 45 व 60 दिन पर कतारों में कोल्पा चलाएं।',
      },
      details: [
        {
          en: 'Dust Mulching: Inter-cultivation breaks soil capillarity, conserving deep soil moisture during dry spells.',
          te: 'తేమ సంరక్షణ: గుంటుక తోలడం వల్ల భూమిలోని తేమ ఆవిరి కాకుండా కాపాడుకోవచ్చు.',
          kn: 'ಮಣ್ಣಿನ ತೇವಾಂಶ ಆವಿಯಾಗದಂತೆ ತಡೆಯುತ್ತದೆ.',
          hi: 'निराई-गुड़ाई से मिट्टी की केशिकाएं टूटती हैं जिससे नमी सुरक्षित रहती है।',
        },
      ],
    },
  },
  // 5. Square Formation & Boll Development Milestone
  criticalMilestone: {
    title: {
      en: 'Square Initiation & Peak Boll Development',
      te: 'పూత మొగ్గ దశ & కాయల ఎదుగుదల కీలక సమయం',
      kn: 'ಮೊಗ್ಗು ಕಟ್ಟುವುದು ಮತ್ತು ಕಾಯಿ ಬೆಳೆಯುವ ನಿರ್ಣಾಯಕ ಹಂತ',
      hi: 'कली (स्क्वायर) बनना एवं टिंडे का भरपूर विकास',
    },
    image: CROP_PRACTICE_IMAGES.cotton.milestone,
    imageCaption: {
      en: 'Healthy pyramidal squares and developing bolls with zero sucking pest damage and no square drop',
      te: 'ఆరోగ్యకరమైన పూత మొగ్గలు మరియు రసం పీల్చే పురుగుల బెడద లేని పత్తి కాయలు',
      kn: 'ಉದುರದಂತೆ ಬೆಳೆಯುತ್ತಿರುವ ಹತ್ತಿ ಮೊಗ್ಗು ಮತ್ತು ಕಾಯಿಗಳು',
      hi: 'कीटमुक्त स्वस्थ कलियां एवं तेजी से बढ़ते हुए कपास के टिंडे',
    },
    description: {
      en: 'Begins at 35–45 DAS and extends to 100 DAS. This is the yield-determining phase. Apply Magnesium Sulphate @ 10 kg/acre to prevent leaf reddening. Spray Alpha Naphthyl Acetic Acid (Planofix @ 0.25 ml/L) at peak squaring to prevent flower bud shedding.',
      te: 'విత్తిన 35 నుండి 100 రోజుల వరకు అత్యంత కీలకమైన సమయం. ఆకులు ఎర్రబడకుండా మెగ్నీషియం సల్ఫేట్ (10 కిలోలు/ఎకరాకు) వేయాలి. మొగ్గ రాలకుండా ప్లానోఫిక్స్ (లీటరు నీటికి 0.25 మి.లీ) పిచికారీ చేయాలి.',
      kn: 'ಎಲೆ ಕೆಂಪಾಗದಂತೆ ಮೆಗ್ನೀಷಿಯಂ ಸಲ್ಫೇಟ್ ಹಾಕಿ. ಮೊಗ್ಗು ಉದುರದಂತೆ ಪ್ಲಾನೋಫಿಕ್ಸ್ ಸಿಂಪಡಿಸಿ.',
      hi: '35 से 100 दिन की अवधि उपज तय करती है। लाल पत्ती रोग से बचाव हेतु 10 किग्रा मैग्नीशियम सल्फेट डालें व कली झड़ने से रोकने हेतु प्लानोफिक्स का छिड़काव करें।',
    },
    details: [
      {
        en: 'Nipping Terminal Buds: Detop terminal bud at 85–90 DAS (after 20 nodes) to arrest vertical growth and divert photosynthates into boll fattening.',
        te: 'చిగుళ్ళు తుంచడం: 85-90 రోజులకు పైన చిగురు తుంచితే చెట్టు పైకి పెరగకుండా కాయల సంఖ్య మరియు బరువు పెరుగుతాయి.',
        kn: 'ತುದಿ ಚಿಗುರು ಚಿವುಟಿ ಕಾಯಿ ದಪ್ಪವಾಗಲು ಸಹಾಯ ಮಾಡಿ.',
        hi: '85-90 दिन पर ऊपरी सिरा (टुंडा) तोड़ दें ताकि वानस्पतिक वृद्धि रुककर टिंडे मोटे बनें।',
      },
    ],
  },
  // 6. Nutrients Master Plan
  nutrientsMasterPlan: {
    primary: [
      {
        nutrientName: 'NPK Complex 20:20:0:13',
        fertilizerProduct: 'Ammonium Phosphate Sulphate (20:20:0:13)',
        productImage: INPUT_PRODUCT_IMAGES.npk_20_20_0_13,
        category: 'primary',
        whenToApply: {
          en: 'Apply as basal dressing during sowing or within 10 DAS.',
          te: 'విత్తే సమయంలో లేదా విత్తిన 10 రోజుల్లోపు సాళ్ళలో వేయాలి.',
          kn: 'ಬಿತ್ತುವಾಗ ಅಥವಾ 10 ದಿನದೊಳಗೆ ಸಾಲಿನಲ್ಲಿ ಹಾಕಿ.',
          hi: 'बुवाई के समय या 10 दिन के अंदर कतारों में डालें।',
        },
        purpose: {
          en: 'Supplies initial nitrogen, balanced phosphorus, and essential sulphur for robust taproot branching.',
          te: 'మొక్క ప్రారంభ ఎదుగుదలకు, వేర్లు బలంగా విస్తరించడానికి నత్రజని, భాస్వరం మరియు గంధకం అందిస్తుంది.',
          kn: 'ಆರಂಭಿಕ ಬೆಳವಣಿಗೆ ಮತ್ತು ಬೇರುಗಳ ವಿಸ್ತರಣೆಗೆ.',
          hi: 'शुरुआती वानस्पतिक विकास और जड़ों के फैलाव हेतु।',
        },
        howToApply: {
          en: 'Band placement 5–7 cm to the side and below seeds @ 50 kg per acre.',
          te: 'విత్తనానికి 5 సెం.మీ దూరంలో మరియు లోతులో ఎకరానికి 50 కిలోలు వేయాలి.',
          kn: 'ಬೀಜದಿಂದ 5 ಸೆಂ.ಮೀ ದೂರದಲ್ಲಿ ಮಣ್ಣಿನಲ್ಲಿ ಮುಚ್ಚಿ.',
          hi: 'बीज से 5-7 सेमी दूर 50 किग्रा प्रति एकड़ गहराई में डालें।',
        },
        dosage: '50 kg/acre basal',
        precautions: {
          en: 'Never place chemical fertilizer directly touching the germinating cotton seed.',
          te: 'విత్తనానికి నేరుగా తగిలేలా ఎరువును ఎప్పుడూ వేయకూడదు.',
          kn: 'ಬೀಜಕ್ಕೆ ತಾಗದಂತೆ ಎಚ್ಚರವಹಿಸಿ.',
          hi: 'उर्वरक को कभी भी बीज के सीधे संपर्क में न आने दें।',
        },
      },
      {
        nutrientName: 'Muriate of Potash (MOP 0:0:60)',
        fertilizerProduct: 'Potassium Chloride 60% K2O',
        productImage: INPUT_PRODUCT_IMAGES.mop_0_0_60,
        category: 'primary',
        whenToApply: {
          en: 'Apply in 2 equal splits: 50% at 35 DAS (Squaring) and 50% at 65 DAS (Flowering/Boll formation).',
          te: 'రెండు దఫాలుగా: 35 రోజులకు (మొగ్గ దశ) 15 కిలోలు, 65 రోజులకు (కాయల దశ) 15 కిలోలు వేయాలి.',
          kn: 'ಎರಡು ಕಂತುಗಳಲ್ಲಿ: 35 ದಿನಕ್ಕೆ 15 ಕೆಜಿ, 65 ದಿನಕ್ಕೆ 15 ಕೆಜಿ ಹಾಕಿ.',
          hi: 'दो बार में: 35 दिन (कली) पर 15 किग्रा और 65 दिन (टिंडे) पर 15 किग्रा डालें।',
        },
        purpose: {
          en: 'Directly dictates boll size, lint fiber strength (staple length), and water-stress tolerance.',
          te: 'పత్తి కాయలు పెద్దవిగా అవ్వడానికి, దూది పోగు గట్టిపడటానికి, నీటి ఎద్దడిని తట్టుకోవడానికి పొటాష్ అత్యవసరం.',
          kn: 'ಹತ್ತಿ ಕಾಯಿ ದಪ್ಪವಾಗಲು ಮತ್ತು ನಾರಿನ ಗುಣಮಟ್ಟ ಹೆಚ್ಚಿಸಲು.',
          hi: 'टिंडों का आकार बड़ा करने और रेशे की मजबूती व चमक बढ़ाने के लिए।',
        },
        howToApply: {
          en: 'Pocket placement in soil 10 cm away from plant stem @ 15 kg/acre per split.',
          te: 'మొక్క మొదలుకు 10 సెం.మీ దూరంలో భూమిలో పాతిపెట్టాలి.',
          kn: 'ಗಿಡದ ಬುಡದಿಂದ 10 ಸೆಂ.ಮೀ ದೂರದಲ್ಲಿ ಮಣ್ಣಿನಲ್ಲಿ ಮುಚ್ಚಿ.',
          hi: 'पौधे से 10 सेमी दूर मिट्टी में दबाकर दें।',
        },
        dosage: '30 kg/acre total in 2 splits',
        precautions: {
          en: 'Cover with soil immediately after application; ensure adequate soil moisture.',
          te: 'ఎరువు వేసిన వెంటనే మట్టి కప్పి తేమ ఉండేలా చూడాలి.',
          kn: 'ಹಾಕಿದ ತಕ್ಷಣ ಮಣ್ಣು ಮುಚ್ಚಿ.',
          hi: 'डालने के तुरंत बाद मिट्टी से ढकें और खेत में नमी रखें।',
        },
      },
    ],
    secondary: [
      {
        nutrientName: 'Magnesium Sulphate (MgSO4)',
        fertilizerProduct: 'Magnesium Sulphate (Mg 9.6%, S 12%)',
        productImage: INPUT_PRODUCT_IMAGES.magnesium_sulphate,
        category: 'secondary',
        whenToApply: {
          en: 'Apply to soil at 45 DAS (10 kg/acre) or spray @ 10 g/L at 60 and 80 DAS.',
          te: 'విత్తిన 45 రోజులకు నేలలో 10 కిలోలు వేయాలి లేదా 60, 80 రోజులకు లీటరు నీటికి 10 గ్రాములు పిచికారీ చేయాలి.',
          kn: '45 ದಿನಕ್ಕೆ ಮಣ್ಣಿನಲ್ಲಿ ಹಾಕಿ ಅಥವಾ 60 ಮತ್ತು 80 ದಿನಕ್ಕೆ ಎಲೆಗಳ ಮೇಲೆ ಸಿಂಪಡಿಸಿ.',
          hi: '45 दिन पर 10 किग्रा मिट्टी में डालें या 60 व 80 दिन पर 10 ग्राम/लीटर छिड़कें।',
        },
        purpose: {
          en: 'COMPULSORY IN COTTON: Prevents disastrous "Reddening of Cotton Leaves" (Lal Rog), preserving chlorophyll and preventing premature boll drop.',
          te: 'పత్తిలో తప్పనిసరి: ఆకులు ఎర్రబడి రాలిపోవడాన్ని (లాల్ రోగ్) నివారించి చెట్టు నిత్యం పచ్చగా ఉండి కాయలు రాలకుండా చేస్తుంది.',
          kn: 'ಹತ್ತಿಯಲ್ಲಿ ಕಡ್ಡಾಯ: ಎಲೆ ಕೆಂಪಾಗುವುದನ್ನು ತಡೆದು ಹಸಿರಾಗಿಡುತ್ತದೆ.',
          hi: 'कपास में अत्यंत आवश्यक: पत्तियों का लाल पड़ना (लाल रोग) रोकता है जिससे टिंडे नहीं झड़ते।',
        },
        howToApply: {
          en: 'Soil band application or foliar spray in afternoon.',
          te: 'సాళ్ళలో వేయాలి లేదా సాయంత్రం వేళల్లో ఆకులపై పిచికారీ చేయాలి.',
          kn: 'ಸಾಲಿನಲ್ಲಿ ಹಾಕಿ ಅಥವಾ ಸಂಜೆ ಸಿಂಪಡಿಸಿ.',
          hi: 'कतारों में डालें या शाम के समय पत्तियों पर छिड़काव करें।',
        },
        dosage: '10 kg/acre soil or 10 g/L spray',
        precautions: {
          en: 'Spray on both upper and lower surface of older lower and middle leaves.',
          te: 'కింది ఆకులు మరియు మధ్య ఆకుల పైభాగం, కింద భాగం తడిసేలా పిచికారీ చేయాలి.',
          kn: 'ಎಲೆಗಳ ಎರಡು ಬದಿ ಸಿಂಪಡಿಸಿ.',
          hi: 'पत्तियों के दोनों तरफ अच्छी तरह छिड़काव होना चाहिए।',
        },
      },
    ],
    micronutrients: [
      {
        nutrientName: 'Boron 20% (Disodium Octaborate Tetrahydrate)',
        fertilizerProduct: 'Soluble Boron 20%',
        productImage: INPUT_PRODUCT_IMAGES.boron_20,
        category: 'micronutrient',
        whenToApply: {
          en: 'Foliar spray at peak squaring (50 DAS) and early flowering (70 DAS).',
          te: 'మొగ్గ దశలో (50 రోజులు) మరియు పూత దశలో (70 రోజులు) పిచికారీ చేయాలి.',
          kn: 'ಮೊಗ್ಗು ಬಿಡುವಾಗ ಮತ್ತು ಹೂವಾಡುವಾಗ ಸಿಂಪಡಿಸಿ.',
          hi: 'कली अवस्था (50 दिन) एवं फूल आते समय (70 दिन) छिड़काव करें।',
        },
        purpose: {
          en: 'Enables pollen germination and pollen tube elongation, eliminating square shed and malformed "parrot-beak" bolls.',
          te: 'పూత రాలకుండా, పిందెలు కాయలుగా మారడానికి మరియు చిలకముక్కు కాయలు (వంకర కాయలు) రాకుండా బోరాన్ ఎంతో సహాయపడుతుంది.',
          kn: 'ಹೂವು ಕಾಯಿಯಾಗಲು ಮತ್ತು ಕಾಯಿ ವಕ್ರವಾಗದಂತೆ ತಡೆಯಲು.',
          hi: 'परागण में सुधार करता है, फूल झड़ने से रोकता है और विकृत (तोते की चोंच जैसे) टिंडे बनने से रोकता है।',
        },
        howToApply: {
          en: 'Dissolve 1.5 grams Boron 20% per liter of clean water and spray evenly.',
          te: 'లీటరు నీటికి 1.5 గ్రాముల బోరాన్ కలిపి పిచికారీ చేయాలి.',
          kn: 'ಲೀಟರ್ ನೀರಿಗೆ 1.5 ಗ್ರಾಂ ಬೋರಾನ್ ಬೆರೆಸಿ ಸಿಂಪಡಿಸಿ.',
          hi: '1.5 ग्राम बोरॉन प्रति लीटर पानी में घोलकर छिड़कें।',
        },
        dosage: '1.5 g/L foliar spray (300 g/acre in 200L)',
        precautions: {
          en: 'Do not exceed 1.5 g/L; boron overdose causes leaf tip burn.',
          te: 'మోతాదు మించకూడదు; ఎక్కువైతే ఆకుల అంచులు కాలిపోతాయి.',
          kn: 'ನಿಗದಿತ ಪ್ರಮಾಣ ಮೀರಿ ಬಳಸಬೇಡಿ.',
          hi: 'निर्धारित मात्रा से अधिक न डालें, पत्तियां जल सकती हैं।',
        },
      },
    ],
  },
  // 7. Post-Harvest
  postHarvest: {
    maturity: {
      title: {
        en: 'Fluffy White Boll Bursting Maturity',
        te: 'కాయలు పూర్తిగా విచ్చుకుని దూది బయటకు రావడం',
        kn: 'ಹತ್ತಿ ಕಾಯಿ ಪೂರ್ಣ ಒಡೆದು ಅರಳುವಿಕೆ',
        hi: 'टिंडों का पूर्णतः खिलकर सफेद रुई का बाहर आना',
      },
      image: CROP_PRACTICE_IMAGES.cotton.maturity,
      imageCaption: {
        en: 'Fully expanded, bone-dry fluffy cotton bolls ready for clean hand picking',
        te: 'మంచి ఎండలో బాగా విచ్చుకుని తెల్లగా మెరుస్తున్న పత్తి కాయలు',
        kn: 'ಸಂಪೂರ್ಣ ಅರಳಿದ ಬಿಳಿ ಹತ್ತಿ ಕಾಯಿಗಳು',
        hi: 'पूरी तरह खिले हुए सूखे एवं चमकदार सफेद कपास के टिंडे',
      },
      description: {
        en: 'Harvest when bolls burst completely into dry, snow-white fluffy lobes. Pick in 3 to 4 pickings at 15-day intervals. Never pick green or partially opened immature bolls.',
        te: 'కాయలు పూర్తిగా విచ్చుకుని దూది తెల్లగా బయటకు వచ్చినప్పుడు తీయాలి. 15 రోజుల వ్యవధిలో 3 నుండి 4 సార్లు పత్తి తీయడం పూర్తి చేయాలి. పచ్చి కాయలను తీయరాదు.',
        kn: 'ಕಾಯಿ ಪೂರ್ಣ ಅರಳಿದಾಗ 15 ದಿನಕ್ಕೊಮ್ಮೆ 3-4 ಬಾರಿ ಹತ್ತಿ ಬಿಡಿಸಿ.',
        hi: 'जब टिंडे पूरी तरह खिल जाएं तब 15 दिन के अंतराल पर 3-4 बार में चुनाई करें। अधपके टिंडे न तोड़ें।',
      },
      details: [
        {
          en: 'Fiber Quality: Fully mature bolls possess highest micronaire value and zero fiber immaturity.',
          te: 'నాణ్యత: పూర్తిగా విచ్చుకున్న పత్తికి మార్కెట్లో అత్యధిక గిట్టుబాటు ధర లభిస్తుంది.',
          kn: 'ಉತ್ತಮ ಮಾರುಕಟ್ಟೆ ಬೆಲೆ ಸಿಗುತ್ತದೆ.',
          hi: 'पूरी तरह खिले टिंडों से उच्च गुणवत्ता का लंबा रेशा मिलता है।',
        },
      ],
    },
    harvesting: {
      title: {
        en: 'Afternoon Hand Picking & Contamination Prevention',
        te: 'మధ్యాహ్నపు వేళల్లో పత్తి తీయడం & చెత్త లేకుండా జాగ్రత్తలు',
        kn: 'ಮಧ್ಯಾಹ್ನದ ಶುದ್ಧ ಹತ್ತಿ ಬಿಡಿಸುವಿಕೆ',
        hi: 'दोपहर में स्वच्छ चुनाई एवं कचरा रोकथाम',
      },
      image: CROP_PRACTICE_IMAGES.cotton.harvesting,
      imageCaption: {
        en: 'Manual picking using 100% cotton aprons, leaving dry bracts, leaves, and yellow stained locks behind',
        te: 'కాటన్ సంచులతో ఆకులు, చెత్త రాకుండా నాణ్యమైన తెల్లటి పత్తిని మాత్రమే తీయడం',
        kn: 'ಕಸ ಕಡ್ಡಿ ಇಲ್ಲದಂತೆ ಶುದ್ಧ ಹತ್ತಿ ಬಿಡಿಸುವುದು',
        hi: 'सूती झोली पहनकर केवल साफ रुई चुनना और सूखे पत्ते-कचरा छोड़ देना',
      },
      description: {
        en: 'Start picking after 10 AM once morning dew evaporates completely. Pickers must wear cotton cloths and use 100% cotton bags. Keep insect-damaged or yellow-stained cotton (kawadi) strictly separate from first-grade clean white kapas.',
        te: 'ఉదయం మంచు ఆరిన తర్వాత (ఉదయం 10 గంటల తర్వాత) పత్తి తీయాలి. తీసేవారు కాటన్ సంచులను మాత్రమే వాడాలి. పురుగు పట్టిన లేదా రంగు మారిన పత్తిని (కవాడి) మంచి పత్తిలో కలపకూడదు.',
        kn: 'ಮಂಜು ಆರಿದ ನಂತರ 10 ಗಂಟೆಗೆ ಹತ್ತಿ ಬಿಡಿಸಿ. ಕವಾಡಿ ಹತ್ತಿಯನ್ನು ಬೇರೆ ಇಡಿ.',
        hi: 'सुबह 10 बजे के बाद ओस सूखने पर चुनाई करें। सूती थैलों का प्रयोग करें। पीली व दागदार रुई को अलग रखें।',
      },
      details: [
        {
          en: 'Banned Polypropylene: NEVER use plastic or polypropylene fertilizer bags for picking; frayed plastic fibers contaminate spinning mills and cause huge price penalties.',
          te: 'ప్లాస్టిక్ నిషేధం: ప్లాస్టిక్ లేదా ఎరువుల సంచులలో పత్తిని ఎట్టి పరిస్థితుల్లోనూ నింపకూడదు; నూలు మిల్లులలో ప్లాస్టిక్ పోగులు చేరితే భారీ నష్టం వస్తుంది.',
          kn: 'ಪ್ಲಾಸ್ಟಿಕ್ ಚೀಲ ಬಳಸಲೇಬೇಡಿ.',
          hi: 'प्लास्टिक की खाद बोरियों का प्रयोग कभी न करें; प्लास्टिक के धागे मिल में धागे की गुणवत्ता नष्ट कर देते हैं।',
        },
      ],
    },
    dryingAndCuring: {
      title: {
        en: 'Shade Aeration & Moisture Reduction to <8%',
        te: 'నీడలో ఆరబెట్టడం & తేమ 8% లోపు తగ్గించడం',
        kn: 'ನೆರಳಿನಲ್ಲಿ ಒಣಗಿಸಿ ತೇವಾಂಶ 8% ಕ್ಕೆ ತಗ್ಗಿಸುವುದು',
        hi: 'छाया में फैलाना एवं नमी 8% से कम करना',
      },
      image: CROP_PRACTICE_IMAGES.cotton.drying,
      imageCaption: {
        en: 'Spreading seed cotton on clean cement thresher yard or canvas tarpaulin to lower lint moisture',
        te: 'శుభ్రమైన టార్పాలిన్లపై పత్తిని పలచగా పరచి తేమను తగ్గించడం',
        kn: 'ಟಾರ್ಪಲಿನ್ ಮೇಲೆ ಹರಡಿ ತೇವಾಂಶ ಇಳಿಸುವುದು',
        hi: 'साफ तिरपाल पर फैलाकर नमी को 8% तक लाना',
      },
      description: {
        en: 'Dry freshly picked seed cotton on clean tarpaulins for 4–6 hours in gentle sunlight. Do not expose to intense midday heat. The moisture content of seed cotton must be below 8% before ginning or storage to avoid seed heating and discoloration.',
        te: 'తీసిన పత్తిని శుభ్రమైన టార్పాలిన్లపై 4-6 గంటలు ఆరబెట్టాలి. పత్తిలో తేమ 8% కంటే తక్కువగా ఉండాలి; తేమ ఎక్కువైతే గింజ వేడెక్కి పత్తి పసుపుగా మారుతుంది.',
        kn: 'ಟಾರ್ಪಲಿನ್ ಮೇಲೆ 4-6 ಗಂಟೆ ಒಣಗಿಸಿ ತೇವಾಂಶ 8% ಕ್ಕಿಂತ ಕಡಿಮೆ ಮಾಡಿ.',
        hi: 'चुनी हुई कपास को तिरपाल पर 4-6 घंटे सुखाएं। जिनिंग या भंडारण से पहले नमी 8% से कम होनी चाहिए।',
      },
      details: [
        {
          en: 'Ginning Efficiency: Kapas below 8% moisture separates smoothly in roller gins without crushing fragile cottonseeds.',
          te: 'గిన్నింగ్ నాణ్యత: 8% తేమ ఉన్న పత్తి నుండి గింజలు విరిగిపోకుండా సులభంగా వేరవుతాయి.',
          kn: 'ಬೀಜ ಒಡೆಯದೆ ಹತ್ತಿ ಬೇರ್ಪಡಿಸಲು ಸಹಕಾರಿ.',
          hi: '8% से कम नमी रहने पर जिनिंग के दौरान बिनौले टूटते नहीं हैं।',
        },
      ],
    },
    storage: {
      title: {
        en: 'Fire-Safe Ventilated Godown Storage in Cotton Bales',
        te: 'అగ్నిప్రమాదాలు జరగకుండా గాలి వెలుతురు గల గోదాములలో నిల్వ',
        kn: 'ಬೆಂಕಿ ಸುರಕ್ಷತೆಯುಳ್ಳ ಗೋದಾಮಿನಲ್ಲಿ ಶೇಖರಣೆ',
        hi: 'अग्निरोधक हवादार गोदाम में सुरक्षित भंडारण',
      },
      image: CROP_PRACTICE_IMAGES.cotton.storage,
      imageCaption: {
        en: 'Seed cotton stored in clean, well-ventilated brick godown free from moisture, rodents, and fire hazards',
        te: 'తేమ, ఎలుకలు మరియు నిప్పు రవ్వలు సోకకుండా సురక్షితమైన గోదాములో నిల్వ చేసిన పత్తి',
        kn: 'ಸುರಕ್ಷಿತ ಗೋದಾಮಿನಲ್ಲಿ ಶೇಖರಿಸಿದ ಹತ್ತಿ',
        hi: 'सीलन और आग के खतरों से दूर हवादार पक्के गोदाम में कपास का भंडारण',
      },
      description: {
        en: 'Store dried seed cotton in well-ventilated, damp-proof sheds raised on wooden planks 30 cm above floor. Install fire extinguishers and strictly prohibit smoking. Protect from rodents and termites by spraying Chlorpyrifos around outside perimeter.',
        te: 'ఎండిన పత్తిని నేలకు తగలకుండా చెక్క బల్లలపై గాలి వెలుతురు గల గోదాములలో నిల్వ చేయాలి. అగ్నిప్రమాదాలు జరగకుండా జాగ్రత్తలు తీసుకోవాలి; ఎలుకలు చేరకుండా కాపాడాలి.',
        kn: 'ಮರದ ಹಲಗೆಗಳ ಮೇಲೆ ತೇವಾಂಶವಿಲ್ಲದ ಗೋದಾಮಿನಲ್ಲಿ ಶೇಖರಿಸಿ.',
        hi: 'जमीन से 30 सेमी ऊंचे लकड़ी के तख्तों पर हवादार गोदाम में रखें। आग से बचाव का पूरा प्रबंध रखें।',
      },
      details: [
        {
          en: 'Prevents Self-Heating: Ventilated stacking prevents micro-aerobic bacterial fermentation and spontaneous combustion.',
          te: 'నిల్వ భద్రత: గాలి ఆడేలా నిల్వ చేయడం వల్ల పత్తి వేడెక్కకుండా రంగు మారకుండా ఉంటుంది.',
          kn: 'ಹತ್ತಿ ಬಿಸಿಯಾಗಿ ಹಾಳಾಗದಂತೆ ತಡೆಯುತ್ತದೆ.',
          hi: 'हवादार रखने से रुई में गर्मी पैदा नहीं होती और उसका सफेद रंग बरकरार रहता है।',
        },
      ],
    },
  },
};
