"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, Linkedin, Calendar, CheckCircle2 } from "lucide-react";
import { gsap, ScrollTrigger, EASE_PRIMARY } from "@/lib/gsap";

export function FounderSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      if (photoRef.current) {
        gsap.fromTo(
          photoRef.current,
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

      if (textRef.current) {
        gsap.fromTo(
          textRef.current.children,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.04,
            ease: EASE_PRIMARY,
            scrollTrigger: {
              trigger: textRef.current,
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
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Founder Photo Column */}
          <div ref={photoRef} className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-[340px] sm:h-[420px] w-full border border-[#E2E8F0] group bg-[#0F172A]">
              <img
                src="/images/daniel-vincent.avif"
                alt="Daniel Vincent — Founder & CEO, F10 Digital"
                className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-5 right-5 text-white space-y-0.5">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#93C5FD] block font-bold">
                  Founder & CEO
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading">
                  Daniel Vincent
                </h3>
                <p className="text-xs text-[#CBD5E1] font-light">
                  F10 Digital FZ. LLC.
                </p>
              </div>
            </div>
          </div>

          {/* Founder Narrative Column */}
          <div ref={textRef} className="lg:col-span-7 space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] font-heading tracking-tight leading-[1.08]">
                Meet The Founder.
              </h2>

              <p className="text-base sm:text-lg font-medium text-[#0F172A]/90 leading-snug font-heading">
                "To help businesses scale through technology, automation, and measurable growth."
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#64748B] font-light leading-relaxed">
              After 15+ years in digital marketing, enterprise technology, and business consulting, Daniel Vincent founded F10 Digital with one clear mission. Today, F10 Digital partners with businesses across the UAE and GCC to unlock compounded growth through AI-powered digital transformation, performance marketing, and scalable technology solutions.
            </p>

            {/* Platform Badges Strip */}
            <div className="pt-2 border-t border-[#E2E8F0] space-y-1.5">
              <div className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider font-semibold">
                Recognized Across Industry Platforms:
              </div>
              <div className="flex flex-wrap gap-1.5 text-xs">
                {["Google Partner", "Meta Certified Partner", "TikTok Marketing Partner", "Snapchat Ads Partner", "Clutch Top Agency", "GoodFirms Verified"].map((b) => (
                  <span
                    key={b}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] text-[10px] font-mono text-[#0F172A] shadow-xs"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#2554D7]" />
                    <span>{b}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#2554D7] text-white hover:bg-[#1D4ED8] text-xs uppercase tracking-wider font-bold transition-all shadow-md hover:scale-105 active:scale-95"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book a Strategy Call</span>
              </Link>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#FFFFFF] text-[#0F172A] hover:text-[#2554D7] border border-[#E2E8F0] text-xs uppercase tracking-wider font-semibold transition-all hover:scale-105 active:scale-95 shadow-xs"
              >
                <Linkedin className="w-4 h-4 text-[#0077B5]" />
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
