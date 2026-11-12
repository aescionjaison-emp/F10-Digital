"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { INDUSTRIES_DATA } from "@/lib/data";
import { gsap, ScrollTrigger, EASE_PRIMARY } from "@/lib/gsap";

export function IndustriesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      if (galleryRef.current) {
        gsap.fromTo(
          galleryRef.current.children,
          { opacity: 0, y: 25, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.45,
            stagger: 0.035,
            ease: EASE_PRIMARY,
            scrollTrigger: {
              trigger: galleryRef.current,
              start: "top 95%",
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="industries" className="py-10 sm:py-16 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] font-heading tracking-tight leading-[1.08]">
              Understanding Industries. <br />
              <span className="text-[#2554D7]">Creating Possibilities.</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#64748B] font-light max-w-sm leading-relaxed">
            Tailored digital frameworks designed for sector-specific customer acquisition, regulatory compliance, and operational scale.
          </p>
        </div>

        {/* Large Visual Industry Gallery (80% Visual) with Hover-Slide */}
        <div ref={galleryRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {INDUSTRIES_DATA.map((ind) => (
            <Link
              key={ind.id}
              href={`/industries/${ind.slug}`}
              className="group relative rounded-2xl overflow-hidden h-[280px] sm:h-[340px] shadow-sm flex flex-col justify-end p-5 cursor-pointer will-change-transform hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-[#E2E8F0] hover:border-[#2554D7]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-108"
                style={{ backgroundImage: `url('${ind.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-200 group-hover:opacity-95" />

              <div className="relative z-10 text-white space-y-1.5 transition-transform duration-200 group-hover:-translate-y-1">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#93C5FD] block font-bold">
                  {ind.impactMetrics}
                </span>
                <h3 className="text-base sm:text-lg font-bold font-heading group-hover:text-[#93C5FD] transition-colors flex items-center justify-between">
                  <span>{ind.name}</span>
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#2554D7] group-hover:text-white transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </h3>
                <p className="text-[11px] text-[#E2E8F0]/80 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-150 line-clamp-2 pt-0.5">
                  {ind.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
