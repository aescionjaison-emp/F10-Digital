import React from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

export const metadata = {
  title: "Terms of Service | F10 DIGITAL",
  description: "Terms and conditions governing the engagement of F10 Digital's enterprise services and digital platforms.",
};

export default function TermsPage() {
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
            Terms & Conditions of Service
          </h1>
          <p className="text-sm text-[#777C94] mt-2">
            Last Updated: November 2026 · Jurisdiction: Dubai, United Arab Emirates
          </p>
        </div>
      </section>

      <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm leading-relaxed text-[#CCD2F0]">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white font-heading">
            1. Agreement Overview
          </h2>
          <p>
            By accessing the website of F10 Digital Solutions LLC ("F10 Digital") or commissioning our services, you agree to comply with and be bound by the following terms and conditions. Specific service deliverables, milestone timelines, intellectual property allocations, and fee schedules are governed by dedicated Master Services Agreements (MSA) and Statements of Work (SOW).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white font-heading">
            2. Intellectual Property Rights
          </h2>
          <p>
            Upon receipt of final milestone payments, full ownership of custom-developed software source code, bespoke application architectures, and produced final media files transfers to the client. Pre-existing proprietary libraries, frameworks, and developer tooling remain the intellectual property of F10 Digital, licensed to the client on a perpetual, royalty-free basis.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white font-heading">
            3. Project Governance & Milestone Sign-Off
          </h2>
          <p>
            Our delivery follows the six-stage methodology outlined in our company framework. Milestone reviews require formal client sign-off within agreed verification windows to ensure seamless progress and predictable scheduling.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white font-heading">
            4. Limitation of Liability & Governing Law
          </h2>
          <p>
            These terms are governed by and construed in accordance with the laws of the Emirate of Dubai and the Federal Laws of the United Arab Emirates. Any dispute arising from these terms shall be subject to the exclusive jurisdiction of the competent courts of Dubai.
          </p>
        </section>
      </div>
    </div>
  );
}

