import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { INDUSTRIES_DATA } from "@/lib/data";

export const metadata = {
  title: "Industries | F10 DIGITAL",
  description: "Specialized digital transformation and growth frameworks across 10 core vertical sectors.",
};

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#202522]">
      {/* Header */}
      <section className="pt-36 pb-20 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="max-w-4xl space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-[#B69A72] font-semibold">
              Vertical Specialization
            </span>
            <div className="h-[1px] w-12 bg-[#B69A72]/40" />
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-heading tracking-tight leading-[1.08]">
            Understanding Industries. <br />
            <span className="text-[#B69A72]">Creating Possibilities.</span>
          </h1>

          <p className="text-base text-[#777A75] font-light max-w-xl leading-relaxed">
            Every sector commands distinct regulatory requirements, customer conversion journeys, and technical architectures.
          </p>
        </div>
      </section>

      {/* Large Visual Gallery (80% Visual) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES_DATA.map((ind) => (
            <Link
              key={ind.id}
              href={`/industries/${ind.slug}`}
              className="group relative rounded-2xl overflow-hidden h-[400px] sm:h-[480px] shadow-lg flex flex-col justify-end p-6"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url('${ind.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              <div className="relative z-10 text-white space-y-1">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#B69A72] block">
                  {ind.impactMetrics}
                </span>
                <h3 className="text-xl font-bold font-heading group-hover:text-[#B69A72] transition-colors flex items-center justify-between">
                  <span>{ind.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
