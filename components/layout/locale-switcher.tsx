"use client";

import { Globe } from "lucide-react";

import { useLocale } from "@/lib/locale-context";

export function LocaleSwitcher() {
  const { locale, toggle } = useLocale();

  return (
    <button
      aria-label={locale === "zh" ? "Switch to English" : "切换为中文"}
      className="flex items-center gap-1.5 rounded-full border border-gray-300 bg-white/90 px-3 py-2 text-xs font-medium tracking-wide text-gray-700 shadow-sm shadow-gray-950/5 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
      onClick={toggle}
      type="button"
    >
      <Globe className="size-3.5" />
      {locale === "zh" ? "EN" : "中"}
    </button>
  );
}
