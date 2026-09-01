"use client";

import type { FaqItem } from "@/utils/contents/HomePage.content";
import { useId, useState } from "react";
import Reveal from "../ui/Reveal";

type FaqAccordionProps = {
  items?: FaqItem[];
  /** Allow several cards open at once. Set false for one-at-a-time behaviour. */
  allowMultiple?: boolean;
  /** Ids open on first render. Defaults to just the first item. */
  defaultOpenIds?: string[];
};

function ToggleIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="32"
      height="32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
      className="mt-0.5 shrink-0 text-[#9C9689] transition-transform duration-300 ease-out motion-reduce:transition-none"
      style={{
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
        transformOrigin: "center",
      }}
    >
      <circle cx="12" cy="12" r="9.25" />
      <line x1="7.75" y1="12" x2="16.25" y2="12" />
      <line
        x1="12"
        y1="7.75"
        x2="12"
        y2="16.25"
        className="transition-transform duration-300 ease-out motion-reduce:transition-none"
        style={{
          transform: open ? "scaleY(0)" : "scaleY(1)",
          transformBox: "view-box",
          transformOrigin: "12px 12px",
        }}
      />
    </svg>
  );
}

export default function Accordion({
  items,
  allowMultiple = true,
  defaultOpenIds,
}: FaqAccordionProps) {
  const baseId = useId();
  const [openIds, setOpenIds] = useState<string[]>(
    () => defaultOpenIds ?? (items?.[0] ? [items[0].id] : [])
  );

  function toggle(id: string) {
    setOpenIds((current) => {
      const isOpen = current.includes(id);
      if (isOpen) return current.filter((openId) => openId !== id);
      return allowMultiple ? [...current, id] : [id];
    });
  }

  if (!items?.length) return null;

  return (
    <div className="grid grid-cols-1 items-start gap-[17px] md:grid-cols-2 md:gap-[21px]">
      {items.map((item, index) => {
        const open = openIds.includes(item.id);
        const safeId = item.id.replace(/[^a-zA-Z0-9_-]/g, "-");
        const panelId = `${baseId}-${safeId}-panel`;
        const buttonId = `${baseId}-${safeId}-button`;

        return (
          <Reveal
            key={item.id}
            delay={Math.min(index, 4) * 80}
            className="self-start"
          >
            <div className="rounded-[16px] border border-[#D2A449] bg-[#D2A44929] px-[32px] py-[28px] transition-all duration-300 hover:-translate-y-[2px] hover:border-[#E2D5BE] hover:shadow-[0px_10px_28px_0px_#00000014] motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:rounded-[24px]">
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  onClick={() => toggle(item.id)}
                  aria-expanded={open}
                  aria-controls={panelId}
                  className="flex w-full items-start justify-between gap-3 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B08A4A]"
                >
                  <span className="font-poppins text-[20px] font-semibold leading-[100%] text-[#1A1A1A] md:text-[24px]">
                    {item.question}
                  </span>
                  <ToggleIcon open={open} />
                </button>
              </h3>

              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                aria-hidden={!open}
                className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                  open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p
                    className={`font-body pt-[8px] text-[16px] leading-[140%] text-[#6F6A61] transition-opacity duration-300 motion-reduce:transition-none md:text-[18px] ${
                      open ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}