import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/button-link";
import { PageHero } from "@/components/ui/page-hero";
import { T } from "@/components/ui/t";
import { registrationConfig, siteConfig } from "@/content/data/site";
import { createPageMetadata } from "@/lib/metadata";
import { getRegisterGuide } from "@/lib/content";

export const metadata: Metadata = createPageMetadata({
  title: "报名说明 | Registration",
  description: "Registration details and instructions for the DIPS Summit.",
  path: "/register",
});

export default async function RegisterPage() {
  const guide = await getRegisterGuide();

  return (
    <>
      <PageHero
        eyebrow={<T zh="报名注册" en="Registration" />}
        title={<T zh="报名说明" en="Registration" />}
        description={<T zh="报名通道即将开放。请关注本页面获取最新注册信息。" en="Registration will open soon. Stay tuned for updates." />}
      />
      <section className="container-shell py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 p-5 sm:p-6">
              <p className="text-sm font-medium text-blue-700">
                <T zh="当前状态" en="Status" />
              </p>
              <h2 className="mt-2 text-xl font-bold text-gray-900">
                <T zh={registrationConfig.primaryLabel} en={registrationConfig.primaryLabelEn} />
              </h2>
              <p className="mt-2 text-sm leading-7 text-gray-500">
                <T zh={registrationConfig.description} en={registrationConfig.descriptionEn} />
              </p>
            </div>
            {registrationConfig.tips.map((tip, i) => (
              <p className="text-sm leading-7 text-gray-500" key={tip}>
                <T zh={tip} en={registrationConfig.tipsEn[i]} />
              </p>
            ))}
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/contact"><T zh="联系会务组" en="Contact Us" /></ButtonLink>
              <ButtonLink href="/guide" variant="secondary"><T zh="参会指南" en="Guide" /></ButtonLink>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 p-5 sm:p-6">
            <div className="prose prose-sm prose-gray max-w-none">{guide}</div>
          </div>
        </div>
      </section>
    </>
  );
}
