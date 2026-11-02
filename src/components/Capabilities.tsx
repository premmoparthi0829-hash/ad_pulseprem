"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

interface CapabilityItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

const capabilitiesList: CapabilityItem[] = [
  {
    id: "performance-marketing",
    title: "Performance Marketing & Paid Media",
    description:
      "Algorithmic paid search, Meta, LinkedIn, and programmatic DSP campaigns engineered to maximize ROAS and customer acquisition velocity.",
    image: "/images/capabilities/digital-apps.jpg",
  },
  {
    id: "seo",
    title: "Search Engine Optimization (SEO & AI GEO)",
    description:
      "Technical SEO architecture, generative AI search optimization, semantic content clusters, and high-authority link networks.",
    image: "/images/capabilities/experience.jpg",
  },
  {
    id: "social-media",
    title: "Social Media & Creator Strategy",
    description:
      "Viral social storytelling, influencer ecosystems, executive personal branding, and high-engagement multi-channel community management.",
    image: "/images/capabilities/cloud.jpg",
  },
  {
    id: "content-marketing",
    title: "Content Strategy & Copywriting",
    description:
      "Compelling brand narratives, high-converting direct response copy, editorial whitepapers, and thought-leadership video assets.",
    image: "/images/capabilities/consulting.jpg",
  },
  {
    id: "cro",
    title: "Conversion Rate Optimization (CRO)",
    description:
      "Systematic multivariate A/B testing, user journey heatmapping, and high-converting landing page experiences that eliminate bounce.",
    image: "/images/capabilities/bps.jpg",
  },
  {
    id: "ai-automation",
    title: "AI Marketing Automation & CRM",
    description:
      "Intelligent lifecycle email funnels, predictive churn scoring, lead scoring algorithms, and autonomous multi-touch nurture workflows.",
    image: "/images/capabilities/ai.jpg",
  },
  {
    id: "brand-design",
    title: "Brand Identity & Ad Creative Design",
    description:
      "Magnetic brand positioning, 3D motion design, high-converting ad visuals, and comprehensive corporate design systems.",
    image: "/images/capabilities/engineering.jpg",
  },
  {
    id: "web-growth",
    title: "E-Commerce & Web Growth Engineering",
    description:
      "Ultra-fast headless storefronts, pixel tracking architectures, server-side CAPI attribution, and conversion-optimized web platforms.",
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
      className="relative bg-[#01286D] text-white py-12 lg:py-16 overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* 
          ======================================================================
          01. SECTION HEADER: Exact match to reference screenshots
          ======================================================================
        */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8 lg:mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black font-heading tracking-tight text-white leading-none">
              Digital Marketing Capabilities
            </h2>
            <Link
              href="/capabilities"
              className="text-xs font-bold uppercase tracking-wider text-orange-200 hover:text-[#FD6E12] mt-2 inline-flex items-center gap-1 group"
            >
              <span>Explore All 8 Practice Portals</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <p className="text-xs sm:text-[13px] text-zinc-300 font-normal leading-relaxed max-w-sm">
            We deliver full-funnel digital marketing solutions that reliably move the needle:
            higher ROAS, organic search dominance, viral social engagement, and compounding
            customer lifetime value.
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
                  className={`w-full text-left px-4 py-2.5 sm:py-3 transition-all duration-200 flex items-center justify-between cursor-pointer group ${
                    isActive
                      ? "bg-[#011E52] text-white font-bold"
                      : "text-white/85 hover:text-white hover:bg-white/5 font-normal"
                  }`}
                >
                  <Link
                    href={`/capabilities/${item.id}`}
                    className="flex-1 text-sm sm:text-base lg:text-[17px] font-heading tracking-normal hover:underline"
                  >
                    {item.title}
                  </Link>

                  {/* Active Link Button to Practice Page */}
                  <Link
                    href={`/capabilities/${item.id}`}
                    aria-label={`Explore ${item.title}`}
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-white shrink-0 ml-3 shadow-sm transform transition-transform group-hover:scale-110 ${
                      isActive ? "bg-[#FD6E12]" : "bg-white/20 group-hover:bg-[#FD6E12]"
                    }`}
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Ultra-HD Showcase Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[460px] aspect-[482/458] overflow-hidden shadow-2xl bg-black group">
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

                    {/* Gradient Overlay with Interactive Button */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 via-55% to-transparent flex flex-col justify-end p-6 sm:p-7 space-y-3">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#FD6E12] block mb-1">
                          SPECIALIZED PRACTICE
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black font-heading text-white leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-xs text-zinc-300 line-clamp-2 mt-1.5 font-normal">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-1">
                        <Link
                          href={`/capabilities/${item.id}`}
                          className="px-5 py-2.5 bg-[#FD6E12] hover:bg-[#e05e0c] text-white text-xs font-bold uppercase tracking-widest transition-all duration-200 inline-flex items-center gap-2 shadow-md cursor-pointer"
                        >
                          <span>EXPLORE PRACTICE</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
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
