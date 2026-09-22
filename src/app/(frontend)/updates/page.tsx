import Image from "next/image";
import { Calendar, MapPin, CheckCircle } from "lucide-react";
import { getUpdatePosts } from "@/sanity/lib/queries";

export const revalidate = 60;

export const metadata = {
  title: "Updates & Impact | TIDI",
  description: "Read about our latest community outreaches, events, and impact stories.",
};

const galleryImages = Array.from({ length: 14 }, (_, i) => 
  `/asset/believing-in-your-royalty-and-future-image-${i + 1}.jpeg`
);

const DEFAULT_UPDATES = [
  {
    _id: "default-edition-1",
    title: "Believing in Your Royalty and Future",
    coverImage: "/asset/believing-in-your-royalty-and-future-image-2.jpeg",
    publishedAt: "2026-08-21T00:00:00.000Z",
    excerpt: `The TIDI Educational Initiative, themed "Believing in Your Royalty and Future," successfully empowered students across all government secondary schools in Mbube at Lutheran Primary School, Ekumtak by placing vital educational books directly into their hands.\n\nTo ensure equal access and student safety, dedicated shuttles picked the children up from their respective schools and transported them back at the end of the day. Inspiring guest speakers engaged the youth on the transformative power of education and self-belief, reminding them of their inherent worth and potential.\n\nThe event was filled with life and energy, featuring live music, a DJ, and traditional cultural dance performances that celebrated local heritage alongside academic achievement. By combining essential learning tools with mentorship and vibrant community celebration, the project left a meaningful, lasting impact on Mbube's youth, and we give all glory to God for a smooth and successful execution.`,
  }
];

export default async function UpdatesPage() {
  const sanityUpdates = await getUpdatePosts();
  
  // Merge Sanity updates with defaults by title
  const sanityTitles = new Set((sanityUpdates || []).map((u: any) => u.title?.toLowerCase().trim()));
  const missingDefaults = DEFAULT_UPDATES.filter((u: any) => !sanityTitles.has(u.title.toLowerCase().trim()));
  
  const allUpdates = [...(sanityUpdates || []), ...missingDefaults];
  const hasUpdates = allUpdates.length > 0;

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

        {hasUpdates && (
          <div>
            {allUpdates.map((update: any, index: number) => (
              <article key={update._id || index} className="bg-white rounded-3xl shadow-sm border border-brand-lavender-tint/50 overflow-hidden mb-12">
                {update.coverImage && (
                  <div className="relative h-72 md:h-[400px] w-full bg-brand-lavender-tint/30">
                    <Image 
                      src={update.coverImage} 
                      alt={update.title} 
                      fill 
                      className="object-cover object-[center_top]"
                      priority={index === 0}
                    />
                  </div>
                )}
                <div className="p-8 md:p-12">
                  <h2 className="font-asul text-3xl md:text-4xl font-bold text-brand-navy mb-6 leading-tight">
                    {update.title}
                  </h2>
                  <div className="flex flex-wrap gap-4 mb-8 text-sm font-semibold text-brand-navy/60">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-brand-lavender" />
                      <span>{new Date(update.publishedAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="prose prose-lg text-brand-navy/80 max-w-none space-y-6">
                    <p className="whitespace-pre-line">{update.excerpt}</p>
                  </div>
                  
                  {/* Gallery for Default Edition 1 */}
                  {update._id === "default-edition-1" && (
                    <div className="border-t border-brand-lavender-tint/30 pt-8 mt-8">
                      <h3 className="font-asul text-2xl font-bold text-brand-navy mb-6">Event Gallery</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {galleryImages.map((src, i) => (
                          <div key={i} className="relative aspect-square rounded-xl overflow-hidden bg-brand-lavender-tint/20 hover:opacity-90 transition-opacity cursor-pointer">
                            <Image 
                              src={src} 
                              alt={`Event highlight ${i + 1}`} 
                              fill 
                              className="object-cover"
                              sizes="(max-width: 768px) 50vw, 33vw"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}

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
