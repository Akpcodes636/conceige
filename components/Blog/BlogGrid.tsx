import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/utils/supabase/types";
import Reveal from "../ui/Reveal";

type Props = {
  posts: BlogPost[];
};

export default function BlogGrid({ posts }: Props) {
  if (posts.length === 0) {
    return (
      <div className="py-[91px]">
        <div className="container mx-auto text-center">
          <p className="font-body text-[16px] text-[#43586C]">
            No articles yet. Check back soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-[91px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {posts.map((post, index) => (
            <Reveal key={post.id} delay={Math.min(index, 5) * 80}>
            <article
              className="group flex flex-col h-full rounded-[16px] border border-[#E5E7EB] bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_12px_28px_0px_#00000014] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <Link href={`/Blog/${post.slug}`} className="block shrink-0 overflow-hidden">
                <Image
                  src={post.image_url}
                  alt={post.alt_text}
                  width={500}
                  height={295}
                  className="w-full h-[295px] object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
              </Link>

              <div className="flex flex-col flex-1 p-[20px]">
                <p className="font-body text-[12px] text-[#43586C] mb-[6px]">
                  {new Date(post.published_at).toLocaleDateString("en-IE", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}{" "}
                  · {post.read_time}
                </p>

                <h3 className="font-poppins font-semibold text-[20px] leading-[120%] text-[#1C2A38] mb-[8px]">
                  {post.title}
                </h3>

                <p className="font-body text-[16px] leading-[150%] text-[#43586C] mb-[20px]">
                  {post.excerpt}
                </p>

                <div className="mt-auto">
                  <Link
                    href={`/Blog/${post.slug}`}
                    className="inline-flex items-center justify-center w-full max-w-full md:max-w-full lg:w-[110px] h-[36px] rounded-[99px] border border-[#D2A449] bg-[#D2A44929] text-[12px] font-body text-[#1C2A38] hover:bg-[#D2A44950] transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
