"use client";

import { SIGNS } from "@/utils/contents/HomePage.content";
import RoundedCard from "../ui/RoundedCard";
import Reveal from "../ui/Reveal";

export default function Sign() {
  return (
    <section>
    <div className="container mx-auto">
  <div className="py-[60px] sm:py-[70px] md:py-[90px] lg:py-[100px]">
    <p className="text-center font-body text-[14px] font-semibold leading-[140%] text-[#FFAA02] md:text-[18px] lg:text-[20px]">
      Non-Medical Senior Support in Dublin, Ireland.
    </p>

    <h1 className="mt-3 text-center text-[24px] font-semibold leading-[125%] text-[#1C2A38] md:mt-4 md:text-[30px] lg:text-[39px]">
      Recognise These Signs?
    </h1>

    <p className="mx-auto mt-4 mb-[40px] w-full max-w-[344px] text-center font-body text-[16px] font-normal leading-[160%] text-[#1A1A1A] md:mt-5 md:mb-[55px] md:max-w-[500px] md:text-[18px] lg:mb-[63px] lg:max-w-[864px] lg:text-[20px]">
      Many families reach out when they notice a loved one beginning to need
      extra support but still wants to remain independent at home. Some common
      signs to look out for:
    </p>

    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 lg:gap-5">
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
