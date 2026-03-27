import Image from "next/image";
import Link from "next/link";

import { T } from "@/components/ui/t";
import { siteConfig } from "@/content/data/site";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#0a1e3c]">
      {/* NWU gate background image */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/footer-bg.png"
          alt=""
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a1e3c] via-[rgba(10,30,60,0.85)] to-[rgba(10,30,60,0.7)]" />
      <div className="container-shell relative py-14 sm:py-16">
        <div className="text-center">
          <div className="text-[0.68rem] uppercase tracking-[0.28em] text-blue-300/80">
            DIGITAL AND INTELLIGENT PATHOLOGY SUMMIT
          </div>
          <h2 className="mt-3 font-serif text-[clamp(2rem,3vw,3rem)] leading-[1.08] tracking-[-0.04em] text-white">
            <T zh="第二届全国数智病理峰会" en="2nd National Digital & Intelligent Pathology Summit" />
          </h2>
          <p className="mt-4 text-sm leading-7 text-blue-200/70">
            <T zh="先锋学术会议" en="A Pioneering Academic Conference" />
          </p>
          <div className="mx-auto mt-6 inline-flex items-center justify-center gap-3 rounded-xl bg-white/90 px-4 py-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-nwu.png" alt="西北大学" className="h-9 w-9" />
            <div className="h-7 w-px bg-gray-200" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-cma.png" alt="中华医学会" style={{ height: 36, width: "auto" }} />
            <div className="h-7 w-px bg-gray-200" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-bjjj.png" alt="北京精鉴病理学发展基金会" style={{ height: 20, width: "auto" }} />
          </div>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-3 text-center">
          <div>
            <h3 className="text-sm uppercase tracking-[0.24em] text-blue-300/60">
              <T zh="快速入口" en="Quick Links" />
            </h3>
            <div className="mt-4 space-y-3 text-sm text-blue-100/70">
              <Link className="block transition hover:text-white" href="/announcements">
                <T zh="会议通知" en="Announcements" />
              </Link>
              <Link className="block transition hover:text-white" href="/guide">
                <T zh="参会指南" en="Attendance Guide" />
              </Link>
              <Link className="block transition hover:text-white" href="/register">
                <T zh="报名说明" en="Registration" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-[0.24em] text-blue-300/60">
              <T zh="会场坐标" en="Venue" />
            </h3>
            <div className="mt-4 space-y-3 text-sm text-blue-100/70">
              <p>
                <T
                  zh={siteConfig.address}
                  en={siteConfig.addressEn}
                />
              </p>
              <p>
                <T zh="2026 年 5 月 10 日" en="May 10, 2026" />
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-[0.24em] text-blue-300/60">
              <T zh="备案信息" en="Legal" />
            </h3>
            <div className="mt-4 space-y-3 text-sm text-blue-100/70">
              <p>
                <T zh="备案号待申请" en="ICP License: Pending" />
              </p>
              <p className="text-blue-200/40">© {new Date().getFullYear()} {siteConfig.name}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
