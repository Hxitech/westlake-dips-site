import { describe, expect, it } from "vitest";

import { buildAmapProxyUrl, getAmapUpstreamUrl } from "@/lib/amap";

describe("Amap proxy helpers", () => {
  it("routes map styles through the webapi host", () => {
    const url = getAmapUpstreamUrl(["v4", "map", "styles"]);

    expect(url.toString()).toBe("https://webapi.amap.com/v4/map/styles");
  });

  it("routes other requests through the restapi host", () => {
    const url = getAmapUpstreamUrl(["v3", "assistant", "inputtips"]);

    expect(url.toString()).toBe("https://restapi.amap.com/v3/assistant/inputtips");
  });

  it("preserves query params and injects the server jscode", () => {
    const url = buildAmapProxyUrl(
      "http://127.0.0.1:3100/_AMapService/v3/assistant/inputtips?keywords=%E8%A5%BF%E5%8C%97%E5%A4%A7%E5%AD%A6&key=web-key&jscode=ignored",
      ["v3", "assistant", "inputtips"],
      "server-side-code",
    );

    expect(url.origin).toBe("https://restapi.amap.com");
    expect(url.pathname).toBe("/v3/assistant/inputtips");
    expect(url.searchParams.get("keywords")).toBe("西北大学");
    expect(url.searchParams.get("key")).toBe("web-key");
    expect(url.searchParams.get("jscode")).toBe("server-side-code");
  });
});
