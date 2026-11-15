import { CropAdvisoryRecord } from '../cropAdvisoryData';
import { CROP_STAGE_IMAGES, INPUT_PRODUCT_IMAGES, CROP_PRACTICE_IMAGES } from '../cropStageImages';

export const SUGARCANE_ADVISORY: CropAdvisoryRecord = {
  cropId: 'sugarcane',
  cropName: {
    en: 'Sugarcane',
    te: 'చెరకు',
    kn: 'ಕಬ್ಬು',
    hi: 'गन्ना',
  },
  category: {
    en: 'Commercial Sugar Crop',
    te: 'వాణిజ్య చక్కెర పంట',
    kn: 'ವಾಣಿಜ್ಯ ಸಕ್ಕರೆ ಬೆಳೆ',
    hi: 'व्यावसायिक शर्करा फसल',
  },
  icon: '🎋',
  cropImage: CROP_STAGE_IMAGES.sugarcane.cropImage,
  suitableSeason: {
    en: 'Eksali (Jan–Feb or Oct–Nov planting), Adsali (July–August)',
    te: 'ఏకసాలి (జనవరి-ఫిబ్రవరి లేదా అక్టోబర్-నవంబర్), అడ్సాలి (జూలై-ఆగస్టు)',
    kn: 'ಏಕಸಾಲಿ (ಜನವರಿ-ಫೆಬ್ರವರಿ), ಅಡ್ಸಾಲಿ (ಜುಲೈ-ಆಗಸ್ಟ್)',
    hi: 'एकसाली (जनवरी-फरवरी या अक्टूबर-नवंबर), अडसाली (जुलाई-अगस्त)',
  },
  soilRequirements: {
    en: 'Deep well-drained loams, clay loams, or black soils with at least 1 meter soil depth. pH 6.5 to 8.0. Cannot tolerate water stagnation during early stages.',
    te: 'కనీసం 1 మీటరు లోతు గల ఒండ్రు నేలలు, నల్లరేగడి నేలలు లేదా గరప నేలలు శ్రేష్టం. pH 6.5 నుండి 8.0 ఉండాలి.',
    kn: 'ಆಳವಾದ ಫಲವತ್ತಾದ ಕಪ್ಪು ಅಥವಾ ಗೋಡು ಮಣ್ಣು. pH 6.5 ರಿಂದ 8.0 ಇರಬೇಕು.',
    hi: 'कम से कम 1 मीटर गहराई वाली उपजाऊ दोमट या भारी काली मिट्टी। पीएच मान 6.5 से 8.0 उपयुक्त है।',
  },
  seedAndSowing: {
    en: 'Seed setts: 30,000–35,000 two-budded setts/acre (Co 86032, Co 0238, CoV 92102). Dip setts in Carbendazim (1g/L) for 15 mins. Plant in deep furrows spaced 90–120 cm apart.',
    te: 'విత్తన ముక్కలు: ఎకరానికి 30,000-35,000 రెండు కళ్ల ముక్కలు (కో 86032, కో 0238, కోవి 92102). కార్బెండజిమ్ (లీటరుకు 1 గ్రాము) ద్రావణంలో 15 నిమిషాలు నానబెట్టాలి. 90-120 సెం.మీ బోదెల్లో నాటాలి.',
    kn: 'ಬಿತ್ತನೆ ತುಂಡುಗಳು: ಎಕರೆಗೆ 30,000-35,000 ಎರಡು ಕಣ್ಣಿನ ತುಂಡುಗಳು. ಕಾರ್ಬೆಂಡಾಜಿಮ್‌ನಲ್ಲಿ ಉಪಚರಿಸಿ 90-120 ಸೆಂ.ಮೀ ಅಂತರದ ಸಾಲುಗಳಲ್ಲಿ ನಾಟಿ ಮಾಡಿ.',
    hi: 'बीज टुकड़े (सेट्स): 30,000-35,000 दो आंख वाले टुकड़े/एकड़ (को 86032, को 0238)। कार्बेन्डाजिम में शोधित करके 90-120 सेमी चौड़ी नालियों में बोएं।',
  },
  cropDuration: {
    en: '300 to 365 days (Eksali) / 450 to 500 days (Adsali).',
    te: '300 నుండి 365 రోజులు (ఏకసాలి) / 450 నుండి 500 రోజులు (అడ్సాలి).',
    kn: '300 ರಿಂದ 365 ದಿನಗಳು (ಏಕಸಾಲಿ) / 450 ರಿಂದ 500 ದಿನಗಳು (ಅಡ್ಸಾಲಿ).',
    hi: '300 से 365 दिन (एकसाली) / 450 से 500 दिन (अडसाली)।',
  },
  stages: [
    {
      id: 'sc_stage_1',
      order: 1,
      name: {
        en: '1. Sett Planting & Germination Stage',
        te: '1. పిలకల నాట్లు & మొలకెత్తే దశ',
        kn: '1. ಬಿತ್ತನೆ ತುಂಡು ನಾಟಿ ಮತ್ತು ಮೊಳಕೆಯೊಡೆಯುವ ಹಂತ',
        hi: '1. गन्ना टुकड़ों की बुवाई एवं जमाव (अंकुरण) अवस्था',
      },
      timing: {
        en: '0 to 45 Days After Planting (DAP)',
        te: 'నాటిన 0 నుండి 45 రోజులు',
        kn: 'ನಾಟಿ ಮಾಡಿದ 0 ರಿಂದ 45 ದಿನಗಳು',
        hi: 'बुवाई के 0 से 45 दिन',
      },
      stageImage: CROP_STAGE_IMAGES.sugarcane.stages.sc_stage_1,
      whatToDo: {
        en: '1. Select fresh 8–10 month old healthy seed canes; use upper one-third portion rich in reducing sugars.\n2. Dip setts in Carbendazim 50% WP (1g/L) + Chlorpyrifos 20% EC (2ml/L) for 15 mins to prevent Red Rot and Termites.\n3. Apply basal DAP (50kg) + MOP (30kg) in furrows before placing setts.\n4. Place setts end-to-end with buds facing sideways; cover with 5 cm loose soil.',
        te: '1. 8-10 నెలల వయసు గల ఆరోగ్యకరమైన చెరకు పైభాగాన్ని (పై 1/3 వంతు) విత్తనంగా ఎన్నుకోవాలి.\n2. ఎర్రకుళ్ళు తెగులు మరియు చెదలు రాకుండా కార్బెండజిమ్ (1 గ్రా/లీ) మరియు క్లోరిపైరిఫాస్ (2 మి.లీ/లీ) ద్రావణంలో ముక్కలను 15 నిమిషాలు నానబెట్టాలి.\n3. బోదెలలో ఎకరానికి 50 కిలోల DAP, 30 కిలోల MOP వేయాలి.\n4. కళ్లు పక్కలకు ఉండేలా ముక్కలను వరుసగా పేర్చి 5 సెం.మీ మట్టిని కప్పి తేలికపాటి తడి ఇవ్వాలి.',
        kn: '1. 8-10 ತಿಂಗಳ ಆರೋಗ್ಯವಂತ ಕಬ್ಬಿನ ಮೇಲ್ಭಾಗದ ತುಂಡುಗಳನ್ನು ಬಿತ್ತನೆಗೆ ಆರಿಸಿ.\n2. ಕೆಂಪು ಕೊಳೆ ರೋಗ ಮತ್ತು ಗೆದ್ದಲು ತಡೆಯಲು ಕಾರ್ಬೆಂಡಾಜಿಮ್‌ನಲ್ಲಿ ಉಪಚರಿಸಿ.\n3. ಸಾಲುಗಳಲ್ಲಿ ಡಿಎಪಿ ಮತ್ತು ಎಂಒಪಿ ಗೊಬ್ಬರ ಹಾಕಿ.\n4. ಕಣ್ಣುಗಳು ಪಕ್ಕಕ್ಕೆ ಇರುವಂತೆ ತುಂಡುಗಳನ್ನು ಇಟ್ಟು ಮಣ್ಣು ಮುಚ್ಚಿ.',
        hi: '1. 8-10 माह पुराने स्वस्थ गन्ने के ऊपरी 1/3 भाग के टुकड़े बीज के लिए चुनें।\n2. लाल सड़न (रेड रॉट) और दीमक से बचाव के लिए कार्बेन्डाजिम (1 ग्राम) और क्लोरपायरीफॉस (2 मिली/लीटर) के घोल में 15 मिनट डुबोएं।\n3. नालियों में डीएपी 50 किग्रा और एमओपी 30 किग्रा प्रति एकड़ डालें।\n4. आंखें अगल-बगल रखकर टुकड़े बिछाएं और 5 सेमी मिट्टी से ढकें।',
      },
      irrigationGuide: {
        en: 'Irrigate immediately after planting, then light life irrigation on day 5–7.',
        te: 'నాటిన వెంటనే నీరు పెట్టాలి, 5-7వ రోజున తేలికపాటి జీవపు తడి ఇవ్వాలి.',
        kn: 'ನಾಟಿ ಮಾಡಿದ ತಕ್ಷಣ ನೀರು ನೀಡಿ, 5-7 ನೇ ದಿನ ಲಘು ನೀರು ಕೊಡಿ.',
        hi: 'बुवाई के तुरंत बाद और 5-7 दिन बाद हल्की सिंचाई करें।',
      },
      weatherPrecaution: {
        en: 'Prevent crust formation on heavy black soils; give light sprinkler or surface wetting.',
        te: 'నేల పెచ్చు కట్టకుండా తేలికపాటి తడులు ఇవ్వాలి, లేదంటే మొలక బయటకు రాలేదు.',
        kn: 'ಮಣ್ಣು ಗಟ್ಟಿಯಾಗದಂತೆ ಲಘು ನೀರಾವರಿ ನೀಡಿ.',
        hi: 'भारी मिट्टी में पपड़ी न जमने दें, हल्की सिंचाई करें ताकि अंकुर आसानी से बाहर आएं।',
      },
      fertilizers: [
        {
          productName: 'Di-Ammonium Phosphate (DAP 18:46:0) + MOP',
          productImage: INPUT_PRODUCT_IMAGES.dap,
          category: 'fertilizer',
          whenToApply: {
            en: 'Basal placement in furrows before sett laying.',
            te: 'ముక్కలు నాటడానికి ముందే బోదెలలో వేయాలి.',
            kn: 'ನಾಟಿಗೆ ಮುನ್ನ ಸಾಲಿನಲ್ಲಿ ಹಾಕಿ.',
            hi: 'टुकड़े रखने से पहले नालियों में डालें।',
          },
          purpose: {
            en: 'Phosphorus establishes deep extensive sett-root system.',
            te: 'పిలకలకు లోతైన వేర్ల వ్యవస్థ త్వరగా ఏర్పడటానికి తోడ్పడుతుంది.',
            kn: 'ಬೇರುಗಳ ಶೀಘ್ರ ಬೆಳವಣಿಗೆಗೆ ಸಹಕಾರಿ.',
            hi: 'जड़ों के तेजी से विकास के लिए फास्फोरस आवश्यक है।',
          },
          applicationMethod: {
            en: 'Band placement in furrow bottom.',
            te: 'బోదె అడుగున వేయాలి.',
            kn: 'ಸಾಲಿನ ತಳದಲ್ಲಿ ಹಾಕಿ.',
            hi: 'नाली की तली में डालें।',
          },
          dosage: '50 kg DAP + 30 kg MOP per acre',
          precautions: {
            en: 'Mix well with furrow bottom soil before sett contact.',
            te: 'బోదెలోని మట్టితో కలిపిన తర్వాతే విత్తన ముక్కలను పేర్చాలి.',
            kn: 'ಮಣ್ಣಿನೊಂದಿಗೆ ಬೆರೆಸಿ ತುಂಡುಗಳನ್ನು ಇಡಿ.',
            hi: 'मिट्टी में मिलाने के बाद ही टुकड़े रखें।',
          },
        },
      ],
      pestsAndDiseases: [],
    },
    {
      id: 'sc_stage_2',
      order: 2,
      name: {
        en: '2. Tillering & Early Shoot Borer Stage',
        te: '2. పిలకలు తొడిగే & పీక పురుగు దశ',
        kn: '2. ಕಬ್ಬಿನ ಕವಲೊಡೆಯುವ ಮತ್ತು ಸುಳಿ ಕೊರೆಯುವ ಹುಳು ಹಂತ',
        hi: '2. कल्ले फूटने (टिलरिंग) एवं अर्ली शूट बोरर अवस्था',
      },
      timing: {
        en: '45 to 120 DAP',
        te: 'నాటిన 45 నుండి 120 రోజులు',
        kn: 'ನಾಟಿ ಮಾಡಿದ 45 ರಿಂದ 120 ದಿನಗಳು',
        hi: 'बुवाई के 45 से 120 दिन',
      },
      stageImage: CROP_STAGE_IMAGES.sugarcane.stages.sc_stage_2,
      whatToDo: {
        en: '1. Top-dress 1st split Urea (45kg/acre) at 45 DAP.\n2. Scout for Early Shoot Borer (ESB) dead hearts smelling foul at 45–90 DAP.\n3. Apply trash mulching (3 tons dry cane trash/acre) to conserve moisture and suppress shoot borer.\n4. Partial earthing-up at 60 DAP to encourage strong mother tillers.',
        te: '1. నాటిన 45 రోజులకు మొదటి విడత యూరియా (45 కిలోలు) వేయాలి.\n2. పీక పురుగు (ఎర్లీ షూట్ బోరర్) ఆశించి మొవ్వు ఎండి దుర్వాసన వస్తుందేమో 45-90 రోజుల మధ్య గమనించాలి.\n3. ఎండ వేడిమికి తేమ ఆరిపోకుండా, పీక పురుగు రాకుండా ఎకరానికి 3 టన్నుల ఎండిన చెరకు ఆకును చెత్త మల్చింగ్‌గా వేయాలి.\n4. 60వ రోజున మొదటి దఫా మట్టిని ఎగదోయాలి.',
        kn: '1. 45 ದಿನಗಳಲ್ಲಿ ಮೊದಲ ಕಂತಿನ ಯೂರಿಯಾ (45 ಕೆಜಿ) ಹಾಕಿ.\n2. ಸುಳಿ ಕೊರೆಯುವ ಹುಳುವಿನ ಬಾಧೆ (ಡೆಡ್ ಹಾರ್ಟ್) ಗಮನಿಸಿ.\n3. ಕಬ್ಬಿನ ಒಣ ರವದಿಯನ್ನು ಹೊದಿಸಿ (ಮಲ್ಚಿಂಗ್) ತೇವಾಂಶ ಕಾಪಾಡಿ.\n4. 60 ದಿನಗಳಲ್ಲಿ ಗಿಡದ ಬುಡಕ್ಕೆ ಸ್ವಲ್ಪ ಮಣ್ಣು ಏರಿಸಿ.',
        hi: '1. बुवाई के 45 दिन बाद पहली यूरिया (45 किग्रा/एकड़) डालें।\n2. अर्ली शूट बोरर (कंसुआ कीट) से मुरझाई हुई बदबूदार सूखी पत्तियों (डेड हार्ट) की जांच करें।\n3. खेत में सूखी पत्तियों की पलवार (मल्चिंग) बिछाएं ताकि नमी बचे और कीट रुके।\n4. 60 दिन बाद हल्की मिट्टी चढ़ाएं।',
      },
      irrigationGuide: {
        en: 'Irrigate every 8–10 days. Moisture stress during tillering sharply reduces millable cane count.',
        te: '8-10 రోజులకు ఒకసారి తడి ఇవ్వాలి. ఈ సమయంలో నీటి కొరత వస్తే పిలకల సంఖ్య గణనీయంగా పడిపోతుంది.',
        kn: '8-10 ದಿನಗಳಿಗೊಮ್ಮೆ ನೀರಾವರಿ ನೀಡಿ.',
        hi: '8-10 दिनों के अंतराल पर सिंचाई करें। पानी की कमी से कल्ले कम बनते हैं।',
      },
      weatherPrecaution: {
        en: 'High summer temperatures (>38°C) trigger severe Early Shoot Borer flare up; keep field moist.',
        te: 'ఎండ తీవ్రత 38 డిగ్రీలు దాటితే పీక పురుగు ఉధృతి పెరుగుతుంది; చేనును తేమగా ఉంచాలి.',
        kn: 'ಹೆಚ್ಚಿನ ಬಿಸಿಲಿದ್ದಾಗ ಸುಳಿ ಕೊರೆಯುವ ಹುಳು ಹೆಚ್ಚುತ್ತದೆ; ತೇವಾಂಶ ಕಾಪಾಡಿ.',
        hi: 'तेज गर्मी में अर्ली शूट बोरर का प्रकोप बढ़ता है, खेत में नमी रखें।',
      },
      fertilizers: [
        {
          productName: 'Neem Coated Urea (1st Split)',
          productImage: INPUT_PRODUCT_IMAGES.urea,
          category: 'fertilizer',
          whenToApply: {
            en: 'Top dress at 45 DAP followed by light earthing up and irrigation.',
            te: 'నాటిన 45 రోజుల వద్ద వేసి మట్టి ఎగదోసి నీరు పెట్టాలి.',
            kn: '45 ದಿನಗಳಲ್ಲಿ ಹಾಕಿ ನೀರು ಹಾಯಿಸಿ.',
            hi: '45 दिन पर डालकर हल्की मिट्टी चढ़ाएं और सिंचाई करें।',
          },
          purpose: {
            en: 'Triggers profuse tillering aiming for 8–10 shoots per clump.',
            te: 'కుదురుకు 8-10 బలమైన పిలకలు వేగంగా రావడానికి సహాయపడుతుంది.',
            kn: 'ಹೆಚ್ಚು ಕಬ್ಬಿನ ಕವಲುಗಳು ಬರಲು ಸಹಕಾರಿ.',
            hi: 'प्रति थान 8-10 मजबूत कल्ले निकालने के लिए नाइट्रोजन देता है।',
          },
          applicationMethod: {
            en: 'Side dress along rows.',
            te: 'బోదెలలో మొక్కల పక్కన వేయాలి.',
            kn: 'ಸಾಲಿನಲ್ಲಿ ಬುಡಕ್ಕೆ ಹಾಕಿ.',
            hi: 'नालियों में पौधों के पास डालें।',
          },
          dosage: '45 kg Neem Coated Urea per acre',
          precautions: {
            en: 'Do not broad-spray; place near root zone.',
            te: 'పైపైనే చల్లకుండా మొదళ్ల దగ్గర వేయాలి.',
            kn: 'ಬುಡದ ಬಳಿ ಹಾಕಿ.',
            hi: 'जड़ों के पास ही डालें।',
          },
        },
      ],
      pestsAndDiseases: [
        {
          name: {
            en: 'Early Shoot Borer (Chilo infuscatellus)',
            te: 'చెరకు పీక పురుగు (ఎర్లీ షూట్ బోరర్)',
            kn: 'ಕಬ್ಬಿನ ಸುಳಿ ಕೊರೆಯುವ ಹುಳು',
            hi: 'गन्ने का अर्ली शूट बोरर (कंसुआ कीट)',
          },
          problemType: 'pest',
          symptomImage: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&auto=format&fit=crop&q=80',
          symptoms: {
            en: 'Dead heart in young shoots (central leaf dries and dies); pulled out easily emitting foul offensive odor; caterpillar entry hole visible near ground level.',
            te: 'నడిమొవ్వు ఎండిపోయి చేత్తో లాగితే కుళ్ళిన దుర్వాసనతో సులువుగా ఊడివస్తుంది; నేల మట్టం వద్ద కాండానికి రంధ్రం కనిపిస్తుంది.',
            kn: 'ಮಧ್ಯದ ಸುಳಿ ಒಣಗಿ ವಾಸನೆಯೊಂದಿಗೆ ಸುಲಭವಾಗಿ ಕಿತ್ತು ಬರುತ್ತದೆ (ಡೆಡ್ ಹಾರ್ಟ್).',
            hi: 'केंद्रीय पत्ती सूख जाती है और खींचने पर सड़ी हुई बदबू के साथ बाहर आ जाती है; जमीन के पास तने में छेद दिखता है।',
          },
          prevention: {
            en: 'Trash mulching with dry cane leaves (3 tons/acre); avoid water stress.',
            te: 'ఎండిన ఆకులతో ఎకరానికి 3 టన్నుల చెత్త మల్చింగ్ వేయాలి.',
            kn: 'ಒಣ ರವದಿ ಹೊದಿಸಿ (ಮಲ್ಚಿಂಗ್).',
            hi: 'सूखी पत्तियों की 3 टन/एकड़ मल्चिंग करें।',
          },
          treatment: {
            en: 'Soil application of Chlorantraniliprole 0.4% GR (Ferterra 7.5kg/acre) or spray Coragen (0.4ml/L) directed to base.',
            te: 'ఎకరానికి 7.5 కిలోల ఫెర్టెర్రా గుళికలను మొదళ్ల వద్ద వేసి నీరు పెట్టాలి లేదా లీటరు నీటికి 0.4 మి.లీ కోరాజెన్ పిచికారీ చేయాలి.',
            kn: 'ಫರ್ಟೆರ್ರಾ (7.5 ಕೆಜಿ/ಎಕರೆ) ಬುಡಕ್ಕೆ ಹಾಕಿ ಅಥವಾ ಕೋರಾಜೆನ್ ಸಿಂಪಡಿಸಿ.',
            hi: 'फर्टेरा (7.5 किग्रा/एकड़) जड़ों में डालकर पानी दें या कोराजन (0.4 मिली/लीटर) का छिड़काव करें।',
          },
          recommendedProduct: 'Chlorantraniliprole 0.4% GR (Ferterra) / Coragen',
          productImage: INPUT_PRODUCT_IMAGES.coragen,
          applicationTiming: {
            en: 'Apply at 30–45 DAP when dead hearts exceed 5%.',
            te: 'మొవ్వులు 5% ఎండిపోయినప్పుడు వెంటనే వాడాలి.',
            kn: 'ಶೇ. 5 ರಷ್ಟು ಸುಳಿ ಒಣಗಿದಾಗ ತಕ್ಷಣ ಬಳಸಿ.',
            hi: '5% डेड हार्ट दिखने पर तुरंत प्रयोग करें।',
          },
        },
      ],
    },
    {
      id: 'sc_stage_3',
      order: 3,
      name: {
        en: '3. Grand Growth & Cane Elongation Stage',
        te: '3. ముమ్మర ఎదుగుదల & కణుపులు సాగే దశ (గ్రాండ్ గ్రోత్)',
        kn: '3. ತೀವ್ರ ಬೆಳವಣಿಗೆ ಮತ್ತು ಗಿಣ್ಣು ಬೆಳೆಯುವ ಹಂತ',
        hi: '3. मुख्य बढ़वार एवं पोरियां (इंटरनोड्स) बनने की अवस्था',
      },
      timing: {
        en: '120 to 250 DAP',
        te: 'నాటిన 120 నుండి 250 రోజులు',
        kn: 'ನಾಟಿ ಮಾಡಿದ 120 ರಿಂದ 250 ದಿನಗಳು',
        hi: 'बुवाई के 120 से 250 दिन',
      },
      stageImage: CROP_STAGE_IMAGES.sugarcane.stages.sc_stage_3,
      whatToDo: {
        en: '1. Final top-dress: Urea (50kg) + MOP (40kg/acre) at 120 DAP.\n2. Perform HEAVY EARTHING-UP at 120–150 DAP to convert furrows into ridges and firmly anchor roots against cyclone lodging.\n3. Trash detrashes lower dead leaves at 150 and 210 DAP for light and aeration.\n4. Prop / trash-tie cane clumps together at 180 DAP to prevent lodging.',
        te: '1. నాటిన 120 రోజులకు ఆఖరి విడతగా ఎకరానికి 50 కిలోల యూరియా, 40 కిలోల MOP వేయాలి.\n2. 120-150 రోజుల వద్ద భారీగా మట్టిని ఎగదోసి (హెవీ ఎర్తింగ్-అప్) బోదెలను కాలువలుగా మార్చాలి, తద్వారా ఈదురు గాలులకు చెరకు పడిపోదు.\n3. 150 మరియు 210 రోజుల వద్ద కింది ఎండుటాకులను వలచి వేయాలి (డీట్రాషింగ్), దీనివల్ల గాలి వెలుతురు సోకి పురుగులు రావు.\n4. 180 రోజుల వద్ద రెండు సాలుల చెరకును ఎదురెదురుగా జతచేసి ఆకులతో గట్టిగా కట్టాలి (ప్రాపింగ్).',
        kn: '1. 120 ದಿನಗಳಲ್ಲಿ ಕೊನೆಯ ಯೂರಿಯಾ ಮತ್ತು ಪೊಟ್ಯಾಶ್ ಹಾಕಿ.\n2. 120-150 ದಿನಗಳಲ್ಲಿ ಬುಡಕ್ಕೆ ಭಾರಿ ಮಣ್ಣು ಏರಿಸಿ (ಅಂತಿಮ ಮಣ್ಣು ಏರಿಸುವಿಕೆ).\n3. ಒಣ ಎಲೆಗಳನ್ನು ಸುಲಿದು ಹಾಕಿ (ಡೀಟ್ರ್ಯಾಶಿಂಗ್).\n4. ಕಬ್ಬು ಗಾಳಿಗೆ ಬೀಳದಂತೆ ಸಾಲುಗಳನ್ನು ಒಟ್ಟಿಗೆ ಕಟ್ಟಿ (ಪ್ರಾಪಿಂಗ್).',
        hi: '1. 120 दिन बाद अंतिम यूरिया (50 किग्रा) और एमओपी (40 किग्रा) डालें।\n2. 120-150 दिन बाद भारी मिट्टी चढ़ाएं ताकि गन्ने की जड़ें मजबूत हों और फसल न गिरे।\n3. 150 और 210 दिन पर सूखी निचली पत्तियां उतारें (डिट्रैशिंग) ताकि धूप-हवा लगे।\n4. 180 दिन पर पौधों को आपस में बांधें (प्रॉपिंग/बंधाई) ताकि वे आंधी में न गिरें।',
      },
      irrigationGuide: {
        en: 'MAXIMUM WATER DEMAND STAGE. Irrigate every 7–10 days. Cane length and tonnage are built during this period.',
        te: 'అత్యధిక నీరు అవసరమయ్యే దశ. ప్రతి 7-10 రోజులకు తడి ఇవ్వాలి. ఈ దశలోనే చెరకు పొడవు, బరువు పెరుగుతాయి.',
        kn: 'ಅತ್ಯಧಿಕ ನೀರಿನ ಅಗತ್ಯವಿರುವ ಹಂತ. 7-10 ದಿನಕ್ಕೊಮ್ಮೆ ನಿಯಮಿತ ನೀರು ಕೊಡಿ.',
        hi: 'सबसे अधिक पानी की मांग वाली अवस्था। हर 7-10 दिन पर सिंचाई करें। इसी समय गन्ने की लंबाई व मोटाई बनती है।',
      },
      weatherPrecaution: {
        en: 'Heavy monsoon rains can lodge unstaked tall canes; complete heavy earthing-up and clump propping before monsoon storms.',
        te: 'వర్షాకాలం ఈదురుగాలులకు చెరకు నేలవాలకుండా ముందే మట్టి ఎగదోసి కట్టేయాలి.',
        kn: 'ಮಳೆಗಾಲದ ಗಾಳಿಗೆ ಕಬ್ಬು ಬೀಳದಂತೆ ಮೊದಲೇ ಭದ್ರವಾಗಿ ಕಟ್ಟಿ.',
        hi: 'मानसून की तेज हवाओं से फसल गिरने से बचाने के लिए समय पर मिट्टी चढ़ाकर बंधाई पूरी करें।',
      },
      fertilizers: [
        {
          productName: 'Muriate of Potash (MOP 0:0:60) + Urea (Final Dose)',
          productImage: INPUT_PRODUCT_IMAGES.mop,
          category: 'fertilizer',
          whenToApply: {
            en: 'Apply at 120 DAP just before final heavy earthing-up.',
            te: 'నాటిన 120 రోజుల వద్ద ఆఖరి భారీ మట్టి ఎగదోసే ముందే వేయాలి.',
            kn: '120 ದಿನಗಳಲ್ಲಿ ಅಂತಿಮ ಮಣ್ಣು ಏರಿಸುವ ಮುನ್ನ ಹಾಕಿ.',
            hi: '120 दिन पर अंतिम भारी मिट्टी चढ़ाने से ठीक पहले डालें।',
          },
          purpose: {
            en: 'Potassium thickens cane stalk diameter, lengthens internodes, and stiffens cane against storm lodging.',
            te: 'గడ లావుగా పెరగడానికి, కణుపులు పొడవు కావడానికి మరియు గాలికి పడిపోకుండా గడ గట్టిపడటానికి పొటాష్ అత్యవసరం.',
            kn: 'ಕಬ್ಬಿನ ಗಿಣ್ಣು ಉದ್ದ ಮತ್ತು ದಪ್ಪಗಾಗಲು ಹಾಗೂ ಕಬ್ಬು ಗಟ್ಟಿಯಾಗಲು ಸಹಕಾರಿ.',
            hi: 'गन्ने की मोटाई व लंबाई बढ़ाने और तने को मजबूत कर फसल को गिरने से बचाने के लिए जरूरी है।',
          },
          applicationMethod: {
            en: 'Place in ridges and cover with deep soil.',
            te: 'బోదెలలో వేసి లోతుగా మట్టి కప్పాలి.',
            kn: 'ಬುಡದಲ್ಲಿ ಹಾಕಿ ಭಾರಿ ಮಣ್ಣು ಮುಚ್ಚಿ.',
            hi: 'नाली में डालकर गहरी मिट्टी से ढक दें।',
          },
          dosage: '50 kg Urea + 40 kg MOP per acre',
          precautions: {
            en: 'STRICT RULE: Stop all chemical Nitrogen (Urea) applications after 120 DAP. Late nitrogen reduces juice recovery % and causes water shoots.',
            te: 'కచ్చితమైన నియమం: నాటిన 120 రోజుల తర్వాత యూరియా అస్సలు వేయకూడదు; ఆలస్యంగా వేస్తే రసంలో చక్కెర శాతం తగ్గిపోయి నీటి పిలకలు వస్తాయి.',
            kn: '120 ದಿನಗಳ ನಂತರ ಯೂರಿಯಾ ಹಾಕಬೇಡಿ; ಸಕ್ಕರೆ ಇಳುವರಿ ಕಡಿಮೆಯಾಗುತ್ತದೆ.',
            hi: 'कड़ा नियम: 120 दिन के बाद यूरिया बिल्कुल न डालें; देर से यूरिया डालने पर शर्करा की मात्रा घट जाती है।',
          },
        },
      ],
      pestsAndDiseases: [],
    },
    {
      id: 'sc_stage_4',
      order: 4,
      name: {
        en: '4. Cane Maturation & Sugar Accumulation Stage',
        te: '4. చెరకు ముదిరే & చక్కెర నిల్వ దశ (పరిపక్వత)',
        kn: '4. ಕಬ್ಬು ಪಕ್ವವಾಗುವ ಮತ್ತು ಸಕ್ಕರೆ ತುಂಬುವ ಹಂತ',
        hi: '4. गन्ना परिपक्वता एवं शर्करा संचय (मैच्योरिटी) अवस्था',
      },
      timing: {
        en: '250 to 330 DAP',
        te: 'నాటిన 250 నుండి 330 రోజులు',
        kn: 'ನಾಟಿ ಮಾಡಿದ 250 ರಿಂದ 330 ದಿನಗಳು',
        hi: 'बुवाई के 250 से 330 दिन',
      },
      stageImage: CROP_STAGE_IMAGES.sugarcane.stages.sc_stage_4,
      whatToDo: {
        en: '1. Lengthen irrigation intervals to 15–20 days to create mild moisture stress which stimulates rapid conversion of glucose into sucrose (table sugar).\n2. Withhold all nitrogenous fertilizers.\n3. Test juice Brix % with hand refractometer (optimal maturity is 18–20% Brix).\n4. Remove late useless water-suckers from base of clumps.',
        te: '1. తడుల మధ్య వ్యవధిని 15-20 రోజులకు పెంచాలి; కొద్దిపాటి నీటి ఒత్తిడి వలన చెరకు గడల్లో గ్లూకోజ్ చక్కెరగా (సుక్రోజ్) వేగంగా మారుతుంది.\n2. ఎలాంటి నత్రజని ఎరువులను వేయరాదు.\n3. హ్యాండ్ రిఫ్రాక్టోమీటర్‌తో చెరకు రసంలో బ్రిక్స్ శాతాన్ని పరీక్షించాలి (18-20% బ్రిక్స్ వస్తే కోతకు సిద్ధం).\n4. కింద మొదళ్ల వద్ద వచ్చే పనికిరాని నీటి పిలకలను తుంచివేయాలి.',
        kn: '1. ನೀರಾವರಿ ಅಂತರವನ್ನು 15-20 ದಿನಗಳಿಗೆ ಹೆಚ್ಚಿಸಿ; ಇದು ಸಕ್ಕರೆ ಅಂಶ ಹೆಚ್ಚಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.\n2. ಯಾವುದೇ ಯೂರಿಯಾ ಹಾಕಬೇಡಿ.\n3. ಬ್ರಿಕ್ಸ್ ಮೀಟರ್‌ನಿಂದ ಸಕ್ಕರೆ ಪ್ರಮಾಣ (18-20%) ಪರೀಕ್ಷಿಸಿ.\n4. ಬುಡದಲ್ಲಿ ಬರುವ ನೀರು ಕವಲುಗಳನ್ನು ತೆಗೆಯಿರಿ.',
        hi: '1. सिंचाई का अंतराल 15-20 दिन करें; हल्की नमी की कमी से सुक्रोज (शर्करा) की मात्रा तेजी से बढ़ती है।\n2. कोई भी नाइट्रोजन खाद न डालें।\n3. हैंड रिफ्रैक्टोमीटर से रस का ब्रिक्स % जांचें (18-20% ब्रिक्स पर कटाई करें)।\n4. बेकार निकले पानी वाले कल्लों को हटा दें।',
      },
      irrigationGuide: {
        en: 'Lengthen irrigation interval to 15–20 days. Mild water deficit triggers high sucrose accumulation.',
        te: '15-20 రోజులకు ఒకసారి మాత్రమే తడి ఇవ్వాలి. తేలికపాటి ఒత్తిడి చక్కెర శాతాన్ని పెంచుతుంది.',
        kn: '15-20 ದಿನಗಳಿಗೊಮ್ಮೆ ನೀರು ನೀಡಿ ಸಕ್ಕರೆ ಅಂಶ ಹೆಚ್ಚಿಸಿ.',
        hi: '15-20 दिन के अंतराल पर सिंचाई करें ताकि गन्ने में शर्करा का प्रतिशत बढ़े।',
      },
      weatherPrecaution: {
        en: 'Bright sunny days with cool nights (10–15°C diurnal difference) maximize juice sucrose content.',
        te: 'పగలు మంచి ఎండ, రాత్రి చల్లదనం ఉంటే రసంలో చక్కెర శాతం అత్యధికంగా ఉంటుంది.',
        kn: 'ಹಗಲು ಬಿಸಿಲು, ರಾತ್ರಿ ಚಳಿಯಿದ್ದಾಗ ಸಕ್ಕರೆ ಅಂಶ ಗರಿಷ್ಠವಾಗಿರುತ್ತದೆ.',
        hi: 'दिन में खिली धूप और रात में ठंड रहने से गन्ने में चीनी का प्रतिशत सबसे अच्छा होता है।',
      },
      fertilizers: [],
      pestsAndDiseases: [],
    },
    {
      id: 'sc_stage_5',
      order: 5,
      name: {
        en: '5. Harvesting & Factory Dispatch Stage',
        te: '5. చెరకు నరికివేత & ఫ్యాక్టరీకి తరలించే దశ',
        kn: '5. ಕಬ್ಬು ಕಟಾವು ಮತ್ತು ಕಾರ್ಖಾನೆಗೆ ರವಾನಿಸುವ ಹಂತ',
        hi: '5. गन्ना कटाई एवं मिल आपूर्ति अवस्था',
      },
      timing: {
        en: '300 to 365 DAP',
        te: 'నాటిన 300 నుండి 365 రోజులు',
        kn: 'ನಾಟಿ ಮಾಡಿದ 300 ರಿಂದ 365 ದಿನಗಳು',
        hi: 'बुवाई के 300 से 365 दिन',
      },
      stageImage: CROP_STAGE_IMAGES.sugarcane.stages.sc_stage_5,
      whatToDo: {
        en: '1. STOP ALL IRRIGATION 15 days before harvest to harden cane and concentrate sucrose.\n2. Cut canes flush with the ground level using sharp cutting knives (basal cut gives maximum sugar and excellent ratoon sprout).\n3. Detrash completely and remove green tops.\n4. Transport freshly cut canes to sugar factory within 24–48 hours to prevent sugar inversion and weight loss.',
        te: '1. కోతకు 15 రోజుల ముందే నీరు కట్టడం పూర్తిగా ఆపేయాలి.\n2. పదునైన కొడవళ్ళతో చెరకును నేల మట్టానికి సమంగా నరకాలి (మొదలు భాగంలోనే ఎక్కువ చక్కెర ఉంటుంది మరియు కార్శి పంటకు మంచి పిలకలు వస్తాయి).\n3. ఆకులను పూర్తిగా వలిచి, పచ్చని అగడాలను తీసేయాలి.\n4. నరికిన 24-48 గంటలలోపే చెరకును ఫ్యాక్టరీకి చేర్చాలి; ఆలస్యమైతే చక్కెర శాతం తగ్గి బరువు తగ్గుతుంది.',
        kn: '1. ಕಟಾವಿಗೆ 15 ದಿನ ಮುನ್ನ ನೀರು ನಿಲ್ಲಿಸಿ.\n2. ನೆಲಮಟ್ಟಕ್ಕೆ ಸಮನಾಗಿ ಹರಿತವಾದ ಕುಡಗೋಲಿನಿಂದ ಕಬ್ಬು ಕಡಿಯಿರಿ.\n3. ಒಣ ಎಲೆಗಳನ್ನು ಸಂಪೂರ್ಣ ತೆಗೆಯಿರಿ.\n4. ಕಡಿದ 24-48 ಗಂಟೆಗಳ ಒಳಗೆ ಕಾರ್ಖಾನೆಗೆ ತಲುಪಿಸಿ.',
        hi: '1. कटाई से 15 दिन पहले सिंचाई बंद कर दें।\n2. तेज धारदार औजार से जमीन की सतह से सटाकर गन्ने की कटाई करें (निचले हिस्से में सबसे ज्यादा चीनी होती है और पेड़ी अच्छी फूटती है)।\n3. सूखी पत्तियां और हरा अगोला साफ करें।\n4. कटाई के 24-48 घंटे के भीतर गन्ने को चीनी मिल में पहुंचाएं ताकि वजन व चीनी न घटे।',
      },
      irrigationGuide: {
        en: 'Zero irrigation 15 days prior to harvest.',
        te: 'కోతకు 15 రోజుల ముందు నీరు ఇవ్వకూడదు.',
        kn: 'ಕಟಾವಿಗೆ 15 ದಿನ ಮುನ್ನ ನೀರು ನಿಲ್ಲಿಸಿ.',
        hi: 'कटाई से 15 दिन पहले पानी पूरी तरह बंद कर दें।',
      },
      weatherPrecaution: {
        en: 'Avoid cutting during heavy rain; muddy canes reduce juice extraction at factory.',
        te: 'వర్షంలో నరకరాదు, బురద అంటిన చెరకు ఫ్యాక్టరీలో నాణ్యత కోల్పోతుంది.',
        kn: 'ಮಳೆಯಲ್ಲಿ ಕಟಾವು ಮಾಡಬೇಡಿ.',
        hi: 'बारिश में कटाई न करें, कीचड़ से गन्ने की गुणवत्ता खराब होती है।',
      },
      fertilizers: [],
      pestsAndDiseases: [],
    },
  ],
  harvestingGuide: {
    en: 'Harvest at 18–20% Brix using sharp cane-knives flush at ground level. Withhold irrigation 15 days prior. Crush within 24–48 hours to avoid post-harvest sugar inversion.',
    te: '18-20% బ్రిక్స్ వచ్చినప్పుడు నేల మట్టానికి నరకాలి. 15 రోజుల ముందే నీరు ఆపాలి. నరికిన 24-48 గంటల్లో ఫ్యాక్టరీకి పంపాలి.',
    kn: '18-20% ಬ್ರಿಕ್ಸ್ ಬಂದಾಗ ನೆಲಮಟ್ಟಕ್ಕೆ ಕಡಿದು 24-48 ಗಂಟೆಗಳಲ್ಲಿ ಕಾರ್ಖಾನೆಗೆ ರವಾನಿಸಿ.',
    hi: '18-20% ब्रिक्स आने पर जमीन से सटाकर काटें। 15 दिन पहले पानी बंद करें और 24-48 घंटे में मिल पहुंचाएं।',
  },
  precautions: {
    en: '1. Stop all Nitrogen (Urea) strictly after 120 DAP.\n2. Complete heavy earthing-up and clump propping before monsoons to stop lodging.\n3. Always cut canes flush with ground level for higher sugar recovery and better ratoon.',
    te: '1. నాటిన 120 రోజుల తర్వాత యూరియా అస్సలు వేయకూడదు.\n2. చెరకు పడిపోకుండా ముందే భారీగా మట్టి ఎగదోసి కట్టాలి.\n3. నేల మట్టానికి సమాంతరంగా నరకాలి.',
    kn: '1. 120 ದಿನಗಳ ನಂತರ ಯೂರಿಯಾ ಹಾಕಬೇಡಿ.\n2. ಮಳೆಗಾಲದ ಮುನ್ನ ಮಣ್ಣು ಏರಿಸಿ ಕಟ್ಟಿ.\n3. ನೆಲಮಟ್ಟಕ್ಕೆ ಕಡಿಯಿರಿ.',
    hi: '1. 120 दिन के बाद यूरिया का प्रयोग बिल्कुल न करें।\n2. मानसून से पहले मिट्टी चढ़ाकर बंधाई पूरी करें।\n3. जमीन की सतह से सटाकर ही कटाई करें।',
  },
  // 1. Soil & Climate
  soilAndClimate: {
    title: {
      en: 'Deep Fertile Loams & Tropical Warm Humid Weather',
      te: 'లోతైన గరప, ఒండ్రు నేలలు & ఉష్ణమండల అనుకూల వాతావరణం',
      kn: 'ಆಳವಾದ ಫಲವತ್ತಾದ ಗೋಡು ಮಣ್ಣು ಮತ್ತು ಉಷ್ಣ ಹವಾಮಾನ',
      hi: 'गहरी उपजाऊ दोमट मिट्टी एवं उष्णकटिबंधीय आर्द्र जलवायु',
    },
    image: CROP_PRACTICE_IMAGES.sugarcane.soil,
    imageCaption: {
      en: 'Deep crumbly alluvial or medium black clay loam with good subsurface drainage and pH 6.5 to 8.0',
      te: 'మురుగునీరు సాఫీగా పోయే లోతైన నల్లరేగడి లేదా ఒండ్రు నేలలు (pH 6.5 నుండి 8.0)',
      kn: 'ಉತ್ತಮ ನೀರು ಬಸಿದು ಹೋಗುವ ಆಳವಾದ ಕಪ್ಪು ಅಥವಾ ಗೋಡು ಮಣ್ಣು',
      hi: 'अच्छे जल निकास वाली गहरी जलोढ़ या मध्यम काली दोमट मिट्टी (पीएच 6.5 से 8.0)',
    },
    description: {
      en: 'Sugarcane requires a tropical climate with 30–35°C during active tillering/elongation and cool, dry, sunny weather (15–25°C) during the ripening phase to stimulate sucrose crystallization. It flourishes in deep loams, clay loams, or delta alluvials at least 1 meter deep without an impermeable subsoil hardpan.',
      te: 'చెరకు పెరుగుదల దశలో 30-35°C ఉష్ణోగ్రత, పక్వానికి వచ్చే సమయంలో చల్లని పొడి వాతావరణం (15-25°C) అవసరం. ఇది చెరకులో చక్కెర శాతాన్ని పెంచుతుంది. కనీసం 1 మీటరు లోతు గల ఎర్ర లేదా నల్లరేగడి నేలలు అనుకూలం.',
      kn: 'ಬೆಳವಣಿಗೆಗೆ 30-35°C ಮತ್ತು ಸಕ್ಕರೆ ತುಂಬಲು 15-25°C ತಂಪು ಹವೆ ಸೂಕ್ತ. 1 ಮೀಟರ್ ಆಳದ ಮಣ್ಣು ಬೇಕು.',
      hi: 'गन्ने की बढ़वार के लिए 30-35°C और पकते समय सुक्रोज बनने हेतु 15-25°C का ठंडा, शुष्क मौसम चाहिए। कम से कम 1 मीटर गहरी दोमट मिट्टी सर्वोत्तम है।',
    },
    details: [
      {
        en: 'Ripening Cold Requirement: Bright sunny days with crisp cool nights during the last 60 days maximize cane juice sucrose recovery.',
        te: 'చక్కెర శాతం: చివరి రెండు నెలల్లో పగలు మంచి ఎండ, రాత్రి వేళల్లో చలి ఉంటే చెరకులో పంచదార శాతం గరిష్టంగా పెరుగుతుంది.',
        kn: 'ಕೊನೆಯ 2 ತಿಂಗಳು ರಾತ್ರಿ ಚಳಿ ಇದ್ದರೆ ಸಕ್ಕರೆ ಅಂಶ ಹೆಚ್ಚುತ್ತದೆ.',
        hi: 'अंतिम 60 दिनों में दिन में धूप और रात में ठंड रहने से गन्ने में चीनी की मात्रा (रिकवरी) सबसे अधिक मिलती है।',
      },
    ],
  },
  // 2. Land Preparation
  landPreparation: {
    title: {
      en: 'Deep Subsoiling & Deep Furrow Trenching (120–150 cm Spacing)',
      te: 'సబ్‌సాయిలర్‌తో లోతు దుక్కి & 120-150 సెం.మీ వెడల్పాటి కందకాల తయారీ',
      kn: 'ಆಳವಾದ ಉಳುಮೆ ಮತ್ತು 4-5 ಅಡಿ ಅಂತರದ ಕಂದಕಗಳ ನಿರ್ಮಾಣ',
      hi: 'गहरी जुताई, सबसॉइलिंग एवं 4-5 फीट (120-150 सेमी) चौड़ी खाई (Trench) विधि',
    },
    image: CROP_PRACTICE_IMAGES.sugarcane.landPrep,
    imageCaption: {
      en: 'Tractor trench-opener forming 30 cm deep U-shaped furrows spaced 4 to 5 feet apart',
      te: 'ట్రాక్టర్ ట్రెంచ్ ఓపెనర్‌తో 30 సెం.మీ లోతు, 4 నుండి 5 అడుగుల దూరంలో తయారు చేసిన కందకాలు',
      kn: '4 ರಿಂದ 5 ಅಡಿ ಅಂತರದಲ್ಲಿ 30 ಸೆಂ.ಮೀ ಆಳದ ಕಂದಕಗಳನ್ನು ನಿರ್ಮಿಸುವುದು',
      hi: 'ट्रैक्टर ट्रेंच-ओपनर द्वारा 4 से 5 फीट की दूरी पर बनाई गई 30 सेमी गहरी चौड़ी खाइयां',
    },
    description: {
      en: 'Plough field with subsoiler to break hardpan down to 45 cm depth, followed by two disc ploughings and rotavator pulverization. Incorporate 12–15 tonnes well-rotted FYM / Pressmud + 2 kg Trichoderma per acre. Form deep trenches/furrows 30 cm deep spaced 120 cm (4 feet) to 150 cm (5 feet) apart for wider-row mechanized planting.',
      te: 'భూమిలో గట్టి పొర విరిగేలా సబ్‌సాయిలర్‌తో లోతుగా దున్నాలి. ఎకరానికి 12-15 టన్నుల పశువుల ఎరువు లేదా ప్రెస్ మడ్ (ఫ్యాక్టరీ మడ్డి) + 2 కిలోల ట్రైకోడెర్మా వేయాలి. చెరకు పడిపోకుండా ఉండటానికి 4 నుండి 5 అడుగుల (120-150 సెం.మీ) వెడల్పులో 30 సెం.మీ లోతైన కందకాలు తీయాలి.',
      kn: 'ಆಳವಾಗಿ ಉಳುಮೆ ಮಾಡಿ 15 ಟನ್ ತಿಪ್ಪೆ ಗೊಬ್ಬರ ಅಥವಾ ಪ್ರೆಸ್‌ಮಡ್ ಹಾಕಿ 4-5 ಅಡಿ ಅಂತರದ ಕಂದಕಗಳನ್ನು ಮಾಡಿ.',
      hi: 'सबसॉइलर से 45 सेमी गहरी जुताई कर 12-15 टन गोबर खाद या प्रेसमड मिलाएं। 4 से 5 फीट की दूरी पर 30 सेमी गहरी खाइयां बनाएं।',
    },
    details: [
      {
        en: 'Trench Planting Benefit: Planting setts in bottom of trenches allows progressive earthing-up over 120 days, anchoring canes against lodging.',
        te: 'కందకాల పద్ధతి లాభం: కందకం అడుగున ముచ్చెలు నాటడం వల్ల తర్వాత మట్టి ఎగదోసినప్పుడు వేర్లు బలంగా నాటుకుని చేను పడిపోదు.',
        kn: 'ಕಂದಕದಲ್ಲಿ ಬಿತ್ತುವುದರಿಂದ ಕಬ್ಬು ಗಾಳಿಗೆ ಬೀಳುವುದಿಲ್ಲ.',
        hi: 'खाई के तल में बुवाई करने से बाद में मिट्टी चढ़ाने पर पौधे आंधी में गिरते नहीं हैं।',
      },
    ],
  },
  // 3. Seed & Sowing Practice
  seedAndSowingPractice: {
    seed: {
      title: {
        en: 'Healthy 2-Bud Setts from Top 1/3rd of Disease-Free Cane Nursery',
        te: 'తల్లి తోట పై భాగం నుండి సేకరించిన ఆరోగ్యకరమైన 2 కళ్ళ ముచ్చెలు',
        kn: 'ರೋಗಮುಕ್ತ ಕಬ್ಬಿನ ಮೇಲ್ಭಾಗದ 2 ಗಣ್ಣಿನ ತುಂಡುಗಳು',
        hi: 'रोगमुक्त गन्ने के ऊपरी एक-तिहाई भाग से लिए गए स्वस्थ 2-आंख वाले टुकड़े (Setts)',
      },
      image: CROP_PRACTICE_IMAGES.sugarcane.seed,
      imageCaption: {
        en: 'Freshly cut 2-bud sugarcane setts with swollen, healthy viable eyes and green internodes',
        te: 'ఆరోగ్యకరమైన ఉబ్బిన కళ్ళు కలిగిన 2 కళ్ళ చెరకు ముచ్చెలు',
        kn: 'ದೃಢವಾದ ಮೊಗ್ಗುಗಳಿರುವ 2 ಗಣ್ಣಿನ ಕಬ್ಬಿನ ತುಂಡುಗಳು',
        hi: 'उभरी हुई स्वस्थ आंखों वाले 2 आंख के ताजे कटे गन्ने के टुकड़े',
      },
      description: {
        en: 'Take seed cane only from 8–9 month old healthy seed nurseries (free from Red Rot, Smut, and Grassy Shoot). Cut the top one-third to one-half portion of the cane where moisture, nitrogen, and glucose are highest, giving >90% bud germination. Use 2-bud setts (approx 15,000 to 18,000 setts per acre).',
        te: 'ఎర్ర కుళ్ళు తెగులు లేని 8-9 నెలల తోట నుండి చెరకు పై మూడో వంతు భాగాన్ని విత్తనంగా ఎంచుకోవాలి. పై భాగంలో గ్లూకోజ్, తేమ ఎక్కువగా ఉండటం వల్ల 90% పైగా మొలక శాతం ఉంటుంది. ఎకరానికి 15,000 నుండి 18,000 రెండు కళ్ళ ముచ్చెలు సరిపోతాయి.',
        kn: '8-9 ತಿಂಗಳ ಆರೋಗ್ಯಕರ ಕಬ್ಬಿನ ಮೇಲ್ಭಾಗದ 2 ಗಣ್ಣಿನ ತುಂಡುಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಿ.',
        hi: '8-9 महीने पुराने रोगमुक्त नर्सरी गन्ने के ऊपरी हिस्से से 2 आंख वाले टुकड़े काटें। इसमें ग्लूकोज अधिक होने से 90% से अधिक जमाव होता है। प्रति एकड़ 15,000-18,000 टुकड़े चाहिए।',
      },
      details: [
        {
          en: 'Top Sett Superiority: Top cane buds sprout 4–6 days faster than sluggish bottom mature buds.',
          te: 'పై భాగం ప్రాముఖ్యత: చెరకు పై భాగపు కళ్ళు అడుగు భాగం కంటే 4 నుండి 6 రోజులు ముందుగా మొలకెత్తుతాయి.',
          kn: 'ಮೇಲ್ಭಾಗದ ಮೊಗ್ಗುಗಳು ಬೇಗನೆ ಮೊಳಕೆಯೊಡೆಯುತ್ತವೆ.',
          hi: 'गन्ने के ऊपरी भाग की आंखें नीचे की तुलना में 4 से 6 दिन जल्दी अंकुरित होती हैं।',
        },
      ],
    },
    treatment: {
      title: {
        en: 'Hot Water / Carbendazim + Imidacloprid Slurry Sett Treatment',
        te: 'కార్బండజిమ్ + ఇమిడాక్లోప్రిడ్ ద్రావణంలో ముచ్చెల శుద్ధి',
        kn: 'ಶಿಲೀಂಧ್ರನಾಶಕ ಮತ್ತು ಕೀಟನಾಶಕ ದ್ರಾವಣದಲ್ಲಿ ಕಬ್ಬಿನ ತುಂಡುಗಳ ಉಪಚಾರ',
        hi: 'कार्बेंडाजिम एवं इमिडाक्लोप्रिड घोल में गन्ने के टुकड़ों का उपचार',
      },
      image: CROP_PRACTICE_IMAGES.sugarcane.seedTreatment,
      imageCaption: {
        en: 'Dipping perforated crates of sugarcane setts into fungicide-insecticide solution for 15 minutes',
        te: 'చెరకు ముచ్చెలను బుట్టలతో సహా శిలీంధ్రనాశక ద్రావణంలో 15 నిమిషాలు ముంచి తీయడం',
        kn: 'ದ್ರಾವಣ ತುಂಬಿದ ತೊಟ್ಟಿಯಲ್ಲಿ ಕಬ್ಬಿನ ತುಂಡುಗಳನ್ನು 15 ನಿಮಿಷ ಅದ್ದುವುದು',
        hi: 'फफूंदनाशी एवं कीटनाशी घोल से भरे हौज में 15 मिनट तक गन्ने के टुकड़ों को डुबोना',
      },
      description: {
        en: 'Dip sugarcane setts for 15 minutes in a cement tank containing Carbendazim 50% WP (1 g/L) + Imidacloprid 17.8% SL (0.5 ml/L) + 1 kg Urea dissolved in 100 liters of water. This eliminates Pineapple disease, Smut spores, Termites, and early Early Shoot Borer infestation while speeding bud activation.',
        te: '100 లీటర్ల నీటిలో 100 గ్రాముల కార్బండజిమ్ + 50 మి.లీ ఇమిడాక్లోప్రిడ్ + 1 కిలో యూరియా కలిపి, అందులో ముచ్చెలను 15 నిమిషాలు ముంచి నాటాలి. దీనివల్ల ఎర్ర కుళ్ళు, కాటుక తెగుళ్ళు మరియు చెదపురుగులు రాకుండా 100% మొలక వస్తుంది.',
        kn: 'ಕಾರ್ಬೆಂಡಾಜಿಮ್ ಮತ್ತು ಇಮಿಡಾಕ್ಲೋಪ್ರಿಡ್ ದ್ರಾವಣದಲ್ಲಿ 15 ನಿಮಿಷ ಅದ್ದಿ ಬಿತ್ತನೆ ಮಾಡಿ.',
        hi: '100 लीटर पानी में 100 ग्राम कार्बेंडाजिम + 50 मिली इमिडाक्लोप्रिड घोलकर टुकड़ों को 15 मिनट डुबोएं। इससे लाल सड़न, कंडुआ और दीमक से पूरी सुरक्षा मिलती है।',
      },
      details: [
        {
          en: 'Red Rot Exclusion: Eliminates externally borne fungal spores from contaminating the new field.',
          te: 'తెగుళ్ళ నివారణ: విత్తనం ద్వారా వ్యాపించే ఎర్ర కుళ్ళు తెగులును మొదటి దశలోనే అడ్డుకుంటుంది.',
          kn: 'ಕೆಂಪು ಕೊಳೆ ರೋಗ ಹರಡುವುದನ್ನು ತಡೆಯುತ್ತದೆ.',
          hi: 'बीज जनित लाल सड़न (Red Rot) के बीजाणुओं को नष्ट करता है।',
        },
      ],
    },
    sowing: {
      title: {
        en: 'End-to-End Trench Placement (Eyes Facing Sides)',
        te: 'కళ్ళను పక్కకు ఉంచి కందకంలో అంచుకు అంచు తాకేలా పేర్చడం (ఎండ్‌-టు-ఎండ్)',
        kn: 'ಕಣ್ಣುಗಳು ಅಕ್ಕಪಕ್ಕಕ್ಕೆ ಇರುವಂತೆ ಕಂದಕದಲ್ಲಿ ಸಾಲಾಗಿ ಜೋಡಿಸುವುದು',
        hi: 'खाई में आंखें अगल-बगल रखकर सिरे से सिरा सटाकर बिछाना (End-to-End Method)',
      },
      image: CROP_PRACTICE_IMAGES.sugarcane.sowing,
      imageCaption: {
        en: 'Laying 2-bud setts end-to-end along furrow bottom with lateral buds pointing outward horizontally',
        te: 'కందకం అడుగున కళ్ళు పక్కలకు ఉండేలా వరుసగా పేర్చి 5 సెం.మీ మట్టిని కప్పి నీరు పెట్టడం',
        kn: 'ಕಂದಕದ ತಳದಲ್ಲಿ ತುಂಡುಗಳನ್ನು ಸಾಲಾಗಿಟ್ಟು ಮಣ್ಣು ಮುಚ್ಚುವುದು',
        hi: 'खाई के तल में आंखें अगल-बगल रखकर टुकड़े बिछाना और 5 सेमी मिट्टी से ढकना',
      },
      description: {
        en: 'Place setts flat in the furrow bottom in end-to-end contact (approx 36 setts per 10 meters of furrow length). CRUCIAL: Ensure the lateral buds face horizontally outward (at 3 and 9 o’clock positions), NOT facing straight up or down into the soil. Cover setts with 5 cm loose soil and irrigate immediately.',
        te: 'కందకం అడుగున ముచ్చెల కళ్ళు పక్కలకు ఉండేలా (పైకి లేదా కిందికి కాకుండా) వరుసగా పేర్చాలి. 5 సెం.మీ మట్టిని పలచగా కప్పి వెంటనే నీరు పారించాలి. ఎక్కువ లోతుగా మట్టి వేస్తే మొలక రావడం ఆలస్యమవుతుంది.',
        kn: 'ಮೊಗ್ಗುಗಳು ಪಕ್ಕಕ್ಕೆ ಮುಖ ಮಾಡುವಂತೆ ಇಟ್ಟು 5 ಸೆಂ.ಮೀ ಮಣ್ಣು ಮುಚ್ಚಿ ನೀರು ಹಾಯಿಸಿ.',
        hi: 'खाई में टुकड़े इस तरह रखें कि आंखें बगल की ओर (3 और 9 बजे की दिशा में) रहें। ऊपर केवल 5 सेमी हल्की मिट्टी डालें और तुरंत पानी लगाएं।',
      },
      details: [
        {
          en: 'Bud Position Rule: Buds facing sideways experience equal soil moisture and sprout simultaneously within 14–20 days.',
          te: 'కళ్ళ స్థానం ప్రాముఖ్యత: కళ్ళు పక్కలకు ఉంటే సమానంగా తేమ అంది 14-20 రోజుల్లో ఒకేసారి అన్ని పిలకలు మొలకెత్తుతాయి.',
          kn: 'ಎಲ್ಲಾ ಮೊಗ್ಗುಗಳು ಒಟ್ಟಿಗೆ ಬೇಗನೆ ಚಿಗುರುತ್ತವೆ.',
          hi: 'आंखें अगल-बगल रहने से दोनों आंखों को बराबर नमी मिलती है और 14-20 दिनों में एकसमान जमाव होता है।',
        },
      ],
    },
  },
  // 4. Water and Weed Management
  waterAndWeedManagement: {
    irrigation: {
      title: {
        en: 'Alternate Furrow / Drip Irrigation & Water Conservation',
        te: 'ఒకటి విడిచి ఒక సాలు తడి / డ్రిప్ బిందు సేద్యం',
        kn: 'ಒಂದು ಬಿಟ್ಟು ಒಂದು ಸಾಲು ನೀರಾವರಿ ಅಥವಾ ಹನಿ ನೀರಾವರಿ',
        hi: 'एक छोड़कर एक नाली सिंचाई (Alternate Furrow) अथवा ड्रिप सिंचाई',
      },
      image: CROP_PRACTICE_IMAGES.sugarcane.irrigation,
      imageCaption: {
        en: 'Water flowing steadily through furrows delivering thorough root zone hydration without flooding ridge shoulders',
        te: 'బోదెలపైకి ఎక్కకుండా కాలువల ద్వారా క్రమబద్ధంగా నీరు అందించడం',
        kn: 'ಬದುಗಳನ್ನು ಮುಳುಗಿಸದೆ ಸಾಲುಗಳಲ್ಲಿ ನೀರು ಹರಿಸುವುದು',
        hi: 'नालियों के माध्यम से पौधों की जड़ों तक पर्याप्त पानी पहुंचाना',
      },
      description: {
        en: 'Sugarcane requires 1,500 to 2,000 mm water across 12 months. Irrigate at 7–10 day intervals during the formative/tillering stage (30–120 DAP) and 12–15 day intervals during the elongation stage. During the final 2 months (ripening), increase irrigation intervals to 20–25 days, and completely stop water 15 days prior to harvest.',
        te: 'చెరకుకు ఏడాది కాలంలో 1,500-2,000 మి.మీ నీరు అవసరం. పిలకలు తొడిగే దశలో (30-120 రోజులు) ప్రతి 7-10 రోజులకు ఒక తడి ఇవ్వాలి. పెరుగుదల దశలో 12-15 రోజులకు ఒక తడి ఇవ్వాలి. కోతకు 15 రోజుల ముందు నీటిని పూర్తిగా ఆపివేయాలి.',
        kn: 'ಬೆಳವಣಿಗೆಯ ಹಂತದಲ್ಲಿ 7-10 ದಿನಕ್ಕೊಮ್ಮೆ ನೀರು ಕೊಡಿ. ಕಟಾವಿಗೆ 15 ದಿನ ಮುನ್ನ ನೀರು ನಿಲ್ಲಿಸಿ.',
        hi: 'गन्ने को पूरे साल में 1,500-2,000 मिमी पानी चाहिए। कल्ले निकलते समय (30-120 दिन) 7-10 दिन के अंतर पर पानी दें। कटाई से 15 दिन पूर्व पानी बिल्कुल बंद कर दें।',
      },
      details: [
        {
          en: 'Trash Mulching: Spreading 3 tonnes/acre dry sugarcane trash in alternate furrows conserves 35% soil moisture and stifles weed germination.',
          te: 'చెరకు చెత్త మల్చింగ్: ఎండిన చెరకు ఆకులను సాళ్ళలో పరిస్తే 35% నీరు ఆదా అవ్వడమే కాకుండా కలుపు రాదు.',
          kn: 'ಕಬ್ಬಿನ ಒಣ ರವದಿ ಹೊದಿಸುವುದರಿಂದ ಶೇ. 35 ನೀರು ಉಳಿತಾಯ.',
          hi: 'सूखे पत्तों (रद्दी) की मल्चिंग करने से 35% नमी की बचत होती है और खरपतवार नहीं उगते।',
        },
      ],
    },
    weeding: {
      title: {
        en: 'Atrazine Pre-Emergence Spray & Progressive Earthing-Up',
        te: 'అట్రాజిన్ కలుపు మందు & 45 మరియు 90 రోజులకు క్రమబద్ధమైన మట్టి ఎగదోయడం',
        kn: 'ಅಟ್ರಾಜಿನ್ ಕಳೆನಾಶಕ ಮತ್ತು 45 ಹಾಗೂ 90 ದಿನಕ್ಕೆ ಮಣ್ಣು ಏರಿಸುವುದು',
        hi: 'एट्राजीन शाकनाशी का छिड़काव एवं 45 व 90 दिन पर क्रमिक मिट्टी चढ़ाना',
      },
      image: CROP_PRACTICE_IMAGES.sugarcane.weeding,
      imageCaption: {
        en: 'Heavy earthing-up converting furrows into ridges, smothering weeds and burying cane root bases',
        te: 'మట్టిని బాగా ఎగదోసి కందకాలను బోదెలుగా మార్చడం వలన కలుపు నశించి చెరకు నిలబడుతుంది',
        kn: 'ಬುಡಕ್ಕೆ ಮಣ್ಣು ಏರಿಸಿ ಕಳೆ ನಿರ್ಮೂಲನೆ ಮಾಡಿ ಕಬ್ಬನ್ನು ಭದ್ರಪಡಿಸುವುದು',
        hi: 'भारी मिट्टी चढ़ाकर खाइयों को मेड़ में बदलना जिससे खरपतवार दब जाते हैं और गन्ना मजबूत होता है',
      },
      description: {
        en: 'Spray Atrazine 50% WP @ 1.5 to 2.0 kg/acre within 3 days of planting in moist soil. Perform partial earthing-up at 45 DAP (smothering late tillers). Conduct heavy final earthing-up at 90–120 DAP using a ridger plough, which completely converts former furrows into ridges and wraps soil 30 cm around cane clumps.',
        te: 'నాటిన 3 రోజుల్లో తగినంత తేమ ఉన్నప్పుడు ఎకరానికి 1.5 నుండి 2 కిలోల అట్రాజిన్ పిచికారీ చేయాలి. 45 రోజులకు మొదటిసారి తేలికపాటి మట్టి ఎగదోయాలి. 90-120 రోజులకు భారీగా మట్టి ఎగదోసి కందకాలను బోదెలుగా మార్చాలి. దీనివల్ల గాలికి చేను పడిపోదు.',
        kn: 'ನಾಟಿಯ 3 ದಿನದೊಳಗೆ ಅಟ್ರಾಜಿನ್ ಸಿಂಪಡಿಸಿ. 45 ಮತ್ತು 90 ದಿನಕ್ಕೆ ಮಣ್ಣು ಏರಿಸಿ.',
        hi: 'बुवाई के 3 दिन के भीतर एट्राजीन (1.5-2 किग्रा/एकड़) का छिड़काव करें। 45 दिन पर हल्की और 90-120 दिन पर भारी मिट्टी चढ़ाएं।',
      },
      details: [
        {
          en: 'Suppress Late Shoots: Final earthing-up cuts off sunlight to late non-millable tillers (water shoots), concentrating food into thick millable canes.',
          te: 'నీటి పిలకల నివారణ: 90 రోజుల తర్వాత మట్టి ఎగదోయడం వల్ల అక్కరకు రాని చిన్న పిలకలు రాకుండా ఉన్న చెరకు గడలు లావుగా పెరుగుతాయి.',
          kn: 'ಅನಗತ್ಯ ಚಿಗುರುಗಳು ಬರದಂತೆ ತಡೆದು ಕಬ್ಬು ದಪ್ಪಗಾಗುತ್ತದೆ.',
          hi: 'मिट्टी चढ़ाने से देर से निकलने वाले अनुपयोगी कल्ले (वाटर शूट्स) दब जाते हैं और मुख्य गन्ने मोटे होते हैं।',
        },
      ],
    },
  },
  // 5. Flower to Fruit Milestone
  criticalMilestone: {
    title: {
      en: 'Grand Growth Elongation & Clump Trash Propping Milestone',
      te: 'వేగవంతమైన పెరుగుదల & చెరకు పడిపోకుండా జడ చుట్టే దశ (ప్రాపింగ్)',
      kn: 'ಕಬ್ಬಿನ ಗಿಣ್ಣುಗಳು ಬೆಳೆಯುವ ಹಂತ ಮತ್ತು ಕಬ್ಬು ಬೀಳದಂತೆ ಕಟ್ಟುವಿಕೆ (ಪ್ರಾಪಿಂಗ್)',
      hi: 'तीव्र बढ़वार (Grand Growth) एवं गन्ने की बंधाई (Propping) चरण',
    },
    image: CROP_PRACTICE_IMAGES.sugarcane.milestone,
    imageCaption: {
      en: 'Tall thick cane stalks tied together in triangular tepees using dry bottom trash leaves to resist cyclonic winds',
      te: 'గాలివానలకు చేను పడిపోకుండా చెరకు ఎండిన ఆకులతో గడలను కలిపి జడలా కట్టడం (ప్రాపింగ్)',
      kn: 'ಗಾಳಿಗೆ ಕಬ್ಬು ಬೀಳದಂತೆ ಒಣ ರವದಿಯಿಂದ ಕಬ್ಬುಗಳನ್ನು ಒಟ್ಟಿಗೆ ಕಟ್ಟುವುದು',
      hi: 'तेज हवा और आंधी से गन्ने को गिरने से बचाने के लिए सूखी पत्तियों से गन्नों को आपस में बांधना',
    },
    description: {
      en: 'Occurs from 120 to 240 DAP. Canes elongate rapidly, adding 4 to 5 internodes per month. Heavy cyclonic winds during August–October can cause catastrophic crop lodging, reducing sugar recovery by up to 30%. Tie adjacent cane clumps together into self-supporting "tepee" arches using dried lower trash (trash propping).',
      te: 'నాటిన 120 నుండి 240 రోజుల మధ్య చెరకు నెలకు 4 నుండి 5 కణుపుల చొప్పున వేగంగా పెరుగుతుంది. వర్షాకాలంలో బలమైన ఈదురు గాలులకు చేను పడిపోతే 30% వరకు దిగుబడి, చక్కెర తగ్గుతుంది. కాబట్టి చెరకు ఎండిన ఆకులతో పక్కపక్క వరుసలను కలిపి జడ చుట్టాలి.',
      kn: '120-240 ದಿನಗಳಲ್ಲಿ ಕಬ್ಬು ವೇಗವಾಗಿ ಬೆಳೆಯುತ್ತದೆ. ಗಾಳಿಗೆ ಬೀಳದಂತೆ ಒಣ ರವದಿಯಿಂದ ಕಬ್ಬುಗಳನ್ನು ಕಟ್ಟಿ.',
      hi: '120 से 240 दिन में गन्ने में तेजी से पोरियां बनती हैं। तेज हवाओं में फसल गिर जाने से 30% चीनी घट जाती है। अतः सूखी पत्तियों से गन्नों को आपस में बांधें।',
    },
    details: [
      {
        en: 'Lodging Damage Prevention: Erect standing canes receive uniform sunlight, preventing rat damage and fungal stalk fermentation.',
        te: 'పడిపోకుండా నివారణ: చేను నిలబడి ఉంటే ఎలుకల బెడద ఉండదు, నాణ్యమైన చక్కెర రికవరీ వస్తుంది.',
        kn: 'ಕಬ್ಬು ನೇರವಾಗಿ ನಿಂತರೆ ಇಲಿ ಕಾಟ ತಪ್ಪುತ್ತದೆ ಮತ್ತು ಸಕ್ಕರೆ ಪ್ರಮಾಣ ಉಳಿಯುತ್ತದೆ.',
        hi: 'खड़ी फसल में चूहों का नुकसान नहीं होता और रस की गुणवत्ता व चीनी की रिकवरी उत्तम बनी रहती है।',
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
          en: 'Apply strictly in 3 splits: 25% at 30 DAP, 50% at 60 DAP, and 25% at 90–120 DAP. ABSOLUTELY STOP after 120 DAP.',
          te: '3 దఫాలుగా మాత్రమే వేయాలి: నాటిన 30 రోజులకు 25%, 60 రోజులకు 50%, 90-120 రోజులకు 25%. 120 రోజుల తర్వాత యూరియా అస్సలు వేయరాదు.',
          kn: '3 ಕಂತುಗಳಲ್ಲಿ ಕೊಡಿ: 30 ದಿನಕ್ಕೆ 25%, 60 ದಿನಕ್ಕೆ 50%, 90-120 ದಿನಕ್ಕೆ 25%. 120 ದಿನಗಳ ನಂತರ ಯೂರಿಯಾ ಹಾಕಬೇಡಿ.',
          hi: 'केवल 3 बार में दें: 30 दिन पर 25%, 60 दिन पर 50%, 90-120 दिन पर 25%। 120 दिन के बाद यूरिया बिल्कुल न डालें।',
        },
        purpose: {
          en: 'Builds vigorous tillering capacity, wide green leaf canopy, and rapid stalk height elongation.',
          te: 'మొక్కజొన్న/చెరకులో ఎక్కువ పిలకలు రావడానికి, ఆకులు వెడల్పుగా మారి గడ పొడవు పెరగడానికి నత్రజని ముఖ్యం.',
          kn: 'ಹೆಚ್ಚು ಕಬ್ಬಿನ ಗಣ್ಣುಗಳು ಬಂದು ಎತ್ತರ ಬೆಳೆಯಲು.',
          hi: 'अधिक कल्ले निकालने, पत्तियों के फैलाव और गन्ने की लंबाई तेजी से बढ़ाने के लिए।',
        },
        howToApply: {
          en: 'Band place in moist furrows 10 cm from cane stools and cover with soil immediately.',
          te: 'చెరకు మొదళ్ళకు 10 సెం.మీ దూరంలో సాళ్ళలో వేసి మట్టితో కప్పి నీరు పెట్టాలి.',
          kn: 'ಬುಡದಿಂದ 10 ಸೆಂ.ಮೀ ದೂರದಲ್ಲಿ ಸಾಲುಗಳಲ್ಲಿ ಹಾಕಿ ಮಣ್ಣು ಮುಚ್ಚಿ.',
          hi: 'गन्ने की जड़ों से 10 सेमी दूर नाली में देकर मिट्टी से ढकें और सिंचाई करें।',
        },
        dosage: '130 to 150 kg Urea per acre (in 3 splits)',
        precautions: {
          en: 'CRITICAL MANDATE: Never apply Urea after 120 DAP; late nitrogen produces spongy, low-sucrose watery canes rejected by sugar mills.',
          te: 'ముఖ్య హెచ్చరిక: 120 రోజుల తర్వాత యూరియా వేస్తే చెరకులో చక్కెర శాతం పడిపోయి నీటి పిలకలు వచ్చి ఫ్యాక్టరీలో తిరస్కరిస్తారు.',
          kn: 'ಎಚ್ಚರಿಕೆ: 120 ದಿನಗಳ ನಂತರ ಯೂರಿಯಾ ಹಾಕಿದರೆ ಸಕ್ಕರೆ ಅಂಶ ಇಳಿಕೆಯಾಗಿ ಕಾರ್ಖಾನೆಯಲ್ಲಿ ತಿರಸ್ಕರಿಸುತ್ತಾರೆ.',
          hi: 'अति महत्वपूर्ण: 120 दिन के बाद यूरिया कभी न डालें; देर से यूरिया डालने पर रस में चीनी की मात्रा बहुत कम हो जाती है।',
        },
      },
      {
        nutrientName: 'Single Super Phosphate (SSP 16% P2O5) / DAP',
        fertilizerProduct: 'Single Super Phosphate (Powder / Granular)',
        productImage: INPUT_PRODUCT_IMAGES.ssp_bag,
        category: 'primary',
        whenToApply: {
          en: '100% full dose applied basal in planting trenches before sett placement.',
          te: 'మొత్తం మోతాదును ఆఖరి దుక్కిలో లేదా ముచ్చెలు నాటే ముందు కందకం అడుగున వేయాలి.',
          kn: 'ನಾಟಿಯ ಮುನ್ನ ಕಂದಕದ ತಳಕ್ಕೆ ಪೂರ್ಣ ಪ್ರಮಾಣದ ರಂಜಕ ಹಾಕಿ.',
          hi: 'बुवाई के समय खाई के तल में पूरी मात्रा बेसल के रूप में दें।',
        },
        purpose: {
          en: 'Spurs deep root anchorage and prolific early primary tillering from sett eyes.',
          te: 'వేర్లు లోతుగా చొచ్చుకుపోవడానికి మరియు ముచ్చె కళ్ళ నుండి ఎక్కువ సంఖ్యలో ఆరోగ్యకరమైన పిలకలు రావడానికి.',
          kn: 'ಬೇರುಗಳು ಆಳವಾಗಿ ಇಳಿಯಲು ಮತ್ತು ಹೆಚ್ಚು ಕವಲುಗಳು ಬರಲು.',
          hi: 'जड़ों के गहरे फैलाव और गन्ने की आंखों से अधिक स्वस्थ कल्ले निकलने हेतु।',
        },
        howToApply: {
          en: 'Broadcast along trench bottoms and mix with top 5 cm soil before laying setts.',
          te: 'కందకం అడుగున చల్లి మట్టితో కలిపిన తర్వాత ముచ్చెలను పేర్చాలి.',
          kn: 'ಕಂದಕದ ತಳದಲ್ಲಿ ಹಾಕಿ ಮಣ್ಣಿನೊಂದಿಗೆ ಬೆರೆಸಿ.',
          hi: 'खाई के तल में डालकर हल्की मिट्टी में मिला दें, फिर टुकड़े बिछाएं।',
        },
        dosage: '150 to 200 kg SSP per acre (or 60 kg DAP per acre)',
        precautions: {
          en: 'SSP is strongly preferred over DAP in sugarcane because SSP provides 22 kg valuable Sulphur per acre.',
          te: 'చెరకులో DAP కంటే SSP చాలా మంచిది, ఎందుకంటే SSP లో పంటకు అవసరమైన గంధకం (సల్ఫర్) కూడా లభిస్తుంది.',
          kn: 'ಡಿಎಪಿಗಿಂತ ಎಸ್‌ಎಸ್‌ಪಿ ಉತ್ತಮ, ಇದರಲ್ಲಿ ಗಂಧಕವೂ ಸಿಗುತ್ತದೆ.',
          hi: 'गन्ने में डीएपी की तुलना में एसएसपी ज्यादा फायदेमंद है क्योंकि इससे 22 किग्रा सल्फर भी मुफ्त मिलता है।',
        },
      },
      {
        nutrientName: 'Muriate of Potash (MOP 0:0:60)',
        fertilizerProduct: 'MOP 60% K2O (Granular Potassium Chloride)',
        productImage: INPUT_PRODUCT_IMAGES.mop_bag,
        category: 'primary',
        whenToApply: {
          en: 'Apply in 2 equal splits: 50% basal / 30 DAP, and 50% at final earthing-up (90–120 DAP).',
          te: 'రెండు దఫాలుగా వేయాలి: సగం నాటిన 30 రోజులకు, మిగిలిన సగం ఆఖరి మట్టి ఎగదోసే సమయంలో (90-120 రోజులు).',
          kn: 'ಎರಡು ಕಂತುಗಳಲ್ಲಿ ಕೊಡಿ: ಅರ್ಧ 30 ದಿನಕ್ಕೆ, ಉಳಿದರ್ಧ 90-120 ದಿನದ ಮಣ್ಣು ಏರಿಸುವಾಗ.',
          hi: 'दो बार में दें: 50% 30 दिन पर और 50% अंतिम मिट्टी चढ़ाते समय (90-120 दिन)।',
        },
        purpose: {
          en: 'Essential for sugar synthesis, internode elongation, stem solidness (anti-hollow cane), and drought tolerance.',
          te: 'చెరకులో చక్కెర తయారీకి, గడ గట్టిపడటానికి, కరవును తట్టుకోవడానికి మరియు చేను పడిపోకుండా ఉండటానికి పొటాష్ కీలకం.',
          kn: 'ಸಕ್ಕರೆ ಉತ್ಪಾದನೆಗೆ ಮತ್ತು ಕಬ್ಬು ಗಟ್ಟಿಯಾಗಲು ಪೊಟ್ಯಾಷ್ ಅತ್ಯಗತ್ಯ.',
          hi: 'गन्ने में चीनी (सुक्रोज) निर्माण, पोरियों के ठोस विकास और सूखे से लड़ने हेतु पोटाश अति आवश्यक है।',
        },
        howToApply: {
          en: 'Band place in furrows before earthing-up and cover with soil.',
          te: 'మట్టి ఎగదోసే ముందు సాళ్ళలో వేసి మట్టితో కప్పి నీటి తడి ఇవ్వాలి.',
          kn: 'ಸಾಲುಗಳಲ್ಲಿ ಹಾಕಿ ಮಣ್ಣು ಏರಿಸಿ ನೀರು ಕೊಡಿ.',
          hi: 'मिट्टी चढ़ाने से ठीक पहले नालियों में डालकर मिट्टी से ढकें।',
        },
        dosage: '60 to 80 kg MOP per acre across season',
        precautions: {
          en: 'Potassium deficiency leads to thin fibrous canes with extremely poor commercial sugar recovery (CSR).',
          te: 'పొటాష్ తగ్గితే చెరకు సన్నబడి పిప్పి ఎక్కువై ఫ్యాక్టరీలో చక్కెర రికవరీ దారుణంగా తగ్గిపోతుంది.',
          kn: 'ಪೊಟ್ಯಾಷ್ ಕೊರತೆಯಾದರೆ ಕಬ್ಬು ತೆಳುವಾಗಿ ಸಕ್ಕರೆ ಅಂಶ ಕಡಿಮೆಯಾಗುತ್ತದೆ.',
          hi: 'पोटाश की कमी से गन्ना पतला रह जाता है और चीनी की मिल रिकवरी घट जाती है।',
        },
      },
    ],
    secondary: [
      {
        nutrientName: 'Agricultural Gypsum (Calcium Sulphate Ca 23%, S 18%)',
        fertilizerProduct: 'Mineral Soil Gypsum',
        productImage: INPUT_PRODUCT_IMAGES.gypsum,
        category: 'secondary',
        whenToApply: {
          en: 'Basal application during land preparation or alongside 60 DAP fertilizer split.',
          te: 'ఆఖరి దుక్కిలో లేదా నాటిన 60 రోజులకు ఎరువులతో పాటు వేయాలి.',
          kn: 'ಕೊನೆಯ ಉಳುಮೆಯಲ್ಲಿ ಅಥವಾ 60 ದಿನಕ್ಕೆ ಹಾಕಿ.',
          hi: 'खेत की तैयारी में या 60 दिन की खाद के साथ दें।',
        },
        purpose: {
          en: 'Supplies Calcium for tough cell walls and Sulphur for protein synthesis, improving juice clarity and purity.',
          te: 'చెరకు గడలకు దృఢత్వాన్ని ఇచ్చి, రసం శుభ్రంగా తేటపడటానికి మరియు చక్కెర నాణ్యత పెరగడానికి తోడ్పడుతుంది.',
          kn: 'ಕಬ್ಬಿನ ರಸದ ಶುದ್ಧತೆ ಮತ್ತು ಸಕ್ಕರೆ ಗುಣಮಟ್ಟ ಹೆಚ್ಚಿಸುತ್ತದೆ.',
          hi: 'गन्ने के छिलके को मजबूत करता है और रस की शुद्धता व मिठास बढ़ाता है।',
        },
        howToApply: {
          en: 'Broadcast evenly @ 200 kg/acre and incorporate into soil.',
          te: 'ఎకరానికి 200 కిలోలు చల్లి మట్టిలో కలియదున్నాలి.',
          kn: 'ಎಕರೆಗೆ 200 ಕೆಜಿ ಸಮವಾಗಿ ಹರಡಿ ಮಣ್ಣಿಗೆ ಬೆರೆಸಿ.',
          hi: '200 किग्रा प्रति एकड़ पूरे खेत में बिखेरकर जुताई करें।',
        },
        dosage: '200 kg/acre basal application',
        precautions: {
          en: 'Highly beneficial in alkaline/sodic soils to loosen hard soil texture.',
          te: 'చౌడు నేలల్లో భూమి గుల్లబారడానికి ఇది ఎంతో సహాయపడుతుంది.',
          kn: 'ಸವಳು ಜಮೀನುಗಳಿಗೆ ಇದು ಅತ್ಯಂತ ಉಪಯುಕ್ತ.',
          hi: 'क्षारीय और भारी मिट्टी की संरचना सुधारने में अत्यंत लाभकारी।',
        },
      },
    ],
    micronutrients: [
      {
        nutrientName: 'Ferrous Sulphate (Fe 19%) + Zinc Sulphate (Zn 21%)',
        fertilizerProduct: 'Agricultural Grade Ferrous & Zinc Sulphate',
        productImage: INPUT_PRODUCT_IMAGES.ferrous_sulphate,
        category: 'micronutrient',
        whenToApply: {
          en: 'Foliar spray at 45 and 75 DAP in alkaline soils, or basal at land prep.',
          te: 'చౌడు/సున్నపు నేలల్లో నాటిన 45 మరియు 75 రోజులకు పిచికారీ చేయాలి లేదా ఆఖరి దుక్కిలో వేయాలి.',
          kn: '45 ಮತ್ತು 75 ದಿನಕ್ಕೆ ಸಿಂಪಡಿಸಿ ಅಥವಾ ಉಳುಮೆಯಲ್ಲಿ ಹಾಕಿ.',
          hi: 'क्षारीय मिट्टी में 45 व 75 दिन पर पत्तियों पर छिड़कें या बुवाई पर दें।',
        },
        purpose: {
          en: 'Prevents and cures Iron Chlorosis (bleached yellow-white leaf striping) and Zinc rosetting in calcareous high-pH soils.',
          te: 'సున్నపు నేలల్లో ఆకులు తెల్లబడి పాలిపోయే ఇనుము లోపం (ఐరన్ క్లోరోసిస్) రాకుండా నివారిస్తుంది.',
          kn: 'ಎಲೆಗಳು ಬಿಳಿಯಾಗುವ ಕಬ್ಬಿಣದ ಕೊರತೆ ರೋಗ ತಡೆಯುತ್ತದೆ.',
          hi: 'पत्तियों का सफेद-पीला पड़ना (आयरन क्लोरोसिस) रोकता है और हरियाली लाता है।',
        },
        howToApply: {
          en: 'Dissolve Ferrous Sulphate (10 g/L) + Citric Acid (1 g/L) + Urea (10 g/L) in water and spray foliage thoroughly.',
          te: 'లీటరు నీటికి 10 గ్రాముల ఫెర్రస్ సల్ఫేట్ + 1 గ్రాము నిమ్మ ఉప్పు + 10 గ్రాముల యూరియా కలిపి పిచికారీ చేయాలి.',
          kn: 'ಲೀಟರ್ ನೀರಿಗೆ 10 ಗ್ರಾಂ ಫೆರಸ್ ಸಲ್ಫೇಟ್ ಮತ್ತು ನಿಂಬೆ ಉಪ್ಪು ಬೆರೆಸಿ ಸಿಂಪಡಿಸಿ.',
          hi: '10 ग्राम फेरस सल्फेट + 1 ग्राम साइट्रिक एसिड + 10 ग्राम यूरिया प्रति लीटर पानी में घोलकर छिड़कें।',
        },
        dosage: 'Foliar spray: FeSO4 @ 10 g/L water (2 kg/acre)',
        precautions: {
          en: 'Always add citric acid/lemon salt to dissolve iron crystals and maintain acid pH in spray water.',
          te: 'ఫెర్రస్ సల్ఫేట్ పిచికారీ చేసేటప్పుడు తప్పనిసరిగా నిమ్మ ఉప్పు కలపాలి.',
          kn: 'ನಿಂಬೆ ಉಪ್ಪು ಸೇರಿಸುವುದನ್ನು ಮರೆಯಬೇಡಿ.',
          hi: 'आयरन के घोल में नींबू का सत (साइट्रिक एसिड) मिलाना अनिवार्य है ताकि दवा पूरी तरह घुल सके।',
        },
      },
    ],
  },
  // 7. Post-Harvest
  postHarvest: {
    maturity: {
      title: {
        en: 'Field Refractometer 18–20% Brix & Metallic Ringing Canes',
        te: 'రిఫ్రాక్టోమీటర్‌తో 18-20% బ్రిక్స్ & లోహపు శబ్దం వచ్చే పరిపక్వత',
        kn: 'ರಿಫ್ರಾಕ್ಟೋಮೀಟರ್‌ನಲ್ಲಿ 18-20% ಬ್ರಿಕ್ಸ್ ಮತ್ತು ಲೋಹದ ಸದ್ದು ಬರುವ ಹಂತ',
        hi: 'हैंड रिफ्रैक्टोमीटर से 18-20% ब्रिक्स एवं गन्ने को ठोकने पर धातु जैसी खनक',
      },
      image: CROP_PRACTICE_IMAGES.sugarcane.maturity,
      imageCaption: {
        en: 'Testing middle cane internode juice on hand refractometer showing sharp 19° Brix sucrose line',
        te: 'హ్యాండ్ రిఫ్రాక్టోమీటర్‌తో చెరకు రసం పరీక్షించినప్పుడు 19 డిగ్రీల బ్రిక్స్ చూపించే పరిపక్వ దశ',
        kn: 'ಹ್ಯಾಂಡ್ ರಿಫ್ರಾಕ್ಟೋಮೀಟರ್‌ನಲ್ಲಿ ಕಬ್ಬಿನ ರಸದ ಸಕ್ಕರೆ ಪ್ರಮಾಣ (19° ಬ್ರಿಕ್ಸ್) ಪರೀಕ್ಷಿಸುವುದು',
        hi: 'हैंड रिफ्रैक्टोमीटर द्वारा गन्ने के रस में 19° ब्रिक्स की स्पष्ट रीडिंग जो पूर्ण परिपक्वता दर्शाती है',
      },
      description: {
        en: 'Assess maturity 10–12 months after planting: 1. Bottom leaves dry and fall off cleanly, 2. Cane internodes emit a clear metallic ringing sound when tapped with fingernails, 3. Hand refractometer reading of juice from the middle internode reaches 18–20° Brix (with a top-to-bottom brix ratio nearing 1.0).',
        te: 'చెరకు 10-12 నెలలకు పక్వానికి వస్తుంది: 1. కింది ఆకులు వాటంతట అవే ఎండి రాలిపోతాయి, 2. గడపై గోటితో మీటితే లోహపు గంట శబ్దం వస్తుంది, 3. హ్యాండ్ రిఫ్రాక్టోమీటర్‌తో మధ్య కణుపు రసాన్ని పరీక్షిస్తే 18 నుండి 20 డిగ్రీల బ్రిక్స్ పంచదార శాతం చూపిస్తుంది.',
        kn: '10-12 ತಿಂಗಳಿಗೆ ಕಬ್ಬು ಪಕ್ವವಾಗುತ್ತದೆ. ಉಗುರಿನಿಂದ ತಟ್ಟಿದರೆ ಗಂಟೆಯ ಸದ್ದು ಬರುತ್ತದೆ ಮತ್ತು 18-20° ಬ್ರಿಕ್ಸ್ ಇರುತ್ತದೆ.',
        hi: '10-12 महीने पर गन्ने के पकने के लक्षण: निचली पत्तियां सूख जाती हैं, नाखून से ठोकने पर धातु जैसी खनक आती है और रिफ्रैक्टोमीटर पर 18-20% ब्रिक्स की रीडिंग मिलती है।',
      },
      details: [
        {
          en: 'Brix Ratio Rule: When Brix reading of top internode reaches 90% of bottom internode, the cane is at absolute peak sucrose.',
          te: 'బ్రిక్స్ నిష్పత్తి: చెరకు పై భాగం మరియు అడుగు భాగం రెండింటిలోనూ బ్రిక్స్ దాదాపు సమానంగా ఉన్నప్పుడే కోత కోయాలి.',
          kn: 'ಮೇಲಿನ ಮತ್ತು ಕೆಳಗಿನ ಗಣ್ಣುಗಳಲ್ಲಿ ಸಮಾನ ಸಕ್ಕರೆ ಬಂದಾಗ ಕಟಾವು ಮಾಡಿ.',
          hi: 'जब ऊपरी और निचले पोरियों का ब्रिक्स लगभग बराबर हो जाए, तब समझें कि गन्ने में अधिकतम चीनी बन चुकी है।',
        },
      ],
    },
    harvesting: {
      title: {
        en: 'Ground-Level Flush Cutting with Sharp Cane Knives',
        te: 'పదునైన చెరకు కొడవలితో నేల మట్టానికి సమాంతరంగా నరకడం',
        kn: 'ಹರಿತವಾದ ಕೊಯ್ಲು ಕತ್ತಿಯಿಂದ ನೆಲಮಟ್ಟಕ್ಕೆ ಕಡಿಯುವುದು',
        hi: 'तेज धार वाले गंडासे से जमीन की सतह से सटाकर समतल कटाई',
      },
      image: CROP_PRACTICE_IMAGES.sugarcane.harvesting,
      imageCaption: {
        en: 'Cutting thick canes flush at root crown level without splintering underground stool stubble',
        te: 'భూమి మట్టానికి సమాంతరంగా మొద్దులు చీలిపోకుండా కొట్టడం వలన రికవరీ పెరుగుతుంది మరియు కార్శి తోట బాగుంటుంది',
        kn: 'ಬುಡ ಸೀಳದಂತೆ ನೆಲಮಟ್ಟಕ್ಕೆ ಸಮವಾಗಿ ಕಡಿಯುವುದು',
        hi: 'जमीन से सटाकर काटने से गन्ने में अधिक रस मिलता है और पेड़ी (Ratoon) फसल शानदार फूटती है',
      },
      description: {
        en: 'Always cut canes strictly flush with ground level using sharp crescent knives. The bottom-most 15 cm stubble carries the highest sucrose concentration in the whole plant. Leaving high stubbles wastes 2 tonnes sugar/acre and severely damages subsequent ratoon sprouting. De-top canes at the highest mature internode and strip all dry trash.',
        te: 'పదునైన కత్తులతో నేల మట్టానికి సమాంతరంగా చెరకును నరకాలి. చెరకు అడుగున ఉండే మొదటి 15 సెం.మీ భాగంలోనే అత్యధికంగా చక్కెర ఉంటుంది. నేలపైన మొద్దులు వదిలేస్తే ఎకరానికి 2 టన్నుల దిగుబడి నష్టపోవడమే కాకుండా కార్శి తోటలో పిలకలు సరిగ్గా రావు.',
        kn: 'ನೆಲಮಟ್ಟಕ್ಕೆ ಸರಿಸಮವಾಗಿ ಕಡಿಯಿರಿ. ಬುಡದಲ್ಲೇ ಅತಿ ಹೆಚ್ಚು ಸಕ್ಕರೆ ಇರುತ್ತದೆ.',
        hi: 'हमेशा जमीन की सतह से सटाकर काटें। गन्ने के सबसे निचले 15 सेमी हिस्से में सबसे ज्यादा चीनी होती है। ऊपर ठूंठ छोड़ने से 2 टन पैदावार का नुकसान होता है।',
      },
      details: [
        {
          en: 'Millable Stalk Hygiene: Remove the green cabbage top and all clinging trash; trash carries factory weight deductions of 3–5%.',
          te: 'చెత్త తొలగింపు: ఆకులను, పచ్చి పీలికలను పూర్తిగా తొలగించి శుభ్రమైన చెరకును మాత్రమే ఫ్యాక్టరీకి పంపాలి.',
          kn: 'ಒಣ ರವದಿ ತೆಗೆದು ಶುದ್ಧ ಕಬ್ಬನ್ನು ರವಾನಿಸಿ.',
          hi: 'ऊपरी कच्चा अगोला और सूखी पत्तियां पूरी तरह हटा दें, अन्यथा मिल में कटौती होती है।',
        },
      ],
    },
    dryingAndCuring: {
      title: {
        en: '24–48 Hour Urgent Factory Dispatch (Inversion Prevention)',
        te: 'నరికిన 24-48 గంటల్లో ఫ్యాక్టరీకి తరలింపు (చక్కెర ఆవిరి కాకుండా)',
        kn: 'ಕಟಾವು ಮಾಡಿದ 24-48 ಗಂಟೆಗಳಲ್ಲಿ ಸಕ್ಕರೆ ಕಾರ್ಖಾನೆಗೆ ರವಾನೆ',
        hi: 'कटाई के 24-48 घंटे के भीतर अनिवार्य चीनी मिल आपूर्ति (सुक्रोज ह्रास रोकथाम)',
      },
      image: CROP_PRACTICE_IMAGES.sugarcane.drying,
      imageCaption: {
        en: 'Freshly stripped clean canes loaded onto tractor trolleys dispatched immediately to sugar factory yard',
        te: 'నరికిన చెరకును వెంటనే ట్రాక్టర్ ట్రాలీలలో ఎక్కించి చక్కెర మిల్లుకు తరలించడం',
        kn: 'ಕಟಾವಾದ ಕಬ್ಬನ್ನು ತಕ್ಷಣ ಟ್ರಾಕ್ಟರ್‌ಗೆ ತುಂಬಿ ಕಾರ್ಖಾನೆಗೆ ಸಾಗಿಸುವುದು',
        hi: 'ताजे कटे गन्ने को ट्रॉलियों में भरकर तुरंत चीनी मिल की ओर रवाना करना',
      },
      description: {
        en: 'Sugarcane is a perishable industrial commodity. Once cut, invertase enzymes immediately begin converting crystal sucrose into non-crystallizable reducing sugars (glucose and fructose). For every 24 hours cut canes sit in the sun, commercial sugar recovery drops by 0.5 to 1.0%. Crush within 24 to 48 hours maximum.',
        te: 'చెరకును నరికిన వెంటనే ఎంజైముల చర్య వల్ల చక్కెర నాణ్యత వేగంగా క్షీణిస్తుంది. ఎండలో నరికిన చెరకు రోజులు గడిచేకొద్దీ బరువు తగ్గిపోవడమే కాకుండా చక్కెర రికవరీ గణనీయంగా పడిపోతుంది. కాబట్టి నరికిన 24 నుండి 48 గంటల్లోపే ఫ్యాక్టరీలో క్రషింగ్ జరగాలి.',
        kn: 'ಕಡಿದ 24-48 ಗಂಟೆಗಳೊಳಗೆ ಕಬ್ಬು ಅರೆಯಬೇಕು, ತಡವಾದರೆ ತೂಕ ಮತ್ತು ಸಕ್ಕರೆ ಅಂಶ ಕಡಿಮೆಯಾಗುತ್ತದೆ.',
        hi: 'गन्ना कटाई के बाद तुरंत सूखने लगता है और रस की चीनी उड़ने लगती है। प्रति 24 घंटे देरी पर चीनी की रिकवरी 0.5-1% घट जाती है। 24 से 48 घंटे में पेराई अनिवार्य है।',
      },
      details: [
        {
          en: 'Cover In-Transit: If transit is delayed, cover loaded carts with damp sugarcane trash to reduce weight shrinkage and desiccation.',
          te: 'రవాణా జాగ్రత్త: ఫ్యాక్టరీ వద్ద ఆలస్యమైతే చెరకు బండ్లపై తడి ఆకులను కప్పి తేమ ఆవిరి కాకుండా కాపాడుకోవాలి.',
          kn: 'ತಡವಾದರೆ ಕಬ್ಬಿನ ಮೇಲೆ ಒದ್ದೆ ರವದಿ ಹೊದಿಸಿ.',
          hi: 'देरी होने पर ट्रॉली के ऊपर गन्ने की हरी पत्तियां ढकें ताकि गन्ने का वजन कम न हो।',
        },
      ],
    },
    storage: {
      title: {
        en: 'Ratoon Stubble Shaving & Trash Management for 2nd Crop',
        te: 'కార్శి తోట కోసం మొద్దుల చెక్కుడు & చెత్తతో వరుసల మల్చింగ్',
        kn: 'ಕೂಳೆ ಕಬ್ಬಿನ ಬುಡ ಸವರಿಕೆ ಮತ್ತು ಸಾಲುಗಳ ನಡುವೆ ರವದಿ ಹರಡುವಿಕೆ',
        hi: 'पेड़ी (Ratoon) फसल प्रबंधन: ठूंठों की छंटाई (Stubble Shaving) एवं रद्दी प्रबंधन',
      },
      image: CROP_PRACTICE_IMAGES.sugarcane.storage,
      imageCaption: {
        en: 'Shaving raised cane stubble flush with soil and spreading trash uniformly between rows for instant ratoon tillering',
        te: 'నేల మట్టానికి సమాంతరంగా మొద్దులను చెక్కి చెరకు చెత్తను సాళ్ళలో పరిచి కార్శి పంటకు సిద్ధం చేయడం',
        kn: 'ಬುಡಗಳನ್ನು ಸಮವಾಗಿ ಸವರಿ ರವದಿಯನ್ನು ಸಾಲುಗಳಲ್ಲಿ ಹರಡಿ ಕೂಳೆ ಬೆಳೆಗೆ ಸಿದ್ಧತೆ',
        hi: 'ठूंठों को जमीन की सतह से छांटकर सूखी पत्तियों को कतारों के बीच बिछाना ताकि पेड़ी फसल तेजी से फूटे',
      },
      description: {
        en: 'Unlike seed grains stored in bins, sugarcane continues directly into the next high-profit Ratoon Crop. Immediately after harvest: 1. Shave protruding stubble flush with ground using a ratoon stubble shaver, 2. Spread cane trash in alternate rows, 3. Off-bar (root prune) furrow ridges, 4. Apply 50 kg DAP + 25 kg Urea basal to trigger synchronous deep ratoon tillering.',
        te: 'చెరకు కోత ముగియగానే కార్శి (రెండవ) పంట మొదలవుతుంది. కోసిన వెంటనే: 1. నేలపై మిగిలిన మొద్దులను నేల మట్టానికి సమానంగా చెక్కాలి, 2. ఎండిన ఆకులను సాళ్ళలో మల్చింగ్ వేయాలి, 3. పాత వేర్లను కట్ చేసి, 4. ఎకరానికి 50 కిలోల DAP + 25 కిలోల యూరియా వేసి తడి ఇస్తే ఏపుగా బలమైన కార్శి పిలకలు వస్తాయి.',
        kn: 'ಕಟಾವಾದ ತಕ್ಷಣ ಬುಡ ಸವರಿ ರವದಿ ಹರಡಿ ಗೊಬ್ಬರ ಕೊಟ್ಟು ಕೂಳೆ ಕಬ್ಬನ್ನು ಬೆಳೆಸಿ.',
        hi: 'कटाई के तुरंत बाद ठूंठों की छंटाई करें, सूखी पत्तियों को कतारों में फैलाएं और 50 किग्रा डीएपी + 25 किग्रा यूरिया देकर सिंचाई करें। इससे पेड़ी फसल से बंपर पैदावार मिलती है।',
      },
      details: [
        {
          en: 'Saves Sowing Costs: A properly managed ratoon crop saves Rs 15,000 to 20,000 per acre in seed cane and land preparation expenses.',
          te: 'ఖర్చు ఆదా: కార్శి తోట వల్ల విత్తనం మరియు దుక్కి ఖర్చులు మిగిలి ఎకరానికి 15,000 నుండి 20,000 వరకు ఆదా అవుతుంది.',
          kn: 'ಎಕರೆಗೆ 15,000-20,000 ರೂ. ಬಿತ್ತನೆ ಖರ್ಚು ಉಳಿತಾಯ.',
          hi: 'पेड़ी फसल से बीज और जुताई का 15,000-20,000 रुपये प्रति एकड़ का खर्च बचता है।',
        },
      ],
    },
  },
};
