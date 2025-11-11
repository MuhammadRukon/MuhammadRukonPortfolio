import { CollectionConfig } from "payload";

export const Education: CollectionConfig = {
  slug: "education",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "subtitle",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "richText",
      required: true,
    },
  ],
  hooks: {
    afterChange: [
      async ({ req: { payload } }) => await payload.find({ collection: "education" }),
    ],
  },
};
