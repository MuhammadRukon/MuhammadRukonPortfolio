import { SkillType } from "@/enums";

export interface ISkill {
  name: string;
  type: SkillType;
  // icon: React.ReactNode;
  //TODO: remove reactNode after static data is completely redundant.
  icon: string | React.ReactNode;
}
