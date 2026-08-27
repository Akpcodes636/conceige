-- Run this in your Supabase SQL editor to create the blog_posts table

create table if not exists public.blog_posts (
  id          uuid primary key default gen_random_uuid(),
  slug        text unique not null,
  title       text not null,
  excerpt     text,
  image_url   text,
  alt_text    text,
  author      text not null default 'Cairde Concierge',
  published_at timestamptz not null default now(),
  read_time   text,
  meta_description text,
  keywords    text[],
  -- content is an array of sections: [{ heading?: string, paragraphs: string[] }]
  content     jsonb not null default '[]'::jsonb,
  created_at  timestamptz not null default now()
);

-- Enable Row Level Security
alter table public.blog_posts enable row level security;

-- Allow public read access (blog is public)
create policy "Public can read blog posts"
  on public.blog_posts
  for select
  using (true);

-- Only authenticated users (admins) can insert/update/delete
create policy "Authenticated users can manage blog posts"
  on public.blog_posts
  for all
  using (auth.role() = 'authenticated');

-- Index for fast slug lookups
create index if not exists blog_posts_slug_idx on public.blog_posts (slug);

-- Index for ordering by date
create index if not exists blog_posts_published_at_idx on public.blog_posts (published_at desc);
