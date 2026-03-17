import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/ui/page-hero";
import { T } from "@/components/ui/t";
import { createPageMetadata } from "@/lib/metadata";
import { formatDisplayDate, getAnnouncementSummaries } from "@/lib/content";

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
        description={
          <T
            zh="获取峰会最新日程、嘉宾确认、报名信息及会务公告。"
            en="Stay updated with the latest agenda, speaker confirmations, registration details, and event notices."
          />
        }
        eyebrow={<T zh="会议通知" en="Announcements" />}
        meta={[
          <T key="n" zh="大会通知" en="Notices" />,
          <T key="d" zh="会务动态" en="Updates" />,
          <T key="s" zh="日程更新" en="Schedule" />,
        ]}
        title={<T zh="会议通知" en="Summit Announcements" />}
      />
      <section className="container-shell pb-24 pt-18 sm:pb-28 sm:pt-20">
        <div className="space-y-5">
          {announcements.map((item, index) => (
            <Link
              className="panel group block rounded-[2rem] p-6 transition hover:border-cyan-300/24 hover:bg-white/8 sm:p-8"
              href={`/announcements/${item.slug}`}
              key={item.slug}
            >
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.24em] text-slate-400">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span><T zh={item.category} en={item.categoryEn ?? item.category} /></span>
                <span><T zh={formatDisplayDate(item.date, "zh")} en={formatDisplayDate(item.date, "en")} /></span>
                {item.pinned ? (
                  <span className="rounded-full border border-cyan-300/30 px-3 py-1 text-cyan-200">
                    <T zh="置顶" en="Pinned" />
                  </span>
                ) : null}
              </div>
              <h2 className="mt-5 whitespace-nowrap text-[clamp(1.4rem,5vw,1.875rem)] font-semibold text-white transition group-hover:text-cyan-200">
                <T zh={item.title} en={item.titleEn ?? item.title} />
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-300/80">
                <T zh={item.excerpt} en={item.excerptEn ?? item.excerpt} />
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
