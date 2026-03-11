import type {
  HeroContent,
  HighlightCard,
  QuickFact,
  RegistrationConfig,
  ScheduleItem,
  SiteConfig,
} from "@/content/types";

export const siteConfig: SiteConfig = {
  name: "全国数智病理西湖峰会",
  nameEn: "National Digital & Intelligent Pathology Summit",
  shortName: "数智病理峰会",
  shortNameEn: "DIPS",
  acronym: "DIPS",
  description:
    "聚焦大模型浪潮下人工智能与数智病理的创新与融合的全国性旗舰学术峰会。",
  descriptionEn:
    "China's flagship academic summit on the innovation and integration of AI and digital pathology in the era of large models.",
  locale: "zh_CN",
  url: "https://westlake-dips.vercel.app",
  themeColor: "#08152d",
  eventStart: "2026-05-09T09:00:00+08:00",
  eventEnd: "2026-05-10T18:00:00+08:00",
  city: "中国 西安",
  cityEn: "Xi'an, China",
  venue: "西北大学",
  venueEn: "Northwest University",
  address: "陕西省西安市碑林区太白北路 229 号",
  addressEn: "No. 229 Taibai North Rd, Beilin, Xi'an, Shaanxi",
  navigation: [
    { href: "/", label: "首页", labelEn: "Home", description: "峰会首页", descriptionEn: "Summit homepage" },
    { href: "/about", label: "关于峰会", labelEn: "About", description: "峰会简介与沿革", descriptionEn: "Introduction & history" },
    { href: "/announcements", label: "会议通知", labelEn: "News", description: "最新通知与公告", descriptionEn: "Announcements" },
    { href: "/guide", label: "参会指南", labelEn: "Guide", description: "交通与参会说明", descriptionEn: "Venue & travel" },
    { href: "/archives", label: "往届会议", labelEn: "Archives", description: "往届峰会回顾", descriptionEn: "Past summits" },
    { href: "/partners", label: "赞助商与合作伙伴", labelEn: "Sponsors", description: "赞助商与合作单位", descriptionEn: "Sponsors & partners" },
    { href: "/contact", label: "联系我们", labelEn: "Contact", description: "会务联络方式", descriptionEn: "Get in touch" },
  ],
};

export const heroContent: HeroContent = {
  eyebrow: "第二届 · 2026",
  eyebrowEn: "2nd Edition · 2026",
  title: "大模型时代的数智病理",
  titleEn: "Digital & Intelligent Pathology in the Era of Large Models",
  subtitle:
    "聚焦人工智能与数字病理学交叉学科的深度融合与最新进展，携手知名专家学者、业界领袖及创新团队，共同分享前沿研究与临床转化成果。",
  subtitleEn:
    "Exploring the deep integration and latest advances at the intersection of AI and digital pathology, uniting leading experts, industry pioneers, and innovators to share frontier research and clinical translation.",
  location: "西安 · 西北大学",
  locationEn: "Xi'an · Northwest University",
  dateText: "2026 年 5 月 9–10 日",
  dateTextEn: "May 9–10, 2026",
  ctas: [
    { href: "/register", label: "立即注册", labelEn: "Register Now", variant: "primary" },
    { href: "/announcements", label: "查看日程", labelEn: "View Agenda", variant: "secondary" },
  ],
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
    time: "第一天 · 09:00",
    timeEn: "Day 1 · 09:00",
    title: "开幕式与主论坛",
    titleEn: "Opening & Plenary",
    description: "大会主题演讲、行业趋势报告与年度倡议发布。",
    descriptionEn: "Keynote speeches, trend reports, and annual initiative launch.",
  },
  {
    time: "第一天 · 14:00",
    timeEn: "Day 1 · 14:00",
    title: "大模型前沿技术专场",
    titleEn: "Large Model Frontier Technology",
    description: "大模型在病理领域的最新应用、多模态融合与算法创新。",
    descriptionEn: "Latest applications of large models in pathology, multimodal fusion, and algorithmic innovation.",
  },
  {
    time: "第二天 · 09:00",
    timeEn: "Day 2 · 09:00",
    title: "精准诊断专场 / 青年学者交流专场",
    titleEn: "Precision Diagnosis / Young Scholar Exchange",
    description: "AI 精准诊断临床实践与青年学者前沿交流。",
    descriptionEn: "AI-driven precision diagnosis in clinical practice and young scholar exchange.",
  },
  {
    time: "第二天 · 14:00",
    timeEn: "Day 2 · 14:00",
    title: "产业融合与未来发展交流专场",
    titleEn: "Industry Integration & Future Development",
    description: "科研机构、医院与企业探讨合作路径与产业化未来。",
    descriptionEn: "Institutions, hospitals, and enterprises explore collaboration and industrialization pathways.",
  },
];

export const focusPillars = [
  "大模型前沿技术",
  "AI 精准诊断",
  "青年学者创新",
  "产业融合与转化",
];

export const focusPillarsEn = [
  "Large Model Frontier Technology",
  "AI Precision Diagnosis",
  "Young Scholar Innovation",
  "Industry Integration & Translation",
];

export const registrationConfig: RegistrationConfig = {
  status: "preview",
  primaryLabel: "报名通道即将开放",
  primaryLabelEn: "Registration Opening Soon",
  description:
    "第二届全国数智病理西湖峰会报名通道即将上线，届时可通过本页面进入注册流程。",
  descriptionEn:
    "Registration for the 2nd DIPS Summit will open soon. You can register directly through this page.",
  tips: [
    "正式报名链接上线后，本页面将跳转至注册表单。",
    "参会面向病理、临床、AI 和医院管理等领域专业人员。",
    "如需团体报名或合作洽谈，请通过联系页面与会务组对接。",
  ],
  tipsEn: [
    "Once registration opens, this page will link directly to the form.",
    "Open to professionals in pathology, clinical medicine, AI, and hospital management.",
    "For group registration or partnership inquiries, please contact us.",
  ],
};
