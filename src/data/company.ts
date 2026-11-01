import { ApproachStep, LeaderProfile, NewsItem } from "@/types";

export const approachSteps: ApproachStep[] = [
  {
    step: "01",
    title: "Discover",
    tagline: "Understand the enterprise core, market mechanics, and hidden friction points.",
    description:
      "We conduct exhaustive stakeholder interviews, architectural audits, competitive teardowns, and user telemetry analyses to ground all initiatives in empirical reality.",
    deliverables: [
      "Technical Debt & Tech Stack Audit",
      "Customer Journey Friction Analysis",
      "Competitive Landscape & White-Space Map",
      "Strategic Alignment & KPI Charter",
    ],
  },
  {
    step: "02",
    title: "Strategize",
    tagline: "Develop a high-conviction digital roadmap engineering sustainable leverage.",
    description:
      "Synthesizing quantitative market data with technological foresight to design an actionable multi-horizon blueprint, eliminating guesswork and prioritizing high-ROI milestones.",
    deliverables: [
      "Enterprise Architecture Architecture Map",
      "Capital Allocation & ROI Projections",
      "Omnichannel Go-to-Market Sequencing",
      "Data Governance & Attribution Framework",
    ],
  },
  {
    step: "03",
    title: "Create",
    tagline: "Design, engineer, and deploy world-class digital experiences and software.",
    description:
      "Our cross-functional squads of engineers, UI/UX designers, and brand strategists sprint in lockstep to ship resilient, pixel-perfect platforms and magnetic campaigns.",
    deliverables: [
      "Design System & Component Library",
      "Production-Grade Cloud & Web Code",
      "Automated Continuous Deployment Pipelines",
      "Brand Expression & Campaign Assets",
    ],
  },
  {
    step: "04",
    title: "Optimize",
    tagline: "Measure telemetry rigorously and ruthlessly iterate for peak performance.",
    description:
      "Continuous multivariate testing, algorithmic bidding calibrations, database query tuning, and conversion rate optimization that systematically eliminate waste.",
    deliverables: [
      "Real-Time Executive BI Dashboards",
      "Continuous A/B & Multivariate Testing",
      "Algorithmic Media Budget Reallocations",
      "Latency & Core Web Vitals Refinement",
    ],
  },
  {
    step: "05",
    title: "Grow",
    tagline: "Scale winning playbooks across new markets, channels, and product lines.",
    description:
      "Transitioning validated digital engines into perpetual compounding machines, empowering internal teams with training, AI toolkits, and ongoing strategic oversight.",
    deliverables: [
      "International Expansion Toolkits",
      "AI Workflow & Automation Hand-off",
      "Executive Growth Governance Reviews",
      "Long-Term Innovation Lab Sprints",
    ],
  },
];

export const bigThinkersProfile: LeaderProfile = {
  name: "ELENA ROSTOVA, PH.D.",
  role: "Chief Innovation Officer & Executive Vice President",
  credentials: "Former VP Digital Architecture at Global Tech Corp • MIT AI Fellow",
  quote:
    "Real digital transformation isn't about chasing transient trends or slapping AI on decaying legacy systems. It is about architectural clarity: building fast, intelligent digital foundations that allow an enterprise to out-maneuver the competition for the next twenty years.",
  bio: "With over 18 years leading digital engineering initiatives across North America and Europe, Dr. Rostova spearheads AdPulse Digital’s applied AI research, enterprise architecture design, and strategic corporate transformation programs.",
  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=85",
};

export const whatsNewItems: NewsItem[] = [
  {
    id: "news-1",
    date: "OCTOBER 2026",
    category: "GLOBAL EXPANSION",
    title: "AdPulse Digital Launches Next-Gen AI Innovation Hub in Singapore",
    description:
      "Expanding our Asia-Pacific presence with a dedicated 120-person center of excellence focusing on sovereign enterprise AI and composable commerce architectures.",
    linkText: "Read Press Release",
  },
  {
    id: "news-2",
    date: "SEPTEMBER 2026",
    category: "INDUSTRY RECOGNITION",
    title: "Named Global Leader in Enterprise Digital Strategy by TechInnovate Awards",
    description:
      "Recognized for delivering exceptional omnichannel revenue growth and sub-second web performance across multi-billion dollar enterprise clients.",
    linkText: "View Recognition",
  },
  {
    id: "news-3",
    date: "AUGUST 2026",
    category: "RESEARCH REPORT",
    title: "The 2027 State of Enterprise Headless Web Architecture Published",
    description:
      "Our proprietary benchmarking study analyzing over 400 global enterprises transitioning from legacy monoliths to edge-first web platforms.",
    linkText: "Download Report",
  },
  {
    id: "news-4",
    date: "JULY 2026",
    category: "STRATEGIC PARTNERSHIP",
    title: "AdPulse Digital Announces Premier Cloud Partnership with Leading Edge Networks",
    description:
      "Enabling instant micro-second global content rendering and automated SOC2-compliant data residency across 45 regions.",
    linkText: "Learn More",
  },
];

export const careersHighlights = {
  headline: "Limitless Possibilities. One Creative Team.",
  tagline: "Limitless Together",
  description:
    "At AdPulse Digital, you are not merely filling an open role — you are joining a world-class guild of engineers, designers, strategists, and big thinkers passionate about crafting digital history.",
  metrics: [
    { label: "Global Hybrid Squads", value: "14+ Cities" },
    { label: "Annual L&D Stipend", value: "$5,000 /yr" },
    { label: "Glassdoor Team Rating", value: "4.9 / 5.0" },
    { label: "Internal Promotion Rate", value: "34%" },
  ],
  ctaText: "EXPLORE OPEN ROLES",
  image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&auto=format&fit=crop&q=85",
};
