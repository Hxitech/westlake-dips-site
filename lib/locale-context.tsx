"use client";

import { createContext, startTransition, useCallback, useContext, useState } from "react";

import {
  DEFAULT_LOCALE,
  getDocumentLang,
  LOCALE_COOKIE_NAME,
  type Locale,
} from "@/lib/locale";

type LocaleContextValue = {
  locale: Locale;
  toggle: () => void;
};

const LocaleContext = createContext<LocaleContextValue>({
  locale: DEFAULT_LOCALE,
  toggle: () => {},
});

export function LocaleProvider({
  children,
  initialLocale,
}: {
  children: React.ReactNode;
  initialLocale: Locale;
}) {
  const [locale, setLocale] = useState<Locale>(initialLocale);

  const persistLocale = useCallback((next: Locale) => {
    window.localStorage.setItem(LOCALE_COOKIE_NAME, next);
    document.cookie = `${LOCALE_COOKIE_NAME}=${next}; path=/; max-age=31536000; samesite=lax`;
    document.documentElement.lang = getDocumentLang(next);
  }, []);

  const toggle = useCallback(() => {
    startTransition(() => {
      setLocale((prev) => {
        const next = prev === "zh" ? "en" : "zh";
        persistLocale(next);
        return next;
      });
    });
  }, [persistLocale]);

  return (
    <LocaleContext.Provider value={{ locale, toggle }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
