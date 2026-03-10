import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/button-link";
import { PageHero } from "@/components/ui/page-hero";
import { T } from "@/components/ui/t";
import { registrationConfig, siteConfig } from "@/content/data/site";
import { createPageMetadata } from "@/lib/metadata";
import { getRegisterGuide } from "@/lib/content";

export const metadata: Metadata = createPageMetadata({
  title: "报名说明",
  description: "查看峰会报名说明与注册信息。",
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
        description={
          <T
            zh="报名通道即将开放。请关注本页面获取最新注册信息。"
            en="Registration will open soon. Stay tuned to this page for the latest updates."
          />
        }
        eyebrow={<T zh="报名注册" en="Registration" />}
        meta={[
          <T key="s" zh={registrationConfig.status === "preview" ? "即将开放" : "已开放"} en={registrationConfig.status === "preview" ? "Opening Soon" : "Open"} />,
        ]}
        title={<T zh="报名说明" en="Registration" />}
      />
      <section className="container-shell pb-24 pt-18 sm:pb-28 sm:pt-20">
        <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <div className="panel rounded-[2rem] p-6 sm:p-8">
              <div className="text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/88">
                <T zh="当前状态" en="Status" />
              </div>
              <h2 className="mt-4 font-serif text-3xl text-white">
                <T zh={registrationConfig.primaryLabel} en={registrationConfig.primaryLabelEn} />
              </h2>
              <p className="mt-4 text-sm leading-8 text-slate-300/82">
                <T zh={registrationConfig.description} en={registrationConfig.descriptionEn} />
              </p>
              <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4 text-sm leading-7 text-slate-300/82">
                <T
                  zh="正式报名链接上线后，本页面将直接跳转至注册表单。"
                  en="Once registration opens, this page will link directly to the registration form."
                />
              </div>
            </div>
            {registrationConfig.tips.map((tip, i) => (
              <div className="panel rounded-[1.6rem] p-5 text-sm leading-7 text-slate-300/82" key={tip}>
                <T zh={tip} en={registrationConfig.tipsEn[i]} />
              </div>
            ))}
            <div className="flex flex-wrap gap-4">
              <ButtonLink href="/contact">
                <T zh="联系会务组" en="Contact Us" />
              </ButtonLink>
              <ButtonLink href="/guide" variant="secondary">
                <T zh="参会指南" en="Attendance Guide" />
              </ButtonLink>
            </div>
          </div>
          <div className="panel rounded-[2rem] p-7 sm:p-10">{guide}</div>
        </div>
      </section>
    </>
  );
}
