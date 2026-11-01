"use client";
import React from "react";
import Image from "next/image";
import { Quote, ArrowRight, ShieldCheck } from "lucide-react";
import { bigThinkersProfile } from "@/data/company";

export const BigThinkers: React.FC = () => {
  return (
    <section id="big-thinkers" className="py-20 lg:py-28 bg-deep-burgundy text-white relative overflow-hidden border-b border-rose-950">
      {/* Background isometric mesh */}
      <div className="absolute inset-0 bg-isometric-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Content & Quote */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#ED1B36] block">
              THE BIG THINKERS • LEADERSHIP PERSPECTIVE
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading leading-tight tracking-tight text-white">
              Creative Minds. Bold Ideas. <br />
              <span className="text-rose-200">Real Digital Impact.</span>
            </h2>

            {/* Quote Block with decorative mark */}
            <div className="relative pl-6 border-l-2 border-[#ED1B36] my-6 space-y-3">
              <Quote className="w-8 h-8 text-[#ED1B36]/60 absolute -top-4 -left-2 fill-current opacity-30" />
              <p className="text-lg sm:text-xl text-rose-100 font-medium italic leading-relaxed">
                &ldquo;{bigThinkersProfile.quote}&rdquo;
              </p>
            </div>

            {/* Leader Bio & Sample Profile Notice */}
            <div className="space-y-2 pt-2">
              <h3 className="text-xl font-bold font-heading text-white">
                {bigThinkersProfile.name}
              </h3>
              <p className="text-sm font-semibold text-[#ED1B36] uppercase tracking-wider">
                {bigThinkersProfile.role}
              </p>
              <p className="text-xs text-rose-200/80">
                {bigThinkersProfile.credentials}
              </p>
              <p className="text-xs text-rose-100/70 pt-2 leading-relaxed">
                {bigThinkersProfile.bio}
              </p>
              <p className="text-[10px] text-rose-300/40 italic pt-1">
                * Illustrative enterprise leadership profile. Actual executive profiles dynamically mapped via CMS.
              </p>
            </div>
          </div>

          {/* Right Column: Executive Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[420px] sm:h-[480px] w-full rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-zinc-900 group">
              <Image
                src={bigThinkersProfile.image}
                alt={bigThinkersProfile.name}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Slanted badge on portrait */}
              <div
                className="absolute bottom-6 left-6 right-6 p-4 bg-white text-zinc-900 shadow-2xl"
                style={{
                  clipPath: "polygon(0 0, 95% 0, 100% 100%, 0% 100%)",
                }}
              >
                <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest text-[#ED1B36]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Executive Board Member
                </div>
                <h4 className="text-base font-black font-heading tracking-tight mt-0.5">
                  {bigThinkersProfile.name}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
