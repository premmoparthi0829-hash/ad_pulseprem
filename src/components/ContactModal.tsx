"use client";
import React, { useState } from "react";
import { X, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { servicesData } from "@/data/services";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialService = "Digital Marketing",
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    serviceRequired: initialService,
    projectDetails: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successInfo, setSuccessInfo] = useState<{
    message: string;
    referenceId: string;
  } | null>(null);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit request.");
      }

      setSuccessInfo({
        message: data.message,
        referenceId: data.referenceId,
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSuccessInfo(null);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      companyName: "",
      serviceRequired: "Digital Marketing",
      projectDetails: "",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md transition-all animate-in fade-in duration-200">
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden relative max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header banner */}
        <div className="bg-[#09082F] px-8 py-6 text-white flex items-center justify-between relative overflow-hidden">
          {/* Subtle red accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ED1B36] via-[#650025] to-[#ED1B36]" />
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#ED1B36]">
              INITIATE COLLABORATION
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-heading mt-0.5">
              Let&apos;s Build Your Digital Advantage
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="p-8 overflow-y-auto">
          {successInfo ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-2xl font-bold text-zinc-900 font-heading">
                Inquiry Successfully Logged
              </h4>
              <p className="text-sm text-zinc-600 max-w-md mx-auto">
                {successInfo.message}
              </p>
              <div className="inline-block px-4 py-2 bg-zinc-100 rounded-lg border border-zinc-200 text-xs font-mono text-zinc-800">
                Tracking ID: <span className="font-bold text-[#ED1B36]">{successInfo.referenceId}</span>
              </div>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-lg bg-[#ED1B36] text-white font-bold text-sm hover:bg-[#c9122a] transition-all shadow-md"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                    Full Name <span className="text-[#ED1B36]">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="e.g. David Sterling"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-zinc-300 focus:outline-none focus:border-[#ED1B36] focus:ring-1 focus:ring-[#ED1B36]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                    Corporate Email <span className="text-[#ED1B36]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="david@enterprise.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-zinc-300 focus:outline-none focus:border-[#ED1B36] focus:ring-1 focus:ring-[#ED1B36]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                    Organization / Company <span className="text-[#ED1B36]">*</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    required
                    placeholder="e.g. Apex Global Corp"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-zinc-300 focus:outline-none focus:border-[#ED1B36] focus:ring-1 focus:ring-[#ED1B36]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-zinc-300 focus:outline-none focus:border-[#ED1B36] focus:ring-1 focus:ring-[#ED1B36]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                  Primary Capability Required <span className="text-[#ED1B36]">*</span>
                </label>
                <select
                  name="serviceRequired"
                  value={formData.serviceRequired}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-zinc-300 focus:outline-none focus:border-[#ED1B36] focus:ring-1 focus:ring-[#ED1B36] bg-white"
                >
                  {servicesData.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Enterprise Digital Transformation">
                    Enterprise Digital Transformation (Full Scope)
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                  Project Scope & Objectives <span className="text-[#ED1B36]">*</span>
                </label>
                <textarea
                  name="projectDetails"
                  required
                  rows={4}
                  placeholder="Outline your timeline, current technical challenges, or growth goals..."
                  value={formData.projectDetails}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-zinc-300 focus:outline-none focus:border-[#ED1B36] focus:ring-1 focus:ring-[#ED1B36] resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-zinc-500">
                  Protected by enterprise NDA standards.
                </span>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 rounded-lg bg-[#ED1B36] hover:bg-[#c9122a] text-white font-bold text-sm tracking-wider uppercase flex items-center gap-2 transition-all shadow-md disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Validating...
                    </>
                  ) : (
                    <>
                      Submit Inquiry
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
