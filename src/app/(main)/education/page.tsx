import { PageContainer } from "@/components/page-container/page-container";
import { Container } from "./container";

import { Duration } from "@/constant/static-data";
import { payload } from "@/lib/payload";

export const revalidate = Duration.Year;

export default async function Education() {
  const data = await payload.find({ collection: "education" });

  const eduData = data.docs;

  return (
    <PageContainer>
      <Container cardLength={eduData.length} educationData={eduData} />
    </PageContainer>
  );
}
