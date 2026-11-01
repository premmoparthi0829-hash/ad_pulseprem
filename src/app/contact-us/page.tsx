"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Plus,
  Minus,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowRight,
  MessageSquare,
  X,
  Send,
  Briefcase,
  Users,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SearchModal } from "@/components/SearchModal";
import { ContactModal } from "@/components/ContactModal";
import { BackToTop } from "@/components/BackToTop";
import { GlobalOfficesMap } from "@/components/GlobalOfficesMap";

interface AccordionItem {
  id: string;
  title: string;
}

const accordionList: AccordionItem[] = [
  { id: "request-service", title: "Request for Service" },
  { id: "join-adpulse", title: "Join AdPulse Digital" },
  { id: "vendor-reg", title: "Vendor Registration" },
  { id: "ex-employee", title: "Ex-Employee Requests" },
  { id: "investor-info", title: "Investor Information" },
  { id: "other-requests", title: "Other Requests" },
];

export default function ContactUsPage() {
  const [openAccordion, setOpenAccordion] = useState<string | null>("request-service");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [showChatBubble, setShowChatBubble] = useState(true);

  // Form State for Request for Service
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    serviceRequired: "Digital Transformation & Cloud Modernization",
    projectDetails: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [leadId, setLeadId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Submission failed. Please check your inputs.");
      }

      setStatus("success");
      setLeadId(data.referenceId || "LEAD-" + Math.floor(100000 + Math.random() * 900000));
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        companyName: "",
        serviceRequired: "Digital Transformation & Cloud Modernization",
        projectDetails: "",
      });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "An unexpected error occurred."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#242321] selection:bg-[#ED1B36] selection:text-white relative">
      {/* 
        ======================================================================
        01. GLOBAL HEADER BAR (Active on CONTACT US tab)
        ======================================================================
      */}
      <Header
        activePage="contact"
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <main className="flex-1 w-full pt-[90px]">
        {/* 
          ======================================================================
          02. HERO / CONTACT US TITLE SECTION (Screenshot 1 Exact Match)
          ======================================================================
        */}
        <section className="bg-[#EFEAE1] pt-14 pb-10 sm:pt-20 sm:pb-14 border-b border-zinc-200/80">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading text-[#242321] tracking-tight leading-tight">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg text-zinc-700 font-normal">
              We would love to hear from you!
            </p>
          </div>
        </section>

        {/* 
          ======================================================================
          03. ACCORDION REQUEST CATEGORIES SECTION (Screenshot 1 Exact Match)
          ======================================================================
        */}
        <section className="bg-[#EFEAE1] pb-20 lg:pb-28 border-b border-zinc-200/80">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="divide-y divide-zinc-300/80 border-t border-b border-zinc-300/80">
              {accordionList.map((item) => {
                const isOpen = openAccordion === item.id;
                return (
                  <div key={item.id} className="transition-colors">
                    {/* Accordion Row Header */}
                    <button
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full py-6 sm:py-7 flex items-center justify-between text-left group cursor-pointer"
                    >
                      <span className="text-xl sm:text-2xl font-black font-heading text-[#242321] group-hover:text-[#ED1B36] transition-colors tracking-tight">
                        {item.title}
                      </span>
                      <div className="w-8 h-8 flex items-center justify-center text-zinc-600 group-hover:text-[#ED1B36] transition-colors">
                        {isOpen ? (
                          <Minus className="w-6 h-6 stroke-[2]" />
                        ) : (
                          <Plus className="w-6 h-6 stroke-[2]" />
                        )}
                      </div>
                    </button>

                    {/* Accordion Expanded Panel */}
                    {isOpen && (
                      <div className="pb-8 pt-2 animate-in fade-in duration-300">
                        {/* 01. Request for Service Form */}
                        {item.id === "request-service" && (
                          <div className="bg-white p-8 sm:p-10 border border-zinc-200 shadow-sm max-w-4xl">
                            {status === "success" ? (
                              <div className="p-6 bg-emerald-50 border border-emerald-200 space-y-3">
                                <div className="flex items-center gap-2 text-emerald-800 font-bold text-base">
                                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                  <span>Service Request Successfully Registered</span>
                                </div>
                                <p className="text-xs sm:text-sm text-emerald-700 leading-relaxed">
                                  Thank you. Our practice leadership will review your requirements and reach out within 4 business hours. Reference ID:
                                </p>
                                <span className="inline-block px-3 py-1.5 bg-emerald-100 font-mono text-xs font-bold text-emerald-900 border border-emerald-300">
                                  {leadId}
                                </span>
                                <div className="pt-2">
                                  <button
                                    onClick={() => setStatus("idle")}
                                    className="text-xs font-bold text-[#ED1B36] hover:underline uppercase"
                                  >
                                    Submit Another Request →
                                  </button>
                                </div>
                              </div>
                            ) : (
                              <form onSubmit={handleServiceSubmit} className="space-y-6">
                                {status === "error" && (
                                  <div className="p-4 bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                                    <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                                    <span>{errorMessage}</span>
                                  </div>
                                )}

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                  <div className="space-y-1.5">
                                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                                      * Full Name
                                    </label>
                                    <input
                                      type="text"
                                      name="fullName"
                                      value={formData.fullName}
                                      onChange={handleInputChange}
                                      required
                                      placeholder="e.g. Sarah Jenkins"
                                      className="w-full bg-[#FAF8F5] border border-zinc-300 p-3 text-xs sm:text-sm text-zinc-900 focus:border-[#ED1B36] focus:bg-white outline-none transition-colors"
                                    />
                                  </div>

                                  <div className="space-y-1.5">
                                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                                      * Corporate Email
                                    </label>
                                    <input
                                      type="email"
                                      name="email"
                                      value={formData.email}
                                      onChange={handleInputChange}
                                      required
                                      placeholder="s.jenkins@enterprise.com"
                                      className="w-full bg-[#FAF8F5] border border-zinc-300 p-3 text-xs sm:text-sm text-zinc-900 focus:border-[#ED1B36] focus:bg-white outline-none transition-colors"
                                    />
                                  </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                  <div className="space-y-1.5">
                                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                                      * Organization / Company
                                    </label>
                                    <input
                                      type="text"
                                      name="companyName"
                                      value={formData.companyName}
                                      onChange={handleInputChange}
                                      required
                                      placeholder="e.g. Paramount Global"
                                      className="w-full bg-[#FAF8F5] border border-zinc-300 p-3 text-xs sm:text-sm text-zinc-900 focus:border-[#ED1B36] focus:bg-white outline-none transition-colors"
                                    />
                                  </div>

                                  <div className="space-y-1.5">
                                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                                      Phone Number (Optional)
                                    </label>
                                    <input
                                      type="tel"
                                      name="phone"
                                      value={formData.phone}
                                      onChange={handleInputChange}
                                      placeholder="+1 (555) 000-0000"
                                      className="w-full bg-[#FAF8F5] border border-zinc-300 p-3 text-xs sm:text-sm text-zinc-900 focus:border-[#ED1B36] focus:bg-white outline-none transition-colors"
                                    />
                                  </div>
                                </div>

                                <div className="space-y-1.5">
                                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                                    * Service Practice Required
                                  </label>
                                  <select
                                    name="serviceRequired"
                                    value={formData.serviceRequired}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full bg-[#FAF8F5] border border-zinc-300 p-3 text-xs sm:text-sm text-zinc-900 focus:border-[#ED1B36] focus:bg-white outline-none transition-colors"
                                  >
                                    <option value="Digital Transformation & Cloud Modernization">
                                      Digital Transformation & Cloud Modernization
                                    </option>
                                    <option value="Enterprise AI & Automation">
                                      Enterprise AI & Automation
                                    </option>
                                    <option value="Full-Funnel Growth Marketing">
                                      Full-Funnel Growth Marketing
                                    </option>
                                    <option value="Media & Entertainment Architecture">
                                      Media & Entertainment Architecture
                                    </option>
                                    <option value="Cybersecurity & Zero-Trust Architecture">
                                      Cybersecurity & Zero-Trust Architecture
                                    </option>
                                    <option value="Bespoke Executive Technology Consulting">
                                      Bespoke Executive Technology Consulting
                                    </option>
                                  </select>
                                </div>

                                <div className="space-y-1.5">
                                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                                    * Project Objectives & Timeline
                                  </label>
                                  <textarea
                                    name="projectDetails"
                                    value={formData.projectDetails}
                                    onChange={handleInputChange}
                                    required
                                    rows={4}
                                    placeholder="Please outline your technical scope, key goals, and anticipated project timeline..."
                                    className="w-full bg-[#FAF8F5] border border-zinc-300 p-3 text-xs sm:text-sm text-zinc-900 focus:border-[#ED1B36] focus:bg-white outline-none transition-colors resize-y"
                                  />
                                </div>

                                <div>
                                  <button
                                    type="submit"
                                    disabled={loading}
                                    className="px-8 py-3.5 bg-[#ED1B36] hover:bg-[#C8102E] text-white font-extrabold text-xs uppercase tracking-widest transition-all duration-200 shadow-md flex items-center gap-2 disabled:opacity-50"
                                  >
                                    {loading ? (
                                      <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        <span>Registering Request...</span>
                                      </>
                                    ) : (
                                      <>
                                        <span>Submit Service Request</span>
                                        <ArrowRight className="w-4 h-4" />
                                      </>
                                    )}
                                  </button>
                                </div>
                              </form>
                            )}
                          </div>
                        )}

                        {/* 02. Join AdPulse Digital */}
                        {item.id === "join-adpulse" && (
                          <div className="bg-white p-8 border border-zinc-200 shadow-sm max-w-4xl space-y-4">
                            <div className="flex items-center gap-2 text-zinc-900 font-bold text-lg">
                              <Users className="w-5 h-5 text-[#ED1B36]" />
                              <span>Careers & Talent Opportunities</span>
                            </div>
                            <p className="text-sm text-zinc-600 leading-relaxed">
                              Join a global team of over 140,000 innovators, cloud architects, and digital pioneers across 90+ countries. We foster an inclusive environment built on continuous learning, autonomy, and boundary-pushing client work.
                            </p>
                            <div className="pt-2 flex flex-wrap gap-4">
                              <a
                                href="mailto:careers@adpulse-digital.com?subject=Career%20Inquiry"
                                className="px-6 py-2.5 bg-[#242321] hover:bg-[#ED1B36] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-block"
                              >
                                Email Talent Acquisition
                              </a>
                              <Link
                                href="/#careers"
                                className="px-6 py-2.5 border border-zinc-300 hover:border-zinc-900 text-zinc-800 text-xs font-bold uppercase tracking-wider transition-colors inline-block"
                              >
                                View Limitless Together Culture
                              </Link>
                            </div>
                          </div>
                        )}

                        {/* 03. Vendor Registration */}
                        {item.id === "vendor-reg" && (
                          <div className="bg-white p-8 border border-zinc-200 shadow-sm max-w-4xl space-y-4">
                            <div className="flex items-center gap-2 text-zinc-900 font-bold text-lg">
                              <ShieldCheck className="w-5 h-5 text-[#ED1B36]" />
                              <span>Global Supplier & Vendor Onboarding</span>
                            </div>
                            <p className="text-sm text-zinc-600 leading-relaxed">
                              AdPulse Digital partners with world-class technology suppliers, cloud providers, and specialized service firms. Our global procurement team adheres to the highest standards of transparency, sustainability, and supplier diversity.
                            </p>
                            <div className="pt-2">
                              <a
                                href="mailto:procurement@adpulse-digital.com?subject=Vendor%20Registration"
                                className="px-6 py-2.5 bg-[#242321] hover:bg-[#ED1B36] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-block"
                              >
                                Register as a Certified Vendor
                              </a>
                            </div>
                          </div>
                        )}

                        {/* 04. Ex-Employee Requests */}
                        {item.id === "ex-employee" && (
                          <div className="bg-white p-8 border border-zinc-200 shadow-sm max-w-4xl space-y-4">
                            <div className="flex items-center gap-2 text-zinc-900 font-bold text-lg">
                              <Briefcase className="w-5 h-5 text-[#ED1B36]" />
                              <span>Alumni & Service Verification Desk</span>
                            </div>
                            <p className="text-sm text-zinc-600 leading-relaxed">
                              For employment verification, alumni records, background check requests, and tax documentation, our Global HR Service Desk processes all inquiries within 48 to 72 business hours.
                            </p>
                            <div className="pt-2">
                              <a
                                href="mailto:alumni-desk@adpulse-digital.com?subject=Alumni%20Verification%20Request"
                                className="px-6 py-2.5 bg-[#242321] hover:bg-[#ED1B36] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-block"
                              >
                                Contact Alumni Service Desk
                              </a>
                            </div>
                          </div>
                        )}

                        {/* 05. Investor Information */}
                        {item.id === "investor-info" && (
                          <div className="bg-white p-8 border border-zinc-200 shadow-sm max-w-4xl space-y-4">
                            <div className="flex items-center gap-2 text-zinc-900 font-bold text-lg">
                              <TrendingUp className="w-5 h-5 text-[#ED1B36]" />
                              <span>Shareholder Relations & Corporate Filings</span>
                            </div>
                            <p className="text-sm text-zinc-600 leading-relaxed">
                              Access quarterly earnings releases, annual reports, investor presentations, and ESG governance disclosures. Connect directly with our Investor Relations secretariat.
                            </p>
                            <div className="pt-2">
                              <a
                                href="mailto:investor-relations@adpulse-digital.com?subject=Investor%20Information%20Request"
                                className="px-6 py-2.5 bg-[#242321] hover:bg-[#ED1B36] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-block"
                              >
                                Email Investor Relations
                              </a>
                            </div>
                          </div>
                        )}

                        {/* 06. Other Requests */}
                        {item.id === "other-requests" && (
                          <div className="bg-white p-8 border border-zinc-200 shadow-sm max-w-4xl space-y-4">
                            <h3 className="text-base font-bold text-zinc-900">
                              General Inquiries & Media Relations
                            </h3>
                            <p className="text-sm text-zinc-600 leading-relaxed">
                              For global press inquiries, event sponsorships, academic partnerships, and analyst relations, please contact our central communications office.
                            </p>
                            <div className="pt-2">
                              <a
                                href="mailto:press@adpulse-digital.com?subject=General%20Corporate%20Inquiry"
                                className="px-6 py-2.5 bg-[#242321] hover:bg-[#ED1B36] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-block"
                              >
                                Contact Corporate Communications
                              </a>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          04. GLOBAL OFFICES INTERACTIVE MAP SECTION (Screenshot 2 Exact Match)
          ======================================================================
        */}
        <GlobalOfficesMap />
      </main>

      {/* 
        ======================================================================
        05. FLOATING CHAT HELPER (Screenshot 2 Bottom-Right Exact Match)
        ======================================================================
      */}
      {showChatBubble && (
        <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3 animate-in fade-in slide-in-from-bottom-3 duration-300">
          {/* Speech Bubble */}
          <div className="relative bg-white border border-zinc-300 shadow-2xl p-4 max-w-[280px] rounded-sm text-xs text-zinc-800 leading-snug">
            <button
              onClick={() => setShowChatBubble(false)}
              className="absolute -top-2 -right-2 w-5 h-5 bg-zinc-700 text-white rounded-full flex items-center justify-center hover:bg-zinc-900 text-[10px]"
              aria-label="Close message"
            >
              ✕
            </button>
            <p>
              Hello! Thank you for visiting our Contact Us page. Would you like help submitting an inquiry to AdPulse Digital?
            </p>
            <div className="mt-2.5 flex items-center gap-2">
              <button
                onClick={() => {
                  setOpenAccordion("request-service");
                  window.scrollTo({ top: 300, behavior: "smooth" });
                }}
                className="text-[11px] font-bold text-[#ED1B36] hover:underline flex items-center gap-1 uppercase"
              >
                <span>Submit Inquiry</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
            {/* Arrow pointer */}
            <div className="absolute -bottom-2 right-6 w-3 h-3 bg-white border-r border-b border-zinc-300 transform rotate-45" />
          </div>

          {/* Red Bot Circle Avatar with Notification Badge 1 */}
          <div
            onClick={() => {
              setOpenAccordion("request-service");
              window.scrollTo({ top: 300, behavior: "smooth" });
            }}
            className="w-12 h-12 rounded-full bg-[#ED1B36] text-white flex items-center justify-center shadow-xl cursor-pointer hover:scale-105 transition-transform relative shrink-0"
          >
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-800 text-white text-[10px] font-black flex items-center justify-center border-2 border-white">
              1
            </span>
            <MessageSquare className="w-5 h-5" />
          </div>
        </div>
      )}

      {/* 
        ======================================================================
        06. GLOBAL ENTERPRISE FOOTER
        ======================================================================
      */}
      <Footer />

      {/* 
        ======================================================================
        07. MODALS & UTILITIES
        ======================================================================
      */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        initialService="Enterprise Inquiry"
      />

      <BackToTop />
    </div>
  );
}
