import Link from "next/link";
import { getAllBlogPostsAdmin } from "@/utils/supabase/admin-queries";
import { deletePost } from "../actions";

export default async function AdminDashboardPage() {
  const posts = await getAllBlogPostsAdmin();
  // eslint-disable-next-line react-hooks/purity -- fresh per-request timestamp on the server, not memoized
  const now = Date.now();

  return (
    <div>
      <div className="flex items-center justify-between mb-[24px]">
        <h1 className="text-[24px] font-semibold text-[#1C2A38]">Posts</h1>
        <Link
          href="/admin/new"
          className="h-[40px] px-[20px] rounded-[8px] bg-[#5B805F] text-white text-[14px] flex items-center"
        >
          New post
        </Link>
      </div>

      <div className="bg-white rounded-[12px] border border-[#E5E7EB] divide-y divide-[#E5E7EB]">
        {posts.length === 0 && (
          <p className="p-[20px] text-[14px] text-[#43586C]">No posts yet.</p>
        )}
        {posts.map((post) => {
          const isScheduled = new Date(post.published_at).getTime() > now;
          return (
            <div
              key={post.id}
              className="p-[16px] flex items-center justify-between gap-[16px]"
            >
              <div className="min-w-0">
                <p className="text-[15px] font-medium text-[#1C2A38] truncate">
                  {post.title}
                </p>
                <p className="text-[13px] text-[#43586C]">
                  <span
                    className={
                      isScheduled ? "text-[#B7791F]" : "text-[#5B805F]"
                    }
                  >
                    {isScheduled ? "Scheduled" : "Published"}
                  </span>{" "}
                  · {new Date(post.published_at).toLocaleString("en-IE")}
                </p>
              </div>
              <div className="flex items-center gap-[12px] shrink-0">
                <Link
                  href={`/admin/edit/${post.id}`}
                  className="text-[14px] text-[#5B805F]"
                >
                  Edit
                </Link>
                <form
                  action={async () => {
                    "use server";
                    await deletePost(post.id);
                  }}
                >
                  <button type="submit" className="text-[14px] text-[#D92D20]">
                    Delete
                  </button>
                </form>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
