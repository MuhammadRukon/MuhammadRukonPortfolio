import path from "path";
import { type CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  admin: { group: "Media" },
  folders: false,
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      label: "Alt Text",
    },
  ],
  upload: {
    mimeTypes: ["application/pdf", "image/png", "image/jpg", "image/jpeg"],
    staticDir: path.resolve(process.cwd(), "public/media"),
  },
};
