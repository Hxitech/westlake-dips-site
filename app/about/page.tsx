import type { Metadata } from "next";

import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { T } from "@/components/ui/t";
import { focusPillars, focusPillarsEn } from "@/content/data/site";
import { timeline } from "@/content/data/timeline";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "关于峰会 | About",
  description: "Learn about the DIPS Summit — mission, history, and core themes.",
  path: "/about",
});

const summitOverview = {
  lead: {
    zh: "全国数智病理峰会（Digital and Intelligent Pathology Summit, DIPS）由病理临床与病理人工智能领域领军专家团队共同发起，是聚焦人工智能等前沿技术与病理学深度融合、以医工交叉推动数字病理、计算病理与病理人工智能学科高质量发展的全国性学术交流平台。",
    en: "The Digital and Intelligent Pathology Summit (DIPS) is jointly initiated by leading expert teams in clinical pathology and pathology AI. It serves as a national academic exchange platform focused on the deep integration of cutting-edge technologies such as AI with pathology.",
  },
  body: [
    {
      zh: "峰会立足医工交叉创新方向，紧扣人工智能发展浪潮与病理学科临床需求，每届围绕前沿热点、技术突破、临床转化与产业融合设定核心主题，汇聚全球人工智能、数字病理及精准医疗领域的知名专家、临床大咖、科研人才与先锋代表，通过多元形式分享前沿研究、临床应用与产业趋势，搭建思想交流、技术对接、合作共赢的高效平台。",
      en: "The summit is rooted in interdisciplinary medical-engineering innovation. Each edition brings together renowned experts from AI, digital pathology, and precision medicine to exchange cutting-edge research, clinical applications, and industry trends.",
    },
    {
      zh: "峰会致力于推动病理学从数字化迈向智能化，助力 AI 技术与病理临床、科研、产业深度融合，赋能精准医疗创新发展。未来，峰会将逐年举办、迭代升级，聚焦行业核心痛点与发展方向，打造数智病理领域的学术交流高地、技术转化桥梁、产业合作平台与人才培养阵地。",
      en: "DIPS is committed to moving pathology from digitalization toward true intelligence. Looking ahead, the summit will continue annually, growing into a hub for academic dialogue, technology transfer, industry partnership, and talent cultivation.",
    },
  ],
};

const summitVision = [
  { title: { zh: "学术交流高地", en: "Academic Hub" }, description: { zh: "汇聚全球数智病理、AI 与精准医疗领域专家，形成高密度学术对话。", en: "Gather global experts for high-quality scholarly dialogue." } },
  { title: { zh: "技术转化桥梁", en: "Translation Bridge" }, description: { zh: "让前沿算法与临床落地之间建立更直接的连接。", en: "Create a direct path from algorithms to clinical adoption." } },
  { title: { zh: "产业合作平台", en: "Industry Platform" }, description: { zh: "推动医院、科研机构、高校与企业之间形成长期协作关系。", en: "Strengthen long-term collaboration across institutions." } },
  { title: { zh: "人才培养阵地", en: "Talent Base" }, description: { zh: "为青年学者与科研人才提供展示、连接与成长机会。", en: "Provide young scholars opportunities to present and grow." } },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={<T zh="关于峰会" en="About" />}
        title={<T zh="聚焦数智病理，连接学术与产业" en="Bridging AI & Pathology" />}
        description={<T zh="探讨数智病理的系列创新，推动新技术在病理领域的落地。" en="Exploring innovations in digital pathology, driving new technologies into clinical practice." />}
      />

      <section className="container-shell py-16 sm:py-20">
        <SectionHeading
          eyebrow={<T zh="峰会简介" en="Overview" />}
          title={<T zh="全国数智病理领域的学术交流平台" en="A National Forum for Digital & Intelligent Pathology" />}
        />
        <div className="mt-8 max-w-3xl">
          <p className="text-body-copy text-gray-600">
            <T zh={summitOverview.lead.zh} en={summitOverview.lead.en} />
          </p>
          {summitOverview.body.map((p) => (
            <p className="text-body-copy mt-4 text-gray-500" key={p.zh.slice(0, 20)}>
              <T zh={p.zh} en={p.en} />
            </p>
          ))}
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gray-50">
        <div className="container-shell py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex h-full flex-col">
              <div className="min-h-[9.5rem]">
                <p className="text-body-copy font-medium text-blue-700">
                  <T zh="核心议题" en="Core Themes" />
                </p>
                <h2 className="text-section-title mt-2 font-bold tracking-tight text-gray-900">
                  <T zh="每届围绕行业关键命题展开" en="Centered on the field's most urgent themes" />
                </h2>
              </div>
              <div className="mt-6 grid auto-rows-fr gap-3">
                {focusPillars.map((item, i) => (
                  <div className="flex h-full items-center gap-3 rounded-md border border-gray-200 bg-white px-4 py-4" key={item}>
                    <span className="text-body-copy font-medium text-blue-700">0{i + 1}</span>
                    <span className="text-body-copy font-medium text-gray-900">
                      <T zh={item} en={focusPillarsEn[i]} />
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex h-full flex-col">
              <div className="min-h-[9.5rem]">
                <p className="text-body-copy font-medium text-blue-700">
                  <T zh="长期愿景" en="Vision" />
                </p>
                <h2 className="text-section-title mt-2 font-bold tracking-tight text-gray-900">
                  <T zh="持续搭建更深层的合作基础设施" en="Building deeper collaboration infrastructure" />
                </h2>
              </div>
              <div className="mt-6 grid auto-rows-fr gap-3">
                {summitVision.map((item) => (
                  <div className="flex h-full flex-col justify-center rounded-md border border-gray-200 bg-white px-4 py-4" key={item.title.zh}>
                    <div className="text-body-copy font-medium text-gray-900">
                      <T zh={item.title.zh} en={item.title.en} />
                    </div>
                    <p className="text-body-copy mt-1 text-gray-500">
                      <T zh={item.description.zh} en={item.description.en} />
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell py-16 sm:py-20">
        <SectionHeading
          eyebrow={<T zh="历史沿革" en="History" />}
          title={<T zh="峰会发展历程" en="Summit Timeline" />}
        />
        <div className="mt-8 space-y-4">
          {timeline.map((item) => (
            <div className="rounded-lg border border-gray-200 p-5 sm:p-6" key={item.year}>
              <div className="flex items-baseline gap-4">
                <span className="text-section-title font-bold text-gray-900">{item.year}</span>
                <span className="text-body-copy text-blue-700">
                  <T zh={item.title} en={item.titleEn} />
                </span>
              </div>
              <p className="text-body-copy mt-2 font-medium text-gray-700">
                <T zh={item.theme} en={item.themeEn} />
              </p>
              <ul className="mt-3 space-y-1">
                {item.achievements.map((a, i) => (
                  <li className="text-body-copy text-gray-500" key={a}>
                    <T zh={a} en={item.achievementsEn[i]} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
