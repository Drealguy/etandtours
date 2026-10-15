import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { LegalContent, type LegalSection } from "@/components/sections/LegalContent";
import { PageHero } from "@/components/sections/PageHero";
import { pageMetadata } from "@/lib/seo";
import { brand, contact, social } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "Terms & Conditions",
  `The terms that apply when you use the ${brand.name} website or book flights, hotels, car rentals, visas, tours and road trips with ${brand.legalName}.`,
  "/terms",
);

// TODO: owner to confirm payment, deposit and cancellation rules, and have this reviewed by a lawyer before launch.
const sections: LegalSection[] = [
  {
    id: "about",
    title: "About these terms",
    body: (
      <p>
        These terms apply when you use this website or book a service with <strong>{brand.legalName}</strong>, trading as{" "}
        {brand.name}, of {contact.address}. By making a booking with us, you agree to them. Please read them together
        with our <Link href="/privacy">Privacy Policy</Link>.
      </p>
    ),
  },
  {
    id: "our-role",
    title: "Our role",
    body: (
      <>
        <p>
          We arrange flights, hotel reservations, car rentals, visa applications, group and solo tours, road trips and
          vacation packages. Most of these services are provided by other companies, such as airlines, hotels, car rental
          firms and local tour operators.
        </p>
        <p>
          When we book a service for you, that company&apos;s own terms also apply, including its rules on baggage,
          check-in, changes and refunds. We will tell you about any important conditions before you pay.
        </p>
      </>
    ),
  },
  {
    id: "prices",
    title: "Quotes and prices",
    body: (
      <>
        <ul>
          <li>Prices on this website, including flight search results, are a guide. Your price is only fixed once we confirm it with you.</li>
          <li>
            Flight prices shown in naira may be converted from another currency using that day&apos;s exchange rate, so
            the final amount can differ.
          </li>
          <li>Airlines, hotels and other providers can change their prices until your booking is paid and confirmed.</li>
        </ul>
      </>
    ),
  },
  {
    id: "bookings",
    title: "Bookings and payment",
    body: (
      <>
        <p>
          A booking is confirmed only when we have received your payment as agreed and confirmed the booking to you in
          writing, for example on WhatsApp. We will tell you the amount, the payment method and any deadline before you
          pay.
        </p>
        <p>
          Please check your names, dates and travel details as soon as you receive them. Names must match your passport
          exactly, and some providers charge to correct mistakes.
        </p>
      </>
    ),
  },
  {
    id: "changes-cancellations",
    title: "Changes and cancellations",
    body: (
      <>
        <p>
          If you want to change or cancel a booking, contact us as soon as possible. Changes and refunds depend on the
          rules of the airline, hotel or other provider, and they may charge fees. Some fares and rates cannot be changed
          or refunded.
        </p>
        <p>
          If a provider changes or cancels your booking, we will tell you as soon as we know and help you with the options
          they offer.
        </p>
      </>
    ),
  },
  {
    id: "visas",
    title: "Visa assistance",
    body: (
      <ul>
        <li>We help you prepare and submit your visa application, from consultation to application.</li>
        <li>
          The decision to grant a visa is made only by the embassy or immigration authority. We cannot guarantee that a
          visa will be granted, or how long it will take.
        </li>
        <li>Embassy and visa fees are set by the issuing authority and are usually not refundable, even if a visa is refused.</li>
        <li>You are responsible for making sure the documents and information you give us are true and complete.</li>
      </ul>
    ),
  },
  {
    id: "tours",
    title: "Group tours and road trips",
    body: (
      <>
        <p>
          On our road trips from Lagos to destinations such as Cotonou and Accra, we handle cross-border logistics,
          translation assistance, accommodation and guided sightseeing as described in your trip details.
        </p>
        <p>
          Itineraries may change because of border procedures, weather, road conditions or safety. If that happens we will
          offer a reasonable alternative. Please follow the instructions of your guide, and respect the laws and customs
          of the countries you visit.
        </p>
      </>
    ),
  },
  {
    id: "your-responsibilities",
    title: "Your responsibilities",
    body: (
      <ul>
        <li>Carry a valid passport and the visas, permits and travel documents each country requires.</li>
        <li>Meet any health or vaccination requirements for your destination.</li>
        <li>Arrive on time for check-in, departures and tour pick-ups.</li>
        <li>Give us accurate information when you book.</li>
      </ul>
    ),
  },
  {
    id: "insurance",
    title: "Travel insurance",
    body: (
      <p>
        We strongly recommend that you have travel insurance that covers cancellation, medical costs and lost baggage for
        your whole trip.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Our responsibility",
    body: (
      <>
        <p>
          We will arrange your booking with reasonable care and skill. We are not responsible for the acts or failures of
          airlines, hotels and other independent providers, or for delays and losses caused by events outside our control,
          such as bad weather, strikes, border closures or government action.
        </p>
        <p>Nothing in these terms limits any rights you have under Nigerian consumer protection law.</p>
      </>
    ),
  },
  {
    id: "website",
    title: "Using this website",
    body: (
      <p>
        We try to keep the information on this website accurate and up to date, but it may change without notice. Links to
        other websites are for your convenience, and we are not responsible for their content. The text, photos, logo and
        design of this website belong to {brand.legalName} or are used with permission, and may not be copied without our
        consent.
      </p>
    ),
  },
  {
    id: "law",
    title: "Governing law",
    body: (
      <p>
        These terms are governed by the laws of the Federal Republic of Nigeria. Any dispute will be handled by the courts
        of Lagos State, although we will always try to resolve a complaint with you directly first.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    body: (
      <p>
        Questions about these terms? Call or WhatsApp <a href={contact.phoneHref}>{contact.phone}</a>, message{" "}
        <a href={social.instagramHref} target="_blank" rel="noopener noreferrer">
          {social.instagram}
        </a>{" "}
        on Instagram, or visit us at {contact.address}.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <main className="flex-1">
      <PageHero
        title="Terms & Conditions"
        label="Booking with us"
        description="The terms that apply when you use our website or book a trip with us."
        image="/images/services-hero-plane.jpg"
        imageAlt="White airplane in flight"
      />
      <LegalContent
        updated="15 October 2026"
        intro={
          <p>
            Thank you for choosing {brand.legalName}. These terms explain how bookings with us work, what we do for you, and
            what we ask of you. If anything is unclear, please ask us before you book.
          </p>
        }
        sections={sections}
      />
      <CtaBanner />
    </main>
  );
}
