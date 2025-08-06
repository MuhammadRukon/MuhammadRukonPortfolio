"use client";

import { FloatingDock } from "../ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBriefcase,
  IconHome,
  IconMedal,
  IconSchool,
  IconStack2,
  IconUserCog,
} from "@tabler/icons-react";

export function Docker() {
  const iconClassName = "w-full h-full";
  const items: { title: string; icon: React.ReactNode; href: string }[] = [
    {
      title: "Home",
      icon: <IconHome className={iconClassName} />,
      href: "/",
    },
    {
      title: "Experience",
      href: "/experience",
      icon: <IconBriefcase className={iconClassName} />,
    },
    {
      title: "Skills",
      href: "/skills",
      icon: <IconUserCog className={iconClassName} />,
    },
    // {
    //   title: "About",
    //   href: "/about",
    //   icon: <IconUser className={iconClassName} />,
    // },
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
      icon: <IconStack2 className={iconClassName} />,
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
  ];

  return (
    <FloatingDock
      mobileClassName="right-5 z-99 fixed bottom-5"
      desktopClassName="right-1/2 translate-x-1/2 z-99 fixed bottom-5"
      items={items}
    />
  );
}
