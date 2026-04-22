import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/ui/page-hero";
import { T } from "@/components/ui/t";
import { createPageMetadata } from "@/lib/metadata";
import { formatDisplayDate, getAnnouncementSummaries } from "@/lib/content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = createPageMetadata({
  title: "会议通知 | Announcements",
  description: "Latest announcements, agenda updates, and event notices for the DIPS Summit.",
  path: "/announcements",
});

export default async function AnnouncementsPage() {
  const announcements = await getAnnouncementSummaries();

  return (
    <>
      <PageHero
        eyebrow={<T zh="会议通知" en="Announcements" />}
        title={<T zh="会议通知" en="Summit Announcements" />}
        description={<T zh="获取峰会最新日程、会务公告与参会指南更新。" en="Stay updated with the latest agenda, summit notices, and attendance guide updates." />}
      />
      <section className="container-shell py-16 sm:py-20">
        <div className="grid gap-5">
          {announcements.map((item) => {
            const isFeaturedNotice = item.slug === "2026-meeting-notice";

            return (
              <Link
                className={cn(
                  "panel rounded-[1.75rem] p-6 transition sm:p-7",
                  isFeaturedNotice
                    ? "border-blue-200 bg-[linear-gradient(135deg,rgba(37,99,235,0.1),rgba(248,250,252,0.96))] shadow-[0_22px_50px_rgba(37,99,235,0.12)] hover:border-blue-300 hover:bg-[linear-gradient(135deg,rgba(37,99,235,0.14),rgba(248,250,252,1))]"
                    : "hover:border-blue-200 hover:bg-blue-50/40",
                )}
                href={`/announcements/${item.slug}`}
                key={item.slug}
              >
                {isFeaturedNotice ? (
                  <div className="text-kicker mb-4 inline-flex rounded-full bg-blue-700 px-3 py-1 font-semibold text-white">
                    <T zh="重点通知" en="Featured Notice" />
                  </div>
                ) : null}
                <div className="text-kicker flex flex-wrap items-center gap-3 text-blue-600">
                  <span>
                    <T zh={item.category} en={item.categoryEn ?? item.category} />
                  </span>
                  <span>
                    <T
                      zh={formatDisplayDate(item.date, "zh")}
                      en={formatDisplayDate(item.date, "en")}
                    />
                  </span>
                  {item.pinned ? (
                    <span
                      className={cn(
                        "text-kicker rounded-full px-2.5 py-1",
                        isFeaturedNotice
                          ? "bg-white text-blue-700 ring-1 ring-blue-200"
                          : "bg-blue-100 text-blue-700",
                      )}
                    >
                      <T zh="置顶" en="Pinned" />
                    </span>
                  ) : null}
                </div>
                <h2
                  className={cn(
                    "text-section-title mt-4 font-serif leading-tight",
                    isFeaturedNotice ? "text-blue-950" : "text-gray-900",
                  )}
                >
                  <T zh={item.title} en={item.titleEn ?? item.title} />
                </h2>
                <p
                  className={cn(
                    "text-body-copy mt-4 max-w-3xl",
                    isFeaturedNotice ? "text-slate-700" : "text-gray-500",
                  )}
                >
                  <T zh={item.excerpt} en={item.excerptEn ?? item.excerpt} />
                </p>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
