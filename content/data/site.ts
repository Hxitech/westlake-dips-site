import type {
  HeroContent,
  HeroCta,
  HighlightCard,
  QuickFact,
  RegistrationConfig,
  ScheduleItem,
  SiteConfig,
} from "@/content/types";

export const siteConfig: SiteConfig = {
  name: "第二届数智病理峰会(DIPS2026)",
  nameEn: "2nd Digital & Intelligent Pathology Summit (DIPS 2026)",
  shortName: "第二届数智病理峰会",
  shortNameEn: "DIPS 2026",
  acronym: "DIPS",
  description:
    "聚焦人工智能等前沿技术与病理学深度融合的全国数智病理学术交流平台。",
  descriptionEn:
    "A national academic exchange platform focused on the deep integration of AI and digital pathology.",
  locale: "zh_CN",
  url: "https://dips.ccipd.net",
  themeColor: "#1a5fb4",
  eventStart: "2026-05-10T09:00:00+08:00",
  eventEnd: "2026-05-10T18:00:00+08:00",
  city: "中国 西安",
  cityEn: "Xi'an, China",
  venue: "西北大学长安校区",
  venueEn: "Northwest University Chang'an Campus",
  address: "西安市长安区郭杜镇学府大道 1 号",
  addressEn: "1 Xuefu Avenue, Guodu Town, Chang'an District, Xi'an, Shaanxi",
  navigation: [
    { href: "/", label: "首页", labelEn: "Home", description: "峰会首页", descriptionEn: "Summit homepage" },
    { href: "/about", label: "关于峰会", labelEn: "About", description: "峰会简介与沿革", descriptionEn: "Introduction & history" },
    { href: "/announcements", label: "会议通知", labelEn: "News", description: "最新通知与公告", descriptionEn: "Announcements" },

    { href: "/guide", label: "参会指南", labelEn: "Guide", description: "交通与参会说明", descriptionEn: "Venue & travel" },
    { href: "/archives", label: "往届会议", labelEn: "Archives", description: "往届峰会回顾", descriptionEn: "Past summits" },
    { href: "/partners", label: "合作伙伴", labelEn: "Partners", description: "合作方案与合作单位", descriptionEn: "Partnership details" },
    { href: "/contact", label: "联系我们", labelEn: "Contact", description: "会务联络方式", descriptionEn: "Get in touch" },
  ],
};

export const registrationConfig: RegistrationConfig = {
  status: "closed",
  pageHref: "/register",
  pageLabel: "参会说明",
  pageLabelEn: "Attendance Info",
  title: "参会信息",
  titleEn: "Participation Information",
  statusLabel: "暂不对外开放注册",
  statusLabelEn: "Registration Closed",
  description:
    "本届峰会暂不对外开放线上注册。如需参会沟通、团体组织或合作咨询，请联系会务组。",
  descriptionEn:
    "Online registration is not open for this summit. For attendance coordination, group arrangements, or partnership inquiries, please contact the organizing committee.",
  tips: [
    "建议优先查阅会议通知与参会指南，确认议程和会场信息。",
    "如需参会沟通、团体组织或合作咨询，请通过联系页面与会务组对接。",
  ],
  tipsEn: [
    "Please review the meeting notice and attendance guide first to confirm agenda and venue details.",
    "For attendance coordination, group arrangements, or partnership inquiries, please contact the organizing committee via the contact page.",
  ],
};

export const registrationIsOpen = registrationConfig.status === "external";

const heroCtas: HeroCta[] = [
  ...(registrationIsOpen
    ? [
        {
          href: registrationConfig.externalUrl ?? registrationConfig.pageHref,
          label: "立即注册",
          labelEn: "Register Now",
          variant: "primary" as const,
        },
      ]
    : []),
  {
    href: "/announcements",
    label: "查看日程",
    labelEn: "View Agenda",
    variant: "secondary",
  },
];

export const heroContent: HeroContent = {
  eyebrow: "第二届 · 2026",
  eyebrowEn: "2nd Edition · 2026",
  title: "大模型时代的数智病理",
  titleEn: "Digital & Intelligent Pathology in the Era of Large Models",
  subtitle:
    "聚集人工智能与病理学交叉学科的深度融合与最新进展",
  subtitleEn:
    "Focusing on the deep integration and latest advances at the intersection of AI and pathology.",
  location: "西安 · 西北大学长安校区",
  locationEn: "Xi'an · Northwest University Chang'an Campus",
  dateText: "2026 年 5 月 10 日",
  dateTextEn: "May 10, 2026",
  ctas: heroCtas,
};

