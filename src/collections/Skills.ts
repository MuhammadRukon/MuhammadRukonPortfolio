import { CollectionConfig } from "payload";
import { SkillType } from "@/enums";

export const Skills: CollectionConfig = {
  slug: "skills",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "type",
      type: "select",
      required: true,
      options: [
        {
          label: "Language",
          value: SkillType.Language,
        },
        {
          label: "Frontend",
          value: SkillType.Frontend,
        },
        {
          label: "Backend",
          value: SkillType.Backend,
        },
        {
          label: "Others",
          value: SkillType.Others,
        },
      ],
    },
    {
      name: "icon",
      type: "text",
      admin: {
        description: "This should match an icon from @tabler/icons-react",
      },
    },
  ],
};
