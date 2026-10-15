import { Quote, Star } from "lucide-react";
import { Container, Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import { brand } from "@/lib/site";
import { testimonials, type Testimonial } from "@/lib/testimonials";

// Shown only in development (npm run dev) while there are no real reviews, so the layout can be judged.
// They are visibly labelled as samples and never reach the live site.
const samples: Testimonial[] = Array.from({ length: 3 }, () => ({
  quote: "Your customer's review goes here, word for word.",
  name: "Customer name",
  trip: "Trip they took",
  rating: 5,
}));

function TestimonialCard({ quote, name, trip, rating, sample }: Testimonial & { sample?: boolean }) {
  return (
    <figure className={cn("flex flex-col rounded-3xl bg-tint p-6 sm:p-8", sample && "border-2 border-dashed border-line")}>
      <div className="flex items-center justify-between gap-3">
        <span aria-hidden className="flex size-11 items-center justify-center rounded-full bg-brand text-on-brand">
          <Quote size={20} />
        </span>
        {sample && (
          <span className="rounded-full bg-surface px-3 py-1 text-xs font-semibold text-muted ring-1 ring-line">
            Sample (dev only)
          </span>
        )}
      </div>

      {rating ? (
        <div className="mt-6 flex gap-1 text-accent" aria-label={`${rating} out of 5 stars`}>
          {Array.from({ length: 5 }, (_, i) => (
            <Star key={i} size={18} className={i < rating ? "fill-current" : "opacity-30"} />
          ))}
        </div>
      ) : null}

      <blockquote className="mt-4 flex-1 text-base leading-relaxed text-fg sm:text-lg">&ldquo;{quote}&rdquo;</blockquote>

      <figcaption className="mt-6 border-t border-line pt-5">
        <span className="block font-heading font-semibold text-fg">{name}</span>
        {trip && <span className="mt-0.5 block text-sm text-muted">{trip}</span>}
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  const isSample = testimonials.length === 0;
  if (isSample && process.env.NODE_ENV !== "development") return null;
  const items = isSample ? samples : testimonials;

  return (
    <Section id="testimonials">
      <Container>
        <SectionHeading align="center" title="What Our Travellers Say" description={`Reviews from ${brand.name} customers.`} />
        <div className="mt-12 grid gap-5 sm:mt-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {items.map((t, i) => (
            <TestimonialCard key={i} {...t} sample={isSample} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
