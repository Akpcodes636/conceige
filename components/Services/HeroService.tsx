"use client";

import Link from "next/link";
import Button from "../ui/Button";

export default function HeroService() {
  return (
    <section className="bg-[#5B805F]">
      <div className="container mx-auto">
        <div className="pt-[259px] md:pt-[250px] pb-[86px]">
          <h1 className="font-poppins text-[24px] md:text-[34px] lg:text-[49px] text-[#FFFFFF] text-start md:text-center font-bold leading-[120%]">
            Our Senior Support services in Dublin
          </h1>
          <p className="text-[16px] md:text-[24px] text-[#FFFFFF] text-left md:text-center lg:text-center leading-[100%] font-body w-full max-w-full md:max-w-full lg:max-w-[796px] mx-auto mb-[16px]">
            Non-medical, concierge-style support built around your loved
            one&apos;s daily routine.
          </p>
          <div className="flex items-center justify-center">
            <Link href="/Request-consultation">
              <Button
                style="primary"
                type="button"
                css="w-full md:w-[174px] lg:w-[174px] h-[50px]"
              >
                Book a consulation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
