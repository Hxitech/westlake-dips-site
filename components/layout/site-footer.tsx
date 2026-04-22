import Image from "next/image";
import Link from "next/link";

import { T } from "@/components/ui/t";
import { registrationConfig, siteConfig } from "@/content/data/site";
import { cn } from "@/lib/utils";

const footerLogos = [
  {
    alt: "西北大学",
    height: 200,
    src: "/logo-nwu.png",
    width: 200,
  },
  {
    alt: "空军军医大学第一附属医院",
    height: 640,
    src: "/logos/xijing-hospital.jpg",
    width: 640,
  },
  {
    alt: "北京精鉴病理学发展基金会",
    height: 120,
    src: "/logo-bjjj.png",
    width: 731,
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
      <div className="border-b border-white/10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_58%)]">
        <div className="container-shell py-10 sm:py-12">
          <p className="text-kicker font-medium text-gray-400">
            <T zh="主办与支持单位" en="Organizers & Partners" />
          </p>
          <div className="mt-5 grid grid-cols-2 gap-4 xl:grid-cols-4">
            {footerLogos.map((logo) => (
              <div
                className="flex min-h-[7.5rem] items-center justify-center rounded-[1.75rem] border border-white/10 bg-white px-6 py-5 shadow-[0_18px_45px_rgba(15,23,42,0.18)]"
                key={logo.alt}
              >
                <Image
                  alt={logo.alt}
                  className={cn("h-16 w-auto max-w-full object-contain sm:h-20")}
                  height={logo.height}
                  priority
                  src={logo.src}
                  width={logo.width}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-shell py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div>
            <p className="text-kicker font-medium text-gray-400">
              DIGITAL AND INTELLIGENT PATHOLOGY SUMMIT
            </p>
            <h2 className="text-section-title mt-2 font-bold text-white">
              <T zh={siteConfig.name} en={siteConfig.nameEn} />
            </h2>
            <p className="text-body-copy mt-4 max-w-2xl text-gray-300/88">
              <T zh={siteConfig.description} en={siteConfig.descriptionEn} />
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:text-right">
            <div>
              <h3 className="text-kicker font-medium text-gray-400">
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
              <h3 className="text-kicker font-medium text-gray-400">
                <T zh="会场" en="Venue" />
              </h3>
              <div className="text-body-copy mt-3 space-y-2 text-gray-300/88">
                <p><T zh={siteConfig.address} en={siteConfig.addressEn} /></p>
                <p><T zh="2026 年 5 月 10 日" en="May 10, 2026" /></p>
              </div>
            </div>
            <div>
              <h3 className="text-kicker font-medium text-gray-400">
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
