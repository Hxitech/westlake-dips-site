export type NavItem = {
  href: string;
  label: string;
  labelEn: string;
  description: string;
  descriptionEn: string;
};

export type QuickFact = {
  label: string;
  labelEn: string;
  value: string;
  valueEn: string;
  detail: string;
  detailEn: string;
};

export type HighlightCard = {
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  metric: string;
  metricEn: string;
};

export type ScheduleItem = {
  time: string;
  timeEn: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
};

export type Speaker = {
  id: string;
  name: string;
  nameEn: string;
  role: string;
  roleEn: string;
  organization: string;
  organizationEn: string;
  focus: string;
  focusEn: string;
  quote: string;
  quoteEn: string;
};

export type SponsorTier = "strategic" | "diamond" | "gold";

export type SponsorTierInfo = {
  tier: SponsorTier;
  name: string;
  nameEn: string;
  price: string;
  priceEn: string;
  benefits: string[];
  benefitsEn: string[];
};

export type TimelineEntry = {
  year: number;
  title: string;
  titleEn: string;
  theme: string;
  themeEn: string;
  achievements: string[];
  achievementsEn: string[];
};

export type VenueInfo = {
  venue: string;
  venueEn: string;
  city: string;
  cityEn: string;
  address: string;
  addressEn: string;
  mapLabel: string;
  mapLabelEn: string;
  metro: string[];
  metroEn: string[];
  bus: string[];
  busEn: string[];
  drive: string[];
  driveEn: string[];
  floorplanNote: string;
  floorplanNoteEn: string;
};

export type RegistrationConfig = {
  status: "preview" | "external";
  primaryLabel: string;
  primaryLabelEn: string;
  description: string;
  descriptionEn: string;
  externalUrl?: string;
  tips: string[];
  tipsEn: string[];
};

export type SiteConfig = {
  name: string;
  nameEn: string;
  shortName: string;
  shortNameEn: string;
  acronym: string;
  description: string;
  descriptionEn: string;
  locale: string;
  url: string;
  themeColor: string;
  eventStart: string;
  eventEnd: string;
  city: string;
  cityEn: string;
  venue: string;
  venueEn: string;
  address: string;
  addressEn: string;
  navigation: NavItem[];
};

export type HeroContent = {
  eyebrow: string;
  eyebrowEn: string;
  title: string;
  titleEn: string;
  subtitle: string;
  subtitleEn: string;
  location: string;
  locationEn: string;
  dateText: string;
  dateTextEn: string;
  ctas: Array<{
    href: string;
    label: string;
    labelEn: string;
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
