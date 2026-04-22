import Image from "next/image";
import Link from "next/link";

import { T } from "@/components/ui/t";
import { registrationConfig, siteConfig } from "@/content/data/site";

const footerLogos = [
  {
    alt: "西北大学",
    height: 69,
    src: "/logo-nwu-2026.png",
    width: 256,
  },
  {
    alt: "空军军医大学第一附属医院",
    height: 640,
    src: "/logos/xijing-hospital.jpg",
    width: 640,
  },
  {
    alt: "北京精鉴病理学发展基金会",
    height: 108,
    src: "/logo-bjjj-2026.png",
    width: 524,
  },
  {
    alt: "中华医学会病理学分会",
    height: 200,
    src: "/logo-cma.png",
    width: 320,
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="container-shell py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-body-copy font-medium uppercase tracking-[0.16em] text-gray-400">
              DIGITAL AND INTELLIGENT PATHOLOGY SUMMIT
            </p>
            <h2 className="text-section-title mt-2 font-bold text-white">
              <T zh={siteConfig.name} en={siteConfig.nameEn} />
            </h2>
            <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {footerLogos.map((logo) => (
                <div
                  className="flex min-h-[6.25rem] items-center justify-center rounded-2xl border border-white/10 px-4 py-5"
                  key={logo.alt}
                >
                  <Image
                    alt={logo.alt}
                    className="h-14 w-auto max-w-full object-contain"
                    height={logo.height}
                    priority
                    src={logo.src}
                    width={logo.width}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:text-right">
            <div>
              <h3 className="text-body-copy font-medium uppercase tracking-[0.16em] text-gray-400">
                <T zh="快速入口" en="Links" />
              </h3>
              <div className="text-body-copy mt-3 space-y-2">
                <Link className="block text-gray-300 transition hover:text-white" href="/announcements">
                  <T zh="会议通知" en="Announcements" />
                </Link>
                <Link className="block text-gray-300 transition hover:text-white" href="/guide">
                  <T zh="参会指南" en="Guide" />
                </Link>
                <Link
                  className="block text-gray-300 transition hover:text-white"
                  href={registrationConfig.pageHref}
                >
                  <T zh={registrationConfig.pageLabel} en={registrationConfig.pageLabelEn} />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-body-copy font-medium uppercase tracking-[0.16em] text-gray-400">
                <T zh="会场" en="Venue" />
              </h3>
              <div className="text-body-copy mt-3 space-y-2 text-gray-300/88">
                <p><T zh={siteConfig.address} en={siteConfig.addressEn} /></p>
                <p><T zh="2026 年 5 月 10 日" en="May 10, 2026" /></p>
              </div>
            </div>
            <div>
              <h3 className="text-body-copy font-medium uppercase tracking-[0.16em] text-gray-400">
                <T zh="备案" en="Legal" />
              </h3>
              <div className="text-body-copy mt-3 space-y-2">
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
