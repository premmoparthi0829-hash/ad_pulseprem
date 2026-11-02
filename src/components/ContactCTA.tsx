"use client";
import React from "react";
import { ArrowRight, Mail, Phone } from "lucide-react";

interface ContactCTAProps {
  onStartProject: () => void;
  onContactTeam: () => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({
  onStartProject,
  onContactTeam,
}) => {
  return (
    <section
      id="contact-cta"
      className="relative py-24 lg:py-32 bg-gradient-to-br from-[#01286D] via-[#011F54] to-[#00143D] text-white overflow-hidden"
    >
      {/* Background isometric and light streaks */}
      <div className="absolute inset-0 bg-isometric-grid opacity-20 pointer-events-none" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[140px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(253, 110, 18, 0.35) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading leading-tight tracking-tight text-white">
          Ready to Accelerate Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-100 to-[#FD6E12]">
            Marketing Growth?
          </span>
        </h2>

        <p className="text-base sm:text-xl text-blue-100/90 font-normal max-w-2xl mx-auto leading-relaxed">
          Let&apos;s turn your marketing budget into a predictable, high-yield revenue engine
          with full-funnel performance advertising, SEO dominance, and magnetic creative design.
        </p>

        {/* Buttons */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onStartProject}
            className="px-9 py-4 rounded-none bg-[#FD6E12] hover:bg-[#e05e0c] text-white text-xs sm:text-sm font-extrabold uppercase tracking-widest font-heading flex items-center gap-3 transition-all duration-300 shadow-2xl hover:shadow-orange-500/50 hover:scale-105 cursor-pointer"
          >
            <span>LAUNCH A CAMPAIGN</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onContactTeam}
            className="px-9 py-4 rounded-none bg-white/10 hover:bg-white/20 text-white border border-white/30 text-xs sm:text-sm font-extrabold uppercase tracking-widest font-heading flex items-center gap-2 transition-all duration-300 backdrop-blur-md cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>SCHEDULE STRATEGY CALL</span>
          </button>
        </div>

        {/* Direct contact indicators */}
        <div className="pt-10 flex flex-wrap items-center justify-center gap-8 text-xs font-semibold text-blue-200/80 border-t border-white/10">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#FD6E12]" />
            <span>inquiries@adpulsedigital.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#FD6E12]" />
            <span>+1 (800) 423-7857 (Enterprise Line)</span>
          </div>
        </div>
      </div>
    </section>
  );
};
