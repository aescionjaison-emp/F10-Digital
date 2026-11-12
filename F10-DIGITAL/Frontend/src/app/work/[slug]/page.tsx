import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { CASE_STUDIES, COMPANY_INFO } from "@/lib/data";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

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
    <div className="min-h-screen bg-[#F7F5F0] text-[#202522]">
      {/* Header */}
      <section className="pt-36 pb-16 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#777A75] hover:text-[#202522] mb-8 transition-colors uppercase tracking-wider"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Case Studies</span>
        </Link>

        <div className="max-w-4xl space-y-4">
          <span className="text-xs uppercase font-mono tracking-widest text-[#B69A72] block">
            {item.clientCategory} · {item.industry}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-[#202522]">
            {item.title}
          </h1>
        </div>
      </section>

      {/* Hero Visual */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pb-20">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[420px] sm:h-[580px] w-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${item.image}')` }}
          />
        </div>
      </section>

      {/* Case Narrative */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8 space-y-8">
            <div className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#E2DED6] space-y-3">
              <span className="text-xs font-mono font-bold text-[#B69A72] uppercase">
                Phase 01 · Strategic Challenge
              </span>
              <p className="text-sm text-[#777A75] font-light leading-relaxed">
                {item.challenge}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#E2DED6] space-y-3">
              <span className="text-xs font-mono font-bold text-[#B69A72] uppercase">
                Phase 02 · Integrated Solution
              </span>
              <p className="text-sm text-[#777A75] font-light leading-relaxed">
                {item.solution}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#E8E4DC] border border-[#DCD7CD] space-y-3">
              <span className="text-xs font-mono font-bold text-[#202522] uppercase">
                Phase 03 · Commercial Outcome
              </span>
              <p className="text-base text-[#202522] font-semibold leading-relaxed">
                {item.result}
              </p>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="p-8 rounded-2xl bg-[#E8E4DC] border border-[#DCD7CD] space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#B69A72]">
                  Growth Audit
                </span>
                <h3 className="text-xl font-bold font-heading text-[#202522] mt-1">
                  Achieve Similar Outcomes
                </h3>
              </div>
              <Link
                href="/contact"
                className="w-full py-3.5 rounded-full bg-[#202522] text-[#F7F5F0] text-center block text-xs uppercase tracking-wider font-bold hover:bg-[#141715] transition-all"
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
