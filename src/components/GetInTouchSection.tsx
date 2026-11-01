"use client";
import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, ArrowRight } from "lucide-react";

interface GetInTouchSectionProps {
  industryTitle: string;
}

export const GetInTouchSection: React.FC<GetInTouchSectionProps> = ({
  industryTitle,
}) => {
  const [formData, setFormData] = useState({
    enquiryType: "Solution Architecture Consultation",
    firstName: "",
    lastName: "",
    email: "",
    organisation: "",
    jobTitle: "",
    phone: "",
    country: "United States",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [leadId, setLeadId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          organization: formData.organisation,
          service: `${industryTitle} - ${formData.enquiryType}`,
          projectDetails: `Job Title: ${formData.jobTitle || "N/A"}\nPhone: ${
            formData.phone || "N/A"
          }\nCountry: ${formData.country}\n\nMessage:\n${formData.message}`,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Submission failed. Please try again.");
      }

      setStatus("success");
      setLeadId(data.referenceId || data.leadId || "LEAD-" + Math.floor(100000 + Math.random() * 900000));
      setFormData({
        enquiryType: "Solution Architecture Consultation",
        firstName: "",
        lastName: "",
        email: "",
        organisation: "",
        jobTitle: "",
        phone: "",
        country: "United States",
        message: "",
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
    <section id="contact-form" className="py-20 lg:py-28 bg-[#5F0022] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Heading */}
          <div className="lg:col-span-4">
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-black font-heading text-white tracking-tight leading-tight">
              Get In Touch
            </h2>
          </div>

          {/* Right Column: Information Subtitle & Form */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-1 text-sm sm:text-base text-white/90 font-normal">
              <p className="font-medium">Need more information?</p>
              <p className="text-white/75">
                We will take approximately 3-5 working days to respond to your enquiry.
              </p>
            </div>

            {status === "success" ? (
              <div className="p-8 bg-white/10 border border-white/20 backdrop-blur-md rounded-none space-y-4 animate-in fade-in duration-300">
                <div className="flex items-center gap-3 text-emerald-400">
                  <CheckCircle2 className="w-6 h-6" />
                  <span className="text-lg font-bold">
                    Thank you for your enquiry.
                  </span>
                </div>
                <p className="text-sm text-white/90">
                  Our {industryTitle} practice team has received your message. A confirmation has been logged under reference ID:
                </p>
                <div className="font-mono text-sm bg-black/30 px-4 py-2 border border-white/20 inline-block font-bold text-white tracking-wider">
                  {leadId}
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-xs font-bold text-white underline hover:text-[#ED1B36] uppercase tracking-wider"
                  >
                    Submit Another Enquiry →
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                {status === "error" && (
                  <div className="p-4 bg-red-950/60 border border-red-500/50 flex items-center gap-3 text-xs text-red-200">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* 01. Type of enquiry */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-white/90">
                    * Type of enquiry
                  </label>
                  <select
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-white/40 focus:border-white text-white text-sm py-2.5 outline-none transition-colors cursor-pointer [&>option]:text-zinc-900"
                  >
                    <option value="" disabled>
                      Select an enquiry type
                    </option>
                    <option value="Solution Architecture Consultation">
                      Solution Architecture Consultation
                    </option>
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="RFP / Commercial Proposal">
                      RFP / Commercial Proposal
                    </option>
                    <option value="Technology Partnership">
                      Technology Partnership
                    </option>
                    <option value="Executive Advisory">
                      Executive Advisory
                    </option>
                  </select>
                </div>

                {/* 02. First Name & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-white/90">
                      * First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder=""
                      className="w-full bg-transparent border-b border-white/40 focus:border-white text-white text-sm py-2 outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-white/90">
                      * Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder=""
                      className="w-full bg-transparent border-b border-white/40 focus:border-white text-white text-sm py-2 outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* 03. Email Address & Organisation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-white/90">
                      * Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder=""
                      className="w-full bg-transparent border-b border-white/40 focus:border-white text-white text-sm py-2 outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-white/90">
                      * Organisation
                    </label>
                    <input
                      type="text"
                      name="organisation"
                      value={formData.organisation}
                      onChange={handleChange}
                      required
                      placeholder=""
                      className="w-full bg-transparent border-b border-white/40 focus:border-white text-white text-sm py-2 outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* 04. Job Title & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-white/90">
                      Job Title
                    </label>
                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      placeholder=""
                      className="w-full bg-transparent border-b border-white/40 focus:border-white text-white text-sm py-2 outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-white/90">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder=""
                      className="w-full bg-transparent border-b border-white/40 focus:border-white text-white text-sm py-2 outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* 05. Country */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-white/90">
                    * Country
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-white/40 focus:border-white text-white text-sm py-2.5 outline-none transition-colors cursor-pointer [&>option]:text-zinc-900"
                  >
                    <option value="" disabled>
                      -Select-
                    </option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Canada">Canada</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="India">India</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Australia">Australia</option>
                    <option value="United Arab Emirates">
                      United Arab Emirates
                    </option>
                    <option value="Other">Other Global</option>
                  </select>
                </div>

                {/* 06. Message */}
                <div className="space-y-1.5 pt-2">
                  <label className="block text-xs font-semibold text-white/90">
                    * Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder=""
                    className="w-full bg-transparent border border-white/40 focus:border-white text-white text-sm p-3 outline-none transition-colors resize-y rounded-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4 flex items-center justify-start">
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-8 py-3.5 bg-white hover:bg-[#ED1B36] text-[#5F0022] hover:text-white font-extrabold text-xs uppercase tracking-widest transition-all duration-200 shadow-md flex items-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Enquiry</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
