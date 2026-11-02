"use client";
import React from "react";
import Image from "next/image";

interface CareersProps {
  onOpenCareers?: () => void;
}

export const Careers: React.FC<CareersProps> = ({ onOpenCareers }) => {
  return (
    <section
      id="careers"
      className="relative w-full min-h-[440px] sm:min-h-[480px] lg:min-h-[520px] bg-[#140E0A] text-white overflow-hidden select-none flex items-center"
    >
      {/* 
        ======================================================================
        01. BACKGROUND PHOTOGRAPHY: Two Professional Women Conversing (Ultra-HD 4K)
        (3840x1112 uncompressed sharp rendering with Lanczos3 reconstruction)
        ======================================================================
      */}
      <div className="absolute inset-0">
        <Image
          src="/images/careers/limitless-together-ultra-hd.jpg"
          alt="Limitless Together - Two professional women in dialogue at AdPulse Digital"
          fill
          unoptimized={true}
          priority
          sizes="100vw"
          className="object-cover object-[18%_center] sm:object-[24%_center] lg:object-[28%_center] filter brightness-[0.98] contrast-[1.02]"
        />

        {/* Ambient Dark Gradient focused strictly on right side for text contrast, leaving women bright and clear */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent from-35% via-[#140E0A]/60 via-60% to-[#140E0A]/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#140E0A]/30 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* 
        ======================================================================
        02. WIREFRAME PERSPECTIVE ACCENT LINES ON BOTTOM RIGHT (Exact Match)
        ======================================================================
      */}
      <div className="absolute bottom-0 right-0 w-[550px] h-[220px] pointer-events-none z-10 overflow-hidden opacity-30 select-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 550 220"
          fill="none"
          preserveAspectRatio="none"
        >
          <line x1="160" y1="220" x2="550" y2="35" stroke="rgba(255,255,255,0.7)" strokeWidth="0.8" />
          <line x1="210" y1="220" x2="550" y2="60" stroke="rgba(255,255,255,0.6)" strokeWidth="0.8" />
          <line x1="260" y1="220" x2="550" y2="85" stroke="rgba(255,255,255,0.5)" strokeWidth="0.8" />
          <line x1="310" y1="220" x2="550" y2="110" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" />
          <line x1="360" y1="220" x2="550" y2="135" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />
          <line x1="410" y1="220" x2="550" y2="160" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
          <line x1="460" y1="220" x2="550" y2="185" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
        </svg>
      </div>

      {/* 
        ======================================================================
        03. RIGHT-ALIGNED CONTENT CONTAINER (Exact Match to Screenshot)
        ======================================================================
      */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full py-14 sm:py-16 flex justify-end">
        <div className="w-full lg:w-[54%] max-w-xl space-y-5 text-left">
          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold font-heading tracking-tight text-white leading-[1.15]">
            Limitless Together
          </h2>

          {/* Subtitle Description */}
          <p className="text-sm sm:text-[15.5px] lg:text-base text-zinc-200 font-normal leading-relaxed">
            At AdPulse Digital, you&apos;re not just joining a company — you&apos;re becoming
            part of a community. Let&apos;s be limitless together.
          </p>

          {/* Sharp Rectangular [ KNOW MORE ] Button */}
          <div className="pt-2">
            <button
              onClick={() => {
                if (onOpenCareers) {
                  onOpenCareers();
                } else {
                  window.location.href = "/careers";
                }
              }}
              className="px-7 py-3 sm:px-8 sm:py-3.5 bg-white hover:bg-[#FD6E12] text-black hover:text-white text-xs font-bold uppercase tracking-widest font-heading transition-all duration-200 shadow-md cursor-pointer rounded-none inline-block select-none"
            >
              KNOW MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
