// Destinations named in the owner's "about" text (prompt 2, 2026-10-15).
// Photos are Unsplash placeholders stored in /public/images. TODO: swap in the owner's own trip photos.
export type Destination = {
  city: string;
  country: string;
  kind: "Road trip from Lagos" | "Vacation package";
  image: string;
  imageAlt: string;
  // Focus point for cropping the photo (CSS object-position). Defaults to center.
  imagePosition?: string;
};

export const destinations: Destination[] = [
  {
    city: "Cotonou",
    country: "Benin Republic",
    kind: "Road trip from Lagos",
    image: "/images/destination-cotonou.jpg",
    imageAlt: "Fishing boat on a sandy West African beach",
    imagePosition: "center 85%",
  },
  {
    city: "Accra",
    country: "Ghana",
    kind: "Road trip from Lagos",
    image: "/images/destination-accra.jpg",
    imageAlt: "Aerial view of Accra",
  },
  {
    city: "Dubai",
    country: "United Arab Emirates",
    kind: "Vacation package",
    image: "/images/destination-dubai.jpg",
    imageAlt: "The Burj Khalifa above Downtown Dubai",
    imagePosition: "center 30%",
  },
  {
    city: "Giza",
    country: "Egypt",
    kind: "Vacation package",
    image: "/images/destination-egypt.jpg",
    imageAlt: "The pyramids of Giza with a camel caravan",
  },
  {
    city: "Doha",
    country: "Qatar",
    kind: "Vacation package",
    image: "/images/destination-qatar.jpg",
    imageAlt: "Doha skyline across the bay",
  },
];
