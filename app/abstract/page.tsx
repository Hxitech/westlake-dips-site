import type { Metadata } from "next";
import {
  BookOpen,
  CalendarCheck,
  FileText,
  Mail,
  Microscope,
  Send,
  UserCheck,
  Zap,
} from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { PageHero } from "@/components/ui/page-hero";
import { T } from "@/components/ui/t";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "论文投稿 | Abstract",
  description: "Submit your abstract for the DIPS 2026 Summit — guidelines, tracks, and key dates.",
  path: "/abstract",
});

const tracks = [
  {
    icon: Zap,
    title: { zh: "大模型前沿技术", en: "Large Model Frontier Technology" },
    description: {
      zh: "大模型在病理领域的最新应用、多模态融合、自监督学习与算法创新。",
      en: "Latest large-model applications in pathology, multimodal fusion, self-supervised learning, and algorithmic innovation.",
    },
  },
  {
    icon: Microscope,
    title: { zh: "AI 精准诊断", en: "AI Precision Diagnosis" },
    description: {
      zh: "人工智能驱动的精准病理诊断、辅助标注、质控管理与临床协作。",
      en: "AI-driven precision pathology diagnosis, assisted annotation, quality control, and clinical collaboration.",
    },
  },
  {
    icon: BookOpen,
    title: { zh: "青年学者交流", en: "Young Scholar Exchange" },
    description: {
      zh: "面向博士生、博士后及青年研究者的前沿研究分享与学术交流。",
      en: "Frontier research sharing and academic exchange for PhD students, postdocs, and young researchers.",
    },
  },
  {
    icon: UserCheck,
    title: { zh: "产业融合与未来发展", en: "Industry Integration & Future" },
    description: {
      zh: "科研机构、医院与企业探讨合作路径、产业化与临床转化。",
      en: "Institutions, hospitals, and enterprises explore collaboration, industrialization, and clinical translation.",
    },
  },
];

const keyDates = [
  {
    icon: Send,
    date: { zh: "2026 年 4 月 15 日", en: "April 15, 2026" },
    label: { zh: "投稿截止", en: "Submission Deadline" },
  },
  {
    icon: CalendarCheck,
    date: { zh: "2026 年 4 月 25 日", en: "April 25, 2026" },
    label: { zh: "录用通知", en: "Acceptance Notification" },
  },
  {
    icon: FileText,
    date: { zh: "2026 年 5 月 10 日", en: "May 10, 2026" },
    label: { zh: "峰会报告", en: "Summit Presentation" },
  },
];

