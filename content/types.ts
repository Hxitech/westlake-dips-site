export type NavItem = {
  href: string;
  label: string;
  description: string;
};

export type QuickFact = {
  label: string;
  value: string;
  detail: string;
};

export type HighlightCard = {
  title: string;
  description: string;
  metric: string;
};

export type ScheduleItem = {
  time: string;
  title: string;
  description: string;
};

export type Speaker = {
  id: string;
  name: string;
  role: string;
  organization: string;
  focus: string;
  quote: string;
};

export type PartnerTier = "strategic" | "co-host" | "innovation" | "supporting";

export type Partner = {
  name: string;
  tier: PartnerTier;
  description: string;
  href?: string;
};

export type TimelineEntry = {
  year: number;
  title: string;
  theme: string;
  achievements: string[];
};

export type VenueInfo = {
  venue: string;
  city: string;
  address: string;
  mapLabel: string;
  metro: string[];
  bus: string[];
  drive: string[];
  floorplanNote: string;
};

export type RegistrationConfig = {
  status: "preview" | "external";
  primaryLabel: string;
  description: string;
  externalUrl?: string;
  tips: string[];
};

export type SiteConfig = {
  name: string;
  shortName: string;
  acronym: string;
  description: string;
  locale: string;
  url: string;
  themeColor: string;
  eventStart: string;
  eventEnd: string;
  city: string;
  venue: string;
  address: string;
  navigation: NavItem[];
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  location: string;
  dateText: string;
  ctas: Array<{
    href: string;
    label: string;
    variant: "primary" | "secondary";
  }>;
};

export type AnnouncementFrontmatter = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  pinned?: boolean;
};

export type ArchiveFrontmatter = {
  year: string;
  title: string;
  theme: string;
  location: string;
  highlight: string;
  gallery: string[];
  videoLabel?: string;
};

export type SearchItem = {
  id: string;
  kind: "announcement" | "speaker" | "archive";
  title: string;
  excerpt: string;
  href: string;
  keywords: string[];
};
