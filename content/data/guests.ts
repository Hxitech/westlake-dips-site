export type SummitGuest = {
  name: string;
  nameEn: string;
  title: string;
  titleEn: string;
  affiliation: string;
  affiliationEn: string;
};

export type SummitGuestGroup = {
  role: string;
  roleEn: string;
  members: SummitGuest[];
};

export const summitGuestGroups: SummitGuestGroup[] = [
  {
    role: "大会主席",
    roleEn: "General Chair",
    members: [
      {
        name: "陈富林",
        nameEn: "Fulin Chen",
        title: "教授",
        titleEn: "Prof.",
        affiliation: "西北大学",
        affiliationEn: "Northwest University",
      },
      {
        name: "王哲",
        nameEn: "Zhe Wang",
        title: "教授",
        titleEn: "Prof.",
        affiliation: "空军军医大学第一附属医院（西京医院）",
        affiliationEn: "Xijing Hospital, Air Force Medical University",
      },
      {
        name: "梁莉",
        nameEn: "Li Liang",
        title: "教授",
        titleEn: "Prof.",
        affiliation: "南方医科大学南方医院",
        affiliationEn: "Nanfang Hospital, Southern Medical University",
      },
    ],
  },
  {
    role: "联席主席",
    roleEn: "Liaison Chair",
    members: [
      {
        name: "冯玮",
        nameEn: "Jun Feng",
        title: "教授",
        titleEn: "Prof.",
        affiliation: "西北大学",
        affiliationEn: "Northwest University",
      },
      {
        name: "王连生",
        nameEn: "Liansheng Wang",
        title: "教授",
        titleEn: "Prof.",
        affiliation: "南方医科大学",
        affiliationEn: "Southern Medical University",
      },
    ],
  },
  {
    role: "大会秘书",
    roleEn: "Conference Secretary",
    members: [
      {
        name: "崔磊",
        nameEn: "Lei Cui",
        title: "教授",
        titleEn: "Prof.",
        affiliation: "西北大学",
        affiliationEn: "Northwest University",
      },
    ],
  },
];
