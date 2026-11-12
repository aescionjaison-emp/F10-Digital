import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES_DATA } from "@/lib/data";

export const metadata = {
  title: "Capabilities | F10 DIGITAL",
  description: "Explore F10 Digital's three divisions: Enterprise Technology, Growth & Marketing, and Media & Production.",
};

export default function ServicesPage() {
  const divisions = [
    {
      id: "digital-tech",
      name: "Digital & Technology",
      tagline: "Build for the Future — Scalable and secure technology solutions.",
      services: SERVICES_DATA.filter((s) => s.division === "digital-tech"),
    },
    {
      id: "growth-marketing",
      name: "Growth & Marketing",
      tagline: "Accelerate Your Reach — Data-driven marketing for measurable growth.",
      services: SERVICES_DATA.filter((s) => s.division === "growth-marketing"),
    },
    {
      id: "media-production",
      name: "Media & Production",
      tagline: "Bring Your Brand to Life — High-impact content for every platform.",
      services: SERVICES_DATA.filter((s) => s.division === "media-production"),
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#0F172A]">
      {/* Header */}
      <section className="pt-24 pb-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="max-w-4xl space-y-2.5">
          <h1 className="text-4xl sm:text-6xl font-black font-heading tracking-tight leading-[1.08]">
            Capabilities That Move <br />
            <span className="text-[#2554D7]">Businesses Forward.</span>
          </h1>

          <p className="text-sm sm:text-base text-[#64748B] font-light max-w-xl leading-relaxed">
            End-to-end capabilities engineered to build digital infrastructure, drive qualified acquisition, and produce cinema-grade brand narratives.
          </p>
        </div>
      </section>

      {/* Divisions with Image Panels */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pb-20 space-y-14">
        {divisions.map((div, dIdx) => (
          <section key={div.id} id={div.id} className="scroll-mt-24 space-y-6">
            <div className="border-b border-[#E2E8F0] pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <span className="text-xs font-mono font-bold text-[#2554D7] block">
                  DIVISION 0{dIdx + 1}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black font-heading text-[#0F172A]">
                  {div.name}
                </h2>
              </div>
              <p className="text-xs text-[#64748B] font-light">
                {div.tagline}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {div.services.map((srv) => (
                <Link
                  key={srv.id}
                  href={`/services/${srv.slug}`}
                  className="group rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#E2E8F0] shadow-xs hover:shadow-md transition-all flex flex-col justify-between hover:border-[#2554D7]"
                >
                  <div className="relative h-44 w-full overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105"
                      style={{ backgroundImage: `url('${srv.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>

                  <div className="p-5 space-y-2.5 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-bold font-heading text-[#0F172A] group-hover:text-[#2554D7] transition-colors flex items-center justify-between">
                        <span>{srv.title}</span>
                        <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#2554D7]" />
                      </h3>
                      <p className="text-xs text-[#64748B] font-light line-clamp-2 mt-1">
                        {srv.shortDesc}
                      </p>
                    </div>

                    <div className="pt-2.5 border-t border-[#F1F5F9] text-[11px] font-mono text-[#2554D7] font-semibold">
                      Inspect Detailed Specifications →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
