"use client";

import { SIGNS } from "@/utils/contents/HomePage.content";
import RoundedCard from "../ui/RoundedCard";
import Button from "../ui/Button";
import Link from "next/link";

export default function ServiceSign() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="py-[74px] md:py-[90px] lg:py-[110px]">
          <p className="text-[#FFAA02] font-semibold text-[14px] md:text-[18px]  lg:text-[20px] leading-[100%] font-body text-center">
            Non-Medical Senior Support in Dublin, Ireland.
          </p>
          <h1 className="font-semibold text-[24px] md:text-[30px] lg:text-[39px] leading-[120%] text-[#1C2A38] text-center">
            Recognise These Signs?
          </h1>
          <p className="font-body font-normal leading-[100%] text-[#1A1A1A] text-center text-[16px] md:text-[18px] lg:text-[20px] w-full max-w-[344px] md:max-w-[500px] lg:max-w-[864px] mx-auto mb-[26px] md:mb-[63px]">
            Many families reach out when they notice a loved one beginning to
            need extra support but still wants to remain independent at home.
            Some common signs to look out for:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mb-[30px]">
            {SIGNS.map((sign, index) => (
              <RoundedCard key={index} text={sign} />
            ))}
          </div>

          <p className="font-body font-normal text-[16px] md:text-[18px] lg:text-[20px] text-center leading-[100%] text-[#1A1A1A] mb-[30px]">
            If any of these situations sound familiar, you&apos;re not alone.
            Many seniors simply need the right level of support to continue
            living safely, comfortably, and independently at home. Addressing
            these challenges early can help reduce unnecessary strain on family
            members while supporting continued independence at home.
          </p>

          <div className="flex items-center justify-center">
            <Link href="/Request-consultation">
              <Button
                style="tertiary"
                type="button"
                css="w-[271px] text-[#1A1A1A] text-[12px] leading-[100%] text-white"
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
