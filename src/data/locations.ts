export interface DistrictInfo {
  name: string;
  lat: number;
  lon: number;
  popularVillages: string[];
}

export interface StateInfo {
  name: string;
  code: string;
  districts: DistrictInfo[];
}

export const INDIAN_STATES: StateInfo[] = [
  {
    name: 'Andhra Pradesh',
    code: 'AP',
    districts: [
      {
        name: 'Sri Sathya Sai',
        lat: 14.1673,
        lon: 77.8119,
        popularVillages: ['Gotluru', 'Puttaparthi', 'Dharmavaram', 'Kadiri', 'Penukonda', 'Gorantla', 'Madakasira', 'Bukkapatnam', 'Hindupur', 'Somandepalle'],
      },
      {
        name: 'Anantapur',
        lat: 14.6819,
        lon: 77.6006,
        popularVillages: ['Tadipatri', 'Gooty', 'Pamidi', 'Guntakal', 'Uravakonda', 'Singanamala', 'Bukkarayasamudram', 'Atmakur', 'Kalyandurg'],
      },
      {
        name: 'YSR Kadapa',
        lat: 14.4673,
        lon: 78.8242,
        popularVillages: ['Pulivendula', 'Proddatur', 'Jammalamadugu', 'Mydukur', 'Rayachoti', 'Badvel', 'Kamalapuram', 'Vontimitta', 'Vempalli'],
      },
      {
        name: 'Chittoor',
        lat: 13.2172,
        lon: 79.1003,
        popularVillages: ['Palamaner', 'Kuppam', 'Nagari', 'Punganur', 'Bangarupalem', 'GD Nellore', 'Chittoor Rural', 'Yadamari'],
      },
      {
        name: 'Tirupati',
        lat: 13.6288,
        lon: 79.4192,
        popularVillages: ['Chandragiri', 'Srikalahasti', 'Venkatagiri', 'Gudur', 'Sullurpeta', 'Naidupeta', 'Renigunta', 'Pakala', 'Yerpedu'],
      },
      {
        name: 'Kurnool',
        lat: 15.8281,
        lon: 78.0373,
        popularVillages: ['Adoni', 'Yemmiganur', 'Alur', 'Pattikonda', 'Kodumur', 'Gonegandla', 'Devanakonda', 'Mantralayam'],
      },
      {
        name: 'Nandyal',
        lat: 15.4886,
        lon: 78.4836,
        popularVillages: ['Allagadda', 'Banaganapalle', 'Dhone', 'Nandikotkur', 'Srisailam', 'Koilkuntla', 'Atmakur', 'Panyam', 'Gospadu'],
      },
      {
        name: 'SPSR Nellore',
        lat: 14.4426,
        lon: 79.9865,
        popularVillages: ['Kavali', 'Atmakur', 'Kovur', 'Buchireddipalem', 'Indukurpet', 'Podalakur', 'Vinjamur', 'Udayagiri', 'Muthukur'],
      },
      {
        name: 'Prakasam',
        lat: 15.5057,
        lon: 80.0499,
        popularVillages: ['Ongole Rural', 'Markapur', 'Giddalur', 'Kanigiri', 'Yerragondapalem', 'Darsi', 'Podili', 'Kandukur', 'Chimakkurthi'],
      },
      {
        name: 'Bapatla',
        lat: 15.9044,
        lon: 80.4674,
        popularVillages: ['Chirala', 'Vemuru', 'Repalle', 'Parchur', 'Addanki', 'Karamchedu', 'Karlapalem', 'Nizampatnam'],
      },
      {
        name: 'Guntur',
        lat: 16.3067,
        lon: 80.4365,
        popularVillages: ['Tenali', 'Mangalagiri', 'Tadikonda', 'Ponnur', 'Prathipadu', 'Chebrolu', 'Kollipara', 'Duggirala', 'Vatticherukuru'],
      },
      {
        name: 'Palnadu',
        lat: 16.2361,
        lon: 79.9862,
        popularVillages: ['Narasaraopet', 'Sattenapalle', 'Chilakaluripet', 'Vinukonda', 'Gurazala', 'Macherla', 'Piduguralla', 'Krosuru'],
      },
      {
        name: 'Krishna',
        lat: 16.1875,
        lon: 81.1389,
        popularVillages: ['Machilipatnam Rural', 'Gudivada', 'Pedana', 'Gannavaram', 'Avanigadda', 'Pamarru', 'Penamaluru', 'Muvva'],
      },
      {
        name: 'NTR',
        lat: 16.5062,
        lon: 80.6480,
        popularVillages: ['Vijayawada Rural', 'Nuzvid', 'Tiruvuru', 'Jaggayyapeta', 'Nandigama', 'Mylavaram', 'Ibrahimpatnam', 'G Konduru'],
      },
      {
        name: 'West Godavari',
        lat: 16.5449,
        lon: 81.5212,
        popularVillages: ['Bhimavaram', 'Narasapuram', 'Tanuku', 'Palakollu', 'Tadepalligudem', 'Achanta', 'Akividu', 'Undi'],
      },
      {
        name: 'Eluru',
        lat: 16.7107,
        lon: 81.0952,
        popularVillages: ['Jangareddygudem', 'Denduluru', 'Chintalapudi', 'Unguturu', 'Polavaram', 'Kaikalur', 'Mandavalli', 'Bhimadole'],
      },
      {
        name: 'East Godavari',
        lat: 17.0005,
        lon: 81.8040,
        popularVillages: ['Rajahmundry Rural', 'Kovvur', 'Nidadavole', 'Anaparthi', 'Gopalapuram', 'Rajanagaram', 'Korukonda'],
      },
      {
        name: 'Kakinada',
        lat: 16.9891,
        lon: 82.2475,
        popularVillages: ['Peddapuram', 'Samalkota', 'Pithapuram', 'Tuni', 'Prathipadu', 'Kajuluru', 'Karapa', 'Gollaprolu'],
      },
      {
        name: 'Dr. B.R. Ambedkar Konaseema',
        lat: 16.5746,
        lon: 82.0039,
        popularVillages: ['Amalapuram', 'Razole', 'Kothapeta', 'Mandapeta', 'Mummidivaram', 'P.Gannavaram', 'Ravulapalem', 'Ainavilli'],
      },
      {
        name: 'Visakhapatnam',
        lat: 17.6868,
        lon: 83.2185,
        popularVillages: ['Bheemunipatnam', 'Gajuwaka Rural', 'Anandapuram', 'Padmanabham', 'Pendurthi', 'Pendurthi Rural'],
      },
      {
        name: 'Anakapalli',
        lat: 17.6896,
        lon: 83.0033,
        popularVillages: ['Chodavaram', 'Madugula', 'Yelamanchili', 'Payakaraopeta', 'Narsipatnam', 'Kasimkota', 'Munagapaka'],
      },
      {
        name: 'Vizianagaram',
        lat: 18.1067,
        lon: 83.3956,
        popularVillages: ['Bobbili', 'Cheepurupalle', 'Gajapathinagaram', 'Nellimarla', 'Srungavarapukota', 'Bhogapuram', 'Denkada'],
      },
      {
        name: 'Parvathipuram Manyam',
        lat: 18.7796,
        lon: 83.4276,
        popularVillages: ['Salur', 'Palakonda', 'Kurupam', 'Gummalakshmipuram', 'Komarada', 'Balijipeta', 'Jiyyammavalasa'],
      },
      {
        name: 'Srikakulam',
        lat: 18.2949,
        lon: 83.8938,
        popularVillages: ['Amadalavalasa', 'Ichchapuram', 'Palasa', 'Tekkali', 'Narasannapeta', 'Ranastalam', 'Etcherla', 'Sompeta'],
      },
      {
        name: 'Alluri Sitharama Raju',
        lat: 18.0694,
        lon: 82.5361,
        popularVillages: ['Paderu', 'Araku Valley', 'Rampachodavaram', 'Chintapalle', 'Addateegala', 'Maredumilli', 'Ananthagiri'],
      },
    ],
  },
  {
    name: 'Karnataka',
    code: 'KA',
    districts: [
      {
        name: 'Bangalore Urban',
        lat: 12.9716,
        lon: 77.5946,
        popularVillages: ['Anekal', 'Sarjapur', 'Hesaraghatta', 'Yelahanka Rural', 'Kengeri Rural', 'Attibele', 'Jigani'],
      },
      {
        name: 'Bangalore Rural',
        lat: 13.2847,
        lon: 77.5541,
        popularVillages: ['Doddaballapur', 'Devanahalli', 'Nelamangala', 'Hosakote', 'Sulibele', 'Tubagere', 'Sasalu'],
      },
      {
        name: 'Belagavi',
        lat: 15.8497,
        lon: 74.4977,
        popularVillages: ['Gokak', 'Chikkodi', 'Bailhongal', 'Athani', 'Saundatti', 'Hukkeri', 'Ramdurg', 'Khanapur'],
      },
      {
        name: 'Ballari',
        lat: 15.1394,
        lon: 76.9214,
        popularVillages: ['Siruguppa', 'Sandur', 'Kampli', 'Kurugodu', 'Tekkalakote', 'Kudatini'],
      },
      {
        name: 'Mysuru',
        lat: 12.2958,
        lon: 76.6394,
        popularVillages: ['Nanjangud', 'Hunsur', 'T.Narasipura', 'Periyapatna', 'K.R.Nagar', 'Heggadadevankote', 'Bannur'],
      },
      {
        name: 'Tumakuru',
        lat: 13.3392,
        lon: 77.1017,
        popularVillages: ['Tiptur', 'Kunigal', 'Sira', 'Madhugiri', 'Gubbi', 'Turuvekere', 'Chikkanayakanahalli', 'Pavagada'],
      },
      {
        name: 'Kolar',
        lat: 13.1367,
        lon: 78.1291,
        popularVillages: ['Bangarapet', 'Malur', 'Mulbagal', 'Srinivaspur', 'Robertsonpet', 'Kolar Gold Fields Rural'],
      },
      {
        name: 'Mandya',
        lat: 12.5218,
        lon: 76.8951,
        popularVillages: ['Maddur', 'Malavalli', 'Pandavapura', 'Nagamangala', 'Krishnarajpet', 'Srirangapatna'],
      },
      {
        name: 'Shivamogga',
        lat: 13.9299,
        lon: 75.5681,
        popularVillages: ['Bhadravathi', 'Sagara', 'Shikaripura', 'Soraba', 'Thirthahalli', 'Hosanagara'],
      },
      {
        name: 'Davanagere',
        lat: 14.4644,
        lon: 75.9218,
        popularVillages: ['Harihara', 'Channagiri', 'Honnali', 'Jagalur', 'Nyamathi'],
      },
      {
        name: 'Kalaburagi',
        lat: 17.3297,
        lon: 76.8343,
        popularVillages: ['Sedam', 'Aland', 'Chittapur', 'Afzalpur', 'Chincholi', 'Jevargi'],
      },
      {
        name: 'Dharwad',
        lat: 15.4589,
        lon: 75.0078,
        popularVillages: ['Hubballi Rural', 'Navalgund', 'Kundgol', 'Kalghatgi', 'Alnavar'],
      },
    ],
  },
  {
    name: 'Telangana',
    code: 'TS',
    districts: [
      {
        name: 'Rangareddy',
        lat: 17.2403,
        lon: 78.4294,
        popularVillages: ['Chevella', 'Shadnagar', 'Ibrahimpatnam', 'Rajendranagar Rural', 'Maheshwaram'],
      },
      {
        name: 'Nalgonda',
        lat: 17.0575,
        lon: 79.2684,
        popularVillages: ['Miryalaguda', 'Devarakonda', 'Nagarjuna Sagar', 'Nakrekal', 'Haliya'],
      },
      {
        name: 'Khammam',
        lat: 17.2473,
        lon: 80.1514,
        popularVillages: ['Madhira', 'Sathupalli', 'Wyra', 'Kalluru', 'Enkoor'],
      },
      {
        name: 'Warangal',
        lat: 17.9689,
        lon: 79.5941,
        popularVillages: ['Narsampet', 'Wardhannapet', 'Geesugonda', 'Parkal', 'Rayaparthy'],
      },
      {
        name: 'Karimnagar',
        lat: 18.4386,
        lon: 79.1288,
        popularVillages: ['Huzurabad', 'Jammikunta', 'Choppadandi', 'Manakondur', 'Thimmapur'],
      },
      {
        name: 'Mahabubnagar',
        lat: 16.7488,
        lon: 77.9856,
        popularVillages: ['Jadcherla', 'Balanagar', 'Bhoothpur', 'Devarkadra', 'Nawabpet'],
      },
      {
        name: 'Nizamabad',
        lat: 18.6725,
        lon: 78.0941,
        popularVillages: ['Armoor', 'Bodhan', 'Bheemgal', 'Dichpally', 'Kotgiri'],
      },
    ],
  },
  {
    name: 'Uttar Pradesh',
    code: 'UP',
    districts: [
      {
        name: 'Varanasi',
        lat: 25.3176,
        lon: 82.9739,
        popularVillages: ['Pindra', 'Raja Talab', 'Cholapur', 'Araziline', 'Kashi Vidyapeeth', 'Badagaon', 'Sewapuri'],
      },
      {
        name: 'Prayagraj',
        lat: 25.4358,
        lon: 81.8463,
        popularVillages: ['Phulpur', 'Koraon', 'Handia', 'Soraon', 'Meja', 'Bara', 'Karchhana'],
      },
      {
        name: 'Lucknow',
        lat: 26.8467,
        lon: 80.9462,
        popularVillages: ['Malihabad', 'Bakshi Ka Talab', 'Mohanlalganj', 'Sarojininagar Rural', 'Kakori'],
      },
      {
        name: 'Gorakhpur',
        lat: 26.7606,
        lon: 83.3732,
        popularVillages: ['Sahjanwa', 'Campierganj', 'Bansgaon', 'Chauri Chaura', 'Khajni', 'Pipraich'],
      },
      {
        name: 'Kanpur Nagar',
        lat: 26.4499,
        lon: 80.3319,
        popularVillages: ['Bilhaur', 'Ghatampur', 'Kalyanpur Rural', 'Sarsaul', 'Bidhnu', 'Choubepur'],
      },
      {
        name: 'Agra',
        lat: 27.1767,
        lon: 78.0081,
        popularVillages: ['Fatehabad', 'Bah', 'Kheragarh', 'Etmadpur', 'Kiraoli', 'Achhnera'],
      },
      {
        name: 'Meerut',
        lat: 28.9845,
        lon: 77.7064,
        popularVillages: ['Mawana', 'Sardhana', 'Hastinapur', 'Daurala', 'Janichest', 'Parikshitgarh'],
      },
    ],
  },
  {
    name: 'Maharashtra',
    code: 'MH',
    districts: [
      {
        name: 'Pune',
        lat: 18.5204,
        lon: 73.8567,
        popularVillages: ['Baramati', 'Junnar', 'Shirur', 'Khed', 'Indapur', 'Daund', 'Haveli Rural', 'Ambegaon'],
      },
      {
        name: 'Nashik',
        lat: 19.9975,
        lon: 73.7898,
        popularVillages: ['Niphad', 'Dindori', 'Sinnar', 'Yeola', 'Malegaon', 'Kalwan', 'Chandwad', 'Satana'],
      },
      {
        name: 'Nagpur',
        lat: 21.1458,
        lon: 79.0882,
        popularVillages: ['Katol', 'Umred', 'Saoner', 'Ramtek', 'Narkhed', 'Kamthi Rural', 'Hingna'],
      },
      {
        name: 'Solapur',
        lat: 17.6599,
        lon: 75.9064,
        popularVillages: ['Pandharpur', 'Barshi', 'Akkalkot', 'Karmala', 'Sangola', 'Madha', 'Malshiras'],
      },
      {
        name: 'Kolhapur',
        lat: 16.7050,
        lon: 74.2433,
        popularVillages: ['Karveer Rural', 'Hatkangale', 'Shirol', 'Kagal', 'Radhanagari', 'Bhudargad', 'Gadhinglaj'],
      },
    ],
  },
  {
    name: 'Tamil Nadu',
    code: 'TN',
    districts: [
      {
        name: 'Coimbatore',
        lat: 11.0168,
        lon: 76.9558,
        popularVillages: ['Pollachi', 'Mettupalayam', 'Sulur', 'Annur', 'Kinathukadavu', 'Thondamuthur'],
      },
      {
        name: 'Madurai',
        lat: 9.9252,
        lon: 78.1198,
        popularVillages: ['Melur', 'Usilampatti', 'Thirumangalam', 'Vadipatti', 'Sholavandan', 'Peraiyur'],
      },
      {
        name: 'Thanjavur',
        lat: 10.7870,
        lon: 79.1378,
        popularVillages: ['Kumbakonam', 'Papanasam', 'Pattukkottai', 'Orathanadu', 'Thiruvaiyaru', 'Peravurani'],
      },
      {
        name: 'Salem',
        lat: 11.6643,
        lon: 78.1460,
        popularVillages: ['Attur', 'Mettur', 'Omalur', 'Edappadi', 'Sankari', 'Valapady'],
      },
    ],
  },
  {
    name: 'Bihar',
    code: 'BR',
    districts: [
      {
        name: 'Patna',
        lat: 25.5941,
        lon: 85.1376,
        popularVillages: ['Barh', 'Mokama', 'Danapur Rural', 'Fatuha', 'Bikram', 'Masaurhi', 'Paliganj'],
      },
      {
        name: 'Muzaffarpur',
        lat: 26.1209,
        lon: 85.3647,
        popularVillages: ['Kanti', 'Motipur', 'Sahebganj', 'Paroo', 'Saraiya', 'Minapur', 'Bochaha'],
      },
      {
        name: 'Gaya',
        lat: 24.7914,
        lon: 85.0002,
        popularVillages: ['Bodh Gaya Rural', 'Tekari', 'Sherghati', 'Manpur', 'Wazirganj', 'Belaganj'],
      },
    ],
  },
  {
    name: 'Punjab',
    code: 'PB',
    districts: [
      {
        name: 'Ludhiana',
        lat: 30.9010,
        lon: 75.8573,
        popularVillages: ['Jagraon', 'Samrala', 'Khanna', 'Payal', 'Raikot', 'Dehlon', 'Mullanpur'],
      },
      {
        name: 'Amritsar',
        lat: 31.6340,
        lon: 74.8723,
        popularVillages: ['Ajnala', 'Baba Bakala', 'Majitha', 'Attari', 'Jandiala Guru', 'Rayya'],
      },
      {
        name: 'Bathinda',
        lat: 30.2110,
        lon: 74.9455,
        popularVillages: ['Rampura Phul', 'Talwandi Sabo', 'Maur', 'Bhucho Mandi', 'Goniana'],
      },
    ],
  },
];

