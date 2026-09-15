"use client";

import { useRef } from "react";
import { useStatCounter } from "@/animations/useStatCounter";
import { useScrollReveal } from "@/animations/useScrollReveal";

export function ApproachStatsBand() {
  const containerRef = useRef<HTMLElement>(null);
  useStatCounter(containerRef);
  useScrollReveal(containerRef, { stagger: 0.1 });

  return (
    <section ref={containerRef} className="py-16 bg-brand-navy relative z-20 shadow-sm">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center divide-x-0 md:divide-x divide-white/20">
          
          {/* Stat 1 */}
          <div className="reveal-item opacity-0 flex flex-col items-center justify-center">
            <div className="font-asul text-4xl md:text-5xl font-bold text-white flex items-center mb-1">
              <span className="stat-number" data-target="100">0</span>
              <span className="text-brand-lavender ml-1">%</span>
            </div>
            <span className="text-white/70 text-sm font-bold uppercase tracking-wider">Locally Led</span>
          </div>
          
          {/* Stat 2 */}
          <div className="reveal-item opacity-0 flex flex-col items-center justify-center">
            <div className="font-asul text-4xl md:text-5xl font-bold text-white flex items-center mb-1">
              <span className="stat-number" data-target="3">0</span>
              <span className="text-brand-lavender ml-1">+</span>
            </div>
            <span className="text-white/70 text-sm font-bold uppercase tracking-wider">Core Pillars</span>
          </div>
          
          {/* Stat 3 */}
          <div className="reveal-item opacity-0 flex flex-col items-center justify-center">
            <div className="font-asul text-4xl md:text-5xl font-bold text-white flex items-center mb-1">
              <span className="stat-number" data-target="100">0</span>
              <span className="text-brand-lavender ml-1">+</span>
            </div>
            <span className="text-white/70 text-sm font-bold uppercase tracking-wider">Lives Reached</span>
          </div>

          {/* Stat 4 */}
          <div className="reveal-item opacity-0 flex flex-col items-center justify-center">
            <div className="font-asul text-4xl md:text-5xl font-bold text-white flex items-center mb-1">
              Data
              <span className="text-brand-lavender ml-1">★</span>
            </div>
            <span className="text-white/70 text-sm font-bold uppercase tracking-wider">Evidence Based</span>
          </div>

        </div>
      </div>
    </section>
  );
}
