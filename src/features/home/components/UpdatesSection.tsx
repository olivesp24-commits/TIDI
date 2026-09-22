"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useScrollReveal } from "@/animations/useScrollReveal";

export function UpdatesSection() {
  const containerRef = useRef<HTMLElement>(null);
  useScrollReveal(containerRef, { stagger: 0.1 });

  return (
    <section ref={containerRef} className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="reveal-item opacity-0 text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-asul text-4xl md:text-5xl font-bold text-brand-navy mb-4">Latest Outreach Editions</h2>
          <p className="text-brand-navy/70 text-lg">
            See the direct impact we are making on the ground through our community programs and discover what's coming next.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Featured Edition 1 */}
          <div className="reveal-item opacity-0 lg:col-span-2 group">
            <Link href="/updates" className="block h-full relative rounded-3xl overflow-hidden bg-brand-navy shadow-lg border border-brand-lavender-tint/50">
              <div className="absolute inset-0 z-0">
                <Image 
                  src="/asset/believing-in-your-royalty-and-future-image-2.jpeg"
                  alt="Believing in Your Royalty and Future"
                  fill
                  className="object-cover object-[center_top] opacity-60 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent"></div>
              </div>
              
              <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center gap-1.5 text-xs font-bold text-brand-navy bg-brand-lavender px-3 py-1 rounded-full uppercase tracking-wider">
                    Outreach Edition 1
                  </span>
                  <span className="flex items-center gap-1 text-xs font-bold text-green-400">
                    <CheckCircle className="w-3.5 h-3.5" /> Completed
                  </span>
                </div>
                
                <h3 className="font-asul text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  Believing in Your Royalty and Future
                </h3>
                
                <p className="text-brand-lavender-tint/90 mb-6 max-w-xl line-clamp-2">
                  Empowering students across government secondary schools in Mbube by placing vital educational books directly into their hands and inspiring self-belief.
                </p>
                
                <div className="flex items-center gap-2 text-brand-lavender font-bold text-sm group-hover:text-white transition-colors">
                  Read Full Story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>

          {/* Upcoming Editions Column */}
          <div className="reveal-item opacity-0 flex flex-col gap-6">
            
            <div className="bg-brand-offwhite rounded-3xl p-8 border border-brand-lavender-tint/50 flex-1 flex flex-col justify-center">
              <div className="w-10 h-10 bg-brand-lavender-tint/50 rounded-xl flex items-center justify-center mb-4">
                <Calendar className="w-5 h-5 text-brand-lavender" />
              </div>
              <h4 className="font-asul text-xl font-bold text-brand-navy mb-2">Outreach Edition 2</h4>
              <p className="text-brand-navy/60 text-sm mb-4">Details are currently being finalized. Stay tuned for the next major impact initiative.</p>
              <span className="text-xs font-bold text-brand-navy/40 uppercase tracking-wider mt-auto">Planning Phase</span>
            </div>

            <div className="bg-brand-offwhite rounded-3xl p-8 border border-brand-lavender-tint/50 flex-1 flex flex-col justify-center">
              <div className="w-10 h-10 bg-brand-lavender-tint/50 rounded-xl flex items-center justify-center mb-4">
                <Calendar className="w-5 h-5 text-brand-lavender" />
              </div>
              <h4 className="font-asul text-xl font-bold text-brand-navy mb-2">Outreach Edition 3</h4>
              <p className="text-brand-navy/60 text-sm mb-4">Upcoming targeted outreach. More information will be available soon.</p>
              <span className="text-xs font-bold text-brand-navy/40 uppercase tracking-wider mt-auto">Planning Phase</span>
            </div>

          </div>

        </div>

        <div className="reveal-item opacity-0 text-center mt-12">
          <Link href="/updates">
            <Button variant="secondary">View All Editions</Button>
          </Link>
        </div>
        
      </div>
    </section>
  );
}
