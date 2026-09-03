"use client";

import { SIGNS } from "@/utils/contents/HomePage.content";
import RoundedCard from "../ui/RoundedCard";
import Button from "../ui/Button";
import Link from "next/link";

export default function ServiceSign() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="py-[20px] sm:py-[70px] md:py-[90px] lg:py-[70px]">
          {/* Eyebrow */}
          <p className="text-center font-body text-[14px] font-semibold leading-[140%] text-[#FFAA02] md:text-[18px] lg:text-[20px]">
            Non-Medical Senior Support in Dublin, Ireland.
          </p>

          {/* Heading */}
          <h1 className="mt-4 text-center text-[24px] font-semibold leading-[130%] text-[#1C2A38] md:mt-5 md:text-[30px] lg:text-[39px]">
            Recognise These Signs?
          </h1>

          {/* Intro */}
          <p className="mx-auto mt-5 w-full max-w-[340px] text-center font-body text-[16px] font-normal leading-[175%] text-[#1A1A1A] md:max-w-[600px] md:text-[18px] md:leading-[170%] lg:max-w-[780px] lg:text-[20px] lg:leading-[170%]">
            Many families reach out when they notice a loved one beginning to
            need extra support but still wants to remain independent at home.
            Some common signs to look out for:
          </p>

          {/* Signs */}
          <div className="mt-[40px] grid grid-cols-1 gap-4 md:mt-[55px] md:grid-cols-2 md:gap-5 lg:mt-[63px]">
            {SIGNS.map((sign, index) => (
              <RoundedCard key={index} text={sign} />
            ))}
          </div>

          {/* Closing text */}
          <div className="mx-auto mt-[45px] max-w-[700px] md:mt-[55px] lg:mt-[65px]">
            <p className="text-center font-body text-[16px] font-normal leading-[175%] text-[#1A1A1A] md:text-[18px] lg:text-[20px]">
              If any of these situations sound familiar, you&apos;re not alone.
              Many seniors simply need the right level of support to continue
              living safely, comfortably, and independently at home.
            </p>

            <p className="mt-5 text-center font-body text-[16px] font-normal leading-[175%] text-[#1A1A1A] md:text-[18px] lg:text-[20px]">
              Addressing these challenges early can help reduce unnecessary
              strain on family members while supporting continued independence
              at home.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-[30px] flex items-center justify-center md:mt-[40px]">
             <Link href="https://tidycal.com/cairdeconcierege/15-minute-meeting">
              <Button
                style="tertiary"
                type="button"
                css="h-[50px] w-full max-w-[271px] text-[12px] leading-[100%] text-white"
              >
                Book a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
