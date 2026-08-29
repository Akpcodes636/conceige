"use client";


import Button from "../ui/Button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-hero">
      <div className="container mx-auto">
        <div className="pt-[240px] pb-[50px] sm:pt-[170px] sm:pb-[70px] md:pt-[190px] md:pb-[90px] lg:pt-[200px] lg:pb-[150px]">
          <p className="font-semibold text-[16px] md:text-[18px] lg:text-[20px] leading-[100%] font-body text-[#FFAA02] mb-[8px] max-w-full md:max-w-full lg:max-w-full mx-auto">
            Non-Medical Senior Support in Dublin, Ireland.
          </p>
          <h1 className="text-[24px] md:text-[36px] lg:text-[49px] font-semibold leading-[120%] font-poppins text-[#FFFFFF] mb-[8px] max-w-full md:max-w-full lg:max-w-[954px]  x-auto">
            Dedicated support for seniors, with the warmth of family
          </h1>
          <p className="text-[#FFFFFF] font-body text-[16px] md:text-[18px] lg:text-[20px] leading-[100%] mb-[24px]  max-w-full md:max-w-full lg:max-w-[954px]">
            Not ready to look at assisted living or nursing homes? We help
            Dublin seniors stay independent, safe and socially connected at home
            — with a consistent, one-on-one companion your family can trust.
          </p>
          <div className="flex flex-col gap-[12px] sm:flex-row sm:gap-x-[10px]">
            <Link href="/Request-consultation">
              <Button
                style="primary"
                type="button"
                css="w-full max-w-full md:max-w-full lg:max-w-[280px] h-[50px] sm:w-[189px]"
              >
                Request a free consultation
              </Button>
            </Link>
            <Link href="/Pricing">
              <Button
                style="nobg"
                type="button"
                css="w-full max-w-full md:max-w-full lg:max-w-[280px] h-[50px] sm:w-[164px]"
              >
                View support packages
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
