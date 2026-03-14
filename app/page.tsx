import Link from "next/link";

import { CountdownClock } from "@/components/home/countdown-clock";
import { AnimatedSection } from "@/components/ui/animated-section";
import { ButtonLink } from "@/components/ui/button-link";
import { HeroAtmosphere } from "@/components/ui/hero-atmosphere";
import { SectionDivider } from "@/components/ui/section-divider";
import { SectionHeading } from "@/components/ui/section-heading";
import { T } from "@/components/ui/t";
import { heroContent, quickFacts, schedulePreview, siteConfig, summitHighlights } from "@/content/data/site";
import { partnerCollaborationAreas } from "@/content/data/partners";
import { timeline } from "@/content/data/timeline";
import { getAnnouncementSummaries, getArchiveSummaries, formatDisplayDate } from "@/lib/content";

const eventStructuredData = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: siteConfig.name,
  description: siteConfig.description,
  startDate: siteConfig.eventStart,
  endDate: siteConfig.eventEnd,
  eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: siteConfig.venue,
    address: siteConfig.address,
  },
};

const summitThemes = [
  {
    idx: "01",
    zh: "大模型前沿技术",
    zhSub: "围绕多模态、病理大模型与算法创新，聚焦最新研究成果与应用范式。",
    en: "Large Model Frontiers",
    enSub: "Multimodal systems, pathology foundation models, and algorithmic innovation.",
  },
  {
    idx: "02",
    zh: "AI 精准诊断",
    zhSub: "链接病理医生、临床团队与数据系统，推进 AI 辅助精准诊断落地。",
    en: "AI Precision Diagnosis",
    enSub: "Connecting pathologists, clinicians, and data systems for practical AI diagnosis.",
  },
  {
    idx: "03",
    zh: "产业融合与转化",
    zhSub: "让科研、临床与产业形成协作闭环，推动成果走向真实场景。",
    en: "Industry Translation",
    enSub: "Turning research, clinical practice, and industry into one translational workflow.",
  },
];

const heroSignals = [
  {
    label: { zh: "Academic Axis", en: "Academic Axis" },
    value: { zh: "AI x 病理", en: "AI x Pathology" },
    detail: {
      zh: "从基础研究到临床应用的连续坐标。",
      en: "A continuous axis from research to clinical practice.",
    },
  },
  {
    label: { zh: "Summit Format", en: "Summit Format" },
    value: { zh: "主论坛 + 专场", en: "Plenary + Tracks" },
    detail: {
      zh: "一天内完成主题报告、专题交流与产业对话。",
      en: "Plenary reports, focused sessions, and industry dialogue in one day.",
    },
  },
  {
    label: { zh: "Research Network", en: "Research Network" },
    value: { zh: "全国协同", en: "Nationwide" },
    detail: {
      zh: "高校、医院、科研与企业代表深度汇聚。",
      en: "Universities, hospitals, researchers, and industry leaders convene together.",
    },
  },
];

const endingTimelineLinks = timeline.map((item) => ({
  href: item.year === 2025 ? `/archives/${item.year}` : "/about",
  key: `${item.year}-${item.title}`,
  label: item,
}));

