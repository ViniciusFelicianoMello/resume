// src/config/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "position": "Full-stack developer",
      "location": "SP - São Paulo, Brazil",
    }
  },
  pt: {
    translation: {
      "position": "Desenvolvedor full-stack",
      "location": "SP - São Paulo, Brasil",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "pt",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;