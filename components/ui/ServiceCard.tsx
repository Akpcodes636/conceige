"use client";
import { Service } from "@/utils/contents/HomePage.content";
import Image from "next/image";
import Link from "next/link";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={service.link}

      aria-label={`Learn more about ${service.title}`}
    >
      <article className="group relative mx-auto h-[321px] w-full max-w-full overflow-hidden rounded-[16px] bg-[#1A1614] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_16px_32px_0px_#00000040] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
        <Image
          src={service.image}
          alt={service.alt_text}
          fill
          sizes="345px"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10"
        />

        <div className="absolute inset-x-0 bottom-4 p-5">
          <span
            aria-hidden="true"
            className="mb-3 block h-[5px] w-[76px] rounded-full bg-[#E0A64B]"
          />
          <h3 className="text-[24px] font-semibold leading-[100%] text-white font-body">
            {service.title}
          </h3>
          <p className="mt-2 text-[18px] font-medium leading-[100%] text-white font-body">
            {service.description}
          </p>
        </div>
      </article>
    </Link>
  );
}
