import { ArrowRight, Plane } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/lib/services";
import { bookHref } from "@/lib/site";

export function Services() {
  return (
    <Section id="services">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <SectionHeading
            title="End-to-End Travel Solutions"
            className="lg:max-w-2xl"
          />
          <div className="flex max-w-md flex-col gap-6">
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              We are a full-service travel and tourism agency committed to making travel simple, affordable, and
              stress-free.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href={bookHref} size="lg" icon={<Plane size={18} />}>
                Book Your Flight
              </Button>
              <Button href="/services" size="lg" variant="white" icon={<ArrowRight size={18} />}>
                Explore Services
              </Button>
            </div>
          </div>
        </div>

        {/*
          Bento grid (4 × 3 on desktop), in the order of lib/services.ts:
          [ Road Trips 2×2 ][ Vacation Packages 2×1 ]
          [ Road Trips     ][ Flights ][ Hotels    ]
          [ Car Rentals ][ Visa ][ Group & Solo Tours 2×1 ]
          Row heights are fixed per breakpoint; tile sizes come from `bento` in lib/services.ts.
        */}
        <div className="mt-12 grid auto-rows-[280px] grid-cols-1 gap-5 sm:mt-16 sm:auto-rows-[260px] sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {services.map(({ icon: Icon, ...service }) => (
            <ServiceCard key={service.title} {...service} icon={<Icon size={20} />} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
