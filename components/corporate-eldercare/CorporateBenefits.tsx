"use client";

import { CorporateContent } from "@/utils/contents/Corporate.content";
import Reveal from "../ui/Reveal";
import Image from "next/image";

export default function CorporateBenefits() {
  return (
    <section>
      <div className="py-[42px] md:py-[49px]">
        <div className="container mx-auto">
          <h1 className="text-[#1C2A38] text-[24px] md:text-[28px] lg:text-[39px] leading-[120%] font-poppins font-semibold mb-[24px] md:mb-[16px] lg:mb-[16px] text-left md:text-center lg:text-center">
            A more supportive benefit for your employees
          </h1>
          <p className="text-[16px] md:text-[18px] lg:text-[20px] font-body leading-[160%] text-[#43586C] w-full max-w-full md:max-w-full lg:max-w-[974px] mx-auto text-left md:text-center lg:text-center mb-[38px] md:mb-[43px]">
            Through dedicated, non-medical senior support, employees can access
            practical assistance that helps their families remain independent,
            connected, and supported at home.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {CorporateContent.map((item, index) => (
              <Reveal key={item.title} delay={index * 90}>
              <div
                className="w-full max-w-full md:max-w-full h-[290px] md:h-[363px] rounded-[16px] md:rounded-[24px] border-[2px] bg-[#D2A44929] border-[#D2A449] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_12px_28px_0px_#00000021] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <div className="px-[32px] py-[33px] md:py-[43px]">
                  {/* Icon */}
                  <div className="w-[50px] h-[50px] mb-[19px]">
                    <Image
                      src={item.icon}
                      alt=""
                      className="w-full h-full object-contain"
                      width={500}
                      height={500}
                    />
                  </div>

                  {/* Title */}
                  <h2 className="text-[#1C2A38] text-[20px] md:text-[25px] leading-[160%] font-poppins font-semibold mb-[16px]">
                    {item.title}
                  </h2>

                  {/* Description */}
                  <p className="text-[16px] md:text-[18px] lg:text-[18px] text-[#43586C] leading-[160%]">
                    {item.text}
                  </p>
                </div>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
