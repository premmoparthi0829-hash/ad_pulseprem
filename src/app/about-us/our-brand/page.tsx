"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUp, Download, Check, Sparkles, Target, Zap, Shield, Plus, Minus } from "lucide-react";
import { Header } from "@/components/Header";
import { Careers } from "@/components/Careers";
import { Footer } from "@/components/Footer";
import { SearchModal } from "@/components/SearchModal";
import { ContactModal } from "@/components/ContactModal";
import { GetInTouchSection } from "@/components/GetInTouchSection";

interface BrandPillar {
  id: string;
  title: string;
  bgImage: string;
  description?: string;
  hasButton?: boolean;
  valuesList?: {
    name: string;
    desc: string;
  }[];
}

const brandPillars: BrandPillar[] = [
  {
    id: "purpose",
    title: "PURPOSE",
    bgImage: "/images/our-brand/brand-pillar-purpose.jpg",
    description:
      "Drive positive change in the lives of our communities. Only when we enable others to rise will we rise.",
  },
  {
    id: "promise",
    title: "PROMISE",
    bgImage: "/images/our-brand/brand-pillar-promise.jpg",
    description: "Scale At Speed.",
    hasButton: true,
  },
  {
    id: "mission",
    title: "MISSION",
    bgImage: "/images/our-brand/brand-pillar-mission.jpg",
    description:
      "We unlock transformative growth by building partnerships grounded in trust, human ingenuity, and an entrepreneurial spirit.",
  },
  {
    id: "values",
    title: "VALUES",
    bgImage: "/images/our-brand/brand-pillar-value.jpg",
    valuesList: [
      {
        name: "Integrity",
        desc: "It is the courage to uphold principles when no one is watching, and the conviction to choose honesty over convenience.",
      },
      {
        name: "Quality",
        desc: "It is about ensuring that every action, every product, and every experience reflects our promise to do things well.",
      },
      {
        name: "Care",
        desc: "It begins with dignity of our people, extends to respect for our customers, and finds its purpose in serving our communities.",
      },
    ],
  },
];

interface BrandProgram {
  id: string;
  title: string;
  image: string;
  linkText: string;
  href: string;
}

const brandPrograms: BrandProgram[] = [
  {
    id: "chess-league",
    title: "AdPulse Global Chess League",
    image: "/images/our-brand/adpulse-chess-league-hd.jpg",
    linkText: "Learn More",
    href: "https://globalchessleague.com/",
  },
  {
    id: "big-thinkers",
    title: "The BIG Thinkers",
    image: "/images/our-brand/brand-programs-thinkers.jpg",
    linkText: "Learn More",
    href: "#",
  },
  {
    id: "racing",
    title: "AdPulse Racing",
    image: "/images/our-brand/adpulse-racing-hd.jpg",
    linkText: "Learn More",
    href: "/scale-at-speed",
  },
  {
    id: "wef",
    title: "World Economic Forum Alliance",
    image: "/images/our-brand/brand-programs-wef.jpg",
    linkText: "Learn More",
    href: "/about-us",
  },
];

interface BrandHighlight {
  id: string;
  tag: string;
  tagType: "view" | "press" | "event";
  title: string;
  image: string;
  href: string;
}

const brandHighlights: BrandHighlight[] = [
  {
    id: "highlight-1",
    tag: "View",
    tagType: "view",
    title: "Powering Sustainable Performance with Predictive Analytics",
    image: "/images/our-brand/adpulse-racing-hd.jpg",
    href: "/scale-at-speed",
  },
  {
    id: "highlight-2",
    tag: "Press Release",
    tagType: "press",
    title: "Being Among Top 10 Global IT Services Brands in Annual Brand Finance Ranking",
    image: "/images/our-brand/brand-highlights-2.jpg",
    href: "/about-us",
  },
  {
    id: "highlight-3",
    tag: "Events",
    tagType: "event",
    title: "Shaping Conversations at the World Economic Forum 2025, Davos",
    image: "/images/our-brand/brand-programs-wef.jpg",
    href: "/about-us",
  },
  {
    id: "highlight-4",
    tag: "Press Release",
    tagType: "press",
    title: "AdPulse Expands Next-Gen AI & Tech Innovation Across Global Markets",
    image: "/images/our-brand/brand-highlights-4.jpg",
    href: "/capabilities",
  },
  {
    id: "highlight-5",
    tag: "View",
    tagType: "view",
    title: "Enterprise AI Adoption Index: Navigating Scaled Digital Transformation",
    image: "/images/our-brand/brand-highlights-5.jpg",
    href: "/insights",
  },
  {
    id: "highlight-6",
    tag: "View",
    tagType: "view",
    title: "Accelerating Innovation: Engineering the Next Wave of Enterprise Mobility",
    image: "/images/our-brand/brand-programs-thinkers.jpg",
    href: "/insights",
  },
];

