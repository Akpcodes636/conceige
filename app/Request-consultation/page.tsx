import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Form from "@/components/Form/Form";
import Header from "@/components/Header";
import Reveal from "@/components/ui/Reveal";
import RequestHero from "@/components/RequestHero/RequestHero";
import { buildPageMetadata } from "@/utils/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Request a Consultation",
  description:
    "Book a free, no-obligation consultation with Cairde Concierge and find the right senior support package for your loved one in Dublin.",
  path: "/Request-consultation",
});

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