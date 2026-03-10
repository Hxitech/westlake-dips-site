import type { Metadata } from "next";

import { PageHero } from "@/components/ui/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { partners } from "@/content/data/partners";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "合作伙伴",
  description: "查看峰会合作伙伴层级与合作说明。",
  path: "/partners",
});

const tierLabels = {
  strategic: "战略合作伙伴",
  "co-host": "联合共建伙伴",
  innovation: "创新展示伙伴",
  supporting: "支持伙伴",
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        description="合作伙伴页面强调层级感与品牌整洁度，让赞助商和合作单位拥有清晰可持续的展示位置。"
        eyebrow="Partners"
        meta={["战略", "共建", "创新", "支持"]}
        title="赞助商与合作伙伴"
      />
      <section className="container-shell pb-24 pt-18 sm:pb-28 sm:pt-20">
        <div className="space-y-8">
          {Object.entries(tierLabels).map(([tier, label]) => (
            <section key={tier}>
              <div className="mb-5 text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/88">
                {label}
              </div>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {partners
                  .filter((partner) => partner.tier === tier)
                  .map((partner) => (
                    <div className="panel rounded-[1.75rem] p-5" key={partner.name}>
                      <h2 className="text-xl font-semibold text-white">
                        {partner.name}
                      </h2>
                      <p className="mt-3 text-sm leading-7 text-slate-300/80">
                        {partner.description}
                      </p>
                    </div>
                  ))}
              </div>
            </section>
          ))}
        </div>
        <div className="panel mt-10 rounded-[2rem] p-6 sm:p-8">
          <div className="text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/88">
            Partnership CTA
          </div>
          <h2 className="mt-4 font-serif text-3xl text-white">
            需要合作或品牌露出席位？
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-300/82">
            当前页面为演示版本。后续可直接替换为真实合作单位 Logo、品牌说明与跳转链接，并保留当前分层结构。
          </p>
          <ButtonLink className="mt-8" href="/contact">
            联系会务组
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
