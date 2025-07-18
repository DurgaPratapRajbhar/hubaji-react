import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';  // Import the backend plugin

i18n
  .use(HttpBackend)  // Add the backend plugin
  .use(initReactI18next)
  .init({
    fallbackLng: 'english', // Fallback language
    lng: 'english', // Initial language
    debug: true,
    interpolation: {
      escapeValue: false, // Prevent XSS (not needed in React)
    },
    backend: {
      loadPath: '/locales/{{lng}}/common.json',
    },
  });
export default i18n;
