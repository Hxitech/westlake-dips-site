"use client";

import { useEffect, useState } from "react";

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
        variant === "panel" && "panel accent-ring rounded-[2rem] p-6 sm:p-8",
        variant === "embedded" && "rounded-[1.6rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm sm:p-6",
      )}
    >
      {variant === "panel" ? (
        <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-cyan-300/18 blur-3xl" />
      ) : null}
      <div className="relative">
        <div
          className={cn(
            "inline-flex rounded-full px-4 py-1 text-xs uppercase tracking-[0.28em]",
            state.status === "upcoming" && "bg-cyan-300/10 text-cyan-200",
            state.status === "live" && "bg-emerald-300/10 text-emerald-200",
            state.status === "ended" && "bg-white/8 text-slate-300",
          )}
          data-testid="countdown-status"
        >
          {statusLabel}
        </div>
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
                "countdown-pulse rounded-[1.5rem] border border-white/10 text-center",
                variant === "panel" && "bg-white/5 p-4",
                variant === "embedded" && "bg-white/[0.04] p-4 sm:p-5",
              )}
            >
              <div
                className={cn(
                  "font-serif text-white",
                  variant === "panel" && "text-4xl sm:text-5xl",
                  variant === "embedded" && "text-4xl xl:text-[3.2rem]",
                )}
              >
                {String(value).padStart(2, "0")}
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.24em] text-slate-400">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
