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
      className="relative w-full h-[520px] sm:h-[580px] lg:h-[620px] bg-[#120F0D] text-white overflow-hidden select-none"
    >
      {/* 
        ======================================================================
        Warm Ambient Corporate Photography (Matches screenshot: Two professionals conversing)
        ======================================================================
      */}
      <Image
        src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1600&auto=format&fit=crop&q=85"
        alt="Limitless Together - AdPulse Digital Community"
        fill
        sizes="100vw"
        priority
        className="object-cover object-[30%_center] filter brightness-[0.72] contrast-[1.08]"
      />

      {/* Subtle vignette and dark right-side gradient for perfect text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/40 to-black/90" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

      {/* 
        ======================================================================
        Parallel Diagonal Wireframe Accent Lines on Bottom Right (Matches screenshot)
        ======================================================================
      */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[220px] pointer-events-none opacity-25">
        <svg className="w-full h-full" viewBox="0 0 500 220" fill="none">
          <line x1="0" y1="200" x2="450" y2="40" stroke="rgba(255,255,255,0.7)" strokeWidth="1" />
          <line x1="40" y1="210" x2="490" y2="50" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
          <line x1="80" y1="220" x2="530" y2="60" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
          <line x1="120" y1="230" x2="570" y2="70" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
          <line x1="160" y1="240" x2="610" y2="80" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        </svg>
      </div>

      {/* 
        ======================================================================
        Right-Aligned Content Container (Exact match to screenshot)
        ======================================================================
      */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-full flex items-center justify-end">
        <div className="max-w-xl lg:max-w-2xl space-y-6 text-left">
          {/* Main Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight text-white leading-[1.1]">
            Limitless Together
          </h2>

          {/* Subtitle Description */}
          <p className="text-sm sm:text-base lg:text-lg text-zinc-200 font-normal leading-relaxed max-w-lg">
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
                  const el = document.getElementById("contact-cta");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-8 py-3.5 bg-white hover:bg-zinc-100 text-zinc-950 text-xs sm:text-sm font-extrabold uppercase tracking-widest font-heading transition-all shadow-md hover:shadow-lg rounded-none"
            >
              KNOW MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
