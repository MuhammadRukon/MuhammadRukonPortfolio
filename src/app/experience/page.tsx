"use client";

import PageContainer from "@/components/page-container/page-container";
import { Timeline } from "@/components/ui/timeline";
import { usePageTitle } from "@/hooks/usePageTitle";
import { ArrowDownIcon } from "lucide-react";

export default function Experience() {
  const pageTitle = usePageTitle();
  const data = [
    {
      title: "Flarie",
      content: (
        <div className="text-xs  md:text-sm">
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
      content: (
        <div className="text-xs  md:text-sm">
          <p className="mb-8 font-normal text-neutral-800 leading-relaxed dark:text-neutral-200">
            Dhaka, Bangladesh (Onsite)
            <br />
            Aug 2024 - Feb 2025
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
    {
      title: "Squad Innovators",
      content: (
        <div className="text-xs  md:text-sm">
          <p className="mb-8 font-normal text-neutral-800 leading-relaxed dark:text-neutral-200">
            Dhaka, Bangladesh (Onsite)
            <br />
            Jan 2024 - April 2024
          </p>
          <ol className="list-disc list-outside space-y-1">
            <li>
              Delivered core POS features, ensuring responsiveness, including sales and
              purchase billing and invoice and PDF generation.
            </li>
            <li>Collaborated with the UI/UX and backend teams.</li>
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
          <p className="absolute bottom-1/5 left-1/2 transform -translate-x-1/2 text-xs md:text-sm ">
            Scroll down{" "}
            <ArrowDownIcon className="w-2 md:w-4 h-2 md:h-4 mx-auto animate-bounce" />
          </p>
        </div>
      </PageContainer>
      <div className="relative w-full overflow-clip pb-64  md:pb-96">
        <Timeline data={data} />
      </div>
    </>
  );
}
