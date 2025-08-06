"use client";
import PageContainer from "@/components/page-container/page-container";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function Skills() {
  const pageTitle = usePageTitle();

  return <PageContainer page={pageTitle} />;
}
