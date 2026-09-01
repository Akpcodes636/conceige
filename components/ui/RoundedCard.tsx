"use client";

import Image from "next/image";

interface TextSection {
  text: string;
}

export default function RoundedCard({ text }: TextSection) {
  return (
    <div className="w-full max-w-full md:max-w-full lg:max-w-full mx-auto h-[60px] rounded-[32px] bg-[#FFFFFF] shadow-[0px_4px_24px_0px_#0000001F] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0px_8px_28px_0px_#00000029] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <div className="flex items-start justify-start gap-[9.75px] py-[19px] px-[28px]">
        <div className="w-[24px] h-[24px]">
          <Image
            src="/images/Vector-3.png"
            alt="golden icon"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-[16px] md:text-[18px] lg:text-[18px] leading-[100%] text-[#1A1A1A] font-body">
          {text}
        </p>
      </div>
    </div>
  );
}