"use client";

import { useLocale } from "@/lib/locale-context";

type TProps = {
  zh: React.ReactNode;
  en: React.ReactNode;
};

export function T({ zh, en }: TProps) {
  const { locale } = useLocale();
  return <>{locale === "zh" ? zh : en}</>;
}
