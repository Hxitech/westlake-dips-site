import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ButtonLink } from "@/components/ui/button-link";
import { T } from "@/components/ui/t";
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

  return (
    <section className="container-shell pb-24 pt-16 sm:pb-28 sm:pt-20">
      <div className="max-w-5xl">
        <Link
          className="inline-flex items-center gap-2 text-sm text-cyan-200 transition hover:text-cyan-100"
          href="/archives"
        >
          <T zh="返回往届列表" en="Back to Archives" />
        </Link>
        <div className="mt-8 panel rounded-[2.25rem] p-7 sm:p-10">
          <div className="text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/88">
            {entry.frontmatter.year} · <T zh={entry.frontmatter.location} en={entry.frontmatter.locationEn ?? entry.frontmatter.location} />
          </div>
          <h1 className="mt-5 whitespace-nowrap font-serif text-[clamp(1.5rem,6vw,3rem)] leading-tight text-white">
            <T zh={entry.frontmatter.title} en={entry.frontmatter.titleEn ?? entry.frontmatter.title} />
          </h1>
          <p className="mt-5 text-xl text-slate-200">
            <T zh={entry.frontmatter.theme} en={entry.frontmatter.themeEn ?? entry.frontmatter.theme} />
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300/84 sm:text-lg">
            <T zh={entry.frontmatter.highlight} en={entry.frontmatter.highlightEn ?? entry.frontmatter.highlight} />
          </p>
          <div className="mt-10">{entry.content}</div>
        </div>
        <ButtonLink className="mt-8" href="/partners" variant="secondary">
          <T zh="了解合作伙伴" en="View Partners" />
        </ButtonLink>
      </div>
    </section>
  );
}
