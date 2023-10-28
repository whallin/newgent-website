import { defaultLanguage, strings, showDefaultLanguage } from "./strings";

export function getLanguageFromUrl(url: URL) {
  const [, language] = url.pathname.split("/");
  if (language in strings) return language as keyof typeof strings;
  return defaultLanguage;
}

export function useTranslatedPath(language: keyof typeof strings) {
  return function translatePath(path: string, lang: string = language) {
    return !showDefaultLanguage && lang === defaultLanguage
      ? path
      : `/${lang}${path}`;
  };
}

export function useTranslations(language: keyof typeof strings) {
  return function t(key: keyof (typeof strings)[typeof language]) {
    return strings[language][key] || strings[defaultLanguage][key];
  };
}
