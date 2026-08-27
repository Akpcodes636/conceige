"use client";

import { services } from "@/utils/contents/HomePage.content";
import { ServiceCard } from "../ui/ServiceCard";
import Reveal from "../ui/Reveal";

export default function Offer() {
  return (
    <section className="bg-[#121D25]">
      <div className="container mx-auto">
        <div className="py-[80px] md:py-[90px] lg:py-[110px]">
          <p className="text-[16px] font-semibold leading-[100%] text-[#D2A449] text-center mb-[8px] font-body">
            What we offer
          </p>
          <h2 className="font-body text-[24px] md:text-[29px] lg:text-[39px] mb-[16px] text-[#FFFFFF] leading-[120%] text-center">
            Everyday Support, Personalised to You
          </h2>
          <p className="text-[16px] leading-[100%] text-[#FFFFFFB2] text-center max-w-full md:max-w-full lg:max-w-[999px] mx-auto mb-[43px]">
            Unlike large, traditional care agencies that send a rotating door of
            different staff members, we provide a consistent, one-on-one
            partnership. We do not provide medical or hands-on personal care.
            Instead, we act as a trusted personal assistant, advocate, and
            companion, helping active seniors manage their daily lives and enjoy
            their social schedules.
          </p>

          <div className="mx-auto grid max-w-[1075px] grid-cols-1 justify-items-center gap-[16px]  sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.id} delay={Math.min(index, 5) * 80}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
