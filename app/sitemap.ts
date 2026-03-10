import type { MetadataRoute } from "next";

import { siteConfig } from "@/content/data/site";
import { getAnnouncementSummaries, getArchiveSummaries } from "@/lib/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [announcements, archives] = await Promise.all([
    getAnnouncementSummaries(),
    getArchiveSummaries(),
  ]);

  const staticRoutes = [
    "",
    "/about",
    "/announcements",
    "/guide",
    "/archives",
    "/partners",
    "/contact",
    "/register",
    "/search",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
  }));

  return [
    ...staticRoutes,
    ...announcements.map((item) => ({
      url: `${siteConfig.url}/announcements/${item.slug}`,
    })),
    ...archives.map((item) => ({
      url: `${siteConfig.url}/archives/${item.year}`,
    })),
  ];
}
