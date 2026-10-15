import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ContactDetails } from "@/components/sections/ContactDetails";
import { ContactForm } from "@/components/sections/ContactForm";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Faq } from "@/components/sections/Faq";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = pageMetadata(
  "Contact Us",
  "Contact ETandTOURS (Elyon Travels & Tours), Lekki Phase 1, Lekki, Lagos. Call or WhatsApp +234 802 304 8843, or message @etandtour on Instagram.",
  "/contact",
);

export default function ContactPage() {
  return (
    <main className="flex-1">
      <PageHero
        title="Contact Us"
        label="Book a Trip"
        description="Book a trip or check our current offerings on WhatsApp, on Instagram at @etandtour, or at our hub in Lekki Phase 1, Lagos."
        image="/images/contact-hero-cabin.jpg"
        imageAlt="Passengers seated inside an airplane cabin"
      />
      <ContactForm />
      <ContactDetails />
      <Faq />
      <CtaBanner />
    </main>
  );
}
