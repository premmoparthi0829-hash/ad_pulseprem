import { ProjectItem } from "@/types";

export const projectsData: ProjectItem[] = [
  {
    id: "medtech-omnichannel",
    title: "Next-Gen Omnichannel Platform for Global MedTech Pioneer",
    client: "BioVitalis Health Systems",
    industry: "HEALTHCARE & LIFE SCIENCES",
    challenge:
      "A fragmented legacy web architecture was causing 68% drop-off in clinician onboarding and preventing international expansion across 14 European and APAC territories.",
    solution:
      "Engineered an enterprise composable Next.js platform integrated with HIPAA-compliant telehealth endpoints, semantic search indexing, and automated practitioner credentials verification.",
    metrics: [
      { label: "Clinician Lead Velocity", value: "+240%" },
      { label: "Core Web Vitals Score", value: "99/100" },
      { label: "Direct Enterprise Pipeline", value: "$48M" },
    ],
    services: ["Web Architecture", "UI/UX Engineering", "Enterprise SEO", "Cloud Security"],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&auto=format&fit=crop&q=85",
  },
  {
    id: "fintech-liquidity",
    title: "Zero-Friction Institutional Liquidity Exchange Portal",
    client: "Apex Trust Capital",
    industry: "BANKING & FINANCIAL SERVICES",
    challenge:
      "Institutional investors required instantaneous trade execution dashboards with sub-50ms latency, biometric multi-factor authentication, and automated KYC/AML audit trails.",
    solution:
      "Developed a custom micro-frontend web app with real-time WebSocket feeds, automated compliance routing, and an aggressive algorithmic LinkedIn/Google account-based marketing campaign.",
    metrics: [
      { label: "Institutional Inflow", value: "$3.2B" },
      { label: "KYC Drop-off Reduction", value: "-62%" },
      { label: "Performance Marketing ROAS", value: "4.4x" },
    ],
    services: ["Software Development", "Performance Marketing", "Cybersecurity", "UI/UX Design"],
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&auto=format&fit=crop&q=85",
  },
  {
    id: "retail-commerce-engine",
    title: "Global Headless Commerce Modernization for Luxury Apparel Group",
    client: "Vandoren & Co. International",
    industry: "RETAIL & E-COMMERCE",
    challenge:
      "Sluggish monolithic e-commerce infrastructure caused catastrophic cart abandonment during peak promotional drops, losing an estimated $12M annually.",
    solution:
      "Transitioned 6 global brand storefronts to headless Next.js App Router with localized edge caching, AI personalized recommendations, and instant 1-click checkout.",
    metrics: [
      { label: "Mobile Revenue Uplift", value: "+185%" },
      { label: "Checkout Conversion Rate", value: "+54%" },
      { label: "Global Edge Page Load", value: "0.42s" },
    ],
    services: ["Headless Commerce", "Branding & Motion", "AI Personalization", "SEO Authority"],
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&auto=format&fit=crop&q=85",
  },
  {
    id: "clean-energy-iot",
    title: "Predictive IoT Asset Monitoring Grid for Clean Energy Utility",
    client: "Solaris Power Grids",
    industry: "ENERGY & UTILITIES",
    challenge:
      "Managing over 85,000 decentralized solar and wind assets with disconnected telemetry feeds created critical operational latency and maintenance backlogs.",
    solution:
      "Architected an enterprise IoT command center with real-time anomaly detection, predictive failure alerts, and an executive stakeholder reporting portal.",
    metrics: [
      { label: "Unscheduled Outage Drop", value: "-45%" },
      { label: "Telemetry Throughput", value: "1.8M msg/s" },
      { label: "Annual O&M Savings", value: "$16.5M" },
    ],
    services: ["IoT Software Development", "Cloud Architecture", "Data Visualization", "Tech Consulting"],
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&auto=format&fit=crop&q=85",
  },
];
