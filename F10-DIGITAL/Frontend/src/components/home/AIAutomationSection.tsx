"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Activity } from "lucide-react";
import { gsap, ScrollTrigger, EASE_PRIMARY } from "@/lib/gsap";

export function AIAutomationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsWrapRef = useRef<HTMLDivElement>(null);
  const outcomeBannerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Customer Interaction",
      desc: "Instant capture via WhatsApp, web, and paid marketing channels with zero latency.",
      detail: "Omnichannel Intake",
      latency: "< 0.4s",
    },
    {
      num: "02",
      title: "AI & Automation",
      desc: "Autonomous qualification agents parse intent, budget, and project requirements 24/7.",
      detail: "Intelligent Scoring",
      latency: "Real-Time NLP",
    },
    {
      num: "03",
      title: "Business Systems",
      desc: "Synchronized dispatch directly to CRM, ERP, and sales closing teams in real time.",
      detail: "Unified Integration",
      latency: "Instant Sync",
    },
    {
      num: "04",
      title: "Actionable Insights",
      desc: "Closed-loop performance attribution connecting lead generation directly to revenue.",
      detail: "Revenue Attribution",
      latency: "Live BI Feed",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [steps.length]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      if (cardsWrapRef.current) {
        gsap.fromTo(
          cardsWrapRef.current.children,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.04,
            ease: EASE_PRIMARY,
            scrollTrigger: {
              trigger: cardsWrapRef.current,
              start: "top 95%",
            },
          }
        );
      }

      if (outcomeBannerRef.current) {
        gsap.fromTo(
          outcomeBannerRef.current,
          { opacity: 0, scale: 0.98 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: EASE_PRIMARY,
            scrollTrigger: {
              trigger: outcomeBannerRef.current,
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
            Intelligence. Automation. <br />
            <span className="text-[#2554D7]">Performance.</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#64748B] font-light max-w-lg leading-relaxed">
            Eliminate operational drag and lead qualification bottlenecks through synchronized artificial intelligence and autonomous workflow pipelines.
          </p>
        </div>

        {/* Refined 4-Stage Light Technical Diagram */}
        <div ref={cardsWrapRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-8">
          {steps.map((st, idx) => {
            const isCurrent = activeStep === idx;
            return (
              <div
                key={st.num}
                onClick={() => setActiveStep(idx)}
                onMouseEnter={() => setActiveStep(idx)}
                className={`p-5 rounded-xl transition-all duration-200 cursor-pointer border relative flex flex-col justify-between ${
                  isCurrent
                    ? "bg-[#FFFFFF] border-[#2554D7] shadow-md -translate-y-1"
                    : "bg-[#FFFFFF] border-[#E2E8F0] hover:border-[#CBD5E1]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-[#2554D7]">
                      STAGE {st.num}
                    </span>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#64748B] bg-[#F1F5F9] px-2 py-0.5 rounded">
                      {st.detail}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-[#0F172A] font-heading mb-1.5">
                    {st.title}
                  </h3>

                  <p className="text-xs text-[#64748B] font-light leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                <div className="mt-4 pt-2.5 border-t border-[#F1F5F9] flex items-center justify-between text-[11px] font-mono text-[#64748B]">
                  <span className="flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full transition-colors ${isCurrent ? "bg-[#2554D7] ring-4 ring-[#2554D7]/20" : "bg-[#94A3B8]"}`} />
                    {st.latency}
                  </span>
                  {idx < 3 && (
                    <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-200 ${isCurrent ? "text-[#2554D7] translate-x-1" : "text-[#94A3B8]"}`} />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Compact High-Resolution Minimal Architectural Visual Feature */}
        <div ref={outcomeBannerRef} className="relative rounded-2xl overflow-hidden shadow-md h-[200px] sm:h-[240px] w-full group border border-[#E2E8F0]">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2000&q=85')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/50 to-transparent" />
          
          <div className="absolute inset-0 flex items-center p-6 sm:p-10">
            <div className="max-w-md text-white space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#93C5FD] flex items-center gap-1.5 font-bold">
                <Activity className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>Proven Commercial Outcome</span>
              </span>
              <h3 className="text-lg sm:text-xl font-bold font-heading">
                50% Reduction in Manual Operational Friction
              </h3>
              <p className="text-xs text-[#E2E8F0]/80 font-light leading-relaxed">
                Automated lead qualification and CRM routing captures high-value inquiries instantly, eliminating lost sales opportunities.
              </p>
              <div className="pt-0.5">
                <Link
                  href="/services/ai-solutions"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#93C5FD] hover:text-white transition-colors group/link"
                >
                  <span>Explore AI Capabilities</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
