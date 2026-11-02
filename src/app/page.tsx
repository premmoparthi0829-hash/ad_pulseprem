"use client";
import React, { useState } from "react";
import { Header } from "@/components/Header";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ScaleSection } from "@/components/ScaleSection";
import { FeaturedStory } from "@/components/FeaturedStory";
import { LatestThinking } from "@/components/LatestThinking";
import { Capabilities } from "@/components/Capabilities";
import { Industries } from "@/components/Industries";
import { SuccessStories } from "@/components/SuccessStories";
import { Careers } from "@/components/Careers";
import { BigThinkers } from "@/components/BigThinkers";
import { WhatsNew } from "@/components/WhatsNew";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";
import { SearchModal } from "@/components/SearchModal";
import { ContactModal } from "@/components/ContactModal";
import { BackToTop } from "@/components/BackToTop";

export default function Home() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [initialServiceInquiry, setInitialServiceInquiry] = useState("Digital Marketing");

  const handleOpenContactWithService = (serviceTitle?: string) => {
    if (serviceTitle) {
      setInitialServiceInquiry(serviceTitle);
    }
    setIsContactOpen(true);
  };

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#242321] selection:bg-[#FD6E12] selection:text-white relative">
      {/* 00. Global Sticky Navigation */}
      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenContact={() => handleOpenContactWithService("Digital Marketing & Growth Strategy")}
      />

      <main className="flex-1 w-full overflow-hidden">
        {/* 01. Section 01: Hero Carousel */}
        <HeroCarousel
          onOpenContact={() => handleOpenContactWithService("Full Funnel Strategy")}
          onExploreServices={() => handleScrollToSection("capabilities")}
        />

        {/* 02. Section 02: Scale at Speed */}
        <ScaleSection
          onKnowMore={() => { window.location.href = "/scale-at-speed"; }}
          onBrandStory={() => { window.location.href = "/about-us/our-brand"; }}
        />

        {/* 03. Section 03: Featured Digital Story / Podcast */}
        <FeaturedStory />

        {/* 04. Section 04: Latest Thinking */}
        <LatestThinking />

        {/* 05. Section 05: Capabilities (Deep Burgundy) */}
        <Capabilities
          onSelectService={(service) => handleOpenContactWithService(service)}
        />

        {/* 06. Section 06: Expertise Across Industries */}
        <Industries />

        {/* 07. Section 07: Success Stories (Directly below Industries as in screenshot) */}
        <SuccessStories />

        {/* 08. Section 08: The Big Thinkers */}
        <BigThinkers />

        {/* 09. Section 09: What's New */}
        <WhatsNew />

        {/* 10. Section 10: Contact CTA (kept, without the trajectory pill badge) */}
        <ContactCTA
          onStartProject={() => handleOpenContactWithService("Enterprise New Project")}
          onContactTeam={() => handleOpenContactWithService("General Inquiry")}
        />

        {/* 11. Section 11: Careers / Limitless Together (Navigates to /careers) */}
        <Careers
          onOpenCareers={() => {
            window.location.href = "/careers";
          }}
        />
      </main>

      {/* 13. Section 13: Enterprise Midnight Navy Footer */}
      <Footer />

      {/* Interactive Global Modals & Controls */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectResult={(sec) => handleScrollToSection(sec)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        initialService={initialServiceInquiry}
      />

      <BackToTop />
    </div>
  );
}
