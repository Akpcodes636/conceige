"use client";

import CorporateBenefits from "@/components/corporate-eldercare/CorporateBenefits";
import CorporateFamilies from "@/components/corporate-eldercare/CorporateFamilies";
import CorporateHero from "@/components/corporate-eldercare/CorporateHero";
import CorporateResponsibilities from "@/components/corporate-eldercare/CorporateResponsibilities";
import CorporateWho from "@/components/corporate-eldercare/CorporateWho";
import CorporateWhy from "@/components/corporate-eldercare/CorporateWhy";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reveal from "@/components/ui/Reveal";
import Banner from "@/components/home/Banner";
import Faq from "@/components/home/Faq";

export default function Page() {
  return (
    <>
      <Header />
      <Reveal><CorporateHero /></Reveal>
      <Reveal><CorporateResponsibilities /></Reveal>
      <CorporateBenefits />
      <Reveal><CorporateWho /></Reveal>
      <CorporateWhy />
      <CorporateFamilies />
      <Reveal><Faq /></Reveal>
      <Reveal><Banner /></Reveal>
      <Footer />
    </>
  );
}
