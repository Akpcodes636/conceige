"use client";

import { Services } from "@/utils/contents/HomePage.content";
import ServiceGridCard from "../ui/ServiceGridCard";
import Reveal from "../ui/Reveal";

export default function ServiceGrid() {
  return (
    <section>
      <div className="py-[100px]">
        <div className="container mx-auto">
          <h1 className="w-full max-w-full sm:max-w-full md:max-w-[974px] lg:max-w-[974px] mx-auto text-[#1C2A38] leading-[120%] font-poppins font-semibold text-[24px] md:text-[28px] text-left sm:text-center md:text-center lg:text-center lg:text-[39px] mb-[16px]">
            Everyday Support, Personalised to You
          </h1>
          <p className="w-full max-w-[342px] sm:max-w-[600px] md:max-w-[974px] lg:max-w-[974px] mx-auto text-[#43586C] font-body text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[100%] text-center mb-[36px] md:mb-[45px]">
            Then introduce the three main service areas.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {Services.map((service, index) => (
              <Reveal key={service.id} delay={Math.min(index, 5) * 80}>
                <ServiceGridCard {...service} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
