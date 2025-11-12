import sharp from "sharp";
import { FixedToolbarFeature, lexicalEditor } from "@payloadcms/richtext-lexical";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { buildConfig } from "payload";
import { Users } from "./src/collections/Users";
import { Skills } from "./src/collections/Skills";
import { Education } from "./src/collections/Education";
import { Navigation } from "./src/globals/Navigation";
import { Blogs } from "@/collections/Blogs";

export default buildConfig({
  // If you'd like to use Rich Text, pass your editor here
  editor: lexicalEditor({
    features({ defaultFeatures }) {
      return [...defaultFeatures, FixedToolbarFeature()];
    },
  }),

  // Define and configure your collections in this array
  collections: [Users, Skills, Education, Blogs],

  //Define and configure globals (single documents)
  globals: [Navigation],

  admin: { user: "users" },

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
