// Single source for site-wide links and labels used by the navbar, footer and CTAs.
import { services } from "@/lib/services";

// Public site URL for SEO/share previews. Set NEXT_PUBLIC_SITE_URL once the custom domain is live;
// on Vercel the production URL is picked up automatically.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export const bookHref = "/#book";

// ETandTOURS is the trading name; Elyon Travels & Tours is the official name.
export const brand = {
  name: "ETandTOURS",
  legalName: "Elyon Travels & Tours",
  founded: 2010,
};

export const contact = {
  phone: "+234 802 304 8843",
  phoneHref: "tel:+2348023048843",
  whatsapp: "2348023048843", // international format, no "+" (wa.me links)
  // TODO: owner to supply an email address. Email links are hidden while this is empty.
  email: "",
  emailHref: "",
  address: "Lekki Phase 1, Lekki, Lagos, Nigeria",
  mapEmbed: "https://maps.google.com/maps?q=Lekki%20Phase%201%2C%20Lekki%2C%20Lagos%2C%20Nigeria&z=14&output=embed",
  mapLink: "https://www.google.com/maps/search/?api=1&query=Lekki%20Phase%201%2C%20Lekki%2C%20Lagos%2C%20Nigeria",
};

// The original Instagram account was disabled; @etandtour is the active one.
export const social = {
  instagram: "@etandtour",
  instagramHref: "https://www.instagram.com/etandtour/",
};

/** WhatsApp chat link to ETandTOURS, optionally with a pre-filled message. All enquiries/bookings go here. */
export function whatsappHref(message?: string) {
  return `https://wa.me/${contact.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ""}`;
}

export const serviceLinks = services.map((s) => ({ label: s.title, href: "/services" }));
