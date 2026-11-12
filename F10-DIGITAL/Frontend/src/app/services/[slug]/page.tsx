import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { SERVICES_DATA, COMPANY_INFO } from "@/lib/data";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((s) => ({
    slug: s.slug,
  }));
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#202522]">
      {/* Header */}
      <section className="pt-36 pb-16 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#777A75] hover:text-[#202522] mb-8 transition-colors uppercase tracking-wider"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Capabilities</span>
        </Link>

        <div className="max-w-4xl space-y-4">
          <span className="text-xs uppercase font-mono tracking-widest text-[#B69A72] block">
            {service.division.replace("-", " & ")}
          </span>
          <h1 className="text-4xl sm:text-6xl font-black font-heading tracking-tight text-[#202522]">
            {service.title}
          </h1>
          <p className="text-base sm:text-lg text-[#777A75] font-light max-w-2xl leading-relaxed">
            {service.shortDesc}
          </p>
        </div>
      </section>

      {/* 80% Large Full-Width Image */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pb-20">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[420px] sm:h-[580px] w-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${service.image}')` }}
          />
        </div>
      </section>

      {/* Details & Specifications */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8 space-y-10">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-heading text-[#202522]">
                Architectural & Commercial Overview
              </h2>
              <p className="text-base text-[#777A75] font-light leading-relaxed">
                {service.fullDesc}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#E2DED6] space-y-6">
              <h3 className="text-lg font-bold font-heading text-[#202522]">
                Scope Deliverables & Specifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F7F5F0]">
                    <Check className="w-4 h-4 text-[#B69A72] shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-[#202522]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {service.techStack && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold font-heading text-[#202522]">
                  Tooling & Implementation Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-xl bg-[#E8E4DC] text-xs font-mono font-semibold text-[#202522]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-8 rounded-2xl bg-[#E8E4DC] border border-[#DCD7CD] space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#B69A72]">
                  Project Discovery
                </span>
                <h3 className="text-xl font-bold font-heading text-[#202522] mt-1">
                  Deploy {service.title}
                </h3>
                <p className="text-xs text-[#777A75] font-light mt-2 leading-relaxed">
                  Connect directly with our senior team in Dubai for project scoping.
                </p>
              </div>

              <div className="space-y-3">
                <Link
                  href={`/contact?service=${service.slug}`}
                  className="w-full py-3.5 rounded-full bg-[#202522] text-[#F7F5F0] text-center block text-xs uppercase tracking-wider font-bold shadow-md hover:bg-[#141715] transition-all"
                >
                  Initiate Project Scope
                </Link>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 rounded-full bg-[#FFFFFF] text-[#202522] text-center block text-xs uppercase tracking-wider font-semibold border border-[#E2DED6] hover:bg-[#F7F5F0] transition-colors"
                >
                  WhatsApp Leadership
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
