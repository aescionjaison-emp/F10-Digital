import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { COMPANY_INFO, WHY_F10_PILLARS } from "@/lib/data";

export const metadata = {
  title: "About | F10 DIGITAL — Building Digital Growth",
  description: "Learn about F10 Digital's heritage, integrated delivery model across UAE and India, and leadership philosophy.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#202522]">
      {/* Editorial Header */}
      <section className="pt-36 pb-20 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-[#B69A72] font-semibold">
              The F10 Heritage
            </span>
            <div className="h-[1px] w-12 bg-[#B69A72]/40" />
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading tracking-tight leading-[1.05]">
            Building Digital Growth. <br />
            <span className="text-[#B69A72]">Enabling Performance Transformation.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#777A75] font-light leading-relaxed max-w-2xl">
            We bridge the divide between commercial strategy, modern enterprise technology, growth marketing, AI automation, and cinematic media production.
          </p>
        </div>
      </section>

      {/* Large 70% Architectural Visual */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pb-24">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[450px] sm:h-[620px] w-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=85')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-white flex items-center justify-between text-xs font-mono">
            <span>Dubai HQ & Cross-Border Delivery Labs</span>
            <span className="text-[#B69A72]">UAE · INDIA</span>
          </div>
        </div>
      </section>

      {/* Verified Stats Row */}
      <section className="py-16 bg-[#E8E4DC] border-t border-b border-[#DCD7CD]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {COMPANY_INFO.stats.map((s) => (
              <div key={s.label}>
                <div className="text-4xl sm:text-5xl font-black text-[#202522] font-heading">
                  {s.value}
                </div>
                <div className="text-xs uppercase tracking-wider text-[#B69A72] font-mono mt-1 font-semibold">
                  {s.label}
                </div>
                <div className="text-xs text-[#777A75] mt-0.5">
                  {s.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why F10 Digital — 6 Minimal Pillars */}
      <section className="py-28 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="max-w-2xl mb-16 space-y-3">
          <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-[#B69A72] font-semibold">
            Operational Principles
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-[#202522]">
            Why Forward-Thinking Enterprises Partner with F10.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_F10_PILLARS.map((p, idx) => (
            <div
              key={p.title}
              className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#E2DED6] shadow-sm space-y-3"
            >
              <span className="text-xs font-mono font-bold text-[#B69A72]">
                0{idx + 1}
              </span>
              <h3 className="text-lg font-bold font-heading text-[#202522]">
                {p.title}
              </h3>
              <p className="text-xs text-[#777A75] font-light leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[#E2DED6] flex items-center justify-between">
          <span className="text-xs font-mono text-[#777A75]">Continuous Improvement & Scalable Support</span>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#202522] hover:text-[#B69A72] transition-colors"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
