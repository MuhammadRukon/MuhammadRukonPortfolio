// "use client";
// import { ReactNode, useEffect, useState } from "react";
// import { PageContainer } from "@/components/page-container/page-container";
// import { usePageTitle } from "@/hooks/usePageTitle";
// import { AnimatePresence, motion } from "motion/react";
// import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

// export default function Achievements() {
//   const pageTitle = usePageTitle();
//   const [data, setData] = useState<{
//     totalSolved: number;
//     totalQuestions: number;
//     easySolved: number;
//     totalEasy: number;
//     mediumSolved: number;
//     totalMedium: number;
//     hardSolved: number;
//     totalHard: number;
//   } | null>(null);

//   useEffect(() => {
//     fetch("https://leetcode-stats-api.herokuapp.com/MuhammadRukon")
//       .then((res) => res.json())
//       .then(setData)
//       .catch(console.error);
//   }, []);

//   if (!data)
//     return (
//       <PageContainer page={pageTitle}>
//         <div className="flex justify-center items-center h-60 text-gray-400">
//           Loading LeetCode stats...
//         </div>
//       </PageContainer>
//     );

//   const {
//     totalSolved,
//     totalQuestions,
//     easySolved,
//     totalEasy,
//     mediumSolved,
//     totalMedium,
//     hardSolved,
//     totalHard,
//   } = data;

//   const getPercent = (solved: number, total: number) =>
//     Math.round((solved / total) * 100);

//   return (
//     <PageContainer page={pageTitle}>
//       <>
//         <div className="py-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto px-8">
//           <div className="flex flex-1 justify-center md:justify-end items-center gap-4 mt-4 md:mt-0">
//             <div className="flex flex-col items-center bg-black/5 dark:bg-white/10 rounded-md py-3 px-4">
//               <div className="text-xs text-green-500 font-medium">Easy</div>
//               <div className="text-sm font-semibold">
//                 {easySolved}/{totalEasy}
//               </div>
//             </div>
//             <div className="flex flex-col items-center bg-black/5 dark:bg-white/10 rounded-md py-3 px-4">
//               <div className="text-xs text-yellow-500 font-medium">Medium</div>
//               <div className="text-sm font-semibold">
//                 {mediumSolved}/{totalMedium}
//               </div>
//             </div>
//             <div className="flex flex-col items-center bg-black/5 dark:bg-white/10 rounded-md py-3 px-4">
//               <div className="text-xs text-red-500 font-medium">Hard</div>
//               <div className="text-sm font-semibold">
//                 {hardSolved}/{totalHard}
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     </PageContainer>
//   );
// }

"use client";
import { PageContainer } from "@/components/page-container/page-container";

import { usePageTitle } from "@/hooks/usePageTitle";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function Achievements() {
  const pageTitle = usePageTitle();

  const [activeCard, setActiveCard] = useState(0);
  const [educationData, setEducationData] = useState<
    {
      title: string;
      subtitle: string;
      description: React.ReactNode;
      link: string;
    }[]
  >([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = educationData.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = educationData.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  //   const {
  //   totalSolved,
  //   totalQuestions,
  //   easySolved,
  //   totalEasy,
  //   mediumSolved,
  //   totalMedium,
  //   hardSolved,
  //   totalHard,
  // } = data;

  const [data, setData] = useState<{
    totalSolved: number;
    totalQuestions: number;
    easySolved: number;
    totalEasy: number;
    mediumSolved: number;
    totalMedium: number;
    hardSolved: number;
    totalHard: number;
  } | null>(null);

  useEffect(() => {
    fetch("https://leetcode-stats-api.herokuapp.com/MuhammadRukon")
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  return (
    <PageContainer page={pageTitle}>
      <div
        className="relative max-w-5xl mx-auto flex w-full h-[20rem] sm:h-[30rem] bg-white/5 backdrop-blur-sm justify-center space-x-10 overflow-y-auto rounded-md p-10 "
        ref={ref}
      >
        <div className="div relative flex items-start px-4">
          <div className="max-w-5xl">
            {educationData.map((item, index) => (
              <motion.div
                key={item.title + index}
                className="my-10 sm:my-20"
                initial={{ scale: 0 }}
                animate={{ scale: activeCard === index ? 1.05 : 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-lg sm:text-2xl font-bold text-slate-100"
                >
                  <p className=" flex items-center gap-2">{item.title}</p>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-xs sm:text-sm mt-1 max-w-sm text-slate-300"
                >
                  {item.subtitle}
                </motion.p>
                <motion.ol
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
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
