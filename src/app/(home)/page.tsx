import PageContainer from "@/components/page-container/page-container";
import { FlipWords } from "@/components/ui/flip-words";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export default function Home() {
  const words = [
    "Software Engineer",
    "Frontend Engineer",
    "Frontend Developer",
    "Full Stack Developer",
  ];
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <PageContainer page="RUKON">
        <div className="text-white text-center flex flex-col items-center justify-center">
          <h1 className=" text-2xl md:text-4xl font-bold">Muhammad Sheikh Rukon</h1>
          
          <div className="text-base md:text-xl mt-2">
            <FlipWords words={words} />
          </div>

          <p className="text-xs md:text-sm my-8">
            Other than coding, I love to take pictures, play football and video games.
          </p>
          {/* TODO: */}
          {/* Add another button for hire me modal */}

          {/* https://ui.aceternity.com/components/glowing-effect */}
          <a
            href="/Software_Engineer_Muhammad_Sheikh_Rukon.pdf"
            download="Software_Engineer_Muhammad_Sheikh_Rukon.pdf"
          >
            <HoverBorderGradient
              containerClassName="rounded-full cursor-pointer"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 text-xs md:text-sm"
            >
              <span>Download Resume</span>
            </HoverBorderGradient>
          </a>
        </div>
      </PageContainer>
    </div>
  );
}
