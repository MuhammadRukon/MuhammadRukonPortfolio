"use client";

import PageContainer from "@/components/page-container/page-container";
import { ScrollDown } from "@/components/scroll-down/scroll-down";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function Projects() {
  const pageTitle = usePageTitle();

  const content = [
    {
      title: "Outlet Expense",
      subtitle: "React.js, Tailwind, Redux, Recharts, JsPDF",
      description: (
        <>
          <li>
            Delivered core POS features, ensuring responsiveness, including sales and
            purchase billing, invoice and PDF generation.
          </li>
          <li>
            Collaborated with UI/UX and backend teams, applying SDLC best practices,
            improving team efficiency and product quality.
          </li>
        </>
      ),
      link: "https://pos.outletexpense.com/login",
    },
    {
      title: "HadithKhujo",
      subtitle: "Vite-react, Tailwind, RTK, Express.js, Mongoose, Firebase",
      description: (
        <>
          <li>
            An Islamic (Hadith) web app featuring a responsive UI, multilingual support,
            night mode.
          </li>
          <li>Indexed search functionality for both English and Bangla.</li>
          <li>Authentication, bookmarks, categorized hadith.</li>
        </>
      ),
      link: "https://hadithkhujo.netlify.app/",
    },
    {
      title: "Frete",
      subtitle:
        "Vite-react, Node.js, Firestore, Firebase cloud function, Tailwind, ContextAPI & Stripe.",
      description: (
        <>
          <li>
            A freight-sharing web app built with firebase cloud function (serverless
            architecture).
          </li>
          <li>Drivers can explore requests, view details after login and purchase.</li>
          <li>Buy credits using Stripe payment gateway.</li>
        </>
      ),
      link: "https://frete-a8155.web.app/",
    },
  ];
  return (
    <div className="w-[85%] mx-auto">
      <PageContainer page={pageTitle}>
        <ScrollDown />
      </PageContainer>
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-3xl sm:text-5xl font-semibold text-black dark:text-white">
              Freelance Projects
            </h1>
          </>
        }
      >
        <StickyScroll content={content} />
      </ContainerScroll>
    </div>
  );
}
