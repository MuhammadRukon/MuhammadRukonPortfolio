"use client";
import PageContainer from "@/components/page-container/page-container";
import { usePageTitle } from "@/hooks/usePageTitle";
import {
  IconBrandCpp,
  IconBrandCss3,
  IconBrandFramerMotion,
  IconBrandGit,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandLine,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandPlanetscale,
  IconBrandReact,
  IconBrandReactNative,
  IconBrandRedux,
  IconBrandStorybook,
  IconBrandTailwind,
  IconBrandThreejs,
  IconBrandTypescript,
  IconBrandVercel,
  IconBrandVite,
} from "@tabler/icons-react";
import { useRef, useState, useEffect } from "react";

export interface ISkill {
  name: string;
  type: "language" | "frontend" | "backend" | "others";
  icon: React.ReactNode;
}

export default function Skills() {
  const pageTitle = usePageTitle();
  const containerRef = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);
  const containerRef3 = useRef<HTMLDivElement>(null);

  const className = "w-4 sm:w-5 h-4 sm:h-5";
  const skills: ISkill[] = [
    {
      name: "TypeScript",
      type: "language",
      icon: <IconBrandTypescript className={className} />,
    },
    {
      name: "JavaScript",
      type: "language",
      icon: <IconBrandJavascript fontWeight={100} className={className} />,
    },
    {
      name: "C++",
      type: "language",
      icon: <IconBrandCpp className={className} />,
    },
    {
      name: "React",
      type: "frontend",
      icon: <IconBrandReact className={className} />,
    },
    {
      name: "Next.js",
      type: "frontend",
      icon: <IconBrandNextjs className={className} />,
    },
    {
      name: "Tailwind CSS",
      type: "frontend",
      icon: <IconBrandTailwind className={className} />,
    },

    {
      name: "Node.js",
      type: "backend",
      icon: <IconBrandNodejs className={className} />,
    },
    {
      name: "Express.js",
      type: "backend",
      icon: <IconBrandNodejs className={className} />,
    },
    {
      name: "MongoDB",
      type: "backend",
      icon: <IconBrandMongodb className={className} />,
    },
    {
      name: "Redux Toolkit",
      type: "frontend",
      icon: <IconBrandRedux className={className} />,
    },
    {
      name: "Git",
      type: "others",
      icon: <IconBrandGit className={className} />,
    },
    {
      name: "HTML5",
      type: "frontend",
      icon: <IconBrandHtml5 className={className} />,
    },
    {
      name: "CSS3",
      type: "frontend",
      icon: <IconBrandCss3 className={className} />,
    },
    {
      name: "Styled Components",
      type: "frontend",
      icon: <IconBrandCss3 className={className} />,
    },
    {
      name: "Zustand",
      type: "frontend",
      icon: <IconBrandRedux className={className} />,
    },

    {
      name: "Single-SPA",
      type: "frontend",
      icon: <IconBrandReact className={className} />,
    },
    {
      name: "Shadcn UI",
      type: "frontend",
      icon: <IconBrandCss3 className={className} />,
    },
    {
      name: "Tanstack Query",
      type: "frontend",
      icon: <IconBrandRedux className={className} />,
    },
    {
      name: "Framer Motion",
      type: "frontend",
      icon: <IconBrandFramerMotion className={className} />,
    },
    {
      name: "React Three Fiber",
      type: "frontend",
      icon: <IconBrandThreejs className={className} />,
    },
    {
      name: "Expo",
      type: "others",
      icon: <IconBrandReactNative className={className} />,
    },
    {
      name: "REST API",
      type: "others",
      icon: <IconBrandLine className={className} />,
    },
    {
      name: "Mongoose",
      type: "backend",
      icon: <IconBrandMongodb className={className} />,
    },
    {
      name: "GitHub",
      type: "others",
      icon: <IconBrandGit className={className} />,
    },
    {
      name: "BitBucket",
      type: "others",
      icon: <IconBrandGit className={className} />,
    },
    {
      name: "Vitest",
      type: "others",
      icon: <IconBrandVite className={className} />,
    },
    {
      name: "Jest",
      type: "others",
      icon: <IconBrandVite className={className} />,
    },
    {
      name: "Jira",
      type: "others",
      icon: <IconBrandPlanetscale className={className} />,
    },
    {
      name: "Vercel",
      type: "others",
      icon: <IconBrandVercel className={className} />,
    },
    {
      name: "Postman",
      type: "others",
      icon: <IconBrandLine className={className} />,
    },
    {
      name: "Storybook",
      type: "others",
      icon: <IconBrandStorybook className={className} />,
    },
  ];
  return (
    <PageContainer page={pageTitle}>
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div>
          <h2 className="text-lg font-bold pl-1">Languages</h2>
          <div
            onDragOver={(e) => {
              e.preventDefault();
            }}
            ref={containerRef}
            className="relative space-y-2"
          >
            {skills
              .filter((skill) => skill.type === "language")
              .map((skill) => (
                <SkillTab key={skill.name} skill={skill} />
              ))}
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold pl-1">Frontend</h2>
          <div
            onDragOver={(e) => {
              e.preventDefault();
            }}
            ref={containerRef2}
            className="relative space-y-2"
          >
            {skills
              .filter((skill) => skill.type === "frontend")
              .map((skill) => (
                <SkillTab key={skill.name} skill={skill} />
              ))}
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold pl-1">Backend</h2>
          <div
            ref={containerRef3}
            onDragOver={(e) => {
              e.preventDefault();
            }}
            className="relative space-y-2"
          >
            {skills
              .filter((skill) => skill.type === "backend")
              .map((skill) => (
                <SkillTab key={skill.name} skill={skill} />
              ))}
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold pl-1">Others</h2>
          <div className="space-y-2">
            {skills
              .filter((skill) => skill.type === "others")
              .map((skill) => (
                <SkillTab key={skill.name} skill={skill} />
              ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

function SkillTab({ skill }: { skill: ISkill }) {
  const [isDragging, setIsDragging] = useState(false);
  const [pos, setPos] = useState<{
    top: number;
    left: number;
  }>({ top: 0, left: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      setPos((prev) => ({
        top: prev.top + e.movementY,
        left: prev.left + e.movementX,
      }));
    };

    const handleMouseUp = (e: MouseEvent) => {
      const parent = (e.target as HTMLElement).parentElement;
      const arrayOfNodes = Array.from(parent?.childNodes || []);
      const currentRect = (e.target as HTMLElement).getBoundingClientRect();
      const currentRectMid = currentRect.width / 2 + currentRect.height / 2;

      for (let i = 0; i < arrayOfNodes.length; i++) {
        const rect = (arrayOfNodes[i] as HTMLElement).getBoundingClientRect();
        const nodeMid = rect.width / 2 + rect.height / 2;
        console.log(nodeMid, currentRectMid);
        if (currentRectMid < nodeMid) {
          console.log("insert before");
          parent?.insertBefore(e.target as Node, arrayOfNodes[i] as Node);
        } else {
          console.log("append");
          parent?.appendChild(e.target as Node);
        }
        return;
      }

      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      style={
        isDragging
          ? {
              position: "fixed",
              top: pos.top,
              left: pos.left,
              zIndex: 1000,
              cursor: "grabbing",
            }
          : undefined
      }
      onMouseDown={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({ top: rect.top, left: rect.left });
        setIsDragging(true);
      }}
      className="flex cursor-grab gap-1 items-center justify-center border-1 w-fit px-2 py-1.5 rounded-md bg-black"
    >
      {skill.icon}
      <p className="text-xs sm:text-sm">{skill.name}</p>
    </div>
  );
}
