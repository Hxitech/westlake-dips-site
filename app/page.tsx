import Link from "next/link";

import { CountdownClock } from "@/components/home/countdown-clock";
import { GuestRoster } from "@/components/home/guest-roster";
import { HeroCarousel } from "@/components/home/hero-carousel";
import { SessionList } from "@/components/home/session-list";
import { AnimatedSection } from "@/components/ui/animated-section";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { T } from "@/components/ui/t";
import { heroContent, siteConfig } from "@/content/data/site";
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
            <p className="text-body-copy font-medium text-blue-200">
              <T zh={heroContent.eyebrow} en={heroContent.eyebrowEn} />
            </p>
            <h1 className="text-display mt-4 font-bold tracking-tight text-white">
              <T zh={siteConfig.name} en={siteConfig.nameEn} />
            </h1>
            <p className="text-body-copy mt-4 max-w-2xl text-white/90">
              <T zh={heroContent.subtitle} en={heroContent.subtitleEn} />
            </p>
            <div className="text-body-copy mt-6 flex flex-wrap gap-x-6 gap-y-2 text-white/78">
              <span><T zh={heroContent.location} en={heroContent.locationEn} /></span>
              <span><T zh={heroContent.dateText} en={heroContent.dateTextEn} /></span>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {heroContent.ctas.map((cta) => (
                <Link
                  className={
                    cta.variant === "primary"
                      ? "text-body-copy rounded-md bg-blue-500 px-5 py-2.5 font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:bg-blue-400"
                      : "text-body-copy rounded-md border border-white/35 bg-white/16 px-5 py-2.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white/24"
                  }
                  href={cta.href}
                  key={cta.href}
                >
                  <T zh={cta.label} en={cta.labelEn} />
                </Link>
              ))}
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

      {/* ── Schedule + Guests ── */}
      <section className="border-b border-gray-200 bg-white">
        <AnimatedSection className="container-shell py-16 sm:py-20" variant="fade">
          <div className="grid items-stretch gap-10 lg:grid-cols-2">
            <div className="flex flex-col">
              <SectionHeading
                eyebrow={<T zh="会议日程" en="Schedule" />}
                title={<T zh="会议日程安排" en="Summit Schedule" />}
                description={
                  <T
                    zh="本届峰会设置 4 个主题专场，聚焦病理 AI 的趋势、临床落地、技术演进与产业生态。"
                    en="Four themed sessions covering pathology AI trends, clinical translation, algorithmic advances, and industry ecosystems."
                  />
                }
              />
              <div className="mt-6 flex-1">
                <SessionList />
              </div>
              <ButtonLink className="mt-6 self-start" href="/announcements" variant="ghost">
                <T zh="查看会议通知" en="View Announcements" />
              </ButtonLink>
            </div>
            <div className="flex flex-col">
              <SectionHeading
                eyebrow={<T zh="参会嘉宾" en="Guests" />}
                title={<T zh="参会嘉宾" en="Summit Guests" />}
                description={
                  <T
                    zh="嘉宾阵容将结合会务进度持续更新，最新信息以会议通知为准。"
                    en="The guest roster is updated alongside conference planning. The official announcement holds the latest details."
                  />
                }
              />
              <div className="mt-6 flex-1">
                <GuestRoster />
              </div>
              <ButtonLink className="mt-6 self-start" href="/announcements" variant="ghost">
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
              <h3 className="text-body-copy font-semibold text-gray-900">
                <T
                  zh={featuredArchive.title}
                  en={featuredArchive.titleEn ?? featuredArchive.title}
                />
              </h3>
              <p className="text-body-copy mt-2 text-blue-700">
                <T
                  zh={featuredArchive.theme}
                  en={featuredArchive.themeEn ?? featuredArchive.theme}
                />
              </p>
              <p className="text-body-copy mt-3 text-gray-500">
                <T
                  zh={featuredArchive.highlight}
                  en={featuredArchive.highlightEn ?? featuredArchive.highlight}
                />
              </p>
            </div>
          </AnimatedSection>
        </section>
      ) : null}
    </>
  );
}
