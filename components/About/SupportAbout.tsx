
"use client";

import Image from "next/image";

export default function SupportAbout() {
  return (
    <section>
      <div className="py-[103px] md:py-[122px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-x-[13px] md:grid-cols-[2fr_1fr]">
            <div>
              <h2 className="mb-[8px] font-body text-[14px] font-semibold leading-[120%] text-[#FFAA02] md:mb-[24px] md:text-[18px] lg:text-[20px]">
                Non-Medical Senior Support in Dublin, Ireland.
              </h2>

              <p className="mb-[24px] font-poppins text-[24px] font-semibold leading-[120%] text-[#1C2A38] md:text-[28px] lg:text-[39px]">
                Dedicated to genuine, non-medical senior support.
              </p>

              <p className="mb-[16px] font-body text-[16px] leading-[160%] text-[#43586C] md:text-[18px] lg:text-[20px]">
                We are dedicated to providing compassionate, personalised,
                non-medical support that allows seniors to maintain their
                independence and quality of life while receiving the practical
                help they need.
              </p>

              <p className="mb-[16px] font-body text-[16px] leading-[160%] text-[#43586C] md:text-[18px] lg:text-[20px]">
                In Irish, Cairde means friends  that single word defines our
                philosophy, our standards, and everything we do. Cairde
                Concierge was founded to meet a vital, growing need within Irish
                communities: ensuring every senior has the opportunity to live
                with dignity, comfort, and joy right at home. We provide
                non-medical support designed to enrich daily life for seniors,
                while bringing real peace of mind to the families who love them
                often alongside, not instead of, any medical or personal care
                already in place.
              </p>

              <p className="mb-[10px] font-body text-[16px] leading-[160%] text-[#43586C] md:text-[18px] lg:text-[20px]">
                We know that choosing the right support is one of the most
                significant decisions a family will make. That&apos;s why we
                don&apos;t believe in one-size-fits-all solutions. We&apos;re
                committed to building genuine, meaningful relationships with
                clients, ensuring they feel valued, respected, and supported
                every single day.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <div className="h-[308px] w-full max-w-full overflow-hidden rounded-[24px] bg-blue-900 md:h-[461px]">
                <Image
                  src="/images/support-1.png"
                  width={500}
                  height={500}
                  className="h-full w-full rounded-[24px] object-cover object-top"
                  alt="A carer supporting an older woman at home"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

