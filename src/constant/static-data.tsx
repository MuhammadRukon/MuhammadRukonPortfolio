import { SkillType } from "@/enums";
import { ISkill } from "@/interfaces";
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
  IconBrandPrisma,
  IconBrandReact,
  IconBrandReactNative,
  IconBrandRedux,
  IconBrandStorybook,
  IconBrandTailwind,
  IconBrandThreejs,
  IconBrandTypescript,
  IconBrandVercel,
  IconBrandVite,
  IconForms,
  IconSql,
} from "@tabler/icons-react";

export const designations = [
  "Software Engineer",
  "Frontend Engineer",
  "Frontend Developer",
  "Full Stack Developer",
];

export const CAREER_START_DATE = new Date("Apr 2024");

const className = "w-4 sm:w-5 h-4 sm:h-5";

export const skills: ISkill[] = [
  {
    name: "TypeScript",
    type: SkillType.Language,
    icon: <IconBrandTypescript className={className} />,
  },
  {
    name: "JavaScript",
    type: SkillType.Language,
    icon: <IconBrandJavascript fontWeight={100} className={className} />,
  },
  {
    name: "C++",
    type: SkillType.Language,
    icon: <IconBrandCpp className={className} />,
  },
  {
    name: "React.js",
    type: SkillType.Frontend,
    icon: <IconBrandReact className={className} />,
  },
  {
    name: "Next.js",
    type: SkillType.Frontend,
    icon: <IconBrandNextjs className={className} />,
  },
  {
    name: "Tailwind",
    type: SkillType.Frontend,
    icon: <IconBrandTailwind className={className} />,
  },
  {
    name: "Node.js",
    type: SkillType.Backend,
    icon: <IconBrandNodejs className={className} />,
  },
  {
    name: "Express.js",
    type: SkillType.Backend,
    icon: <IconBrandNodejs className={className} />,
  },
  {
    name: "MongoDB",
    type: SkillType.Backend,
    icon: <IconBrandMongodb className={className} />,
  },
  {
    name: "PostgreSQL",
    type: SkillType.Backend,
    icon: <IconSql className={className} />,
  },
  {
    name: "Git",
    type: SkillType.Others,
    icon: <IconBrandGit className={className} />,
  },
  {
    name: "HTML5",
    type: SkillType.Frontend,
    icon: <IconBrandHtml5 className={className} />,
  },
  {
    name: "CSS3",
    type: SkillType.Frontend,
    icon: <IconBrandCss3 className={className} />,
  },
  {
    name: "Zustand",
    type: SkillType.Frontend,
    icon: <IconBrandRedux className={className} />,
  },
  {
    name: "Single-SPA",
    type: SkillType.Frontend,
    icon: <IconBrandReact className={className} />,
  },
  {
    name: "Shadcn UI",
    type: SkillType.Frontend,
    icon: <IconBrandCss3 className={className} />,
  },
  {
    name: "Tanstack Query",
    type: SkillType.Frontend,
    icon: <IconBrandRedux className={className} />,
  },
  {
    name: "Framer Motion",
    type: SkillType.Frontend,
    icon: <IconBrandFramerMotion className={className} />,
  },
  {
    name: "React Three Fiber",
    type: SkillType.Frontend,
    icon: <IconBrandThreejs className={className} />,
  },
  {
    name: "Expo",
    type: SkillType.Others,
    icon: <IconBrandReactNative className={className} />,
  },
  {
    name: "Mongoose",
    type: SkillType.Backend,
    icon: <IconBrandMongodb className={className} />,
  },
  {
    name: "Prisma",
    type: SkillType.Backend,
    icon: <IconBrandPrisma className={className} />,
  },
  {
    name: "GitHub",
    type: SkillType.Others,
    icon: <IconBrandGit className={className} />,
  },
  {
    name: "Vitest",
    type: SkillType.Others,
    icon: <IconBrandVite className={className} />,
  },
  {
    name: "Zod",
    type: SkillType.Others,
    icon: <IconForms className={className} />,
  },
  {
    name: "Jest",
    type: SkillType.Others,
    icon: <IconBrandVite className={className} />,
  },
  {
    name: "Redux Toolkit",
    type: SkillType.Frontend,
    icon: <IconBrandRedux className={className} />,
  },
  {
    name: "Jira",
    type: SkillType.Others,
    icon: <IconBrandPlanetscale className={className} />,
  },
  {
    name: "Vercel",
    type: SkillType.Others,
    icon: <IconBrandVercel className={className} />,
  },
  {
    name: "Postman",
    type: SkillType.Others,
    icon: <IconBrandLine className={className} />,
  },
  {
    name: "Storybook",
    type: SkillType.Frontend,
    icon: <IconBrandStorybook className={className} />,
  },
  {
    name: "Styled Components",
    type: SkillType.Frontend,
    icon: <IconBrandCss3 className={className} />,
  },
  {
    name: "BitBucket",
    type: SkillType.Others,
    icon: <IconBrandGit className={className} />,
  },
  {
    name: "REST API",
    type: SkillType.Others,
    icon: <IconBrandLine className={className} />,
  },
];

