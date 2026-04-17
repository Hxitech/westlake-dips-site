import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ButtonLink } from "@/components/ui/button-link";
import { T } from "@/components/ui/t";
import { createPageMetadata } from "@/lib/metadata";
import { formatDisplayDate, getAnnouncementBySlug, getAnnouncementSummaries } from "@/lib/content";

type AnnouncementDetailProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const announcements = await getAnnouncementSummaries();
  return announcements.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: AnnouncementDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const announcements = await getAnnouncementSummaries();
  const current = announcements.find((item) => item.slug === slug);

  if (!current) {
    return createPageMetadata({
      title: "会议通知 | Announcements",
      description: "Summit announcements",
      path: "/announcements",
    });
  }

  return createPageMetadata({
    title: current.titleEn ? `${current.title} | ${current.titleEn}` : current.title,
    description: current.excerptEn ?? current.excerpt,
    path: `/announcements/${current.slug}`,
  });
}

export default async function AnnouncementDetailPage({
  params,
}: AnnouncementDetailProps) {
  const { slug } = await params;

  const [entry, allAnnouncements] = await Promise.all([
    getAnnouncementBySlug(slug).catch(() => null),
    getAnnouncementSummaries(),
  ]);

  if (!entry) {
    notFound();
  }

  const related = allAnnouncements.filter((item) => item.slug !== slug).slice(0, 2);

  return (
    <section className="container-shell pb-24 pt-16 sm:pb-28 sm:pt-20">
      <div className="max-w-5xl">
        <Link
          className="inline-flex items-center gap-2 text-sm text-blue-600 transition hover:text-blue-700"
          href="/announcements"
        >
          <T zh="返回通知列表" en="Back to Announcements" />
        </Link>
        <div className="mt-8 panel rounded-[2.25rem] p-7 sm:p-10">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.24em] text-gray-400">
            <span><T zh={entry.frontmatter.category} en={entry.frontmatter.categoryEn ?? entry.frontmatter.category} /></span>
            <span><T zh={formatDisplayDate(entry.frontmatter.date, "zh")} en={formatDisplayDate(entry.frontmatter.date, "en")} /></span>
          </div>
          <h1 className="mt-5 font-serif text-[clamp(1.5rem,6vw,3rem)] leading-tight text-gray-900">
            <T zh={entry.frontmatter.title} en={entry.frontmatter.titleEn ?? entry.frontmatter.title} />
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-gray-500 sm:text-lg">
            <T zh={entry.frontmatter.excerpt} en={entry.frontmatter.excerptEn ?? entry.frontmatter.excerpt} />
          </p>
          <div className="mt-10">{entry.content}</div>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {related.map((item) => (
            <Link
              className="panel rounded-[1.75rem] p-5 transition hover:border-blue-200 hover:bg-blue-50/40"
              href={`/announcements/${item.slug}`}
              key={item.slug}
            >
              <div className="text-xs uppercase tracking-[0.24em] text-blue-600">
                <T zh={item.category} en={item.categoryEn ?? item.category} />
              </div>
              <h2 className="mt-3 text-[clamp(1.1rem,4.5vw,1.25rem)] font-semibold leading-snug text-gray-900">
                <T zh={item.title} en={item.titleEn ?? item.title} />
              </h2>
              <p className="mt-3 text-sm leading-7 text-gray-500">
                <T zh={item.excerpt} en={item.excerptEn ?? item.excerpt} />
              </p>
            </Link>
          ))}
        </div>
        <ButtonLink className="mt-8" href="/register" variant="secondary">
          <T zh="查看报名说明" en="View Registration" />
        </ButtonLink>
      </div>
    </section>
  );
}
