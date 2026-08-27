"use client";

import Image from "next/image";
import Button from "../ui/Button";

export default function Why() {
  return (
    <section className="bg-[#E6ECE0]">
      <div className="py-[90px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[18px]">
            <div>
              <Image
                src="/images/Why.png"
                width={500}
                height={500}
                alt="images of elders"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-start justify-center flex-col">
              <h1 className="text-[39px] font-medium leading-[120%] font-body text-[#1C2A38] mb-[24px]">
                Care that feels personal, not clinical
              </h1>
              <p className="text-[20px] font-light leading-[100%] mb-[24px]">
                Cairde Concierge was founded to meet a vital, growing need in
                Dublin: ensuring every senior has the opportunity to live with
                dignity, comfort, and joy right at home. We don&apos;t believe
                in one-size-fits-all solutions — our team builds real
                relationships so clients feel valued, respected, and supported
                every day.
              </p>
              <div className="flex items-start justify-start">
              <Button style="primary" css="w-[132px] h-[50px]" type="button">
                Meet the Founder
              </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