export const projectData = [
  {
    title: "Tecnologia (In Progress)",
    subtitle:
      "Next.js, Tailwind, Prisma, PostgreSQL, Zod, Zustand, Shadcn UI, Tanstack Query, Vitest",
    description: (
      <>
        <li>An ecommerce platform for selling technology products.</li>
        <li>User can login and add products to the cart and checkout.</li>
        <li>Admin can login and add products, category, brand to the database.</li>
        <li>Analytics for sales and products.</li>
      </>
    ),
    link: "https://tecnologia-tech.vercel.app/",
  },
  {
    title: "Iqra",
    subtitle: "Next.js, Vite-react, Tailwind, RTK, Express.js, Mongoose, Firebase",
    description: (
      <>
        <li>
          Architected a Quran app with SSR and Next.js Api routes. Includes Zakat &
          Inheritance Calculator.
        </li>
        <li>Implementated infinite scroll and pagination for the Quran.</li>
        <li>
          An Islamic (Hadith) web app featuring a responsive UI, multilingual support,
          night mode.
        </li>
        <li>Indexed search functionality for both English and Bangla.</li>
        <li>Authentication, bookmarks, categorized hadith.</li>
      </>
    ),
    link: "https://iqra-online.vercel.app/",
  },
  {
    title: "Frete",
    subtitle:
      "Vite-react, Node.js, Firestore, Firebase cloud function, Tailwind, ContextAPI & Stripe.",
    description: (
      <>
        <li>
          A freight-sharing web app built with firebase cloud function (serverless
          architecture).
        </li>
        <li>Drivers can explore requests, view details after login and purchase.</li>
        <li>Buy credits using Stripe payment gateway.</li>
      </>
    ),
    link: "https://frete-a8155.web.app/",
  },
  {
    title: "Outlet Expense",
    subtitle: "React.js, Tailwind, Redux, Recharts, JsPDF",
    description: (
      <>
        <li>
          Delivered core POS features, ensuring responsiveness, including sales and
          purchase billing, invoice and PDF generation.
        </li>
        <li>
          Collaborated with UI/UX and backend teams, applying SDLC best practices,
          improving team efficiency and product quality.
        </li>
      </>
    ),
    link: "https://pos.outletexpense.com/login",
  },
];

export const experienceData = [
  {
    title: "Flarie",
    link: "https://flarie.com",
    content: (
      <div className="text-xs sm:text-sm">
        <p className="mb-8 font-normal text-neutral-800 leading-relaxed dark:text-neutral-200">
          Stockholm, Sweden (Remote)
          <br />
          Feb 2025 - Present
        </p>
        <ol className="list-disc list-outside space-y-1">
          <li>
            Worked on microfrontend architecture using Single-SPA and practiced TDD in an
            agile environment.
          </li>
          <li>Contributed to multiple core studio features currently in production.</li>
          <li>
            Increased test coverage for the main user-facing app to ensure stability for
            3.4M players and safeguard future refactoring.
          </li>
          <li>
            Ensured full test coverage of the game engine server&apos;s core components,
            used by over 10M unique players in the past three years.
          </li>
          <li>
            Enhanced the internal UI library, ensuring backward compatibility and
            improving reusability. Successfully refactored and implemented components in 2
            out of 14 microfrontends.
          </li>
          <li>
            Improved security across all microfrontend applications by preventing source
            code exposure in Chrome dev tools.
          </li>
        </ol>
      </div>
    ),
  },
  {
    title: "Antopolis",
    link: "https://antopolis.io",
    content: (
      <div className="text-xs  sm:text-sm">
        <p className="mb-8 font-normal text-neutral-800 leading-relaxed dark:text-neutral-200">
          Dhaka, Bangladesh (Onsite)
          <br />
          Apr 2024 - Feb 2025
        </p>
        <ol className="list-disc list-outside space-y-1">
          <li>Delivered MERN-based projects by collaborating with the UI/UX team.</li>
          <li>Mentored interns regarding UI standards and frontend design principles.</li>
          <li>Reviewed codes and provided feedbacks.</li>
          <li>Created frontend starter template to save time doing repetitive work.</li>
          <li>Built multiple reusable components.</li>
        </ol>
      </div>
    ),
  },
];
