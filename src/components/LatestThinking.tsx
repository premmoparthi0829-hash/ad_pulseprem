"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronRight, X, ArrowUpRight, BookOpen, Clock } from "lucide-react";

interface ThinkingItem {
  id: string;
  type: string;
  category: string;
  title: string;
  description: string;
  image: string;
  readTime: string;
  date: string;
  fullContent?: string[];
}

const column1Items: ThinkingItem[] = [
  {
    id: "ai-adoption",
    type: "BLOG",
    category: "PERFORMANCE MARKETING",
    title: "From CPC to LTV: AI-Driven Performance Media Optimization",
    description:
      "Read our leadership take on how predictive machine learning models are transforming algorithmic ad bidding and unlocking 4.8x enterprise ROAS.",
    image: "/images/latest-thinking/ai-adoption.jpg",
    readTime: "5 min read",
    date: "October 2026",
    fullContent: [
      "Modern digital advertising has moved far beyond manual keyword bidding and static demographics. Leading enterprise brands leverage predictive customer lifetime value (pLTV) models to bid aggressively on high-value cohorts while cutting budget on low-margin clicks.",
      "By feeding first-party CRM telemetry directly into server-side Meta and Google ad APIs, organizations are realizing 45% lower cost per acquisition and compounding conversion rates across paid search and paid social.",
      "AdPulse Digital partners with enterprise marketing teams to construct automated multi-touch bidding engines, custom attribution models, and dynamic ad creative pipelines."
    ],
  },
  {
    id: "invisible-ai",
    type: "BLOG",
    category: "SEARCH ENGINE OPTIMIZATION",
    title: "Generative Engine Optimization (GEO): Winning Search Beyond Blue Links",
    description:
      "Discover how leading brands dominate answers on ChatGPT, Perplexity, and Google AI Overviews through semantic technical SEO authority.",
    image: "/images/latest-thinking/invisible-ai.jpg",
    readTime: "4 min read",
    date: "September 2026",
    fullContent: [
      "The next era of search is zero-click conversational discovery. Winning visibility requires restructuring your content architecture to be authoritative, easily cited, and semantically dense for generative AI search engines.",
      "By integrating comprehensive technical schema markup, original research citations, and high-relevance topic clusters, brands establish verified domain authority.",
      "Discover how AdPulse Digital’s GEO framework helps brands capture top citation positions across generative AI models while maintaining #1 organic Google rankings."
    ],
  },
];

const column2Items: ThinkingItem[] = [
  {
    id: "open-banking",
    type: "BLOG",
    category: "GROWTH MARKETING",
    title: "Full-Funnel Omnichannel: Why Multi-Touch Attribution Outperforms Siloed Ads",
    description:
      "Navigate how unifying paid social, organic search, creator content, and lifecycle email into a coherent funnel multiplies enterprise conversion.",
    image: "/images/latest-thinking/open-banking.jpg",
    readTime: "6 min read",
    date: "October 2026",
    fullContent: [
      "Customers rarely convert on their first touchpoint. Isolating marketing channels into disconnected departmental silos leads to budget cannibalization and inaccurate ROAS calculations.",
      "When programmatic brand awareness, retargeting funnels, and automated nurture sequences operate from a unified customer data platform, conversion velocity increases dramatically.",
      "Explore AdPulse Digital’s holistic growth marketing frameworks designed to turn fragmented marketing spend into a predictable revenue generator."
    ],
  },
  {
    id: "security-by-design",
    type: "WHITEPAPER",
    category: "FIRST-PARTY DATA",
    title: "Server-Side Tracking & Privacy-First Measurement: The CMO Playbook",
    description:
      "Master server-side conversion APIs (CAPI), cookieless tracking, and zero-party data acquisition to future-proof your digital marketing metrics.",
    image: "/images/latest-thinking/security-design.jpg",
    readTime: "8 min read",
    date: "August 2026",
    fullContent: [
      "Browser cookie restrictions and privacy regulations have blinded traditional client-side marketing analytics. Brands relying solely on browser pixels miss up to 35% of true conversion events.",
      "Implementing server-side tracking (Meta CAPI, Google Enhanced Conversions) restores accurate attribution, improves algorithmic ad delivery, and respects customer privacy standards.",
      "Download our whitepaper to review AdPulse Digital's Server-Side Marketing Architecture benchmark for enterprise growth leaders."
    ],
  },
  {
    id: "bold-prepaid",
    type: "WHITEPAPER",
    category: "SOCIAL & CREATOR STRATEGY",
    title: "Viral Creator Campaigns: Scaling Customer Acquisition with Authentic Storytelling",
    description:
      "Discover how enterprise brands are replacing synthetic corporate ads with creator-led content that drives 3.4x higher organic engagement.",
    image: "/images/latest-thinking/bold-prepaid.jpg",
    readTime: "7 min read",
    date: "July 2026",
    fullContent: [
      "Audiences have developed immunity to overly polished corporate commercials. Modern consumers seek authenticity, relatable human product demos, and community consensus.",
      "By pairing high-volume UGC (user-generated content) and micro-creator partnerships with paid whitelisting and spark ads, brands achieve unprecedented viral reach with lower production costs.",
      "Learn how AdPulse Digital’s creator studio scales end-to-end influencer campaigns that turn social attention into direct checkout revenue."
    ],
  },
];

