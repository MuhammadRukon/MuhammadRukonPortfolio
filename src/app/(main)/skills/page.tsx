"use client";

import { SkillType } from "@/enums";
import { usePageTitle } from "@/hooks/usePageTitle";

import { PageContainer } from "@/components/page-container/page-container";
import { ScrollDown } from "@/components/scroll-down/scroll-down";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { TabContainer } from "@/components/tab-container/tab-container";
import { useEffect, useState } from "react";
import { ISkill } from "@/interfaces";

export default function Skills() {
  const [skills, setSkills] = useState<ISkill[]>([]);
  const pageTitle = usePageTitle();

  useEffect(()=>{
   async function fetchSkills(){
    try{
      const response = await fetch("/api/skills");
      const data = await response.json();

      if(!response.ok){
        console.error("Failed to fetch skills");
        return;
      }

      const skillsData : ISkill[] = data.docs;

      setSkills(skillsData);

    } catch(error){
      console.error("Error fetching skills", error);
    }
   }

    fetchSkills();
  },[])


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
            <TabContainer type={type} key={type} skills={skills.filter((skill) => skill.type === type)}/>
          ))}
        </div>
      </div>
    </>
  );
}
