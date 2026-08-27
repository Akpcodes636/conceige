"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reveal from "@/components/ui/Reveal";
import Banner from "@/components/home/Banner";
import HeroPricing from "@/components/Pricing/HeroPricing";
import PricingCard from "@/components/Pricing/PricingCard";
import ProjectPricing from "@/components/Pricing/ProjectPricing";

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
