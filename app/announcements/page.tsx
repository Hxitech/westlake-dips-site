import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/button-link";
import { PageHero } from "@/components/ui/page-hero";
import { T } from "@/components/ui/t";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "会议通知 | Announcements",
  description: "Latest announcements, agenda updates, and event notices for the DIPS Summit.",
  path: "/announcements",
});

export default function AnnouncementsPage() {
  return (
    <>
      <PageHero
        description={
          <T
            zh="获取峰会最新日程、参会嘉宾、报名信息及会务公告。"
            en="Stay updated with the latest agenda, guest speakers, registration details, and event notices."
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
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="panel rounded-[2rem] p-6 sm:p-8">
            <div className="text-[0.68rem] uppercase tracking-[0.28em] text-blue-600">
              <T zh="会议日程" en="Schedule" />
            </div>
            <h2 className="mt-4 font-serif text-3xl text-gray-900">
              <T zh="会议日程" en="Summit Schedule" />
            </h2>
            <div className="mt-8 flex flex-col items-center justify-center rounded-[1.5rem] border border-gray-200 bg-gray-50/80 px-5 py-16 text-center">
              <p className="font-serif text-2xl text-gray-400">
                <T zh="敬请期待" en="Coming Soon" />
              </p>
            </div>
          </div>

          <div className="panel rounded-[2rem] p-6 sm:p-8">
            <div className="text-[0.68rem] uppercase tracking-[0.28em] text-blue-600">
              <T zh="参会嘉宾" en="Guests" />
            </div>
            <h2 className="mt-4 font-serif text-3xl text-gray-900">
              <T zh="参会嘉宾" en="Summit Guests" />
            </h2>
            <div className="mt-8 flex flex-col items-center justify-center rounded-[1.5rem] border border-gray-200 bg-gray-50/80 px-5 py-16 text-center">
              <p className="font-serif text-2xl text-gray-400">
                <T zh="敬请期待" en="Coming Soon" />
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <ButtonLink href="/register">
            <T zh="立即报名" en="Register Now" />
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
