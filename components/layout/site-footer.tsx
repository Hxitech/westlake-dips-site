import Image from "next/image";
import Link from "next/link";

import { T } from "@/components/ui/t";
import { siteConfig } from "@/content/data/site";

export function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container-shell py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-gray-500">
              DIGITAL AND INTELLIGENT PATHOLOGY SUMMIT
            </p>
            <h2 className="mt-2 text-xl font-bold text-white sm:text-2xl">
              <T zh="第二届全国数智病理峰会" en="2nd National DIPS Summit" />
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              <T zh="先锋学术会议" en="A Pioneering Academic Conference" />
            </p>
            <div className="mt-5 inline-flex items-center gap-3 rounded-md bg-white/10 px-3 py-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-nwu.png" alt="西北大学" className="h-7 w-7" />
              <div className="h-5 w-px bg-white/20" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-cma.png" alt="中华医学会" style={{ height: 28, width: "auto" }} />
              <div className="h-5 w-px bg-white/20" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-bjjj.png" alt="北京精鉴病理学发展基金会" style={{ height: 16, width: "auto" }} className="brightness-0 invert opacity-80" />
            </div>
          </div>

          <div className="grid gap-8 text-sm sm:grid-cols-3 lg:text-right">
            <div>
              <h3 className="text-xs font-medium uppercase tracking-widest text-gray-500">
                <T zh="快速入口" en="Links" />
              </h3>
              <div className="mt-3 space-y-2">
                <Link className="block transition hover:text-white" href="/announcements">
                  <T zh="会议通知" en="Announcements" />
                </Link>
                <Link className="block transition hover:text-white" href="/guide">
                  <T zh="参会指南" en="Guide" />
                </Link>
                <Link className="block transition hover:text-white" href="/register">
                  <T zh="报名说明" en="Register" />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-xs font-medium uppercase tracking-widest text-gray-500">
                <T zh="会场" en="Venue" />
              </h3>
              <div className="mt-3 space-y-2">
                <p><T zh={siteConfig.address} en={siteConfig.addressEn} /></p>
                <p><T zh="2026 年 5 月 10 日" en="May 10, 2026" /></p>
              </div>
            </div>
            <div>
              <h3 className="text-xs font-medium uppercase tracking-widest text-gray-500">
                <T zh="备案" en="Legal" />
              </h3>
              <div className="mt-3 space-y-2">
                <p><T zh="备案号待申请" en="ICP License: Pending" /></p>
                <p className="text-gray-600">© {new Date().getFullYear()} DIPS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
