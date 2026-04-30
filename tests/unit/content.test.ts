import { describe, expect, it } from "vitest";

import { getAnnouncementSummaries, getArchiveSummaries } from "@/lib/content";

describe("content loaders", () => {
  it("loads the meeting-notice announcement with its PDF link", async () => {
    const announcements = await getAnnouncementSummaries();

    expect(announcements).toHaveLength(1);
    expect(announcements[0]?.slug).toBe("2026-meeting-notice");
    expect(announcements[0]?.pinned).toBe(true);
    expect(announcements[0]?.pdfUrl).toBe("/documents/dips-2026-meeting-notice.pdf");
  });

  it("loads archive summaries with the seeded 2025 entry", async () => {
    const archives = await getArchiveSummaries();

    expect(archives).toHaveLength(1);
    expect(archives[0]?.year).toBe("2025");
    expect(archives[0]?.theme).toContain("DeepPathAI");
  });
});
