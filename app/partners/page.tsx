import type { Metadata } from "next";

import { PageHero } from "@/components/ui/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { T } from "@/components/ui/t";
import { sponsorTiers } from "@/content/data/partners";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "赞助合作",
  description: "了解峰会赞助合作方案与合作伙伴层级。",
  path: "/partners",
});

export default function PartnersPage() {
  return (
    <>
      <PageHero
        description={
          <T
            zh="诚邀国内外深耕于人工智能、数字病理及相关领域的先锋企业与合作伙伴，共襄盛会！"
            en="We sincerely invite leading enterprises and partners in AI, digital pathology, and related fields to join us!"
          />
        }
        eyebrow={<T zh="赞助合作" en="Sponsorship" />}
        meta={[
          <T key="s" zh="战略" en="Strategic" />,
          <T key="d" zh="钻石" en="Diamond" />,
          <T key="g" zh="金牌" en="Gold" />,
        ]}
        title={<T zh="大会合作方案" en="Sponsorship Packages" />}
      />
      <section className="container-shell pb-24 pt-18 sm:pb-28 sm:pt-20">
        <div className="space-y-6">
          {sponsorTiers.map((tier) => (
            <div className="panel rounded-[2rem] p-6 sm:p-8" key={tier.tier}>
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <div>
                  <div className="text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/88">
                    <T zh={tier.name} en={tier.nameEn} />
                  </div>
                  <h2 className="mt-3 font-serif text-2xl text-white sm:text-3xl">
                    <T zh={tier.price} en={tier.priceEn} />
                  </h2>
                </div>
              </div>
              <div className="mt-6 space-y-2.5">
                {tier.benefits.map((benefit, i) => (
                  <div
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-6 text-slate-200"
                    key={benefit}
                  >
                    <T zh={benefit} en={tier.benefitsEn[i]} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Notes */}
        <div className="mt-8 space-y-3">
          {[
            { zh: "广告位置按先到款先选择的原则，战略合作商拥有优先选择权。", en: "Ad placements are allocated on a first-come, first-served basis; Strategic Partners have priority." },
            { zh: "如有其他特殊合作需求，请提前与组委会协商。", en: "For special partnership requests, please contact the organizing committee in advance." },
          ].map((note) => (
            <div
              className="rounded-xl border border-white/8 bg-white/[0.03] px-5 py-3.5 text-sm leading-6 text-slate-400"
              key={note.zh}
            >
              <T zh={note.zh} en={note.en} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="panel mt-10 rounded-[2rem] p-6 sm:p-8">
          <div className="text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/88">
            <T zh="合作咨询" en="Partnership Inquiry" />
          </div>
          <h2 className="mt-4 font-serif text-3xl text-white">
            <T zh="成为峰会合作伙伴" en="Become a Summit Partner" />
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-300/82">
            <T
              zh="如有合作意向或品牌展示需求，欢迎联系组委会方小姐（13277093146）了解详情与合作方案。"
              en="For partnership opportunities or brand visibility, please contact Ms. Fang (13277093146) on the organizing committee."
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
