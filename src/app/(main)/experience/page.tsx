import { CAREER_START_DATE, experienceData } from "@/constant/static-data";

import { PageContainer } from "@/components/page-container/page-container";
import { ScrollDown } from "@/components/scroll-down/scroll-down";
import { Timeline } from "@/components/ui/timeline";

export default function Experience() {
  const yearsOfExperience = (
    (new Date().getTime() - new Date(CAREER_START_DATE).getTime()) /
    1000 /
    60 /
    60 /
    24 /
    365
  ).toFixed(1);

  return (
    <>
      <PageContainer>
        <div className="px-4 md:px-8 lg:px-10 text-center">
          <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white">
            Career as a Software Engineer
          </h2>

          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base ">
            With over <strong>{yearsOfExperience} years of experience</strong> working
            both locally and internationally, here&apos;s a timeline of my journey...
          </p>
          <ScrollDown />
        </div>
      </PageContainer>
      <div className="relative w-full overflow-clip pb-96">
        <Timeline data={experienceData} />
      </div>
    </>
  );
}
