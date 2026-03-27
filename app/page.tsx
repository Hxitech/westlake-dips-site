import Link from "next/link";

import { CountdownClock } from "@/components/home/countdown-clock";
import { HeroCarousel } from "@/components/home/hero-carousel";
import { AnimatedSection } from "@/components/ui/animated-section";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { T } from "@/components/ui/t";
import { heroContent, siteConfig } from "@/content/data/site";
import { timeline } from "@/content/data/timeline";
import { getArchiveSummaries } from "@/lib/content";

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
  const archives = await getArchiveSummaries();
  const featuredArchive = archives[0];

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventStructuredData) }}
        type="application/ld+json"
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <HeroCarousel />
        <div className="container-shell relative py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-blue-200">
              <T zh={heroContent.eyebrow} en={heroContent.eyebrowEn} />
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              <T zh={siteConfig.name} en={siteConfig.nameEn} />
            </h1>
            <p className="mt-4 text-lg leading-8 text-white/90 sm:text-xl">
              <T zh={heroContent.subtitle} en={heroContent.subtitleEn} />
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/78">
              <span><T zh={heroContent.location} en={heroContent.locationEn} /></span>
              <span><T zh={heroContent.dateText} en={heroContent.dateTextEn} /></span>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                className="rounded-md bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:bg-blue-400"
                href="/register"
              >
                <T zh="立即注册" en="Register Now" />
              </Link>
              <Link
                className="rounded-md border border-white/35 bg-white/16 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/24"
                href="/announcements"
              >
                <T zh="查看日程" en="View Agenda" />
              </Link>
            </div>
          </div>
          <div className="mt-10 max-w-xs">
            <CountdownClock
              eventEnd={siteConfig.eventEnd}
              eventStart={siteConfig.eventStart}
              variant="embedded"
            />
          </div>
        </div>
      </section>

      {/* ── Schedule + Guests (Coming Soon) ── */}
      <section className="border-b border-gray-200 bg-white">
        <AnimatedSection className="container-shell py-16 sm:py-20" variant="fade">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow={<T zh="会议日程" en="Schedule" />}
                title={<T zh="会议日程" en="Summit Schedule" />}
              />
              <div className="mt-6 flex items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50/80 py-16 shadow-sm shadow-slate-950/5">
                <p className="text-lg font-medium text-slate-600">
                  <T zh="敬请期待" en="Coming Soon" />
                </p>
              </div>
              <ButtonLink className="mt-4" href="/announcements" variant="ghost">
                <T zh="查看会议通知" en="View Announcements" />
              </ButtonLink>
            </div>
            <div>
              <SectionHeading
                eyebrow={<T zh="参会嘉宾" en="Guests" />}
                title={<T zh="参会嘉宾" en="Summit Guests" />}
              />
              <div className="mt-6 flex items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50/80 py-16 shadow-sm shadow-slate-950/5">
                <p className="text-lg font-medium text-slate-600">
                  <T zh="敬请期待" en="Coming Soon" />
                </p>
              </div>
              <ButtonLink className="mt-4" href="/announcements" variant="ghost">
                <T zh="查看会议通知" en="View Announcements" />
              </ButtonLink>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ── Archives ── */}
      {featuredArchive ? (
        <section className="border-b border-gray-200 bg-gray-50">
          <AnimatedSection className="container-shell py-16 sm:py-20" variant="fade">
            <SectionHeading
              eyebrow={<T zh="往届回顾" en="Archives" />}
              title={<T zh="往届峰会" en="Past Summits" />}
              action={
                <ButtonLink href="/archives" size="compact" variant="secondary">
                  <T zh="查看详情" en="View Details" />
                </ButtonLink>
              }
            />
            <div className="mt-8 rounded-lg border border-gray-200 bg-white p-6 sm:p-8">
              <h3 className="text-xl font-bold text-gray-900">
                <T
                  zh={featuredArchive.title}
                  en={featuredArchive.titleEn ?? featuredArchive.title}
                />
              </h3>
              <p className="mt-2 text-blue-700">
                <T
                  zh={featuredArchive.theme}
                  en={featuredArchive.themeEn ?? featuredArchive.theme}
                />
              </p>
              <p className="mt-3 text-sm leading-7 text-gray-500">
                <T
                  zh={featuredArchive.highlight}
                  en={featuredArchive.highlightEn ?? featuredArchive.highlight}
                />
              </p>
            </div>
          </AnimatedSection>
        </section>
      ) : null}

      {/* ── CTA ── */}
      <section className="bg-white">
        <div className="container-shell py-16 sm:py-20">
          <div className="rounded-[1.75rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.22),_transparent_34%),linear-gradient(135deg,_#0f172a_0%,_#111827_48%,_#030712_100%)] px-6 py-12 text-center shadow-[0_28px_80px_rgba(3,7,18,0.22)] sm:px-12 sm:py-16">
            <p className="text-sm font-medium text-blue-200">
              <T zh="诚邀参会" en="Join Us" />
            </p>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              <T zh="与全国顶尖专家共话数智病理未来" en="Shape the Future of Digital Pathology" />
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-white/88">
              <T
                zh="2026 年 5 月，西安西北大学长安校区，期待与您共同见证数智病理的最新突破。"
                en="May 2026, Northwest University, Xi'an. Join us for the latest breakthroughs."
              />
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                className="rounded-md bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-950/35 transition hover:bg-blue-400"
                href="/register"
              >
                <T zh="立即注册" en="Register Now" />
              </Link>
              <Link
                className="rounded-md border border-white/30 bg-white/14 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                href="/contact"
              >
                <T zh="联系会务组" en="Contact Us" />
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {timeline.map((item) => (
                <Link
                  className="rounded-full border border-white/18 bg-white/12 px-3.5 py-1.5 text-xs text-white/90 transition hover:bg-white/18"
                  href={item.year === 2025 ? `/archives/${item.year}` : "/about"}
                  key={item.year}
                >
                  {item.year} · <T zh={item.title} en={item.titleEn} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