const column3Items: ThinkingItem[] = [
  {
    id: "oil-gas-ai",
    type: "WHITEPAPER",
    category: "ENERGY AND UTILITIES",
    title: "Agentic AI for Oil and Gas Upstream Operations",
    description:
      "Learn how agentic AI helps upstream energy operations reduce unplanned downtime, improve reservoir recovery, and work smarter.",
    image: "/images/latest-thinking/oil-gas-ai.jpg",
    readTime: "9 min read",
    date: "September 2026",
    fullContent: [
      "Complex upstream energy assets operate in challenging, volatile environments where equipment downtime costs millions per hour. Autonomous AI agents ingest real-time SCADA telemetry to anticipate valve failures before they occur.",
      "By coordinating predictive digital twins with autonomous field robotics, energy operators minimize environmental footprint while maximizing extraction efficiency and worker safety.",
      "Read the full technical whitepaper exploring AdPulse Digital’s edge AI industrial gateway for offshore and remote extraction facilities."
    ],
  },
  {
    id: "autonomous-enterprise",
    type: "BLOG",
    category: "ARTIFICIAL INTELLIGENCE",
    title: "Engineering Autonomous Enterprise",
    description:
      "Discover how autonomous applications help modern enterprises move beyond static workflows and manual operations into self-healing business networks.",
    image: "/images/latest-thinking/autonomous-enterprise.jpg",
    readTime: "6 min read",
    date: "October 2026",
    fullContent: [
      "The autonomous enterprise is not a distant vision—it is an engineering imperative. Moving past isolated robotic process automation, autonomous enterprise architecture connects dynamic planning, self-optimizing supply chains, and closed-loop IT infrastructure.",
      "With continuous machine feedback loops, decision-making latency drops to near-zero, enabling global corporations to respond dynamically to supply disruptions, market shifts, and emerging opportunities.",
      "Partner with AdPulse Digital to engineer resilient autonomous software architectures built on enterprise-grade foundation models and zero-trust cloud fabrics."
    ],
  },
];

interface ThinkingCardProps {
  item: ThinkingItem;
  heightClass: string;
  onSelect: (item: ThinkingItem) => void;
}

const ThinkingCard: React.FC<ThinkingCardProps> = ({ item, heightClass, onSelect }) => {
  return (
    <article
      onClick={() => onSelect(item)}
      className={`relative ${heightClass} w-full overflow-hidden group cursor-pointer bg-zinc-950 select-none shadow-sm hover:shadow-2xl transition-all duration-300`}
    >
      {/* 01. Background Image (Ultra-HD with subtle zoom on hover) */}
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        unoptimized={true}
        className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
      />

      {/* 02. Dark Gradient Overlay for Clean Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 via-45% to-transparent z-1 transition-opacity duration-300" />

      {/* 03. Hover Dark Mask with Subtle Blur */}
      <div className="absolute inset-0 bg-black/65 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-1" />

      {/* 04. Hover Geometric Wireframe Grid (Exact match to reference Screenshot 2) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none z-2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id={`wireframe-grid-${item.id}`} width="36" height="36" patternUnits="userSpaceOnUse">
            <path
              d="M 36 0 L 0 36 M 0 0 L 36 36"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
              strokeOpacity="0.4"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#wireframe-grid-${item.id})`} />
      </svg>

      {/* 05. Top Badge Pill (Matches reference screenshots) */}
      <div className="absolute top-4 left-4 z-10 pointer-events-none">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/15 text-[10px] sm:text-[10.5px] font-bold tracking-wider uppercase text-white/95 shadow-sm">
          <span>{item.type}</span>
          <span className="text-white/40 font-light">|</span>
          <span>{item.category}</span>
        </div>
      </div>

      {/* 06. Bottom Editorial Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10 flex flex-col justify-end">
        {/* Title */}
        <h3 className="text-white font-bold font-heading text-lg sm:text-xl lg:text-[21px] leading-snug group-hover:text-white transition-colors">
          {item.title}
        </h3>

        {/* Hover Reveal Details (Matches reference screenshot 2) */}
        <div className="max-h-0 opacity-0 group-hover:max-h-44 group-hover:opacity-100 transition-all duration-300 ease-out overflow-hidden">
          <p className="text-xs sm:text-[13px] text-zinc-300 font-normal leading-relaxed mt-2.5 line-clamp-3">
            {item.description}
          </p>

          <div className="mt-3 flex items-center gap-1.5 text-xs font-bold text-white group-hover:text-[#FD6E12] transition-colors uppercase tracking-wider">
            <span>Read More</span>
            <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </article>
  );
};

