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
    category: "ARTIFICIAL INTELLIGENCE",
    title: "From AI Adoption to AI Advantage",
    description:
      "Read our leadership take on what AI makes newly possible for enterprises focused on exponential growth, operational autonomy, and compounding competitive edge.",
    image: "/images/latest-thinking/ai-adoption.jpg",
    readTime: "5 min read",
    date: "October 2026",
    fullContent: [
      "Enterprise AI adoption has reached an inflection point. While initial deployments focused on localized task automation, the next frontier belongs to organizations that weave autonomous intelligence across their entire operational fabric.",
      "By transitioning from tactical GenAI experimentation to systemic architectural advantage, market leaders are realizing 3.8x higher ROI and compressing execution cycles from weeks to minutes.",
      "AdPulse Digital partners with Fortune 500 enterprises to engineer proprietary domain-tuned foundational models, agentic workflows, and zero-latency inference meshes."
    ],
  },
  {
    id: "invisible-ai",
    type: "BLOG",
    category: "ARTIFICIAL INTELLIGENCE",
    title: "Invisible AI: Enabling Frictionless Customer Experiences in Europe",
    description:
      "Discover how invisible ambient AI reduces cognitive friction and makes customer journeys feel completely effortless across omni-channel touchpoints.",
    image: "/images/latest-thinking/invisible-ai.jpg",
    readTime: "4 min read",
    date: "September 2026",
    fullContent: [
      "The best interface is no interface at all. Ambient intelligence running silently in the background anticipates customer intent, resolves complex inquiries before escalation, and tailors interactions in real time.",
      "European consumer expectations demand strict GDPR compliance paired with hyper-personalized digital service. Invisible AI bridges this gap through local edge compute and privacy-preserving federated models.",
      "Discover how AdPulse Digital’s predictive CX engines empower leading telecom and retail brands to slash churn by 28% while boosting customer lifetime value."
    ],
  },
];

const column2Items: ThinkingItem[] = [
  {
    id: "open-banking",
    type: "BLOG",
    category: "BANKING AND FINANCIAL SERVICES",
    title: "Open Banking at an Inflection Point: Why Banks Must Act Now",
    description:
      "Navigate how open banking is reshaping compliance, customer trust, and competitive edge for banks in a hyper-connected API ecosystem.",
    image: "/images/latest-thinking/open-banking.jpg",
    readTime: "6 min read",
    date: "October 2026",
    fullContent: [
      "Regulatory frameworks like PSD3 and open finance mandates are transforming banks from traditional monolithic repositories into agile API-first financial platforms.",
      "Institutions that view open banking solely as a compliance hurdle risk disintermediation by agile fintechs. Forward-looking banks are turning regulatory compliance into a monetizable platform business model.",
      "Explore AdPulse Digital’s secure API orchestration engines and microservices modernization frameworks tailored for Tier-1 banking institutions."
    ],
  },
  {
    id: "security-by-design",
    type: "WHITEPAPER",
    category: "CYBER SECURITY",
    title: "Security by Design: A GenAI Model for Trust and Growth",
    description:
      "Secure GenAI from the start to improve reliability, meet evolving regulatory standards, and protect critical enterprise stakeholder trust.",
    image: "/images/latest-thinking/security-design.jpg",
    readTime: "8 min read",
    date: "August 2026",
    fullContent: [
      "As generative AI and autonomous agents take on mission-critical responsibilities, traditional perimeter-based security is no longer sufficient to mitigate prompt injection, data exfiltration, and model poisoning.",
      "A proactive Security-by-Design posture embeds guardrails, cryptographic provenance verification, and real-time behavioral anomaly detection at every layer of the LLM pipeline.",
      "Download our whitepaper to review AdPulse Digital's Zero-Trust Cyber Resilience benchmark for multi-agent enterprise deployments."
    ],
  },
  {
    id: "bold-prepaid",
    type: "WHITEPAPER",
    category: "COMMUNICATIONS",
    title: "Bold Moves in Prepaid: A New Growth Path for Developed Markets",
    description:
      "Discover how telcos are reinventing prepaid with AI-driven churn prediction, digital journeys, and flexible new value models.",
    image: "/images/latest-thinking/bold-prepaid.jpg",
    readTime: "7 min read",
    date: "July 2026",
    fullContent: [
      "In saturated mobile markets, prepaid subscribers represent an untapped growth reservoir when treated with the sophistication of post-paid digital journeys.",
      "By leveraging real-time usage analytics and zero-touch eSIM provisioning, telecom operators are unlocking high-margin digital lifestyle services and micro-subscriptions.",
      "Learn how AdPulse Digital’s telecommunications vertical delivers cloud-native BSS/OSS stacks that empower telcos to capture next-generation digital natives."
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

          <div className="mt-3 flex items-center gap-1.5 text-xs font-bold text-white group-hover:text-red-400 transition-colors uppercase tracking-wider">
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
          <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-black font-heading tracking-tight text-[#242321]">
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
                <span className="px-3 py-1 bg-[#650025] text-white text-[11px] font-bold uppercase tracking-wider">
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
                <span className="text-[#ED1B36] font-bold">AdPulse Insights</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black font-heading tracking-tight text-[#242321] leading-snug">
                {selectedItem.title}
              </h2>

              <p className="text-base sm:text-lg font-medium text-zinc-700 leading-relaxed italic border-l-4 border-[#ED1B36] pl-4">
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
                  className="px-6 py-2.5 bg-[#650025] hover:bg-[#850031] text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
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
