export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: "marketing" | "technology" | "strategy";
  metrics: { label: string; value: string };
  keyCapabilities: string[];
  image: string;
  slug: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  stats: string;
  solutions: string[];
  image: string;
}

export interface InsightItem {
  id: string;
  title: string;
  category: string;
  type: "BLOG" | "WHITEPAPER" | "PODCAST" | "RESEARCH";
  date: string;
  readTime: string;
  image: string;
  summary: string;
  featured?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  metrics: { label: string; value: string }[];
  services: string[];
  image: string;
}

export interface ApproachStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export interface NewsItem {
  id: string;
  date: string;
  category: string;
  title: string;
  description: string;
  linkText: string;
}

export interface LeaderProfile {
  name: string;
  role: string;
  quote: string;
  bio: string;
  image: string;
  credentials: string;
}
