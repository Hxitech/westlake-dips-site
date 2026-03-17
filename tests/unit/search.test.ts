import { describe, expect, it } from "vitest";

import { buildSearchIndex, searchContent } from "@/lib/search";

const mockSpeakers = [
  {
    id: "zhao-qingyue",
    name: "赵清越",
    nameEn: "Qingyue Zhao",
    role: "青年学者",
    roleEn: "Young Scholar",
    organization: "西湖大学",
    organizationEn: "Westlake University",
    focus: "多模态病理模型",
    focusEn: "Multimodal pathology models",
    quote: "推动病理与人工智能深度融合。",
    quoteEn: "Advance the deep integration of pathology and AI.",
  },
];

describe("search index", () => {
  const items = buildSearchIndex({
    announcements: [
      {
        slug: "launch",
        title: "官网上线",
        date: "2026-03-08",
        category: "大会通知",
        excerpt: "新官网上线",
      },
    ],
    archives: [
      {
        year: "2025",
        title: "首届峰会",
        theme: "数字化起步",
        location: "杭州",
        highlight: "首届峰会回顾",
        gallery: ["主论坛"],
      },
    ],
    speakers: mockSpeakers,
  });

  it("builds a mixed index from announcements, speakers, and archives", () => {
    expect(items.some((item) => item.kind === "announcement")).toBe(true);
    expect(items.some((item) => item.kind === "speaker")).toBe(true);
    expect(items.some((item) => item.kind === "archive")).toBe(true);
  });

  it("finds speaker content with focus keywords", () => {
    const results = searchContent(items, "多模态病理模型");

    expect(results[0]?.kind).toBe("speaker");
    expect(results[0]?.title).toBe("赵清越");
  });

  it("returns archive results for year queries", () => {
    const results = searchContent(items, "2025");

    expect(results.some((item) => item.kind === "archive")).toBe(true);
  });
});
