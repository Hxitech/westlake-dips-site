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
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(71,160,255,0.14),transparent_34%),radial-gradient(circle_at_90%_14%,rgba(34,211,238,0.1),transparent_22%),radial-gradient(circle_at_50%_120%,rgba(217,196,157,0.08),transparent_32%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[38rem] bg-[linear-gradient(180deg,rgba(7,14,25,0),rgba(7,14,25,0.65))]" />
      <SiteHeader navigation={siteConfig.navigation} searchItems={searchItems} />
      <main className="relative pt-[7.25rem] sm:pt-32">{children}</main>
      <SiteFooter />
    </div>
  );
}
