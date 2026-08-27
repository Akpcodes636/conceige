"use client";

import Link from "next/link";
import Button from "../ui/Button";

export default function Banner() {
  return (
    <section className="bg-[#121D25]">
      <div className="container mx-auto">
        <div className="py-[99px] md:py-[90px]">
          <h1 className="text-[#FFFFFF] text-[24px] md:text-[28px] lg:text-[39px] font-poppins leading-[120%] text-center mb-[8px]">
            Let&apos;s take the stress off your shoulders
          </h1>
          <p className="text-[#FFFFFF] text-[16px] md:text-[20px] font-body leading-[100%] font-normal text-center mb-[8px] md:mb-[36px]">
            Request a complimentary, no-obligation consultation call. We&apos;ll
            get back to you within 24 business hours.
          </p>
          <div className="flex items-center justify-center">
            <Link href="/Request-consultation">
              <Button style="primary" type="button">
                Book a consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
