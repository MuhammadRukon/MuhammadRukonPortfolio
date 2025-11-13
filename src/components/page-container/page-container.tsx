"use client";

import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import Disappoint from "../disappoint/disappoint";
import { usePageName } from "@/hooks/usePageName";

export type PageContainerProps = {
  children?: React.ReactNode;
};

export function PageContainer({ children }: PageContainerProps) {
  const page = usePageName();

  return (
    <div className="min-h-[95vh] w-full flex items-center justify-center relative text-white p-3 sm:p-10">
      <div className="w-full h-full absolute top-0 left-0">
        <TextHoverEffect
          text={page}
          isHomePage={page === "Home" || page === "Experience"}
        />
      </div>
      <div className="z-10 w-full">{children ?? <Disappoint />}</div>
    </div>
  );
}
