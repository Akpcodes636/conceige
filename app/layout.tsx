import type { Metadata } from "next";
import {
  DM_Serif_Display,
  Manrope,
  Poppins,
} from "next/font/google";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  weight: "400",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),

  title: {
    default:
      "Concierge Design | Non-Medical Senior Support in Dublin, Ireland",
    template: "%s | Concierge Design",
  },

  description:
    "Dedicated non-medical support for seniors in Dublin, Ireland, with the warmth of family. We help seniors stay independent, safe and socially connected at home with consistent, one-on-one companionship families can trust.",

  keywords: [
    "senior support Dublin",
    "senior care Dublin",
    "non-medical senior support Dublin",
    "elderly support Dublin",
    "elderly companionship Dublin",
    "senior companionship Dublin",
    "home support for seniors Dublin",
    "senior companion Dublin",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://your-domain.com",
    siteName: "Concierge Design",
    title:
      "Concierge Design | Non-Medical Senior Support in Dublin, Ireland",
    description:
      "Dedicated support for seniors, with the warmth of family. Helping Dublin seniors stay independent, safe and socially connected at home.",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Concierge Design | Non-Medical Senior Support in Dublin, Ireland",
    description:
      "Helping Dublin seniors stay independent, safe and socially connected at home.",
  },

  alternates: {
    canonical: "https://your-domain.com",
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en-IE"
      className={`
        ${dmSerifDisplay.variable}
        ${manrope.variable}
        ${poppins.variable}
        h-full
        antialiased
      `}
    >
      <body className="">
        {children}
      </body>
    </html>
  );
}