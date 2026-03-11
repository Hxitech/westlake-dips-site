import type { Metadata } from "next";
import { MapPinned, TrainFront, CarFront, BusFront } from "lucide-react";

import { AmapVenueMap } from "@/components/venue/amap-venue-map";
import { ButtonLink } from "@/components/ui/button-link";
import { PageHero } from "@/components/ui/page-hero";
import { T } from "@/components/ui/t";
import { siteConfig, registrationConfig } from "@/content/data/site";
import { venueInfo } from "@/content/data/venue";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "参会指南 | Guide",
  description: "Venue details, transportation, and attendance guide for the DIPS Summit.",
  path: "/guide",
});

export default function GuidePage() {
  return (
    <>
      <PageHero
        description={
          <T
            zh="了解会场位置、交通方式与报名流程，轻松规划您的参会之旅。"
            en="Find venue details, transportation options, and registration information to plan your visit."
          />
        }
        eyebrow={<T zh="参会指南" en="Attendance Guide" />}
        meta={[
          <T key="v" zh={siteConfig.venue} en={siteConfig.venueEn} />,
          <T key="c" zh={siteConfig.city} en={siteConfig.cityEn} />,
        ]}
        title={<T zh="参会指南" en="Attendance Guide" />}
      />
      <section className="container-shell py-18 sm:py-20">
        <div className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
          <div className="panel rounded-[2rem] p-6 sm:p-8">
            <div className="flex items-center gap-3 text-cyan-200">
              <MapPinned className="size-5" />
              <span className="text-[0.68rem] uppercase tracking-[0.28em]">
                <T zh="会场位置" en="Venue" />
              </span>
            </div>
            <h2 className="mt-5 font-serif text-3xl text-white">
              <T zh={venueInfo.venue} en={venueInfo.venueEn} />
            </h2>
            <p className="mt-4 text-sm leading-8 text-slate-300/82">
              <T zh={`${venueInfo.city} · ${venueInfo.address}`} en={`${venueInfo.cityEn} · ${venueInfo.addressEn}`} />
            </p>
            <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-white/10">
              <AmapVenueMap
                address={venueInfo.address}
                addressEn={venueInfo.addressEn}
                latitude={venueInfo.latitude}
                longitude={venueInfo.longitude}
                mapUrl={venueInfo.mapUrl}
                venue={venueInfo.venue}
                venueEn={venueInfo.venueEn}
              />
              <div className="bg-white/5 px-5 py-3 text-sm text-slate-300/88">
                <a
                  className="text-cyan-200 hover:underline"
                  data-testid="guide-venue-map-link"
                  href={venueInfo.mapUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <T zh={venueInfo.mapLabel} en={venueInfo.mapLabelEn} />
                </a>
              </div>
            </div>
            <p className="mt-6 text-sm leading-7 text-slate-400">
              <T zh={venueInfo.floorplanNote} en={venueInfo.floorplanNoteEn} />
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              {
                icon: TrainFront,
                title: { zh: "地铁到场", en: "Metro" },
                items: venueInfo.metro,
                itemsEn: venueInfo.metroEn,
              },
              {
                icon: BusFront,
                title: { zh: "公交接驳", en: "Bus / Shuttle" },
                items: venueInfo.bus,
                itemsEn: venueInfo.busEn,
              },
              {
                icon: CarFront,
                title: { zh: "自驾建议", en: "Driving" },
                items: venueInfo.drive,
                itemsEn: venueInfo.driveEn,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div className="panel rounded-[1.75rem] p-5" key={item.title.zh}>
                  <div className="flex items-center gap-3 text-cyan-200">
                    <Icon className="size-5" />
                    <span className="text-[0.68rem] uppercase tracking-[0.28em]">
                      <T zh={item.title.zh} en={item.title.en} />
                    </span>
                  </div>
                  <div className="mt-5 space-y-3">
                    {item.items.map((line, i) => (
                      <div
                        className="rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-slate-300/80"
                        key={line}
                      >
                        <T zh={line} en={item.itemsEn[i]} />
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
            <T zh="报名须知" en="Registration Info" />
          </div>
          <h2 className="mt-4 font-serif text-3xl text-white">
            <T zh="报名与现场须知" en="Registration & On-Site Information" />
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-300/82">
            <T zh={registrationConfig.description} en={registrationConfig.descriptionEn} />
          </p>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {registrationConfig.tips.map((tip, i) => (
              <div
                className="rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-5 text-sm leading-7 text-slate-300/82"
                key={tip}
              >
                <T zh={tip} en={registrationConfig.tipsEn[i]} />
              </div>
            ))}
          </div>
          <ButtonLink className="mt-8" href="/register">
            <T zh="前往报名页" en="Go to Registration" />
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
