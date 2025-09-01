"use client";

import { projectData } from "@/constant/static-data";
import { usePageTitle } from "@/hooks/usePageTitle";

import { PageContainer } from "@/components/page-container/page-container";
import { ScrollDown } from "@/components/scroll-down/scroll-down";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

export default function Projects() {
  const pageTitle = usePageTitle();

  return (
    <div className="w-[85%] mx-auto">
      <PageContainer page={pageTitle}>
        <ScrollDown />
      </PageContainer>

      <ContainerScroll
        titleComponent={
          <h1 className="text-3xl sm:text-5xl font-semibold text-black dark:text-white">
            Freelance Projects
          </h1>
        }
      >
        <StickyScroll content={projectData} />
      </ContainerScroll>
    </div>
  );
}
