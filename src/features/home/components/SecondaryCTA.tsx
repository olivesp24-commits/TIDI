"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useRef } from "react";
import { useScrollReveal } from "@/animations/useScrollReveal";
import Image from "next/image";

export function SecondaryCTA() {
  const container = useRef<HTMLElement>(null);
  useScrollReveal(container, { stagger: 0.2 });

  return (
    <section ref={container} className="relative min-h-[60vh] flex flex-col justify-center overflow-hidden bg-brand-navy">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/asset/secondary-cta-bg.jpg"
          alt="African women standing together"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-brand-navy/70 z-0 mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 py-24 text-brand-offwhite">
        <div className="max-w-2xl flex flex-col gap-6 items-start">
          <h2 className="reveal-item opacity-0 font-asul text-4xl md:text-6xl font-bold leading-tight text-white">
            Join Us in<br/>Lighting the Way
          </h2>
          <p className="reveal-item opacity-0 text-lg text-white/90 leading-relaxed max-w-xl">
            Where wouldn't you be if someone didn't step out of their comfortable life to step into yours?
          </p>
          <div className="reveal-item opacity-0 flex flex-wrap items-center gap-4 mt-6">
            <Link href="/get-involved">
              <Button variant="primary" className="px-8 shadow-lg">Get Involved</Button>
            </Link>
            <Link href="/contact" className="text-white hover:text-brand-lavender text-sm font-semibold transition-colors underline underline-offset-4">
              Become a Partner Today &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
