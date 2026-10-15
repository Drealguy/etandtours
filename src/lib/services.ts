import { Bus, Car, Compass, FileCheck, Hotel, PlaneTakeoff, TreePalm, type LucideIcon } from "lucide-react";

// All of ETandTOURS's services, from the owner's two texts (prompts 2 and 3, 2026-10-15).
// TODO: owner to supply prices and their own photos (current photos are placeholders).
export type Service = {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  prices?: { label: string; price: string }[];
  pricesTitle?: string;
  // Focus point for cropping the photo (CSS object-position), e.g. "center 25%". Defaults to center.
  imagePosition?: string;
  // Bento grid tile size: feature = 2×2, wide = 2×1, tile = 1×1.
  bento: "feature" | "wide" | "tile";
};

// Order = bento order (see Services.tsx): feature, wide, then four tiles, then wide.
export const services: Service[] = [
  {
    title: "West African Road Trips",
    description:
      "Group tours departing from Lagos to popular regional destinations like Cotonou, Benin Republic and Accra, Ghana. We handle all cross-border logistics, translation assistance, accommodation, and guided sightseeing.",
    image: "/images/service-road-trips.jpg",
    imagePosition: "30% center",
    icon: Bus,
    bento: "feature",
  },
  {
    title: "International Vacation Packages",
    description: "Flight, hotel, and tour bundles to destinations such as Dubai, Egypt, and Qatar.",
    image: "/images/service-vacation.jpg",
    imagePosition: "center 60%",
    icon: TreePalm,
    bento: "wide",
  },
  {
    title: "Flight Bookings",
    description: "Local & international at the best rates.",
    image: "/images/service-international-flights.jpg",
    imagePosition: "center 22%",
    icon: PlaneTakeoff,
    bento: "tile",
  },
  {
    title: "Hotel Reservations",
    description: "Verified & comfortable stays.",
    image: "/images/service-hotel.jpg",
    icon: Hotel,
    bento: "tile",
  },
  {
    title: "Car Rentals",
    description: "Smooth mobility wherever you go.",
    image: "/images/service-car-rentals.jpg",
    icon: Car,
    bento: "tile",
  },
  {
    title: "Visa Assistance",
    description:
      "From consultation to application. Individual consultations help first-time travellers navigate visa documentation and flight itineraries.",
    image: "/images/service-visa.jpg",
    icon: FileCheck,
    bento: "tile",
  },
  {
    title: "Group & Solo Tours",
    description: "Customized to fit your style.",
    image: "/images/service-tours.jpg",
    imagePosition: "center 55%",
    icon: Compass,
    bento: "wide",
  },
];
