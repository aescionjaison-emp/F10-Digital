"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

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
          ? "bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#E2E8F0] py-3 shadow-sm text-[#0F172A]"
          : "bg-[#0F172A]/80 backdrop-blur-md border-b border-white/10 py-3.5 shadow-lg text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Logo: Official F10 Digital Logo (Image 4) */}
          <Link href="/" className="flex items-center gap-2 group" onClick={closeMenu}>
            <img
              src={isScrolled ? "/images/f10-official-logo-dark.png" : "/images/f10-official-logo.png"}
              alt="F10 Digital"
              className="h-8 sm:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation (Start a Conversation Removed per user instruction) */}
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
                        : "text-[#0F172A] hover:text-[#2554D7]"
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

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 focus:outline-none ${isScrolled ? "text-[#0F172A]" : "text-white"}`}
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#FFFFFF] border-b border-[#E2E8F0] shadow-2xl p-6 max-h-[calc(100vh-65px)] overflow-y-auto text-[#0F172A]">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="text-base font-heading font-bold text-[#0F172A] hover:text-[#2554D7] flex items-center justify-between py-2 border-b border-[#F1F5F9] transition-colors"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[#64748B]" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
