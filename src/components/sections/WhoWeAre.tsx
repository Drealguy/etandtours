import Image from "next/image";
import type { ReactNode } from "react";
import { CountUp } from "@/components/ui/CountUp";
import { Container, Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { brand } from "@/lib/site";

// Facts only, taken from the owner's "about" text. Years of experience stays correct as time passes (2026 → 16).
const years = new Date().getFullYear() - brand.founded;

const facts: { value: ReactNode; label: string }[] = [
  { value: <CountUp to={years} suffix="+" />, label: "Years of experience" },
  { value: <CountUp from={1990} to={brand.founded} />, label: "Trusted since" },
  { value: <CountUp to={5000} suffix="+" separator />, label: "Travellers served" },
];

export function WhoWeAre() {
  return (
    <Section id="who-we-are">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="rounded-[2rem] bg-brand/5 p-4 sm:p-6 lg:p-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl lg:aspect-[4/5]">
            <Image
              src="/images/who-we-are-coast.jpg"
              alt="Whitewashed stone steps leading down to a blue sea"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <SectionHeading title="Who We Are" />
          <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-muted sm:text-lg">
            <p>
              ETandTOURS (officially known as Elyon Travels &amp; Tours) is a Nigerian-based boutique travel agency
              and consulting firm in Lekki Phase 1, Lagos. Your trusted partner in discovering the world, one trip at
              a time.
            </p>
            <p>
              We are a full-service travel and tourism agency committed to making travel simple, affordable, and
              stress-free. Whether you&apos;re traveling for leisure, business, study, or religious purposes, we
              provide end-to-end travel solutions: flight bookings, hotel reservations, car rentals, visa assistance,
              and group and solo tours.
            </p>
            <p>
              We have served over 5,000 travellers since 2010, and we are best known within the Nigerian travel
              community for curated group road trips across West Africa and premium holiday packages.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 border-t border-line pt-8 sm:grid-cols-3">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="sr-only">{fact.label}</dt>
                <dd className="font-heading text-3xl font-bold text-accent sm:text-4xl">{fact.value}</dd>
                <dd className="mt-1 text-sm text-muted sm:text-base">{fact.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </Section>
  );
}
