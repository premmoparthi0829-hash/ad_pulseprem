"use client";
import React from "react";
import { ArrowRight, Mail, Phone, Sparkles } from "lucide-react";

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
      className="relative py-24 lg:py-32 bg-gradient-to-br from-[#650025] via-[#4A001A] to-[#09082F] text-white overflow-hidden"
    >
      {/* Background isometric and light streaks */}
      <div className="absolute inset-0 bg-isometric-grid opacity-20 pointer-events-none" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[140px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(237, 27, 54, 0.35) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-extrabold uppercase tracking-[0.25em] text-[#ED1B36]">
          <Sparkles className="w-3.5 h-3.5" />
          ACCELERATE YOUR TRAJECTORY
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading leading-tight tracking-tight text-white">
          Ready to Accelerate Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-200 to-[#ED1B36]">
            Digital Growth?
          </span>
        </h2>

        <p className="text-base sm:text-xl text-rose-100/90 font-normal max-w-2xl mx-auto leading-relaxed">
          Let&apos;s turn your next strategic milestone into a compounding market
          advantage with enterprise-grade engineering and data-driven marketing.
        </p>

        {/* Buttons */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onStartProject}
            className="px-9 py-4 rounded-none bg-[#ED1B36] hover:bg-[#c9122a] text-white text-xs sm:text-sm font-extrabold uppercase tracking-widest font-heading flex items-center gap-3 transition-all duration-300 shadow-2xl hover:shadow-red-600/50 hover:scale-105"
          >
            <span>START A PROJECT</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onContactTeam}
            className="px-9 py-4 rounded-none bg-white/10 hover:bg-white/20 text-white border border-white/30 text-xs sm:text-sm font-extrabold uppercase tracking-widest font-heading flex items-center gap-2 transition-all duration-300 backdrop-blur-md"
          >
            <Mail className="w-4 h-4" />
            <span>CONTACT OUR TEAM</span>
          </button>
        </div>

        {/* Direct contact indicators */}
        <div className="pt-10 flex flex-wrap items-center justify-center gap-8 text-xs font-semibold text-rose-200/80 border-t border-white/10">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#ED1B36]" />
            <span>inquiries@adpulsedigital.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#ED1B36]" />
            <span>+1 (800) 423-7857 (Enterprise Line)</span>
          </div>
        </div>
      </div>
    </section>
  );
};
