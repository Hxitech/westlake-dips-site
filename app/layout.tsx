import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Noto_Sans_SC, Noto_Serif_SC } from "next/font/google";

import { SiteShell } from "@/components/layout/site-shell";
import { LocaleProvider } from "@/lib/locale-context";
import { siteConfig } from "@/content/data/site";
import { getDocumentLang, LOCALE_COOKIE_NAME, resolveLocale } from "@/lib/locale";
import "./globals.css";

const notoSansSc = Noto_Sans_SC({
  display: "swap",
  preload: false,
  variable: "--font-noto-sans-sc",
  weight: ["400", "500", "600", "700"],
});

const notoSerifSc = Noto_Serif_SC({
  display: "swap",
  preload: false,
  variable: "--font-noto-serif-sc",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.shortNameEn} — ${siteConfig.nameEn}`,
    template: `%s | ${siteConfig.shortNameEn}`,
  },
  description: siteConfig.descriptionEn,
  applicationName: siteConfig.shortNameEn,
  keywords: [
    "数智病理",
    "digital pathology",
    "AI pathology",
    "DIPS",
    "pathology summit",
    "computational pathology",
    "large model",
    "precision diagnosis",
  ],
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.nameEn}`,
    description: siteConfig.descriptionEn,
    locale: siteConfig.locale,
    siteName: siteConfig.shortNameEn,
    type: "website",
    url: siteConfig.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.nameEn}`,
    description: siteConfig.descriptionEn,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const initialLocale = resolveLocale(cookieStore.get(LOCALE_COOKIE_NAME)?.value);

  return (
    <html lang={getDocumentLang(initialLocale)}>
      <body
        className={`${notoSansSc.variable} ${notoSerifSc.variable} overflow-x-hidden bg-background text-foreground antialiased`}
      >
        <LocaleProvider initialLocale={initialLocale}>
          <SiteShell>{children}</SiteShell>
        </LocaleProvider>
      </body>
    </html>
  );
}
