import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

export const metadata = {
  title: "Privacy Policy | F10 DIGITAL",
  description: "F10 Digital data protection and privacy policy aligned with UAE Federal Decree-Law No. 45 of 2021 (PDPL) and international standards.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#080B2B] text-[#CCD2F0]">
      <section className="py-20 bg-gradient-hero border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-cyan-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO HOMEPAGE</span>
          </Link>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Privacy & Data Protection Policy
          </h1>
          <p className="text-sm text-[#777C94] mt-2">
            Last Updated: November 2026 · Governing Law: United Arab Emirates
          </p>
        </div>
      </section>

      <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm leading-relaxed text-[#CCD2F0]">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white font-heading">
            1. Commitment to Data Privacy
          </h2>
          <p>
            F10 Digital Solutions LLC ("F10 Digital", "we", "our", or "us") is dedicated to protecting the privacy, confidentiality, and security of all personal and commercial data entrusted to us by clients, website visitors, and prospective partners. This Privacy Policy details our practices regarding information collection, processing, and storage in compliance with UAE Federal Decree-Law No. 45 of 2021 regarding Personal Data Protection (PDPL) and applicable international privacy frameworks.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white font-heading">
            2. Information We Collect
          </h2>
          <p>
            We collect information provided directly by you when submitting our project discovery forms, engaging with our WhatsApp concierge, requesting strategic consultations, or entering into commercial client service agreements:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-[#CCD2F0]">
            <li>Contact details: Name, work email address, telephone number, and company name.</li>
            <li>Project specifics: Desired digital transformation scope, technical specifications, and budgetary parameters.</li>
            <li>Technical data: Anonymized IP addresses, browser types, session interactions, and referral channels collected through server-side analytics.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white font-heading">
            3. Purpose of Processing
          </h2>
          <p>
            Collected information is utilized solely for legitimate commercial functions:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-[#CCD2F0]">
            <li>Scoping and delivering custom digital transformation, web engineering, and media solutions.</li>
            <li>Communicating project updates, milestone reviews, and executive KPI reports.</li>
            <li>Maintaining the security, performance, and integrity of our web infrastructure.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white font-heading">
            4. Mutual NDA & Confidentiality
          </h2>
          <p>
            All proprietary business information, source code, media footage, and strategic marketing assets shared with F10 Digital are held under strict non-disclosure obligations. We never sell, lease, or monetize client data under any circumstances.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white font-heading">
            5. Contact Information
          </h2>
          <p>
            For data protection inquiries or requests regarding your personal records, contact our Legal & Compliance desk at{" "}
            <a href={`mailto:${COMPANY_INFO.email}`} className="text-cyan-400 font-medium underline">
              {COMPANY_INFO.email}
            </a>{" "}
            or via our Dubai Headquarters.
          </p>
        </section>
      </div>
    </div>
  );
}

