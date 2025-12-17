import type { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
  slug: "project",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "subtitle", type: "text", required: true },
    { name: "link", type: "text", required: true },
    {
      name: "description",
      type: "array",
      required: true,
      fields: [{ name: "point", type: "text" }],
    },
  ],
};
