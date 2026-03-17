import { describe, expect, it } from "vitest";

import { getAnnouncementSummaries, getArchiveSummaries } from "@/lib/content";

describe("content loaders", () => {
  it("loads announcement summaries in descending date order", async () => {
    const announcements = await getAnnouncementSummaries();

    expect(announcements).toHaveLength(3);
    expect(announcements[0]?.slug).toBe("venue-preview");
    expect(announcements[1]?.slug).toBe("2026-summit-launch");
    expect(announcements[2]?.slug).toBe("registration-preview");
  });

  it("loads archive summaries with the seeded 2025 entry", async () => {
    const archives = await getArchiveSummaries();

    expect(archives).toHaveLength(1);
    expect(archives[0]?.year).toBe("2025");
    expect(archives[0]?.theme).toContain("DeepPathAI");
  });
});
