"use client";

import Image from "next/image";
import Link from "next/link";
import { Target, Eye, ShieldCheck, Users, BarChart3, Handshake, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useRef } from "react";
import { useScrollReveal } from "@/animations/useScrollReveal";

const APPROACHES = [
  {
    icon: Users,
    title: "Locally Led Solutions",
    description: "Empowering communities to design and implement programs that address their specific needs."
  },
  {
    icon: BarChart3,
    title: "Evidence-Based",
    description: "Utilizing data and research to guide interventions and ensure measurable impact."
  },
  {
    icon: Handshake,
    title: "Strong Partnerships",
    description: "Collaborating with local governments, community leaders, and NGOs for sustainable outcomes."
  },
  {
    icon: ShieldCheck,
    title: "Transparency",
    description: "Maintaining clear metrics, open communication, and absolute accountability with all stakeholders."
  }
];

interface AboutContentProps {
  sanityData?: {
    heroHeadline?: string;
    heroSubheadline?: string;
    missionStatement?: string;
    visionStatement?: string;
  } | null;
}

export function AboutContent({ sanityData }: AboutContentProps) {
  const heroHeadline = sanityData?.heroHeadline || "Empowering the Vulnerable.";
  const heroSubheadline = sanityData?.heroSubheadline || "Total Impact Development Initiative (TIDI) is a non-governmental organization committed to eradicating poverty and creating equitable opportunities across marginalized communities in Nigeria.";
  
  const missionStatement = sanityData?.missionStatement || "To deliver holistic, community-driven programs that improve access to quality education, essential health services, and comprehensive human support systems, enabling people to achieve their full potential and break cycles of poverty and vulnerability.";
  const visionStatement = sanityData?.visionStatement || "A world where every individual has equitable access to the knowledge, health, and social support needed to thrive and contribute meaningfully to society. We envision resilient communities built on a foundation of unshakeable human dignity.";

  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const missionRef = useRef(null);
  const approachRef = useRef(null);
  const teamCtaRef = useRef(null);

  useScrollReveal(heroRef);
  useScrollReveal(storyRef);
  useScrollReveal(missionRef, { stagger: 0.2 });
  useScrollReveal(approachRef, { stagger: 0.1 });
  useScrollReveal(teamCtaRef);

  return (
    <div className="bg-brand-offwhite min-h-screen pt-40 md:pt-48 pb-24 overflow-hidden">
      
      {/* Hero Section */}
      <section ref={heroRef} className="container mx-auto px-4 md:px-8 max-w-7xl mb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <span className="reveal-item opacity-0 text-brand-lavender font-bold tracking-widest text-sm uppercase mb-4 block">Who We Are</span>
            <h1 className="reveal-item opacity-0 font-asul text-5xl md:text-6xl lg:text-7xl font-bold text-brand-navy leading-tight mb-6 whitespace-pre-line">
              {heroHeadline}
            </h1>
            <p className="reveal-item opacity-0 text-lg text-brand-navy/70 leading-relaxed whitespace-pre-line">
              {heroSubheadline}
            </p>
          </div>
          <div className="reveal-item opacity-0 relative h-[500px] lg:h-[700px] w-full rounded-3xl overflow-hidden shadow-xl">
            <Image 
              src="/asset/human-services-hero.jpg"
              alt="Community coming together"
              fill
              className="object-cover object-[center_35%]"
              priority
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-brand-navy py-24 relative z-10 mb-24">
        <div ref={missionRef} className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-24">
            
            {/* Mission */}
            <div className="reveal-item opacity-0">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-brand-lavender/20 rounded-xl">
                  <Target className="w-8 h-8 text-brand-lavender" />
                </div>
                <h2 className="font-asul text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-brand-lavender-tint/80 text-lg leading-relaxed whitespace-pre-line">
                {missionStatement}
              </p>
            </div>

            {/* Vision */}
            <div className="reveal-item opacity-0">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-brand-lavender/20 rounded-xl">
                  <Eye className="w-8 h-8 text-brand-lavender" />
                </div>
                <h2 className="font-asul text-3xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-brand-lavender-tint/80 text-lg leading-relaxed whitespace-pre-line">
                {visionStatement}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Our Story / Motivation */}
      <section ref={storyRef} className="container mx-auto px-4 md:px-8 max-w-4xl mb-32 text-center">
        <h2 className="reveal-item opacity-0 font-asul text-4xl font-bold text-brand-navy mb-8">Why We Do This</h2>
        <div className="reveal-item opacity-0 prose prose-lg text-brand-navy/80 mx-auto">
          <p>
            TIDI was born out of a profound realization: fragmented solutions cannot solve interconnected problems. You cannot teach a starving child, and you cannot build economic independence in a community ravaged by preventable diseases.
          </p>
          <p>
            We realized that to effect true change, our approach had to be holistic. By combining our three core pillars—Education, Health, and Human Services—we attack the roots of poverty from all angles. We are driven by a deep love for humanity and a relentless refusal to accept the status quo of marginalization.
          </p>
        </div>
      </section>

      {/* Approach Grid */}
      <section className="bg-white py-24 mb-24 border-y border-brand-lavender-tint/30">
        <div ref={approachRef} className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="reveal-item opacity-0 font-asul text-4xl font-bold text-brand-navy mb-4">Our Approach</h2>
            <p className="reveal-item opacity-0 text-brand-navy/60 text-lg max-w-2xl mx-auto">
              We don't just provide charity; we build infrastructure for long-term independence. Here is how we ensure our work lasts.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {APPROACHES.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="reveal-item opacity-0 p-8 rounded-3xl bg-brand-offwhite border border-brand-lavender-tint/50 text-center hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-16 h-16 mx-auto bg-brand-lavender-tint rounded-full flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-brand-navy" />
                  </div>
                  <h3 className="font-asul text-xl font-bold text-brand-navy mb-3">{item.title}</h3>
                  <p className="text-sm text-brand-navy/70 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Meet the Team CTA */}
      <section ref={teamCtaRef} className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
        <div className="reveal-item opacity-0 bg-brand-lavender-tint/20 rounded-[3rem] p-12 md:p-16 border border-brand-lavender-tint">
          <h2 className="font-asul text-4xl font-bold text-brand-navy mb-6">Meet The Faces Behind TIDI</h2>
          <p className="text-brand-navy/70 text-lg mb-8 max-w-2xl mx-auto">
            Our initiatives are driven by a passionate, dedicated team of professionals who give their all to see our communities thrive.
          </p>
          <Link href="/team">
            <Button variant="primary" className="rounded-full px-8 py-6 text-lg shadow-md group">
              View Our Leadership Team
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

    </div>
  );
}
