import type { Metadata } from "next";
import Image from "next/image";
import { MapPinned, TrainFront, CarFront, BusFront, Info } from "lucide-react";

import { PageHero } from "@/components/ui/page-hero";
import { T } from "@/components/ui/t";
import { siteConfig } from "@/content/data/site";
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
            zh="了解会场位置、交通方式，轻松规划您的参会之旅。"
            en="Find venue details and transportation options to plan your visit."
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
            <div className="flex items-center gap-3 text-blue-600">
              <MapPinned className="size-5" />
              <span className="text-[0.68rem] uppercase tracking-[0.28em]">
                <T zh="会场位置" en="Venue" />
              </span>
            </div>
            <h2 className="mt-5 font-serif text-3xl text-gray-900">
              <T zh={venueInfo.venue} en={venueInfo.venueEn} />
            </h2>
            <p className="mt-4 text-sm leading-8 text-gray-500">
              <T zh={`${venueInfo.city} · ${venueInfo.address}`} en={`${venueInfo.cityEn} · ${venueInfo.addressEn}`} />
            </p>
            <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-gray-200">
              <Image
                src="/venue-map.png"
                alt="西北大学长安校区地图"
                width={800}
                height={500}
                className="w-full object-cover"
              />
              <div className="bg-gray-50 px-5 py-3 text-sm text-gray-500">
                <a
                  className="text-blue-600 hover:underline"
                  data-testid="guide-venue-map-link"
                  href={venueInfo.mapUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <T zh={venueInfo.mapLabel} en={venueInfo.mapLabelEn} />
                </a>
              </div>
            </div>
          </div>
          <div className="space-y-5">
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
                  title: { zh: "公交路线", en: "Bus" },
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
                    <div className="flex items-center gap-3 text-blue-600">
                      <Icon className="size-5" />
                      <span className="text-[0.68rem] uppercase tracking-[0.28em]">
                        <T zh={item.title.zh} en={item.title.en} />
                      </span>
                    </div>
                    <div className="mt-5 space-y-3">
                      {item.items.map((line, i) => (
                        <div
                          className="rounded-[1.25rem] border border-gray-200 bg-gray-50/80 px-4 py-4 text-sm leading-7 text-gray-500"
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

            <div className="panel rounded-[1.75rem] p-5">
              <div className="flex items-center gap-3 text-amber-600">
                <Info className="size-5" />
                <span className="text-[0.68rem] uppercase tracking-[0.28em]">
                  <T zh="温馨提示" en="Reminder" />
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-gray-600">
                <T
                  zh="建议参会嘉宾从西北大学长安校区正门（北门）入校。"
                  en="Attendees are advised to enter the campus through the main entrance (North Gate) of Northwest University Chang'an Campus."
                />
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
