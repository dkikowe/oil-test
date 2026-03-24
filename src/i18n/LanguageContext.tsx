import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations, Language } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('RU');

  const t = (key: string, params?: Record<string, string | number>): string => {
    let text = translations[language][key] || translations['RU'][key] || key;
    
    if (params) {
      Object.entries(params).forEach(([paramKey, paramValue]) => {
        text = text.replace(`{${paramKey}}`, String(paramValue));
      });
    }
    
    return text;
  };

  React.useEffect(() => {
    document.documentElement.dir = language === 'FA' ? 'rtl' : 'ltr';
    document.documentElement.lang =
      language === 'KZ' ? 'kk' : language === 'FA' ? 'fa' : language.toLowerCase();
    const title =
      translations[language]['meta.title'] || translations.RU['meta.title'];
    if (title) document.title = title;
  }, [language]);

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
