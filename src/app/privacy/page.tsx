import type { Metadata } from "next";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { LegalContent, type LegalSection } from "@/components/sections/LegalContent";
import { PageHero } from "@/components/sections/PageHero";
import { pageMetadata } from "@/lib/seo";
import { brand, contact, social, whatsappHref } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "Privacy Policy",
  `How ${brand.name} (${brand.legalName}) collects, uses and protects your personal information when you enquire or book a trip with us.`,
  "/privacy",
);

// TODO: owner to have this reviewed by a lawyer before launch. Written to match what the site actually does
// (WhatsApp enquiries, flight search via Duffel, Google Maps embed, theme saved in the browser, no analytics).
const sections: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: (
      <>
        <p>
          {brand.name} is the trading name of <strong>{brand.legalName}</strong>, a travel and tourism agency based in{" "}
          {contact.address}. We decide how and why your personal information is used, so we are responsible for it
          under the Nigeria Data Protection Act 2023.
        </p>
        <p>
          You can reach us on WhatsApp or by phone on <a href={contact.phoneHref}>{contact.phone}</a>, or on Instagram at{" "}
          <a href={social.instagramHref} target="_blank" rel="noopener noreferrer">
            {social.instagram}
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    body: (
      <>
        <p>We only collect what we need to plan and book your trip:</p>
        <ul>
          <li>
            <strong>Contact details</strong> you give us, such as your name, phone number and email address.
          </li>
          <li>
            <strong>Trip details</strong> such as the service you want, your destination, travel dates, number of
            travellers and any notes you send.
          </li>
          <li>
            <strong>Travel documents</strong> such as passport details, photos and supporting documents, when you ask us
            to book a flight or help with a visa application.
          </li>
          <li>
            <strong>Payment records</strong> for bookings you make with us.
          </li>
        </ul>
        <p>
          Our enquiry form does not store your answers on our website. When you press send, it opens a WhatsApp chat with
          your answers filled in, and nothing is shared until you send that message yourself.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use-it",
    title: "How we use your information",
    body: (
      <>
        <ul>
          <li>To reply to your enquiries and send you quotes.</li>
          <li>To book flights, hotels, car rentals, tours and road trips on your behalf.</li>
          <li>To prepare and submit visa applications you ask us to help with.</li>
          <li>To keep you updated about your booking before, during and after your trip.</li>
          <li>To keep accounting records and meet our legal obligations.</li>
        </ul>
        <p>
          We rely on your consent, on the need to carry out the booking you asked for, on our legal obligations, and on our
          legitimate interest in running our business. We will not send you marketing messages unless you agree to them.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Who we share it with",
    body: (
      <>
        <p>We never sell your personal information. We share it only when it is needed for your trip or to run this website:</p>
        <ul>
          <li>Airlines, hotels, car rental companies and tour operators that provide your booking.</li>
          <li>Embassies, consulates and visa application centres, when you use our visa assistance.</li>
          <li>WhatsApp (Meta), when you message us there.</li>
          <li>
            Duffel, our flight data provider, receives the route, dates and number of travellers you search for. It does
            not receive your name or contact details from a search.
          </li>
          <li>Google, which shows the map on our contact page.</li>
          <li>Our website hosting provider.</li>
        </ul>
        <p>
          Some of these organisations are outside Nigeria. When your trip needs us to share your details abroad, we only
          share what the booking requires.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "How long we keep it",
    body: (
      <p>
        We keep your information for as long as we need it to arrange your trip and look after you afterwards, and for as
        long as the law requires us to keep business and accounting records. After that we delete it or make it anonymous.
      </p>
    ),
  },
  {
    id: "security",
    title: "Keeping it safe",
    body: (
      <p>
        We take reasonable steps to protect your information from loss, misuse and unauthorised access. Only the people who
        need your details to handle your booking can see them. No method of sending information over the internet is
        completely secure, so please only send travel documents through the channels we agree with you.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights",
    body: (
      <>
        <p>Under the Nigeria Data Protection Act 2023 you can ask us to:</p>
        <ul>
          <li>Tell you what personal information we hold about you and give you a copy.</li>
          <li>Correct information that is wrong or incomplete.</li>
          <li>Delete your information when we no longer need it.</li>
          <li>Stop or limit how we use it, or withdraw a consent you gave.</li>
        </ul>
        <p>
          To make a request, <a href={whatsappHref("Hello, I have a request about my personal information.")} target="_blank" rel="noopener noreferrer">message us on WhatsApp</a>.
          If you are unhappy with how we handle your information, you can also complain to the Nigeria Data Protection
          Commission.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and browser storage",
    body: (
      <p>
        We do not use advertising or tracking cookies, and we do not run analytics on this website. Your browser saves
        your light or dark mode choice, and whether you have closed a promotion, so the site remembers them. This stays on
        your device. The Google map on our contact page may set its own cookies, as described in Google&apos;s privacy
        policy.
      </p>
    ),
  },
  {
    id: "children",
    title: "Children",
    body: (
      <p>
        When we book travel for children, we collect their details from a parent or guardian, who is responsible for
        giving us that information.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <p>
        We may update this policy from time to time. The date at the top of this page shows when it last changed.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    body: (
      <p>
        Questions about this policy? Call or WhatsApp <a href={contact.phoneHref}>{contact.phone}</a>, message{" "}
        <a href={social.instagramHref} target="_blank" rel="noopener noreferrer">
          {social.instagram}
        </a>{" "}
        on Instagram, or visit us at {contact.address}.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <main className="flex-1">
      <PageHero
        title="Privacy Policy"
        label="Your information"
        description="How we collect, use and protect your personal information when you enquire or book a trip with us."
        image="/images/contact-hero-cabin.jpg"
        imageAlt="Passengers seated inside an airplane cabin"
      />
      <LegalContent
        updated="15 October 2026"
        intro={
          <p>
            Your privacy matters to us. This policy explains what personal information {brand.legalName} ({brand.name})
            collects, why we need it, who we share it with, and the rights you have over it.
          </p>
        }
        sections={sections}
      />
      <CtaBanner />
    </main>
  );
}
