import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpApi) // For loading translations
  .use(LanguageDetector) // For detecting user language
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    fallbackLng: "en", // Default language
    debug: true, // Enable debug mode
    returnEmptyString: false, // Prevent empty strings if the key is not found
    interpolation: {
      escapeValue: false, // React already escapes strings
      defaultValue: (key) => key, // Use the key as the default value
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // Path to translation files
    },
    detection: {
      order: ["querystring", "localStorage", "cookie", "navigator"], // Order of detection
      caches: ["localStorage", "cookie"], // Cache language preferences
    },
  });

export default i18n;

// ==== Example ====
// {i18next.exists(selected) ? t(selected) : selected}
