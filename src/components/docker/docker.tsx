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
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
//TODO: this component will have a glowing hover effect
// https://ui.aceternity.com/components/glowing-effect
export function Docker() {
  const pathname = usePathname();
  console.log(pathname);
  const iconClassName = "w-full h-full";

  return (
    <FloatingDock
      mobileClassName="right-5 z-99 fixed bottom-5"
      desktopClassName="right-1/2 translate-x-1/2 z-99 fixed bottom-5"
      items={[
        {
          title: "Home",
          icon: (
            <IconHome
              className={cn(
                iconClassName,
                pathname === "/" ? "text-white" : "text-neutral-400"
              )}
            />
          ),
          href: "/",
        },
        {
          title: "Experience",
          href: "/experience",
          icon: (
            <IconBriefcase
              className={cn(
                iconClassName,
                pathname === "/experience" ? "text-white" : "text-neutral-400"
              )}
            />
          ),
        },
        {
          title: "Skills",
          href: "/skills",
          icon: (
            <IconUserCog
              className={cn(
                iconClassName,
                pathname === "/skills" ? "text-white" : "text-neutral-400"
              )}
            />
          ),
        },
        // {
        //   title: "About",
        //   href: "/about",
        //   icon: <IconUser className={iconClassName} />,
        // },
        {
          title: "GitHub",
          icon: <IconBrandGithub className={cn(iconClassName, "text-neutral-400")} />,
          href: "https://github.com/MuhammadRukon",
        },
        {
          title: "LinkedIn",
          icon: <IconBrandLinkedin className={cn(iconClassName, "text-neutral-400")} />,
          href: "https://www.linkedin.com/in/muhammadrukon/",
        },
        {
          title: "Projects",
          href: "/projects",
          icon: (
            <IconStack2
              className={cn(
                iconClassName,
                pathname === "/projects" ? "text-white" : "text-neutral-400"
              )}
            />
          ),
        },
        {
          title: "Education",
          icon: (
            <IconSchool
              className={cn(
                iconClassName,
                pathname === "/education" ? "text-white" : "text-neutral-400"
              )}
            />
          ),
          href: "/education",
        },
        {
          title: "Achievements",
          icon: (
            <IconMedal
              className={cn(
                iconClassName,
                pathname === "/achievements" ? "text-white" : "text-neutral-400"
              )}
            />
          ),
          href: "/achievements",
        },
      ]}
    />
  );
}
