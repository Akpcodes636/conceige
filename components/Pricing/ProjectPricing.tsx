"use client";

import { Project } from "@/utils/contents/HomePage.content";
import Reveal from "../ui/Reveal";

export default function ProjectPricing() {
  return (
    <section className="">
      <div className="py-[35px] md:py-[40px]">
        <div className="container mx-auto">
          <h3 className="text-[#FFAA02] mb-[8px] font-body text-[14px] md:text-[18px] lg:text-[20px] leading-[100%] font-semibold text-left md:text-center lg:text-center">
            One-off projects & add-ons
          </h3>
          <p className="text-[24px] md:text-[28px] lg:text-[39px] text-[#1C2A38] font-poppins font-semibold leading-[120%] text-left md:text-center lg:text-center mb-[8px] ">
            Specialized One-off Projects & Add-on Servcies
          </p>
          <p className="text-[#43586C] text-[16px] md:text-[18px] lg:text-[20px] font-body text-left md:text-center lg:text-center mb-[32px] md:mb-[39px] lg:mb-[45px]">
            Beyond our recurring weekly support, we offer targeted, fixed-price
            project packages designed to solve specific, stressful household
            challenges for your loved ones.
          </p>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
              {Project.map((item, index) => (
                <Reveal key={item.id} delay={index * 100}>
                <div
                  className="w-full max-w-full h-full rounded-[16px] border-2 border-[#5B805F] bg-[#D2A44929] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_12px_28px_0px_#00000021] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <div className="flex flex-col h-full py-[24px] p-[20px]">
                    <button className="w-[145px] h-[40px] shrink-0 bg-[#5B805F] text-white text-[12px] rounded-[99px]">
                      {item.tag}
                    </button>

                    <h2 className="mt-[16px] md:mt-[18px] lg:mt-[20px] text-[#1C2A38] font-poppins font-semibold leading-[120%] text-[20px] md:text-[20px] lg:text-[24px] mb-[16px]">
                      {item.title}
                    </h2>

                    <p className="text-[#FFAA02] leading-[120%] text-[16px] mb-[16px]">
                      {item.subtitle}
                    </p>

                    <p className="text-[16px] text-[#43586C] leading-[120%] mb-[16px]">
                      {item.intro}
                    </p>

                    <ul className="list-disc pl-5 mb-[16px] space-y-[8px]">
                      {item.details.map((detail, i) => (
                        <li
                          key={i}
                          className="font-body text-[16px] leading-[120%] font-bold text-[#43586C]"
                        >
                          {detail.label && (
                            <b className="text-black">{detail.label}: </b>
                          )}
                          {detail.text}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-[16px]">
                      <hr className="border-0 border-t-2 border-dotted border-[#D2A449]" />
                      <h3 className="font-body font-bold text-[20px] leading-[100%] mt-[24px] mb-[4px]">
                        {item.price}
                      </h3>
                      <p className="text-[#43586C] leading-[120%] text-[16px] font-normal font-body">
                        {item.priceNote}
                      </p>
                    </div>
                  </div>
                </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
