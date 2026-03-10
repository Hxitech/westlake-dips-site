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
  shortName: "西湖峰会",
  acronym: "DIPS",
  description:
    "聚焦数字病理、人工智能诊断与临床转化的年度旗舰峰会，连接学术、临床与产业。",
  locale: "zh_CN",
  url: "https://westlake-dips.vercel.app",
  themeColor: "#08152d",
  eventStart: "2026-10-24T09:00:00+08:00",
  eventEnd: "2026-10-25T18:00:00+08:00",
  city: "中国 杭州",
  venue: "杭州国际博览中心",
  address: "浙江省杭州市萧山区奔竞大道 353 号",
  navigation: [
    { href: "/", label: "首页", description: "峰会主视觉与核心入口" },
    { href: "/about", label: "关于峰会", description: "峰会定位与发展沿革" },
    { href: "/announcements", label: "会议通知", description: "最新会务动态与公告" },
    { href: "/guide", label: "参会指南", description: "交通、会场与参会说明" },
    { href: "/archives", label: "往届会议", description: "历届成果、影像与回顾" },
    { href: "/partners", label: "合作伙伴", description: "合作体系与品牌席位" },
    { href: "/contact", label: "联系我们", description: "会务联络与官方通道" },
  ],
};

export const heroContent: HeroContent = {
  eyebrow: "2026 Annual Summit",
  title: "病理数据 × 智能诊疗 × 学术协同",
  subtitle:
    "以病理数字化为底座，串联 AI 识别、临床决策与产业转化，构建面向下一阶段的数智病理协作场。",
  location: "杭州 · 西湖",
  dateText: "2026 年 10 月 24 日 - 25 日",
  ctas: [
    { href: "/register", label: "立即注册", variant: "primary" },
    { href: "/announcements", label: "查看日程", variant: "secondary" },
  ],
};

export const quickFacts: QuickFact[] = [
  { label: "主论坛", value: "1 场", detail: "年度主题发布与峰会开幕" },
  { label: "专题专场", value: "4 场", detail: "算法、临床、标准化、转化" },
  { label: "演讲嘉宾", value: "30+", detail: "病理、AI、医院管理与产业" },
  { label: "参会规模", value: "1000+", detail: "线上线下联动，覆盖全国" },
];

export const summitHighlights: HighlightCard[] = [
  {
    title: "年度议题发布",
    description: "围绕数据治理、AI 诊断、病理流程重构三条主线展开年度内容策划。",
    metric: "3 条主航道",
  },
  {
    title: "跨界协同闭环",
    description: "打通病理科、信息科、临床团队与企业生态，形成完整对话界面。",
    metric: "4 类角色",
  },
  {
    title: "成果可视化呈现",
    description: "通过案例展台、视频回顾与时间轴，把历届成果沉淀为可持续品牌资产。",
    metric: "持续沉淀",
  },
];

export const schedulePreview: ScheduleItem[] = [
  {
    time: "Day 1 · 09:00",
    title: "开幕主论坛",
    description: "大会主题演讲、趋势报告与年度倡议发布。",
  },
  {
    time: "Day 1 · 14:00",
    title: "智能诊断专场",
    description: "AI 辅助判读、模型验证与场景落地案例。",
  },
  {
    time: "Day 2 · 09:30",
    title: "病理流程重构",
    description: "从数字切片到多院协同的实际流程升级。",
  },
  {
    time: "Day 2 · 14:30",
    title: "产业与转化圆桌",
    description: "科研机构、医院与企业共同讨论下一步合作路径。",
  },
];

export const focusPillars = [
  "数字病理基础设施",
  "AI 辅助诊断",
  "病理标准化协同",
  "临床转化与产业共建",
];

export const registrationConfig: RegistrationConfig = {
  status: "preview",
  primaryLabel: "报名通道即将开放",
  description:
    "首版官网采用站内说明页承接报名入口，后续可直接切换为问卷星、飞书表单或自建系统。",
  tips: [
    "当前页面为演示占位，正式报名链接上线后只需更新配置。",
    "会务组建议优先邀请病理、临床、AI 和医院管理相关嘉宾参会。",
    "如需团体报名或合作洽谈，请通过联系页面与会务组对接。",
  ],
};
