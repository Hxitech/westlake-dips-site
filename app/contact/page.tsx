import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink, Mail, MapPinned, Phone, QrCode } from "lucide-react";

import { PageHero } from "@/components/ui/page-hero";
import { T } from "@/components/ui/t";
import { siteConfig } from "@/content/data/site";
import { venueInfo } from "@/content/data/venue";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "联系我们 | Contact",
  description: "Contact the DIPS Summit organizing committee.",
  path: "/contact",
});

const contactItems = [
  {
    icon: Phone,
    title: { zh: "电话咨询", en: "Phone" },
    value: "13277093146",
    description: { zh: "工作日 09:00–18:00", en: "Weekdays 09:00–18:00 (GMT+8)" },
  },
  {
    icon: Mail,
    title: { zh: "邮箱联系", en: "Email" },
    value: "can.fang@dipath.cn",
    description: { zh: "会务咨询、合作与资料提交", en: "Inquiries, partnerships & submissions" },
  },
  {
    icon: MapPinned,
    title: { zh: "会场地址", en: "Venue" },
    value: { zh: venueInfo.address, en: venueInfo.addressEn },
    description: { zh: siteConfig.venue, en: siteConfig.venueEn },
    href: venueInfo.mapUrl,
    hrefLabel: { zh: "在地图中查看", en: "View on Map" },
  },
  {
    icon: QrCode,
    title: { zh: "官方账号", en: "Official Channels" },
    value: { zh: "微信公众号 / 视频号", en: "WeChat Official Account" },
    description: { zh: "扫码关注获取峰会最新动态", en: "Follow us for the latest updates" },
    showQr: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow={<T zh="联系我们" en="Contact" />}
        title={<T zh="联系我们" en="Get in Touch" />}
        description={<T zh="如有会务咨询、合作洽谈或其他需求，欢迎联系我们。" en="For inquiries, partnerships, or any questions, feel free to reach out." />}
      />
      <section className="container-shell py-16 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {contactItems.map((item) => {
            const Icon = item.icon;
            const displayValue = typeof item.value === "string"
              ? item.value
              : <T zh={item.value.zh} en={item.value.en} />;

            return (
              <div className="rounded-lg border border-gray-200 p-5" key={item.title.zh}>
                <Icon className="size-5 text-blue-700" />
                <h2 className="mt-3 text-base font-semibold text-gray-900">
                  <T zh={item.title.zh} en={item.title.en} />
                </h2>
                <p className="mt-1 text-sm font-medium text-gray-700">{displayValue}</p>
                <p className="mt-2 text-sm text-gray-500">
                  <T zh={item.description.zh} en={item.description.en} />
                </p>
                {"showQr" in item && item.showQr ? (
                  <div className="mt-3">
                    <Image
                      src="/wechat-qr.png"
                      alt="微信二维码"
                      width={140}
                      height={140}
                      className="rounded border border-gray-200"
                    />
                  </div>
                ) : null}
                {"href" in item && item.href ? (
                  <a
                    className="mt-3 inline-flex items-center gap-1 text-sm text-blue-700 hover:underline"
                    data-testid="contact-venue-map-link"
                    href={item.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <T zh={item.hrefLabel!.zh} en={item.hrefLabel!.en} />
                    <ExternalLink className="size-3.5" />
                  </a>
                ) : null}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
