"use client";

import PageContainer from "@/components/page-container/page-container";
import { ScrollDown } from "@/components/scroll-down/scroll-down";
import { Timeline } from "@/components/ui/timeline";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function Experience() {
  const pageTitle = usePageTitle();
  const data = [
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
              Worked on microfrontend architecture using Single-SPA and practiced TDD in
              an agile environment.
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
              improving reusability. Successfully refactored and implemented components in
              2 out of 14 microfrontends.
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
            <li>
              Mentored interns regarding UI standards and frontend design principles.
            </li>
            <li>Reviewed codes and provided feedbacks.</li>
            <li>Created frontend starter template to save time doing repetitive work.</li>
            <li>Built multiple reusable components.</li>
          </ol>
        </div>
      ),
    },
  ];
  return (
    <>
      <PageContainer page={pageTitle}>
        <div className=" px-4 md:px-8 lg:px-10 text-center">
          <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white">
            Career as a Software Engineer
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base ">
            With over one and a half years of experience working both locally and
            internationally. Here&apos;s a timeline of my journey.
          </p>
          <ScrollDown />
        </div>
      </PageContainer>
      <div className="relative w-full overflow-clip pb-96">
        <Timeline data={data} />
      </div>
    </>
  );
}
