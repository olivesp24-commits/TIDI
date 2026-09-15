import { Users, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Human Services | TIDI Pillars",
  description: "Social support and empowerment for vulnerable groups.",
};

export default function HumanServicesPillar() {
  return (
    <div className="bg-brand-offwhite min-h-screen pt-40 md:pt-48 pb-24">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <Link href="/pillars" className="inline-flex items-center text-brand-navy/60 hover:text-brand-lavender text-sm font-bold mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to All Pillars
        </Link>
        
        {/* Hero Image */}
        <div className="relative h-[400px] md:h-[600px] w-full rounded-3xl overflow-hidden mb-12 shadow-sm">
          <Image 
            src="/asset/human-services-hero.jpg" 
            alt="Children smiling and showing peace signs" 
            fill 
            className="object-cover object-[center_35%]"
            priority
          />
          <div className="absolute inset-0 bg-brand-navy/30"></div>
          <div className="absolute bottom-8 left-8 flex items-center gap-4">
            <div className="p-4 bg-white rounded-2xl shadow-lg">
              <Users className="w-8 h-8 text-brand-navy" />
            </div>
            <h1 className="font-asul text-4xl md:text-5xl font-bold text-white drop-shadow-md">Human Services</h1>
          </div>
        </div>
        
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-brand-lavender-tint/50">
          <div className="prose prose-lg text-brand-navy/80 max-w-none space-y-6">
            <p className="text-2xl font-asul font-bold text-brand-navy leading-snug mb-8">
              True development cannot occur when a community's most vulnerable members are left behind. Our Human Services pillar is the safety net and the launchpad for those facing extreme socioeconomic hardship.
            </p>
            
            <p>
              At the Total Impact Development Initiative (TIDI), we recognize that while education and healthcare are foundational, they are severely hindered if a family does not have access to basic sustenance, shelter, or a means of livelihood. The Human Services pillar exists to address these immediate, pressing needs while simultaneously establishing long-term avenues for economic empowerment. We focus our efforts on the most at-risk demographics: widows, orphans, single mothers, and unemployed youth living in impoverished conditions.
            </p>
            
            <p>
              Food insecurity remains one of the most agonizing challenges in marginalized communities. When a child is starving, they cannot learn; when parents cannot provide basic meals, the resulting despair destabilizes the entire family unit. To combat this, TIDI regularly organizes massive community food drives. We distribute nutrient-dense food supplies and staple crops directly to families living below the poverty line. Furthermore, our continuous support of local orphanages ensures that abandoned and vulnerable children receive not just food and clothing, but the love, care, and dignity they inherently deserve.
            </p>

            <h3 className="font-asul text-2xl font-bold text-brand-navy mt-12 mb-4">Economic Empowerment & Livelihoods</h3>
            <p>
              However, charity alone is not a sustainable model for community development. Our ultimate goal is total independence. We seamlessly transition our humanitarian aid into robust economic empowerment programs. By providing targeted vocational training and micro-enterprise support, we equip individuals with the tools they need to generate their own income. 
            </p>

            <p>
              We place a significant emphasis on empowering women, knowing that when a woman becomes financially independent, she reinvests an overwhelming majority of her income back into her family's health and education. Through our skills acquisition workshops—ranging from tailoring and agriculture to basic business management—we help these women transform from dependents into fierce, self-sustaining entrepreneurs. We also provide seed funding and essential equipment to help them launch small-scale businesses, entirely shifting the economic trajectory of their households.
            </p>

            <h3 className="font-asul text-2xl font-bold text-brand-navy mt-12 mb-4">Building Community Resilience</h3>
            <p>
              Beyond economics, the Human Services pillar is deeply invested in social advocacy and community resilience. We champion the rights of the voiceless, combatting local issues such as gender-based violence and child labor. We facilitate support groups and mentorship programs that build strong, tightly-knit community networks where individuals can lean on one another during times of crisis.
            </p>
            
            <p>
              At its core, TIDI's Human Services pillar is about restoring human dignity. It is about reaching into the darkest, most neglected corners of our society and pulling individuals up into the light. We believe that by fiercely protecting and uplifting our most vulnerable citizens, we are not just saving lives today—we are fundamentally securing the future prosperity of the entire community. 
            </p>

            {/* CTA */}
            <div className="mt-16 p-8 md:p-12 bg-brand-navy text-brand-offwhite rounded-3xl text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <h3 className="font-asul text-3xl font-bold mb-4 relative z-10 text-white">Support Human Services</h3>
              <p className="text-brand-lavender-tint/80 mb-8 max-w-lg mx-auto relative z-10 text-base">
                Your generosity can feed a hungry family, support an orphanage, or empower a woman to start a business. Help us restore dignity and hope.
              </p>
              <div className="relative z-10">
                <Link href="/get-involved?type=donate&pillar=human-services">
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
