"use client";

import Link from "next/link";
import Button from "../ui/Button";

export default function IndependenceAbout() {
  return (
    <section className="bg-[#E6ECE0]">
      <div className="container mx-auto">
        <div className="py-[59px] md:py-[80px] text-center">
          <p className="font-body text-[14px] font-semibold leading-[120%] text-[#B08A4A] md:text-[18px] lg:text-[20px] mb-[8px] md:mb-[16px]">
            Independence Matters
          </p>
          <h1 className="font-poppins text-[24px] md:text-[28px] lg:text-[39px] leading-[120%] text-[#1C2A38] font-semibold mb-[16px]">
            Because independence matters.
          </h1>
          <p className="font-body text-[16px] md:text-[18px] lg:text-[20px] leading-[160%] text-[#43586C] max-w-[780px] mx-auto mb-[32px]">
            Growing older shouldn&apos;t mean giving up the things that make
            life meaningful. Cairde provides practical and personal support
            that helps seniors continue living life on their own terms.
          </p>
          <div className="flex items-center justify-center">
            <Link href="/Services">
              <Button
                style="tertiary"
                type="button"
                css="h-[50px] w-full max-w-[220px] text-white"
              >
                How We Can Help
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
