import type { BlogPost } from "./types";
import { dummyBlogPosts } from "./dummy";

const isSupabaseConfigured =
  !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
  process.env.NEXT_PUBLIC_SUPABASE_URL !== "your-supabase-project-url";

async function getSupabaseClient() {
  const { supabase } = await import("./client");
  return supabase;
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  if (!isSupabaseConfigured) return dummyBlogPosts;

  const supabase = await getSupabaseClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .lte("published_at", new Date().toISOString())
    .order("published_at", { ascending: false });

  if (error) {
    console.error("Error fetching blog posts:", error.message);
    return dummyBlogPosts;
  }

  return data ?? [];
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!isSupabaseConfigured) {
    return dummyBlogPosts.find((p) => p.slug === slug) ?? null;
  }

  const supabase = await getSupabaseClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .lte("published_at", new Date().toISOString())
    .single();

  if (error) {
    console.error(`Error fetching blog post "${slug}":`, error.message);
    return dummyBlogPosts.find((p) => p.slug === slug) ?? null;
  }

  return data;
}

export async function getAllBlogSlugs(): Promise<string[]> {
  if (!isSupabaseConfigured) {
    return dummyBlogPosts.map((p) => p.slug);
  }

  const supabase = await getSupabaseClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("slug")
    .lte("published_at", new Date().toISOString());

  if (error) {
    console.error("Error fetching blog slugs:", error.message);
    return dummyBlogPosts.map((p) => p.slug);
  }

  return (data ?? []).map((row: { slug: string }) => row.slug);
}
