import Link from "next/link";

import { T } from "@/components/ui/t";
import { siteConfig } from "@/content/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="container-shell py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/88">
              {siteConfig.acronym} · Digital Intelligence in Pathology Summit
            </div>
            <h2 className="mt-3 font-serif text-3xl text-white">
              <T zh={siteConfig.name} en={siteConfig.nameEn} />
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300/78">
              <T
                zh={siteConfig.description}
                en={siteConfig.descriptionEn}
              />
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-sm uppercase tracking-[0.24em] text-slate-400">
                <T zh="快速入口" en="Quick Links" />
              </h3>
              <div className="mt-4 space-y-3 text-sm text-slate-200">
                <Link className="block hover:text-cyan-200" href="/announcements">
                  <T zh="会议通知" en="Announcements" />
                </Link>
                <Link className="block hover:text-cyan-200" href="/guide">
                  <T zh="参会指南" en="Attendance Guide" />
                </Link>
                <Link className="block hover:text-cyan-200" href="/register">
                  <T zh="报名说明" en="Registration" />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-[0.24em] text-slate-400">
                <T zh="站点信息" en="Site Info" />
              </h3>
              <div className="mt-4 space-y-3 text-sm text-slate-300/78">
                <p>
                  <T
                    zh={`地址：${siteConfig.address}`}
                    en={`Address: ${siteConfig.addressEn}`}
                  />
                </p>
                <p>
                  <T zh="备案号：浙 ICP 备 XXXXXXXX 号" en="ICP License: Pending" />
                </p>
                <p>© {new Date().getFullYear()} {siteConfig.name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
