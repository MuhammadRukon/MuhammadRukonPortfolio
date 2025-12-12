import path from "path";
import { type CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  admin: { group: "Media" },
  folders: true,
  fields: [],
  upload: {
    mimeTypes: ["application/pdf"],
    //TODO: change it to __dirname in production, and change second argument path according to the built file's path.
    staticDir: path.resolve(process.cwd(), "public/media"),
  },
};
