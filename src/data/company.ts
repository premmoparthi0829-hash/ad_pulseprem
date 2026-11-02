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
  name: "ELENA ROSTOVA",
  role: "Chief Growth Officer & Executive Vice President",
  credentials: "Former VP Global Marketing at Tech Unicorn • Cannes Lions Grand Prix Winner",
  quote:
    "Real digital marketing isn't about chasing vanity impressions or burning budget on generic ads. It is about mathematical precision and creative resonance: building full-funnel growth engines that turn customer attention into predictable, compounding revenue.",
  bio: "With over 18 years leading digital marketing and growth initiatives across North America and Europe, Elena spearheads AdPulse Digital’s performance marketing engineering, SEO dominance, and high-impact brand creative campaigns.",
  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=85",
};

export const whatsNewItems: NewsItem[] = [
  {
    id: "news-1",
    date: "OCTOBER 2026",
    category: "AI MARKETING",
    title: "AdPulse Digital Launches Predictive Performance Media Engine for Global Brands",
    description:
      "Deploying real-time algorithmic bidding and automated creative variations to drive up to 4.8x ROAS across Meta, Google, and programmatic networks.",
    linkText: "Read Press Release",
  },
  {
    id: "news-2",
    date: "SEPTEMBER 2026",
    category: "INDUSTRY RECOGNITION",
    title: "Ranked #1 Digital Marketing & Growth Agency for Enterprise ROAS Delivery",
    description:
      "Recognized for delivering outstanding omnichannel customer acquisition growth and market-leading search engine dominance.",
    linkText: "View Recognition",
  },
  {
    id: "news-3",
    date: "AUGUST 2026",
    category: "RESEARCH REPORT",
    title: "The 2027 State of Generative Search Optimization (GEO) & SEO Published",
    description:
      "Our proprietary benchmarking study analyzing over 400 global enterprises optimizing for both Google search and generative AI search engines.",
    linkText: "Download Report",
  },
  {
    id: "news-4",
    date: "JULY 2026",
    category: "STRATEGIC PARTNERSHIP",
    title: "AdPulse Digital Named Meta & Google Premier Growth Partner for 2026",
    description:
      "Deepening alpha API access for server-side attribution, first-party customer telemetry, and dynamic creative testing pipelines.",
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
