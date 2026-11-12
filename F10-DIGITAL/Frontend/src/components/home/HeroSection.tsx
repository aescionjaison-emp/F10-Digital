"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { gsap, ScrollTrigger, EASE_PRIMARY } from "@/lib/gsap";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoWrapRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // 1. Ensure Reliable Video Autoplay (Muted, PlaysInline, Loop)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const playVideo = () => {
      const promise = video.play();
      if (promise !== undefined) {
        promise.catch((error) => {
          console.warn("Autoplay was prevented, attempting muted play:", error);
          video.muted = true;
          video.play().catch((e) => console.error("Video play failed:", e));
        });
      }
    };

    playVideo();
    video.addEventListener("canplay", playVideo);
    video.addEventListener("loadedmetadata", playVideo);

    return () => {
      video.removeEventListener("canplay", playVideo);
      video.removeEventListener("loadedmetadata", playVideo);
    };
  }, []);

  // 2. Desktop Mouse Parallax (Restrained & Smooth)
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 12;
      const y = (e.clientY / innerHeight - 0.5) * 8;
      setMouseOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // 3. Fast, Crisp Entrance & Scroll-Linked Parallax Timeline
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const entranceTl = gsap.timeline({ defaults: { ease: EASE_PRIMARY } });

      if (logoRef.current) {
        entranceTl.fromTo(
          logoRef.current,
          { opacity: 0, scale: 0.9, y: 15 },
          { opacity: 1, scale: 1, y: 0, duration: 0.5, delay: 0.05 }
        );
      }

      const words = headlineRef.current?.querySelectorAll(".hero-word");
      if (words && words.length > 0) {
        entranceTl.fromTo(
          words,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.45, stagger: 0.035 },
          "-=0.35"
        );
      }

      if (subtitleRef.current) {
        entranceTl.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.4 },
          "-=0.3"
        );
      }

      if (badgesRef.current) {
        entranceTl.fromTo(
          badgesRef.current.children,
          { opacity: 0, scale: 0.85, y: 10 },
          { opacity: 1, scale: 1, y: 0, duration: 0.4, stagger: 0.05 },
          "-=0.25"
        );
      }

      if (ctaRef.current) {
        entranceTl.fromTo(
          ctaRef.current.children,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.05 },
          "-=0.3"
        );
      }

      // Smooth scroll-linked video scale
      if (videoWrapRef.current) {
        gsap.to(videoWrapRef.current, {
          scale: 1.06,
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
          },
        });
      }

      // Continuous subtle lift of typography
      const textContainer = container.querySelector(".hero-text-container");
      if (textContainer) {
        gsap.to(textContainer, {
          y: -40,
          opacity: 0.35,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "bottom 50%",
            scrub: true,
          },
        });
      }
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[580px] sm:min-h-[640px] w-full flex items-end justify-start overflow-hidden bg-[#0F172A]"
    >
      {/* 80% Full-Viewport Cinematic Aerial Dubai Drone Video */}
      <div ref={videoWrapRef} className="absolute inset-0 z-0 overflow-hidden will-change-transform">
        <video
          ref={videoRef}
          src="/videos/hero-dubai-desktop.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/videos/hero-poster.jpg"
          className="w-full h-full object-cover opacity-90 transition-opacity duration-300"
        >
          <source src="/videos/hero-dubai-desktop.mp4" type="video/mp4" />
          <source src="/videos/hero-dubai-mobile.mp4" type="video/mp4" />
        </video>

        {/* Cinematic Neutral Overlays for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/35 to-black/20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/70 via-[#0F172A]/20 to-transparent pointer-events-none" />
      </div>

      {/* Hero Editorial Typography Container with Mouse Parallax */}
      <div
        className="hero-text-container relative z-10 max-w-7xl w-full px-6 sm:px-12 lg:px-16 pb-8 sm:pb-12 transition-transform duration-150 ease-out"
        style={{
          transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          
          {/* Main Headline & Supporting Text & Bottom-Left Verified Badges */}
          <div className="lg:col-span-8 space-y-2.5">
            
            {/* Official F10 Digital Logo (Placed ABOVE Building Digital Growth lines - Image 4) */}
            <div ref={logoRef} className="mb-2 sm:mb-3">
              <img
                src="/images/f10-official-logo.png"
                alt="F10 Digital"
                className="h-12 sm:h-16 w-auto object-contain filter drop-shadow-[0_4px_16px_rgba(255,255,255,0.25)] transition-transform duration-200 hover:scale-105"
              />
            </div>

            <h1
              ref={headlineRef}
              className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#FFFFFF] tracking-tight leading-[0.96] font-heading uppercase"
              aria-label="Building Digital Growth. Enabling Performance Transformation."
            >
              <span className="inline-block overflow-hidden pb-1">
                <span className="hero-word inline-block">BUILDING</span>{" "}
                <span className="hero-word inline-block">DIGITAL</span>
              </span>
              <br />
              <span className="inline-block overflow-hidden pb-1">
                <span className="hero-word inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F1F5F9] to-[#60A5FA]">
                  GROWTH.
                </span>
              </span>
            </h1>

            <div ref={subtitleRef} className="space-y-0.5">
              <p className="text-lg sm:text-2xl font-light text-[#E2E8F0] tracking-tight font-heading">
                Enabling Performance Transformation.
              </p>
              <p className="text-xs sm:text-sm text-[#CBD5E1] font-light max-w-lg">
                Your Digital Growth & Performance Transformation Partner.
              </p>
            </div>

            {/* Bottom-Left Verified Industry Badges */}
            <div ref={badgesRef} className="pt-2 flex items-center gap-2.5 sm:gap-3.5 flex-wrap">
              <div className="group relative transition-all duration-200 hover:scale-108 hover:-translate-y-0.5 cursor-pointer">
                <img
                  src="/images/hero-badge-goodfirms.webp"
                  alt="Top Mobile App Development Company - GoodFirms"
                  className="h-10 sm:h-12 w-auto object-contain drop-shadow-md group-hover:drop-shadow-[0_4px_16px_rgba(255,255,255,0.4)] transition-all duration-200"
                />
              </div>

              <div className="group relative transition-all duration-200 hover:scale-108 hover:-translate-y-0.5 cursor-pointer">
                <img
                  src="/images/hero-badge-clutch.webp"
                  alt="Top Web Developers - Clutch"
                  className="h-10 sm:h-12 w-auto object-contain drop-shadow-md group-hover:drop-shadow-[0_4px_16px_rgba(255,255,255,0.4)] transition-all duration-200"
                />
              </div>

              <div className="group relative transition-all duration-200 hover:scale-108 hover:-translate-y-0.5 cursor-pointer">
                <img
                  src="/images/hero-badge-appfutura.webp"
                  alt="Top Digital Marketing Company - AppFutura"
                  className="h-10 sm:h-12 w-auto object-contain drop-shadow-md group-hover:drop-shadow-[0_4px_16px_rgba(255,255,255,0.4)] transition-all duration-200"
                />
              </div>

              <div className="group relative transition-all duration-200 hover:scale-108 hover:-translate-y-0.5 cursor-pointer">
                <img
                  src="/images/hero-badge-google.svg"
                  alt="Google Partner"
                  className="h-10 sm:h-12 w-auto object-contain rounded-md shadow-md group-hover:shadow-[0_4px_16px_rgba(255,255,255,0.4)] transition-all duration-200"
                />
              </div>
            </div>
          </div>

          {/* Right Action CTAs: Compact & Professional (Image 1 Fix) */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end space-y-2">
            <div ref={ctaRef} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full lg:w-auto">
              {/* Primary CTA: Compact & Professional */}
              <Link
                href="/services"
                className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#2554D7] text-white hover:bg-[#1D4ED8] text-[11px] sm:text-xs uppercase tracking-[0.14em] font-bold transition-all duration-200 shadow-md hover:scale-105 active:scale-95 overflow-hidden"
              >
                <span className="relative z-10">Explore Our Capabilities</span>
                <ArrowRight className="w-3.5 h-3.5 text-white transition-transform duration-200 group-hover:translate-x-1 relative z-10" />
              </Link>

              {/* Secondary CTA: Compact & Professional */}
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#FFFFFF] border border-white/20 text-[11px] sm:text-xs uppercase tracking-[0.14em] font-semibold backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <span>Let's Talk</span>
              </Link>
            </div>

            <div className="text-[10px] tracking-[0.25em] font-mono text-[#94A3B8] uppercase hidden sm:block">
              UAE · DUBAI & INDIA · EST. 2021
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
