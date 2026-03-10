import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { siteConfig } from "@/content/data/site";
import { speakers } from "@/content/data/speakers";
import { getAnnouncementSummaries, getArchiveSummaries } from "@/lib/content";
import { buildSearchIndex } from "@/lib/search";

export async function SiteShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [announcements, archives] = await Promise.all([
    getAnnouncementSummaries(),
    getArchiveSummaries(),
  ]);
  const searchItems = buildSearchIndex({
    announcements,
    archives,
    speakers,
  });

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(71,160,255,0.15),transparent_38%),radial-gradient(circle_at_90%_15%,rgba(34,211,238,0.12),transparent_22%)]" />
      <SiteHeader navigation={siteConfig.navigation} searchItems={searchItems} />
      <main className="relative pt-24">{children}</main>
      <SiteFooter />
    </div>
  );
}