export default function OurBrandPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  // Default active tab: index 3 (VALUES) - exact match to user screenshot media_1793578244370_b3e23cc8.jpg
  const [activePillar, setActivePillar] = useState<number>(3);
  const [highlightIndex, setHighlightIndex] = useState<number>(0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrevHighlight = () => {
    setHighlightIndex((prev) => (prev > 0 ? prev - 1 : Math.max(0, brandHighlights.length - 4)));
  };

  const handleNextHighlight = () => {
    setHighlightIndex((prev) => (prev + 1 <= brandHighlights.length - 4 ? prev + 1 : 0));
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#242321] selection:bg-[#FD6E12] selection:text-white relative">
      {/* 00. Global Sticky Header */}
      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <main className="flex-1 w-full overflow-hidden pt-[90px]">
        {/* 
          ======================================================================
          HERO BANNER: Our Brand & 3D Brand Prism Shape
          (Exact 1:1 match to user screenshot media_1793576309257_42790d7b.png)
          ======================================================================
        */}
        <section className="relative bg-[#F6F2EA] border-b border-[#E5DFD3] min-h-[420px] sm:min-h-[460px] lg:min-h-[490px] flex flex-col justify-between overflow-hidden">
          {/* Subtle vertical architectural pinstripes pattern (exact 44px spacing) */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-40 z-0 bg-repeat bg-top"
            style={{ backgroundImage: "url('/images/our-brand/banner-pattern.svg')" }}
          />

          {/* Ground shadow plane gradient matching live site & user screenshot */}
          <div 
            className="absolute inset-0 pointer-events-none z-[1]"
            style={{
              background: "linear-gradient(160deg, rgba(255, 255, 255, 0) 50%, #e5dfd3 50%)",
              bottom: "-40px"
            }}
          />

          {/* Breadcrumbs inside the banner at top-left */}
          <div className="w-full relative z-20 pt-6 sm:pt-8 pb-2">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center gap-2 text-xs sm:text-[13px] font-semibold">
              <Link href="/" className="text-zinc-800 hover:text-black transition-colors">
                Home
              </Link>
              <span className="text-zinc-400 font-normal">&gt;</span>
              <span className="text-[#FD6E12] font-bold">About Us</span>
            </div>
          </div>

          {/* Banner Content Container */}
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full py-6 sm:py-10 lg:py-12 relative z-20 flex-1 flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
              {/* Left Column: Heading & Intro Paragraph */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                <h1 className="text-5xl sm:text-6xl lg:text-[62px] font-extrabold font-heading text-[#111827] tracking-tight leading-[1.08]">
                  Our Brand
                </h1>

                <p className="text-[17px] sm:text-[18px] lg:text-[18.5px] text-zinc-700 font-normal leading-[1.65] max-w-[560px]">
                  We thrive on change. Not change for its own sake but change that pairs technology with human insight to create experiences that matter and last.
                </p>
              </div>

              {/* Right Column Spacer for Grid (Desktop) */}
              <div className="hidden lg:block lg:col-span-5 min-h-[280px]" />
            </div>
          </div>

          {/* 
            Desktop: Edge-to-edge Floating 3D Prism Graphic
            (Exact skewY(-20deg) / skewY(20deg) composition matching user screenshot)
          */}
          <div className="hidden lg:block absolute top-0 bottom-0 right-0 w-[42vw] max-w-[850px] z-10 pointer-events-none">
            <div 
              className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden"
              style={{
                transform: "skewY(-20deg)",
              }}
            >
              <div 
                className="absolute inset-0 w-full h-[160%] -top-[30%]"
                style={{
                  transform: "skewY(20deg)",
                }}
              >
                <video
                  src="/videos/our-brand/brand-refresh_banner.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover object-center filter contrast-[1.05]"
                />
              </div>
            </div>
          </div>

          {/* Mobile / Tablet fallback */}
          <div className="lg:hidden w-full relative z-10 px-6 pb-8">
            <div 
              className="relative w-full h-[220px] sm:h-[260px] overflow-hidden shadow-xl"
              style={{
                transform: "skewY(-12deg)",
              }}
            >
              <div 
                className="w-full h-[140%] -top-[20%] relative"
                style={{
                  transform: "skewY(12deg)",
                }}
              >
                <video
                  src="/videos/our-brand/brand-refresh_banner.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          03. SECTION 02: WHO WE ARE (Midnight Navy Blue Two-Column Narrative)
          (Exact match to user screenshot)
          ======================================================================
        */}
        <section className="relative bg-[#060B1E] text-white py-20 sm:py-24 border-b border-white/10 overflow-hidden">
          {/* Subtle diagonal pinstripes texture */}
          <div className="absolute inset-0 pointer-events-none opacity-15 z-0">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="navy-stripes"
                  width="40"
                  height="40"
                  patternTransform="rotate(45 0 0)"
                  patternUnits="userSpaceOnUse"
                >
                  <line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="40"
                    stroke="#FFFFFF"
                    strokeWidth="0.8"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#navy-stripes)" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-black font-heading text-white tracking-tight mb-10 sm:mb-14">
              Who We Are
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
              {/* Left Column Narrative */}
              <div className="space-y-6 text-zinc-300 text-base sm:text-[17px] leading-relaxed font-normal">
                <p>
                  Born from bold entrepreneurial spirit, backed by the trust of AdPulse Digital, we deliver solutions that scale, not just for today&apos;s challenges, but for whatever comes next. With expertise across industries and a global presence, we&apos;re here to unlock transformative growth for our clients.
                </p>
                <p>
                  Together, we play at the center of the board, where possibilities are endless, and the rewards are the greatest – daring to question every assumption, every move, every gambit.
                </p>
              </div>

              {/* Right Column Narrative */}
              <div className="space-y-6 text-zinc-300 text-base sm:text-[17px] leading-relaxed font-normal">
                <p>
                  Because at AdPulse Digital, it&apos;s not just about doing more. It&apos;s about moving smarter, acting faster, and rising above.
                </p>
                <div className="pt-2">
                  <p className="text-zinc-200 text-base sm:text-lg">
                    This is our pursuit of what&apos;s better.
                  </p>
                  <p className="text-white text-xl sm:text-2xl font-black font-heading mt-2">
                    Our promise, <span className="text-[#FF5B00]">Scale at Speed™</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          03. VISION & MISSION PILLARS (Interactive Horizontal Accordion)
          (Exact visual match to user screenshot media_1793578244370_b3e23cc8.jpg)
          ======================================================================
        */}
        <section 
          className="relative h-[620px] lg:h-[680px] w-full text-white overflow-hidden bg-cover bg-center transition-all duration-700 ease-in-out select-none"
          style={{
            backgroundImage: `url('${brandPillars[activePillar].bgImage}')`,
          }}
        >
          {/* Dark Contrast Overlay */}
          <div className="absolute inset-0 bg-black/45 pointer-events-none z-0" />

          {/* Desktop: Horizontal Accordion Tabs */}
          <div className="hidden lg:flex max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-full relative z-10">
            <div className="flex flex-row w-full h-full items-stretch" role="tablist">
              {brandPillars.map((pillar, index) => {
                const isActive = activePillar === index;
                return (
                  <div
                    key={pillar.id}
                    onClick={() => setActivePillar(index)}
                    role="tab"
                    aria-selected={isActive}
                    tabIndex={0}
                    className={`h-full cursor-pointer flex flex-col justify-center transition-all duration-500 ease-in-out border-r border-white/25 last:border-r-0 relative group ${
                      isActive
                        ? "flex-[3.5] bg-black/25 backdrop-blur-[4px] px-10 xl:px-14"
                        : "flex-1 hover:bg-white/5 px-6 xl:px-8"
                    }`}
                  >
                    {/* Collapsed State: Vertical centered title */}
                    {!isActive && (
                      <div className="flex flex-col items-center justify-center h-full text-center">
                        <h3 className="text-xl xl:text-2xl font-bold uppercase tracking-widest text-white/90 group-hover:text-white transition-colors">
                          {pillar.title}
                        </h3>
                      </div>
                    )}

                    {/* Active State: Full expanded content */}
                    {isActive && (
                      <div className="space-y-6 max-w-xl animate-fadeIn">
                        <h3 className="text-3xl xl:text-4xl font-extrabold font-heading text-white tracking-wide uppercase">
                          {pillar.title}
                        </h3>

                        {pillar.description && (
                          <p className="text-xl xl:text-2xl text-white font-normal leading-relaxed">
                            {pillar.description}
                          </p>
                        )}

                        {/* Values List with square bullets */}
                        {pillar.valuesList && (
                          <div className="space-y-6 pt-2">
                            {pillar.valuesList.map((val, vIdx) => (
                              <div key={vIdx} className="space-y-1.5">
                                <div className="flex items-center gap-2.5">
                                  <span className="w-1.5 h-1.5 bg-[#FFB3AB] inline-block shrink-0" />
                                  <h4 className="text-xl xl:text-2xl font-semibold text-white">
                                    {val.name}
                                  </h4>
                                </div>
                                <p className="text-sm xl:text-base text-white/90 font-normal leading-relaxed pl-4">
                                  {val.desc}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Promise Button */}
                        {pillar.hasButton && (
                          <div className="pt-4">
                            <Link href="/scale-at-speed">
                              <button className="px-8 py-3.5 bg-[#FD6E12] hover:bg-[#e05e0c] text-white text-xs font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer shadow-lg">
                                KNOW MORE
                              </button>
                            </Link>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile / Tablet: Vertical Accordion */}
          <div className="lg:hidden flex flex-col justify-center h-full px-6 py-12 relative z-10 space-y-4">
            {brandPillars.map((pillar, index) => {
              const isActive = activePillar === index;
              return (
                <div
                  key={pillar.id}
                  onClick={() => setActivePillar(index)}
                  className={`border border-white/20 rounded-none overflow-hidden transition-all duration-300 ${
                    isActive ? "bg-black/50 backdrop-blur-md" : "bg-black/30"
                  }`}
                >
                  <div className="p-4 flex items-center justify-between cursor-pointer">
                    <h3 className="text-lg font-bold uppercase tracking-wider text-white">
                      {pillar.title}
                    </h3>
                    <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white">
                      {isActive ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>

                  {isActive && (
                    <div className="px-5 pb-6 pt-2 space-y-4 text-white/95 border-t border-white/10">
                      {pillar.description && (
                        <p className="text-sm sm:text-base leading-relaxed">
                          {pillar.description}
                        </p>
                      )}

                      {pillar.valuesList && (
                        <div className="space-y-4 pt-1">
                          {pillar.valuesList.map((val, vIdx) => (
                            <div key={vIdx} className="space-y-1">
                              <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-[#FFB3AB] inline-block" />
                                <h4 className="text-base font-semibold text-white">
                                  {val.name}
                                </h4>
                              </div>
                              <p className="text-xs sm:text-sm text-zinc-200 pl-3.5 leading-relaxed">
                                {val.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {pillar.hasButton && (
                        <div className="pt-2">
                          <Link href="/scale-at-speed">
                            <button className="px-6 py-2.5 bg-[#FD6E12] text-white text-xs font-bold uppercase tracking-wider">
                              KNOW MORE
                            </button>
                          </Link>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 
          ======================================================================
          04. BRAND PROGRAMS SECTION (Cream Background & 4 Showcase Cards)
          (Exact visual match to user screenshot media_1793578337419_624709ea.jpg)
          ======================================================================
        */}
        <section className="bg-[#F6F2EA] py-20 sm:py-24 border-b border-[#E5DFD3]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            {/* Header Row: Title on Left, Narrative on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-12 sm:mb-16">
              <div className="lg:col-span-5">
                <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold font-heading text-[#01286D] tracking-tight leading-tight">
                  Brand Programs
                </h2>
              </div>
              <div className="lg:col-span-7">
                <p className="text-base sm:text-lg text-zinc-700 font-normal leading-relaxed">
                  Purpose drives us. People power us. Performance proves us. We help enterprises transform at the speed their ambitions demand. Through partnerships with WSJ, AdPulse Racing, and the World Economic Forum, we&apos;re creating platforms that don&apos;t just inform but inspire our customers and stakeholders to{" "}
                  <Link href="/scale-at-speed" className="underline font-medium text-black hover:text-[#FD6E12] transition-colors">
                    Rise
                  </Link>
                  .
                </p>
              </div>
            </div>

            {/* 4 Brand Program Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {brandPrograms.map((program) => (
                <div
                  key={program.id}
                  className="group relative aspect-[3/4] sm:aspect-[10/13] overflow-hidden rounded-none shadow-md bg-zinc-900 cursor-pointer"
                >
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    unoptimized={true}
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                  />
                  {/* Subtle Dark Gradient at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

                  {/* Bottom Title */}
                  <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
                    <h3 className="text-lg sm:text-xl font-bold font-heading text-white tracking-tight leading-snug group-hover:text-rose-200 transition-colors">
                      {program.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          05. BRAND HIGHLIGHTS SECTION (Carousel with Navigation Arrows)
          (Exact visual match to user screenshot media_1793578337419_624709ea.jpg)
          ======================================================================
        */}
        <section className="bg-[#F6F2EA] py-20 sm:py-24 border-b border-[#E5DFD3]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            {/* Header with Navigation Controls */}
            <div className="flex items-center justify-between mb-10 sm:mb-12">
              <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold font-heading text-[#01286D] tracking-tight">
                Brand Highlights
              </h2>

              {/* Slider Arrows */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrevHighlight}
                  aria-label="Previous Highlight"
                  className="w-12 h-9 rounded-full bg-[#01286D] hover:bg-[#FD6E12] text-white flex items-center justify-center transition-colors duration-200 cursor-pointer shadow-sm"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextHighlight}
                  aria-label="Next Highlight"
                  className="w-12 h-9 rounded-full bg-[#01286D] hover:bg-[#FD6E12] text-white flex items-center justify-center transition-colors duration-200 cursor-pointer shadow-sm"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Highlights Carousel Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {brandHighlights
                .slice(highlightIndex, highlightIndex + 4)
                .map((item) => (
                  <div
                    key={item.id}
                    className="group flex flex-col justify-between bg-transparent overflow-hidden cursor-pointer"
                  >
                    {/* Image Box with Tag */}
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-900 shadow-sm">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        unoptimized={true}
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Tag Badge */}
                      <div className="absolute top-3 left-3 z-10">
                        <span
                          className={`inline-block px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-sm ${
                            item.tagType === "event"
                              ? "bg-[#01286D]"
                              : "bg-black/70 backdrop-blur-sm"
                          }`}
                        >
                          {item.tag}
                        </span>
                      </div>
                    </div>

                    {/* Title & Read More Link */}
                    <div className="pt-4 space-y-2 flex-1 flex flex-col justify-between">
                      <h3 className="text-base sm:text-[17px] font-bold text-[#111827] group-hover:text-[#FD6E12] transition-colors leading-snug line-clamp-3">
                        {item.title}
                      </h3>
                      <div className="pt-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#FD6E12] group-hover:underline inline-flex items-center gap-1">
                          <span>Read More</span>
                          <span>→</span>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          06. SECTION 05: OUR BRAND KIT (Downloadable Assets & Guidelines)
          ======================================================================
        */}
        <section className="bg-[#FAF8F5] py-20 sm:py-24 border-b border-zinc-200/80">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-12 sm:mb-16">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-[#FD6E12] block mb-2 font-heading">
                ASSETS &amp; GUIDELINES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black font-heading text-[#01286D] tracking-tight">
                Our Brand Kit
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 mt-3 leading-relaxed">
                Everything you need to bring the AdPulse Digital brand to life. Download official high-resolution logo marks, color specifications, and typography assets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Asset 1: Light Logo Master */}
              <div className="p-8 bg-white border border-zinc-200 space-y-5 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="h-14 flex items-center mb-4">
                    <Image
                      src="/images/logo/adpulse-logo-ultra-hd-light.png"
                      alt="AdPulse Logo Light"
                      width={180}
                      height={50}
                      unoptimized={true}
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                  <h3 className="text-base font-bold font-heading text-zinc-900">
                    Official Light Logo (Ultra HD)
                  </h3>
                  <p className="text-xs text-zinc-500 leading-relaxed mt-1">
                    Transparent 2150x650 PNG with vibrant orange gradient and deep navy typography for light backgrounds.
                  </p>
                </div>
                <a
                  href="/images/logo/adpulse-logo-ultra-hd-light.png"
                  download="adpulse-logo-light.png"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FD6E12] hover:text-[#e05e0c] pt-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Asset</span>
                </a>
              </div>

              {/* Asset 2: Dark Logo Master */}
              <div className="p-8 bg-zinc-900 text-white border border-zinc-800 space-y-5 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="h-14 flex items-center mb-4">
                    <Image
                      src="/images/logo/adpulse-logo-ultra-hd-dark.png"
                      alt="AdPulse Logo Dark"
                      width={180}
                      height={50}
                      unoptimized={true}
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                  <h3 className="text-base font-bold font-heading text-white">
                    Official Dark Logo (Ultra HD)
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mt-1">
                    Transparent PNG with vibrant orange icon and crisp white wordmark for dark enterprise palettes.
                  </p>
                </div>
                <a
                  href="/images/logo/adpulse-logo-ultra-hd-dark.png"
                  download="adpulse-logo-dark.png"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FD6E12] hover:text-white pt-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Asset</span>
                </a>
              </div>

              {/* Asset 3: Color Palette Specs */}
              <div className="p-8 bg-white border border-zinc-200 space-y-5 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex gap-3 mb-4">
                    <div className="h-14 w-24 rounded bg-[#FD6E12] shadow-sm flex flex-col items-center justify-center text-white font-bold p-1">
                      <span className="text-[11px]">#FD6E12</span>
                      <span className="text-[9px] font-normal opacity-90">Orange</span>
                    </div>
                    <div className="h-14 w-24 rounded bg-[#01286D] shadow-sm flex flex-col items-center justify-center text-white font-bold p-1">
                      <span className="text-[11px]">#01286D</span>
                      <span className="text-[9px] font-normal opacity-90">Dark Blue</span>
                    </div>
                  </div>
                  <h3 className="text-base font-bold font-heading text-[#01286D]">
                    Official Palette Guidelines
                  </h3>
                  <div className="text-xs text-zinc-600 leading-relaxed mt-2 space-y-1">
                    <p><strong className="text-[#FD6E12]">Primary Orange (#FD6E12, RGB 253, 110, 18):</strong> Highlights, buttons, icons, and important text.</p>
                    <p><strong className="text-[#01286D]">Primary Blue (#01286D, RGB 1, 40, 109):</strong> Headings, logo text, backgrounds, and professional branding.</p>
                  </div>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 pt-2 flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Brand Standards Certified</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          07. SECTION 06: CAREERS & CULTURE (Limitless Together)
          ======================================================================
        */}
        <Careers onOpenCareers={() => { window.location.href = "/careers"; }} />

        {/* 
          ======================================================================
          08. SECTION 07: GET IN TOUCH
          ======================================================================
        */}
        <GetInTouchSection industryTitle="AdPulse Brand & Global Initiatives" />
      </main>

      {/* Floating Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-zinc-800/80 hover:bg-[#FD6E12] text-white flex items-center justify-center transition-all duration-200 shadow-lg backdrop-blur-sm cursor-pointer"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* 08. Global Footer */}
      <Footer />

      {/* 09. Global Interactive Modals */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        initialService="Brand Partnership & Enterprise Growth"
      />
    </div>
  );
}

