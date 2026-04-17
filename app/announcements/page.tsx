import type { Metadata } from "next";
import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
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
        eyebrow={<T zh="会议通知" en="Announcements" />}
        title={<T zh="会议通知" en="Summit Announcements" />}
        description={<T zh="获取峰会最新日程、参会嘉宾、报名信息及会务公告。" en="Stay updated with the latest agenda, guest speakers, and registration details." />}
      />
      <section className="container-shell py-16 sm:py-20">
        <div className="grid gap-5">
          {announcements.map((item) => (
            <Link
              className="panel rounded-[1.75rem] p-6 transition hover:border-blue-200 hover:bg-blue-50/40 sm:p-7"
              href={`/announcements/${item.slug}`}
              key={item.slug}
            >
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.24em] text-blue-600">
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
                  <span className="rounded-full bg-blue-100 px-2.5 py-1 text-[0.65rem] tracking-[0.18em] text-blue-700">
                    <T zh="置顶" en="Pinned" />
                  </span>
                ) : null}
              </div>
              <h2 className="mt-4 text-[clamp(1.35rem,4vw,2rem)] font-serif leading-tight text-gray-900">
                <T zh={item.title} en={item.titleEn ?? item.title} />
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-gray-500 sm:text-lg">
                <T zh={item.excerpt} en={item.excerptEn ?? item.excerpt} />
              </p>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <ButtonLink href="/register">
            <T zh="立即报名" en="Register Now" />
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
