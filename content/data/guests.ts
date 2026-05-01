export type SummitGuest = {
  name: string;
  nameEn: string;
  title: string;
  titleEn: string;
  affiliation: string;
  affiliationEn: string;
  imageSrc: string;
  imageAlt: string;
  imageAltEn: string;
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
        imageSrc: "/guests/chen-fulin.png",
        imageAlt: "陈富林教授头像",
        imageAltEn: "Portrait of Prof. Fulin Chen",
      },
      {
        name: "王哲",
        nameEn: "Zhe Wang",
        title: "教授",
        titleEn: "Prof.",
        affiliation: "空军军医大学第一附属医院（西京医院）",
        affiliationEn: "Xijing Hospital, Air Force Medical University",
        imageSrc: "/guests/wang-zhe.jpeg",
        imageAlt: "王哲教授头像",
        imageAltEn: "Portrait of Prof. Zhe Wang",
      },
      {
        name: "梁莉",
        nameEn: "Li Liang",
        title: "教授",
        titleEn: "Prof.",
        affiliation: "南方医科大学南方医院",
        affiliationEn: "Nanfang Hospital, Southern Medical University",
        imageSrc: "/guests/liang-li.jpeg",
        imageAlt: "梁莉教授头像",
        imageAltEn: "Portrait of Prof. Li Liang",
      },
    ],
  },
  {
    role: "联席主席",
    roleEn: "Liaison Chair",
    members: [
      {
        name: "冯筠",
        nameEn: "Yun Feng",
        title: "教授",
        titleEn: "Prof.",
        affiliation: "西北大学",
        affiliationEn: "Northwest University",
        imageSrc: "/guests/feng-yun.png",
        imageAlt: "冯筠教授头像",
        imageAltEn: "Portrait of Prof. Yun Feng",
      },
      {
        name: "王连生",
        nameEn: "Liansheng Wang",
        title: "教授",
        titleEn: "Prof.",
        affiliation: "厦门大学",
        affiliationEn: "Xiamen University",
        imageSrc: "/guests/wang-liansheng.png",
        imageAlt: "王连生教授头像",
        imageAltEn: "Portrait of Prof. Liansheng Wang",
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
        imageSrc: "/guests/cui-lei.png",
        imageAlt: "崔磊教授头像",
        imageAltEn: "Portrait of Prof. Lei Cui",
      },
    ],
  },
];
