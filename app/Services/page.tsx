import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reveal from "@/components/ui/Reveal";
import Banner from "@/components/home/Banner";
import Faq from "@/components/home/Faq";
import Journey from "@/components/home/Journey";
import HeroService from "@/components/Services/HeroService";
import ServiceGrid from "@/components/Services/ServiceGrid";
import ServiceSign from "@/components/Services/ServiceSign";
import ServiceSupport from "@/components/Services/ServiceSupport";
import { buildPageMetadata } from "@/utils/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Services",
  description:
    "Non-medical senior support services in Dublin — companionship, daily living assistance, and advocacy from Cairde Concierge's one-on-one care team.",
  path: "/Services",
});

export default function Page() {
  return (
    <>
      <Header />
      <Reveal><HeroService /></Reveal>
      <ServiceGrid />
      <Reveal><ServiceSign /></Reveal>
      <Reveal><ServiceSupport /></Reveal>
      <Reveal><Journey /></Reveal>
      <Reveal><Faq /></Reveal>
      <Reveal><Banner /></Reveal>
      <Footer />
    </>
  );
}
