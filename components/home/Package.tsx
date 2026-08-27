"use client";

import { PACKAGES } from "@/utils/contents/HomePage.content";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import Link from "next/link";

export default function Package() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="py-[62px] md:py-[87px]">
          <h1 className="text-[#1C2A38] font-semibold leading-[120%] text-[24px] md:text-[28px] lg::text-[39px] font-poppins text-center mb-[16px]">
            Simple, transparent packages
          </h1>
          <p className="text-[#43586C] text-[16px] md:text-[18px] lg:text-[20px] leading-[100%] font-body text-center mb-[37px]">
            Monthly blocks of dedicated support — with up to 40% Irish tax
            relief under Revenue IT 47.
          </p>

          <div className="w-full mb-[36px]">
            <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-6 md:grid-cols-3">
              {PACKAGES.map((pkg, index) => (
                <Reveal key={pkg.title} delay={index * 100}>
                  <div
                    className={`relative rounded-[24px] border p-6 md:p-7 lg:p-8 transition-all duration-300 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${
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

                    {/* Hours */}
                    <p className="font-body text-[14px] font-medium leading-[100%] text-[#1C2A38]">
                      {pkg.hours}
                    </p>

                    {/* Title */}
                    <h3 className="mt-4 font-body text-[22px] font-semibold leading-[115%] text-[#1C2A38] md:text-[24px] lg:text-[28px]">
                      {pkg.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-4 font-body text-[15px] leading-[150%] text-[#5E6872] md:text-[16px]">
                      {pkg.description}
                    </p>

                    {/* Included */}
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

                    {/* Pricing */}
                    <div className="mt-6">
                      <p className="font-body text-[13px] leading-[140%] text-[#5E6872] ">
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

          <div className="flex items-center justify-center">
            <Link href="/Pricing">
              <Button style="danger" type="button">
                Compare pricing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
