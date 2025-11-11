"use client";

import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { PageContainerProps } from "./page-container.types";
import Disappoint from "../disappoint/disappoint";
import { usePageTitle } from "@/hooks/usePageTitle";

export function PageContainer({ children }: PageContainerProps) {
  const page = usePageTitle();
  const isHomePage = page === "RUKON" || page === "Experience";
  return (
    <div className="min-h-[95vh] w-full flex items-center justify-center relative text-white p-3 sm:p-10">
      <div className="w-full h-full absolute top-0 left-0">
        <TextHoverEffect text={page} isHomePage={isHomePage} />
      </div>
      <div className="z-10 w-full">{children ?? <Disappoint />}</div>
    </div>
  );
}
