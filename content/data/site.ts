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
  nameEn: "National Digital Intelligence in Pathology Summit",
  shortName: "西湖峰会",
  shortNameEn: "DIPS",
  acronym: "DIPS",
  description:
    "聚焦数字病理、人工智能诊断与临床转化的年度旗舰峰会，连接学术、临床与产业。",
  descriptionEn:
    "China's flagship annual summit on digital pathology, AI-assisted diagnosis, and clinical translation.",
  locale: "zh_CN",
  url: "https://westlake-dips.vercel.app",
  themeColor: "#08152d",
  eventStart: "2026-10-24T09:00:00+08:00",
  eventEnd: "2026-10-25T18:00:00+08:00",
  city: "中国 杭州",
  cityEn: "Hangzhou, China",
  venue: "杭州国际博览中心",
  venueEn: "Hangzhou International Expo Center",
  address: "浙江省杭州市萧山区奔竞大道 353 号",
  addressEn: "No. 353 Benjing Ave, Xiaoshan, Hangzhou, Zhejiang",
  navigation: [
    { href: "/", label: "首页", labelEn: "Home", description: "峰会首页", descriptionEn: "Summit homepage" },
    { href: "/about", label: "关于峰会", labelEn: "About", description: "峰会简介与历史沿革", descriptionEn: "Introduction & history" },
    { href: "/announcements", label: "会议通知", labelEn: "News", description: "最新动态与公告", descriptionEn: "Latest announcements" },
    { href: "/guide", label: "参会指南", labelEn: "Guide", description: "交通、会场与参会说明", descriptionEn: "Venue, travel & info" },
    { href: "/archives", label: "往届会议", labelEn: "Archives", description: "历届峰会回顾", descriptionEn: "Past summit highlights" },
    { href: "/partners", label: "合作伙伴", labelEn: "Partners", description: "赞助商与合作单位", descriptionEn: "Sponsors & partners" },
    { href: "/contact", label: "联系我们", labelEn: "Contact", description: "会务联络方式", descriptionEn: "Get in touch" },
  ],
};

export const heroContent: HeroContent = {
  eyebrow: "第二届 · 2026",
  eyebrowEn: "2nd Edition · 2026",
  title: "AI 赋能病理，数智引领未来",
  titleEn: "AI-Powered Pathology, Shaping the Future",
  subtitle:
    "汇聚全国顶尖病理学者、AI 研究者与产业先锋，共同探索数字病理与智能诊断的前沿进展与临床转化路径。",
  subtitleEn:
    "Bringing together leading pathologists, AI researchers, and industry pioneers to explore the frontiers of digital pathology and intelligent diagnostics.",
  location: "杭州 · 西湖",
  locationEn: "Hangzhou · West Lake",
  dateText: "2026 年 10 月 24–25 日",
  dateTextEn: "October 24–25, 2026",
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
    detail: "年度主题发布与峰会开幕",
    detailEn: "Annual keynote & opening ceremony",
  },
  {
    label: "专题论坛",
    labelEn: "Tracks",
    value: "4 场",
    valueEn: "4",
    detail: "算法、临床、标准化、转化",
    detailEn: "AI, Clinical, Standards, Translation",
  },
  {
    label: "演讲嘉宾",
    labelEn: "Speakers",
    value: "30+",
    valueEn: "30+",
    detail: "病理、AI、医院管理与产业领袖",
    detailEn: "Pathology, AI, hospital & industry leaders",
  },
  {
    label: "参会规模",
    labelEn: "Attendees",
    value: "1000+",
    valueEn: "1000+",
    detail: "线上线下联动，覆盖全国",
    detailEn: "Hybrid format, nationwide coverage",
  },
];

export const summitHighlights: HighlightCard[] = [
  {
    title: "前沿学术议题",
    titleEn: "Cutting-Edge Research",
    description: "围绕数字病理基础设施、AI 辅助诊断、病理数据治理三大主线，深度解读最新进展。",
    descriptionEn: "In-depth sessions on digital pathology infrastructure, AI-assisted diagnosis, and pathology data governance.",
    metric: "3 大主题",
    metricEn: "3 Core Themes",
  },
  {
    title: "跨界深度对话",
    titleEn: "Cross-Disciplinary Exchange",
    description: "病理科、信息科、临床团队与企业代表同台交流，促进产学研用全链条协同。",
    descriptionEn: "Pathologists, informaticians, clinicians, and industry leaders engage in open dialogue.",
    metric: "4 类参与方",
    metricEn: "4 Stakeholder Groups",
  },
  {
    title: "成果展示与转化",
    titleEn: "Showcases & Translation",
    description: "精选临床案例与产品展台，促进科研成果向实际应用的高效转化。",
    descriptionEn: "Curated clinical cases and product showcases to accelerate research-to-practice translation.",
    metric: "案例展台",
    metricEn: "Live Demos",
  },
];

export const schedulePreview: ScheduleItem[] = [
  {
    time: "第一天 · 09:00",
    timeEn: "Day 1 · 09:00",
    title: "开幕式与主论坛",
    titleEn: "Opening Ceremony & Plenary",
    description: "大会主题演讲、行业趋势报告与年度倡议发布。",
    descriptionEn: "Keynote speeches, industry trend reports, and annual initiative launch.",
  },
  {
    time: "第一天 · 14:00",
    timeEn: "Day 1 · 14:00",
    title: "AI 智能诊断专场",
    titleEn: "AI Diagnostics Track",
    description: "AI 辅助判读、模型验证与临床落地经验分享。",
    descriptionEn: "AI-assisted reading, model validation, and deployment case studies.",
  },
  {
    time: "第二天 · 09:30",
    timeEn: "Day 2 · 09:30",
    title: "数字病理流程重构",
    titleEn: "Digital Pathology Workflow",
    description: "从数字切片到多院协同的流程升级与标准化实践。",
    descriptionEn: "Workflow modernization from digital slides to multi-site standardization.",
  },
  {
    time: "第二天 · 14:30",
    timeEn: "Day 2 · 14:30",
    title: "产业转化圆桌论坛",
    titleEn: "Industry Roundtable",
    description: "科研机构、医院与企业共同探讨合作路径与产业化前景。",
    descriptionEn: "Research institutions, hospitals, and enterprises discuss collaboration pathways.",
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
    "第二届全国数智病理西湖峰会报名通道即将上线，届时可通过本页面直接进入注册流程。",
  descriptionEn:
    "Registration for the 2nd National DIPS Summit will open soon. You will be able to register directly through this page.",
  tips: [
    "正式报名链接上线后，本页面将直接跳转至注册表单。",
    "参会面向病理、临床、AI 和医院管理等相关领域专业人员。",
    "如需团体报名或合作洽谈，请通过联系页面与会务组对接。",
  ],
  tipsEn: [
    "Once registration opens, this page will link directly to the registration form.",
    "Open to professionals in pathology, clinical medicine, AI, and hospital management.",
    "For group registration or partnership inquiries, please contact us.",
  ],
};
