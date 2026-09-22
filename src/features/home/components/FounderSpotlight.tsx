"use client";

import Image from "next/image";
import { useRef } from "react";
import { useScrollReveal } from "@/animations/useScrollReveal";

export function FounderSpotlight() {
  const containerRef = useRef<HTMLElement>(null);
  useScrollReveal(containerRef, { stagger: 0.2 });

  return (
    <section ref={containerRef} className="bg-[#FAF4E5] py-24 border-t border-[#F1E9D2]">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="reveal-item opacity-0 relative aspect-[3/4] w-full max-w-sm mx-auto md:mx-0 rounded-2xl overflow-hidden shadow-lg border border-brand-lavender-tint/20">
            <Image 
              src="/asset/founder-image.png"
              alt="Beatrice Adeh Thomas, Founder of TIDI"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          
          <div className="flex flex-col items-start text-brand-navy">
            <h2 className="reveal-item opacity-0 font-asul text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Meet Our<br/>Founder & Director
            </h2>
            <div className="reveal-item opacity-0 prose prose-lg text-brand-navy/80 mb-8 space-y-4 text-sm leading-relaxed">
              <p>
                At TIDI, we believe that true development is not something done <em>to</em> a community, but something built <em>with</em> them.
              </p>
              <p>
                Our organization was founded on a simple promise: when you provide equitable access to education, health, and human services, individuals are empowered to break cycles of vulnerability and shape their own futures. We are not just giving aid; we are investing in human capital.
              </p>
              <p>
                Through locally led solutions, we ensure that every initiative is culturally resonant and sustainable long after initial interventions have concluded.
              </p>
            </div>
            
            <div className="reveal-item opacity-0 flex flex-col">
              <span className="font-asul font-bold text-3xl mb-1">Beatrice Adeh Thomas.</span>
              <span className="text-brand-navy/60 text-xs tracking-wider uppercase">Founder / Head Admin, TIDI</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
