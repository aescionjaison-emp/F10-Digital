"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CASE_STUDIES } from "@/lib/data";
import { gsap, ScrollTrigger, EASE_PRIMARY } from "@/lib/gsap";

export function SuccessStoriesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const casesWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const caseItems = casesWrapRef.current?.children;
      if (caseItems) {
        Array.from(caseItems).forEach((item) => {
          gsap.fromTo(
            item,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: EASE_PRIMARY,
              scrollTrigger: {
                trigger: item,
                start: "top 95%",
              },
            }
          );
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="work" className="py-10 sm:py-16 bg-[#F8FAFC] relative overflow-hidden border-t border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] font-heading tracking-tight leading-[1.08]">
              Business Challenges. <br />
              <span className="text-[#2554D7]">Meaningful Outcomes.</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#64748B] font-light max-w-sm leading-relaxed">
            Real enterprise transformations delivered across the UAE, GCC, and global markets.
          </p>
        </div>

        {/* Portfolio-Style Asymmetrical Project Presentation with Smooth Hover-Slide */}
        <div ref={casesWrapRef} className="space-y-6 sm:space-y-8">
          {CASE_STUDIES.map((cs, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={cs.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* 65% Large Project Photography with Zoom and Badge */}
                <div className={`lg:col-span-7 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                  <Link href={`/work/${cs.slug}`} className="block group">
                    <div className="relative rounded-2xl overflow-hidden shadow-sm h-[240px] sm:h-[320px] w-full border border-[#E2E8F0]">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-106"
                        style={{ backgroundImage: `url('${cs.image}')` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity group-hover:opacity-80" />

                      <div className="absolute top-4 left-4 bg-[#FFFFFF]/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono font-bold text-[#0F172A] shadow-sm">
                        {cs.clientCategory}
                      </div>

                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] text-[#0F172A] text-xs font-bold uppercase tracking-wider shadow-md">
                          <span>Inspect Project</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#2554D7]" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* 35% Minimal Editorial Metadata */}
                <div className={`lg:col-span-5 space-y-3 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#2554D7] block font-bold">
                      {cs.industry}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold font-heading text-[#0F172A] leading-snug">
                      {cs.title}
                    </h3>
                  </div>

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

                  <div className="pt-0.5">
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
    </section>
  );
}
