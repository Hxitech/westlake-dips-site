import type { Metadata } from "next";

import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { T } from "@/components/ui/t";
import { focusPillars, focusPillarsEn, siteConfig } from "@/content/data/site";
import { timeline } from "@/content/data/timeline";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "关于峰会 | About",
  description: "Learn about the DIPS Summit — mission, history, and core themes.",
  path: "/about",
});

const summitOverview = {
  lead: {
    zh: "全国数智病理峰会（Digital and Intelligent Pathology Summit, DIPS）由国内顶尖高校与中华医学会病理学分会、北京精鉴病理学发展基金会共同发起，是国内聚焦人工智能大模型与病理学深度融合的高端学术会议。",
    en: "The Digital and Intelligent Pathology Summit (DIPS) is jointly initiated by leading Chinese universities, the Chinese Society of Pathology, and the Beijing Jingjian Pathology Development Foundation. It is a premier academic forum dedicated to the deep integration of large AI models and pathology.",
  },
  body: [
    {
      zh: "作为行业专业学术盛会，峰会立足医工交叉创新方向，紧扣人工智能发展浪潮与病理学科临床需求，每届围绕前沿热点、技术突破、临床转化与产业融合设定核心主题，汇聚全球人工智能、数字病理及精准医疗领域的知名专家、临床大咖、科研人才与先锋代表，通过多元形式分享前沿研究、临床应用与产业趋势，搭建思想交流、技术对接、合作共赢的高效平台。",
      en: "As a leading professional gathering, the summit is rooted in interdisciplinary medical-engineering innovation and responds directly to both the rise of AI and the practical needs of pathology. Each edition is organized around frontier topics, technical breakthroughs, clinical translation, and industry collaboration, bringing together renowned experts, clinical leaders, researchers, and pioneering representatives from AI, digital pathology, and precision medicine to exchange cutting-edge research, clinical applications, and industry trends.",
    },
    {
      zh: "峰会致力于推动病理学从数字化迈向智能化，助力 AI 技术与病理临床、科研、产业深度融合，赋能精准医疗创新发展。未来，峰会将逐年举办、迭代升级，聚焦行业核心痛点与发展方向，不断拓宽交流边界、深化合作维度，打造数智病理领域的学术交流高地、技术转化桥梁、产业合作平台与人才培养阵地，诚邀国内外同仁携手共探发展新路径，共促产业新升级，推动我国数智病理事业创新突破与国际接轨。",
      en: "DIPS is committed to moving pathology from digitalization toward true intelligence, accelerating the integration of AI with clinical pathology, research, and industry to power innovation in precision medicine. Looking ahead, the summit will continue on an annual basis, evolving with the field's core challenges and future directions, expanding the boundaries of exchange, deepening collaboration, and growing into a hub for academic dialogue, a bridge for technology transfer, a platform for industry partnership, and a base for talent cultivation.",
    },
  ],
};

