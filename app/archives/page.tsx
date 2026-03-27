import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/ui/page-hero";
import { T } from "@/components/ui/t";
import { createPageMetadata } from "@/lib/metadata";
import { getArchiveSummaries } from "@/lib/content";

export const metadata: Metadata = createPageMetadata({
  title: "往届会议 | Archives",
  description: "Explore highlights and themes from past DIPS summits.",
  path: "/archives",
});

export default async function ArchivesPage() {
  const archives = await getArchiveSummaries();

  return (
    <>
      <PageHero
        description={
          <T
            zh="回顾历届峰会的精彩内容，了解峰会的发展历程与学术积累。"
            en="Explore highlights from past summits and trace the evolution of DIPS."
          />
        }
        eyebrow={<T zh="往届会议" en="Past Summits" />}
        meta={[
          <T key="r" zh="年度回顾" en="Annual Review" />,
        ]}
        title={<T zh="往届会议" en="Summit Archives" />}
      />
      <section className="container-shell pb-24 pt-18 sm:pb-28 sm:pt-20">
        <div className="space-y-5">
          {archives.map((item) => (
            <Link
              className="panel block rounded-[2rem] p-6 transition hover:border-blue-200 hover:bg-blue-50/40 sm:p-8"
              href={`/archives/${item.year}`}
              key={item.year}
            >
              <div className="grid gap-6 lg:grid-cols-[0.28fr_0.72fr] lg:items-start">
                <div>
                  <div className="font-serif text-4xl text-gray-900">{item.year}</div>
                  <div className="mt-2 text-sm uppercase tracking-[0.24em] text-blue-600">
                    <T zh={item.location} en={item.locationEn ?? item.location} />
                  </div>
                </div>
                <div>
                  <h2 className="whitespace-nowrap text-[clamp(1.4rem,5vw,1.875rem)] font-semibold text-gray-900">
                    <T zh={item.title} en={item.titleEn ?? item.title} />
                  </h2>
                  <p className="mt-3 text-lg text-gray-600">
                    <T zh={item.theme} en={item.themeEn ?? item.theme} />
                  </p>
                  <p className="mt-4 max-w-3xl text-sm leading-8 text-gray-500">
                    <T zh={item.highlight} en={item.highlightEn ?? item.highlight} />
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
