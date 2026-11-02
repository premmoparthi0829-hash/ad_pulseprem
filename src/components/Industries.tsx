"use client";
import React, { useRef, useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface IndustryItem {
  id: string;
  slug: string;
  title: string;
  iconType: string;
}

export const Industries: React.FC = () => {
  const router = useRouter();

  // 14 Industries matching the exact list in the screenshot
  const industries: IndustryItem[] = [
    {
      id: "banking",
      slug: "banking-and-financial-services",
      title: "BANKING & FINANCIAL\nSERVICES",
      iconType: "banking",
    },
    {
      id: "communications",
      slug: "communications",
      title: "COMMUNICATIONS",
      iconType: "communications",
    },
    {
      id: "education",
      slug: "education",
      title: "EDUCATION",
      iconType: "education",
    },
    {
      id: "energy",
      slug: "energy-and-utilities",
      title: "ENERGY & UTILITIES",
      iconType: "energy",
    },
    {
      id: "healthcare",
      slug: "healthcare-and-life-sciences",
      title: "HEALTHCARE & LIFE\nSCIENCES",
      iconType: "healthcare",
    },
    {
      id: "media",
      slug: "media-and-entertainment",
      title: "MEDIA &\nENTERTAINMENT",
      iconType: "media",
    },
    {
      id: "oil-gas",
      slug: "oil-and-gas",
      title: "OIL & GAS",
      iconType: "oil",
    },
    {
      id: "private-equity",
      slug: "private-equity",
      title: "PRIVATE EQUITY",
      iconType: "equity",
    },
    {
      id: "professional-services",
      slug: "professional-services",
      title: "PROFESSIONAL SERVICES",
      iconType: "services",
    },
    {
      id: "retail",
      slug: "retail-and-consumer-goods",
      title: "RETAIL & CONSUMER\nGOODS",
      iconType: "retail",
    },
    {
      id: "insurance",
      slug: "insurance",
      title: "INSURANCE",
      iconType: "insurance",
    },
    {
      id: "manufacturing",
      slug: "manufacturing-and-automotive",
      title: "MANUFACTURING &\nAUTOMOTIVE",
      iconType: "manufacturing",
    },
    {
      id: "hi-tech",
      slug: "hi-tech-and-software",
      title: "HI TECH & SOFTWARE",
      iconType: "hitech",
    },
    {
      id: "travel",
      slug: "travel-and-hospitality",
      title: "TRAVEL & HOSPITALITY",
      iconType: "travel",
    },
  ];

  // Duplicate industries 3 times for a continuous infinite carousel
  const duplicatedIndustries = useMemo(
    () => [...industries, ...industries, ...industries],
    []
  );

  const [currentIndex, setCurrentIndex] = useState(14); // Middle copy
  const [withTransition, setWithTransition] = useState(true);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setWithTransition(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setWithTransition(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    if (currentIndex >= 28) {
      setWithTransition(false);
      setCurrentIndex(currentIndex - 14);
    } else if (currentIndex < 14) {
      setWithTransition(false);
      setCurrentIndex(currentIndex + 14);
    }
  };

  useEffect(() => {
    if (!withTransition) {
      const raf = requestAnimationFrame(() => {
        setWithTransition(true);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [withTransition]);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 3800);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  // Minimalist line-art icons with exact signature Red Hatching fill matching screenshot
  const renderIcon = (type: string) => {
    switch (type) {
      case "banking":
        return (
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            {/* Column 1 (Left - Shortest) 3D Isometric Bar */}
            {/* Top rhombus */}
            <polygon
              points="10,34 15,29 23,29 18,34"
              fill="#FFFFFF"
              stroke="#242321"
              strokeWidth="1.2"
            />
            {/* Right side face */}
            <polygon
              points="18,34 23,29 23,48 18,53"
              fill="#FFFFFF"
              stroke="#242321"
              strokeWidth="1.2"
            />
            {/* Front rect with red diagonal hatching */}
            <rect
              x="10"
              y="34"
              width="8"
              height="19"
              fill="url(#red-hatch-pattern)"
              stroke="#242321"
              strokeWidth="1.2"
            />

            {/* Column 2 (Middle - Medium) 3D Isometric Bar */}
            {/* Top rhombus */}
            <polygon
              points="23,23 28,18 36,18 31,23"
              fill="#FFFFFF"
              stroke="#242321"
              strokeWidth="1.2"
            />
            {/* Right side face */}
            <polygon
              points="31,23 36,18 36,48 31,53"
              fill="#FFFFFF"
              stroke="#242321"
              strokeWidth="1.2"
            />
            {/* Front rect with red diagonal hatching */}
            <rect
              x="23"
              y="23"
              width="8"
              height="30"
              fill="url(#red-hatch-pattern)"
              stroke="#242321"
              strokeWidth="1.2"
            />

            {/* Column 3 (Right - Tallest) 3D Isometric Bar */}
            {/* Top rhombus */}
            <polygon
              points="36,13 41,8 49,8 44,13"
              fill="#FFFFFF"
              stroke="#242321"
              strokeWidth="1.2"
            />
            {/* Right side face */}
            <polygon
              points="44,13 49,8 49,48 44,53"
              fill="#FFFFFF"
              stroke="#242321"
              strokeWidth="1.2"
            />
            {/* Front rect with red diagonal hatching */}
            <rect
              x="36"
              y="13"
              width="8"
              height="40"
              fill="url(#red-hatch-pattern)"
              stroke="#242321"
              strokeWidth="1.2"
            />
          </svg>
        );

      case "communications":
        return (
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            {/* Wireframe Globe Circle */}
            <circle
              cx="25"
              cy="23"
              r="17"
              stroke="#242321"
              strokeWidth="1.3"
              fill="none"
            />
            {/* Vertical elliptical meridian */}
            <ellipse
              cx="25"
              cy="23"
              rx="8"
              ry="17"
              stroke="#242321"
              strokeWidth="1.1"
              fill="none"
            />
            {/* Equator & parallels */}
            <line
              x1="8"
              y1="23"
              x2="42"
              y2="23"
              stroke="#242321"
              strokeWidth="1.1"
            />
            <line
              x1="12"
              y1="14"
              x2="38"
              y2="14"
              stroke="#242321"
              strokeWidth="0.9"
            />
            <line
              x1="12"
              y1="32"
              x2="38"
              y2="32"
              stroke="#242321"
              strokeWidth="0.9"
            />

            {/* Overlapping Chat Speech Bubble with Red Hatching (Exact match to screenshot!) */}
            <rect
              x="26"
              y="26"
              width="21"
              height="16"
              fill="url(#red-hatch-pattern)"
              stroke="#242321"
              strokeWidth="1.3"
            />
            <polygon
              points="31,42 28,47 36,42"
              fill="#FFFFFF"
              stroke="#242321"
              strokeWidth="1.3"
            />
          </svg>
        );

      case "education":
        return (
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            {/* Outer Screen / Monitor Frame */}
            <rect
              x="11"
              y="12"
              width="42"
              height="30"
              stroke="#242321"
              strokeWidth="1.4"
              fill="none"
            />
            {/* Inner Orange Board Line */}
            <rect
              x="15"
              y="16"
              width="34"
              height="22"
              stroke="#FD6E12"
              strokeWidth="1.1"
              fill="none"
            />
            {/* Student Silhouette in center with Red Hatching head */}
            <circle
              cx="32"
              cy="28"
              r="5.5"
              fill="url(#red-hatch-pattern)"
              stroke="#242321"
              strokeWidth="1.3"
            />
            <path
              d="M22 45C22 39 26 37 32 37C38 37 42 39 42 45"
              stroke="#242321"
              strokeWidth="1.4"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        );

      case "energy":
        return (
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            {/* Windmill Mast */}
            <path
              d="M29 30L24 51H36L31 30"
              stroke="#242321"
              strokeWidth="1.4"
              fill="none"
            />
            <line
              x1="26"
              y1="42"
              x2="34"
              y2="42"
              stroke="#242321"
              strokeWidth="1.1"
            />

            {/* 4 Blades in X-pattern with Red Hatching (Exact match to screenshot!) */}
            <polygon
              points="30,24 18,10 24,8 30,24"
              fill="url(#red-hatch-pattern)"
              stroke="#242321"
              strokeWidth="1.1"
            />
            <polygon
              points="30,24 44,14 46,20 30,24"
              fill="url(#red-hatch-pattern)"
              stroke="#242321"
              strokeWidth="1.1"
            />
            <polygon
              points="30,24 42,38 36,40 30,24"
              fill="url(#red-hatch-pattern)"
              stroke="#242321"
              strokeWidth="1.1"
            />
            <polygon
              points="30,24 16,34 14,28 30,24"
              fill="url(#red-hatch-pattern)"
              stroke="#242321"
              strokeWidth="1.1"
            />
            <circle cx="30" cy="24" r="2.8" fill="#242321" />
          </svg>
        );

      case "healthcare":
        return (
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            {/* Medical Cross (+) with Red Hatching Horizontal Bar (Exact match to screenshot!) */}
            {/* Vertical outline bar */}
            <rect
              x="23"
              y="10"
              width="14"
              height="40"
              stroke="#242321"
              strokeWidth="1.4"
              fill="#FFFFFF"
            />
            {/* Horizontal bar filled with red hatching */}
            <rect
              x="10"
              y="23"
              width="40"
              height="14"
              fill="url(#red-hatch-pattern)"
              stroke="#242321"
              strokeWidth="1.4"
            />
          </svg>
        );

      case "media":
        return (
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <rect
              x="11"
              y="16"
              width="42"
              height="28"
              stroke="#242321"
              strokeWidth="1.4"
              fill="none"
            />
            <polygon
              points="28,23 38,30 28,37"
              fill="url(#red-hatch-pattern)"
              stroke="#242321"
              strokeWidth="1.4"
            />
          </svg>
        );

      case "oil":
        return (
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <rect
              x="18"
              y="16"
              width="22"
              height="32"
              fill="url(#red-hatch-pattern)"
              stroke="#242321"
              strokeWidth="1.4"
            />
            <path
              d="M40 24H44C46 24 47 26 47 28V36H40"
              stroke="#242321"
              strokeWidth="1.4"
              fill="none"
            />
          </svg>
        );

      case "equity":
        return (
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <rect
              x="14"
              y="32"
              width="8"
              height="18"
              fill="url(#red-hatch-pattern)"
              stroke="#242321"
              strokeWidth="1.3"
            />
            <rect
              x="26"
              y="24"
              width="8"
              height="26"
              fill="url(#red-hatch-pattern)"
              stroke="#242321"
              strokeWidth="1.3"
            />
            <rect
              x="38"
              y="16"
              width="8"
              height="34"
              fill="url(#red-hatch-pattern)"
              stroke="#242321"
              strokeWidth="1.3"
            />
            <path
              d="M12 26L24 18L34 22L46 10"
              stroke="#242321"
              strokeWidth="1.4"
              fill="none"
            />
          </svg>
        );

      case "services":
        return (
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <path
              d="M16 12H36L44 20V48H16V12Z"
              stroke="#242321"
              strokeWidth="1.4"
              fill="none"
            />
            <circle
              cx="30"
              cy="32"
              r="7"
              fill="url(#red-hatch-pattern)"
              stroke="#242321"
              strokeWidth="1.4"
            />
            <line
              x1="35"
              y1="37"
              x2="41"
              y2="43"
              stroke="#242321"
              strokeWidth="1.8"
            />
          </svg>
        );

      default:
        return (
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <path
              d="M14 46V28L24 34V28L34 34V22L46 28V46H14Z"
              fill="url(#red-hatch-pattern)"
              stroke="#242321"
              strokeWidth="1.4"
            />
          </svg>
        );
    }
  };

  return (
    <section
      id="industries"
      className="relative pt-16 pb-24 lg:pt-20 lg:pb-32 bg-[#EFEAE1] overflow-hidden select-none"
    >
      {/* 
        ======================================================================
        01. Top Primary Blue Accent Bar (Exact match to screenshot top edge)
        ======================================================================
      */}
      <div className="w-full h-2 bg-[#01286D] absolute top-0 left-0 right-0 z-20" />

      {/* 
        ======================================================================
        02. Shared SVG Defs for Signature Orange Diagonal Hatching Pattern
        ======================================================================
      */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <pattern
            id="red-hatch-pattern"
            width="5"
            height="5"
            patternTransform="rotate(45 0 0)"
            patternUnits="userSpaceOnUse"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="5"
              stroke="#FD6E12"
              strokeWidth="1.3"
            />
          </pattern>
        </defs>
      </svg>

      {/* 
        ======================================================================
        03. Vertical Pinstripe Background (Exact match to screenshot)
        ======================================================================
      */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, rgba(36, 35, 33, 0.08) 0px, rgba(36, 35, 33, 0.08) 1px, transparent 1px, transparent 44px)",
        }}
      />

      {/* 
        ======================================================================
        04. Subtle Vertical Blue Drop Accent Lines Below Cards
        ======================================================================
      */}
      <div
        className="absolute bottom-0 left-0 right-0 h-36 pointer-events-none opacity-25"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, transparent 0px, transparent 110px, rgba(1, 40, 109, 0.45) 110px, rgba(1, 40, 109, 0.45) 1px, transparent 111px, transparent 220px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* 
          ======================================================================
          05. HEADER ROW WITH CAPSULE NAV CONTROLS (Exact match to screenshot)
          ======================================================================
        */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-4xl sm:text-5xl font-black font-heading text-[#01286D] tracking-tight leading-tight">
              Expertise Across Industries
            </h2>
            <p className="text-[13px] sm:text-[14px] text-zinc-700 font-normal leading-relaxed max-w-xl">
              Our digital marketing expertise spans 14 industries, driving bespoke performance campaigns, SEO dominance, and high-converting customer acquisition at global scale.
            </p>
          </div>

          {/* Capsule Nav Arrow Buttons (Exact match to screenshot) */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={prevSlide}
              aria-label="Previous industries"
              className="w-13 h-8.5 rounded-full bg-[#01286D] hover:bg-[#FD6E12] text-white flex items-center justify-center transition-colors duration-200 cursor-pointer shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next industries"
              className="w-13 h-8.5 rounded-full bg-[#01286D] hover:bg-[#FD6E12] text-white flex items-center justify-center transition-colors duration-200 cursor-pointer shadow-sm"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 
          ======================================================================
          06. HORIZONTAL INDUSTRY CARDS (Butter-Smooth Infinite Transform Carousel)
          ======================================================================
        */}
        <div
          className="relative overflow-hidden w-full pt-4 pb-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            setHoveredCard(null);
          }}
        >
          <div
            className={`flex items-end ${
              withTransition
                ? "transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                : ""
            }`}
            style={{
              transform: `translateX(-${currentIndex * 259}px)`,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {duplicatedIndustries.map((ind, idx) => {
              const isCardHovered = hoveredCard === `${ind.id}-${idx}`;
              const isDefaultActive = !hoveredCard && idx === currentIndex + 3;
              const isActive = isCardHovered || isDefaultActive;

              return (
                <div
                  key={`${ind.id}-${idx}`}
                  onMouseEnter={() => setHoveredCard(`${ind.id}-${idx}`)}
                  onClick={() => router.push(`/industries/${ind.slug}`)}
                  className={`w-[235px] shrink-0 mr-6 bg-white rounded-none border border-[#E2DDD5] shadow-xs transition-all duration-300 p-6 flex flex-col justify-between relative overflow-hidden cursor-pointer h-[310px] sm:h-[320px] select-none ${
                    isActive
                      ? "shadow-xl border-zinc-400 ring-1 ring-[#FD6E12]/30 -translate-y-1.5"
                      : "hover:shadow-md hover:-translate-y-0.5"
                  }`}
                >
                  {/* Top: Minimalist Line-Art Icon with Orange Hatching */}
                  <div className="pt-1 flex items-start">
                    <div className="w-16 h-16 flex items-center justify-center">
                      {renderIcon(ind.iconType)}
                    </div>
                  </div>

                  {/* Middle: Industry Title in Bold Clean Uppercase */}
                  <div className="relative z-10 py-1">
                    <h3 className="text-[12px] sm:text-[13px] font-black font-heading text-[#01286D] tracking-tight uppercase leading-snug whitespace-pre-line">
                      {ind.title}
                    </h3>
                  </div>

                  {/* Bottom Row: Interactive Action Button */}
                  <div className="pt-2 flex items-end justify-between relative z-10">
                    {isActive ? (
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push(`/industries/${ind.slug}`);
                        }}
                        className="px-5 py-2 rounded-full bg-[#FD6E12] hover:bg-[#e05e0c] text-white text-[12px] font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all duration-200"
                      >
                        <span>Know More</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    ) : (
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push(`/industries/${ind.slug}`);
                        }}
                        className="w-7 h-7 rounded-full bg-[#FD6E12] hover:bg-[#e05e0c] text-white flex items-center justify-center shadow-xs transition-transform duration-200 hover:scale-110"
                      >
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>

                  {/* Subtle Orange Diagonal Striped Pattern on Bottom */}
                  <div
                    className={`absolute bottom-0 right-0 pointer-events-none transition-all duration-300 ${
                      isActive ? "w-44 h-32 opacity-75" : "w-28 h-20 opacity-55"
                    }`}
                    style={{
                      background:
                        "repeating-linear-gradient(-30deg, rgba(253, 110, 18, 0.45), rgba(253, 110, 18, 0.45) 1px, transparent 1px, transparent 6px)",
                      clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
