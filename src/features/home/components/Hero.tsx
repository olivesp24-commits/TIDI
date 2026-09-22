"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/animations/gsapConfig";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1542884748-2b87b36c6b90?q=80&w=2070&auto=format&fit=crop",
  "/asset/hero-2.jpg"
];

interface HeroProps {
  sanityData?: {
    heroHeadline?: string;
    heroSubheadline?: string;
    heroSlides?: Array<{ src: string; title: string }>;
  } | null;
}

export function Hero({ sanityData }: HeroProps) {
  const container = useRef<HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const headline = sanityData?.heroHeadline || "Lighting the Way\nFor Communities\nThat Need it Most.";
  const subheadline = sanityData?.heroSubheadline || "We deliver holistic, community-driven programs that improve access to quality education, essential health services, and comprehensive human support systems.";
  const slides = sanityData?.heroSlides?.length ? sanityData.heroSlides.map(s => s.src) : HERO_IMAGES;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      gsap.set(".hero-reveal", { opacity: 1, y: 0 });
      return;
    }

    gsap.fromTo(
      ".hero-reveal",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.2 }
    );
  }, { scope: container });

  return (
    <section ref={container} className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-brand-navy">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Image 
              src={slides[currentIndex]}
              alt="Hero background"
              fill
              className={`object-cover opacity-70 ${currentIndex === 0 ? "object-top" : "object-center"}`}
              priority
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-brand-navy/60 z-10 pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-20 pt-40 pb-24 text-brand-offwhite">
        <div className="max-w-3xl flex flex-col gap-6 items-start">
          <span className="hero-reveal opacity-0 text-brand-lavender font-bold tracking-widest text-sm uppercase">Igniting Hope</span>
          <h1 className="hero-reveal opacity-0 font-asul text-4xl sm:text-5xl md:text-7xl font-bold leading-tight text-white drop-shadow-md whitespace-pre-line">
            {headline}
          </h1>
          <p className="hero-reveal opacity-0 text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed drop-shadow-sm">
            {subheadline}
          </p>
          <div className="hero-reveal opacity-0 flex flex-wrap gap-4 mt-6">
            <Link href="/get-involved">
              <Button variant="primary" className="px-8 shadow-lg hover:-translate-y-1 transition-transform">See The Impact</Button>
            </Link>
            <Link href="/about">
              <Button variant="secondary" className="border-white text-white hover:bg-white hover:text-brand-navy shadow-lg hover:-translate-y-1 transition-transform">Partner With Us</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
