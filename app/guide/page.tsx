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
        eyebrow={<T zh="参会指南" en="Guide" />}
        title={<T zh="参会指南" en="Attendance Guide" />}
        description={<T zh="了解会场位置、交通方式，轻松规划您的参会之旅。" en="Find venue details and transportation options to plan your visit." />}
        meta={[
          <T key="v" zh={siteConfig.venue} en={siteConfig.venueEn} />,
          <T key="c" zh={siteConfig.city} en={siteConfig.cityEn} />,
        ]}
      />

      <section className="container-shell py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          {/* Venue + Map */}
          <div>
            <div className="flex items-center gap-2 text-blue-700">
              <MapPinned className="size-4" />
              <span className="text-sm font-medium"><T zh="会场位置" en="Venue" /></span>
            </div>
            <h2 className="mt-2 text-2xl font-bold text-gray-900">
              <T zh={venueInfo.venue} en={venueInfo.venueEn} />
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              <T zh={`${venueInfo.city} · ${venueInfo.address}`} en={`${venueInfo.cityEn} · ${venueInfo.addressEn}`} />
            </p>
            <div
              className="mt-6 overflow-hidden rounded-lg border border-gray-200"
              data-testid="guide-venue-map-shell"
            >
              <Image
                src="/venue-map.png"
                alt="西北大学长安校区地图"
                width={800}
                height={500}
                className="w-full object-cover"
              />
              <div className="bg-gray-50 px-4 py-2 text-sm">
                <a
                  className="text-blue-700 hover:underline"
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

          {/* Transportation */}
          <div className="space-y-4">
            {[
              { icon: TrainFront, title: { zh: "地铁到场", en: "Metro" }, items: venueInfo.metro, itemsEn: venueInfo.metroEn },
              { icon: BusFront, title: { zh: "公交路线", en: "Bus" }, items: venueInfo.bus, itemsEn: venueInfo.busEn },
              { icon: CarFront, title: { zh: "自驾建议", en: "Driving" }, items: venueInfo.drive, itemsEn: venueInfo.driveEn },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div className="rounded-lg border border-gray-200 p-4" key={item.title.zh}>
                  <div className="flex items-center gap-2 text-blue-700">
                    <Icon className="size-4" />
                    <span className="text-sm font-medium"><T zh={item.title.zh} en={item.title.en} /></span>
                  </div>
                  <div className="mt-3 space-y-2">
                    {item.items.map((line, i) => (
                      <p className="text-sm leading-6 text-gray-600" key={line}>
                        <T zh={line} en={item.itemsEn[i]} />
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}

            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
              <div className="flex items-center gap-2 text-amber-700">
                <Info className="size-4" />
                <span className="text-sm font-medium"><T zh="温馨提示" en="Reminder" /></span>
              </div>
              <p className="mt-2 text-sm leading-6 text-amber-800">
                <T
                  zh="建议参会嘉宾从西北大学长安校区正门（北门）入校。"
                  en="Attendees are advised to enter through the main entrance (North Gate)."
                />
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
