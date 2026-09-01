import { notFound } from "next/navigation";
import PostForm from "../../../PostForm";
import { updatePost } from "../../../actions";
import { getBlogPostByIdAdmin } from "@/utils/supabase/admin-queries";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function EditPostPage({ params }: Props) {
  const { id } = await params;
  const post = await getBlogPostByIdAdmin(id);

  if (!post) {
    notFound();
  }

  const updatePostWithId = updatePost.bind(null, id);

  return (
    <div>
      <h1 className="text-[24px] font-semibold text-[#1C2A38] mb-[24px]">
        Edit post
      </h1>
      <PostForm action={updatePostWithId} post={post} />
    </div>
  );
}
