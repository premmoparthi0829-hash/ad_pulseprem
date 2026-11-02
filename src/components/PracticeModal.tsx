"use client";
import React from "react";
import { X, CheckCircle2, ArrowRight } from "lucide-react";
import { PracticeCard } from "@/data/capabilitiesData";

interface PracticeModalProps {
  practice: PracticeCard | null;
  onClose: () => void;
  onInquire: (practiceTitle: string) => void;
}

export const PracticeModal: React.FC<PracticeModalProps> = ({
  practice,
  onClose,
  onInquire,
}) => {
  if (!practice) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 animate-in fade-in duration-200">
      {/* Dark backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-none shadow-2xl max-w-2xl w-full border-t-4 border-[#FD6E12] p-6 sm:p-8 md:p-10 z-10 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-zinc-400 hover:text-black transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Practice Header */}
        <div className="space-y-2 mb-6">
          <span className="text-[11px] font-black uppercase tracking-widest text-[#FD6E12]">
            SPECIALIZED PRACTICE
          </span>
          <h3 className="text-2xl sm:text-3xl font-black font-heading text-[#01286D] tracking-tight">
            {practice.title}
          </h3>
        </div>

        {/* Practice Overview */}
        <div className="space-y-4 text-sm sm:text-base text-zinc-600 leading-relaxed font-normal mb-8 border-b border-zinc-200 pb-6">
          <p>{practice.description}</p>
          <p>{practice.detailedContent}</p>
        </div>

        {/* Key Deliverables */}
        <div className="mb-8">
          <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-800 mb-4">
            Key Practice Deliverables
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-[13px] text-zinc-700">
            {practice.keyDeliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FD6E12] shrink-0 mt-0.5" />
                <span className="font-medium leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-zinc-100">
          <button
            onClick={onClose}
            className="px-5 py-2.5 border border-zinc-300 text-zinc-700 hover:bg-zinc-50 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onInquire(practice.title);
            }}
            className="px-6 py-2.5 bg-[#FD6E12] hover:bg-[#e05e0c] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-md hover:scale-[1.02] cursor-pointer"
          >
            <span>Inquire About Practice</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

