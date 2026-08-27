"use client";

import Footer from "@/components/Footer";
import Form from "@/components/Form/Form";
import Header from "@/components/Header";
import Reveal from "@/components/ui/Reveal";
import RequestHero from "@/components/RequestHero/RequestHero";

export default function Page(){
    return (
        <div>
            <Header />
            <Reveal><RequestHero /></Reveal>
            <Reveal><Form /></Reveal>
            <Footer />
            
        </div>
    )
}