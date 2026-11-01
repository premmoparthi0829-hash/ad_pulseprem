"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { ArrowUp, Quote, CheckCircle2, Plus, Minus } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Header } from "@/components/Header";
import { Careers } from "@/components/Careers";
import { Footer } from "@/components/Footer";
import { SearchModal } from "@/components/SearchModal";
import { ContactModal } from "@/components/ContactModal";

export default function ScaleAtSpeedPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeAICard, setActiveAICard] = useState<number>(1);

  // Parallax animation ref for the Typographic Section (Embrace / Scale at Speed)
  const [typoElement, setTypoElement] = useState<HTMLElement | null>(null);
  const typoRef = useRef<HTMLElement | null>(null);
  const setTypoRef = (node: HTMLElement | null) => {
    typoRef.current = node;
    setTypoElement(node);
  };

  const { scrollYProgress } = useScroll(
    typoElement
      ? {
          target: typoRef as React.RefObject<HTMLElement>,
          offset: ["start end", "end start"],
        }
      : {}
  );

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  // Dynamic parallax offset: Embrace drifts right, Scale at Speed drifts left
  const embraceX = useTransform(smoothProgress, [0, 1], [-80, 80]);
  const speedX = useTransform(smoothProgress, [0, 1], [80, -80]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F2EA] text-[#242321] selection:bg-[#ED1B36] selection:text-white relative">
      {/* 00. Global Sticky Header */}
      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <main className="flex-1 w-full overflow-hidden pt-[90px]">
        {/* 
          ======================================================================
          01. SECTION 01: HERO BANNER (Scale at Speed™ & Formula E Hypercar)
          ======================================================================
        */}
        <section className="relative bg-[#F6F2EA] border-b border-zinc-200/80 min-h-[440px] sm:min-h-[500px] lg:min-h-[560px] flex items-center overflow-hidden">
          {/* Subtle vertical pinstripes pattern on cream background */}
          <div className="absolute inset-0 pointer-events-none opacity-30 z-0">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="pinstripes"
                  width="48"
                  height="48"
                  patternUnits="userSpaceOnUse"
                >
                  <line
                    x1="48"
                    y1="0"
                    x2="48"
                    y2="48"
                    stroke="#D8D0C3"
                    strokeWidth="0.8"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#pinstripes)" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10 py-12 sm:py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Heading & Mission Statement */}
              <div className="lg:col-span-7 xl:col-span-6 space-y-4 sm:space-y-6">
                <div>
                  <div className="flex items-start">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black font-heading tracking-tight text-[#111827] leading-none">
                      Scale at Speed
                    </h1>
                    <sup className="text-base sm:text-xl lg:text-2xl font-bold text-[#111827] ml-1 mt-1">
                      ™
                    </sup>
                  </div>
                </div>

                <p className="text-sm sm:text-base lg:text-lg text-zinc-700 font-normal leading-relaxed max-w-xl">
                  Our promise to help enterprises transform at speed, bring agility, resilience, and efficiency to their businesses.
                </p>
              </div>

              {/* Mobile Racecar Image (visible on smaller screens) */}
              <div className="lg:hidden relative h-64 sm:h-80 w-full overflow-hidden rounded-none shadow-md">
                <Image
                  src="/images/scale-at-speed/ai-racing-sports-car.jpg"
                  alt="AI Designed Racing Sports Car - Scale at Speed with AdPulse Digital"
                  fill
                  unoptimized
                  priority
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Right Column: High-Performance Racecar with Angled Split Cut */}
          <div
            className="hidden lg:block absolute right-0 top-0 bottom-0 w-[52%] xl:w-[50%] z-10 pointer-events-none"
            style={{
              clipPath: "polygon(14% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src="/images/scale-at-speed/ai-racing-sports-car.jpg"
                alt="AdPulse Digital - AI Designed Scale at Speed High Velocity Sports Car"
                fill
                unoptimized
                priority
                className="object-cover object-center filter contrast-105"
              />
              {/* Subtle aerodynamic vignette */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#F6F2EA]/20 via-transparent to-black/20 pointer-events-none" />
            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          02. SECTION 02: BE FUTURE-READY (Deep Burgundy Narrative)
          ======================================================================
        */}
        <section className="relative bg-[#58001E] text-white py-16 sm:py-20 lg:py-28 overflow-hidden">
          {/* Diagonal subtle line pattern texture */}
          <div className="absolute inset-0 pointer-events-none opacity-15 z-0">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="diagonal-stripes"
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
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#diagonal-stripes)" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-12 sm:space-y-16">
            {/* Section Headings */}
            <div className="space-y-1">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-[#ED1B36] tracking-tight">
                Be Future-Ready
              </h2>
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white tracking-tight">
                With AdPulse Digital
              </h3>
            </div>

            {/* Two-Column Strategic Manifesto (Exact match to reference copy) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 text-sm sm:text-base lg:text-[17px] text-zinc-100/90 leading-relaxed font-normal">
              <div className="space-y-6">
                <p>
                  AI isn&apos;t just changing the game anymore. It&apos;s rewriting the rules entirely. Add geopolitical shifts to the mix, and you&apos;ve got a landscape where uncertainty is the only constant. In this new reality, getting digital right isn&apos;t optional. It&apos;s everything.
                </p>
                <p>
                  Enterprises need to rethink how they transform and build competitive moats fast. But here&apos;s the challenge most companies face: they&apos;ve always had to choose between scale or speed.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-bold text-base sm:text-lg mb-2">
                    Not anymore.
                  </h4>
                  <p>
                    That choice has collapsed into a single imperative: scale at speed. Today, enterprises need partners who can move fast without breaking things. Partners with the agility to pivot and the resilience to deliver.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-bold text-base sm:text-lg mb-2">
                    That&apos;s where we come in.
                  </h4>
                  <p>
                    Scale at Speed isn&apos;t just our promise. It&apos;s how we help you win in a world that won&apos;t wait.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          03. SECTION 03: THE IMPERATIVE ACROSS INDUSTRIES (Midnight Navy Blue)
          ======================================================================
        */}
        <section className="relative bg-[#060B1C] text-white py-16 sm:py-24 lg:py-28 overflow-hidden border-t border-b border-zinc-900">
          {/* Subtle vertical architectural grid lines */}
          <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
            <div className="w-full h-full grid grid-cols-6 sm:grid-cols-12 divide-x divide-zinc-700/50" />
          </div>

          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Heading and Editorial Narrative */}
              <div className="lg:col-span-7 space-y-6 sm:space-y-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight leading-tight">
                  The Imperative
                  <br />
                  Across Industries
                </h2>

                <div className="space-y-5 text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                  <p>
                    Every industry faces its own version of the scale vs speed challenge. Financial services need to move billions securely while launching new products in weeks, not quarters. Manufacturers are reinventing supply chains that span continents. Telcos are building networks for a world we&apos;re still imagining.
                  </p>
                  <p>
                    The complexity is real. Global operations, shifting regulations, legacy systems that can&apos;t just be switched off. But complexity isn&apos;t an excuse to move slowly anymore. It&apos;s exactly why you need to move fast and at scale, simultaneously.
                  </p>
                  <p className="text-white font-medium">
                    The companies that figure this out won&apos;t just survive the next wave of change. They&apos;ll define it.
                  </p>
                </div>
              </div>

              {/* Right Column: Architectural Vertical Fins Image Asset */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md sm:max-w-lg aspect-[5/4] sm:aspect-[4/3] overflow-hidden shadow-2xl border border-zinc-800">
                  <Image
                    src="/images/scale-at-speed/abstract-red-rising.jpg"
                    alt="The Imperative Across Industries - Architectural Innovation"
                    fill
                    unoptimized
                    priority
                    className="object-cover object-center filter contrast-110 brightness-105"
                  />
                  {/* Subtle edge blend */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          04. SECTION 04: TYPOGRAPHIC DIVIDER (Embrace Scale at Speed)
          ======================================================================
        */}
        <section
          ref={setTypoRef}
          className="bg-[#F6F2EA] py-16 sm:py-24 border-b border-zinc-300 overflow-hidden relative"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-6">
            {/* Top Divider Line with Animated Speed Runner */}
            <div className="relative w-full h-[1px] bg-zinc-300 overflow-hidden">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 bg-zinc-300 origin-left"
              />
              <motion.div
                animate={{ x: ["-100%", "300%"] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-0 bottom-0 w-48 bg-gradient-to-r from-transparent via-[#ED1B36] to-transparent opacity-70"
              />
            </div>

            {/* Row 1: "Embrace" with kinetic ambient drift + scroll parallax + interactive hover */}
            <div className="overflow-hidden py-2">
              <motion.div
                style={{ x: embraceX }}
                className="inline-block"
              >
                <motion.div
                  animate={{ x: [-12, 18, -12] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  initial={{ y: "100%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                  className="group inline-flex items-center gap-4 cursor-pointer select-none"
                >
                  <motion.h2
                    whileHover={{
                      skewX: -8,
                      scale: 1.03,
                      transition: { duration: 0.25, ease: "easeOut" },
                    }}
                    className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-heading text-zinc-950 group-hover:text-[#ED1B36] tracking-tight transition-colors duration-300"
                  >
                    Embrace
                  </motion.h2>

                  {/* High velocity aerodynamic red badge / indicator */}
                  <span className="w-3.5 h-3.5 sm:w-5 sm:h-5 bg-[#ED1B36] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 shadow-[0_0_12px_#ED1B36]" />
                </motion.div>
              </motion.div>
            </div>

            {/* Middle Divider Line with Animated Speed Runner */}
            <div className="relative w-full h-[1px] bg-zinc-300 overflow-hidden">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 bg-zinc-300 origin-left"
              />
              <motion.div
                animate={{ x: ["300%", "-100%"] }}
                transition={{ repeat: Infinity, duration: 4.5, delay: 1, ease: "easeInOut" }}
                className="absolute top-0 bottom-0 w-48 bg-gradient-to-r from-transparent via-[#ED1B36] to-transparent opacity-70"
              />
            </div>

            {/* Row 2: "Scale at Speed" with opposing kinetic drift + scroll parallax + interactive hover */}
            <div className="overflow-hidden py-2 flex justify-end">
              <motion.div
                style={{ x: speedX }}
                className="inline-block"
              >
                <motion.div
                  animate={{ x: [12, -18, 12] }}
                  transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut" }}
                  initial={{ y: "100%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="group inline-flex items-center gap-4 cursor-pointer select-none"
                >
                  {/* High velocity aerodynamic red badge / indicator */}
                  <span className="w-3.5 h-3.5 sm:w-5 sm:h-5 bg-[#ED1B36] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 shadow-[0_0_12px_#ED1B36]" />

                  <motion.h2
                    whileHover={{
                      skewX: -8,
                      scale: 1.03,
                      transition: { duration: 0.25, ease: "easeOut" },
                    }}
                    className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-heading text-zinc-950 group-hover:text-[#ED1B36] tracking-tight text-right transition-colors duration-300"
                  >
                    Scale at Speed
                  </motion.h2>
                </motion.div>
              </motion.div>
            </div>

            {/* Bottom Divider Line with Animated Speed Runner */}
            <div className="relative w-full h-[1px] bg-zinc-300 overflow-hidden">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 bg-zinc-300 origin-left"
              />
              <motion.div
                animate={{ x: ["-100%", "300%"] }}
                transition={{ repeat: Infinity, duration: 4, delay: 0.5, ease: "easeInOut" }}
                className="absolute top-0 bottom-0 w-48 bg-gradient-to-r from-transparent via-[#ED1B36] to-transparent opacity-70"
              />
            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          05. SECTION 05: OUR CEO'S PERSPECTIVE (Mohit Joshi)
          ======================================================================
        */}
        <section className="bg-[#F6F2EA] py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-10 sm:space-y-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-zinc-900 tracking-tight">
              Our CEO&apos;s Perspective
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: CEO Portrait on dark grid background box */}
              <div className="lg:col-span-5 flex justify-center lg:justify-start">
                <div className="relative w-[280px] sm:w-[320px] aspect-square bg-[#171212] overflow-hidden shadow-xl border border-zinc-800">
                  {/* Subtle red perspective grid */}
                  <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern
                          id="red-ceo-grid"
                          width="24"
                          height="24"
                          patternUnits="userSpaceOnUse"
                        >
                          <line x1="0" y1="0" x2="24" y2="0" stroke="#ED1B36" strokeWidth="0.8" />
                          <line x1="0" y1="0" x2="0" y2="24" stroke="#ED1B36" strokeWidth="0.8" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#red-ceo-grid)" />
                    </svg>
                  </div>

                  {/* Cutout Portrait */}
                  <div className="relative w-full h-full flex items-end justify-center">
                    <Image
                      src="/images/mohit-joshi-ceo.png"
                      alt="Mohit Joshi - CEO & Managing Director"
                      fill
                      unoptimized
                      priority
                      className="object-cover object-bottom"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Red Quote & Mission Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 text-[#ED1B36] font-serif font-black text-4xl sm:text-5xl leading-none">
                    &ldquo;&ldquo;
                  </div>
                  <blockquote className="text-base sm:text-lg lg:text-xl text-zinc-800 font-normal leading-relaxed">
                    While the imperative to scale at speed holds true for clients across industries, when you look at the provision of technology services and of the provision of digital services, it really hasn&apos;t come through. This is essentially we at AdPulse Digital promise to bring scale at speed.
                  </blockquote>
                </div>

                <div className="pt-2 pl-11 sm:pl-12 space-y-4">
                  <div>
                    <h3 className="text-base font-bold font-heading text-zinc-950">
                      Mohit Joshi
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600">
                      CEO and Managing Director, AdPulse Digital
                    </p>
                  </div>

                  <div>
                    <button
                      onClick={() => setIsContactOpen(true)}
                      className="px-7 py-3 bg-[#ED1B36] hover:bg-[#C8102E] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm cursor-pointer"
                    >
                      KNOW MORE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          06. SECTION 06: AI DELIVERED RIGHT (Interactive 4-Card Accordion Gallery)
          ======================================================================
        */}
        <section className="bg-[#050814] text-white py-16 sm:py-20 lg:py-24 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-10 sm:space-y-12">
            {/* Header & Gartner Emerging Leader Introductory Paragraph */}
            <div className="space-y-4 max-w-5xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight">
                AI Delivered Right
              </h2>
              <p className="text-xs sm:text-sm lg:text-[15px] text-zinc-300 leading-relaxed font-normal">
                We move beyond vision and experimentation to deliver practical, secure, scalable AI solutions that drive real business outcomes. AdPulse Digital is positioned as an Emerging Leader in the 2025 Gartner® Emerging Market Quadrant Innovation Guide for GenAI Consulting and Implementation Services. Partner with us to unlock AI&apos;s full potential for your business from concept to completion. Experience innovation with{" "}
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="underline hover:text-[#ED1B36] font-semibold text-white transition-colors duration-200 cursor-pointer"
                >
                  &lsquo;AI Delivered Right&rsquo;
                </button>
                .
              </p>
            </div>

            {/* 4 Interactive Columns: Horizontal Accordion Gallery matching exact Screenshot */}
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 items-stretch min-h-[500px] lg:min-h-[520px]">
              {[
                {
                  id: 1,
                  title: "Comprehensive AI Solutions",
                  collapsedTitle: (
                    <>
                      Comprehensive
                      <br />
                      AI Solutions
                    </>
                  ),
                  icon: (isExpanded: boolean) => (
                    <svg
                      className={`w-12 h-12 sm:w-14 sm:h-14 transition-colors duration-300 ${
                        isExpanded ? "text-zinc-950" : "text-[#FF3366] group-hover:text-pink-300"
                      }`}
                      viewBox="0 0 64 64"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M26 12C20 12 16 16 16 22c0 2.5 1 4.5 2 6-2 2-4 5-4 8 0 6 4 10 10 10 2 0 4-.5 5-1.5" />
                      <path d="M20 22c2-1 4-1 6 0" />
                      <path d="M17 31c3-1 6 0 8 2" />
                      <path d="M19 40c2-1 5-1 7 1" />
                      <path d="M28 16h14M28 24h18M28 32h12M28 40h16M28 48h10" />
                      <circle cx="42" cy="16" r="2.5" fill="currentColor" />
                      <circle cx="46" cy="24" r="2.5" fill="currentColor" />
                      <circle cx="40" cy="32" r="2.5" fill="currentColor" />
                      <circle cx="44" cy="40" r="2.5" fill="currentColor" />
                      <circle cx="38" cy="48" r="2.5" fill="currentColor" />
                    </svg>
                  ),
                  description:
                    "AdPulse Digital provides diverse AI solutions that cater to various industries globally. Our expertise spans natural language processing (NLP), computer vision, predictive analytics, and automation, enabling businesses to harness AI-driven efficiencies. We deliver end-to-end AI services with a comprehensive and tailored approach, ensuring seamless integration and implementation. By aligning AI solutions with unique business requirements, we empower enterprises to enhance decision-making, optimize operations, and drive sustainable growth.",
                },
                {
                  id: 2,
                  title: "Diverse Partnership Ecosystem",
                  collapsedTitle: (
                    <>
                      Diverse
                      <br />
                      Partnership
                      <br />
                      Ecosystem
                    </>
                  ),
                  icon: (isExpanded: boolean) => (
                    <svg
                      className={`w-12 h-12 sm:w-14 sm:h-14 transition-colors duration-300 ${
                        isExpanded ? "text-zinc-950" : "text-[#FF3366] group-hover:text-pink-300"
                      }`}
                      viewBox="0 0 64 64"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="32" cy="18" r="5" />
                      <path d="M32 9v3M32 24v3M23 18h3M38 18h3M26 12l2 2M36 22l2 2M26 24l2-2M36 14l2-2" />
                      <path d="M16 38l10-8a4 4 0 0 1 5 0l4 4a3 3 0 0 0 4 0l11-8" />
                      <path d="M14 34l8 8a4 4 0 0 0 5 0l8-8" />
                      <path d="M27 46l5 5a3 3 0 0 0 4 0l11-11a3 3 0 0 0 0-4l-5-5" />
                      <path d="M20 38l-6 6 7 7 5-5" />
                      <path d="M46 38l6 6-7 7-5-5" />
                    </svg>
                  ),
                  description:
                    "AdPulse Digital has forged strategic partnerships with leading technology companies, research institutions, and AI innovators worldwide. These collaborations enable businesses to stay at the forefront of AI advancements and integrate cutting-edge technologies into their solutions. Working closely with partners such as NVIDIA, IBM, Google Cloud, and AWS, AdPulse Digital ensures that our clients benefit from the latest AI innovations and industry best practices as we collaborate closely with partners such as NVIDIA, IBM, Google Cloud, and AWS.",
                },
                {
                  id: 3,
                  title: "Strong Ethical and Responsible AI Practice",
                  collapsedTitle: (
                    <>
                      Strong Ethical
                      <br />
                      and Responsible
                      <br />
                      AI Practice
                    </>
                  ),
                  icon: (isExpanded: boolean) => (
                    <svg
                      className={`w-12 h-12 sm:w-14 sm:h-14 transition-colors duration-300 ${
                        isExpanded ? "text-zinc-950" : "text-[#FF3366] group-hover:text-pink-300"
                      }`}
                      viewBox="0 0 64 64"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="32" cy="16" r="3" fill="currentColor" />
                      <circle cx="18" cy="26" r="3" fill="currentColor" />
                      <circle cx="46" cy="26" r="3" fill="currentColor" />
                      <circle cx="22" cy="44" r="3" fill="currentColor" />
                      <circle cx="42" cy="44" r="3" fill="currentColor" />
                      <circle cx="32" cy="30" r="3.5" fill="currentColor" />
                      <path d="M32 19v8M21 26l8 3M43 26l-8 3M24 42l7-9M40 42l-7-9M18 29l4 12M46 29l-4 12M20 24l10-7M44 24l-10-7M25 44h14" />
                    </svg>
                  ),
                  description:
                    "Trust, transparency, and data integrity form the bedrock of our AI engineering practice. AdPulse Digital embeds strict algorithmic fairness, bias mitigation, zero-trust data privacy, and explainable AI guardrails directly into model training pipelines. Aligned with global regulatory frameworks including the EU AI Act and NIST AI Risk Management Framework, we ensure that every enterprise AI deployment remains safe, defensible, and fully auditable.",
                },
                {
                  id: 4,
                  title: "Highly Skilled Professionals",
                  collapsedTitle: (
                    <>
                      Highly Skilled
                      <br />
                      Professionals
                    </>
                  ),
                  icon: (isExpanded: boolean) => (
                    <svg
                      className={`w-12 h-12 sm:w-14 sm:h-14 transition-colors duration-300 ${
                        isExpanded ? "text-zinc-950" : "text-[#FF3366] group-hover:text-pink-300"
                      }`}
                      viewBox="0 0 64 64"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M24 38c-4-3-7-8-7-14a15 15 0 1 1 30 0c0 6-3 11-7 14v5a2 2 0 0 1-2 2H26a2 2 0 0 1-2-2v-5z" />
                      <path d="M27 49h10M29 54h6" />
                      <path d="M28 22a4 4 0 0 1 4-4v10" />
                      <path d="M36 22a4 4 0 0 0-4-4" />
                      <path d="M27 27a3 3 0 0 1 5 0" />
                      <path d="M37 27a3 3 0 0 0-5 0" />
                      <path d="M14 14l3 3M50 14l-3 3M9 24h4M51 24h4M14 34l3-3M50 34l-3-3" />
                    </svg>
                  ),
                  description:
                    "Our global delivery teams bring together certified AI architects, deep learning engineers, prompt designers, and domain specialists with proven track records across 14 global industries. Through continuous research and hands-on client deployments, our experts turn theoretical cognitive architectures into battle-tested production platforms that deliver measurable ROI from day one.",
                },
              ].map((card) => {
                const isExpanded = activeAICard === card.id;

                if (isExpanded) {
                  return (
                    <div
                      key={card.id}
                      className="lg:w-[38%] xl:w-[39%] flex-shrink-0 bg-[#F6F2EA] text-[#111827] border border-zinc-200 border-b-4 border-b-[#ED1B36] p-8 sm:p-9 lg:p-10 flex flex-col justify-between shadow-2xl transition-all duration-300 relative min-h-[480px] lg:min-h-[520px]"
                    >
                      <div>
                        {/* Top Header: Icon on Left, Clean Minus on Right */}
                        <div className="flex items-start justify-between">
                          <div>{card.icon(true)}</div>
                          <button
                            onClick={() => setActiveAICard(0)}
                            aria-label="Collapse card"
                            className="text-zinc-800 hover:text-[#ED1B36] text-3xl font-light leading-none transition-colors cursor-pointer p-1"
                          >
                            &minus;
                          </button>
                        </div>

                        {/* Card Title */}
                        <h3 className="text-xl sm:text-2xl font-bold font-heading text-zinc-950 mt-7 sm:mt-8 mb-4 tracking-tight">
                          {card.title}
                        </h3>

                        {/* Narrative Content */}
                        <p className="text-xs sm:text-[13px] text-zinc-700 leading-relaxed font-normal">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  );
                }

                return (
                  <div
                    key={card.id}
                    onClick={() => setActiveAICard(card.id)}
                    className="lg:flex-1 min-w-[140px] bg-transparent hover:bg-white/[0.03] border border-zinc-700/60 hover:border-zinc-400 p-7 lg:p-8 flex flex-col justify-between cursor-pointer transition-all duration-300 group select-none min-h-[480px] lg:min-h-[520px]"
                  >
                    {/* Top Header: Thin Plus on Right */}
                    <div className="flex justify-end">
                      <span className="text-zinc-400 group-hover:text-white text-2xl font-light leading-none transition-colors">
                        &plus;
                      </span>
                    </div>

                    {/* Bottom Area: Pink Glow Icon and Left-Aligned Title */}
                    <div className="space-y-4">
                      <div>{card.icon(false)}</div>
                      <h3 className="text-base sm:text-lg font-bold font-heading text-white tracking-tight leading-snug group-hover:text-zinc-100 transition-colors">
                        {card.collapsedTitle}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Actions: KNOW MORE Button matching Screenshot Position */}
            <div className="pt-2">
              <button
                onClick={() => setIsContactOpen(true)}
                className="px-8 py-3.5 bg-[#ED1B36] hover:bg-[#C8102E] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md cursor-pointer inline-flex items-center gap-2"
              >
                KNOW MORE
              </button>
            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          07. SECTION 07: CAREERS & CULTURE (Limitless Together)
          ======================================================================
        */}
        <Careers onOpenCareers={() => setIsContactOpen(true)} />
      </main>

      {/* Floating Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-zinc-800/80 hover:bg-[#ED1B36] text-white flex items-center justify-center transition-all duration-200 shadow-lg backdrop-blur-sm cursor-pointer"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* 07. Global Footer */}
      <Footer />

      {/* 08. Global Interactive Modals */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        initialService="Enterprise Digital Transformation"
      />
    </div>
  );
}

