"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { gsap, ScrollTrigger, EASE_PRIMARY } from "@/lib/gsap";

export function BrandIntroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const textWrapRef = useRef<HTMLDivElement>(null);
  const statsWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      if (imageWrapRef.current) {
        gsap.fromTo(
          imageWrapRef.current,
          { opacity: 0, scale: 0.96, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            ease: EASE_PRIMARY,
            scrollTrigger: {
              trigger: section,
              start: "top 95%",
            },
          }
        );
      }

      if (textWrapRef.current) {
        const textElements = textWrapRef.current.querySelectorAll(".reveal-item");
        gsap.fromTo(
          textElements,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.04,
            ease: EASE_PRIMARY,
            scrollTrigger: {
              trigger: textWrapRef.current,
              start: "top 95%",
            },
          }
        );
      }

      if (statsWrapRef.current) {
        const statBoxes = statsWrapRef.current.children;
        gsap.fromTo(
          statBoxes,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.04,
            ease: EASE_PRIMARY,
            scrollTrigger: {
              trigger: statsWrapRef.current,
              start: "top 95%",
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-10 sm:py-16 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* 65% Dominant Image Composition Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* 65% Dominant Architectural Photograph with Smooth Scale */}
          <div className="lg:col-span-7 relative">
            <div
              ref={imageWrapRef}
              className="relative rounded-2xl overflow-hidden shadow-lg h-[300px] sm:h-[400px] w-full group will-change-transform border border-[#E2E8F0]"
            >
              <div
                className="about-bg-image absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white text-xs font-mono tracking-wider">
                <span>Integrated Corporate Architecture</span>
                <span className="text-[#93C5FD]">UAE & Global Delivery</span>
              </div>
            </div>
          </div>

          {/* Minimal 35% Editorial Typography & Animated Statistics */}
          <div ref={textWrapRef} className="lg:col-span-5 space-y-5">
            <div className="space-y-3">
              <h2 className="reveal-item text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] font-heading tracking-tight leading-[1.08]">
                Beyond Digital.
                <br />
                <span className="text-[#2554D7]">Into Business Growth.</span>
              </h2>

              <p className="reveal-item text-sm text-[#64748B] font-light leading-relaxed">
                F10 Digital is an integrated digital growth and performance transformation partner. We dismantle the boundaries between strategy, high-speed engineering, marketing, and cinematic production.
              </p>
            </div>

            {/* Minimal Verified Stats with Animated Number Counters */}
            <div ref={statsWrapRef} className="grid grid-cols-2 gap-3 pt-3 border-t border-[#E2E8F0]">
              <div className="space-y-0.5">
                <div className="text-3xl sm:text-4xl font-black text-[#0F172A] font-heading tracking-tight">
                  <AnimatedCounter value="5+" />
                </div>
                <div className="text-[11px] uppercase tracking-wider text-[#64748B] font-mono">
                  Years UAE Experience
                </div>
              </div>

              <div className="space-y-0.5">
                <div className="text-3xl sm:text-4xl font-black text-[#2554D7] font-heading tracking-tight">
                  <AnimatedCounter value="200+" />
                </div>
                <div className="text-[11px] uppercase tracking-wider text-[#64748B] font-mono">
                  Projects in 24 Months
                </div>
              </div>

              <div className="space-y-0.5">
                <div className="text-3xl sm:text-4xl font-black text-[#0F172A] font-heading tracking-tight">
                  <AnimatedCounter value="50+" />
                </div>
                <div className="text-[11px] uppercase tracking-wider text-[#64748B] font-mono">
                  Active Retained Clients
                </div>
              </div>

              <div className="space-y-0.5">
                <div className="text-3xl sm:text-4xl font-black text-[#64748B] font-heading tracking-tight">
                  <AnimatedCounter value="7" />
                </div>
                <div className="text-[11px] uppercase tracking-wider text-[#64748B] font-mono">
                  Countries Served
                </div>
              </div>
            </div>

            <div className="reveal-item pt-1">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#0F172A] hover:text-[#2554D7] uppercase tracking-[0.15em] transition-all duration-200 group hover:translate-x-1"
              >
                <span>Read Corporate Profile</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
