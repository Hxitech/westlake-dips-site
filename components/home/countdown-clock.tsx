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
  en: { upcoming: "Countdown", live: "In Progress", ended: "Concluded" },
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
  const isDark = variant === "embedded";

  return (
    <div
      className={cn(
        "rounded-lg",
        variant === "panel" && "border border-gray-200 bg-white p-5",
        variant === "embedded" && "border border-white/18 bg-slate-950/28 p-4 shadow-[0_20px_40px_rgba(15,23,42,0.24)] backdrop-blur-sm",
      )}
    >
      <div
        className={cn(
          "text-body-dense inline-block rounded px-2 py-0.5 font-medium",
          isDark ? "bg-white/18 text-blue-100" : "bg-blue-50 text-blue-700",
        )}
        data-testid="countdown-status"
      >
        {statusLabel}
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2">
        {[
          [units[0], state.parts.days],
          [units[1], state.parts.hours],
          [units[2], state.parts.minutes],
          [units[3], state.parts.seconds],
        ].map(([label, value]) => (
          <div key={String(label)} className="text-center">
            <div className={cn(
              "text-section-title font-bold tabular-nums",
              isDark ? "text-white" : "text-gray-900",
            )}>
              {String(value).padStart(2, "0")}
            </div>
            <div className={cn(
              "text-body-dense mt-1",
              isDark ? "text-white/78" : "text-gray-500",
            )}>
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
