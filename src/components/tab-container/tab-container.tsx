import { SkillType } from "@/enums";
import { ISkill } from "@/interfaces";
import { capitalize } from "@/lib/utils";
import { BackgroundGradient } from "../ui/background-gradient";
import { skills } from "@/constant/static-data";

export function TabContainer({ type }: { type: SkillType }) {
  return (
    <div className="space-y-2">
      <h2 className="text-xs sm:text-sm font-bold pl-1">{capitalize(type)}</h2>
      {skills
        .filter((skill) => skill.type === type)
        .map((skill) => (
          <TabContainer.SkillTab key={skill.name} skill={skill} />
        ))}
    </div>
  );
}

const SkillTab = ({ skill }: { skill: ISkill }) => {
  return (
    <BackgroundGradient
      className="rounded-md"
      containerClassName="rounded-md bg-white dark:bg-zinc-900 w-fit mx-auto"
    >
      <div className="flex gap-1 items-center border-1 w-fit px-2 py-1.5 rounded-md bg-black">
        {skill.icon}
        <p className="text-[10px] sm:text-xs text-nowrap">{skill.name}</p>
      </div>
    </BackgroundGradient>
  );
};

TabContainer.SkillTab = SkillTab;
