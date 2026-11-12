import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Snappy, natural easing curves (eliminates sluggish, delayed feeling)
export const EASE_PRIMARY = "power2.out";
export const EASE_EXPO = "power3.out";
export const EASE_SMOOTH = "power2.out";
export const EASE_CINEMATIC = "power3.out";

export { gsap, ScrollTrigger };
