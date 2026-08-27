"use client";

import { faqItems } from "@/utils/contents/HomePage.content";
import Accordion from "./Accordion";

export default function Faq() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="py-[84px] md:py-[96px]">
          <h1 className="text-[24px] md:text-[28px] lg:text-[39px] text-center text-[#1C2A38] font-semibold font-poppins leading-[120%] mb-[24px] md:mb-[41px]">
            Frequently Asked Questions
          </h1>
          <Accordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}
