import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CASE_STUDIES } from "@/lib/data";

export const metadata = {
  title: "Work | F10 DIGITAL",
  description: "Explore verified enterprise case studies and measurable business outcomes delivered by F10 Digital.",
};

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#0F172A]">
      {/* Header */}
      <section className="pt-24 pb-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="max-w-4xl space-y-2.5">
          <h1 className="text-4xl sm:text-6xl font-black font-heading tracking-tight leading-[1.08]">
            Business Challenges. <br />
            <span className="text-[#2554D7]">Meaningful Outcomes.</span>
          </h1>

          <p className="text-sm sm:text-base text-[#64748B] font-light max-w-xl leading-relaxed">
            Real enterprise transformations delivered across the UAE, GCC, and global markets. Verified results grounded in real client engagements.
          </p>
        </div>
      </section>

      {/* Case Studies Portfolio */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pb-20 space-y-12">
        {CASE_STUDIES.map((cs, idx) => {
          const isReversed = idx % 2 === 1;
          return (
            <div
              key={cs.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center ${
                isReversed ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={`lg:col-span-7 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-sm h-[260px] sm:h-[340px] w-full group border border-[#E2E8F0]">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105"
                    style={{ backgroundImage: `url('${cs.image}')` }}
                  />
                  <div className="absolute top-4 left-4 bg-[#FFFFFF]/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono font-bold text-[#0F172A] shadow-xs">
                    {cs.clientCategory}
                  </div>
                </div>
              </div>

              <div className={`lg:col-span-5 space-y-3 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#2554D7] font-bold">
                  {cs.industry}
                </span>
                <h2 className="text-xl sm:text-3xl font-bold font-heading text-[#0F172A] leading-tight">
                  {cs.title}
                </h2>

                <div className="space-y-1.5 text-xs text-[#64748B] font-light leading-relaxed">
                  <p>
                    <strong className="font-semibold text-[#0F172A]">Challenge:</strong> {cs.challenge}
                  </p>
                  <p>
                    <strong className="font-semibold text-[#0F172A]">Solution:</strong> {cs.solution}
                  </p>
                  <p className="text-[#0F172A] font-medium pt-0.5">
                    <strong className="text-[#2554D7] font-semibold">Outcome:</strong> {cs.result}
                  </p>
                </div>

                <div className="pt-1">
                  <Link
                    href={`/work/${cs.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0F172A] hover:text-[#2554D7] transition-colors group"
                  >
                    <span>Inspect Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
