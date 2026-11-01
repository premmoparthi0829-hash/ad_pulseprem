export interface OfferingCard {
  id: string;
  title: string;
  description: string;
}

export interface SubIndustryCard {
  id: string;
  title: string;
  description: string;
}

export interface IndustryDetail {
  slug: string;
  title: string;
  tagline: string;
  heroImage: string;
  editorialHeadline: string;
  editorialParagraph: string;
  editorialExpanded: string;
  offeringsTitle: string;
  offerings: OfferingCard[];
  valueHeadline: string;
  valueDescription: string;
  valueCardTitle: string;
  subIndustriesTitle: string;
  subIndustries: SubIndustryCard[];
  futureHeadline: string;
  futureDescription1: string;
  futureDescription2: string;
  partners: {
    id: string;
    name: string;
    type: string;
  }[];
}

export const industryDetailsData: Record<string, IndustryDetail> = {
  "media-and-entertainment": {
    slug: "media-and-entertainment",
    title: "Media and Entertainment",
    tagline: "Art and Algorithms as the new OS",
    heroImage:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1600&auto=format&fit=crop&q=85",
    editorialHeadline: "Art as the Creative Spark. Algorithms as the Intelligent Engine.",
    editorialParagraph:
      "Content is no longer scarce; attention is. For a media company, winning today means creating emotionally engaging human experiences at scale, cost-efficiently, and rapidly. Market leaders will be characterized by the responsible and sustainable fusion of human creativity, design, and editorial judgment (i.e., Art) with data-driven insights, governance, and AI automation (i.e., the Algorithms).",
    editorialExpanded:
      "At AdPulse Digital, we orchestrate end-to-end digital transformation for the world's most demanding entertainment studios, streaming networks, and sports broadcasters. From migrating legacy play-out systems to cloud-native microservices to implementing real-time generative video metadata and server-side dynamic ad insertion (SSAI), our frameworks unlock unprecedented efficiency while honoring the irreplaceable artistic voice of creative storytellers.",
    offeringsTitle: "Our Offerings",
    offerings: [
      {
        id: "offering-1",
        title: "Agentic Content Operations",
        description:
          "Agent-orchestrated autonomous workflows automate ingest, metadata enrichment, post-production, and distribution while preserving editorial control.",
      },
      {
        id: "offering-2",
        title: "Audience Data Modernization",
        description:
          "Unified audience data and identity solutions help teams deploy AI to personalize experiences, optimize recommendations, and measure engagement securely across channels.",
      },
      {
        id: "offering-3",
        title: "AI Product Innovation",
        description:
          "Agent-led SDLC and foundation model-based recommendation systems help media companies build and launch audience experiences faster across web, mobile, and spatial computing platforms.",
      },
      {
        id: "offering-4",
        title: "Content Provenance, Trust, and Responsible AI",
        description:
          "Emmy award-winning animation and VFX design services led by the creative unit of AdPulse Digital. We support the gaming industry, film studios, 2D and 3D animated episodic content for OTT streaming platforms.",
      },
    ],
    valueHeadline: "Capture Value in the Attention Economy",
    valueDescription:
      "In a world where content multiplies but attention does not, success depends on earning high-quality, monetizable engagement. By combining creativity and intelligence, AdPulse Digital helps media and entertainment companies attract, retain, and grow audiences while building sustainable monetization beyond traditional models.",
    valueCardTitle: "Explore the Next Media Shift",
    subIndustriesTitle: "Industries We Serve",
    subIndustries: [
      {
        id: "entertainment",
        title: "Entertainment",
        description:
          "Entertainment companies must combine engaging storytelling with intelligent systems that personalize discovery and monetization at scale. AdPulse Digital helps organizations modernize data and content operations whilst driving audience engagement for a rapidly evolving media landscape.",
      },
      {
        id: "publishing",
        title: "Publishing",
        description:
          "Publishing organizations need to balance editorial integrity with personalized delivery, audience engagement, and monetization. AdPulse Digital supports intelligent editorial workflows, content operations, and audience decisioning across publishing ecosystems.",
      },
      {
        id: "advertising",
        title: "Advertising",
        description:
          "Advertising organizations must combine creativity, data, governance, and delivery systems to improve accountability and security. We enable intelligent campaign operations, audience analytics, and scalable AI governance.",
      },
      {
        id: "sports",
        title: "Sports",
        description:
          "Sports organizations now operate as always-on digital media businesses that extend beyond live events. AdPulse Digital helps leagues and platforms deliver connected fan experiences, intelligent operations, and trusted digital ecosystems.",
      },
      {
        id: "information-services",
        title: "Information Services",
        description:
          "As information services providers evolve beyond being data providers to providers of actionable intelligence, AdPulse Digital helps these organizations modernize and secure data platforms, automate workflows, and improve trust and governance.",
      },
      {
        id: "gaming",
        title: "Gaming",
        description:
          "The imperative for gaming companies is to unify creative development, live operations, player engagement, and trust systems to remain competitive. AdPulse Digital supports scalable gaming ecosystems that improve operational agility and player experience.",
      },
    ],
    futureHeadline: "The Future is Artful Intelligence",
    futureDescription1:
      "The future of media and entertainment demands a partner that is as creatively inspired as it is technically capable. From building self-optimizing supply chains to crafting immersive spatial experiences, we help you navigate the new frontier of attention with speed, responsibility, and impact. Let's move beyond the traditional and build the next era of entertainment together.",
    futureDescription2:
      "We invite you to reimagine what's possible. And build it together.",
    partners: [
      { id: "planetcast", name: "PLANETCAST", type: "broadcast" },
      { id: "c2pa", name: "Coalition for Content Provenance and Authenticity", type: "standards" },
      { id: "fortinet", name: "FORTINET", type: "security" },
      { id: "paloalto", name: "paloalto NETWORKS", type: "security" },
      { id: "databricks", name: "databricks", type: "data" },
      { id: "snowflake", name: "snowflake", type: "cloud-data" },
      { id: "mongodb", name: "mongoDB", type: "database" },
    ],
  },

  communications: {
    slug: "communications",
    title: "Communications & Telecom",
    tagline: "Connecting 5G Speed with Sovereign Cloud Intelligence",
    heroImage:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1600&auto=format&fit=crop&q=85",
    editorialHeadline: "The Network as a Software Platform. Telco to Techco Evolution.",
    editorialParagraph:
      "Telecommunications operators are crossing the threshold from traditional connectivity providers into sovereign digital platform leaders. Surviving and thriving in the 5G and fiber era demands autonomous networks, open API monetization (CAMARA), and AI-driven BSS/OSS platforms that turn raw bandwidth into high-margin enterprise services.",
    editorialExpanded:
      "AdPulse Digital equips Tier-1 telcos worldwide with end-to-end cloud-native orchestration. We modernize legacy billing engines into zero-touch digital touchpoints, deploy predictive network telemetry, and monetize edge compute nodes for industrial IoT and immersive metaverse applications.",
    offeringsTitle: "Our Offerings",
    offerings: [
      {
        id: "c-off-1",
        title: "Autonomous 5G & Open RAN Orchestration",
        description:
          "Self-optimizing network slice controllers and disaggregated Open RAN architectures that dynamically allocate bandwidth for mission-critical enterprise workloads.",
      },
      {
        id: "c-off-2",
        title: "Cloud-Native BSS/OSS Modernization",
        description:
          "Replacing monolithic billing systems with modular TM Forum Open API microservices for frictionless customer onboarding and real-time charging.",
      },
      {
        id: "c-off-3",
        title: "CAMARA Open Network API Monetization",
        description:
          "Exposing network capabilities (Quality on Demand, SIM Swap, Device Status) to global enterprise developers via standardized GSMA API gateways.",
      },
      {
        id: "c-off-4",
        title: "Zero-Touch Customer Operations",
        description:
          "Generative AI agent workbenches resolving 75% of customer connectivity inquiries autonomously with sub-second network self-healing.",
      },
    ],
    valueHeadline: "Monetize Sovereign Connectivity in the Cloud Era",
    valueDescription:
      "Telecom operators that modernize beyond commodity pipe delivery into programmable enterprise network platforms capture 4x higher customer lifetime value. AdPulse Digital builds the bridge between edge silicon and high-yield enterprise SaaS.",
    valueCardTitle: "Explore Next-Gen Telco Platforms",
    subIndustriesTitle: "Sectors We Modernize",
    subIndustries: [
      {
        id: "sub-telco-1",
        title: "Wireless & 5G Carriers",
        description: "Transforming radio access networks and core infrastructure into elastic, cloud-native software environments.",
      },
      {
        id: "sub-telco-2",
        title: "Fiber & Broadband Operators",
        description: "Automating last-mile provisioning, proactive optical network diagnostics, and zero-churn subscriber experiences.",
      },
      {
        id: "sub-telco-3",
        title: "Satellite & Non-Terrestrial Networks",
        description: "Integrating LEO satellite constellations with ground cellular infrastructure for seamless universal coverage.",
      },
      {
        id: "sub-telco-4",
        title: "B2B Enterprise Telco Services",
        description: "Delivering private 5G networks, managed SD-WAN, and edge compute clusters to manufacturing and logistics leaders.",
      },
      {
        id: "sub-telco-5",
        title: "Wholesale & Infrastructure Providers",
        description: "Modernizing carrier interconnect exchanges, automated capacity trading, and international roaming settlement.",
      },
      {
        id: "sub-telco-6",
        title: "Digital Sub-Brands & MVNOs",
        description: "Launching full-stack digital-first virtual mobile operators from scratch in under 90 days with cloud BSS.",
      },
    ],
    futureHeadline: "The Future is Autonomous Connectivity",
    futureDescription1:
      "As networks evolve into distributed supercomputers, telecommunications leaders must harness AI at the physical and application layers simultaneously.",
    futureDescription2:
      "We partner with visionary operators to invent the sovereign connectivity platforms of 2030 and beyond.",
    partners: [
      { id: "c2pa", name: "TM Forum Standards", type: "standards" },
      { id: "fortinet", name: "FORTINET", type: "security" },
      { id: "paloalto", name: "paloalto NETWORKS", type: "security" },
      { id: "databricks", name: "databricks", type: "data" },
      { id: "snowflake", name: "snowflake", type: "cloud-data" },
      { id: "mongodb", name: "mongoDB", type: "database" },
    ],
  },
};

