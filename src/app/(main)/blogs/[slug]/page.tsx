// import { RichText } from "@/components/rich-text";
import { payload } from "@/lib/payload";

interface Params {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: Params) {
  const { slug } = await params;

  const { docs: blog } = await payload.find({
    collection: "blogs",
    where: { slug: { equals: slug } },
  });

  if (!blog[0]) {
    return <div>blog not found</div>;
  }

  return (
    <div className="max-w-5xl px-6 mx-auto bg-stone-950 pt-10 pb-10 md:pb-26 h-screen overflow-y-auto">
      <p className="text-2xl font-bold"> {blog[0]?.title}</p>
      <p className="font-extralight text-muted-foreground">{blog[0]?.description}</p>
      {/* <RichText data={blog[0]?.content} /> */}
    </div>
  );
}
