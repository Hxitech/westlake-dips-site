export type Locale = "zh" | "en";

export const DEFAULT_LOCALE: Locale = "zh";
export const LOCALE_COOKIE_NAME = "dips-locale";

export function resolveLocale(value: string | null | undefined): Locale {
  return value === "en" || value === "zh" ? value : DEFAULT_LOCALE;
}

export function getDocumentLang(locale: Locale) {
  return locale === "zh" ? "zh-CN" : "en";
}
