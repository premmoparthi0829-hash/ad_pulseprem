"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
  Globe,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { Logo } from "@/components/Logo";

interface HeaderProps {
  onOpenSearch: () => void;
  onOpenContact: () => void;
  activePage?: "about" | "capabilities" | "industries" | "insights" | "careers" | "contact";
}

type DropdownKey = "about" | "capabilities" | "industries" | "insights" | "careers" | null;

export const Header: React.FC<HeaderProps> = ({
  onOpenSearch,
  onOpenContact,
  activePage, 
}) => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (key: DropdownKey) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const closeDropdowns = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(null);
  };

  const handleNavClick = (sectionId: string, directUrl?: string) => {
    closeDropdowns();
    setMobileMenuOpen(false);

    if (directUrl) {
      router.push(directUrl);
      return;
    }

    if (typeof window !== "undefined" && window.location.pathname !== "/") {
      router.push(`/#${sectionId}`);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 
        ======================================================================
        01. TOP FIXED HEADER BAR (AdPulse Digital Enterprise Navigation)
        ======================================================================
      */}
      <header
        onMouseLeave={handleMouseLeave}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
          isScrolled || activeDropdown !== null
            ? "border-b border-zinc-200/90 shadow-sm py-0"
            : "border-b border-zinc-100 py-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between h-[90px]">
          {/* Official AdPulse AI-Powered Growth Logo & 10 Years Emblem */}
          <div
            onClick={() => {
              closeDropdowns();
              if (typeof window !== "undefined" && window.location.pathname !== "/") {
                router.push("/");
              } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="cursor-pointer shrink-0 py-1"
          >
            <Logo theme="light" showBadge={true} />
          </div>

          {/* Desktop Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9 h-full text-[13px] xl:text-[13.5px] font-bold tracking-[0.07em] font-heading uppercase text-zinc-800">
            {/* 01. ABOUT US */}
            <div
              className="h-full flex items-center relative"
              onMouseEnter={() => handleMouseEnter("about")}
            >
              <button
                onClick={() => handleNavClick("scale-at-speed")}
                className={`h-full flex items-center px-1 transition-colors uppercase relative select-none ${
                  activeDropdown === "about"
                    ? "text-black"
                    : "text-zinc-800 hover:text-[#FD6E12]"
                }`}
              >
                <span>ABOUT US</span>
                {(activeDropdown === "about" || activePage === "about") && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#FD6E12]" />
                )}
              </button>
            </div>

            {/* 02. CAPABILITIES */}
            <div
              className="h-full flex items-center relative"
              onMouseEnter={() => handleMouseEnter("capabilities")}
            >
              <button
                onClick={() => handleNavClick("capabilities")}
                className={`h-full flex items-center px-1 transition-colors uppercase relative select-none ${
                  activeDropdown === "capabilities"
                    ? "text-black"
                    : "text-zinc-800 hover:text-[#FD6E12]"
                }`}
              >
                <span>CAPABILITIES</span>
                {(activeDropdown === "capabilities" || activePage === "capabilities") && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#FD6E12]" />
                )}
              </button>
            </div>

            {/* 03. INDUSTRIES */}
            <div
              className="h-full flex items-center relative"
              onMouseEnter={() => handleMouseEnter("industries")}
            >
              <button
                onClick={() => handleNavClick("industries")}
                className={`h-full flex items-center px-1 transition-colors uppercase relative select-none ${
                  activeDropdown === "industries"
                    ? "text-black"
                    : activePage === "industries"
                    ? "text-[#FD6E12]"
                    : "text-zinc-800 hover:text-[#FD6E12]"
                }`}
              >
                <span>INDUSTRIES</span>
                {(activeDropdown === "industries" || activePage === "industries") && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#FD6E12]" />
                )}
              </button>
            </div>

            {/* 04. INSIGHTS */}
            <div
              className="h-full flex items-center relative"
              onMouseEnter={() => handleMouseEnter("insights")}
            >
              <button
                onClick={() => handleNavClick("featured-story")}
                className={`h-full flex items-center px-1 transition-colors uppercase relative select-none ${
                  activeDropdown === "insights"
                    ? "text-black"
                    : "text-zinc-800 hover:text-[#FD6E12]"
                }`}
              >
                <span>INSIGHTS</span>
                {(activeDropdown === "insights" || activePage === "insights") && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#FD6E12]" />
                )}
              </button>
            </div>

            {/* 05. CAREERS */}
            <div
              className="h-full flex items-center relative"
              onMouseEnter={() => handleMouseEnter("careers")}
            >
              <button
                onClick={() => handleNavClick("careers", "/careers")}
                className={`h-full flex items-center px-1 transition-colors uppercase relative select-none ${
                  activeDropdown === "careers"
                    ? "text-black"
                    : "text-zinc-800 hover:text-[#FD6E12]"
                }`}
              >
                <span>CAREERS</span>
                {(activeDropdown === "careers" || activePage === "careers") && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#FD6E12]" />
                )}
              </button>
            </div>

            {/* 06. CONTACT US */}
            <div className="h-full flex items-center relative">
              <button
                onClick={() => router.push("/contact-us")}
                className={`h-full flex items-center px-1 transition-colors uppercase relative select-none ${
                  activePage === "contact"
                    ? "text-black font-bold"
                    : "text-zinc-800 hover:text-[#FD6E12]"
                }`}
              >
                <span>CONTACT US</span>
                {activePage === "contact" && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#FD6E12]" />
                )}
              </button>
            </div>
          </nav>

          {/* Right Action Icons: Search & Language */}
          <div className="flex items-center gap-4 shrink-0">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              aria-label="Search"
              className="p-2 text-zinc-700 hover:text-[#FD6E12] transition-colors cursor-pointer"
            >
              <Search className="w-5 h-5 stroke-[2.2]" />
            </button>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                className="flex items-center gap-2 px-2.5 py-1.5 rounded-sm border border-zinc-200 hover:border-zinc-300 text-xs text-zinc-700 hover:text-zinc-900 transition-colors cursor-pointer"
              >
                <Globe className="w-4 h-4 text-zinc-600" />
                <span className="w-2 h-1.5 border-l-[3.5px] border-r-[3.5px] border-t-[4.5px] border-transparent border-t-[#FD6E12] inline-block ml-0.5" />
              </button>

              {languageMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-32 bg-white rounded-md shadow-xl border border-zinc-200 py-1.5 z-50 text-xs animate-in fade-in duration-150">
                  <button
                    onClick={() => {
                      setSelectedLanguage("EN");
                      setLanguageMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-1.5 hover:bg-zinc-50 hover:text-[#FD6E12] font-semibold text-zinc-700 flex items-center justify-between"
                  >
                    <span>English</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FD6E12]" />
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-zinc-800 hover:text-[#FD6E12]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* 
          ======================================================================
          02. FULL-WIDTH ENTERPRISE MEGA MENU DRAWER (Screenshots 1, 2, 3)
          ======================================================================
        */}
        {activeDropdown !== null && (
          <div
            onMouseEnter={() => {
              if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
                timeoutRef.current = null;
              }
            }}
            onMouseLeave={handleMouseLeave}
            className="w-full bg-white border-t border-zinc-200/90 shadow-2xl relative z-40 animate-in fade-in slide-in-from-top-1 duration-200"
          >
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch min-h-[350px]">
              {/* ========================================================== */}
              {/* CONTENT 1: ABOUT US (Screenshot 1 Exact Match)             */}
              {/* ========================================================== */}
              {activeDropdown === "about" && (
                <>
                  {/* Left Column: Heading */}
                  <div className="w-full lg:w-[260px] p-8 lg:p-10 shrink-0">
                    <h2 className="text-3xl sm:text-[34px] font-black font-heading text-[#242321] tracking-tight">
                      About Us
                    </h2>
                  </div>

                  {/* Middle Navigation Columns */}
                  <div className="flex-1 p-8 lg:py-10 lg:px-4 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 text-xs">
                    {/* Column A: Corporate Overview */}
                    <div className="space-y-3">
                      <h3 className="text-[13px] font-bold text-zinc-900 tracking-tight">
                        Corporate Overview
                      </h3>
                      <ul className="space-y-2 text-zinc-600 font-medium">
                        <li>
                          <button
                            onClick={() => handleNavClick("scale-at-speed")}
                            className="hover:text-[#FD6E12] transition-colors"
                          >
                            Leadership
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => {
                              closeDropdowns();
                              router.push("/about-us/our-brand");
                            }}
                            className="hover:text-[#FD6E12] transition-colors"
                          >
                            Our Brand
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleNavClick("scale-at-speed")}
                            className="hover:text-[#FD6E12] transition-colors"
                          >
                            Sustainability
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleNavClick("big-thinkers")}
                            className="hover:text-[#FD6E12] transition-colors"
                          >
                            Recognition
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleNavClick("success-stories")}
                            className="hover:text-[#FD6E12] transition-colors"
                          >
                            Customer Speak
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleNavClick("capabilities")}
                            className="hover:text-[#FD6E12] transition-colors"
                          >
                            Partners Ecosystem
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleNavClick("capabilities")}
                            className="hover:text-[#FD6E12] transition-colors"
                          >
                            Portfolio Companies
                          </button>
                        </li>
                      </ul>
                    </div>

                    {/* Column B: News, Investor Relations, Corporate Citizenship, Customer Centricity */}
                    <div className="space-y-5">
                      <div>
                        <button
                          onClick={() => handleNavClick("whats-new")}
                          className="text-[13px] font-bold text-zinc-900 hover:text-[#FD6E12] transition-colors block"
                        >
                          News
                        </button>
                      </div>

                      <div>
                        <button
                          onClick={() => handleNavClick("scale-at-speed")}
                          className="text-[13px] font-bold text-zinc-900 hover:text-[#FD6E12] transition-colors block"
                        >
                          Investor Relations
                        </button>
                      </div>

                      <div className="space-y-2 pt-1">
                        <h3 className="text-[13px] font-bold text-zinc-900 tracking-tight">
                          Corporate Citizenship
                        </h3>
                        <ul className="space-y-1.5 text-zinc-600 font-medium">
                          <li>
                            <button
                              onClick={() => handleNavClick("careers")}
                              className="hover:text-[#FD6E12] transition-colors"
                            >
                              AdPulse Foundation
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => handleNavClick("scale-at-speed")}
                              className="hover:text-[#FD6E12] transition-colors"
                            >
                              Educational Institutions
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => handleNavClick("careers")}
                              className="hover:text-[#FD6E12] transition-colors"
                            >
                              Individual Social Responsibility
                            </button>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <button
                          onClick={() => handleNavClick("scale-at-speed")}
                          className="text-[13px] font-bold text-zinc-900 hover:text-[#FD6E12] transition-colors block"
                        >
                          Customer Centricity
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: 2 Stacked Visual Promo Cards */}
                  <div className="w-full lg:w-[360px] shrink-0 border-l border-zinc-100 flex flex-col">
                    {/* Promo Card 1: Scale at Speed */}
                    <div
                      onClick={() => handleNavClick("scale-at-speed", "/scale-at-speed")}
                      className="flex-1 relative overflow-hidden group cursor-pointer p-7 flex flex-col justify-end min-h-[175px]"
                    >
                      <Image
                        src="/images/scale-at-speed/racecar-banner.jpg"
                        alt="Scale at Speed"
                        fill
                        sizes="400px"
                        unoptimized
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/20" />
                      <div className="relative z-10 space-y-1">
                        <span className="text-[11px] font-semibold text-white/90 border-b border-white/60 pb-0.5 inline-block w-fit">
                          Our Promise
                        </span>
                        <h4 className="text-lg font-black font-heading text-white leading-snug tracking-tight">
                          Scale at Speed™
                        </h4>
                        <div className="pt-1">
                          <span className="text-[10px] font-black uppercase tracking-widest text-white/90 group-hover:text-[#FD6E12] transition-colors">
                            LEARN MORE
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Promo Card 2: AI Delivered Right */}
                    <div
                      onClick={() => handleNavClick("featured-story")}
                      className="flex-1 relative overflow-hidden group cursor-pointer p-7 flex flex-col justify-end min-h-[175px] border-t border-white/10"
                    >
                      <Image
                        src="/images/capabilities/ai.jpg"
                        alt="AI Delivered Right"
                        fill
                        sizes="400px"
                        unoptimized
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20" />
                      <div className="relative z-10 space-y-1">
                        <h4 className="text-lg font-black font-heading text-white leading-snug tracking-tight">
                          AI Delivered Right
                        </h4>
                        <div className="pt-1">
                          <span className="text-[10px] font-black uppercase tracking-widest text-white/90 group-hover:text-[#FD6E12] transition-colors">
                            LEARN MORE
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* ========================================================== */}
              {/* CONTENT 2: INDUSTRIES (Screenshot 2 Exact Match)           */}
              {/* ========================================================== */}
              {activeDropdown === "industries" && (
                <>
                  {/* Left Column: Title */}
                  <div className="w-full lg:w-[260px] p-8 lg:p-10 shrink-0">
                    <h2 className="text-3xl sm:text-[34px] font-black font-heading text-[#242321] tracking-tight">
                      Industries
                    </h2>
                  </div>

                  {/* Middle Navigation Columns: 2 Columns of Industries */}
                  <div className="flex-1 p-8 lg:py-10 lg:px-4 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10 text-xs">
                    {/* Column 1 */}
                    <ul className="space-y-2.5 text-zinc-700 font-medium">
                      <li>
                        <button
                          onClick={() => handleNavClick("", "/industries/banking-and-financial-services")}
                          className="hover:text-[#FD6E12] transition-colors text-left"
                        >
                          Banking & Financial Services
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleNavClick("", "/industries/communications")}
                          className="hover:text-[#FD6E12] transition-colors text-left"
                        >
                          Communications
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleNavClick("", "/industries/education")}
                          className="hover:text-[#FD6E12] transition-colors text-left"
                        >
                          Education
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleNavClick("", "/industries/energy-and-utilities")}
                          className="hover:text-[#FD6E12] transition-colors text-left"
                        >
                          Energy & Utilities
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleNavClick("", "/industries/healthcare-and-life-sciences")}
                          className="hover:text-[#FD6E12] transition-colors text-left"
                        >
                          Healthcare & Life Sciences
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleNavClick("", "/industries/hi-tech-and-software")}
                          className="hover:text-[#FD6E12] transition-colors text-left"
                        >
                          Hi Tech
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleNavClick("", "/industries/insurance")}
                          className="hover:text-[#FD6E12] transition-colors text-left"
                        >
                          Insurance
                        </button>
                      </li>
                    </ul>

                    {/* Column 2 */}
                    <ul className="space-y-2.5 text-zinc-700 font-medium">
                      <li>
                        <button
                          onClick={() => handleNavClick("", "/industries/manufacturing-and-automotive")}
                          className="hover:text-[#FD6E12] transition-colors text-left"
                        >
                          Manufacturing
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleNavClick("", "/industries/media-and-entertainment")}
                          className="hover:text-[#FD6E12] font-bold text-[#FD6E12] transition-colors text-left flex items-center gap-1"
                        >
                          <span>Media & Entertainment</span>
                          <span className="text-[10px] text-[#FD6E12] font-bold">★</span>
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleNavClick("", "/industries/oil-and-gas")}
                          className="hover:text-[#FD6E12] transition-colors text-left"
                        >
                          Oil & Gas
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleNavClick("", "/industries/private-equity")}
                          className="hover:text-[#FD6E12] transition-colors text-left"
                        >
                          Private Equity
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleNavClick("", "/industries/professional-services")}
                          className="hover:text-[#FD6E12] transition-colors text-left"
                        >
                          Professional Services
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleNavClick("", "/industries/retail-and-consumer-goods")}
                          className="hover:text-[#FD6E12] transition-colors text-left"
                        >
                          Retail & Consumer Goods
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleNavClick("", "/industries/travel-and-hospitality")}
                          className="hover:text-[#FD6E12] transition-colors text-left"
                        >
                          Travel, Transportation, Logistics & Hospitality
                        </button>
                      </li>
                    </ul>
                  </div>

                  {/* Right Column: 2 Stacked Visual Promo Cards */}
                  <div className="w-full lg:w-[360px] shrink-0 border-l border-zinc-100 flex flex-col">
                    {/* Promo Card 1: Featured Report */}
                    <div
                      onClick={() => handleNavClick("", "/industries/banking-and-financial-services")}
                      className="flex-1 relative overflow-hidden group cursor-pointer p-7 flex flex-col justify-end min-h-[175px]"
                    >
                      <Image
                        src="/images/capabilities/cloud.jpg"
                        alt="The Bank of Tomorrow"
                        fill
                        sizes="400px"
                        unoptimized
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/20" />
                      <div className="relative z-10 space-y-1">
                        <span className="text-[11px] font-semibold text-white/90 border-b border-white/60 pb-0.5 inline-block w-fit">
                          Featured Report
                        </span>
                        <h4 className="text-base font-black font-heading text-white leading-snug tracking-tight">
                          The Bank of Tomorrow: A Strategic Perspective
                        </h4>
                        <div className="pt-1">
                          <span className="text-[10px] font-black uppercase tracking-widest text-white/90 group-hover:text-[#FD6E12] transition-colors">
                            READ MORE
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Promo Card 2: Featured White Paper */}
                    <div
                      onClick={() => handleNavClick("", "/industries/communications")}
                      className="flex-1 relative overflow-hidden group cursor-pointer p-7 flex flex-col justify-end min-h-[175px] border-t border-white/10"
                    >
                      <Image
                        src="/images/capabilities/network.jpg"
                        alt="Zero Gravity Telco Architecture"
                        fill
                        sizes="400px"
                        unoptimized
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20" />
                      <div className="relative z-10 space-y-1">
                        <span className="text-[11px] font-semibold text-white/90 border-b border-white/60 pb-0.5 inline-block w-fit">
                          Featured White Paper
                        </span>
                        <h4 className="text-base font-black font-heading text-white leading-snug tracking-tight">
                          Zero Gravity Telco Architecture™
                        </h4>
                        <div className="pt-1">
                          <span className="text-[10px] font-black uppercase tracking-widest text-white/90 group-hover:text-[#FD6E12] transition-colors">
                            READ MORE
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* ========================================================== */}
              {/* CONTENT 3: CAREERS (Screenshot 3 Exact Match)              */}
              {/* ========================================================== */}
              {activeDropdown === "careers" && (
                <>
                  {/* Left Column: Title */}
                  <div className="w-full lg:w-[260px] p-8 lg:p-10 shrink-0">
                    <h2 className="text-3xl sm:text-[34px] font-black font-heading text-[#242321] tracking-tight">
                      Careers
                    </h2>
                  </div>

                  {/* Middle Navigation Column */}
                  <div className="flex-1 p-8 lg:py-10 lg:px-6 flex flex-col justify-start text-xs">
                    <ul className="space-y-3 text-zinc-700 font-medium">
                      <li>
                        <button
                          onClick={() => handleNavClick("careers", "/careers")}
                          className="hover:text-[#FD6E12] transition-colors text-sm font-semibold"
                        >
                          The AdPulse Way
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleNavClick("careers", "/careers")}
                          className="hover:text-[#FD6E12] transition-colors text-sm font-semibold"
                        >
                          Diversity & Inclusion
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleNavClick("careers", "/careers")}
                          className="hover:text-[#FD6E12] transition-colors text-sm font-semibold"
                        >
                          Join Us
                        </button>
                      </li>
                    </ul>
                  </div>

                  {/* Right Column: 2 Stacked Visual Promo Cards */}
                  <div className="w-full lg:w-[360px] shrink-0 border-l border-zinc-100 flex flex-col">
                    {/* Promo Card 1: Featured Case Study */}
                    <div
                      onClick={() => handleNavClick("success-stories")}
                      className="flex-1 relative overflow-hidden group cursor-pointer p-7 flex flex-col justify-end min-h-[175px]"
                    >
                      <Image
                        src="/images/success-stories/story-card-3-deepesh-hd.jpg"
                        alt="Outpacing Change with Rubicon 2.0"
                        fill
                        sizes="400px"
                        unoptimized
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/20" />
                      <div className="relative z-10 space-y-1">
                        <span className="text-[11px] font-semibold text-white/90 border-b border-white/60 pb-0.5 inline-block w-fit">
                          Featured Case Study
                        </span>
                        <h4 className="text-base font-black font-heading text-white leading-snug tracking-tight">
                          Outpacing Change with Rubicon 2.0
                        </h4>
                        <div className="pt-1">
                          <span className="text-[10px] font-black uppercase tracking-widest text-white/90 group-hover:text-[#FD6E12] transition-colors">
                            READ MORE
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Promo Card 2: Stockmann Supplier Case Study */}
                    <div
                      onClick={() => handleNavClick("success-stories")}
                      className="flex-1 relative overflow-hidden group cursor-pointer p-7 flex flex-col justify-end min-h-[175px] border-t border-white/10"
                    >
                      <Image
                        src="/images/success-stories/story-card-1-rajesh-hd.jpg"
                        alt="Stockmann Cuts Supplier Onboarding"
                        fill
                        sizes="400px"
                        unoptimized
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20" />
                      <div className="relative z-10 space-y-1">
                        <span className="text-[11px] font-semibold text-white/90 border-b border-white/60 pb-0.5 inline-block w-fit">
                          Featured Case Study
                        </span>
                        <h4 className="text-sm font-black font-heading text-white leading-snug tracking-tight line-clamp-2">
                          Stockmann Cuts Supplier Onboarding from Weeks to Hours with PIM-First Automation
                        </h4>
                        <div className="pt-1">
                          <span className="text-[10px] font-black uppercase tracking-widest text-white/90 group-hover:text-[#FD6E12] transition-colors">
                            READ MORE
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* ========================================================== */}
              {/* CONTENT 4: CAPABILITIES                                    */}
              {/* ========================================================== */}
              {activeDropdown === "capabilities" && (
                <>
                  <div className="w-full lg:w-[260px] p-8 lg:p-10 shrink-0">
                    <h2 className="text-3xl sm:text-[34px] font-black font-heading text-[#242321] tracking-tight">
                      Capabilities
                    </h2>
                  </div>

                  <div className="flex-1 p-8 lg:py-10 lg:px-4 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10 text-xs">
                    <div className="space-y-3">
                      <h3 className="text-[13px] font-bold text-zinc-900 tracking-tight">
                        Performance & Search
                      </h3>
                      <ul className="space-y-2 text-zinc-600 font-medium">
                        <li>
                          <button
                            onClick={() => handleNavClick("", "/capabilities/performance-marketing")}
                            className="hover:text-[#FD6E12] transition-colors"
                          >
                            Paid Advertising (Google, Meta, LinkedIn)
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleNavClick("", "/capabilities/seo")}
                            className="hover:text-[#FD6E12] transition-colors"
                          >
                            Technical SEO & AI Search Engine (GEO)
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleNavClick("", "/capabilities/cro")}
                            className="hover:text-[#FD6E12] transition-colors"
                          >
                            Conversion Rate Optimization (CRO)
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleNavClick("", "/capabilities/performance-marketing")}
                            className="hover:text-[#FD6E12] transition-colors"
                          >
                            Full-Funnel Attribution & Analytics
                          </button>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-[13px] font-bold text-zinc-900 tracking-tight">
                        Brand, Creative & Social
                      </h3>
                      <ul className="space-y-2 text-zinc-600 font-medium">
                        <li>
                          <button
                            onClick={() => handleNavClick("", "/capabilities/social-media")}
                            className="hover:text-[#FD6E12] transition-colors"
                          >
                            Social Media & Creator Marketing
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleNavClick("", "/capabilities/brand-design")}
                            className="hover:text-[#FD6E12] transition-colors"
                          >
                            High-Converting Ad Creatives & Video
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleNavClick("", "/capabilities/ai-automation")}
                            className="hover:text-[#FD6E12] transition-colors"
                          >
                            AI Marketing Automation & CRM
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleNavClick("", "/capabilities/web-growth")}
                            className="hover:text-[#FD6E12] transition-colors"
                          >
                            E-Commerce Web Growth Platforms
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="w-full lg:w-[360px] shrink-0 border-l border-zinc-100 flex flex-col">
                    <div
                      onClick={() => handleNavClick("", "/capabilities/performance-marketing")}
                      className="flex-1 relative overflow-hidden group cursor-pointer p-7 flex flex-col justify-end min-h-[175px]"
                    >
                      <Image
                        src="/images/capabilities/engineering.jpg"
                        alt="Core Practice"
                        fill
                        sizes="400px"
                        unoptimized
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/20" />
                      <div className="relative z-10 space-y-1">
                        <span className="text-[11px] font-semibold text-white/90 border-b border-white/60 pb-0.5 inline-block w-fit">
                          Core Practice
                        </span>
                        <h4 className="text-base font-black font-heading text-white leading-snug tracking-tight">
                          Scale at Speed™ Growth Marketing
                        </h4>
                        <div className="pt-1">
                          <span className="text-[10px] font-black uppercase tracking-widest text-white/90 group-hover:text-[#FD6E12] transition-colors">
                            EXPLORE ALL MARKETING SERVICES
                          </span>
                        </div>
                      </div>
                    </div>

                    <div
                      onClick={() => handleNavClick("", "/capabilities/seo")}
                      className="flex-1 relative overflow-hidden group cursor-pointer p-7 flex flex-col justify-end min-h-[175px] border-t border-white/10"
                    >
                      <Image
                        src="/images/capabilities/digital-apps.jpg"
                        alt="Sovereign AI Engine"
                        fill
                        sizes="400px"
                        unoptimized
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20" />
                      <div className="relative z-10 space-y-1">
                        <span className="text-[11px] font-semibold text-white/90 border-b border-white/60 pb-0.5 inline-block w-fit">
                          Organic Dominance
                        </span>
                        <h4 className="text-base font-black font-heading text-white leading-snug tracking-tight">
                          AI Search & Enterprise SEO Engine
                        </h4>
                        <div className="pt-1">
                          <span className="text-[10px] font-black uppercase tracking-widest text-white/90 group-hover:text-[#FD6E12] transition-colors">
                            VIEW SEO SOLUTIONS
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* ========================================================== */}
              {/* CONTENT 5: INSIGHTS                                        */}
              {/* ========================================================== */}
              {activeDropdown === "insights" && (
                <>
                  <div className="w-full lg:w-[260px] p-8 lg:p-10 shrink-0">
                    <h2 className="text-3xl sm:text-[34px] font-black font-heading text-[#242321] tracking-tight">
                      Insights
                    </h2>
                  </div>

                  <div className="flex-1 p-8 lg:py-10 lg:px-6 flex flex-col justify-start text-xs">
                    <ul className="space-y-3 text-zinc-700 font-medium">
                      <li>
                        <button
                          onClick={() => handleNavClick("featured-story")}
                          className="hover:text-[#FD6E12] transition-colors text-sm font-semibold"
                        >
                          Executive Podcast & Dispatches
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleNavClick("latest-thinking")}
                          className="hover:text-[#FD6E12] transition-colors text-sm font-semibold"
                        >
                          Latest Thinking & Research
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleNavClick("success-stories")}
                          className="hover:text-[#FD6E12] transition-colors text-sm font-semibold"
                        >
                          Enterprise Case Studies
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleNavClick("whats-new")}
                          className="hover:text-[#FD6E12] transition-colors text-sm font-semibold"
                        >
                          Global Announcements & Press
                        </button>
                      </li>
                    </ul>
                  </div>

                  <div className="w-full lg:w-[360px] shrink-0 border-l border-zinc-100 flex flex-col">
                    <div
                      onClick={() => handleNavClick("featured-story")}
                      className="flex-1 relative overflow-hidden group cursor-pointer p-7 flex flex-col justify-end min-h-[175px]"
                    >
                      <Image
                        src="/images/podcast-banner-full.png"
                        alt="Sovereign AI Podcast"
                        fill
                        sizes="400px"
                        unoptimized
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/20" />
                      <div className="relative z-10 space-y-1">
                        <span className="text-[11px] font-semibold text-white/90 border-b border-white/60 pb-0.5 inline-block w-fit">
                          Featured Podcast
                        </span>
                        <h4 className="text-base font-black font-heading text-white leading-snug tracking-tight">
                          Sovereign AI: Why Strategy Beats Hype
                        </h4>
                        <div className="pt-1">
                          <span className="text-[10px] font-black uppercase tracking-widest text-white/90 group-hover:text-[#FD6E12] transition-colors">
                            LISTEN NOW
                          </span>
                        </div>
                      </div>
                    </div>

                    <div
                      onClick={() => handleNavClick("latest-thinking")}
                      className="flex-1 relative overflow-hidden group cursor-pointer p-7 flex flex-col justify-end min-h-[175px] border-t border-white/10"
                    >
                      <Image
                        src="/images/capabilities/consulting.jpg"
                        alt="The Enterprise CMO Playbook"
                        fill
                        sizes="400px"
                        unoptimized
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20" />
                      <div className="relative z-10 space-y-1">
                        <span className="text-[11px] font-semibold text-white/90 border-b border-white/60 pb-0.5 inline-block w-fit">
                          Market Study
                        </span>
                        <h4 className="text-base font-black font-heading text-white leading-snug tracking-tight">
                          The Enterprise CMO Playbook for 2026
                        </h4>
                        <div className="pt-1">
                          <span className="text-[10px] font-black uppercase tracking-widest text-white/90 group-hover:text-[#FD6E12] transition-colors">
                            READ REPORT
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* 
          ======================================================================
          03. MOBILE DRAWER ACCORDION
          ======================================================================
        */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[90px] bottom-0 bg-white z-50 overflow-y-auto p-6 space-y-6">
            <div className="space-y-4">
              <div>
                <button
                  onClick={() => handleNavClick("scale-at-speed")}
                  className="w-full text-left font-black text-lg text-zinc-900 py-2 border-b border-zinc-100 flex items-center justify-between"
                >
                  <span>ABOUT US</span>
                  <ArrowRight className="w-4 h-4 text-[#FD6E12]" />
                </button>
              </div>

              <div>
                <button
                  onClick={() => handleNavClick("capabilities")}
                  className="w-full text-left font-black text-lg text-zinc-900 py-2 border-b border-zinc-100 flex items-center justify-between"
                >
                  <span>CAPABILITIES</span>
                  <ArrowRight className="w-4 h-4 text-[#FD6E12]" />
                </button>
              </div>

              <div>
                <button
                  onClick={() => handleNavClick("industries")}
                  className="w-full text-left font-black text-lg text-zinc-900 py-2 border-b border-zinc-100 flex items-center justify-between"
                >
                  <span>INDUSTRIES</span>
                  <ArrowRight className="w-4 h-4 text-[#FD6E12]" />
                </button>
                <div className="pl-4 py-2 space-y-2 text-xs font-semibold text-zinc-600">
                  <button
                    onClick={() => handleNavClick("", "/industries/media-and-entertainment")}
                    className="block text-[#FD6E12]"
                  >
                    • Media & Entertainment
                  </button>
                  <button
                    onClick={() => handleNavClick("", "/industries/communications")}
                    className="block"
                  >
                    • Communications
                  </button>
                  <button
                    onClick={() => handleNavClick("", "/industries/banking-and-financial-services")}
                    className="block"
                  >
                    • Banking & Financial Services
                  </button>
                  <button
                    onClick={() => handleNavClick("", "/industries/education")}
                    className="block"
                  >
                    • Education
                  </button>
                  <button
                    onClick={() => handleNavClick("", "/industries/energy-and-utilities")}
                    className="block"
                  >
                    • Energy & Utilities
                  </button>
                  <button
                    onClick={() => handleNavClick("", "/industries/healthcare-and-life-sciences")}
                    className="block"
                  >
                    • Healthcare & Life Sciences
                  </button>
                </div>
              </div>

              <div>
                <button
                  onClick={() => handleNavClick("featured-story")}
                  className="w-full text-left font-black text-lg text-zinc-900 py-2 border-b border-zinc-100 flex items-center justify-between"
                >
                  <span>INSIGHTS</span>
                  <ArrowRight className="w-4 h-4 text-[#FD6E12]" />
                </button>
              </div>

              <div>
                <button
                  onClick={() => handleNavClick("careers")}
                  className="w-full text-left font-black text-lg text-zinc-900 py-2 border-b border-zinc-100 flex items-center justify-between"
                >
                  <span>CAREERS</span>
                  <ArrowRight className="w-4 h-4 text-[#FD6E12]" />
                </button>
              </div>

              <div>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="w-full text-left font-black text-lg text-[#FD6E12] py-2 border-b border-zinc-100 flex items-center justify-between"
                >
                  <span>CONTACT US</span>
                  <ArrowRight className="w-4 h-4 text-[#FD6E12]" />
                </button>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-4 rounded-full bg-[#FD6E12] text-white font-extrabold text-xs uppercase tracking-widest text-center shadow-lg"
              >
                Let&apos;s Talk Business →
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 
        ======================================================================
        04. BACKDROP OVERLAY FOR MEGA MENU
        ======================================================================
      */}
      {activeDropdown !== null && (
        <div
          className="fixed inset-0 top-[90px] bg-black/25 backdrop-blur-[2px] z-30 transition-opacity duration-300 pointer-events-auto"
          onClick={closeDropdowns}
        />
      )}
    </>
  );
};
