import type { Metadata } from "next";
import FounderAbout from "@/components/About/FounderAbout";
import HeroAbout from "@/components/About/HeroAbout";
import SupportAbout from "@/components/About/SupportAbout";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reveal from "@/components/ui/Reveal";
import Banner from "@/components/home/Banner";
import Faq from "@/components/home/Faq";
import Journey from "@/components/home/Journey";
import { buildPageMetadata } from "@/utils/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About Us",
  description:
    "Meet the team behind Cairde Concierge — dedicated to giving Dublin seniors consistent, one-on-one companionship and support so they can stay independent at home.",
  path: "/Aboutus",
});

export default function Page(){
    return (
        <>
        <Header />
        <Reveal><HeroAbout /></Reveal>
        <Reveal><SupportAbout /></Reveal>
        <Reveal><FounderAbout /></Reveal>
        <Reveal><Journey /></Reveal>
        <Reveal><Faq /></Reveal>
        <Reveal><Banner /></Reveal>
        <Footer />
        </>
    )
}