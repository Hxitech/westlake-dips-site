import Link from "next/link";

import { T } from "@/components/ui/t";
import { summitSessions } from "@/content/data/sessions";

export function SessionList() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {summitSessions.map((session) => (
        <Link
          className="group flex h-full flex-col gap-3 rounded-xl border border-gray-200 bg-white p-5 transition hover:border-blue-300 hover:bg-blue-50/40"
          href="/announcements"
          key={session.number}
        >
          <div className="flex items-baseline gap-3">
            <span className="text-base font-semibold text-blue-700">{session.number}</span>
            <span className="text-xl font-semibold text-gray-900">
              <T zh={session.theme} en={session.themeEn} />
            </span>
          </div>
          <p className="text-base leading-7 text-gray-600">
            <T zh={session.title} en={session.titleEn} />
          </p>
        </Link>
      ))}
    </div>
  );
}
