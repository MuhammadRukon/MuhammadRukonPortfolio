import { type CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  admin: { group: "Media" },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      label: "Alt Text",
    },
  ],
  upload: {
    mimeTypes: ["application/pdf", "image/png", "image/jpg", "image/jpeg", "image/webp"],
  },
};
