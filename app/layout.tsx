import type { Metadata } from "next";

import { SiteShell } from "@/components/layout/site-shell";
import { siteConfig } from "@/content/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "数智病理",
    "西湖峰会",
    "数字病理",
    "人工智能",
    "病理学术会议",
  ],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    type: "website",
    url: siteConfig.url,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="overflow-x-hidden bg-background text-foreground antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
