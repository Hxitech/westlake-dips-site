import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/ui/page-hero";
import { createPageMetadata } from "@/lib/metadata";
import { getArchiveSummaries } from "@/lib/content";

export const metadata: Metadata = createPageMetadata({
  title: "往届会议",
  description: "浏览历届全国数智病理西湖峰会的主题、成果、影像与视频回顾。",
  path: "/archives",
});

export default async function ArchivesPage() {
  const archives = await getArchiveSummaries();

  return (
    <>
      <PageHero
        description="往届内容不仅保留图片和视频入口，也沉淀每一届的主题、成果与视觉资产。"
        eyebrow="Past Summits"
        meta={["年度回顾", "图像档案", "视频占位"]}
        title="往届会议"
      />
      <section className="container-shell pb-24 pt-18 sm:pb-28 sm:pt-20">
        <div className="space-y-5">
          {archives.map((item) => (
            <Link
              className="panel block rounded-[2rem] p-6 transition hover:border-cyan-300/24 hover:bg-white/8 sm:p-8"
              href={`/archives/${item.year}`}
              key={item.year}
            >
              <div className="grid gap-6 lg:grid-cols-[0.28fr_0.72fr] lg:items-start">
                <div>
                  <div className="font-serif text-4xl text-white">{item.year}</div>
                  <div className="mt-2 text-sm uppercase tracking-[0.24em] text-cyan-200/84">
                    {item.location}
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-semibold text-white">{item.title}</h2>
                  <p className="mt-3 text-lg text-slate-200">{item.theme}</p>
                  <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-300/80">
                    {item.highlight}
                  </p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {item.gallery.map((entry) => (
                      <div
                        className="rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-slate-300/80"
                        key={entry}
                      >
                        {entry}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
