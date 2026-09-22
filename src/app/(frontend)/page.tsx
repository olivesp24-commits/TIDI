import { Hero } from "@/features/home/components/Hero";
import { IntroSection } from "@/features/home/components/IntroSection";
import { ApproachStatsBand } from "@/features/home/components/ApproachStatsBand";
import { PillarSelector } from "@/features/home/components/PillarSelector";
import { SecondaryCTA } from "@/features/home/components/SecondaryCTA";
import { UpdatesSection } from "@/features/home/components/UpdatesSection";
import { FounderSpotlight } from "@/features/home/components/FounderSpotlight";
import { getHomePage } from "@/sanity/lib/queries";

export const revalidate = 60; // revalidate every 60 seconds

export default async function Home() {
  const sanityData = await getHomePage();

  return (
    <div className="flex flex-col min-h-screen">
      <Hero sanityData={sanityData} />
      <IntroSection />
      <ApproachStatsBand />
      <PillarSelector />
      <FounderSpotlight />
      <UpdatesSection />
      <SecondaryCTA />
    </div>
  );
}
