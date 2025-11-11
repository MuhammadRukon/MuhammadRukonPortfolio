import { PageContainer } from "@/components/page-container/page-container";
import { Container } from "./container";
import { localApi } from "@/lib/payload";

export default async function Education() {
  const data = await localApi("education");
  const eduData = data.docs as unknown as {
    title: string;
    subtitle: string;
    description: any;
  }[];
  return (
    <PageContainer>
      <Container cardLength={eduData.length} educationData={eduData} />
    </PageContainer>
  );
}
