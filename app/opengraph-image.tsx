import { ImageResponse } from "next/og";

import { siteConfig } from "@/content/data/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at 20% 20%, rgba(114,215,255,0.28), transparent 28%), radial-gradient(circle at 82% 0%, rgba(121,133,255,0.35), transparent 30%), linear-gradient(180deg, #07111f 0%, #040a15 100%)",
          color: "#edf3ff",
          padding: "64px",
        }}
      >
        <div
          style={{
            fontSize: 24,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#9ae6ff",
          }}
        >
          {siteConfig.acronym}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 58,
              lineHeight: 1.1,
              fontWeight: 700,
              maxWidth: 900,
            }}
          >
            {siteConfig.nameEn}
          </div>
          <div
            style={{
              fontSize: 30,
              color: "#c8d8f3",
              maxWidth: 880,
            }}
          >
            Digital Pathology · AI Diagnosis · Clinical Translation
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 26,
            color: "#dce5f8",
          }}
        >
          <span>2026.05.09 - 05.10</span>
          <span>{siteConfig.venueEn} · {siteConfig.cityEn}</span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