export default async function Home() {
  const [announcements, archives] = await Promise.all([
    getAnnouncementSummaries(),
    getArchiveSummaries(),
  ]);

  const featuredArchive = archives[0];

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventStructuredData),
        }}
        type="application/ld+json"
      />

      <section className="relative overflow-hidden border-b border-white/10">
        <HeroAtmosphere />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,10,18,0.14),rgba(5,10,18,0.72)_58%,rgba(5,10,18,0.94))]" />
        <div className="container-shell relative py-14 sm:py-[4.5rem] lg:py-24">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1.02fr)_minmax(24rem,0.98fr)] xl:items-start">
            <div className="max-w-3xl">
              <span className="luxe-badge">
                <T zh={heroContent.eyebrow} en={heroContent.eyebrowEn} />
              </span>
              <div className="mt-6 text-[0.72rem] uppercase tracking-[0.32em] text-slate-300/76">
                DIPS / Digital Intelligence in Pathology Summit
              </div>
              <h1 className="mt-4 font-serif text-[clamp(2.35rem,5vw,4.85rem)] leading-[1.02] tracking-[-0.055em] text-white [text-wrap:balance]">
                <T zh={siteConfig.name} en={siteConfig.nameEn} />
              </h1>
              <p className="mt-4 max-w-3xl text-[clamp(1.4rem,2.2vw,2.5rem)] leading-[1.16] text-gradient [text-wrap:balance]">
                <T zh={heroContent.title} en={heroContent.titleEn} />
              </p>
              <p className="mt-6 max-w-3xl text-[clamp(1rem,1.35vw,1.16rem)] leading-8 text-slate-300/84 [text-wrap:pretty]">
                <T zh={heroContent.subtitle} en={heroContent.subtitleEn} />
              </p>

              <div className="mt-7 flex flex-wrap gap-3 text-sm text-slate-200">
                <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 backdrop-blur-sm">
                  <span className="text-[0.68rem] uppercase tracking-[0.24em] text-cyan-200/78">
                    <T zh="地点" en="Venue" />
                  </span>
                  <span className="text-sm text-white">
                    <T zh={heroContent.location} en={heroContent.locationEn} />
                  </span>
                </div>
                <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 backdrop-blur-sm">
                  <span className="text-[0.68rem] uppercase tracking-[0.24em] text-cyan-200/78">
                    <T zh="时间" en="Date" />
                  </span>
                  <span className="text-sm text-white">
                    <T zh={heroContent.dateText} en={heroContent.dateTextEn} />
                  </span>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {heroContent.ctas.map((cta) => (
                  <ButtonLink
                    href={cta.href}
                    key={cta.href}
                    variant={cta.variant}
                  >
                    <T zh={cta.label} en={cta.labelEn} />
                  </ButtonLink>
                ))}
              </div>
            </div>

            <AnimatedSection className="xl:pt-8" threshold={0.08} variant="scale">
              <div className="panel-luxe rounded-[2rem] border border-white/10 p-5 sm:p-6 lg:p-7">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/78">
                      Summit Signal Deck
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-300/76">
                      <T
                        zh="用一块信息甲板快速掌握本届峰会的主题、时间与规模。"
                        en="One focused deck for the summit theme, timing, and scale."
                      />
                    </p>
                  </div>
                  <div className="rounded-full border border-[rgba(217,196,157,0.22)] bg-[rgba(217,196,157,0.08)] px-3 py-1 text-[0.68rem] uppercase tracking-[0.24em] text-[rgba(236,220,193,0.9)]">
                    DIPS 2026
                  </div>
                </div>

                <div className="mt-6 rounded-[1.7rem] border border-white/10 bg-white/[0.045] px-5 py-5 backdrop-blur-sm">
                  <div className="text-[0.68rem] uppercase tracking-[0.24em] text-cyan-200/74">
                    <T zh="会议主题" en="Theme" />
                  </div>
                  <h2 className="mt-3 font-serif text-[clamp(1.7rem,2.4vw,2.35rem)] leading-tight text-white [text-wrap:balance]">
                    <T zh={heroContent.title} en={heroContent.titleEn} />
                  </h2>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300/76">
                    <T
                      zh="聚焦前沿研究、临床转化与产业共建，打造更高密度的学术交流场域。"
                      en="Focused on frontier research, clinical translation, and ecosystem collaboration in one high-density academic gathering."
                    />
                  </p>
                </div>

                <div className="mt-5">
                  <CountdownClock
                    eventEnd={siteConfig.eventEnd}
                    eventStart={siteConfig.eventStart}
                    variant="embedded"
                  />
                </div>

                <AnimatedSection
                  className="mt-5 grid grid-cols-2 gap-4"
                  stagger
                  threshold={0.04}
                  variant="fade"
                >
                  {quickFacts.map((fact) => (
                    <div
                      className="panel-glow rounded-[1.55rem] border border-white/10 bg-[linear-gradient(180deg,rgba(14,26,45,0.78),rgba(9,16,29,0.72))] p-4 backdrop-blur-sm"
                      key={fact.label}
                    >
                      <div className="font-serif text-[clamp(2rem,3.4vw,2.7rem)] leading-none text-white">
                        <T zh={fact.value} en={fact.valueEn} />
                      </div>
                      <div className="mt-2 text-sm font-medium text-slate-100">
                        <T zh={fact.label} en={fact.labelEn} />
                      </div>
                      <div className="mt-2 text-xs leading-5 text-slate-400">
                        <T zh={fact.detail} en={fact.detailEn} />
                      </div>
                    </div>
                  ))}
                </AnimatedSection>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <SectionDivider />

      <AnimatedSection className="container-shell py-16 sm:py-20" variant="fade">
        <AnimatedSection className="grid gap-4 md:grid-cols-3" stagger variant="fade">
          {heroSignals.map((item) => (
            <div
              className="panel-glow rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,19,34,0.74),rgba(7,13,24,0.66))] px-4 py-4 backdrop-blur"
              key={item.label.en}
            >
              <div className="text-[0.68rem] uppercase tracking-[0.18em] text-cyan-200/76">
                <T zh={item.label.zh} en={item.label.en} />
              </div>
              <div className="mt-3 text-lg font-medium text-white">
                <T zh={item.value.zh} en={item.value.en} />
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-300/76">
                <T zh={item.detail.zh} en={item.detail.en} />
              </p>
            </div>
          ))}
        </AnimatedSection>
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <SectionHeading
            className="mt-12"
            description={
              <T
                zh="以更清晰的议题轨道串联人工智能、临床诊断与成果转化，让峰会既有学术锋芒，也有产业落地。"
                en="Three intentional tracks connect AI research, clinical diagnosis, and translation into one coherent summit narrative."
              />
            }
            eyebrow={<T zh="峰会聚焦" en="Summit Focus" />}
            title={<T zh="三大核心议题" en="Three Signature Tracks" />}
          />
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(11,21,37,0.7),rgba(10,16,28,0.5))] px-5 py-5 text-sm leading-7 text-slate-300/78 backdrop-blur">
            <T
              zh="页面视觉与信息结构同步向“国际学术会议官网”靠拢：版式更稳、动效更克制、重点信息更集中。"
              en="The visual system shifts toward an international academic summit language: steadier composition, more refined motion, and tighter information hierarchy."
            />
          </div>
        </div>

        <AnimatedSection className="mt-10 grid gap-4 lg:grid-cols-3" stagger variant="fade">
          {summitThemes.map((item) => (
            <div
              className="panel-glow relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,27,46,0.88),rgba(9,16,28,0.76))] p-6"
              key={item.idx}
            >
              <div className="absolute -right-8 top-0 h-28 w-28 rounded-full bg-cyan-300/10 blur-3xl" />
              <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(118,214,255,0.42),transparent)]" />
              <div className="text-[0.68rem] uppercase tracking-[0.32em] text-cyan-200/80">
                {item.idx}
              </div>
              <div className="mt-4 font-serif text-[1.45rem] leading-tight text-white">
                <T zh={item.zh} en={item.en} />
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300/80">
                <T zh={item.zhSub} en={item.enSub} />
              </p>
            </div>
          ))}
        </AnimatedSection>
      </AnimatedSection>

      <SectionDivider />

      <AnimatedSection className="container-shell py-16 sm:py-20" variant="fade">
        <SectionHeading
          description={
            <T
              zh="前沿学术报告、跨界对话与成果展示，构建数智病理全链条协作平台。"
              en="Frontier research, cross-sector dialogue, and translation showcases build a full-spectrum collaboration platform."
            />
          }
          eyebrow={<T zh="峰会亮点" en="Highlights" />}
          title={<T zh="为何参加本届峰会" en="Why This Summit Matters" />}
        />

        <AnimatedSection className="mt-10 grid gap-5 lg:grid-cols-3" stagger variant="fade">
          {summitHighlights.map((item) => (
            <div
              className="panel-glow rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,22,38,0.86),rgba(8,15,26,0.72))] p-6"
              key={item.title}
            >
              <div className="text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/78">
                <T zh={item.metric} en={item.metricEn} />
              </div>
              <h3 className="mt-3 text-[1.28rem] font-semibold text-white">
                <T zh={item.title} en={item.titleEn} />
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300/78">
                <T zh={item.description} en={item.descriptionEn} />
              </p>
            </div>
          ))}
        </AnimatedSection>
      </AnimatedSection>

      <SectionDivider />

      <AnimatedSection className="container-shell py-16 sm:py-20" variant="fade">
        <div className="grid gap-8 xl:grid-cols-[1.12fr_0.88fr]">
          <div className="panel-luxe rounded-[2rem] border border-white/10 p-5 sm:p-6">
            <SectionHeading
              action={
                <ButtonLink href="/announcements" size="compact" variant="secondary">
                  <T zh="查看全部" en="View All" />
                </ButtonLink>
              }
              description={
                <T
                  zh="峰会最新日程、嘉宾确认与报名信息以信息流方式更新。"
                  en="Agenda releases, speaker confirmations, and registration updates arrive as an editorial stream."
                />
              }
              eyebrow={<T zh="最新动态" en="News" />}
              title={<T zh="峰会通知" en="Announcements" />}
            />
            <AnimatedSection className="mt-8 space-y-1" stagger variant="fade">
              {announcements.slice(0, 3).map((item, index) => (
                <Link
                  className="group block rounded-[1.5rem] px-4 py-4 transition hover:bg-white/[0.05]"
                  href={`/announcements/${item.slug}`}
                  key={item.slug}
                >
                  <div className="flex flex-wrap items-center gap-2 text-[0.68rem] uppercase tracking-[0.24em] text-slate-400">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span><T zh={item.category} en={item.categoryEn ?? item.category} /></span>
                    <span><T zh={formatDisplayDate(item.date, "zh")} en={formatDisplayDate(item.date, "en")} /></span>
                    {item.pinned ? (
                      <span className="rounded-full border border-cyan-300/26 px-2 py-0.5 text-cyan-200">
                        <T zh="置顶" en="Pinned" />
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-3 text-[1.1rem] font-semibold leading-7 text-white transition group-hover:text-cyan-200">
                    <T zh={item.title} en={item.titleEn ?? item.title} />
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300/76 line-clamp-2">
                    <T zh={item.excerpt} en={item.excerptEn ?? item.excerpt} />
                  </p>
                </Link>
              ))}
            </AnimatedSection>
          </div>

          <div>
            <SectionHeading
              description={
                <T
                  zh="以更像 agenda rail 的方式呈现开幕主论坛、专题交流与产业对话。"
                  en="Presented as an agenda rail that foregrounds the summit's keynote, specialist exchange, and industry dialogue."
                />
              }
              eyebrow={<T zh="日程预览" en="Schedule" />}
              title={<T zh="精彩议程" en="Agenda Highlights" />}
            />
            <div className="mt-8 panel-luxe rounded-[2rem] border border-white/10 px-5 py-6 sm:px-6">
              <AnimatedSection className="relative space-y-4 before:absolute before:bottom-3 before:left-[0.82rem] before:top-3 before:w-px before:bg-[linear-gradient(180deg,rgba(120,217,255,0.3),rgba(217,196,157,0.08))]" stagger variant="fade">
                {schedulePreview.map((item) => (
                  <div
                    className="relative pl-10"
                    key={item.title}
                  >
                    <div className="absolute left-0 top-1.5 flex size-7 items-center justify-center rounded-full border border-cyan-300/24 bg-cyan-300/10 text-[0.68rem] uppercase tracking-[0.2em] text-cyan-200">
                      •
                    </div>
                    <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] px-4 py-4 backdrop-blur-sm">
                      <div className="text-[0.68rem] uppercase tracking-[0.24em] text-cyan-200/76">
                        <T zh={item.time} en={item.timeEn} />
                      </div>
                      <div className="mt-2 text-base font-medium text-white">
                        <T zh={item.title} en={item.titleEn} />
                      </div>
                      <div className="mt-2 text-sm leading-6 text-slate-300/78">
                        <T zh={item.description} en={item.descriptionEn} />
                      </div>
                    </div>
                  </div>
                ))}
              </AnimatedSection>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <SectionDivider />

      <AnimatedSection className="container-shell py-16 sm:py-20" variant="fade">
        <SectionHeading
          action={
            <ButtonLink href="/partners" size="compact" variant="secondary">
              <T zh="查看详情" en="View Details" />
            </ButtonLink>
          }
          description={
            <T
              zh="欢迎高校、医院、科研机构、企业与社会组织围绕学术、临床与产业协同开展合作。"
              en="Universities, hospitals, research institutes, enterprises, and social organizations are welcome to collaborate across academic, clinical, and industry initiatives."
            />
          }
          eyebrow={<T zh="合作伙伴" en="Partners" />}
          title={<T zh="共建数智病理合作网络" en="Build the Partnership Network" />}
        />
        <AnimatedSection className="mt-10 grid gap-4 sm:grid-cols-3" stagger variant="fade">
          {partnerCollaborationAreas.map((item) => (
            <div
              className="panel-glow rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,22,38,0.84),rgba(8,15,26,0.72))] p-5"
              key={item.id}
            >
              <div className="text-[0.68rem] uppercase tracking-[0.24em] text-cyan-200/78">
                <T zh={item.title} en={item.titleEn} />
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-300/78">
                <T zh={item.description} en={item.descriptionEn} />
              </p>
            </div>
          ))}
        </AnimatedSection>
      </AnimatedSection>

      {featuredArchive ? (
        <>
          <SectionDivider />
          <AnimatedSection className="container-shell py-16 sm:py-20" variant="fade">
            <SectionHeading
              action={
                <ButtonLink href="/archives" size="compact" variant="secondary">
                  <T zh="查看全部" en="View All" />
                </ButtonLink>
              }
              description={
                <T
                  zh="回顾历届峰会的城市记忆、主题演化与学术合作轨迹。"
                  en="Revisit the host city, summit themes, and evolving collaboration pathways from previous editions."
                />
              }
              eyebrow={<T zh="往届回顾" en="Archives" />}
              title={<T zh="往届峰会" en="Past Summits" />}
            />
            <div className="mt-10 panel-luxe rounded-[2rem] border border-white/10 p-6 sm:p-8">
              <div className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
                <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] px-5 py-6">
                  <div className="text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/78">
                    Archive Signal
                  </div>
                  <div className="mt-4 font-serif text-[clamp(3rem,6vw,4.4rem)] leading-none text-white">
                    {featuredArchive.year}
                  </div>
                  <div className="mt-3 text-sm leading-6 text-slate-300/78">
                    <T
                      zh={featuredArchive.location}
                      en={featuredArchive.locationEn ?? featuredArchive.location}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-[1.4rem] font-semibold leading-8 text-white">
                    <T
                      zh={featuredArchive.title}
                      en={featuredArchive.titleEn ?? featuredArchive.title}
                    />
                  </h3>
                  <p className="mt-2 text-base text-cyan-200/90">
                    <T
                      zh={featuredArchive.theme}
                      en={featuredArchive.themeEn ?? featuredArchive.theme}
                    />
                  </p>
                  <p className="mt-4 text-sm leading-7 text-slate-300/80">
                    <T
                      zh={featuredArchive.highlight}
                      en={featuredArchive.highlightEn ?? featuredArchive.highlight}
                    />
                  </p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {featuredArchive.gallery.map((item, index) => (
                      <div
                        className="rounded-[1.3rem] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm leading-6 text-slate-300/78"
                        key={`${featuredArchive.year}-${item}`}
                      >
                        <T zh={item} en={featuredArchive.galleryEn?.[index] ?? item} />
                      </div>
                    ))}
                  </div>
                  <ButtonLink
                    className="mt-6"
                    href={`/archives/${featuredArchive.year}`}
                    variant="secondary"
                  >
                    <T zh="查看详情" en="View Details" />
                  </ButtonLink>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </>
      ) : null}

      <section className="container-shell pb-20 pt-8 sm:pb-24">
        <div className="panel-luxe accent-ring relative overflow-hidden rounded-[2.2rem] border border-white/10 px-6 py-10 sm:px-10 sm:py-12">
          <div className="absolute -right-10 top-0 h-44 w-44 rounded-full bg-cyan-300/14 blur-3xl" />
          <div className="absolute -left-12 bottom-0 h-40 w-40 rounded-full bg-[rgba(217,196,157,0.12)] blur-3xl" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/80">
                <T zh="诚邀参会" en="Join Us" />
              </div>
              <h2 className="mt-3 font-serif text-[clamp(2rem,3vw,3.35rem)] leading-[1.08] tracking-[-0.04em] text-white">
                <T
                  zh="与全国顶尖专家共话数智病理未来"
                  en="Shape the Future of Digital Pathology"
                />
              </h2>
              <p className="mt-4 text-[clamp(1rem,1.25vw,1.08rem)] leading-8 text-slate-300/82">
                <T
                  zh="2026 年 5 月，西安西北大学长安校区，期待与您共同见证数智病理的最新突破。立即注册，锁定席位。"
                  en="May 2026, Northwest University Chang'an Campus, Xi'an. Join us for the latest breakthroughs in digital pathology and secure your place now."
                />
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/register">
                <T zh="立即注册" en="Register Now" />
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                <T zh="联系会务组" en="Contact Us" />
              </ButtonLink>
            </div>
          </div>
          <div className="mt-8 grid gap-2 sm:grid-cols-2 lg:flex lg:flex-wrap">
            {endingTimelineLinks.map((item) => (
              <Link
                className="rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-2 text-sm text-slate-200 transition hover:border-cyan-300/28 hover:text-cyan-200"
                href={item.href}
                key={item.key}
              >
                {item.label.year} · <T zh={item.label.title} en={item.label.titleEn} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
