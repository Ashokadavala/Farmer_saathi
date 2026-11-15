import { CropAdvisoryRecord } from '../cropAdvisoryData';
import { CROP_STAGE_IMAGES, INPUT_PRODUCT_IMAGES, CROP_PRACTICE_IMAGES } from '../cropStageImages';

export const MAIZE_ADVISORY: CropAdvisoryRecord = {
  cropId: 'maize',
  cropName: {
    en: 'Maize (Corn)',
    te: 'మొక్కజొన్న',
    kn: 'ಮೆಕ್ಕೆಜೋಳ',
    hi: 'मक्का',
  },
  category: {
    en: 'Coarse Cereal & Feed Crop',
    te: 'చిరుధాన్య / దాణా పంట',
    kn: 'ದವಸ ಧಾನ್ಯದ ಬೆಳೆ',
    hi: 'मोटा अनाज एवं चारा फसल',
  },
  icon: '🌽',
  cropImage: CROP_STAGE_IMAGES.maize.cropImage,
  suitableSeason: {
    en: 'Kharif (June–July sowing), Rabi (Oct–Nov sowing)',
    te: 'ఖరీఫ్ (జూన్-జూలై), రబీ (అక్టోబర్-నవంబర్)',
    kn: 'ಖಾರಿಫ್ (ಜೂನ್-ಜುಲೈ), ರಬಿ (ಅಕ್ಟೋಬರ್-ನವೆಂಬರ್)',
    hi: 'खरीफ (जून-जुलाई), रबी (अक्टूबर-नवंबर)',
  },
  soilRequirements: {
    en: 'Deep fertile loamy or alluvial soils with high water holding capacity and good drainage. pH 6.5 to 7.5. Sensitive to waterlogging.',
    te: 'సారవంతమైన గరప నేలలు, ఎర్ర నేలలు మరియు ఒండ్రు నేలలు శ్రేష్టం. pH 6.5 నుండి 7.5 ఉండాలి. నీరు నిల్వ ఉంటే పంట పసుపు రంగులోకి మారుతుంది.',
    kn: 'ಫಲವತ್ತಾದ ಗೋಡು ಮಣ್ಣು ಅಥವಾ ಕೆಂಪು ಮಣ್ಣು. pH 6.5 ರಿಂದ 7.5 ಇರಬೇಕು.',
    hi: 'उपजाऊ दोमट या जलोढ़ मिट्टी जिसमें जल निकास उत्तम हो। पीएच मान 6.5 से 7.5 उपयुक्त है। जलभराव के प्रति संवेदनशील।',
  },
  seedAndSowing: {
    en: 'Seed rate: 7–8 kg/acre (Hybrids: Pioneer 3396, DKC 9108, Syngenta NK 6240). Treat with Cyantraniliprole 19.8% (Fortenza Duo 4ml/kg) for Fall Armyworm protection. Sow at 60 cm × 20 cm at 4–5 cm depth.',
    te: 'విత్తన మోతాదు: ఎకరానికి 7-8 కిలోలు (హైబ్రిడ్ రకాలు: పయనీర్ 3396, డీకేసీ 9108, సింజెంటా ఎన్‌కే 6240). కత్తెర పురుగు నివారణకు ఫోర్టెంజా డ్యుయోతో విత్తన శుద్ధి చేయాలి. వరుసల మధ్య 60 సెం.మీ, మొక్కల మధ్య 20 సెం.మీ దూరంలో 4-5 సెం.మీ లోతులో విత్తుకోవాలి.',
    kn: 'ಬೀಜದ ಪ್ರಮಾಣ: ಎಕರೆಗೆ 7-8 ಕೆಜಿ ಹೈಬ್ರಿಡ್ ಬೀಜ. ಕತ್ತರಿ ಹುಳು ತಡೆಯಲು ಬೀಜೋಪಚಾರ ಮಾಡಿ. ಸಾಲಿನ ಅಂತರ 60 ಸೆಂ.ಮೀ × 20 ಸೆಂ.ಮೀ.',
    hi: 'बीज दर: 7-8 किग्रा/एकड़ (संकर किस्में)। फॉल आर्मीवर्म से बचाव के लिए बीजोपचार करें। कतार से कतार 60 सेमी और पौधे से पौधा 20 सेमी दूरी पर बोएं।',
  },
  cropDuration: {
    en: '105 to 120 days.',
    te: '105 నుండి 120 రోజులు.',
    kn: '105 ರಿಂದ 120 ದಿನಗಳು.',
    hi: '105 से 120 दिन।',
  },
  stages: [
    {
      id: 'mz_stage_1',
      order: 1,
      name: {
        en: '1. Sowing & Seedling Emergence Stage',
        te: '1. విత్తడం & మొలక దశ',
        kn: '1. ಬಿತ್ತನೆ ಮತ್ತು ಮೊಳಕೆಯೊಡೆಯುವ ಹಂತ',
        hi: '1. बुवाई एवं अंकुरण अवस्था',
      },
      timing: {
        en: '0 to 20 Days After Sowing (DAS)',
        te: 'విత్తిన 0 నుండి 20 రోజులు',
        kn: 'ಬಿತ್ತಿದ 0 ರಿಂದ 20 ದಿನಗಳು',
        hi: 'बुवाई के 0 से 20 दिन',
      },
      stageImage: CROP_STAGE_IMAGES.maize.stages.mz_stage_1,
      whatToDo: {
        en: '1. Treat seeds with Fortenza Duo (4ml/kg) to protect seedlings from Fall Armyworm for initial 20 days.\n2. Apply basal DAP (50kg) + MOP (25kg) + Zinc Sulphate (10kg) in furrows before sowing.\n3. Thin extra seedlings at 12–15 DAS leaving one healthy vigorous seedling per hill at 20 cm spacing.\n4. Scout central whorls for early pin-hole feeding punctures caused by young Fall Armyworm larvae.',
        te: '1. కత్తెర పురుగు ఆశించకుండా విత్తనాలను ఫోర్టెంజా డ్యుయో (4 మి.లీ/కిలో)తో విత్తన శుద్ధి చేసుకోవాలి.\n2. విత్తే ముందే సాలుల్లో ఎకరానికి 50 కిలోల DAP, 25 కిలోల MOP మరియు 10 కిలోల జింక్ సల్ఫేట్ వేయాలి.\n3. విత్తిన 12-15 రోజులకు పలచనం చేసి మొక్కల మధ్య 20 సెం.మీ దూరం ఉండేలా ఒకే మొక్కను ఉంచాలి.\n4. మొలకల సుడులలో కత్తెర పురుగు గుడ్లు, చిన్న లార్వాలు పిన్‌హోల్స్ లాంటి రంధ్రాలు చేస్తున్నాయేమో గమనించాలి.',
        kn: '1. ಕತ್ತರಿ ಹುಳು ತಡೆಯಲು ಬೀಜೋಪಚಾರ ಮಾಡಿ ಬಿತ್ತಿ.\n2. ಬಿತ್ತನೆ ಸಾಲಿನಲ್ಲಿ ಡಿಎಪಿ, ಎಂಒಪಿ ಮತ್ತು ಜಿಂಕ್ ಗೊಬ್ಬರ ಹಾಕಿ.\n3. 12-15 ದಿನಗಳಲ್ಲಿ ಕುಡಿಗೆ ಒಂದೇ ಆರೋಗ್ಯವಂತ ಗಿಡ ಬಿಟ್ಟು ಪಲಚನ ಮಾಡಿ.\n4. ಸುಳಿಯಲ್ಲಿ ಕತ್ತರಿ ಹುಳುವಿನ ಬಾಧೆ ಗಮನಿಸಿ.',
        hi: '1. फॉल आर्मीवर्म से बचाव के लिए बीजों का बीजोपचार अवश्य करें।\n2. बुवाई की नालियों में डीएपी 50 किग्रा, एमओपी 25 किग्रा और जिंक सल्फेट 10 किग्रा प्रति एकड़ डालें।\n3. 12-15 दिन बाद छंटाई (थिनिंग) करके 20 सेमी की दूरी पर एक ही स्वस्थ पौधा रखें।\n4. पौधों की पोंग (व्होर्ल) में फॉल आर्मीवर्म के छोटे छेदों की जांच करें।',
      },
      irrigationGuide: {
        en: 'Irrigate immediately after sowing for uniform emergence, then light watering on day 4.',
        te: 'విత్తిన వెంటనే మొలక కోసం తడి ఇవ్వాలి, 4వ రోజున తేలికపాటి జీవపు తడి ఇవ్వాలి.',
        kn: 'ಬಿತ್ತಿದ ತಕ್ಷಣ ನೀರು ನೀಡಿ, 4 ನೇ ದಿನ ಲಘು ನೀರು ಕೊಡಿ.',
        hi: 'बुवाई के तुरंत बाद और चौथे दिन हल्की सिंचाई करें।',
      },
      weatherPrecaution: {
        en: 'Maize seedlings turn chlorotic yellow within 12 hours of waterlogging; maintain field drainage channels.',
        te: 'చేనులో నీరు నిలిస్తే 12 గంటల్లోనే మొక్కలు పసుపు రంగులోకి మారిపోతాయి, మురుగునీరు పోయే కాలువలు తీయాలి.',
        kn: 'ಹೊಲದಲ್ಲಿ ನೀರು ನಿಲ್ಲದಂತೆ ತಕ್ಷಣ ಹೊರಹಾಕಿ, ಇಲ್ಲದಿದ್ದರೆ ಸಸಿಗಳು ಹಳದಿಯಾಗುತ್ತವೆ.',
        hi: 'जलभराव होने पर मक्के की पौध पीली पड़ जाती है, जल निकासी की उचित व्यवस्था रखें।',
      },
      fertilizers: [
        {
          productName: 'Di-Ammonium Phosphate (DAP 18:46:0) + Zinc Sulphate 21%',
          productImage: INPUT_PRODUCT_IMAGES.dap,
          category: 'fertilizer',
          whenToApply: {
            en: 'Basal application placed 5 cm beside seed furrow.',
            te: 'విత్తే సమయంలో సాలులో విత్తనానికి 5 సెం.మీ దూరంలో వేయాలి.',
            kn: 'ಬಿತ್ತನೆ ಸಾಲಿನಲ್ಲಿ ಹಾಕಿ.',
            hi: 'बुवाई के समय नाली में बीज से 5 सेमी दूर डालें।',
          },
          purpose: {
            en: 'Phosphorus establishes deep root system; Zinc prevents white bud disease in young seedlings.',
            te: 'భాస్వరం వేర్ల వ్యవస్థను దృఢపరుస్తుంది; జింక్ వలన లేత ఆకులు తెల్లబడే తెల్లమొగ్గ తెగులు (వైట్ బడ్) రాకుండా ఉంటుంది.',
            kn: 'ಬೇರುಗಳ ಬೆಳವಣಿಗೆಗೆ ಮತ್ತು ಬಿಳಿ ಮೊಗ್ಗು ರೋಗ ತಡೆಯಲು ಜಿಂಕ್ ಸಹಕಾರಿ.',
            hi: 'जड़ों को गहराई तक ले जाता है और जिंक मक्के में सफेद कली (White bud) रोग से बचाता है।',
          },
          applicationMethod: {
            en: 'Band placement along rows.',
            te: 'సాలుల్లో పక్కగా వేయాలి.',
            kn: 'ಸಾಲಿನಲ್ಲಿ ಹಾಕಿ.',
            hi: 'कतारों में साइड में डालें।',
          },
          dosage: '50 kg DAP + 25 kg MOP + 10 kg Zinc Sulphate per acre',
          precautions: {
            en: 'Broadcast Zinc separately from DAP.',
            te: 'జింక్ మరియు DAP లను విడివిడిగా వేయాలి.',
            kn: 'ಜಿಂಕ್ ಮತ್ತು ಡಿಎಪಿಯನ್ನು ಬೇರೆ ಬೇರೆ ಹಾಕಿ.',
            hi: 'जिंक और डीएपी अलग-अलग डालें।',
          },
        },
      ],
      pestsAndDiseases: [],
    },
    {
      id: 'mz_stage_2',
      order: 2,
      name: {
        en: '2. Knee-High Vegetative Stage (V6 to V8)',
        te: '2. మోకాలి లోతు ఎదుగుదల దశ (శాఖీయ దశ)',
        kn: '2. ಮಂಡಿಯುದ್ದ ಬೆಳೆಯುವ ಹಂತ (ಸಸ್ಯಕ ಹಂತ)',
        hi: '2. घुटने के बराबर बढ़वार (वेजिटेटिव) अवस्था',
      },
      timing: {
        en: '20 to 45 DAS',
        te: 'విత్తిన 20 నుండి 45 రోజులు',
        kn: 'ಬಿತ್ತಿದ 20 ರಿಂದ 45 ದಿನಗಳು',
        hi: 'बुवाई के 20 से 45 दिन',
      },
      stageImage: CROP_STAGE_IMAGES.maize.stages.mz_stage_2,
      whatToDo: {
        en: '1. Top-dress 1st split Urea (35kg/acre) at 25–30 DAS.\n2. Earth-up soil around plant base at 30–35 DAS to support thick stalks and develop aerial brace roots.\n3. HIGH-ALERT FOR FALL ARMYWORM (Spodoptera frugiperda): Inspect central whorls for saw-dust like frass and ragged leaves.\n4. Apply whorl application of insecticide or poisoned bait (rice bran + jaggery + thiodicarb).',
        te: '1. విత్తిన 25-30 రోజులకు మొదటి విడత యూరియా (35 కిలోలు) పైపాటుగా వేయాలి.\n2. 30-35 రోజుల వద్ద మొక్క మొదళ్ల వద్ద మట్టిని ఎగదోసి ఊడ వేర్లు (బ్రెస్ రూట్స్) బలంగా నాటుకునేలా చేయాలి.\n3. కత్తెర పురుగు ఉధృతిని గమనించాలి: సుడిలో రంపపు పొట్టు లాంటి మలం, ఆకులు చిరిగిపోయినట్లు ఉంటే వెంటనే నివారణ చర్యలు చేపట్టాలి.\n4. సుడులలో మందు నేరుగా పడేలా నాజిల్‌తో పిచికారీ చేయాలి లేదా విషపు ఎరను సుడులలో వేయాలి.',
        kn: '1. 25-30 ದಿನಗಳಲ್ಲಿ ಮೊದಲ ಕಂತಿನ ಯೂರಿಯಾ (35 ಕೆಜಿ) ಹಾಕಿ.\n2. 30-35 ದಿನಗಳಲ್ಲಿ ಗಿಡದ ಬುಡಕ್ಕೆ ಮಣ್ಣು ಏರಿಸಿ ಆಸರೆ ಬೇರುಗಳು ಬರುವಂತೆ ಮಾಡಿ.\n3. ಕತ್ತರಿ ಹುಳುವಿನ ಬಾಧೆ ತಡೆಯಲು ಸುಳಿಯಲ್ಲಿ ಔಷಧಿ ಹಾಕಿ.\n4. ವಿಷದ ತುತ್ತು ತಯಾರಿಸಿ ಸುಳಿಗೆ ಹಾಕಿ.',
        hi: '1. बुवाई के 25-30 दिन बाद पहली यूरिया (35 किग्रा/एकड़) टॉप ड्रेसिंग करें।\n2. 30-35 दिन बाद पौधों की जड़ों पर मिट्टी चढ़ाएं ताकि सहारा देने वाली जड़ें (Brace roots) मजबूत बनें।\n3. फॉल आर्मीवर्म की कड़ी निगरानी करें: पोंग (व्होर्ल) में लकड़ी के बुरादे जैसा मल और कटी-फटी पत्तियां देखें।\n4. सीधे पोंग के अंदर कीटनाशक का घोल डालें या विषैली घुंडी डालें।',
      },
      irrigationGuide: {
        en: 'Irrigate every 8–10 days in dry weather. Avoid standing water for more than 6 hours.',
        te: 'వర్షాభావ పరిస్థితుల్లో 8-10 రోజులకు తడి ఇవ్వాలి. 6 గంటలకు మించి చేనులో నీరు నిల్వ ఉండరాదు.',
        kn: '8-10 ದಿನಗಳಿಗೊಮ್ಮೆ ನೀರಾವರಿ ನೀಡಿ.',
        hi: '8-10 दिनों के अंतराल पर सिंचाई करें। खेत में पानी रुकने न दें।',
      },
      weatherPrecaution: {
        en: 'Strong winds can lodge knee-high plants; earthing up is compulsory before 35 DAS.',
        te: 'ఈ దశలో ఈదురుగాలులకు మొక్కలు నేలవాలకుండా 35 రోజులలోపే మట్టిని ఎగదోయాలి.',
        kn: 'ಗಾಳಿಗೆ ಗಿಡಗಳು ಬೀಳದಂತೆ ಬುಡಕ್ಕೆ ಮಣ್ಣು ಏರಿಸಿ.',
        hi: 'तेज हवाओं से पौधों को गिरने से बचाने के लिए 35 दिन के अंदर मिट्टी चढ़ाने का कार्य पूरा करें।',
      },
      fertilizers: [
        {
          productName: 'Neem Coated Urea (1st Split)',
          productImage: INPUT_PRODUCT_IMAGES.urea,
          category: 'fertilizer',
          whenToApply: {
            en: 'Top dress at 25–30 DAS in moist soil followed by earthing up.',
            te: 'విత్తిన 25-30 రోజుల వద్ద తేమ ఉన్నప్పుడు వేసి మట్టి ఎగదోయాలి.',
            kn: '25-30 ದಿನಗಳಲ್ಲಿ ತೇವಾಂಶವಿರುವಾಗ ಹಾಕಿ ಮಣ್ಣು ಏರಿಸಿ.',
            hi: '25-30 दिन पर मिट्टी में नमी होने पर बिखरें और मिट्टी चढ़ाएं।',
          },
          purpose: {
            en: 'Drives rapid internode elongation, thick stalk girth, and large dark green photosynthetic leaf area.',
            te: 'కాండం లావుగా పెరగడానికి, ఆకులు వెడల్పై ముదురు ఆకుపచ్చ రంగులోకి మారడానికి నత్రజని సహాయపడుతుంది.',
            kn: 'ಕಾಂಡ ದಪ್ಪಗಾಗಲು ಮತ್ತು ಎಲೆಗಳು ಹಸಿರಾಗಿ ಬೆಳೆಯಲು ಸಹಕಾರಿ.',
            hi: 'तने की मोटाई और पत्तियों के चौड़े व गहरे हरे विकास के लिए आवश्यक है।',
          },
          applicationMethod: {
            en: 'Side dress 8–10 cm away from stems and cover with soil.',
            te: 'మొక్క మొదలుకు 8-10 సెం.మీ దూరంలో వేసి మట్టి కప్పాలి.',
            kn: 'ಬುಡದಿಂದ 8-10 ಸೆಂ.ಮೀ ದೂರದಲ್ಲಿ ಹಾಕಿ ಮಣ್ಣು ಮುಚ್ಚಿ.',
            hi: 'पौधों से 8-10 सेमी दूर डालकर मिट्टी से ढक दें।',
          },
          dosage: '35 kg Neem Coated Urea per acre',
          precautions: {
            en: 'Never drop urea directly into central leaf whorl; it burns the growing point.',
            te: 'యూరియాను నేరుగా మొక్క సుడిలో వేయరాదు; సుడి మాడిపోతుంది.',
            kn: 'ಯೂರಿಯಾವನ್ನು ನೇರವಾಗಿ ಸುಳಿಗೆ ಹಾಕಬೇಡಿ; ಸುಳಿ ಸೀದುಹೋಗುತ್ತದೆ.',
            hi: 'यूरिया को सीधे पौधे की पोंग (व्होर्ल) में न डालें, वह जल जाएगी।',
          },
        },
      ],
      pestsAndDiseases: [
        {
          name: {
            en: 'Fall Armyworm - FAW (Spodoptera frugiperda)',
            te: 'కత్తెర పురుగు (ఫాల్ ఆర్మీవార్మ్)',
            kn: 'ಕತ್ತರಿ ಹುಳು (ಫಾಲ್ ಆರ್ಮಿವರ್ಮ್)',
            hi: 'फॉल आर्मीवर्म (कतरन कीट)',
          },
          problemType: 'pest',
          symptomImage: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&auto=format&fit=crop&q=80',
          symptoms: {
            en: 'Window-paning of young leaves, massive ragged oblong holes in leaves, heavy sawdust-like yellowish frass packed inside central whorl.',
            te: 'సుడిలోని ఆకులకు రంపపు అంచుల లాంటి రంధ్రాలు చేయడం, సుడి నిండా రంపపు పొట్టు లాంటి మలంతో నింపి లోపలి మొగ్గను తినేయడం.',
            kn: 'ಸುಳಿಯ ಎಲೆಗಳನ್ನು ಕತ್ತರಿಸಿ ಗರಗಸದ ಹುಡಿಯಂತಹ ಹಿಕ್ಕೆಯನ್ನು ಸುಳಿಯಲ್ಲಿ ತುಂಬಿರುತ್ತದೆ.',
            hi: 'पत्तियों पर बड़े-बड़े कटे-फटे छेद, पोंग के अंदर लकड़ी के बुरादे जैसा मल और अंदर की कलियों को खा जाना।',
          },
          prevention: {
            en: 'Intercrop with cowpea / pigeonpea; install FAW pheromone traps (5/acre).',
            te: 'అంతరపంటగా అలసందలు వేయాలి, ఎకరానికి 5 లింగాకర్షక బుట్టలు పెట్టాలి.',
            kn: 'ಅಲಸಂದಿ ಅಂತರಬೆಳೆ ಬೆಳೆಯಿರಿ, ಮೋಹಕ ಬಲೆ ಅಳವಡಿಸಿ.',
            hi: 'लोबिया की अंतरफसल लगाएं और 5 फेरोमोन ट्रैप प्रति एकड़ लगाएं।',
          },
          treatment: {
            en: 'Direct spray into leaf whorl: Chlorantraniliprole 18.5% SC (Coragen 0.4ml/L) or Emamectin Benzoate 5% SG (0.5g/L) or Spinetoram (1ml/L).',
            te: 'మందు నేరుగా సుడిలో పడేలా లీటరు నీటికి 0.4 మి.లీ కోరాజెన్ లేదా 0.5 గ్రాముల ఎమామెక్టిన్ బెంజోయేట్ కలిపి పిచికారీ చేయాలి.',
            kn: 'ಸುಳಿಗೆ ತಲುಪುವಂತೆ ಕೋರಾಜೆನ್ (0.4 ಮಿ.ಲೀ/ಲೀಟರ್) ಅಥವಾ ಎಮಾಮೆಕ್ಟಿನ್ ಸಿಂಪಡಿಸಿ.',
            hi: 'सीधे पोंग (व्होर्ल) में पहुंचे ऐसा कोराजन (0.4 मिली/लीटर) या एमामेक्टिन (0.5 ग्राम/लीटर) का छिड़काव करें।',
          },
          recommendedProduct: 'Chlorantraniliprole 18.5% SC (Coragen) / Emamectin Benzoate',
          productImage: INPUT_PRODUCT_IMAGES.coragen,
          applicationTiming: {
            en: 'Apply during early morning or dusk targeting central funnel.',
            te: 'ఉదయం లేదా సాయంత్రం వేళల్లో సుడి లోపలికి పిచికారీ చేయాలి.',
            kn: 'ಬೆಳಗ್ಗೆ ಅಥವಾ ಸಂಜೆ ವೇಳೆ ಸುಳಿಗೆ ನೇರವಾಗಿ ಸಿಂಪಡಿಸಿ.',
            hi: 'सुबह या शाम के समय सीधे पोंग के अंदर छिड़काव करें।',
          },
        },
      ],
    },
    {
      id: 'mz_stage_3',
      order: 3,
      name: {
        en: '3. Tasseling & Silking Stage (Flowering)',
        te: '3. జెండాలు (పూత) & కంకి పోగులు వచ్చే దశ (సిల్కింగ్)',
        kn: '3. ಜಂಡೆ ಹೂವು ಮತ್ತು ತೆನೆ ಕೂದಲು ಬರುವ ಹಂತ',
        hi: '3. नर मंजरी (टेसलिंग) एवं भुट्टे के रेशे (सिल्किंग) निकलने की अवस्था',
      },
      timing: {
        en: '45 to 65 DAS',
        te: 'విత్తిన 45 నుండి 65 రోజులు',
        kn: 'ಬಿತ್ತಿದ 45 ರಿಂದ 65 ದಿನಗಳು',
        hi: 'बुवाई के 45 से 65 दिन',
      },
      stageImage: CROP_STAGE_IMAGES.maize.stages.mz_stage_3,
      whatToDo: {
        en: '1. Top-dress final Urea (30kg) + MOP (20kg/acre) just before tassel emergence.\n2. Potash is critical now to ensure long cobs and complete grain setting up to the tip.\n3. WATER CRITICAL PERIOD: Maintain continuous soil moisture; drought now causes sterile ears.\n4. Avoid chemical spraying during active morning pollen shedding (8 AM to 11 AM).',
        te: '1. జెండాలు వచ్చే సమయంలో ఆఖరి విడత యూరియా (30 కిలోలు) మరియు MOP (20 కిలోలు) వేయాలి.\n2. కంకి పొడవు పెరగడానికి, చివర వరకు గింజలు నిండటానికి పొటాష్ ఎరువు అత్యంత ముఖ్యం.\n3. అత్యంత కీలకమైన నీటి దశ: నేలలో తడి ఆరకుండా చూడాలి; ఈ దశలో నీటి ఎద్దడి వస్తే కంకిలో గింజలు నిండవు.\n4. ఉదయం 8 నుండి 11 గంటల మధ్య పరాగసంపర్కం జరిగే సమయంలో ఎలాంటి పురుగుమందులు పిచికారీ చేయరాదు.',
        kn: '1. ಜಂಡೆ ಬರುವ ಮುನ್ನ ಕೊನೆಯ ಯೂರಿಯಾ ಮತ್ತು ಪೊಟ್ಯಾಶ್ ಹಾಕಿ.\n2. ತೆನೆ ಉದ್ದ ಮತ್ತು ಕೊನೆಯವರೆಗೂ ಕಾಳು ಕಟ್ಟಲು ಪೊಟ್ಯಾಶ್ ಅತಿ ಮುಖ್ಯ.\n3. ಅತ್ಯಂತ ಸೂಕ್ಷ್ಮ ಹಂತ: ಮಣ್ಣಿನಲ್ಲಿ ನಿರಂತರ ತೇವಾಂಶ ಕಾಪಾಡಿ.\n4. ಬೆಳಗ್ಗೆ 8-11 ಗಂಟೆಯ ಪರಾಗಸ್ಪರ್ಶ ಸಮಯದಲ್ಲಿ ಸಿಂಪಡಿಸಬೇಡಿ.',
        hi: '1. नर मंजरी निकलने से ठीक पहले अंतिम यूरिया (30 किग्रा) और एमओपी (20 किग्रा) डालें।\n2. भुट्टे की लंबाई और सिरे तक दाना भरने के लिए पोटाश अत्यंत जरूरी है।\n3. अत्यंत संवेदनशील जल अवस्था: खेत में लगातार नमी रखें; पानी की कमी से भुट्टे खाली रह जाते हैं।\n4. सुबह 8 से 11 बजे परागण के समय किसी भी कीटनाशक का छिड़काव न करें।',
      },
      irrigationGuide: {
        en: 'MOST SENSITIVE IRRIGATION STAGE. Even 2 days of drought stress causes desiccation of silks and poor seed set (gappy cobs).',
        te: 'అత్యంత కీలకమైన నీటి దశ. రెండు రోజులు నీటి ఎద్దడి తగిలినా కంకి పోగులు ఎండిపోయి కంకుల్లో అక్కడక్కడే గింజలు పడతాయి.',
        kn: 'ಅತಿ ಸೂಕ್ಷ್ಮ ಹಂತ. ನೀರಿನ ಕೊರತೆಯಾದರೆ ತೆನೆ ಜೊಳ್ಳಾಗುತ್ತದೆ.',
        hi: 'सबसे संवेदनशील सिंचाई अवस्था। इस समय पानी की कमी से रेशे सूख जाते हैं और भुट्टे खाली रह जाते हैं।',
      },
      weatherPrecaution: {
        en: 'Temperatures >38°C desiccate pollen grains rapidly; irrigate to lower canopy temperature.',
        te: '38 డిగ్రీలకు మించి ఎండ ఉంటే పుప్పొడి మాడిపోతుంది, తేలికపాటి తడి ఇచ్చి చల్లబరచాలి.',
        kn: 'ಹೆಚ್ಚಿನ ಬಿಸಿಲಿದ್ದಾಗ ಲಘು ನೀರು ನೀಡಿ ತಂಪಾಗಿರಿಸಿ.',
        hi: 'तेज धूप और 38°C से अधिक तापमान होने पर हल्की सिंचाई करके खेत ठंडा रखें।',
      },
      fertilizers: [
        {
          productName: 'Muriate of Potash (MOP 0:0:60) + Urea (Final Split)',
          productImage: INPUT_PRODUCT_IMAGES.mop,
          category: 'fertilizer',
          whenToApply: {
            en: 'Apply at tassel emergence (around 45–50 DAS).',
            te: 'జెండాలు బయటకు వచ్చే సమయంలో నాటిన 45-50 రోజుల వద్ద వేయాలి.',
            kn: 'ಜಂಡೆ ಬರುವ 45-50 ದಿನಗಳಲ್ಲಿ ಹಾಕಿ.',
            hi: 'नर मंजरी निकलते समय 45-50 दिन पर डालें।',
          },
          purpose: {
            en: 'Potassium ensures long cob length, thick rows of kernels, and prevents tip abortion (blunt empty cob tips).',
            te: 'కంకి పొడవు పెరగడానికి, వరసలు చక్కగా అమరడానికి, కంకి చివర వరకు బొద్దుగా గింజలు కట్టడానికి తోడ్పడుతుంది.',
            kn: 'ತೆನೆ ಉದ್ದವಾಗಿ ಬೆಳೆಯಲು ಮತ್ತು ತುದಿಯವರೆಗೂ ಕಾಳು ತುಂಬಲು ಸಹಕಾರಿ.',
            hi: 'भुट्टे की लंबाई बढ़ाने, दानों की पंक्तियां सीधी रखने और सिरे तक दाना भरने में मदद करता है।',
          },
          applicationMethod: {
            en: 'Side dress in moist soil and irrigate.',
            te: 'మొక్కల మొదళ్లలో వేసి నీరు పెట్టాలి.',
            kn: 'ಬುಡಕ್ಕೆ ಹಾಕಿ ನೀರು ಹಾಯಿಸಿ.',
            hi: 'पौधों के पास डालकर सिंचाई करें।',
          },
          dosage: '30 kg Urea + 20 kg MOP per acre',
          precautions: {
            en: 'Do not delay Potash beyond silking.',
            te: 'కంకి పోగులు ఎండిన తర్వాత పొటాష్ వేస్తే ఉపయోగం ఉండదు.',
            kn: 'ತೆನೆ ಕೂದಲು ಒಣಗಿದ ನಂತರ ಪೊಟ್ಯಾಶ್ ಹಾಕಬೇಡಿ.',
            hi: 'सिल्किंग के बाद पोटाश डालने का कोई लाभ नहीं होता।',
          },
        },
      ],
      pestsAndDiseases: [],
    },
    {
      id: 'mz_stage_4',
      order: 4,
      name: {
        en: '4. Milking & Dough Cob Filling Stage',
        te: '4. పాల & గింజ గట్టిపడే దశ (కంకి ఊరే దశ)',
        kn: '4. ಹಾಲಿನ ಮತ್ತು ಕಾಳು ಗಟ್ಟಿಯಾಗುವ ಹಂತ',
        hi: '4. दुग्ध एवं दाना भराव (मिल्किंग टू डो) अवस्था',
      },
      timing: {
        en: '65 to 90 DAS',
        te: 'విత్తిన 65 నుండి 90 రోజులు',
        kn: 'ಬಿತ್ತಿದ 65 ರಿಂದ 90 ದಿನಗಳು',
        hi: 'बुवाई के 65 से 90 दिन',
      },
      stageImage: CROP_STAGE_IMAGES.maize.stages.mz_stage_4,
      whatToDo: {
        en: '1. Maintain steady soil moisture until dough stage completes.\n2. Foliar spray 0:0:50 SOP (10g/L) to maximize test weight and grain density.\n3. Protect developing cobs from ear-head caterpillars (Helicoverpa) entering cob tips.\n4. Provide watch-and-ward against birds and wild boars.',
        te: '1. గింజ గట్టిపడే వరకు చేనులో తేమ ఆరకుండా చూడాలి.\n2. గింజ బరువు, నిగనిగలాడే పసుపు రంగు కోసం లీటరు నీటికి 10 గ్రాముల 0-0-50 పొటాష్ పిచికారీ చేయాలి.\n3. కంకి చివర నుండి లోపలికి చొరబడే కంకి తొలిచే పురుగులను నివారించాలి.\n4. పక్షులు, అడవి పందుల నుండి పంటను కాపాడుకోవాలి.',
        kn: '1. ಕಾಳು ಗಟ್ಟಿಯಾಗುವವರೆಗೆ ತೇವಾಂಶ ಕಾಪಾಡಿ.\n2. ಕಾಳು ತೂಕ ಮತ್ತು ಹೊಳಪು ಬರಲು 0:0:50 ಸಿಂಪಡಿಸಿ.\n3. ತೆನೆ ಕೊರೆಯುವ ಹುಳು ನಿಯಂತ್ರಿಸಿ.\n4. ಪಕ್ಷಿ ಮತ್ತು ಕಾಡು ಪ್ರಾಣಿಗಳಿಂದ ರಕ್ಷಿಸಿ.',
        hi: '1. दाना कड़ा होने तक खेत में नमी बनाए रखें।\n2. दानों में चमक और वजन बढ़ाने के लिए 0:0:50 (10 ग्राम/लीटर) का छिड़काव करें।\n3. भुट्टे के सिरे से अंदर जाने वाली सुंडी की रोकथाम करें।\n4. पक्षियों और जंगली जानवरों से फसल की रखवाली करें।',
      },
      irrigationGuide: {
        en: 'Maintain regular irrigation every 8–10 days. Moisture stress causes shrivelled, lightweight grains.',
        te: 'క్రమం తప్పకుండా 8-10 రోజులకు తడి ఇవ్వాలి. తేమ తగ్గితే గింజలు ముడుచుకుపోయి బరువు తగ్గుతాయి.',
        kn: '8-10 ದಿನಗಳಿಗೊಮ್ಮೆ ನಿಯಮಿತ ನೀರು ನೀಡಿ.',
        hi: '8-10 दिन के अंतराल पर सिंचाई करें ताकि दाना पिचके नहीं।',
      },
      weatherPrecaution: {
        en: 'Heavy rain with squalls can cause root lodging of heavy cobs; ensure field furrows drain quickly.',
        te: 'భారీ వర్షం, గాలితో కూడిన వాతావరణం ఉంటే కాలువలు తీసి నీటిని వెంటనే బయటకు పంపాలి.',
        kn: 'ಮಳೆಯ ನೀರನ್ನು ತಕ್ಷಣ ಹೊರಹಾಕಿ ಬೆಳೆ ಬೀಳದಂತೆ ನೋಡಿಕೊಳ್ಳಿ.',
        hi: 'भारी बारिश में जल निकासी तुरंत करें ताकि भारी भुट्टों के वजन से पौधे न गिरें।',
      },
      fertilizers: [
        {
          productName: '00:00:50 Sulphate of Potash (SOP Foliar Spray)',
          productImage: INPUT_PRODUCT_IMAGES.potassium_nitrate_13_0_45,
          category: 'fertilizer',
          whenToApply: {
            en: 'Foliar spray at early milk stage (around 70–75 DAS).',
            te: 'కంకిలో పాలు పోసుకునే సమయంలో విత్తిన 70-75 రోజుల వద్ద పిచికారీ చేయాలి.',
            kn: 'ಕಾಳು ಹಾಲು ತುಂಬುವ 70-75 ದಿನಗಳಲ್ಲಿ ಸಿಂಪಡಿಸಿ.',
            hi: 'दूधिया अवस्था (70-75 दिन) पर पत्तियों पर छिड़काव करें।',
          },
          purpose: {
            en: 'Directly drives starch translocations into corn kernels, boosting test weight and shiny yellow kernels.',
            te: 'గింజ బొద్దుగా నిండటానికి, ధాన్యం బరువు పెరగడానికి, మంచి పసుపు రంగు రావడానికి తోడ్పడుతుంది.',
            kn: 'ಕಾಳುಗಳು ದಪ್ಪಗಾಗಲು ಮತ್ತು ತೂಕ ಹೆಚ್ಚಲು ಸಹಕಾರಿ.',
            hi: 'दानों में ठोस स्टार्च भराव, वजन और चमकदार पीला रंग लाता है।',
          },
          applicationMethod: {
            en: 'Foliar spray in late afternoon.',
            te: 'సాయంత్రం వేళల్లో ఆకులపై పిచికారీ చేయాలి.',
            kn: 'ಸಂಜೆ ವೇಳೆ ಸಿಂಪಡಿಸಿ.',
            hi: 'शाम के समय पत्तियों पर छिड़काव करें।',
          },
          dosage: '10 grams per liter of water (2 kg per acre)',
          precautions: {
            en: 'Spray during calm weather.',
            te: 'గాలి వేగం తక్కువగా ఉన్నప్పుడు పిచికారీ చేయాలి.',
            kn: 'ಶಾಂತ ಹವೆಯಿರುವಾಗ ಸಿಂಪಡಿಸಿ.',
            hi: 'शांत मौसम में छिड़काव करें।',
          },
        },
      ],
      pestsAndDiseases: [],
    },
    {
      id: 'mz_stage_5',
      order: 5,
      name: {
        en: '5. Black Layer Maturity & Cob Harvesting Stage',
        te: '5. గింజపై నల్లటి చుక్క (పరిపక్వత) & కంకుల కోత దశ',
        kn: '5. ಕಾಳು ಮಾಗುವ ಮತ್ತು ತೆನೆ ಕೊಯ್ಲಿನ ಹಂತ',
        hi: '5. ब्लैक लेयर परिपक्वता एवं भुट्टा कटाई अवस्था',
      },
      timing: {
        en: '95 to 120 DAS',
        te: 'విత్తిన 95 నుండి 120 రోజులు',
        kn: 'ಬಿತ್ತಿದ 95 ರಿಂದ 120 ದಿನಗಳು',
        hi: 'बुवाई के 95 से 120 दिन',
      },
      stageImage: CROP_STAGE_IMAGES.maize.stages.mz_stage_5,
      whatToDo: {
        en: '1. Check physiological maturity: Break a grain at the base; a distinct "Black Layer" indicates maximum dry matter accumulation.\n2. Outer husk leaves turn straw yellow and papery dry.\n3. Harvest cobs, dehusk, and sun-dry cobs on clean drying floor.\n4. Shell using mechanical corn sheller and dry kernels to 12% moisture for safe storage.',
        te: '1. పరిపక్వతను పరీక్షించాలి: గింజను తుంచి అడుగు భాగం చూస్తే నల్లటి చుక్క (బ్లాక్ లేయర్) కనిపిస్తే పంట పండినట్లు లెక్క.\n2. కంకి పైపొరలు గోధుమ/పసుపు రంగులోకి మారి కాగితంలా ఎండిపోతాయి.\n3. కంకులను విరిచి, పొట్టు వలిచి, కళ్ళంలో ఎండబెట్టాలి.\n4. మెషిన్ ద్వారా గింజలను వేరు చేసి తేమ 12% వచ్చే వరకు ఎండబెట్టి నిల్వ చేసుకోవాలి.',
        kn: '1. ಕಾಳಿನ ಬುಡದಲ್ಲಿ ಕಪ್ಪು ಚುಕ್ಕೆ (ಬ್ಲಾಕ್ ಲೇಯರ್) ಬಂದಾಗ ಪೂರ್ಣ ಮಾಗಿದಂತೆ.\n2. ತೆನೆಯ ಹೊಟ್ಟು ಒಣಗಿ ಹಳದಿಯಾದಾಗ ಕೊಯ್ಲು ಮಾಡಿ.\n3. ತೆನೆಗಳನ್ನು ಸುಲಿದು ಬಿಸಿಲಿನಲ್ಲಿ ಒಣಗಿಸಿ.\n4. ಕಾಳುಗಳನ್ನು ಬೇರ್ಪಡಿಸಿ 12% ತೇವಾಂಶಕ್ಕೆ ಒಣಗಿಸಿ.',
        hi: '1. दाने के आधार पर जब काला बिंदु (Black layer) बन जाए तब फसल पूर्ण परिपक्व मानी जाती है।\n2. भुट्टे के ऊपर के छिलके भूरे-पीले और कागजी हो जाएं तब भुट्टे तोड़ें।\n3. भुट्टों को छीलकर पक्के फर्श पर धूप में सुखाएं।\n4. मक्का थ्रेशर से दाने अलग करें और 12% नमी पर सुखाकर बोरियों में भरें।',
      },
      irrigationGuide: {
        en: 'Withhold all irrigation 10–12 days before harvest.',
        te: 'కోతకు 10-12 రోజుల ముందే నీటిని ఆపివేయాలి.',
        kn: 'ಕೊಯ್ಲಿಗೆ 10-12 ದಿನ ಮುನ್ನ ನೀರು ನಿಲ್ಲಿಸಿ.',
        hi: 'कटाई से 10-12 दिन पहले सिंचाई पूरी तरह बंद कर दें।',
      },
      weatherPrecaution: {
        en: 'Never pile wet freshly harvested cobs in heaps; fungal ear rot and aflatoxins develop rapidly.',
        te: 'కోసిన పచ్చి కంకులను రాశులుగా పోయరాదు; బూజు పట్టి విషపదార్థాలు (అఫ్లాటాక్సిన్) చేరతాయి.',
        kn: 'ಹಸಿ ತೆನೆಗಳನ್ನು ರಾಶಿ ಹಾಕಬೇಡಿ, ಬೂಷ್ಟು ಬರುತ್ತದೆ.',
        hi: 'ताजे तोड़े गए भुट्टों का ढेर न लगाएं, वे फफूंद लगने से खराब हो जाएंगे।',
      },
      fertilizers: [],
      pestsAndDiseases: [],
    },
  ],
  harvestingGuide: {
    en: 'Harvest when cob outer husks turn papery dry and brown, and a distinct black layer forms at the kernel base tip. Sun dry cobs, shell mechanically, and dry grain to 12% moisture.',
    te: 'కంకి పొరలు కాగితంలా ఎండిపోయి, గింజ మొదట్లో నల్లటి చుక్క ఏర్పడినప్పుడు కోయాలి. కంకులను ఎండబెట్టి, గింజలు వేరు చేసి, 12% తేమ వచ్చే వరకు ఆరబెట్టాలి.',
    kn: 'ತೆನೆ ಹೊಟ್ಟು ಒಣಗಿ ಕಾಳಿನ ಬುಡದಲ್ಲಿ ಕಪ್ಪು ಚುಕ್ಕೆ ಬಂದಾಗ ಕೊಯ್ಲು ಮಾಡಿ 12% ತೇವಾಂಶಕ್ಕೆ ಒಣಗಿಸಿ.',
    hi: 'जब भुट्टे के छिलके सूख जाएं और दाने के नीचे काला बिंदु बन जाए तब कटाई करें। 12% नमी तक सुखाएं।',
  },
  precautions: {
    en: '1. Seed treatment is compulsory against Fall Armyworm.\n2. Never drop Urea into central whorls.\n3. Ensure adequate moisture during tasseling and silking to prevent sterile ears.',
    te: '1. కత్తెర పురుగు రాకుండా విత్తన శుద్ధి తప్పనిసరిగా చేసుకోవాలి.\n2. యూరియాను నేరుగా మొక్క సుడిలో వేయరాదు.\n3. జెండాలు, పూత దశలో చేనులో నిరంతరం తేమ ఉండేలా చూడాలి.',
    kn: '1. ಕತ್ತರಿ ಹುಳುವಿಗೆ ಬೀಜೋಪಚಾರ ಕಡ್ಡಾಯ.\n2. ಯೂರಿಯಾವನ್ನು ಸುಳಿಗೆ ಹಾಕಬೇಡಿ.\n3. ಜಂಡೆ ಬರುವಾಗ ತೇವಾಂಶ ಕಾಪಾಡಿ.',
    hi: '1. फॉल आर्मीवर्म के लिए बीजोपचार अनिवार्य है।\n2. यूरिया को पोंग में न डालें।\n3. नर मंजरी और सिल्किंग के समय खेत में नमी अवश्य बनाए रखें।',
  },
  // 1. Soil & Climate
  soilAndClimate: {
    title: {
      en: 'Deep Loamy Soils & Sunny Warm Weather',
      te: 'లోతైన గరప, ఎర్ర నేలలు & అనుకూల వాతావరణం',
      kn: 'ಆಳವಾದ ಗೋಡು ಮಣ್ಣು ಮತ್ತು ಬಿಸಿಲಿನ ವಾತಾವರಣ',
      hi: 'गहरी दोमट मिट्टी एवं धूप वाला गर्म मौसम',
    },
    image: CROP_PRACTICE_IMAGES.maize.soil,
    imageCaption: {
      en: 'Deep fertile loam and alluvial soil with excellent water drainage and neutral pH 6.5 to 7.5',
      te: 'మురుగునీటి సౌకర్యం గల లోతైన ఎర్ర గరప మరియు ఒండ్రు నేలలు (pH 6.5 నుండి 7.5)',
      kn: 'ನೀರು ಸುಲಭವಾಗಿ ಇಂಗುವ ಫಲವತ್ತಾದ ಕೆಂಪು ಗೋಡು ಮಣ್ಣು',
      hi: 'उत्तम जल निकास वाली गहरी उपजाऊ दोमट एवं जलोढ़ मिट्टी (पीएच 6.5 से 7.5)',
    },
    description: {
      en: 'Maize thrives in deep, fertile, well-drained loams and silt loams with high organic matter. It requires warm temperatures (21–30°C) and plentiful sunshine. Water stagnation for even 24–48 hours kills root respiration and causes immediate plant chlorosis and stunting.',
      te: 'మొక్కజొన్నకు నీరు ఇంకే లోతైన గరప నేలలు, ఒండ్రు నేలలు అనుకూలం. 21-30°C ఉష్ణోగ్రత మరియు మంచి ఎండ అవసరం. పొలంలో 24 గంటలకు మించి నీరు నిలిస్తే వేర్లు కుళ్ళి మొక్కలు పసుపు రంగులోకి మారి ఎదుగుదల ఆగిపోతుంది.',
      kn: '21-30°C ತಾಪಮಾನ ಮತ್ತು ಒಳ್ಳೆಯ ಬಿಸಿಲು ಬೇಕು. 24 ಗಂಟೆಗಿಂತ ಹೆಚ್ಚು ನೀರು ನಿಂತರೆ ಬೇರುಗಳು ಕೊಳೆಯುತ್ತವೆ.',
      hi: 'मक्का के लिए 21-30°C तापमान और भरपूर धूप सर्वोत्तम है। खेत में 24 घंटे भी पानी भरा रहे तो पौधे पीले पड़कर सूख जाते हैं।',
    },
    details: [
      {
        en: 'Stagnation Vulnerability: Maize cannot tolerate waterlogging; ridge and furrow planting is mandatory in high-rainfall zones.',
        te: 'మురుగునీటి సున్నితత్వం: నీరు నిల్వ ఉండకూడదు; వర్షాకాలంలో బోదెలు, సాళ్ళ పద్ధతి తప్పనిసరి.',
        kn: 'ನೀರು ನಿಲ್ಲದಂತೆ ಬದುಗಳಲ್ಲಿ ಬಿತ್ತನೆ ಮಾಡಿ.',
        hi: 'जलभराव के प्रति अति संवेदनशील; अधिक वर्षा वाले क्षेत्रों में मेड़ों पर बुवाई अनिवार्य है।',
      },
    ],
  },
  // 2. Land Preparation
  landPreparation: {
    title: {
      en: 'Deep Chisel Ploughing & Ridge-Furrow Sowing Alignment',
      te: 'లోతు దుక్కి, పశువుల ఎరువు & బోదెలు-కాలువల తయారీ',
      kn: 'ಆಳವಾದ ಉಳುಮೆ ಮತ್ತು ಬದು-ಸಾಲು ನಿರ್ಮಾಣ',
      hi: 'गहरी जुताई, गोबर खाद मिलाना एवं मेड़-नाली (Ridge-Furrow) पद्धति',
    },
    image: CROP_PRACTICE_IMAGES.maize.landPrep,
    imageCaption: {
      en: 'Tractor-drawn disc plough followed by ridger creating 60 cm spaced raised ridges and irrigation furrows',
      te: 'ట్రాక్టర్‌తో లోతు దుక్కి దున్ని 60 సెం.మీ దూరంలో బోదెలు మరియు సాళ్ళు ఏర్పాటు చేయడం',
      kn: 'ಟ್ರಾಕ್ಟರ್‌ನಿಂದ ಆಳವಾಗಿ ಉಳುಮೆ ಮಾಡಿ 60 ಸೆಂ.ಮೀ ಅಂತರದ ಬದುಗಳನ್ನು ಮಾಡುವುದು',
      hi: 'ट्रैक्टर से गहरी जुताई कर 60 सेमी की दूरी पर मेड़ और सिंचाई नालियां तैयार करना',
    },
    description: {
      en: 'Plough field twice with mould-board plough and pulverize with rotavator. Incorporate 8–10 tonnes decomposed FYM + 2 kg Trichoderma viride + 50 kg Neem cake per acre. Make ridges and furrows at 60 cm spacing across slope to facilitate easy drainage and precision fertilizer banding.',
      te: 'భూమిని 2-3 సార్లు మెత్తగా దున్నాలి. ఎకరానికి 8-10 టన్నుల పశువుల ఎరువు + 2 కిలోల ట్రైకోడెర్మా + 50 కిలోల వేపపిండి వేసి కలియదున్నాలి. 60 సెం.మీ దూరంలో బోదెలు, కాలువలు తయారు చేసుకోవాలి.',
      kn: 'ಮಣ್ಣನ್ನು ನುಣ್ಣಗೆ ಉಳುಮೆ ಮಾಡಿ ತಿಪ್ಪೆ ಗೊಬ್ಬರ ಮತ್ತು ಬೇವಿನ ಹಿಂಡಿ ಬೆರೆಸಿ 60 ಸೆಂ.ಮೀ ಬದುಗಳನ್ನು ಮಾಡಿ.',
      hi: 'खेत की 2-3 गहरी जुताई कर 8-10 टन गोबर खाद + 50 किग्रा नीम खली मिलाएं। 60 सेमी पर मेड़ व नालियां बनाएं।',
    },
    details: [
      {
        en: 'Soil Aeration: Ridge planting boosts root penetration, prevents lodging during windstorms, and saves 30% water.',
        te: 'వేరు వ్యవస్థ: బోదెలపై నాటడం వలన వేర్లు బలంగా నాటుకుని బలమైన గాలులకు మొక్కలు పడిపోకుండా ఉంటాయి.',
        kn: 'ಗಿಡಗಳು ಗಾಳಿಗೆ ಬೀಳದಂತೆ ಬೇರು ಭದ್ರವಾಗುತ್ತದೆ.',
        hi: 'मेड़ पर बुवाई से जड़ें मजबूत होती हैं जिससे तेज हवा में पौधे गिरते (Lodging) नहीं हैं।',
      },
    ],
  },
  // 3. Seed & Sowing Practice
  seedAndSowingPractice: {
    seed: {
      title: {
        en: 'High-Yielding Single Cross Hybrid Seed Selection',
        te: 'అధిక దిగుబడినిచ్చే సింగిల్ క్రాస్ హైబ్రిడ్ విత్తనాలు',
        kn: 'ಹೆಚ್ಚು ಇಳುವರಿ ನೀಡುವ ಹೈಬ್ರಿಡ್ ಮೆಕ್ಕೆಜೋಳದ ಬೀಜ',
        hi: 'उच्च उपज वाली सिंगल क्रॉस संकर बीज की किस्में',
      },
      image: CROP_PRACTICE_IMAGES.maize.seed,
      imageCaption: {
        en: 'Bold, certified uniform hybrid maize kernels with high germination percentage (>90%)',
        te: '90% పైగా మొలక శాతం కలిగిన ధృవీకరించిన లావుపాటి హైబ్రిడ్ మొక్కజొన్న విత్తనాలు',
        kn: 'ಉತ್ತಮ ಮೊಳಕೆ ಪ್ರಮಾಣ ಹೊಂದಿರುವ ದಪ್ಪನೆಯ ಹೈಬ್ರಿಡ್ ಕಾಳುಗಳು',
        hi: '90% से अधिक अंकुरण क्षमता वाले प्रमाणित मोटे संकर मक्का बीज',
      },
      description: {
        en: 'Select top-performing single-cross hybrids known for tight husk cover and disease tolerance (e.g., Dekalb 9108 / 9162, Pioneer P3396 / P3522, Syngenta NK6240, or Kaveri 50). Ensure seed is bold, uniform, and carries minimum 90% germination test certification.',
        te: 'కంకిపై గట్టి పొరలు ఉండే డెకాల్బ్ 9108 / 9162, పయనీర్ 3396 / 3522, సింజెంటా NK6240 లేదా కావేరి 50 వంటి సింగిల్ క్రాస్ హైబ్రిడ్ రకాలను ఎంచుకోవాలి. ఇవి కత్తెర పురుగును తట్టుకుని అధిక దిగుబడినిస్తాయి.',
        kn: 'ಪಯೋನೀರ್ 3396, ಡೆಕಾಲ್ಬ್ 9108 ಅಥವಾ ಕಾವೇರಿ 50 ನಂತಹ ಉತ್ತಮ ಹೈಬ್ರಿಡ್ ಬೀಜ ಆಯ್ಕೆ ಮಾಡಿ.',
        hi: 'डेकाल्ब 9108, पायनियर 3396, सिंजेंटा NK6240 जैसी सिंगल क्रॉस संकर किस्में चुनें जिनके भुट्टे के छिलके कसकर बंधे हों।',
      },
      details: [
        {
          en: 'Seed Rate: 7 to 8 kg certified hybrid seed per acre for grain maize.',
          te: 'విత్తన మోతాదు: గింజ మొక్కజొన్నకు ఎకరానికి 7 నుండి 8 కిలోల విత్తనం సరిపోతుంది.',
          kn: 'ಬೀಜದ ಪ್ರಮಾಣ: ಎಕರೆಗೆ 7-8 ಕೆಜಿ ಹೈಬ್ರಿಡ್ ಬೀಜ.',
          hi: 'बीज दर: दाने के लिए 7 से 8 किग्रा संकर बीज प्रति एकड़।',
        },
      ],
    },
    treatment: {
      title: {
        en: 'Fortenza Duo / Cyantraniliprole Seed Dressing for Fall Armyworm',
        te: 'కత్తెర పురుగు నివారణకు ఫోర్టెంజా డ్యూయో రసాయన విత్తన శుద్ధి',
        kn: 'ಕತ್ತರಿ ಹುಳು ನಿಯಂತ್ರಣಕ್ಕೆ ಸೈಂಟ್ರಾನಿಲಿಪ್ರೋಲ್ ಬೀಜೋಪಚಾರ',
        hi: 'फॉल आर्मीवर्म नियंत्रण हेतु सायनट्रानिलिप्रोल (फोर्टेंज़ा डुओ) से बीजोपचार',
      },
      image: CROP_PRACTICE_IMAGES.maize.seedTreatment,
      imageCaption: {
        en: 'Coating maize seed with Cyantraniliprole + Thiamethoxam ensuring 21-day Fall Armyworm protection',
        te: 'కత్తెర పురుగు రాకుండా విత్తనానికి సయాంట్రానిలిప్రోల్ మందును సమంగా పట్టించడం',
        kn: 'ಕತ್ತರಿ ಹುಳುವಿನಿಂದ 21 ದಿನ ರಕ್ಷಣೆ ನೀಡುವ ಬೀಜೋಪಚಾರ',
        hi: 'फॉल आर्मीवर्म से 21 दिनों की सुरक्षा हेतु बीज पर कीटनाशक का लेप लगाना',
      },
      description: {
        en: 'COMPULSORY IN ALL CORN: Treat seed with Fortenza Duo (Cyantraniliprole 19.8% + Thiamethoxam 19.8% FS) @ 4 ml/kg seed, OR Gaucho (Imidacloprid 600 FS) @ 5 ml/kg seed. Also add Thiram @ 2 g/kg against seed rots. This guarantees total immunity against deadly early Fall Armyworm (FAW) whorl feeding for the first 21 days.',
        te: 'అన్ని ప్రాంతాలలో తప్పనిసరి: విత్తనానికి కిలోకు 4 మి.లీ ఫోర్టెంజా డ్యూయో (సయాంట్రానిలిప్రోల్ + థయామెథాక్సామ్) లేదా గౌచో 5 మి.లీ పట్టించాలి. కుళ్ళు తెగులు రాకుండా థైరమ్ 2 గ్రాములు కలపాలి. దీనివల్ల మొదటి 21 రోజుల వరకు కత్తెర పురుగు ఆశించదు.',
        kn: 'ಕಡ್ಡಾಯ: ಫೋರ್ಟೆಂಜಾ ಡ್ಯುಯೋ (4 ಮಿ.ಲೀ/ಕೆಜಿ) ಬಳಸಿ ಬೀಜೋಪಚಾರ ಮಾಡಿ. ಕತ್ತರಿ ಹುಳು ಬರುವುದಿಲ್ಲ.',
        hi: 'अनिवार्य: फोर्टेंज़ा डुओ (4 मिली/किग्रा) या गौचो (5 मिली/किग्रा) से बीजोपचार करें। इससे पहले 21 दिन तक फॉल आर्मीवर्म का प्रकोप नहीं होता।',
      },
      details: [
        {
          en: 'FAW Safeguard: Eliminates costly early backpack chemical whorl sprays when seedlings are vulnerable.',
          te: 'కత్తెర పురుగు రక్షణ: మొక్క చిన్నగా ఉన్నప్పుడు పురుగు మందు పిచికారీ చేసే ఖర్చు పూర్తిగా తప్పుతుంది.',
          kn: 'ಆರಂಭಿಕ ಹಂತದಲ್ಲಿ ಕೀಟನಾಶಕ ಸಿಂಪಡಿಸುವ ಖರ್ಚು ಉಳಿಯುತ್ತದೆ.',
          hi: 'शुरुआती नाजुक अवस्था में महंगी कीटनाशक दवाओं के छिड़काव की जरूरत नहीं पड़ती।',
        },
      ],
    },
    sowing: {
      title: {
        en: 'Ridge Side Dibbling at 60 cm × 20 cm Spacing',
        te: 'బోదె పక్కన 60 × 20 సెం.మీ ఎడంలో 4 సెం.మీ లోతులో గింజ నాటడం',
        kn: 'ಬದಿಯ ಸಾಲಿನಲ್ಲಿ 60 × 20 ಸೆಂ.ಮೀ ಅಂತರದಲ್ಲಿ ಬಿತ್ತನೆ',
        hi: 'मेड़ के ढलान पर 60 × 20 सेमी की दूरी पर 4 सेमी गहराई में बीजारोपण',
      },
      image: CROP_PRACTICE_IMAGES.maize.sowing,
      imageCaption: {
        en: 'Dibbling single seeds 4 cm deep at 20 cm interval on side of ridges spaced 60 cm apart',
        te: '60 సెం.మీ బోదెల పక్కన 20 సెం.మీ దూరంలో 4 సెం.మీ లోతులో ఒంటి గింజ నాటడం',
        kn: '60 ಸೆಂ.ಮೀ ಸಾಲುಗಳಲ್ಲಿ 20 ಸೆಂ.ಮೀ ಅಂತರದಲ್ಲಿ ಕಾಳು ಬಿತ್ತುವುದು',
        hi: '60 सेमी की मेड़ों के किनारे 20 सेमी की दूरी पर 4 सेमी गहराई में एक-एक बीज दबाना',
      },
      description: {
        en: 'Dibble 1 seed per hill at a depth of 3–4 cm on one-third slope of the ridge at 60 cm row-to-row and 20 cm plant-to-plant spacing. This maintains an optimal plant population of 33,333 plants/acre. Irrigate immediately after sowing (germination irrigation).',
        te: 'బోదె మధ్యలో కాకుండా పక్క భాగంలో 60 సెం.మీ వరుసల మధ్య, 20 సెం.మీ మొక్కల మధ్య ఎడంలో 3-4 సెం.మీ లోతులో గింజ నాటాలి. ఎకరానికి 33,333 మొక్కలు ఉండేలా చూసుకోవాలి. నాటిన వెంటనే నీటి తడి ఇవ్వాలి.',
        kn: '60 × 20 ಸೆಂ.ಮೀ ಅಂತರದಲ್ಲಿ 3-4 ಸೆಂ.ಮೀ ಆಳದಲ್ಲಿ ಬಿತ್ತಿ ತಕ್ಷಣ ನೀರು ಹಾಯಿಸಿ.',
        hi: 'मेड़ के ऊपरी तिहाई हिस्से पर 60 × 20 सेमी दूरी और 3-4 सेमी गहराई पर एक-एक बीज बोएं। तुरंत हल्की सिंचाई करें।',
      },
      details: [
        {
          en: 'Optimum Stand: 33,000 uniform plants per acre guarantees full canopy closure and highest ear grain weight.',
          te: 'మొక్కల సాంద్రత: ఎకరానికి 33,000 మొక్కలు ఉంటేనే గరిష్ట దిగుబడి లభిస్తుంది.',
          kn: 'ಎಕರೆಗೆ 33,000 ಗಿಡಗಳು ಇರಬೇಕು.',
          hi: 'प्रति एकड़ 33,000 पौधे रहने पर ही मक्के की अधिकतम पैदावार प्राप्त होती है।',
        },
      ],
    },
  },
  // 4. Water and Weed Management
  waterAndWeedManagement: {
    irrigation: {
      title: {
        en: 'Critical Moisture Monitoring at Knee-High, Tasseling & Silking',
        te: 'మోకాలి ఎత్తు, జెండా మరియు పూత దశలలో తగినంత తేమ',
        kn: 'ಮಂಡಿಯುದ್ದ, ಜಂಡೆ ಮತ್ತು ತೆನೆ ಬರುವಾಗ ನೀರಾವರಿ',
        hi: 'घुटने की ऊंचाई, नर मंजरी (Tasseling) एवं सिल्किंग पर सिंचाई प्रबंधन',
      },
      image: CROP_PRACTICE_IMAGES.maize.irrigation,
      imageCaption: {
        en: 'Furrow irrigation delivering steady water flow without waterlogging the maize root crowns',
        te: 'మొక్క మొదళ్ళ వద్ద నీరు నిలవకుండా సాళ్ళ ద్వారా సమానంగా నీరు పారించడం',
        kn: 'ಸಾಲುಗಳಲ್ಲಿ ಸಮವಾಗಿ ನೀರು ಹಾಯಿಸುವುದು',
        hi: 'नालियों के माध्यम से पौधों की जड़ों में बिना जलजमाव के समान रूप से सिंचाई',
      },
      description: {
        en: 'Maize requires 500–600 mm water across its lifecycle. Critical growth stages sensitive to water stress: 1. Knee-high stage (30 DAS), 2. Tasseling stage (50 DAS), 3. Silking stage (60 DAS), and 4. Dough stage (75 DAS). Stress during silking causes severe pollination failure and blank cobs.',
        te: 'మొక్కజొన్నకు జీవితకాలంలో 500-600 మి.మీ నీరు అవసరం. ముఖ్యంగా: 1. మోకాలి ఎత్తు దశ (30 రోజులు), 2. జెండా దశ (50 రోజులు), 3. సిల్క్/పీచు వచ్చే దశ (60 రోజులు), 4. పాలుపోసుకునే దశ (75 రోజులు). పీచు వచ్చే సమయంలో తేమ తగ్గితే కంకిలో గింజలు సరిగ్గా నిండవు.',
        kn: 'ಜಂಡೆ ಮತ್ತು ಸಿಲ್ಕ್ ಬರುವಾಗ ನೀರಿನ ಕೊರತೆಯಾದರೆ ತೆನೆಯಲ್ಲಿ ಕಾಳು ಕಟ್ಟುವುದಿಲ್ಲ. ನಿಯಮಿತ ನೀರು ಕೊಡಿ.',
        hi: 'मक्के में 4 क्रांतिक अवस्थाएं हैं: घुटने की ऊंचाई (30 दिन), नर मंजरी (50 दिन), सिल्किंग (60 दिन) व दाना भरते समय (75 दिन)। सिल्किंग पर सूखा पड़ने से भुट्टे खाली रह जाते हैं।',
      },
      details: [
        {
          en: 'Silking Drought Danger: Drought stress during silk emergence dries stigmatic hairs within hours, resulting in poorly-seeded "blind" ears.',
          te: 'సిల్క్ ఎండిపోవడం: పీచు వచ్చే సమయంలో నీటి ఎద్దడి వస్తే పీచు ఎండిపోయి కంకిలో గింజలు కట్టవు.',
          kn: 'ಸಿಲ್ಕ್ ಒಣಗಿದರೆ ಕಾಳು ಕೂರುವುದಿಲ್ಲ.',
          hi: 'सिल्किंग के समय पानी की कमी होने से रेशे सूख जाते हैं और भुट्टे में दाने नहीं पड़ते।',
        },
      ],
    },
    weeding: {
      title: {
        en: 'Atrazine Pre-Emergence Herbicide & Earthing-Up Operation',
        te: 'అట్రాజిన్ కలుపు మందు పిచికారీ & 30 రోజులకు మొదళ్ళకు మట్టి ఎగదోయడం',
        kn: 'ಅಟ್ರಾಜಿನ್ ಕಳೆನಾಶಕ ಮತ್ತು 30 ದಿನಕ್ಕೆ ಬುಡಕ್ಕೆ ಮಣ್ಣು ಏರಿಸುವುದು',
        hi: 'एट्राजीन शाकनाशी का प्रयोग एवं 30 दिन पर मिट्टी चढ़ाना (Earthing-Up)',
      },
      image: CROP_PRACTICE_IMAGES.maize.weeding,
      imageCaption: {
        en: 'Earthing up at knee-high stage burying furrow weeds and strengthening prop roots against lodging',
        te: 'మోకాలి ఎత్తు దశలో కలుపు తీసి మొక్క మొదళ్ళకు మట్టిని ఎగదోయడం (ఎర్తింగ్ అప్)',
        kn: 'ಮಂಡಿಯುದ್ದ ಬೆಳೆದಾಗ ಬುಡಕ್ಕೆ ಮಣ್ಣು ಏರಿಸುವುದು',
        hi: 'घुटने की ऊंचाई पर निराई-गुड़ाई कर पौधों की जड़ों पर मिट्टी चढ़ाना ताकि पौधे हवा में न गिरें',
      },
      description: {
        en: 'Spray Atrazine 50% WP @ 800 g to 1 kg per acre dissolved in 200 L water within 48 hours of sowing under adequate soil moisture. Perform manual hand weeding or inter-cultivation at 25–30 DAS followed immediately by earthing-up (raising soil around plant base) to support brace roots.',
        te: 'విత్తిన 48 గంటల లోపు నేలలో తగినంత తేమ ఉన్నప్పుడు అట్రాజిన్ 50% WP మందును ఎకరానికి 800 గ్రాముల నుండి 1 కిలో చొప్పున పిచికారీ చేయాలి. 25-30 రోజులకు కలుపు తీసి మొక్క మొదళ్ళకు మట్టి ఎగదోయాలి.',
        kn: 'ಬಿತ್ತಿದ 48 ಗಂಟೆಯೊಳಗೆ ಅಟ್ರಾಜಿನ್ ಸಿಂಪಡಿಸಿ. 30 ದಿನಕ್ಕೆ ಕಳೆ ತೆಗೆದು ಬುಡಕ್ಕೆ ಮಣ್ಣು ಹಾಕಿ.',
        hi: 'बुवाई के 48 घंटे के भीतर नमी की दशा में एट्राजीन (800 ग्राम-1 किग्रा/एकड़) छिड़कें। 30 दिन पर निराई कर मिट्टी चढ़ाएं।',
      },
      details: [
        {
          en: 'Wind-Proof Support: Earthing-up stimulates strong adventitious brace (prop) roots, stopping mature plants from lodging.',
          te: 'ఊడ వేర్ల బలం: మట్టి ఎగదోయడం వలన ఊడ వేర్లు బలంగా నాటుకుని గాలికి చేను పడిపోకుండా ఉంటుంది.',
          kn: 'ಬೇರುಗಳು ಗಟ್ಟಿಯಾಗಿ ಬೆಳೆ ಬೀಳುವುದಿಲ್ಲ.',
          hi: 'मिट्टी चढ़ाने से जटा जड़ें (Brace roots) जमीन में धंस जाती हैं और फसल आंधी-तूफान में नहीं गिरती।',
        },
      ],
    },
  },
  // 5. Flower to Fruit Milestone
  criticalMilestone: {
    title: {
      en: 'Tasseling & Silking Pollination Milestone',
      te: 'కంకి పీచు & జెండా పూత పరాగసంపర్క దశ',
      kn: 'ಜಂಡೆ ಮತ್ತು ರೇಷ್ಮೆ ಪೀಚು (ಸಿಲ್ಕ್) ಪರಾಗಸ್ಪರ್ಶ ಹಂತ',
      hi: 'नर मंजरी (Tassel) एवं भुट्टे के रेशम (Silk) का परागण चरण',
    },
    image: CROP_PRACTICE_IMAGES.maize.milestone,
    imageCaption: {
      en: 'Golden pollen shedding from top tassel onto moist, fresh pinkish-green cob silks below',
      te: 'జెండా నుండి బంగారు పరాగరేణువులు రాలి కింద ఉన్న కంకి పీచుపై పడే అద్భుతమైన దశ',
      kn: 'ಜಂಡೆಯಿಂದ ಬಂಗಾರದ ಬಣ್ಣದ ಪರಾಗ ರೇಷ್ಮೆ ಕೂದಲಿನ ಮೇಲೆ ಬೀಳುವ ಹಂತ',
      hi: 'शीर्ष मंजरी से सुनहरा परागकण नीचे ताजे रेशम (सिल्क) पर गिरकर दाना बनने की प्रक्रिया',
    },
    description: {
      en: 'Occurs from 50 to 65 DAS. Each individual silk thread connects directly to one potential ovule/kernel on the cob. Complete pollination within 5 days of silk emergence is vital. Any nutrient or water deficiency here produces half-filled or deformed cobs.',
      te: 'నాటిన 50 నుండి 65 రోజుల మధ్య జెండా మరియు కంకి పీచు వస్తాయి. కంకిపై కనిపించే ప్రతి పీచు దారం లోపల ఒక్కొక్క గింజగా మారుతుంది. 5 రోజుల్లో పరాగసంపర్కం పూర్తి కావాలి. ఈ సమయంలో నీరు మరియు పోషకాలు అందిస్తేనే కంకి నిండుగా గింజలు కడుతుంది.',
      kn: '50-65 ದಿನಗಳಲ್ಲಿ ಪರಾಗಸ್ಪರ್ಶ ನಡೆಯುತ್ತದೆ. ಈ ಸಮಯದಲ್ಲಿ ನೀರು ಮತ್ತು ಗೊಬ್ಬರ ಕೊಡುವುದು ಅತಿ ಮುಖ್ಯ.',
      hi: '50 से 65 दिन पर यह चरण आता है। भुट्टे का प्रत्येक रेशम एक दाना बनाता है। 5 दिन में परागण पूर्ण होना जरूरी है। इस समय पानी व पोटाश अवश्य दें।',
    },
    details: [
      {
        en: 'Synchrony Criticality: Excessive nitrogen without potash delays silking relative to tasseling, causing severe barrenness.',
        te: 'సమతుల్య ఎరువులు: పొటాష్ లేకుండా కేవలం యూరియా వేస్తే పీచు ఆలస్యంగా వచ్చి కంకులు గింజలు లేకుండా మిగిలిపోతాయి.',
        kn: 'ಪೊಟ್ಯಾಷ್ ಇಲ್ಲದೆ ಕೇವಲ ಯೂರಿಯಾ ಹಾಕಬೇಡಿ.',
        hi: 'बिना पोटाश के केवल यूरिया देने से सिल्क देरी से निकलता है और भुट्टे दाना रहित रह जाते हैं।',
      },
    ],
  },
  // 6. Nutrients Master Plan
  nutrientsMasterPlan: {
    primary: [
      {
        nutrientName: 'Urea (46% Nitrogen)',
        fertilizerProduct: 'Neem Coated Urea (Prilled)',
        productImage: INPUT_PRODUCT_IMAGES.urea_bag,
        category: 'primary',
        whenToApply: {
          en: 'Apply in 3 splits: 25% at basal/15 DAS, 50% at knee-high (30 DAS), and 25% at tasseling (50 DAS).',
          te: '3 దఫాలుగా వేయాలి: 25% నాటిన 15 రోజులకు, 50% మోకాలి ఎత్తు దశలో (30 రోజులు), 25% జెండా దశలో (50 రోజులు).',
          kn: '3 ಕಂತುಗಳಲ್ಲಿ ಕೊಡಿ: 15 ದಿನಕ್ಕೆ 25%, 30 ದಿನಕ್ಕೆ 50%, ಜಂಡೆ ಬರುವಾಗ 25%.',
          hi: '3 बार में दें: 25% 15 दिन पर, 50% घुटने की ऊंचाई पर (30 दिन), 25% नर मंजरी आने पर (50 दिन)।',
        },
        purpose: {
          en: 'Drives massive vegetative biomass, stem girth, leaf surface area, and large ear length.',
          te: 'మొక్కజొన్న వేగంగా ఎదగడానికి, కాండం లావెక్కడానికి, కంకి పొడవు పెరగడానికి నత్రజని ముఖ్యం.',
          kn: 'ಕಾಂಡ ಗಟ್ಟಿಯಾಗಲು ಮತ್ತು ದೊಡ್ಡ ತೆನೆ ಬರಲು.',
          hi: 'पौधे की तेजी से बढ़वार, तना मोटा करने और भुट्टे की लंबाई बढ़ाने हेतु।',
        },
        howToApply: {
          en: 'Band place 7 cm away from plant row into moist furrow and cover with soil immediately.',
          te: 'మొక్క మొదలుకు 7 సెం.మీ దూరంలో సాళ్ళలో వేసి వెంటనే మట్టితో కప్పాలి. మొక్క సుడిలో పడరాదు.',
          kn: 'ಗಿಡದ ಬುಡದಿಂದ 7 ಸೆಂ.ಮೀ ದೂರದಲ್ಲಿ ಮಣ್ಣಿನಲ್ಲಿ ಹಾಕಿ ಮುಚ್ಚಿ.',
          hi: 'पौधे से 7 सेमी दूर नाली में देकर मिट्टी से ढकें। पोंग (सुड़ी) में न डालें।',
        },
        dosage: '100 to 120 kg Urea per acre across crop cycle',
        precautions: {
          en: 'NEVER drop urea prills directly into the central whorl; it causes severe leaf scalding and death.',
          te: 'యూరియాను ఎట్టి పరిస్థితుల్లోనూ మొక్క సుడిలో (మధ్యలో) వేయరాదు; సుడి మాడిపోతుంది.',
          kn: 'ಸುಳಿಯೊಳಗೆ ಯೂರಿಯಾ ಹಾಕಬೇಡಿ, ಎಲೆಗಳು ಸುಟ್ಟುಹೋಗುತ್ತವೆ.',
          hi: 'यूरिया कभी भी पौधे के बीच वाले पोंग में न डालें, पत्तियां झुलस जाएंगी।',
        },
      },
      {
        nutrientName: 'DAP (18:46:0) / Single Super Phosphate',
        fertilizerProduct: 'Di-Ammonium Phosphate (DAP 18:46:0)',
        productImage: INPUT_PRODUCT_IMAGES.dap_bag,
        category: 'primary',
        whenToApply: {
          en: '100% full dose applied as basal application during final land preparation.',
          te: 'మొత్తం మోతాదును ఆఖరి దుక్కిలో విత్తే సమయంలో మాత్రమే వేయాలి.',
          kn: 'ಬಿತ್ತನೆ ಸಮಯದಲ್ಲಿ ಪೂರ್ಣ ಪ್ರಮಾಣವನ್ನು ಮಣ್ಣಿಗೆ ಹಾಕಿ.',
          hi: 'बुवाई के समय आखिरी जुताई में पूरी मात्रा बेसल के रूप में दें।',
        },
        purpose: {
          en: 'Essential for deep seminal root system development and rapid seedling anchor establishment.',
          te: 'మొక్కజొన్న వేరు వ్యవస్థ లోతుగా నాటుకోవడానికి మరియు మొదట్లోనే పిలకలు/వేర్లు దృఢంగా మారడానికి.',
          kn: 'ಆರಂಭಿಕ ಬೇರುಗಳ ಬೆಳವಣಿಗೆಗೆ ರಂಜಕ ಅತ್ಯಗತ್ಯ.',
          hi: 'जड़ों के गहरे विकास एवं पौधे की शुरुआती मजबूती के लिए फॉस्फोरस जरूरी है।',
        },
        howToApply: {
          en: 'Broadcast evenly before furrowing or place with seed-cum-fertilizer drill 5 cm below seed level.',
          te: 'ఆఖరి దుక్కిలో సమంగా చల్లి కలియదున్నాలి లేదా గొర్రుతో విత్తనం కంటే 5 సెం.మీ లోతులో వేయాలి.',
          kn: 'ಬಿತ್ತನೆ ಗೊಬ್ಬರದ ಕೂರಿಗೆಯಿಂದ ಬೀಜದ ಕೆಳಗೆ ಬೀಳುವಂತೆ ಹಾಕಿ.',
          hi: 'अंतिम जुताई में बिखेरें या सीड-ड्रिल द्वारा बीज से 5 सेमी नीचे दें।',
        },
        dosage: '50 kg DAP per acre (or 150 kg SSP per acre)',
        precautions: {
          en: 'Do not top-dress DAP; phosphorus is immobile and must reside in root zone.',
          te: 'DAP ను పైపాటుగా వేయరాదు; నేలలో లోపలికి వేస్తేనే వేర్లు తీసుకోగలవు.',
          kn: 'ಮೇಲುಗೊಬ್ಬರವಾಗಿ ಡಿಎಪಿ ಹಾಕಬೇಡಿ.',
          hi: 'डीएपी को ऊपर से न फेंकें, इसे हमेशा मिट्टी के नीचे जड़ों के पास दें।',
        },
      },
      {
        nutrientName: 'Muriate of Potash (MOP 0:0:60)',
        fertilizerProduct: 'MOP 60% K2O (Pink Granules)',
        productImage: INPUT_PRODUCT_IMAGES.mop_bag,
        category: 'primary',
        whenToApply: {
          en: 'Apply in 2 equal splits: 50% basal and 50% at tasseling (50 DAS).',
          te: 'రెండు దఫాలుగా వేయాలి: సగం ఆఖరి దుక్కిలో, మిగిలిన సగం జెండా వచ్చే దశలో (50 రోజులు).',
          kn: 'ಎರಡು ಕಂತಿನಲ್ಲಿ ಕೊಡಿ: ಅರ್ಧ ಬಿತ್ತನೆಗೆ, ಉಳಿದರ್ಧ ಜಂಡೆ ಬರುವಾಗ.',
          hi: 'दो भागों में दें: 50% बुवाई पर और 50% नर मंजरी (50 दिन) पर।',
        },
        purpose: {
          en: 'Strengthens stalks against storm lodging, accelerates starch synthesis into kernels, and fills cob tips completely.',
          te: 'కాండం గట్టిపడి చేను పడిపోకుండా కాపాడుతుంది. గింజల్లో పిండి పదార్థం చేరి కంకి చివరి వరకు నిండుగా గింజలు కడతాయి.',
          kn: 'ಕಾಂಡ ಗಟ್ಟಿಯಾಗಿ ಬೆಳೆ ಬೀಳುವುದಿಲ್ಲ ಮತ್ತು ಕಾಳು ಪೂರ್ಣವಾಗಿ ತುಂಬುತ್ತದೆ.',
          hi: 'तना मजबूत करता है ताकि फसल गिरे नहीं और भुट्टे के सिरे तक पूरे दाने भरता है।',
        },
        howToApply: {
          en: 'Place in furrows 5 cm away from plant row followed by soil covering.',
          te: 'సాళ్ళలో వేసి మట్టితో కప్పి నీటి తడి ఇవ్వాలి.',
          kn: 'ಸಾಲುಗಳಲ್ಲಿ ಹಾಕಿ ಮಣ್ಣು ಮುಚ್ಚಿ ನೀರು ಕೊಡಿ.',
          hi: 'नालियों में देकर मिट्टी चढ़ाएं और हल्की सिंचाई करें।',
        },
        dosage: '35 to 40 kg MOP per acre',
        precautions: {
          en: 'Do not skip second potassic split at tasseling; tip sterility is caused by potassium deficit.',
          te: 'జెండా దశలో పొటాష్ వేయడం మానరాదు; లేకపోతే కంకి చివర గింజలు లేకుండా ఖాళీగా మిగిలిపోతుంది.',
          kn: 'ಜಂಡೆ ಬರುವಾಗ ಪೊಟ್ಯಾಷ್ ಮರೆಯಬೇಡಿ.',
          hi: 'नर मंजरी पर पोटाश की दूसरी खुराक न छोड़ें, वरना भुट्टे के सिरे खाली रह जाएंगे।',
        },
      },
    ],
    secondary: [
      {
        nutrientName: 'Magnesium Sulphate (Mg 9.6%, S 12%)',
        fertilizerProduct: 'Agricultural Magnesium Sulphate',
        productImage: INPUT_PRODUCT_IMAGES.magnesium_sulphate,
        category: 'secondary',
        whenToApply: {
          en: 'Basal soil application at 15 DAS or foliar spray at 35 DAS.',
          te: 'నాటిన 15 రోజులకు నేలలో వేయాలి లేదా 35 రోజులకు ఆకులపై పిచికారీ చేయాలి.',
          kn: '15 ದಿನಕ್ಕೆ ಮಣ್ಣಿಗೆ ಹಾಕಿ ಅಥವಾ 35 ದಿನಕ್ಕೆ ಸಿಂಪಡಿಸಿ.',
          hi: '15 दिन पर मिट्टी में दें या 35 दिन पर पत्तियों पर छिड़कें।',
        },
        purpose: {
          en: 'Prevents "interveinal chlorosis" (yellow striping between leaf veins) and maintains high photosynthetic energy.',
          te: 'ఆకు ఈనెల మధ్య పసుపు చారలు రాకుండా కాపాడి, ఆకులు ముదురు పచ్చగా ఉండటానికి సహాయపడుతుంది.',
          kn: 'ಎಲೆಗಳಲ್ಲಿ ಹಳದಿ ಪಟ್ಟೆ ಬರದಂತೆ ತಡೆಯುತ್ತದೆ.',
          hi: 'पत्तियों की नसों के बीच पीलापन रोकता है और क्लोरोफिल की मात्रा बढ़ाता है।',
        },
        howToApply: {
          en: 'Soil apply @ 10 kg/acre, OR foliar spray @ 5 g/L water (1 kg/acre).',
          te: 'ఎకరానికి 10 కిలోలు నేలలో వేయాలి లేదా లీటరు నీటికి 5 గ్రాములు కలిపి పిచికారీ చేయాలి.',
          kn: 'ಎಕರೆಗೆ 10 ಕೆಜಿ ಮಣ್ಣಿಗೆ ಹಾಕಿ ಅಥವಾ 5 ಗ್ರಾಂ/ಲೀ ಸಿಂಪಡಿಸಿ.',
          hi: '10 किग्रा/एकड़ मिट्टी में दें या 5 ग्राम/लीटर पानी में घोलकर छिड़कें।',
        },
        dosage: '10 kg/acre soil application',
        precautions: {
          en: 'Essential in light sandy soils where magnesium leaches rapidly.',
          te: 'తేలికపాటి ఇసుక నేలల్లో ఇది తప్పనిసరిగా వేయాలి.',
          kn: 'ಮರಳು ಮಣ್ಣಿನಲ್ಲಿ ಇದು ಕಡ್ಡಾಯ.',
          hi: 'हल्की रेतीली जमीनों में इसका प्रयोग अत्यंत आवश्यक है।',
        },
      },
    ],
    micronutrients: [
      {
        nutrientName: 'Zinc Sulphate Heptahydrate (Zn 21%)',
        fertilizerProduct: 'Zinc Sulphate 21% (Crystalline)',
        productImage: INPUT_PRODUCT_IMAGES.zinc_sulphate,
        category: 'micronutrient',
        whenToApply: {
          en: 'Basal application at land prep, or foliar spray at knee-high (30 DAS).',
          te: 'ఆఖరి దుక్కిలో వేయాలి లేదా 30 రోజులకు ఆకులపై పిచికారీ చేయాలి.',
          kn: 'ಕೊನೆಯ ಉಳುಮೆಯಲ್ಲಿ ಹಾಕಿ ಅಥವಾ 30 ದಿನಕ್ಕೆ ಸಿಂಪಡಿಸಿ.',
          hi: 'अंतिम जुताई में दें या 30 दिन की अवस्था पर पत्तियों पर छिड़कें।',
        },
        purpose: {
          en: 'CRITICAL IN MAIZE: Prevents fatal "White Bud of Maize" (bleached white central whorl leaves) and stunted internodes.',
          te: 'మొక్కజొన్నలో అత్యంత ముఖ్యం: ఆకులు తెల్లబడి సుడి చనిపోయే "వైట్ బడ్" (తెల్ల సుడి రోగం) రాకుండా నివారిస్తుంది.',
          kn: 'ಮೆಕ್ಕೆಜೋಳಕ್ಕೆ ಅತಿ ಮುಖ್ಯ: ಸುಳಿ ಎಲೆಗಳು ಬಿಳಿಯಾಗುವ "ವೈಟ್ ಬಡ್" ರೋಗ ತಡೆಯುತ್ತದೆ.',
          hi: 'मक्के में अति महत्वपूर्ण: पत्तियों का सफेद होना (White Bud Disease) रोकता है और बढ़वार बढ़ाता है।',
        },
        howToApply: {
          en: 'Soil apply 10–15 kg/acre separately, OR foliar spray Zinc Sulphate 21% @ 2 g/L + 1 g/L Quicklime.',
          te: 'ఎకరానికి 10-15 కిలోలు నేలలో వేయాలి లేదా లీటరు నీటికి 2 గ్రాముల జింక్ సల్ఫేట్ కలిపి పిచికారీ చేయాలి.',
          kn: 'ಎಕರೆಗೆ 10-15 ಕೆಜಿ ಮಣ್ಣಿಗೆ ಹಾಕಿ ಅಥವಾ 2 ಗ್ರಾಂ/ಲೀ ಸಿಂಪಡಿಸಿ.',
          hi: '10-15 किग्रा प्रति एकड़ मिट्टी में डालें या 2 ग्राम/लीटर पानी में घोलकर छिड़कें।',
        },
        dosage: '10–15 kg/acre soil application (once per season)',
        precautions: {
          en: 'NEVER mix Zinc Sulphate directly with DAP/SSP; insoluble zinc phosphate forms which crops cannot absorb.',
          te: 'జింక్ సల్ఫేట్‌ను DAP లేదా SSP తో కలిపి ఎప్పుడూ వేయరాదు. రెండూ నిరుపయోగం అవుతాయి.',
          kn: 'ಡಿಎಪಿ ಜೊತೆ ಜಿಂಕ್ ಸಲ್ಫೇಟ್ ಬೆರೆಸಬೇಡಿ.',
          hi: 'जिंक सल्फेट को कभी भी डीएपी या सुपर फॉस्फेट के साथ न मिलाएं।',
        },
      },
    ],
  },
  // 7. Post-Harvest
  postHarvest: {
    maturity: {
      title: {
        en: 'Husk Papery Dry & Black Layer Kernel Base Formation',
        te: 'కంకి పొరలు కాగితంలా ఎండటం & గింజ మొదట్లో నల్లటి చుక్క ఏర్పడటం',
        kn: 'ತೆನೆ ಹೊಟ್ಟು ಕಾಗದದಂತೆ ಒಣಗುವುದು ಮತ್ತು ಕಾಳಿನಲ್ಲಿ ಕಪ್ಪು ಚುಕ್ಕೆ ಮೂಡುವುದು',
        hi: 'भुट्टे के छिलकों का सूखना एवं दाने के आधार पर काली परत (Black Layer) बनना',
      },
      image: CROP_PRACTICE_IMAGES.maize.maturity,
      imageCaption: {
        en: 'Completely dried papery straw-colored husks hanging downwards with hard flinty kernels showing black abscission layer',
        te: 'కిందికి వాలి ఎండిన కంకులు మరియు గింజ మొదట్లో నల్లటి చుక్క ఏర్పడిన పూర్తి పరిపక్వ దశ',
        kn: 'ಕೆಳಗೆ ಬಾಗಿದ ಒಣ ತೆನೆಗಳು ಮತ್ತು ಗಟ್ಟಿಯಾದ ಕಾಳುಗಳು',
        hi: 'नीचे की ओर लटके सूखे भूरे भुट्टे और दाने के नीचे बनी स्पष्ट काली परत',
      },
      description: {
        en: 'Maize reaches physiological maturity when: 1. Husk covers turn completely straw-colored and papery dry, 2. The silks turn crisp dark brown, 3. Scratching the base tip of a removed kernel reveals an unmistakable dense "black layer" (vascular seal). At this point, dry matter accumulation is 100% complete.',
        te: 'మొక్కజొన్న పంట కోతకు వచ్చిందని గుర్తించడానికి: 1. కంకి మీది పొరలు ఎండిపోయి గడ్డి రంగులోకి మారడం, 2. పీచు నల్లగా మారి ఎండిపోవడం, 3. కంకి నుండి గింజను తీసి మొదట్లో చూస్తే నల్లటి చుక్క (బ్లాక్ లేయర్) కనిపించడం. ఇది రాగానే గింజ బరువు పెరగడం పూర్తయినట్లే.',
        kn: 'ತೆನೆ ಹೊಟ್ಟು ಒಣಗಿ, ಸಿಲ್ಕ್ ಕಪ್ಪಾಗಿ, ಕಾಳಿನ ಬುಡದಲ್ಲಿ ಕಪ್ಪು ಚುಕ್ಕೆ ಕಂಡಾಗ ಬೆಳೆ ಕಟಾವಿಗೆ ಸಿದ್ಧವಾಗಿದೆ.',
        hi: 'मक्का पकने के मुख्य लक्षण: 1. भुट्टे के छिलके सूखकर भूरे हो जाएं, 2. रेशम सूखकर काला हो जाए, 3. दाने को छुड़ाने पर उसके आधार पर काला बिंदु दिखे।',
      },
      details: [
        {
          en: 'Black Layer Sign: Indicates complete cessation of nutrient translocation into the grain.',
          te: 'నల్లటి చుక్క ప్రాముఖ్యత: గింజలోకి పోషకాలు చేరడం పూర్తయి గరిష్ట బరువు వచ్చినట్లు రుజువు.',
          kn: 'ಕಾಳು ಗರಿಷ್ಠ ತೂಕ ತಲುಪಿದೆ ಎಂಬುದರ ಸಂಕೇತ.',
          hi: 'काला बिंदु बताता है कि दाने में अब और वजन नहीं बढ़ेगा और फसल कटाई योग्य है।',
        },
      ],
    },
    harvesting: {
      title: {
        en: 'Manual Cob Snapping or Combine Harvester Threshing',
        te: 'చేతితో కంకులు విరవడం లేదా కంబైన్ హార్వెస్టర్‌తో కోత',
        kn: 'ಕೈಯಿಂದ ತೆನೆ ಕೀಳುವುದು ಅಥವಾ ಕಂಬೈನ್ ಹಾರ್ವೆಸ್ಟರ್ ಕೊಯ್ಲು',
        hi: 'हाथ से भुट्टे तोड़ना अथवा कंबाइन हार्वेस्टर से कटाई',
      },
      image: CROP_PRACTICE_IMAGES.maize.harvesting,
      imageCaption: {
        en: 'Snapping dried cobs off stalks cleanly and piling cobs into tractor trailers for immediate dehusking',
        te: 'కాండం నుండి కంకులను చేతితో సులభంగా విరిచి ట్రాక్టర్‌లోకి ఎక్కించి డీహస్కింగ్ చేయడం',
        kn: 'ಗಿಡದಿಂದ ಒಣ ತೆನೆಗಳನ್ನು ಕೈಯಿಂದ ಮುರಿದು ಬೇರ್ಪಡಿಸುವುದು',
        hi: 'पौधों से पके भुट्टे तोड़कर अलग करना और थ्रेशर में दाने निकालना',
      },
      description: {
        en: 'For manual harvesting, snap dry cobs from stalks by downward twisting motion. Remove husks immediately. For mechanical harvesting, deploy modern maize combine harvesters equipped with specialized corn picker-snapper heads that pick, dehusk, and shell kernels directly in the field.',
        te: 'చేతితో కోసేటప్పుడు కంకులను కిందకు ఒంచి విరిచి తీయాలి. వెంటనే కంకి పై పొరలను తొలగించాలి. లేదా మొక్కజొన్న కంబైన్ హార్వెస్టర్ ద్వారా ఒకేసారి కోత, పొట్టు తీయడం, గింజలు వేరు చేయడం పూర్తి చేయవచ్చు.',
        kn: 'ತೆನೆಗಳನ್ನು ಮುರಿದು ತಕ್ಷಣ ಹೊಟ್ಟು ತೆಗೆಯಿರಿ. ಅಥವಾ ಮೆಕ್ಕೆಜೋಳ ಹಾರ್ವೆಸ್ಟರ್ ಬಳಸಿ.',
        hi: 'हाथ से भुट्टे नीचे की ओर मरोड़कर तोड़ें और छिलके उतारें। या कॉर्न कंबाइन हार्वेस्टर से एक साथ कटाई और थ्रेशिंग करें।',
      },
      details: [
        {
          en: 'Avoid Soil Stacking: Never leave freshly snapped cobs piled in damp heaps overnight; ear rots spread fast.',
          te: 'రాశులు పోయరాదు: కోసిన కంకులను తడిగా ఉన్నప్పుడు నేలపై రాశులు పోస్తే బూజు పట్టి పాడవుతాయి.',
          kn: 'ಹಸಿ ತೆನೆಗಳ ರಾಶಿ ಹಾಕಬೇಡಿ.',
          hi: 'ताजे भुट्टों को कभी गीली जमीन पर ढेर बनाकर न छोड़ें, तुरंत छिलका उतारकर सुखाएं।',
        },
      ],
    },
    dryingAndCuring: {
      title: {
        en: 'Cob Sun-Drying & Power Maize Shelling to 12% Moisture',
        te: 'కంకులను ఎండబెట్టడం, మెకానికల్ షెల్లింగ్ & 12% తేమకు ఆరబెట్టడం',
        kn: 'ತೆನೆ ಒಣಗಿಸಿ ಮೆಷಿನ್‌ನಿಂದ ಕಾಳು ಬೇರ್ಪಡಿಸಿ 12% ತೇವಾಂಶಕ್ಕೆ ತರುವುದು',
        hi: 'भुट्टों को धूप में सुखाना, थ्रेशिंग एवं दानों को 12% नमी तक सुखाना',
      },
      image: CROP_PRACTICE_IMAGES.maize.drying,
      imageCaption: {
        en: 'Clean golden kernels spread on clean tarpaulin yards under bright sun to reach safe 12% storage moisture',
        te: 'టార్పాలిన్లపై వేసి 12% తేమ వచ్చే వరకు ఎండబెట్టిన బంగారు వర్ణపు మొక్కజొన్న గింజలు',
        kn: 'ಟಾರ್ಪಲಿನ್ ಮೇಲೆ ಕಾಳುಗಳನ್ನು ಹರಡಿ 12% ತೇವಾಂಶಕ್ಕೆ ಒಣಗಿಸುವುದು',
        hi: 'साफ तिरपाल पर फैलाकर 12% सुरक्षित नमी तक धूप में सुखाए जा रहे सुनहरे मक्का दाने',
      },
      description: {
        en: 'Sun-dry dehusked cobs on cemented drying yards or clean tarpaulins for 3–4 days until cob moisture falls to 15%. Shell kernels using a tractor/motor PTO driven maize sheller. Spread shelled kernels on tarpaulins to dry down to 12% moisture (finger nail indentation leaves no mark).',
        te: 'పొట్టు తీసిన కంకులను టార్పాలిన్లపై 3-4 రోజులు ఎండబెట్టాలి. మొక్కజొన్న షెల్లర్ మిషన్ ద్వారా గింజలను వేరు చేయాలి. వేరు చేసిన గింజలను మళ్ళీ టార్పాలిన్లపై ఎండబెట్టి తేమను 12%కి తగ్గించాలి (గోటితో నొక్కితే గింజ దిగబడకూడదు).',
        kn: 'ತೆನೆಗಳನ್ನು 3-4 ದಿನ ಒಣಗಿಸಿ ಮೆಷಿನ್‌ನಿಂದ ಕಾಳು ಬಿಡಿಸಿ 12% ತೇವಾಂಶಕ್ಕೆ ತರಬೇಕು.',
        hi: 'भुट्टों को 3-4 दिन तिरपाल पर सुखाएं। मेज शेलर से दाने निकालें और दानों को 12% नमी आने तक धूप में अच्छी तरह सुखाएं।',
      },
      details: [
        {
          en: 'Aflatoxin Eradication: High moisture (>14%) coupled with grain warmth triggers Aspergillus flavus mold and toxic aflatoxins.',
          te: 'అఫ్లాటాక్సిన్ నివారణ: 14% కంటే ఎక్కువ తేమ ఉంటే గింజలకు బూజు పట్టి విషపదార్థాలు చేరతాయి, ధర పడిపోతుంది.',
          kn: '14% ಕ್ಕಿಂತ ಹೆಚ್ಚು ತೇವಾಂಶವಿದ್ದರೆ ಬೂಷ್ಟು ಬೆಳೆಯುತ್ತದೆ.',
          hi: '14% से अधिक नमी रहने पर दानों में जहरीला एफ्लाटॉक्सिन फफूंद लग जाता है जिससे दाने बिकते नहीं।',
        },
      ],
    },
    storage: {
      title: {
        en: 'Airtight Hermetic Bags & Grain Weevil Protection',
        te: 'హెర్మెటిక్ సంచుల నిల్వ & ముక్కుపురుగు నివారణ',
        kn: 'ಗಾಳಿಯಾಡದ ಹರ್ಮೆಟಿಕ್ ಚೀಲಗಳಲ್ಲಿ ಶೇಖರಣೆ ಮತ್ತು ಕೀಟ ನಿಯಂತ್ರಣ',
        hi: 'वायुरोधी हर्metic बैग में सुरक्षित भंडारण एवं घुन से सुरक्षा',
      },
      image: CROP_PRACTICE_IMAGES.maize.storage,
      imageCaption: {
        en: 'Multi-layer hermetic bags (PICS bags) stacked on wooden pallets in clean, ventilated godown',
        te: 'చెక్క బల్లలపై పేర్చిన గాలి చొరబడని హెర్మెటిక్ సంచులలో సురక్షితంగా నిల్వ చేసిన మొక్కజొన్న',
        kn: 'ಮರದ ಹಲಗೆಗಳ ಮೇಲೆ ಹರ್ಮೆಟಿಕ್ ಚೀಲಗಳಲ್ಲಿ ಸಂಗ್ರಹಿಸಿದ ಮೆಕ್ಕೆಜೋಳದ ಕಾಳು',
        hi: 'लकड़ी के तख्तों (Pallets) पर वायुरोधी बैग में भंडारित की गई सुरक्षित मक्का बोरियां',
      },
      description: {
        en: 'Store dried maize grain (12% moisture) in multi-layer airtight hermetic bags (e.g., PICS bags) or galvanized steel bins to suffocate Maize Weevils (Sitophilus zeamais) without chemicals. If stored in regular jute gunny bags, dust with Malathion 5% D @ 10 g per bag or fumigate with Aluminium Phosphide.',
        te: '12% తేమ ఉన్న గింజలను గాలి చొరబడని హెర్మెటిక్ సంచులలో (PICS బ్యాగులు) లేదా స్టీల్ డ్రమ్ములలో నిల్వ చేస్తే ముక్కుపురుగులు రాకుండా రసాయనాలు లేకుండా ఏడాది పాటు నిల్వ ఉంటాయి. మామూలు గోనె సంచులలో అయితే మలాథియాన్ పొడి చల్లాలి.',
        kn: '12% ತೇವಾಂಶದ ಕಾಳನ್ನು ಹರ್ಮೆಟಿಕ್ ಚೀಲಗಳಲ್ಲಿ ಅಥವಾ ಸ್ಟೀಲ್ ಡ್ರಮ್‌ಗಳಲ್ಲಿ ಶೇಖರಿಸಿ.',
        hi: '12% नमी वाले दानों को वायुरोधी हर्metic बैग (PICS बैग) या लोहे की कोठियों में रखें। इससे बिना कीटनाशक घुन से पूर्ण सुरक्षा मिलती है।',
      },
      details: [
        {
          en: 'Oxygen Deprivation: Hermetic bags naturally deplete oxygen through grain respiration, suffocating all weevils and beetle larvae within 10 days.',
          te: 'ఆక్సిజన్ లేకపోవడం: హెర్మెటిక్ బ్యాగుల్లో ఆక్సిజన్ తగ్గిపోయి పురుగులు వాటంతట అవే చనిపోతాయి.',
          kn: 'ಆಮ್ಲಜನಕವಿಲ್ಲದೆ ಕೀಟಗಳು ತಾವಾಗಿಯೇ ಸಾಯುತ್ತವೆ.',
          hi: 'हवा बंद होने से कीटों को ऑक्सीजन नहीं मिलती और घुन 10 दिनों में स्वतः मर जाते हैं।',
        },
      ],
    },
  },
};