export default function AbstractPage() {
  return (
    <>
      <PageHero
        description={
          <T
            zh="欢迎向第二届数智病理西湖峰会提交学术摘要，分享您的研究成果。"
            en="We welcome abstract submissions to the 2nd DIPS Summit. Share your research with the community."
          />
        }
        eyebrow={<T zh="论文投稿" en="Call for Abstracts" />}
        meta={[
          <T key="d" zh="截止 4 月 15 日" en="Deadline: Apr 15" />,
          <T key="t" zh="四大专场" en="4 Tracks" />,
          <T key="l" zh="中英文均可" en="ZH / EN" />,
        ]}
        title={<T zh="论文投稿" en="Abstract Submission" />}
      />

      {/* ── Tracks ── */}
      <section className="container-shell py-18 sm:py-20">
        <div className="text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/88">
          <T zh="投稿方向" en="Submission Tracks" />
        </div>
        <h2 className="mt-4 font-serif text-3xl text-white">
          <T zh="四大投稿专场" en="Four Submission Tracks" />
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-300/82">
          <T
            zh="请根据您的研究方向选择以下专场之一提交摘要。"
            en="Please select one of the following tracks that best matches your research."
          />
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {tracks.map((track) => {
            const Icon = track.icon;

            return (
              <div className="panel rounded-[1.75rem] p-6" key={track.title.zh}>
                <div className="flex size-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cyan-200">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  <T zh={track.title.zh} en={track.title.en} />
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300/80">
                  <T zh={track.description.zh} en={track.description.en} />
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Guidelines ── */}
      <section className="container-shell pb-18 sm:pb-20">
        <div className="panel rounded-[2rem] p-6 sm:p-8">
          <div className="text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/88">
            <T zh="投稿须知" en="Submission Guidelines" />
          </div>
          <h2 className="mt-4 font-serif text-3xl text-white">
            <T zh="格式与要求" en="Format & Requirements" />
          </h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {[
              {
                zh: "语言：中文或英文均可，摘要须包含中英文标题。",
                en: "Language: Chinese or English. Abstracts must include titles in both languages.",
              },
              {
                zh: "摘要长度：中文 300-500 字 / 英文 250-400 words。",
                en: "Length: 300-500 Chinese characters / 250-400 English words.",
              },
              {
                zh: "格式要求：标题、作者信息（姓名、单位、邮箱）、正文摘要、关键词（3-5 个）。",
                en: "Format: Title, author info (name, affiliation, email), abstract body, keywords (3-5).",
              },
              {
                zh: "文件命名：「投稿专场-第一作者姓名-稿件标题.docx」。",
                en: "File naming: 'Track-FirstAuthorName-Title.docx'.",
              },
              {
                zh: "提交方式：通过邮件发送至 can.fang@dipath.cn。",
                en: "Submission: Send via email to can.fang@dipath.cn.",
              },
              {
                zh: "每位作者最多提交 2 篇摘要。",
                en: "Each author may submit up to 2 abstracts.",
              },
            ].map((item) => (
              <div
                className="rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-5 text-sm leading-7 text-slate-300/82"
                key={item.zh}
              >
                <T zh={item.zh} en={item.en} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key Dates + Review Process ── */}
      <section className="container-shell pb-18 sm:pb-20">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Key Dates */}
          <div className="panel rounded-[2rem] p-6 sm:p-8">
            <div className="text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/88">
              <T zh="重要日期" en="Key Dates" />
            </div>
            <h2 className="mt-4 font-serif text-3xl text-white">
              <T zh="时间节点" en="Timeline" />
            </h2>
            <div className="mt-8 space-y-4">
              {keyDates.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    className="flex items-center gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4"
                    key={item.label.zh}
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/8 text-cyan-200">
                      <Icon className="size-4" />
                    </div>
                    <div>
                      <div className="text-base font-semibold text-white">
                        <T zh={item.date.zh} en={item.date.en} />
                      </div>
                      <div className="mt-0.5 text-sm text-slate-400">
                        <T zh={item.label.zh} en={item.label.en} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Review Process */}
          <div className="panel rounded-[2rem] p-6 sm:p-8">
            <div className="text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/88">
              <T zh="评审流程" en="Review Process" />
            </div>
            <h2 className="mt-4 font-serif text-3xl text-white">
              <T zh="审稿与录用" en="Review & Acceptance" />
            </h2>
            <div className="mt-8 space-y-4">
              {[
                {
                  step: "01",
                  title: { zh: "投稿提交", en: "Submit" },
                  desc: {
                    zh: "作者通过邮件提交摘要稿件至组委会。",
                    en: "Authors submit abstracts to the committee via email.",
                  },
                },
                {
                  step: "02",
                  title: { zh: "专家评审", en: "Peer Review" },
                  desc: {
                    zh: "学术委员会组织专家对稿件进行双盲评审。",
                    en: "The academic committee organizes experts for double-blind peer review.",
                  },
                },
                {
                  step: "03",
                  title: { zh: "录用通知", en: "Notification" },
                  desc: {
                    zh: "评审结果将通过邮件通知作者，录用稿件将安排峰会报告。",
                    en: "Results will be sent via email. Accepted papers will be scheduled for summit presentation.",
                  },
                },
              ].map((item) => (
                <div
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-5"
                  key={item.step}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs uppercase tracking-[0.25em] text-cyan-200/76">
                      {item.step}
                    </span>
                    <span className="text-base font-semibold text-white">
                      <T zh={item.title.zh} en={item.title.en} />
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-slate-300/80">
                    <T zh={item.desc.zh} en={item.desc.en} />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="container-shell pb-24 sm:pb-28">
        <div className="panel accent-ring relative overflow-hidden rounded-[2.25rem] border border-cyan-300/12 p-6 sm:p-8">
          <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-cyan-300/14 blur-3xl" />
          <div className="relative">
            <div className="flex items-center gap-3 text-cyan-200">
              <Mail className="size-5" />
              <span className="text-[0.68rem] uppercase tracking-[0.28em]">
                <T zh="投稿邮箱" en="Submit via Email" />
              </span>
            </div>
            <h2 className="mt-4 font-serif text-3xl text-white">
              <T zh="提交您的研究成果" en="Submit Your Research" />
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-300/82">
              <T
                zh="请将摘要稿件发送至 can.fang@dipath.cn，邮件标题格式：「DIPS2026投稿-专场名称-第一作者姓名」。如有疑问，欢迎联系会务组。"
                en="Please send your abstract to can.fang@dipath.cn with the subject line: 'DIPS2026-Track-FirstAuthorName'. For questions, please contact the organizing committee."
              />
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink
                external
                href="mailto:can.fang@dipath.cn?subject=DIPS2026%20Abstract%20Submission"
              >
                <T zh="发送投稿邮件" en="Submit via Email" />
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                <T zh="联系会务组" en="Contact Us" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
