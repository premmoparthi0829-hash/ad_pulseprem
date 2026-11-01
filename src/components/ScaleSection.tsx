"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ScaleSectionProps {
  onKnowMore?: () => void;
  onBrandStory?: () => void;
}

export const ScaleSection: React.FC<ScaleSectionProps> = ({
  onKnowMore,
  onBrandStory,
}) => {
  const handleKnowMore = () => {
    if (onKnowMore) {
      onKnowMore();
    } else {
      const el = document.getElementById("capabilities");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBrandStory = () => {
    if (onBrandStory) {
      onBrandStory();
    } else {
      const el = document.getElementById("approach");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="scale-at-speed"
      className="relative bg-[#F6F2EA] text-[#242321] overflow-hidden border-b border-zinc-200/80 min-h-[380px] lg:min-h-[460px] xl:min-h-[500px] flex items-center"
    >
      {/* 
        ======================================================================
        01. BACKGROUND: Isometric Geometric Wireframe Lines on Warm Ivory
        ======================================================================
      */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-45 z-0">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 500"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="ivory-hex-pattern-adpulse"
              width="140"
              height="242"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M70,0 L140,40 L140,120 L70,160 L0,120 L0,40 Z"
                fill="none"
                stroke="#242321"
                strokeWidth="0.75"
                strokeOpacity="0.12"
              />
              <path
                d="M70,80 L70,160 M70,80 L140,40 M70,80 L0,40"
                fill="none"
                stroke="#242321"
                strokeWidth="0.75"
                strokeOpacity="0.08"
              />
              <path
                d="M70,242 L140,202 L140,122 L70,82 L0,122 L0,202 Z"
                fill="none"
                stroke="#242321"
                strokeWidth="0.75"
                strokeOpacity="0.12"
              />
              <path
                d="M70,162 L70,242 M70,162 L140,202 M70,162 L0,202"
                fill="none"
                stroke="#242321"
                strokeWidth="0.75"
                strokeOpacity="0.08"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ivory-hex-pattern-adpulse)" />
        </svg>
      </div>

      {/* 
        ======================================================================
        02. RIGHT-SIDE RACING HYPERCAR (High-Resolution Original Motorsport Asset)
        (Custom diagonal cut-path matching enterprise aesthetic, extending to right edge)
        ======================================================================
      */}
      <div
        className="hidden lg:block absolute right-0 top-0 bottom-0 w-[55%] xl:w-[52%] z-10 pointer-events-none"
        style={{
          clipPath: "polygon(14% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/hero-slide-speed.jpg"
            alt="AdPulse Digital - Scale at Speed High Velocity Innovation"
            fill
            sizes="(max-width: 1280px) 55vw, 52vw"
            unoptimized={true}
            className="object-cover object-center filter contrast-100 brightness-100"
            priority
          />

          {/* Subtle aerodynamic vignette and crimson speed gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F6F2EA]/20 via-transparent to-black/20 pointer-events-none" />
        </div>
      </div>

      {/* 
        ======================================================================
        03. MAIN CONTENT: Left Editorial & CTAs (Customized for AdPulse Digital)
        ======================================================================
      */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-20 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Column: Heading, Paragraph & Action Buttons */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-5 sm:space-y-6 max-w-xl">
            {/* Primary Trademark Headline */}
            <div>
              <div className="flex items-start">
                <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-black font-heading tracking-tight text-[#ED1B36] leading-none">
                  Scale at Speed
                </h2>
                <sup className="text-sm sm:text-base font-bold text-[#ED1B36] ml-0.5 mt-1">
                  ™
                </sup>
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-[46px] font-black font-heading tracking-tight text-[#242321] leading-tight mt-1.5">
                with AdPulse Digital
              </h3>
            </div>

            {/* Paragraph Description */}
            <p className="text-sm sm:text-base lg:text-[16px] text-zinc-700 leading-relaxed font-normal max-w-lg">
              Our promise to help enterprises across industries transform at
              speed and bring agility, resilience, and efficiency to their
              businesses.
            </p>

            {/* Sharp Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <Link
                href="/scale-at-speed"
                className="px-6 sm:px-7 py-3 bg-[#ED1B36] hover:bg-[#C8102E] text-white text-xs sm:text-[12.5px] font-black uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.02] cursor-pointer inline-flex items-center justify-center"
              >
                KNOW MORE
              </Link>

              <button
                onClick={handleBrandStory}
                className="px-6 sm:px-7 py-3 bg-transparent hover:bg-[#ED1B36]/5 text-[#ED1B36] border border-[#ED1B36] text-xs sm:text-[12.5px] font-black uppercase tracking-wider transition-all duration-200 cursor-pointer"
              >
                OUR BRAND STORY
              </button>
            </div>
          </div>

          {/* 
            Mobile / Tablet View of the Racing Car 
            (Displayed seamlessly on small screens)
          */}
          <div className="block lg:hidden pt-4">
            <div
              className="relative w-full aspect-[16/9] max-w-[540px] mx-auto rounded-lg overflow-hidden shadow-xl"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              }}
            >
              <Image
                src="/images/adpulse-scale-speed.jpg"
                alt="AdPulse Digital - Scale at Speed High Velocity Innovation"
                fill
                sizes="(max-width: 1024px) 100vw, 540px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
