import Image from "next/image";
import Link from "next/link";

import { T } from "@/components/ui/t";
import { registrationConfig, siteConfig } from "@/content/data/site";

const footerLogos = [
  {
    src: "/logo-nwu-2026.png",
    alt: "西北大学",
    width: 256,
    height: 69,
    displayHeight: "clamp(2.5rem, 4vw, 3rem)",
  },
  {
    src: "/logos/footer/xijing-hospital.png",
    alt: "空军军医大学第一附属医院（西京医院）",
    width: 362,
    height: 489,
    displayHeight: "clamp(3.5rem, 5vw, 4rem)",
  },
  {
    src: "/logos/footer/bjjj-white.png",
    alt: "北京精鉴病理学发展基金会",
    width: 524,
    height: 86,
    displayHeight: "clamp(2.25rem, 4vw, 2.5rem)",
  },
  {
    src: "/logos/footer/chinese-society-pathology.png",
    alt: "中华医学会病理学分会",
    width: 633,
    height: 616,
    displayHeight: "clamp(3.5rem, 5vw, 4rem)",
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
          <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-5">
            <div className="grid grid-cols-2 items-center gap-x-4 gap-y-7 lg:grid-cols-4">
              {footerLogos.map((logo) => (
                <div className="flex min-h-20 items-center justify-center px-2" key={logo.src}>
                  <Image
                    alt={logo.alt}
                    className="max-w-full object-contain"
                    height={logo.height}
                    priority
                    src={logo.src}
                    style={{ height: logo.displayHeight, width: "auto" }}
                    width={logo.width}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container-shell py-10 sm:py-12">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.35fr)] xl:items-start">
          <div>
            <p className="text-kicker font-medium text-gray-400">
              DIGITAL AND INTELLIGENT PATHOLOGY SUMMIT
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
              <T zh={siteConfig.name} en={siteConfig.nameEn} />
            </h2>
            <p className="text-body-copy mt-4 max-w-xl text-gray-300/88">
              <T zh={siteConfig.description} en={siteConfig.descriptionEn} />
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3 xl:text-right">
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
