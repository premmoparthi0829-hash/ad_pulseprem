"use client";
import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Layers,
  Sparkles,
  Navigation,
  Check,
  Copy,
  ChevronRight,
  Globe2,
} from "lucide-react";
import Image from "next/image";

interface CityCampus {
  id: string;
  city: string;
  state: string;
  brandName: string;
  brandSubtitle: string;
  description: string;
  address: string;
  landmark: string;
  phone: string;
  phoneFormatted: string;
  email: string;
  mapsUrl: string;
  embedQuery: string;
  imagePreview: string;
}

const indianCampuses: CityCampus[] = [
  {
    id: "hyderabad",
    city: "Hyderabad",
    state: "Telangana",
    brandName: "Digitali360",
    brandSubtitle: "AD AGENCY PVT LTD",
    description:
      "Digital i360 is a full-service digital agency specializing in innovative solutions for web and app development, digital marketing, branding, and more. We help businesses grow by delivering cutting-edge technology, creative strategies, and measurable results tailored to their unique needs.",
    address: "Hitech City Main Rd, Madhapur, Hyderabad, Telangana 500081",
    landmark: "Near Butta Convention, Mahindra VVC Motors & Tan Coffee",
    phone: "+918599002222",
    phoneFormatted: "(+91) 8599002222",
    email: "info@digitali360.com",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Hitech+City+Main+Rd,+Madhapur,+Hyderabad,+Telangana+500081",
    embedQuery: "Hitech City Main Rd, Madhapur, Hyderabad, Telangana 500081",
    imagePreview: "/images/hyderabad-map-view.png",
  },
  {
    id: "bengaluru",
    city: "Bengaluru",
    state: "Karnataka",
    brandName: "AdPulse Digital",
    brandSubtitle: "INNOVATION & AI HUB",
    description:
      "Enterprise engineering campus and Artificial Intelligence Center of Excellence delivering next-generation digital cloud platforms and scalable enterprise software solutions.",
    address: "Electronic City Phase 1, Hosur Road, Bengaluru, Karnataka 560100",
    landmark: "AdPulse Tech Park, Near Infosys Gate 4",
    phone: "+918049002200",
    phoneFormatted: "(+91) 80 4900 2200",
    email: "bengaluru@digitali360.com",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Electronic+City+Phase+1+Hosur+Road+Bengaluru",
    embedQuery: "Electronic City Phase 1 Hosur Road Bengaluru",
    imagePreview: "/images/hyderabad-map-view.png",
  },
  {
    id: "mumbai",
    city: "Mumbai",
    state: "Maharashtra",
    brandName: "AdPulse Digital",
    brandSubtitle: "FINTECH & MEDIA LAB",
    description:
      "Specialized financial technology, media architecture, and digital advertising production facility serving tier-one global enterprise brands.",
    address: "Bandra Kurla Complex (BKC), G-Block, Mumbai, Maharashtra 400051",
    landmark: "Opposite One BKC Financial Towers",
    phone: "+912261002200",
    phoneFormatted: "(+91) 22 6100 2200",
    email: "mumbai@digitali360.com",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Bandra+Kurla+Complex+Mumbai",
    embedQuery: "Bandra Kurla Complex Mumbai",
    imagePreview: "/images/hyderabad-map-view.png",
  },
  {
    id: "delhi-ncr",
    city: "Delhi NCR",
    state: "Haryana",
    brandName: "AdPulse Digital",
    brandSubtitle: "NORTHERN REGIONAL HQ",
    description:
      "Northern India regional headquarters providing enterprise digital transformation, cloud modernization, and public sector technology advisory.",
    address: "DLF Cyber City, Tower 10-C, Gurugram, Haryana 122002",
    landmark: "Cyber Hub Phase II, DLF Cyber City",
    phone: "+911244800200",
    phoneFormatted: "(+91) 124 480 0200",
    email: "delhi@digitali360.com",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=DLF+Cyber+City+Tower+10+Gurugram",
    embedQuery: "DLF Cyber City Gurugram Haryana",
    imagePreview: "/images/hyderabad-map-view.png",
  },
  {
    id: "pune",
    city: "Pune",
    state: "Maharashtra",
    brandName: "AdPulse Digital",
    brandSubtitle: "SYSTEMS & ENGINEERING CENTER",
    description:
      "Full-stack software engineering and mission-critical cloud platform delivery center supporting automotive and enterprise software architecture.",
    address: "Hinjawadi Phase 2, Rajiv Gandhi Infotech Park, Pune, Maharashtra 411057",
    landmark: "Next to Embassy TechZone Campus",
    phone: "+912066002200",
    phoneFormatted: "(+91) 20 6600 2200",
    email: "pune@digitali360.com",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Hinjawadi+Phase+2+Pune",
    embedQuery: "Hinjawadi Phase 2 Pune Maharashtra",
    imagePreview: "/images/hyderabad-map-view.png",
  },
];

