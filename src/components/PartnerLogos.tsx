import React from "react";

export const PartnerLogos: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center justify-start gap-10 sm:gap-14 lg:gap-16 pt-4">
      {/* 01. PLANETCAST */}
      <div className="flex items-center gap-3">
        <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
          <circle cx="21" cy="21" r="20" fill="#E6007E" />
          <path
            d="M8 26C12 20 18 18 24 22C30 26 34 22 36 18C34 14 30 10 24 10C18 10 12 16 8 26Z"
            fill="#FFFFFF"
            opacity="0.9"
          />
          <path
            d="M14 16C16 14 20 13 22 15C24 17 28 17 30 15"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <span className="text-[13px] font-black tracking-wider text-zinc-800 uppercase font-heading">
          PLANETCAST
        </span>
      </div>

      {/* 02. C2PA (Coalition for Content Provenance and Authenticity) */}
      <div className="flex items-center gap-3">
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
          <rect x="6" y="6" width="26" height="26" rx="4" stroke="#242321" strokeWidth="2.5" />
          <circle cx="19" cy="19" r="6" stroke="#242321" strokeWidth="2.5" />
          <line x1="6" y1="13" x2="32" y2="13" stroke="#242321" strokeWidth="1.5" />
          <line x1="6" y1="25" x2="32" y2="25" stroke="#242321" strokeWidth="1.5" />
        </svg>
        <div className="text-[10px] font-bold text-zinc-800 leading-tight max-w-[130px]">
          Coalition for<br />
          Content Provenance<br />
          and Authenticity
        </div>
      </div>

      {/* 03. FORTINET */}
      <div className="flex items-center gap-2.5">
        <div className="grid grid-cols-2 gap-0.5">
          <div className="w-2.5 h-2.5 bg-[#ED1C24]" />
          <div className="w-2.5 h-2.5 bg-[#ED1C24]" />
          <div className="w-2.5 h-2.5 bg-[#ED1C24]" />
          <div className="w-2.5 h-2.5 bg-[#ED1C24]" />
        </div>
        <span className="text-base font-black tracking-widest text-zinc-900 uppercase font-heading">
          FORTINET
        </span>
      </div>

      {/* 04. paloalto NETWORKS */}
      <div className="flex items-center gap-2.5">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <polygon points="4,14 14,4 24,14 14,24" stroke="#FA582D" strokeWidth="3" fill="none" />
          <line x1="4" y1="14" x2="24" y2="14" stroke="#FA582D" strokeWidth="3" />
        </svg>
        <div className="flex items-baseline gap-1">
          <span className="text-sm font-bold text-zinc-900 tracking-tight lowercase">
            paloalto
          </span>
          <span className="text-[10px] font-black uppercase tracking-wider text-zinc-700">
            NETWORKS
          </span>
        </div>
      </div>

      {/* 05. databricks */}
      <div className="flex items-center gap-2">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
          <polygon points="13,3 23,8 13,13 3,8" fill="#FF3621" />
          <polygon points="13,9 23,14 13,19 3,14" fill="#FF3621" opacity="0.8" />
          <polygon points="13,15 23,20 13,25 3,20" fill="#FF3621" opacity="0.6" />
        </svg>
        <span className="text-sm font-black tracking-tight text-zinc-900 lowercase font-heading">
          databricks
        </span>
      </div>

      {/* 06. snowflake */}
      <div className="flex items-center gap-2">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
          <path
            d="M13 2V24M2 13H24M5 5L21 21M5 21L21 5"
            stroke="#29B5E8"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="13" cy="13" r="2.5" fill="#29B5E8" />
        </svg>
        <span className="text-sm font-bold tracking-tight text-zinc-900 lowercase font-heading">
          snowflake
        </span>
      </div>

      {/* 07. mongoDB */}
      <div className="flex items-center gap-2">
        <svg width="22" height="26" viewBox="0 0 22 26" fill="none">
          <path
            d="M11 1C11 1 3 8 3 15C3 19 6 23 11 25C16 23 19 19 19 15C19 8 11 1 11 1Z"
            fill="#00ED64"
          />
          <path
            d="M11 2V24C11 24 10.5 21 10.5 15C10.5 8 11 2 11 2Z"
            fill="#001E2B"
          />
        </svg>
        <span className="text-sm font-black tracking-tight text-zinc-900 font-heading">
          mongo<span className="font-extrabold text-zinc-900">DB</span>
        </span>
      </div>
    </div>
  );
};
