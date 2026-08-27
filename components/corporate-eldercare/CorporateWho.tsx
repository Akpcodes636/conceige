"use client";

import { CorporateAudience } from "@/utils/contents/Corporate.content";
import Image from "next/image";
import Reveal from "../ui/Reveal";

export default function CorporateWho() {
  return (
    <section>
      <div className="py-[16px] md:py-[66px] lg:py-[45px]">
        <div className="container mx-auto">
          <h1 className="text-[#1C2A38] text-[39px] font-poppins font-semibold leading-[120%] mb-[43px] text-center">
            Who is Corporate Eldercare for?
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {CorporateAudience.map((post, index) => (
              <Reveal key={post.title} delay={index * 90}>
              <article
                className="group flex flex-col h-full rounded-[16px] border border-[#E5E7EB] bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_12px_28px_0px_#00000014] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                {/* Image */}
                <div className="block shrink-0 overflow-hidden">
                  <Image
                    src={post.image}
                    alt="people working"
                    width={500}
                    height={295}
                    className="w-full h-[295px] object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-[20px]">
                  <h3 className="font-poppins font-semibold text-[20px] leading-[120%] text-[#1C2A38] mb-[8px]">
                    {post.title}
                  </h3>

                  <p className="font-body text-[16px] leading-[150%] text-[#43586C]">
                    {post.text}
                  </p>
                </div>
              </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
