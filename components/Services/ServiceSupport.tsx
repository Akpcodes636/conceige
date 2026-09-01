"use client";

import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";

export default function ServiceSupport() {
  return (
    <section className="">
      <div className="py-[90px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[18px]">
            <div>
              <Image
                src="/images/Frame-1.png"
                width={500}
                height={500}
                alt="images of elders"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-start justify-center flex-col">
              <h1 className="text-[39px] font-medium leading-[120%] font-poppin text-[#1C2A38] mb-[24px]">
                Supporting the people behind your team
              </h1>
              <p className="text-[20px] text-[#1C2A38] font-light leading-[160%] mb-[24px] font-body">
                Caring responsibilities can affect employees in ways that aren&apos;t always visible at work. Cairde Concierge provides practical, non-medical senior support that can help employees better navigate the responsibilities of caring for ageing parents and loved ones.
              </p>
              <div className="flex items-start justify-start">
                <Link href="/corporate-eldercare">
                <Button style="reverse" css="w-full h-[50px]" type="button">
                  Explore Corporate Elder Care
                </Button>
                
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
