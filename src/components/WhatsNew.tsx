"use client";
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Calendar, Bell } from "lucide-react";
import { whatsNewItems } from "@/data/company";

export const WhatsNew: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const delta = direction === "left" ? -380 : 380;
      carouselRef.current.scrollBy({ left: delta, behavior: "smooth" });
    }
  };

  return (
    <section id="whats-new" className="py-20 lg:py-28 bg-warm-ivory bg-pinstripe-pattern border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#ED1B36] block mb-2">
              DISPATCHES & ANNOUNCEMENTS
            </span>
            <h2 className="text-4xl sm:text-5xl font-black font-heading text-[#242321] tracking-tight">
              What&apos;s New
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed mt-3">
              Stay connected with our latest updates, global expansions, strategic
              alliances, and groundbreaking research initiatives.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => scroll("left")}
              aria-label="Previous updates"
              className="w-12 h-12 rounded-full bg-zinc-800 hover:bg-[#ED1B36] text-white flex items-center justify-center transition-all duration-300 shadow-md group"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Next updates"
              className="w-12 h-12 rounded-full bg-zinc-800 hover:bg-[#ED1B36] text-white flex items-center justify-center transition-all duration-300 shadow-md group"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-6 pt-2"
        >
          {whatsNewItems.map((item) => (
            <div
              key={item.id}
              className="w-[320px] sm:w-[360px] shrink-0 bg-white rounded-2xl p-8 border border-zinc-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-zinc-400">
                  <span className="flex items-center gap-1.5 text-[#ED1B36]">
                    <Bell className="w-3.5 h-3.5" />
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1 text-zinc-500 text-[10px]">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-heading text-zinc-900 group-hover:text-[#ED1B36] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-zinc-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 border-t border-zinc-100 mt-6 flex items-center justify-between">
                <span className="text-xs font-bold text-zinc-900 group-hover:text-[#ED1B36] flex items-center gap-1.5 transition-colors">
                  {item.linkText}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#ED1B36]" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
