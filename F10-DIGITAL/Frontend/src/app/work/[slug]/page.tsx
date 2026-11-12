import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { CASE_STUDIES, COMPANY_INFO } from "@/lib/data";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamic = "force-static";

export async function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({
    slug: c.slug,
  }));
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const item = CASE_STUDIES.find((c) => c.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#0F172A]">
      {/* Header */}
      <section className="pt-24 pb-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <Link
          href="/work"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#64748B] hover:text-[#2554D7] mb-6 transition-colors uppercase tracking-wider"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Case Studies</span>
        </Link>

        <div className="max-w-4xl space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-[#2554D7] font-bold block">
            {item.clientCategory} · {item.industry}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-[#0F172A]">
            {item.title}
          </h1>
        </div>
      </section>

      {/* Hero Visual */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pb-12">
        <div className="relative rounded-2xl overflow-hidden shadow-md h-[300px] sm:h-[420px] w-full border border-[#E2E8F0]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${item.image}')` }}
          />
        </div>
      </section>

      {/* Case Narrative */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-8 space-y-4">
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
              <span className="text-xs font-mono font-bold text-[#2554D7] uppercase">
                Phase 01 · Strategic Challenge
              </span>
              <p className="text-xs sm:text-sm text-[#64748B] font-light leading-relaxed">
                {item.challenge}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
              <span className="text-xs font-mono font-bold text-[#2554D7] uppercase">
                Phase 02 · Integrated Solution
              </span>
              <p className="text-xs sm:text-sm text-[#64748B] font-light leading-relaxed">
                {item.solution}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#2554D7]/30 space-y-2">
              <span className="text-xs font-mono font-bold text-[#2554D7] uppercase">
                Phase 03 · Commercial Outcome
              </span>
              <p className="text-sm font-semibold text-[#0F172A] leading-relaxed">
                {item.result}
              </p>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#2554D7] font-bold">
                  Growth Audit
                </span>
                <h3 className="text-lg font-bold font-heading text-[#0F172A] mt-1">
                  Achieve Similar Outcomes
                </h3>
              </div>
              <Link
                href="/contact"
                className="w-full py-3 rounded-full bg-[#2554D7] text-white text-center block text-xs uppercase tracking-wider font-bold hover:bg-[#1D4ED8] transition-all shadow-md"
              >
                Schedule Growth Audit
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
