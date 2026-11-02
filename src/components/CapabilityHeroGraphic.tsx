"use client";
import React from "react";

interface CapabilityHeroGraphicProps {
  primaryColor?: string;
  secondaryColor?: string;
  lightColor?: string;
  deepColor?: string;
}

export const CapabilityHeroGraphic: React.FC<CapabilityHeroGraphicProps> = ({
  primaryColor = "#5B2A86",
  secondaryColor = "#7A3EAE",
  lightColor = "#A46ED4",
  deepColor = "#3D1761",
}) => {
  return (
    <div className="relative w-full h-full min-h-[340px] sm:min-h-[400px] lg:min-h-[480px] flex items-center justify-end overflow-hidden select-none">
      {/* Perspective backdrop container matching the angled wedge in screenshot 1 */}
      <div
        className="w-full max-w-[560px] h-full flex items-center justify-center relative"
        style={{
          filter: "drop-shadow(0 25px 35px rgba(0, 0, 0, 0.15))",
        }}
      >
        <svg
          viewBox="0 0 580 500"
          className="w-full h-auto max-h-[460px] object-contain transform scale-95 lg:scale-105 transition-transform duration-700 hover:scale-[1.07]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradients for the 3D Segmented Cylinder Slices */}
            <linearGradient id="slice-top-1" x1="120" y1="80" x2="480" y2="260" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor={lightColor} stopOpacity="0.95" />
              <stop offset="60%" stopColor={secondaryColor} stopOpacity="1" />
              <stop offset="100%" stopColor={primaryColor} stopOpacity="1" />
            </linearGradient>

            <linearGradient id="slice-side-1" x1="200" y1="150" x2="350" y2="460" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor={deepColor} stopOpacity="1" />
              <stop offset="70%" stopColor="#1E0B30" stopOpacity="1" />
              <stop offset="100%" stopColor="#120520" stopOpacity="1" />
            </linearGradient>

            <linearGradient id="slice-side-inner" x1="160" y1="180" x2="400" y2="380" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor={secondaryColor} stopOpacity="0.9" />
              <stop offset="50%" stopColor={primaryColor} stopOpacity="0.95" />
              <stop offset="100%" stopColor={deepColor} stopOpacity="1" />
            </linearGradient>

            <linearGradient id="slice-top-2" x1="240" y1="40" x2="520" y2="180" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#D9B6FC" stopOpacity="0.95" />
              <stop offset="45%" stopColor={lightColor} stopOpacity="0.95" />
              <stop offset="100%" stopColor={secondaryColor} stopOpacity="1" />
            </linearGradient>

            <linearGradient id="light-sheen" x1="100" y1="100" x2="300" y2="300" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>

            <filter id="prism-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="-15" dy="25" stdDeviation="18" floodColor="#000000" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* Group with 3D Faceted Geometry matching screenshot 1 */}
          <g filter="url(#prism-shadow)">
            {/* 1. Base Dark Floor Shadow Slice */}
            <path
              d="M 140,240 L 460,110 L 460,370 L 140,460 Z"
              fill="url(#slice-side-1)"
              opacity="0.98"
            />

            {/* 2. Stepped Cylindrical Tier - Lower Curved Facet */}
            <path
              d="M 180,240 C 260,285 360,285 460,210 L 460,360 C 360,430 260,430 180,360 Z"
              fill="url(#slice-side-inner)"
            />

            {/* 3. Middle Elliptical Shelf Tier (Cylindrical Wedge Top) */}
            <path
              d="M 180,240 C 260,185 380,150 460,210 C 380,270 260,285 180,240 Z"
              fill="url(#slice-top-1)"
            />

            {/* 4. Upper Tier - Elevated Sliced Wedge */}
            <path
              d="M 280,100 L 520,35 L 520,180 L 280,230 Z"
              fill="url(#slice-side-inner)"
              opacity="0.9"
            />

            {/* 5. Upper Tier Top Ellipse */}
            <path
              d="M 280,100 C 350,60 450,40 520,70 C 450,110 350,135 280,100 Z"
              fill="url(#slice-top-2)"
            />

            {/* 6. Soft Specular Sheen & Chiseled Highlights */}
            <path
              d="M 180,240 C 260,185 380,150 460,210"
              stroke="url(#light-sheen)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M 280,100 C 350,60 450,40 520,70"
              stroke="#FFFFFF"
              strokeOpacity="0.6"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* 7. Precision Vertical Dividing Bevel */}
            <line
              x1="180"
              y1="240"
              x2="180"
              y2="360"
              stroke="#FFFFFF"
              strokeOpacity="0.25"
              strokeWidth="1.5"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

