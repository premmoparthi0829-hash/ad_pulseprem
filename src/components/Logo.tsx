"use import";
import React from "react";

interface LogoProps {
  theme?: "light" | "dark";
  showBadge?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  theme = "light",
  showBadge = false,
  className = "",
}) => {
  const isDark = theme === "dark";

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Geometric Dynamic Pulse Prism Icon */}
      <div className="relative w-9 h-9 flex items-center justify-center shrink-0">
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transform hover:scale-105 transition-transform duration-300"
        >
          {/* Faceted geometric red prism symbol */}
          <path
            d="M4 18L18 4L24 10L10 24L4 18Z"
            fill="#ED1B36"
            className="transition-colors"
          />
          <path
            d="M18 4L32 18L26 24L12 10L18 4Z"
            fill="#650025"
            opacity="0.9"
          />
          <path
            d="M10 24L24 10L32 18L18 32L10 24Z"
            fill="#ED1B36"
            opacity="0.8"
          />
          <path
            d="M14 20L20 14L22 16L16 22L14 20Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center tracking-tight">
          <span
            className={`text-xl font-extrabold tracking-tight font-heading ${
              isDark ? "text-white" : "text-[#09082F]"
            }`}
          >
            AdPulse
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#ED1B36] ml-0.5 mb-2 shrink-0 animate-pulse" />
        </div>
        <span
          className={`text-[9px] font-bold tracking-[0.25em] uppercase -mt-1 font-heading ${
            isDark ? "text-zinc-400" : "text-zinc-500"
          }`}
        >
          Digital
        </span>
      </div>

      {showBadge && (
        <div className="hidden sm:flex items-center pl-3 border-l border-zinc-300/40 ml-1">
          <div className="flex flex-col">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#ED1B36]">
              10+ YEARS
            </span>
            <span
              className={`text-[8px] uppercase tracking-widest ${
                isDark ? "text-zinc-400" : "text-zinc-500"
              }`}
            >
              Enterprise IT
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
