"use client";

import Image from "next/image";

interface SupportCardProps {
  title: string;
  description: string;
  icon: string;
  alt?: string;
}

export default function SupportCard({
  title,
  description,
  icon,
  alt = "Support icon",
}: SupportCardProps) {
  return (
    <div
      className="
        w-full
        max-w-full
        h-full
        rounded-[8px]
        border
        border-[#1C2A38]
        px-[20px]
        py-[35px]
        sm:px-[24px]
        sm:py-[40px]
        lg:h-[271px]
        lg:w-[416px]
        lg:px-[20px]
        lg:py-[53px]
        transition-all duration-300
        hover:-translate-y-1
        hover:border-[#5B805F]
        hover:shadow-[0px_12px_28px_0px_#00000014]
        motion-reduce:transition-none
        motion-reduce:hover:translate-y-0
      "
    >
      {/* Icon */}
      <div className="mb-[20px] h-[50px] w-[50px] sm:mb-[24px]">
        <Image
          src={icon}
          width={50}
          height={50}
          alt={alt}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Title */}
      <h2
        className="
          mb-[12px]
          font-body
          text-[21px]
          font-normal
          leading-[120%]
          text-[#1C2A38]
          sm:text-[23px]
          lg:mb-[16px]
          lg:text-[25px]
        "
      >
        {title}
      </h2>

      {/* Description */}
      <p
        className="
          font-body
          text-[16px]
          leading-[140%]
          text-[#43586C]
          sm:text-[18px]
          lg:text-[20px]
          lg:leading-[100%]
        "
      >
        {description}
      </p>
    </div>
  );
}