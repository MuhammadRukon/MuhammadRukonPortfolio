"use client";
import PageContainer from "@/components/page-container/page-container";
import { usePageTitle } from "@/hooks/usePageTitle";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useRef, useState } from "react";

export default function Achievements() {
  const pageTitle = usePageTitle();

  const content = [
    {
      title: "BSc in Computer Science and Engineering",
      subtitle: "National University",
      description: (
        <>
          <li>CGPA: 3.18</li>
          <li>Dhaka, Bangladesh</li>
          <li>2020-2025</li>
        </>
      ),
    },
    {
      title: "HSC - Science",
      subtitle: "Bangladesh International School and College",
      description: (
        <>
          <li>Riyadh, Saudi Arabia</li>
          <li>2017-2019</li>
        </>
      ),
    },
  ];
  const [activeCard, setActiveCard] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });
  return (
    <PageContainer page={pageTitle}>
      <div
        className="relative flex h-[20rem] sm:h-[30rem] bg-white/5 backdrop-blur-sm justify-center space-x-10 overflow-y-auto rounded-md p-10 "
        ref={ref}
      >
        <div className="div relative flex items-start px-4">
          <div className="max-w-2xl">
            {content.map((item, index) => (
              <motion.div
                key={item.title + index}
                className="my-10 sm:my-20"
                initial={{
                  scale: 0,
                }}
                animate={{
                  scale: activeCard === index ? 1.05 : 1,
                }}
                transition={{
                  duration: 0.5,
                }}
              >
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-lg sm:text-2xl font-bold text-slate-100"
                >
                  <p className=" flex items-center gap-2">{item.title}</p>
                </motion.h2>
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-xs sm:text-sm mt-1 max-w-sm text-slate-300"
                >
                  {item.subtitle}
                </motion.p>
                <motion.ol
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-xs sm:text-sm mt-4 max-w-sm text-slate-300 list-disc list-inside"
                >
                  {item.description}
                </motion.ol>
              </motion.div>
            ))}
            <div className="h-20 sm:h-40" />
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