// Fallback generator for other industries
export const getIndustryDetail = (slug: string): IndustryDetail => {
  if (industryDetailsData[slug]) {
    return industryDetailsData[slug];
  }

  const formattedTitle = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    slug,
    title: formattedTitle,
    tagline: "Enterprise Transformation with Sovereign Scalability",
    heroImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&auto=format&fit=crop&q=85",
    editorialHeadline: "Digital Precision. Measurable Industry Leadership.",
    editorialParagraph:
      `Market leaders in ${formattedTitle} are harnessing agile cloud architectures, autonomous AI workflows, and resilient digital touchpoints to outpace structural market disruption. AdPulse Digital partners with world-class enterprises to turn operational complexity into sustained competitive velocity.`,
    editorialExpanded:
      `Our specialized industry teams combine deep functional domain mastery with cutting-edge engineering. We design scalable platforms that streamline workflows, guarantee zero-downtime compliance, and create unforgettable customer experiences.`,
    offeringsTitle: "Our Offerings",
    offerings: [
      {
        id: "gen-1",
        title: "Enterprise Core Modernization",
        description: `Modernizing legacy systems in ${formattedTitle} with decoupled, cloud-native microservices architecture.`,
      },
      {
        id: "gen-2",
        title: "Intelligent Workflow Automation",
        description: `Deploying specialized machine learning models that eliminate repetitive manual workflows and optimize turnaround times.`,
      },
      {
        id: "gen-3",
        title: "Digital Experience & Ecosystems",
        description: `Engineering high-converting, omnichannel customer and partner portals with real-time personalization.`,
      },
      {
        id: "gen-4",
        title: "Governance, Security & Compliance",
        description: `Embedding continuous compliance and zero-trust security architecture across the entire data lifecycle.`,
      },
    ],
    valueHeadline: `Capture Value in ${formattedTitle}`,
    valueDescription:
      `In a fast-evolving market, success depends on agile, resilient systems. By uniting industry expertise with engineering rigor, AdPulse Digital enables enterprises in ${formattedTitle} to accelerate growth, reduce run-costs, and build enduring market advantage.`,
    valueCardTitle: `Explore the Next Shift in ${formattedTitle}`,
    subIndustriesTitle: "Industries We Serve",
    subIndustries: [
      {
        id: "sub-1",
        title: "Core Operations",
        description: `Transforming fundamental operational workflows with real-time automated intelligence and predictive routing.`,
      },
      {
        id: "sub-2",
        title: "Customer Touchpoints",
        description: `Unifying multi-channel engagement to deliver personalized, frictionless customer journeys at scale.`,
      },
      {
        id: "sub-3",
        title: "Supply & Distribution",
        description: `Optimizing supply chains, inventory forecasting, and partner connectivity with distributed telemetry.`,
      },
      {
        id: "sub-4",
        title: "Data & Analytics",
        description: `Centralizing data platforms to deliver executive-ready forecasting, anomaly detection, and decision support.`,
      },
      {
        id: "sub-5",
        title: "Platform Infrastructure",
        description: `Building secure, multi-cloud foundations engineered for 99.999% uptime and zero-downtime deployments.`,
      },
      {
        id: "sub-6",
        title: "Emerging Technologies",
        description: `Harnessing generative AI, spatial computing, and edge compute to build tomorrow's competitive advantages today.`,
      },
    ],
    futureHeadline: "The Future is Artful Intelligence",
    futureDescription1:
      `The future of ${formattedTitle.toLowerCase()} demands a partner that is as strategically bold as it is technically capable. Let's move beyond the traditional and build the next era of enterprise value together.`,
    futureDescription2:
      "We invite you to reimagine what's possible. And build it together.",
    partners: [
      { id: "fortinet", name: "FORTINET", type: "security" },
      { id: "paloalto", name: "paloalto NETWORKS", type: "security" },
      { id: "databricks", name: "databricks", type: "data" },
      { id: "snowflake", name: "snowflake", type: "cloud-data" },
      { id: "mongodb", name: "mongoDB", type: "database" },
    ],
  };
};
