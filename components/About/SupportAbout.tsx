"use client";

import Image from "next/image";

export default function SupportAbout() {
  return (
    <section>
      <div className="py-[103px] md:py-[122px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-x-[13px]">
            <div>
              <h2 className="text-[14px] md:text-[18px] lg:text-[20px] text-[#FFAA02] font-body font-semibold leading-[100%] mb-[8px] md:mb-[24px]">
                Non-Medical Senior Support in Dublin, Ireland.
              </h2>
              <p className="text-[#1C2A38] text-[24px] md:text-[28px] lg:text-[39px] leading-[120%] font-poppins font-semibold mb-[24px]">
                Dedicated to genuine, non-medical senior support.
              </p>
              <p className="text-[#43586C] text-[16px] md:text-[18px] lg:text-[20px] font-body mb-[20px]">
                We are dedicated to providing compassionate, personalised,
                non-medical support that allows seniors to maintain their
                independence and quality of life while receiving the practical
                help they need.{" "}
              </p>

              <p className="text-[#43586C] text-[16px] mdd:text-[18px] lg:text-[20px] leading-[100%] mb-[20px]">
                In Irish, Cairde means friends — that single word defines our
                philosophy, our standards, and everything we do. Cairde
                Concierge was founded to meet a vital, growing need within Irish
                communities: ensuring every senior has the opportunity to live
                with dignity, comfort, and joy right at home. We provide
                non-medical support designed to enrich daily life for seniors,
                while bringing real peace of mind to the families who love them
                — often alongside, not instead of, any medical or personal care
                already in place.
              </p>
              <p className="text-[#43586C] text-[16px] md:text-[18px] lg:text-[20px] leading-[100%] mb-[20px]">
                We know that choosing the right support is one of the most
                significant decisions a family will make. That&apos;s why we
                don&apos;t believe in one-size-fits-all solutions. We&apos;re
                committed to building genuine, meaningful relationships with
                clients, ensuring they feel valued, respected, and supported
                every single day.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-full max-w-full h-[308px] md:h-[461px] bg-blue-900 rounded-[24px]">

              <Image
                src="/images/support-1.png"
                width={500}
                height={500}
                className="w-full h-full object-cover object-top rounded-[24px]"
                alt="image of a client and her patient"
              />

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
