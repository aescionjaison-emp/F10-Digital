"use client";

import React, { useEffect, useRef, useState } from "react";

interface CounterProps {
  value: string; // e.g. "5+", "200+", "50+", "7", "+120%"
  className?: string;
  duration?: number;
}

export function AnimatedCounter({ value, className = "", duration = 1500 }: CounterProps) {
  const [displayValue, setDisplayValue] = useState("0");
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  // Parse numerical part and prefix/suffix
  const numericMatch = value.match(/\d+/);
  const targetNumber = numericMatch ? parseInt(numericMatch[0], 10) : 0;
  const prefix = value.startsWith("+") ? "+" : value.startsWith("-") ? "-" : "";
  const suffix = value.endsWith("+") ? "+" : value.endsWith("%") ? "%" : "";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(easeOut * targetNumber);
            setDisplayValue(`${prefix}${current}${suffix}`);

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setDisplayValue(value);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, targetNumber, duration, prefix, suffix, value]);

  return (
    <span ref={elementRef} className={className}>
      {hasAnimated ? displayValue : `${prefix}0${suffix}`}
    </span>
  );
}

