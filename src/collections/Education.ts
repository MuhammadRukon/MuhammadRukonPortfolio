import { CollectionConfig } from "payload";

export const Education: CollectionConfig = {
  slug: "education",
  admin: { useAsTitle: "title" },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "subtitle", type: "text", required: true },
    {
      name: "description",
      type: "array",
      required: true,
      fields: [{ name: "point", type: "text" }],
    },
  ],
};
