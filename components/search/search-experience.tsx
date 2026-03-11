"use client";

import Link from "next/link";
import { useDeferredValue, useId, useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";

import { T } from "@/components/ui/t";
import type { SearchItem } from "@/content/types";
import { useLocale } from "@/lib/locale-context";
import { searchContent } from "@/lib/search";

const kindLabels: Record<SearchItem["kind"], { zh: string; en: string }> = {
  announcement: { zh: "通知", en: "News" },
  speaker: { zh: "嘉宾", en: "Speaker" },
  archive: { zh: "往届", en: "Archive" },
};

type SearchExperienceProps = {
  items: SearchItem[];
  onNavigate?: () => void;
  variant?: "page" | "dialog";
};

export function SearchExperience({
  items,
  onNavigate,
  variant = "page",
}: SearchExperienceProps) {
  const inputId = useId();
  const { locale } = useLocale();
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const results = searchContent(items, deferredQuery);

  return (
    <div className="space-y-6">
      <label
        className="panel accent-ring flex items-center gap-3 rounded-[1.75rem] px-5 py-4"
        htmlFor={inputId}
      >
        <Search className="size-5 text-cyan-200" />
        <input
          className="w-full bg-transparent text-base text-white outline-none placeholder:text-slate-500"
          data-testid="search-input"
          id={inputId}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={locale === "zh" ? "搜索通知、嘉宾、往届关键词" : "Search announcements, speakers, archives..."}
          value={query}
        />
      </label>
      <div
        className={
          variant === "dialog"
            ? "max-h-[60vh] space-y-3 overflow-y-auto pr-2"
            : "space-y-3"
        }
      >
        {results.map((item) => (
          <Link
            className="panel group flex items-start justify-between gap-4 rounded-[1.5rem] p-5 transition hover:border-cyan-300/28 hover:bg-white/8"
            data-testid="search-result"
            href={item.href}
            key={item.id}
            onClick={onNavigate}
          >
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.68rem] uppercase tracking-[0.22em] text-cyan-200/90">
                  {locale === "zh" ? kindLabels[item.kind].zh : kindLabels[item.kind].en}
                </span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-white">
                {locale === "zh" ? item.title : (item.titleEn ?? item.title)}
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-300/80">
                {locale === "zh" ? item.excerpt : (item.excerptEn ?? item.excerpt)}
              </p>
            </div>
            <ArrowUpRight className="mt-1 size-5 shrink-0 text-cyan-200 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        ))}
        {results.length === 0 ? (
          <div className="panel rounded-[1.5rem] p-6 text-sm leading-7 text-slate-300/80">
            <T
              zh="没有找到对应结果。试试「嘉宾」「通知」「2025」「AI 诊断」等关键词。"
              en="No results found. Try keywords like 'speaker', 'AI', '2025', or 'diagnosis'."
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