export const quickFacts: QuickFact[] = [
  {
    label: "主论坛",
    labelEn: "Plenary",
    value: "1 场",
    valueEn: "1",
    detail: "年度主题报告与开幕式",
    detailEn: "Annual keynote & opening",
  },
  {
    label: "专题论坛",
    labelEn: "Tracks",
    value: "4 场",
    valueEn: "4",
    detail: "大模型 · 精准诊断 · 青年学者 · 产业融合",
    detailEn: "Large Models · Precision Dx · Young Scholars · Industry",
  },
  {
    label: "演讲嘉宾",
    labelEn: "Speakers",
    value: "30+",
    valueEn: "30+",
    detail: "病理、AI、医院管理与产业",
    detailEn: "Pathology, AI, hospital & industry",
  },
  {
    label: "参会规模",
    labelEn: "Attendees",
    value: "1000+",
    valueEn: "1000+",
    detail: "线上线下联动，覆盖全国",
    detailEn: "Hybrid, nationwide",
  },
];

export const summitHighlights: HighlightCard[] = [
  {
    title: "前沿学术报告",
    titleEn: "Frontier Research",
    description: "围绕大模型病理、AI 辅助诊断、数据治理等前沿方向，邀请国内顶尖学者作主题报告。",
    descriptionEn: "Keynote reports on large-model pathology, AI diagnosis, and data governance by leading scholars.",
    metric: "3 大主题",
    metricEn: "3 Themes",
  },
  {
    title: "跨界协同对话",
    titleEn: "Cross-Sector Dialogue",
    description: "病理科、信息科、临床团队与企业代表同台交流，推动产学研用深度协作。",
    descriptionEn: "Pathologists, informaticians, clinicians, and industry leaders engage in open dialogue.",
    metric: "4 类参与方",
    metricEn: "4 Sectors",
  },
  {
    title: "成果展示与转化",
    titleEn: "Showcases & Translation",
    description: "精选临床案例展台与产品演示，促进科研成果向临床应用高效转化。",
    descriptionEn: "Curated case showcases and product demos accelerating research-to-practice translation.",
    metric: "案例展台",
    metricEn: "Live Demos",
  },
];

export const schedulePreview: ScheduleItem[] = [
  {
    time: "5 月 10 日 · 09:00",
    timeEn: "May 10 · 09:00",
    title: "前沿技术专场",
    titleEn: "Frontier Technology Track",
    description: "聚焦大模型、多模态与算法创新等前沿方向。",
    descriptionEn: "Focused on large models, multimodal systems, and algorithmic innovation.",
  },
  {
    time: "5 月 10 日 · 11:00",
    timeEn: "May 10 · 11:00",
    title: "数智病理临床应用专场",
    titleEn: "Clinical Applications Track",
    description: "围绕数智病理在真实临床场景中的应用与实践展开交流。",
    descriptionEn: "Discussing real-world clinical applications and practice in digital pathology.",
  },
  {
    time: "5 月 10 日 · 14:00",
    timeEn: "May 10 · 14:00",
    title: "青年学者专场",
    titleEn: "Young Scholars Track",
    description: "展示青年学者最新研究成果与学术观察。",
    descriptionEn: "Showcasing the latest research and perspectives from emerging scholars.",
  },
  {
    time: "5 月 10 日 · 16:00",
    timeEn: "May 10 · 16:00",
    title: "产业融合与未来发展交流专场",
    titleEn: "Industry Integration & Future Development",
    description: "科研机构、医院与企业共同探讨合作路径与未来发展。",
    descriptionEn: "Institutions, hospitals, and enterprises explore collaboration and future development.",
  },
];

export const focusPillars = [
  "前沿技术专场",
  "数智病理临床应用专场",
  "青年学者专场",
  "产业融合与未来发展交流专场",
];

export const focusPillarsEn = [
  "Frontier Technology Track",
  "Clinical Applications Track",
  "Young Scholars Track",
  "Industry Integration & Future Development Track",
];
