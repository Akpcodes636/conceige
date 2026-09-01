import type { Metadata } from "next";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://cairdeconcierge.ie"
).replace(/\/+$/, "");

export const SITE_NAME = "Cairde Concierge";

export const DEFAULT_OG_IMAGE = "/images/hero.jpg";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

/**
 * Next.js replaces (rather than deep-merges) a segment's `openGraph`/`twitter`
 * object wholesale when a child route defines its own — so every page needs
 * to repeat `images`, or social shares silently lose the preview image.
 */
export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      title: `${title} | ${SITE_NAME}`,
      description,
      url: path,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}
