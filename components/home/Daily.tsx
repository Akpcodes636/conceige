"use client";

import SupportCard from "../ui/SupportCard";
import Reveal from "../ui/Reveal";

export default function Daily() {
  return (
    <section className="bg-[#E6ECE0]">
      <div className="py-[80px]">
        <div className="container mx-auto">
          <h1 className="text-[39px] font-medium text-center mb-[16px]">
            Support built around daily life
          </h1>
          <p className="font-normal leading-[100%] text-[#43586C] text-center">
            From weekly errands to hospital chaperoning and Fair Deal Scheme
            paperwork.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px]">
          <Reveal delay={0}>
            <SupportCard
              icon="/images/solar_heart-bold.png"
              title="Lifestyle assistance"
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
              title=""
              description="Available on every package under Revenue IT 47."
              alt=""
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
