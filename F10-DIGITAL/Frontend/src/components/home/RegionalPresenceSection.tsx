"use client";

import React, { useEffect, useRef } from "react";
import { COMPANY_INFO } from "@/lib/data";
import { gsap, ScrollTrigger, EASE_PRIMARY } from "@/lib/gsap";

export function RegionalPresenceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const citiesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      if (citiesRef.current) {
        gsap.fromTo(
          citiesRef.current.children,
          { opacity: 0, y: 20, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.45,
            stagger: 0.04,
            ease: EASE_PRIMARY,
            scrollTrigger: {
              trigger: citiesRef.current,
              start: "top 95%",
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-10 sm:py-16 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] font-heading tracking-tight leading-[1.08]">
              Connected Across <br />
              <span className="text-[#2554D7]">Global Markets.</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#64748B] font-light max-w-sm leading-relaxed">
            Local client leadership in the United Arab Emirates backed by scalable engineering and creative production studios in India.
          </p>
        </div>

        {/* 4 Large Premium City Photographs with Hover Zoom */}
        <div ref={citiesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {COMPANY_INFO.locations.map((loc) => (
            <div
              key={loc.city}
              className="group relative rounded-2xl overflow-hidden h-[260px] sm:h-[320px] shadow-sm flex flex-col justify-end p-5 cursor-pointer will-change-transform border border-[#E2E8F0] hover:border-[#2554D7] transition-colors"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-108"
                style={{ backgroundImage: `url('${loc.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent transition-opacity duration-200 group-hover:opacity-90" />

              <div className="relative z-10 text-white space-y-0.5 transition-transform duration-200 group-hover:-translate-y-1">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#93C5FD] block font-bold">
                  {loc.country}
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-heading">
                  {loc.city}
                </h3>
                <p className="text-xs text-[#CBD5E1] font-light">
                  {loc.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
