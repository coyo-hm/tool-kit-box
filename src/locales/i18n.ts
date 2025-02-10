import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import TranslationEN from "@locales/resources/en.json";
import TranslationKO from "@locales/resources/ko.json";

const resources = {
  en: { translations: TranslationEN },
  ko: { translations: TranslationKO },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  debug: true,
  ns: ["translations"],
  defaultNS: "translations",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
