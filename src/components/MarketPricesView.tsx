import React, { useState } from 'react';
import { TrendingUp, TrendingDown, Minus, RefreshCw, Volume2, VolumeX, Search, Mic, MapPin, Building2, Calendar, ShieldCheck, ArrowUpRight, ArrowDownRight, Info } from 'lucide-react';
import { FarmerLocation, LanguageCode, MarketPriceRecord } from '../types';
import { getT } from '../i18n/translations';
import { voiceService } from '../services/voiceService';
import { resolveCommodityVisual } from '../utils/productImages';

interface MarketPricesViewProps {
  prices: MarketPriceRecord[];
  location: FarmerLocation;
  currentLang: LanguageCode;
  isLoading: boolean;
  onRefresh: () => void;
  onChangeLocation: () => void;
  isGlobalSpeaking: boolean;
  onStopGlobalAudio: () => void;
  initialCommodity?: string;
}

export const MarketPricesView: React.FC<MarketPricesViewProps> = ({
  prices,
  location,
  currentLang,
  isLoading,
  onRefresh,
  onChangeLocation,
  isGlobalSpeaking,
  onStopGlobalAudio,
  initialCommodity,
}) => {
  const t = getT(currentLang);

  const [filterQuery, setFilterQuery] = useState<string>(initialCommodity || '');

  React.useEffect(() => {
    if (initialCommodity) {
      setFilterQuery(initialCommodity);
    }
  }, [initialCommodity]);
  const [speakingCardId, setSpeakingCardId] = useState<string | null>(null);
  const [isSpeakingAll, setIsSpeakingAll] = useState<boolean>(false);

  // Normalize query for Telugu / Kannada / Hindi aliases
  const normalizedQuery = filterQuery.toLowerCase().trim();

  const filteredPrices = prices.filter((p) => {
    if (!normalizedQuery) return true;
    const q = normalizedQuery;
    const cEn = p.commodity.toLowerCase();
    const cTe = (p.commodityLocal?.te || '').toLowerCase();
    const cKn = (p.commodityLocal?.kn || '').toLowerCase();
    const cHi = (p.commodityLocal?.hi || '').toLowerCase();
    const mName = p.marketName.toLowerCase();
    const variety = (p.variety || '').toLowerCase();

    // Check alias match for Onion / Tomato etc
    if ((q.includes('ఉల్లి') || q.includes('onion') || q.includes('ఈరుಳ್ಳಿ') || q.includes('प्याज')) && cEn.includes('onion')) return true;
    if ((q.includes('టమోటా') || q.includes('tomato') || q.includes('ಟೊಮೆಟೊ') || q.includes('टमाटर')) && cEn.includes('tomato')) return true;
    if ((q.includes('వేరుశనగ') || q.includes('groundnut') || q.includes('ಕಡಲೆಕಾಯಿ') || q.includes('मूंगफली')) && cEn.includes('groundnut')) return true;
    if ((q.includes('పత్తి') || q.includes('cotton') || q.includes('ಹತ್ತಿ') || q.includes('कपास')) && cEn.includes('cotton')) return true;
    if ((q.includes('మిరప') || q.includes('chilli') || q.includes('ಮೆಣಸಿನಕಾಯಿ') || q.includes('मिर्च')) && cEn.includes('chilli')) return true;
    if ((q.includes('వరి') || q.includes('paddy') || q.includes('ಭತ್ತ') || q.includes('धान')) && cEn.includes('paddy')) return true;
    if ((q.includes('శనగ') || q.includes('chana') || q.includes('ಕಡಲೆ') || q.includes('चना')) && (cEn.includes('gram') || cEn.includes('chana'))) return true;

    return (
      cEn.includes(q) ||
      cTe.includes(q) ||
      cKn.includes(q) ||
      cHi.includes(q) ||
      mName.includes(q) ||
      variety.includes(q)
    );
  });

  const getLocalizedCommodity = (record: MarketPriceRecord) => {
    if (currentLang === 'te' && record.commodityLocal?.te) return record.commodityLocal.te;
    if (currentLang === 'kn' && record.commodityLocal?.kn) return record.commodityLocal.kn;
    if (currentLang === 'hi' && record.commodityLocal?.hi) return record.commodityLocal.hi;
    return record.commodity;
  };

  const getLocalizedMarketName = (record: any) => {
    if (currentLang === 'te' && record.marketLocalName?.te) return record.marketLocalName.te;
    if (currentLang === 'kn' && record.marketLocalName?.kn) return record.marketLocalName.kn;
    if (currentLang === 'hi' && record.marketLocalName?.hi) return record.marketLocalName.hi;
    return record.marketName;
  };

  // Speak single card market price in chosen language
  const speakSingleRecord = (record: any) => {
    onStopGlobalAudio();
    const cName = getLocalizedCommodity(record);
    const mName = getLocalizedMarketName(record);
    const trendWord =
      record.priceTrend === 'higher'
        ? currentLang === 'te' ? 'పెరిగింది' : currentLang === 'kn' ? 'ಹೆಚ್ಚಾಗಿದೆ' : currentLang === 'hi' ? 'बढ़ा है' : 'increased'
        : record.priceTrend === 'lower'
        ? currentLang === 'te' ? 'తగ్గింది' : currentLang === 'kn' ? 'ಕಡಿಮೆಯಾಗಿದೆ' : currentLang === 'hi' ? 'घटा है' : 'decreased'
        : currentLang === 'te' ? 'స్థిరంగా ఉంది' : currentLang === 'kn' ? 'ಸ್ಥಿರವಾಗಿದೆ' : currentLang === 'hi' ? 'स्थिर है' : 'is stable';

    let text = '';
    if (currentLang === 'te') {
      text = `${mName} లో ${cName} క్వింటాల్ మోడల్ ధర రూ. ${record.modalPrice}. కనిష్ఠ ధర రూ. ${record.minPrice}, గరిష్ఠ ధర రూ. ${record.maxPrice}. మునుపటి ధరతో పోలిస్తే రూ. ${Math.abs(record.priceDifference)} ${trendWord}. తేది: ${record.priceDate}. ${record.isToday ? 'ఇది నేటి తాజా సమాచారం.' : 'ఇది అందుబాటులో ఉన్న తాజా రికార్డు.'}`;
    } else if (currentLang === 'kn') {
      text = `${mName} ಯಲ್ಲಿ ${cName} ಕ್ವಿಂಟಾಲ್‌ಗೆ ಮೋಡಲ್ ದರ ರೂ. ${record.modalPrice}. ಕನಿಷ್ಠ ದರ ರೂ. ${record.minPrice}, ಗರಿಷ್ಠ ದರ ರೂ. ${record.maxPrice}. ಇಂದಿನ ದರ ${trendWord}.`;
    } else if (currentLang === 'hi') {
      text = `${mName} में ${cName} का मॉडल भाव ₹${record.modalPrice} प्रति क्विंटल है। न्यूनतम ₹${record.minPrice} और अधिकतम ₹${record.maxPrice} है। भाव ${trendWord}।`;
    } else {
      text = `At ${record.marketName}, ${record.commodity} modal price is Rs ${record.modalPrice} per quintal. Min price is Rs ${record.minPrice}, max price is Rs ${record.maxPrice}. Trend is ${record.priceTrend}.`;
    }

    setSpeakingCardId(record.id);
    voiceService.speak(
      text,
      currentLang,
      () => setSpeakingCardId(record.id),
      () => setSpeakingCardId(null),
      () => setSpeakingCardId(null)
    );
  };

  const speakPricesSummary = () => {
    if (prices.length === 0) return;
    onStopGlobalAudio();

    let text = '';
    const locName = `${location.village ? location.village + ', ' : ''}${location.district}`;

    if (currentLang === 'te') {
      const topItems = filteredPrices.slice(0, 3).map((p) => {
        const cName = p.commodityLocal?.te || p.commodity;
        return `${p.marketName} లో ${cName} క్వింటాల్ మోడల్ ధర రూ. ${p.modalPrice}.`;
      }).join(' ');
      text = `${locName} సమీప మార్కెట్ ధరల సమాచారం. ${topItems} తాజా సమాచారం e-NAM పోర్టల్ ద్వారా పొందబడింది.`;
    } else if (currentLang === 'kn') {
      const topItems = filteredPrices.slice(0, 3).map((p) => {
        const cName = p.commodityLocal?.kn || p.commodity;
        return `${p.marketName} ಯಲ್ಲಿ ${cName} ಕ್ವಿಂಟಾಲ್‌ಗೆ ಮೋಡಲ್ ದರ ರೂ. ${p.modalPrice}.`;
      }).join(' ');
      text = `${locName} ಮಾರುಕಟ್ಟೆ ದರಗಳ ಮಾಹಿತಿ: ${topItems}`;
    } else if (currentLang === 'hi') {
      const topItems = filteredPrices.slice(0, 3).map((p) => {
        const cName = p.commodityLocal?.hi || p.commodity;
        return `${p.marketName} में ${cName} का मॉडल भाव ₹${p.modalPrice} प्रति क्विंटल है।`;
      }).join(' ');
      text = `${locName} के नजदीकी मंडी भाव: ${topItems}`;
    } else {
      const topItems = filteredPrices.slice(0, 3).map((p) => {
        return `At ${p.marketName}, ${p.commodity} modal price is Rs ${p.modalPrice} per quintal.`;
      }).join(' ');
      text = `Market price summary for ${locName}: ${topItems}`;
    }

    setIsSpeakingAll(true);
    voiceService.speak(
      text,
      currentLang,
      () => setIsSpeakingAll(true),
      () => setIsSpeakingAll(false),
      () => setIsSpeakingAll(false)
    );
  };

  const stopSpeaking = () => {
    voiceService.stopSpeaking();
    setSpeakingCardId(null);
    setIsSpeakingAll(false);
  };

  const handleVoiceFilter = () => {
    onStopGlobalAudio();
    voiceService.startListening(
      currentLang,
      (text) => {
        setFilterQuery(text);
      },
      () => {},
      () => {}
    );
  };

  return (
    <div id="market-prices-container" className="space-y-6 animate-fadeIn">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 text-white rounded-3xl p-5 sm:p-7 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="text-2xl sm:text-3xl">💰</span>
              <h2 className="text-xl sm:text-2xl font-bold">{t.marketPricesTitle}</h2>
            </div>
            <p className="text-xs sm:text-sm text-emerald-100 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              {currentLang === 'te' ? (
                <span>రైతు నివాసం: <strong className="text-white">{location.village ? location.village + ', ' : ''}{location.district} ({location.state})</strong></span>
              ) : currentLang === 'kn' ? (
                <span>ರೈತರ ಸ್ಥಳ: <strong className="text-white">{location.village ? location.village + ', ' : ''}{location.district} ({location.state})</strong></span>
              ) : currentLang === 'hi' ? (
                <span>किसान का स्थान: <strong className="text-white">{location.village ? location.village + ', ' : ''}{location.district} ({location.state})</strong></span>
              ) : (
                <span>Farmer Location: <strong className="text-white">{location.village ? location.village + ', ' : ''}{location.district} ({location.state})</strong></span>
              )}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {isSpeakingAll ? (
              <button
                id="btn-stop-market-audio"
                type="button"
                onClick={stopSpeaking}
                className="flex items-center space-x-1.5 bg-amber-400 hover:bg-amber-500 text-stone-900 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold animate-pulse shadow-md cursor-pointer"
              >
                <VolumeX className="w-4 h-4" />
                <span>{t.stopAudio}</span>
              </button>
            ) : (
              <button
                id="btn-speak-market-prices"
                type="button"
                onClick={speakPricesSummary}
                className="flex items-center space-x-1.5 bg-amber-400 hover:bg-amber-300 text-emerald-950 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold shadow-md active:scale-95 transition-all cursor-pointer"
              >
                <Volume2 className="w-4 h-4" />
                <span>🔊 {t.listenMarketPrices}</span>
              </button>
            )}

            <button
              id="btn-change-loc-market"
              type="button"
              onClick={onChangeLocation}
              className="flex items-center space-x-1.5 bg-white/20 hover:bg-white/30 text-white px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium border border-white/20 transition-colors cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-300" />
              <span>{t.changeLocation}</span>
            </button>

            <button
              id="btn-refresh-market-rates"
              type="button"
              onClick={onRefresh}
              disabled={isLoading}
              className="p-2 bg-white/20 hover:bg-white/30 rounded-xl text-white transition-colors cursor-pointer"
              title="Refresh Mandi Rates"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
            </button>
          </div>

        </div>

        {/* Commodity Filter Bar */}
        <div className="mt-5 pt-4 border-t border-emerald-700/60 flex items-center space-x-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-emerald-300 absolute left-3.5 top-3" />
            <input
              id="input-filter-commodity"
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder={
                currentLang === 'te'
                  ? 'పంట లేదా మార్కెట్ పేరును శోధించండి (ఉదా: ఉల్లి, టమోటా, వేరుశనగ, పత్తి)...'
                  : currentLang === 'kn'
                  ? 'ಬೆಳೆ ಅಥವಾ ಮಾರುಕಟ್ಟೆ ಹುಡುಕಿ (ಉದಾ: ಈರುಳ್ಳಿ, ಟೊಮೆಟೊ, ಕಡಲೆಕಾಯಿ)...'
                  : currentLang === 'hi'
                  ? 'फसल या मंडी खोजें (उदा: प्याज, टमाटर, मूंगफली, कपास)...'
                  : 'Search crop or mandi (e.g., Onion, Tomato, Groundnut, Cotton)...'
              }
              className="w-full bg-emerald-900/80 border border-emerald-600/70 rounded-xl pl-9 pr-3 py-2 text-white placeholder-emerald-300/70 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>
          <button
            id="btn-voice-filter-mandi"
            type="button"
            onClick={handleVoiceFilter}
            className="p-2.5 bg-amber-400 hover:bg-amber-300 text-emerald-950 rounded-xl font-bold transition-transform active:scale-95 cursor-pointer shadow"
            title="Speak commodity name"
          >
            <Mic className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Info Notice on Nearby APMC matching */}
      <div className="bg-amber-50 border border-amber-200/80 rounded-2xl p-3.5 flex items-start gap-2.5 text-xs text-amber-900">
        <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <div>
          {currentLang === 'te' ? (
            <p>
              <strong>గమనిక:</strong> గ్రామంలో సొంతంగా ఏపీఎంసీ మార్కెట్ యార్డ్ ఉండకపోవచ్చు. అందువల్ల మీ <strong>{location.village || 'గ్రామం'} ({location.district})</strong> చుట్టుపక్కల ఉన్న సమీప అధికారిక ఏపీఎంసీ మార్కెట్ల (ధర్మవరం, కదిరి, పెనుకొండ, హిందూపురం) తాజా e-NAM ధరలను ఇక్కడ చూపిస్తున్నాము.
            </p>
          ) : currentLang === 'kn' ? (
            <p>
              <strong>ಸೂಚನೆ:</strong> ಹಳ್ಳಿಗಳಲ್ಲಿ ಸ್ವಂತ ಎಪಿಎಂಸಿ ಇರದಿರಬಹುದು. ಆದ್ದರಿಂದ ನಿಮ್ಮ <strong>{location.village || 'ಗ್ರಾಮ'} ({location.district})</strong> ಸಮೀಪದ ಅಧಿಕೃತ ಎಪಿಎಂಸಿ ಮಾರುಕಟ್ಟೆಗಳ ದರಗಳನ್ನು ಇಲ್ಲಿ ಒದಗಿಸಲಾಗಿದೆ.
            </p>
          ) : currentLang === 'hi' ? (
            <p>
              <strong>सूचना:</strong> गाँव में स्वयं एपीएमसी मंडी नहीं हो सकती। इसलिए आपके <strong>{location.village || 'गाँव'} ({location.district})</strong> के निकटतम आधिकारिक मंडियों के e-NAM भाव दिखाए जा रहे हैं।
            </p>
          ) : (
            <p>
              <strong>Notice:</strong> Individual villages may not have their own APMC. Showing verified rates from nearest regional APMC market committees around <strong>{location.village || 'Village'}, {location.district}</strong>.
            </p>
          )}
        </div>
      </div>

      {/* Market Rate Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredPrices.map((record: any) => {
          const isHigher = record.priceTrend === 'higher';
          const isLower = record.priceTrend === 'lower';
          const isThisSpeaking = speakingCardId === record.id;
          const visual = resolveCommodityVisual(record.commodity);

          return (
            <div
              key={record.id}
              className="bg-white rounded-3xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between"
            >
              {/* Card Top Banner with Commodity Image */}
              <div className="relative h-28 bg-stone-900 overflow-hidden">
                <img
                  src={visual.imageUrl}
                  alt={visual.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-0.5 rounded-full text-[11px] font-bold text-stone-900 flex items-center gap-1 shadow-xs">
                  <span>{visual.icon}</span>
                  <span>{visual.category}</span>
                </div>

                {/* Individual Card Voice Button */}
                <button
                  type="button"
                  onClick={() => (isThisSpeaking ? stopSpeaking() : speakSingleRecord(record))}
                  className={`absolute top-3 right-3 p-2 rounded-xl transition-all cursor-pointer shadow-md ${
                    isThisSpeaking
                      ? 'bg-amber-400 text-stone-900 animate-pulse ring-2 ring-white'
                      : 'bg-white/90 hover:bg-amber-400 text-stone-800 hover:text-stone-950'
                  }`}
                  title="Listen to this market price"
                >
                  {isThisSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>

                <div className="absolute bottom-2.5 left-3.5 right-3.5 flex items-end justify-between">
                  <h3 className="text-lg font-extrabold text-white flex items-center gap-1.5 drop-shadow-sm">
                    <span>{getLocalizedCommodity(record)}</span>
                  </h3>
                  <span className="text-[11px] font-semibold text-amber-300 drop-shadow-sm">
                    {record.district}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-5 space-y-3">
                
                <div className="flex items-start justify-between gap-2">
                  <p className="text-xs text-stone-600">
                    {currentLang === 'te' ? 'రకం / వెరైటీ: ' : currentLang === 'kn' ? 'ತಳಿ: ' : currentLang === 'hi' ? 'किस्म: ' : 'Variety: '}
                    <span className="font-semibold text-stone-800">{record.variety || 'Standard FAQ'}</span>
                  </p>
                </div>

                {/* Trend Indicator Pill */}
                <div className="flex items-center justify-between">
                  <div
                    className={`inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-bold ${
                      isHigher
                        ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                        : isLower
                        ? 'bg-red-100 text-red-900 border border-red-300'
                        : 'bg-stone-100 text-stone-800 border border-stone-300'
                    }`}
                  >
                    {isHigher ? (
                      <>
                        <ArrowUpRight className="w-3.5 h-3.5 text-emerald-700" />
                        <span>+{record.priceDifference} {currentLang === 'te' ? 'పెరిగింది' : currentLang === 'kn' ? 'ಹೆಚ್ಚಾಗಿದೆ' : currentLang === 'hi' ? 'बढ़ा' : 'Higher'}</span>
                      </>
                    ) : isLower ? (
                      <>
                        <ArrowDownRight className="w-3.5 h-3.5 text-red-700" />
                        <span>{record.priceDifference} {currentLang === 'te' ? 'తగ్గింది' : currentLang === 'kn' ? 'ಕಡಿಮೆ' : currentLang === 'hi' ? 'कम' : 'Lower'}</span>
                      </>
                    ) : (
                      <>
                        <Minus className="w-3.5 h-3.5 text-stone-500" />
                        <span>{currentLang === 'te' ? 'స్థిరంగా ఉంది' : currentLang === 'kn' ? 'ಸ್ಥಿರ' : currentLang === 'hi' ? 'स्थिर' : 'Stable'}</span>
                      </>
                    )}
                  </div>

                  {record.arrivalQuantity && (
                    <span className="text-[11px] text-stone-500 font-medium">
                      📦 {record.arrivalQuantity}
                    </span>
                  )}
                </div>

                {/* Price Matrix */}
                <div className="bg-stone-50 rounded-2xl p-4 border border-stone-100 space-y-2">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs font-semibold text-stone-600">{t.modalPrice}:</span>
                    <div className="flex items-baseline space-x-1">
                      <span className="text-2xl sm:text-3xl font-extrabold text-emerald-900">
                        ₹{record.modalPrice.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs font-semibold text-stone-500">/ Quintal</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-stone-200 text-xs">
                    <div>
                      <span className="text-stone-500 block text-[10px]">{t.minPrice}</span>
                      <span className="font-bold text-stone-800">₹{record.minPrice.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-stone-500 block text-[10px]">{t.maxPrice}</span>
                      <span className="font-bold text-stone-800">₹{record.maxPrice.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>

                {/* Mandi Yard & Distance */}
                <div className="space-y-1 text-xs text-stone-600">
                  <p className="flex items-center gap-1 font-semibold text-stone-900">
                    <Building2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    {getLocalizedMarketName(record)}
                  </p>
                  {record.distanceKm && (
                    <p className="text-[11px] text-emerald-800 font-medium pl-4.5">
                      📍 ~{record.distanceKm} km {currentLang === 'te' ? 'మీ గ్రామం నుండి' : currentLang === 'kn' ? 'ನಿಮ್ಮ ಗ್ರಾಮದಿಂದ' : currentLang === 'hi' ? 'आपके गाँव से' : 'from your village'}
                    </p>
                  )}
                </div>

              </div>

              {/* Card Footer with Verified Source & Date */}
              <div className="bg-stone-50/90 border-t border-stone-200 px-5 py-3 text-[11px] text-stone-500 flex items-center justify-between">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-stone-400" />
                  {currentLang === 'te' ? 'తేది: ' : currentLang === 'kn' ? 'ದಿನಾಂಕ: ' : currentLang === 'hi' ? 'दिनांक: ' : 'Date: '}
                  {record.priceDate}
                </span>
                <span className="truncate max-w-[150px] text-emerald-800 font-medium" title={record.source}>
                  ✓ {record.source}
                </span>
              </div>

            </div>
          );
        })}
      </div>

      {filteredPrices.length === 0 && (
        <div className="bg-white rounded-3xl p-8 text-center border border-stone-200 space-y-3">
          <span className="text-3xl">🌾</span>
          <h3 className="text-base font-bold text-stone-800">
            {currentLang === 'te'
              ? `"${filterQuery}" కోసం మార్కెట్ ధరలు కనుగొనబడలేదు`
              : `No market prices found for "${filterQuery}"`}
          </h3>
          <p className="text-xs text-stone-500">
            {currentLang === 'te'
              ? 'ఉల్లి, టమోటా, వేరుశనగ, పత్తి లేదా మిరప అని శోధించండి.'
              : 'Try searching for Onion, Tomato, Groundnut, Cotton, Chilli or Maize.'}
          </p>
          <button
            type="button"
            onClick={() => setFilterQuery('')}
            className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors cursor-pointer"
          >
            {currentLang === 'te' ? 'అన్ని పంటలను చూపించు' : 'Show All Crops'}
          </button>
        </div>
      )}

      {/* Comparison & Informational Disclaimer */}
      <div className="text-center text-stone-400 text-[11px] pt-2">
        {currentLang === 'te' ? (
          <p>ధర పోలిక మరియు హెచ్చుతగ్గుల వివరాలు రైతు సమాచార అవగాహన కోసం మాత్రమే. ఖచ్చితమైన విక్రయ ధరల కోసం స్థానిక మార్కెట్ యార్డును సంప్రదించండి.</p>
        ) : currentLang === 'kn' ? (
          <p>ದರ ಹೋಲಿಕೆ ಮಾಹಿತಿಯು ರೈತರ ಜಾಗೃತಿಗಾಗಿ ಮಾತ್ರ. ನಿಖರ ಮಾರಾಟ ದರಗಳಿಗಾಗಿ ಸ್ಥಳೀಯ ಮಾರುಕಟ್ಟೆಯನ್ನು ಸಂಪರ್ಕಿಸಿ.</p>
        ) : currentLang === 'hi' ? (
          <p>भाव तुलना और उतार-चढ़ाव की जानकारी केवल किसान जागरूकता के लिए है। सटीक विक्रय भाव हेतु स्थानीय मंडी से संपर्क करें।</p>
        ) : (
          <p>Price trend comparisons are for informational guidance. Consult your local APMC market yard for official daily auction transactions.</p>
        )}
      </div>

    </div>
  );
};
