"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Play, ExternalLink, X, CheckCircle2 } from "lucide-react";

interface StoryCard {
  id: string;
  badge?: "VIDEO" | "CASE STUDY";
  type: "video" | "split-burgundy" | "interview";
  headline: string;
  authorName?: string;
  authorRole?: string;
  image: string;
  burgundyTitle?: string;
  quote?: string;
  metrics?: { label: string; value: string }[];
  summary?: string;
}

export const SuccessStories: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState<StoryCard | null>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [activeDot, setActiveDot] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Set 1: Exact Match to Reference Screenshot with Ultra-HD Indian People & Racing Car
  const page1Stories: StoryCard[] = [
    {
      id: "story-1",
      badge: "VIDEO",
      type: "video",
      headline:
        "How a trusted partnership helped Hanab navigate an IT carve-out and build a scalable foundation for growth",
      authorName: "Rajesh Varma",
      authorRole: "IT Director, Hanab Group",
      image: "/images/success-stories/story-card-1-rajesh-hd.jpg",
      quote:
        "AdPulse Digital provided the technical agility and strategic leadership necessary to execute our global carve-out without a single minute of operational downtime.",
      metrics: [
        { label: "Carve-out Velocity", value: "45% Faster" },
        { label: "Core Availability", value: "99.99%" },
        { label: "Cost Optimization", value: "32% OpEx Saved" },
      ],
      summary:
        "When Hanab initiated an enterprise-wide IT divestiture, AdPulse Digital orchestrated cross-functional squads to decouple legacy ERP and cloud infrastructures, establishing an autonomous, secure digital foundation tailored for rapid organic expansion.",
    },
    {
      id: "story-2",
      badge: "CASE STUDY",
      type: "split-burgundy",
      headline: "Outpacing Change with Velocity 2.0",
      burgundyTitle: "Outpacing Change with Velocity 2.0",
      image: "/images/success-stories/story-card-2-racecar-hd.jpg",
      quote:
        "Leveraging high-frequency telemetry streaming and predictive AI, our racing hypercars compute optimal regenerative braking strategies within milliseconds on the circuit.",
      metrics: [
        { label: "Telemetry Ingestion", value: "3.5B Datapoints" },
        { label: "Simulation Speed", value: "12x Real-Time" },
        { label: "Race Energy Yield", value: "+14.8%" },
      ],
      summary:
        "AdPulse Digital co-engineered the Velocity 2.0 telemetry and digital twin platform for world-championship Formula E electric racing, turning real-time tire, battery, and powertrain dynamics into winning aerodynamic strategies.",
    },
    {
      id: "story-3",
      type: "interview",
      headline:
        "Move Fast, Don't Break Things: Balancing AI Innovation with Clinical Continuity at Montefiore Einstein",
      authorName: "Deepesh Chandra",
      authorRole: "SVP & Chief Digital & Information Officer, Montefiore Einstein",
      image: "/images/success-stories/story-card-3-deepesh-hd.jpg",
      quote:
        "In healthcare, innovation must never come at the cost of clinical reliability. With AdPulse Digital, we accelerated generative AI adoption while safeguarding critical patient care pathways.",
      metrics: [
        { label: "Diagnostic Triage", value: "-40% Wait Time" },
        { label: "Clinical Compliance", value: "100% HIPAA" },
        { label: "Physician Adoption", value: "94% Satisfied" },
      ],
      summary:
        "Deepesh Chandra explores how Montefiore Einstein bridged clinical urgency with enterprise AI maturity, deploying patient-centric algorithmic assistants and secure clinical data fabrics across thousands of healthcare providers.",
    },
    {
      id: "story-4",
      type: "interview",
      headline:
        "Inside the AI Vanguard: Security, Scale and the Future of Intelligence at Cisco",
      authorName: "Jeetu Patel",
      authorRole: "President and Chief Product Officer, Cisco",
      image: "/images/success-stories/story-card-4-jeetu-v5.jpg",
      quote:
        "Security cannot be an afterthought in enterprise AI—it must be woven into the fabric of every model, network packet, and collaborative interaction.",
      metrics: [
        { label: "Threat Detection", value: "<15ms Mean Time" },
        { label: "Global Footprint", value: "85M Endpoints" },
        { label: "Zero-Trust Coverage", value: "100% Native" },
      ],
      summary:
        "Jeetu Patel shares Cisco's visionary architectural roadmap on scaling AI workloads securely, unbundling complex telemetry, and establishing sovereign zero-trust defenses across hyper-distributed enterprise networks.",
    },
  ];

  // Set 2: Extended Enterprise Transformation Stories with Two Indian Women Leaders & Two Companies
  const page2Stories: StoryCard[] = [
    {
      id: "story-5",
      badge: "VIDEO",
      type: "video",
      headline:
        "Human-Centric Digital Agility: Scaling Global Luxury & Retail Ecosystems with Intelligent Automation",
      authorName: "Leena Nair",
      authorRole: "Global CEO, Chanel",
      image: "/images/success-stories/story-card-5-leena-hd.jpg",
      quote:
        "True transformation harmonizes technological precision with collective human potential. AdPulse Digital's architectures empower our global teams to innovate with purpose and agility.",
      metrics: [
        { label: "Global Reach", value: "115+ Markets" },
        { label: "Supply Velocity", value: "3.2x Faster" },
        { label: "Talent Adoption", value: "98% Positive" },
      ],
      summary:
        "Leena Nair explores how Chanel harmonized timeless heritage craftsmanship with cutting-edge supply-chain intelligence, predictive omnichannel clienteling, and sustainable global operations.",
    },
    {
      id: "story-6",
      badge: "CASE STUDY",
      type: "split-burgundy",
      headline: "Accelerating Net-Zero: Orchestrating Gigawatt-Scale Clean Energy Grids",
      burgundyTitle: "Accelerating Net-Zero: 100% Clean Energy Grid Orchestration",
      image: "/images/success-stories/story-card-7-sustainability-hd.jpg",
      quote:
        "Autonomous IoT micro-inverters and predictive battery storage algorithms stabilized power delivery across 12,000 square kilometers of renewable generation.",
      metrics: [
        { label: "Grid Capacity", value: "24 GW Clean Power" },
        { label: "Carbon Abated", value: "18M Tons/Yr" },
        { label: "Uptime Reliability", value: "99.998%" },
      ],
      summary:
        "AdPulse Digital engineered the telemetry backbone and AI dispatch core for one of the world's largest hybrid solar-wind renewable parks, dynamically predicting load swings and preventing blackouts.",
    },
    {
      id: "story-7",
      type: "interview",
      headline:
        "Resilient Financial Systems: Harnessing Real-Time Macro-Telemetry and AI for Global Economic Stability",
      authorName: "Gita Gopinath",
      authorRole: "First Deputy Managing Director, International Monetary Fund",
      image: "/images/success-stories/story-card-6-gita-hd.jpg",
      quote:
        "Modern economic policy demands high-velocity telemetry. AdPulse Digital helped architect institutional analytics pipelines capable of stress-testing cross-border liquidity in seconds.",
      metrics: [
        { label: "Global Coverage", value: "190+ Sovereign Markets" },
        { label: "Model Latency", value: "<1.2s Real-Time" },
        { label: "Forecasting Precision", value: "99.1%" },
      ],
      summary:
        "Gita Gopinath details how macro-prudential surveillance systems leverage distributed time-series computation to forecast systemic debt, supply shocks, and sovereign liquidity buffers across global markets.",
    },
    {
      id: "story-8",
      badge: "CASE STUDY",
      type: "split-burgundy",
      headline: "Next-Gen Sovereign AI Cloud & Hyperscale Datacenter Fabric",
      burgundyTitle: "Next-Gen Sovereign AI Cloud & Hyperscale Fabric",
      image: "/images/success-stories/story-card-8-architecture-hd.jpg",
      quote:
        "Scaling high-density GPU clusters across decentralized enterprise hubs with automated thermal routing and sub-millisecond fabric latency.",
      metrics: [
        { label: "Compute Throughput", value: "1.2 ExaFLOPS" },
        { label: "PUE Efficiency", value: "1.08 Industry-Best" },
        { label: "Fabric Latency", value: "Sub-0.8µs" },
      ],
      summary:
        "AdPulse Digital co-designed the high-throughput network fabric and carbon-neutral cooling management systems for a multinational tier-4 datacenter campus network.",
    },
  ];

  const allStories = [...page1Stories, ...page2Stories];
  // Duplicate stories array to create a continuous, infinite auto-scrolling loop
  const displayStories = [...allStories, ...allStories];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      const container = scrollRef.current;
      if (!container) return;

      const firstCard = container.firstElementChild as HTMLElement;
      if (!firstCard) return;

      const gap = 24; // lg:gap-6
      const cardWidth = firstCard.offsetWidth + gap;

      // When reaching half of the duplicated content, silently wrap back without jump
      const halfWidth = container.scrollWidth / 2;
      if (container.scrollLeft >= halfWidth - cardWidth) {
        container.scrollLeft -= halfWidth;
      }

      container.scrollBy({ left: cardWidth, behavior: "smooth" });
    }, 3600);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const firstCard = container.firstElementChild as HTMLElement;
    if (!firstCard) return;

    const gap = 24;
    const cardWidth = firstCard.offsetWidth + gap;

    const halfWidth = container.scrollWidth / 2;
    if (container.scrollLeft >= halfWidth) {
      container.scrollLeft -= halfWidth;
    }

    const dotIndex = Math.round(container.scrollLeft / cardWidth) % allStories.length;
    setActiveDot(dotIndex);
  };

  return (
    <section
      id="success-stories"
      className="py-16 sm:py-20 lg:py-24 bg-white border-b border-zinc-100 select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10 max-w-2xl space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-zinc-900 tracking-tight">
            Success Stories
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed">
            See how we partner with global enterprises to solve challenges, accelerate transformation, and deliver measurable outcomes.
          </p>
        </div>

        {/* 
          ======================================================================
          AUTO-SCROLLING CARDS TRACK (Smooth animation one after another)
          ======================================================================
        */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex gap-4 sm:gap-5 lg:gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-4 select-none cursor-grab active:cursor-grabbing -mx-1 px-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {displayStories.map((story, idx) => {
            // Card 2, 6, 8: Split Image + Burgundy Block
            if (story.type === "split-burgundy") {
              return (
                <div
                  key={`${story.id}-${idx}`}
                  onClick={() => setSelectedStory(story)}
                  className="group relative flex flex-col shrink-0 w-[84vw] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] h-[460px] sm:h-[480px] lg:h-[490px] rounded-none overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-300 border border-zinc-200/90 bg-[#650025]"
                >
                  {/* Top Portion (~58%) */}
                  <div className="relative h-[260px] sm:h-[280px] w-full overflow-hidden bg-zinc-950 shrink-0">
                    <Image
                      src={story.image}
                      alt={story.headline}
                      fill
                      unoptimized
                      priority
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                    {story.badge && (
                      <div className="absolute top-4 left-4 z-10 px-2.5 py-1 bg-black/65 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-wider">
                        {story.badge}
                      </div>
                    )}
                  </div>

                  {/* Bottom Portion (~42%): Solid Deep Burgundy Block */}
                  <div className="flex-1 bg-[#650025] group-hover:bg-[#52001e] transition-colors duration-300 p-5 sm:p-6 flex flex-col justify-end text-white">
                    <h3 className="text-lg sm:text-xl font-bold font-heading text-white leading-snug">
                      {story.burgundyTitle}
                    </h3>
                  </div>
                </div>
              );
            }

            // Cards 1, 3, 4, 5, 7: Full Background Portrait Photos
            return (
              <div
                key={`${story.id}-${idx}`}
                onClick={() => setSelectedStory(story)}
                className="group relative shrink-0 w-[84vw] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] h-[460px] sm:h-[480px] lg:h-[490px] rounded-none overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-300 border border-zinc-200/90 bg-zinc-950"
              >
                <Image
                  src={story.image}
                  alt={story.headline}
                  fill
                  unoptimized
                  priority
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 via-35% to-transparent to-60% pointer-events-none" />
                {story.badge && (
                  <div className="absolute top-4 left-4 z-10 px-2.5 py-1 bg-black/65 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-wider">
                    {story.badge}
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10 space-y-3.5">
                  <h3 className="text-[12.5px] sm:text-[13px] font-normal text-white leading-relaxed line-clamp-4">
                    {story.headline}
                  </h3>
                  <div className="pt-2.5 flex items-end justify-between border-t border-white/20">
                    <div className="min-w-0 pr-2">
                      <h4 className="text-sm font-bold font-heading text-white truncate">
                        {story.authorName}
                      </h4>
                      <p className="text-[11px] text-zinc-300 mt-0.5 line-clamp-1 leading-tight">
                        {story.authorRole}
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/20 group-hover:bg-[#ED1B36] text-white flex items-center justify-center shrink-0 transition-colors duration-200">
                      {story.type === "video" ? (
                        <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                      ) : (
                        <ExternalLink className="w-3.5 h-3.5" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Subtle Auto-Scroll Indicator Dots */}
        <div className="flex items-center justify-center gap-1.5 pt-6">
          {allStories.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (scrollRef.current) {
                  const firstCard = scrollRef.current.firstElementChild as HTMLElement;
                  if (firstCard) {
                    const cardWidth = firstCard.offsetWidth + 24;
                    scrollRef.current.scrollTo({ left: i * cardWidth, behavior: "smooth" });
                  }
                }
              }}
              aria-label={`Go to story ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                activeDot === i ? "w-8 bg-[#ED1B36]" : "w-2 bg-zinc-200 hover:bg-zinc-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* 
        ======================================================================
        INTERACTIVE CASE STUDY / VIDEO MODAL
        ======================================================================
      */}
      {selectedStory && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedStory(null)}
        >
          <div
            className="w-full max-w-2xl bg-zinc-950 text-white rounded-none border border-zinc-800 shadow-2xl overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Hero Banner */}
            <div className="relative h-60 sm:h-72 w-full bg-zinc-900 overflow-hidden">
              <Image
                src={selectedStory.image}
                alt={selectedStory.headline}
                fill
                unoptimized
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedStory(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 p-2 rounded-full bg-black/70 hover:bg-[#ED1B36] text-white transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title & Badge */}
              <div className="absolute bottom-4 left-6 right-6 space-y-1.5">
                <span className="inline-block px-2.5 py-0.5 bg-[#ED1B36] text-white text-[10px] font-bold uppercase tracking-wider">
                  {selectedStory.badge || "FEATURED INTERVIEW"}
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-heading text-white leading-snug">
                  {selectedStory.headline}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Executive Details */}
              {selectedStory.authorName && (
                <div className="flex items-center gap-3 pb-4 border-b border-zinc-800">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-[#ED1B36] font-bold font-heading text-sm">
                    {selectedStory.authorName.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-heading">
                      {selectedStory.authorName}
                    </h4>
                    <p className="text-xs text-zinc-400">
                      {selectedStory.authorRole}
                    </p>
                  </div>
                </div>
              )}

              {/* Executive Quote */}
              {selectedStory.quote && (
                <blockquote className="pl-4 border-l-2 border-[#ED1B36] italic text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  &ldquo;{selectedStory.quote}&rdquo;
                </blockquote>
              )}

              {/* Key Metrics */}
              {selectedStory.metrics && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
                  {selectedStory.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="bg-zinc-900/80 p-3.5 border border-zinc-800/80 rounded-none"
                    >
                      <div className="text-lg sm:text-xl font-black font-heading text-[#ED1B36]">
                        {m.value}
                      </div>
                      <div className="text-[11px] text-zinc-400 mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Narrative Summary */}
              {selectedStory.summary && (
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {selectedStory.summary}
                </p>
              )}

              {/* Modal Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-zinc-800">
                <span className="flex items-center gap-1.5 text-xs text-zinc-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Verified Enterprise Outcome by AdPulse Digital
                </span>
                <button
                  onClick={() => setSelectedStory(null)}
                  className="w-full sm:w-auto px-6 py-2.5 bg-white text-zinc-950 hover:bg-zinc-200 text-xs font-bold uppercase tracking-wider transition-colors duration-200"
                >
                  Close Story
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
