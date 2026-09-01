import type { Metadata } from "next";
import BlogGrid from "@/components/Blog/BlogGrid";
import BlogHero from "@/components/Blog/BlogHero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reveal from "@/components/ui/Reveal";
import Banner from "@/components/home/Banner";
import { getAllBlogPosts } from "@/utils/supabase/queries";
import { DEFAULT_OG_IMAGE } from "@/utils/seo";

export const metadata: Metadata = {
  title: "The Cairde Journal – Senior Care Guidance for Dublin Families",
  description:
    "Practical articles on navigating senior care in Dublin Fair Deal paperwork, home support, companionship, and everyday wellbeing for older adults in Ireland.",
  keywords: [
    "senior care blog Dublin",
    "elderly care advice Ireland",
    "Fair Deal Scheme guide",
    "home support Dublin",
    "ageing at home Ireland",
    "elder care resources Dublin",
  ],
  openGraph: {
    type: "website",
    title: "The Cairde Journal – Senior Care Guidance for Dublin Families",
    description:
      "Practical guidance for Dublin families navigating senior care decisions from HSE paperwork to everyday wellbeing.",
    url: "/Blog",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Cairde Journal – Senior Care Guidance for Dublin Families",
    description:
      "Practical guidance for Dublin families navigating senior care decisions.",
    images: [DEFAULT_OG_IMAGE],
  },
  alternates: {
    canonical: "/Blog",
  },
};

export const revalidate = 60;

export default async function Page() {
  const posts = await getAllBlogPosts();

  return (
    <>
      <Header />
      <Reveal><BlogHero /></Reveal>
      <BlogGrid posts={posts} />
      <Reveal><Banner /></Reveal>
      <Footer />
    </>
  );
}
