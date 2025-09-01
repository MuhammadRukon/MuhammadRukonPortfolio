import { SkillType } from "@/enums";

export interface ISkill {
  name: string;
  type: SkillType;
  icon: React.ReactNode;
}
