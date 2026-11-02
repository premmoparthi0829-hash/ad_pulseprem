"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroCarouselProps {
  onOpenContact?: () => void;
  onExploreServices?: () => void;
}

interface SlideData {
  id: number;
  headlineLine1: string;
  headlineLine2?: string;
  isItalicLine2?: boolean;
  description: string;
  ctaText: string;
  bgImage: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    headlineLine1: "Scale Your Brand at Speed",
    headlineLine2: "with Data-Driven Digital Marketing",
    description:
      "AdPulse Digital engineers full-funnel digital marketing ecosystems, precision paid advertising, and high-converting creative campaigns that turn customer interest into exponential revenue.",
    ctaText: "EXPLORE SERVICES",
    bgImage: "/images/hero-slide-architecture.jpg",
  },
  {
    id: 2,
    headlineLine1: "Dominate Search Rankings with AI-Powered",
    headlineLine2: "Enterprise SEO & Growth Engineering",
    description:
      "Cement your brand at the summit of Google and generative AI engines. We architect semantic content clusters, technical SEO pipelines, and authority networks that multiply organic pipeline.",
    ctaText: "BOOST ORGANIC TRAFFIC",
    bgImage: "/images/hero-slide-seo.jpg",
  },
  {
    id: 3,
    headlineLine1: "Maximize ROAS Across Meta, Google",
    headlineLine2: "& Programmatic Ad Channels",
    description:
      "Stop wasting ad spend. Our algorithmic bidding strategies, predictive LTV models, and dynamic creative testing deliver an average 4.8x enterprise return on ad spend.",
    ctaText: "ACCELERATE ROAS",
    bgImage: "/images/hero-slide-speed.jpg",
  },
  {
    id: 4,
    headlineLine1: "Magnetic Creative & Viral Social",
    headlineLine2: "That Captivates, Engages & Converts",
    description:
      "From high-velocity social media marketing and creator partnerships to cinematic ad production, we build viral brand movements that command attention across 14 global industries.",
    ctaText: "DISCOVER CAMPAIGNS",
    bgImage: "/images/hero-slide-burgundy.jpg",
  },
];

export const HeroCarousel: React.FC<HeroCarouselProps> = ({
  onOpenContact,
  onExploreServices,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleAction = () => {
    if (onExploreServices) {
      onExploreServices();
    } else {
      const el = document.getElementById("capabilities");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 6500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, currentSlide]);

  const slide = slides[currentSlide];

  return (
    <section
      id="hero-carousel"
      className="relative w-full h-[600px] sm:h-[660px] lg:h-[720px] xl:h-[760px] overflow-hidden bg-black text-white select-none pt-[90px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 
        ======================================================================
        01. BACKGROUND SLIDES: True 4K Ultra HD (3840x2160) Images with Zero Compression
        (unoptimized={true} delivers 100% pristine raw pixel sharpness across retina/4K displays)
        ======================================================================
      */}
      {slides.map((s, idx) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <Image
            src={s.bgImage}
            alt={s.headlineLine1}
            fill
            sizes="100vw"
            unoptimized={true}
            priority={true}
            className="object-cover object-center transform scale-100 transition-transform duration-[7000ms] ease-out filter contrast-100 brightness-100"
          />

          {/* Left Dark Gradient Overlay for Maximum Text Readability without dulling image */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 via-45% to-transparent z-1" />

          {/* Bottom subtle gradient shadow */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/15 pointer-events-none z-1" />
        </div>
      ))}

      {/* 
        ======================================================================
        02. SLIDE CONTENT: Left Editorial Typography & Action Button
        (Exact match to user reference screenshots)
        ======================================================================
      */}
      <div className="relative z-20 max-w-7xl mx-auto h-full px-6 sm:px-8 lg:px-12 flex flex-col justify-center">
        <div
          key={slide.id}
          className="max-w-3xl space-y-5 sm:space-y-6 animate-in fade-in slide-in-from-left-3 duration-500"
        >
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-[50px] xl:text-[56px] font-black font-heading text-white tracking-tight leading-[1.12]">
            <span>{slide.headlineLine1}</span>
            {slide.headlineLine2 && (
              <>
                <br />
                {slide.isItalicLine2 ? (
                  <span className="font-serif italic font-normal tracking-normal text-rose-100">
                    {slide.headlineLine2}
                  </span>
                ) : (
                  <span>{slide.headlineLine2}</span>
                )}
              </>
            )}
          </h1>

          {/* Subtitle Paragraph */}
          <p className="text-sm sm:text-base lg:text-[17px] text-zinc-200 font-normal leading-relaxed max-w-2xl">
            {slide.description}
          </p>

          {/* Sharp Transparent Button with Thin White Border */}
          <div className="pt-2">
            <button
              onClick={handleAction}
              className="px-6 sm:px-7 py-3 border border-white/70 hover:border-white bg-transparent hover:bg-white hover:text-[#242321] text-white text-xs sm:text-[12.5px] font-bold uppercase tracking-widest transition-all duration-200 shadow-sm cursor-pointer"
            >
              {slide.ctaText}
            </button>
          </div>
        </div>
      </div>

      {/* 
        ======================================================================
        03. VERTICAL DASH INDICATOR PAGINATION (Right Edge Exact Match - 3 slides)
        ======================================================================
      */}
      <div className="absolute right-6 sm:right-8 top-1/2 -translate-y-1/2 z-30 hidden sm:flex flex-col items-end gap-3.5 pointer-events-auto">
        {slides.map((_, idx) => {
          const isActive = idx === currentSlide;
          return (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Navigate to slide ${idx + 1}`}
              className="group py-1 flex items-center justify-end focus:outline-none cursor-pointer"
            >
              <div
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? "w-7 h-[2.5px] bg-white shadow-md shadow-white/40"
                    : "w-4 h-[1.8px] bg-white/40 group-hover:bg-white/80 group-hover:w-5"
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* 
        ======================================================================
        04. BOTTOM-RIGHT CIRCULAR ARROW NAVIGATION (< | >)
        (Signature deep burgundy active button matching reference screenshots)
        ======================================================================
      */}
      <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 lg:right-12 z-30 flex items-center gap-2 pointer-events-auto">
        {/* Previous Button (Active Primary Blue Circle with Orange Hover) */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#01286D] hover:bg-[#FD6E12] text-white flex items-center justify-center transition-all duration-200 shadow-md cursor-pointer hover:scale-105"
        >
          <ChevronLeft className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
        </button>

        {/* Divider | */}
        <span className="text-white/40 text-xs sm:text-sm font-light select-none px-0.5">
          |
        </span>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/40 hover:bg-[#FD6E12] border border-white/20 hover:border-transparent text-white flex items-center justify-center transition-all duration-200 shadow-md cursor-pointer hover:scale-105"
        >
          <ChevronRight className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
        </button>
      </div>
    </section>
  );
};
