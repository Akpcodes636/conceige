"use client";

import { STEPS } from "@/utils/contents/HomePage.content";
import Reveal from "../ui/Reveal";

export default function Process() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="py-[70px] md:py-[82px] lg:py-[92px]">
          <h1 className="font-poppins text-[24px] md:text-[30px] lg:text-[39px] leading-[120%] text-[#1C2A38] text-center font-semibold mb-[8px] md:mb-[16px]">
            Our process
          </h1>
          <p className="text-[#43586C] font-body text-[16px] md:text-[18px] lg:text-[20px] leading-[100%] text-center ">
            Simple Steps to Peace of Mind
          </p>
          <div className="w-full">
            <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
              {STEPS.map((step, i) => (
                <Reveal key={step.title} delay={i * 90} className="h-full">
                  <li className="px-0 py-6 md:px-6 md:py-8 lg:px-8 h-full transition-transform duration-300 hover:-translate-y-[2px] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                    <p
                      aria-hidden="true"
                      className="font-body text-[24px] font-semibold leading-[100%] text-[#1A1A1A] md:text-[30px] lg:text-[39px]"
                    >
                      {i + 1}
                    </p>

                     <div className="mt-3 h-[5px] w-[76px] rounded-[99px] bg-[#FFAA02] transition-all duration-500 ease-out" />

                    <h3 className="mt-3 text-[18px] font-semibold leading-[120%] text-[#1C2A38] md:text-[20px] lg:text-[24px] ">
                      {step.title}
                    </h3>

                    <p className="mt-2 font-body text-[16px] font-normal leading-[100%] text-[#1A1A1A] md:text-[16px] lg:text-[16px]">
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
