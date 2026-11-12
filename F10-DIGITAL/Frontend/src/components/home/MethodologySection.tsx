"use client";

import React, { useState, useEffect, useRef } from "react";
import { METHODOLOGY_STEPS } from "@/lib/data";
import { gsap, ScrollTrigger, EASE_PRIMARY } from "@/lib/gsap";

export function MethodologySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const stepVisuals = [
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=85", // Discover
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=85", // Strategize
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=85", // Build
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=85", // Launch
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=85", // Optimise
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85", // Scale
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      if (visualRef.current) {
        gsap.fromTo(
          visualRef.current,
          { opacity: 0, x: -15 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: EASE_PRIMARY,
            scrollTrigger: {
              trigger: section,
              start: "top 95%",
            },
          }
        );
      }

      if (timelineRef.current) {
        gsap.fromTo(
          timelineRef.current.children,
          { opacity: 0, x: 15 },
          {
            opacity: 1,
            x: 0,
            duration: 0.45,
            stagger: 0.04,
            ease: EASE_PRIMARY,
            scrollTrigger: {
              trigger: timelineRef.current,
              start: "top 95%",
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-10 sm:py-16 bg-[#F8FAFC] relative overflow-hidden border-t border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Header */}
        <div className="max-w-3xl mb-8 space-y-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] font-heading tracking-tight leading-[1.08]">
            From First Insight to <br />
            <span className="text-[#2554D7]">Lasting Impact.</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#64748B] font-light max-w-lg leading-relaxed">
            A transparent six-stage operational progression engineered to ensure predictable execution, zero downtime, and compounding commercial value.
          </p>
        </div>

        {/* Minimal Split-Screen Interactive Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Column: 60% Large Dynamic Step Photograph */}
          <div ref={visualRef} className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-md h-[280px] sm:h-[360px] w-full border border-[#E2E8F0]">
              <div
                key={activeStep}
                className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-out scale-100 hover:scale-105"
                style={{ backgroundImage: `url('${stepVisuals[activeStep]}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 text-white space-y-0.5">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#93C5FD] font-bold">
                  STAGE {METHODOLOGY_STEPS[activeStep].number} OF 06
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-heading">
                  {METHODOLOGY_STEPS[activeStep].name}: {METHODOLOGY_STEPS[activeStep].tagline}
                </h3>
                <p className="text-xs text-[#E2E8F0]/80 font-light max-w-md">
                  Deliverable: {METHODOLOGY_STEPS[activeStep].deliverable}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Progression Timeline with Animated Indicator Line */}
          <div ref={timelineRef} className="lg:col-span-5 space-y-2 relative">
            {METHODOLOGY_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`w-full p-3 rounded-xl text-left transition-all duration-200 border flex items-center justify-between ${
                    isActive
                      ? "bg-[#FFFFFF] border-[#2554D7] shadow-sm translate-x-1.5"
                      : "bg-[#FFFFFF]/70 border-[#E2E8F0] hover:bg-[#FFFFFF] hover:border-[#CBD5E1]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-mono font-bold transition-colors ${isActive ? "text-[#2554D7]" : "text-[#64748B]"}`}>
                      {step.number}
                    </span>
                    <span className={`text-xs sm:text-sm font-bold font-heading transition-colors ${isActive ? "text-[#0F172A]" : "text-[#0F172A]/70"}`}>
                      {step.name}
                    </span>
                  </div>

                  <span className={`text-[10px] uppercase font-mono tracking-wider transition-colors ${isActive ? "text-[#2554D7] font-bold" : "text-[#94A3B8]"}`}>
                    {isActive ? "Active Phase" : "Inspect"}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
