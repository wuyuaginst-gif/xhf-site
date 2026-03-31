import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const DEFAULT_LANGUAGE = "zh-CN";
const STORAGE_KEY = "preferred_language";

type LanguageCode = "zh-CN" | "en-US";

const resources = {
  "zh-CN": {
    translation: {
      nav: {
        home: "首页",
        products: "产品",
        cases: "案例",
        news: "新闻",
        about: "关于",
        service: "服务",
        join: "加入",
        language: "语言",
        tryNow: "立即体验",
        zh: "简体中文",
        en: "English",
      },
    },
  },
  "en-US": {
    translation: {
      nav: {
        home: "Home",
        products: "Products",
        cases: "Cases",
        news: "News",
        about: "About",
        service: "Services",
        join: "Careers",
        language: "Language",
        tryNow: "Get Started",
        zh: "简体中文",
        en: "English",
      },
    },
  },
} as const;

const getInitialLanguage = (): LanguageCode => {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "zh-CN" || stored === "en-US") return stored;
  return DEFAULT_LANGUAGE;
};

const initialLanguage = getInitialLanguage();

if (typeof document !== "undefined") {
  document.documentElement.lang = initialLanguage;
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: initialLanguage,
    fallbackLng: DEFAULT_LANGUAGE,
    interpolation: {
      escapeValue: false,
    },
  });

export const LANGUAGE_OPTIONS = [
  { code: "zh-CN" as const, labelKey: "nav.zh" },
  { code: "en-US" as const, labelKey: "nav.en" },
];

export const LANGUAGE_STORAGE_KEY = STORAGE_KEY;

export default i18n;
