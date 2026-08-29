"use client";

import { STEPS } from "@/utils/contents/HomePage.content";
import Reveal from "../ui/Reveal";

export default function Process() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="py-[10px] md:py-[21px] lg:py-[21px]">
          <h1 className="font-poppins text-[24px] md:text-[30px] lg:text-[39px] leading-[120%] text-[#1C2A38] text-center font-semibold mb-[8px] md:mb-[16px]">
            Our process
          </h1>
          <p className="text-[#43586C] font-body text-[16px] md:text-[18px] lg:text-[20px] leading-[100%] text-center ">
            Simple Steps to Peace of Mind
          </p>
          <div className="w-full">
            <ol className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-y-10 lg:grid-cols-4 lg:gap-y-0">
              {STEPS.map((step, i) => (
                <Reveal key={step.title} delay={i * 90} className="h-full">
                  <li className="h-full px-0 py-6 md:px-6 md:py-8 lg:px-8">
                    <p
                      aria-hidden="true"
                      className="font-body text-[24px] font-semibold leading-[100%] text-[#1A1A1A] md:text-[30px] lg:text-[39px]"
                    >
                      {i + 1}
                    </p>

                    <div className="mt-4 h-[5px] w-[76px] rounded-[99px] bg-[#FFAA02]" />

                    <h3 className="mt-5 max-w-full text-[18px] font-semibold leading-[130%] text-[#1C2A38] md:text-[20px] lg:text-[24px]">
                      {step.title}
                    </h3>

                    <p className="mt-4 max-w-full font-body text-[16px] font-normal leading-[160%] text-[#1A1A1A]">
                      {step.body}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
