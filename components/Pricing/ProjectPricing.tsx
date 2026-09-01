
"use client";

import { Project } from "@/utils/contents/HomePage.content";
import Reveal from "../ui/Reveal";

export default function ProjectPricing() {
  return (
    <section>
      <div className="py-[5px] md:py-[40px]">
        <div className="container mx-auto">
          {/* Section label */}
          <h3 className="mb-[8px] text-center font-body text-[14px] font-semibold leading-[120%] text-[#FFAA02] md:text-center md:text-[18px] lg:text-[20px]">
            One-off projects & add-ons
          </h3>

          {/* Main heading */}
          <p className="mb-[12px] text-center font-poppins text-[24px] font-semibold leading-[120%] text-[#1C2A38] md:text-center md:text-[28px] lg:text-[39px]">
            Specialized One-off Projects & Add-on Services
          </p>

          {/* Section description */}
          <p className="mb-[32px] text-left font-body text-[16px] leading-[160%] text-[#43586C] md:mb-[39px] md:text-center md:text-[18px] lg:mb-[45px] lg:text-[20px]">
            Beyond our recurring weekly support, we offer targeted, fixed-price
            project packages designed to solve specific, stressful household
            challenges for your loved ones.
          </p>

          <div>
            <div className="grid grid-cols-1 gap-[24px] md:grid-cols-2">
              {Project.map((item, index) => (
                <Reveal key={item.id} delay={index * 100}>
                  <div className="h-full w-full max-w-full rounded-[16px] border-2 border-[#5B805F] bg-[#D2A44929] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_12px_28px_0px_#00000021] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                    <div className="flex h-full flex-col p-[20px] py-[24px]">
                      {/* Tag */}
                      <button className="h-[40px] w-[145px] shrink-0 rounded-[99px] bg-[#5B805F] text-[12px] leading-[100%] text-white">
                        {item.tag}
                      </button>

                      {/* Title */}
                      <h2 className="mb-[16px] mt-[16px] font-poppins text-[20px] font-semibold leading-[120%] text-[#1C2A38] md:mt-[18px] lg:mt-[20px] lg:text-[24px]">
                        {item.title}
                      </h2>

                      {/* Subtitle */}
                      <p className="mb-[16px] text-[16px] leading-[150%] text-[#FFAA02]">
                        {item.subtitle}
                      </p>

                      {/* Intro */}
                      <p className="mb-[16px] font-body text-[16px] leading-[160%] text-[#43586C]">
                        {item.intro}
                      </p>

                      {/* Details */}
                      <ul className="mb-[16px] list-disc space-y-[8px] pl-5">
                        {item.details.map((detail, i) => (
                          <li
                            key={i}
                            className="font-body text-[16px] font-light leading-[160%] text-[#43586C]"
                          >
                            {detail.label && (
                              <b className="text-black">
                                {detail.label}:{" "}
                              </b>
                            )}
                            {detail.text}
                          </li>
                        ))}
                      </ul>

                      {/* Price */}
                      <div className="mt-auto pt-[16px]">
                        <hr className="border-0 border-t-2 border-dotted border-[#D2A449]" />

                        <h3 className="mb-[6px] mt-[24px] font-body text-[20px] font-bold leading-[120%]">
                          {item.price}
                        </h3>

                        {/* <p className="font-body text-[16px] font-normal leading-[160%] text-[#43586C]">
                          {item.priceNote}
                        </p> */}
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
