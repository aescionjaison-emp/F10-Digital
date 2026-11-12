import React from "react";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-[#F8FAFC] border-t border-[#E2E8F0] text-[#0F172A] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-[#E2E8F0]">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-3">
            <Link href="/" className="inline-block">
              <span className="text-xl font-extrabold tracking-[0.2em] uppercase text-[#0F172A] font-heading">
                F10<span className="text-[#2554D7] ml-1">DIGITAL</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-[#64748B] max-w-sm leading-relaxed font-light">
              Building Digital Growth. Enabling Performance Transformation. An integrated international partner uniting enterprise technology, digital growth, AI automation, and cinematic production.
            </p>

            <div className="pt-1 space-y-1 text-xs">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-2 text-[#0F172A] hover:text-[#2554D7] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#2554D7]" />
                <span className="font-mono">{COMPANY_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 text-[#0F172A] hover:text-[#2554D7] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#2554D7]" />
                <span className="font-mono">{COMPANY_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Capabilities */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-xs uppercase tracking-[0.2em] font-mono text-[#2554D7] font-bold">
              Capabilities
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link href="/services#digital-tech" className="text-[#0F172A] hover:text-[#2554D7] transition-colors">
                  Enterprise Technology
                </Link>
              </li>
              <li>
                <Link href="/services#growth-marketing" className="text-[#0F172A] hover:text-[#2554D7] transition-colors">
                  Digital Growth & Performance
                </Link>
              </li>
              <li>
                <Link href="/services/ai-solutions" className="text-[#0F172A] hover:text-[#2554D7] transition-colors">
                  AI & Intelligent Automation
                </Link>
              </li>
              <li>
                <Link href="/services#media-production" className="text-[#0F172A] hover:text-[#2554D7] transition-colors">
                  Content & Media Production
                </Link>
              </li>
              <li>
                <Link href="/services/system-integrations" className="text-[#0F172A] hover:text-[#2554D7] transition-colors">
                  System Integrations
                </Link>
              </li>
            </ul>
          </div>

          {/* Regional Hubs */}
          <div className="lg:col-span-4 space-y-2.5">
            <h4 className="text-xs uppercase tracking-[0.2em] font-mono text-[#2554D7] font-bold">
              Geographic Presence
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="space-y-0.5">
                <span className="font-bold text-[#0F172A] block">Dubai, UAE</span>
                <span className="text-[#64748B] block text-[11px]">IFZA Digital Park</span>
              </div>
              <div className="space-y-0.5">
                <span className="font-bold text-[#0F172A] block">Fujairah, UAE</span>
                <span className="text-[#64748B] block text-[11px]">Creative City Towers</span>
              </div>
              <div className="space-y-0.5">
                <span className="font-bold text-[#0F172A] block">Navi Mumbai, IN</span>
                <span className="text-[#64748B] block text-[11px]">Tech & Systems Hub</span>
              </div>
              <div className="space-y-0.5">
                <span className="font-bold text-[#0F172A] block">Chennai, IN</span>
                <span className="text-[#64748B] block text-[11px]">Media & Content Studio</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#64748B]">
          <div>
            © {new Date().getFullYear()} F10 DIGITAL FZ. LLC. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#0F172A] transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[#0F172A] transition-colors">
              Terms
            </Link>
            <Link href="/admin/login" className="hover:text-[#0F172A] transition-colors text-[11px] font-mono">
              Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
