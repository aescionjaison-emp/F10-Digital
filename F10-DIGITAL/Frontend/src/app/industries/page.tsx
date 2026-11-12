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
    <div className="min-h-screen bg-[#FFFFFF] text-[#0F172A]">
      {/* Header */}
      <section className="pt-24 pb-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="max-w-4xl space-y-2.5">
          <h1 className="text-4xl sm:text-6xl font-black font-heading tracking-tight leading-[1.08]">
            Understanding Industries. <br />
            <span className="text-[#2554D7]">Creating Possibilities.</span>
          </h1>

          <p className="text-sm sm:text-base text-[#64748B] font-light max-w-xl leading-relaxed">
            Every sector commands distinct regulatory requirements, customer conversion journeys, and technical architectures.
          </p>
        </div>
      </section>

      {/* Large Visual Gallery (80% Visual) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {INDUSTRIES_DATA.map((ind) => (
            <Link
              key={ind.id}
              href={`/industries/${ind.slug}`}
              className="group relative rounded-2xl overflow-hidden h-[300px] sm:h-[360px] shadow-sm flex flex-col justify-end p-5 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-[#E2E8F0] hover:border-[#2554D7]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-108"
                style={{ backgroundImage: `url('${ind.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-200 group-hover:opacity-95" />

              <div className="relative z-10 text-white space-y-1 transition-transform duration-200 group-hover:-translate-y-1">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#93C5FD] block font-bold">
                  {ind.impactMetrics}
                </span>
                <h3 className="text-base sm:text-lg font-bold font-heading group-hover:text-[#93C5FD] transition-colors flex items-center justify-between">
                  <span>{ind.name}</span>
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#2554D7] group-hover:text-white transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
