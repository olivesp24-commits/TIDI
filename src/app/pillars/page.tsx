import { PillarsContent } from "@/features/pillars/components/PillarsContent";
import { getPillarsPage } from "@/sanity/lib/queries";

export const revalidate = 60;

export const metadata = {
  title: "Our Pillars | TIDI",
  description: "Learn about the three pillars of impact: Education, Health, and Human Services.",
};

export default async function PillarsPage() {
  const sanityData = await getPillarsPage();

  return <PillarsContent sanityData={sanityData} />;
}
