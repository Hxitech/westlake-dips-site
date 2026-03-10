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
  description: "了解全国数智病理西湖峰会的定位、沿革与核心议题。",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        description={
          <T
            zh="峰会以病理数字化与人工智能协作为中心议题，连接学术、临床与产业，推动数智病理持续发展。"
            en="The summit focuses on digital pathology and AI collaboration, connecting academia, clinics, and industry."
          />
        }
        eyebrow={<T zh="关于峰会" en="About" />}
        meta={[
          <T key="a" zh={siteConfig.acronym} en={siteConfig.acronym} />,
          <T key="c" zh={siteConfig.city} en={siteConfig.cityEn} />,
          <T key="v" zh={siteConfig.venue} en={siteConfig.venueEn} />,
        ]}
        title={<T zh="聚焦数智病理，连接学术与产业" en="Bridging AI & Pathology, Academia & Industry" />}
      />

      {/* Mission + Focus Pillars */}
      <section className="container-shell py-16 sm:py-20">
        <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="panel rounded-2xl p-6 sm:p-8">
            <div className="text-xs uppercase tracking-[0.25em] text-cyan-200/88">
              <T zh="峰会定位" en="Our Mission" />
            </div>
            <h2 className="mt-4 font-serif text-2xl text-white sm:text-3xl">
              <T zh="中国数智病理领域旗舰学术峰会" en="China's Flagship Digital Pathology Summit" />
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300/82">
              <T
                zh="峰会汇聚全国病理学者、AI 研究者、临床专家与产业领袖，围绕数字病理基础设施、AI 辅助诊断与临床转化展开深度交流。由西湖大学与中华医学会病理学分会联合发起。"
                en="The summit gathers leading pathologists, AI researchers, clinicians, and industry leaders for in-depth exchanges on digital pathology infrastructure, AI-assisted diagnosis, and clinical translation. Co-initiated by Westlake University and the Chinese Society of Pathology."
              />
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {focusPillars.map((item, index) => (
              <div className="panel rounded-2xl p-5" key={item}>
                <div className="text-xs uppercase tracking-[0.25em] text-cyan-200/82">
                  0{index + 1}
                </div>
                <div className="mt-3 text-base font-semibold text-white">
                  <T zh={item} en={focusPillarsEn[index]} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organization Info */}
      <section className="container-shell py-16 sm:py-20">
        <SectionHeading
          description={
            <T
              zh="由学术机构与医学学会联合推动。"
              en="Jointly driven by academic institutions and medical societies."
            />
          }
          eyebrow={<T zh="大会组织" en="Organization" />}
          title={<T zh="主办与承办单位" en="Hosts & Organizers" />}
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <div className="panel rounded-2xl p-6">
            <div className="text-xs uppercase tracking-[0.25em] text-cyan-200/88">
              <T zh="主办单位" en="Hosts" />
            </div>
            <div className="mt-4 space-y-3">
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                <T zh="西湖大学" en="Westlake University" />
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                <T zh="中华医学会病理学分会" en="Chinese Society of Pathology" />
              </div>
            </div>
          </div>
          <div className="panel rounded-2xl p-6">
            <div className="text-xs uppercase tracking-[0.25em] text-cyan-200/88">
              <T zh="承办单位" en="Organizer" />
            </div>
            <div className="mt-4 space-y-3">
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                <T zh="西湖大学" en="Westlake University" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="container-shell py-16 sm:py-20">
        <SectionHeading
          description={
            <T
              zh="峰会自 2025 年创办以来，持续积累学术成果与品牌影响力。"
              en="Since its founding in 2025, the summit has steadily built academic impact."
            />
          }
          eyebrow={<T zh="历史沿革" en="History" />}
          title={<T zh="峰会发展历程" en="Summit Timeline" />}
        />
        <div className="mt-10 space-y-5">
          {timeline.map((item) => (
            <div className="panel rounded-2xl p-6 sm:p-8" key={item.year}>
              <div className="grid gap-5 lg:grid-cols-[0.25fr_0.75fr]">
                <div>
                  <div className="font-serif text-3xl text-white">{item.year}</div>
                  <div className="mt-2 text-sm text-cyan-200/82">
                    <T zh={item.title} en={item.titleEn} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    <T zh={item.theme} en={item.themeEn} />
                  </h3>
                  <div className="mt-4 space-y-2">
                    {item.achievements.map((a, i) => (
                      <div
                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-6 text-slate-300/80"
                        key={a}
                      >
                        <T zh={a} en={item.achievementsEn[i]} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Speakers */}
      <section className="container-shell pb-20 pt-16 sm:pb-24 sm:pt-20">
        <SectionHeading
          description={
            <T
              zh="来自学术、临床、AI 与产业界的嘉宾。"
              en="Speakers from academia, clinics, AI, and industry."
            />
          }
          eyebrow={<T zh="嘉宾阵容" en="Speakers" />}
          title={<T zh="本届嘉宾" en="Speaker Lineup" />}
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {speakers.map((speaker) => (
            <div className="panel rounded-2xl p-5" key={speaker.id}>
              <div className="text-xs uppercase tracking-[0.25em] text-cyan-200/88">
                <T zh={speaker.organization} en={speaker.organizationEn} />
              </div>
              <h3 className="mt-3 text-lg font-semibold text-white">
                <T zh={speaker.name} en={speaker.nameEn} />
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                <T zh={speaker.role} en={speaker.roleEn} />
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300/80">
                <T zh={speaker.focus} en={speaker.focusEn} />
              </p>
              <blockquote className="mt-3 border-l-2 border-cyan-300/40 pl-3 text-sm leading-6 text-white/85 italic">
                &ldquo;<T zh={speaker.quote} en={speaker.quoteEn} />&rdquo;
              </blockquote>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
