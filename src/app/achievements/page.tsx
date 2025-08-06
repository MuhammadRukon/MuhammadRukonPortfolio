"use client";

import PageContainer from "@/components/page-container/page-container";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function Achievements() {
  const pageTitle = usePageTitle();

  return <PageContainer page={pageTitle} />;
}
