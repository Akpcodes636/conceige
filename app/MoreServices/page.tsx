"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reveal from "@/components/ui/Reveal";
import Banner from "@/components/home/Banner";
import Journey from "@/components/home/Journey";
import MoreServicesSection from "@/components/MoreServices/MoreServicesSection";

export default function MoreServices(){
    return (
        <>
        <Header />
        <MoreServicesSection />
        <Reveal><Journey /></Reveal>
        <Reveal><Banner /></Reveal>
        <Footer />
        </>
    )
}