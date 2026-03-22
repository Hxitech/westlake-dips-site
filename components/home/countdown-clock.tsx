"use client";

import { useEffect, useState } from "react";

import { T } from "@/components/ui/t";
import { useLocale } from "@/lib/locale-context";
import { getCountdownState } from "@/lib/countdown";
import { cn } from "@/lib/utils";

type CountdownClockProps = {
  eventStart: string;
  eventEnd: string;
  variant?: "panel" | "embedded";
};

const labels = {
  zh: { upcoming: "距离大会开幕", live: "大会进行中", ended: "大会已圆满收官" },
  en: { upcoming: "Countdown to Summit", live: "Summit In Progress", ended: "Summit Concluded" },
};

const unitLabels = {
  zh: ["天", "时", "分", "秒"],
  en: ["Days", "Hrs", "Min", "Sec"],
};

export function CountdownClock({
  eventStart,
  eventEnd,
  variant = "panel",
}: CountdownClockProps) {
  const { locale } = useLocale();
  const [state, setState] = useState(() =>
    getCountdownState(eventStart, eventEnd),
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setState(getCountdownState(eventStart, eventEnd));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [eventStart, eventEnd]);

  const statusLabel = labels[locale][state.status];
  const units = unitLabels[locale];

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        variant === "panel" && "panel-luxe accent-ring rounded-[2rem] border border-gray-200 p-6 sm:p-8",
        variant === "embedded" && "rounded-[1.7rem] border border-gray-200 bg-white/80 p-5 backdrop-blur-sm sm:p-6",
      )}
    >
      {variant === "panel" ? (
        <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-blue-500/8 blur-3xl" />
      ) : null}
      {variant === "panel" ? (
        <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(26,95,180,0.2),transparent)]" />
      ) : null}
      <div className="relative">
        <div
          className={cn(
            "inline-flex rounded-full px-4 py-1 text-xs uppercase tracking-[0.28em]",
            state.status === "upcoming" && "bg-blue-50 text-blue-600",
            state.status === "live" && "bg-emerald-50 text-emerald-600",
            state.status === "ended" && "bg-gray-100 text-gray-500",
          )}
          data-testid="countdown-status"
        >
          {statusLabel}
        </div>
        {variant === "panel" ? (
          <div className="mt-4 flex items-end justify-between gap-4">
            <div>
              <div className="text-[0.68rem] uppercase tracking-[0.28em] text-gray-400">
                {locale === "zh" ? "Summit Intelligence" : "Summit Intelligence"}
              </div>
              <p className="mt-2 max-w-xs text-sm leading-6 text-gray-500">
                <T
                  zh="主论坛、专题论坛与产业对话将在同日集中展开。"
                  en="Plenary sessions, specialist tracks, and industry dialogue unfold across a single summit day."
                />
              </p>
            </div>
            <div className="hidden rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[0.68rem] uppercase tracking-[0.22em] text-amber-700 sm:inline-flex">
              DIPS / 2026
            </div>
          </div>
        ) : null}
        <div className={cn("grid grid-cols-2 gap-4 sm:grid-cols-4", variant === "panel" ? "mt-6" : "mt-5")}>
          {[
            [units[0], state.parts.days],
            [units[1], state.parts.hours],
            [units[2], state.parts.minutes],
            [units[3], state.parts.seconds],
          ].map(([label, value]) => (
            <div
              key={String(label)}
              className={cn(
                "countdown-pulse rounded-[1.5rem] border border-gray-200 text-center backdrop-blur-sm",
                variant === "panel" && "bg-gray-50 p-4",
                variant === "embedded" && "bg-gray-50/80 p-4 sm:p-5",
              )}
            >
              <div
                className={cn(
                  "font-serif leading-none text-gray-900",
                  variant === "panel" && "text-[clamp(2.2rem,5vw,3.25rem)]",
                  variant === "embedded" && "text-[clamp(2.4rem,5.4vw,3.6rem)]",
                )}
              >
                {String(value).padStart(2, "0")}
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.24em] text-gray-400">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
