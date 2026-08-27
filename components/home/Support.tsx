"use client";

import SupportCard from "../ui/SupportCard";
import Reveal from "../ui/Reveal";

export default function Support() {
  return (
    <section className="bg-[#E6ECE0]">
      <div className="py-[82px]">
        <div className="container mx-auto">
          <h1 className="font-medium text-[39px] leading-[120%] text-[#1C2A38] text-center mb-[32px]">
            Trusted support, every step of the way
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px]">
            <Reveal delay={0}>
              <SupportCard
                icon="/images/solar_heart-bold.png"
                title="One consistent companion"
                description="Never a rotating roster of unfamiliar staff."
                alt="Heart icon"
              />
            </Reveal>
            <Reveal delay={80}>
              <SupportCard
                icon="/images/tabler_file-filled.png"
                title="Vetted & insured"
                description="National Vetting Bureau compliant, fully insured."
                alt="Vetted and insured"
              />
            </Reveal>
            <Reveal delay={160}>
              <SupportCard
                icon="/images/majesticons_percent.png"
                title="Up to 40% tax relief"
                description="Available on every package under Revenue IT 47."
                alt="Tax relief"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
