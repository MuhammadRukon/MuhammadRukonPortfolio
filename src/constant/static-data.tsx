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

const day = 60 * 60 * 24;

export enum Duration {
  Week = day * 7,
  Day = day,
  Month = day * 30,
  Year = day * 365,
}

export const CAREER_START_DATE = new Date("Apr 2024");

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
