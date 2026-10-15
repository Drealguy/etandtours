import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Faq } from "@/components/sections/Faq";
import { PageHero } from "@/components/sections/PageHero";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

export const metadata: Metadata = pageMetadata(
  "Our Services",
  "Flight bookings, hotel reservations, car rentals, visa assistance, group and solo tours, road trips from Lagos to Cotonou and Accra, and vacation packages to Dubai, Egypt and Qatar.",
  "/services",
);

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <PageHero
        title="Our Services"
        label="End-to-End Travel Solutions"
        description="Whether you're traveling for leisure, business, study, or religious purposes, we provide end-to-end travel solutions."
        image="/images/services-hero-plane.jpg"
        imageAlt="White airplane in flight"
      />
      <Services />
      <WhyChooseUs />
      <Faq />
      <CtaBanner />
    </main>
  );
}
