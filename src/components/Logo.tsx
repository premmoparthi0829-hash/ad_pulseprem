"use client";
import React from "react";
import Image from "next/image";

interface LogoProps {
  theme?: "light" | "dark";
  showBadge?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Logo: React.FC<LogoProps> = ({
  theme = "light",
  showBadge = true,
  className = "",
  size = "md",
}) => {
  const isDark = theme === "dark";

  const heightClass =
    size === "sm"
      ? "h-8 sm:h-9"
      : size === "lg"
      ? "h-12 sm:h-14"
      : "h-10 sm:h-[48px] lg:h-[52px]";

  return (
    <div className={`flex items-center gap-3.5 sm:gap-4 select-none ${className}`}>
      {/* Official AdPulse AI-Powered Growth Logo (Ultra HD Display) */}
      <div className="relative shrink-0 flex items-center">
        <Image
          src={isDark ? "/images/logo/adpulse-logo-ultra-hd-dark.png" : "/images/logo/adpulse-logo-ultra-hd-light.png"}
          alt="AdPulse Digital - AI-Powered Growth"
          width={210}
          height={64}
          unoptimized={true}
          priority
          className={`${heightClass} w-auto object-contain transition-transform duration-200 group-hover:scale-105`}
        />
      </div>

      {showBadge && (
        <div
          className={`hidden sm:flex items-center pl-4 sm:pl-5 border-l ${
            isDark ? "border-white/20" : "border-zinc-200"
          } shrink-0`}
        >
          {/* 10 Years of Innovation Emblem */}
          <div className="flex items-center gap-2">
            <span
              className={`text-2xl sm:text-[28px] font-black font-heading leading-none tracking-tight ${
                isDark ? "text-white" : "text-[#01286D]"
              }`}
            >
              10
            </span>
            <div className="flex flex-col justify-center -space-y-0.5">
              <span
                className={`text-[8.5px] sm:text-[9px] font-bold uppercase tracking-wider leading-tight ${
                  isDark ? "text-zinc-400" : "text-zinc-500"
                }`}
              >
                Years of
              </span>
              <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-[#FD6E12] leading-tight">
                AdPulse
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
