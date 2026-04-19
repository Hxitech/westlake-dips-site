import Image from "next/image";
import Link from "next/link";

import { T } from "@/components/ui/t";
import { siteConfig } from "@/content/data/site";

export function SiteFooter() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="container-shell py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-gray-400">
              DIGITAL AND INTELLIGENT PATHOLOGY SUMMIT
            </p>
            <h2 className="mt-2 text-xl font-bold text-white sm:text-2xl">
              <T zh={siteConfig.name} en={siteConfig.nameEn} />
            </h2>
            <p className="mt-1 text-sm text-gray-300/80">
              <T zh="先锋学术会议" en="A Pioneering Academic Conference" />
            </p>
            <div className="mt-5 space-y-4">
              <div className="w-full max-w-[21rem] rounded-2xl border border-white/12 bg-white px-5 py-4 shadow-lg shadow-black/10 sm:mx-auto sm:max-w-[18rem]">
                <Image
                  src="/logo-cma.png"
                  alt="中华医学会"
                  width={320}
                  height={200}
                  className="mx-auto h-20 w-auto object-contain sm:h-24"
                  priority
                />
              </div>
              <div className="w-full max-w-[35rem] rounded-2xl border border-slate-200/70 bg-white px-5 py-4 shadow-lg shadow-black/10 sm:mx-auto sm:max-w-[31rem]">
                <Image
                  src="/logo-bjjj-2026.png"
                  alt="北京精鉴病理学发展基金会"
                  width={524}
                  height={108}
                  className="mx-auto h-10 w-auto object-contain sm:h-12"
                  priority
                />
              </div>
              <div className="grid gap-4 sm:mx-auto sm:max-w-[36rem] sm:grid-cols-2">
                <div className="flex min-h-[10.5rem] items-center justify-center rounded-2xl border border-white/12 bg-[#123a8b] px-5 py-4 shadow-lg shadow-black/10 sm:min-h-[12rem]">
                  <Image
                    src="/logo-nwu-2026.png"
                    alt="西北大学"
                    width={256}
                    height={69}
                    className="h-auto w-full max-w-[13.5rem] object-contain"
                    priority
                  />
                </div>
                <div className="flex min-h-[10.5rem] items-center justify-center rounded-2xl border border-white/12 bg-white px-5 py-4 shadow-lg shadow-black/10 sm:min-h-[12rem]">
                  <Image
                    src="/logos/xijing-hospital.jpg"
                    alt="西京医院"
                    width={640}
                    height={640}
                    className="h-auto w-full max-w-[9.75rem] object-contain sm:max-w-[10.5rem]"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-8 text-sm sm:grid-cols-3 lg:text-right">
            <div>
              <h3 className="text-xs font-medium uppercase tracking-widest text-gray-400">
                <T zh="快速入口" en="Links" />
              </h3>
              <div className="mt-3 space-y-2">
                <Link className="block text-gray-300 transition hover:text-white" href="/announcements">
                  <T zh="会议通知" en="Announcements" />
                </Link>
                <Link className="block text-gray-300 transition hover:text-white" href="/guide">
                  <T zh="参会指南" en="Guide" />
                </Link>
                <Link className="block text-gray-300 transition hover:text-white" href="/register">
                  <T zh="报名说明" en="Register" />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-xs font-medium uppercase tracking-widest text-gray-400">
                <T zh="会场" en="Venue" />
              </h3>
              <div className="mt-3 space-y-2 text-gray-300/88">
                <p><T zh={siteConfig.address} en={siteConfig.addressEn} /></p>
                <p><T zh="2026 年 5 月 10 日" en="May 10, 2026" /></p>
              </div>
            </div>
            <div>
              <h3 className="text-xs font-medium uppercase tracking-widest text-gray-400">
                <T zh="备案" en="Legal" />
              </h3>
              <div className="mt-3 space-y-2">
                <p className="text-gray-300/88"><T zh="浙ICP备17023217号-9" en="ICP License: Zhe ICP 17023217-9" /></p>
                <p className="text-gray-400">© {new Date().getFullYear()} DIPS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
