"use client";

import Image from "next/image";

export default function FounderAbout() {
  return (
    <section>
      <div className="py-[59px] md:py-[89px]">
        <div className="container mx-auto">
          <h2 className="mb-[8px] font-body text-[14px] font-semibold leading-[120%] text-[#FFAA02] md:mb-[16px] md:text-[18px] lg:text-[20px] text-center lg:text-left">
            Meet the Founder
          </h2>
          <div className="grid grid-cols-1 gap-x-[13px] gap-y-[20px] lg:grid-cols-[1fr_2fr]">
            {/* Image */}
            <div className="w-full">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[24px] border border-black bg-[#F4F6F5] md:h-[420px] md:aspect-auto lg:h-auto lg:aspect-[4/5]">
                <Image
                  src="/images/founder-1.jpg"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="origin-top scale-110 object-cover"
                  style={{ objectPosition: "50% 20%" }}
                  alt="Founder portrait"
                  priority
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <h3 className="mb-[16px] font-poppins text-[24px] font-semibold leading-[120%] text-[#1C2A38] md:text-[28px] lg:mb-[20px] lg:text-[39px]">
                Hi, I&apos;m Patience.
              </h3>

              <p className="mb-[16px] font-body text-[16px] leading-[160%] text-[#43586C] md:text-[18px] lg:mb-[20px]">
                I founded Cairde Concierge because I saw a gap in the
                everyday, non-medical support available to seniors and their
                families — the practical, personal help that sits alongside
                medical care rather than replacing it.
              </p>

              <p className="mb-[16px] font-body text-[16px] leading-[160%] text-[#43586C] md:text-[18px] lg:mb-[20px]">
                Hospitality has been the heartbeat of my career for as long
                as I can remember, and it taught me a universal truth:
                everyone deserves to feel valued, respected, and genuinely
                supported.
              </p>

              <p className="mb-[16px] font-body text-[16px] leading-[160%] text-[#43586C] md:text-[18px] lg:mb-[20px]">
                Bringing over five years of direct experience supporting
                seniors and people with disabilities, alongside a strong
                background in administration, logistics, and complex
                scheduling, we know what it takes to keep a household running
                seamlessly.
              </p>

              <p className="mb-[24px] font-body text-[16px] leading-[160%] text-[#43586C] md:text-[18px]">
                Whether it&apos;s companionship, appointments, transportation
                or simply an extra helping hand, our goal is to build
                relationships based on trust, reliability and consistency.
              </p>

              <blockquote className="border-l-[3px] border-[#D2A449] pl-[20px]">
                <p className="font-poppins text-[20px] md:text-[24px] italic leading-[140%] text-[#1C2A38]">
                  &ldquo;Support should feel personal, not transactional.&rdquo;
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
