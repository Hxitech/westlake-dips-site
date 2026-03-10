import type { Metadata } from "next";

import { SearchExperience } from "@/components/search/search-experience";
import { PageHero } from "@/components/ui/page-hero";
import { speakers } from "@/content/data/speakers";
import { createPageMetadata } from "@/lib/metadata";
import { getAnnouncementSummaries, getArchiveSummaries } from "@/lib/content";
import { buildSearchIndex } from "@/lib/search";

export const metadata: Metadata = createPageMetadata({
  title: "搜索",
  description: "搜索通知、嘉宾与往届峰会内容。",
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
        description="搜索入口覆盖通知、嘉宾和往届内容，不把用户逼回多级导航。"
        eyebrow="Search"
        meta={["通知", "嘉宾", "往届"]}
        title="搜索峰会内容"
      />
      <section className="container-shell pb-24 pt-18 sm:pb-28 sm:pt-20">
        <SearchExperience items={items} />
      </section>
    </>
  );
}