/**
 * Intelligent parser that converts spoken or typed location text into matching State, District, Village
 * Handles Telugu, Kannada, Hindi and English spoken forms:
 * e.g. "Sri Sathya Sai district", "శ్రీ సత్యసాయి జిల్లా", "Gotluru village", "గొట్లూరు", "Anantapur", "Varanasi"
 */
export function resolveLocationFromText(query: string): {
  state?: string;
  district?: string;
  village?: string;
  lat?: number;
  lon?: number;
  matched: boolean;
} {
  const clean = query.toLowerCase().trim()
    .replace(/district|dist|zila|జిల్లా|ಜಿಲ್ಲೆ|ज़िला|village|gramam|ಹಳ್ಳಿ|ಗ್ರಾಮ|గ్రామం|गाँव|गांव/gi, '')
    .trim();

  if (!clean) {
    return { matched: false };
  }

  // 1. Direct District search
  for (const state of INDIAN_STATES) {
    for (const dist of state.districts) {
      const distNameClean = dist.name.toLowerCase();
      // Match exact, partial, or alias (e.g. Sathya Sai, Puttaparthi)
      if (
        distNameClean.includes(clean) ||
        clean.includes(distNameClean) ||
        (distNameClean.includes('sri sathya sai') && (clean.includes('sathya sai') || clean.includes('satya sai') || clean.includes('సత్యసాయి') || clean.includes('ಸತ್ಯ ಸಾಯಿ') || clean.includes('सत्य साई'))) ||
        (distNameClean.includes('kadapa') && (clean.includes('ysr') || clean.includes('కడప') || clean.includes('ಕಡಪ') || clean.includes('कडपा'))) ||
        (distNameClean.includes('anantapur') && (clean.includes('అనంతపురం') || clean.includes('ಅನಂತಪುರ') || clean.includes('अनंतपुर')))
      ) {
        return {
          state: state.name,
          district: dist.name,
          village: dist.popularVillages[0] || 'Main',
          lat: dist.lat,
          lon: dist.lon,
          matched: true,
        };
      }

      // Check villages
      for (const vil of dist.popularVillages) {
        const vilNameClean = vil.toLowerCase();
        if (
          vilNameClean.includes(clean) ||
          clean.includes(vilNameClean) ||
          (vilNameClean === 'gotluru' && (clean.includes('గొట్లూరు') || clean.includes('ಗೊಟ್ಲೂರು') || clean.includes('गोतलूरु') || clean.includes('gotlur') || clean.includes('gothluru')))
        ) {
          return {
            state: state.name,
            district: dist.name,
            village: vil,
            lat: dist.lat,
            lon: dist.lon,
            matched: true,
          };
        }
      }
    }
  }

  // 2. State search
  for (const state of INDIAN_STATES) {
    if (state.name.toLowerCase().includes(clean) || clean.includes(state.name.toLowerCase())) {
      const firstDist = state.districts[0];
      return {
        state: state.name,
        district: firstDist.name,
        village: firstDist.popularVillages[0] || 'Main',
        lat: firstDist.lat,
        lon: firstDist.lon,
        matched: true,
      };
    }
  }

  return { matched: false };
}

export function getDistrictCoords(stateName: string, districtName: string): { lat: number; lon: number } {
  const state = INDIAN_STATES.find(s => s.name.toLowerCase() === stateName.toLowerCase());
  if (state) {
    const dist = state.districts.find(d => d.name.toLowerCase() === districtName.toLowerCase());
    if (dist) return { lat: dist.lat, lon: dist.lon };
    if (state.districts[0]) return { lat: state.districts[0].lat, lon: state.districts[0].lon };
  }
  // Default to Sri Sathya Sai, AP
  return { lat: 14.1673, lon: 77.8119 };
}
