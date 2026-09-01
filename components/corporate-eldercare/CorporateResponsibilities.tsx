"use client";

import Image from "next/image";

export default function CorporateResponsibilities() {
  return (
    <section>
      <div className="py-[65px] md:py-[82px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-x-[13px]">
            <div>
              {/* <h2 className="text-[14px] md:text-[18px] lg:text-[20px] text-[#1C2A38] font-body font-semibold leading-[100%] mb-[8px] md:mb-[24px]">
                
              </h2> */}
              <p className="text-[#1C2A38] text-[24px] md:text-[28px] lg:text-[39px] leading-[120%] font-poppins font-semibold mb-[24px]">
               When caring responsibilities become part of the workday
              </p>
              <p className="text-[#43586C] text-[16px] md:text-[18px] lg:text-[20px] font-body mb-[20px]">
                Supporting an ageing parent can involve much more than occasional visits.
              </p>
              <p className="text-[#43586C] text-[16px] md:text-[18px] lg:text-[20px] font-body mb-[20px]">
                There may be appointments to coordinate, groceries to collect,
                paperwork to complete, transport to arrange, or simply someone
                who needs regular companionship.
              </p>

              <p className="text-[#43586C] text-[16px] mdd:text-[18px] lg:text-[20px] leading-[160%] font-body mb-[20px]">
                For employees managing these responsibilities alongside their
                careers, the pressure can be overwhelming.
              </p>
              <p className="text-[#43586C] text-[16px] md:text-[18px] lg:text-[20px] leading-[160%] font-body mb-[20px]">
                Corporate Eldercare gives families practical support where they
                need it most helping make everyday responsibilities more
                manageable.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-full max-w-full h-[308px] md:h-[461px] bg-blue-900 rounded-[24px]">
                <Image
                  src="/images/corporate.png"
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


