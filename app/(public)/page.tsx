
import Contact from "@/components/landing/contact";
import EvenlyFaq from "@/components/landing/evenly-faq";
import EvenlyHighlights from "@/components/landing/evenly-highlights";
import EvenlyWorkflow from "@/components/landing/everything-you-will-need";
import Hero from "@/components/landing/hero";
import WhyChoose from "@/components/landing/why-choose-evenly";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <EvenlyWorkflow/>
      <EvenlyHighlights/>
      <EvenlyFaq/>
      <Contact/>
    </>

  );
}