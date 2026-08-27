"use client";

import FounderAbout from "@/components/About/FounderAbout";
import HeroAbout from "@/components/About/HeroAbout";
import SupportAbout from "@/components/About/SupportAbout";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reveal from "@/components/ui/Reveal";
import Banner from "@/components/home/Banner";
import Faq from "@/components/home/Faq";
import Journey from "@/components/home/Journey";



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