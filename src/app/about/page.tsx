import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Faq } from "@/components/sections/Faq";
import { PageHero } from "@/components/sections/PageHero";
import { Services } from "@/components/sections/Services";
import { Team } from "@/components/sections/Team";
import { WhoWeAre } from "@/components/sections/WhoWeAre";

export const metadata: Metadata = pageMetadata(
  "About Us",
  "ETandTOURS (Elyon Travels & Tours) is a Nigerian-based boutique travel agency and consulting firm in Lekki Phase 1, Lagos, serving over 5,000 travellers since 2010.",
  "/about",
);

export default function AboutPage() {
  return (
    <main className="flex-1">
      <PageHero
        title="About Us"
        label="Our Story"
        description="A Nigerian-based boutique travel agency and consulting firm in Lekki Phase 1, Lagos. Trusted since 2010."
        image="/images/about-hero-lake.jpg"
        imageAlt="Traveller on a boat looking out over a mountain lake"
      />
      <WhoWeAre />
      <Services />
      <Team />
      <Faq />
      <CtaBanner />
    </main>
  );
}
