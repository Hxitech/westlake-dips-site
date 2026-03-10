import type { Metadata } from "next";
import { MapPinned, TrainFront, CarFront, BusFront } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { PageHero } from "@/components/ui/page-hero";
import { siteConfig, registrationConfig } from "@/content/data/site";
import { venueInfo } from "@/content/data/venue";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "参会指南",
  description: "查看峰会会场、交通方式、报名说明与现场动线。",
  path: "/guide",
});

export default function GuidePage() {
  return (
    <>
      <PageHero
        description="把交通、地图、会场和报名说明拆成清晰模块，保证用户在最短路径内找到所需信息。"
        eyebrow="Attendance Guide"
        meta={[siteConfig.venue, siteConfig.city, "会场信息"]}
        title="参会指南"
      />
      <section className="container-shell py-18 sm:py-20">
        <div className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
          <div className="panel rounded-[2rem] p-6 sm:p-8">
            <div className="flex items-center gap-3 text-cyan-200">
              <MapPinned className="size-5" />
              <span className="text-[0.68rem] uppercase tracking-[0.28em]">
                Venue
              </span>
            </div>
            <h2 className="mt-5 font-serif text-3xl text-white">
              {venueInfo.venue}
            </h2>
            <p className="mt-4 text-sm leading-8 text-slate-300/82">
              {venueInfo.city} · {venueInfo.address}
            </p>
            <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-[linear-gradient(135deg,rgba(114,215,255,0.18),rgba(110,122,255,0.14))] p-6">
              <div className="text-[0.68rem] uppercase tracking-[0.28em] text-cyan-100/88">
                Map Placeholder
              </div>
              <p className="mt-4 max-w-md text-sm leading-7 text-slate-100/88">
                {venueInfo.mapLabel}
              </p>
            </div>
            <p className="mt-6 text-sm leading-7 text-slate-400">
              {venueInfo.floorplanNote}
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              {
                icon: TrainFront,
                title: "地铁到场",
                items: venueInfo.metro,
              },
              {
                icon: BusFront,
                title: "公交接驳",
                items: venueInfo.bus,
              },
              {
                icon: CarFront,
                title: "自驾建议",
                items: venueInfo.drive,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div className="panel rounded-[1.75rem] p-5" key={item.title}>
                  <div className="flex items-center gap-3 text-cyan-200">
                    <Icon className="size-5" />
                    <span className="text-[0.68rem] uppercase tracking-[0.28em]">
                      {item.title}
                    </span>
                  </div>
                  <div className="mt-5 space-y-3">
                    {item.items.map((line) => (
                      <div
                        className="rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-slate-300/80"
                        key={line}
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-shell pb-24 pt-6 sm:pb-28">
        <div className="panel rounded-[2.25rem] p-6 sm:p-8">
          <div className="text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/88">
            Registration Guide
          </div>
          <h2 className="mt-4 font-serif text-3xl text-white">
            报名与现场须知
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-300/82">
            {registrationConfig.description}
          </p>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {registrationConfig.tips.map((tip) => (
              <div
                className="rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-5 text-sm leading-7 text-slate-300/82"
                key={tip}
              >
                {tip}
              </div>
            ))}
          </div>
          <ButtonLink className="mt-8" href="/register">
            前往报名说明页
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
