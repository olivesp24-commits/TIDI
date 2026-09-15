import Image from "next/image";
import { Calendar, MapPin, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Updates & Impact | TIDI",
  description: "Read about our latest community outreaches, events, and impact stories.",
};

const galleryImages = Array.from({ length: 14 }, (_, i) => 
  `/asset/believing-in-your-royalty-and-future-image-${i + 1}.jpeg`
);

export default function UpdatesPage() {
  return (
    <div className="bg-brand-offwhite min-h-screen pt-40 md:pt-48 pb-24">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-asul text-4xl md:text-5xl font-bold text-brand-navy mb-6">Latest Updates</h1>
          <p className="text-lg text-brand-navy/70 leading-relaxed max-w-2xl mx-auto">
            Stay up to date with our recent community outreaches, projects, and the impact we are making together across our various editions.
          </p>
        </div>

        {/* EDITION 1 */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-asul text-3xl font-bold text-brand-navy">Outreach Edition 1</h2>
          <span className="flex items-center gap-1.5 text-sm font-bold text-green-700 bg-green-100 px-3 py-1 rounded-full">
            <CheckCircle className="w-4 h-4" />
            Completed
          </span>
        </div>

        <article className="bg-white rounded-3xl shadow-sm border border-brand-lavender-tint/50 overflow-hidden mb-24">
          <div className="relative h-72 md:h-[500px] w-full bg-brand-lavender-tint/30">
            <Image 
              src="/asset/believing-in-your-royalty-and-future-image-2.jpeg" 
              alt="Believing in Your Royalty and Future Educational Outreach" 
              fill 
              className="object-cover object-[center_top]"
              priority
            />
            <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur px-4 py-2 rounded-full shadow-sm">
              <span className="text-brand-navy font-bold text-xs uppercase tracking-wider">Educational Outreach</span>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <h2 className="font-asul text-3xl md:text-4xl font-bold text-brand-navy mb-6 leading-tight">
              Believing in Your Royalty and Future
            </h2>
            
            <div className="flex flex-wrap gap-4 mb-8 text-sm font-semibold text-brand-navy/60">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-brand-lavender" />
                <span>August 21st, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-lavender" />
                <span>Ekumtak, Mbube, Ogoja, Cross River State</span>
              </div>
            </div>

            <div className="prose prose-lg text-brand-navy/80 max-w-none space-y-6 mb-12">
              <p>
                The TIDI Educational Initiative, themed <strong>"Believing in Your Royalty and Future,"</strong> successfully empowered students across all government secondary schools in Mbube at Lutheran Primary School, Ekumtak by placing vital educational books directly into their hands. 
              </p>
              <p>
                To ensure equal access and student safety, dedicated shuttles picked the children up from their respective schools and transported them back at the end of the day. Inspiring guest speakers engaged the youth on the transformative power of education and self-belief, reminding them of their inherent worth and potential. 
              </p>
              <p>
                The event was filled with life and energy, featuring live music, a DJ, and traditional cultural dance performances that celebrated local heritage alongside academic achievement. By combining essential learning tools with mentorship and vibrant community celebration, the project left a meaningful, lasting impact on Mbube's youth, and we give all glory to God for a smooth and successful execution.
              </p>
            </div>

            {/* Image Gallery Grid */}
            <div className="border-t border-brand-lavender-tint/30 pt-8 mt-8">
              <h3 className="font-asul text-2xl font-bold text-brand-navy mb-6">Event Gallery</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {galleryImages.map((src, index) => (
                  <div key={index} className="relative aspect-square rounded-xl overflow-hidden bg-brand-lavender-tint/20 hover:opacity-90 transition-opacity cursor-pointer">
                    <Image 
                      src={src} 
                      alt={`Event highlight ${index + 1}`} 
                      fill 
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </article>

        {/* UPCOMING EDITIONS */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-asul text-3xl font-bold text-brand-navy">Upcoming Editions</h2>
            <span className="text-sm font-bold text-brand-lavender bg-brand-lavender-tint/20 px-3 py-1 rounded-full">Planning Phase</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-brand-lavender-tint/50 shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
                <div>
                  <div className="w-12 h-12 bg-brand-lavender-tint/30 rounded-xl flex items-center justify-center mb-4">
                    <Calendar className="w-6 h-6 text-brand-lavender" />
                  </div>
                  <h3 className="font-asul text-xl font-bold text-brand-navy mb-2">Outreach Edition {i + 2}</h3>
                  <p className="text-brand-navy/60 text-sm leading-relaxed">
                    Details for this upcoming outreach edition are currently being finalized. Stay tuned for more information on the date and location.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-brand-lavender-tint/30 text-xs font-bold tracking-wider text-brand-navy/40 uppercase">
                  Coming Soon
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
