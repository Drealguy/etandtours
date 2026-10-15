// Real customer reviews only: never invent them. Copy each one word for word from the customer
// (WhatsApp, Instagram, Google reviews) and get their OK to show their name.
// While this list is empty the Testimonials section is hidden on the live site.
export type Testimonial = {
  quote: string;
  name: string;
  // e.g. "Lagos to Accra road trip, 2025". Optional.
  trip?: string;
  // 1–5 stars, only if the customer gave a rating. Optional.
  rating?: number;
};

// TODO: owner to send real customer reviews.
export const testimonials: Testimonial[] = [];
