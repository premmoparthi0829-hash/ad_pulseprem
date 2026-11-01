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
        01. TOP FIXED HEADER BAR (Exact match to Tech Mahindra style)
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[76px] sm:h-[82px]">
          {/* Logo on Left with 10+ Years / 40 Years Emblem */}
          <div
            onClick={() => {
              closeDropdowns();
              if (typeof window !== "undefined" && window.location.pathname !== "/") {
                router.push("/");
              } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="cursor-pointer shrink-0 py-2"
          >
            <Logo theme="light" showBadge={true} />
          </div>

          {/* Desktop Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 h-full text-[13px] font-bold tracking-wider font-heading uppercase text-zinc-800">
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
                    : "text-zinc-800 hover:text-[#ED1B36]"
                }`}
              >
                <span>ABOUT US</span>
                {(activeDropdown === "about" || activePage === "about") && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#242321]" />
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
                    : "text-zinc-800 hover:text-[#ED1B36]"
                }`}
              >
                <span>CAPABILITIES</span>
                {(activeDropdown === "capabilities" || activePage === "capabilities") && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#242321]" />
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
                    ? "text-[#ED1B36]"
                    : "text-zinc-800 hover:text-[#ED1B36]"
                }`}
              >
                <span>INDUSTRIES</span>
                {(activeDropdown === "industries" || activePage === "industries") && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#242321]" />
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
                    : "text-zinc-800 hover:text-[#ED1B36]"
                }`}
              >
                <span>INSIGHTS</span>
                {(activeDropdown === "insights" || activePage === "insights") && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#242321]" />
                )}
              </button>
            </div>

            {/* 05. CAREERS */}
            <div
              className="h-full flex items-center relative"
              onMouseEnter={() => handleMouseEnter("careers")}
            >
              <button
                onClick={() => handleNavClick("careers")}
                className={`h-full flex items-center px-1 transition-colors uppercase relative select-none ${
                  activeDropdown === "careers"
                    ? "text-black"
                    : "text-zinc-800 hover:text-[#ED1B36]"
                }`}
              >
                <span>CAREERS</span>
                {(activeDropdown === "careers" || activePage === "careers") && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#242321]" />
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
                    : "text-zinc-800 hover:text-[#ED1B36]"
                }`}
              >
                <span>CONTACT US</span>
                {activePage === "contact" && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#242321]" />
                )}
              </button>
            </div>
          </nav>

          {/* Right Action Icons: Search & Language */}
          <div className="flex items-center gap-5 shrink-0">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              aria-label="Search"
              className="p-2 text-zinc-700 hover:text-[#ED1B36] transition-colors"
            >
              <Search className="w-5 h-5 stroke-[2.2]" />
            </button>

            {/* Subtle Divider */}
            <div className="hidden sm:block w-[1px] h-4 bg-zinc-200" />

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm border border-zinc-200 hover:border-zinc-300 text-xs font-bold text-zinc-700 hover:text-zinc-900 transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-zinc-500" />
                <span className="uppercase text-[11px]">{selectedLanguage}</span>
                <span className="w-2 h-1.5 border-l-3 border-r-3 border-t-3 border-transparent border-t-red-600 inline-block ml-0.5" />
              </button>

              {languageMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-32 bg-white rounded-md shadow-xl border border-zinc-200 py-1.5 z-50 text-xs animate-in fade-in duration-150">
                  {["EN", "DE", "FR", "ES", "JP"].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setSelectedLanguage(lang);
                        setLanguageMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-1.5 hover:bg-zinc-50 hover:text-[#ED1B36] font-semibold text-zinc-700"
                    >
                      {lang === "EN" ? "English" : lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-zinc-800 hover:text-[#ED1B36]"
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
                            className="hover:text-[#ED1B36] transition-colors"
                          >
                            Leadership
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleNavClick("scale-at-speed")}
                            className="hover:text-[#ED1B36] transition-colors"
                          >
                            Our Brand
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleNavClick("approach")}
                            className="hover:text-[#ED1B36] transition-colors"
                          >
                            Sustainability
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleNavClick("big-thinkers")}
                            className="hover:text-[#ED1B36] transition-colors"
                          >
                            Recognition
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleNavClick("success-stories")}
                            className="hover:text-[#ED1B36] transition-colors"
                          >
                            Customer Speak
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleNavClick("capabilities")}
                            className="hover:text-[#ED1B36] transition-colors"
                          >
                            Partners Ecosystem
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleNavClick("capabilities")}
                            className="hover:text-[#ED1B36] transition-colors"
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
                          className="text-[13px] font-bold text-zinc-900 hover:text-[#ED1B36] transition-colors block"
                        >
                          News
                        </button>
                      </div>

                      <div>
                        <button
                          onClick={() => handleNavClick("scale-at-speed")}
                          className="text-[13px] font-bold text-zinc-900 hover:text-[#ED1B36] transition-colors block"
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
                              className="hover:text-[#ED1B36] transition-colors"
                            >
                              AdPulse Foundation
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => handleNavClick("approach")}
                              className="hover:text-[#ED1B36] transition-colors"
                            >
                              Educational Institutions
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => handleNavClick("careers")}
                              className="hover:text-[#ED1B36] transition-colors"
                            >
                              Individual Social Responsibility
                            </button>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <button
                          onClick={() => handleNavClick("scale-at-speed")}
                          className="text-[13px] font-bold text-zinc-900 hover:text-[#ED1B36] transition-colors block"
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
                      onClick={() => handleNavClick("scale-at-speed")}
                      className="flex-1 relative overflow-hidden group cursor-pointer p-7 flex flex-col justify-end min-h-[175px]"
                    >
                      <Image
                        src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&auto=format&fit=crop&q=80"
                        alt="Scale at Speed"
                        fill
                        sizes="400px"
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
                          <span className="text-[10px] font-black uppercase tracking-widest text-white/90 group-hover:text-[#ED1B36] transition-colors">
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
                        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80"
                        alt="AI Delivered Right"
                        fill
                        sizes="400px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20" />
                      <div className="relative z-10 space-y-1">
                        <h4 className="text-lg font-black font-heading text-white leading-snug tracking-tight">
                          AI Delivered Right
                        </h4>
                        <div className="pt-1">
                          <span className="text-[10px] font-black uppercase tracking-widest text-white/90 group-hover:text-[#ED1B36] transition-colors">
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
                          className="hover:text-[#ED1B36] transition-colors text-left"
                        >
                          Banking & Financial Services
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleNavClick("", "/industries/communications")}
                          className="hover:text-[#ED1B36] transition-colors text-left"
                        >
                          Communications
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleNavClick("", "/industries/education")}
                          className="hover:text-[#ED1B36] transition-colors text-left"
                        >
                          Education
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleNavClick("", "/industries/energy-and-utilities")}
                          className="hover:text-[#ED1B36] transition-colors text-left"
                        >
                          Energy & Utilities
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleNavClick("", "/industries/healthcare-and-life-sciences")}
                          className="hover:text-[#ED1B36] transition-colors text-left"
                        >
                          Healthcare & Life Sciences
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleNavClick("", "/industries/hi-tech-and-software")}
                          className="hover:text-[#ED1B36] transition-colors text-left"
                        >
                          Hi Tech
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleNavClick("", "/industries/insurance")}
                          className="hover:text-[#ED1B36] transition-colors text-left"
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
                          className="hover:text-[#ED1B36] transition-colors text-left"
                        >
                          Manufacturing
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleNavClick("", "/industries/media-and-entertainment")}
                          className="hover:text-[#ED1B36] font-bold text-[#ED1B36] transition-colors text-left flex items-center gap-1"
                        >
                          <span>Media & Entertainment</span>
                          <span className="text-[10px] text-[#ED1B36] font-bold">★</span>
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleNavClick("", "/industries/oil-and-gas")}
                          className="hover:text-[#ED1B36] transition-colors text-left"
                        >
                          Oil & Gas
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleNavClick("", "/industries/private-equity")}
                          className="hover:text-[#ED1B36] transition-colors text-left"
                        >
                          Private Equity
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleNavClick("", "/industries/professional-services")}
                          className="hover:text-[#ED1B36] transition-colors text-left"
                        >
                          Professional Services
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleNavClick("", "/industries/retail-and-consumer-goods")}
                          className="hover:text-[#ED1B36] transition-colors text-left"
                        >
                          Retail & Consumer Goods
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleNavClick("", "/industries/travel-and-hospitality")}
                          className="hover:text-[#ED1B36] transition-colors text-left"
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
                        src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80"
                        alt="The Bank of Tomorrow"
                        fill
                        sizes="400px"
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
                          <span className="text-[10px] font-black uppercase tracking-widest text-white/90 group-hover:text-[#ED1B36] transition-colors">
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
                        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80"
                        alt="Zero Gravity Telco Architecture"
                        fill
                        sizes="400px"
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
                          <span className="text-[10px] font-black uppercase tracking-widest text-white/90 group-hover:text-[#ED1B36] transition-colors">
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
                          onClick={() => handleNavClick("careers")}
                          className="hover:text-[#ED1B36] transition-colors text-sm font-semibold"
                        >
                          The AdPulse Way
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleNavClick("careers")}
                          className="hover:text-[#ED1B36] transition-colors text-sm font-semibold"
                        >
                          Diversity & Inclusion
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleNavClick("careers")}
                          className="hover:text-[#ED1B36] transition-colors text-sm font-semibold"
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
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80"
                        alt="Outpacing Change with Rubicon 2.0"
                        fill
                        sizes="400px"
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
                          <span className="text-[10px] font-black uppercase tracking-widest text-white/90 group-hover:text-[#ED1B36] transition-colors">
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
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80"
                        alt="Stockmann Cuts Supplier Onboarding"
                        fill
                        sizes="400px"
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
                          <span className="text-[10px] font-black uppercase tracking-widest text-white/90 group-hover:text-[#ED1B36] transition-colors">
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
                        Digital Engineering & Cloud
                      </h3>
                      <ul className="space-y-2 text-zinc-600 font-medium">
                        <li>
                          <button
                            onClick={() => handleNavClick("capabilities")}
                            className="hover:text-[#ED1B36] transition-colors"
                          >
                            Cloud Modernization & DevOps
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleNavClick("capabilities")}
                            className="hover:text-[#ED1B36] transition-colors"
                          >
                            AI, Machine Learning & Automation
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleNavClick("capabilities")}
                            className="hover:text-[#ED1B36] transition-colors"
                          >
                            Enterprise Microservices Architecture
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleNavClick("capabilities")}
                            className="hover:text-[#ED1B36] transition-colors"
                          >
                            Cybersecurity & Zero-Trust Mesh
                          </button>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-[13px] font-bold text-zinc-900 tracking-tight">
                        Experience & Growth
                      </h3>
                      <ul className="space-y-2 text-zinc-600 font-medium">
                        <li>
                          <button
                            onClick={() => handleNavClick("capabilities")}
                            className="hover:text-[#ED1B36] transition-colors"
                          >
                            Full-Funnel Growth Marketing
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleNavClick("capabilities")}
                            className="hover:text-[#ED1B36] transition-colors"
                          >
                            Next-Gen Headless Commerce
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleNavClick("capabilities")}
                            className="hover:text-[#ED1B36] transition-colors"
                          >
                            Spatial Computing & Virtual Production
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleNavClick("capabilities")}
                            className="hover:text-[#ED1B36] transition-colors"
                          >
                            Data Intelligence & Analytics
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="w-full lg:w-[360px] shrink-0 border-l border-zinc-100 flex flex-col">
                    <div
                      onClick={() => handleNavClick("capabilities")}
                      className="flex-1 relative overflow-hidden group cursor-pointer p-7 flex flex-col justify-end min-h-[175px]"
                    >
                      <Image
                        src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80"
                        alt="Core Practice"
                        fill
                        sizes="400px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/20" />
                      <div className="relative z-10 space-y-1">
                        <span className="text-[11px] font-semibold text-white/90 border-b border-white/60 pb-0.5 inline-block w-fit">
                          Core Practice
                        </span>
                        <h4 className="text-base font-black font-heading text-white leading-snug tracking-tight">
                          Scale at Speed™ Cloud Migration
                        </h4>
                        <div className="pt-1">
                          <span className="text-[10px] font-black uppercase tracking-widest text-white/90 group-hover:text-[#ED1B36] transition-colors">
                            EXPLORE ALL 12 CAPABILITIES
                          </span>
                        </div>
                      </div>
                    </div>

                    <div
                      onClick={() => handleNavClick("featured-story")}
                      className="flex-1 relative overflow-hidden group cursor-pointer p-7 flex flex-col justify-end min-h-[175px] border-t border-white/10"
                    >
                      <Image
                        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80"
                        alt="Sovereign AI Engine"
                        fill
                        sizes="400px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20" />
                      <div className="relative z-10 space-y-1">
                        <span className="text-[11px] font-semibold text-white/90 border-b border-white/60 pb-0.5 inline-block w-fit">
                          Innovation Lab
                        </span>
                        <h4 className="text-base font-black font-heading text-white leading-snug tracking-tight">
                          Sovereign AI Engine for Global Enterprise
                        </h4>
                        <div className="pt-1">
                          <span className="text-[10px] font-black uppercase tracking-widest text-white/90 group-hover:text-[#ED1B36] transition-colors">
                            READ FRAMEWORK
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
                          className="hover:text-[#ED1B36] transition-colors text-sm font-semibold"
                        >
                          Executive Podcast & Dispatches
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleNavClick("latest-thinking")}
                          className="hover:text-[#ED1B36] transition-colors text-sm font-semibold"
                        >
                          Latest Thinking & Research
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleNavClick("success-stories")}
                          className="hover:text-[#ED1B36] transition-colors text-sm font-semibold"
                        >
                          Enterprise Case Studies
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleNavClick("whats-new")}
                          className="hover:text-[#ED1B36] transition-colors text-sm font-semibold"
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
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80"
                        alt="Sovereign AI Podcast"
                        fill
                        sizes="400px"
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
                          <span className="text-[10px] font-black uppercase tracking-widest text-white/90 group-hover:text-[#ED1B36] transition-colors">
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
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80"
                        alt="The Enterprise CMO Playbook"
                        fill
                        sizes="400px"
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
                          <span className="text-[10px] font-black uppercase tracking-widest text-white/90 group-hover:text-[#ED1B36] transition-colors">
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
          <div className="lg:hidden fixed inset-x-0 top-[76px] sm:top-[82px] bottom-0 bg-white z-50 overflow-y-auto p-6 space-y-6">
            <div className="space-y-4">
              <div>
                <button
                  onClick={() => handleNavClick("scale-at-speed")}
                  className="w-full text-left font-black text-lg text-zinc-900 py-2 border-b border-zinc-100 flex items-center justify-between"
                >
                  <span>ABOUT US</span>
                  <ArrowRight className="w-4 h-4 text-[#ED1B36]" />
                </button>
              </div>

              <div>
                <button
                  onClick={() => handleNavClick("capabilities")}
                  className="w-full text-left font-black text-lg text-zinc-900 py-2 border-b border-zinc-100 flex items-center justify-between"
                >
                  <span>CAPABILITIES</span>
                  <ArrowRight className="w-4 h-4 text-[#ED1B36]" />
                </button>
              </div>

              <div>
                <button
                  onClick={() => handleNavClick("industries")}
                  className="w-full text-left font-black text-lg text-zinc-900 py-2 border-b border-zinc-100 flex items-center justify-between"
                >
                  <span>INDUSTRIES</span>
                  <ArrowRight className="w-4 h-4 text-[#ED1B36]" />
                </button>
                <div className="pl-4 py-2 space-y-2 text-xs font-semibold text-zinc-600">
                  <button
                    onClick={() => handleNavClick("", "/industries/media-and-entertainment")}
                    className="block text-[#ED1B36]"
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
                  <ArrowRight className="w-4 h-4 text-[#ED1B36]" />
                </button>
              </div>

              <div>
                <button
                  onClick={() => handleNavClick("careers")}
                  className="w-full text-left font-black text-lg text-zinc-900 py-2 border-b border-zinc-100 flex items-center justify-between"
                >
                  <span>CAREERS</span>
                  <ArrowRight className="w-4 h-4 text-[#ED1B36]" />
                </button>
              </div>

              <div>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="w-full text-left font-black text-lg text-[#ED1B36] py-2 border-b border-zinc-100 flex items-center justify-between"
                >
                  <span>CONTACT US</span>
                  <ArrowRight className="w-4 h-4 text-[#ED1B36]" />
                </button>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-4 rounded-full bg-[#ED1B36] text-white font-extrabold text-xs uppercase tracking-widest text-center shadow-lg"
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
          className="fixed inset-0 top-[76px] sm:top-[82px] bg-black/25 backdrop-blur-[2px] z-30 transition-opacity duration-300 pointer-events-auto"
          onClick={closeDropdowns}
        />
      )}
    </>
  );
};
