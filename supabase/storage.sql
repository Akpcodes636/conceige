-- Run this in your Supabase SQL editor to set up the blog cover image bucket.

insert into storage.buckets (id, name, public)
values ('blog-images', 'blog-images', true)
on conflict (id) do nothing;

-- Anyone can view images (bucket is public, but this policy is required
-- for the storage.objects table itself since RLS is on by default).
create policy "Public can view blog images"
  on storage.objects
  for select
  using (bucket_id = 'blog-images');

-- Only authenticated users (the admin) can upload/replace/delete images.
create policy "Authenticated users can upload blog images"
  on storage.objects
  for insert
  with check (bucket_id = 'blog-images' and auth.role() = 'authenticated');

create policy "Authenticated users can update blog images"
  on storage.objects
  for update
  using (bucket_id = 'blog-images' and auth.role() = 'authenticated');

create policy "Authenticated users can delete blog images"
  on storage.objects
  for delete
  using (bucket_id = 'blog-images' and auth.role() = 'authenticated');
