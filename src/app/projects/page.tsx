"use client";

import PageContainer from "@/components/page-container/page-container";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function Projects() {
  const pageTitle = usePageTitle();

  return (
    <div className="w-[85%] mx-auto">
      {/* TODO: */}
      {/* the page title will have gradient cards with card hover effect*/}
      {/* https://ui.aceternity.com/components/background-gradient */}
      {/* https://ui.aceternity.com/components/card-hover-effect */}
      <PageContainer page={pageTitle} />
    </div>
  );
}
