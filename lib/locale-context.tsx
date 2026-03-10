"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

export type Locale = "zh" | "en";

type LocaleContextValue = {
  locale: Locale;
  toggle: () => void;
};

const LocaleContext = createContext<LocaleContextValue>({
  locale: "zh",
  toggle: () => {},
});

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("zh");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("dips-locale");
    if (saved === "en" || saved === "zh") {
      setLocale(saved);
    }
    setMounted(true);
  }, []);

  const toggle = useCallback(() => {
    setLocale((prev) => {
      const next = prev === "zh" ? "en" : "zh";
      window.localStorage.setItem("dips-locale", next);
      return next;
    });
  }, []);

  if (!mounted) {
    return (
      <LocaleContext.Provider value={{ locale: "zh", toggle }}>
        {children}
      </LocaleContext.Provider>
    );
  }

  return (
    <LocaleContext.Provider value={{ locale, toggle }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
