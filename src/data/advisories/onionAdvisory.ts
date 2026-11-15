import { CropAdvisoryRecord } from '../cropAdvisoryData';
import { CROP_STAGE_IMAGES, INPUT_PRODUCT_IMAGES, CROP_PRACTICE_IMAGES } from '../cropStageImages';

export const ONION_ADVISORY: CropAdvisoryRecord = {
  cropId: 'onion',
  cropName: {
    en: 'Onion',
    te: 'ఉల్లిపాయ',
    kn: 'ಈರುಳ್ಳಿ',
    hi: 'प्याज',
  },
  category: {
    en: 'Bulb Vegetables',
    te: 'దుంప / గడ్డ కూరగాయల పంట',
    kn: 'ಗೆಡ್ಡೆ ತರಕಾರಿ ಬೆಳೆ',
    hi: 'कंद सब्जी फसल',
  },
  icon: '🧅',
  cropImage: CROP_STAGE_IMAGES.onion.cropImage,
  suitableSeason: {
    en: 'Kharif (June–July sowing), Late Kharif (Aug–Sept), Rabi (Oct–Nov)',
    te: 'ఖరీఫ్ (జూన్-జూలై), లేట్ ఖరీఫ్ (ఆగస్టు-సెప్టెంబర్), రబీ (అక్టోబర్-నవంబర్)',
    kn: 'ಖಾರಿಫ್ (ಜೂನ್-ಜುಲೈ), ಲೇಟ್ ಖಾರಿಫ್ (ಆಗಸ್ಟ್-ಸೆಪ್ಟೆಂಬರ್), ರಬಿ (ಅಕ್ಟೋಬರ್-ನವೆಂಬರ್)',
    hi: 'खरीफ (जून-जुलाई), पछेती खरीफ (अगस्त-सितंबर), रबी (अक्टूबर-नवंबर)',
  },
  soilRequirements: {
    en: 'Rich friable sandy loam or clay loam with high organic matter, excellent drainage, and pH 6.5 to 7.5.',
    te: 'సేంద్రియ పదార్థం మెండుగా ఉండి, మురుగునీరు పోయే సౌకర్యం గల ఎర్ర నేలలు, గరప నేలలు శ్రేష్టం. pH 6.5 నుండి 7.5 ఉండాలి.',
    kn: 'ಉತ್ತಮ ಸಾವಯವ ಅಂಶವುಳ್ಳ ಮರಳು ಮಿಶ್ರಿತ ಗೋಡು ಮಣ್ಣು. pH 6.5 ರಿಂದ 7.5 ಇರಬೇಕು.',
    hi: 'जीवांश से भरपूर, अच्छी जल निकासी वाली बलुई दोमट या चिकनी दोमट मिट्टी। पीएच मान 6.5 से 7.5 उपयुक्त है।',
  },
  seedAndSowing: {
    en: 'Seed rate: 3–4 kg/acre (Bhima Super, Arka Kalyan, Agrifound Dark Red). Raise nursery for 45–50 days. Transplant seedlings at 15 cm × 10 cm on flat or raised beds.',
    te: 'విత్తన మోతాదు: ఎకరానికి 3-4 కిలోల విత్తనం (భీమా సూపర్, అర్క కళ్యాణ్, అగ్రిఫౌండ్ డార్క్ రెడ్). 45-50 రోజుల నారును వరుసల మధ్య 15 సెం.మీ, మొక్కల మధ్య 10 సెం.మీ దూరంలో నాటాలి.',
    kn: 'ಬೀಜದ ಪ್ರಮಾಣ: ಎಕರೆಗೆ 3-4 ಕೆಜಿ ಬೀಜ. 45-50 ದಿನಗಳ ಸಸಿಗಳನ್ನು 15 ಸೆಂ.ಮೀ × 10 ಸೆಂ.ಮೀ ಅಂತರದಲ್ಲಿ ನಾಟಿ ಮಾಡಿ.',
    hi: 'बीज दर: 3-4 किग्रा/एकड़। 45-50 दिन की पौध की 15 सेमी × 10 सेमी दूरी पर रोपाई करें।',
  },
  cropDuration: {
    en: '120 to 140 days.',
    te: '120 నుండి 140 రోజులు.',
    kn: '120 ರಿಂದ 140 ದಿನಗಳು.',
    hi: '120 से 140 दिन।',
  },
  stages: [
    {
      id: 'on_stage_1',
      order: 1,
      name: {
        en: '1. Nursery & Field Transplanting Stage',
        te: '1. నారుమడి & నాటే దశ',
        kn: '1. ನರ್ಸರಿ ಮತ್ತು ನಾಟಿ ಹಂತ',
        hi: '1. नर्सरी एवं रोपाई अवस्था',
      },
      timing: {
        en: '0 to 25 Days After Transplanting (DAT)',
        te: 'నాటిన 0 నుండి 25 రోజులు',
        kn: 'ನಾಟಿ ಮಾಡಿದ 0 ರಿಂದ 25 ದಿನಗಳು',
        hi: 'रोपाई के 0 से 25 दिन',
      },
      stageImage: CROP_STAGE_IMAGES.onion.stages.on_stage_1,
      whatToDo: {
        en: '1. Transplant 45-day old pencil-thick seedlings at 15 cm × 10 cm spacing.\n2. Cut top one-third of seedling leaves to reduce transpiration stress.\n3. Apply basal DAP (50kg) + MOP (30kg) + Sulphur 90% (10kg) per acre during final bed preparation.\n4. Give light life irrigation on day 3.',
        te: '1. 45 రోజుల వయసు గల పెన్సిల్ లాంటి లావు ఉన్న నారును 15 × 10 సెం.మీ దూరంలో నాటుకోవాలి.\n2. నాటేటప్పుడు ఆకుల పైభాగాన్ని 1/3 వంతు కత్తిరించి వేస్తే మొక్కలు తేమను కోల్పోకుండా త్వరగా బతుకుతాయి.\n3. ఆఖరి దుక్కిలో ఎకరానికి 50 కిలోల DAP, 30 కిలోల MOP, మరియు 10 కిలోల సల్ఫర్ (గంధకం) వేయాలి.\n4. నాటిన 3వ రోజున తేలికపాటి జీవపు తడి ఇవ్వాలి.',
        kn: '1. 45 ದಿನಗಳ ಸಸಿಗಳನ್ನು 15 × 10 ಸೆಂ.ಮೀ ಅಂತರದಲ್ಲಿ ನಾಟಿ ಮಾಡಿ.\n2. ಸಸಿಗಳ ಮೇಲಿನ 1/3 ಭಾಗದ ಎಲೆಗಳನ್ನು ಕತ್ತರಿಸಿ ನಾಟಿ ಮಾಡಿ.\n3. ಕೊನೆಯ ಉಳುಮೆಯಲ್ಲಿ ಡಿಎಪಿ, ಎಂಒಪಿ ಮತ್ತು ಸಲ್ಫರ್ ಮಣ್ಣಿಗೆ ಹಾಕಿ.\n4. 3ನೇ ದಿನ ಲಘು ನೀರಾವರಿ ನೀಡಿ.',
        hi: '1. 45 दिन पुरानी पेंसिल जितनी मोटी पौध को 15 सेमी × 10 सेमी दूरी पर लगाएं।\n2. रोपाई के समय पत्तियों का ऊपरी 1/3 भाग काटकर लगाएं ताकि वाष्पोत्सर्जन कम हो।\n3. अंतिम जुताई में डीएपी 50 किग्रा, एमओपी 30 किग्रा और सल्फर 10 किग्रा प्रति एकड़ डालें।\n4. रोपाई के तीसरे दिन हल्की सिंचाई करें।',
      },
      irrigationGuide: {
        en: 'Irrigate immediately after transplanting, then light life watering on day 3.',
        te: 'నాటిన వెంటనే తడి ఇవ్వాలి, 3వ రోజున తేలికపాటి జీవపు తడి ఇవ్వాలి.',
        kn: 'ನಾಟಿ ಮಾಡಿದ ತಕ್ಷಣ ನೀರು ನೀಡಿ, 3 ನೇ ದಿನ ಲಘು ನೀರು ಕೊಡಿ.',
        hi: 'रोपाई के तुरंत बाद पानी दें और तीसरे दिन हल्की सिंचाई करें।',
      },
      weatherPrecaution: {
        en: 'Avoid transplanting in stagnant flooded fields; onion roots rot quickly.',
        te: 'చేనులో నీరు నిల్వ ఉంటే నారు కుళ్ళిపోతుంది, మురుగునీటి సౌకర్యం ఉండాలి.',
        kn: 'ಹೊಲದಲ್ಲಿ ನೀರು ನಿಲ್ಲದಂತೆ ನೋಡಿಕೊಳ್ಳಿ.',
        hi: 'खेत में जलभराव न होने दें, अन्यथा जड़ें सड़ जाएंगी।',
      },
      fertilizers: [
        {
          productName: 'Di-Ammonium Phosphate (DAP 18:46:0) + Sulphur 90% WDG',
          productImage: INPUT_PRODUCT_IMAGES.dap,
          category: 'fertilizer',
          whenToApply: {
            en: 'Basal application incorporated during final bed preparation.',
            te: 'ఆఖరి దుక్కిలో మడులు చేసే సమయంలో నేలలో వేయాలి.',
            kn: 'ನಾಟಿಗೆ ಮುನ್ನ ಕೊನೆಯ ಉಳುಮೆಯಲ್ಲಿ ಹಾಕಿ.',
            hi: 'रोपाई से पहले अंतिम जुताई के समय खेत में मिलाएं।',
          },
          purpose: {
            en: 'Phosphorus accelerates root anchoring; elemental Sulphur gives onion its signature pungency and firm storage skin.',
            te: 'భాస్వరం వేర్లను బలంగా నాటుకునేలా చేస్తుంది; గంధకం ఉల్లిపాయకు ఘాటుదనం, మంచి నిల్వ నాణ్యతను ఇస్తుంది.',
            kn: 'ಬೇರುಗಳ ಬೆಳವణಿಗೆಗೆ ಮತ್ತು ಈರುಳ್ಳಿಯ ಖಾರ ಹಾಗೂ ಬಾಳಿಕೆಗೆ ಸಲ್ಫರ್ ಅತ್ಯಗತ್ಯ.',
            hi: 'जड़ों को मजबूत बनाता है और सल्फर प्याज में तीखापन व भंडारण क्षमता बढ़ाता है।',
          },
          applicationMethod: {
            en: 'Broadcast and soil incorporation.',
            te: 'నేలపై చల్లి కలియదున్నాలి.',
            kn: 'ಮಣ್ಣಿನಲ್ಲಿ ಬೆರೆಸಿ.',
            hi: 'खेत में बिखरकर मिट्टी में मिलाएं।',
          },
          dosage: '50 kg DAP + 30 kg MOP + 10 kg Sulphur 90% per acre',
          precautions: {
            en: 'Never omit Sulphur; onion is a high sulfur demanding crop.',
            te: 'ఉల్లిపాయకు సల్ఫర్ (గంధకం) తప్పనిసరిగా వేయాలి.',
            kn: 'ಸಲ್ಫರ್ ಹಾಕುವುದನ್ನು ಮರೆಯಬೇಡಿ.',
            hi: 'प्याज की फसल में सल्फर डालना अनिवार्य है।',
          },
        },
      ],
      pestsAndDiseases: [],
    },
    {
      id: 'on_stage_2',
      order: 2,
      name: {
        en: '2. Vegetative Growth & Foliage Development',
        te: '2. ఆకుల ఎదుగుదల & శాఖీయ దశ',
        kn: '2. ಸಸ್ಯಕ ಬೆಳವಣಿಗೆ ಹಂತ',
        hi: '2. वानस्पतिक वृद्धि अवस्था',
      },
      timing: {
        en: '25 to 50 DAT',
        te: 'నాటిన 25 నుండి 50 రోజులు',
        kn: 'ನಾಟಿ ಮಾಡಿದ 25 ರಿಂದ 50 ದಿನಗಳು',
        hi: 'रोपाई के 25 से 50 दिन',
      },
      stageImage: CROP_STAGE_IMAGES.onion.stages.on_stage_2,
      whatToDo: {
        en: '1. Hand weed at 30-35 DAT to keep field clean (onion has shallow roots).\n2. Top dress Urea (25kg/acre) along with Micronutrient Zinc Sulphate (10kg).\n3. Scout for tiny yellow Onion Thrips hiding inside leaf sheaths.\n4. Spray blue sticky traps (15/acre) to monitor thrips population.',
        te: '1. నాటిన 30-35 రోజులకు కూలీలతో కలుపు తీయించాలి (ఉల్లి వేర్లు పైపైనే ఉంటాయి).\n2. ఎకరానికి 25 కిలోల యూరియా మరియు 10 కిలోల జింక్ సల్ఫేట్ పైపాటుగా వేయాలి.\n3. ఆకుల తొడుగుల్లో దాగి ఉండే తామర పురుగులను (త్రిప్స్) గమనించాలి.\n4. తామర పురుగుల ఉధృతిని పసిగట్టడానికి ఎకరానికి 15 నీలి రంగు జిగురు అట్టలు పెట్టాలి.',
        kn: '1. 30-35 ದಿನಗಳಲ್ಲಿ ಕಳೆ ಕೀಳಿಸಿ.\n2. ಎಕರೆಗೆ 25 ಕೆಜಿ ಯೂರಿಯಾ ಮತ್ತು ಜಿಂಕ್ ಗೊಬ್ಬರ ಮೇಲುಗೊಬ್ಬರವಾಗಿ ನೀಡಿ.\n3. ಎಲೆಗಳ ಸಂದಿನಲ್ಲಿರುವ ನುಸಿ ಹುಳುಗಳನ್ನು ಗಮನಿಸಿ.\n4. ನೀಲಿ ಬಲೆಗಳನ್ನು ಅಳವಡಿಸಿ.',
        hi: '1. रोपाई के 30-35 दिन बाद हाथ से निराई करके खरपतवार निकालें।\n2. 25 किग्रा यूरिया और 10 किग्रा जिंक सल्फेट प्रति एकड़ टॉप ड्रेसिंग करें।\n3. पत्तियों के बीच में छिपने वाले थ्रिप्स (चूर्णी कीट) की निगरानी करें।\n4. नीले चिपचिपे कार्ड प्रति एकड़ लगाएं।',
      },
      irrigationGuide: {
        en: 'Irrigate every 5–7 days depending on soil. Never allow soil surface to crack deeply.',
        te: 'నేల స్వభావాన్ని బట్టి 5-7 రోజులకు తడి ఇవ్వాలి. నేల పగుళ్లు ఇచ్చే వరకు ఆరనివ్వరాదు.',
        kn: '5-7 ದಿನಗಳಿಗೊಮ್ಮೆ ನೀರಾವರಿ ನೀಡಿ.',
        hi: '5-7 दिनों के अंतराल पर हल्की सिंचाई करें। मिट्टी में दरारें न पड़ने दें।',
      },
      weatherPrecaution: {
        en: 'Excess moisture promotes Purple Blotch fungus; avoid overhead watering.',
        te: 'తేమ ఎక్కువైతే పర్పుల్ బ్లాచ్ తెగులు వ్యాపిస్తుంది, చేనులో నీరు నిల్వ ఉండకుండా చూడాలి.',
        kn: 'ಹೆಚ್ಚು ತೇವಾಂಶದಿಂದ ನೇರಳೆ ಮಚ್ಚೆ ರೋಗ ಬರುತ್ತದೆ.',
        hi: 'अधिक नमी से परपल ब्लॉच रोग फैलता है, जलभराव न होने दें।',
      },
      fertilizers: [
        {
          productName: 'Urea + Zinc Sulphate 21%',
          productImage: INPUT_PRODUCT_IMAGES.urea,
          category: 'fertilizer',
          whenToApply: {
            en: 'Top dress at 30–35 DAT followed by light irrigation.',
            te: 'నాటిన 30-35 రోజుల వద్ద పైపాటుగా వేసి వెంటనే నీరు పెట్టాలి.',
            kn: '30-35 ದಿನಗಳಲ್ಲಿ ಮೇಲುಗೊಬ್ಬರವಾಗಿ ಹಾಕಿ ನೀರು ಹಾಯಿಸಿ.',
            hi: '30-35 दिन पर टॉप ड्रेसिंग करें और तुरंत पानी दें।',
          },
          purpose: {
            en: 'Builds green tubular leaves (foliage is the factory that fills the bulb later).',
            te: 'ఆకులు పచ్చగా, ఏపుగా పెరగడానికి తోడ్పడుతుంది (ఆకులు బాగుంటేనే గడ్డ బాగా ఊరుతుంది).',
            kn: 'ಎಲೆಗಳ ಹುಲುಸಾದ ಬೆಳವಣಿಗೆಗೆ ನೆರವಾಗುತ್ತದೆ.',
            hi: 'पत्तियों की अच्छी वृद्धि के लिए आवश्यक है, क्योंकि पत्तियां ही कंद को बड़ा बनाती हैं।',
          },
          applicationMethod: {
            en: 'Broadcasting in moist soil.',
            te: 'తేమ ఉన్నప్పుడు చల్లి తడి ఇవ్వాలి.',
            kn: 'ತೇವಾಂಶವಿರುವಾಗ ಮಣ್ಣಿಗೆ ಹಾಕಿ.',
            hi: 'मिट्टी में नमी होने पर बिखरकर दें।',
          },
          dosage: '25 kg Neem Coated Urea + 10 kg Zinc Sulphate per acre',
          precautions: {
            en: 'Do not delay Nitrogen beyond 50 DAT; late nitrogen causes thick necks and rotting in storage.',
            te: 'నాటిన 50 రోజుల తర్వాత యూరియా వేయకూడదు; ఆలస్యంగా వేస్తే ఉల్లి మెడ లావై నిల్వలో కుళ్ళిపోతుంది.',
            kn: '50 ದಿನಗಳ ನಂತರ ಯೂರಿಯಾ ಹಾಕಬೇಡಿ.',
            hi: '50 दिन के बाद यूरिया न डालें अन्यथा प्याज की गर्दन मोटी हो जाएगी और भंडारण में सड़ जाएगी।',
          },
        },
      ],
      pestsAndDiseases: [
        {
          name: {
            en: 'Onion Thrips (Thrips tabaci)',
            te: 'ఉల్లి తామర పురుగులు (త్రిప్స్)',
            kn: 'ಈರುಳ್ಳಿ ನುಸಿ ಹುಳುಗಳು (ತ್ರಿಪ್ಸ್)',
            hi: 'प्याज के थ्रिप्स (चूर्णी कीट)',
          },
          problemType: 'pest',
          symptomImage: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&auto=format&fit=crop&q=80',
          symptoms: {
            en: 'Silvery white patches and silvery streaks on leaves; leaf tips turn brown and curl downwards.',
            te: 'ఆకులపై వెండి రంగు చారలు, తెల్లటి మచ్చలు ఏర్పడి ఆకుల కొనలు ఎండిపోయి కిందికి ముడుచుకుంటాయి.',
            kn: 'ಎಲೆಗಳ ಮೇಲೆ ಬೆಳ್ಳಿಯಂತಹ ಗೆರೆಗಳು ಮತ್ತು ಚುಕ್ಕೆಗಳು ಮೂಡಿ ಎಲೆಯ ತುದಿ ಒಣಗುತ್ತದೆ.',
            hi: 'पत्तियों पर चांदी जैसे सफेद धब्बे व धारियां बन जाती हैं और पत्तियों के सिरे सूख जाते हैं।',
          },
          prevention: {
            en: 'Install blue sticky traps (15/acre); spray Neem oil 10,000 ppm.',
            te: 'ఎకరానికి 15 నీలి రంగు జిగురు అట్టలు పెట్టాలి, వేపనూనె పిచికారీ చేయాలి.',
            kn: 'ನೀಲಿ ಬಲೆ ಅಳವಡಿಸಿ, ಬೇವಿನ ಎಣ್ಣೆ ಸಿಂಪಡಿಸಿ.',
            hi: 'नीले स्टिकी ट्रैप लगाएं और नीम तेल का छिड़काव करें।',
          },
          treatment: {
            en: 'Spray Fipronil 5% SC (2ml/L) or Spinetoram 11.7% SC (1ml/L).',
            te: 'లీటరు నీటికి 2 మి.లీ ఫిప్రోనిల్ లేదా 1 మి.లీ స్పైనెటోరం కలిపి పిచికారీ చేయాలి.',
            kn: 'ಫಿಪ್ರೋನಿಲ್ (2 ಮಿ.ಲೀ/ಲೀಟರ್) ಸಿಂಪಡಿಸಿ.',
            hi: 'फिप्रोनिल 5% एससी (2 मिली/लीटर) का छिड़काव करें।',
          },
          recommendedProduct: 'Fipronil 5% SC (Regent)',
          productImage: INPUT_PRODUCT_IMAGES.imidacloprid,
          applicationTiming: {
            en: 'Direct spray into central leaf sheaths where thrips hide.',
            te: 'తామర పురుగులు దాగి ఉండే ఆకుల తొడుగుల లోపలికి మందు చేరేలా పిచికారీ చేయాలి.',
            kn: 'ಎಲೆಗಳ ಸಂದಿಗೆ ತಲುಪುವಂತೆ ಸಿಂಪಡಿಸಿ.',
            hi: 'पत्तियों के अंदरूनी भाग तक दवा पहुंचे ऐसा छिड़काव करें।',
          },
        },
      ],
    },
    {
      id: 'on_stage_3',
      order: 3,
      name: {
        en: '3. Bulb Initiation & Swelling Stage',
        te: '3. ఉల్లిగడ్డ ఏర్పడే & ఊరే దశ',
        kn: '3. ಗೆಡ್ಡೆ ಕಟ್ಟುವ ಮತ್ತು ಊದುವ ಹಂತ',
        hi: '3. कंद बनना (बल्बिंग) एवं फुलाव अवस्था',
      },
      timing: {
        en: '50 to 80 DAT',
        te: 'నాటిన 50 నుండి 80 రోజులు',
        kn: 'ನಾಟಿ ಮಾಡಿದ 50 ರಿಂದ 80 ದಿನಗಳು',
        hi: 'रोपाई के 50 से 80 दिन',
      },
      stageImage: CROP_STAGE_IMAGES.onion.stages.on_stage_3,
      whatToDo: {
        en: '1. COMPLETELY STOP Nitrogen (Urea) application now.\n2. Apply high Potash fertilizer (0:0:50 SOP) to drive starch into the bulb.\n3. Spray Boron 20% (1g/L) to prevent hollow hearts and splitting of bulbs.\n4. Scout for Purple Blotch fungal lesions on older leaves.',
        te: '1. ఈ దశలో యూరియా వేయడం పూర్తిగా నిలిపివేయాలి.\n2. గడ్డ లావుగా ఊరడానికి పొటాష్ (0-0-50) ఎరువును అందించాలి.\n3. గడ్డ లోపల డొల్లతనం రాకుండా, పాయలు పగలకుండా లీటరు నీటికి 1 గ్రాము బోరాన్ 20% పిచికారీ చేయాలి.\n4. పాత ఆకులపై పర్పుల్ బ్లాచ్ (ఊదా రంగు మచ్చ తెగులు) ఉందేమో గమనించాలి.',
        kn: '1. ಯೂರಿಯಾ ಗೊಬ್ಬರ ಹಾಕುವುದನ್ನು ಸಂಪೂರ್ಣ ನಿಲ್ಲಿಸಿ.\n2. ಗೆಡ್ಡೆ ದಪ್ಪಗಾಗಲು 0:0:50 ಪೊಟ್ಯಾಶ್ ಗೊಬ್ಬರ ನೀಡಿ.\n3. ಗೆಡ್ಡೆ ಬಿರುಕು ಬಿಡದಂತೆ ಬೋರಾನ್ ಸಿಂಪಡಿಸಿ.\n4. ನೇರಳೆ ಮಚ್ಚೆ ರೋಗವನ್ನು ಗಮನಿಸಿ.',
        hi: '1. यूरिया (नाइट्रोजन) का प्रयोग अब पूरी तरह बंद कर दें।\n2. कंद फुलाने के लिए 0:0:50 पोटाश खाद दें।\n3. कंद फटने से रोकने और ठोस बनाने के लिए बोरॉन (1 ग्राम/लीटर) का छिड़काव करें।\n4. परपल ब्लॉच (बैंगनी धब्बा) रोग की निगरानी करें।',
      },
      irrigationGuide: {
        en: 'Maintain optimum moisture. Any moisture stress now results in split/double bulbs and undersized yield.',
        te: 'ఈ సమయంలో నేలలో నిరంతరం తేమ ఉండాలి. నీటి ఎద్దడి వస్తే గడ్డలు పగిలిపోతాయి లేదా చిన్నవిగా ఉండిపోతాయి.',
        kn: 'ತೇವಾಂಶ ಸಮತೋಲನದಲ್ಲಿರಲಿ. ನೀರಿನ ಕೊರತೆಯಾದರೆ ಗೆಡ್ಡೆ ಬಿರುಕು ಬಿಡುತ್ತದೆ.',
        hi: 'नमी एकसमान रखें। पानी की कमी होने पर कंद फट जाते हैं या छोटे रह जाते हैं।',
      },
      weatherPrecaution: {
        en: 'Cloudy weather with dew induces Purple Blotch epidemic; spray preventive fungicide.',
        te: 'మబ్బు వాతావరణం, మంచు ఎక్కువగా ఉంటే ఊదా మచ్చ తెగులు వేగంగా వ్యాపిస్తుంది.',
        kn: 'ಮಬ್ಬು ವಾತಾವರಣವಿದ್ದರೆ ಶಿಲೀಂಧ್ರನಾಶಕ ಸಿಂಪಡಿಸಿ.',
        hi: 'बादल छाने और ओस पड़ने पर कवकनाशी का छिड़काव करें।',
      },
      fertilizers: [
        {
          productName: '00:00:50 Sulphate of Potash (SOP) + Boron 20%',
          productImage: INPUT_PRODUCT_IMAGES.potassium_nitrate_13_0_45,
          category: 'fertilizer',
          whenToApply: {
            en: 'Apply at 60–70 DAT during active bulb enlargement.',
            te: 'గడ్డ ఊరే సమయంలో నాటిన 60-70 రోజులకు ఇవ్వాలి.',
            kn: 'ಗೆಡ್ಡೆ ಬೆಳೆಯುವ 60-70 ದಿನಗಳಲ್ಲಿ ನೀಡಿ.',
            hi: 'कंद फुलाव के समय 60-70 दिन पर दें।',
          },
          purpose: {
            en: 'Drives carbohydrate translocation into the bulb, deepens purple-red skin scales, increases bulb size and storage shelf-life.',
            te: 'గడ్డ మంచి సైజుకు లావెక్కి, ముదురు రంగు పొరలతో నిల్వకు అనుకూలంగా తయారవుతుంది.',
            kn: 'ಗೆಡ್ಡೆ ದಪ್ಪಗಾಗಲು ಮತ್ತು ಕೆಂಪು ಬಣ್ಣ ಬರಲು ಸಹಕಾರಿ.',
            hi: 'कंद का आकार बड़ा, चमकदार लाल और लंबे समय तक सुरक्षित रखने योग्य बनता है।',
          },
          applicationMethod: {
            en: 'Soil application / drip fertigation or foliar spray (5g/L).',
            te: 'డ్రిప్ ద్వారా లేదా లీటరు నీటికి 5 గ్రాముల చొప్పున ఆకులపై పిచికారీ చేయాలి.',
            kn: 'ಹನಿ ನೀರಾವರಿ ಅಥವಾ ಎಲೆ ಸಿಂಪರಣೆ ಮೂಲಕ.',
            hi: 'ड्रिप द्वारा या 5 ग्राम/लीटर पत्तियों पर छिड़काव करें।',
          },
          dosage: '5 kg SOP (0:0:50) + 500g Boron per acre',
          precautions: {
            en: 'Do not use MOP (Chloride form).',
            te: 'క్లోరైడ్ ఉండే MOP బదులు SOP మాత్రమే వాడాలి.',
            kn: 'ಎಂಒಪಿ ಬಳಸಬೇಡಿ, ಎಸ್‌ಒಪಿ ಬಳಸಿ.',
            hi: 'केवल एसओपी का प्रयोग करें।',
          },
        },
      ],
      pestsAndDiseases: [
        {
          name: {
            en: 'Purple Blotch (Alternaria porri)',
            te: 'ఊదా రంగు మచ్చ తెగులు (పర్పుల్ బ్లాచ్)',
            kn: 'ನೇರಳೆ ಮಚ್ಚೆ ರೋಗ',
            hi: 'बैंगनी धब्बा रोग (परपल ब्लॉच)',
          },
          problemType: 'disease',
          symptomImage: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&auto=format&fit=crop&q=80',
          symptoms: {
            en: 'Sunken water-soaked lesions that turn purple/brown with yellow margins, causing leaves to break and collapse.',
            te: 'ఆకులపై ఊదా లేదా ముదురు గోధుమ రంగు మచ్చలు ఏర్పడి ఆకులు మధ్యకు విరిగి పడిపోతాయి.',
            kn: 'ಎಲೆಗಳ ಮೇಲೆ ನೇರಳೆ ಬಣ್ಣದ ಮಚ್ಚೆಗಳು ಮೂಡಿ ಎಲೆಗಳು ಮುರಿದು ಬೀಳುತ್ತವೆ.',
            hi: 'पत्तियों पर बैंगनी-कत्थई धब्बे बनते हैं और पत्तियां बीच से टूटकर लटक जाती हैं।',
          },
          prevention: {
            en: 'Spray Mancozeb 75% WP (2.5g/L) at first sign of dew and overcast sky.',
            te: 'మంచు ఎక్కువగా ఉన్నప్పుడు మ్యాంకోజెబ్ (2.5 గ్రా/లీ) పిచికారీ చేయాలి.',
            kn: 'ಮ್ಯಾಂಕೋಜೆಬ್ ಸಿಂಪಡಿಸಿ.',
            hi: 'मैंकोजेब (2.5 ग्राम/लीटर) का छिड़काव करें।',
          },
          treatment: {
            en: 'Spray Difenoconazole 25% EC (Score 1ml/L) or Tebuconazole + Trifloxystrobin (0.6g/L).',
            te: 'లీటరు నీటికి 1 మి.లీ స్కోర్ లేదా 0.6 గ్రాముల నేటివో కలిపి పిచికారీ చేయాలి.',
            kn: 'ಸ್ಕೋರ್ (1 ಮಿ.ಲೀ/ಲೀಟರ್) ಸಿಂಪಡಿಸಿ.',
            hi: 'स्कोर (1 मिली/लीटर पानी) का छिड़काव करें।',
          },
          recommendedProduct: 'Difenoconazole 25% EC (Score)',
          productImage: INPUT_PRODUCT_IMAGES.mancozeb,
          applicationTiming: {
            en: 'Spray on seeing purple spots, repeat after 10 days if rainy.',
            te: 'ఊదా మచ్చలు కనిపించగానే పిచికారీ చేయాలి.',
            kn: 'ಲಕ್ಷಣ ಕಂಡ ತಕ್ಷಣ ಸಿಂಪಡಿಸಿ.',
            hi: 'लक्षण दिखते ही छिड़काव करें।',
          },
        },
      ],
    },
    {
      id: 'on_stage_4',
      order: 4,
      name: {
        en: '4. Bulb Maturity & Neck-Fall Stage',
        te: '4. గడ్డ పరిపక్వత & మెడ వాలే దశ (నెక్-ఫాల్)',
        kn: '4. ಗೆಡ್ಡೆ ಪಕ್ವತೆ ಮತ್ತು ಕುತ್ತಿಗೆ ಬಾಗುವ ಹಂತ',
        hi: '4. कंद परिपक्वता एवं गर्दन झुकने (नेक-फॉल) की अवस्था',
      },
      timing: {
        en: '85 to 110 DAT',
        te: 'నాటిన 85 నుండి 110 రోజులు',
        kn: 'ನಾಟಿ ಮಾಡಿದ 85 ರಿಂದ 110 ದಿನಗಳು',
        hi: 'रोपाई के 85 से 110 दिन',
      },
      stageImage: CROP_STAGE_IMAGES.onion.stages.on_stage_4,
      whatToDo: {
        en: '1. Monitor neck-fall percentage; harvest when 50–70% of plant tops fall over naturally.\n2. STRICTLY STOP irrigation 10–15 days before harvest.\n3. Never force-roll or trample tops prematurely; let tops collapse on their own.\n4. Pull bulbs gently in dry weather without skin bruising.',
        te: '1. చేనులో 50-70% మొక్కల మెడలు వాడిపోయి పక్కకు వాలినప్పుడు మాత్రమే పంటను కోయాలి.\n2. కోతకు 10-15 రోజుల ముందే నీరు కట్టడం పూర్తిగా ఆపివేయాలి.\n3. బలవంతంగా కాళ్లతో మొక్కలను తొక్కించకూడదు; సహజంగానే మెడ వాలాలి.\n4. పొడి వాతావరణంలో గడ్డలపై గాయాలు కాకుండా జాగ్రత్తగా పీకాలి.',
        kn: '1. ಶೇ. 50-70 ರಷ್ಟು ಗಿಡಗಳ ಕುತ್ತಿಗೆ ಸಹಜವಾಗಿ ಬಾಗಿದಾಗ ಕೊಯ್ಲು ಮಾಡಿ.\n2. ಕೊಯ್ಲಿಗೆ 10-15 ದಿನ ಮೊದಲು ನೀರು ನಿಲ್ಲಿಸಿ.\n3. ಬಲವಂತವಾಗಿ ಗಿಡಗಳನ್ನು ತುಳಿಯಬೇಡಿ.\n4. ಒಣ ಹವೆ ಇರುವಾಗ ಗೆಡ್ಡೆಗಳಿಗೆ ಗಾಯವಾಗದಂತೆ ಕೀಳಿ.',
        hi: '1. जब 50-70% पौधों की गर्दन स्वाभाविक रूप से झुक जाए तब खुदाई करें।\n2. खुदाई से 10-15 दिन पहले सिंचाई पूरी तरह बंद कर दें।\n3. जबरदस्ती पत्तियों को न दबाएं, उन्हें प्राकृतिक रूप से गिरने दें।\n4. सूखे मौसम में सावधानीपूर्वक खुदाई करें ताकि कंद छिले नहीं।',
      },
      irrigationGuide: {
        en: 'CRITICAL: Withhold irrigation 10–15 days before harvesting. Late watering causes soft, watery bulbs that rot rapidly during storage.',
        te: 'అత్యంత ముఖ్యం: కోతకు 10-15 రోజుల ముందు నీరు ఆపాలి. చివరలో నీరు పెడితే గడ్డలు మెత్తబడి నిల్వలో కుళ్ళిపోతాయి.',
        kn: 'ಕೊಯ್ಲಿಗೆ 10-15 ದಿನ ಮುನ್ನ ನೀರು ನಿಲ್ಲಿಸಿ. ಕೊನೆಯಲ್ಲಿ ನೀರು ಕೊಟ್ಟರೆ ಗೆಡ್ಡೆ ಕೊಳೆಯುತ್ತದೆ.',
        hi: 'खुदाई से 10-15 दिन पहले पानी पूरी तरह बंद कर दें, अन्यथा प्याज भंडारण में सड़ जाएगा।',
      },
      weatherPrecaution: {
        en: 'Never harvest under wet raining soil; fungal rotting will destroy the lot.',
        te: 'తడి నేలలో ఉల్లిపాయలు పీకరాదు.',
        kn: 'ತೇವ ಮಣ್ಣಿನಲ್ಲಿ ಕೀಳಬೇಡಿ.',
        hi: 'गीली मिट्टी में खुदाई न करें।',
      },
      fertilizers: [],
      pestsAndDiseases: [],
    },
    {
      id: 'on_stage_5',
      order: 5,
      name: {
        en: '5. Curing, Topping & Storage Stage',
        te: '5. ఆరబెట్టడం (క్యూర్), కోత & నిల్వ దశ',
        kn: '5. ಒಣಗಿಸುವುದು ಮತ್ತು ಶೇಖರಣೆ ಹಂತ',
        hi: '5. सुखाना (क्योरिंग), कटाई एवं भंडारण अवस्था',
      },
      timing: {
        en: 'Post-Harvest (Day 1 to 15)',
        te: 'కోత తర్వాతి 1 నుండి 15 రోజులు',
        kn: 'ಕೊಯ್ಲಿನ ನಂತರದ 1 ರಿಂದ 15 ದಿನಗಳು',
        hi: 'खुदाई के बाद 1 से 15 दिन',
      },
      stageImage: CROP_STAGE_IMAGES.onion.stages.on_stage_5,
      whatToDo: {
        en: '1. Field cure in windrows for 3–5 days with leaves covering bulbs to prevent sun scald.\n2. Cut top leaves leaving 2.5 cm (1 inch) neck attached to bulb; never cut flush with bulb.\n3. Shade cure in well-ventilated sheds for 10–12 days until skin turns papery and dry.\n4. Grade bulbs and store in well-aerated slatted wooden or mesh racks.',
        te: '1. పీకిన ఉల్లిపాయలను ఆకులు గడ్డలను కప్పేలా పొలంలోనే 3-5 రోజులు వరుసలుగా ఆరబెట్టాలి (క్యూర్ చేయాలి).\n2. గడ్డ మొదలు నుండి 2.5 సెం.మీ (1 అంగుళం) మెడను ఉంచి మిగిలిన ఆకులను కత్తిరించాలి; గడ్డకు ఆనించి కత్తిరించరాదు.\n3. నీడ గల గాలి ఆడే షెడ్డులలో 10-12 రోజులు ఆరబెడితే పైపొరలు కాగితంలా ఎండుతాయి.\n4. గ్రేడింగ్ చేసి మంచి గాలి ఆడే ఉల్లి స్టోరేజ్ రాకులలో నిల్వ చేసుకోవాలి.',
        kn: '1. ಕೀಳಿದ ಈರುಳ್ಳಿಯನ್ನು ಹೊಲದಲ್ಲಿ 3-5 ದಿನ ಒಣಗಿಸಿ.\n2. ಗೆಡ್ಡೆಯಿಂದ 2.5 ಸೆಂ.ಮೀ ಕುತ್ತಿಗೆ ಬಿಟ್ಟು ಎಲೆಗಳನ್ನು ಕತ್ತರಿಸಿ.\n3. ನೆರಳಿನಲ್ಲಿ ಗಾಳಿಯಾಡುವ ಜಾಗದಲ್ಲಿ 10-12 ದಿನ ಒಣಗಿಸಿ.\n4. ಉತ್ತಮ ಈರುಳ್ಳಿಗಳನ್ನು ಆರಿಸಿ ಶೇಖರಿಸಿ.',
        hi: '1. खुदाई के बाद खेत में 3-5 दिन तक ऐसे रखें कि पत्तियां कंद को ढके रहें ताकि धूप से बचाव हो।\n2. कंद से 2.5 सेमी (1 इंच) गर्दन छोड़कर पत्तियां काटें, बिल्कुल सटाकर न काटें।\n3. हवादार छायादार स्थान पर 10-12 दिन सुखाएं ताकि बाहरी छिलका सूखा व चमकदार हो जाए।\n4. छंटाई करके जालीदार रैक में भंडारित करें।',
      },
      irrigationGuide: {
        en: 'No irrigation. Keep storehouse strictly dry with cross-ventilation.',
        te: 'తేమ లేని మంచి గాలి వెలుతురు గల గదులలో నిల్వ చేయాలి.',
        kn: 'ಉತ್ತಮ ಗಾಳಿಯಾಡುವ ಒಣ ಜಾಗದಲ್ಲಿಡಿ.',
        hi: 'हवादार और सूखे गोदाम में रखें।',
      },
      weatherPrecaution: {
        en: 'Avoid damp humid storage rooms; high humidity causes premature sprouting and black mold.',
        te: 'తేమ గల గదుల్లో ఉంచితే ఉల్లిపాయలు మొలకలు వచ్చి నల్లటి బూజు పడతాయి.',
        kn: 'ತೇವಾಂಶವಿರುವ ಕೊಠಡಿಯಲ್ಲಿ ಶೇಖರಿಸಬೇಡಿ.',
        hi: 'नमी वाले कमरों में न रखें अन्यथा प्याज में अंकुरण और काली फफूंद लग जाएगी।',
      },
      fertilizers: [],
      pestsAndDiseases: [],
    },
  ],
  harvestingGuide: {
    en: 'Harvest when 50–70% of foliage falls over naturally (neck-fall). Stop irrigation 10–15 days earlier. Field cure for 3–5 days, clip neck to 2.5 cm, then shade cure for 10 days.',
    te: '50-70% ఆకులు సహజంగా పక్కకు వాలినప్పుడు మాత్రమే కోయాలి. 10-15 రోజుల ముందే నీరు ఆపాలి. 3-5 రోజులు పొలంలో ఆరబెట్టి, 2.5 సెం.మీ మెడ ఉంచి కత్తిరించి, 10 రోజులు నీడలో ఆరబెట్టాలి.',
    kn: 'ಶೇ. 50-70 ರಷ್ಟು ಗಿಡಗಳು ಬಾಗಿದಾಗ ಕೊಯ್ಲು ಮಾಡಿ. 10 ದಿನ ಮುಂಚೆ ನೀರು ನಿಲ್ಲಿಸಿ, ನೆರಳಿನಲ್ಲಿ ಒಣಗಿಸಿ.',
    hi: '50-70% पौधों की गर्दन झुकने पर खुदाई करें। 10-15 दिन पहले पानी बंद करें। छाया में 10 दिन सुखाकर भंडारित करें।',
  },
  precautions: {
    en: '1. Stop all Nitrogen applications after 50 DAT to prevent thick necks.\n2. Always include Sulphur (90% WDG) for pungency and firmness.\n3. Dry neck completely before storage to prevent neck rot.',
    te: '1. నాటిన 50 రోజుల తర్వాత యూరియా వేయడం పూర్తిగా ఆపివేయాలి.\n2. ఉల్లిపాయ గడ్డ గట్టిదనం కోసం సల్ఫర్ తప్పనిసరిగా వేయాలి.\n3. నిల్వ ఉంచే ముందు మెడ భాగం పూర్తిగా ఎండిపోయేలా చూడాలి.',
    kn: '1. 50 ದಿನಗಳ ನಂತರ ಯೂರಿಯಾ ಹಾಕಬೇಡಿ.\n2. ಸಲ್ಫರ್ ಬಳಸುವುದು ಕಡ್ಡಾಯ.\n3. ಕುತ್ತಿಗೆ ಪೂರ್ಣ ಒಣಗಿದ ನಂತರವೇ ಶೇಖರಿಸಿ.',
    hi: '1. 50 दिन के बाद यूरिया बिल्कुल न डालें।\n2. सल्फर का प्रयोग अवश्य करें।\n3. भंडारण से पहले गर्दन पूरी तरह सूखनी चाहिए।',
  },
  // 1. Soil & Climate
  soilAndClimate: {
    title: {
      en: 'Suitable Climate & Soil Requirements',
      te: 'ఉల్లి పంటకు అనుకూల వాతావరణం & నేలల వివరాలు',
      kn: 'ಈರುಳ್ಳಿಗೆ ಸೂಕ್ತ ಹವಾಮಾನ ಮತ್ತು ಮಣ್ಣಿನ ವಿವರಗಳು',
      hi: 'प्याज के लिए अनुकूल जलवायु एवं उपयुक्त मिट्टी',
    },
    image: CROP_PRACTICE_IMAGES.onion.soil,
    imageCaption: {
      en: 'Loose friable sandy loam with neutral pH 6.5–7.5 ideal for bulb expansion',
      te: 'ఉల్లి గడ్డ ఊరడానికి అనువైన గుల్లగా ఉండే గరప నేల',
      kn: 'ಗೆಡ್ಡೆ ಬೆಳೆಯಲು ಸೂಕ್ತವಾದ ಮರಳು ಮಿಶ್ರಿತ ಗೋಡು ಮಣ್ಣು',
      hi: 'कंद फैलाव के लिए उपयुक्त भुरभुरी बलुई दोमट मिट्टी',
    },
    description: {
      en: 'Onion requires cool conditions (13–24°C) during vegetative growth and warm dry weather (25–35°C) during bulb development and maturity. Free-draining rich sandy loam or light clay loam with pH 6.5–7.5 is ideal. Highly clayey or waterlogged soils cause bulb rot.',
      te: 'ఉల్లి పైరుకు ఎదుగుదల సమయంలో చల్లని వాతావరణం (13-24°C), గడ్డ ఊరే దశలో పొడి వాతావరణం (25-35°C) అవసరం. మురుగునీటి సౌకర్యం గల తేలికపాటి గరప నేలలు శ్రేష్టం.',
      kn: 'ಬೆಳವಣಿಗೆಗೆ ತಂಪಾದ ಹವೆ, ಗೆಡ್ಡೆ ಕಟ್ಟುವಾಗ ಒಣ ಹವೆ ಅಗತ್ಯ. ನೀರು ನಿಲ್ಲದ ಗೋಡು ಮಣ್ಣು ಸೂಕ್ತ.',
      hi: 'वानस्पतिक वृद्धि के समय ठंड और कंद बनते समय 25-35°C तापमान उत्तम है। जलभराव वाली मिट्टी में कंद सड़ जाते हैं।',
    },
    details: [
      {
        en: 'Photoperiod Sensitivity: Short-day tropical varieties bulb successfully at 10–12 hours daylight.',
        te: 'పగటి వెలుతురు: దక్షిణ భారతదేశంలో షార్ట్-డే రకాలు మాత్రమే గడ్డ కడతాయి.',
        kn: 'ದಿನದ ಬೆಳಕು ಗೆಡ್ಡೆ ಕಟ್ಟಲು ಮುಖ್ಯ.',
        hi: 'लघु-दिवसीय किस्में 10-12 घंटे धूप में अच्छे कंद बनाती हैं।',
      },
      {
        en: 'Drainage: Sensitive to even 24 hours of standing water.',
        te: 'మురుగునీరు: 24 గంటల పాటు నీరు నిలిస్తే వేరు కుళ్ళు మరియు మొదలు కుళ్ళు వస్తుంది.',
        kn: 'ನೀರು ನಿಲ್ಲದಂತೆ ನೋಡಿಕೊಳ್ಳಿ.',
        hi: 'पानी का भराव होने पर जड़ गलन हो जाती है।',
      },
    ],
  },
  // 2. Land Preparation
  landPreparation: {
    title: {
      en: 'Land Preparation & Raised Bed or Flat Bed Layout',
      te: 'నేల తయారీ & ఎత్తయిన బెడ్ల నిర్మాణం',
      kn: 'ಭೂಮಿ ಸಿದ್ಧತೆ ಮತ್ತು ಬೆಡ್ ನಿರ್ಮಾಣ',
      hi: 'खेत की तैयारी एवं क्यारी निर्माण',
    },
    image: CROP_PRACTICE_IMAGES.onion.landPrep,
    imageCaption: {
      en: 'Finely pulverized soil leveled with raised beds and micro-sprinkler / drip layout',
      te: 'మెత్తగా దున్ని తయారుచేసిన ఎత్తయిన బెడ్లు మరియు మైక్రో స్ప్రింక్లర్ వ్యవస్థ',
      kn: 'ಸೂಕ್ಷ್ಮ ತುಂತುರು ನೀರಾವರಿ ಸಹಿತ ಸಮತಟ್ಟಾದ ಬೆಡ್ಗಳು',
      hi: 'भुरभुरी जुताई के बाद बनी उठी क्यारियां एवं मिनी स्प्रिंकलर',
    },
    description: {
      en: 'Plough deeply 3–4 times to bring soil to a fine crumbly tilth. Construct raised beds of 1.2 m width and 15 cm height with 30 cm furrows to prevent water stagnation, or flat beds with micro-sprinklers for Rabi crops.',
      te: 'నేలను 3-4 సార్లు మెత్తగా దున్నాలి. వర్షాకాలంలో నీరు నిల్వకుండా 1.2 మీటర్ల వెడల్పు, 15 సెం.మీ ఎత్తు గల బెడ్లు లేదా మైక్రో స్ప్రింక్లర్లతో చదునైన మడులు చేయాలి.',
      kn: 'ಮಣ್ಣನ್ನು ಮೃದುವಾಗಿಸಿ 1.2 ಮೀಟರ್ ಅಗಲದ ಬೆಡ್ ತಯಾರಿಸಿ.',
      hi: '3-4 बार जुताई कर 1.2 मीटर चौड़ी और 15 सेमी उठी क्यारियां बनाएं।',
    },
    details: [
      {
        en: 'Organic Manure: Apply 10–12 tonnes well-rotted FYM + 2 kg Trichoderma viride per acre at last ploughing.',
        te: 'సేంద్రియ ఎరువు: ఆఖరి దుక్కిలో ఎకరానికి 10-12 టన్నుల పశువుల ఎరువుతో పాటు 2 కిలోల ట్రైకోడెర్మా కలపాలి.',
        kn: 'ಕೊಟ್ಟಿಗೆ ಗೊಬ್ಬರ ಮತ್ತು ಟ್ರೈಕೋಡರ್ಮಾ ಸೇರಿಸಿ.',
        hi: 'अंतिम जुताई में 10 टन गोबर की खाद और ट्राइकोडर्मा मिलाएं।',
      },
    ],
  },
  // 3. Seed & Sowing Practice
  seedAndSowingPractice: {
    seed: {
      title: {
        en: 'Onion Seed Selection & Raised Bed Nursery',
        te: 'విత్తన ఎంపిక & నారుమడి యాజమాన్యం',
        kn: 'ಬೀಜದ ಆಯ್ಕೆ ಮತ್ತು ನರ್ಸರಿ ನಿರ್ವಹಣೆ',
        hi: 'बीज चयन एवं नर्सरी प्रबंधन',
      },
      image: CROP_PRACTICE_IMAGES.onion.seed,
      imageCaption: {
        en: 'Certified true-to-type onion black seeds and robust 45-day nursery seedlings',
        te: 'నాణ్యమైన ఉల్లి విత్తనాలు మరియు 45 రోజుల ఆరోగ్యవంతమైన నారు',
        kn: 'ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಈರುಳ್ಳಿ ಬೀಜಗಳು ಮತ್ತು ಸಸಿಗಳು',
        hi: 'प्रमाणित प्याज बीज और 45 दिन की स्वस्थ पौध',
      },
      description: {
        en: 'Select genuine high-yielding varieties: Bhima Super, Bhima Dark Red, Agrifound Dark Red, or Arka Kalyan. Sow seeds on raised nursery beds (1 m width) covered with dry straw until germination.',
        te: 'భీమా సూపర్, భీమా డార్క్ రెడ్, అగ్రిఫౌండ్ డార్క్ రెడ్ లేదా అర్క కళ్యాణ్ వంటి మేలైన రకాలను ఎంపిక చేయాలి. నారుమడిలో పలచగా చల్లి గడ్డి కప్పి మొలక వచ్చే వరకు ఉంచాలి.',
        kn: 'ಭೀಮಾ ಸೂಪರ್ ಅಥವಾ ಅಗ್ರಿಫೌಂಡ್ ಡಾರ್ಕ್ ರೆಡ್ ತಳಿಗಳನ್ನು ಆರಿಸಿ.',
        hi: 'भीमा सुपर, भीमा डार्क रेड या एग्रीफाउंड डार्क रेड किस्मों का चयन करें।',
      },
      details: [
        {
          en: 'Seed Rate: 3 to 4 kg per acre.',
          te: 'విత్తన మోతాదు: ఎకరానికి 3-4 కిలోలు.',
          kn: 'ಬೀಜದ ಪ್ರಮಾಣ: ಎಕರೆಗೆ 3-4 ಕೆಜಿ.',
          hi: 'बीज दर: 3 से 4 किग्रा प्रति एकड़।',
        },
      ],
    },
    treatment: {
      title: {
        en: 'Seed Treatment & Seedling Dip',
        te: 'విత్తన శుద్ధి & నారు వేర్ల శుద్ధి',
        kn: 'ಬೀಜೋಪಚಾರ ಮತ್ತು ಸಸಿ ಉಪಚಾರ',
        hi: 'बीज एवं पौध जड़ उपचार',
      },
      image: CROP_PRACTICE_IMAGES.onion.seedTreatment,
      imageCaption: {
        en: 'Seed treatment with Thiram and seedling root dip in Carbendazim before transplanting',
        te: 'థైరమ్‌తో విత్తన శుద్ధి మరియు నాటే ముందు కార్బండజిమ్‌లో వేర్లను ముంచడం',
        kn: 'ಶಿಲೀಂಧ್ರನಾಶಕದಿಂದ ಬೀಜೋಪಚಾರ ಮತ್ತು ಬೇರು ಉಪಚಾರ',
        hi: 'थिरम से बीज उपचार एवं कार्बेंडाजिम से जड़ शोधन',
      },
      description: {
        en: 'Treat dry seeds with Thiram or Captan @ 3 g/kg seed. At transplanting, trim pencil-thick seedling foliage tops by 1/3rd and dip roots in Carbendazim 12% + Mancozeb 63% WP (2 g/L) + Chlorpyrifos 20% EC (2 ml/L) for 10 minutes.',
        te: 'విత్తనాన్ని కిలోకు 3 గ్రాముల థైరమ్‌తో శుద్ధి చేయాలి. 45 రోజుల నారును నాటే ముందు పై ఆకులను మూడో వంతు కత్తిరించి, వేర్లను సాఫ్ (2 గ్రా) + క్లోరిపైరిఫాస్ (2 మి.లీ) కలిపిన ద్రావణంలో 10 నిమిషాలు ముంచాలి.',
        kn: 'ಸಸಿಗಳ ತುದಿ ಕತ್ತರಿಸಿ ಶಿಲೀಂಧ್ರನಾಶಕ ದ್ರಾವಣದಲ್ಲಿ ಬೇರುಗಳನ್ನು ಅದ್ದಿ.',
        hi: 'पौध की पत्तियों को एक तिहाई काटकर जड़ों को साफ फफूंदनाशी के घोल में 10 मिनट डुबोएं।',
      },
      details: [
        {
          en: 'Controls Damping-Off & Smut: Destroys seed-borne and early soil-borne pathogen spores.',
          te: 'కుళ్ళు తెగులు నివారణ: నారు కుళ్ళు మరియు కాటుక తెగులు రాకుండా కాపాడుతుంది.',
          kn: 'ಬುಡ ಕೊಳೆ ರೋಗ ನಿಯಂತ್ರಣ.',
          hi: 'नर्सरी का आर्द्र-पतन और स्मट रोग रोकता है।',
        },
      ],
    },
    sowing: {
      title: {
        en: 'Transplanting Spacing & Planting Method',
        te: 'నారు నాటే పద్ధతి & ఎడం',
        kn: 'ನಾಟಿ ಮಾಡುವ ವಿಧಾನ ಮತ್ತು ಅಂತರ',
        hi: 'रोपाई की विधि एवं अंतर',
      },
      image: CROP_PRACTICE_IMAGES.onion.sowing,
      imageCaption: {
        en: 'Precision line transplanting of 45-day seedlings at 15 cm × 10 cm spacing',
        te: '15 సెం.మీ × 10 సెం.మీ దూరంలో వరుసల్లో ఉల్లి నారును నాటడం',
        kn: '15 ಸೆಂ.ಮೀ × 10 ಸೆಂ.ಮೀ ಅಂತರದಲ್ಲಿ ಸಾಲಿನಲ್ಲಿ ನಾಟಿ',
        hi: '15 सेमी × 10 सेमी की दूरी पर कतारों में रोपाई',
      },
      description: {
        en: 'Transplant 40–45 day old seedlings (pencil thickness). Plant at shallow depth (2–3 cm) at 15 cm row-to-row and 10 cm plant-to-plant spacing. Planting too deep leads to elongated bottleneck bulbs.',
        te: '40-45 రోజుల పెన్సిల్ లావు ఉన్న నారును 15 సెం.మీ × 10 సెం.మీ దూరంలో నాటాలి. కేవలం 2-3 సెం.మీ లోతులోనే నాటాలి; ఎక్కువ లోతుగా నాటితే గడ్డలు పొడవుగా మారి లావు కావు.',
        kn: '2-3 ಸೆಂ.ಮೀ ಆಳದಲ್ಲಿ 15x10 ಸೆಂ.ಮೀ ಅಂತರದಲ್ಲಿ ನಾಟಿ ಮಾಡಿ.',
        hi: '2-3 सेमी उथली गहराई पर 15 × 10 सेमी पर रोपें। गहरी रोपाई से कंद का आकार बिगड़ जाता है।',
      },
      details: [
        {
          en: 'Plant Population: Approximately 2,60,000 to 2,80,000 seedlings per acre.',
          te: 'మొక్కల సాంద్రత: ఎకరానికి సుమారు 2.6 నుండి 2.8 లక్షల నారు మొక్కలు పడతాయి.',
          kn: 'ಎಕರೆಗೆ ಸುಮಾರು 2.7 ಲಕ್ಷ ಸಸಿಗಳು.',
          hi: 'लगभग 2.7 लाख पौधे प्रति एकड़।',
        },
      ],
    },
  },
  // 4. Water and Weed Management
  waterAndWeedManagement: {
    irrigation: {
      title: {
        en: 'Irrigation Scheduling & Micro-Sprinkler Method',
        te: 'నీటి యాజమాన్యం & మైక్రో స్ప్రింక్లర్ పద్ధతి',
        kn: 'ನೀರಾವರಿ ನಿರ್ವಹಣೆ ಮತ್ತು ಸೂಕ್ಷ್ಮ ತುಂತುರು ಪದ್ಧತಿ',
        hi: 'सिंचाई प्रबंधन एवं मिनी स्प्रिंकलर विधि',
      },
      image: CROP_PRACTICE_IMAGES.onion.irrigation,
      imageCaption: {
        en: 'Micro-sprinklers providing light uniform wetting without soil compaction',
        te: 'నేల గట్టిపడకుండా తేలికపాటి తడినిచ్చే మైక్రో స్ప్రింక్లర్లు',
        kn: 'ಮಣ್ಣು ಗಟ್ಟಿಯಾಗದಂತೆ ಹಿತವಾಗಿ ನೀರುಣಿಸುವ ತುಂತುರು ವಿಧಾನ',
        hi: 'मिनी स्प्रिंकलर द्वारा हल्की एवं समान सिंचाई',
      },
      description: {
        en: 'Onion has shallow root system (15–20 cm). Provide light, frequent irrigations every 5–7 days in winter and 3–4 days in summer. Stop irrigation completely 10–15 days before harvest to prevent rotting and thick neck.',
        te: 'ఉల్లి వేర్లు పైపొరల్లోనే ఉంటాయి కాబట్టి తరచుగా తేలికపాటి తడులు ఇవ్వాలి. శీతాకాలంలో 5-7 రోజులకు, ఎండాకాలంలో 3-4 రోజులకు నీరివ్వాలి. కోతకు 10-15 రోజుల ముందే నీరు ఆపివేయాలి.',
        kn: 'ಮೇಲ್ಮಣ್ಣಿನಲ್ಲಿ ಬೇರು ಇರುವುದರಿಂದ ಲಘು ನೀರಾವರಿ ನೀಡಿ. ಕೊಯ್ಲಿಗೆ 10 ದಿನ ಮುನ್ನ ನೀರು ನಿಲ್ಲಿಸಿ.',
        hi: 'उथली जड़ें होने के कारण 5-7 दिन में हल्की सिंचाई करें। खुदाई से 15 दिन पहले पानी बंद कर दें।',
      },
      details: [
        {
          en: 'Pre-Harvest Drydown: Mandatory for developing dry papery skin and stopping rot in storage.',
          te: 'ముందస్తు నీరు ఆపడం: గడ్డపై పొర ఎర్రగా ఎండి నిల్వలో కుళ్ళకుండా ఉండటానికి తప్పనిసరి.',
          kn: 'ಸಂಗ್ರಹಣೆಯಲ್ಲಿ ಕೊಳೆಯದಂತೆ ತಡೆಯಲು ನೀರು ನಿಲ್ಲಿಸುವುದು ಕಡ್ಡಾಯ.',
          hi: 'छिलका सूखने और भंडारण में सड़न रोकने के लिए पानी रोकना अनिवार्य है।',
        },
      ],
    },
    weeding: {
      title: {
        en: 'Chemical Weeding & Hand Weeding Schedule',
        te: 'కలుపు నివారణ & సమగ్ర యాజమాన్యం',
        kn: 'ಕಳೆ ನಿರ್ವಹಣೆ',
        hi: 'खरपतवार नियंत्रण समय-सारणी',
      },
      image: CROP_PRACTICE_IMAGES.onion.weeding,
      imageCaption: {
        en: 'Weed-free onion bed at 30 DAT after pre-emergence and selective post-emergence herbicide',
        te: 'కలుపు మందు మరియు చేతి కలుపుతో శుభ్రంగా ఉన్న ఉల్లి మడి',
        kn: 'ಕಳೆ ರಹಿತ ಈರುಳ್ಳಿ ಮಡಿ',
        hi: 'खरपतवार मुक्त स्वच्छ प्याज की क्यारी',
      },
      description: {
        en: 'Spray Oxyfluorfen 23.5% EC @ 1 ml/L or Pendimethalin 30% EC @ 3.3 ml/L within 48 hours of transplanting. Follow with one shallow hand weeding at 35–40 DAT before bulbs start swelling.',
        te: 'నాటిన 48 గంటల్లోగా ఆక్సిఫ్లోర్ఫెన్ (1 మి.లీ/లీ) లేదా పెండిమిథాలిన్ (3.3 మి.లీ/లీ) పిచికారీ చేయాలి. నాటిన 35-40 రోజులకు చేతితో ఒకసారి పైపైనే కలుపు తీయాలి.',
        kn: 'ನಾಟಿ ಮಾಡಿದ 48 ಗಂಟೆಗಳಲ್ಲಿ ಕಳೆನಾಶಕ ಸಿಂಪಡಿಸಿ. 35 ದಿನಕ್ಕೆ ಕೈಕಳೆ ತೆಗೆಯಿರಿ.',
        hi: 'रोपाई के 48 घंटे में ऑक्सीफ्लोरोफेन छिड़कें और 35-40 दिन पर एक निराई करें।',
      },
      details: [
        {
          en: 'Critical Period: 15 to 45 DAT. Onion cannot compete with weeds due to tubular upright leaves.',
          te: 'కీలక సమయం: నాటిన 15 నుండి 45 రోజుల వరకు కలుపు లేకుండా చూసుకోవాలి.',
          kn: '15 ರಿಂದ 45 ದಿನಗಳವರೆಗೆ ಕಳೆ ಮುಕ್ತವಾಗಿರಲಿ.',
          hi: '15 से 45 दिन तक खेत बिल्कुल साफ रखें।',
        },
      ],
    },
  },
  // 5. Bulb Swelling Milestone
  criticalMilestone: {
    title: {
      en: 'Bulb Swelling Milestone & Neck Management',
      te: 'ఉల్లి గడ్డ ఊరే దశ & మెడ యాజమాన్యం',
      kn: 'ಗೆಡ್ಡೆ ದಪ್ಪವಾಗುವ ಹಂತ ಮತ್ತು ಕುತ್ತಿಗೆ ನಿರ್ವಹಣೆ',
      hi: 'कंद फुलाव अवस्था एवं गर्दन प्रबंधन',
    },
    image: CROP_PRACTICE_IMAGES.onion.milestone,
    imageCaption: {
      en: 'Uniform large bulb formation showing tight neck and shiny reddish-purple skin',
      te: 'సన్నని మెడతో సమానంగా ఊరిన ఎరుపు రంగు ఉల్లి గడ్డలు',
      kn: 'ಸಣ್ಣ ಕುತ್ತಿಗೆಯೊಂದಿಗೆ ಸಮನಾಗಿ ಬೆಳೆದ ಈರುಳ್ಳಿ ಗೆಡ್ಡೆಗಳು',
      hi: 'पतली गर्दन और चमकदार लाल रंग के सुडौल प्याज कंद',
    },
    description: {
      en: 'Between 60 to 90 DAT, bulbs expand rapidly. Maintain moderate soil moisture. Spray 0:0:50 (Potassium Sulphate) @ 5 g/L + Boron 20% @ 1 g/L. Strictly avoid urea / nitrogen which produces soft, unmarketable "bull heads" or thick necks.',
      te: 'నాటిన 60 నుండి 90 రోజుల మధ్య గడ్డలు వేగంగా ఊరుతాయి. ఈ సమయంలో పొటాషియం సల్ఫేట్ (0:0:50) 5 గ్రాములు + బోరాన్ 1 గ్రాము లీటరు నీటికి కలిపి పిచికారీ చేయాలి. ఈ దశలో యూరియా వేయకూడదు.',
      kn: '60 ರಿಂದ 90 ದಿನಗಳಲ್ಲಿ 0:0:50 ಮತ್ತು ಬೋರಾನ್ ಸಿಂಪಡಿಸಿ. ಯೂರಿಯಾ ಹಾಕಬೇಡಿ.',
      hi: '60 से 90 दिन पर 0:0:50 और बोरोन का छिड़काव करें। यूरिया बिल्कुल न दें।',
    },
    details: [
      {
        en: 'Prevents Splitting: Balanced potash and boron prevent premature split bulbs and bolting.',
        te: 'గడ్డ పగలకుండా: పొటాష్ మరియు బోరాన్ గడ్డలు రెండుగా చీలిపోకుండా నివారిస్తాయి.',
        kn: 'ಗೆಡ್ಡೆ ಸೀಳದಂತೆ ತಡೆಯುತ್ತದೆ.',
        hi: 'कंद को फटने और दो हिस्सों में बंटने से रोकता है।',
      },
    ],
  },
  // 6. Nutrients Master Plan
  nutrientsMasterPlan: {
    primary: [
      {
        nutrientName: 'Basal Complex NPK 10:26:26 / 14:35:14',
        fertilizerProduct: 'NPK 10:26:26 Complex Fertilizer',
        productImage: INPUT_PRODUCT_IMAGES.npk_10_26_26,
        category: 'primary',
        whenToApply: {
          en: 'Broadcast and incorporate fully into soil during final bed preparation.',
          te: 'ఆఖరి దుక్కిలో బెడ్లు తయారుచేసే సమయంలో వేయాలి.',
          kn: 'ಕಡೆಯ ಉಳುಮೆಯಲ್ಲಿ ಮಣ್ಣಿಗೆ ಸೇರಿಸಿ.',
          hi: 'अंतिम जुताई के समय क्यारियों में मिलाएं।',
        },
        purpose: {
          en: 'Provides essential phosphorus for dense root establishment and potassium for early starch synthesis.',
          te: 'వేర్లు బలంగా నాటుకోవడానికి భాస్వరం, మొక్క పుష్టిగా పెరగడానికి పొటాష్‌ను అందిస్తుంది.',
          kn: 'ಬೇರು ಗಟ್ಟಿಯಾಗಲು ರಂಜಕ ಮತ್ತು ಪೊಟ್ಯಾಶ್ ನೀಡುತ್ತದೆ.',
          hi: 'जड़ों के विकास और पौधे की मजबूती के लिए।',
        },
        howToApply: {
          en: 'Soil incorporation @ 100 kg (2 bags) per acre.',
          te: 'ఎకరానికి 100 కిలోలు (2 బస్తాలు) దుక్కిలో వేయాలి.',
          kn: 'ಎಕರೆಗೆ 100 ಕೆಜಿ ಮಣ್ಣಿಗೆ ಬೆರೆಸಿ.',
          hi: '100 किग्रा प्रति एकड़ मिट्टी में मिलाएं।',
        },
        dosage: '100 kg/acre basal',
        precautions: {
          en: 'Mix well with top 10 cm soil; do not leave fertilizer lumps on soil surface.',
          te: 'నేలలో బాగా కలిసేలా చూడాలి.',
          kn: 'ಮಣ್ಣಿನಲ್ಲಿ ಚೆನ್ನಾಗಿ ಬೆರೆಸಿ.',
          hi: 'मिट्टी में अच्छी तरह मिला दें।',
        },
      },
      {
        nutrientName: 'Potassium Sulphate (SOP 0:0:50)',
        fertilizerProduct: 'Water Soluble Potassium Sulphate (0:0:50)',
        productImage: INPUT_PRODUCT_IMAGES.sop_0_0_50,
        category: 'primary',
        whenToApply: {
          en: 'Foliar spray at 65 DAT and 80 DAT during bulb swelling.',
          te: 'గడ్డ ఊరే దశలో (65 మరియు 80 రోజుల వద్ద) పిచికారీ చేయాలి.',
          kn: 'ಗೆಡ್ಡೆ ದಪ್ಪವಾಗುವಾಗ (65 ಮತ್ತು 80 ದಿನ) ಸಿಂಪಡಿಸಿ.',
          hi: 'कंद फुलाव के समय (65 और 80 दिन) पर पर्णीय छिड़काव करें।',
        },
        purpose: {
          en: 'Drives carbohydrates into bulbs, tightens papery outer skin, and enhances storage life by 4 months.',
          te: 'ఉల్లి గడ్డ పరిమాణం, బరువు, ఆకర్షణీయమైన ఎరుపు రంగు మరియు నిల్వ సామర్థ్యాన్ని పెంచుతుంది.',
          kn: 'ಗೆಡ್ಡೆ ತೂಕ ಮತ್ತು ಸಂಗ್ರಹಣಾ ಸಾಮರ್ಥ್ಯ ಹೆಚ್ಚಿಸುತ್ತದೆ.',
          hi: 'कंद का वजन, लाल चमक और भंडारण क्षमता 4 महीने तक बढ़ाता है।',
        },
        howToApply: {
          en: 'Foliar spray @ 5 g per liter of water.',
          te: 'లీటరు నీటికి 5 గ్రాములు కలిపి ఆకులపై పిచికారీ చేయాలి.',
          kn: 'ಲೀಟರ್ ನೀರಿಗೆ 5 ಗ್ರಾಂ ಸಿಂಪಡಿಸಿ.',
          hi: '5 ग्राम प्रति लीटर पानी में मिलाकर छिड़काव करें।',
        },
        dosage: '5 g/L foliar spray (1 kg/acre in 200 L)',
        precautions: {
          en: 'Do not use MOP (Chloride) as chloride degrades onion bulb keeping quality.',
          te: 'ఉల్లిలో క్లోరైడ్ ఉండే పొటాష్ వాడకూడదు; సల్ఫేట్ ఆఫ్ పొటాష్ (SOP) మాత్రమే వాడాలి.',
          kn: 'ಕ್ಲೋರೈಡ್ ಪೊಟ್ಯಾಶ್ ಬಳಸಬೇಡಿ.',
          hi: 'म्यूरिएट ऑफ पोटाश (MOP) न डालें, केवल सल्फेट ऑफ पोटाश (SOP) ही उपयोग करें।',
        },
      },
    ],
    secondary: [
      {
        nutrientName: 'Elemental Sulphur 90% WDG',
        fertilizerProduct: 'Sulphur 90% WDG (Fertis / Cosavet)',
        productImage: INPUT_PRODUCT_IMAGES.sulphur_80_wdg,
        category: 'secondary',
        whenToApply: {
          en: 'Broadcast at 25–30 DAT with first top dressing.',
          te: 'నాటిన 25-30 రోజులకు మొదటి పైపాటు ఎరువుతో పాటు వేయాలి.',
          kn: 'ನಾಟಿ ಮಾಡಿದ 25-30 ದಿನಕ್ಕೆ ಮೇಲುಗೊಬ್ಬರವಾಗಿ ನೀಡಿ.',
          hi: 'रोपाई के 25-30 दिन बाद पहली टॉप ड्रेसिंग के साथ डालें।',
        },
        purpose: {
          en: 'MANDATORY for Onion: Produces allyl propyl disulphide (the sharp pungent taste), improves redness and prevents purple blotch.',
          te: 'ఉల్లికి తప్పనిసరి: ఉల్లిపాయకు ఘాటుదనం, మంచి ఎరుపు రంగు మరియు నిల్వలో బూజు రాకుండా కాపాడుతుంది.',
          kn: 'ಈರುಳ್ಳಿಗೆ ಖಾರ ಮತ್ತು ಕೆಂಪು ಬಣ್ಣ ತರಲು ಕಡ್ಡಾಯ.',
          hi: 'प्याज के लिए अति आवश्यक: तीखापन, गहरा लाल रंग और फफूंद से सुरक्षा प्रदान करता है।',
        },
        howToApply: {
          en: 'Soil application @ 10 kg per acre mixed with moist sand or compost.',
          te: 'ఎకరానికి 10 కిలోలు తేమ గల ఇసుకలో కలిపి చల్లాలి.',
          kn: 'ಎಕರೆಗೆ 10 ಕೆಜಿ ಮಣ್ಣಿನಲ್ಲಿ ಬೆರೆಸಿ ಹಾಕಿ.',
          hi: '10 किग्रा प्रति एकड़ रेत में मिलाकर क्यारियों में बिखरें।',
        },
        dosage: '10 kg/acre soil application',
        precautions: {
          en: 'Ensure soil has adequate moisture when broadcasting sulphur.',
          te: 'భూమిలో తగినంత తేమ ఉన్నప్పుడు మాత్రమే వేయాలి.',
          kn: 'ತೇವಾಂಶವಿರುವಾಗ ಮಾತ್ರ ಹಾಕಿ.',
          hi: 'खेत में पर्याप्त नमी होने पर ही प्रयोग करें।',
        },
      },
    ],
    micronutrients: [
      {
        nutrientName: 'Zinc Sulphate 33%',
        fertilizerProduct: 'Monohydrate Zinc Sulphate 33%',
        productImage: INPUT_PRODUCT_IMAGES.zinc_sulphate_33,
        category: 'micronutrient',
        whenToApply: {
          en: 'Basal application at final land prep or foliar at 35 DAT.',
          te: 'ఆఖరి దుక్కిలో లేదా నాటిన 35 రోజులకు ఆకులపై పిచికారీ.',
          kn: 'ಕಡೆಯ ಉಳುಮೆಯಲ್ಲಿ ಅಥವಾ 35 ದಿನಕ್ಕೆ ಸಿಂಪಡಣೆ.',
          hi: 'अंतिम जुताई में या 35 दिन पर पर्णीय छिड़काव।',
        },
        purpose: {
          en: 'Prevents yellowing and dwarf erect foliage, speeds up vegetative canopy expansion.',
          te: 'ఆకులు పసుపుపచ్చగా మారకుండా చూసి పైరు పచ్చగా ఏపుగా పెరగడానికి సహాయపడుతుంది.',
          kn: 'ಎಲೆಗಳು ಹಳದಿಯಾಗದಂತೆ ತಡೆಯುತ್ತದೆ.',
          hi: 'पत्तियों का पीलापन दूर कर पौधों की अच्छी वृद्धि करता है।',
        },
        howToApply: {
          en: 'Soil: 5 kg/acre basal, OR Foliar: Chelate Zinc @ 1g/L.',
          te: 'దుక్కిలో ఎకరానికి 5 కిలోలు లేదా లీటరు నీటికి 1 గ్రాము జింక్ పిచికారీ.',
          kn: 'ಮಣ್ಣಿಗೆ 5 ಕೆಜಿ ಅಥವಾ 1 ಗ್ರಾಂ/ಲೀಟರ್ ಸಿಂಪಡಿಸಿ.',
          hi: 'मिट्टी में 5 किग्रा/एकड़ या 1 ग्राम/लीटर छिड़काव।',
        },
        dosage: '5 kg/acre soil or 1 g/L spray',
        precautions: {
          en: 'Do not combine zinc sulphate directly with DAP/phosphates.',
          te: 'జింక్ సల్ఫేట్‌ను డిఎపి లేదా భాస్వరం ఎరువులతో కలిపి వేయకూడదు.',
          kn: 'ಡಿಎಪಿ ಜೊತೆ ಬೆರೆಸಬೇಡಿ.',
          hi: 'डीएपी या फॉस्फेट खाद के साथ सीधे न मिलाएं।',
        },
      },
      {
        nutrientName: 'Boron 20%',
        fertilizerProduct: 'Disodium Octaborate Tetrahydrate (Boron 20%)',
        productImage: INPUT_PRODUCT_IMAGES.boron_20,
        category: 'micronutrient',
        whenToApply: {
          en: 'Foliar spray at 50 DAT and 70 DAT during bulb formation.',
          te: 'గడ్డ ఊరే దశలో (50 మరియు 70 రోజుల వద్ద) పిచికారీ చేయాలి.',
          kn: 'ಗೆಡ್ಡೆ ಕಟ್ಟುವಾಗ 50 ಮತ್ತು 70 ದಿನಕ್ಕೆ ಸಿಂಪಡಿಸಿ.',
          hi: 'कंद बनते समय 50 और 70 दिन पर पर्णीय छिड़काव।',
        },
        purpose: {
          en: 'Translocates sugars to bulb, prevents internal core rotting and hollow heart.',
          te: 'ఉల్లి గడ్డ లోపల బోలుగా లేదా కుళ్ళిపోకుండా గట్టిగా ఉండేలా చేస్తుంది.',
          kn: 'ಗೆಡ್ಡೆ ಗಟ್ಟಿಯಾಗಲು ಮತ್ತು ಒಳಗೆ ಕೊಳೆಯದಂತೆ ತಡೆಯಲು.',
          hi: 'कंद को अंदर से खोखला होने और सड़ने से बचाता है।',
        },
        howToApply: {
          en: 'Foliar spray @ 1 g per liter of water.',
          te: 'లీటరు నీటికి 1 గ్రాము కలిపి పిచికారీ చేయాలి.',
          kn: 'ಲೀಟರ್ ನೀರಿಗೆ 1 ಗ್ರಾಂ ಬೆರೆಸಿ ಸಿಂಪಡಿಸಿ.',
          hi: '1 ग्राम प्रति लीटर पानी में मिलाकर छिड़काव करें।',
        },
        dosage: '1 g/L foliar spray',
        precautions: {
          en: 'Strictly follow 1 g/L dosage; higher concentration burns delicate onion foliage.',
          te: 'మోతాదు మించరాదు; ఎక్కువైతే ఆకుల చివర్లు మాడిపోతాయి.',
          kn: 'ಹೆಚ್ಚು ಪ್ರಮಾಣ ಬಳಸಬೇಡಿ.',
          hi: 'मात्रा 1 ग्राम से अधिक न रखें, अन्यथा पत्तियां झुलस सकती हैं।',
        },
      },
    ],
  },
  // 7. Post-Harvest
  postHarvest: {
    maturity: {
      title: {
        en: 'Neck Fall Maturity Sign (50–70% Tops Fallen)',
        te: 'కోత పరిపక్వత లక్షణం (50-70% ఆకులు వాలడం)',
        kn: 'ಕೊಯ್ಲಿನ ಲಕ್ಷಣ (ಶೇ. 50-70 ಎಲೆಗಳು ಬಾಗುವುದು)',
        hi: 'परिपक्वता की पहचान (50-70% पत्तियों का झुकना)',
      },
      image: CROP_PRACTICE_IMAGES.onion.maturity,
      imageCaption: {
        en: 'Natural softening and bending of pseudostem (neck fall) indicating complete bulb maturity',
        te: 'ఉల్లి ఆకులు సహజంగా పక్కకు వాలి మెడ మెత్తబడటం సరైన కోత లక్షణం',
        kn: 'ಎಲೆಗಳು ನೈಸರ್ಗಿಕವಾಗಿ ನೆಲಕ್ಕೆ ಬಾಗುವುದು',
        hi: 'गर्दन का मुलायम होकर 50-70% पौधों का झुक जाना',
      },
      description: {
        en: 'Harvest ONLY when 50% to 70% of plant tops naturally bend over and fall flat (neck fall). Harvesting too early results in thick hollow necks that decay rapidly; harvesting too late leads to secondary rooting and sunburn.',
        te: 'చేనులో 50% నుండి 70% మొక్కల ఆకులు నేలమీదకు వాలినప్పుడు మాత్రమే కోయాలి. ముందుగా కోస్తే మెడ లావుగా ఉండి గడ్డలు కుళ్ళిపోతాయి; ఆలస్యంగా కోస్తే కొత్త వేర్లు వచ్చి గడ్డలు పాడవుతాయి.',
        kn: 'ಶೇ. 50-70 ರಷ್ಟು ಗಿಡಗಳ ಎಲೆಗಳು ಬಾಗಿದಾಗ ಮಾತ್ರ ಕೊಯ್ಲು ಮಾಡಿ.',
        hi: 'जब 50-70% पौधों की गर्दन झुककर गिर जाए तभी खुदाई करें। कच्चा प्याज जल्दी सड़ जाता है।',
      },
      details: [
        {
          en: 'Neck Tightness: As tops fall, vascular bundles seal tightly, locking out bacterial pathogens.',
          te: 'మెడ మూసుకోవడం: ఆకులు వాలినప్పుడు మెడ భాగం సహజంగా మూసుకుపోయి బ్యాక్టీరియా లోపలికి పోకుండా ఆపుతుంది.',
          kn: 'ಕುತ್ತಿಗೆ ಮುಚ್ಚಿಕೊಳ್ಳುವುದರಿಂದ ರೋಗಾಣು ಪ್ರವೇಶಿಸುವುದಿಲ್ಲ.',
          hi: 'गर्दन बंद होने से जीवाणु अंदर नहीं घुस पाते।',
        },
      ],
    },
    harvesting: {
      title: {
        en: 'Careful Lifting & Field Windrowing',
        te: 'గడ్డలను తవ్వడం & పొలంలో వరసగా ఆరబెట్టడం',
        kn: 'ಗೆಡ್ಡೆ ಕೀಳುವುದು ಮತ್ತು ಒಣಗಿಸುವುದು',
        hi: 'खुदाई एवं खेत में सुखाना (विंड्रोइंग)',
      },
      image: CROP_PRACTICE_IMAGES.onion.harvesting,
      imageCaption: {
        en: 'Careful manual uprooting on dry soil with foliage covering adjacent bulbs',
        te: 'ఒక వరుస ఆకులు మరో వరుస గడ్డలపై పడేలా పొలంలో ఆరబెట్టడం (విండ్రోయింగ్)',
        kn: 'ಗೆಡ್ಡೆಗಳಿಗೆ ಬಿಸಿಲು ತಾಗದಂತೆ ಎಲೆಗಳಿಂದ ಮುಚ್ಚಿ ಒಣಗಿಸುವುದು',
        hi: 'एक कतार की पत्तियों से दूसरी कतार के कंदों को ढककर सुखाना',
      },
      description: {
        en: 'Manually uproot bulbs on a bright dry day. Arrange harvested onions in windrows such that the leaves of one tier cover the bulbs of the adjacent tier, protecting bulbs from direct sunscald.',
        te: 'పొడి వాతావరణంలో గడ్డలను జాగ్రత్తగా పీకాలి. ఒక వరుస ఆకులు మరో వరుస గడ్డలను కప్పేలా పొలంలో అమర్చాలి, దీనివల్ల ఎండ వేడికి గడ్డలు కాలకుండా ఉంటాయి.',
        kn: 'ಒಣ ಹವೆಯಲ್ಲಿ ಕೀಳಿ, ಬಿಸಿಲಿನಿಂದ ರಕ್ಷಿಸಲು ಎಲೆಗಳಿಂದ ಮುಚ್ಚಿ.',
        hi: 'धूप वाले दिन खुदाई करें। कंदों को सीधी धूप से बचाने के लिए पत्तियों से ढककर रखें।',
      },
      details: [
        {
          en: 'Field Curing: Leave in field for 3 to 5 days until necks soften and roots dry up completely.',
          te: 'పొలంలో ఆరబెట్టడం: పొలంలో 3-5 రోజులు ఆరబెడితే మెడ మెత్తబడి వేర్లు ఎండిపోతాయి.',
          kn: 'ಹೊಲದಲ್ಲಿ 3-5 ದಿನ ಒಣಗಿಸಿ.',
          hi: 'खेत में 3-5 दिन तक सुखाएं ताकि जड़ें और गर्दन सूख जाएं।',
        },
      ],
    },
    dryingAndCuring: {
      title: {
        en: 'Neck Detopping & Shade Curing for 10–12 Days',
        te: 'మెడ కత్తిరింపు & నీడలో ఆరబెట్టడం (క్యూర్ చేయడం)',
        kn: 'ಕುತ್ತಿಗೆ ಕತ್ತರಿಸುವುದು ಮತ್ತು ನೆರಳಿನಲ್ಲಿ ಒಣಗಿಸುವಿಕೆ',
        hi: 'गर्दन काटना एवं 10-12 दिन छाया में सुखाना (क्योरिंग)',
      },
      image: CROP_PRACTICE_IMAGES.onion.drying,
      imageCaption: {
        en: 'Onions trimmed leaving 2.5 cm neck spread thin in well-aerated shade for skin tight curing',
        te: '2.5 సెం.మీ మెడ ఉంచి కత్తిరించి గాలి తగిలే నీడలో ఆరబెట్టిన ఉల్లిపాయలు',
        kn: '2.5 ಸೆಂ.ಮೀ ಕುತ್ತಿಗೆ ಬಿಟ್ಟು ಕತ್ತರಿಸಿ ನೆರಳಿನಲ್ಲಿ ಒಣಗಿಸಿದ ಈರುಳ್ಳಿ',
        hi: '2.5 सेमी गर्दन छोड़कर काटा गया और छायादार हवादार स्थान पर सुखाया गया प्याज',
      },
      description: {
        en: 'Cut tops leaving 2.0 to 2.5 cm pseudostem neck attached to bulb (NEVER cut flush with the bulb). Cut dry roots. Spread onions in a thin layer (not exceeding 10 cm depth) on raised slatted wooden platforms in a well-ventilated shade shed for 10 to 12 days.',
        te: 'ఉల్లిపాయకు 2.0 నుండి 2.5 సెం.మీ మెడ ఉంచి ఆకులను కత్తిరించాలి (గడ్డకు సమానంగా కత్తిరించకూడదు). తర్వాత గాలి బాగా ఆడే నీడ ప్రదేశంలో 10-12 రోజులు పలచగా పరచి ఆరబెట్టాలి.',
        kn: '2.5 ಸೆಂ.ಮೀ ಕುತ್ತಿಗೆ ಬಿಟ್ಟು ಕತ್ತರಿಸಿ ನೆರಳಿನಲ್ಲಿ 10-12 ದಿನ ಒಣಗಿಸಿ.',
        hi: 'कंद से 2.5 सेमी ऊपर से गर्दन काटें। छायादार हवादार शेड में 10-12 दिन तक अच्छी तरह सुखाएं।',
      },
      details: [
        {
          en: 'Skin Hardening: Shade curing creates 3 to 4 tight, shiny dry papery skins that protect against dehydration and black mould.',
          te: 'పొర గట్టిపడటం: నీడలో ఆరబెట్టడం వల్ల గడ్డపై 3-4 ఎండిన పొరలు ఏర్పడి ఉల్లిపాయ కుళ్ళకుండా 5-6 నెలల పాటు రక్షణ ఇస్తాయి.',
          kn: 'ಸಿಪ್ಪೆ ಗಟ್ಟಿಯಾಗಿ ದೀರ್ಘಕಾಲ ಬಾಳಿಕೆ ಬರುತ್ತದೆ.',
          hi: 'छिलका चमकदार और सख्त हो जाता है जिससे कंद 5-6 महीने सुरक्षित रहता है।',
        },
      ],
    },
    storage: {
      title: {
        en: 'Ventilated Onion Chawl Storage (Bottom & Side Aeration)',
        te: 'గాలి వెలుతురు గల ఉల్లి గిడ్డంగి (చాల్) నిల్వ పద్ధతి',
        kn: 'ವಾತಾಯನ ಈರುಳ್ಳಿ ಗೋದಾಮು (ಚಾಲ್) ಶೇಖರಣಾ ಪದ್ಧತಿ',
        hi: 'हवादार प्याज भंडार गृह (कांदा चाळ) प्रबंधन',
      },
      image: CROP_PRACTICE_IMAGES.onion.storage,
      imageCaption: {
        en: 'Traditional bottom-ventilated raised bamboo/wire-mesh storage structures preventing moisture accumulation',
        te: 'కింది నుండి, పక్కల నుండి గాలి ఆడేలా వెదురు లేదా మెష్‌తో నిర్మించిన ఉల్లి గిడ్డంగి',
        kn: 'ಕೆಳಗಿನಿಂದ ಗಾಳಿ ಆಡುವ ತಂತಿಯ ಬಲೆಯ ಈರುಳ್ಳಿ ಉಗ್ರಾಣ',
        hi: 'नीचे और चारों तरफ से हवादार जालीदार प्याज भंडारण ढांचा',
      },
      description: {
        en: 'Store sorted, disease-free cured onions in naturally ventilated low-cost onion chawls with raised bamboo or wire-mesh floors. Maintain temperature at 25–30°C and 65–70% relative humidity. Never store in closed plastic bags or dump in deep heaps (>45 cm).',
        te: 'బాగా ఆరిన గడ్డలను గాలి బాగా ఆడే ఉల్లి గిడ్డంగులలో (చాల్) నిల్వ చేయాలి. గడ్డలను 45 సెం.మీ కంటే ఎక్కువ ఎత్తులో పోయకూడదు. ప్లాస్టిక్ బస్తాల్లో అస్సలు నిల్వ ఉంచరాదు.',
        kn: 'ಪ್ಲಾಸ್ಟಿಕ್ ಚೀಲದಲ್ಲಿ ಶೇಖರಿಸಬೇಡಿ. ಗಾಳಿ ಆಡುವ ಜಾಲರಿಗಳಲ್ಲಿ 45 ಸೆಂ.ಮೀ ಎತ್ತರಕ್ಕೆ ಮಾತ್ರ ರಾಶಿ ಹಾಕಿ.',
        hi: 'प्लास्टिक के बोरों में कभी न रखें। जालीदार हवादार शेड में 45 सेमी से अधिक ऊंचा ढेर न लगाएं।',
      },
      details: [
        {
          en: 'Periodic Sorting: Inspect and remove any sprouted or rot bulbs once every 15 days.',
          te: 'క్రమబద్ధమైన తనిఖీ: ప్రతి 15 రోజులకు ఒకసారి మొలక వచ్చిన లేదా కుళ్ళిన ఉల్లిపాయలను ఏరివేయాలి.',
          kn: 'ಪ್ರತಿ 15 ದಿನಕ್ಕೊಮ್ಮೆ ಕೊಳೆತ ಈರುಳ್ಳಿ ತೆಗೆಯಿರಿ.',
          hi: 'हर 15 दिन में सड़े या अंकुरित प्याज को निकालते रहें।',
        },
      ],
    },
  },
};
