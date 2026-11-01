"use client";
import React, { useState, useEffect } from "react";
import { Search, X, ArrowRight, Layers, Building2, BookOpen, Briefcase } from "lucide-react";
import { servicesData } from "@/data/services";
import { industriesData } from "@/data/industries";
import { insightsData } from "@/data/insights";
import { projectsData } from "@/data/projects";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResult?: (sectionId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectResult,
}) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const cleanQuery = query.toLowerCase().trim();

  const filteredServices = cleanQuery
    ? servicesData.filter(
        (s) =>
          s.title.toLowerCase().includes(cleanQuery) ||
          s.fullDesc.toLowerCase().includes(cleanQuery)
      )
    : servicesData.slice(0, 3);

  const filteredIndustries = cleanQuery
    ? industriesData.filter(
        (i) =>
          i.title.toLowerCase().includes(cleanQuery) ||
          i.shortDesc.toLowerCase().includes(cleanQuery)
      )
    : industriesData.slice(0, 3);

  const filteredInsights = cleanQuery
    ? insightsData.filter(
        (ins) =>
          ins.title.toLowerCase().includes(cleanQuery) ||
          ins.summary.toLowerCase().includes(cleanQuery)
      )
    : insightsData.slice(0, 2);

  const filteredProjects = cleanQuery
    ? projectsData.filter(
        (p) =>
          p.title.toLowerCase().includes(cleanQuery) ||
          p.client.toLowerCase().includes(cleanQuery)
      )
    : projectsData.slice(0, 2);

  const handleSelect = (sectionId: string) => {
    onClose();
    if (onSelectResult) {
      onSelectResult(sectionId);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-md transition-all animate-in fade-in duration-200">
      <div
        className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-6 py-5 border-b border-zinc-100 gap-3">
          <Search className="w-6 h-6 text-[#ED1B36] shrink-0" />
          <input
            type="text"
            placeholder="Search capabilities, industries, insights, case studies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full text-lg text-zinc-900 placeholder-zinc-400 focus:outline-none font-sans"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-zinc-100 text-zinc-400 hover:text-zinc-700 transition-colors"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Filter Categories */}
        <div className="px-6 py-3 bg-zinc-50 border-b border-zinc-100 flex items-center gap-2 overflow-x-auto text-xs text-zinc-600">
          <span className="font-semibold text-zinc-400 uppercase tracking-wider text-[10px]">
            Jump to:
          </span>
          <button
            onClick={() => handleSelect("capabilities")}
            className="px-2.5 py-1 rounded-full bg-white border border-zinc-200 hover:border-[#ED1B36] hover:text-[#ED1B36] transition-colors"
          >
            Capabilities
          </button>
          <button
            onClick={() => handleSelect("industries")}
            className="px-2.5 py-1 rounded-full bg-white border border-zinc-200 hover:border-[#ED1B36] hover:text-[#ED1B36] transition-colors"
          >
            Industries
          </button>
          <button
            onClick={() => handleSelect("success-stories")}
            className="px-2.5 py-1 rounded-full bg-white border border-zinc-200 hover:border-[#ED1B36] hover:text-[#ED1B36] transition-colors"
          >
            Case Studies
          </button>
          <button
            onClick={() => handleSelect("latest-thinking")}
            className="px-2.5 py-1 rounded-full bg-white border border-zinc-200 hover:border-[#ED1B36] hover:text-[#ED1B36] transition-colors"
          >
            Latest Thinking
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Services */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
              <Layers className="w-3.5 h-3.5 text-[#ED1B36]" />
              Capabilities & Services
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  onClick={() => handleSelect("capabilities")}
                  className="p-3 rounded-xl border border-zinc-100 hover:border-red-200 hover:bg-red-50/30 transition-all cursor-pointer group flex items-start justify-between"
                >
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900 group-hover:text-[#ED1B36] transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-xs text-zinc-500 line-clamp-1 mt-0.5">
                      {service.shortDesc}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-zinc-300 group-hover:text-[#ED1B36] group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
                </div>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
              <Building2 className="w-3.5 h-3.5 text-[#650025]" />
              Industries
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {filteredIndustries.map((ind) => (
                <div
                  key={ind.id}
                  onClick={() => handleSelect("industries")}
                  className="p-3 rounded-xl border border-zinc-100 hover:border-zinc-300 hover:bg-zinc-50 transition-all cursor-pointer group flex items-start justify-between"
                >
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900 group-hover:text-[#ED1B36] transition-colors">
                      {ind.title}
                    </h4>
                    <p className="text-xs text-zinc-500 line-clamp-1 mt-0.5">
                      {ind.shortDesc}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-zinc-300 group-hover:text-[#ED1B36] group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
                </div>
              ))}
            </div>
          </div>

          {/* Case Studies */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
              <Briefcase className="w-3.5 h-3.5 text-[#09082F]" />
              Success Stories & Proof
            </div>
            <div className="space-y-2">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => handleSelect("success-stories")}
                  className="p-3 rounded-xl border border-zinc-100 hover:border-zinc-300 hover:bg-zinc-50 transition-all cursor-pointer group flex items-center justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold text-[#ED1B36] uppercase tracking-wider">
                      {project.industry}
                    </span>
                    <h4 className="text-sm font-semibold text-zinc-900 group-hover:text-[#ED1B36] transition-colors">
                      {project.title}
                    </h4>
                  </div>
                  <ArrowRight className="w-4 h-4 text-zinc-300 group-hover:text-[#ED1B36] group-hover:translate-x-0.5 transition-all shrink-0" />
                </div>
              ))}
            </div>
          </div>

          {/* Insights */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
              <BookOpen className="w-3.5 h-3.5 text-zinc-600" />
              Latest Thinking
            </div>
            <div className="space-y-2">
              {filteredInsights.map((insight) => (
                <div
                  key={insight.id}
                  onClick={() => handleSelect("latest-thinking")}
                  className="p-3 rounded-xl border border-zinc-100 hover:border-zinc-300 hover:bg-zinc-50 transition-all cursor-pointer group flex items-center justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                      {insight.category} • {insight.readTime}
                    </span>
                    <h4 className="text-sm font-semibold text-zinc-900 group-hover:text-[#ED1B36] transition-colors">
                      {insight.title}
                    </h4>
                  </div>
                  <ArrowRight className="w-4 h-4 text-zinc-300 group-hover:text-[#ED1B36] group-hover:translate-x-0.5 transition-all shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 bg-zinc-100 border-t border-zinc-200 text-xs text-zinc-500 flex justify-between items-center">
          <span>Press ESC to exit</span>
          <span className="text-[#ED1B36] font-medium">AdPulse Digital Global Search</span>
        </div>
      </div>
    </div>
  );
};
