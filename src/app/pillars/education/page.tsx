import { BookOpen, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Education & Literacy | TIDI Pillars",
  description: "Expanding access to quality learning for children, youth, and adults.",
};

export default function EducationPillar() {
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
            src="/asset/education-hero.jpg" 
            alt="Children in school uniform reading a book" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-brand-navy/30"></div>
          <div className="absolute bottom-8 left-8 flex items-center gap-4">
            <div className="p-4 bg-white rounded-2xl shadow-lg">
              <BookOpen className="w-8 h-8 text-brand-navy" />
            </div>
            <h1 className="font-asul text-4xl md:text-5xl font-bold text-white drop-shadow-md">Education & Literacy</h1>
          </div>
        </div>
        
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-brand-lavender-tint/50">
          <div className="prose prose-lg text-brand-navy/80 max-w-none space-y-6">
            <p className="text-2xl font-asul font-bold text-brand-navy leading-snug mb-8">
              Education is the single most powerful tool we possess to break the cycle of poverty and ignite lasting, generational change within our communities.
            </p>
            
            <p>
              At the Total Impact Development Initiative (TIDI), we believe that every individual—regardless of their socioeconomic background, geography, or gender—deserves unhindered access to quality education. For too long, marginalized communities have been locked out of the opportunities that come with basic literacy and numeracy. We are actively working on the ground to dismantle these barriers, recognizing that an educated child inevitably becomes an empowered adult who can uplift their entire community.
            </p>
            
            <p>
              Our approach to education is deeply holistic. We do not stop at simply enrolling children in schools; we ensure they have the materials, mentorship, and environment necessary to thrive. Through our dedicated outreach programs, we distribute essential learning materials—such as textbooks, writing supplies, and backpacks—directly into the hands of students in underserved government schools. By alleviating the financial burden of these materials, we prevent countless children from dropping out due to economic strain.
            </p>

            <h3 className="font-asul text-2xl font-bold text-brand-navy mt-12 mb-4">Beyond the Classroom</h3>
            <p>
              However, our vision extends far beyond traditional childhood classrooms. TIDI is deeply committed to youth empowerment and adult literacy. We recognize that true community resilience requires continuous, lifelong learning. For out-of-school youth, we facilitate vocational training and skills development programs that bridge the gap between basic education and actual economic independence. By equipping young adults with practical, marketable skills, we are building a workforce that can innovate and drive local economies forward.
            </p>

            <p>
              Furthermore, adult literacy programs remain a cornerstone of our work. When parents—especially mothers—are taught to read, write, and manage basic finances, the impact resonates throughout the household. An educated mother is significantly more likely to prioritize her children's education, creating a beautiful ripple effect of learning and empowerment.
            </p>

            <h3 className="font-asul text-2xl font-bold text-brand-navy mt-12 mb-4">Mentorship and Self-Belief</h3>
            <p>
              Perhaps most importantly, our educational pillar is anchored in the concept of self-belief. We frequently host seminars and motivational sessions—like our <em>"Believing in Your Royalty and Future"</em> initiative—where we bring in inspiring guest speakers to engage with students. We teach them that they are inherently valuable, that their current circumstances do not dictate their future, and that education is their key to unlocking a world of possibilities. 
            </p>
            
            <p>
              Through sustained partnerships with local schools, educators, and generous donors, we are slowly but surely rewriting the narrative. We are building a future where every child can dream without limits and every adult has the skills they need to provide for their family. This is the transformative power of the Education & Literacy pillar at TIDI.
            </p>

            {/* CTA */}
            <div className="mt-16 p-8 md:p-12 bg-brand-navy text-brand-offwhite rounded-3xl text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-lavender/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <h3 className="font-asul text-3xl font-bold mb-4 relative z-10 text-white">Support Education Today</h3>
              <p className="text-brand-lavender-tint/80 mb-8 max-w-lg mx-auto relative z-10 text-base">
                Your contribution can put a book in a child's hand, keep a student in school, and empower a community through literacy. Help us expand our reach.
              </p>
              <div className="relative z-10">
                <Link href="/get-involved?type=donate&pillar=education">
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
