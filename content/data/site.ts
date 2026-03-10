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
    "聚焦数字病理、人工智能诊断与临床转化的全国性旗舰学术峰会。",
  descriptionEn:
    "China's flagship academic summit on digital pathology, AI-assisted diagnosis, and clinical translation.",
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
    "汇聚全国病理学者、AI 研究者与产业先锋，共同探索大模型驱动下的数字病理与智能诊断前沿。",
  subtitleEn:
    "Bringing together pathologists, AI researchers, and industry pioneers to explore AI-driven digital pathology.",
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
    detail: "算法 · 临床 · 标准化 · 转化",
    detailEn: "AI · Clinical · Standards · Translation",
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
    title: "AI 智能诊断专场",
    titleEn: "AI Diagnostics Track",
    description: "AI 辅助判读、模型验证与临床部署经验。",
    descriptionEn: "AI-assisted reading, model validation, and clinical deployment.",
  },
  {
    time: "第二天 · 09:30",
    timeEn: "Day 2 · 09:30",
    title: "数字病理流程专场",
    titleEn: "Digital Pathology Workflow",
    description: "数字切片、多院协同与标准化实践。",
    descriptionEn: "Digital slides, multi-site collaboration, and standardization.",
  },
  {
    time: "第二天 · 14:30",
    timeEn: "Day 2 · 14:30",
    title: "产业转化圆桌",
    titleEn: "Industry Roundtable",
    description: "科研机构、医院与企业探讨合作与产业化路径。",
    descriptionEn: "Institutions, hospitals, and enterprises discuss collaboration pathways.",
  },
];

export const focusPillars = [
  "数字病理基础设施",
  "AI 辅助诊断",
  "病理数据标准化",
  "临床转化与产业协同",
];

export const focusPillarsEn = [
  "Digital Pathology Infrastructure",
  "AI-Assisted Diagnosis",
  "Pathology Data Standardization",
  "Clinical Translation & Industry Collaboration",
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
