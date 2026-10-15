import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container, Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import { destinations, type Destination } from "@/lib/destinations";
import { brand, whatsappHref } from "@/lib/site";

/** Photo card that opens a WhatsApp chat about that destination. */
function DestinationCard({
  city,
  country,
  kind,
  image,
  imageAlt,
  imagePosition,
  wide,
  className,
}: Destination & { wide: boolean; className?: string }) {
  return (
    <a
      href={whatsappHref(`Hello ${brand.name}, I'd like to know more about your ${kind.toLowerCase()} to ${city}, ${country}.`)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative isolate flex h-[320px] flex-col justify-between overflow-hidden rounded-3xl bg-ink p-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:h-[360px] sm:p-6",
        wide ? "lg:col-span-3" : "lg:col-span-2",
        className,
      )}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes={wide ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
        style={imagePosition ? { objectPosition: imagePosition } : undefined}
        className="-z-20 object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/85 via-ink/15 to-ink/10" />

      <span className="self-start rounded-full bg-brand px-3 py-1.5 text-xs font-semibold text-on-brand">{kind}</span>

      <div className="flex items-end justify-between gap-3 text-white">
        <div>
          <h3 className="text-2xl font-bold sm:text-3xl">{city}</h3>
          <p className="mt-1 text-[15px] text-white/80">{country}</p>
        </div>
        <span
          aria-hidden
          className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-ink transition-colors duration-300 group-hover:bg-brand group-hover:text-on-brand"
        >
          <ArrowUpRight size={18} />
        </span>
      </div>
    </a>
  );
}

export function Destinations() {
  return (
    <Section id="destinations">
      <Container>
        <SectionHeading
          title="Popular Destinations"
          description="Group road trips from Lagos to Cotonou and Accra, and vacation packages to Dubai, Egypt, and Qatar."
        />

        {/* Desktop: two wide road-trip cards, then three vacation cards (6-column grid). */}
        <div className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
          {destinations.map((d, i) => (
            <DestinationCard
              key={d.city}
              {...d}
              wide={d.kind === "Road trip from Lagos"}
              // Odd count: the last card fills the row in the 2-column (tablet) layout.
              className={i === destinations.length - 1 && destinations.length % 2 === 1 ? "sm:col-span-2" : undefined}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
