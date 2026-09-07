"use client";

import Reveal from "../ui/Reveal";

const helpItems = [
  {
    title: "Companionship",
    text: "Meaningful conversation, social connection and someone to share everyday moments with.",
  },
  {
    title: "Errands & Shopping",
    text: "Practical help with everyday errands, shopping and household tasks.",
  },
  {
    title: "Appointment Support",
    text: "Help coordinating and accompanying your loved one to appointments.",
  },
  {
    title: "Transportation",
    text: "Travel companionship using Dublin public transport or coordinated taxis.",
  },
  {
    title: "Everyday Administration",
    text: "Support with everyday paperwork, organisation and life logistics.",
  },
  {
    title: "Lifestyle Support",
    text: "Helping seniors stay active, independent, connected and engaged.",
  },
];

export default function HelpWithAbout() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="py-[46px] md:py-[75px]">
          <h2 className="font-body text-[14px] font-semibold leading-[120%] text-[#FFAA02] text-center md:text-[18px] lg:text-[20px] mb-[8px] md:mb-[16px]">
            What We Help With
          </h2>
          <h1 className="font-poppins text-[24px] md:text-[28px] lg:text-[39px] leading-[120%] text-[#1C2A38] font-semibold text-center mb-[40px] md:mb-[43px]">
            Everyday support that makes life easier.
          </h1>

          <ol className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-3">
            {helpItems.map((item, i) => (
              <Reveal key={item.title} delay={i * 90} className="h-full">
                <li className="h-full rounded-[16px] md:rounded-[24px] border border-[#E6E8EC] bg-white px-6 py-6 md:px-8 md:py-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_12px_28px_0px_#00000014] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                  <p
                    aria-hidden="true"
                    className="font-body text-[24px] font-semibold leading-[100%] text-[#D2A449] md:text-[30px]"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </p>

                  <div className="mt-4 h-[5px] w-[56px] rounded-[99px] bg-[#FFAA02]" />

                  <h3 className="mt-5 font-poppins text-[18px] font-semibold leading-[130%] text-[#1C2A38] md:text-[20px] lg:text-[24px]">
                    {item.title}
                  </h3>

                  <p className="mt-3 font-body text-[16px] font-normal leading-[160%] text-[#43586C]">
                    {item.text}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