const summitVision = [
  {
    title: { zh: "学术交流高地", en: "Academic Exchange Hub" },
    description: {
      zh: "汇聚全球数智病理、AI 与精准医疗领域专家，形成高密度学术对话。",
      en: "Gather global experts across digital pathology, AI, and precision medicine for high-quality scholarly dialogue.",
    },
  },
  {
    title: { zh: "技术转化桥梁", en: "Translation Bridge" },
    description: {
      zh: "让前沿算法、数字病理流程与临床落地之间建立更直接的连接。",
      en: "Create a more direct path from frontier algorithms and digital pathology workflows to clinical adoption.",
    },
  },
  {
    title: { zh: "产业合作平台", en: "Industry Platform" },
    description: {
      zh: "推动医院、科研机构、高校与企业之间形成长期协作关系。",
      en: "Strengthen long-term collaboration among hospitals, research institutes, universities, and enterprises.",
    },
  },
  {
    title: { zh: "人才培养阵地", en: "Talent Base" },
    description: {
      zh: "为青年学者、科研人才与产业先锋提供展示、连接与成长机会。",
      en: "Provide young scholars, researchers, and innovators with opportunities to present, connect, and grow.",
    },
  },
];

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

      {/* Summit Overview */}
      <section className="container-shell py-16 sm:py-20">
        <SectionHeading
          description={
            <T
              zh="围绕人工智能大模型与病理学深度融合，打造连接学术、临床、科研与产业的高端平台。"
              en="A high-level platform connecting academia, clinical practice, research, and industry around the deep integration of large AI models and pathology."
            />
          }
          eyebrow={<T zh="峰会简介" en="Overview" />}
          title={<T zh="全国数智病理领域的高端学术会议" en="A Premier Forum for Digital & Intelligent Pathology" />}
        />
        <div className="mt-10 grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
          <article className="panel accent-ring relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
            <div className="absolute inset-x-0 top-0 h-36 bg-[radial-gradient(circle_at_top_left,rgba(93,194,255,0.16),transparent_55%),linear-gradient(180deg,rgba(255,255,255,0.06),transparent)]" />
            <div className="relative">
              <div className="flex flex-wrap gap-2 text-[0.68rem] uppercase tracking-[0.26em] text-cyan-200/88">
                <span className="rounded-full border border-cyan-300/20 bg-cyan-300/8 px-3 py-1.5">DIPS</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                  <T zh="AI × Pathology" en="AI × Pathology" />
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                  <T zh="Academic Summit" en="Academic Summit" />
                </span>
              </div>
              <h2 className="mt-6 max-w-3xl font-serif text-2xl leading-tight text-white sm:text-3xl lg:text-[2.25rem]">
                <T zh="以数智病理为核心，连接前沿研究、临床应用与产业未来" en="Connecting frontier research, clinical practice, and industry around digital and intelligent pathology" />
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-100/92 sm:text-[1.18rem]">
                <T zh={summitOverview.lead.zh} en={summitOverview.lead.en} />
              </p>

              <div className="mt-8 grid gap-4">
                {summitOverview.body.map((paragraph, index) => (
                  <div
                    className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 sm:p-6"
                    key={paragraph.zh}
                  >
                    <div className="text-xs uppercase tracking-[0.24em] text-cyan-200/82">
                      0{index + 1}
                    </div>
                    <p className="mt-3 text-sm leading-8 text-slate-300/84 sm:text-[0.98rem]">
                      <T zh={paragraph.zh} en={paragraph.en} />
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-cyan-300/18 bg-cyan-300/8 px-5 py-4 text-sm leading-7 text-cyan-50/92">
                <T
                  zh="通过多元形式分享前沿研究、临床应用与产业趋势，推动病理学从数字化迈向智能化。"
                  en="Through diverse formats, DIPS shares frontier research, clinical applications, and industry trends while helping pathology evolve from digitalization to intelligence."
                />
              </div>
            </div>
          </article>

          <div className="space-y-5">
            <div className="panel rounded-[2rem] p-6 sm:p-7">
              <div className="text-xs uppercase tracking-[0.26em] text-cyan-200/88">
                <T zh="核心议题" en="Core Themes" />
              </div>
              <h3 className="mt-4 font-serif text-2xl text-white">
                <T zh="每届围绕行业关键命题展开" en="Each edition centers on the field's most urgent themes" />
              </h3>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                {focusPillars.map((item, index) => (
                  <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4" key={item}>
                    <div className="text-xs uppercase tracking-[0.22em] text-cyan-200/76">
                      0{index + 1}
                    </div>
                    <div className="mt-2 text-base font-semibold text-white">
                      <T zh={item} en={focusPillarsEn[index]} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel rounded-[2rem] p-6 sm:p-7">
              <div className="text-xs uppercase tracking-[0.26em] text-cyan-200/88">
                <T zh="长期愿景" en="Long-term Vision" />
              </div>
              <h3 className="mt-4 font-serif text-2xl text-white">
                <T zh="持续搭建更深层的合作基础设施" en="Building deeper infrastructure for collaboration" />
              </h3>
              <div className="mt-6 space-y-3">
                {summitVision.map((item) => (
                  <div
                    className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] px-4 py-4"
                    key={item.title.zh}
                  >
                    <div className="text-base font-semibold text-white">
                      <T zh={item.title.zh} en={item.title.en} />
                    </div>
                    <p className="mt-2 text-sm leading-7 text-slate-300/80">
                      <T zh={item.description.zh} en={item.description.en} />
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="container-shell pb-20 pt-16 sm:pb-24 sm:pt-20">
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
    </>
  );
}
