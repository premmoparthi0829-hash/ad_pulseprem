"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Lightbulb,
  Users,
  BookOpen,
  Target,
  HeartHandshake,
  TrendingUp,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SearchModal } from "@/components/SearchModal";
import { ContactModal } from "@/components/ContactModal";
import { GetInTouchSection } from "@/components/GetInTouchSection";

interface CulturePillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
}

const culturePillars: CulturePillar[] = [
  {
    id: "innovation",
    title: "Innovation",
    subtitle: "Innovate boldly, turning ideas into impact",
    description: "Encourages experimentation and cross-functional creation",
    icon: Lightbulb,
  },
  {
    id: "people",
    title: "People",
    subtitle: "Unite our people, fostering collaboration and collective growth",
    description: "Ensures trust, wellbeing, and support",
    icon: Users,
  },
  {
    id: "learning",
    title: "Learning",
    subtitle: "Learn continuously, growing together and unlocking new potential",
    description: "Drives continuous growth and skill-building",
    icon: BookOpen,
  },
  {
    id: "market-focus",
    title: "Market-Focus",
    subtitle: "Deep customer focus and differentiated market value.",
    description: "Brings purposeful, customer-centric action",
    icon: Target,
  },
  {
    id: "inclusive",
    title: "Inclusive",
    subtitle: "Include every voice, building strength through diversity and belonging",
    description: "Ensures every voice is valued and heard",
    icon: HeartHandshake,
  },
  {
    id: "performance",
    title: "Performance",
    subtitle: "Perform with excellence, driven by shared ambition and accountability",
    description: "Fosters excellence, ambition, and results",
    icon: TrendingUp,
  },
];

interface CultureLifeCard {
  num: string;
  title: string;
  desc: string;
  tags: string[];
  highlighted?: boolean;
}

const cultureLifeCards: CultureLifeCard[] = [
  {
    num: "01",
    title: "Experienced Engineered",
    desc: "Systems and process improvements that put people first",
    tags: ["Makers Lab", "Innoverse"],
  },
  {
    num: "02",
    title: "Culture Insights",
    desc: "Uncovering the DNA of our business units through culture studies",
    tags: ["Internal culture audits", "feedback loops"],
  },
  {
    num: "03",
    title: "Living the Brand Inside-Out",
    desc: "Focusing on internal and external brand positioning",
    tags: ["Star Awards", "Kudos recognition"],
    highlighted: true, // Distinct burgundy card matching user screenshot
  },
  {
    num: "04",
    title: "Beyond the Desk",
    desc: "Celebrations, wellness, and fun at work",
    tags: ["Employee engagements", "CSR days"],
  },
  {
    num: "05",
    title: "Beyond Borders",
    desc: "Cultivating cultural intelligence through awareness and sensitization",
    tags: ["Inclusive Language Campaign", "MAP"],
  },
  {
    num: "06",
    title: "Synchronize",
    desc: "Empowering leadership through trust and alignment",
    tags: ["Leadership workshops", "alignment sessions"],
  },
];

interface ActionCard {
  id: string;
  title: string;
  description: string;
  image: string;
}

const actionCards: ActionCard[] = [
  {
    id: "innoverse",
    title: "Innoverse",
    description: "How we turn bold ideas into real-world solutions.",
    image: "/images/careers/ce-innoverse.jpg",
  },
  {
    id: "analyst-day",
    title: "Analyst & Advisory Days",
    description: "Bringing market focus into every discussion.",
    image: "/images/careers/ce-analyst-day.jpg",
  },
  {
    id: "learning-workshops",
    title: "Learning Workshops",
    description: "Growing skills, growing together.",
    image: "/images/careers/ce-learning-workshops.jpg",
  },
  {
    id: "star-awards",
    title: "Star Awards",
    description: "Celebrating performance and excellence.",
    image: "/images/careers/ce-star-awards.jpg",
  },
  {
    id: "inclusive-language",
    title: "Inclusive Language Campaign",
    description: "Ensuring every voice is heard and valued.",
    image: "/images/careers/ce-inclusive-language.jpg",
  },
  {
    id: "employee-celebration",
    title: "Employee Celebrations",
    description: "Fostering connection and joy at work.",
    image: "/images/careers/ce-employee-celebration.jpg",
  },
];

