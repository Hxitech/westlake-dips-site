import { describe, expect, it } from "vitest";

import { getCountdownState } from "@/lib/countdown";

describe("getCountdownState", () => {
  it("returns upcoming state before the event", () => {
    const result = getCountdownState(
      "2026-10-24T09:00:00+08:00",
      "2026-10-25T18:00:00+08:00",
      new Date("2026-10-20T09:00:00+08:00"),
    );

    expect(result.status).toBe("upcoming");
    expect(result.label).toBe("距离大会开幕");
    expect(result.parts.days).toBe(4);
  });

  it("returns live state during the event", () => {
    const result = getCountdownState(
      "2026-10-24T09:00:00+08:00",
      "2026-10-25T18:00:00+08:00",
      new Date("2026-10-24T10:00:00+08:00"),
    );

    expect(result.status).toBe("live");
    expect(result.parts.hours).toBe(0);
  });

  it("returns ended state after the event", () => {
    const result = getCountdownState(
      "2026-10-24T09:00:00+08:00",
      "2026-10-25T18:00:00+08:00",
      new Date("2026-10-26T10:00:00+08:00"),
    );

    expect(result.status).toBe("ended");
    expect(result.label).toBe("大会已圆满收官");
  });
});
