import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { INDUSTRIES_DATA, COMPANY_INFO } from "@/lib/data";

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamic = "force-static";

export async function generateStaticParams() {
  return INDUSTRIES_DATA.map((ind) => ({
    slug: ind.slug,
  }));
}

export default async function IndustryDetailPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = INDUSTRIES_DATA.find((ind) => ind.slug === slug);

  if (!industry) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#0F172A]">
      {/* Header */}
      <section className="pt-24 pb-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <Link
          href="/industries"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#64748B] hover:text-[#2554D7] mb-6 transition-colors uppercase tracking-wider"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Industries</span>
        </Link>

        <div className="max-w-4xl space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-[#2554D7] font-bold block">
            Sector Playbook · {industry.impactMetrics}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-[#0F172A]">
            {industry.name}
          </h1>
          <p className="text-sm text-[#64748B] font-light max-w-2xl leading-relaxed">
            {industry.description}
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pb-12">
        <div className="relative rounded-2xl overflow-hidden shadow-md h-[300px] sm:h-[420px] w-full border border-[#E2E8F0]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${industry.image}')` }}
          />
        </div>
      </section>

      {/* Tailored Solutions */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#0F172A]">
              Specialized Transformation Framework
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {industry.solutions.map((sol, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2554D7] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-[#0F172A]">{sol}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#2554D7] font-bold">
                  Consultation
                </span>
                <h3 className="text-lg font-bold font-heading text-[#0F172A] mt-1">
                  Scale in {industry.name}
                </h3>
              </div>
              <Link
                href={`/contact?industry=${industry.slug}`}
                className="w-full py-3 rounded-full bg-[#2554D7] text-white text-center block text-xs uppercase tracking-wider font-bold hover:bg-[#1D4ED8] transition-all shadow-md"
              >
                Schedule Industry Discovery
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
