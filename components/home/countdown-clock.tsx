"use client";

import { useEffect, useState } from "react";

import { T } from "@/components/ui/t";
import { useLocale } from "@/lib/locale-context";
import { getCountdownState } from "@/lib/countdown";
import { cn } from "@/lib/utils";

type CountdownClockProps = {
  eventStart: string;
  eventEnd: string;
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
    <div className="panel-luxe accent-ring relative overflow-hidden rounded-[2rem] border border-white/12 p-6 sm:p-8">
      <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-cyan-300/18 blur-3xl" />
      <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(118,214,255,0.45),transparent)]" />
      <div className="relative">
        <div
          className={cn(
            "inline-flex rounded-full border px-4 py-1 text-xs uppercase tracking-[0.28em]",
            state.status === "upcoming" && "border-cyan-300/24 bg-cyan-300/10 text-cyan-200",
            state.status === "live" && "border-emerald-300/24 bg-emerald-300/10 text-emerald-200",
            state.status === "ended" && "border-white/10 bg-white/8 text-slate-300",
          )}
          data-testid="countdown-status"
        >
          {statusLabel}
        </div>
        <div className="mt-4 flex items-end justify-between gap-4">
          <div>
            <div className="text-[0.68rem] uppercase tracking-[0.28em] text-slate-400">
              {locale === "zh" ? "Summit Intelligence" : "Summit Intelligence"}
            </div>
            <p className="mt-2 max-w-xs text-sm leading-6 text-slate-300/82">
              <T
                zh="主论坛、专题论坛与产业对话将在同日集中展开。"
                en="Plenary sessions, specialist tracks, and industry dialogue unfold across a single summit day."
              />
            </p>
          </div>
          <div className="hidden rounded-full border border-[rgba(217,196,157,0.22)] bg-[rgba(217,196,157,0.08)] px-3 py-1 text-[0.68rem] uppercase tracking-[0.22em] text-[rgba(236,220,193,0.9)] sm:inline-flex">
            DIPS / 2026
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            [units[0], state.parts.days],
            [units[1], state.parts.hours],
            [units[2], state.parts.minutes],
            [units[3], state.parts.seconds],
          ].map(([label, value]) => (
            <div
              key={String(label)}
              className="countdown-pulse rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-4 text-center backdrop-blur-sm"
            >
              <div className="font-serif text-[clamp(2.2rem,5vw,3.25rem)] leading-none text-white">
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
