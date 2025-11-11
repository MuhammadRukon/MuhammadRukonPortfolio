import { getPayload} from "payload";
import config from "@payload-config";

export async function localApi(collection: string) {
  if (!collection) {
    throw new Error("collection is required");
  }

  const payload = await getPayload({ config });
  return await payload.find({ collection });
}
