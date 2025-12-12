import { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  defaultPopulate: {
    email: true,
    id: true,
  },
  fields: [],
};
