"use client";

import { usePageTitle } from "@/hooks/usePageTitle";

import PageContainer from "@/components/page-container/page-container";

export default function About() {
  const pageTitle = usePageTitle();

  return <PageContainer page={pageTitle} />;
}
