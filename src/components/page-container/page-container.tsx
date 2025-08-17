import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { PageContainerProps } from "./page-container.types";
import Disappoint from "../disappoint/disappoint";

export default function PageContainer({ page, children }: PageContainerProps) {
  // TODO: FIX check
  const isHomePage = page === "RUKON" || page === "Experience";
  return (
    <div className="min-h-[95vh] w-full flex items-center justify-center relative text-white p-3 sm:p-10">
      <div className="w-full h-full absolute top-0 left-0">
        <TextHoverEffect text={page} isHomePage={isHomePage} />
      </div>
      <div className="z-10">{children ?? <Disappoint />}</div>
    </div>
  );
}
