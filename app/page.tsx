import Link from "next/link";

import { CountdownClock } from "@/components/home/countdown-clock";
import { HeroCarousel } from "@/components/home/hero-carousel";
import { AnimatedSection } from "@/components/ui/animated-section";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionDivider } from "@/components/ui/section-divider";
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

const endingTimelineLinks = timeline.map((item) => ({
  href: item.year === 2025 ? `/archives/${item.year}` : "/about",
  key: `${item.year}-${item.title}`,
  label: item,
}));

export default async function Home() {
  const archives = await getArchiveSummaries();
  const featuredArchive = archives[0];

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventStructuredData),
        }}
        type="application/ld+json"
      />

      <section className="relative min-h-[520px] overflow-hidden sm:min-h-[560px] lg:min-h-[600px]">
        <HeroCarousel />
        <div className="container-shell relative py-14 sm:py-[4.5rem] lg:py-24">
          <div className="max-w-4xl">
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[0.72rem] uppercase tracking-[0.28em] text-blue-200 backdrop-blur-sm">
              <T zh={heroContent.eyebrow} en={heroContent.eyebrowEn} />
            </span>
            <div className="mt-6 text-[0.72rem] uppercase tracking-[0.32em] text-blue-300/70">
              DIGITAL AND INTELLIGENT PATHOLOGY SUMMIT
            </div>
            <h1 className="mt-4 max-w-full whitespace-nowrap font-serif text-[clamp(2.35rem,5vw,4.85rem)] leading-[1.02] tracking-[-0.055em] text-white">
              <T zh={siteConfig.name} en={siteConfig.nameEn} />
            </h1>
            <p className="mt-4 max-w-3xl text-[clamp(1.25rem,2vw,2rem)] leading-[1.3] text-blue-100/90 [text-wrap:balance]">
              <T zh={heroContent.subtitle} en={heroContent.subtitleEn} />
            </p>

            <div className="mt-7 flex flex-wrap gap-3 text-sm">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
                <span className="text-[0.68rem] uppercase tracking-[0.24em] text-blue-300">
                  <T zh="地点" en="Venue" />
                </span>
                <span className="text-sm text-white/90">
                  <T zh={heroContent.location} en={heroContent.locationEn} />
                </span>
              </div>
              <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
                <span className="text-[0.68rem] uppercase tracking-[0.24em] text-blue-300">
                  <T zh="时间" en="Date" />
                </span>
                <span className="text-sm text-white/90">
                  <T zh={heroContent.dateText} en={heroContent.dateTextEn} />
                </span>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <div className="flex flex-wrap gap-3">
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
              <div className="shrink-0">
                <CountdownClock
                  eventEnd={siteConfig.eventEnd}
                  eventStart={siteConfig.eventStart}
                  variant="embedded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <AnimatedSection className="container-shell py-16 sm:py-20" variant="fade">
        <div className="grid gap-8 xl:grid-cols-2">
          <div className="panel-luxe rounded-[2rem] border border-gray-200 p-5 sm:p-6">
            <SectionHeading
              eyebrow={<T zh="会议日程" en="Schedule" />}
              title={<T zh="会议日程" en="Summit Schedule" />}
            />
            <div className="mt-8 flex flex-col items-center justify-center rounded-[1.5rem] border border-gray-200 bg-gray-50/80 px-5 py-12 text-center">
              <p className="font-serif text-2xl text-gray-400">
                <T zh="敬请期待" en="Coming Soon" />
              </p>
            </div>
            <ButtonLink className="mt-6" href="/announcements" variant="secondary">
              <T zh="查看会议通知" en="View Announcements" />
            </ButtonLink>
          </div>

          <div className="panel-luxe rounded-[2rem] border border-gray-200 p-5 sm:p-6">
            <SectionHeading
              eyebrow={<T zh="参会嘉宾" en="Guests" />}
              title={<T zh="参会嘉宾" en="Summit Guests" />}
            />
            <div className="mt-8 flex flex-col items-center justify-center rounded-[1.5rem] border border-gray-200 bg-gray-50/80 px-5 py-12 text-center">
              <p className="font-serif text-2xl text-gray-400">
                <T zh="敬请期待" en="Coming Soon" />
              </p>
            </div>
            <ButtonLink className="mt-6" href="/announcements" variant="secondary">
              <T zh="查看会议通知" en="View Announcements" />
            </ButtonLink>
          </div>
        </div>
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
              eyebrow={<T zh="往届回顾" en="Archives" />}
              title={<T zh="往届峰会" en="Past Summits" />}
            />
            <div className="mt-10 panel-luxe rounded-[2rem] border border-gray-200 p-6 sm:p-8">
              <h3 className="whitespace-nowrap text-[1.4rem] font-semibold leading-8 text-gray-900">
                <T
                  zh={featuredArchive.title}
                  en={featuredArchive.titleEn ?? featuredArchive.title}
                />
              </h3>
              <p className="mt-2 text-base text-blue-600">
                <T
                  zh={featuredArchive.theme}
                  en={featuredArchive.themeEn ?? featuredArchive.theme}
                />
              </p>
              <p className="mt-4 text-sm leading-7 text-gray-500">
                <T
                  zh={featuredArchive.highlight}
                  en={featuredArchive.highlightEn ?? featuredArchive.highlight}
                />
              </p>
              <ButtonLink
                className="mt-6"
                href={`/archives/${featuredArchive.year}`}
                variant="secondary"
              >
                <T zh="查看详情" en="View Details" />
              </ButtonLink>
            </div>
          </AnimatedSection>
        </>
      ) : null}

      <section className="container-shell pb-20 pt-8 sm:pb-24">
        <div className="panel-luxe accent-ring relative overflow-hidden rounded-[2.2rem] border border-blue-200 bg-[linear-gradient(135deg,rgba(26,95,180,0.04),rgba(240,244,249,0.9))] px-6 py-10 sm:px-10 sm:py-12">
          <div className="absolute -right-10 top-0 h-44 w-44 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute -left-12 bottom-0 h-40 w-40 rounded-full bg-amber-500/6 blur-3xl" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="text-[0.68rem] uppercase tracking-[0.28em] text-blue-600">
                <T zh="诚邀参会" en="Join Us" />
              </div>
              <h2 className="mt-3 font-serif text-[clamp(2rem,3vw,3.35rem)] leading-[1.08] tracking-[-0.04em] text-gray-900">
                <T
                  zh="与全国顶尖专家共话数智病理未来"
                  en="Shape the Future of Digital Pathology"
                />
              </h2>
              <p className="mt-4 text-[clamp(1rem,1.25vw,1.08rem)] leading-8 text-gray-500">
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
                className="rounded-full border border-gray-200 bg-white/80 px-3.5 py-2 text-sm text-gray-600 transition hover:border-blue-300 hover:text-blue-600"
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
