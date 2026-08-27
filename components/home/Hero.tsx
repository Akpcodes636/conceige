"use client";

import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-hero">
      <div className="container mx-auto">
        <div
          className="
            pt-[145px]
            pb-[70px]
            sm:pt-[155px]
            md:pt-[193px]
            sm:pb-[80px]
            lg:pt-[243px]
            lg:pb-[100px]
          "
        >
          {/* Eyebrow */}
          <p
            className="
              mb-[10px]
              font-poppins
              text-[14px]
              font-bold
              leading-[120%]
              text-[#FFAA02]
              sm:text-[16px]
              lg:mb-[8px]
              lg:text-[20px]
              text-start
              lg:leading-[100%]
            "
          >
            Non-Medical Senior Support in Dublin, Ireland.
          </p>

          {/* Heading */}
          <h1
            className="
             
              mb-[14px]
              w-full
              max-w-[974px]
              text-start
              font-poppins
              text-[38px]
              font-normal
              leading-[115%]
              text-[#88BE8D]
              sm:text-[46px]
              sm:leading-[120%]
              lg:mb-[8px]
              lg:text-[49px]
              lg:leading-[120%]
            "
          >
            Dedicated support for seniors, with the warmth of family
          </h1>

          {/* Description */}
          <p
            className="
              
              mb-[28px]
              w-full
              max-w-full
              font-body
              text-[16px]
              text-left
              leading-[145%]
              text-[#FDFBF7]
              sm:text-[18px]
              sm:leading-[150%]
              lg:mb-[24px]
              lg:max-w-[974px]
              lg:text-[20px]
              lg:leading-[100%]
            "
          >
            Not ready to look at assisted living or nursing homes? We help
            Dublin seniors stay independent, safe and socially connected at home
            — with a consistent, one-on-one companion your family can trust.
          </p>

          {/* Buttons */}
          <div
            className="
              flex
              flex-col
            
              gap-[12px]
              sm:flex-row
              sm:gap-x-[10px]
            "
          >
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
