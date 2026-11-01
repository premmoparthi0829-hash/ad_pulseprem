"use client";
import React, { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Plus,
  Minus,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SearchModal } from "@/components/SearchModal";
import { ContactModal } from "@/components/ContactModal";
import { BackToTop } from "@/components/BackToTop";
import { PartnerLogos } from "@/components/PartnerLogos";
import { GetInTouchSection } from "@/components/GetInTouchSection";
import { getIndustryDetail } from "@/data/industryDetails";

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

export default function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = use(params);
  const industry = getIndustryDetail(slug);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isEditorialExpanded, setIsEditorialExpanded] = useState(false);
  const [activeSubIndustry, setActiveSubIndustry] = useState<string>("advertising");

  const scrollToContact = () => {
    const el = document.getElementById("contact-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      setIsContactOpen(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#242321] selection:bg-[#ED1B36] selection:text-white relative">
      {/* 
        ======================================================================
        01. GLOBAL NAVIGATION HEADER (Active on INDUSTRIES tab)
        ======================================================================
      */}
      <Header
        activePage="industries"
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <main className="flex-1 w-full pt-[72px] sm:pt-[80px]">
        {/* 
          ======================================================================
          02. BREADCRUMBS BAR
          ======================================================================
        */}
        <div className="bg-[#FAF8F5] border-b border-zinc-200/60 py-3">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center gap-2 text-xs font-medium text-zinc-500">
            <Link
              href="/"
              className="hover:text-[#ED1B36] transition-colors"
            >
              Home
            </Link>
            <span className="text-zinc-400">›</span>
            <Link
              href="/#industries"
              className="text-[#ED1B36] font-semibold hover:underline"
            >
              Industries
            </Link>
            <span className="text-zinc-400">›</span>
            <span className="text-zinc-800 font-semibold truncate">
              {industry.title}
            </span>
          </div>
        </div>

        {/* 
          ======================================================================
          03. HERO BANNER SECTION (Angled Geometric Cut & Broadcast Visual)
          ======================================================================
        */}
        <section className="relative bg-[#EFEAE1] overflow-hidden border-b border-zinc-200/80">
          {/* Subtle Vertical Pinstripe Background */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40 z-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, rgba(36, 35, 33, 0.08) 0px, rgba(36, 35, 33, 0.08) 1px, transparent 1px, transparent 44px)",
            }}
          />

          {/* Angled Ivory Wedge Accent */}
          <div
            className="hidden lg:block absolute inset-y-0 right-[42%] w-48 bg-[#E6E0D4]/60 pointer-events-none z-0"
            style={{
              clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
            }}
          />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center min-h-[460px] lg:min-h-[520px]">
              {/* Left Column: Title & Tagline */}
              <div className="lg:col-span-6 px-6 sm:px-8 lg:pl-12 lg:pr-8 py-14 lg:py-20 flex flex-col justify-center">
                <div className="space-y-3 max-w-xl">
                  <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-black font-heading text-[#242321] tracking-tight leading-[1.12]">
                    {industry.title}
                  </h1>
                  <p className="text-base sm:text-lg lg:text-xl text-zinc-700 font-medium tracking-normal pt-1">
                    {industry.tagline}
                  </p>
                </div>

                {/* Quick Action Button */}
                <div className="pt-8 flex items-center gap-4">
                  <button
                    onClick={scrollToContact}
                    className="px-6 py-3 rounded-full bg-[#ED1B36] hover:bg-[#C8102E] text-white text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2 shadow-md transition-all duration-200 group"
                  >
                    <span>Connect with Specialists</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <a
                    href="#offerings"
                    className="text-xs sm:text-sm font-bold text-zinc-700 hover:text-[#ED1B36] transition-colors uppercase tracking-wider"
                  >
                    View Offerings ↓
                  </a>
                </div>
              </div>

              {/* Right Column: Stadium Camera Operator with Diagonal Mask */}
              <div className="lg:col-span-6 relative h-[320px] sm:h-[400px] lg:h-[520px] w-full">
                <div
                  className="w-full h-full relative overflow-hidden"
                  style={{
                    clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
                  }}
                >
                  <Image
                    src={industry.heroImage}
                    alt={industry.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center scale-105 hover:scale-100 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          04. EDITORIAL TWO-COLUMN OVERVIEW SECTION (Art as Creative Spark...)
          ======================================================================
        */}
        <section id="editorial" className="py-20 lg:py-28 bg-white border-b border-zinc-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Bold Headline */}
              <div className="lg:col-span-5">
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black font-heading text-[#242321] leading-[1.18] tracking-tight">
                  {industry.editorialHeadline}
                </h2>
                <div className="w-16 h-1 bg-[#ED1B36] mt-6" />
              </div>

              {/* Right Column: Editorial Paragraph + MORE + Toggle */}
              <div className="lg:col-span-7 space-y-5">
                <p className="text-[16px] sm:text-[17px] text-zinc-700 leading-relaxed font-normal">
                  {industry.editorialParagraph}
                </p>

                {isEditorialExpanded && (
                  <div className="pt-3 pb-1 border-t border-zinc-100 animate-in fade-in slide-in-from-top-2 duration-300">
                    <p className="text-[15px] sm:text-[16px] text-zinc-600 leading-relaxed">
                      {industry.editorialExpanded}
                    </p>
                  </div>
                )}

                <div className="pt-2">
                  <button
                    onClick={() => setIsEditorialExpanded(!isEditorialExpanded)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-black uppercase tracking-widest text-[#242321] hover:text-[#ED1B36] transition-colors select-none group"
                  >
                    <span>{isEditorialExpanded ? "LESS" : "MORE"}</span>
                    {isEditorialExpanded ? (
                      <Minus className="w-4 h-4 text-[#ED1B36]" />
                    ) : (
                      <Plus className="w-4 h-4 text-[#ED1B36] group-hover:rotate-90 transition-transform" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          05. SECTION: OUR OFFERINGS (Screenshot 1 Exact Match)
          ======================================================================
        */}
        <section id="offerings" className="py-20 lg:py-28 bg-[#EFEAE1] border-b border-zinc-200/80">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="mb-12">
              <h2 className="text-4xl sm:text-5xl font-black font-heading text-[#242321] tracking-tight">
                {industry.offeringsTitle}
              </h2>
            </div>

            {/* 4 White Rectangular Cards in a 4-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industry.offerings.map((offering) => (
                <div
                  key={offering.id}
                  className="bg-white p-8 flex flex-col justify-between min-h-[340px] shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  onClick={scrollToContact}
                >
                  <div className="space-y-4">
                    <h3 className="text-lg sm:text-[19px] font-bold font-heading text-[#242321] group-hover:text-[#ED1B36] transition-colors leading-snug">
                      {offering.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-zinc-600 leading-relaxed font-normal">
                      {offering.description}
                    </p>
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        scrollToContact();
                      }}
                      className="text-[11px] font-black tracking-widest uppercase text-zinc-900 group-hover:text-[#ED1B36] transition-colors"
                    >
                      LEARN MORE
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          06. SECTION: CAPTURE VALUE IN ATTENTION ECONOMY (Screenshot 2 Match)
          ======================================================================
        */}
        <section className="relative py-20 lg:py-28 bg-[#580020] text-white overflow-hidden">
          {/* Signature Red Diagonal Stripe Hatching Background */}
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              backgroundImage:
                "repeating-linear-gradient(-35deg, rgba(237, 27, 54, 0.4) 0px, rgba(237, 27, 54, 0.4) 1px, transparent 1px, transparent 18px)",
            }}
          />

          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Heading & Paragraph */}
              <div className="lg:col-span-7 space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black font-heading text-white tracking-tight leading-[1.16]">
                  {industry.valueHeadline}
                </h2>
                <p className="text-base sm:text-[17px] text-white/90 leading-relaxed font-normal max-w-2xl">
                  {industry.valueDescription}
                </p>
              </div>

              {/* Right Column: Inset White Card */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="w-full max-w-md bg-white p-10 sm:p-12 shadow-2xl space-y-8 flex flex-col justify-between">
                  <h3 className="text-2xl sm:text-3xl font-black font-heading text-[#242321] tracking-tight leading-snug">
                    {industry.valueCardTitle}
                  </h3>
                  <div>
                    <button
                      onClick={scrollToContact}
                      className="px-8 py-3.5 bg-[#ED1B36] hover:bg-[#C8102E] text-white text-xs font-black uppercase tracking-widest transition-colors shadow-md"
                    >
                      LEARN MORE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          07. SECTION: INDUSTRIES WE SERVE (Screenshot 3 Exact Match)
          ======================================================================
        */}
        <section className="py-20 lg:py-28 bg-[#EFEAE1] border-b border-zinc-200/80">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="mb-12">
              <h2 className="text-4xl sm:text-5xl font-black font-heading text-[#242321] tracking-tight">
                {industry.subIndustriesTitle}
              </h2>
            </div>

            {/* 6 Sub-industry Cards in 2x3 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {industry.subIndustries.map((sub) => {
                const isSelected = activeSubIndustry === sub.id;
                return (
                  <div
                    key={sub.id}
                    onMouseEnter={() => setActiveSubIndustry(sub.id)}
                    onClick={() => setActiveSubIndustry(sub.id)}
                    className={`bg-white p-8 sm:p-9 flex flex-col justify-between min-h-[310px] transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "border-b-4 border-[#ED1B36] shadow-lg"
                        : "border-b-4 border-transparent hover:shadow-md"
                    }`}
                  >
                    <div className="space-y-4">
                      <h3 className="text-xl sm:text-[22px] font-bold font-heading text-[#242321] leading-snug">
                        {sub.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-zinc-600 leading-relaxed font-normal">
                        {sub.description}
                      </p>
                    </div>

                    <div className="pt-6">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          scrollToContact();
                        }}
                        className={`text-[11px] font-black tracking-widest uppercase transition-colors ${
                          isSelected ? "text-[#ED1B36]" : "text-zinc-900 hover:text-[#ED1B36]"
                        }`}
                      >
                        LEARN MORE
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
          08. SECTION: THE FUTURE IS ARTFUL INTELLIGENCE (Screenshot 4 Top Half)
          ======================================================================
        */}
        <section className="py-20 lg:py-24 bg-[#1F1E1B] text-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              {/* Left Column: Heading */}
              <div className="lg:col-span-5">
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black font-heading text-white tracking-tight leading-[1.16]">
                  {industry.futureHeadline}
                </h2>
              </div>

              {/* Right Column: Two paragraphs */}
              <div className="lg:col-span-7 space-y-6 text-sm sm:text-[15px] text-zinc-300 leading-relaxed font-normal">
                <p>{industry.futureDescription1}</p>
                <p className="text-white font-medium">{industry.futureDescription2}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          09. SECTION: PARTNER ECOSYSTEM (Screenshot 4 Bottom Half)
          ======================================================================
        */}
        <section className="py-16 lg:py-20 bg-[#EFEAE1] border-b border-zinc-200/80">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl font-black font-heading text-[#242321] tracking-tight">
                Partner Ecosystem
              </h2>
            </div>

            {/* Partner Logos */}
            <PartnerLogos />
          </div>
        </section>

        {/* 
          ======================================================================
          10. SECTION: GET IN TOUCH CONTACT FORM (Screenshot 5 Exact Match)
          ======================================================================
        */}
        <GetInTouchSection industryTitle={industry.title} />
      </main>

      {/* 
        ======================================================================
        11. GLOBAL ENTERPRISE FOOTER
        ======================================================================
      */}
      <Footer />

      {/* 
        ======================================================================
        12. INTERACTIVE MODALS & UTILITIES
        ======================================================================
      */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        initialService={`${industry.title} Advisory`}
      />

      <BackToTop />
    </div>
  );
}
