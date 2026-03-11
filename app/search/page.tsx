import type { Metadata } from "next";

import { SearchExperience } from "@/components/search/search-experience";
import { PageHero } from "@/components/ui/page-hero";
import { T } from "@/components/ui/t";
import { speakers } from "@/content/data/speakers";
import { createPageMetadata } from "@/lib/metadata";
import { getAnnouncementSummaries, getArchiveSummaries } from "@/lib/content";
import { buildSearchIndex } from "@/lib/search";

export const metadata: Metadata = createPageMetadata({
  title: "搜索 | Search",
  description: "Search summit announcements, speakers, and past summit content.",
  path: "/search",
});

export default async function SearchPage() {
  const [announcements, archives] = await Promise.all([
    getAnnouncementSummaries(),
    getArchiveSummaries(),
  ]);
  const items = buildSearchIndex({
    announcements,
    archives,
    speakers,
  });

  return (
    <>
      <PageHero
        description={
          <T
            zh="搜索峰会通知、嘉宾信息和往届内容。"
            en="Search summit announcements, speaker profiles, and past summit content."
          />
        }
        eyebrow={<T zh="搜索" en="Search" />}
        meta={[
          <T key="n" zh="通知" en="News" />,
          <T key="s" zh="嘉宾" en="Speakers" />,
          <T key="a" zh="往届" en="Archives" />,
        ]}
        title={<T zh="搜索峰会内容" en="Search Summit Content" />}
      />
      <section className="container-shell pb-24 pt-18 sm:pb-28 sm:pt-20">
        <SearchExperience items={items} />
      </section>
    </>
  );
}
