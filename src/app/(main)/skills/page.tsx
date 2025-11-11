import { SkillType } from "@/enums";

import { PageContainer } from "@/components/page-container/page-container";
import { ScrollDown } from "@/components/scroll-down/scroll-down";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { TabContainer } from "@/components/tab-container/tab-container";

import { localApi } from "@/lib/payload";
import { ISkill } from "@/interfaces";

export default async function Skills() {
  const data = await localApi("skills");
  const skills = data.docs as unknown as ISkill[];
  return (
    <>
      <PageContainer>
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
            <TabContainer
              type={type}
              key={type}
              skills={skills.filter((skill) => skill.type === type)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
