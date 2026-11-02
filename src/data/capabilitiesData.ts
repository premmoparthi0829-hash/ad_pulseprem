export interface PracticeCard {
  id: string;
  title: string;
  description: string;
  detailedContent: string;
  keyDeliverables: string[];
}

export interface MetricItem {
  value: string;
  suffix?: string;
  label: string;
}

export interface CapabilityDetail {
  slug: string;
  title: string;
  tagline: string;
  accentColor: string;
  gradientColors: {
    primary: string;
    secondary: string;
    light: string;
    deep: string;
  };
  overviewParagraph1: string;
  overviewParagraph2: string;
  overviewExpanded: string;
  metrics: MetricItem[];
  practicesTitle: string;
  practices: PracticeCard[];
}

export const capabilitiesData: Record<string, CapabilityDetail> = {
  "performance-marketing": {
    slug: "performance-marketing",
    title: "Performance Marketing & Paid Media",
    tagline: "Spearheading high-yield customer acquisition at global scale.",
    accentColor: "#FD6E12",
    gradientColors: {
      primary: "#5B2A86",
      secondary: "#7A3EAE",
      light: "#A46ED4",
      deep: "#3D1761",
    },
    overviewParagraph1:
      "AdPulse Digital's Performance Marketing practice emerges as a quantitative growth powerhouse, combining algorithmic ad bidding, first-party data modeling, and high-frequency creative testing. Engineered for enterprise brands seeking maximum return on ad spend (ROAS), we eliminate wasted media budget and turn advertising into a predictable, compounding customer acquisition engine.",
    overviewParagraph2:
      "From Google Performance Max and Meta Advantage+ campaigns to B2B LinkedIn Account-Based Marketing (ABM) and programmatic DSP networks, our multi-channel squads deploy sophisticated full-funnel media architectures that scale revenue predictably across 45+ global markets.",
    overviewExpanded:
      "Our proprietary algorithmic framework incorporates predictive customer lifetime value (pLTV) telemetry, server-side conversion APIs (CAPI), and real-time bid pacing engines. By bypassing third-party cookie loss with robust first-party identity resolution, we ensure enterprise campaigns deliver up to 4.8x higher blended ROAS while lowering blended customer acquisition costs by an average of 38%.",
    metrics: [
      { value: "4.8", suffix: "x", label: "Average Enterprise ROAS" },
      { value: "185", suffix: "%", label: "Customer Acquisition Velocity" },
      { value: "45", suffix: "+", label: "Global Ad Markets Managed" },
    ],
    practicesTitle: "Our Practices",
    practices: [
      {
        id: "google-ads",
        title: "Google Ads & Paid Search (PMax)",
        description:
          "Algorithmic search capture, Performance Max orchestration, and high-intent keyword structures that maximize conversion rate and eliminate unqualified click spend.",
        detailedContent:
          "We engineer automated Google Search, Shopping, YouTube, and Performance Max campaigns powered by smart bidding, value-based bid strategies, and rigorous negative match governance.",
        keyDeliverables: [
          "Enterprise Account Architecture & Restructuring",
          "Value-Based Smart Bidding Calibration",
          "Automated Feed Optimization for Google Shopping",
          "First-Party Customer Match Data Ingestion",
        ],
      },
      {
        id: "meta-ads",
        title: "Meta Ads (Facebook & Instagram)",
        description:
          "Full-funnel Meta advertising combining dynamic creative optimization, broad audience algorithmic targeting, and high-converting direct-response visual assets.",
        detailedContent:
          "Leveraging Meta Advantage+ suites alongside manual segmented testing, our creative strategists produce dozens of weekly ad angles and hooks to continuously beat baseline CAC.",
        keyDeliverables: [
          "Dynamic Creative Optimization (DCO) Pipeline",
          "Full-Funnel Retargeting & Custom Audiences",
          "Server-Side Conversions API (CAPI) Integration",
          "UGC & High-Impact Video Ad Production",
        ],
      },
      {
        id: "linkedin-abm",
        title: "LinkedIn B2B Account-Based Marketing",
        description:
          "Hyper-targeted enterprise account penetration targeting C-suite decision-makers, buying committees, and high-value software and IT buyer personas.",
        detailedContent:
          "We sync CRM target accounts directly into LinkedIn Campaign Manager to execute personalized Thought Leader Ads, InMail sequences, and lead generation forms with proven 2.5x pipeline acceleration.",
        keyDeliverables: [
          "Target Account List (TAL) Tiering & ICP Mapping",
          "Executive Thought Leader Ad Syndication",
          "Lead Gen Forms & Frictionless Conversion Funnels",
          "Multi-Touch CRM Pipeline Attribution",
        ],
      },
      {
        id: "programmatic-dsp",
        title: "Programmatic DSP & Display Networks",
        description:
          "High-volume programmatic display, connected TV (CTV), digital out-of-home (DOOH), and native advertising across premium global publisher exchanges.",
        detailedContent:
          "Accessing global inventory via The Trade Desk and DV360, we implement fraud-free real-time bidding, viewability safeguards, and contextual audience targeting at sub-second speeds.",
        keyDeliverables: [
          "Connected TV (CTV) & Video Publisher Pacing",
          "Brand Safety & IAS/DoubleVerify Guardrails",
          "Contextual Semantic Ad Placement",
          "Cross-Device Household Frequency Capping",
        ],
      },
      {
        id: "tiktok-vertical",
        title: "TikTok & Vertical Video Advertising",
        description:
          "High-velocity vertical video campaigns engineered for viral sound bites, native TikTok creator aesthetics, and frictionless in-feed shopping checkouts.",
        detailedContent:
          "Our creators develop native-feeling TikTok ad concepts, Spark Ads, and pulse placements that capture organic Gen-Z and millennial audience enthusiasm without feeling like corporate ads.",
        keyDeliverables: [
          "Native TikTok Spark Ads Production",
          "Influencer Whitelisting & Creator Partnership Codes",
          "Trending Audio & Sound-On Creative Scripts",
          "Instant Page & Fast Checkout Optimization",
        ],
      },
      {
        id: "predictive-analytics",
        title: "Predictive Analytics & Attribution",
        description:
          "Advanced multi-touch attribution modeling, media mix modeling (MMM), and predictive customer lifetime value scoring that proves true incremental revenue.",
        detailedContent:
          "We construct executive BI dashboards that connect marketing clicks directly to closed revenue in Salesforce and HubSpot, enabling surgical budget reallocation toward highest-yield channels.",
        keyDeliverables: [
          "Multi-Touch Fractional Attribution Modeling",
          "Media Mix Modeling (MMM) Budget Allocation",
          "Executive Real-Time ROAS Telemetry Dashboards",
          "Cohort Retention & Churn Probability Models",
        ],
      },
    ],
  },

  "seo": {
    slug: "seo",
    title: "Search Engine Optimization (SEO & AI GEO)",
    tagline: "Dominating organic search through technical authority and AI visibility.",
    accentColor: "#FD6E12",
    gradientColors: {
      primary: "#2C3E6B",
      secondary: "#3A5594",
      light: "#5B7BC7",
      deep: "#1A2542",
    },
    overviewParagraph1:
      "AdPulse Digital's SEO & Generative Engine Optimization practice bridges technical architecture with semantic content authority. As search evolves from simple 10 blue links to conversational AI answers on ChatGPT, Google AI Overviews, and Perplexity, we position enterprise brands as the definitive primary source across both legacy and generative search engines.",
    overviewParagraph2:
      "Our team of technical SEO architects, semantic content strategists, and digital PR specialists engineers comprehensive organic growth machines that capture high-intent buyers at every stage of the decision journey, producing resilient compounding traffic that never expires.",
    overviewExpanded:
      "We execute deep Core Web Vitals optimizations, programmatic sub-directory structures, schema graph hierarchies, and verified editorial link acquisition. By transforming complex websites into lightning-fast, semantically unambiguous entities, our clients consistently achieve 3.4x organic visibility growth within 6 months.",
    metrics: [
      { value: "3.4", suffix: "x", label: "Organic Visibility Lift" },
      { value: "98", suffix: "%", label: "Target Keyword First-Page Rate" },
      { value: "12M", suffix: "+", label: "High-Intent Organic Visitors" },
    ],
    practicesTitle: "Our Practices",
    practices: [
      {
        id: "geo-optimization",
        title: "Generative Engine Optimization (GEO)",
        description:
          "Future-proofing your brand for Google AI Overviews, Perplexity, and ChatGPT with semantic entity markup, direct citation formats, and authority benchmarks.",
        detailedContent:
          "We structure your digital footprint into entity-dense, factual knowledge graphs that AI crawlers prioritize as authoritative sources when generating conversational summaries.",
        keyDeliverables: [
          "AI Search Citation & Knowledge Graph Audits",
          "Semantic Entity Mapping & JSON-LD Schemas",
          "Conversational Q&A Content Structuring",
          "Perplexity & ChatGPT Brand Footprint Tracking",
        ],
      },
      {
        id: "technical-seo",
        title: "Enterprise Technical SEO & Web Vitals",
        description:
          "Rigorous technical architecture, server crawl budget optimization, rendering audits, and Core Web Vitals tuning for multi-million page platforms.",
        detailedContent:
          "We resolve complex hydration issues, JavaScript rendering bottlenecks, faceted navigation canonicalization, and XML sitemap hierarchies to ensure 100% clean indexation.",
        keyDeliverables: [
          "Core Web Vitals Optimization (LCP, INP, CLS)",
          "JavaScript Rendering & Headless SEO Audits",
          "Crawl Budget & Server Log File Analysis",
          "Automated Indexation & Redirection Governance",
        ],
      },
      {
        id: "semantic-content",
        title: "Semantic Content Clusters & Pillar Pages",
        description:
          "Comprehensive topic cluster architectures that establish undeniable topical authority across competitive enterprise industry verticals.",
        detailedContent:
          "Moving beyond outdated keyword stuffing, we develop interconnected content clusters and comprehensive pillar pages that answer every nuance of user search intent.",
        keyDeliverables: [
          "Topical Authority & Content Gap Matrix",
          "Pillar Page & Cluster Architecture Blueprint",
          "Expert-Written Long-Form Informational Guides",
          "Internal Linking Graph Optimization",
        ],
      },
      {
        id: "digital-pr",
        title: "Digital PR & High-Authority Backlinks",
        description:
          "Tier-1 editorial link acquisition through original data journalism, proprietary industry surveys, and high-impact press release syndication.",
        detailedContent:
          "Our PR team produces groundbreaking research reports and data studies that organically earn coverage and backlinks from Forbes, Bloomberg, TechCrunch, and major trade journals.",
        keyDeliverables: [
          "Original Proprietary Industry Data Studies",
          "Journalist Pitching & Reactive PR Monitoring",
          "High-Authority Tier-1 Editorial Placement",
          "Toxic Backlink Audit & Disavow Management",
        ],
      },
      {
        id: "international-seo",
        title: "International & Multi-Regional SEO",
        description:
          "Global hreflang orchestration, geo-targeted search structures, and localized keyword adaptation across European, APAC, and American markets.",
        detailedContent:
          "We engineer global domains and localized sub-directories with flawless hreflang implementation, ensuring your brand ranks #1 in every target country and native language.",
        keyDeliverables: [
          "Multi-Region hreflang Tag Implementation",
          "Local Search Intent & Native Language Research",
          "Geo-Targeted Server Routing & CDN Configuration",
          "Multi-Currency E-Commerce Schema Markup",
        ],
      },
      {
        id: "ecommerce-seo",
        title: "E-Commerce SEO & Category Domination",
        description:
          "Category taxonomy refinement, product schema enrichment, and programmatic SEO for large-scale commerce catalogs on Shopify Plus and Magento.",
        detailedContent:
          "We optimize complex faceted search parameters, product variant canonicals, and review markup to capture high-intent commercial transactional queries at checkout.",
        keyDeliverables: [
          "Faceted Navigation & Filter SEO Governance",
          "Product Schema & Merchant Center Optimization",
          "Out-of-Stock & Seasonal Product Handling",
          "Category Page Content & Conversion Enhancement",
        ],
      },
    ],
  },

  "social-media": {
    slug: "social-media",
    title: "Social Media & Creator Strategy",
    tagline: "Building viral cultural movements that command attention and convert.",
    accentColor: "#FD6E12",
    gradientColors: {
      primary: "#851A52",
      secondary: "#A62A6B",
      light: "#D14D91",
      deep: "#520B30",
    },
    overviewParagraph1:
      "AdPulse Digital's Social Media & Creator practice transforms passive audiences into passionate brand advocates. In an era where audiences tune out sterile corporate commercials, we deploy creator-led storytelling, viral short-form video, and executive personal branding that ignite real community conversations.",
    overviewParagraph2:
      "From high-volume TikTok and Instagram Reels production to corporate thought leadership on LinkedIn and YouTube, our social squads engineer content calibrated for algorithmic amplification, authentic engagement, and direct revenue generation.",
    overviewExpanded:
      "We partner with a verified network of over 15,000 vetted creators and micro-influencers, managing negotiations, creative briefs, usage rights, and paid whitelisting. Our omnichannel campaigns consistently deliver over 210% increases in organic engagement and 3.5x higher viral share rates.",
    metrics: [
      { value: "210", suffix: "%", label: "Organic Engagement Uplift" },
      { value: "15K", suffix: "+", label: "Vetted Creator Network" },
      { value: "350M", suffix: "+", label: "Annual Viral Video Views" },
    ],
    practicesTitle: "Our Practices",
    practices: [
      {
        id: "creator-partnerships",
        title: "Creator & Influencer Ecosystems",
        description:
          "End-to-end influencer strategy, micro-creator curation, contract negotiations, and creative direction that ensures authentic brand alignment.",
        detailedContent:
          "We identify high-affinity creators who genuinely love your product, structuring long-term ambassadorships and performance-driven affiliate partnerships.",
        keyDeliverables: [
          "Creator Identification & Audience Vetting",
          "FTC-Compliant Contracts & Usage Rights",
          "Creative Briefing & Asset Quality Control",
          "Performance Affiliate & Revenue Tracking",
        ],
      },
      {
        id: "vertical-video",
        title: "Short-Form Video Production (Reels & TikTok)",
        description:
          "In-house studio production of high-retention 9:16 vertical video assets crafted specifically for the algorithms of Instagram, TikTok, and YouTube Shorts.",
        detailedContent:
          "Our production squads test dozens of hook variations, dynamic captions, and trending pacing strategies to maximize 3-second hook rates and full video completion rates.",
        keyDeliverables: [
          "Weekly High-Volume Video Production Sprints",
          "Hook Testing & Script Architecture",
          "Sound Design, Trending Audio & Dynamic Captions",
          "Multi-Platform Distribution & Scheduling",
        ],
      },
      {
        id: "executive-branding",
        title: "Executive & Founder Personal Branding",
        description:
          "Positioning CEOs and C-suite leaders as authoritative industry icons on LinkedIn, X, and keynote stages to attract talent and enterprise deals.",
        detailedContent:
          "We extract leadership insights through bi-weekly ghostwriting interviews, turning executive perspectives into high-engagement thought leadership posts and viral carousels.",
        keyDeliverables: [
          "Executive Persona & Tone-of-Voice Playbook",
          "Bi-Weekly Ghostwritten LinkedIn Articles & Posts",
          "High-Impact Visual Carousels & Infographics",
          "Executive Follower & Inbound Lead Growth Tracking",
        ],
      },
      {
        id: "community-management",
        title: "Omnichannel Community Engagement",
        description:
          "24/7 brand community moderation, proactive comment interactions, and crisis sentiment management that protects and elevates brand equity.",
        detailedContent:
          "Our community specialists participate actively in comment threads, customer inquiries, and viral conversations, turning casual commentators into dedicated brand loyalists.",
        keyDeliverables: [
          "24/7 SLA Comment & Direct Message Response",
          "Proactive Brand Voice Commenting on Trending Culture",
          "Social Crisis Escalation & Mitigation Protocol",
          "Sentiment Tracking & Weekly Feedback Reports",
        ],
      },
      {
        id: "social-listening",
        title: "Social Listening & Cultural Intelligence",
        description:
          "Real-time monitoring of brand sentiment, competitor campaigns, emerging consumer trends, and viral cultural moments across the web.",
        detailedContent:
          "Using enterprise AI listening suites, we detect shifts in public sentiment and competitor vulnerabilities, allowing your brand to react first to cultural opportunities.",
        keyDeliverables: [
          "Real-Time Competitor Share-of-Voice Analysis",
          "Emerging Trend & Cultural Opportunity Alerts",
          "Audience Demographic & Interest Clustering",
          "Monthly Executive Social Intelligence Briefings",
        ],
      },
      {
        id: "paid-whitelisting",
        title: "Paid Social Whitelisting & Spark Ads",
        description:
          "Running targeted paid media directly through creator social handles to achieve lower CPMs and 3x higher click-through rates than branded ads.",
        detailedContent:
          "We secure advertising access to creator accounts, boosting top-performing organic user posts with targeted ad spend to scale conversion with authentic third-party credibility.",
        keyDeliverables: [
          "Creator Handle Ad Access Configuration",
          "Targeted Spark Ads & Whitelisted Meta Ads",
          "Dynamic Product Catalog Tagging in Creator Posts",
          "Attribution & Direct Purchase ROAS Reporting",
        ],
      },
    ],
  },

  "content-marketing": {
    slug: "content-marketing",
    title: "Content Strategy & Copywriting",
    tagline: "Compelling narratives that build authority, trust, and enterprise pipeline.",
    accentColor: "#FD6E12",
    gradientColors: {
      primary: "#2C4C38",
      secondary: "#3D664D",
      light: "#5B9672",
      deep: "#1C3325",
    },
    overviewParagraph1:
      "AdPulse Digital's Content Strategy & Copywriting practice crafts distinctive verbal brand identities and high-converting direct response copy. Great marketing begins with unforgettable words: copy that clarifies complex propositions, triggers emotional resonance, and compels decision-makers to take action.",
    overviewParagraph2:
      "Whether developing multi-million dollar pitch narratives, conversion-focused landing page copy, or comprehensive enterprise research whitepapers, our team of veteran copywriters and editorial strategists elevates your brand above generic market noise.",
    overviewExpanded:
      "We combine rigorous behavioral psychology with empirical conversion telemetry. Every headline, hook, value proposition, and call to action is engineered to eliminate cognitive friction and accelerate qualified buyers through the sales funnel.",
    metrics: [
      { value: "92", suffix: "%", label: "Brand Recall Uplift" },
      { value: "4.2", suffix: "x", label: "Average Time on Page Increase" },
      { value: "150", suffix: "+", label: "Industry Whitepapers Authored" },
    ],
    practicesTitle: "Our Practices",
    practices: [
      {
        id: "direct-response",
        title: "Direct-Response Ad Copywriting",
        description:
          "High-converting ad copy, headlines, hooks, and calls-to-action calibrated for Meta, Google, LinkedIn, and high-stakes landing pages.",
        detailedContent:
          "We apply proven direct-response frameworks (PAS, AIDA, BAB) to craft persuasive copy that grabs attention in the first 2 seconds and drives decisive clicks.",
        keyDeliverables: [
          "Multi-Angle Ad Copy Matrix (Hooks, Body, CTAs)",
          "Landing Page Wireframe & Conversion Copy",
          "Multivariate Copy Testing & Headline Variations",
          "Micro-Copy & Form Friction Elimination",
        ],
      },
      {
        id: "thought-leadership",
        title: "Enterprise Thought Leadership",
        description:
          "Authoritative, insightful executive essays and articles published across Tier-1 trade publications, Forbes, Fast Company, and company blogs.",
        detailedContent:
          "We conduct in-depth interviews with your subject-matter experts to write nuanced, thought-provoking essays that establish your brand as an intellectual market leader.",
        keyDeliverables: [
          "Executive Contributor Article Placement",
          "Industry Point-of-View (POV) Strategic Papers",
          "Op-Eds & Industry Counter-Narratives",
          "Comprehensive Editorial Calendar Management",
        ],
      },
      {
        id: "research-reports",
        title: "B2B Whitepapers & Industry Reports",
        description:
          "Flagship gated research reports, industry benchmarks, and proprietary state-of-the-market studies that generate thousands of high-value enterprise leads.",
        detailedContent:
          "Our research team designs survey methodologies, analyzes proprietary data sets, and drafts publication-ready 40-page whitepapers featuring custom data visualizations.",
        keyDeliverables: [
          "Survey Design & Primary Research Data Analysis",
          "Complete Whitepaper Drafting & Editorial Review",
          "Executive Summary & One-Page Infographic Teasers",
          "Gated Lead Generation Campaign Assets",
        ],
      },
      {
        id: "video-scripts",
        title: "Video Scripts & Visual Storytelling",
        description:
          "Compelling video scripts for brand anthems, product launch explainers, customer case study mini-documentaries, and podcast interviews.",
        detailedContent:
          "We craft pacing, narrative arcs, and visual stage directions for video productions, ensuring every second keeps viewers glued to the screen until the final CTA.",
        keyDeliverables: [
          "Brand Anthem & Commercial Video Scripts",
          "Product Feature Explainer & Demo Walkthroughs",
          "Customer Testimonial Case Study Interview Guides",
          "Podcast Host Questionnaires & Show Notes",
        ],
      },
      {
        id: "email-copy",
        title: "Email Lifecycle & Newsletter Sequences",
        description:
          "Engaging email copy for welcome series, abandoned cart recovery, re-engagement campaigns, and weekly editorial industry newsletters.",
        detailedContent:
          "We write conversational, value-packed email sequences with irresistible subject lines that regularly beat industry open-rate and click-to-open benchmarks.",
        keyDeliverables: [
          "Complete Automated Email Nurture Copy (7-14 parts)",
          "Weekly Editorial Newsletter Copy & Formatting",
          "High-Converting Sales Promo & Flash Deal Blasts",
          "Subject Line & Preview Text Multivariate Testing",
        ],
      },
      {
        id: "seo-pillars",
        title: "SEO Pillar Pages & Knowledge Centers",
        description:
          "Comprehensive, authoritative guidebooks and knowledge base articles designed to rank #1 organically and educate qualified buyers.",
        detailedContent:
          "We build ultimate resource hubs covering every core facet of your service offerings, formatted with interactive tables of contents, schemas, and diagrams.",
        keyDeliverables: [
          "5,000+ Word Definitive Industry Pillar Guides",
          "Comprehensive Customer Knowledge Base Articles",
          "Glossaries, Comparison Tables & Cheat Sheets",
          "Programmatic Content Structuring & Maintenance",
        ],
      },
    ],
  },

  "cro": {
    slug: "cro",
    title: "Conversion Rate Optimization (CRO)",
    tagline: "Systematically turning clicks into customers and maximizing revenue yield.",
    accentColor: "#FD6E12",
    gradientColors: {
      primary: "#8A4D1A",
      secondary: "#B26526",
      light: "#DE853C",
      deep: "#572F0D",
    },
    overviewParagraph1:
      "AdPulse Digital's Conversion Rate Optimization practice turns digital traffic into compounding revenue. Generating website visitors is only half the battle; the real margin expansion occurs when you increase the percentage of those visitors who convert into paying customers and qualified enterprise sales leads.",
    overviewParagraph2:
      "Using statistical rigor, behavioral psychology, and heatmapping telemetry, our CRO squads run continuous multivariate A/B testing programs that systematically diagnose user friction points, eliminate checkout hesitations, and unlock millions in hidden revenue.",
    overviewExpanded:
      "We treat every page element as a conversion hypothesis. From headline typography and form field reductions to social proof placement and sticky CTA micro-interactions, our iterative testing methodologies consistently generate +140% conversion rate improvements without spending an extra dollar on ads.",
    metrics: [
      { value: "140", suffix: "%", label: "Average Conversion Rate Uplift" },
      { value: "38", suffix: "%", label: "Cart Abandonment Drop" },
      { value: "1,200", suffix: "+", label: "A/B Tests Executed Annually" },
    ],
    practicesTitle: "Our Practices",
    practices: [
      {
        id: "ab-testing",
        title: "Multivariate A/B Testing Frameworks",
        description:
          "Statistically significant experimentation roadmaps testing page layouts, value propositions, and calls to action using Optimizely and VWO.",
        detailedContent:
          "We develop prioritized testing backlogs based on ICE (Impact, Confidence, Ease) scoring, executing continuous tests with statistical significance safeguards.",
        keyDeliverables: [
          "Prioritized Experimentation Roadmap & Hypotheses",
          "Statistical Significance & Sample Size Planning",
          "Front-End Test Code Implementation & QA",
          "Post-Test Revenue Impact & Learning Reports",
        ],
      },
      {
        id: "landing-page-eng",
        title: "High-Converting Landing Page Engineering",
        description:
          "Bespoke landing page design and sub-second React engineering optimized specifically for paid search and paid social campaign traffic.",
        detailedContent:
          "We design modular, lightning-fast landing page variants tailored to individual audience segments and keyword intent, maximizing relevance and quality scores.",
        keyDeliverables: [
          "High-Velocity Next.js Landing Page Development",
          "Dynamic Text Replacement (DTR) for Search Match",
          "Frictionless Lead Capture Form Design",
          "Mobile-First Responsive Layout Refinements",
        ],
      },
      {
        id: "user-telemetry",
        title: "Heatmap & User Session Auditing",
        description:
          "Granular qualitative analysis using Hotjar and FullStory session recordings to identify rage clicks, dead clicks, and drop-off points.",
        detailedContent:
          "We analyze thousands of recorded user sessions to observe exactly where customers hesitate, get confused, or abandon their checkout journey.",
        keyDeliverables: [
          "Full-Funnel Drop-Off & Micro-Conversion Funnels",
          "Scroll Depth & Click Heatmap Diagnostic Audits",
          "Rage-Click & Usability Bug Identification",
          "Executive Heuristic Evaluation Reports",
        ],
      },
      {
        id: "checkout-optimization",
        title: "Frictionless Checkout & Lead Funnels",
        description:
          "Streamlining checkout flows with one-click payment methods (Apple Pay, Google Pay, Shop Pay) and multi-step micro-commitment forms.",
        detailedContent:
          "We re-architect checkout funnels to reduce form fields, introduce progressive disclosure, provide real-time validation, and display reassurance guarantees.",
        keyDeliverables: [
          "One-Page & Express Checkout Implementations",
          "Multi-Step Lead Form Progressive Disclosure",
          "Real-Time Inline Error Validation",
          "Trust Badge, Security & Guarantee Placement",
        ],
      },
      {
        id: "dynamic-personalization",
        title: "Dynamic On-Site Personalization",
        description:
          "Adapting headlines, banners, and product recommendations in real time based on referral source, location, industry, or past browsing behavior.",
        detailedContent:
          "We implement personalization engines that greet returning visitors with tailored case studies and custom pricing, dramatically lifting on-site engagement.",
        keyDeliverables: [
          "Geo-Targeted & Industry-Specific Dynamic Content",
          "Returning Visitor vs. New Visitor Variant Paths",
          "Rule-Based Personalization Engine Setup",
          "Audience Cohort Conversion Benchmarking",
        ],
      },
      {
        id: "psychological-triggers",
        title: "Behavioral Psychology & Micro-Copy",
        description:
          "Applying principles of behavioral economics (scarcity, loss aversion, social proof, anchoring) to guide subconscious user decision-making.",
        detailedContent:
          "We refine micro-copy on buttons, tooltips, and confirmation screens to alleviate buyer anxiety and provide psychological momentum toward the conversion goal.",
        keyDeliverables: [
          "Social Proof & Real-Time Activity Notification Design",
          "Pricing Table Anchoring & Tiering Optimization",
          "Urgency & Ethical Scarcity Mechanism Styling",
          "Micro-Copy & Form Field Label Refinements",
        ],
      },
    ],
  },

  "ai-automation": {
    slug: "ai-automation",
    title: "AI Marketing Automation & CRM",
    tagline: "Autonomous customer workflows and predictive growth intelligence.",
    accentColor: "#FD6E12",
    gradientColors: {
      primary: "#1B3B59",
      secondary: "#26547C",
      light: "#3D82BD",
      deep: "#0F2233",
    },
    overviewParagraph1:
      "AdPulse Digital's AI Marketing Automation practice connects customer data, artificial intelligence, and lifecycle messaging into an autonomous revenue engine. Manual marketing execution does not scale; our automated pipelines trigger hyper-personalized communications at the precise micro-moment of highest customer intent.",
    overviewParagraph2:
      "By integrating cutting-edge large language models, predictive churn algorithms, and enterprise CRM architectures across HubSpot, Klaviyo, Salesforce, and Marketo, we turn raw customer databases into high-converting compounding assets.",
    overviewExpanded:
      "We design autonomous lead qualification agents, predictive replenishment workflows, and multi-touch omnichannel SMS/Email sequences that operate 24/7/365. Organizations leveraging our automated ecosystems save over 12,000 operational hours while boosting customer lifetime value by 64%.",
    metrics: [
      { value: "64", suffix: "%", label: "Customer Lifetime Value Lift" },
      { value: "12K", suffix: "+", label: "Annual Operational Hours Saved" },
      { value: "99.4", suffix: "%", label: "Email Deliverability SLA" },
    ],
    practicesTitle: "Our Practices",
    practices: [
      {
        id: "lifecycle-email",
        title: "Automated Lifecycle Nurture Sequences",
        description:
          "Multi-branch automated email journeys for onboarding, activation, win-back, post-purchase cross-selling, and VIP loyalty rewards.",
        detailedContent:
          "We construct intelligent branching workflows that adapt messaging based on how recipients interact with previous emails, website pages, and purchase events.",
        keyDeliverables: [
          "End-to-End Customer Lifecycle Journey Architecture",
          "Behavioral Trigger Sequences (Browse, Cart, Churn)",
          "Responsive HTML Email Template Design System",
          "Dedicated IP Warmup & Deliverability Hardening",
        ],
      },
      {
        id: "predictive-scoring",
        title: "Predictive Lead & Churn Scoring",
        description:
          "Machine learning algorithms that score inbound leads by conversion propensity and alert sales teams before valuable customers churn.",
        detailedContent:
          "We train custom propensity models on your historical CRM records to assign dynamic scores to every contact, ensuring sales teams prioritize highest-value prospects.",
        keyDeliverables: [
          "Custom Predictive Lead Scoring Algorithms",
          "Early Warning Churn Probability Triggers",
          "Automated Sales Rep Task & Slack Notifications",
          "Customer Value Tier Segmentation (RFM Analysis)",
        ],
      },
      {
        id: "crm-architecture",
        title: "HubSpot, Klaviyo & Salesforce CRM Architecture",
        description:
          "Enterprise CRM implementation, database deduplication, custom property mapping, and bidirectional synchronization with ERP and product databases.",
        detailedContent:
          "We clean, organize, and configure enterprise CRM instances to serve as the single source of truth for marketing, sales, and customer success teams.",
        keyDeliverables: [
          "CRM Data Sanitization & Deduplication",
          "Custom Object, Pipeline & Lifecycle Stage Mapping",
          "Bidirectional API Synchronization & Webhook Setup",
          "Compliance (GDPR, CCPA, CAN-SPAM) Preference Centers",
        ],
      },
      {
        id: "ai-concierge",
        title: "Autonomous 24/7 AI Sales Concierges",
        description:
          "Fine-tuned generative AI copilots and conversational chatbots that qualify inbound website leads, answer complex queries, and book sales meetings.",
        detailedContent:
          "Trained on your proprietary documentation, pricing sheets, and case studies, our AI agents engage website visitors in real-time conversations to capture verified meetings.",
        keyDeliverables: [
          "Domain-Tuned RAG Knowledge Base Integration",
          "Automated Calendar Scheduling (Google/Outlook Sync)",
          "CRM Contact Record Auto-Enrichment",
          "Human Agent Warm Hand-off Triggers",
        ],
      },
      {
        id: "omnichannel-retention",
        title: "Omnichannel SMS & WhatsApp Retention",
        description:
          "High-converting mobile messaging sequences, transactional shipping updates, and personalized VIP product drops via SMS and WhatsApp Business.",
        detailedContent:
          "We deploy TCPA-compliant SMS and WhatsApp campaigns that achieve 98% open rates within 3 minutes of delivery, providing seamless instant checkout links.",
        keyDeliverables: [
          "TCPA & Carrier Compliance Opt-In Management",
          "Two-Way Conversational SMS Customer Support",
          "VIP Flash Drops & Time-Sensitive Promotions",
          "Integrated Email + SMS Cross-Channel Journey Logic",
        ],
      },
      {
        id: "attribution-data",
        title: "Server-Side Tracking & First-Party Data",
        description:
          "Server-side Google Tag Manager, Meta Conversions API (CAPI), and customer data platform (CDP) deployments that future-proof measurement.",
        detailedContent:
          "We transition your analytics infrastructure away from brittle browser cookies to secure cloud server-side endpoints, restoring 100% accurate conversion tracking.",
        keyDeliverables: [
          "Server-Side Google Tag Manager (sGTM) Deployment",
          "Meta, TikTok & LinkedIn Server Conversions API",
          "Customer Data Platform (CDP) Identity Stitching",
          "Cookieless Analytics & Event Telemetry Pipelines",
        ],
      },
    ],
  },

  "brand-design": {
    slug: "brand-design",
    title: "Brand Identity & Ad Creative Design",
    tagline: "Magnetic visual identities that command authority and inspire action.",
    accentColor: "#FD6E12",
    gradientColors: {
      primary: "#5A1E29",
      secondary: "#7A2E3B",
      light: "#A44555",
      deep: "#3D111A",
    },
    overviewParagraph1:
      "AdPulse Digital's Brand Identity & Ad Creative Design practice creates magnetic visual systems that capture attention, build emotional resonance, and reflect global enterprise prestige. Design is not mere decoration; it is the visual language that communicates value, commands pricing power, and drives decisive buyer action.",
    overviewParagraph2:
      "From complete corporate rebrands, typographic guidelines, and 3D product CGI to hundreds of high-performing advertising visual assets tailored for digital platforms, our multidisciplinary design studio turns brand identity into a distinct competitive advantage.",
    overviewExpanded:
      "We build living design systems that bridge brand guidelines with performance marketing execution. Every visual element—from color tokens and bespoke motion behaviors to conversion-tested typography—is engineered to look stunning across retina displays and deliver proven commercial outcomes.",
    metrics: [
      { value: "94", suffix: "%", label: "Brand Distinction Score" },
      { value: "3.8", suffix: "x", label: "Ad Click-Through Rate Lift" },
      { value: "500", suffix: "+", label: "Enterprise Design Systems Built" },
    ],
    practicesTitle: "Our Practices",
    practices: [
      {
        id: "ad-creatives",
        title: "High-Converting Performance Ad Creatives",
        description:
          "Eye-catching digital ad assets designed specifically to stop thumbs, communicate value in 1 second, and crush performance marketing benchmarks.",
        detailedContent:
          "Our performance designers produce static carousels, animated motion graphics, and side-by-side comparison graphics engineered to deliver superior ROAS on Meta and Google.",
        keyDeliverables: [
          "Weekly Performance Creative Refresh Sprints",
          "Thumbnail & Scroll-Stopping Hook Visuals",
          "Responsive Ad Aspect Ratio Variations (1:1, 9:16, 16:9)",
          "Dynamic Product Ad (DPA) Template Styling",
        ],
      },
      {
        id: "corporate-identity",
        title: "Corporate Identity Systems & Guidelines",
        description:
          "Complete brand identity packages including logo marks, typography pairings, color palette tokens, and comprehensive 100+ page brand books.",
        detailedContent:
          "We construct authoritative visual systems that reflect your company's core mission, establishing strict guidelines for internal teams, partners, and external agencies.",
        keyDeliverables: [
          "Primary & Secondary Logo Mark Vector Suites",
          "Curated Typography Hierarchies & Font Licenses",
          "Accessible Digital & Print Color Palettes",
          "Comprehensive Enterprise Brand Guidelines Book",
        ],
      },
      {
        id: "cgi-motion",
        title: "3D Motion Graphics & Product CGI",
        description:
          "Photorealistic 3D product renders, exploded view animations, and cinematic brand video bumpers crafted in Cinema4D and Blender.",
        detailedContent:
          "We bring products and abstract concepts to life with hyper-realistic 3D lighting, textures, and fluid motion graphics that elevate perception to luxury tier.",
        keyDeliverables: [
          "Photorealistic 4K 3D Product Renderings",
          "Exploded Architecture & Tech Feature Animations",
          "Seamless Loop Motion Graphics for Web Banners",
          "Interactive WebGL 3D Model Assets for Web",
        ],
      },
      {
        id: "design-systems",
        title: "Figma Design Systems & Brand Toolkits",
        description:
          "Modular component libraries in Figma with standardized design tokens, accessible UI elements, and developer-ready documentation.",
        detailedContent:
          "We create unified Figma component libraries that allow marketing and product teams to assemble on-brand pages and campaign assets in minutes instead of days.",
        keyDeliverables: [
          "Atomic Figma Design System & Component Library",
          "W3C Design Tokens (Colors, Spacing, Typography)",
          "Dark Mode & Responsive Breakpoint Variants",
          "Developer Handoff Documentation & Storybook Sync",
        ],
      },
      {
        id: "packaging-collateral",
        title: "Marketing Collateral & Pitch Decks",
        description:
          "High-stakes investor pitch presentations, sales collateral, booth graphics, and luxury physical packaging design.",
        detailedContent:
          "We craft captivating presentation decks and premium marketing collateral that give executive sales squads the visual confidence to close enterprise contracts.",
        keyDeliverables: [
          "C-Suite Investor & Sales Pitch Decks",
          "One-Pager Product Fact Sheets & Case Studies",
          "Event Tradeshow Booth & Banner Visuals",
          "Premium Physical Packaging & Unboxing Design",
        ],
      },
      {
        id: "motion-microinteractions",
        title: "Interactive Web & Motion Design",
        description:
          "Custom micro-interactions, smooth parallax transitions, and kinetic typography that transform websites into unforgettable digital experiences.",
        detailedContent:
          "Working hand-in-hand with our front-end engineers, our motion designers implement subtle hover states, smooth scroll physics, and animated vector illustrations.",
        keyDeliverables: [
          "Lottie & SVG Vector Motion Animations",
          "Custom Scroll-Triggered Parallax Storyboards",
          "Interactive Cursor & Hover Micro-States",
          "Subtle Page Load Transitions & Skeleton Loaders",
        ],
      },
    ],
  },

  "web-growth": {
    slug: "web-growth",
    title: "E-Commerce & Web Growth Engineering",
    tagline: "Ultra-fast headless digital platforms built for scale, speed, and conversion.",
    accentColor: "#FD6E12",
    gradientColors: {
      primary: "#183244",
      secondary: "#234760",
      light: "#396E94",
      deep: "#0F202B",
    },
    overviewParagraph1:
      "AdPulse Digital's Web Growth Engineering practice builds the digital storefronts and web platforms that anchor high-growth marketing campaigns. In modern marketing, your website is your best salesperson; if it takes more than 1 second to load or causes mobile friction, marketing dollars are burned before the customer ever sees your offer.",
    overviewParagraph2:
      "We engineer custom headless architectures, modern Next.js React platforms, and enterprise Shopify Plus storefronts that achieve 99/100 Core Web Vitals scores and convert global traffic with sub-second page rendering.",
    overviewExpanded:
      "By decoupling front-end presentation layers from back-end commerce logic and serving static assets from global edge CDNs, we eliminate server downtime during high-traffic promotional drops while enabling marketing teams to publish dynamic landing pages autonomously.",
    metrics: [
      { value: "0.42", suffix: "s", label: "Average Global Edge Page Load" },
      { value: "99", suffix: "/100", label: "Google Lighthouse Performance Score" },
      { value: "99.99", suffix: "%", label: "Platform Uptime SLA During Peak Drops" },
    ],
    practicesTitle: "Our Practices",
    practices: [
      {
        id: "headless-commerce",
        title: "Shopify Plus & Headless Commerce",
        description:
          "High-volume e-commerce architectures on Shopify Plus, commercetools, and BigCommerce engineered for rapid checkout and international fulfillment.",
        detailedContent:
          "We architect custom headless commerce frontends with localized currencies, dynamic inventory sync, and one-click express checkouts that boost checkout conversion by 54%.",
        keyDeliverables: [
          "Headless Next.js Shopify Storefront Development",
          "Omnichannel ERP & Warehouse Logistics Integration",
          "Global Multi-Currency & Language Localization",
          "One-Click Checkout & Upsell Funnel Optimization",
        ],
      },
      {
        id: "nextjs-platforms",
        title: "Next.js & Modern Web Engineering",
        description:
          "Enterprise web applications built on Next.js App Router, Tailwind CSS, and TypeScript for blazing-fast performance and seamless developer velocity.",
        detailedContent:
          "Our engineering teams build scalable, cleanly typed React platforms with server-side rendering (SSR), incremental static regeneration (ISR), and modular components.",
        keyDeliverables: [
          "Full-Stack Next.js App Router Architecture",
          "Component-Driven TypeScript & React Development",
          "Tailwind CSS Responsive Design Implementation",
          "Automated CI/CD Testing & Zero-Downtime Deployment",
        ],
      },
      {
        id: "server-side-tracking",
        title: "Tracking, Pixels & Server CAPI Architecture",
        description:
          "Robust measurement pipelines connecting first-party telemetry to Google Analytics 4, Meta Conversions API, and Segment Customer Data Platforms.",
        detailedContent:
          "We implement comprehensive data layer schemas, custom event tracking, and server-side tag management to guarantee zero data loss in your marketing reporting.",
        keyDeliverables: [
          "Custom Data Layer Specification & Implementation",
          "Server-Side GTM & Meta/TikTok/LinkedIn CAPI",
          "GA4 Custom Events & Conversion Funnel Setup",
          "Segment / RudderStack CDP Identity Resolution",
        ],
      },
      {
        id: "edge-performance",
        title: "Sub-Second Global Edge Infrastructure",
        description:
          "Deploying web assets across Cloudflare, Vercel, and AWS edge nodes to deliver instantaneous page loads for users anywhere in the world.",
        detailedContent:
          "We optimize critical rendering paths, compress assets with modern AVIF/WebP formats, and leverage edge caching to ensure sub-500ms time-to-first-byte (TTFB).",
        keyDeliverables: [
          "Global Edge Network & CDN Caching Policies",
          "Image & Asset Optimization (AVIF, WebP, Brotli)",
          "Code Splitting & Bundle Size Tree-Shaking",
          "DDoS Mitigation & Enterprise Web Application Firewalls",
        ],
      },
      {
        id: "interactive-funnels",
        title: "Custom Calculators & Interactive Funnels",
        description:
          "Interactive ROI calculators, product recommendation quizzes, and multi-step assessment funnels that capture high-intent qualified leads.",
        detailedContent:
          "We develop engaging interactive tools that calculate savings or recommend personalized product packages, delivering 4x higher lead conversion than static forms.",
        keyDeliverables: [
          "Interactive ROI & Cost Savings Calculators",
          "Dynamic Product Recommendation Quizzes",
          "Custom Lead Scoring & Instant PDF Report Generation",
          "Direct CRM Lead Injection via Webhooks",
        ],
      },
      {
        id: "accessibility-security",
        title: "Enterprise Accessibility (WCAG) & Security",
        description:
          "Full compliance with WCAG 2.2 AA accessibility guidelines, GDPR/CCPA privacy standards, and SOC2-compliant enterprise web security.",
        detailedContent:
          "We perform rigorous accessibility audits with screen readers, implement keyboard navigation landmarks, and secure web platforms against vulnerabilities.",
        keyDeliverables: [
          "WCAG 2.2 Level AA Accessibility Remediation",
          "Comprehensive Keyboard & Screen Reader Testing",
          "GDPR / CCPA Cookie Consent & Privacy Architecture",
          "Automated Security Vulnerability & Pen Testing",
        ],
      },
    ],
  },
};

export function getCapabilityDetail(slug: string): CapabilityDetail {
  if (capabilitiesData[slug]) {
    return capabilitiesData[slug];
  }
  // Return the first one as default if slug not matched
  return capabilitiesData["performance-marketing"];
}

