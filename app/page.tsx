import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reveal from "@/components/ui/Reveal";
import Banner from "@/components/home/Banner";
import Faq from "@/components/home/Faq";
import Hero from "@/components/home/Hero";
import Journey from "@/components/home/Journey";
import Offer from "@/components/home/Offer";
import Package from "@/components/home/Package";
import Process from "@/components/home/Process";
import Sign from "@/components/home/Sign";

export default function Home() {
  return (
    <>
      <Header />
      <Reveal>
        <Hero />
      </Reveal>
      <Reveal>
        <Sign />
      </Reveal>
      <Reveal>
        <Process />
      </Reveal>
      {/* <Reveal> */}
        <Offer />
      {/* </Reveal> */}
      <Reveal>
        <Package />
      </Reveal>
      <Reveal>
        <Journey />
      </Reveal>
      <Reveal>
        <Faq />
      </Reveal>
      <Reveal>
        <Banner />
      </Reveal>
      <Footer />
    </>
  );
}
