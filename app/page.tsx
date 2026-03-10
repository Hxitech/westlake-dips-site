import Link from "next/link";

import { CountdownClock } from "@/components/home/countdown-clock";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
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
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(93,194,255,0.2),transparent_26%),radial-gradient(circle_at_80%_10%,rgba(106,123,255,0.24),transparent_28%),linear-gradient(180deg,rgba(6,12,25,0.3),rgba(6,12,25,0.86))]" />
        <div className="container-shell relative py-20 sm:py-24 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/16 bg-cyan-300/10 px-4 py-1 text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/90">
                {heroContent.eyebrow}
              </span>
              <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
                <span className="block">{siteConfig.name}</span>
                <span className="mt-3 block text-gradient">
                  {heroContent.title}
                </span>
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300/86 sm:text-xl">
                {heroContent.subtitle}
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-200">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  {heroContent.location}
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  {heroContent.dateText}
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  {siteConfig.venue}
                </span>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                {heroContent.ctas.map((cta) => (
                  <ButtonLink
                    href={cta.href}
                    key={cta.href}
                    variant={cta.variant}
                  >
                    {cta.label}
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
                      {fact.value}
                    </div>
                    <div className="mt-2 text-sm font-medium text-slate-100">
                      {fact.label}
                    </div>
                    <div className="mt-2 text-sm leading-7 text-slate-400">
                      {fact.detail}
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
                    Summit Signal
                  </div>
                  <h2 className="mt-4 font-serif text-3xl text-white">
                    数智病理年度品牌主场
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-slate-300/80">
                    以病理切片纹理、显微网格和湖面波纹为视觉母题，构建区别于传统会议门户的年度峰会品牌体验。
                  </p>
                  <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    {[
                      ["01", "病理数据", "结构化与可追溯"],
                      ["02", "AI 诊断", "可解释与临床协作"],
                      ["03", "产业转化", "从实验室走向现场"],
                    ].map(([index, title, text]) => (
                      <div
                        className="rounded-[1.25rem] border border-white/10 bg-slate-950/35 p-4"
                        key={title}
                      >
                        <div className="text-xs uppercase tracking-[0.28em] text-cyan-200/76">
                          {index}
                        </div>
                        <div className="mt-3 text-sm font-medium text-white">
                          {title}
                        </div>
                        <div className="mt-2 text-sm leading-6 text-slate-400">
                          {text}
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

      <section className="container-shell py-18 sm:py-20">
        <SectionHeading
          description="从议题设计、跨界协同到品牌资产沉淀，首页首先传达的是这场峰会的行业位置，而不是栏目列表。"
          eyebrow="Core Design"
          title="把学术感、科技感和峰会仪式感压进同一个入口"
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {summitHighlights.map((item) => (
            <div className="panel rounded-[1.75rem] p-6" key={item.title}>
              <div className="text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/90">
                {item.metric}
              </div>
              <h3 className="mt-4 font-serif text-2xl text-white">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300/80">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-shell py-18 sm:py-20">
        <SectionHeading
          action={
            <ButtonLink href="/announcements" variant="secondary">
              查看全部
            </ButtonLink>
          }
          description="首页只展示最新的关键信息，完整通知体系进入独立栏目，避免首屏信息过载。"
          eyebrow="Latest Updates"
          title="峰会通知与关键动态"
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
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
                      推荐
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
              Why This Site
            </div>
            <h3 className="mt-4 font-serif text-3xl text-white">
              信息密度高，但视觉重心更明确
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-300/80">
              参考站点的内容颗粒度值得保留，但首页会把通知、嘉宾、参会和往届入口重新组织成更强的年度会议信号，而不是传统门户平铺。
            </p>
            <div className="mt-8 space-y-3">
              {[
                "通知列表独立沉淀，首页只保留最值得点击的 3 条。",
                "顶部 CTA 永远清晰，注册与查看日程不被淹没。",
                "首页右侧主视觉承担品牌记忆点，而不是只做大图占位。",
              ].map((item) => (
                <div
                  className="rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-slate-300/80"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell py-18 sm:py-20">
        <SectionHeading
          description="使用头像占位和人物观点摘要，先把嘉宾区做成“可持续更新的内容模块”，未来换正式头像即可上线。"
          eyebrow="Featured Voices"
          title="核心嘉宾预告"
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
                    {speaker.organization}
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold text-white">
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
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-shell py-18 sm:py-20">
        <div className="grid gap-10 xl:grid-cols-[1fr_0.95fr]">
          <div>
            <SectionHeading
              action={
                <ButtonLink href="/guide" variant="secondary">
                  前往参会指南
                </ButtonLink>
              }
              description="把会议节奏、到场路径和报名说明拆成更易读的内容块，减少会议官网常见的“长页面信息疲劳”。"
              eyebrow="Attend The Summit"
              title="日程预览与参会动线"
            />
            <div className="mt-10 space-y-4">
              {schedulePreview.map((item) => (
                <div
                  className="panel rounded-[1.75rem] p-5 sm:flex sm:items-start sm:justify-between sm:gap-6"
                  key={`${item.time}-${item.title}`}
                >
                  <div className="text-sm uppercase tracking-[0.24em] text-cyan-200/88">
                    {item.time}
                  </div>
                  <div className="mt-4 sm:mt-0 sm:max-w-xl">
                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300/80">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading
              description="往届页面不再只是相册，而是把年度成果、影像资产和主题关键词一起固化下来。"
              eyebrow="Archive Snapshot"
              title={featuredArchive?.title ?? "往届峰会回顾"}
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
                  查看往届详情
                </ButtonLink>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="container-shell py-18 sm:py-20">
        <SectionHeading
          description="合作伙伴区域采用分层展示和高对比留白，避免传统会议官网 Logo 墙失去重点。"
          eyebrow="Partnership"
          title="合作伙伴与支持网络"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {partners.slice(0, 8).map((partner) => (
            <div
              className="panel rounded-[1.6rem] p-5 transition hover:border-cyan-300/22"
              key={partner.name}
            >
              <div className="text-[0.68rem] uppercase tracking-[0.24em] text-cyan-200/80">
                {partner.tier}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {partner.name}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300/78">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-shell pb-24 pt-10 sm:pb-28">
        <div className="panel accent-ring relative overflow-hidden rounded-[2.5rem] border border-cyan-300/15 px-6 py-10 sm:px-10 sm:py-14">
          <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-cyan-300/16 blur-3xl" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/88">
                Final CTA
              </div>
              <h2 className="mt-4 font-serif text-4xl text-white sm:text-5xl">
                让峰会官网成为年度品牌资产，而不是一次性会务页面
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300/84 sm:text-lg">
                当前版本已完整覆盖首页、通知、指南、往届、合作伙伴、联系与报名说明。下一步只需替换正式海报、嘉宾头像和报名链接，就可以形成对外发布版本。
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <ButtonLink href="/register">立即注册</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                联系会务组
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
                {item.year} · {item.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
