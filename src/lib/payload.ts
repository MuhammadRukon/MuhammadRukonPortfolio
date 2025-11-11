import { getPayload } from "payload";
import config from "@payload-config";

export async function localApi(cursor: string, isCollection: boolean = true) {
  if (!cursor) {
    throw new Error("collection is required");
  }

  const payload = await getPayload({ config });
  if (isCollection) return await payload.find({ collection: cursor });
  else return await payload.findGlobal({ slug: cursor });
}
