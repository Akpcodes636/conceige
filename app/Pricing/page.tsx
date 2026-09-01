import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reveal from "@/components/ui/Reveal";
import Banner from "@/components/home/Banner";
import HeroPricing from "@/components/Pricing/HeroPricing";
import PricingCard from "@/components/Pricing/PricingCard";
import ProjectPricing from "@/components/Pricing/ProjectPricing";
import { buildPageMetadata } from "@/utils/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Pricing",
  description:
    "Simple, transparent pricing for Cairde Concierge's senior support packages in Dublin — find the plan that fits your family's needs.",
  path: "/Pricing",
});

export default function Page() {
  return (
    <>
      <Header />
      <Reveal><HeroPricing /></Reveal>
      <PricingCard />
      <ProjectPricing />
      <Reveal><Banner /></Reveal>
      <Footer />
    </>
  );
}
