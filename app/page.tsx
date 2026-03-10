import Link from "next/link";

import { CountdownClock } from "@/components/home/countdown-clock";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { T } from "@/components/ui/t";
import { heroContent, quickFacts, schedulePreview, siteConfig, summitHighlights } from "@/content/data/site";
import { partners } from "@/content/data/partners";
import { speakers } from "@/content/data/speakers";
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

      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(93,194,255,0.2),transparent_26%),radial-gradient(circle_at_80%_10%,rgba(106,123,255,0.24),transparent_28%),linear-gradient(180deg,rgba(6,12,25,0.3),rgba(6,12,25,0.86))]" />
        <div className="container-shell relative py-20 sm:py-24 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/16 bg-cyan-300/10 px-4 py-1 text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/90">
                <T zh={heroContent.eyebrow} en={heroContent.eyebrowEn} />
              </span>
              <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
                <span className="block">
                  <T zh={siteConfig.name} en={siteConfig.nameEn} />
                </span>
                <span className="mt-3 block text-gradient">
                  <T zh={heroContent.title} en={heroContent.titleEn} />
                </span>
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300/86 sm:text-xl">
                <T zh={heroContent.subtitle} en={heroContent.subtitleEn} />
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-200">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  <T zh={heroContent.location} en={heroContent.locationEn} />
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  <T zh={heroContent.dateText} en={heroContent.dateTextEn} />
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  <T zh={siteConfig.venue} en={siteConfig.venueEn} />
                </span>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
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
              <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {quickFacts.map((fact) => (
                  <div
                    className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                    key={fact.label}
                  >
                    <div className="text-3xl font-serif text-white">
                      <T zh={fact.value} en={fact.valueEn} />
                    </div>
                    <div className="mt-2 text-sm font-medium text-slate-100">
                      <T zh={fact.label} en={fact.labelEn} />
                    </div>
                    <div className="mt-2 text-sm leading-7 text-slate-400">
                      <T zh={fact.detail} en={fact.detailEn} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="panel accent-ring relative overflow-hidden rounded-[2rem] p-7">
                <div className="absolute inset-x-10 top-10 h-px bg-gradient-to-r from-transparent via-cyan-300/55 to-transparent" />
                <div className="absolute inset-y-12 left-10 w-px bg-gradient-to-b from-transparent via-cyan-300/40 to-transparent" />
                <div className="absolute right-12 top-12 size-32 rounded-full border border-cyan-200/18 bg-cyan-300/10 blur-2xl" />
                <div className="relative">
                  <div className="text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/84">
                    <T zh="峰会聚焦" en="Summit Focus" />
                  </div>
                  <h2 className="mt-4 font-serif text-3xl text-white">
                    <T zh="数智病理年度旗舰峰会" en="The Annual Flagship in Digital Pathology" />
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-slate-300/80">
                    <T
                      zh="以病理数字化为基座，聚焦 AI 辅助诊断、临床协作与产业转化，打造病理领域最具影响力的年度学术盛会。"
                      en="Built on digital pathology foundations, focusing on AI-assisted diagnosis, clinical collaboration, and industry translation — the most influential annual academic event in pathology."
                    />
                  </p>
                  <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    {[
                      { idx: "01", zh: "病理数据", zhSub: "结构化与可追溯", en: "Pathology Data", enSub: "Structured & Traceable" },
                      { idx: "02", zh: "AI 诊断", zhSub: "可解释与临床协作", en: "AI Diagnostics", enSub: "Explainable & Clinical" },
                      { idx: "03", zh: "产业转化", zhSub: "从实验室到现场", en: "Translation", enSub: "Lab to Bedside" },
                    ].map((item) => (
                      <div
                        className="rounded-[1.25rem] border border-white/10 bg-slate-950/35 p-4"
                        key={item.idx}
                      >
                        <div className="text-xs uppercase tracking-[0.28em] text-cyan-200/76">
                          {item.idx}
                        </div>
                        <div className="mt-3 text-sm font-medium text-white">
                          <T zh={item.zh} en={item.en} />
                        </div>
                        <div className="mt-2 text-sm leading-6 text-slate-400">
                          <T zh={item.zhSub} en={item.enSub} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <CountdownClock
                eventEnd={siteConfig.eventEnd}
                eventStart={siteConfig.eventStart}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Highlights ── */}
      <section className="container-shell py-18 sm:py-20">
        <SectionHeading
          description={
            <T
              zh="聚焦数字病理前沿议题、跨界学术对话与成果转化，构建病理领域全链条协作平台。"
              en="Focusing on cutting-edge digital pathology topics, cross-disciplinary dialogue, and translational outcomes."
            />
          }
          eyebrow={<T zh="峰会亮点" en="Highlights" />}
          title={<T zh="为何参加数智病理西湖峰会" en="Why Attend the DIPS Summit" />}
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {summitHighlights.map((item) => (
            <div className="panel rounded-[1.75rem] p-6" key={item.title}>
              <div className="text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/90">
                <T zh={item.metric} en={item.metricEn} />
              </div>
              <h3 className="mt-4 font-serif text-2xl text-white">
                <T zh={item.title} en={item.titleEn} />
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300/80">
                <T zh={item.description} en={item.descriptionEn} />
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Announcements ── */}
      <section className="container-shell py-18 sm:py-20">
        <SectionHeading
          action={
            <ButtonLink href="/announcements" variant="secondary">
              <T zh="查看全部" en="View All" />
            </ButtonLink>
          }
          description={
            <T
              zh="获取峰会最新日程、嘉宾确认与报名信息。"
              en="Stay updated with the latest agenda, speaker confirmations, and registration details."
            />
          }
          eyebrow={<T zh="最新动态" en="Latest News" />}
          title={<T zh="峰会通知" en="Summit Announcements" />}
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <div className="panel rounded-[2rem] p-6 sm:p-8">
            {announcements.slice(0, 3).map((item, index) => (
              <Link
                className="group block border-b border-white/8 py-5 last:border-b-0 first:pt-0 last:pb-0"
                href={`/announcements/${item.slug}`}
                key={item.slug}
              >
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.24em] text-slate-400">
                  <span>{item.category}</span>
                  <span>{formatDisplayDate(item.date)}</span>
                  {item.pinned ? (
                    <span className="rounded-full border border-cyan-300/30 px-3 py-1 text-cyan-200">
                      <T zh="置顶" en="Pinned" />
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-3 text-2xl font-semibold text-white transition group-hover:text-cyan-200">
                  {String(index + 1).padStart(2, "0")} {item.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300/80">
                  {item.excerpt}
                </p>
              </Link>
            ))}
          </div>
          <div className="panel rounded-[2rem] p-6 sm:p-8">
            <div className="text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/88">
              <T zh="日程预览" en="Schedule Preview" />
            </div>
            <h3 className="mt-4 font-serif text-3xl text-white">
              <T zh="两天精彩议程" en="Two Days of Innovation" />
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-300/80">
              <T
                zh="涵盖主论坛开幕、AI 诊断专场、数字病理流程重构与产业转化圆桌，覆盖从学术前沿到产业落地的全链条。"
                en="From the opening plenary to AI diagnostics, digital workflow transformation, and industry roundtables — covering the full spectrum from research to practice."
              />
            </p>
            <div className="mt-8 space-y-3">
              {schedulePreview.map((item) => (
                <div
                  className="rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-4"
                  key={item.title}
                >
                  <div className="text-xs uppercase tracking-[0.24em] text-cyan-200/76">
                    <T zh={item.time} en={item.timeEn} />
                  </div>
                  <div className="mt-2 text-sm font-medium text-white">
                    <T zh={item.title} en={item.titleEn} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Speakers ── */}
      <section className="container-shell py-18 sm:py-20">
        <SectionHeading
          description={
            <T
              zh="来自病理学、人工智能、医院管理与产业界的重磅嘉宾，带来最前沿的洞察与实践经验。"
              en="Distinguished speakers from pathology, AI research, hospital management, and industry sharing cutting-edge insights."
            />
          }
          eyebrow={<T zh="特邀嘉宾" en="Featured Speakers" />}
          title={<T zh="核心嘉宾阵容" en="Speaker Lineup" />}
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {speakers.map((speaker, index) => (
            <div
              className="panel group rounded-[2rem] p-6 transition hover:-translate-y-1 hover:border-cyan-300/22"
              key={speaker.id}
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <div className="flex size-20 shrink-0 items-center justify-center rounded-[1.75rem] border border-white/10 bg-[linear-gradient(135deg,rgba(114,215,255,0.18),rgba(119,132,255,0.18))] font-serif text-2xl text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <div className="text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/88">
                    <T zh={speaker.organization} en={speaker.organizationEn} />
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold text-white">
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
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Schedule + Archive ── */}
      <section className="container-shell py-18 sm:py-20">
        <div className="grid gap-10 xl:grid-cols-[1fr_0.95fr]">
          <div>
            <SectionHeading
              action={
                <ButtonLink href="/guide" variant="secondary">
                  <T zh="参会指南" en="Attendance Guide" />
                </ButtonLink>
              }
              description={
                <T
                  zh="了解会议日程安排、会场信息与报名流程，轻松规划您的参会之旅。"
                  en="Plan your visit with schedule details, venue information, and registration guidance."
                />
              }
              eyebrow={<T zh="日程安排" en="Schedule" />}
              title={<T zh="日程预览与参会动线" en="Agenda & Attendance" />}
            />
            <div className="mt-10 space-y-4">
              {schedulePreview.map((item) => (
                <div
                  className="panel rounded-[1.75rem] p-5 sm:flex sm:items-start sm:justify-between sm:gap-6"
                  key={`${item.time}-${item.title}`}
                >
                  <div className="text-sm uppercase tracking-[0.24em] text-cyan-200/88">
                    <T zh={item.time} en={item.timeEn} />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:max-w-xl">
                    <h3 className="text-xl font-semibold text-white">
                      <T zh={item.title} en={item.titleEn} />
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300/80">
                      <T zh={item.description} en={item.descriptionEn} />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading
              description={
                <T
                  zh="回顾历届峰会的精彩内容，了解峰会的发展历程与学术积累。"
                  en="Explore highlights from past summits and trace the evolution of DIPS."
                />
              }
              eyebrow={<T zh="往届回顾" en="Past Summits" />}
              title={<T zh={featuredArchive?.title ?? "往届峰会回顾"} en="Summit Archives" />}
            />
            {featuredArchive ? (
              <div className="panel mt-10 rounded-[2rem] p-6 sm:p-8">
                <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(114,215,255,0.15),rgba(140,152,255,0.12))] p-5">
                  <div className="text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/88">
                    {featuredArchive.year}
                  </div>
                  <h3 className="mt-3 font-serif text-3xl text-white">
                    {featuredArchive.theme}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300/80">
                    {featuredArchive.highlight}
                  </p>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {featuredArchive.gallery.map((item) => (
                    <div
                      className="rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-5 text-sm leading-7 text-slate-300/78"
                      key={item}
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <ButtonLink
                  className="mt-6"
                  href={`/archives/${featuredArchive.year}`}
                  variant="secondary"
                >
                  <T zh="查看往届详情" en="View Details" />
                </ButtonLink>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* ── Partners ── */}
      <section className="container-shell py-18 sm:py-20">
        <SectionHeading
          description={
            <T
              zh="感谢各合作伙伴的鼎力支持，共同推动数智病理事业的发展。"
              en="We thank our partners for their generous support in advancing digital pathology."
            />
          }
          eyebrow={<T zh="合作伙伴" en="Partners" />}
          title={<T zh="合作伙伴与支持单位" en="Partners & Sponsors" />}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {partners.slice(0, 8).map((partner) => (
            <div
              className="panel rounded-[1.6rem] p-5 transition hover:border-cyan-300/22"
              key={partner.name}
            >
              <div className="text-[0.68rem] uppercase tracking-[0.24em] text-cyan-200/80">
                <T zh={partner.tier === "strategic" ? "战略合作" : partner.tier === "co-host" ? "联合共建" : partner.tier === "innovation" ? "创新展示" : "支持伙伴"}
                   en={partner.tier === "strategic" ? "Strategic" : partner.tier === "co-host" ? "Co-Host" : partner.tier === "innovation" ? "Innovation" : "Supporting"} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                <T zh={partner.name} en={partner.nameEn} />
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300/78">
                <T zh={partner.description} en={partner.descriptionEn} />
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="container-shell pb-24 pt-10 sm:pb-28">
        <div className="panel accent-ring relative overflow-hidden rounded-[2.5rem] border border-cyan-300/15 px-6 py-10 sm:px-10 sm:py-14">
          <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-cyan-300/16 blur-3xl" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/88">
                <T zh="诚邀参会" en="Join Us" />
              </div>
              <h2 className="mt-4 font-serif text-4xl text-white sm:text-5xl">
                <T
                  zh="与全国顶尖专家共话数智病理未来"
                  en="Shape the Future of Digital Pathology with Leading Experts"
                />
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300/84 sm:text-lg">
                <T
                  zh="2026 年 10 月，杭州西湖畔，我们期待与您共同见证数智病理的最新突破与产业变革。立即注册，锁定您的席位。"
                  en="October 2026, by the West Lake in Hangzhou. Join us to witness the latest breakthroughs and industry transformation in digital pathology. Register now to secure your seat."
                />
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <ButtonLink href="/register">
                <T zh="立即注册" en="Register Now" />
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                <T zh="联系会务组" en="Contact Us" />
              </ButtonLink>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {timeline.map((item) => (
              <Link
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300/28 hover:text-cyan-200"
                href={item.year === 2025 ? `/archives/${item.year}` : "/about"}
                key={item.year}
              >
                {item.year} · <T zh={item.title} en={item.titleEn} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
