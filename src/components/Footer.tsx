"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Globe, ChevronUp, ChevronDown, ArrowUp } from "lucide-react";
import { Logo } from "@/components/Logo";

export const Footer: React.FC = () => {
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("English (Global)");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    if (id === "careers") {
      window.location.href = "/careers";
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#070624] text-white overflow-hidden select-none">
      {/* 
        ======================================================================
        EXACT WIREFRAME BACKGROUND MATCHING ADPULSE DIGITAL FOOTER
        Slanted geometric facets, angled diagonal lines, and vertical dividers
        ======================================================================
      */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1440 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Top diagonal line across the upper third */}
          <line
            x1="-50"
            y1="85"
            x2="520"
            y2="5"
            stroke="rgba(88, 120, 215, 0.22)"
            strokeWidth="1"
          />
          <line
            x1="520"
            y1="5"
            x2="780"
            y2="-35"
            stroke="rgba(88, 120, 215, 0.22)"
            strokeWidth="1"
          />
          <line
            x1="780"
            y1="-35"
            x2="1500"
            y2="-140"
            stroke="rgba(88, 120, 215, 0.22)"
            strokeWidth="1"
          />

          {/* Middle primary diagonal wireframe lines (slanted facet boundaries) */}
          <line
            x1="-80"
            y1="195"
            x2="490"
            y2="105"
            stroke="rgba(88, 120, 215, 0.28)"
            strokeWidth="1"
          />
          <line
            x1="490"
            y1="105"
            x2="780"
            y2="60"
            stroke="rgba(88, 120, 215, 0.28)"
            strokeWidth="1"
          />
          <line
            x1="780"
            y1="60"
            x2="1040"
            y2="20"
            stroke="rgba(88, 120, 215, 0.28)"
            strokeWidth="1"
          />
          <line
            x1="1040"
            y1="20"
            x2="1520"
            y2="-55"
            stroke="rgba(88, 120, 215, 0.28)"
            strokeWidth="1"
          />

          {/* Lower diagonal wireframe line */}
          <line
            x1="-80"
            y1="340"
            x2="480"
            y2="250"
            stroke="rgba(88, 120, 215, 0.22)"
            strokeWidth="1"
          />
          <line
            x1="480"
            y1="250"
            x2="1050"
            y2="160"
            stroke="rgba(88, 120, 215, 0.22)"
            strokeWidth="1"
          />
          <line
            x1="1050"
            y1="160"
            x2="1520"
            y2="85"
            stroke="rgba(88, 120, 215, 0.22)"
            strokeWidth="1"
          />

          {/* Vertical divider lines between sections matching screenshot */}
          {/* Vertical line 1: before Column 1 (Our Brand) */}
          <line
            x1="490"
            y1="105"
            x2="490"
            y2="380"
            stroke="rgba(88, 120, 215, 0.3)"
            strokeWidth="1"
          />

          {/* Vertical line 2: between Column 1 (Our Brand) and Column 2 (News) */}
          <line
            x1="780"
            y1="60"
            x2="780"
            y2="380"
            stroke="rgba(88, 120, 215, 0.3)"
            strokeWidth="1"
          />

          {/* Vertical line 3: between Column 2 (News) and Social/Language column */}
          <line
            x1="1040"
            y1="20"
            x2="1040"
            y2="380"
            stroke="rgba(88, 120, 215, 0.3)"
            strokeWidth="1"
          />

          {/* Far left vertical subtle line */}
          <line
            x1="220"
            y1="150"
            x2="220"
            y2="380"
            stroke="rgba(88, 120, 215, 0.15)"
            strokeWidth="1"
          />

          {/* Far right vertical subtle line */}
          <line
            x1="1400"
            y1="-30"
            x2="1400"
            y2="380"
            stroke="rgba(88, 120, 215, 0.2)"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 pt-16 pb-12">
        {/* Top Content Row: 4 Clean Columns matching exact layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start min-h-[220px]">
          {/* ============================================================== */}
          {/* COLUMN 1: BRAND LOGO + 10 YEARS EMBLEM (Matches Left Section) */}
          {/* ============================================================== */}
          <div className="md:col-span-4 flex items-center gap-5 sm:gap-6 pt-2">
            {/* AdPulse Digital Official Brand Logo (Ultra HD) */}
            <div
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="cursor-pointer group select-none shrink-0"
            >
              <Logo theme="dark" showBadge={false} size="md" />
            </div>

            {/* Thin vertical separator line (matches screenshot) */}
            <div className="h-10 w-[1px] bg-white/20 shrink-0" />

            {/* 10 Years Emblem with Slanted Striped Pattern (matches '40 Years of TechM') */}
            <div className="flex flex-col justify-center shrink-0">
              <svg width="44" height="28" viewBox="0 0 44 28" fill="none">
                <defs>
                  <pattern
                    id="red-stripes-emblem"
                    width="4"
                    height="4"
                    patternTransform="rotate(45 0 0)"
                    patternUnits="userSpaceOnUse"
                  >
                    <line
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="4"
                      stroke="#FF5B00"
                      strokeWidth="2"
                    />
                    <line
                      x1="2"
                      y1="0"
                      x2="2"
                      y2="4"
                      stroke="#FF8A00"
                      strokeWidth="2"
                    />
                  </pattern>
                </defs>
                <text
                  x="0"
                  y="24"
                  fill="url(#red-stripes-emblem)"
                  fontSize="28"
                  fontWeight="900"
                  fontFamily="var(--font-heading)"
                  letterSpacing="-0.04em"
                >
                  10
                </text>
              </svg>
              <span className="text-[8.5px] font-semibold text-zinc-300 uppercase tracking-wider font-heading leading-tight -mt-0.5">
                Years of AdPulse
              </span>
            </div>
          </div>

          {/* ============================================================== */}
          {/* COLUMN 2: OUR BRAND & COMPANY */}
          {/* ============================================================== */}
          <div className="md:col-span-3 space-y-3.5 pl-0 md:pl-6">
            <ul className="space-y-3.5 text-[13px] sm:text-[14px] font-normal text-zinc-200">
              <li>
                <Link
                  href="/about-us/our-brand"
                  className="hover:text-white hover:translate-x-0.5 transition-all text-left inline-block"
                >
                  Our Brand & Philosophy
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("scale-at-speed")}
                  className="hover:text-white hover:translate-x-0.5 transition-all text-left"
                >
                  Growth Playbook
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("capabilities")}
                  className="hover:text-white hover:translate-x-0.5 transition-all text-left"
                >
                  Marketing Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("success-stories")}
                  className="hover:text-white hover:translate-x-0.5 transition-all text-left"
                >
                  Client Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact-cta")}
                  className="hover:text-white hover:translate-x-0.5 transition-all text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* ============================================================== */}
          {/* COLUMN 3: MARKETING CAPABILITIES */}
          {/* ============================================================== */}
          <div className="md:col-span-2 space-y-3.5 pl-0 md:pl-4">
            <ul className="space-y-3.5 text-[13px] sm:text-[14px] font-normal text-zinc-200">
              <li>
                <button
                  onClick={() => scrollToSection("capabilities")}
                  className="hover:text-white hover:translate-x-0.5 transition-all text-left"
                >
                  Performance Ads
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("capabilities")}
                  className="hover:text-white hover:translate-x-0.5 transition-all text-left"
                >
                  SEO & AI Search
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("capabilities")}
                  className="hover:text-white hover:translate-x-0.5 transition-all text-left"
                >
                  Social & Creator
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("capabilities")}
                  className="hover:text-white hover:translate-x-0.5 transition-all text-left"
                >
                  Creative & Copy
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("careers")}
                  className="hover:text-white hover:translate-x-0.5 transition-all text-left"
                >
                  Careers
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact-cta")}
                  className="hover:text-white hover:translate-x-0.5 transition-all text-left"
                >
                  Free Marketing Audit
                </button>
              </li>
            </ul>
          </div>

          {/* ============================================================== */}
          {/* COLUMN 4: SOCIAL ICONS & LANGUAGE SELECTOR (Matches right side) */}
          {/* ============================================================== */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end min-h-[190px] pt-1">
            {/* Top row: 5 Crisp White Social Media Icons matching screenshot */}
            <div className="flex items-center gap-4 text-white">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FD6E12] transition-colors p-1"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 5.004 3.666 9.157 8.438 9.908v-7.009H7.902v-2.899h2.536V9.789c0-2.502 1.492-3.883 3.77-3.883 1.091 0 2.231.195 2.231.195v2.454h-1.257c-1.241 0-1.628.771-1.628 1.562v1.875h2.771l-.443 2.899h-2.328v7.009C18.334 21.157 22 17.004 22 12c0-5.477-4.477-10-10-10z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FD6E12] transition-colors p-1"
                aria-label="X Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FD6E12] transition-colors p-1"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FD6E12] transition-colors p-1"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FD6E12] transition-colors p-1"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>

            {/* Bottom-right: Language Selector Pill (exact match to screenshot) */}
            <div className="relative mt-8 md:mt-0">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-md bg-[#0D0B3B]/80 hover:bg-[#14104B] border border-white/20 text-xs font-semibold text-white transition-all shadow-sm"
              >
                <Globe className="w-3.5 h-3.5 text-white shrink-0" />
                <span>{selectedLang}</span>
                <span className="text-[9px] text-zinc-300 ml-1">▲</span>
              </button>

              {langOpen && (
                <div className="absolute right-0 bottom-full mb-2 w-44 bg-[#0A0835] rounded-lg shadow-2xl border border-zinc-700 py-1 text-xs z-50">
                  <button
                    onClick={() => {
                      setSelectedLang("English (Global)");
                      setLangOpen(false);
                    }}
                    className="w-full text-left px-3 py-1.5 hover:bg-white/10 hover:text-[#FD6E12] text-zinc-200 flex items-center justify-between"
                  >
                    <span>English (Global)</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FD6E12]" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 
          ======================================================================
          CONTINUOUS THIN HORIZONTAL DIVIDER LINE (Matches screenshot)
          ======================================================================
        */}
        <div className="mt-12 pt-5 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] sm:text-[12px] text-zinc-400">
          {/* Left: Copyright */}
          <div>
            <span>© 2026 AdPulse Digital Limited</span>
          </div>

          {/* Right: Legal Links separated by bullet dots (exact match to screenshot) */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-zinc-400">
            <a
              href="#terms"
              className="hover:text-white transition-colors"
            >
              Terms of Use
            </a>
            <span className="text-zinc-600">•</span>
            <a
              href="#accessibility"
              className="hover:text-white transition-colors"
            >
              Accessibility
            </a>
            <span className="text-zinc-600">•</span>
            <a
              href="#privacy"
              className="hover:text-white transition-colors"
            >
              Privacy
            </a>
            <span className="text-zinc-600">•</span>
            <a
              href="#cookie-policy"
              className="hover:text-white transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>

      {/* 
        ======================================================================
        BOTTOM-RIGHT CIRCULAR BACK-TO-TOP BUTTON (Matches screenshot)
        ======================================================================
      */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="absolute bottom-5 right-6 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-[#FD6E12] text-white flex items-center justify-center transition-all duration-300 border border-white/15 hover:border-transparent group"
      >
        <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </footer>
  );
};
