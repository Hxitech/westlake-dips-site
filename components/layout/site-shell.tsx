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
    <>
      <SiteHeader navigation={siteConfig.navigation} searchItems={searchItems} />
      <main className="pt-[4.5rem] sm:pt-20">{children}</main>
      <SiteFooter />
    </>
  );
}
