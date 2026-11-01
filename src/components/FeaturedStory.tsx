"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Play, Mic, Radio, X, Share2, Check, Volume2 } from "lucide-react";

interface SpeakerInfo {
  name: string;
  roleLine1: string;
  roleLine2: string;
}

const speakers: [SpeakerInfo, SpeakerInfo] = [
  {
    name: "DR. RAJESH SHARMA",
    roleLine1: "Group Chief Strategy and",
    roleLine2: "Transformation Officer, Axiata Group",
  },
  {
    name: "AMOL PHADKE",
    roleLine1: "Chief Transformation Officer,",
    roleLine2: "Tech Mahindra & AdPulse Digital",
  },
];

export const FeaturedStory: React.FC = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section
      id="featured-story"
      className="relative text-white overflow-hidden bg-[#090838] border-y border-zinc-800 py-12 sm:py-16 lg:py-0 lg:min-h-[480px] xl:min-h-[510px] flex items-center"
    >
      {/* 
        ======================================================================
        01. BACKGROUND: Deep Navy Base + Isometric Grid + Burgundy Slash
        ======================================================================
      */}
      {/* SVG Isometric Hexagonal Wireframe Lines Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-35 z-0">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 500"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="featured-hex-pattern"
              width="140"
              height="242"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M70,0 L140,40 L140,120 L70,160 L0,120 L0,40 Z"
                fill="none"
                stroke="#ED1B36"
                strokeWidth="0.85"
                strokeOpacity="0.45"
              />
              <path
                d="M70,80 L70,160 M70,80 L140,40 M70,80 L0,40"
                fill="none"
                stroke="#650025"
                strokeWidth="0.85"
                strokeOpacity="0.35"
              />
              <path
                d="M70,242 L140,202 L140,122 L70,82 L0,122 L0,202 Z"
                fill="none"
                stroke="#ED1B36"
                strokeWidth="0.85"
                strokeOpacity="0.45"
              />
              <path
                d="M70,162 L70,242 M70,162 L140,202 M70,162 L0,202"
                fill="none"
                stroke="#650025"
                strokeWidth="0.85"
                strokeOpacity="0.35"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#featured-hex-pattern)" />
        </svg>
      </div>

      {/* Signature Angular Burgundy Slash across right side */}
      <div
        className="absolute top-0 right-0 w-[55%] lg:w-[48%] h-full bg-gradient-to-br from-[#680026] via-[#52001E] to-[#380014] pointer-events-none z-0"
        style={{
          clipPath: "polygon(28% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      />

      {/* Horizontal Audio Soundwave behind executives */}
      <div className="absolute right-0 top-[52%] -translate-y-1/2 w-1/2 pointer-events-none hidden md:flex items-center justify-center z-0 opacity-45">
        <div className="flex items-center gap-[3px]">
          {[14, 22, 32, 46, 26, 16, 34, 52, 64, 38, 24, 42, 58, 72, 44, 28, 48, 62, 40, 22, 32, 52, 68, 42, 26, 16, 30, 44, 24, 14, 22, 36, 18, 12].map(
            (h, i) => (
              <span
                key={i}
                className="w-[2.5px] bg-[#ED1B36] rounded-full inline-block animate-pulse"
                style={{
                  height: `${h * 0.65}px`,
                  animationDuration: `${1.2 + (i % 5) * 0.25}s`,
                }}
              />
            )
          )}
        </div>
      </div>

      {/* 
        ======================================================================
        02. MAIN CONTENT GRID: Left Story Typography + Right Executives
        ======================================================================
      */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* 
            ==================================================================
            LEFT COLUMN: S/N Monogram, Podcast Pill, Headline, Watch Button
            ==================================================================
          */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center space-y-5 sm:space-y-6">
            {/* Brand Monogram: SIGNAL OVER NOISE S/N */}
            <div className="space-y-1">
              <span className="text-[10px] sm:text-[11px] font-extrabold tracking-[0.24em] text-zinc-300 uppercase block">
                SIGNAL OVER NOISE
              </span>
              <span className="text-4xl sm:text-5xl lg:text-[52px] font-black font-heading text-[#ED1B36] tracking-tight leading-none block">
                S/N
              </span>
            </div>

            {/* PODCAST Translucent Pill Badge */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[3px] bg-black/40 backdrop-blur-md border border-white/20 text-[11px] font-bold uppercase tracking-wider text-white">
                <Mic className="w-3.5 h-3.5 text-white" />
                <span>PODCAST</span>
              </div>
            </div>

            {/* Editorial Headline with Signature Red 'Beats' Highlight */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-black font-heading tracking-tight text-white leading-[1.12]">
              Sovereign AI: Why <br className="hidden sm:inline" />
              Collaboration <br className="hidden sm:inline" />
              <span className="text-[#ED1B36]">Beats</span> Control
            </h2>

            {/* Red Rectangular CTA Button */}
            <div className="pt-1">
              <button
                onClick={() => setVideoModalOpen(true)}
                className="px-6 sm:px-7 py-3 bg-[#ED1B36] hover:bg-[#C8102E] text-white text-xs font-extrabold uppercase tracking-widest flex items-center gap-2.5 transition-all duration-200 shadow-xl shadow-red-900/40 hover:scale-[1.02] cursor-pointer"
              >
                <span className="w-5 h-5 rounded-full bg-white text-[#ED1B36] flex items-center justify-center shrink-0">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </span>
                <span>WATCH FULL EPISODE</span>
              </button>
            </div>
          </div>

          {/* 
            ==================================================================
            RIGHT COLUMN: Two Indian Tech Executives Standing Side by Side
            with Unclipped Slanted Ivory Badges at the bottom
            ==================================================================
          */}
          <div className="lg:col-span-7 xl:col-span-7 relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[620px] xl:max-w-[680px] flex flex-col items-center pt-2 sm:pt-4">
              {/* High-Resolution Transparent Cutout of Two Indian Executives */}
              <div className="relative w-full aspect-[675/540] flex items-end justify-center">
                <Image
                  src="/images/indian-execs-tight.png"
                  alt="Dr. Rajesh Sharma and Amol Phadke discussing Sovereign AI"
                  fill
                  sizes="(max-width: 768px) 100vw, 680px"
                  className="object-contain object-bottom filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)]"
                  priority
                />
              </div>

              {/* 
                Slanted Parallelogram Badges Container 
                (Sitting side-by-side at bottom chest level, completely unclipped)
              */}
              <div className="relative -mt-10 sm:-mt-12 md:-mt-14 w-full z-20 px-1 sm:px-2">
                <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-5">
                  {/* Badge 1 (Left Executive) */}
                  <div
                    className="relative bg-[#EFEAE1] py-2 sm:py-2.5 px-2.5 sm:px-3.5 shadow-2xl transition-transform duration-300 hover:-translate-y-0.5"
                    style={{
                      clipPath:
                        "polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)",
                    }}
                  >
                    {/* Red diagonal accent notch on left edge */}
                    <div
                      className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#ED1B36]"
                      style={{
                        clipPath:
                          "polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)",
                      }}
                    />
                    <div className="pl-2 sm:pl-2.5">
                      <h4 className="text-[10.5px] sm:text-[12px] md:text-[13px] font-black font-heading tracking-tight uppercase text-[#650025] leading-tight truncate">
                        {speakers[0].name}
                      </h4>
                      <p className="text-[8.5px] sm:text-[9.5px] md:text-[10px] font-medium text-zinc-700 leading-tight mt-0.5 truncate">
                        {speakers[0].roleLine1}
                      </p>
                      <p className="text-[8.5px] sm:text-[9.5px] md:text-[10px] font-medium text-zinc-700 leading-tight truncate">
                        {speakers[0].roleLine2}
                      </p>
                    </div>
                  </div>

                  {/* Badge 2 (Right Executive) */}
                  <div
                    className="relative bg-[#EFEAE1] py-2 sm:py-2.5 px-2.5 sm:px-3.5 shadow-2xl transition-transform duration-300 hover:-translate-y-0.5"
                    style={{
                      clipPath:
                        "polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)",
                    }}
                  >
                    {/* Red diagonal accent notch on left edge */}
                    <div
                      className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#ED1B36]"
                      style={{
                        clipPath:
                          "polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)",
                      }}
                    />
                    <div className="pl-2 sm:pl-2.5">
                      <h4 className="text-[10.5px] sm:text-[12px] md:text-[13px] font-black font-heading tracking-tight uppercase text-[#650025] leading-tight truncate">
                        {speakers[1].name}
                      </h4>
                      <p className="text-[8.5px] sm:text-[9.5px] md:text-[10px] font-medium text-zinc-700 leading-tight mt-0.5 truncate">
                        {speakers[1].roleLine1}
                      </p>
                      <p className="text-[8.5px] sm:text-[9.5px] md:text-[10px] font-medium text-zinc-700 leading-tight truncate">
                        {speakers[1].roleLine2}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 
        ======================================================================
        03. INTERACTIVE BROADCAST EPISODE MODAL
        ======================================================================
      */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="w-full max-w-3xl bg-[#0F0D24] border border-zinc-700/80 rounded-xl overflow-hidden shadow-2xl text-white">
            {/* Modal Header */}
            <div className="px-6 py-4 bg-black/60 border-b border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#ED1B36] flex items-center justify-center text-white">
                  <Radio className="w-4 h-4 animate-pulse" />
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-400 block">
                    SIGNAL OVER NOISE • EPISODE 18
                  </span>
                  <h3 className="text-sm sm:text-base font-black font-heading text-white">
                    Sovereign AI: Why Collaboration Beats Control
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="p-2 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  title="Share Episode"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Share2 className="w-4 h-4" />
                  )}
                </button>
                <button
                  onClick={() => setVideoModalOpen(false)}
                  className="p-2 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  title="Close Modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Video Player Display */}
            <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
              <Image
                src="/images/indian-execs-bust.jpg"
                alt="Episode Visual"
                fill
                sizes="(max-width: 1024px) 100vw, 768px"
                className="object-cover opacity-60"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Central Play/Pause Action */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#ED1B36] hover:bg-[#C8102E] text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 cursor-pointer"
              >
                {isPlaying ? (
                  <Play className="w-7 h-7 fill-current ml-1" />
                ) : (
                  <Volume2 className="w-7 h-7" />
                )}
              </button>

              {/* Live Status Tag */}
              <div className="absolute bottom-4 left-6 z-10 flex items-center gap-2 text-xs font-bold bg-black/70 px-3.5 py-1.5 rounded-full border border-white/10">
                <span className="w-2 h-2 rounded-full bg-[#ED1B36] animate-pulse" />
                <span>Now Streaming: Keynote Discussion (34:20)</span>
              </div>
            </div>

            {/* Executive Speakers Bar */}
            <div className="p-6 bg-[#0B091C] border-t border-zinc-800/80 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3.5 bg-white/5 border border-white/10 rounded-lg">
                  <span className="text-[#ED1B36] text-xs font-black uppercase tracking-tight block">
                    {speakers[0].name}
                  </span>
                  <span className="text-[11px] text-zinc-400 block mt-0.5 leading-tight">
                    {speakers[0].roleLine1} {speakers[0].roleLine2}
                  </span>
                </div>
                <div className="p-3.5 bg-white/5 border border-white/10 rounded-lg">
                  <span className="text-[#ED1B36] text-xs font-black uppercase tracking-tight block">
                    {speakers[1].name}
                  </span>
                  <span className="text-[11px] text-zinc-400 block mt-0.5 leading-tight">
                    {speakers[1].roleLine1} {speakers[1].roleLine2}
                  </span>
                </div>
              </div>

              {/* Progress Scrubber */}
              <div className="space-y-2 pt-2">
                <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#ED1B36] h-full w-2/5 animate-pulse" />
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>14:32</span>
                  <span>34:20</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
