import { HireMeModal } from "@/components/modal/HireMeModal";
import { PageContainer } from "@/components/page-container/page-container";
import { FlipWords } from "@/components/ui/flip-words";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { payload } from "@/lib/payload";
import * as TablerIcons from "@tabler/icons-react";
import Link from "next/link";

export const revalidate = 604800; // 1 week in seconds

export default async function Home() {
  const { title, summary, designations, resume, socials } = await payload.findGlobal({
    slug: "home",
  });

  const buttonClassName =
    "dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 text-xs sm:text-sm";

  // Use the URL from Vercel Blob Storage directly
  const resumeUrl =
    typeof resume === "object" && resume?.url
      ? resume.url
      : "/Software_Engineer_Muhammad_Sheikh_Rukon.pdf";

  return (
    <div className="h-screen flex items-center justify-center">
      <PageContainer>
        <div className="text-white mt-16 text-center flex flex-col items-center justify-center">
          <h1 className=" text-2xl md:text-4xl font-bold">{title}</h1>
          <div className="text-base md:text-xl mt-2">
            <FlipWords words={designations} />
          </div>

          <p className="text-xs sm:text-sm my-8">{summary}</p>

          <div className="flex items-center gap-4">
            <HireMeModal />

            <a
              href={resumeUrl}
              download="Software_Engineer_Muhammad_Sheikh_Rukon.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HoverBorderGradient
                containerClassName="rounded-full cursor-pointer"
                as="button"
                className={buttonClassName}
              >
                <span>Download Resume</span>
              </HoverBorderGradient>
            </a>
          </div>

          {/* TODO: social link implement with label, icon and href */}
          <div className="flex items-center gap-4 mt-16">
            {socials?.map((social) => {
              const TablerIcon =
                social.icon &&
                (TablerIcons[
                  social.icon as keyof typeof TablerIcons
                ] as React.ComponentType<{
                  className: string;
                }>);

              return (
                <Link
                  key={social.id}
                  href={social.link}
                  className="border-2 border-stone-500 p-2 rounded-full"
                >
                  {TablerIcon && <TablerIcon className="w-5 h-5" />}
                </Link>
              );
            })}
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
