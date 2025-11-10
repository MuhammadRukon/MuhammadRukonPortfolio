"use client";

import { SkillType } from "@/enums";
import { usePageTitle } from "@/hooks/usePageTitle";

import { PageContainer } from "@/components/page-container/page-container";
import { ScrollDown } from "@/components/scroll-down/scroll-down";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { TabContainer } from "@/components/tab-container/tab-container";

export default function Skills() {
  const pageTitle = usePageTitle();

  return (
    <>
      <PageContainer page={pageTitle}>
        <ScrollDown />
      </PageContainer>

      <div className="-mt-30 overflow-clip">
        <TracingBeam>
          <div className="h-[120px] sm:h-[300px]" />
        </TracingBeam>
        <div className="grid grid-cols-4 gap-4 w-full text-center mt-10 max-w-[400px] sm:max-w-[520px] mx-auto pb-40">
          {[
            SkillType.Language,
            SkillType.Frontend,
            SkillType.Backend,
            SkillType.Others,
          ].map((type) => (
            <TabContainer type={type} key={type} />
          ))}
        </div>
      </div>
    </>
  );
}
