"use client";
import React from "react";

interface LogoProps {
  theme?: "light" | "dark";
  showBadge?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  theme = "light",
  showBadge = true,
  className = "",
}) => {
  const isDark = theme === "dark";

  return (
    <div className={`flex items-center gap-4 select-none ${className}`}>
      {/* Solid Red Slanted Parallelogram (Signature Visual Geometry) */}
      <div
        className="w-11 h-7 sm:w-14 sm:h-8 bg-[#ED1B36] transition-transform duration-200 group-hover:scale-105 shadow-sm shrink-0"
        style={{
          transform: "skewX(-20deg)",
        }}
      />

      {/* Brand Typography */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center tracking-tight">
          <span
            className={`text-xl sm:text-[22px] font-black tracking-tight font-heading leading-none ${
              isDark ? "text-white" : "text-[#111827]"
            }`}
          >
            AD PULSE
          </span>
        </div>
        <span
          className={`text-[9.5px] sm:text-[10px] font-bold tracking-[0.28em] uppercase font-heading ${
            isDark ? "text-zinc-400" : "text-zinc-600"
          }`}
        >
          digital
        </span>
      </div>

      {showBadge && (
        <div className="hidden sm:flex items-center pl-4 border-l border-zinc-200 shrink-0 ml-1">
          {/* 10 Years of Innovation Emblem */}
          <div className="flex items-center gap-2">
            <span className="text-2xl sm:text-3xl font-black font-heading text-[#111827] leading-none tracking-tighter">
              10
            </span>
            <div className="flex flex-col justify-center -space-y-0.5">
              <span className="text-[8px] sm:text-[8.5px] font-bold uppercase tracking-wider text-zinc-500 leading-tight">
                Years of
              </span>
              <span className="text-[8.5px] sm:text-[9.5px] font-black uppercase tracking-wider text-[#ED1B36] leading-tight">
                AdPulse
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
