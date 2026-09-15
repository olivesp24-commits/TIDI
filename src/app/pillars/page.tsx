"use client";

import Image from "next/image";
import Link from "next/link";
import { BookOpen, HeartPulse, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useRef } from "react";
import { useScrollReveal } from "@/animations/useScrollReveal";

const PILLARS = [
  {
    id: "education",
    icon: BookOpen,
    title: "Education & Literacy",
    description: "Expanding access to quality learning for children, youth, and adults. We distribute educational materials, build capacity in schools, and provide mentorship to empower the next generation.",
    link: "/pillars/education",
    image: "/asset/education-hero.jpg",
    color: "bg-blue-50"
  },
  {
    id: "health",
    icon: HeartPulse,
    title: "Health & Wellness",
    description: "Preventive healthcare, health education, and essential services access. We conduct medical outreaches, distribute health kits, and raise awareness on critical community health issues.",
    link: "/pillars/health",
    image: "/asset/health-hero.jpg",
    color: "bg-green-50"
  },
  {
    id: "human-services",
    icon: Users,
    title: "Human Services",
    description: "Social support and empowerment for vulnerable groups. We deliver food drives, support orphanages, and provide vocational training to foster economic independence and community resilience.",
    link: "/pillars/human-services",
    image: "/asset/human-services-hero.jpg",
    color: "bg-orange-50"
  }
];

export default function PillarsPage() {
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const ctaRef = useRef(null);
  
  useScrollReveal(headerRef);
  useScrollReveal(gridRef, { stagger: 0.2 });
  useScrollReveal(ctaRef);

  return (
    <div className="bg-brand-offwhite min-h-screen pt-40 md:pt-48 pb-24 overflow-hidden">
      
      {/* Header Section */}
      <section ref={headerRef} className="container mx-auto px-4 md:px-8 max-w-7xl mb-24">
        <div className="text-center max-w-3xl mx-auto">
          <span className="reveal-item opacity-0 text-brand-lavender font-bold tracking-widest text-sm uppercase mb-4 block">Our Focus Areas</span>
          <h1 className="reveal-item opacity-0 font-asul text-5xl md:text-6xl font-bold text-brand-navy mb-6">
            The Three Pillars of Impact
          </h1>
          <p className="reveal-item opacity-0 text-xl text-brand-navy/70 leading-relaxed">
            TIDI operates across three foundational pillars to build resilient communities, break cycles of poverty, and drive sustainable outcomes for the vulnerable.
          </p>
        </div>
      </section>

      {/* Pillars Grid */}
      <section ref={gridRef} className="container mx-auto px-4 md:px-8 max-w-7xl mb-32">
        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.id} className="reveal-item opacity-0 group flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-brand-lavender-tint/30 translate-y-8">
                
                {/* Image Header */}
                <div className="relative h-64 w-full overflow-hidden bg-brand-lavender-tint/20">
                  <div className="absolute inset-0 bg-brand-navy/20 z-10 group-hover:bg-brand-navy/10 transition-colors duration-500"></div>
                  <Image 
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute top-6 left-6 z-20 bg-white/95 backdrop-blur p-3 rounded-2xl shadow-sm">
                    <Icon className="w-6 h-6 text-brand-navy" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col grow">
                  <h2 className="font-asul text-3xl font-bold text-brand-navy mb-4 group-hover:text-brand-lavender transition-colors">
                    {pillar.title}
                  </h2>
                  <p className="text-brand-navy/70 text-base leading-relaxed mb-8 flex-1">
                    {pillar.description}
                  </p>
                  
                  <Link href={pillar.link} className="inline-flex items-center text-sm font-bold text-brand-navy group-hover:text-brand-lavender transition-colors mt-auto">
                    Explore Initiatives
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section ref={ctaRef} className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="reveal-item opacity-0 bg-brand-navy rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-lavender/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#4263EB]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-asul text-4xl md:text-5xl font-bold text-white mb-6">Want to support our work?</h2>
            <p className="text-brand-lavender-tint/80 text-lg mb-10">
              Whether through partnerships, volunteering, or donations, your contribution helps us sustain these pillars and reach more communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-involved?type=partner">
                <Button className="bg-[#D1CFF9] text-[#1E1B4B] hover:bg-[#C1BFF8] w-full sm:w-auto rounded-full px-8 py-3 font-bold border-none">
                  Partner With Us
                </Button>
              </Link>
              <Link href="/get-involved?type=volunteer">
                <Button variant="outline" className="w-full sm:w-auto rounded-full px-8 py-3 text-white border-white/20 hover:bg-white/10">
                  Become a Volunteer
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
