"use client";
import PageContainer from "@/components/page-container/page-container";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function Blogs() {
  const pageTitle = usePageTitle();

  return (
    <PageContainer page={pageTitle}>
      <p className="text-center">This page will air soon when I get rich and famous.</p>
    </PageContainer>
  );
}
