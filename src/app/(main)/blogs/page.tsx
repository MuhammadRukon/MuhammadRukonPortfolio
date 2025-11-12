import { PageContainer } from "@/components/page-container/page-container";
import { payload } from "@/lib/payload";
import Link from "next/link";

export default async function Blogs() {
  const data = await payload.find({
    collection: "blogs",
    select: { title: true, description: true },
  });

  const blogs = data.docs;
  return (
    <PageContainer>
      {/* <p className="text-center">
        This page will be available as soon as I get rich and famous.
      </p> */}
      <div className="mx-auto w-fit space-y-5">
        {blogs.map((blog) => (
          <Link
            className="block text-left group bg-white/5 p-4 backdrop-blur-sm "
            href={`/blogs/${blog.id}`}
            key={blog.id}
          >
            <h2 className="group-hover:underline">{blog.title}</h2>
            <p>{blog.description}</p>
          </Link>
        ))}
      </div>
    </PageContainer>
  );
}
