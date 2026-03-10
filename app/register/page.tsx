import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/button-link";
import { PageHero } from "@/components/ui/page-hero";
import { registrationConfig, siteConfig } from "@/content/data/site";
import { createPageMetadata } from "@/lib/metadata";
import { getRegisterGuide } from "@/lib/content";

export const metadata: Metadata = createPageMetadata({
  title: "报名说明",
  description: "查看峰会报名说明、开放节奏与后续真实链接预留。",
  path: "/register",
});

const eventStructuredData = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: siteConfig.name,
  description: siteConfig.description,
  startDate: siteConfig.eventStart,
  endDate: siteConfig.eventEnd,
  location: {
    "@type": "Place",
    name: siteConfig.venue,
    address: siteConfig.address,
  },
};

export default async function RegisterPage() {
  const guide = await getRegisterGuide();

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventStructuredData),
        }}
        type="application/ld+json"
      />
      <PageHero
        description="首版网站中的报名入口先由站内说明页承接。正式链接上线后，这一页可以无缝切换为外链或内嵌表单。"
        eyebrow="Registration"
        meta={[registrationConfig.status, "站内说明页", "后续可接外链"]}
        title="报名说明"
      />
      <section className="container-shell pb-24 pt-18 sm:pb-28 sm:pt-20">
        <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <div className="panel rounded-[2rem] p-6 sm:p-8">
              <div className="text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/88">
                Current Status
              </div>
              <h2 className="mt-4 font-serif text-3xl text-white">
                {registrationConfig.primaryLabel}
              </h2>
              <p className="mt-4 text-sm leading-8 text-slate-300/82">
                {registrationConfig.description}
              </p>
              <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4 text-sm leading-7 text-slate-300/82">
                正式表单上线后，此处可以替换成真实链接按钮，或直接嵌入站内报名表单。
              </div>
            </div>
            {registrationConfig.tips.map((tip) => (
              <div className="panel rounded-[1.6rem] p-5 text-sm leading-7 text-slate-300/82" key={tip}>
                {tip}
              </div>
            ))}
            <div className="flex flex-wrap gap-4">
              <ButtonLink href="/contact">联系会务组</ButtonLink>
              <ButtonLink href="/guide" variant="secondary">
                参会指南
              </ButtonLink>
            </div>
          </div>
          <div className="panel rounded-[2rem] p-7 sm:p-10">{guide}</div>
        </div>
      </section>
    </>
  );
}
