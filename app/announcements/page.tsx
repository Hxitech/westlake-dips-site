import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/button-link";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
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
        eyebrow={<T zh="会议通知" en="Announcements" />}
        title={<T zh="会议通知" en="Summit Announcements" />}
        description={<T zh="获取峰会最新日程、参会嘉宾、报名信息及会务公告。" en="Stay updated with the latest agenda, guest speakers, and registration details." />}
      />
      <section className="container-shell py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow={<T zh="会议日程" en="Schedule" />}
              title={<T zh="会议日程" en="Summit Schedule" />}
            />
            <div className="mt-6 flex items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50/80 py-20 shadow-sm shadow-slate-950/5">
              <p className="text-lg font-medium text-slate-600">
                <T zh="敬请期待" en="Coming Soon" />
              </p>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow={<T zh="参会嘉宾" en="Guests" />}
              title={<T zh="参会嘉宾" en="Summit Guests" />}
            />
            <div className="mt-6 flex items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50/80 py-20 shadow-sm shadow-slate-950/5">
              <p className="text-lg font-medium text-slate-600">
                <T zh="敬请期待" en="Coming Soon" />
              </p>
            </div>
          </div>
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
