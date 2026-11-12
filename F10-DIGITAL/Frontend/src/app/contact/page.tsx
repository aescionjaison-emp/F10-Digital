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
    <div className="min-h-screen bg-[#FFFFFF] text-[#0F172A]">
      {/* Header */}
      <section className="pt-24 pb-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="max-w-4xl space-y-2.5">
          <h1 className="text-4xl sm:text-6xl font-black font-heading tracking-tight leading-[1.08]">
            Start a <br />
            <span className="text-[#2554D7]">Conversation.</span>
          </h1>

          <p className="text-sm sm:text-base text-[#64748B] font-light max-w-xl leading-relaxed">
            Whether architecting an enterprise web portal, scaling regional acquisition, or producing cinema-grade brand films, our leadership desk is ready to scope your roadmap.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-xs">
              {isSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#EFF6FF] text-[#2554D7] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-[#0F172A]">
                    Brief Transmitted Successfully
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] max-w-md mx-auto leading-relaxed font-light">
                    Thank you, <span className="font-semibold text-[#0F172A]">{formData.name}</span>. Your brief has been routed to Daniel and our leadership team. We respond within 2 to 4 business hours.
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 rounded-full bg-[#2554D7] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:bg-[#1D4ED8]"
                    >
                      Continue on WhatsApp
                    </a>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-5 py-2.5 rounded-full bg-white text-[#0F172A] text-xs font-semibold border border-[#E2E8F0]"
                    >
                      Submit Another Brief
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-[#E2E8F0] pb-3">
                    <h3 className="text-lg font-bold font-heading text-[#0F172A]">
                      Executive Inquiry Form
                    </h3>
                    <p className="text-xs text-[#64748B]">
                      Protected under mutual non-disclosure obligations.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#64748B] mb-1 font-semibold">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Tariq Al Mansoori"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E2E8F0] text-[#0F172A] placeholder-[#94A3B8] text-xs sm:text-sm focus:outline-none focus:border-[#2554D7]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#64748B] mb-1 font-semibold">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tariq@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E2E8F0] text-[#0F172A] placeholder-[#94A3B8] text-xs sm:text-sm focus:outline-none focus:border-[#2554D7]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#64748B] mb-1 font-semibold">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+971 50 123 4567"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E2E8F0] text-[#0F172A] placeholder-[#94A3B8] text-xs sm:text-sm focus:outline-none focus:border-[#2554D7]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#64748B] mb-1 font-semibold">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Apex Holdings"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E2E8F0] text-[#0F172A] placeholder-[#94A3B8] text-xs sm:text-sm focus:outline-none focus:border-[#2554D7]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#64748B] mb-1 font-semibold">
                        Primary Scope
                      </label>
                      <select
                        name="serviceInterest"
                        value={formData.serviceInterest}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E2E8F0] text-[#0F172A] text-xs sm:text-sm focus:outline-none focus:border-[#2554D7]"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#64748B] mb-1 font-semibold">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E2E8F0] text-[#0F172A] text-xs sm:text-sm focus:outline-none focus:border-[#2554D7]"
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
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#64748B] mb-1 font-semibold">
                      Project Objective / Key Requirements
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe your objectives, deliverables, and target timeline..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E2E8F0] text-[#0F172A] placeholder-[#94A3B8] text-xs sm:text-sm focus:outline-none focus:border-[#2554D7] resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#2554D7] text-white hover:bg-[#1D4ED8] text-xs uppercase tracking-wider font-bold transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <span>{isSubmitting ? "Transmitting Brief..." : "Submit Discovery Brief"}</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto px-5 py-3 rounded-full bg-white hover:bg-[#F1F5F9] text-[#0F172A] border border-[#E2E8F0] text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#2554D7]" />
                      <span>Direct WhatsApp Handoff</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Direct Leadership Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#2554D7] font-bold">
                  Direct Contacts
                </span>
                <h3 className="text-lg font-bold font-heading text-[#0F172A] mt-1">
                  Executive Desk
                </h3>
              </div>

              <div className="space-y-2.5 text-xs">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#2554D7] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#2554D7]" />
                  <div>
                    <span className="text-[#64748B] block text-[10px] uppercase font-mono">Telephone</span>
                    <span className="font-bold text-[#0F172A] font-mono">{COMPANY_INFO.phone}</span>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#2554D7] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#2554D7]" />
                  <div>
                    <span className="text-[#64748B] block text-[10px] uppercase font-mono">Email Inquiries</span>
                    <span className="font-bold text-[#0F172A] font-mono">{COMPANY_INFO.email}</span>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-[#2554D7]/30 hover:border-[#2554D7] transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#2554D7]" />
                  <div>
                    <span className="text-[#2554D7] block text-[10px] uppercase font-mono font-bold">Immediate 24/7 Routing</span>
                    <span className="font-bold text-[#0F172A]">WhatsApp Senior Partner Direct</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Hubs */}
            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2E8F0] space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#2554D7] font-bold">
                Delivery Hubs
              </span>
              <div className="space-y-2 text-xs">
                {COMPANY_INFO.locations.map((loc) => (
                  <div key={loc.city} className="flex items-start justify-between border-b border-[#F1F5F9] pb-1.5">
                    <div>
                      <span className="font-bold text-[#0F172A] block">{loc.city}, {loc.country}</span>
                      <span className="text-[#64748B] text-[11px]">{loc.role}</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#2554D7] font-bold">{loc.flag}</span>
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
