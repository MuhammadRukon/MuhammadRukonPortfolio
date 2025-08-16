"use client";

import PageContainer from "@/components/page-container/page-container";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function Achievements() {
  const pageTitle = usePageTitle();

  return (
    <PageContainer page={pageTitle}>
      <p className="text-center">
        I am alive. <br />
        That&apos;s the only achievement I currently have. 🥲
      </p>
    </PageContainer>
  );
}
