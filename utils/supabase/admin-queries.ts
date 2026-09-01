import { createSupabaseServerClient } from "./server";
import type { BlogPost } from "./types";

export async function getAllBlogPostsAdmin(): Promise<BlogPost[]> {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .order("published_at", { ascending: false });

  if (error) {
    console.error("Error fetching blog posts (admin):", error.message);
    return [];
  }

  return data ?? [];
}

export async function getBlogPostByIdAdmin(id: string): Promise<BlogPost | null> {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(`Error fetching blog post "${id}" (admin):`, error.message);
    return null;
  }

  return data;
}
