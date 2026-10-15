import { contact, social } from "@/lib/site";

// Used by the FAQ section and the FAQPage structured data on the home page.
// Answers are taken from the owner's two texts (prompts 2 and 3, 2026-10-15). Owner to review.
export const faqs: { question: string; answer: string }[] = [
  {
    question: "What services do you offer?",
    answer:
      "Flight bookings (local and international), hotel reservations, car rentals, visa assistance, group and solo tours, curated group road trips across West Africa, and international vacation packages.",
  },
  {
    question: "Can you help with business, study or religious travel?",
    answer:
      "Yes. Whether you're traveling for leisure, business, study, or religious purposes, we provide end-to-end travel solutions.",
  },
  {
    question: "Is ETandTOURS the same as Elyon Travels & Tours?",
    answer: "Yes. ETandTOURS is officially known as Elyon Travels & Tours.",
  },
  {
    question: "Where do your West African road trips go?",
    answer:
      "Our group tours depart from Lagos to popular regional destinations like Cotonou, Benin Republic and Accra, Ghana.",
  },
  {
    question: "What is included in a road trip package?",
    answer:
      "Our packages typically handle all cross-border logistics, translation assistance, accommodation, and guided sightseeing.",
  },
  {
    question: "Which international destinations do you offer?",
    answer: "We offer flight, hotel, and tour bundles to destinations such as Dubai, Egypt, and Qatar.",
  },
  {
    question: "I am a first-time traveller. Can you help with my visa?",
    answer:
      "Yes. Our visa assistance runs from consultation to application, and we offer individual consultations to help first-time travellers navigate visa documentation and flight itineraries.",
  },
  {
    question: "How do I book a trip?",
    answer: `Chat with us on WhatsApp or call ${contact.phone}, message us on Instagram at ${social.instagram}, or visit our hub in Lekki Phase 1, Lekki, Lagos.`,
  },
  {
    question: "Which Instagram account is yours?",
    answer: `${social.instagram}. Our original account was disabled, so please make sure you are messaging our active handle.`,
  },
];
