export type BlogSection = {
  heading?: string;
  paragraphs: string[];
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image_url: string;
  alt_text: string;
  author: string;
  published_at: string;
  read_time: string;
  meta_description: string;
  keywords: string[];
  content: BlogSection[];
  created_at: string;
};

export type Database = {
  public: {
    Tables: {
      blog_posts: {
        Row: BlogPost;
        Insert: Omit<BlogPost, "id" | "created_at">;
        Update: Partial<Omit<BlogPost, "id" | "created_at">>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
