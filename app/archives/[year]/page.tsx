import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ButtonLink } from "@/components/ui/button-link";
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
      title: "往届会议",
      description: "往届峰会回顾",
      path: "/archives",
    });
  }

  return createPageMetadata({
    title: current.title,
    description: current.highlight,
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
          返回往届列表
        </Link>
        <div className="mt-8 panel rounded-[2.25rem] p-7 sm:p-10">
          <div className="text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/88">
            {entry.frontmatter.year} · {entry.frontmatter.location}
          </div>
          <h1 className="mt-5 font-serif text-4xl leading-tight text-white sm:text-5xl">
            {entry.frontmatter.title}
          </h1>
          <p className="mt-5 text-xl text-slate-200">{entry.frontmatter.theme}</p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300/84 sm:text-lg">
            {entry.frontmatter.highlight}
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {entry.frontmatter.gallery.map((item) => (
              <div
                className="rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-slate-300/82"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="mt-10">{entry.content}</div>
        </div>
        <ButtonLink className="mt-8" href="/partners" variant="secondary">
          了解合作伙伴体系
        </ButtonLink>
      </div>
    </section>
  );
}
