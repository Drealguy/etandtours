import type { Metadata } from "next";
import { Rethink_Sans, DM_Sans } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { THEME_KEY } from "@/lib/theme";
import { services } from "@/lib/services";
import { brand, contact, siteUrl, social } from "@/lib/site";
import "./globals.css";

const rethinkSans = Rethink_Sans({
  variable: "--font-rethink-sans",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const description =
  "ETandTOURS (Elyon Travels & Tours) is a full-service travel agency in Lekki Phase 1, Lagos: flight bookings, hotel reservations, car rentals, visa assistance, group and solo tours, road trips to Cotonou and Accra, and vacation packages to Dubai, Egypt and Qatar.";

const title = `${brand.name} | Boutique Travel Agency in Lagos, Nigeria`;

// Share-preview images (WhatsApp, Facebook, X, LinkedIn) come from app/opengraph-image.jpg and twitter-image.jpg.
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${brand.name}`,
  },
  description,
  applicationName: brand.name,
  keywords: [
    "travel agency in Lagos",
    "travel agency Lekki",
    "travel agency in Nigeria",
    "West Africa road trips",
    "Lagos to Cotonou trip",
    "Lagos to Accra trip",
    "group tours from Lagos",
    "Dubai vacation package",
    "Egypt vacation package",
    "Qatar vacation package",
    "visa assistance Nigeria",
    "flight booking Nigeria",
    "hotel reservations Lagos",
    "car rental Lagos",
    "ETandTOURS",
    "Elyon Travels & Tours",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "/",
    siteName: brand.name,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: true, email: true, address: true },
};

// Structured data so Google understands the business (name, contact, address, services).
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: brand.name,
  alternateName: ["ET and Tours", "Elyon Travels and Tours", "ETandTOUR"],
  legalName: brand.legalName,
  url: siteUrl,
  logo: `${siteUrl}/brand/etandtour-logo-original.png`,
  image: `${siteUrl}/opengraph-image.jpg`,
  description,
  telephone: contact.phone,
  ...(contact.email && { email: contact.email }),
  foundingDate: String(brand.founded),
  address: {
    "@type": "PostalAddress",
    streetAddress: "Lekki Phase 1",
    addressLocality: "Lekki",
    addressRegion: "Lagos",
    addressCountry: "NG",
  },
  areaServed: "NG",
  sameAs: [social.instagramHref],
  makesOffer: services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title } })),
};

// Lets search engines show the site name correctly.
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: brand.name,
  alternateName: brand.legalName,
  url: siteUrl,
};

const themeScript = `try{if(localStorage.getItem(${JSON.stringify(THEME_KEY)})==="dark")document.documentElement.classList.add("dark")}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${rethinkSans.variable} ${dmSans.variable} h-full antialiased`}
      // The theme script below may add `dark` before React hydrates.
      suppressHydrationWarning
    >
      <head>
        {/* Apply the saved light/dark choice before first paint (no flash). Light is the default. */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, websiteJsonLd]) }} />
        <Navbar />
        <SmoothScroll>
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
