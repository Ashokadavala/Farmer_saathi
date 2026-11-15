import React, { createContext, useContext, useState } from 'react';
import { LanguageCode } from '../types';
import { getT, TranslationKeys } from '../i18n/translations';

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: TranslationKeys;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{
  children: React.ReactNode;
  initialLanguage?: LanguageCode;
  onLanguageChange?: (lang: LanguageCode) => void;
}> = ({ children, initialLanguage = 'te', onLanguageChange }) => {
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    const saved = localStorage.getItem('farmer_saathi_lang') as LanguageCode;
    return saved || initialLanguage;
  });

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('farmer_saathi_lang', lang);
    } catch (e) {
      // safe fallback
    }
    if (onLanguageChange) {
      onLanguageChange(lang);
    }
  };

  const t = getT(language);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
