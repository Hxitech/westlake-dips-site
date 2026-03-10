import type { Metadata } from "next";

import { PageHero } from "@/components/ui/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { T } from "@/components/ui/t";
import { partners } from "@/content/data/partners";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "合作伙伴",
  description: "查看峰会合作伙伴层级与合作说明。",
  path: "/partners",
});

const tierLabels = {
  strategic: { zh: "战略合作伙伴", en: "Strategic Partners" },
  "co-host": { zh: "联合共建伙伴", en: "Co-Host Partners" },
  innovation: { zh: "创新展示伙伴", en: "Innovation Partners" },
  supporting: { zh: "支持伙伴", en: "Supporting Partners" },
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        description={
          <T
            zh="感谢各合作伙伴的鼎力支持，共同推动数智病理事业的发展与创新。"
            en="We sincerely thank our partners for their support in advancing digital pathology innovation."
          />
        }
        eyebrow={<T zh="合作伙伴" en="Partners" />}
        meta={[
          <T key="s" zh="战略" en="Strategic" />,
          <T key="c" zh="共建" en="Co-Host" />,
          <T key="i" zh="创新" en="Innovation" />,
          <T key="u" zh="支持" en="Supporting" />,
        ]}
        title={<T zh="赞助商与合作伙伴" en="Sponsors & Partners" />}
      />
      <section className="container-shell pb-24 pt-18 sm:pb-28 sm:pt-20">
        <div className="space-y-8">
          {Object.entries(tierLabels).map(([tier, label]) => (
            <section key={tier}>
              <div className="mb-5 text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/88">
                <T zh={label.zh} en={label.en} />
              </div>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {partners
                  .filter((partner) => partner.tier === tier)
                  .map((partner) => (
                    <div className="panel rounded-[1.75rem] p-5" key={partner.name}>
                      <h2 className="text-xl font-semibold text-white">
                        <T zh={partner.name} en={partner.nameEn} />
                      </h2>
                      <p className="mt-3 text-sm leading-7 text-slate-300/80">
                        <T zh={partner.description} en={partner.descriptionEn} />
                      </p>
                    </div>
                  ))}
              </div>
            </section>
          ))}
        </div>
        <div className="panel mt-10 rounded-[2rem] p-6 sm:p-8">
          <div className="text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/88">
            <T zh="合作咨询" en="Partnership Inquiry" />
          </div>
          <h2 className="mt-4 font-serif text-3xl text-white">
            <T zh="成为峰会合作伙伴" en="Become a Summit Partner" />
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-300/82">
            <T
              zh="如有合作意向或品牌展示需求，欢迎联系会务组了解详情与合作方案。"
              en="If you're interested in partnership opportunities or brand visibility, please contact our organizing committee for details."
            />
          </p>
          <ButtonLink className="mt-8" href="/contact">
            <T zh="联系会务组" en="Contact Us" />
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
