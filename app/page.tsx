import Link from "next/link";

import { CountdownClock } from "@/components/home/countdown-clock";
import { FloatingParticles } from "@/components/home/floating-particles";
import { AnimatedSection } from "@/components/ui/animated-section";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionDivider } from "@/components/ui/section-divider";
import { SectionHeading } from "@/components/ui/section-heading";
import { T } from "@/components/ui/t";
import { heroContent, quickFacts, schedulePreview, siteConfig, summitHighlights } from "@/content/data/site";
import { sponsorTiers } from "@/content/data/partners";
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(93,194,255,0.18),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(106,123,255,0.2),transparent_30%),linear-gradient(180deg,rgba(6,12,25,0.3),rgba(6,12,25,0.88))]" />
        <FloatingParticles />
        {/* Large decorative blurred orbs */}
        <div className="pointer-events-none absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-cyan-400/8 blur-[100px]" aria-hidden />
        <div className="pointer-events-none absolute -right-24 bottom-1/4 h-56 w-56 rounded-full bg-indigo-400/8 blur-[100px]" aria-hidden />
        <div className="container-shell relative py-20 sm:py-24">
          {/* Top: Full-width hero text */}
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/16 bg-cyan-300/10 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-cyan-200/90">
              <T zh={heroContent.eyebrow} en={heroContent.eyebrowEn} />
            </span>
            <h1 className="mt-6 font-serif text-3xl leading-snug tracking-tight text-white sm:text-4xl lg:text-5xl">
              <T zh={siteConfig.name} en={siteConfig.nameEn} />
            </h1>
            <p className="mt-3 text-xl text-gradient sm:text-2xl lg:text-3xl">
              <T zh={heroContent.title} en={heroContent.titleEn} />
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300/86 sm:text-lg sm:leading-8">
              <T zh={heroContent.subtitle} en={heroContent.subtitleEn} />
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5 text-sm text-slate-200">
              <span className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5">
                <T zh={heroContent.location} en={heroContent.locationEn} />
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5">
                <T zh={heroContent.dateText} en={heroContent.dateTextEn} />
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5">
                <T zh={siteConfig.venue} en={siteConfig.venueEn} />
              </span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
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

          {/* Bottom: 2-col — Quick Facts + Countdown */}
          <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {quickFacts.map((fact) => (
                <div
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                  key={fact.label}
                >
                  <div className="font-serif text-2xl text-white sm:text-3xl">
                    <T zh={fact.value} en={fact.valueEn} />
                  </div>
                  <div className="mt-1.5 text-sm font-medium text-slate-100">
                    <T zh={fact.label} en={fact.labelEn} />
                  </div>
                  <div className="mt-1.5 text-xs leading-5 text-slate-400">
                    <T zh={fact.detail} en={fact.detailEn} />
                  </div>
                </div>
              ))}
            </div>
            <CountdownClock
              eventEnd={siteConfig.eventEnd}
              eventStart={siteConfig.eventStart}
            />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Summit Focus ── */}
      <AnimatedSection className="container-shell py-16 sm:py-20">
        <SectionHeading
          description={
            <T
              zh="深度聚焦人工智能与数字病理学交叉学科的融合与最新进展。"
              en="Exploring the deep integration and latest advances at the intersection of AI and digital pathology."
            />
          }
          eyebrow={<T zh="峰会聚焦" en="Summit Focus" />}
          title={<T zh="三大核心议题" en="Three Core Themes" />}
        />
        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {[
            { idx: "01", zh: "大模型前沿技术", zhSub: "大模型在病理领域的最新应用与算法创新", en: "Large Model Technology", enSub: "Latest large-model applications and algorithmic innovation in pathology" },
            { idx: "02", zh: "AI 精准诊断", zhSub: "人工智能驱动的精准病理诊断与临床协作", en: "AI Precision Diagnosis", enSub: "AI-driven precision pathology diagnosis and clinical collaboration" },
            { idx: "03", zh: "产业融合与转化", zhSub: "从科研成果到临床应用的高效转化", en: "Industry & Translation", enSub: "Efficient translation from research to clinical practice" },
          ].map((item) => (
            <div
              className="panel panel-glow rounded-2xl p-5"
              key={item.idx}
            >
              <div className="text-xs uppercase tracking-[0.25em] text-cyan-200/76">{item.idx}</div>
              <div className="mt-3 text-lg font-medium text-white">
                <T zh={item.zh} en={item.en} />
              </div>
              <div className="mt-2 text-sm leading-6 text-slate-300/80">
                <T zh={item.zhSub} en={item.enSub} />
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <SectionDivider />

      {/* ── Highlights ── */}
      <AnimatedSection className="container-shell py-16 sm:py-20">
        <SectionHeading
          description={
            <T
              zh="前沿学术报告、跨界对话与成果展示，构建数智病理全链条协作平台。"
              en="Frontier research, cross-sector dialogue, and translational showcases."
            />
          }
          eyebrow={<T zh="峰会亮点" en="Highlights" />}
          title={<T zh="为何参加本届峰会" en="Why Attend" />}
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {summitHighlights.map((item) => (
            <div className="panel panel-glow rounded-2xl p-6" key={item.title}>
              <div className="text-xs uppercase tracking-[0.25em] text-cyan-200/90">
                <T zh={item.metric} en={item.metricEn} />
              </div>
              <h3 className="mt-3 text-xl font-semibold text-white">
                <T zh={item.title} en={item.titleEn} />
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300/80">
                <T zh={item.description} en={item.descriptionEn} />
              </p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <SectionDivider />

      {/* ── Announcements + Schedule ── */}
      <AnimatedSection className="container-shell py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left: Announcements */}
          <div>
            <SectionHeading
              action={
                <ButtonLink href="/announcements" variant="secondary">
                  <T zh="查看全部" en="View All" />
                </ButtonLink>
              }
              description={
                <T
                  zh="峰会最新日程、嘉宾确认与报名信息。"
                  en="Latest agenda, speaker confirmations, and registration updates."
                />
              }
              eyebrow={<T zh="最新动态" en="News" />}
              title={<T zh="峰会通知" en="Announcements" />}
            />
            <div className="mt-8 panel rounded-2xl p-5 sm:p-6">
              {announcements.slice(0, 3).map((item, index) => (
                <Link
                  className="group block border-b border-white/8 py-4 last:border-b-0 first:pt-0 last:pb-0"
                  href={`/announcements/${item.slug}`}
                  key={item.slug}
                >
                  <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                    <span><T zh={item.category} en={item.categoryEn ?? item.category} /></span>
                    <span><T zh={formatDisplayDate(item.date, "zh")} en={formatDisplayDate(item.date, "en")} /></span>
                    {item.pinned ? (
                      <span className="rounded-full border border-cyan-300/30 px-2 py-0.5 text-cyan-200">
                        <T zh="置顶" en="Pinned" />
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-white transition group-hover:text-cyan-200">
                    {String(index + 1).padStart(2, "0")}{" "}
                    <T zh={item.title} en={item.titleEn ?? item.title} />
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300/78 line-clamp-2">
                    <T zh={item.excerpt} en={item.excerptEn ?? item.excerpt} />
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Schedule Preview */}
          <div>
            <SectionHeading
              description={
                <T
                  zh="涵盖开幕主论坛、AI 诊断、流程重构与产业圆桌。"
                  en="Opening plenary, AI diagnostics, workflow, and industry roundtable."
                />
              }
              eyebrow={<T zh="日程预览" en="Schedule" />}
              title={<T zh="两天精彩议程" en="Two-Day Agenda" />}
            />
            <div className="mt-8 space-y-3">
              {schedulePreview.map((item) => (
                <div
                  className="panel rounded-2xl px-5 py-4"
                  key={item.title}
                >
                  <div className="text-xs uppercase tracking-[0.2em] text-cyan-200/76">
                    <T zh={item.time} en={item.timeEn} />
                  </div>
                  <div className="mt-2 text-base font-medium text-white">
                    <T zh={item.title} en={item.titleEn} />
                  </div>
                  <div className="mt-1.5 text-sm leading-6 text-slate-300/78">
                    <T zh={item.description} en={item.descriptionEn} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <SectionDivider />

      {/* ── Speakers ── */}
      <AnimatedSection className="container-shell py-16 sm:py-20">
        <SectionHeading
          description={
            <T
              zh="来自病理学、AI、医院管理与产业界的重磅嘉宾。"
              en="Distinguished speakers from pathology, AI, hospital management, and industry."
            />
          }
          eyebrow={<T zh="特邀嘉宾" en="Speakers" />}
          title={<T zh="核心嘉宾阵容" en="Speaker Lineup" />}
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {speakers.map((speaker, index) => (
            <div
              className="panel panel-glow group rounded-2xl p-5 transition hover:-translate-y-0.5 hover:border-cyan-300/22"
              key={speaker.id}
            >
              <div className="flex gap-4">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[linear-gradient(135deg,rgba(114,215,255,0.16),rgba(119,132,255,0.16))] font-serif text-lg text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-[0.2em] text-cyan-200/88">
                    <T zh={speaker.organization} en={speaker.organizationEn} />
                  </div>
                  <h3 className="mt-1 text-lg font-semibold text-white">
                    <T zh={speaker.name} en={speaker.nameEn} />
                  </h3>
                  <p className="mt-0.5 text-sm text-slate-400">
                    <T zh={speaker.role} en={speaker.roleEn} />
                  </p>
                </div>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-300/80">
                <T zh={speaker.focus} en={speaker.focusEn} />
              </p>
              <blockquote className="mt-3 border-l-2 border-cyan-300/40 pl-3 text-sm leading-6 text-white/85 italic">
                &ldquo;<T zh={speaker.quote} en={speaker.quoteEn} />&rdquo;
              </blockquote>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <SectionDivider />

      {/* ── Sponsorship ── */}
      <AnimatedSection className="container-shell py-16 sm:py-20">
        <SectionHeading
          action={
            <ButtonLink href="/partners" variant="secondary">
              <T zh="查看详情" en="View Details" />
            </ButtonLink>
          }
          description={
            <T
              zh="诚邀先锋企业与合作伙伴共襄盛会，共同推动数智病理发展。"
              en="Inviting leading enterprises and partners to jointly advance digital pathology."
            />
          }
          eyebrow={<T zh="赞助合作" en="Sponsorship" />}
          title={<T zh="大会合作方案" en="Partnership Packages" />}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {sponsorTiers.map((tier) => (
            <div
              className="panel panel-glow rounded-2xl p-5 transition hover:border-cyan-300/22"
              key={tier.tier}
            >
              <div className="text-xs uppercase tracking-[0.2em] text-cyan-200/80">
                <T zh={tier.name} en={tier.nameEn} />
              </div>
              <h3 className="mt-3 font-serif text-2xl text-white">
                <T zh={tier.price} en={tier.priceEn} />
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-300/78">
                <T
                  zh={tier.benefits.slice(0, 2).join("；")}
                  en={tier.benefitsEn.slice(0, 2).join("; ")}
                />
              </p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* ── Archive Preview ── */}
      {featuredArchive ? (
        <AnimatedSection className="container-shell py-16 sm:py-20">
          <SectionHeading
            action={
              <ButtonLink href="/archives" variant="secondary">
                <T zh="查看全部" en="View All" />
              </ButtonLink>
            }
            description={
              <T
                zh="回顾历届峰会精彩内容。"
                en="Explore highlights from past summits."
              />
            }
            eyebrow={<T zh="往届回顾" en="Archives" />}
            title={<T zh="往届峰会" en="Past Summits" />}
          />
          <div className="mt-10 panel rounded-2xl p-6 sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[0.3fr_0.7fr]">
              <div>
                <div className="font-serif text-4xl text-white">{featuredArchive.year}</div>
                <div className="mt-2 text-sm text-slate-400">
                  <T zh={featuredArchive.location} en={featuredArchive.locationEn ?? featuredArchive.location} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  <T zh={featuredArchive.title} en={featuredArchive.titleEn ?? featuredArchive.title} />
                </h3>
                <p className="mt-1 text-base text-cyan-200/90">
                  <T zh={featuredArchive.theme} en={featuredArchive.themeEn ?? featuredArchive.theme} />
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300/80">
                  <T zh={featuredArchive.highlight} en={featuredArchive.highlightEn ?? featuredArchive.highlight} />
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {featuredArchive.gallery.map((item, i) => (
                    <div
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-6 text-slate-300/78"
                      key={item}
                    >
                      <T zh={item} en={featuredArchive.galleryEn?.[i] ?? item} />
                    </div>
                  ))}
                </div>
                <ButtonLink
                  className="mt-5"
                  href={`/archives/${featuredArchive.year}`}
                  variant="secondary"
                >
                  <T zh="查看详情" en="View Details" />
                </ButtonLink>
              </div>
            </div>
          </div>
        </AnimatedSection>
      ) : null}

      {/* ── Final CTA ── */}
      <section className="container-shell pb-20 pt-8 sm:pb-24">
        <div className="panel accent-ring relative overflow-hidden rounded-3xl border border-cyan-300/12 px-6 py-10 sm:px-10 sm:py-12">
          <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-cyan-300/14 blur-3xl" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.25em] text-cyan-200/88">
                <T zh="诚邀参会" en="Join Us" />
              </div>
              <h2 className="mt-3 font-serif text-2xl text-white sm:text-3xl">
                <T
                  zh="与全国顶尖专家共话数智病理未来"
                  en="Shape the Future of Digital Pathology"
                />
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300/84 sm:text-base sm:leading-8">
                <T
                  zh="2026 年 5 月，西安西北大学，期待与您共同见证数智病理的最新突破。立即注册，锁定席位。"
                  en="May 2026, Northwest University, Xi'an. Join us for the latest breakthroughs in digital pathology. Register now."
                />
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/register">
                <T zh="立即注册" en="Register Now" />
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                <T zh="联系会务组" en="Contact Us" />
              </ButtonLink>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {timeline.map((item) => (
              <Link
                className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm text-slate-200 transition hover:border-cyan-300/28 hover:text-cyan-200"
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
