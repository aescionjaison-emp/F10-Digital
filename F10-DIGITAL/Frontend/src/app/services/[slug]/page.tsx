import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { SERVICES_DATA, COMPANY_INFO } from "@/lib/data";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export const dynamic = "force-static";

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
    <div className="min-h-screen bg-[#FFFFFF] text-[#0F172A]">
      {/* Header */}
      <section className="pt-24 pb-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#64748B] hover:text-[#2554D7] mb-6 transition-colors uppercase tracking-wider"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Capabilities</span>
        </Link>

        <div className="max-w-4xl space-y-2.5">
          <span className="text-xs uppercase font-mono tracking-widest text-[#2554D7] font-bold block">
            {service.division.replace("-", " & ")}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-[#0F172A]">
            {service.title}
          </h1>
          <p className="text-sm sm:text-base text-[#64748B] font-light max-w-2xl leading-relaxed">
            {service.shortDesc}
          </p>
        </div>
      </section>

      {/* Large Image */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pb-12">
        <div className="relative rounded-2xl overflow-hidden shadow-md h-[300px] sm:h-[420px] w-full border border-[#E2E8F0]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${service.image}')` }}
          />
        </div>
      </section>

      {/* Details & Specifications */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#0F172A]">
                Architectural & Commercial Overview
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B] font-light leading-relaxed">
                {service.fullDesc}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-4">
              <h3 className="text-base font-bold font-heading text-[#0F172A]">
                Scope Deliverables & Specifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FFFFFF] border border-[#E2E8F0]">
                    <Check className="w-3.5 h-3.5 text-[#2554D7] shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-[#0F172A]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {service.techStack && (
              <div className="space-y-3">
                <h3 className="text-base font-bold font-heading text-[#0F172A]">
                  Tooling & Implementation Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-mono font-semibold text-[#0F172A]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Sidebar */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#2554D7] font-bold">
                  Project Discovery
                </span>
                <h3 className="text-lg font-bold font-heading text-[#0F172A] mt-1">
                  Deploy {service.title}
                </h3>
                <p className="text-xs text-[#64748B] font-light mt-1 leading-relaxed">
                  Connect directly with our senior team in Dubai for project scoping.
                </p>
              </div>

              <div className="space-y-2.5">
                <Link
                  href={`/contact?service=${service.slug}`}
                  className="w-full py-3 rounded-full bg-[#2554D7] text-white text-center block text-xs uppercase tracking-wider font-bold shadow-md hover:bg-[#1D4ED8] transition-all"
                >
                  Initiate Project Scope
                </Link>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 rounded-full bg-[#FFFFFF] text-[#0F172A] text-center block text-xs uppercase tracking-wider font-semibold border border-[#E2E8F0] hover:bg-[#F8FAFC] transition-colors"
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