export const LatestThinking: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<ThinkingItem | null>(null);

  return (
    <section id="latest-thinking" className="py-20 lg:py-28 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 
          ======================================================================
          01. SECTION HEADER: Exact match to reference screenshots
          ======================================================================
        */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12 sm:mb-14">
          <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-black font-heading tracking-tight text-[#01286D]">
            Latest Thinking
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed max-w-xl">
            Read what we&apos;re thinking. Research that uncovers what&apos;s next. Perspectives that challenge
            the status quo. Ideas that help you see around corners.
          </p>
        </div>

        {/* 
          ======================================================================
          02. MASONRY 3-COLUMN GRID: Exact asymmetric layout from reference
          Col 1: Tall + Standard
          Col 2: Standard + Standard + Standard
          Col 3: Standard + Tall
          ======================================================================
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-start">
          {/* Column 1: Tall Card + Standard Card */}
          <div className="flex flex-col gap-5 lg:gap-6">
            <ThinkingCard
              item={column1Items[0]}
              heightClass="h-[440px] sm:h-[480px] lg:h-[520px]"
              onSelect={setSelectedItem}
            />
            <ThinkingCard
              item={column1Items[1]}
              heightClass="h-[240px] sm:h-[260px] lg:h-[280px]"
              onSelect={setSelectedItem}
            />
          </div>

          {/* Column 2: 3 Standard Cards */}
          <div className="flex flex-col gap-5 lg:gap-6">
            <ThinkingCard
              item={column2Items[0]}
              heightClass="h-[240px] sm:h-[250px] lg:h-[254px]"
              onSelect={setSelectedItem}
            />
            <ThinkingCard
              item={column2Items[1]}
              heightClass="h-[240px] sm:h-[250px] lg:h-[254px]"
              onSelect={setSelectedItem}
            />
            <ThinkingCard
              item={column2Items[2]}
              heightClass="h-[240px] sm:h-[250px] lg:h-[254px]"
              onSelect={setSelectedItem}
            />
          </div>

          {/* Column 3: Standard Card + Tall Card */}
          <div className="flex flex-col gap-5 lg:gap-6">
            <ThinkingCard
              item={column3Items[0]}
              heightClass="h-[240px] sm:h-[260px] lg:h-[280px]"
              onSelect={setSelectedItem}
            />
            <ThinkingCard
              item={column3Items[1]}
              heightClass="h-[440px] sm:h-[480px] lg:h-[520px]"
              onSelect={setSelectedItem}
            />
          </div>
        </div>
      </div>

      {/* 
        ======================================================================
        03. INTERACTIVE MODAL: Opens detailed article view on click
        ======================================================================
      */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-white text-[#242321] shadow-2xl rounded-sm overflow-hidden max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Image with Gradient */}
            <div className="relative h-60 sm:h-72 w-full bg-black">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                unoptimized={true}
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-all cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Badges on image */}
              <div className="absolute bottom-4 left-6 z-10 flex items-center gap-2">
                <span className="px-3 py-1 bg-[#01286D] text-white text-[11px] font-bold uppercase tracking-wider">
                  {selectedItem.type}
                </span>
                <span className="px-3 py-1 bg-black/60 backdrop-blur-sm border border-white/20 text-white text-[11px] font-bold uppercase tracking-wider">
                  {selectedItem.category}
                </span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-5">
              <div className="flex items-center gap-4 text-xs font-semibold text-zinc-500">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {selectedItem.readTime}
                </span>
                <span>•</span>
                <span>{selectedItem.date}</span>
                <span>•</span>
                <span className="text-[#FD6E12] font-bold">AdPulse Insights</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black font-heading tracking-tight text-[#01286D] leading-snug">
                {selectedItem.title}
              </h2>

              <p className="text-base sm:text-lg font-medium text-zinc-700 leading-relaxed italic border-l-4 border-[#FD6E12] pl-4">
                &ldquo;{selectedItem.description}&rdquo;
              </p>

              {selectedItem.fullContent && (
                <div className="space-y-4 text-sm sm:text-base text-zinc-600 leading-relaxed pt-2">
                  {selectedItem.fullContent.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              )}

              {/* Footer CTA */}
              <div className="pt-6 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-zinc-500">
                  Published by AdPulse Digital Enterprise Research &amp; Advisory
                </span>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-6 py-2.5 bg-[#FD6E12] hover:bg-[#e05e0c] text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                >
                  Close Insight
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
