import { AboutContent } from "@/features/about/components/AboutContent";
import { getAboutPage } from "@/sanity/lib/queries";

export const revalidate = 60;

export const metadata = {
  title: "About Us | TIDI",
  description: "Learn more about the Total Impact Development Initiative.",
};

export default async function AboutPage() {
  const sanityData = await getAboutPage();

  return <AboutContent sanityData={sanityData} />;
}
