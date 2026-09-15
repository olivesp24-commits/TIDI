"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "./gsapConfig";
import { RefObject } from "react";

export function useScrollReveal(ref: RefObject<HTMLElement | null>, options?: { stagger?: number, delay?: number }) {
  useGSAP(() => {
    if (!ref.current) return;
    
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      gsap.set(ref.current, { opacity: 1, y: 0 });
      return;
    }

    const elements = ref.current.querySelectorAll(".reveal-item");
    
    gsap.fromTo(
      elements.length > 0 ? elements : ref.current,
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: options?.stagger || 0,
        delay: options?.delay || 0,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          once: true,
        },
      }
    );
  }, { scope: ref });
}
