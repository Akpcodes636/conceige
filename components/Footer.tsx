import { footerColumns, socialLinks } from "@/utils/contents/HomePage.content";
import Link from "next/link";
import Logo from "./ui/logo";

type SiteFooterProps = {
  brand?: string;
  blurb?: string;
};

function SocialIcon({
  name,
}: {
  name: "instagram" | "tiktok" | "facebook";
}) {
  if (name === "tiktok") {
    return (
      <svg
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 1 1-1.82-2.48v-3.1a5.69 5.69 0 1 0 4.91 5.63V9.01a7.35 7.35 0 0 0 4.29 1.37V7.3a4.28 4.28 0 0 1-3.23-1.48z" />
      </svg>
    );
  }

  if (name === "facebook") {
    return (
      <svg
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M13.5 21v-8h2.75l.4-3h-3.15V8.08c0-.87.24-1.46 1.5-1.46h1.75V3.94c-.3-.04-1.33-.14-2.53-.14-2.5 0-4.21 1.53-4.21 4.34V10H7.25v3H10v8h3.5z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      width="32"
      height="32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer({
  brand = "Cairde Concierge",
  blurb = "Dedicated, non-medical senior support in Dublin, Ireland. Support inspired by friendship. Care rooted in community.",
}: SiteFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0B0C0E] text-[#9A9BA1]">
      <div className="mx-auto container  py-14 md:py-16">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-[1.6fr_repeat(4,minmax(0,1fr))] md:gap-x-6">
          <div className="col-span-2 max-w-xs md:col-span-1">
            <Logo />
            <p className="text-[16px] leading-[160%] font-body text-white">
              {blurb}
            </p>
          </div>

          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="mb-3 text-[24px] font-semibold text-white font-poppins">
                {column.title}
              </h3>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[16px] text-[#FFFFFF] transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B08A4A] motion-reduce:transition-none"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h3 className="mb-3 text-[24px] font-semibold text-white">
              Our socials
            </h3>
            <ul className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={social.label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg transition-colors duration-200 hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B08A4A] motion-reduce:transition-none"
                  >
                    <SocialIcon name={social.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-14 text-center text-[11.5px] text-[#75767C]">
          &copy; {year} {brand}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
