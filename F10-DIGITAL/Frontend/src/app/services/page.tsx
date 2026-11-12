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
    <div className="min-h-screen bg-[#F7F5F0] text-[#202522]">
      {/* Header */}
      <section className="pt-36 pb-20 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="max-w-4xl space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-[#B69A72] font-semibold">
              Capabilities Architecture
            </span>
            <div className="h-[1px] w-12 bg-[#B69A72]/40" />
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-heading tracking-tight leading-[1.08]">
            Capabilities That Move <br />
            <span className="text-[#B69A72]">Businesses Forward.</span>
          </h1>

          <p className="text-base text-[#777A75] font-light max-w-xl leading-relaxed">
            End-to-end capabilities engineered to build digital infrastructure, drive qualified acquisition, and produce cinema-grade brand narratives.
          </p>
        </div>
      </section>

      {/* Divisions with Large Image Panels */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pb-32 space-y-24">
        {divisions.map((div, dIdx) => (
          <section key={div.id} id={div.id} className="scroll-mt-32 space-y-8">
            <div className="border-b border-[#E2DED6] pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <span className="text-xs font-mono text-[#B69A72] block">
                  DIVISION 0{dIdx + 1}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black font-heading text-[#202522]">
                  {div.name}
                </h2>
              </div>
              <p className="text-xs text-[#777A75] font-light">
                {div.tagline}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {div.services.map((srv) => (
                <Link
                  key={srv.id}
                  href={`/services/${srv.slug}`}
                  className="group rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#E2DED6] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                      style={{ backgroundImage: `url('${srv.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>

                  <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold font-heading text-[#202522] group-hover:text-[#B69A72] transition-colors flex items-center justify-between">
                        <span>{srv.title}</span>
                        <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </h3>
                      <p className="text-xs text-[#777A75] font-light line-clamp-2 mt-1">
                        {srv.shortDesc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#E2DED6]/60 text-[11px] font-mono text-[#B69A72]">
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
