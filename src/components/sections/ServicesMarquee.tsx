import { Bus, Car, FileCheck, Hotel, MapPin, Plane, TreePalm, Users, type LucideIcon } from "lucide-react";
import { Marquee } from "@/components/ui/Marquee";
import { Container, Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

type Tone = "brand" | "ink" | "deep" | "light";

const tones: Record<Tone, { pill: string; icon: string }> = {
  brand: { pill: "bg-brand text-on-brand", icon: "bg-ink/10" },
  ink: { pill: "bg-ink text-white dark:ring-1 dark:ring-white/15", icon: "bg-white/15" },
  deep: { pill: "bg-brand-deep text-white", icon: "bg-white/15" },
  light: { pill: "bg-brand-light text-brand-deep", icon: "bg-brand/30" },
};

// id: only needed when a label appears twice in one row.
type Item = { label: string; icon: LucideIcon; tone: Tone; id?: string };

// Row one: services. Row two: destinations named by the owner.
const rowOne: Item[] = [
  { label: "Flight Bookings", icon: Plane, tone: "brand" },
  { label: "Hotel Reservations", icon: Hotel, tone: "light" },
  { label: "Car Rentals", icon: Car, tone: "ink" },
  { label: "Visa Assistance", icon: FileCheck, tone: "deep" },
  { label: "Group & Solo Tours", icon: Users, tone: "brand" },
  { label: "West African Road Trips", icon: Bus, tone: "light" },
  { label: "Vacation Packages", icon: TreePalm, tone: "ink" },
];

const destinations = ["Cotonou, Benin Republic", "Accra, Ghana", "Dubai", "Egypt", "Qatar"];
const rowTwoTones: Tone[] = ["ink", "brand", "light", "deep", "brand", "ink"];
// The five destinations are short, so they are listed twice to fill wide screens.
const rowTwo: Item[] = [...destinations, ...destinations].map((label, i) => ({
  label,
  icon: MapPin,
  tone: rowTwoTones[i % rowTwoTones.length],
  id: `${label}-${i}`,
}));

function Pill({ label, icon: Icon, tone }: Item) {
  const t = tones[tone];
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-3 rounded-full py-2 pr-6 pl-2 font-heading text-base font-semibold whitespace-nowrap sm:gap-4 sm:py-3 sm:pr-8 sm:pl-3 sm:text-xl",
        t.pill,
      )}
    >
      <span className={cn("flex size-10 items-center justify-center rounded-full sm:size-12", t.icon)}>
        <Icon size={20} />
      </span>
      {label}
    </span>
  );
}

export function ServicesMarquee() {
  return (
    <Section className="overflow-hidden bg-tint/70">
      <Container>
        <SectionHeading
          align="center"
          title="Where We Take You"
          description="End-to-end travel solutions for leisure, business, study, or religious travel"
        />
      </Container>

      <div className="mt-12 flex flex-col gap-4 sm:mt-16 sm:gap-5">
        <Marquee items={rowOne} getKey={(i) => i.id ?? i.label} renderItem={(i) => <Pill {...i} />} />
        <Marquee items={rowTwo} getKey={(i) => i.id ?? i.label} renderItem={(i) => <Pill {...i} />} reverse />
      </div>
    </Section>
  );
}
