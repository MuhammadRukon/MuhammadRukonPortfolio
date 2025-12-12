import { CollectionConfig } from "payload";

export const Experience: CollectionConfig = {
  slug: "experience",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "link", type: "text" },
    { name: "duration", type: "text", required: true },
    { name: "location", type: "text", required: true },
    {
      name: "responsibilities",
      type: "array",
      required: true,
      fields: [{ name: "point", type: "text" }],
    },
  ],
};