export default function CareersPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [actionIndex, setActionIndex] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const maxActionIndex = Math.max(0, actionCards.length - 4);

  const handlePrevAction = () => {
    setActionIndex((prev) => (prev > 0 ? prev - 1 : maxActionIndex));
  };

  const handleNextAction = () => {
    setActionIndex((prev) => (prev < maxActionIndex ? prev + 1 : 0));
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#242321] selection:bg-[#FD6E12] selection:text-white relative">
      {/* 00. Global Sticky Header */}
      <Header
        activePage="careers"
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <main className="flex-1 w-full overflow-hidden pt-[90px]">
        {/* 
          ======================================================================
          01. HERO BANNER: The AdPulse Way & 3D Prism Shape
          (Exact 1:1 match to user screenshot media_1793595751517_e5335cff.jpg)
          ======================================================================
        */}
        <section className="relative bg-[#F6F2EA] border-b border-[#E5DFD3] min-h-[430px] sm:min-h-[470px] lg:min-h-[500px] flex flex-col justify-between overflow-hidden">
          {/* Subtle vertical architectural pinstripes pattern */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40 z-0 bg-repeat bg-top"
            style={{ backgroundImage: "url('/images/our-brand/banner-pattern.svg')" }}
          />

          {/* Ground shadow plane gradient matching live site & user screenshot */}
          <div
            className="absolute inset-0 pointer-events-none z-[1]"
            style={{
              background: "linear-gradient(160deg, rgba(255, 255, 255, 0) 50%, #e5dfd3 50%)",
              bottom: "-40px",
            }}
          />

          {/* Breadcrumbs inside the banner at top-left */}
          <div className="w-full relative z-20 pt-6 sm:pt-8 pb-2">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center gap-2 text-xs sm:text-[13px] font-semibold">
              <Link href="/" className="text-zinc-800 hover:text-black transition-colors">
                Home
              </Link>
              <span className="text-zinc-400 font-normal">&gt;</span>
              <span className="text-[#FD6E12] font-bold">Careers</span>
            </div>
          </div>

          {/* Banner Content Container */}
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full py-8 sm:py-12 lg:py-16 relative z-20 flex-1 flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
              {/* Left Column: Heading & Intro Paragraph */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-extrabold font-heading text-[#111827] tracking-tight leading-[1.1]">
                  The AdPulse Way
                </h1>

                <p className="text-[16px] sm:text-[17.5px] lg:text-[18px] text-zinc-700 font-normal leading-[1.65] max-w-[560px]">
                  Anchored in innovation, people, learning, market focus, inclusivity, and performance, our culture empowers you to grow, create, and thrive together.
                </p>
              </div>

              {/* Right Column Spacer for Desktop Prism Grid Alignment */}
              <div className="hidden lg:block lg:col-span-5 min-h-[300px]" />
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
                <Image
                  src="/images/careers/culture-hero-team.jpg"
                  alt="The AdPulse Way Culture Team"
                  fill
                  priority
                  className="object-cover object-center filter contrast-[1.05]"
                  sizes="45vw"
                />
              </div>
            </div>
          </div>

          {/* Mobile / Tablet Prism Fallback */}
          <div className="lg:hidden w-full relative z-10 px-6 pb-8">
            <div
              className="relative w-full h-[230px] sm:h-[280px] overflow-hidden shadow-xl"
              style={{
                transform: "skewY(-10deg)",
              }}
            >
              <div
                className="w-full h-[140%] -top-[20%] relative"
                style={{
                  transform: "skewY(10deg)",
                }}
              >
                <Image
                  src="/images/careers/culture-hero-team.jpg"
                  alt="The AdPulse Way Culture Team"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="100vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          02. SECTION 02: LIMITLESS TOGETHER (Midnight Navy Section)
          (Exact 1:1 match to user screenshot media_1793595802487_ab952f2a.jpg)
          ======================================================================
        */}
        <section className="relative bg-[#060B1E] text-white py-20 sm:py-24 lg:py-28 overflow-hidden">
          {/* Exact isometric ribbon wireframe pattern matching screenshot media_1793595802487_ab952f2a.jpg */}
          <div className="absolute inset-0 pointer-events-none opacity-25 z-0">
            <svg
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
            >
              <defs>
                <pattern
                  id="navy-ribbon-wireframe"
                  width="180"
                  height="120"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 10 30 L 70 65 L 140 25 L 80 -10 Z"
                    fill="none"
                    stroke="#FF2A55"
                    strokeWidth="1"
                    opacity="0.4"
                  />
                  <path
                    d="M 70 65 L 70 115 L 10 80 L 10 30"
                    fill="none"
                    stroke="#D91656"
                    strokeWidth="0.8"
                    opacity="0.3"
                  />
                  <path
                    d="M 70 115 L 140 75 L 140 25"
                    fill="none"
                    stroke="#640D5F"
                    strokeWidth="0.8"
                    opacity="0.3"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#navy-ribbon-wireframe)" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            <div className="max-w-4xl space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold font-heading text-white tracking-tight">
                Limitless Together
              </h2>

              <p className="text-base sm:text-lg lg:text-[19px] leading-relaxed sm:leading-[1.8] text-[#c5cad3] font-light">
                <strong className="font-bold text-white">We believe in the extraordinary</strong>{" "}
                potential of people, not just as individuals, but as a collective force.
                &ldquo;Limitless Together&rdquo; is our expression of this belief. It&apos;s how we work, grow,
                and achieve. Our voice, our ideas are what drive us forward. We are stronger in our
                diversity, and unstoppable in our unity. When one of us rises, we all Rise. The
                future is not shaped by one but many. At AdPulse Digital, we are not just building
                careers; we are enabling transformation. As AdPulsers, we are &ldquo;Limitless Together.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          03. SECTION 03: OUR CULTURE COMPASS (6 Culture Pillars)
          (Exact 1:1 match to user screenshot media_1793595834917_6fc0ed7d.jpg)
          ======================================================================
        */}
        <section className="relative bg-[#F6F2EA] py-20 sm:py-24 border-b border-[#E5DFD3] overflow-hidden">
          {/* Subtle architectural geometric lines & faint isometric ribbons */}
          <div
            className="absolute inset-0 pointer-events-none opacity-30 z-0 bg-repeat bg-top"
            style={{ backgroundImage: "url('/images/our-brand/banner-pattern.svg')" }}
          />
          <div className="absolute inset-0 pointer-events-none opacity-10 z-0">
            <svg
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
            >
              <defs>
                <pattern
                  id="cream-wireframe"
                  width="180"
                  height="120"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 10 30 L 70 65 L 140 25 L 80 -10 Z"
                    fill="none"
                    stroke="#FD6E12"
                    strokeWidth="0.8"
                    opacity="0.3"
                  />
                  <path
                    d="M 70 65 L 70 115 L 10 80 L 10 30"
                    fill="none"
                    stroke="#060B1E"
                    strokeWidth="0.6"
                    opacity="0.2"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cream-wireframe)" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            {/* Header: Two Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start pb-14 border-b border-[#E5DFD3]/80">
              <div className="lg:col-span-5">
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold font-heading text-[#01286D] tracking-tight leading-[1.15]">
                  Our Culture Compass
                </h2>
              </div>
              <div className="lg:col-span-7">
                <p className="text-base sm:text-[17px] text-zinc-700 font-normal leading-relaxed">
                  Our six culture pillars guide how we work, grow, and succeed as one team. Each pillar
                  fuels our employee value proposition (EVP), Limitless Together, in a unique and interconnected way.
                </p>
              </div>
            </div>

            {/* 6 Culture Pillar Cards (2 Columns x 3 Rows on Desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 pt-12">
              {culturePillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.id}
                    className="bg-white border border-[#E5DFD3] p-7 sm:p-9 transition-all duration-300 hover:shadow-lg hover:border-[#FD6E12]/40 group flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Orange Icon */}
                      <div className="w-12 h-12 rounded-lg bg-[#FFF5ED] text-[#FD6E12] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#FD6E12] group-hover:text-white transition-all duration-300">
                        <IconComponent className="w-6 h-6 stroke-[2]" />
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold font-heading text-[#01286D] mb-2 tracking-tight">
                        {pillar.title}
                      </h3>

                      {/* Primary Subtitle */}
                      <p className="text-[16px] font-semibold text-[#111827] leading-snug mb-2">
                        {pillar.subtitle}
                      </p>

                      {/* Secondary Description */}
                      <p className="text-sm text-zinc-600 font-normal leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>

                    {/* Subtle bottom orange indicator bar */}
                    <div className="w-8 h-[2px] bg-[#E5DFD3] group-hover:w-16 group-hover:bg-[#FD6E12] transition-all duration-300 mt-6" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          04. SECTION 04: HOW WE LIVE OUR CULTURE (Numbered 01 to 06 Cards)
          (Exact 1:1 match to user screenshot media_1793595889990_c552c606.png)
          ======================================================================
        */}
        <section className="relative bg-[#FAF8F5] py-20 sm:py-24 border-b border-[#E5DFD3] overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left Column: Heading, Narrative, and Eyebrow Accent */}
              <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold font-heading text-[#01286D] tracking-tight leading-[1.15]">
                  How We Live Our Culture
                </h2>

                <p className="text-base sm:text-[16.5px] text-zinc-700 font-normal leading-relaxed">
                  Culture defines who we are, fuels everything we do, and empowers us to be truly limitless.
                  Here&apos;s how we bring each pillar to life across the organization.
                </p>

                {/* Eyebrow Accent with decorative line */}
                <div className="pt-4">
                  <div className="text-xs font-bold uppercase tracking-widest text-[#FD6E12] font-heading mb-3">
                    BRINGING CULTURE TO LIFE
                  </div>
                  {/* Decorative geometrical accent line */}
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-[2px] bg-[#FD6E12]" />
                    <div className="w-2 h-2 rounded-full bg-[#FD6E12]" />
                    <div className="flex-1 h-[1px] bg-zinc-300" />
                  </div>
                </div>
              </div>

              {/* Right Column: 6 Culture Cards Grid */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  {cultureLifeCards.map((card) => {
                    const isHighlighted = card.highlighted;

                    return (
                      <article
                        key={card.num}
                        className={`p-7 sm:p-8 transition-all duration-300 flex flex-col justify-between ${
                          isHighlighted
                            ? "bg-[#01286D] text-white shadow-xl hover:shadow-2xl border-none"
                            : "bg-white border border-[#E5DFD3] text-[#111827] hover:shadow-md hover:border-zinc-400"
                        }`}
                      >
                        <div>
                          {/* Top Row: Number & Title */}
                          <div className="flex items-start gap-4 mb-4">
                            <span
                              className={`text-2xl sm:text-3xl font-extrabold font-heading ${
                                isHighlighted ? "text-[#FD6E12]" : "text-[#FD6E12]"
                              }`}
                            >
                              {card.num}
                            </span>
                            <h3
                              className={`text-xl sm:text-[21px] font-bold font-heading leading-tight ${
                                isHighlighted ? "text-white" : "text-[#01286D]"
                              }`}
                            >
                              {card.title}
                            </h3>
                          </div>

                          {/* Description */}
                          <p
                            className={`text-sm sm:text-[15px] leading-relaxed mb-6 ${
                              isHighlighted ? "text-zinc-200" : "text-zinc-600"
                            }`}
                          >
                            {card.desc}
                          </p>
                        </div>

                        {/* Bottom Tags */}
                        <div className="flex flex-wrap gap-2 pt-4 border-t border-current/10">
                          {card.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className={`text-xs px-3 py-1.5 font-medium ${
                                isHighlighted
                                  ? "bg-white/10 text-white border border-white/20"
                                  : "bg-[#F3EFE6] text-zinc-700 border border-zinc-200"
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          05. SECTION 05: OUR CULTURE IN ACTION (Dark Blue Photo Carousel)
          (Exact 1:1 match to user screenshot media_1793595935505_2a3693ae.jpg)
          ======================================================================
        */}
        <section className="relative bg-[#01286D] text-white py-20 sm:py-24 overflow-hidden">
          {/* Subtle diagonal background line pattern */}
          <div className="absolute inset-0 pointer-events-none opacity-10 z-0">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="action-stripes"
                  width="40"
                  height="40"
                  patternTransform="rotate(45 0 0)"
                  patternUnits="userSpaceOnUse"
                >
                  <line x1="0" y1="0" x2="0" y2="40" stroke="#FFF" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#action-stripes)" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            {/* Header: Title, Description, and Carousel Navigation Controls */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/20">
              <div className="space-y-3 max-w-2xl">
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold font-heading tracking-tight text-white leading-[1.15]">
                  Our Culture in Action
                </h2>
                <p className="text-sm sm:text-base text-zinc-200 font-light leading-relaxed">
                  From hackathons to heritage celebrations, here are real examples of how we live our culture every day.
                </p>
              </div>

              {/* Slider Navigation Buttons [ ← ] [ → ] */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrevAction}
                  aria-label="Previous cultural highlight"
                  className="w-11 h-11 border border-white/30 hover:border-white hover:bg-[#FD6E12] text-white flex items-center justify-center transition-all duration-200 cursor-pointer"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextAction}
                  aria-label="Next cultural highlight"
                  className="w-11 h-11 border border-white/30 hover:border-white hover:bg-[#FD6E12] text-white flex items-center justify-center transition-all duration-200 cursor-pointer"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Carousel Track */}
            <div className="pt-8 overflow-hidden">
              <div
                className="flex gap-6 transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(calc(-${actionIndex} * (25% + 6px)))`,
                }}
              >
                {actionCards.map((card) => (
                  <article
                    key={card.id}
                    className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] shrink-0 bg-[#011E52] border border-white/10 overflow-hidden group flex flex-col transition-all duration-300 hover:border-white/30 hover:-translate-y-1 hover:shadow-xl"
                  >
                    {/* Card Photo */}
                    <div className="relative aspect-[16/11] w-full overflow-hidden bg-black/40">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-[0.95]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg sm:text-[19px] font-bold font-heading text-white mb-2 leading-snug">
                          {card.title}
                        </h3>
                        <p className="text-xs sm:text-[13.5px] text-zinc-300 font-normal leading-relaxed">
                          {card.description}
                        </p>
                      </div>

                      {/* Orange accent line indicator */}
                      <div className="w-6 h-[2px] bg-[#FD6E12] mt-5 group-hover:w-12 transition-all duration-300" />
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Slider Progress Bar */}
            <div className="mt-8 w-full max-w-xs mx-auto h-[2px] bg-white/20 overflow-hidden">
              <div
                className="h-full bg-[#FD6E12] transition-all duration-300"
                style={{
                  width: `${((actionIndex + 1) / (maxActionIndex + 1)) * 100}%`,
                }}
              />
            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          06. SECTION 06: GET IN TOUCH SECTION
          ======================================================================
        */}
        <GetInTouchSection industryTitle="AdPulse Careers & Culture" />
      </main>

      {/* Floating Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 z-40 w-11 h-11 bg-zinc-800/80 hover:bg-[#FD6E12] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 cursor-pointer"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* 07. Global Footer */}
      <Footer />

      {/* Global Modals */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
