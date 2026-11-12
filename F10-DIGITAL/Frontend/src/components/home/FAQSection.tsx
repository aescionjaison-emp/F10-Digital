"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { gsap, ScrollTrigger, EASE_PRIMARY } from "@/lib/gsap";

interface FAQItem {
  q: string;
  a: string;
}

export function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const faqListRef = useRef<HTMLDivElement>(null);
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      q: "Do you build websites for businesses in the UAE & GCC?",
      a: "Yes. We design, develop, and optimize high-performance corporate platforms and bespoke web applications for enterprises and fast-growing brands across the UAE, Saudi Arabia, and the GCC, backed by complete IT and digital transformation infrastructure.",
    },
    {
      q: "Can you manage my digital marketing end-to-end?",
      a: "Absolutely. We manage multi-channel paid acquisition, technical SEO, high-impact social media, editorial content, and online category authority—fully managed under one unified commercial growth model.",
    },
    {
      q: "How fast can you develop a custom web application?",
      a: "Timelines depend on specific technical deliverables and third-party integrations, but our agile sprint methodology guarantees rapid milestone deliveries with zero downtime, robust security audits, and predictable timelines.",
    },
    {
      q: "Do you offer IT infrastructure and system integrations for offices?",
      a: "Yes. From API middleware and bi-directional CRM/ERP synchronization to cloud server deployment and enterprise networking environments, we handle the entire technical ecosystem.",
    },
    {
      q: "Can you improve my brand’s online visibility?",
      a: "Definitely. Our high-intent search architecture, content thought leadership, and performance media funnels help brands dominate category search intent, establish trust, and attract qualified decision-makers.",
    },
    {
      q: "How do you measure and report marketing ROI?",
      a: "We implement closed-loop attribution models connecting Google Ads, Meta campaigns, and CRM data directly into executive Looker Studio dashboards, providing full visibility on Cost-Per-Acquisition (CPA) and Customer Lifetime Value (LTV).",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      if (faqListRef.current) {
        gsap.fromTo(
          faqListRef.current.children,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.04,
            ease: EASE_PRIMARY,
            scrollTrigger: {
              trigger: faqListRef.current,
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
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          
          {/* Header Column */}
          <div className="lg:col-span-5 space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] font-heading tracking-tight leading-[1.08]">
              Frequently Asked <br />
              <span className="text-[#2554D7]">Questions.</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#64748B] font-light leading-relaxed max-w-md">
              Everything you need to know before initiating your digital growth or enterprise transformation engagement.
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F172A] hover:text-[#2554D7] transition-colors group"
              >
                <span>Have a specific question? Let's talk</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Accordion Column */}
          <div ref={faqListRef} className="lg:col-span-7 space-y-2.5">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-[#E2E8F0] bg-[#FFFFFF] overflow-hidden transition-all duration-200 shadow-xs"
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 group"
                  >
                    <span className="text-xs sm:text-sm font-bold text-[#0F172A] font-heading group-hover:text-[#2554D7] transition-colors">
                      {faq.q}
                    </span>
                    <div className={`w-7 h-7 rounded-full bg-[#F8FAFC] flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 bg-[#2554D7] text-white" : "text-[#94A3B8] group-hover:bg-[#E2E8F0]"}`}>
                      <ChevronDown className="w-3.5 h-3.5" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs text-[#64748B] font-light leading-relaxed border-t border-[#F8FAFC]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
