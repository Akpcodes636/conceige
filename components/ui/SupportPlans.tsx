"use client";

import Reveal from "./Reveal";

const supportPlans = [
  {
    icon: "/images/Icon-1.png",
    title: "Customised Support Plans",
    description:
      "We develop personalised support strategies tailored to the unique needs, preferences, and routines of each senior.",
  },
  {
    icon: "/images/Icon-2.png",
    title: "Flexible Scheduling",
    description:
      "We offer adaptable scheduling options, from a few hours a week to daily visits, to fit your family's lifestyle.",
  },
  {
    icon: "/images/Icon-3.png",
    title: "Garda vetted",
    description:
      "Every visit is with someone properly vetted, so families can feel at ease.",
  },
  {
    icon: "/images/Icon-4.png",
    title: "Fully insured",
    description:
      "Insured for the non-medical services we provide, clearly and transparently.",
  },
  {
    icon: "/images/Icon-5.png",
    title: "Works alongside careers",
    description:
      "Happy to complement existing home care or family support no overlap, no confusion.",
  },
];

export default function SupportPlans() {
  return (
    <section className="w-full max-w-full">
      <div className="grid w-full max-w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {supportPlans.map((plan, index) => {
          const Icon = plan.icon;

          return (
            <Reveal key={plan.title} delay={Math.min(index, 5) * 80}>
            <div
              className="
                w-full max-w-full
                h-[279.5px]
                lg:w-[416px]
                lg:h-[279.5px]
                rounded-[16px]
                lg:rounded-[24px]
                border
                border-[#D9A63A]
                bg-[#FCFAF4]
                px-8
                py-[35px]
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0px_12px_28px_0px_#00000014]
                motion-reduce:transition-none
                motion-reduce:hover:translate-y-0
              "
            >
              <div className="flex h-full flex-col gap-4">
                {/* Icon */}
                <img
                src={plan.icon}
                alt=""
                className="h-[50px] w-[50px] object-contain"
              />

                {/* Content */}
                <div>
                  <h3 className="text-[20px] md:text-[24px] font-semibold leading-[100%] text-[#1C2A38] mb-[16px]">
                    {plan.title}
                  </h3>

                  <p className="text-[18px] font-normal leading-[100%] text-[#43586C]">
                    {plan.description}
                  </p>
                </div>
              </div>
            </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}