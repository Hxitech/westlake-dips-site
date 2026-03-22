"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

import { T } from "@/components/ui/t";
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
    <div className="fixed inset-0 z-50 bg-gray-900/40 px-4 py-6 backdrop-blur-xl sm:px-6">
      <div className="mx-auto flex h-full max-w-4xl flex-col rounded-[2rem] border border-gray-200 bg-white p-6 shadow-[0_30px_120px_rgba(26,95,180,0.12)]">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <div className="text-sm uppercase tracking-[0.28em] text-blue-600">
              <T zh="搜索" en="Search" />
            </div>
            <h2 className="mt-2 font-serif text-2xl text-gray-900">
              <T zh="搜索峰会内容" en="Search Summit Content" />
            </h2>
          </div>
          <button
            aria-label="Close search"
            className="rounded-full border border-gray-200 bg-gray-50 p-3 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700"
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
