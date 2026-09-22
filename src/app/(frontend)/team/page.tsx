import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { getTeamMembers } from "@/sanity/lib/queries";

export const revalidate = 60; // revalidate every 60 seconds

export const metadata = {
  title: "Our Team | TIDI",
  description: "Meet the dedicated team behind the Total Impact Development Initiative.",
};

interface TeamMember {
  name: string;
  role: string;
  profession: string;
  bio: string;
  phone: string;
  email: string;
  image: string;
}

const DEFAULT_TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Beatrice Adeh Thomas",
    role: "Founder / Head Admin",
    profession: "Diction Coach",
    bio: "As the Founder and Head Admin, Beatrice leverages her expertise as a public speaker and a crowned queen to drive TIDI's vision. She oversees organizational strategy and ensures impactful communication across all programs.",
    phone: "09151214069 / 07076071389",
    email: "thomasbeatrice024@gmail.com",
    image: "/asset/founder-image.png"
  },
  {
    name: "Edeh Favour Ibeabuchi",
    role: "Secretary",
    profession: "Real Estate",
    bio: "Favour anchors our administrative operations as Secretary, utilizing his background in Real Estate to bring strong project management and organizational skills to TIDI's daily activities.",
    phone: "07033988545",
    email: "Fedeh@gmail.com",
    image: "/asset/secretary-image.png"
  },
  {
    name: "Emecheta Blessing O",
    role: "Nurse",
    profession: "Registered Nurse",
    bio: "Bringing crucial medical expertise to our Health & Wellness pillar, Blessing serves as our lead Registered Nurse. She coordinates our healthcare initiatives and community medical outreach.",
    phone: "08063852745",
    email: "oluchiojiakor@gmail.com",
    image: "/asset/registered-nurse-image.png"
  },
  {
    name: "Femi Abdulsalam",
    role: "Media / Management Head",
    profession: "Media and management",
    bio: "Femi drives our public engagement and operational efficiency. As Media & Management Head, he amplifies TIDI's impact through strategic storytelling and robust organizational management.",
    phone: "09131988855",
    email: "femitreasure07@gmail.com",
    image: "/asset/media-management-image.png"
  }
];

export default async function TeamPage() {
  const sanityTeamMembers = await getTeamMembers();
  
  // Defensive Fallback: If Sanity has team members, use them. Otherwise, use defaults.
  const teamMembers = sanityTeamMembers && sanityTeamMembers.length > 0 
    ? sanityTeamMembers 
    : DEFAULT_TEAM_MEMBERS;

  return (
    <div className="bg-brand-offwhite min-h-screen pt-40 md:pt-48 pb-24">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="font-asul text-4xl md:text-5xl font-bold text-brand-navy mb-6">Our Leadership Team</h1>
          <p className="text-lg text-brand-navy/70 leading-relaxed">
            Meet the dedicated individuals driving the Total Impact Development Initiative forward. Our team brings together diverse expertise to create lasting change in our communities.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member: TeamMember, index: number) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-brand-lavender-tint/50 transition-transform hover:-translate-y-2 duration-300 flex flex-col">
              <div className="relative h-72 w-full bg-brand-lavender-tint/20 shrink-0">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="p-6 flex flex-col grow">
                <h3 className="font-asul text-xl font-bold text-brand-navy mb-1">{member.name}</h3>
                <p className="text-brand-lavender font-bold text-sm mb-2">{member.role}</p>
                <p className="text-brand-navy/60 text-xs font-semibold uppercase tracking-wider mb-4">{member.profession}</p>
                <p className="text-brand-navy/80 text-sm leading-relaxed mb-6">{member.bio}</p>
                
                <div className="flex flex-col gap-3 text-sm text-brand-navy/80 border-t border-brand-lavender-tint/30 pt-4 mt-auto">
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 mt-0.5 text-brand-lavender shrink-0" />
                    <span className="break-all">{member.phone}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 mt-0.5 text-brand-lavender shrink-0" />
                    <a href={`mailto:${member.email}`} className="hover:text-brand-lavender transition-colors break-all">
                      {member.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
