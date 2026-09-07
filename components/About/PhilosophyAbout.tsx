"use client";

import Reveal from "../ui/Reveal";

const philosophy = [
  {
    tag: "PERSONAL",
    title: "Individual support",
    text: "Support designed around needs, routines and preferences.",
  },
  {
    tag: "DEPENDABLE",
    title: "Peace of mind",
    text: "Consistent help that families can rely on.",
  },
  {
    tag: "HUMAN",
    title: "Real connection",
    text: "Companionship, conversation and genuine care.",
  },
];

export default function PhilosophyAbout() {
  return (
    <section className="bg-[#FDFBF7]">
      <div className="container mx-auto">
        <div className="py-[46px] md:py-[75px]">
          <h2 className="font-body text-[14px] font-semibold leading-[120%] text-[#FFAA02] text-center md:text-[18px] lg:text-[20px] mb-[8px] md:mb-[16px]">
            Our Philosophy
          </h2>
          <h1 className="font-poppins text-[24px] md:text-[28px] lg:text-[39px] leading-[120%] text-[#1C2A38] font-semibold text-center mb-[16px]">
            Support built around the person, not a checklist.
          </h1>
          <p className="font-body text-[16px] md:text-[18px] lg:text-[20px] leading-[160%] text-[#43586C] text-center max-w-[780px] mx-auto mb-[40px] md:mb-[43px]">
            We don&apos;t believe in one-size-fits-all solutions. We build
            genuine relationships with clients so they feel valued, respected
            and supported every single day.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
            {philosophy.map((item, index) => (
              <Reveal key={item.tag} delay={index * 90}>
                <div className="h-full rounded-[16px] md:rounded-[24px] border-[2px] border-[#D2A449] bg-[#D2A44929] px-[32px] py-[33px] md:py-[43px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_12px_28px_0px_#00000021] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                  <p className="font-body text-[13px] font-semibold tracking-wide text-[#B08A4A] mb-[12px]">
                    {item.tag}
                  </p>
                  <h2 className="font-poppins text-[20px] md:text-[25px] leading-[120%] font-semibold text-[#1C2A38] mb-[12px]">
                    {item.title}
                  </h2>
                  <p className="font-body text-[16px] md:text-[18px] leading-[160%] text-[#43586C]">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
