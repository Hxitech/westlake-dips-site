export type SummitSession = {
  number: string;
  theme: string;
  themeEn: string;
  title: string;
  titleEn: string;
};

export const summitSessions: SummitSession[] = [
  {
    number: "01",
    theme: "浪潮",
    themeEn: "Wave",
    title: "从大模型到智能体的「跨越」——病理 AI 的趋势与拐点",
    titleEn: "From Foundation Models to Agents — Trends & Inflection Points in Pathology AI",
  },
  {
    number: "02",
    theme: "笃行",
    themeEn: "Practice",
    title: "真实世界的「回响」——大模型在核心临床场景的价值落地",
    titleEn: "Echoes from the Real World — Translating Large Models into Core Clinical Workflows",
  },
  {
    number: "03",
    theme: "跃迁",
    themeEn: "Leap",
    title: "核心技术的「势能」——人工智能技术前沿热点与算法演进",
    titleEn: "Technical Momentum — Frontier Hotspots & Algorithmic Evolution",
  },
  {
    number: "04",
    theme: "共生",
    themeEn: "Symbiosis",
    title: "生态矩阵的「交响」——从医工融合到产业生态的全面破壁",
    titleEn: "An Ecosystem Symphony — From Medical-Engineering Fusion to Industry-Wide Breakthroughs",
  },
];
