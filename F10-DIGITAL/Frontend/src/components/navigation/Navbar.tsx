"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  ArrowRight, 
  ArrowUpRight 
} from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { label: "Overview", href: "/" },
    { label: "About", href: "/about" },
    { label: "Capabilities", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Work", href: "/work" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#DCD7CD] py-3.5 shadow-md text-[#202522]"
          : "bg-[#141715]/75 backdrop-blur-md border-b border-white/10 py-4 shadow-lg text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" onClick={closeMenu}>
            <div
              className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs font-bold font-mono tracking-tighter transition-all duration-300 ${
                isScrolled
                  ? "border-[#202522] bg-[#202522] text-white group-hover:bg-[#2554D7] group-hover:border-[#2554D7]"
                  : "border-white/40 bg-white/10 text-white group-hover:bg-white group-hover:text-[#202522]"
              }`}
            >
              F10
            </div>
            <div className="flex flex-col">
              <span
                className={`text-base font-extrabold tracking-[0.2em] uppercase font-heading ${
                  isScrolled ? "text-[#202522]" : "text-white"
                }`}
              >
                F10
                <span
                  className={`ml-1 font-semibold ${
                    isScrolled ? "text-[#2554D7]" : "text-[#3B82F6]"
                  }`}
                >
                  DIGITAL
                </span>
              </span>
              <span
                className={`text-[9px] tracking-[0.25em] uppercase font-mono ${
                  isScrolled ? "text-[#777A75]" : "text-white/60"
                }`}
              >
                Dubai · India
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-xs uppercase tracking-[0.15em] font-semibold transition-all duration-200 relative py-1 group/link ${
                    isScrolled
                      ? isActive
                        ? "text-[#2554D7] font-black"
                        : "text-[#202522] hover:text-[#2554D7]"
                      : isActive
                      ? "text-white font-black"
                      : "text-white/85 hover:text-white"
                  }`}
                >
                  <span className="relative z-10 transition-transform duration-200 inline-block group-hover/link:-translate-y-0.5">
                    {link.label}
                  </span>
                  {/* Expanding animated underline on hover */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ease-out ${
                      isScrolled ? "bg-[#2554D7]" : "bg-[#3B82F6]"
                    } ${isActive ? "w-full" : "w-0 group-hover/link:w-full"}`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Primary CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className={`inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.15em] font-bold transition-all duration-300 group shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] ${
                isScrolled
                  ? "bg-[#202522] text-[#F7F5F0] hover:bg-[#2554D7]"
                  : "bg-[#2554D7] text-white hover:bg-[#1D4ED8]"
              }`}
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <Link
              href="/contact"
              className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase ${
                isScrolled
                  ? "bg-[#202522] text-white"
                  : "bg-[#2554D7] text-white"
              }`}
            >
              Contact
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 focus:outline-none ${isScrolled ? "text-[#202522]" : "text-white"}`}
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#FFFFFF] border-b border-[#DCD7CD] shadow-2xl p-8 max-h-[calc(100vh-70px)] overflow-y-auto text-[#202522]">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="text-lg font-heading font-bold text-[#202522] hover:text-[#2554D7] flex items-center justify-between py-2 border-b border-[#E2DED6] transition-colors"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[#777A75]" />
              </Link>
            ))}

            <div className="pt-6 space-y-3">
              <div className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#777A75]">
                Direct Leadership Desk
              </div>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="block text-sm font-semibold text-[#202522] font-mono"
              >
                {COMPANY_INFO.phone}
              </a>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="w-full py-3.5 rounded-full bg-[#2554D7] text-white text-center block text-xs uppercase tracking-[0.15em] font-bold mt-4 shadow-md"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
