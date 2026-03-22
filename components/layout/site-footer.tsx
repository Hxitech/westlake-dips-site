import Link from "next/link";

import { T } from "@/components/ui/t";
import { siteConfig } from "@/content/data/site";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-gray-200 bg-gray-50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_left_top,rgba(26,95,180,0.04),transparent_28%),radial-gradient(circle_at_90%_80%,rgba(26,95,180,0.03),transparent_22%)]" />
      <div className="container-shell relative py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="text-[0.68rem] uppercase tracking-[0.28em] text-blue-600">
              {siteConfig.acronym} · Digital Intelligence in Pathology Summit
            </div>
            <h2 className="mt-3 max-w-full whitespace-nowrap font-serif text-[clamp(2rem,3vw,3rem)] leading-[1.08] tracking-[-0.04em] text-gray-900">
              <T zh={siteConfig.name} en={siteConfig.nameEn} />
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500">
              <T
                zh={siteConfig.description}
                en={siteConfig.descriptionEn}
              />
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { zh: "AI 病理", en: "AI Pathology" },
                { zh: "临床转化", en: "Clinical Translation" },
                { zh: "学术交流", en: "Academic Exchange" },
              ].map((item) => (
                <span
                  key={item.en}
                  className="rounded-full border border-gray-200 bg-white/80 px-3 py-1.5 text-[0.72rem] uppercase tracking-[0.22em] text-gray-500"
                >
                  <T zh={item.zh} en={item.en} />
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-sm uppercase tracking-[0.24em] text-gray-400">
                <T zh="快速入口" en="Quick Links" />
              </h3>
              <div className="mt-4 space-y-3 text-sm text-gray-600">
                <Link className="block transition hover:text-blue-600" href="/announcements">
                  <T zh="会议通知" en="Announcements" />
                </Link>
                <Link className="block transition hover:text-blue-600" href="/guide">
                  <T zh="参会指南" en="Attendance Guide" />
                </Link>
                <Link className="block transition hover:text-blue-600" href="/register">
                  <T zh="报名说明" en="Registration" />
                </Link>
              </div>
            </div>
            <div className="rounded-[1.75rem] border border-gray-200 bg-white/80 px-5 py-5 backdrop-blur">
              <h3 className="text-sm uppercase tracking-[0.24em] text-gray-400">
                <T zh="会场坐标" en="Venue Coordinates" />
              </h3>
              <div className="mt-4 space-y-3 text-sm text-gray-500">
                <p>
                  <T
                    zh={`地址：${siteConfig.address}`}
                    en={`Address: ${siteConfig.addressEn}`}
                  />
                </p>
                <p>
                  <T zh="时间：2026 年 5 月 10 日" en="Date: May 10, 2026" />
                </p>
                <p>
                  <T zh="备案号待申请" en="ICP License: Pending" />
                </p>
                <p className="text-gray-400">© {new Date().getFullYear()} {siteConfig.name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
