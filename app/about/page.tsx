import type { Metadata } from "next";

import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { focusPillars, siteConfig } from "@/content/data/site";
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
        description="全国数智病理西湖峰会以病理数字化与人工智能协作为中心议题，连接学术、临床与产业，持续沉淀年度会议信号。"
        eyebrow="About The Summit"
        meta={[siteConfig.shortName, siteConfig.acronym, siteConfig.city]}
        title="以学术深度为底，以品牌表达为面"
      />
      <section className="container-shell py-18 sm:py-20">
        <div className="grid gap-10 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="panel rounded-[2rem] p-6 sm:p-8">
            <div className="text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/88">
              Summit Positioning
            </div>
            <h2 className="mt-4 font-serif text-3xl text-white">
              不止是会议站点，而是年度病理品牌入口
            </h2>
            <p className="mt-4 text-sm leading-8 text-slate-300/82">
              网站承担三类任务：第一，承接年度峰会的主视觉和品牌记忆；第二，组织会议通知、参会指南和报名入口；第三，把往届资产沉淀成持续可用的学术品牌档案。
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {focusPillars.map((item, index) => (
              <div className="panel rounded-[1.6rem] p-5" key={item}>
                <div className="text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/82">
                  0{index + 1}
                </div>
                <div className="mt-4 text-lg font-semibold text-white">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-18 sm:py-20">
        <SectionHeading
          description="时间轴按年度而不是栏目分割，让用户更清楚峰会如何从首届起形成连续品牌。"
          eyebrow="Timeline"
          title="峰会历史沿革"
        />
        <div className="mt-10 space-y-5">
          {timeline.map((item) => (
            <div className="panel rounded-[2rem] p-6 sm:p-8" key={item.year}>
              <div className="grid gap-6 lg:grid-cols-[0.28fr_0.72fr]">
                <div>
                  <div className="font-serif text-4xl text-white">{item.year}</div>
                  <div className="mt-3 text-sm uppercase tracking-[0.24em] text-cyan-200/82">
                    {item.title}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">{item.theme}</h3>
                  <div className="mt-5 grid gap-3">
                    {item.achievements.map((achievement) => (
                      <div
                        className="rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-slate-300/80"
                        key={achievement}
                      >
                        {achievement}
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
          description="嘉宾区在关于页面保留完整的人物介绍，首页则只承担预告作用。"
          eyebrow="Summit Speakers"
          title="本届嘉宾阵容预览"
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {speakers.map((speaker) => (
            <div className="panel rounded-[2rem] p-6" key={speaker.id}>
              <div className="text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/88">
                {speaker.organization}
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-white">
                {speaker.name}
              </h3>
              <p className="mt-2 text-sm text-slate-400">{speaker.role}</p>
              <p className="mt-4 text-sm leading-7 text-slate-300/80">
                {speaker.focus}
              </p>
              <blockquote className="mt-5 border-l border-cyan-300/45 pl-4 text-sm leading-7 text-white/88">
                “{speaker.quote}”
              </blockquote>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
