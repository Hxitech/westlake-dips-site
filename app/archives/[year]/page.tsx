import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PhotoCarousel } from "@/components/mdx/photo-carousel";
import { ButtonLink } from "@/components/ui/button-link";
import { T } from "@/components/ui/t";
import { archiveGalleries } from "@/content/data/archive-galleries";
import { createPageMetadata } from "@/lib/metadata";
import { getArchiveByYear, getArchiveSummaries } from "@/lib/content";

type ArchiveDetailProps = {
  params: Promise<{
    year: string;
  }>;
};

export async function generateStaticParams() {
  const archives = await getArchiveSummaries();
  return archives.map((item) => ({
    year: item.year,
  }));
}

export async function generateMetadata({
  params,
}: ArchiveDetailProps): Promise<Metadata> {
  const { year } = await params;
  const archives = await getArchiveSummaries();
  const current = archives.find((item) => item.year === year);

  if (!current) {
    return createPageMetadata({
      title: "往届会议 | Archives",
      description: "Past summit archives",
      path: "/archives",
    });
  }

  return createPageMetadata({
    title: current.titleEn ? `${current.title} | ${current.titleEn}` : current.title,
    description: current.highlightEn ?? current.highlight,
    path: `/archives/${current.year}`,
  });
}

export default async function ArchiveDetailPage({
  params,
}: ArchiveDetailProps) {
  const { year } = await params;

  const entry = await getArchiveByYear(year).catch(() => null);

  if (!entry) {
    notFound();
  }

  const gallery = archiveGalleries[year];

  return (
    <section className="container-shell pb-24 pt-16 sm:pb-28 sm:pt-20">
      <div className="max-w-5xl">
        <div className="mt-8 panel rounded-[2.25rem] p-7 sm:p-10">
          <div className="text-[0.68rem] uppercase tracking-[0.28em] text-blue-600">
            {entry.frontmatter.year} · <T zh={entry.frontmatter.location} en={entry.frontmatter.locationEn ?? entry.frontmatter.location} />
          </div>
          <h1 className="mt-5 whitespace-nowrap font-serif text-[clamp(1.5rem,6vw,3rem)] leading-tight text-gray-900">
            <T zh={entry.frontmatter.title} en={entry.frontmatter.titleEn ?? entry.frontmatter.title} />
          </h1>
          <p className="mt-5 text-xl text-gray-600">
            <T zh={entry.frontmatter.theme} en={entry.frontmatter.themeEn ?? entry.frontmatter.theme} />
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-gray-500 sm:text-lg">
            <T zh={entry.frontmatter.highlight} en={entry.frontmatter.highlightEn ?? entry.frontmatter.highlight} />
          </p>
          {gallery ? (
            <>
              <h2 className="mt-12 scroll-mt-28 border-t border-gray-200 pt-8 font-serif text-2xl text-gray-900">
                <T zh="峰会掠影" en="Photo Gallery" />
              </h2>
              <PhotoCarousel images={gallery} />
            </>
          ) : null}
          <div className="mt-10">{entry.content}</div>
        </div>
        <ButtonLink className="mt-8" href="/partners" variant="secondary">
          <T zh="了解合作伙伴" en="View Partners" />
        </ButtonLink>
      </div>
    </section>
  );
}
