import { HeartPulse, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Health & Wellness | TIDI Pillars",
  description: "Preventive healthcare, health education, and essential services access.",
};

export default function HealthPillar() {
  return (
    <div className="bg-brand-offwhite min-h-screen pt-40 md:pt-48 pb-24">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <Link href="/pillars" className="inline-flex items-center text-brand-navy/60 hover:text-brand-lavender text-sm font-bold mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to All Pillars
        </Link>
        
        {/* Hero Image */}
        <div className="relative h-64 md:h-96 w-full rounded-3xl overflow-hidden mb-12 shadow-sm">
          <Image 
            src="/asset/health-hero.jpg" 
            alt="Doctor crossing arms holding a red stethoscope" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-brand-navy/30"></div>
          <div className="absolute bottom-8 left-8 flex items-center gap-4">
            <div className="p-4 bg-white rounded-2xl shadow-lg">
              <HeartPulse className="w-8 h-8 text-brand-navy" />
            </div>
            <h1 className="font-asul text-4xl md:text-5xl font-bold text-white drop-shadow-md">Health & Wellness</h1>
          </div>
        </div>
        
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-brand-lavender-tint/50">
          <div className="prose prose-lg text-brand-navy/80 max-w-none space-y-6">
            <p className="text-2xl font-asul font-bold text-brand-navy leading-snug mb-8">
              A thriving community begins with the physical and mental well-being of its people. We believe that access to fundamental healthcare is a basic human right, not a privilege.
            </p>
            
            <p>
              In many marginalized and rural communities, the barrier to healthcare is not merely a lack of advanced medical facilities, but an absence of basic health education and preventative care. At the Total Impact Development Initiative (TIDI), our Health & Wellness pillar is fiercely dedicated to bridging this catastrophic gap. We operate on the foundational belief that preventable diseases should never be the cause of community stagnation. When a community is healthy, children can stay in school, parents can work to provide for their families, and the entire socioeconomic fabric of the region grows stronger.
            </p>
            
            <p>
              Our primary approach relies heavily on proactive, grassroots intervention. We organize and execute comprehensive medical outreaches, traveling directly to remote areas that are traditionally cut off from standard healthcare infrastructure. During these outreaches, our network of volunteer doctors, nurses, and medical professionals provide free health screenings, essential medications, and critical primary care to hundreds of individuals who might otherwise never see a physician. 
            </p>

            <h3 className="font-asul text-2xl font-bold text-brand-navy mt-12 mb-4">Focus on Preventative Education</h3>
            <p>
              However, treatment is only half the battle. True, sustainable wellness is built through education. A significant portion of our resources is poured into preventative health education. We host community workshops focusing on maternal health, sanitation, nutrition, and infectious disease prevention. By empowering individuals—especially mothers and community leaders—with basic medical knowledge and hygiene practices, we equip them to prevent illnesses before they ever occur.
            </p>

            <p>
              Additionally, TIDI places a strong emphasis on the distribution of essential health kits. These kits, which include fundamental first aid supplies, sanitary products for young women, and hygiene essentials, serve as a first line of defense against easily transmittable diseases. For young girls in particular, access to proper sanitary products ensures they do not have to miss weeks of schooling every year, thereby intersecting our Health pillar beautifully with our Education pillar.
            </p>

            <h3 className="font-asul text-2xl font-bold text-brand-navy mt-12 mb-4">Mental Health and Holistic Care</h3>
            <p>
              Beyond physical health, we are actively breaking the stigma surrounding mental health in underserved regions. Trauma, extreme poverty, and societal pressures take a severe toll on the psychological well-being of vulnerable populations. We are working to integrate trauma-informed care and mental wellness counseling into our standard outreach protocols. Our goal is to create safe spaces where individuals can receive not just a prescription for physical ailments, but a listening ear and professional guidance for their mental burdens.
            </p>
            
            <p>
              Through the steadfast dedication of our medical volunteers and the generosity of our partners, TIDI is changing the health narrative of the communities we serve. We are not just treating symptoms; we are building robust, resilient, and deeply healthy communities from the ground up, ensuring that every individual has the physical vitality necessary to pursue a brighter future.
            </p>

            {/* CTA */}
            <div className="mt-16 p-8 md:p-12 bg-brand-navy text-brand-offwhite rounded-3xl text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#4263EB]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <h3 className="font-asul text-3xl font-bold mb-4 relative z-10 text-white">Support Health & Wellness</h3>
              <p className="text-brand-lavender-tint/80 mb-8 max-w-lg mx-auto relative z-10 text-base">
                Your donation can fund a medical outreach, provide essential health kits, and save lives in communities that need it most.
              </p>
              <div className="relative z-10">
                <Link href="/get-involved?type=donate&pillar=health">
                  <Button className="bg-[#D1CFF9] text-[#1E1B4B] hover:bg-[#C1BFF8] rounded-full px-8 py-3 font-bold border-none">
                    Donate to this Pillar
                  </Button>
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
