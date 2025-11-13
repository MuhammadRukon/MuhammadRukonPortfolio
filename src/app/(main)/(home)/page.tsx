import { HireMeModal } from "@/components/modal/HireMeModal";
import { PageContainer } from "@/components/page-container/page-container";
import { FlipWords } from "@/components/ui/flip-words";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { designations } from "@/constant/static-data";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

export default function Home() {
  const buttonClassName =
    "dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 text-xs sm:text-sm";

  return (
    <div className="h-screen flex items-center justify-center">
      <PageContainer>
        <div className="text-white mt-16 text-center flex flex-col items-center justify-center">
          <h1 className=" text-2xl md:text-4xl font-bold">Muhammad Sheikh Rukon</h1>
          <div className="text-base md:text-xl mt-2">
            <FlipWords words={designations} />
          </div>

          <p className="text-xs sm:text-sm my-8">
            Other than coding, I love to take pictures, play football and video games.
          </p>

          <div className="flex items-center gap-4">
            <HireMeModal />

            <a
              href="/Software_Engineer_Muhammad_Sheikh_Rukon.pdf"
              download="Software_Engineer_Muhammad_Sheikh_Rukon.pdf"
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

          <div className="flex items-center gap-4 mt-16">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/muhammadrukon/"
              className="cursor-pointer border-2 border-white p-2 rounded-sm"
            >
              <IconBrandLinkedin className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://github.com/MuhammadRukon"
              className="cursor-pointer border-2 border-white p-2 rounded-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandGithub className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
