"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "./gsapConfig";
import { RefObject } from "react";

export function useStatCounter(ref: RefObject<HTMLElement | null>) {
  useGSAP(() => {
    if (!ref.current) return;
    
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const elements = ref.current.querySelectorAll(".stat-number");
    
    if (prefersReducedMotion) {
      elements.forEach(el => {
        const target = el.getAttribute("data-target") || "0";
        el.innerHTML = target;
      });
      return;
    }

    elements.forEach((el) => {
      const target = parseFloat(el.getAttribute("data-target") || "0");
      
      gsap.fromTo(
        el,
        {
          innerHTML: 0,
        },
        {
          innerHTML: target,
          duration: 2,
          ease: "power2.out",
          snap: { innerHTML: 1 },
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            once: true,
          },
          onUpdate: function() {
            // Re-append the suffix (e.g. "%" or "+") if needed, assuming suffix is in another span, 
            // but for simplicity, we just animate the number value.
          }
        }
      );
    });
  }, { scope: ref });
}
