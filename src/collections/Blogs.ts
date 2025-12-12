import { CollectionConfig, slugField } from "payload";

export const Blogs: CollectionConfig = {
  slug: "blogs",
  admin: { useAsTitle: "title" },
  fields: [
    {
      name: "author",
      type: "relationship",
      relationTo: "users",
      required: true,
    },
    { name: "title", type: "text", required: true },
    { name: "description", type: "text" },
    { name: "content", type: "richText", required: true },
    slugField({ fieldToUse: "title" }),
  ],
};
