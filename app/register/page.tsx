import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/button-link";
import { PageHero } from "@/components/ui/page-hero";
import { T } from "@/components/ui/t";
import { registrationConfig } from "@/content/data/site";
import { createPageMetadata } from "@/lib/metadata";
import { getRegisterGuide } from "@/lib/content";

export const metadata: Metadata = createPageMetadata({
  title: "参会信息 | Participation",
  description: "Attendance information and contact guidance for the DIPS Summit.",
  path: "/register",
});

export default async function RegisterPage() {
  const guide = await getRegisterGuide();

  return (
    <>
      <PageHero
        eyebrow={<T zh={registrationConfig.pageLabel} en={registrationConfig.pageLabelEn} />}
        title={<T zh={registrationConfig.title} en={registrationConfig.titleEn} />}
        description={<T zh={registrationConfig.description} en={registrationConfig.descriptionEn} />}
      />
      <section className="container-shell py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 p-5 sm:p-6">
              <p className="text-body-copy font-medium text-blue-700">
                <T zh="当前状态" en="Status" />
              </p>
              <h2 className="text-section-title mt-2 font-bold text-gray-900">
                <T zh={registrationConfig.statusLabel} en={registrationConfig.statusLabelEn} />
              </h2>
              <p className="text-body-copy mt-2 text-gray-500">
                <T zh={registrationConfig.description} en={registrationConfig.descriptionEn} />
              </p>
            </div>
            {registrationConfig.tips.map((tip, i) => (
              <p className="text-body-copy text-gray-500" key={tip}>
                <T zh={tip} en={registrationConfig.tipsEn[i]} />
              </p>
            ))}
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/contact"><T zh="联系会务组" en="Contact Us" /></ButtonLink>
              <ButtonLink href="/guide" variant="secondary"><T zh="参会指南" en="Guide" /></ButtonLink>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 p-5 sm:p-6">
            <div className="max-w-none">{guide}</div>
          </div>
        </div>
      </section>
    </>
  );
}
