import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

export const metadata = {
  title: "Privacy Policy | F10 DIGITAL",
  description: "F10 Digital data protection and privacy policy aligned with UAE Federal Decree-Law No. 45 of 2021 (PDPL) and international standards.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#0F172A]">
      <section className="pt-24 pb-8 max-w-4xl mx-auto px-6 sm:px-12 border-b border-[#E2E8F0]">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#64748B] hover:text-[#2554D7] mb-4 transition-colors uppercase tracking-wider"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Homepage</span>
        </Link>
        <h1 className="text-3xl sm:text-4xl font-black font-heading tracking-tight text-[#0F172A]">
          Privacy & Data Protection Policy
        </h1>
        <p className="text-xs font-mono text-[#64748B] mt-1">
          Last Updated: November 2026 · Governing Law: United Arab Emirates
        </p>
      </section>

      <div className="py-10 max-w-4xl mx-auto px-6 sm:px-12 space-y-6 text-xs sm:text-sm leading-relaxed text-[#0F172A]">
        <section className="space-y-2">
          <h2 className="text-lg font-bold font-heading text-[#0F172A]">
            1. Commitment to Data Privacy
          </h2>
          <p className="text-[#64748B]">
            F10 Digital FZ. LLC. ("F10 Digital", "we", "our", or "us") is dedicated to protecting the privacy, confidentiality, and security of all personal and commercial data entrusted to us in compliance with UAE Federal Decree-Law No. 45 of 2021 regarding Personal Data Protection (PDPL) and international data protection standards.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold font-heading text-[#0F172A]">
            2. Information We Collect
          </h2>
          <p className="text-[#64748B]">
            We collect information provided directly by you when submitting our project discovery forms, engaging with our WhatsApp concierge, requesting strategic consultations, or entering into commercial client service agreements:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-[#64748B]">
            <li>Contact details: Name, work email address, telephone number, and company name.</li>
            <li>Project specifics: Desired digital transformation scope, technical specifications, and budgetary parameters.</li>
            <li>Technical data: Anonymized IP addresses, browser types, session interactions, and referral channels collected through server-side analytics.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold font-heading text-[#0F172A]">
            3. Purpose of Processing
          </h2>
          <p className="text-[#64748B]">
            Collected information is utilized solely for legitimate commercial functions:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-[#64748B]">
            <li>Scoping and delivering custom digital transformation, web engineering, and media solutions.</li>
            <li>Communicating project updates, milestone reviews, and executive KPI reports.</li>
            <li>Maintaining the security, performance, and integrity of our web infrastructure.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold font-heading text-[#0F172A]">
            4. Mutual NDA & Confidentiality
          </h2>
          <p className="text-[#64748B]">
            All proprietary business information, source code, media footage, and strategic marketing assets shared with F10 Digital are held under strict non-disclosure obligations. We never sell, lease, or monetize client data under any circumstances.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold font-heading text-[#0F172A]">
            5. Contact Information
          </h2>
          <p className="text-[#64748B]">
            For data protection inquiries or requests regarding your personal records, contact our Legal & Compliance desk at{" "}
            <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#2554D7] font-semibold underline">
              {COMPANY_INFO.email}
            </a>{" "}
            or via our Dubai Headquarters.
          </p>
        </section>
      </div>
    </div>
  );
}
