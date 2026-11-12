import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

export const metadata = {
  title: "Terms of Service | F10 DIGITAL",
  description: "Terms and conditions governing the engagement of F10 Digital's enterprise services and digital platforms.",
};

export default function TermsPage() {
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
          Terms & Conditions of Service
        </h1>
        <p className="text-xs font-mono text-[#64748B] mt-1">
          Last Updated: November 2026 · Jurisdiction: Dubai, United Arab Emirates
        </p>
      </section>

      <div className="py-10 max-w-4xl mx-auto px-6 sm:px-12 space-y-6 text-xs sm:text-sm leading-relaxed text-[#0F172A]">
        <section className="space-y-2">
          <h2 className="text-lg font-bold font-heading text-[#0F172A]">
            1. Agreement Overview
          </h2>
          <p className="text-[#64748B]">
            By accessing the website of F10 Digital FZ. LLC. ("F10 Digital") or commissioning our services, you agree to comply with and be bound by the following terms and conditions. Specific service deliverables, milestone timelines, intellectual property allocations, and fee schedules are governed by dedicated Master Services Agreements (MSA) and Statements of Work (SOW).
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold font-heading text-[#0F172A]">
            2. Intellectual Property Rights
          </h2>
          <p className="text-[#64748B]">
            Upon receipt of final milestone payments, full ownership of custom-developed software source code, bespoke application architectures, and produced final media files transfers to the client. Pre-existing proprietary libraries, frameworks, and developer tooling remain the intellectual property of F10 Digital, licensed to the client on a perpetual, royalty-free basis.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold font-heading text-[#0F172A]">
            3. Project Governance & Milestone Sign-Off
          </h2>
          <p className="text-[#64748B]">
            Our delivery follows the six-stage methodology outlined in our company framework. Milestone reviews require formal client sign-off within agreed verification windows to ensure seamless progress and predictable scheduling.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold font-heading text-[#0F172A]">
            4. Limitation of Liability & Governing Law
          </h2>
          <p className="text-[#64748B]">
            These terms are governed by and construed in accordance with the laws of the Emirate of Dubai and the Federal Laws of the United Arab Emirates. Any dispute arising from these terms shall be subject to the exclusive jurisdiction of the competent courts of Dubai.
          </p>
        </section>
      </div>
    </div>
  );
}
