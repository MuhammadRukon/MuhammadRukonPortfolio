import Link from "next/link";
import { payload } from "@/lib/payload";

import { PageContainer } from "@/components/page-container/page-container";

export default async function Blogs() {
  const { docs: blogs } = await payload.find({
    collection: "blogs",
    select: {
      title: true,
      description: true,
      slug: true,
      author: true,
    },
  });
  return (
    <PageContainer>
      <div className="mx-auto w-fit space-y-5">
        {blogs.map((blog) => (
          <Link
            className="block text-left group bg-white/5 p-4 backdrop-blur-sm "
            href={`/blogs/${blog.slug}`}
            key={blog.slug}
          >
            <h2 className="group-hover:underline">{blog.title}</h2>
            <p>{blog.description}</p>
            {typeof blog.author === "object" ? <p>{blog.author.email}</p> : null}
          </Link>
        ))}
      </div>
    </PageContainer>
  );
}
