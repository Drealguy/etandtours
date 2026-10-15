"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  FileCheck,
  Languages,
  MessageCircle,
  Route,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { Container, Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

type Reason = { title: string; description: string; icon: LucideIcon };

// Reasons are taken from the owner's two texts (prompts 2 and 3, 2026-10-15). Owner to review.
const reasons: Reason[] = [
  {
    title: "Trusted Since 2010",
    icon: ShieldCheck,
    description: "We have served over 5,000 travellers since 2010.",
  },
  {
    title: "Simple, Affordable, Stress-Free",
    icon: BadgeCheck,
    description: "We are committed to making travel simple, affordable, and stress-free.",
  },
  {
    title: "End-to-End Travel Solutions",
    icon: Route,
    description:
      "Whether you're traveling for leisure, business, study, or religious purposes, we handle your flights, hotels, car rentals, visas, and tours.",
  },
  {
    title: "Cross-Border Logistics Handled",
    icon: Languages,
    description:
      "Our road trips from Lagos to Cotonou and Accra handle all cross-border logistics, translation assistance, accommodation, and guided sightseeing.",
  },
  {
    title: "Guidance for First-Time Travellers",
    icon: FileCheck,
    description: "Individual consultations to help you navigate visa documentation and flight itineraries.",
  },
  {
    title: "Easy to Reach",
    icon: MessageCircle,
    description: "Chat with us on WhatsApp, message us on Instagram, or visit our hub in Lekki Phase 1, Lagos.",
  },
];

export function WhyChooseUs() {
  const [active, setActive] = useState(0);

  return (
    <Section id="why-us">
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading title="Why Travel With ETandTOURS" />

          <ul className="mt-12 flex flex-col gap-3 sm:mt-16">
            {reasons.map(({ title, description, icon: Icon }, i) => {
              const isActive = i === active;
              return (
                <li key={title}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-expanded={isActive}
                    className={cn(
                      "w-full rounded-2xl px-5 py-5 text-left transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:px-7",
                      isActive ? "bg-brand text-on-brand" : "bg-tint text-fg hover:bg-tint-strong",
                    )}
                  >
                    <span className="flex items-center gap-4">
                      <Icon size={22} className={cn("shrink-0", !isActive && "text-accent")} />
                      <span className="flex-1 font-heading text-lg font-semibold sm:text-xl">{title}</span>
                      <ArrowUpRight size={20} className={cn("shrink-0", !isActive && "text-muted")} />
                    </span>
                    <span
                      className={cn(
                        "grid transition-[grid-template-rows] duration-300",
                        isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                      )}
                    >
                      <span className="overflow-hidden">
                        <span className="block pt-3 pl-[38px] text-[15px] leading-relaxed text-on-brand/80 sm:text-base">
                          {description}
                        </span>
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="rounded-[2rem] bg-brand/5 p-4 sm:p-6 lg:p-8">
          <div className="relative aspect-[4/5] h-full overflow-hidden rounded-3xl sm:aspect-[4/3] lg:aspect-auto lg:min-h-[560px]">
            <Image
              src="/images/why-us-planning.jpg"
              alt="Traveller planning a trip with a map and camera"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
