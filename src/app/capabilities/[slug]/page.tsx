"use client";
import React, { use, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Plus,
  Minus,
  CheckCircle2,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SearchModal } from "@/components/SearchModal";
import { ContactModal } from "@/components/ContactModal";
import { BackToTop } from "@/components/BackToTop";
import { CapabilityHeroGraphic } from "@/components/CapabilityHeroGraphic";
import { PracticeModal } from "@/components/PracticeModal";
import {
  capabilitiesData,
  getCapabilityDetail,
  PracticeCard,
} from "@/data/capabilitiesData";

interface CapabilityPageProps {
  params: Promise<{ slug: string }>;
}

export default function CapabilityDetailPage({ params }: CapabilityPageProps) {
  const { slug } = use(params);
  const capability = getCapabilityDetail(slug);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isOverviewExpanded, setIsOverviewExpanded] = useState(false);
  const [selectedPractice, setSelectedPractice] = useState<PracticeCard | null>(null);
  const [activePracticeCardId, setActivePracticeCardId] = useState<string>(
    capability.practices[1]?.id || capability.practices[0]?.id
  );
  const [contactInitialService, setContactInitialService] = useState(
    capability.title
  );

  const handleOpenContactWithService = (serviceName: string) => {
    setContactInitialService(serviceName);
    setIsContactOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#242321] selection:bg-[#FD6E12] selection:text-white relative">
      {/* 
        ======================================================================
        01. GLOBAL NAVIGATION HEADER (Active on Capabilities tab)
        ======================================================================
      */}
      <Header
        activePage="capabilities"
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenContact={() => handleOpenContactWithService(capability.title)}
      />

      <main className="flex-1 w-full pt-[90px]">
        {/* 
          ======================================================================
          02. BREADCRUMBS BAR (Exact match to Screenshot 1: Home > Capabilities)
          ======================================================================
        */}
        <div className="bg-[#FAF8F5] border-b border-zinc-200/60 py-3">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center gap-2 text-xs font-medium text-zinc-500">
            <Link href="/" className="hover:text-[#FD6E12] transition-colors">
              Home
            </Link>
            <span className="text-zinc-400">›</span>
            <Link
              href="/capabilities"
              className="text-[#FD6E12] font-semibold hover:underline"
            >
              Capabilities
            </Link>
            <span className="text-zinc-400">›</span>
            <span className="text-zinc-800 font-semibold truncate">
              {capability.title}
            </span>
          </div>
        </div>

        {/* 
          ======================================================================
          03. HERO BANNER SECTION (Exact match to Screenshot 1)
          - Left: Title + Tagline ("Spearheading new paths.")
          - Background: Warm off-white/ivory with vertical pinstripe lines
          - Right: 3D Segmented Cylinder / Prism Geometry in Violet/Purple
          ======================================================================
        */}
        <section className="relative bg-[#F6F2EA] overflow-hidden border-b border-zinc-200/80 min-h-[380px] sm:min-h-[440px] lg:min-h-[490px] flex items-center">
          {/* Subtle Vertical Pinstripe Lines (Exact match to Screenshot 1) */}
          <div
            className="absolute inset-0 pointer-events-none opacity-45 z-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, rgba(36, 35, 33, 0.08) 0px, rgba(36, 35, 33, 0.08) 1px, transparent 1px, transparent 44px)",
            }}
          />

          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10 py-12 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Heading & Tagline */}
              <div className="lg:col-span-7 space-y-4 max-w-2xl">
                <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black font-heading tracking-tight text-[#01286D] leading-[1.08]">
                  {capability.title}
                </h1>
                <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed pt-1">
                  {capability.tagline}
                </p>

                <div className="pt-3">
                  <button
                    onClick={() => handleOpenContactWithService(capability.title)}
                    className="px-7 py-3.5 bg-[#FD6E12] hover:bg-[#e05e0c] text-white text-xs font-bold uppercase tracking-widest transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.02] cursor-pointer inline-flex items-center gap-2.5"
                  >
                    <span>TALK TO A PRACTICE LEADER</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Column: 3D Faceted Architectural Prism Graphic (Screenshot 1) */}
              <div className="lg:col-span-5 relative w-full flex items-center justify-center lg:justify-end">
                <CapabilityHeroGraphic
                  primaryColor={capability.gradientColors.primary}
                  secondaryColor={capability.gradientColors.secondary}
                  lightColor={capability.gradientColors.light}
                  deepColor={capability.gradientColors.deep}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          04. OVERVIEW SECTION (Exact match to Screenshot 1 & 2)
          - Left: Bold "Overview" heading
          - Right: Paragraphs + "MORE +" toggle expansion
          - Bottom: Large Metric Numbers (30k+, 25+, 45+) with red plus signs
          ======================================================================
        */}
        <section className="bg-[#FAF8F5] py-16 sm:py-20 lg:py-24 border-b border-zinc-200/80">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              {/* Left Column: Overview Header */}
              <div className="lg:col-span-4">
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black font-heading text-[#01286D] tracking-tight">
                  Overview
                </h2>
              </div>

              {/* Right Column: Narrative + MORE + Button */}
              <div className="lg:col-span-8 space-y-5 text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
                <p>{capability.overviewParagraph1}</p>
                <p>{capability.overviewParagraph2}</p>

                {isOverviewExpanded && (
                  <div className="pt-2 border-t border-zinc-200/80 text-zinc-600 space-y-4 animate-in fade-in duration-300">
                    <p>{capability.overviewExpanded}</p>
                  </div>
                )}

                {/* MORE + / LESS - Toggle Button (Exact match to Screenshot 1 & 2) */}
                <div className="pt-1">
                  <button
                    onClick={() => setIsOverviewExpanded(!isOverviewExpanded)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#01286D] hover:text-[#FD6E12] transition-colors cursor-pointer select-none"
                  >
                    <span>{isOverviewExpanded ? "LESS" : "MORE"}</span>
                    <span className="text-[#FD6E12] text-sm font-black">
                      {isOverviewExpanded ? "−" : "+"}
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* 
              ==================================================================
              IMPACT METRICS ROW (Exact match to Screenshot 2)
              e.g. 30k+ | 25+ | 45+
              ==================================================================
            */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 pt-16 sm:pt-20 mt-16 sm:mt-20 border-t border-zinc-200/80">
              {capability.metrics.map((metric, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-baseline text-4xl sm:text-5xl lg:text-[56px] font-black font-heading text-[#01286D] tracking-tight">
                    <span>{metric.value}</span>
                    {metric.suffix && (
                      <span className="text-[#FD6E12] ml-0.5 text-3xl sm:text-4xl lg:text-[46px] font-black">
                        {metric.suffix}
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-[13px] font-semibold text-zinc-600 uppercase tracking-wider">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          05. "OUR PRACTICES" SECTION (Exact match to Screenshot 2 & 3)
          - Background: #EFEAE1 (warm ivory/taupe)
          - Section Heading: "Our Practices"
          - 3-Column Grid of Crisp White Cards
          - Active card with red bottom border and red "LEARN MORE" text
          ======================================================================
        */}
        <section className="bg-[#EFEAE1] py-16 sm:py-20 lg:py-24 border-b border-zinc-200/80">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            {/* Section Header */}
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black font-heading text-[#01286D] tracking-tight">
                {capability.practicesTitle}
              </h2>
            </div>

            {/* 3-Column Grid of Practice Cards (Exact match to Screenshot 3) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {capability.practices.map((practice) => {
                const isActive = activePracticeCardId === practice.id;
                return (
                  <div
                    key={practice.id}
                    onMouseEnter={() => setActivePracticeCardId(practice.id)}
                    className={`bg-white p-8 sm:p-9 transition-all duration-300 flex flex-col justify-between group min-h-[310px] shadow-sm hover:shadow-xl ${
                      isActive
                        ? "border-b-4 border-[#FD6E12]"
                        : "border-b-4 border-transparent hover:border-[#FD6E12]"
                    }`}
                  >
                    <div>
                      {/* Practice Title */}
                      <h3 className="text-lg sm:text-xl font-bold font-heading text-[#242321] tracking-tight mb-4 group-hover:text-[#FD6E12] transition-colors">
                        {practice.title}
                      </h3>

                      {/* Practice Short Description */}
                      <p className="text-xs sm:text-[13px] text-zinc-600 font-normal leading-relaxed mb-6">
                        {practice.description}
                      </p>
                    </div>

                    {/* Bottom Action: "LEARN MORE" (Exact match to Screenshot 3) */}
                    <div className="pt-4 border-t border-zinc-100">
                      <button
                        onClick={() => setSelectedPractice(practice)}
                        className={`text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5 cursor-pointer select-none ${
                          isActive
                            ? "text-[#FD6E12]"
                            : "text-[#242321] group-hover:text-[#FD6E12]"
                        }`}
                      >
                        <span>LEARN MORE</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          06. CAPABILITY DIRECTORY SWITCHER (Explore Other Marketing Capabilities)
          ======================================================================
        */}
        <section className="bg-white py-14 sm:py-18 border-b border-zinc-200">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <span className="text-[11px] font-black uppercase tracking-widest text-[#FD6E12] block mb-1">
                  DIGITAL MARKETING ECOSYSTEM
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-heading text-[#01286D]">
                  Explore Other Capabilities
                </h3>
              </div>
              <Link
                href="/#capabilities"
                className="text-xs font-bold uppercase tracking-wider text-[#FD6E12] hover:underline inline-flex items-center gap-1"
              >
                <span>View Full Capabilities Matrix</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {Object.values(capabilitiesData)
                .filter((c) => c.slug !== capability.slug)
                .slice(0, 4)
                .map((c) => (
                  <Link
                    key={c.slug}
                    href={`/capabilities/${c.slug}`}
                    className="p-4 sm:p-5 bg-[#FAF8F5] hover:bg-white border border-zinc-200/80 hover:border-[#FD6E12] rounded-none transition-all duration-200 group flex flex-col justify-between shadow-xs hover:shadow-md"
                  >
                    <span className="text-xs sm:text-sm font-bold font-heading text-[#242321] group-hover:text-[#FD6E12] transition-colors leading-snug line-clamp-2">
                      {c.title}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 group-hover:text-[#FD6E12] transition-colors mt-3 inline-flex items-center gap-1">
                      <span>Explore</span>
                      <ChevronRight className="w-3 h-3" />
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          07. BOTTOM CTA SECTION
          ======================================================================
        */}
        <section className="bg-[#01286D] py-16 sm:py-20 text-white relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-6 text-center space-y-6 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading leading-tight tracking-tight">
              Ready to Accelerate With Our <br />
              <span className="text-[#FD6E12]">{capability.title}</span> Practice?
            </h2>
            <p className="text-sm sm:text-base text-blue-100/90 max-w-2xl mx-auto leading-relaxed">
              Partner with dedicated growth strategists and quantitative media engineers
              ready to turn your marketing budget into compounding market dominance.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => handleOpenContactWithService(capability.title)}
                className="px-8 py-3.5 bg-[#FD6E12] hover:bg-[#e05e0c] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-lg hover:scale-105 cursor-pointer"
              >
                SCHEDULE A PRACTICE CONSULTATION
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Practice Details Modal (Opened via LEARN MORE in Our Practices) */}
      <PracticeModal
        practice={selectedPractice}
        onClose={() => setSelectedPractice(null)}
        onInquire={(pTitle) => handleOpenContactWithService(`${capability.title} - ${pTitle}`)}
      />

      {/* Global Modals */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectResult={() => {}}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        initialService={contactInitialService}
      />

      <BackToTop />
    </div>
  );
}

