import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { PageContainerProps } from "./page-container.types";
import Disappoint from "../disappoint/disappoint";

export default function PageContainer({ page, children }: PageContainerProps) {
  return (
    <div className="h-[100vh] w-full flex items-center justify-center relative text-white p-10">
      <div className="w-full h-full absolute top-0 left-0">
        <TextHoverEffect text={page} />
      </div>
      <div className="z-10">{children ?? <Disappoint />}</div>
    </div>
  );
}
