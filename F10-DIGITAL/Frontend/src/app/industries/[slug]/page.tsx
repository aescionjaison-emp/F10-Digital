import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check, ArrowUpRight } from "lucide-react";
import { INDUSTRIES_DATA, COMPANY_INFO } from "@/lib/data";

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

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
    <div className="min-h-screen bg-[#F7F5F0] text-[#202522]">
      {/* Header */}
      <section className="pt-36 pb-16 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <Link
          href="/industries"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#777A75] hover:text-[#202522] mb-8 transition-colors uppercase tracking-wider"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Industries</span>
        </Link>

        <div className="max-w-4xl space-y-4">
          <span className="text-xs uppercase font-mono tracking-widest text-[#B69A72] block">
            Sector Playbook · {industry.impactMetrics}
          </span>
          <h1 className="text-4xl sm:text-6xl font-black font-heading tracking-tight text-[#202522]">
            {industry.name}
          </h1>
          <p className="text-base sm:text-lg text-[#777A75] font-light max-w-2xl leading-relaxed">
            {industry.description}
          </p>
        </div>
      </section>

      {/* Large Hero Image */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pb-20">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[420px] sm:h-[580px] w-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${industry.image}')` }}
          />
        </div>
      </section>

      {/* Tailored Solutions */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8 space-y-8">
            <h2 className="text-2xl font-bold font-heading text-[#202522]">
              Specialized Transformation Framework
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {industry.solutions.map((sol, i) => (
                <div key={i} className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2DED6] flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#B69A72] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-[#202522]">{sol}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="p-8 rounded-2xl bg-[#E8E4DC] border border-[#DCD7CD] space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#B69A72]">
                  Consultation
                </span>
                <h3 className="text-xl font-bold font-heading text-[#202522] mt-1">
                  Scale in {industry.name}
                </h3>
              </div>
              <Link
                href={`/contact?industry=${industry.slug}`}
                className="w-full py-3.5 rounded-full bg-[#202522] text-[#F7F5F0] text-center block text-xs uppercase tracking-wider font-bold hover:bg-[#141715] transition-all"
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
