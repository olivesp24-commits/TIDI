"use client";

import { useRef } from "react";
import { useScrollReveal } from "@/animations/useScrollReveal";
import Image from "next/image";

export function TestimonialsSection() {
  const containerRef = useRef<HTMLElement>(null);
  useScrollReveal(containerRef, { stagger: 0.2 });

  return (
    <section ref={containerRef} className="py-24 bg-brand-offwhite">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="reveal-item opacity-0 text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-asul text-4xl md:text-5xl font-bold text-brand-navy mb-4">Stories Behind the Giving</h2>
          <p className="text-brand-navy/70 text-lg font-medium">
            Every contribution is a personal story of hope, restore, dignity, advocacy, and true transformational impact.
          </p>
        </div>

        <div className="reveal-item opacity-0 grid md:grid-cols-3 gap-6">
          {/* Testimonial 1 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-brand-lavender-tint/50 flex flex-col">
            <div className="text-brand-navy mb-4">★★★★★</div>
            <p className="text-brand-navy/80 text-sm leading-relaxed mb-8 flex-1 italic">
              "Their support allowed us to scale our impact efficiently. They were incredibly strategic, capable, and most of all, devoted partners."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden relative bg-brand-lavender-tint">
                <Image src="https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?q=80&w=2070&auto=format&fit=crop" alt="Sarah Mitchell" fill className="object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-brand-navy text-sm">Sarah Mitchell</span>
                <span className="text-brand-navy/60 text-xs">Donor, CA</span>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-brand-lavender-tint/50 flex flex-col">
            <div className="text-brand-navy mb-4">★★★★★</div>
            <p className="text-brand-navy/80 text-sm leading-relaxed mb-8 flex-1 italic">
              "The TIDI Foundation brings immense value through their data-driven community interventions. We are seeing real change on the ground."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden relative bg-brand-lavender-tint">
                <Image src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=2070&auto=format&fit=crop" alt="David Mboya" fill className="object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-brand-navy text-sm">David Mboya</span>
                <span className="text-brand-navy/60 text-xs">Partner NGO</span>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-brand-lavender-tint/50 flex flex-col">
            <div className="text-brand-navy mb-4">★★★★★</div>
            <p className="text-brand-navy/80 text-sm leading-relaxed mb-8 flex-1 italic">
              "From the beginning, they have been a joy to partner with. They are responsive, open-minded, and committed to sustainable community empowerment."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden relative bg-brand-lavender-tint">
                <Image src="https://images.unsplash.com/photo-1523825036634-aab3cce06159?q=80&w=2070&auto=format&fit=crop" alt="Maria Gonzalez" fill className="object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-brand-navy text-sm">Maria Gonzalez</span>
                <span className="text-brand-navy/60 text-xs">Local Advocate</span>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal-item opacity-0 text-center mt-12">
          <button className="w-10 h-10 rounded-full bg-brand-lavender text-brand-navy inline-flex items-center justify-center font-bold hover:bg-brand-lavender/80 transition-colors">
            &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
