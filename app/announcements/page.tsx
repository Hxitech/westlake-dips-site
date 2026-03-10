import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/ui/page-hero";
import { createPageMetadata } from "@/lib/metadata";
import { formatDisplayDate, getAnnouncementSummaries } from "@/lib/content";

export const metadata: Metadata = createPageMetadata({
  title: "会议通知",
  description: "查看全国数智病理西湖峰会的最新通知、日程动态与会务公告。",
  path: "/announcements",
});

export default async function AnnouncementsPage() {
  const announcements = await getAnnouncementSummaries();

  return (
    <>
      <PageHero
        description="所有峰会动态都集中沉淀在这一页。首页只展示三条重点内容，完整通知以列表形式保留。"
        eyebrow="Announcements"
        meta={["大会通知", "会务动态", "日程更新"]}
        title="会议通知"
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
                <span>{item.category}</span>
                <span>{formatDisplayDate(item.date)}</span>
                {item.pinned ? (
                  <span className="rounded-full border border-cyan-300/30 px-3 py-1 text-cyan-200">
                    推荐
                  </span>
                ) : null}
              </div>
              <h2 className="mt-5 text-3xl font-semibold text-white transition group-hover:text-cyan-200">
                {item.title}
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-300/80">
                {item.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
