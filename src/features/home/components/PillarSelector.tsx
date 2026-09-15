"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useScrollReveal } from "@/animations/useScrollReveal";

const PILLARS = [
  {
    id: "education",
    title: "Education",
    description: "Expanding access to quality learning for children, youth, and adults.",
    image: "/asset/pillar-education.jpg",
    link: "/pillars/education"
  },
  {
    id: "health",
    title: "Health",
    description: "Preventive healthcare, health education, and essential services access.",
    image: "/asset/pillar-health.jpg",
    link: "/pillars/health"
  },
  {
    id: "human-services",
    title: "Human Services",
    description: "Social support and empowerment for vulnerable groups and families.",
    image: "/asset/pillar-human-services.jpg",
    link: "/pillars/human-services"
  }
];

export function PillarSelector() {
  const containerRef = useRef<HTMLElement>(null);
  useScrollReveal(containerRef, { stagger: 0.1 });

  return (
    <section ref={containerRef} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="reveal-item opacity-0 text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-asul text-4xl md:text-5xl font-bold text-brand-navy mb-4">Causes We Champion</h2>
          <p className="text-brand-navy/70 text-lg font-medium">
            Strategic support for organizations creating meaningful change worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {PILLARS.map((pillar) => (
            <div key={pillar.id} className="reveal-item opacity-0 flex flex-col group cursor-pointer">
              <Link href={pillar.link} className="flex flex-col h-full bg-white rounded-t-2xl rounded-b-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image 
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1 border-x border-b border-brand-lavender-tint/50">
                  <h3 className="font-asul text-2xl font-bold text-brand-navy mb-3 flex items-center justify-between">
                    {pillar.title}
                    <ArrowRight className="w-5 h-5 text-brand-lavender opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </h3>
                  <p className="text-brand-navy/70 text-sm leading-relaxed mb-6 flex-1">
                    {pillar.description}
                  </p>
                  <div className="w-8 h-8 rounded-full border border-brand-navy/20 flex items-center justify-center text-brand-navy group-hover:border-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="reveal-item opacity-0 text-center">
          <Link href="/pillars">
            <Button variant="primary">Find Out More</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
