"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useRef } from "react";
import { useScrollReveal } from "@/animations/useScrollReveal";

export function IntroSection() {
  const containerRef = useRef<HTMLElement>(null);
  useScrollReveal(containerRef, { stagger: 0.2 });

  return (
    <section ref={containerRef} className="py-24 bg-brand-offwhite overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="flex flex-col items-start max-w-lg lg:order-1 order-2">
            <h2 className="reveal-item opacity-0 font-asul text-4xl md:text-5xl font-bold text-brand-navy mb-8 leading-tight">
              Do More Together<br/>Than You Can Alone.<br/>Start Helping Now!
            </h2>
            <div className="reveal-item opacity-0 prose text-brand-navy/80 mb-8 space-y-4 text-lg">
              <p>
                Our vision is rooted in true compassion. We believe that when you empower individuals through access to education, health, and human services, you ignite hope that shapes the future.
              </p>
            </div>
            <div className="reveal-item opacity-0">
              <Link href="/get-involved">
                <Button variant="primary">Get Involved</Button>
              </Link>
            </div>
          </div>
          
          <div className="relative lg:order-2 order-1 py-12">
            <div className="grid grid-cols-2 gap-6 relative max-w-lg mx-auto">
              <div className="reveal-item opacity-0 translate-y-12 aspect-[3/4] rounded-2xl overflow-hidden relative shadow-xl z-10 border-4 border-white bg-brand-lavender-tint/20">
                <Image 
                  src="/asset/believing-in-your-royalty-and-future-image-4.jpeg"
                  alt="TIDI outreach activities"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="reveal-item opacity-0 -translate-y-12 aspect-[3/4] rounded-2xl overflow-hidden relative shadow-xl border-4 border-white bg-brand-lavender-tint/20">
                <Image 
                  src="/asset/believing-in-your-royalty-and-future-image-8.jpeg"
                  alt="TIDI community impact"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
