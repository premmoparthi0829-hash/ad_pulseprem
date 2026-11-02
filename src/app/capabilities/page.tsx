"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SearchModal } from "@/components/SearchModal";
import { ContactModal } from "@/components/ContactModal";
import { BackToTop } from "@/components/BackToTop";
import { CapabilityHeroGraphic } from "@/components/CapabilityHeroGraphic";
import { capabilitiesData } from "@/data/capabilitiesData";

export default function CapabilitiesDirectoryPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactInitialService, setContactInitialService] = useState(
    "Digital Marketing Capabilities"
  );

  const capabilitiesList = Object.values(capabilitiesData);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#242321] selection:bg-[#FD6E12] selection:text-white relative">
      <Header
        activePage="capabilities"
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <main className="flex-1 w-full pt-[90px]">
        {/* Breadcrumbs Bar */}
        <div className="bg-[#FAF8F5] border-b border-zinc-200/60 py-3">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center gap-2 text-xs font-medium text-zinc-500">
            <Link href="/" className="hover:text-[#FD6E12] transition-colors">
              Home
            </Link>
            <span className="text-zinc-400">›</span>
            <span className="text-[#01286D] font-semibold">Capabilities</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative bg-[#F6F2EA] overflow-hidden border-b border-zinc-200/80 min-h-[420px] lg:min-h-[480px] flex items-center">
          <div
            className="absolute inset-0 pointer-events-none opacity-45 z-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, rgba(36, 35, 33, 0.08) 0px, rgba(36, 35, 33, 0.08) 1px, transparent 1px, transparent 44px)",
            }}
          />

          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10 py-12 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-4 max-w-2xl">
                <span className="text-[11px] font-black uppercase tracking-widest text-[#FD6E12] block">
                  FULL-FUNNEL GROWTH SOLUTIONS
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black font-heading tracking-tight text-[#01286D] leading-[1.08]">
                  Digital Marketing Capabilities
                </h1>
                <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
                  Explore our dedicated practice areas engineered to scale customer acquisition,
                  dominate organic search, and maximize return on ad spend (ROAS).
                </p>
              </div>

              <div className="lg:col-span-5 relative w-full flex items-center justify-center lg:justify-end">
                <CapabilityHeroGraphic />
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="bg-[#EFEAE1] py-16 sm:py-20 lg:py-24 border-b border-zinc-200/80">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {capabilitiesList.map((capability) => (
                <div
                  key={capability.slug}
                  className="bg-white p-8 sm:p-9 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl border-b-4 border-transparent hover:border-[#FD6E12]"
                >
                  <div className="space-y-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#FD6E12]">
                      {capability.practices.length} SPECIALIZED PRACTICES
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#01286D] tracking-tight group-hover:text-[#FD6E12] transition-colors leading-snug">
                      {capability.title}
                    </h2>
                    <p className="text-xs sm:text-[13px] text-zinc-600 font-normal leading-relaxed line-clamp-3">
                      {capability.overviewParagraph1}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-zinc-100 flex items-center justify-between">
                    <div className="flex items-baseline gap-0.5">
                      <span className="text-xl font-black font-heading text-[#01286D]">
                        {capability.metrics[0].value}
                      </span>
                      <span className="text-sm font-bold text-[#FD6E12]">
                        {capability.metrics[0].suffix}
                      </span>
                      <span className="text-[10px] text-zinc-500 font-medium ml-1">
                        {capability.metrics[0].label}
                      </span>
                    </div>

                    <Link
                      href={`/capabilities/${capability.slug}`}
                      className="text-xs font-bold uppercase tracking-wider text-[#01286D] group-hover:text-[#FD6E12] transition-colors inline-flex items-center gap-1"
                    >
                      <span>VIEW PRACTICE</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

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