export const GlobalOfficesMap: React.FC = () => {
  // Default to Hyderabad campus matching the exact screenshot
  const [selectedCampus, setSelectedCampus] = useState<CityCampus>(
    indianCampuses[0]
  );
  // View mode: 'preview' (crisp screenshot match) or 'interactive' (live Google Maps iframe)
  const [mapMode, setMapMode] = useState<"preview" | "interactive">("preview");
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(selectedCampus.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isHyderabad = selectedCampus.id === "hyderabad";

  return (
    <section className="bg-[#000000] text-white py-14 sm:py-20 lg:py-24 border-b border-zinc-900 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ED1B36]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#650025]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Top subtle campus selector tabs */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3 border-b border-zinc-900/80 pb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ED1B36] animate-pulse" />
            <span className="text-[11px] font-black uppercase tracking-widest text-zinc-400">
              India Headquarters & Technology Campuses
            </span>
          </div>

          {/* Quick city switcher */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {indianCampuses.map((campus) => {
              const active = selectedCampus.id === campus.id;
              return (
                <button
                  key={campus.id}
                  onClick={() => {
                    setSelectedCampus(campus);
                    if (campus.id !== "hyderabad") {
                      setMapMode("interactive");
                    }
                  }}
                  className={`px-3 py-1 text-[11px] font-bold rounded-full transition-all cursor-pointer ${
                    active
                      ? "bg-[#ED1B36] text-white shadow-lg shadow-[#ED1B36]/25"
                      : "bg-zinc-900/90 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800"
                  }`}
                >
                  {campus.city}
                </button>
              );
            })}
          </div>
        </div>

        {/* 
          ====================================================================
          MAIN SECTION: LEFT ADDRESS/BRAND COLUMN + RIGHT GOOGLE MAP CARD
          (Exact visual fidelity to user's uploaded reference screenshot)
          ====================================================================
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* 
            ==================================================================
            LEFT COLUMN: Brand Logo, Description & Contact Rows
            ==================================================================
          */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 sm:space-y-7">
            {/* 01. Brand Logo Block */}
            <div className="flex items-center gap-3">
              {/* Stylized Red Monogram Emblem */}
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#ED1B36] to-[#A3001C] p-0.5 shadow-lg shadow-[#ED1B36]/30 shrink-0 flex items-center justify-center">
                <div className="w-full h-full bg-black/40 rounded-[10px] flex items-center justify-center backdrop-blur-xs">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path
                      d="M6 4H13C17.4183 4 21 7.58172 21 12C21 16.4183 17.4183 20 13 20H6V4Z"
                      stroke="#ED1B36"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 8H13C15.2091 8 17 9.79086 17 12C17 14.2091 15.2091 16 13 16H9V8Z"
                      fill="#FFFFFF"
                    />
                  </svg>
                </div>
              </div>

              {/* Brand Typography */}
              <div>
                <div className="flex items-baseline tracking-tight">
                  <span className="text-2xl sm:text-[28px] font-black font-heading text-white">
                    {selectedCampus.brandName.startsWith("Digital")
                      ? "Digital"
                      : selectedCampus.brandName}
                  </span>
                  {selectedCampus.brandName.startsWith("Digital") && (
                    <span className="text-2xl sm:text-[28px] font-black font-heading text-[#ED1B36]">
                      i360
                    </span>
                  )}
                </div>
                <span className="block text-[10px] sm:text-[11px] font-bold tracking-[0.22em] text-zinc-400 uppercase leading-none mt-1">
                  {selectedCampus.brandSubtitle}
                </span>
              </div>
            </div>

            {/* 02. Description Paragraph */}
            <p className="text-xs sm:text-[13.5px] leading-relaxed sm:leading-[1.7] text-zinc-300 font-normal max-w-lg">
              {selectedCampus.description}
            </p>

            {/* 03. Street Address with Quick Copy */}
            <div className="pt-1 border-t border-zinc-900 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#ED1B36]" />
                  <span>Campus Address</span>
                </span>
                <button
                  onClick={handleCopyAddress}
                  className="text-[11px] text-zinc-400 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                  title="Copy address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400 font-medium">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-xs sm:text-[13px] text-zinc-300 font-medium leading-relaxed">
                {selectedCampus.address}
              </p>
              <p className="text-[11px] text-zinc-500 italic">
                {selectedCampus.landmark}
              </p>
            </div>

            {/* 04. Contact Rows (Exact match with red circle outline icons) */}
            <div className="space-y-4 pt-2">
              {/* Phone Row */}
              <div className="flex items-center gap-3.5 sm:gap-4 group">
                <a
                  href={`tel:${selectedCampus.phone}`}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#ED1B36] flex items-center justify-center shrink-0 text-[#ED1B36] bg-black/60 group-hover:bg-[#ED1B36] group-hover:text-white transition-all duration-200 shadow-sm shadow-[#ED1B36]/20"
                  aria-label="Call Phone"
                >
                  <Phone className="w-4 h-4 sm:w-[18px] sm:h-[18px] transition-transform duration-200 group-hover:scale-110" />
                </a>
                <a
                  href={`tel:${selectedCampus.phone}`}
                  className="text-white group-hover:text-[#ED1B36] font-bold text-base sm:text-lg tracking-wide transition-colors"
                >
                  {selectedCampus.phoneFormatted}
                </a>
              </div>

              {/* Email Row */}
              <div className="flex items-center gap-3.5 sm:gap-4 group">
                <a
                  href={`mailto:${selectedCampus.email}`}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#ED1B36] flex items-center justify-center shrink-0 text-[#ED1B36] bg-black/60 group-hover:bg-[#ED1B36] group-hover:text-white transition-all duration-200 shadow-sm shadow-[#ED1B36]/20"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4 sm:w-[18px] sm:h-[18px] transition-transform duration-200 group-hover:scale-110" />
                </a>
                <a
                  href={`mailto:${selectedCampus.email}`}
                  className="text-white group-hover:text-[#ED1B36] font-bold text-base sm:text-lg tracking-wide transition-colors"
                >
                  {selectedCampus.email}
                </a>
              </div>
            </div>
          </div>

          {/* 
            ==================================================================
            RIGHT COLUMN: Rounded Google Map Card
            (Exact match to screenshot with rounded corners, red marker,
             roads, satellite view, and floating "Open in Maps" button)
            ==================================================================
          */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Map Mode Switcher & Address indicator header */}
            <div className="flex items-center justify-between mb-3 px-1 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="font-semibold text-zinc-300">
                  {selectedCampus.city} Campus Map
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setMapMode("preview")}
                  className={`px-2.5 py-1 text-[10px] font-bold uppercase rounded-md transition-all ${
                    mapMode === "preview" && isHyderabad
                      ? "bg-zinc-800 text-white border border-zinc-700"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  Map View
                </button>
                <button
                  onClick={() => setMapMode("interactive")}
                  className={`px-2.5 py-1 text-[10px] font-bold uppercase rounded-md transition-all ${
                    mapMode === "interactive" || !isHyderabad
                      ? "bg-[#ED1B36] text-white shadow-sm"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  Interactive Map
                </button>
              </div>
            </div>

            {/* Rounded Map Frame */}
            <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-black/90 border border-zinc-800 bg-[#E8E6DF] group">
              {/* Option A: Pixel-Perfect Map View matching screenshot */}
              {mapMode === "preview" && isHyderabad ? (
                <div className="relative w-full h-full">
                  <Image
                    src={selectedCampus.imagePreview}
                    alt={`${selectedCampus.city} Google Map`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-center"
                    priority
                  />

                  {/* Central Red Location Pin with Pulse (Exact match) */}
                  <div className="absolute top-[44%] left-[51%] -translate-x-1/2 -translate-y-1/2 pointer-events-none flex flex-col items-center">
                    <span className="absolute -inset-2 rounded-full bg-[#ED1B36]/30 animate-ping" />
                  </div>

                  {/* Satellite Switch Button Thumbnail (Bottom Left) */}
                  <div className="absolute left-3.5 bottom-3.5 z-10 pointer-events-auto">
                    <button
                      onClick={() => setMapMode("interactive")}
                      className="group/sat flex items-center gap-1.5 p-1 rounded-md bg-white/95 backdrop-blur-md shadow-lg border border-zinc-300 hover:bg-white transition-all text-left"
                      title="Toggle Satellite Imagery"
                    >
                      <div className="w-8 h-8 rounded-sm overflow-hidden relative border border-zinc-300 shrink-0">
                        <Image
                          src="/images/hyderabad-map-view.png"
                          alt="Satellite"
                          fill
                          sizes="32px"
                          className="object-cover filter contrast-125"
                        />
                      </div>
                      <div className="pr-1.5 hidden sm:block">
                        <span className="text-[10px] font-bold text-zinc-900 block leading-tight">
                          Tan Coffee | Hyderabad
                        </span>
                        <span className="text-[9px] text-zinc-500 block leading-none">
                          Hitech City Main Rd
                        </span>
                      </div>
                    </button>
                  </div>

                  {/* Floating "Open in Maps" Button (Bottom Right) */}
                  <div className="absolute right-3.5 bottom-3.5 z-10 pointer-events-auto">
                    <a
                      href={selectedCampus.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-lg bg-[#202124] hover:bg-[#000000] text-white text-xs font-bold flex items-center gap-2 shadow-2xl transition-all duration-200 border border-white/20 hover:scale-105"
                      title="Open in Google Maps"
                    >
                      {/* Google 'G' icon in official colors */}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                          fill="#EA4335"
                        />
                      </svg>
                      <span className="font-sans">Open in Maps</span>
                    </a>
                  </div>
                </div>
              ) : (
                /* Option B: Live Interactive Google Map Iframe */
                <div className="relative w-full h-full">
                  <iframe
                    title={`Google Map - ${selectedCampus.city}`}
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(
                      selectedCampus.embedQuery
                    )}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />

                  {/* Floating Open in Maps button on live iframe too */}
                  <div className="absolute right-3.5 bottom-3.5 z-10 pointer-events-auto">
                    <a
                      href={selectedCampus.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-lg bg-[#202124] hover:bg-[#000000] text-white text-xs font-bold flex items-center gap-2 shadow-2xl transition-all duration-200 border border-white/20 hover:scale-105"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                          fill="#EA4335"
                        />
                      </svg>
                      <span>Open in Maps</span>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Direct Google Maps Action Link */}
            <div className="flex items-center justify-between text-[11px] text-zinc-500 mt-3 px-1">
              <span className="flex items-center gap-1.5">
                <Navigation className="w-3.5 h-3.5 text-[#ED1B36]" />
                <span>
                  {selectedCampus.city} Campus: {selectedCampus.address}
                </span>
              </span>
              <a
                href={selectedCampus.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ED1B36] hover:underline font-bold flex items-center gap-1"
              >
                <span>Get Directions</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
