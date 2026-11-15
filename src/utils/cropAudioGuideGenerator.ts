import { CropGuide, LanguageCode } from '../types';
import { getLocalizedCrop, getLocalizedCropName } from '../data/cropsData';

export interface CompleteCropAudioGuide {
  cropId: string;
  cropName: string;
  language: LanguageCode;
  fullSpokenScript: string;
  structuredSections: {
    title: string;
    icon: string;
    content: string;
  }[];
}

/**
 * Generates the complete, exhaustive agricultural audio guide for a crop in the chosen language.
 * Strictly avoids short summaries or English leakage when Telugu/Kannada/Hindi is selected.
 */
export function generateCompleteCropAudioGuide(
  crop: CropGuide,
  lang: LanguageCode
): CompleteCropAudioGuide {
  const loc = getLocalizedCrop(crop, lang);
  const cropName = getLocalizedCropName(crop, lang);

  const sections: { title: string; icon: string; content: string }[] = [];
  let spokenScript = '';

  if (lang === 'te') {
    // 1. పంట పరిచయం & అనుకూల కాలం
    const sec1 = {
      title: 'పంట పరిచయం & అనుకూల కాలం',
      icon: '☀️',
      content: `${cropName} సాగు సమగ్ర సమాచారం. ఈ పంట సాగుకు అనుకూలమైన కాలం: ${loc.suitableSeason}. ప్రధాన సాగు నెలలు: ${loc.suitableMonths}.`,
    };
    sections.push(sec1);

    // 2. నేల రకాలు & ఉదజని సూచిక (pH)
    const sec2 = {
      title: 'నేల రకాలు & భూసారం',
      icon: '🌱',
      content: `నేల అవసరాలు: ${loc.soil}`,
    };
    sections.push(sec2);

    // 3. ప్రధాన పొలం తయారీ
    const sec3 = {
      title: 'ప్రధాన పొలం తయారీ',
      icon: '🚜',
      content: `నేల తయారీ విధానం: ${loc.landPreparation}`,
    };
    sections.push(sec3);

    // 4. విత్తన ఎంపిక & నాటు పద్ధతి, అంతరం
    const sec4 = {
      title: 'విత్తన ఎంపిక & నాటు పద్ధతి, దూరం',
      icon: '🌾',
      content: `విత్తన మోతాదు మరియు నాటు వివరాలు: ${loc.seedPlanting}`,
    };
    sections.push(sec4);

    // 5. నీటి యాజమాన్యం
    const sec5 = {
      title: 'నీటి యాజమాన్యం & తడులు',
      icon: '💧',
      content: `నీటి పారుదల ప్రణాళిక: ${loc.irrigation}`,
    };
    sections.push(sec5);

    // 6. దశలవారీగా ఎరువుల యాజమాన్యం
    let fertText = 'దశలవారీ ఎరువుల మోతాదు: ';
    loc.fertilizerRequirements.forEach((f, idx) => {
      fertText += `${idx + 1}వ దశ: ${f.stage} సమయంలో ${f.nutrient} - ${f.dosage}. ${f.notes ? 'ముఖ్య సూచన: ' + f.notes + ' ' : ''}; `;
    });
    const sec6 = {
      title: 'దశలవారీ ఎరువుల యాజమాన్యం',
      icon: '🧪',
      content: fertText,
    };
    sections.push(sec6);

    // 7. పంట కాలం & ఎదుగుదల దశలు
    const sec7 = {
      title: 'పంట కాల పరిమితి',
      icon: '⏳',
      content: `మొత్తం పంట కాల పరిమితి: ${loc.cropDuration}.`,
    };
    sections.push(sec7);

    // 8. ప్రధాన తెగుళ్లు, పురుగులు & రక్షణ చర్యలు
    let pestText = 'ప్రధాన పురుగులు మరియు తెగుళ్ల నివారణ చర్యలు: ';
    loc.pestDiseasePrevention.forEach((p, idx) => {
      pestText += `${idx + 1}. సమస్య: ${p.problem}. లక్షణాలు: ${p.symptoms}. నివారణ: ${p.prevention} `;
    });
    const sec8 = {
      title: 'పురుగులు & తెగుళ్ల నివారణ',
      icon: '🛡️',
      content: pestText,
    };
    sections.push(sec8);

    // 9. కోత సమయం & కోసే విధానం
    const sec9 = {
      title: 'కోత సమయం & పద్ధతి',
      icon: '🧺',
      content: `పంట కోత మరియు నిల్వ విధానం: ${loc.harvest}`,
    };
    sections.push(sec9);

    // 10. మార్కెట్ అమ్మకాలు & రవాణా జాగ్రత్తలు
    const sec10 = {
      title: 'మార్కెట్ అమ్మకాలు & జాగ్రత్తలు',
      icon: '📈',
      content: `మార్కెటింగ్ మరియు రవాణా సూచనలు: ${loc.marketInfo}`,
    };
    sections.push(sec10);

    spokenScript = `నమస్కారం రైతు సోదరులారా. ${cropName} సాగు సమగ్ర ఆడియో గైడ్. ` +
      sections.map((s) => `${s.title}: ${s.content}`).join(' ');

  } else if (lang === 'kn') {
    // KANNADA
    const sec1 = {
      title: 'ಬೆಳೆ ಪರಿಚಯ ಮತ್ತು ಸೂಕ್ತ ಕಾಲ',
      icon: '☀️',
      content: `${cropName} ಬೆಳೆ ಸಮಗ್ರ ಮಾಹಿತಿ. ಈ ಬೆಳೆಗೆ ಸೂಕ್ತವಾದ ಕಾಲ: ${loc.suitableSeason}. ಮುಖ್ಯ ನಾಟಿ ತಿಂಗಳುಗಳು: ${loc.suitableMonths}.`,
    };
    sections.push(sec1);

    const sec2 = {
      title: 'ಮಣ್ಣಿನ ಆಯ್ಕೆ ಮತ್ತು ಫಲವತ್ತತೆ',
      icon: '🌱',
      content: `ಮಣ್ಣಿನ ವಿವರ: ${loc.soil}`,
    };
    sections.push(sec2);

    const sec3 = {
      title: 'ಭೂಮಿ ಸಿದ್ಧತೆ',
      icon: '🚜',
      content: `ಭೂಮಿ ಸಿದ್ಧತೆ ವಿಧಾನ: ${loc.landPreparation}`,
    };
    sections.push(sec3);

    const sec4 = {
      title: 'ಬೀಜದ ಪ್ರಮಾಣ ಮತ್ತು ನಾಟಿ ಅಂತರ',
      icon: '🌾',
      content: `ಬೀಜ ಮತ್ತು ನಾಟಿ ವಿವರ: ${loc.seedPlanting}`,
    };
    sections.push(sec4);

    const sec5 = {
      title: 'ನೀರಾವರಿ ನಿರ್ವಹಣೆ',
      icon: '💧',
      content: `ನೀರಾವರಿ ವೇಳಾಪಟ್ಟಿ: ${loc.irrigation}`,
    };
    sections.push(sec5);

    let fertText = 'ಹಂತವಾರು ಗೊಬ್ಬರ ನಿರ್ವಹಣೆ: ';
    loc.fertilizerRequirements.forEach((f, idx) => {
      fertText += `ಹಂತ ${idx + 1}: ${f.stage} ಸಂದರ್ಭದಲ್ಲಿ ${f.nutrient} - ${f.dosage}. ${f.notes ? 'ವಿಶೇಷ ಸೂಚನೆ: ' + f.notes + ' ' : ''}; `;
    });
    const sec6 = {
      title: 'ಹಂತವಾರು ಗೊಬ್ಬರಗಳ ವಿವರ',
      icon: '🧪',
      content: fertText,
    };
    sections.push(sec6);

    const sec7 = {
      title: 'ಬೆಳೆಯ ಅವಧಿ',
      icon: '⏳',
      content: `ಒಟ್ಟು ಬೆಳೆಯ ಅವಧಿ: ${loc.cropDuration}.`,
    };
    sections.push(sec7);

    let pestText = 'ಕೀಟ ಮತ್ತು ರೋಗ ನಿಯಂತ್ರಣ ಕ್ರಮಗಳು: ';
    loc.pestDiseasePrevention.forEach((p, idx) => {
      pestText += `${idx + 1}. ಸಮಸ್ಯೆ: ${p.problem}. ಲಕ್ಷಣಗಳು: ${p.symptoms}. ನಿಯಂತ್ರಣ: ${p.prevention} `;
    });
    const sec8 = {
      title: 'ಕೀಟ ಮತ್ತು ರೋಗ ನಿರ್ವಹಣೆ',
      icon: '🛡️',
      content: pestText,
    };
    sections.push(sec8);

    const sec9 = {
      title: 'ಕೊಯ್ಲು ಪದ್ಧತಿ',
      icon: '🧺',
      content: `ಕೊಯ್ಲಿನ ವಿಧಾನ: ${loc.harvest}`,
    };
    sections.push(sec9);

    const sec10 = {
      title: 'ಮಾರುಕಟ್ಟೆ ಸಲಹೆ',
      icon: '📈',
      content: `ಮಾರುಕಟ್ಟೆ ವಿವರ: ${loc.marketInfo}`,
    };
    sections.push(sec10);

    spokenScript = `ರೈತ ಬಾಂಧವರಿಗೆ ನಮಸ್ಕಾರ. ${cropName} ಬೆಳೆಯ ಸಮಗ್ರ ಆಡಿಯೊ ಮಾರ್ಗದರ್ಶಿ. ` +
      sections.map((s) => `${s.title}: ${s.content}`).join(' ');

  } else if (lang === 'hi') {
    // HINDI
    const sec1 = {
      title: 'फसल परिचय एवं उपयुक्त मौसम',
      icon: '☀️',
      content: `${cropName} की खेती की संपूर्ण जानकारी। उपयुक्त मौसम: ${loc.suitableSeason}। मुख्य बुवाई के महीने: ${loc.suitableMonths}।`,
    };
    sections.push(sec1);

    const sec2 = {
      title: 'मिट्टी की आवश्यकताएं',
      icon: '🌱',
      content: `मिट्टी और पीएच मान: ${loc.soil}`,
    };
    sections.push(sec2);

    const sec3 = {
      title: 'खेत की तैयारी',
      icon: '🚜',
      content: `खेत तैयारी: ${loc.landPreparation}`,
    };
    sections.push(sec3);

    const sec4 = {
      title: 'बीज दर एवं बुवाई की विधि व दूरी',
      icon: '🌾',
      content: `बीज एवं रोपाई: ${loc.seedPlanting}`,
    };
    sections.push(sec4);

    const sec5 = {
      title: 'सिंचाई प्रबंधन',
      icon: '💧',
      content: `सिंचाई अनुसूची: ${loc.irrigation}`,
    };
    sections.push(sec5);

    let fertText = 'चरणबद्ध उर्वरक प्रबंधन: ';
    loc.fertilizerRequirements.forEach((f, idx) => {
      fertText += `चरण ${idx + 1}: ${f.stage} में ${f.nutrient} - ${f.dosage}. ${f.notes ? 'विशेष सलाह: ' + f.notes + ' ' : ''}; `;
    });
    const sec6 = {
      title: 'उर्वरक एवं पोषक तत्व',
      icon: '🧪',
      content: fertText,
    };
    sections.push(sec6);

    const sec7 = {
      title: 'फसल अवधि',
      icon: '⏳',
      content: `फसल की कुल अवधि: ${loc.cropDuration}।`,
    };
    sections.push(sec7);

    let pestText = 'प्रमुख कीट एवं रोग रोकथाम: ';
    loc.pestDiseasePrevention.forEach((p, idx) => {
      pestText += `${idx + 1}. रोग/कीट: ${p.problem}। लक्षण: ${p.symptoms}। रोकथाम: ${p.prevention} `;
    });
    const sec8 = {
      title: 'कीट एवं रोग नियंत्रण',
      icon: '🛡️',
      content: pestText,
    };
    sections.push(sec8);

    const sec9 = {
      title: 'कटाई एवं तुड़ाई',
      icon: '🧺',
      content: `कटाई विधि: ${loc.harvest}`,
    };
    sections.push(sec9);

    const sec10 = {
      title: 'मंडी विपणन एवं सावधानियां',
      icon: '📈',
      content: `मंडी बिक्री सुझाव: ${loc.marketInfo}`,
    };
    sections.push(sec10);

    spokenScript = `किसान भाइयों को नमस्कार। ${cropName} की खेती का संपूर्ण ऑडियो गाइड। ` +
      sections.map((s) => `${s.title}: ${s.content}`).join(' ');

  } else {
    // ENGLISH
    const sec1 = {
      title: 'Crop Overview & Suitable Seasons',
      icon: '☀️',
      content: `Complete agricultural guide for ${crop.nameEn}. Suitable seasons: ${loc.suitableSeason}. Optimal sowing months: ${loc.suitableMonths}.`,
    };
    sections.push(sec1);

    const sec2 = {
      title: 'Soil & Climate Requirements',
      icon: '🌱',
      content: `Soil requirements: ${loc.soil}`,
    };
    sections.push(sec2);

    const sec3 = {
      title: 'Land Preparation',
      icon: '🚜',
      content: `Land preparation details: ${loc.landPreparation}`,
    };
    sections.push(sec3);

    const sec4 = {
      title: 'Seed Rate & Planting Spacing',
      icon: '🌾',
      content: `Seed rate and planting spacing: ${loc.seedPlanting}`,
    };
    sections.push(sec4);

    const sec5 = {
      title: 'Irrigation Management',
      icon: '💧',
      content: `Irrigation schedule: ${loc.irrigation}`,
    };
    sections.push(sec5);

    let fertText = 'Stage-wise Fertilizer Requirements: ';
    loc.fertilizerRequirements.forEach((f, idx) => {
      fertText += `Stage ${idx + 1}: ${f.stage} - ${f.nutrient} (${f.dosage}). ${f.notes ? 'Notes: ' + f.notes + ' ' : ''}; `;
    });
    const sec6 = {
      title: 'Nutrient & Fertilizer Schedule',
      icon: '🧪',
      content: fertText,
    };
    sections.push(sec6);

    const sec7 = {
      title: 'Crop Duration',
      icon: '⏳',
      content: `Total crop duration: ${loc.cropDuration}.`,
    };
    sections.push(sec7);

    let pestText = 'Pest and Disease Prevention: ';
    loc.pestDiseasePrevention.forEach((p, idx) => {
      pestText += `${idx + 1}. Issue: ${p.problem}. Symptoms: ${p.symptoms}. Prevention: ${p.prevention} `;
    });
    const sec8 = {
      title: 'Pest & Disease Prevention',
      icon: '🛡️',
      content: pestText,
    };
    sections.push(sec8);

    const sec9 = {
      title: 'Harvesting Guidelines',
      icon: '🧺',
      content: `Harvesting practice: ${loc.harvest}`,
    };
    sections.push(sec9);

    const sec10 = {
      title: 'Market & Handling Precautions',
      icon: '📈',
      content: `Mandi marketing: ${loc.marketInfo}`,
    };
    sections.push(sec10);

    spokenScript = `Welcome farmer friends. Complete agricultural audio guide for ${crop.nameEn}. ` +
      sections.map((s) => `${s.title}: ${s.content}`).join(' ');
  }

  return {
    cropId: crop.id,
    cropName,
    language: lang,
    fullSpokenScript: spokenScript,
    structuredSections: sections,
  };
}
