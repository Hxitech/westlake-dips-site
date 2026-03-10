import type { Metadata } from "next";
import { Mail, MapPinned, Phone, QrCode } from "lucide-react";

import { PageHero } from "@/components/ui/page-hero";
import { siteConfig } from "@/content/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "联系我们",
  description: "联系峰会会务组，获取报名、合作与会务支持。",
  path: "/contact",
});

const contactItems = [
  {
    icon: Phone,
    title: "电话咨询",
    value: "13277093146",
    description: "工作日 09:00 - 18:00 会务支持",
  },
  {
    icon: Mail,
    title: "邮箱联系",
    value: "can.fang@dipath.cn",
    description: "用于会务咨询、合作与资料提交",
  },
  {
    icon: MapPinned,
    title: "会场地址",
    value: siteConfig.address,
    description: "正式导航链接将在上线版本接入",
  },
  {
    icon: QrCode,
    title: "官方二维码",
    value: "公众号 / 视频号 占位",
    description: "后续替换为正式二维码资产",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        description="联系方式页面同时承担会务、合作和品牌资产的承接任务，避免信息零散落在通知页或页脚。"
        eyebrow="Contact"
        meta={["方老师", "会务支持", "合作咨询"]}
        title="联系我们"
      />
      <section className="container-shell pb-24 pt-18 sm:pb-28 sm:pt-20">
        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <div className="panel rounded-[1.75rem] p-6" key={item.title}>
                <div className="flex size-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cyan-200">
                  <Icon className="size-5" />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-white">
                  {item.title}
                </h2>
                <p className="mt-3 text-lg text-slate-100">{item.value}</p>
                <p className="mt-4 text-sm leading-7 text-slate-300/80">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className="panel mt-10 rounded-[2rem] p-6 sm:p-8">
          <div className="text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/88">
            Service Promise
          </div>
          <h2 className="mt-4 font-serif text-3xl text-white">
            正式版可扩展的联系能力
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-300/82">
            当前为展示版联系页面。后续可以在不改动布局的前提下接入一键拨号、地图导航、飞书/微信二维码，以及不同角色的会务联系人卡片。
          </p>
        </div>
      </section>
    </>
  );
}
