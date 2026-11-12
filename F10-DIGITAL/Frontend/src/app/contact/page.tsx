"use client";

import React, { useState } from "react";
import { Phone, Mail, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";
import { submitEnquiry } from "@/lib/api";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceInterest: "Full Digital Transformation Ecosystem",
    budget: "AED 50,000 - 150,000",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const serviceOptions = [
    "Full Digital Transformation Ecosystem",
    "Digital & Technology (Next.js, Apps, APIs)",
    "AI & Business Automation (WhatsApp, Agents)",
    "Growth & Marketing (SEO, Paid Media, CRO)",
    "Media Production (Films, Ads, 3D CGI)",
    "Other / Custom Enterprise Scope",
  ];

  const budgetOptions = [
    "Under AED 50,000",
    "AED 50,000 - 150,000",
    "AED 150,000 - 350,000",
    "AED 350,000+ (Enterprise Scale)",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      await submitEnquiry({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        serviceInterest: formData.serviceInterest,
        budget: formData.budget,
        message: formData.message,
      });
      setIsSubmitted(true);
    } catch (err: any) {
      setErrorMsg(err.message || "Failed to submit enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello Daniel & F10 Digital,\n\nI am contacting you from the F10 Digital website regarding a new project.\n\nName: ${formData.name || "N/A"}\nCompany: ${formData.company || "N/A"}\nService: ${formData.serviceInterest}\nBudget: ${formData.budget}\nMessage: ${formData.message || "I'd like to schedule an introductory discovery session."}`
    );
    return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`;
  };

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#202522]">
      {/* Header */}
      <section className="pt-36 pb-16 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="max-w-4xl space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-[#B69A72] font-semibold">
              Project Scoping & Advisory
            </span>
            <div className="h-[1px] w-12 bg-[#B69A72]/40" />
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-heading tracking-tight leading-[1.08]">
            Start a <br />
            <span className="text-[#B69A72]">Conversation.</span>
          </h1>

          <p className="text-base text-[#777A75] font-light max-w-xl leading-relaxed">
            Whether architecting an enterprise web portal, scaling regional acquisition, or producing cinema-grade brand films, our leadership desk is ready to scope your roadmap.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-2xl bg-[#FFFFFF] border border-[#E2DED6] shadow-sm">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-[#E8E4DC] text-[#B69A72] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-[#202522]">
                    Brief Transmitted Successfully
                  </h3>
                  <p className="text-sm text-[#777A75] max-w-md mx-auto leading-relaxed font-light">
                    Thank you, <span className="font-semibold text-[#202522]">{formData.name}</span>. Your brief has been routed to Daniel and our leadership team. We respond within 2 to 4 business hours.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noreferrer"
                      className="px-6 py-3 rounded-full bg-[#202522] text-[#F7F5F0] text-xs font-bold uppercase tracking-wider"
                    >
                      Continue on WhatsApp
                    </a>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-3 rounded-full bg-[#F7F5F0] text-[#202522] text-xs font-semibold border border-[#E2DED6]"
                    >
                      Submit Another Brief
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-[#E2DED6] pb-4">
                    <h3 className="text-xl font-bold font-heading text-[#202522]">
                      Executive Inquiry Form
                    </h3>
                    <p className="text-xs text-[#777A75] mt-0.5">
                      Protected under mutual non-disclosure obligations.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#777A75] mb-1.5 font-semibold">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Tariq Al Mansoori"
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F5F0] border border-[#E2DED6] text-[#202522] placeholder-[#777A75]/60 text-sm focus:outline-none focus:border-[#B69A72]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#777A75] mb-1.5 font-semibold">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tariq@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F5F0] border border-[#E2DED6] text-[#202522] placeholder-[#777A75]/60 text-sm focus:outline-none focus:border-[#B69A72]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#777A75] mb-1.5 font-semibold">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+971 50 123 4567"
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F5F0] border border-[#E2DED6] text-[#202522] placeholder-[#777A75]/60 text-sm focus:outline-none focus:border-[#B69A72]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#777A75] mb-1.5 font-semibold">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Apex Holdings"
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F5F0] border border-[#E2DED6] text-[#202522] placeholder-[#777A75]/60 text-sm focus:outline-none focus:border-[#B69A72]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#777A75] mb-1.5 font-semibold">
                        Primary Scope
                      </label>
                      <select
                        name="serviceInterest"
                        value={formData.serviceInterest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F5F0] border border-[#E2DED6] text-[#202522] text-sm focus:outline-none focus:border-[#B69A72]"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#777A75] mb-1.5 font-semibold">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F5F0] border border-[#E2DED6] text-[#202522] text-sm focus:outline-none focus:border-[#B69A72]"
                      >
                        {budgetOptions.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#777A75] mb-1.5 font-semibold">
                      Project Objective / Key Requirements
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe your objectives, deliverables, and target timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F5F0] border border-[#E2DED6] text-[#202522] placeholder-[#777A75]/60 text-sm focus:outline-none focus:border-[#B69A72] resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#202522] text-[#F7F5F0] hover:bg-[#141715] text-xs uppercase tracking-wider font-bold transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <span>{isSubmitting ? "Transmitting Brief..." : "Submit Discovery Brief"}</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#E8E4DC] hover:bg-[#DCD7CD] text-[#202522] text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4 text-[#B69A72]" />
                      <span>Direct WhatsApp Handoff</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Direct Leadership Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-[#E8E4DC] border border-[#DCD7CD] space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#B69A72]">
                  Direct Contacts
                </span>
                <h3 className="text-xl font-bold font-heading text-[#202522] mt-1">
                  Executive Desk
                </h3>
              </div>

              <div className="space-y-4 text-xs">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center gap-3 p-4 rounded-xl bg-[#FFFFFF] border border-[#E2DED6] hover:border-[#B69A72] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#B69A72]" />
                  <div>
                    <span className="text-[#777A75] block text-[10px] uppercase font-mono">Telephone</span>
                    <span className="font-bold text-[#202522] font-mono">{COMPANY_INFO.phone}</span>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-3 p-4 rounded-xl bg-[#FFFFFF] border border-[#E2DED6] hover:border-[#B69A72] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#B69A72]" />
                  <div>
                    <span className="text-[#777A75] block text-[10px] uppercase font-mono">Email Inquiries</span>
                    <span className="font-bold text-[#202522] font-mono">{COMPANY_INFO.email}</span>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-[#FFFFFF] border border-[#B69A72]/40 hover:border-[#B69A72] transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#B69A72]" />
                  <div>
                    <span className="text-[#B69A72] block text-[10px] uppercase font-mono">Immediate 24/7 Routing</span>
                    <span className="font-bold text-[#202522]">WhatsApp Senior Partner Direct</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Hubs */}
            <div className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#E2DED6] space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B69A72]">
                Delivery Hubs
              </span>
              <div className="space-y-3 text-xs">
                {COMPANY_INFO.locations.map((loc) => (
                  <div key={loc.city} className="flex items-start justify-between border-b border-[#E2DED6]/60 pb-2">
                    <div>
                      <span className="font-bold text-[#202522] block">{loc.city}, {loc.country}</span>
                      <span className="text-[#777A75] text-[11px]">{loc.role}</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#B69A72]">{loc.flag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
