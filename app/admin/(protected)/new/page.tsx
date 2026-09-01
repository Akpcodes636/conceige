import PostForm from "../../PostForm";
import { createPost } from "../../actions";

export default function NewPostPage() {
  return (
    <div>
      <h1 className="text-[24px] font-semibold text-[#1C2A38] mb-[24px]">
        New post
      </h1>
      <PostForm action={createPost} />
    </div>
  );
}
