import React from "react";
import { FloatingDock } from "../ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBriefcase,
  IconHome,
  IconMedal,
  IconSchool,
  IconUser,
} from "@tabler/icons-react";
//TODO: this component will have a glowing hover effect
// https://ui.aceternity.com/components/glowing-effect
export function Docker() {
  const iconClassName = "h-full w-full text-neutral-400";
  return (
    <FloatingDock
      items={[
        {
          title: "Home",
          icon: <IconHome className={iconClassName} />,
          href: "/",
        },
        {
          title: "About",
          href: "/about",
          icon: <IconUser className={iconClassName} />,
        },
        {
          title: "GitHub",
          icon: <IconBrandGithub className={iconClassName} />,
          href: "https://github.com/MuhammadRukon",
        },
        {
          title: "LinkedIn",
          icon: <IconBrandLinkedin className={iconClassName} />,
          href: "https://www.linkedin.com/in/muhammadrukon/",
        },
        {
          title: "Projects",
          href: "/projects",
          icon: <IconBriefcase className={iconClassName} />,
        },
        {
          title: "Education",
          icon: <IconSchool className={iconClassName} />,
          href: "/education",
        },
        {
          title: "Achievements",
          icon: <IconMedal className={iconClassName} />,
          href: "/achievements",
        },
      ]}
    />
  );
}
