"use client";

import SupportPlans from "../ui/SupportPlans";

export default function Journey() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="py-[48px]">
          <p className="text-[#D2A449] text-[16px] md:text-[18px] lg:text-[20px] font-body leading-[100%] text-center font-semibold">Start your journey · Why choose us</p>
          <h1 className="font-poppins text-[24px] md:text-[28px] lg:text-[39px] leading-[120%] text-center font-semibold mb-[8px] md:mb-[16px]" >Support That Puts Families at Ease</h1>
          <p className="font-body leading-[100%] text-[#1A1A1AB2] font-normal max-w-full mx-auto md:max-w-full lg:max-w-[900px] text-center mb-[32px]">
            We understand that inviting someone into your home is a big
            decision. Here&apos;s why families trust Cairde Concierge to provide
            exceptional, non-medical support. Our team consists of caring
            professionals focused on dependable assistance, companionship, and
            everyday support — always with dignity and respect.
          </p>

          <SupportPlans />
        </div>
      </div>
    </section>
  );
}
