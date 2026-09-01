"use client";

import Image from "next/image";

export default function FounderAbout() {
  return (
    <section>
      <div className="py-[59px] md:py-[89px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-x-[13px] gap-y-[20px] lg:grid-cols-[1fr_2fr]">
            {/* Mobile heading */}
            <h2 className="mb-[8px] font-poppins text-[24px] font-semibold leading-[120%] text-[#1C2A38] md:mb-[10px] md:text-[28px] lg:hidden">
              Meet the Founder
            </h2>

            {/* Image */}
            <div className="w-full">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[24px] border-[1px] border-black bg-[#F4F6F5]">
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
              {/* Desktop heading */}
              <h2 className="mb-[8px] hidden font-poppins text-[24px] font-semibold leading-[120%] text-[#1C2A38] md:text-[28px] lg:mb-[20px] lg:block lg:text-[39px]">
                Meet the Founder
              </h2>

              <p className="mb-[16px] font-body text-[16px] leading-[160%] text-[#43586C] md:text-[18px] lg:mb-[20px]">
                Hi, I&apos;m Patience. I founded Cairde Concierge because I saw
                a gap in the everyday, non-medical support available to seniors
                and their families the practical, personal help that sits
                alongside medical care rather than replacing it, but that so
                often gets overlooked. I wanted to build something different: a
                service that focuses entirely on the person, not just a
                checklist of tasks.
              </p>

              <p className="mb-[16px] font-body text-[16px] leading-[160%] text-[#43586C] md:text-[18px] lg:mb-[20px]">
                Hospitality has been the heartbeat of my career for as long as I
                can remember, and it taught me a universal truth: everyone
                deserves to feel valued, respected, and genuinely supported.
                Bringing over five years of direct experience supporting seniors
                and people with disabilities, alongside a strong background in
                administration, logistics, and complex scheduling, we know what
                it takes to keep a household running seamlessly.
              </p>

              <p className="mb-[16px] font-body text-[16px] leading-[160%] text-[#43586C] md:text-[18px] lg:mb-[20px]">
                Whether it&apos;s providing companionship, helping coordinate
                appointments, assisting with transportation, or simply offering
                an extra helping hand, our goal is to build relationships based
                on trust, reliability, and consistency. Support should feel
                personal, not transactional.
              </p>

              <p className="font-body text-[16px] leading-[160%] text-[#43586C] md:text-[18px]">
                We understand the value of human connection that&apos;s the
                foundation everything here is built on. It&apos;s an honour to
                serve this community, and we look forward to welcoming your
                family into ours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

