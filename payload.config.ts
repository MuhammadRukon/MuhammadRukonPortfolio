import sharp from "sharp";
import { FixedToolbarFeature, lexicalEditor } from "@payloadcms/richtext-lexical";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { buildConfig } from "payload";
import { Users } from "./src/collections/Users";
import { Skills } from "./src/collections/Skills";
import { Education } from "./src/collections/Education";
import { Navigation } from "./src/globals/Navigation";
import { Blogs } from "@/collections/Blogs";
import path from "path";
import { fileURLToPath } from "url";
import { bnBd } from "@payloadcms/translations/languages/bnBd";
import { en } from "@payloadcms/translations/languages/en";
import { Home } from "@/globals/Home";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";

import { Media } from "@/collections/Media";
import { Experience } from "@/collections/Experience";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  // If you'd like to use Rich Text, pass your editor here
  editor: lexicalEditor({
    features({ defaultFeatures }) {
      return [...defaultFeatures, FixedToolbarFeature()];
    },
  }),

  plugins: [
    vercelBlobStorage({
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],

  // Define and configure your collections in this array
  collections: [Users, Skills, Education, Blogs, Media, Experience],

  //Define and configure globals (single documents)
  globals: [Navigation, Home],

  admin: {
    user: "users",
    components: {
      graphics: { Logo: { path: "./src/components/logo/logo#Logo" } },
    },
  },
  // Multi language for admin UI
  i18n: {
    fallbackLanguage: "en",
    supportedLanguages: { en, "bn-BD": bnBd },
  },

  // Multi language for content
  localization: {
    locales: [
      {
        label: "English",
        code: "en",
      },
      {
        label: "Bangla",
        code: "bn-BD",
      },
    ],
    defaultLocale: "en",
    fallback: true,
  },

  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },

  // white listed urls
  cors: ["http://localhost:3000", "https://muhammadrukonsportfolio.netlify.app"],

  // Your Payload secret - should be a complex and secure string, unguessable
  secret: process.env.PAYLOAD_SECRET || "",
  // Whichever Database Adapter you're using should go here
  // Mongoose is shown as an example, but you can also use Postgres
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
  // If you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.
  // This is optional - if you don't need to do these things,
  // you don't need it!
  sharp,
});
