import Fuse from "fuse.js";

import type {
  AnnouncementFrontmatter,
  ArchiveFrontmatter,
  SearchItem,
  Speaker,
} from "@/content/types";

type SearchSource = {
  announcements: AnnouncementFrontmatter[];
  archives: ArchiveFrontmatter[];
  speakers: Speaker[];
};

export function buildSearchIndex({
  announcements,
  archives,
  speakers,
}: SearchSource): SearchItem[] {
  return [
    ...announcements.map((item) => ({
      id: `announcement-${item.slug}`,
      kind: "announcement" as const,
      title: item.title,
      excerpt: item.excerpt,
      href: `/announcements/${item.slug}`,
      keywords: [item.category, item.date, item.slug],
    })),
    ...speakers.map((item) => ({
      id: `speaker-${item.id}`,
      kind: "speaker" as const,
      title: item.name,
      excerpt: `${item.role} · ${item.organization}`,
      href: "/about",
      keywords: [item.focus, item.organization, item.role],
    })),
    ...archives.map((item) => ({
      id: `archive-${item.year}`,
      kind: "archive" as const,
      title: item.title,
      excerpt: item.highlight,
      href: `/archives/${item.year}`,
      keywords: [item.theme, item.location, item.year],
    })),
  ];
}

export function searchContent(items: SearchItem[], query: string) {
  const trimmed = query.trim();

  if (!trimmed) {
    return items.slice(0, 8);
  }

  const engine = new Fuse(items, {
    includeScore: true,
    keys: ["title", "excerpt", "keywords"],
    threshold: 0.36,
  });

  return engine.search(trimmed).map((result) => result.item);
}
