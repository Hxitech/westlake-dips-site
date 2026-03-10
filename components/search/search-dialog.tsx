"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

import type { SearchItem } from "@/content/types";
import { SearchExperience } from "@/components/search/search-experience";

type SearchDialogProps = {
  items: SearchItem[];
  open: boolean;
  onClose: () => void;
};

export function SearchDialog({
  items,
  open,
  onClose,
}: SearchDialogProps) {
  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, open]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 px-4 py-6 backdrop-blur-xl sm:px-6">
      <div className="mx-auto flex h-full max-w-4xl flex-col rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,14,28,0.98),rgba(6,12,24,0.98))] p-6 shadow-[0_30px_120px_rgba(2,8,23,0.7)]">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <div className="text-sm uppercase tracking-[0.28em] text-cyan-200/88">
              Search Hub
            </div>
            <h2 className="mt-2 font-serif text-2xl text-white">
              搜索峰会内容
            </h2>
          </div>
          <button
            aria-label="关闭搜索"
            className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:bg-white/10 hover:text-white"
            onClick={onClose}
            type="button"
          >
            <X className="size-5" />
          </button>
        </div>
        <SearchExperience items={items} onNavigate={onClose} variant="dialog" />
      </div>
    </div>
  );
}
