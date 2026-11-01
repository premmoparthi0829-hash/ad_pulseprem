"use client";
import React, { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { approachSteps } from "@/data/company";

export const OurApproach: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="approach" className="py-20 lg:py-28 bg-warm-ivory bg-pinstripe-pattern border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#ED1B36] block mb-2">
            METHODOLOGY & FRAMEWORK
          </span>
          <h2 className="text-4xl sm:text-5xl font-black font-heading text-[#242321] tracking-tight leading-tight">
            More Than Marketing. <br />
            <span className="text-[#ED1B36]">We Create Momentum.</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed mt-4">
            Our systematic, data-calibrated delivery engine ensures every dollar
            invested compounds into durable competitive advantage, moving enterprises
            from reactive campaigns to self-sustaining market dominance.
          </p>
        </div>

        {/* Steps Navigation Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
          {approachSteps.map((step, idx) => {
            const isActive = idx === activeStep;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-xl text-left border transition-all duration-300 relative ${
                  isActive
                    ? "bg-[#09082F] text-white border-[#09082F] shadow-lg scale-102"
                    : "bg-white text-zinc-700 border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50"
                }`}
              >
                {/* Active indicator bar */}
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#ED1B36] rounded-t-xl" />
                )}
                <span
                  className={`text-2xl font-black font-heading block ${
                    isActive ? "text-[#ED1B36]" : "text-zinc-400"
                  }`}
                >
                  {step.step}
                </span>
                <span className="text-sm font-bold font-heading uppercase tracking-wider block mt-1">
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Showcase Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-zinc-200/90 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-4xl sm:text-5xl font-black font-heading text-[#ED1B36]">
                {approachSteps[activeStep].step}
              </span>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block">
                  PHASE {approachSteps[activeStep].step} OF 05
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-zinc-900">
                  {approachSteps[activeStep].title}
                </h3>
              </div>
            </div>

            <h4 className="text-lg font-semibold text-zinc-800 leading-snug">
              {approachSteps[activeStep].tagline}
            </h4>

            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              {approachSteps[activeStep].description}
            </p>

            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-3">
                Key Strategic Outputs & Deliverables:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {approachSteps[activeStep].deliverables.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-50 border border-zinc-100 text-xs font-medium text-zinc-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#ED1B36] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#09082F] text-white rounded-2xl p-8 space-y-6 relative overflow-hidden">
            {/* Geometric pattern overlay */}
            <div className="absolute inset-0 bg-isometric-grid opacity-20 pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#ED1B36]">
                ACCELERATION PROTOCOL
              </span>
              <h4 className="text-xl font-bold font-heading">
                Zero-Waste Execution Velocity
              </h4>
              <p className="text-xs text-zinc-300 leading-relaxed">
                By eliminating agency silos between engineering, data science, and
                creative execution, AdPulse compresses multi-month development
                sprints into rapid 14-day production cycles.
              </p>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-zinc-400">Next Stage:</span>
                <button
                  onClick={() =>
                    setActiveStep((prev) => (prev + 1) % approachSteps.length)
                  }
                  className="text-[#ED1B36] font-bold uppercase flex items-center gap-1 hover:underline"
                >
                  Step {approachSteps[(activeStep + 1) % approachSteps.length].step} -{" "}
                  {approachSteps[(activeStep + 1) % approachSteps.length].title}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
