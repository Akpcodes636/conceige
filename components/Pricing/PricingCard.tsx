"use client";

import { PACKAGESPRICING } from "@/utils/contents/HomePage.content";
import Reveal from "../ui/Reveal";

export default function PricingCard() {
  return (
    <section>
      <div className="py-[62px] md:py-[93px]">
        <div className="container mx-auto">
          <h1 className="text-[#1C2A38] font-poppins text-[24px] md:text-[28px] lg:text-[39px] leading-[120%] font-semibold text-center mb-[16px]">
            Designed for Peace of Mind
          </h1>
          <p className="text-[#43586C] text-[16px] md:text-[18px] lg:text-[20px] font-body leading-[100%] text-center mb-[32px]">
            We believe in complete transparency. Our non-medical concierge
            services are structured into simple monthly blocks, so your family
            receives consistent, dedicated support without hidden fees.
          </p>

          <div className="w-full mb-[36px]">
  <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-stretch gap-6 md:grid-cols-3">
    {PACKAGESPRICING.map((pkg, index) => (
      <Reveal
        key={pkg.title}
        delay={index * 100}
        className="h-full"
      >
        <div
          className={`relative flex h-full flex-col rounded-[24px] border p-6 md:p-7 lg:p-8 transition-all duration-300 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${
            pkg.featured
              ? "border-[#FFAA02] bg-[#FFF8E8] shadow-[0px_4px_24px_0px_#0000001F] hover:shadow-[0px_12px_32px_0px_#0000002E]"
              : "border-[#E6E8EC] bg-white hover:shadow-[0px_12px_28px_0px_#00000014]"
          }`}
        >
          {pkg.featured && (
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-[6px] bg-[#1C2A38] px-5 py-1.5">
              <span className="whitespace-nowrap text-[11px] font-medium text-white">
                Most Popular
              </span>
            </div>
          )}

          <p className="font-body text-[14px] font-medium leading-[100%] text-[#1C2A38]">
            {pkg.hours}
          </p>

          <h3 className="mt-4 font-body text-[22px] font-semibold leading-[115%] text-[#1C2A38] md:text-[24px] lg:text-[28px]">
            {pkg.title}
          </h3>

          <p className="mt-4 font-body text-[15px] leading-[150%] text-[#5E6872] md:text-[16px]">
            {pkg.description}
          </p>

          <div className="mt-5">
            <h4 className="font-body text-[16px] font-semibold leading-[120%] text-[#1C2A38]">
              What&apos;s included:
            </h4>

            <ul className="mt-4 list-disc space-y-2 pl-5">
              {pkg.included.map((item) => (
                <li
                  key={item}
                  className="font-body text-[14px] leading-[140%] text-[#5E6872] md:text-[15px]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto pt-6">
            <p className="font-body text-[13px] leading-[140%] text-[#5E6872]">
              Standard: {pkg.standard}
            </p>

            <p className="mt-1 font-body text-[17px] font-semibold leading-[140%] text-[#1C2A38] md:text-[18px]">
              {pkg.price}
            </p>

            <p className="mt-1 font-body text-[12px] leading-[140%] text-[#5E6872]">
              {pkg.note}
            </p>
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
