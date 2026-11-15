import { CropAdvisoryRecord } from '../cropAdvisoryData';
import { CROP_STAGE_IMAGES, INPUT_PRODUCT_IMAGES, CROP_PRACTICE_IMAGES } from '../cropStageImages';

export const CHILLI_ADVISORY: CropAdvisoryRecord = {
  cropId: 'chilli',
  cropName: {
    en: 'Chilli (Mirchi)',
    te: 'మిరప',
    kn: 'ಮೆಣಸಿನಕಾಯಿ',
    hi: 'मिर्च',
  },
  category: {
    en: 'Spice & Commercial Cash Crop',
    te: 'వాణిజ్య సుగంధ ద్రవ్య పంట',
    kn: 'ಮಸಾಲೆ ವಾಣಿಜ್ಯ ಬೆಳೆ',
    hi: 'मसाला एवं व्यावसायिक नकदी फसल',
  },
  icon: '🌶️',
  cropImage: CROP_STAGE_IMAGES.chilli.cropImage,
  suitableSeason: {
    en: 'Kharif (June–July sowing), Rabi (Sept–Oct transplanting)',
    te: 'ఖరీఫ్ (జూన్-జూలై), రబీ (సెప్టెంబర్-అక్టోబర్ నాట్లు)',
    kn: 'ಖಾರಿಫ್ (ಜೂನ್-ಜುಲೈ), ರಬಿ (ಸೆಪ್ಟೆಂಬರ್-ಅಕ್ಟೋಬರ್)',
    hi: 'खरीफ (जून-जुलाई), रबी (सितंबर-अक्टूबर रोपाई)',
  },
  soilRequirements: {
    en: 'Well-drained sandy loam or deep black soils rich in humus with pH 6.5 to 7.5. Cannot tolerate waterlogging even for a few hours.',
    te: 'మురుగునీరు పోయే సౌకర్యం గల ఎర్ర నేలలు, గరప నేలలు లేదా నల్లరేగడి నేలలు అనుకూలం. నీరు నిల్వ ఉంటే తట్టుకోలేదు. pH 6.5 నుండి 7.5 ఉండాలి.',
    kn: 'ನೀರು ಸುಲಭವಾಗಿ ಬಸಿದು ಹೋಗುವ ಕೆಂಪು ಗೋಡು ಅಥವಾ ಕಪ್ಪು ಮಣ್ಣು. pH 6.5 ರಿಂದ 7.5 ಇರಬೇಕು.',
    hi: 'उत्तम जल निकास वाली बलुई दोमट या गहरी काली मिट्टी। जलभराव बिल्कुल सहन नहीं कर सकती। पीएच मान 6.5 से 7.5 उपयुक्त है।',
  },
  seedAndSowing: {
    en: 'Seed rate: 100–120 g/acre (Hybrids: Teja, Byadgi, Armoor, US 341). Raise nursery for 35–40 days. Transplant healthy seedlings at 60 cm × 45 cm or 75 cm × 60 cm on raised beds.',
    te: 'విత్తన మోతాదు: ఎకరానికి 100-120 గ్రాములు (హైబ్రిడ్ రకాలు: తేజ, బ్యాడగి, అర్మూర్, యూఎస్ 341). 35-40 రోజుల నారును మడులపై 60 సెం.మీ × 45 సెం.మీ దూరంలో నాటాలి.',
    kn: 'ಬೀಜದ ಪ್ರಮಾಣ: ಎಕರೆಗೆ 100-120 ಗ್ರಾಂ ಹೈಬ್ರಿಡ್ ಬೀಜ (ಬ್ಯಾಡಗಿ, ತೇಜ). 35-40 ದಿನಗಳ ಸಸಿಗಳನ್ನು ನಾಟಿ ಮಾಡಿ. ಅಂತರ: 60 ಸೆಂ.ಮೀ × 45 ಸೆಂ.ಮೀ.',
    hi: 'बीज दर: 100-120 ग्राम/एकड़ (संकर किस्में: तेजा, ब्याडगी, यूएस 341)। 35-40 दिन की पौध की 60 सेमी × 45 सेमी दूरी पर रोपाई करें।',
  },
  cropDuration: {
    en: '150 to 180 days.',
    te: '150 నుండి 180 రోజులు.',
    kn: '150 ರಿಂದ 180 ದಿನಗಳು.',
    hi: '150 से 180 दिन।',
  },
  stages: [
    {
      id: 'chi_stage_1',
      order: 1,
      name: {
        en: '1. Nursery & Transplanting Stage',
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
      stageImage: CROP_STAGE_IMAGES.chilli.stages.chi_stage_1,
      whatToDo: {
        en: '1. Dip seedling roots in Trichoderma + Imidacloprid solution for 15 mins before transplanting.\n2. Transplant 35–40 day seedlings in late afternoon on silver-black mulched raised beds.\n3. Give light irrigation immediately after transplanting.\n4. Drench root zone with 19:19:19 + Humic Acid on day 5 to stimulate rapid feeder roots.',
        te: '1. నాటే ముందు నారు వేర్లను ట్రైకోడెర్మా మరియు ఇమిడాక్లోప్రిడ్ ద్రావణంలో 15 నిమిషాలు నానబెట్టాలి.\n2. 35-40 రోజుల నారును సాయంత్రం వేళల్లో ప్లాస్టిక్ మల్చింగ్ బెడ్లపై నాటుకోవాలి.\n3. నాటిన వెంటనే తేలికపాటి తడి ఇవ్వాలి.\n4. నాటిన 5వ రోజున 19-19-19 మరియు హ్యూమిక్ యాసిడ్ ద్రావణంతో మొదళ్ల వద్ద తడపడం ద్వారా పిల్ల వేర్లు వేగంగా వస్తాయి.',
        kn: '1. ನಾಟಿಗೆ ಮುನ್ನ ಸಸಿಗಳ ಬೇರುಗಳನ್ನು ಟ್ರೈಕೋಡರ್ಮಾ ದ್ರಾವಣದಲ್ಲಿ ಅದ್ದಿ.\n2. 35-40 ದಿನಗಳ ಸಸಿಗಳನ್ನು ಸಂಜೆ ಮಲ್ಚಿಂಗ್ ಬೆಡ್ ಮೇಲೆ ನಾಟಿ ಮಾಡಿ.\n3. ನಾಟಿ ಮಾಡಿದ ತಕ್ಷಣ ಲಘು ನೀರಾವರಿ ನೀಡಿ.\n4. 5ನೇ ದಿನ 19:19:19 ಗೊಬ್ಬರದಿಂದ ಬೇರು ನೆನೆಸಿ.',
        hi: '1. रोपाई से पहले जड़ों को ट्राइकोडर्मा और इमिडाक्लोप्रिड घोल में 15 मिनट डुबोएं।\n2. 35-40 दिन की पौध को शाम के समय मल्चिंग वाली क्यारियों पर लगाएं।\n3. रोपाई के तुरंत बाद हल्की सिंचाई करें।\n4. रोपाई के 5वें दिन 19:19:19 और ह्यूमिक एसिड का ड्रेंचिंग करें।',
      },
      irrigationGuide: {
        en: 'Light daily drip irrigation for 30–45 mins to establish seedlings.',
        te: 'మొక్కలు కుదురుకునే వరకు డ్రిప్ ద్వారా రోజూ 30-45 నిమిషాలు తడి ఇవ్వాలి.',
        kn: 'ಸಸಿಗಳು ಚಿಗುರುವವರೆಗೆ ಪ್ರತಿದಿನ ಲಘು ಹನಿ ನೀರಾವರಿ ನೀಡಿ.',
        hi: 'पौधे जमने तक प्रतिदिन 30-45 मिनट हल्की ड्रिप सिंचाई करें।',
      },
      weatherPrecaution: {
        en: 'Never transplant in hot mid-day sun or waterlogged muddy slurry.',
        te: 'మధ్యాహ్నం ఎండలో లేదా నీరు నిలిచిన బురదలో నాటరాదు.',
        kn: 'ಮಧ್ಯಾಹ್ನದ ಬಿಸಿಲಿನಲ್ಲಿ ಅಥವಾ ಕೆಸರು ತುಂಬಿದ ಗದ್ದೆಯಲ್ಲಿ ನಾಟಿ ಮಾಡಬೇಡಿ.',
        hi: 'दोपहर की तेज धूप या कीचड़ वाले जलभराव में रोपाई न करें।',
      },
      fertilizers: [
        {
          productName: '19:19:19 Water Soluble Starter Fertilizer',
          productImage: INPUT_PRODUCT_IMAGES.npk_19_19_19,
          category: 'fertilizer',
          whenToApply: {
            en: 'Drench or fertigate at 5–10 DAT.',
            te: 'నాటిన 5-10 రోజుల వద్ద మొదళ్లలో పోయాలి లేదా డ్రిప్ ద్వారా ఇవ్వాలి.',
            kn: 'ನಾಟಿ ಮಾಡಿದ 5-10 ದಿನಗಳಲ್ಲಿ ನೀಡಿ.',
            hi: 'रोपाई के 5-10 दिन बाद ड्रिप या ड्रेंचिंग द्वारा दें।',
          },
          purpose: {
            en: 'Provides balanced macro-nutrients for quick root establishment and vigorous early canopy spread.',
            te: 'పిల్ల వేర్లు బలంగా రావడానికి మరియు మొక్క పచ్చబడి నిలదొక్కుకోవడానికి తోడ్పడుతుంది.',
            kn: 'ಬೇರುಗಳ ಶೀಘ್ರ ಬೆಳವಣಿಗೆಗೆ ನೆರವಾಗುತ್ತದೆ.',
            hi: 'जड़ों के तेजी से विकास और पौधे के उठान के लिए आवश्यक है।',
          },
          applicationMethod: {
            en: 'Drip fertigation or root drenching.',
            te: 'డ్రిప్ ద్వారా లేదా చెట్టు మొదట్లో పోయాలి.',
            kn: 'ಹನಿ ನೀರಾವರಿ ಅಥವಾ ಬುಡಕ್ಕೆ ಹಾಕಿ.',
            hi: 'ड्रिप द्वारा या पौधों की जड़ों में डालें।',
          },
          dosage: '3 kg per acre via drip or 5g/L for drenching',
          precautions: {
            en: 'Ensure soil is moist before drenching.',
            te: 'నేల తడిగా ఉన్నప్పుడు మాత్రమే మొదళ్లలో పోయాలి.',
            kn: 'ಮಣ್ಣು ತೇವವಾಗಿರುವಾಗ ನೀಡಿ.',
            hi: 'मिट्टी में नमी होने पर ही दें।',
          },
        },
      ],
      pestsAndDiseases: [],
    },
    {
      id: 'chi_stage_2',
      order: 2,
      name: {
        en: '2. Vegetative Canopy & Active Branching Stage',
        te: '2. శాఖీయ దశ & కొమ్మలు విస్తరించే దశ',
        kn: '2. ಸಸ್ಯಕ ಬೆಳವಣಿಗೆ ಮತ್ತು ಕವಲೊಡೆಯುವ ಹಂತ',
        hi: '2. वानस्पतिक बढ़वार एवं शाखा फैलाव अवस्था',
      },
      timing: {
        en: '25 to 50 DAT',
        te: 'నాటిన 25 నుండి 50 రోజులు',
        kn: 'ನಾಟಿ ಮಾಡಿದ 25 ರಿಂದ 50 ದಿನಗಳು',
        hi: 'रोपाई के 25 से 50 दिन',
      },
      stageImage: CROP_STAGE_IMAGES.chilli.stages.chi_stage_2,
      whatToDo: {
        en: '1. Fertigate with 19:19:19 and Calcium Nitrate weekly to develop extensive branch frame.\n2. Install blue sticky traps (20/acre) for Black Thrips (Thrips parvispinus) and yellow sticky traps (15/acre) for Whitefly.\n3. Spray Micronutrient mixture (Formula-4 2.5g/L) to prevent leaf chlorosis.\n4. Nip off early solitary flower buds at 30–35 DAT to divert energy into bush formation.',
        te: '1. కొమ్మలు ఎక్కువగా రావడానికి వారానికి ఒకసారి 19-19-19 మరియు కాల్షియం నైట్రేట్ ఎరువులను డ్రిప్ ద్వారా అందించాలి.\n2. నల్ల తామర పురుగు (బ్లాక్ త్రిప్స్) కోసం ఎకరానికి 20 నీలి జిగురు అట్టలు, తెల్లదోమ కోసం 15 పసుపు అట్టలు పెట్టాలి.\n3. సూక్ష్మపోషకాల లోపం రాకుండా ఫార్ములా-4 మిశ్రమాన్ని లీటరు నీటికి 2.5 గ్రాములు కలిపి పిచికారీ చేయాలి.\n4. మొక్క బుట్టలా గుబురుగా పెరగడానికి 30-35 రోజుల వద్ద కనిపించే మొదటి పూతను తుంచివేయాలి.',
        kn: '1. ಕವಲುಗಳು ಹೆಚ್ಚಲು 19:19:19 ಮತ್ತು ಕ್ಯಾಲ್ಸಿಯಂ ನೈಟ್ರೇಟ್ ನೀಡಿ.\n2. ಕಪ್ಪು ನುಸಿ ಹುಳುವಿಗೆ 20 ನೀಲಿ ಬಲೆಗಳನ್ನು ಮತ್ತು ಬಿಳಿ ನೊಣಕ್ಕೆ 15 ಹಳದಿ ಬಲೆಗಳನ್ನು ಅಳವಡಿಸಿ.\n3. ಸೂಕ್ಷ್ಮ ಪೋಷಕಾಂಶಗಳ ಸಿಂಪರಣೆ ಮಾಡಿ.\n4. ಗಿಡ ಗಿಡ್ಡವಾಗಿ ಪೊದೆಯಾಗಲು ಆರಂಭಿಕ ಹೂಮೊಗ್ಗುಗಳನ್ನು ಚಿವುಟಿ.',
        hi: '1. अधिक शाखाएं लाने के लिए 19:19:19 और कैल्शियम नाइट्रेट ड्रिप से दें।\n2. ब्लैक थ्रिप्स के लिए 20 नीले स्टिकी ट्रैप और सफेद मक्खी के लिए 15 पीले ट्रैप प्रति एकड़ लगाएं।\n3. सूक्ष्म पोषक तत्व मिश्रण (2.5 ग्राम/लीटर) का छिड़काव करें।\n4. पौधा घना बनाने के लिए 30-35 दिन पर शुरुआती फूलों को तोड़ दें।',
      },
      irrigationGuide: {
        en: 'Provide uniform drip irrigation every alternate day. Avoid dry spell followed by sudden heavy watering.',
        te: 'రోజు మార్చి రోజు సమాన పరిమాణంలో డ్రిప్ ద్వారా నీరు అందించాలి.',
        kn: 'ದಿನಬಿಟ್ಟು ದಿನ ಹನಿ ನೀರಾವರಿ ನೀಡಿ.',
        hi: 'एक दिन छोड़कर नियमित ड्रिप सिंचाई करें।',
      },
      weatherPrecaution: {
        en: 'Chilli leaves cup upwards under dry heat and downward under mite attack; check underside with hand lens.',
        te: 'ఎండ వేడికి ఆకులు పైకి, నల్లి ఆశిస్తే కిందికి ముడుచుకుంటాయి; లెన్స్ సహాయంతో ఆకుల అడుగుభాగాన్ని పరీక్షించాలి.',
        kn: 'ಬಿಸಿಲಿಗೆ ಎಲೆ ಮೇಲ್ಮುಖವಾಗಿ, ನುಸಿಗೆ ಕೆಳಮುಖವಾಗಿ ಮುದುರುತ್ತದೆ; ಎಲೆ ಅಡಿಯನ್ನು ಪರೀಕ್ಷಿಸಿ.',
        hi: 'धूप से पत्तियां ऊपर और मकड़ी से नीचे मुड़ती हैं; पत्तियों के नीचे जांच करें।',
      },
      fertilizers: [
        {
          productName: '19:19:19 Water Soluble + Calcium Nitrate',
          productImage: INPUT_PRODUCT_IMAGES.npk_19_19_19,
          category: 'fertilizer',
          whenToApply: {
            en: 'Drip fertigate twice a week between 25 and 45 DAT.',
            te: 'నాటిన 25-45 రోజుల మధ్య వారానికి 2 సార్లు డ్రిప్ ద్వారా ఇవ్వాలి.',
            kn: 'ವಾರಕ್ಕೆ ಎರಡು ಬಾರಿ ಹನಿ ನೀರಾವರಿ ಮೂಲಕ ನೀಡಿ.',
            hi: '25-45 दिन के दौरान सप्ताह में दो बार ड्रिप से दें।',
          },
          purpose: {
            en: 'Builds dense branching canopy and thick stems to support heavy fruit load.',
            te: 'మొక్క బాగా కొమ్మలు వేసి గుబురుగా పెరగడానికి తోడ్పడుతుంది.',
            kn: 'ಕವಲುಗಳು ಹೆಚ್ಚಲು ಮತ್ತು ಕಾಂಡ ಗಟ್ಟಿಯಾಗಲು ಸಹಕಾರಿ.',
            hi: 'अधिक शाखाएं और मजबूत तना बनाने के लिए आवश्यक है।',
          },
          applicationMethod: {
            en: 'Drip fertigation.',
            te: 'డ్రిప్ ద్వారా అందించాలి.',
            kn: 'ಹನಿ ನೀರಾವರಿ ಮೂಲಕ.',
            hi: 'ड्रिप द्वारा दें।',
          },
          dosage: '4 kg per acre per week',
          precautions: {
            en: 'Do not mix Calcium Nitrate with Phosphorus fertilizers in the same tank.',
            te: 'కాల్షియం నైట్రేట్ మరియు భాస్వరం ఎరువులను ఒకే ట్యాంకులో కలపకూడదు.',
            kn: 'ಕ್ಯಾಲ್ಸಿಯಂ ಮತ್ತು ರಂಜಕವನ್ನು ಒಟ್ಟಿಗೆ ಬೆರೆಸಬೇಡಿ.',
            hi: 'कैल्शियम नाइट्रेट और फॉस्फोरस खाद को एक साथ न मिलाएं।',
          },
        },
      ],
      pestsAndDiseases: [
        {
          name: {
            en: 'Black Thrips (Thrips parvispinus) & Murda / Leaf Curl Complex',
            te: 'నల్ల తామర పురుగు (బ్లాక్ త్రిప్స్) & బొబ్బర / ముడత తెగులు',
            kn: 'ಕಪ್ಪು ನುಸಿ ಹುಳು (ಬ್ಲಾಕ್ ತ್ರಿಪ್ಸ್) ಮತ್ತು ಮುದುರು ರೋಗ',
            hi: 'ब्लैक थ्रिप्स एवं मिर्च का पर्ण कुंचन (मुरड़ा) रोग',
          },
          problemType: 'pest',
          symptomImage: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&auto=format&fit=crop&q=80',
          symptoms: {
            en: 'Severe upward leaf cupping, scratching on flower petals, brown streaks on calyx, flower bud desiccation, and heavy fruit drop.',
            te: 'ఆకులు పైకి దోనెల్లా ముడుచుకుపోవడం, పూతలో చేరి రసం పీల్చడం వల్ల పూత మాడి రాలిపోవడం, కాయలపై గోధుమ రంగు గీతలు రావడం జరుగుతుంది.',
            kn: 'ಎಲೆಗಳು ಮೇಲ್ಮುಖವಾಗಿ ಮುದುರಿಕೊಂಡು ದೋಣಿಯಂತಾಗುತ್ತವೆ; ಹೂವುಗಳು ಕಪ್ಪಾಗಿ ಉದುರುತ್ತವೆ.',
            hi: 'पत्तियां ऊपर की ओर नाव की तरह मुड़ जाती हैं, फूल सूखकर गिर जाते हैं और फलों पर खुरचन के निशान पड़ते हैं।',
          },
          prevention: {
            en: 'Install 20 blue sticky traps/acre; spray Pongamia / Neem oil (10,000 ppm).',
            te: 'ఎకరానికి 20 నీలి జిగురు అట్టలు పెట్టాలి, వేపనూనె లేదా కానుగ నూనె పిచికారీ చేయాలి.',
            kn: '20 ನೀಲಿ ಬಲೆ ಅಳವಡಿಸಿ, ಬೇವಿನ ಎಣ್ಣೆ ಸಿಂಪಡಿಸಿ.',
            hi: '20 नीले स्टिकी ट्रैप लगाएं और नीम के तेल का छिड़काव करें।',
          },
          treatment: {
            en: 'Spray Spinetoram 11.7% SC (Delegate 1ml/L) or Broflanilide 300 SC (Gracia 0.3ml/L).',
            te: 'లీటరు నీటికి 1 మి.లీ డెలిగేట్ లేదా 0.3 మి.లీ గ్రేసియా కలిపి పిచికారీ చేయాలి.',
            kn: 'ಡೆಲಿಗೇಟ್ (1 ಮಿ.ಲೀ/ಲೀಟರ್) ಅಥವಾ ಗ್ರೇಸಿಯಾ ಸಿಂಪಡಿಸಿ.',
            hi: 'डेलिगेट (1 मिली/लीटर) या ग्रेसिया (0.3 मिली/लीटर) का छिड़काव करें।',
          },
          recommendedProduct: 'Spinetoram 11.7% SC (Delegate) / Broflanilide (Gracia)',
          productImage: INPUT_PRODUCT_IMAGES.imidacloprid,
          applicationTiming: {
            en: 'Spray during morning or dusk directly into flower clusters.',
            te: 'పూత గుత్తుల లోపలికి మందు చేరేలా ఉదయం లేదా సాయంత్రం వేళల్లో పిచికారీ చేయాలి.',
            kn: 'ಹೂವುಗಳ ಒಳಗಡೆ ತಲುಪುವಂತೆ ಸಂಜೆ ಸಿಂಪಡಿಸಿ.',
            hi: 'फूलों के अंदर दवा पहुंचे ऐसा सुबह या शाम छिड़काव करें।',
          },
        },
      ],
    },
    {
      id: 'chi_stage_3',
      order: 3,
      name: {
        en: '3. Profuse Flowering & Early Fruit Set Stage',
        te: '3. పూర్తి పూత & పిందె కట్టే దశ',
        kn: '3. ಪೂರ್ಣ ಹೂವು ಮತ್ತು ಕಾಯಿ ಕಟ್ಟುವ ಹಂತ',
        hi: '3. पूर्ण पुष्पन एवं प्रारंभिक फल बनने की अवस्था',
      },
      timing: {
        en: '50 to 80 DAT',
        te: 'నాటిన 50 నుండి 80 రోజులు',
        kn: 'ನಾಟಿ ಮಾಡಿದ 50 ರಿಂದ 80 ದಿನಗಳು',
        hi: 'रोपाई के 50 से 80 दिन',
      },
      stageImage: CROP_STAGE_IMAGES.chilli.stages.chi_stage_3,
      whatToDo: {
        en: '1. Switch fertigation to high phosphorus & potassium (12:61:00 MAP and 0:52:34 MKP).\n2. Foliar spray Boron 20% (1g/L) to prevent flower dropping and ensure viable pollen tubes.\n3. Scout for Anthracnose / Dieback (drying of twigs from tip downwards).\n4. Maintain steady soil moisture; dry-wet shocks cause total blossom drop.',
        te: '1. పూత ఎక్కువగా వచ్చి పిందె కట్టడానికి డ్రిప్ ద్వారా 12-61-00 (MAP) మరియు 0-52-34 (MKP) ఎరువులు అందించాలి.\n2. పూత రాలకుండా ఉండటానికి లీటరు నీటికి 1 గ్రాము బోరాన్ 20% పిచికారీ చేయాలి.\n3. కొమ్మ ఎండు తెగులు (డైబ్యాక్) లక్షణాలు కనిపిస్తే వెంటనే నివారణ చర్యలు చేపట్టాలి.\n4. నేలలో తేమను సమంగా ఉంచాలి; అకస్మాత్తుగా నీరు ఎక్కువైనా తక్కువైనా పూత రాలిపోతుంది.',
        kn: '1. ಹೆಚ್ಚು ಹೂ ಮತ್ತು ಕಾಯಿ ಕಚ್ಚಲು 12:61:00 ಮತ್ತು 0:52:34 ಗೊಬ್ಬರ ನೀಡಿ.\n2. ಹೂ ಉದುರದಂತೆ ಬೋರಾನ್ (1 ಗ್ರಾಂ/ಲೀಟರ್) ಸಿಂಪಡಿಸಿ.\n3. ರೆಂಬೆ ಒಣಗುವ ರೋಗವನ್ನು (ಡೈಬ್ಯಾಕ್) ಗಮನಿಸಿ.\n4. ತೇವಾಂಶ ಸ್ಥಿರವಾಗಿರಲಿ.',
        hi: '1. अधिक फूल और फल टिकाने के लिए 12:61:00 और 0:52:34 खाद दें।\n2. फूल झड़ने से रोकने के लिए बोरॉन 20% (1 ग्राम/लीटर) का छिड़काव करें।\n3. टहनियां सूखने वाले डाईबैक रोग की निगरानी करें।\n4. खेत में नमी एकसमान रखें, झटके न लगने दें।',
      },
      irrigationGuide: {
        en: 'Steady moisture. Chilli drops up to 80% of flowers under sudden drought stress.',
        te: 'తేమ సమానంగా ఉండాలి. నీటి ఎద్దడి వస్తే 80% వరకు పూత రాలిపోతుంది.',
        kn: 'ತೇವಾಂಶ ಸಮತೋಲನದಲ್ಲಿರಲಿ. ನೀರಿನ ಕೊರತೆಯಾದರೆ ಹೂ ಉದುರುತ್ತದೆ.',
        hi: 'संतुलित पानी दें। पानी की कमी से भारी फूल झड़ जाते हैं।',
      },
      weatherPrecaution: {
        en: 'Temperatures above 35°C cause pollen desiccations; maintain cool microclimate via short frequent watering.',
        te: '35 డిగ్రీలకు మించి ఎండ తీవ్రత ఉన్నప్పుడు స్వల్ప వ్యవధిలో తేలికపాటి తడులు ఇవ్వాలి.',
        kn: 'ಹೆಚ್ಚಿನ ತಾಪಮಾನವಿದ್ದಾಗ ಲಘು ನೀರಾವರಿ ನೀಡಿ ತಂಪಾಗಿರಿಸಿ.',
        hi: 'तापमान अधिक होने पर हल्की-हल्की सिंचाई करके खेत में ठंडक बनाए रखें।',
      },
      fertilizers: [
        {
          productName: '00:52:34 Mono Potassium Phosphate (MKP) + Boron 20%',
          productImage: INPUT_PRODUCT_IMAGES.mkp_0_52_34,
          category: 'fertilizer',
          whenToApply: {
            en: 'Apply at 55 and 70 DAT during peak flowering.',
            te: 'నాటిన 55 మరియు 70 రోజుల వద్ద పూత జోరుగా ఉన్నప్పుడు ఇవ్వాలి.',
            kn: 'ಹೂ ಬಿಡುವ 55 ಮತ್ತು 70 ದಿನಗಳಲ್ಲಿ ನೀಡಿ.',
            hi: '55 और 70 दिन पर पुष्पन के समय दें।',
          },
          purpose: {
            en: 'Phosphorus drives profuse flowering clusters; Potassium firms fruit rind; Boron ensures viable pollen tubes and zero flower shed.',
            te: 'భాస్వరం పూత ఎక్కువగా రావడానికి, పొటాష్ కాయ నాణ్యతకు, బోరాన్ పూత రాలకుండా కాయగా మారడానికి తోడ్పడుతుంది.',
            kn: 'ಹೆಚ್ಚು ಹೂವು ಬಿಡಲು ಮತ್ತು ಕಾಯಿ ಕಚ್ಚಲು ಸಹಕಾರಿ.',
            hi: 'अधिक फूल लाने और फूलों को झड़ने से रोकने के लिए सर्वोत्तम है।',
          },
          applicationMethod: {
            en: 'MKP via drip (4kg/acre); Boron via foliar spray (1g/L).',
            te: 'డ్రిప్ ద్వారా MKP (4 కిలోలు), బోరాన్ ఆకులపై పిచికారీ చేయాలి.',
            kn: 'ಹನಿ ನೀರಾವರಿ ಮತ್ತು ಎಲೆ ಸಿಂಪರಣೆ ಮೂಲಕ.',
            hi: 'ड्रिप द्वारा एमकेपी और पत्तियों पर बोरॉन का छिड़काव करें।',
          },
          dosage: '4 kg MKP per acre via drip; 1g Boron per liter spray',
          precautions: {
            en: 'Spray Boron only during calm evening hours.',
            te: 'బోరాన్ సాయంత్రం వేళల్లోనే పిచికారీ చేయాలి.',
            kn: 'ಸಂಜೆ ವೇಳೆ ಬೋರಾನ್ ಸಿಂಪಡಿಸಿ.',
            hi: 'शाम के समय बोरॉन का छिड़काव करें।',
          },
        },
      ],
      pestsAndDiseases: [
        {
          name: {
            en: 'Dieback & Anthracnose / Fruit Rot (Colletotrichum capsici)',
            te: 'కొమ్మ ఎండు తెగులు & కాయ కుళ్ళు తెగులు (ఆంత్రాక్నోస్)',
            kn: 'ರೆಂಬೆ ಒಣಗುವ ರೋಗ ಮತ್ತು ಕಾಯಿ ಕೊಳೆ ರೋಗ',
            hi: 'डाईबैक एवं फल गलन / एन्थ्रेक्नोज रोग',
          },
          problemType: 'disease',
          symptomImage: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&auto=format&fit=crop&q=80',
          symptoms: {
            en: 'Drying of tender branches starting from tips downwards; circular sunken brown lesions on ripening fruits with black concentric rings.',
            te: 'కొమ్మల పైచివరల నుండి కిందికి ఎండిపోవడం; పండే కాయలపై గుండ్రని గుంటబడ్డ మచ్చలు ఏర్పడి కాయలు కుళ్ళిపోతాయి.',
            kn: 'ರೆಂಬೆಗಳ ತುದಿಯಿಂದ ಕೆಳಕ್ಕೆ ಒಣಗುವುದು; ಹಣ್ಣಿನ ಮೇಲೆ ಕಪ್ಪು ವೃತ್ತಾಕಾರದ ಕೊಳೆತ ಮಚ್ಚೆಗಳು ಮೂಡುತ್ತವೆ.',
            hi: 'टहनियां ऊपर से नीचे की ओर सूखने लगती हैं; पके फलों पर गोल धंसे हुए कत्थई-काले धब्बे बनते हैं।',
          },
          prevention: {
            en: 'Prune infected dry twigs 2 inches below infected portion and burn.',
            te: 'ఎండిపోయిన కొమ్మలను ఆశించిన భాగం కంటే 2 అంగుళాలు కిందికి కత్తిరించి కాల్చివేయాలి.',
            kn: 'ಒಣಗಿದ ಕೊಂಬೆಗಳನ್ನು ಕತ್ತರಿಸಿ ಸುಟ್ಟುಹಾಕಿ.',
            hi: 'सूखी टहनियों को काटकर जला दें।',
          },
          treatment: {
            en: 'Spray Azoxystrobin 18.2% + Difenoconazole 11.4% SC (Amistar Top 1ml/L) or Nativo (0.6g/L).',
            te: 'లీటరు నీటికి 1 మి.లీ అమిస్టార్ టాప్ లేదా 0.6 గ్రాముల నేటివో కలిపి పిచికారీ చేయాలి.',
            kn: 'ಅಮಿಸ್ಟಾರ್ ಟಾಪ್ (1 ಮಿ.ಲೀ/ಲೀಟರ್) ಸಿಂಪಡಿಸಿ.',
            hi: 'एमिस्टार टॉप (1 मिली/लीटर) या नेटिवो (0.6 ग्राम/लीटर) का छिड़काव करें।',
          },
          recommendedProduct: 'Amistar Top / Nativo',
          productImage: INPUT_PRODUCT_IMAGES.saaf,
          applicationTiming: {
            en: 'Spray at first sign of twig dieback or circular fruit lesions.',
            te: 'కొమ్మలు ఎండుతున్నట్లు కనిపించిన వెంటనే పిచికారీ చేయాలి.',
            kn: 'ಲಕ್ಷಣ ಕಂಡ ತಕ್ಷಣ ಸಿಂಪಡಿಸಿ.',
            hi: 'लक्षण दिखते ही छिड़काव करें।',
          },
        },
      ],
    },
    {
      id: 'chi_stage_4',
      order: 4,
      name: {
        en: '4. Fruit Maturation & Ripening Stage',
        te: '4. కాయ ముదిరి ఎరుపు రంగుకు మారే దశ',
        kn: '4. ಕಾಯಿ ಬೆಳೆಯುವ ಮತ್ತು ಕೆಂಪಾಗುವ ಹಂತ',
        hi: '4. फल परिपक्वता एवं लाल रंग बनने की अवस्था',
      },
      timing: {
        en: '80 to 120 DAT',
        te: 'నాటిన 80 నుండి 120 రోజులు',
        kn: 'ನಾಟಿ ಮಾಡಿದ 80 ರಿಂದ 120 ದಿನಗಳು',
        hi: 'रोपाई के 80 से 120 दिन',
      },
      stageImage: CROP_STAGE_IMAGES.chilli.stages.chi_stage_4,
      whatToDo: {
        en: '1. Shift fertigation to high Potassium formula (0:0:50 SOP) to boost capsanthin red pigment and thick pericarp.\n2. Spray Calcium Nitrate to stop fruit tip blackening and blossom-end rot.\n3. Avoid excess Nitrogen (Urea) which causes vegetative flush and delayed fruit ripening.\n4. Protect ripening pods from fruit borer caterpillars.',
        te: '1. కాయలు మంచి ఎరుపు రంగులోకి మారడానికి, కాయ నాణ్యత పెరగడానికి పొటాష్ (0-0-50) డ్రిప్ ద్వారా అందించాలి.\n2. కాయ చివర నల్లబడి కుళ్ళిపోకుండా ఉండటానికి కాల్షియం నైట్రేట్ పిచికారీ చేయాలి.\n3. ఈ సమయంలో యూరియా వేయరాదు; యూరియా వేస్తే మొక్క మళ్లీ ఎదిగి కాయలు పండటం ఆలస్యమవుతుంది.\n4. పండే కాయలను కాయతొలుచు పురుగుల నుండి కాపాడుకోవాలి.',
        kn: '1. ಕಾಯಿ ಉತ್ತಮ ಕೆಂಪು ಬಣ್ಣ ಬರಲು 0:0:50 ಪೊಟ್ಯಾಶ್ ಗೊಬ್ಬರ ನೀಡಿ.\n2. ಕಾಯಿ ತಳ ಕೊಳೆಯದಂತೆ ಕ್ಯಾಲ್ಸಿಯಂ ಸಿಂಪಡಿಸಿ.\n3. ಯೂರಿಯಾ ಹಾಕಬೇಡಿ, ಹಾಕಿದರೆ ಹಣ್ಣಾಗುವುದು ತಡವಾಗುತ್ತದೆ.\n4. ಕಾಯಿ ಕೊರೆಯುವ ಹುಳು ನಿಯಂತ್ರಿಸಿ.',
        hi: '1. मिर्च में गहरा लाल रंग और चमक लाने के लिए 0:0:50 पोटाश खाद दें।\n2. फल का निचला भाग काला होने से रोकने के लिए कैल्शियम नाइट्रेट का छिड़काव करें।\n3. इस समय यूरिया न डालें अन्यथा मिर्च पकने में देरी होगी।\n4. फल छेदक कीट से बचाव करें।',
      },
      irrigationGuide: {
        en: 'Controlled drip irrigation. Excess moisture prolongs green stage and delays uniform ripening.',
        te: 'డ్రిప్ ద్వారా నియంత్రితంగా నీరు ఇవ్వాలి. ఎక్కువ నీరు పెడితే కాయలు ఎర్రబారడం ఆలస్యమవుతుంది.',
        kn: 'ನಿಯಂತ್ರಿತ ಹನಿ ನೀರಾವರಿ ನೀಡಿ. ಹೆಚ್ಚು ನೀರು ಕೊಟ್ಟರೆ ಹಣ್ಣಾಗುವುದು ವಿಳಂಬವಾಗುತ್ತದೆ.',
        hi: 'संतुलित पानी दें। अधिक पानी से मिर्च पकने में देरी होती है।',
      },
      weatherPrecaution: {
        en: 'High humidity during ripening increases Fruit Rot (Anthracnose); maintain air circulation.',
        te: 'గాలిలో తేమ ఎక్కువైతే కాయకుళ్ళు తెగులు వ్యాపిస్తుంది.',
        kn: 'ತೇವಾಂಶ ಹೆಚ್ಚಿದಾಗ ಕಾಯಿ ಕೊಳೆ ರೋಗ ಬರದಂತೆ ನೋಡಿಕೊಳ್ಳಿ.',
        hi: 'नमी अधिक होने पर फल सड़न रोग बढ़ता है, निगरानी रखें।',
      },
      fertilizers: [
        {
          productName: '00:00:50 Sulphate of Potash (SOP) + Calcium Nitrate',
          productImage: INPUT_PRODUCT_IMAGES.potassium_nitrate_13_0_45,
          category: 'fertilizer',
          whenToApply: {
            en: 'Drip fertigate weekly during fruit color break (80–110 DAT).',
            te: 'కాయలు ఎరుపు రంగుకు మారే సమయంలో వారానికొకసారి డ్రిప్ ద్వారా ఇవ్వాలి.',
            kn: 'ಕಾಯಿ ಕೆಂಪಾಗುವಾಗ ವಾರಕ್ಕೊಮ್ಮೆ ನೀಡಿ.',
            hi: 'मिर्च लाल होते समय ड्रिप द्वारा साप्ताहिक रूप से दें।',
          },
          purpose: {
            en: 'Directly drives deep red capsanthin pigment synthesis, thickens fruit skin for drying, and enhances pungency (capsaicin).',
            te: 'కాయలు నిగనిగలాడే ముదురు ఎరుపు రంగులోకి మారడానికి, కాయ తొక్క మందంగా ఉండటానికి, ఘాటు పెరగడానికి సహాయపడుతుంది.',
            kn: 'ಉತ್ತಮ ಕೆಂಪು ಬಣ್ಣ ಮತ್ತು ತೂಕ ಬರಲು ಸಹಕಾರಿ.',
            hi: 'मिर्च में गहरा लाल रंग, तीखापन और सुखाने के लिए मोटा छिलका बनाता है।',
          },
          applicationMethod: {
            en: 'Drip fertigation.',
            te: 'డ్రిప్ ద్వారా అందించాలి.',
            kn: 'ಹನಿ ನೀರಾವರಿ ಮೂಲಕ.',
            hi: 'ड्रिप द्वारा दें।',
          },
          dosage: '5 kg SOP (0:0:50) per acre per week',
          precautions: {
            en: 'Never use MOP in chilli; chloride degrades red color and post-drying gloss.',
            te: 'మిరపలో MOP అస్సలు వాడకూడదు, కేవలం SOP మాత్రమే వాడాలి.',
            kn: 'ಎಂಒಪಿ ಬಳಸಬೇಡಿ, ಕೇವಲ ಎಸ್‌ಒಪಿ ಬಳಸಿ.',
            hi: 'एमओपी न डालें, केवल एसओपी का ही प्रयोग करें।',
          },
        },
      ],
      pestsAndDiseases: [],
    },
    {
      id: 'chi_stage_5',
      order: 5,
      name: {
        en: '5. Harvesting & Multi-Picking / Sun-Drying Stage',
        te: '5. కోతల దశ (వరుస కోతలు) & ఎండబెట్టడం',
        kn: '5. ಕೊಯ್ಲಿನ ಹಂತ ಮತ್ತು ಬಿಸಿಲಿನಲ್ಲಿ ಒಣಗಿಸುವುದು',
        hi: '5. तुड़ाई एवं धूप में सुखाने की अवस्था',
      },
      timing: {
        en: '90 to 180+ DAT',
        te: 'నాటిన 90 నుండి 180+ రోజులు',
        kn: 'ನಾಟಿ ಮಾಡಿದ 90 ರಿಂದ 180+ ದಿನಗಳು',
        hi: 'रोपाई के 90 से 180+ दिन',
      },
      stageImage: CROP_STAGE_IMAGES.chilli.stages.chi_stage_5,
      whatToDo: {
        en: '1. Pick fully ripe deep-red chillies with stalks attached (calyx intact) every 10–12 days.\n2. Spread chillies evenly on tarpaulins / clean drying floors; never dry on bare soil/mud.\n3. Turn chillies twice daily for uniform drying to 10% moisture (seeds rattle inside when shaken).\n4. After each picking, give light fertigation (13:0:45) to push new flushes of flowers and pods.',
        te: '1. తొడిమతో సహా పూర్తిగా పండిన ముదురు ఎరుపు కాయలను ప్రతి 10-12 రోజులకు కోయాలి.\n2. టార్పాలిన్ పట్టాలపై మాత్రమే ఆరబెట్టాలి; నేరుగా నేలపై లేదా మట్టిలో ఆరబోయరాదు.\n3. రోజుకు రెండుసార్లు కాయలను తిరగేస్తూ ఎండబెట్టాలి; కాయను కదిపితే గింజల గలగల శబ్దం వచ్చే వరకు ఎండాలి (10% తేమ).\n4. ప్రతి కోత తర్వాత కొత్త పూత, పిందె రావడానికి డ్రిప్ ద్వారా 13-0-45 ఎరువును అందించాలి.',
        kn: '1. ತೊಟ್ಟಿನ ಸಮೇತ ಪೂರ್ಣ ಕೆಂಪಾದ ಮೆಣಸಿನಕಾಯಿಯನ್ನು 10-12 ದಿನಕ್ಕೊಮ್ಮೆ ಕೊಯ್ಲು ಮಾಡಿ.\n2. ಟಾರ್ಪಲಿನ್ ಮೇಲೆ ಹರಡಿ ಒಣಗಿಸಿ, ಮಣ್ಣಿನಲ್ಲಿ ಹರಡಬೇಡಿ.\n3. ದಿನಕ್ಕೆ ಎರಡು ಬಾರಿ ಮಗುಚಿ ಹಾಕಿ 10% ತೇವಾಂಶ ಬರುವವರೆಗೆ ಒಣಗಿಸಿ.\n4. ಪ್ರತಿ ಕೊಯ್ಲಿನ ನಂತರ 13:0:45 ಗೊಬ್ಬರ ನೀಡಿ.',
        hi: '1. डंठल सहित पूरी तरह पकी गहरी लाल मिर्च 10-12 दिन के अंतराल पर तोड़ें।\n2. तिरपाल या पक्के फर्श पर सुखाएं, कच्ची मिट्टी पर कभी न सुखाएं।\n3. दिन में दो बार पलटें ताकि एकसमान सूखें (हिलाने पर बीज खड़कने लगें - 10% नमी)।\n4. प्रत्येक तुड़ाई के बाद नए फूल व फल आने के लिए 13:0:45 खाद दें।',
      },
      irrigationGuide: {
        en: 'Maintain regular light drip irrigation between pickings to keep subsequent flushes sizing up.',
        te: 'కోతల మధ్యలో తేలికపాటి డ్రిప్ తడులు ఇస్తూ ఉండాలి.',
        kn: 'ಕೊಯ್ಲಿನ ನಡುವೆ ಲಘು ಹನಿ ನೀರಾವರಿ ಮುಂದುವರಿಸಿ.',
        hi: 'तुड़ाई के बीच में नियमित हल्की ड्रिप सिंचाई जारी रखें।',
      },
      weatherPrecaution: {
        en: 'Cover drying yard with plastic sheets if untimely rain or heavy dew threatens; wet dried chillies turn black-spotted.',
        te: 'వర్షం లేదా మంచు పడే సూచన ఉంటే ఆరబోసిన మిరపపై ప్లాస్టిక్ పట్టాలు కప్పాలి.',
        kn: 'ಮಳೆಯ ಮುನ್ಸೂಚನೆ ಇದ್ದಾಗ ಒಣಗುತ್ತಿರುವ ಮೆಣಸಿನಕಾಯಿ ಮೇಲೆ ಪ್ಲಾಸ್ಟಿಕ್ ಹೊದಿಸಿ.',
        hi: 'बारिश या ओस से बचाने के लिए सूखती हुई मिर्च को प्लास्टिक शीट से ढकें।',
      },
      fertilizers: [
        {
          productName: '13:00:45 Potassium Nitrate (Multi-K)',
          productImage: INPUT_PRODUCT_IMAGES.potassium_nitrate_13_0_45,
          category: 'fertilizer',
          whenToApply: {
            en: 'Apply after every major picking flush via drip.',
            te: 'ప్రతి కోత పూర్తయిన తర్వాత డ్రిప్ ద్వారా అందించాలి.',
            kn: 'ಪ್ರತಿ ಕೊಯ್ಲಿನ ನಂತರ ಹನಿ ನೀರಾವರಿ ಮೂಲಕ ನೀಡಿ.',
            hi: 'प्रत्येक मुख्य तुड़ाई के बाद ड्रिप से दें।',
          },
          purpose: {
            en: 'Rejuvenates plant reserves and sizes up subsequent flushes of green chillies.',
            te: 'తర్వాతి కోతలకు కొత్త పూత, పిందెలు వేగంగా ఎదగడానికి తోడ్పడుతుంది.',
            kn: 'ಮುಂದಿನ ಕೊಯ್ಲಿಗೆ ಗಿಡವನ್ನು ಸಶಕ್ತವಾಗಿಡಲು ಸಹಕಾರಿ.',
            hi: 'पौधे में शक्ति बनाए रखता है ताकि अगली तुड़ाई में भी अच्छी उपज मिले।',
          },
          applicationMethod: {
            en: 'Drip fertigation.',
            te: 'డ్రిప్ ద్వారా అందించాలి.',
            kn: 'ಹನಿ ನೀರಾವರಿ ಮೂಲಕ.',
            hi: 'ड्रिप द्वारा दें।',
          },
          dosage: '3 kg per acre',
          precautions: {
            en: 'Observe 5-day pre-harvest interval for any chemical sprays.',
            te: 'పురుగుమందులు పిచికారీ చేసిన 5 రోజుల వరకు కాయలు కోయరాదు.',
            kn: 'ಕೀಟನಾಶಕ ಸಿಂಪಡಿಸಿದ 5 ದಿನ ಕೊಯ್ಲು ಮಾಡಬೇಡಿ.',
            hi: 'कीटनाशक छिड़कने के 5 दिन बाद ही तुड़ाई करें।',
          },
        },
      ],
      pestsAndDiseases: [],
    },
  ],
  harvestingGuide: {
    en: 'Pick deep red chillies with stalks attached (calyx intact). Dry on clean tarpaulins for 8–10 days until moisture drops to 10% (seeds rattle inside pod). Turn pods twice daily for uniform red luster.',
    te: 'తొడిమతో కూడిన ముదురు ఎరుపు మిరపకాయలను కోయాలి. టార్పాలిన్లపై 8-10 రోజులు 10% తేమ వచ్చే వరకు ఆరబెట్టాలి. రోజుకు రెండుసార్లు తిరగేయాలి.',
    kn: 'ತೊಟ್ಟಿನ ಸಮೇತ ಪೂರ್ಣ ಕೆಂಪಾದ ಮೆಣಸಿನಕಾಯಿ ಕೊಯ್ಲು ಮಾಡಿ ಟಾರ್ಪಲಿನ್ ಮೇಲೆ 8-10 ದಿನ ಒಣಗಿಸಿ.',
    hi: 'डंठल सहित लाल मिर्च तोड़ें। तिरपाल पर 8-10 दिन 10% नमी तक सुखाएं।',
  },
  precautions: {
    en: '1. Use sticky traps early to prevent Black Thrips explosion.\n2. Never use MOP; only use Sulphate of Potash (SOP) in chilli.\n3. Dry pods exclusively on tarpaulins, never on mud soil.',
    te: '1. నల్ల తామర పురుగు రాకుండా మొదటి నుంచే జిగురు అట్టలు పెట్టాలి.\n2. మిరపలో MOP వాడకూడదు, SOP మాత్రమే వాడాలి.\n3. మిరపను నేరుగా నేలపై కాకుండా టార్పాలిన్లపైనే ఆరబెట్టాలి.',
    kn: '1. ಜಿಗುಟು ಬಲೆಗಳನ್ನು ಮೊದಲೇ ಅಳವಡಿಸಿ.\n2. ಎಂಒಪಿ ಬಳಸಬೇಡಿ, ಎಸ್‌ಒಪಿ ಮಾತ್ರ ಬಳಸಿ.\n3. ಟಾರ್ಪಲಿನ್ ಮೇಲೆ ಮಾತ್ರ ಒಣಗಿಸಿ.',
    hi: '1. थ्रिप्स से बचाव के लिए शुरुआत से ही स्टिकी ट्रैप लगाएं।\n2. एमओपी न डालें, केवल एसओपी का प्रयोग करें।\n3. पक्की तिरपाल पर ही सुखाएं।',
  },
  // 1. Soil & Climate
  soilAndClimate: {
    title: {
      en: 'Well-Drained Loam Soils & Warm Climate',
      te: 'నీరు ఇంకే ఎర్ర గరప నేలలు & వాతావరణ పరిస్థితులు',
      kn: 'ಉತ್ತಮ ನೀರು ಬಸಿದು ಹೋಗುವ ಮರಳು ಮಿಶ್ರಿತ ಗೋಡು ಮಣ್ಣು',
      hi: 'उत्तम जल निकास वाली दोमट मिट्टी एवं अनुकूल जलवायु',
    },
    image: CROP_PRACTICE_IMAGES.chilli.soil,
    imageCaption: {
      en: 'Rich, crumbly sandy loam and light black soils rich in organic matter with pH 6.0 to 7.5',
      te: 'సేంద్రియ కర్బనం ఎక్కువగా ఉన్న సారవంతమైన ఎర్ర నేలలు మరియు తేలికపాటి నల్లరేగడి నేలలు',
      kn: 'ಸಾವಯವ ಸಮೃದ್ಧ ಮರಳು ಗೋಡು ಮತ್ತು ತಿಳಿ ಕಪ್ಪು ಮಣ್ಣು',
      hi: 'जीवांश युक्त बलुई दोमट एवं हल्की काली मिट्टी (पीएच 6.0 से 7.5)',
    },
    description: {
      en: 'Chilli requires a warm, sub-tropical climate (20–30°C) with moderate rainfall. Heavy clay waterlogged soils cause lethal Phytophthora root rot and leaf curl. Well-drained deep loams, red sandy soils, or light deltaic alluvials with good drainage are essential.',
      te: 'మిరపకు 20-30°C ఉష్ణోగ్రత అనుకూలం. నీరు నిలిచే బరువైన నేలల్లో వేరుకుళ్ళు మరియు బూడిద తెగుళ్ళు ఎక్కువగా వస్తాయి. మురుగునీటి సౌకర్యం ఉన్న ఎర్ర నేలలు లేదా తేలికపాటి నల్ల నేలలు చాలా మంచివి.',
      kn: '20-30°C ತಾಪಮಾನ ಸೂಕ್ತ. ನೀರು ನಿಲ್ಲುವ ಮಣ್ಣಿನಲ್ಲಿ ಬೇರು ಕೊಳೆ ಬರುತ್ತದೆ. ನೀರು ಬಸಿದು ಹೋಗುವ ಮಣ್ಣು ಅತ್ಯುತ್ತಮ.',
      hi: 'मिर्च के लिए 20-30°C तापमान अनुकूल है। जलजमाव वाली मिट्टी में उकठा एवं जड़ सड़न होती है। अच्छी जल निकास वाली दोमट मिट्टी चुनें।',
    },
    details: [
      {
        en: 'Temperature Sensitivity: High heat above 35°C during flowering causes flower and bud abscission.',
        te: 'ఉష్ణోగ్రత: పూత సమయంలో 35°C మించితే పూత, పిందె రాలిపోతుంది.',
        kn: '35°C ಗಿಂತ ಹೆಚ್ಚು ಬಿಸಿಲಿನಲ್ಲಿ ಹೂವು ಉದುರುತ್ತದೆ.',
        hi: 'फूल आते समय 35°C से अधिक तापमान होने पर फूल और कलियां झड़ने लगती हैं।',
      },
    ],
  },
  // 2. Land Preparation
  landPreparation: {
    title: {
      en: 'Deep Pulverization, Raised Beds & Drip Lateral Laying',
      te: 'లోతు దుక్కి, ఎత్తైన బోదెలు & డ్రిప్ పైపుల అమరిక',
      kn: 'ಆಳವಾದ ಉಳುಮೆ, ಎತ್ತರಿಸಿದ ಮಡಿ ಮತ್ತು ಹನಿ ನೀರಾವರಿ',
      hi: 'गहरी जुताई, उठी हुई क्यारियां (Raised Beds) एवं ड्रिप पाइप बिछाना',
    },
    image: CROP_PRACTICE_IMAGES.chilli.landPrep,
    imageCaption: {
      en: 'Raised beds (90 cm width, 15 cm height) covered with 25-micron silver-black plastic mulch',
      te: 'సిల్వర్-బ్లాక్ ప్లాస్టిక్ మల్చింగ్ షీట్‌తో సిద్ధం చేసిన 90 సెం.మీ ఎత్తైన బోదెలు',
      kn: 'ಪ್ಲಾಸ್ಟಿಕ್ ಹೊದಿಕೆ (ಮಲ್ಚಿಂಗ್) ಹಾಕಿದ ಎತ್ತರಿಸಿದ ಮಡಿಗಳು',
      hi: '25 माइक्रोन सिल्वर-ब्लैक मल्चिंग शीट से ढकी 90 सेमी चौड़ी उठी क्यारियां',
    },
    description: {
      en: 'Plough field 3–4 times to a fine tilth. Incorporate 10 tonnes of decomposed FYM + 2 kg Trichoderma per acre. Form raised beds of 90 cm width and 15 cm height with 45 cm walking furrows. Lay inline drip laterals and cover beds with 25-micron silver-black reflective mulch sheet to deter thrips and suppress weeds.',
      te: 'భూమిని 3-4 సార్లు మెత్తగా దున్నాలి. ఎకరానికి 10 టన్నుల పశువుల ఎరువు + 2 కిలోల ట్రైకోడెర్మా వేయాలి. 90 సెం.మీ వెడల్పు, 15 సెం.మీ ఎత్తు గల బోదెలు తయారు చేసి, డ్రిప్ పైపులు పరిచి, 25 మైక్రాన్ల సిల్వర్-బ్లాక్ మల్చింగ్ పరచాలి.',
      kn: 'ಮಣ್ಣನ್ನು ನುಣ್ಣಗೆ ಉಳುಮೆ ಮಾಡಿ ತಿಪ್ಪೆ ಗೊಬ್ಬರ ಹಾಕಿ ಎತ್ತರಿಸಿದ ಮಡಿ ಮಾಡಿ ಮಲ್ಚಿಂಗ್ ಹಾಕಿ.',
      hi: '3-4 जुताई कर 10 टन गोबर खाद मिलाएं। 90 सेमी चौड़ी उठी क्यारियां बनाकर ड्रिप पाइप बिछाएं और सिल्वर-ब्लैक मल्चिंग लगाएं।',
    },
    details: [
      {
        en: 'Mulch Shield: Silver reflective surface repels airborne Thrips and Aphids by 60%, drastically cutting down virus vectors.',
        te: 'మల్చింగ్ లాభం: వెండి రంగు కాంతిని పరావర్తనం చెందించి తామర పురుగులు, పేనుబంక రాకుండా 60% అడ్డుకుంటుంది.',
        kn: 'ಬೆಳ್ಳಿ ಬಣ್ಣದ ಮಲ್ಚಿಂಗ್ ಕೀಟಗಳನ್ನು ದೂರವಿಡುತ್ತದೆ.',
        hi: 'सिल्वर सतह धूप परावर्तित कर थ्रिप्स और एफिड्स को 60% तक भगाती है।',
      },
    ],
  },
  // 3. Seed & Sowing Practice
  seedAndSowingPractice: {
    seed: {
      title: {
        en: 'High-Pungency Hybrid Seed & Pro-Tray Nursery',
        te: 'హైబ్రిడ్ విత్తన ఎంపిక & ప్రో-ట్రే నారుమడి',
        kn: 'ಉತ್ತಮ ಇಳುವರಿಯ ಹೈಬ್ರಿಡ್ ಬೀಜ ಮತ್ತು ಪ್ರೋಟ್ರೆ ನರ್ಸರಿ',
        hi: 'उच्च तीखेपन वाले संकर बीज एवं प्रो-ट्रे नर्सरी',
      },
      image: CROP_PRACTICE_IMAGES.chilli.seed,
      imageCaption: {
        en: 'Sturdy 30-day-old chilli seedlings grown in 98-cavity pro-trays filled with sterilized coco-peat',
        te: 'కోకోపీట్‌తో కూడిన ప్రో-ట్రేలలో పెంచిన 30 రోజుల దృఢమైన మిరప నారు',
        kn: 'ಪ್ರೋಟ್ರೆಗಳಲ್ಲಿ ಬೆಳೆಸಿದ 30 ದಿನಗಳ ಗಟ್ಟಿಮುಟ್ಟಾದ ಮೆಣಸಿನಕಾಯಿ ಸಸಿಗಳು',
        hi: 'कोकोपीट भरे 98 खानों वाले प्रो-ट्रे में उगाई गई 30 दिन की स्वस्थ पौध',
      },
      description: {
        en: 'Select tested thrips-tolerant hybrids (e.g., Teja, Syngenta 5531, Armoor, US-341, or Byadagi). Grow seedlings in 98-cell pro-trays inside a 40-mesh insect-proof net house to protect tender seedlings from Gemini virus and Thrips vectors right from day one.',
        te: 'తేజ, సింజెంటా 5531, ఆర్మూర్, యుఎస్-341 లేదా బ్యాడగి వంటి మేలైన హైబ్రిడ్ రకాలను ఎంచుకోవాలి. నెట్‌హౌస్‌లో ప్రో-ట్రేలలో కోకోపీట్ నింపి 30 రోజులు ఆరోగ్యకరమైన నారు పెంచాలి.',
        kn: 'ತೇಜ, ಬ್ಯಾಡಗಿ ಅಥವಾ ಯುಎಸ್-341 ಹೈಬ್ರಿಡ್ ತಳಿಗಳನ್ನು ನೆಟ್‌ಹೌಸ್‌ನಲ್ಲಿ ಪ್ರೋಟ್ರೆಗಳಲ್ಲಿ ಬೆಳೆಸಿ.',
        hi: 'तेजा, सिंजेंटा 5531, आर्मूर या ब्याडगी जैसी संकर किस्में चुनें। कीट अवरोधी नेट हाउस में प्रो-ट्रे में पौध तैयार करें।',
      },
      details: [
        {
          en: 'Seed Rate: 80 to 100 grams of hybrid seed per acre.',
          te: 'విత్తన మోతాదు: ఎకరానికి 80 నుండి 100 గ్రాముల హైబ్రిడ్ విత్తనం సరిపోతుంది.',
          kn: 'ಬೀಜದ ಪ್ರಮಾಣ: ಎಕರೆಗೆ 80-100 ಗ್ರಾಂ ಹೈಬ್ರಿಡ್ ಬೀಜ.',
          hi: 'बीज दर: 80 से 100 ग्राम संकर बीज प्रति एकड़।',
        },
      ],
    },
    treatment: {
      title: {
        en: 'Systemic Insecticide & Fungicide Seed/Root Dip',
        te: 'రసాయన విత్తన శుద్ధి & నారు వేర్ల మునక విధానం',
        kn: 'ಶಿಲೀಂಧ್ರನಾಶಕ ಮತ್ತು ಕೀಟನಾಶಕ ಬೇರು ಉಪಚಾರ',
        hi: 'प्रणालीगत कीटनाशी एवं फफूंदनाशी से जड़ उपचार',
      },
      image: CROP_PRACTICE_IMAGES.chilli.seedTreatment,
      imageCaption: {
        en: 'Dipping seedling root balls in Imidacloprid + Carbendazim suspension for 15 minutes before planting',
        te: 'నాటడానికి ముందు నారు వేర్లను ఇమిడాక్లోప్రిడ్ మరియు కార్బండజిమ్ ద్రావణంలో 15 నిమిషాలు ముంచడం',
        kn: 'ನಾಟಿಗೆ ಮುನ್ನ ಸಸಿಗಳ ಬೇರುಗಳನ್ನು ಶಿಲೀಂಧ್ರನಾಶಕ ದ್ರಾವಣದಲ್ಲಿ ಅದ್ದುವುದು',
        hi: 'रोपाई से पूर्व पौध की जड़ों को इमिडाक्लोप्रिड व कार्बेंडाजिम घोल में 15 मिनट डुबोना',
      },
      description: {
        en: 'Treat seed with Thiram or Captan @ 3 g/kg seed. At the time of transplanting, perform compulsory Seedling Root Dip: dip root balls for 15 minutes in a bucket containing Imidacloprid 17.8% SL (0.5 ml/L) + Carbendazim 50% WP (1 g/L) to give 20-day systemic protection against damping off and sucking pests.',
        te: 'విత్తనాన్ని థైరమ్ (3 గ్రా/కిలో) తో శుద్ధి చేయాలి. నాటే సమయంలో నారు వేర్లను ఇమిడాక్లోప్రిడ్ (0.5 మి.లీ) + కార్బండజిమ్ (1 గ్రాము) లీటరు నీటి ద్రావణంలో 15 నిమిషాలు ముంచి నాటాలి.',
        kn: 'ನಾಟಿಗೆ ಮುನ್ನ ಇಮಿಡಾಕ್ಲೋಪ್ರಿಡ್ ಮತ್ತು ಕಾರ್ಬೆಂಡಾಜಿಮ್ ದ್ರಾವಣದಲ್ಲಿ ಬೇರುಗಳನ್ನು ಅದ್ದಿ.',
        hi: 'बीज को थीरम (3 ग्राम/किग्रा) से उपचारित करें। रोपाई के समय जड़ों को इमिडाक्लोप्रिड (0.5 मिली) + कार्बेंडाजिम (1 ग्राम/लीटर) के घोल में 15 मिनट डुबोएं।',
      },
      details: [
        {
          en: 'Damping-Off Shield: Eradicates Pythium collar rot and delays early viruliferous thrips colonization.',
          te: 'మొక్క కుళ్ళు నివారణ: నారు కుళ్ళు తెగులు రాకుండా కాపాడుతుంది మరియు తామర పురుగులను నివారిస్తుంది.',
          kn: 'ಸಸಿ ಕೊಳೆ ರೋಗ ಬರದಂತೆ ತಡೆಯುತ್ತದೆ.',
          hi: 'आर्द्र गलन (डैम्पिंग ऑफ) रोकता है और चूसक कीटों से 20 दिन की सुरक्षा देता है।',
        },
      ],
    },
    sowing: {
      title: {
        en: 'Zig-Zag Transplanting on Mulched Beds (60 cm × 45 cm)',
        te: 'మల్చింగ్ షీట్‌పై జిగ్-జాగ్ పద్ధతిలో 60 × 45 సెం.మీ ఎడంలో నాటడం',
        kn: 'ಮಲ್ಚಿಂಗ್ ಮೇಲೆ ಜಿಗ್-ಜಾಗ್ ಮಾದರಿಯಲ್ಲಿ ನಾಟಿ',
        hi: 'मल्चिंग शीट पर ज़िग-ज़ैग तरीके से 60 × 45 सेमी पर रोपाई',
      },
      image: CROP_PRACTICE_IMAGES.chilli.sowing,
      imageCaption: {
        en: 'Transplanting hardened 30-day seedlings into holes punched through silver-black mulch in two zigzag rows',
        te: 'మల్చింగ్ షీట్‌పై చేసిన రంధ్రాలలో రెండు వరుసలలో జిగ్-జాగ్ పద్ధతిలో మొక్కలు నాటడం',
        kn: 'ಪ್ಲಾಸ್ಟಿಕ್ ಮಲ್ಚಿಂಗ್ ರಂಧ್ರಗಳಲ್ಲಿ ಸಸಿಗಳನ್ನು ಸಾಲಿನಲ್ಲಿ ನಾಟಿ ಮಾಡುವುದು',
        hi: 'मल्चिंग शीट के छेदों में दोहरी कतारों में ज़िग-ज़ैग रोपाई',
      },
      description: {
        en: 'Punch 7 cm holes in silver-black mulch at 60 cm row-to-row and 45 cm plant-to-plant spacing in a paired-row zig-zag arrangement (approx 7,000 to 7,500 plants/acre). Transplant 30–35 day old seedlings during late afternoon to minimize transplant shock.',
        te: 'మల్చింగ్ షీట్‌పై 60 × 45 సెం.మీ ఎడంలో రంధ్రాలు చేసి సాయంత్రం వేళల్లో మొక్కలను నాటాలి. జిగ్-జాగ్ పద్ధతిలో నాటడం వలన మొక్కకు గాలి, వెలుతురు బాగా తగులుతుంది.',
        kn: 'ಸಂಜೆ ವೇಳೆ 60 × 45 ಸೆಂ.ಮೀ ಅಂತರದಲ್ಲಿ ಮಲ್ಚಿಂಗ್ ಮೇಲೆ ನಾಟಿ ಮಾಡಿ.',
        hi: 'मल्चिंग पर 60 × 45 सेमी की दूरी पर छेद बनाकर शाम के समय रोपाई करें। प्रति एकड़ 7,000-7,500 पौधे लगाएं।',
      },
      details: [
        {
          en: 'Canopy Interception: Zig-zag geometry ensures each chilli bush receives maximum lateral sunlight, multiplying branching nodes.',
          te: 'శాఖల విస్తరణ: జిగ్-జాగ్ పద్ధతి వల్ల ఎక్కువ కొమ్మలు వచ్చి కాయల సంఖ్య పెరుగుతుంది.',
          kn: 'ಹೆಚ್ಚು ಕವಲುಗಳು ಬರುತ್ತವೆ.',
          hi: 'ज़िग-ज़ैग रोपाई से पौधों को भरपूर धूप मिलती है जिससे शाखाएं और मिर्च की संख्या बढ़ती है।',
        },
      ],
    },
  },
  // 4. Water and Weed Management
  waterAndWeedManagement: {
    irrigation: {
      title: {
        en: 'Precision Drip Fertigation & Soil Moisture Management',
        te: 'డ్రిప్ ద్వారా బిందు సేద్యం & క్రమబద్ధమైన నీటి తడులు',
        kn: 'ಹನಿ ನೀರಾವರಿ ಮತ್ತು ಮಣ್ಣಿನ ತೇವಾಂಶ ನಿರ್ವಹಣೆ',
        hi: 'सटीक ड्रिप सिंचाई एवं नमी प्रबंधन',
      },
      image: CROP_PRACTICE_IMAGES.chilli.irrigation,
      imageCaption: {
        en: 'Inline drip line delivering 2 liters/hour water per emitter directly at the root zone underneath mulch',
        te: 'మల్చింగ్ కింద వేర్ల వద్దకే నేరుగా నీటిని అందించే డ్రిప్ బిందు సేద్యం',
        kn: 'ಬೇರಿನ ಬುಡಕ್ಕೆ ಹನಿ ಹನಿಯಾಗಿ ನೀರು ಕೊಡುವ ಪದ್ಧತಿ',
        hi: 'मल्चिंग के नीचे सीधे जड़ों तक प्रति घंटा 2 लीटर पानी देने वाली ड्रिप',
      },
      description: {
        en: 'Run drip for 1 to 1.5 hours every alternate day depending on evapotranspiration. Never flood beds; excess moisture triggers lethal Phytophthora root rot and causes instant leaf yellowing. Maintain constant field capacity without water ponding.',
        te: 'వాతావరణాన్ని బట్టి ఒకటి విడిచి ఒక రోజు 1 నుండి 1.5 గంటల పాటు డ్రిప్ ద్వారా నీరు అందించాలి. మిరపలో ఎక్కువ నీరు నిలిస్తే వేరుకుళ్ళు తెగులు వస్తుంది, కాబట్టి భూమిలో ఎప్పుడూ తగినంత తేమ మాత్రమే ఉండాలి.',
        kn: 'ದಿನಬಿಟ್ಟು ದಿನ 1-1.5 ಗಂಟೆ ಹನಿ ನೀರು ಹಾಯಿಸಿ. ನೀರು ನಿಲ್ಲದಂತೆ ಎಚ್ಚರವಹಿಸಿ.',
        hi: 'एक दिन छोड़कर 1 से 1.5 घंटे ड्रिप चलाएं। पानी कभी न भरने दें, अन्यथा जड़ गलन हो जाएगी।',
      },
      details: [
        {
          en: 'Saves 45% Water: Sub-surface root delivery eliminates weed germination in furrows and prevents fungal splash dispersal.',
          te: 'నీటి ఆదా: 45% నీరు ఆదా అవ్వడమే కాకుండా నేలలోని శిలీంధ్రాలు ఆకులపైకి ఎగరకుండా కాపాడుతుంది.',
          kn: 'ಶೇ. 45 ನೀರು ಉಳಿತಾಯ.',
          hi: '45% पानी की बचत होती है और फंगल रोगों का फैलाव रुकता है।',
        },
      ],
    },
    weeding: {
      title: {
        en: 'Mulch Weed Barrier & Furrow Manual Scraping',
        te: 'మల్చింగ్ రక్షణ & కాలువలలో కలుపు తీత',
        kn: 'ಮಲ್ಚಿಂಗ್ ಬಳಕೆ ಮತ್ತು ಸಾಲುಗಳ ನಡುವಿನ ಕಳೆ ಕೀಳುವಿಕೆ',
        hi: 'मल्चिंग द्वारा खरपतवार नियंत्रण एवं नालियों में निराई',
      },
      image: CROP_PRACTICE_IMAGES.chilli.weeding,
      imageCaption: {
        en: 'Completely weed-free mulched bed with manual sickle weeding only inside walking alleys',
        te: 'మల్చింగ్ వల్ల కలుపు లేని బోదెలు మరియు నడిచే దారులలో తేలికపాటి కలుపు తీయడం',
        kn: 'ಮಲ್ಚಿಂಗ್‌ನಿಂದ ಕಳೆಮುಕ್ತವಾದ ಮೆಣಸಿನ ಬೆಳೆ',
        hi: 'मल्चिंग से खरपतवार-मुक्त क्यारियां और रास्तों में खुरपी से निराई',
      },
      description: {
        en: 'The silver-black mulch sheet prevents 95% weed growth on crop beds. Remove occasional weeds growing from planting holes by hand within 20 DAT. Clear walking furrows using a manual push-weeder or spray directed non-selective herbicide with a protective hood.',
        te: 'మల్చింగ్ షీట్ వలన బోదెలపై 95% కలుపు రాదు. మొక్క రంధ్రాల వద్ద వచ్చిన కలుపును చేతితో తీయాలి. కాలువల్లో నడిచే దారులలో కలుపు రాకుండా జాగ్రత్త పడాలి.',
        kn: 'ಮಲ್ಚಿಂಗ್ ಶೇ. 95 ಕಳೆ ತಡೆಯುತ್ತದೆ. ರಂಧ್ರಗಳಲ್ಲಿರುವ ಕಳೆ ಕೈಯಿಂದ ಕೀಳಿ.',
        hi: 'मल्चिंग से 95% खरपतवार रुक जाता है। छेदों में उगे खरपतवार को 20 दिन के अंदर हाथ से निकालें।',
      },
      details: [
        {
          en: 'Vector Harbor Eradication: Eliminating broadleaf weeds from field borders removes wild host reservoirs of Thrips parvispinus.',
          te: 'తామర పురుగు నివారణ: గట్లపై కలుపు లేకుండా ఉంచితే నల్ల తామర పురుగుల ఆవాసాలు నశిస్తాయి.',
          kn: 'ಕೀಟಗಳ ಆಶ್ರಯ ತಾಣ ನಾಶವಾಗುತ್ತದೆ.',
          hi: 'खेत की मेड़ों से खरपतवार हटाने से थ्रिप्स के छिपने के ठिकाने खत्म हो जाते हैं।',
        },
      ],
    },
  },
  // 5. Flower to Fruit Milestone
  criticalMilestone: {
    title: {
      en: 'Profuse Flowering & Fruit Set Milestone',
      te: 'విపరీతమైన పూత & పిందె కట్టే కీలక దశ',
      kn: 'ವಿಪುಲ ಹೂವಾಡುವಿಕೆ ಮತ್ತು ಕಾಯಿ ಕಟ್ಟುವ ಹಂತ',
      hi: 'भरपूर फूल आना एवं मिर्च बनने की क्रांतिक अवस्था',
    },
    image: CROP_PRACTICE_IMAGES.chilli.milestone,
    imageCaption: {
      en: 'Healthy white star-shaped chilli blooms and glossy green developing pods with zero thrips curl',
      te: 'ఆరోగ్యకరమైన తెల్లటి మిరప పూలు మరియు తామర పురుగు బెడద లేని నిగనిగలాడే పిందెలు',
      kn: 'ಉದುರದಂತೆ ಕಾಯಿ ಕಟ್ಟುತ್ತಿರುವ ಮೆಣಸಿನಕಾಯಿ ಹೂಗಳು',
      hi: 'थ्रिप्स रहित स्वस्थ सफेद फूल एवं तेजी से विकसित होती चमकदार हरी मिर्च',
    },
    description: {
      en: 'Occurs from 50 to 90 DAT. This stage decides total fruit picking cycles. Install blue and yellow sticky traps (30 each per acre). Spray Boron 20% (1 g/L) + 13:0:45 (5 g/L) + Planofix (0.25 ml/L) to prevent massive flower drop.',
      te: 'నాటిన 50 నుండి 90 రోజులు అత్యంత ముఖ్యమైన సమయం. ఎకరానికి 30 నీలి మరియు 30 పసుపు జిగురు అట్టలు పెట్టాలి. పూత రాలకుండా బోరాన్ (1 గ్రా) + 13:0:45 (5 గ్రా) + ప్లానోఫిక్స్ (0.25 మి.లీ) కలిపి పిచికారీ చేయాలి.',
      kn: '50-90 ದಿನದ ಹಂತದಲ್ಲಿ ನೀಲಿ ಮತ್ತು ಹಳದಿ ಬಲೆ ಹಾಕಿ. ಹೂವು ಉದುರದಂತೆ ಬೋರಾನ್ ಸಿಂಪಡಿಸಿ.',
      hi: '50 से 90 दिन की अवस्था सबसे महत्वपूर्ण है। 30 नीले व 30 पीले स्टिकी ट्रैप लगाएं। फूल झड़ने से रोकने हेतु बोरॉन + 13:0:45 + प्लानोफिक्स का छिड़काव करें।',
    },
    details: [
      {
        en: 'Sticky Trap Monitoring: Blue traps catch Black Thrips (Thrips parvispinus); yellow traps catch Whiteflies and Aphids.',
        te: 'జిగురు అట్టలు: నీలి అట్టలు నల్ల తామర పురుగులను, పసుపు అట్టలు తెల్లదోమ మరియు పేనుబంకను ఆకర్షిస్తాయి.',
        kn: 'ನೀಲಿ ಬಲೆ ಕಪ್ಪು ನುಸಿ ಹಿಡಿಯುತ್ತದೆ.',
        hi: 'नीले ट्रैप काले थ्रिप्स को और पीले ट्रैप सफेद मक्खी व एफिड्स को पकड़ते हैं।',
      },
    ],
  },
  // 6. Nutrients Master Plan
  nutrientsMasterPlan: {
    primary: [
      {
        nutrientName: 'Water Soluble NPK 19:19:19',
        fertilizerProduct: 'Polyfeed / Fully Soluble 19:19:19',
        productImage: INPUT_PRODUCT_IMAGES.npk_19_19_19,
        category: 'primary',
        whenToApply: {
          en: 'Fertigate through drip twice a week from 15 DAT to 50 DAT.',
          te: 'నాటిన 15 నుండి 50 రోజుల వరకు వారానికి రెండుసార్లు డ్రిప్ ద్వారా ఇవ్వాలి.',
          kn: 'ನಾಟಿ ಮಾಡಿದ 15 ರಿಂದ 50 ದಿನಗಳವರೆಗೆ ವಾರಕ್ಕೆ ಎರಡು ಬಾರಿ ಹನಿ ನೀರಾವರಿ ಮೂಲಕ ಕೊಡಿ.',
          hi: 'रोपाई के 15 से 50 दिन तक सप्ताह में दो बार ड्रिप द्वारा दें।',
        },
        purpose: {
          en: 'Stimulates lush vegetative framework, rapid branching, and early flower bud induction.',
          te: 'మొక్క బాగా కొమ్మలు వేయడానికి, ఏపుగా పెరగడానికి సమతుల్య నత్రజని, భాస్వరం, పొటాషియం అందిస్తుంది.',
          kn: 'ಹೆಚ್ಚು ಕವಲುಗಳು ಒಡೆದು ಸಮೃದ್ಧವಾಗಿ ಬೆಳೆಯಲು.',
          hi: 'पौधे की अच्छी बढ़वार एवं अधिक शाखाएं निकालने के लिए।',
        },
        howToApply: {
          en: 'Dissolve in fertigation tank and inject through venturi @ 3 kg/acre per run.',
          te: 'వెంచురి ద్వారా ఎకరానికి 3 కిలోలు డ్రిప్‌లో వదలాలి.',
          kn: 'ವೆಂಚುರಿ ಮೂಲಕ ಎಕರೆಗೆ 3 ಕೆಜಿ ಕೊಡಿ.',
          hi: 'वेंचुरी द्वारा 3 किग्रा प्रति एकड़ ड्रिप में चलाएं।',
        },
        dosage: '3 kg/acre per fertigation run',
        precautions: {
          en: 'Always flush drip lines with plain water for 15 minutes after fertigation.',
          te: 'ఎరువు ఇచ్చిన తర్వాత డ్రిప్ పైపులను 15 నిమిషాలు మంచి నీటితో క్లీన్ చేయాలి.',
          kn: 'ನಂತರ 15 ನಿಮಿಷ ಶುದ್ಧ ನೀರು ಹಾಯಿಸಿ.',
          hi: 'खाद देने के बाद 15 मिनट सादा पानी चलाकर ड्रिप लाइन साफ करें।',
        },
      },
      {
        nutrientName: 'Sulphate of Potash (SOP 0:0:50 + 17.5% S)',
        fertilizerProduct: 'Water Soluble Sulphate of Potash (K2SO4)',
        productImage: INPUT_PRODUCT_IMAGES.sop_0_0_50,
        category: 'primary',
        whenToApply: {
          en: 'Apply through drip @ 3 kg/acre every week from flowering to final picking.',
          te: 'పూత ప్రారంభమైనప్పటి నుండి చివరి కోత వరకు వారానికి 3 కిలోలు డ్రిప్ ద్వారా ఇవ్వాలి.',
          kn: 'ಹೂವು ಬಿಟ್ಟಾಗಿನಿಂದ ಕಡೆಯ ಕೊಯ್ಲಿನವರೆಗೆ ವಾರಕ್ಕೆ 3 ಕೆಜಿ ಕೊಡಿ.',
          hi: 'फूल आने से अंतिम तुड़ाई तक प्रति सप्ताह 3 किग्रा ड्रिप द्वारा दें।',
        },
        purpose: {
          en: 'MANDATORY IN CHILLI: Enhances fruit length, skin shine, capsaicin pungency, and bright red color. Never use MOP (chloride reduces chilli quality).',
          te: 'మిరపలో తప్పనిసరి: కాయ పొడవు, నిగనిగలాడే ఎరుపు రంగు, ఘాటుతనం పెరగడానికి SOP మాత్రమే వాడాలి. క్లోరైడ్ ఉండే MOP మిరపలో వాడకూడదు.',
          kn: 'ಮೆಣಸಿನಕಾಯಿಗೆ ಕಡ್ಡಾಯ: ಉತ್ತಮ ಕೆಂಪು ಬಣ್ಣ ಮತ್ತು ಖಾರಕ್ಕೆ ಎಸ್‌ಒಪಿ ಮಾತ್ರ ಬಳಸಿ.',
          hi: 'मिर्च में अत्यंत आवश्यक: मिर्च की लंबाई, चमक, लाल रंग और तीखापन बढ़ाता है। एमओपी का प्रयोग न करें।',
        },
        howToApply: {
          en: 'Drip fertigation @ 3 kg/acre per application.',
          te: 'డ్రిప్ ద్వారా ఎకరానికి 3 కిలోలు ఇవ్వాలి.',
          kn: 'ಹನಿ ನೀರಾವರಿ ಮೂಲಕ ಎಕರೆಗೆ 3 ಕೆಜಿ ಕೊಡಿ.',
          hi: '3 किग्रा प्रति एकड़ ड्रिप द्वारा दें।',
        },
        dosage: '3 kg/acre weekly during fruiting',
        precautions: {
          en: 'Do not mix SOP directly with Calcium Nitrate in the same fertilizer tank.',
          te: 'కాల్షియం నైట్రేట్‌తో కలిపి ఒకే ట్యాంకులో కలపకూడదు.',
          kn: 'ಕ್ಯಾಲ್ಸಿಯಂ ನೈಟ್ರೇಟ್ ಜೊತೆ ಬೆರೆಸಬೇಡಿ.',
          hi: 'कैल्शियम नाइट्रेट के साथ एक ही टैंक में न मिलाएं।',
        },
      },
    ],
    secondary: [
      {
        nutrientName: 'Calcium Nitrate (Ca 18.8%, N 15.5%)',
        fertilizerProduct: 'Water Soluble Calcium Nitrate',
        productImage: INPUT_PRODUCT_IMAGES.calcium_nitrate,
        category: 'secondary',
        whenToApply: {
          en: 'Fertigate through drip @ 4 kg/acre at early flowering and fruit expansion.',
          te: 'పూత మరియు కాయ ఎదుగుదల సమయంలో ఎకరానికి 4 కిలోలు డ్రిప్ ద్వారా ఇవ్వాలి.',
          kn: 'ಹೂವಾಡುವಾಗ ಮತ್ತು ಕಾಯಿ ಬೆಳೆಯುವಾಗ ಎಕರೆಗೆ 4 ಕೆಜಿ ಕೊಡಿ.',
          hi: 'फूल एवं मिर्च विकास के समय 4 किग्रा प्रति एकड़ ड्रिप द्वारा दें।',
        },
        purpose: {
          en: 'Strengthens pod cell walls, prevents Blossom End Rot (black sunken rotting of pod tips), and prevents fruit cracking.',
          te: 'కాయ చివర నల్లబడి కుళ్ళిపోవడాన్ని (బ్లాసమ్ ఎండ్ రాట్) నివారించి, కాయ పగలకుండా నిగనిగలాడేలా చేస్తుంది.',
          kn: 'ಕಾಯಿ ಕೊಳೆ ಮತ್ತು ಬಿರುಕು ಬಿಡುವುದನ್ನು ತಡೆಯುತ್ತದೆ.',
          hi: 'मिर्च के सिरे की सड़न (ब्लॉसम एंड रॉट) और फटने से रोकता है।',
        },
        howToApply: {
          en: 'Dissolve in dedicated fertigation tank A and inject via drip.',
          te: 'ప్రత్యేక ట్యాంకులో కరిగించి డ్రిప్ ద్వారా అందించాలి.',
          kn: 'ಪ್ರತ್ಯೇಕ ತೊಟ್ಟಿಯಲ್ಲಿ ಕರಗಿಸಿ ಡ್ರಿಪ್ ಮೂಲಕ ಕೊಡಿ.',
          hi: 'अलग टैंक में घोलकर ड्रिप से दें।',
        },
        dosage: '4 kg/acre every 15 days',
        precautions: {
          en: 'Never mix with Phosphorus or Sulphate fertilizers (forms insoluble calcium sulphate gypsum).',
          te: 'భాస్వరం లేదా సల్ఫేట్ ఎరువులతో అస్సలు కలపకూడదు.',
          kn: 'ಸಲ್ಫೇಟ್ ಅಥವಾ ರಂಜಕ ಗೊಬ್ಬರದ ಜೊತೆ ಬೆರೆಸಬೇಡಿ.',
          hi: 'सल्फेट या फॉस्फोरस वाली खादों के साथ कभी न मिलाएं।',
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
          en: 'Foliar spray at early flowering (50 DAT) and repeat after 20 days.',
          te: 'మొదటి పూత సమయంలో (50 రోజులు) మరియు 20 రోజుల తర్వాత పిచికారీ చేయాలి.',
          kn: 'ಹೂವು ಬರುವಾಗ ಸಿಂಪಡಿಸಿ 20 ದಿನದ ನಂತರ ಪುನರಾವರ್ತಿಸಿ.',
          hi: 'शुरुआती फूल आते समय (50 दिन) छिड़कें और 20 दिन बाद दोहराएं।',
        },
        purpose: {
          en: 'Maximizes pollen viability, stops flower shedding, and eliminates curled/deformed chilli pods.',
          te: 'పూత రాలకుండా పిందె నిలబడటానికి మరియు వంకర కాయలు రాకుండా నివారించడానికి తోడ్పడుతుంది.',
          kn: 'ಹೂವು ಉದುರುವುದು ಮತ್ತು ಕಾಯಿ ವಕ್ರವಾಗುವುದನ್ನು ತಡೆಯುತ್ತದೆ.',
          hi: 'फूल झड़ने से रोकता है और टेढ़ी-मेढ़ी मिर्च बनने से बचाता है।',
        },
        howToApply: {
          en: 'Dissolve 1 gram Boron 20% per liter of water and spray thoroughly.',
          te: 'లీటరు నీటికి 1 గ్రాము బోరాన్ కలిపి పిచికారీ చేయాలి.',
          kn: 'ಲೀಟರ್ ನೀರಿಗೆ 1 ಗ್ರಾಂ ಬೋರಾನ್ ಬೆರೆಸಿ ಸಿಂಪಡಿಸಿ.',
          hi: '1 ग्राम बोरॉन प्रति लीटर पानी में मिलाकर छिड़कें।',
        },
        dosage: '1 g/L foliar spray (200 g/acre)',
        precautions: {
          en: 'Do not overdose beyond 1 g/L on tender chilli foliage.',
          te: 'మోతాదు 1 గ్రాము మించరాదు; ఎక్కువైతే ఆకులు మాడిపోతాయి.',
          kn: 'ಹೆಚ್ಚು ಪ್ರಮಾಣ ಬಳಸಬೇಡಿ.',
          hi: '1 ग्राम/लीटर से अधिक न डालें।',
        },
      },
    ],
  },
  // 7. Post-Harvest
  postHarvest: {
    maturity: {
      title: {
        en: 'Deep Red Pod Maturity (Ripe Ripe Stage)',
        te: 'పూర్తి ఎరుపు రంగులోకి మారిన కాయల పరిపక్వత',
        kn: 'ಸಂಪೂರ್ಣ ಕೆಂಪಾದ ಮೆಣಸಿನಕಾಯಿ ಕೊಯ್ಲಿನ ಹಂತ',
        hi: 'गहरे लाल रंग की पूर्ण परिपक्व मिर्च की पहचान',
      },
      image: CROP_PRACTICE_IMAGES.chilli.maturity,
      imageCaption: {
        en: 'Glossy deep dark red mature pods hanging on plant ready for picking with stalk attached',
        te: 'చెట్టుపై నిండు ఎరుపు రంగులోకి మారి తొడిమతో కోయడానికి సిద్ధంగా ఉన్న మిరపకాయలు',
        kn: 'ಗಿಡದಲ್ಲೇ ಪೂರ್ಣ ಕೆಂಪಾಗಿ ಕಟಾವಿಗೆ ಸಿದ್ಧವಾದ ಮೆಣಸಿನಕಾಯಿಗಳು',
        hi: 'पौधों पर लटकी हुई पूरी तरह पकी चमकदार गहरे लाल रंग की मिर्च',
      },
      description: {
        en: 'For dry red chilli, harvest only when fruits turn fully deep crimson red and firm to the touch. Avoid picking semi-ripe yellow-orange pods which fade during drying and fetch inferior market grades.',
        te: 'ఎండుమిర్చి కోసం కాయలు పూర్తిగా ముదురు ఎరుపు రంగులోకి మారిన తర్వాతే కోయాలి. దోరగా ఉన్న పసుపు-నారింజ రంగు కాయలను కోస్తే ఆరబెట్టినప్పుడు రంగు వెలిసిపోయి ధర రాదు.',
        kn: 'ಪೂರ್ಣ ಕೆಂಪಾದ ನಂತರವೇ ಕೊಯ್ಲು ಮಾಡಿ. ಹಸಿ ಅಥವಾ ಹಳದಿ ಕಾಯಿ ಕೊಯ್ಯಬೇಡಿ.',
        hi: 'सूखी लाल मिर्च के लिए केवल पूरी तरह लाल पकी मिर्च ही तोड़ें। अधपकी मिर्च तोड़ने से सुखाने पर रंग उड़ जाता है।',
      },
      details: [
        {
          en: 'Capsaicin & Color Peak: Fully ripe pods carry maximum ASTA color units and capsaicin content.',
          te: 'నాణ్యత: పూర్తి ఎరుపు కాయల్లో ఆస్టా కలర్ యూనిట్లు మరియు ఘాటుతనం గరిష్టంగా ఉంటాయి.',
          kn: 'ಉತ್ತಮ ಬಣ್ಣ ಮತ್ತು ಖಾರ ಇರುತ್ತದೆ.',
          hi: 'पूरी पकी मिर्च में एएसटीए रंग और तीखापन उच्चतम होता है।',
        },
      ],
    },
    harvesting: {
      title: {
        en: 'Manual Hand Picking with Calyx (Stalk) Intact',
        te: 'తొడిమతో సహా చేతితో జాగ్రత్తగా కోత కోయడం',
        kn: 'ತೊಟ್ಟಿನ ಸಮೇತ ಕೈಯಿಂದ ಕೊಯ್ಲು',
        hi: 'डंठल (कैलिक्स) सहित हाथ से सावधानीपूर्वक तुड़ाई',
      },
      image: CROP_PRACTICE_IMAGES.chilli.harvesting,
      imageCaption: {
        en: 'Picking ripe red chillies by twisting stalk, keeping calyx intact to prevent moisture loss and rot',
        te: 'తొడిమ ఊడిపోకుండా కాయను తిప్పి కోయడం వలన కాయ కుళ్ళిపోకుండా ఉంటుంది',
        kn: 'ತೊಟ್ಟು ಕಳಚದಂತೆ ತಿರುಚಿ ಕಟಾವು ಮಾಡುವುದು',
        hi: 'डंठल सहित मरोड़कर तोड़ना ताकि मिर्च अंदर से सड़े नहीं',
      },
      description: {
        en: 'Pick chillies gently by snapping the stalk at the plant node, ensuring the green calyx remains attached to the fruit. Chillies picked without calyx (broken stalk) bleed juices, attract fungal mold, and spoil rapidly in heaps.',
        te: 'తొడిమ కాయకు ఉండేలా జాగ్రత్తగా కోయాలి. తొడిమ లేని కాయల నుండి రసం కారి బూజు పట్టి పాడైపోతాయి. ప్రతి 15-20 రోజులకు ఒకసారి చొప్పున 5 నుండి 7 సార్లు కోతలు చేయవచ్చు.',
        kn: 'ತೊಟ್ಟು ಬಿಡದೆ ಕೊಯ್ಲು ಮಾಡಿ. ತೊಟ್ಟಿಲ್ಲದ ಕಾಯಿಗಳು ಬೂಸ್ಟು ಹಿಡಿದು ಹಾಳಾಗುತ್ತವೆ.',
        hi: 'डंठल सहित तोड़ें। बिना डंठल वाली मिर्च से रस निकलता है और फफूंद लगकर सड़ जाती है।',
      },
      details: [
        {
          en: 'Multiple Pickings: Commercial hybrid chilli yields 5 to 7 pickings over a 4-month span.',
          te: 'కోతల సంఖ్య: హైబ్రిడ్ మిరపలో 4 నెలల కాలంలో 5 నుండి 7 కోతలు తీసుకోవచ్చు.',
          kn: '5 ರಿಂದ 7 ಬಾರಿ ಕೊಯ್ಲು ಮಾಡಬಹುದು.',
          hi: 'संकर मिर्च में 4 महीनों में 5 से 7 बार तुड़ाई की जा सकती है।',
        },
      ],
    },
    dryingAndCuring: {
      title: {
        en: 'Sun Drying on Tarpaulins to 10% Seed-Rattle Moisture',
        te: 'టార్పాలిన్లపై 10% తేమ వచ్చే వరకు ఆరబెట్టడం (గింజ గలగలలాడేలా)',
        kn: 'ಟಾರ್ಪಲಿನ್ ಮೇಲೆ 10% ತೇವಾಂಶಕ್ಕೆ ಒಣಗಿಸುವುದು',
        hi: 'तिरपाल पर 10% नमी तक धूप में सुखाना (बीज खड़कने तक)',
      },
      image: CROP_PRACTICE_IMAGES.chilli.drying,
      imageCaption: {
        en: 'Red pods spread evenly on clean polythene tarpaulin, stirred twice daily for bright red glossy sheen',
        te: 'శుభ్రమైన టార్పాలిన్లపై పలచగా పరచి రోజుకు రెండుసార్లు తిరగేస్తూ ఆరబెట్టిన ఎర్ర మిరప',
        kn: 'ಟಾರ್పಲಿನ್ ಮೇಲೆ ಸಮವಾಗಿ ಹರಡಿ ದಿನಕ್ಕೆ ಎರಡು ಬಾರಿ ತಿರುವಿ ಒಣಗಿಸುವುದು',
        hi: 'साफ तिरपाल पर एकसमान फैलाकर दिन में दो बार पलटते हुए सुखाना',
      },
      description: {
        en: 'Spread freshly harvested pods on clean silpaulin/tarpaulin sheets (never directly on bare mud ground). Dry for 8 to 10 days in open sun, turning pods twice daily. Chillies are perfectly dried when moisture drops to 10% and dry seeds rattle when pods are shaken.',
        te: 'కోసిన మిరపకాయలను నేరుగా నేలపై కాకుండా శుభ్రమైన టార్పాలిన్లపై పలచగా పరవాలి. 8-10 రోజులు ఎండలో ఆరబెడుతూ రోజుకు రెండుసార్లు తిరగేయాలి. కాయను ఊపినప్పుడు లోపల గింజలు గలగలలాడితే 10% తేమ వచ్చినట్లు.',
        kn: 'ನೆಲದ ಮೇಲೆ ಹರಡದೆ ಟಾರ್ಪಲಿನ್ ಮೇಲೆ 8-10 ದಿನ ಒಣಗಿಸಿ. ಕಾಳು ಸದ್ದು ಮಾಡುವಾಗ ತೇವಾಂಶ ಸರಿಯಾಗಿದೆ.',
        hi: 'कच्ची जमीन पर कभी न सुखाएं, साफ तिरपाल पर 8-10 दिन सुखाएं। जब मिर्च हिलाने पर बीज खड़कने लगे तब समझें नमी 10% हो गई।',
      },
      details: [
        {
          en: 'Aflatoxin Prevention: Drying on elevated tarpaulins eliminates contact with soil-borne Aspergillus flavus mold spores.',
          te: 'బూజు నివారణ: టార్పాలిన్లపై ఆరబెడితే అఫ్లాటాక్సిన్ బూజు సోకకుండా ఎగుమతి నాణ్యత లభిస్తుంది.',
          kn: 'ಬೂಸ್ಟ್ ರೋಗ ಬರದಂತೆ ತಡೆಯುತ್ತದೆ.',
          hi: 'तिरपाल पर सुखाने से मिट्टी की फफूंद (एफ्लाटॉक्सिन) नहीं लगती।',
        },
      ],
    },
    storage: {
      title: {
        en: 'Cold Storage (4–8°C) & Moisture-Barrier Bagging',
        te: 'కోల్డ్ స్టోరేజ్ నిల్వ (4-8°C) & రంగు మారకుండా భద్రపరచడం',
        kn: 'ಶೀತಲ ಸಂಗ್ರಹಾಗಾರ (ಕೋಲ್ಡ್ ಸ್ಟೋರೇಜ್ 4-8°C) ಮತ್ತು ಶೇಖರಣೆ',
        hi: 'शीतगृह (कोल्ड स्टोरेज 4-8°C) एवं नमी-अवरोधक बैग में भंडारण',
      },
      image: CROP_PRACTICE_IMAGES.chilli.storage,
      imageCaption: {
        en: 'Dried chillies packed in clean gunny bags with polythene liner, stored in modern humidity-controlled cold store',
        te: 'రంగు మరియు ఘాటు తగ్గకుండా కోల్డ్ స్టోరేజ్‌లో భద్రపరిచిన ఎండుమిర్చి బస్తాలు',
        kn: 'ಬಣ್ಣ ಮತ್ತು ಗುಣಮಟ್ಟ ಉಳಿಯಲು ಕೋಲ್ಡ್ ಸ್ಟೋರೇಜ್‌ನಲ್ಲಿ ಶೇಖರಿಸಿದ ಮೆಣಸಿನ ಚೀಲಗಳು',
        hi: 'चमकदार लाल रंग और तीखापन बनाए रखने हेतु कोल्ड स्टोरेज में रखे गए बोरे',
      },
      description: {
        en: 'Pack dried pods into clean jute gunny bags lined with polythene liner (40 kg capacity). For long-term preservation and top market prices, deposit bags into commercial cold storages maintained at 4°C to 8°C and 60–65% relative humidity to prevent enzymatic browning and loss of red color.',
        te: 'బాగా ఎండిన మిరపను పాలిథిన్ లైనింగ్ ఉన్న గోనె సంచులలో నింపి, రంగు నల్లబడకుండా ఉండటానికి 4-8°C ఉష్ణోగ్రత ఉండే కోల్డ్ స్టోరేజ్‌లో భద్రపరచాలి.',
        kn: 'ಬಣ್ಣ ಕಪ್ಪಾಗದಂತೆ 4-8°C ತಾಪಮಾನದ ಕೋಲ್ಡ್ ಸ್ಟೋರೇಜ್‌ನಲ್ಲಿ ಶೇಖರಿಸಿ.',
        hi: 'मिर्च को पॉलीथीन अस्तर वाले जूट के बोरों में भरकर 4-8°C तापमान वाले कोल्ड स्टोरेज में रखें ताकि रंग काला न पड़े।',
      },
      details: [
        {
          en: 'Color Preservation: Ambient room storage turns pods dark brown/black within 3 months; cold store preserves ruby red brilliance for 12 months.',
          te: 'రంగు భద్రత: మామూలు గదిలో ఉంచితే 3 నెలల్లో నల్లబడుతుంది; కోల్డ్ స్టోరేజ్‌లో ఏడాది పాటు ఎర్రగా ఉంటుంది.',
          kn: 'ವರ್ಷಪೂರ್ತಿ ಕೆಂಪು ಬಣ್ಣ ಉಳಿಯುತ್ತದೆ.',
          hi: 'कोल्ड स्टोरेज में 12 महीने तक मिर्च का चमकदार लाल रंग बना रहता है।',
        },
      ],
    },
  },
};
