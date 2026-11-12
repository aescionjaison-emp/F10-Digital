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
    <div className="min-h-screen bg-[#F7F5F0] text-[#202522]">
      {/* Header */}
      <section className="pt-36 pb-20 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="max-w-4xl space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-[#B69A72] font-semibold">
              Verified Performance
            </span>
            <div className="h-[1px] w-12 bg-[#B69A72]/40" />
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-heading tracking-tight leading-[1.08]">
            Business Challenges. <br />
            <span className="text-[#B69A72]">Meaningful Outcomes.</span>
          </h1>

          <p className="text-base text-[#777A75] font-light max-w-xl leading-relaxed">
            Real enterprise transformations delivered across the UAE, GCC, and global markets. Verified results grounded in real client engagements.
          </p>
        </div>
      </section>

      {/* Case Studies Portfolio */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pb-32 space-y-24">
        {CASE_STUDIES.map((cs, idx) => {
          const isReversed = idx % 2 === 1;
          return (
            <div
              key={cs.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                isReversed ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={`lg:col-span-7 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] sm:h-[500px] w-full group">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105"
                    style={{ backgroundImage: `url('${cs.image}')` }}
                  />
                  <div className="absolute top-6 left-6 bg-[#FFFFFF]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-mono font-bold text-[#202522]">
                    {cs.clientCategory}
                  </div>
                </div>
              </div>

              <div className={`lg:col-span-5 space-y-6 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                <span className="text-xs font-mono uppercase tracking-widest text-[#B69A72]">
                  {cs.industry}
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold font-heading text-[#202522] leading-tight">
                  {cs.title}
                </h2>

                <div className="space-y-3 text-xs text-[#777A75] font-light leading-relaxed">
                  <p>
                    <strong className="font-semibold text-[#202522]">Challenge:</strong> {cs.challenge}
                  </p>
                  <p>
                    <strong className="font-semibold text-[#202522]">Solution:</strong> {cs.solution}
                  </p>
                  <p className="text-[#202522] font-medium pt-1">
                    <strong className="text-[#B69A72] font-semibold">Outcome:</strong> {cs.result}
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href={`/work/${cs.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#202522] hover:text-[#B69A72] transition-colors"
                  >
                    <span>Inspect Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
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
