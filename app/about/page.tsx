import type { Metadata } from "next";

import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { T } from "@/components/ui/t";
import { focusPillars, focusPillarsEn, siteConfig } from "@/content/data/site";
import { speakers } from "@/content/data/speakers";
import { timeline } from "@/content/data/timeline";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "关于峰会",
  description: "了解全国数智病理西湖峰会的定位、沿革与本届峰会的核心议题。",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        description={
          <T
            zh="全国数智病理西湖峰会以病理数字化与人工智能协作为中心议题，连接学术、临床与产业，推动数智病理领域持续发展。"
            en="The National DIPS Summit focuses on digital pathology and AI collaboration, connecting academia, clinical practice, and industry to drive continuous advancement."
          />
        }
        eyebrow={<T zh="关于峰会" en="About the Summit" />}
        meta={[
          <T key="s" zh={siteConfig.shortName} en={siteConfig.shortNameEn} />,
          siteConfig.acronym,
          <T key="c" zh={siteConfig.city} en={siteConfig.cityEn} />,
        ]}
        title={<T zh="聚焦数智病理，连接学术与产业" en="Bridging AI & Pathology, Academia & Industry" />}
      />
      <section className="container-shell py-18 sm:py-20">
        <div className="grid gap-10 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="panel rounded-[2rem] p-6 sm:p-8">
            <div className="text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/88">
              <T zh="峰会定位" en="Our Mission" />
            </div>
            <h2 className="mt-4 font-serif text-3xl text-white">
              <T zh="中国数智病理领域的年度旗舰峰会" en="China's Flagship Annual Summit in Digital Pathology" />
            </h2>
            <p className="mt-4 text-sm leading-8 text-slate-300/82">
              <T
                zh="峰会汇聚全国顶尖病理学者、AI 研究者、临床专家与产业领袖，围绕数字病理基础设施、AI 辅助诊断与临床转化等核心议题开展深度交流，推动产学研用全链条协同。"
                en="The summit brings together leading pathologists, AI researchers, clinicians, and industry leaders to engage in deep discussions on digital pathology infrastructure, AI-assisted diagnosis, and clinical translation."
              />
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {focusPillars.map((item, index) => (
              <div className="panel rounded-[1.6rem] p-5" key={item}>
                <div className="text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/82">
                  0{index + 1}
                </div>
                <div className="mt-4 text-lg font-semibold text-white">
                  <T zh={item} en={focusPillarsEn[index]} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-18 sm:py-20">
        <SectionHeading
          description={
            <T
              zh="峰会自 2025 年创办以来，持续积累学术成果与品牌影响力。"
              en="Since its founding in 2025, the summit has continuously built academic achievements and brand influence."
            />
          }
          eyebrow={<T zh="历史沿革" en="History" />}
          title={<T zh="峰会发展历程" en="Summit Timeline" />}
        />
        <div className="mt-10 space-y-5">
          {timeline.map((item) => (
            <div className="panel rounded-[2rem] p-6 sm:p-8" key={item.year}>
              <div className="grid gap-6 lg:grid-cols-[0.28fr_0.72fr]">
                <div>
                  <div className="font-serif text-4xl text-white">{item.year}</div>
                  <div className="mt-3 text-sm uppercase tracking-[0.24em] text-cyan-200/82">
                    <T zh={item.title} en={item.titleEn} />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    <T zh={item.theme} en={item.themeEn} />
                  </h3>
                  <div className="mt-5 grid gap-3">
                    {item.achievements.map((achievement, i) => (
                      <div
                        className="rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-slate-300/80"
                        key={achievement}
                      >
                        <T zh={achievement} en={item.achievementsEn[i]} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-shell pb-24 pt-18 sm:pb-28 sm:pt-20">
        <SectionHeading
          description={
            <T
              zh="来自学术、临床、AI 与产业界的重磅嘉宾，分享最前沿的研究与实践成果。"
              en="Distinguished speakers from academia, clinics, AI research, and industry sharing cutting-edge insights."
            />
          }
          eyebrow={<T zh="嘉宾阵容" en="Speakers" />}
          title={<T zh="本届嘉宾" en="Speaker Lineup" />}
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {speakers.map((speaker) => (
            <div className="panel rounded-[2rem] p-6" key={speaker.id}>
              <div className="text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/88">
                <T zh={speaker.organization} en={speaker.organizationEn} />
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-white">
                <T zh={speaker.name} en={speaker.nameEn} />
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                <T zh={speaker.role} en={speaker.roleEn} />
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-300/80">
                <T zh={speaker.focus} en={speaker.focusEn} />
              </p>
              <blockquote className="mt-5 border-l border-cyan-300/45 pl-4 text-sm leading-7 text-white/88">
                &ldquo;<T zh={speaker.quote} en={speaker.quoteEn} />&rdquo;
              </blockquote>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
