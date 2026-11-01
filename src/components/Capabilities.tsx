"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface CapabilityItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

const capabilitiesList: CapabilityItem[] = [
  {
    id: "ai",
    title: "Artificial Intelligence",
    description:
      "Transforming enterprise core operations with bespoke cognitive LLMs, autonomous agentic workflows, and real-time predictive analytics.",
    image: "/images/capabilities/ai.jpg",
  },
  {
    id: "cloud",
    title: "Cloud and Infrastructure Services",
    description:
      "Engineering resilient multi-cloud architectures, edge cloud distribution, and autonomous infrastructure management.",
    image: "/images/capabilities/cloud.jpg",
  },
  {
    id: "digital-apps",
    title: "Digital Enterprise Applications",
    description:
      "Modernizing core mission-critical ERP, CRM, and cloud-native business applications for compounding enterprise agility.",
    image: "/images/capabilities/digital-apps.jpg",
  },
  {
    id: "bps",
    title: "Business Process Services",
    description:
      "Reimagining enterprise operations with intelligent cognitive process automation, digital customer engagement, and analytics.",
    image: "/images/capabilities/bps.jpg",
  },
  {
    id: "engineering",
    title: "Engineering Services",
    description:
      "Accelerating embedded software development, IoT systems engineering, and smart connected product engineering.",
    image: "/images/capabilities/engineering.jpg",
  },
  {
    id: "consulting",
    title: "AdPulse Consulting",
    description:
      "Strategic digital transformation advisory, cloud modernization roadmaps, and business model reinvention.",
    image: "/images/capabilities/consulting.jpg",
  },
  {
    id: "experience",
    title: "Experience Services",
    description:
      "Crafting frictionless, data-driven omni-channel customer experiences and immersive digital product design.",
    image: "/images/capabilities/experience.jpg",
  },
  {
    id: "network",
    title: "Network Services",
    description:
      "Deploying next-generation 5G private networks, software-defined WAN, and hyper-connected telecom infrastructure.",
    image: "/images/capabilities/network.jpg",
  },
];

interface CapabilitiesProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const Capabilities: React.FC<CapabilitiesProps> = ({ onSelectService }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleItemClick = (title: string) => {
    if (onSelectService) {
      onSelectService(title);
    } else {
      const el = document.getElementById("contact-cta");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="capabilities"
      className="relative bg-[#55001f] text-white py-12 lg:py-16 overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* 
          ======================================================================
          01. SECTION HEADER: Exact match to reference screenshots
          ======================================================================
        */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8 lg:mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black font-heading tracking-tight text-white leading-none">
            Capabilities
          </h2>

          <p className="text-xs sm:text-[13px] text-zinc-300 font-normal leading-relaxed max-w-sm">
            We bring the solutions and platforms that actually move the needle. Better
            customer experiences. Real business outcomes. Transformation that happens
            at the pace your business demands.
          </p>
        </div>

        {/* 
          ======================================================================
          02. INTERACTIVE SINGLE-VIEW SHOWCASE: 8 Items + Dynamic Image
          Designed to fit cleanly in a single viewport without internal scrolling
          ======================================================================
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: 8 Capability Items */}
          <div className="lg:col-span-7 flex flex-col space-y-1 sm:space-y-1.5">
            {capabilitiesList.map((item, idx) => {
              const isActive = idx === activeIdx;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onClick={() => {
                    setActiveIdx(idx);
                    handleItemClick(item.title);
                  }}
                  className={`w-full text-left px-4 py-2.5 sm:py-3 transition-all duration-200 flex items-center justify-between cursor-pointer group ${
                    isActive
                      ? "bg-[#7c002c] text-white font-bold"
                      : "text-white/85 hover:text-white hover:bg-white/5 font-normal"
                  }`}
                >
                  <span className="text-sm sm:text-base lg:text-[17px] font-heading tracking-normal">
                    {item.title}
                  </span>

                  {/* Active Red Circular Arrow Button */}
                  {isActive && (
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#ED1B36] flex items-center justify-center text-white shrink-0 ml-3 shadow-sm transform transition-transform group-hover:translate-x-0.5">
                      <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Ultra-HD Showcase Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[460px] aspect-[482/458] overflow-hidden shadow-2xl bg-black">
              {capabilitiesList.map((item, idx) => {
                const isActive = idx === activeIdx;
                return (
                  <div
                    key={item.id}
                    className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
                      isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 460px"
                      unoptimized={true}
                      priority={idx === 0}
                      className="object-cover object-center"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
