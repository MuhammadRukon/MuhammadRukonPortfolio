"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { encode } from "qss";
import { IconExternalLink } from "@tabler/icons-react";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    subtitle: string;
    description: React.ReactNode;
    link: string;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
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
      if (distance - 0.08 < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
    "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
    "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  const params = encode({
    url: content[activeCard].link,
    screenshot: true,
    meta: false,
    embed: "screenshot.url",
    colorScheme: "dark",
    "viewport.isMobile": false,
    "viewport.deviceScaleFactor": 1,
    "viewport.width": 1220,
    "viewport.height": 880,
  });
  const src = `https://api.microlink.io/?${params}`;

  return (
    <motion.div
      animate={
        {
          // backgroundColor: backgroundColors[activeCard % backgroundColors.length],
        }
      }
      className="relative flex h-[30rem] bg-neutral-900 justify-center space-x-10 overflow-y-auto rounded-md p-10 "
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <motion.div
              key={item.title + index}
              className="my-20"
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
                <a
                  href={item.link}
                  target="_blank"
                  className=" flex items-center gap-2"
                  rel="noopener noreferrer"
                >
                  {item.title} <IconExternalLink className="w-4 h-4" />
                </a>
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
                className="text-xs sm:text-sm mt-4 max-w-sm text-slate-300 list-disc list-outside space-y-1.5"
              >
                {item.description}
              </motion.ol>
            </motion.div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-10 hidden h-72 w-96 overflow-hidden rounded-md bg-white lg:block",
          contentClassName
        )}
      >
        <a
          href={content[activeCard].link}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full h-full"
        >
          <img
            src={src}
            alt={content[activeCard].title}
            width={200}
            height={125}
            className="w-full h-full object-cover bg-top"
          />
        </a>
      </motion.div>
    </motion.div>
  );
};
