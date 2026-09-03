"use client";

import type { FaqItem } from "@/utils/contents/HomePage.content";
import type { ReactNode } from "react";
import { useId, useLayoutEffect, useRef, useState } from "react";
import Reveal from "../ui/Reveal";

type FaqAccordionProps = {
  items?: FaqItem[];
  /** Allow several cards open at once. Set false for one-at-a-time behaviour. */
  allowMultiple?: boolean;
  /** Ids open on first render. Defaults to just the first item. */
  defaultOpenIds?: string[];
};

/** Splits a FAQ answer into paragraphs and "• " bullet lists for readability. */
function renderAnswer(text: string): ReactNode[] {
  const lines = text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const blocks: ReactNode[] = [];
  let listBuffer: string[] = [];

  const flushList = (key: string) => {
    if (!listBuffer.length) return;
    blocks.push(
      <ul key={key} className="mt-3 space-y-2">
        {listBuffer.map((entry, i) => (
          <li key={i} className="flex gap-2.5">
            <span
              aria-hidden="true"
              className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#B08A4A]"
            />
            <span>{entry}</span>
          </li>
        ))}
      </ul>
    );
    listBuffer = [];
  };

  lines.forEach((line, index) => {
    if (line.startsWith("• ")) {
      listBuffer.push(line.slice(2));
      return;
    }
    flushList(`list-${index}`);
    blocks.push(
      <p key={`p-${index}`} className={index > 0 ? "mt-3" : undefined}>
        {line}
      </p>
    );
  });
  flushList("list-end");

  return blocks;
}

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

type FaqCardProps = {
  item: FaqItem;
  open: boolean;
  onToggle: () => void;
  delay: number;
};

function FaqCard({ item, open, onToggle, delay }: FaqCardProps) {
  const baseId = useId();
  const safeId = item.id.replace(/[^a-zA-Z0-9_-]/g, "-");
  const panelId = `${baseId}-${safeId}-panel`;
  const buttonId = `${baseId}-${safeId}-button`;

  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState(0);

  // Measure the panel's natural height so it can animate smoothly in both
  // directions (a plain CSS grid-row trick doesn't animate reliably in all browsers).
  useLayoutEffect(() => {
    const node = contentRef.current;
    if (!node) return;
    setMaxHeight(open ? node.scrollHeight : 0);
  }, [open, item.answer]);

  useLayoutEffect(() => {
    if (!open) return;
    const node = contentRef.current;
    if (!node) return;

    const observer = new ResizeObserver(() => setMaxHeight(node.scrollHeight));
    observer.observe(node);
    return () => observer.disconnect();
  }, [open]);

  return (
    <Reveal delay={delay} className="self-start">
      <div className="rounded-[16px] border border-[#D2A449] bg-[#D2A44929] px-[32px] py-[28px] transition-all duration-300 hover:-translate-y-[2px] hover:border-[#E2D5BE] hover:shadow-[0px_10px_28px_0px_#00000014] motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:rounded-[24px]">
        <h3>
          <button
            id={buttonId}
            type="button"
            onClick={onToggle}
            aria-expanded={open}
            aria-controls={panelId}
            className="flex w-full min-h-[48px] items-start justify-between gap-3 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B08A4A] md:min-h-[58px]"
          >
            <span className="font-poppins text-[20px] font-semibold leading-[120%] text-[#1A1A1A] md:text-[24px]">
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
          style={{ maxHeight }}
          className="overflow-hidden transition-[max-height] duration-300 ease-out motion-reduce:transition-none"
        >
          <div
            ref={contentRef}
            className={`font-body pt-[8px] text-[16px] leading-[140%] text-[#6F6A61] transition-opacity duration-300 motion-reduce:transition-none md:text-[18px] ${
              open ? "opacity-100" : "opacity-0"
            }`}
          >
            {renderAnswer(item.answer)}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Accordion({
  items,
  allowMultiple = true,
  defaultOpenIds,
}: FaqAccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(
    () => defaultOpenIds ?? []
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
      {items.map((item, index) => (
        <FaqCard
          key={item.id}
          item={item}
          open={openIds.includes(item.id)}
          onToggle={() => toggle(item.id)}
          delay={Math.min(index, 4) * 80}
        />
      ))}
    </div>
  );
}
