import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { COMPANY_INFO, WHY_F10_PILLARS } from "@/lib/data";

export const metadata = {
  title: "About | F10 DIGITAL — Building Digital Growth",
  description: "Learn about F10 Digital's heritage, integrated delivery model across UAE and India, and leadership philosophy.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#0F172A]">
      {/* Editorial Header */}
      <section className="pt-24 pb-12 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="max-w-4xl space-y-3">
          <h1 className="text-4xl sm:text-6xl font-black font-heading tracking-tight leading-[1.05]">
            Building Digital Growth. <br />
            <span className="text-[#2554D7]">Enabling Performance Transformation.</span>
          </h1>

          <p className="text-sm sm:text-base text-[#64748B] font-light leading-relaxed max-w-2xl">
            We bridge the divide between commercial strategy, modern enterprise technology, growth marketing, AI automation, and cinematic media production.
          </p>
        </div>
      </section>

      {/* Large Architectural Visual */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pb-14">
        <div className="relative rounded-2xl overflow-hidden shadow-lg h-[340px] sm:h-[460px] w-full border border-[#E2E8F0]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=85')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white flex items-center justify-between text-xs font-mono">
            <span>Dubai HQ & Cross-Border Delivery Labs</span>
            <span className="text-[#93C5FD]">UAE · INDIA</span>
          </div>
        </div>
      </section>

      {/* Verified Stats Row */}
      <section className="py-10 bg-[#F8FAFC] border-t border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_INFO.stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl sm:text-4xl font-black text-[#0F172A] font-heading">
                  {s.value}
                </div>
                <div className="text-xs uppercase tracking-wider text-[#2554D7] font-mono mt-1 font-bold">
                  {s.label}
                </div>
                <div className="text-xs text-[#64748B] mt-0.5">
                  {s.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why F10 Digital — 6 Minimal Pillars */}
      <section className="py-14 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="max-w-2xl mb-8 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black font-heading text-[#0F172A]">
            Why Forward-Thinking Enterprises Partner with F10.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_F10_PILLARS.map((p, idx) => (
            <div
              key={p.title}
              className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2E8F0] shadow-xs space-y-2.5 hover:border-[#2554D7] transition-all"
            >
              <span className="text-xs font-mono font-bold text-[#2554D7]">
                0{idx + 1}
              </span>
              <h3 className="text-base font-bold font-heading text-[#0F172A]">
                {p.title}
              </h3>
              <p className="text-xs text-[#64748B] font-light leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-[#E2E8F0] flex items-center justify-between">
          <span className="text-xs font-mono text-[#64748B]">Continuous Improvement & Scalable Support</span>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F172A] hover:text-[#2554D7] transition-colors"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
