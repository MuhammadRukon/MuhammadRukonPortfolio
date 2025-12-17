import { PageContainer } from "@/components/page-container/page-container";
import { ScrollDown } from "@/components/scroll-down/scroll-down";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { payload } from "@/lib/payload";

export default async function Projects() {
  const data = await payload.find({ collection: "project" });

  const projectData = data.docs;
  return (
    <div className="w-[85%] mx-auto">
      <PageContainer>
        <ScrollDown />
      </PageContainer>

      <ContainerScroll
        titleComponent={
          <h1 className="text-3xl sm:text-5xl font-semibold text-black dark:text-white">
            Projects
          </h1>
        }
      >
        <StickyScroll content={projectData} />
      </ContainerScroll>
    </div>
  );
}
