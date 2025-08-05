import PageContainer from "@/components/page-container/page-container";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export default function Home() {
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <PageContainer page="RUKON">
        <div className="text-white flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">Muhammad Sheikh Rukon</h1>
          {/* TODO: */}
          {/* the title will have a text flip effect */}
          {/* https://ui.aceternity.com/components/container-text-flip */}
          <p className="text-xl">Software Engineer</p>
          <br />

          <p>
            Other than coding, I love to take pictures, play football and video games.
          </p>
          <br />
          <br />
          {/* TODO: */}
          {/* Add another button for hire me modal */}

          {/* https://ui.aceternity.com/components/glowing-effect */}
          <a href="https://drive.google.com/uc?export=download&id=1eVv2HTJk2GwfEmh8J5NBJC513TyRhbxm">
            <HoverBorderGradient
              containerClassName="rounded-full cursor-pointer"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <span>Download Resume</span>
            </HoverBorderGradient>
          </a>
        </div>
      </PageContainer>
    </div>
  );
}
