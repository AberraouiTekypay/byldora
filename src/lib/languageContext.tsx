'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, TRANSLATIONS, TranslationDictionary } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationDictionary;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'fr',
  setLanguage: () => {},
  t: TRANSLATIONS.fr,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('fr');

  useEffect(() => {
    try {
      // Check URL search param first
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get('lang') as Language;
      if (urlLang === 'fr' || urlLang === 'en' || urlLang === 'ar') {
        setLanguageState(urlLang);
        localStorage.setItem('byldora_lang', urlLang);
        applyDocumentAttrs(urlLang);
        return;
      }

      // Check localStorage
      const savedLang = localStorage.getItem('byldora_lang') as Language;
      if (savedLang === 'fr' || savedLang === 'en' || savedLang === 'ar') {
        setLanguageState(savedLang);
        applyDocumentAttrs(savedLang);
      } else {
        applyDocumentAttrs('fr');
      }
    } catch {
      applyDocumentAttrs('fr');
    }
  }, []);

  const applyDocumentAttrs = (lang: Language) => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    applyDocumentAttrs(lang);
    try {
      localStorage.setItem('byldora_lang', lang);
    } catch {
      // ignore
    }
  };

  const t = TRANSLATIONS[language] || TRANSLATIONS.fr;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
