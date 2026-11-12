"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";
import { gsap, ScrollTrigger, EASE_PRIMARY } from "@/lib/gsap";

export function FinalCTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgImgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      if (bgImgRef.current) {
        gsap.fromTo(
          bgImgRef.current,
          { scale: 1.08 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom bottom",
              scrub: 0.6,
            },
          }
        );
      }

      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.04,
            ease: EASE_PRIMARY,
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 95%",
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[380px] sm:min-h-[440px] flex items-center justify-center overflow-hidden bg-[#0F172A] text-[#FFFFFF]">
      {/* 80% Full-Viewport Cinematic Architectural Background with Scrub Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          ref={bgImgRef}
          className="w-full h-full bg-cover bg-center opacity-35 will-change-transform"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2600&q=90')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/60 to-[#0F172A]/90" />
      </div>

      <div ref={contentRef} className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12 text-center space-y-4 py-10 sm:py-14">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading tracking-tight leading-[0.95] uppercase">
          Let's Build <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#E2E8F0] to-[#60A5FA]">
            What's Next.
          </span>
        </h2>

        <p className="text-xs sm:text-base text-[#CBD5E1] font-light max-w-lg mx-auto leading-relaxed">
          Your next business transformation starts here. Partner with an integrated team that unites strategy, code, and cinema.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3 rounded-full bg-[#2554D7] text-white hover:bg-[#1D4ED8] text-xs uppercase tracking-[0.2em] font-bold transition-all duration-200 shadow-xl group hover:scale-105 active:scale-95"
          >
            <span className="transition-transform duration-200 group-hover:-translate-x-0.5">Start a Conversation</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1.5 transition-all duration-200" />
          </Link>

          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs uppercase tracking-[0.2em] font-semibold backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <span>WhatsApp Leadership</span>
          </a>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#94A3B8]">
          <span className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone className="w-3.5 h-3.5 text-[#3B82F6]" />
            {COMPANY_INFO.phone}
          </span>
          <span className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail className="w-3.5 h-3.5 text-[#3B82F6]" />
            {COMPANY_INFO.email}
          </span>
          <span>Dubai · Fujairah · Mumbai · Chennai</span>
        </div>
      </div>
    </section>
  );
}
