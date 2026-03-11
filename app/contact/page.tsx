import type { Metadata } from "next";
import { ExternalLink, Mail, MapPinned, Phone, QrCode } from "lucide-react";

import { PageHero } from "@/components/ui/page-hero";
import { T } from "@/components/ui/t";
import { siteConfig } from "@/content/data/site";
import { venueInfo } from "@/content/data/venue";
import { createPageMetadata } from "@/lib/metadata";

type LocalizedText = {
  zh: string;
  en: string;
};

type BaseContactItem = {
  description: LocalizedText;
  icon: typeof Phone;
  title: LocalizedText;
  value: string | LocalizedText;
};

type ContactItem = BaseContactItem & {
  href?: undefined;
  hrefLabel?: undefined;
} | (BaseContactItem & {
  href: string;
  hrefLabel: LocalizedText;
});

export const metadata: Metadata = createPageMetadata({
  title: "联系我们 | Contact",
  description: "Contact the DIPS Summit organizing committee for registration, partnerships, and support.",
  path: "/contact",
});

const contactItems: ContactItem[] = [
  {
    icon: Phone,
    title: { zh: "电话咨询", en: "Phone" },
    value: "13277093146",
    description: { zh: "工作日 09:00–18:00 会务支持", en: "Weekdays 09:00–18:00 (GMT+8)" },
  },
  {
    icon: Mail,
    title: { zh: "邮箱联系", en: "Email" },
    value: "can.fang@dipath.cn",
    description: { zh: "用于会务咨询、合作与资料提交", en: "For inquiries, partnerships & submissions" },
  },
  {
    icon: MapPinned,
    title: { zh: "会场地址", en: "Venue Address" },
    value: { zh: venueInfo.address, en: venueInfo.addressEn },
    description: { zh: siteConfig.venue, en: siteConfig.venueEn },
    href: venueInfo.mapUrl,
    hrefLabel: { zh: venueInfo.mapLabel, en: venueInfo.mapLabelEn },
  },
  {
    icon: QrCode,
    title: { zh: "官方账号", en: "Official Channels" },
    value: { zh: "微信公众号 / 视频号", en: "WeChat Official Account" },
    description: { zh: "扫码关注获取峰会最新动态", en: "Follow us for the latest summit updates" },
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        description={
          <T
            zh="如有会务咨询、合作洽谈或其他需求，欢迎通过以下方式联系我们。"
            en="For event inquiries, partnership discussions, or any other questions, feel free to reach out."
          />
        }
        eyebrow={<T zh="联系我们" en="Contact" />}
        meta={[
          <T key="t" zh="方老师" en="Ms. Fang" />,
          <T key="s" zh="会务支持" en="Event Support" />,
          <T key="p" zh="合作咨询" en="Partnership" />,
        ]}
        title={<T zh="联系我们" en="Get in Touch" />}
      />
      <section className="container-shell pb-24 pt-18 sm:pb-28 sm:pt-20">
        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
          {contactItems.map((item) => {
            const Icon = item.icon;
            const displayValue = typeof item.value === "string"
              ? item.value
              : <T zh={item.value.zh} en={item.value.en} />;

            return (
              <div className="panel rounded-[1.75rem] p-6" key={item.title.zh}>
                <div className="flex size-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cyan-200">
                  <Icon className="size-5" />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-white">
                  <T zh={item.title.zh} en={item.title.en} />
                </h2>
                <p className="mt-3 text-lg text-slate-100">{displayValue}</p>
                <p className="mt-4 text-sm leading-7 text-slate-300/80">
                  <T zh={item.description.zh} en={item.description.en} />
                </p>
                {item.href && item.hrefLabel ? (
                  <a
                    className="mt-5 inline-flex items-center gap-2 text-sm text-cyan-200 transition hover:text-cyan-100 hover:underline"
                    data-testid="contact-venue-map-link"
                    href={item.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <T zh={item.hrefLabel.zh} en={item.hrefLabel.en} />
                    <ExternalLink className="size-4" />
                  </a>
                ) : null}
              </div>
            );
          })}
        </div>
        <div className="panel mt-10 rounded-[2rem] p-6 sm:p-8">
          <div className="text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/88">
            <T zh="会务服务" en="Event Services" />
          </div>
          <h2 className="mt-4 font-serif text-3xl text-white">
            <T zh="我们随时为您提供帮助" en="We're Here to Help" />
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-300/82">
            <T
              zh="无论您是参会嘉宾、合作伙伴还是媒体代表，会务组将为您提供全程支持。如需了解更多信息，请通过以上方式联系我们。"
              en="Whether you're an attendee, partner, or media representative, our organizing committee provides full support. Please reach out through any of the channels above."
            />
          </p>
        </div>
      </section>
    </>
  );
}
