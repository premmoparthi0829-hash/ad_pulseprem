"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Play, ExternalLink, X, CheckCircle2 } from "lucide-react";

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
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [selectedStory, setSelectedStory] = useState<StoryCard | null>(null);

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
      image: "/images/success-stories/card-1-indian-cio.jpg",
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
      image: "/images/success-stories/card-2-racecar.jpg",
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
      image: "/images/success-stories/card-3-deepesh.jpg",
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
      image: "/images/success-stories/card-4-jeetu.jpg",
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

  // Set 2: Extended Enterprise Transformation Stories
  const page2Stories: StoryCard[] = [
    {
      id: "story-5",
      badge: "CASE STUDY",
      type: "interview",
      headline:
        "Autonomous Cloud FinOps: Driving 40% Infrastructure Efficiency for Tier-1 Banking Networks",
      authorName: "Arjun Nair",
      authorRole: "Chief Technology Officer, Axis Capital",
      image: "/images/success-stories/card-1-indian-cio.jpg",
      quote:
        "AdPulse Digital's automated workload re-architecting transformed our multi-cloud deployment into a lean, self-healing core.",
      metrics: [
        { label: "OpEx Reduction", value: "42%" },
        { label: "Transaction Latency", value: "<4ms" },
      ],
      summary:
        "A full-scale modernization of legacy core banking engines into resilient Kubernetes microservices across AWS, Azure, and on-premises sovereign datacenters.",
    },
    {
      id: "story-6",
      badge: "CASE STUDY",
      type: "split-burgundy",
      headline: "Scalable 5G Edge Infrastructure with AdPulse Apex",
      burgundyTitle: "Scalable 5G Edge Infrastructure with AdPulse Apex",
      image: "/images/success-stories/card-2-racecar.jpg",
      metrics: [
        { label: "Edge Throughput", value: "100 Gbps" },
        { label: "Latency", value: "Sub-1ms" },
      ],
      summary:
        "Deploying distributed micro-datacenters at cell towers to power real-time autonomous robotics and connected vehicle V2X communications.",
    },
    {
      id: "story-7",
      badge: "VIDEO",
      type: "video",
      headline:
        "Engineering India's Smart Supply Chain: Real-Time Predictive Logistics at Scale",
      authorName: "Vikram Malhotra",
      authorRole: "Executive Director, Titan Logistics",
      image: "/images/success-stories/card-3-deepesh.jpg",
      quote:
        "Dynamic routing and automated load balancing saved millions of liters of fuel while improving delivery accuracy to 99.4%.",
      metrics: [
        { label: "Delivery Precision", value: "99.4%" },
        { label: "Emissions Cut", value: "-28%" },
      ],
      summary:
        "Implementing an IoT sensor mesh and digital twin engine across 15,000 inter-state freight carriers in high-density corridors.",
    },
    {
      id: "story-8",
      type: "interview",
      headline:
        "Zero-Trust Cyber Resilience for Critical Infrastructure and Distributed Power Grids",
      authorName: "Kavita Ramachandran",
      authorRole: "Global Chief Information Security Officer, PowerGrid Corp",
      image: "/images/success-stories/card-4-jeetu.jpg",
      quote:
        "Real-time behavioural telemetry enables us to isolate rogue firmware anomalies before they can propagate to regional substations.",
      metrics: [
        { label: "Detection Speed", value: "Real-Time" },
        { label: "Threat Neutralization", value: "100%" },
      ],
      summary:
        "Protecting high-voltage national electrical transmission networks against state-sponsored APTs using quantum-safe cryptographic envelopes.",
    },
  ];

  const storySets = [page1Stories, page2Stories];
  const activeStories = storySets[currentPage];

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? storySets.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === storySets.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="success-stories"
      className="py-16 sm:py-20 lg:py-24 bg-white border-b border-zinc-100 select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* 
          ======================================================================
          SECTION HEADER WITH CAPSULE NAV ARROWS (Exact match to screenshot)
          ======================================================================
        */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-6">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-zinc-900 tracking-tight">
              Success Stories
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed max-w-xl">
              See how we partner with global enterprises to solve challenges, accelerate transformation, and deliver measurable outcomes.
            </p>
          </div>

          {/* Capsule Previous / Next Nav Buttons (Exact match to screenshot) */}
          <div className="flex items-center gap-2.5 shrink-0 self-start md:self-auto">
            <button
              onClick={handlePrev}
              aria-label="Previous stories"
              className="w-12 sm:w-14 h-9 rounded-full bg-[#242321] hover:bg-[#ED1B36] active:scale-95 text-white flex items-center justify-center transition-all duration-200 shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next stories"
              className="w-12 sm:w-14 h-9 rounded-full bg-[#242321] hover:bg-[#ED1B36] active:scale-95 text-white flex items-center justify-center transition-all duration-200 shadow-sm"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 
          ======================================================================
          SINGLE VIEW TYPE: 4 CARDS SIDE-BY-SIDE ON DESKTOP (Exact Screenshot)
          ======================================================================
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {activeStories.map((story) => {
            // Card 2: Split Racecar + Solid Burgundy Block
            if (story.type === "split-burgundy") {
              return (
                <div
                  key={story.id}
                  onClick={() => setSelectedStory(story)}
                  className="group relative flex flex-col h-[460px] sm:h-[480px] lg:h-[490px] rounded-none overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-300 border border-zinc-200/90 bg-[#650025]"
                >
                  {/* Top Portion (~58%): Ultra-HD Racing Hypercar on track */}
                  <div className="relative h-[260px] sm:h-[280px] w-full overflow-hidden bg-zinc-950 shrink-0">
                    <Image
                      src={story.image}
                      alt={story.headline}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      priority
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {/* Dark gradient at bottom edge of image to meet burgundy block */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/40 pointer-events-none" />

                    {/* CASE STUDY Tag Badge */}
                    <div className="absolute top-4 left-4 z-10 px-2.5 py-1 bg-black/65 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-wider">
                      {story.badge}
                    </div>
                  </div>

                  {/* Bottom Portion (~42%): Solid Deep Burgundy Block (Exact match to screenshot) */}
                  <div className="flex-1 bg-[#650025] group-hover:bg-[#52001e] transition-colors duration-300 p-5 sm:p-6 flex flex-col justify-end text-white">
                    <h3 className="text-lg sm:text-xl font-bold font-heading text-white leading-snug">
                      {story.burgundyTitle}
                    </h3>
                  </div>
                </div>
              );
            }

            // Cards 1, 3, 4: Full Background Portrait Photos (Ultra-HD Indian Executives)
            return (
              <div
                key={story.id}
                onClick={() => setSelectedStory(story)}
                className="group relative h-[460px] sm:h-[480px] lg:h-[490px] rounded-none overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-300 border border-zinc-200/90 bg-zinc-950"
              >
                {/* Full Background Ultra-HD Photo */}
                <Image
                  src={story.image}
                  alt={story.headline}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  priority
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.92]"
                />

                {/* Dark Vignette Gradient for Perfect Typography Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/15 group-hover:via-black/65 transition-colors duration-300" />

                {/* Top Badge (e.g. VIDEO) */}
                {story.badge && (
                  <div className="absolute top-4 left-4 z-10 px-2.5 py-1 bg-black/65 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-wider">
                    {story.badge}
                  </div>
                )}

                {/* Card Content Anchored at Bottom (Exact match to screenshot) */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10 space-y-3.5">
                  {/* Headline */}
                  <h3 className="text-[12.5px] sm:text-[13px] font-normal text-white leading-relaxed line-clamp-4">
                    {story.headline}
                  </h3>

                  {/* Author / Client Info & Circular Action Icon */}
                  <div className="pt-2.5 flex items-end justify-between border-t border-white/20">
                    <div className="min-w-0 pr-2">
                      <h4 className="text-sm font-bold font-heading text-white truncate">
                        {story.authorName}
                      </h4>
                      <p className="text-[11px] text-zinc-300 mt-0.5 line-clamp-1 leading-tight">
                        {story.authorRole}
                      </p>
                    </div>

                    {/* Circular Action Button on Bottom-Right */}
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
