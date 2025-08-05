"use client";

import PageContainer from "@/components/page-container/page-container";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function Projects() {
  const pageTitle = usePageTitle();

  return (
    <div className="w-[85%] mx-auto">
      <PageContainer page={pageTitle} />
    </div>
  );
}
