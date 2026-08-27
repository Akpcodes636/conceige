"use client";

import { SIGNS } from "@/utils/contents/HomePage.content";
import RoundedCard from "../ui/RoundedCard";
import Reveal from "../ui/Reveal";

export default function Sign() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="py-[74px] md:py-[90px] lg:py-[80px]">
          <p className="text-[#FFAA02] font-semibold text-[14px] md:text-[18px]  lg:text-[20px] leading-[100%] font-body text-center">
            Non-Medical Senior Support in Dublin, Ireland.
          </p>
          <h1 className="font-semibold text-[24px] md:text-[30px] lg:text-[39px] leading-[120%] text-[#1C2A38] text-center">
            Recognise These Signs?
          </h1>
          <p className="font-body font-normal leading-[100%] text-[#1A1A1A] text-center text-[16px] md:text-[18px] lg:text-[20px] w-full max-w-[344px] md:max-w-[500px] lg:max-w-[864px] mx-auto mb-[26px] md:mb-[63px]">
            Many families reach out when they notice a loved one beginning to
            need extra support but still wants to remain independent at home.
            Some common signs to look out for:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
            {SIGNS.map((sign, index) => (
              <Reveal key={sign} delay={Math.min(index, 5) * 70}>
                <RoundedCard text={sign} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
