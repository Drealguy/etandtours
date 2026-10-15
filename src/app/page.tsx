import { PromoPopup } from "@/components/layout/PromoPopup";
import { AirlinePartners } from "@/components/sections/AirlinePartners";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Destinations } from "@/components/sections/Destinations";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { ServicesMarquee } from "@/components/sections/ServicesMarquee";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { faqs } from "@/lib/faqs";

// FAQ structured data so search engines can read the questions and answers on the home page.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function Home() {
  return (
    <main className="flex-1">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Hero />
      <AirlinePartners />
      <Services />
      <Destinations />
      <WhyChooseUs />
      <ServicesMarquee />
      <Testimonials />
      <Faq />
      <CtaBanner />
      <PromoPopup />
    </main>
  );
}
