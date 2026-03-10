import Link from "next/link";

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
              全国数智病理西湖峰会
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300/78">
              首版官网聚焦峰会品牌展示、会议通知、参会指南与往届沉淀，后续可无缝接入真实报名表单与 CMS 管理能力。
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-sm uppercase tracking-[0.24em] text-slate-400">
                快速入口
              </h3>
              <div className="mt-4 space-y-3 text-sm text-slate-200">
                <Link className="block hover:text-cyan-200" href="/announcements">
                  会议通知
                </Link>
                <Link className="block hover:text-cyan-200" href="/guide">
                  参会指南
                </Link>
                <Link className="block hover:text-cyan-200" href="/register">
                  报名说明
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-[0.24em] text-slate-400">
                站点信息
              </h3>
              <div className="mt-4 space-y-3 text-sm text-slate-300/78">
                <p>地址：{siteConfig.address}</p>
                <p>备案号：浙 ICP 备演示占位</p>
                <p>版权：© {new Date().getFullYear()} {siteConfig.name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
