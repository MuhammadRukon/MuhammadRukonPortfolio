"use client";
import { PageContainer } from "@/components/page-container/page-container";
import { useEffect, useState } from "react";

interface LeetCodeStats {
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
}
export default function Achievements() {
  const dummyData: LeetCodeStats = {
    easySolved: 0,
    hardSolved: 0,
    mediumSolved: 0,
    totalEasy: 0,
    totalHard: 0,
    totalMedium: 0,
  };
  const [data, setData] = useState<LeetCodeStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://leetcode-stats-api.herokuapp.com/MuhammadRukon"
        );

        if (!response.ok) {
          throw new Error("failed to fetch");
        }

        const data: LeetCodeStats = await response.json();

        setData(data);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
        setData(dummyData);
      }
    };

    fetchData();
  }, []);

  return (
    <PageContainer>
      <div className="relative max-w-5xl mx-auto flex w-full h-80 sm:h-120 bg-white/5 backdrop-blur-sm justify-center space-x-10 overflow-y-auto rounded-md p-10 ">
        <div className="div relative flex items-start px-4">
          <div className="max-w-5xl">
            <h2 className="text-2xl font-bold text-center">LeetCode Stats</h2>
            <div className="py-6 flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto px-8">
              <div className="flex flex-col items-center bg-black/5 dark:bg-white/10 rounded-md py-3 px-4">
                <div className="text-xs text-green-500 font-medium">Easy</div>
                <div className="text-sm font-semibold flex items-center gap-0.5">
                  {isLoading ? <Skeleton /> : data?.easySolved}
                  <span>/</span>
                  {isLoading ? <Skeleton /> : data?.totalEasy}
                </div>
              </div>
              <div className="flex flex-col items-center bg-black/5 dark:bg-white/10 rounded-md py-3 px-4">
                <div className="text-xs text-yellow-500 font-medium">Medium</div>
                <div className="text-sm font-semibold flex items-center gap-0.5">
                  {isLoading ? <Skeleton /> : data?.mediumSolved}
                  <span>/</span>
                  {isLoading ? <Skeleton /> : data?.totalMedium}
                </div>
              </div>
              <div className="flex flex-col items-center bg-black/5 dark:bg-white/10 rounded-md py-3 px-4">
                <div className="text-xs text-red-500 font-medium">Hard</div>
                <div className="text-sm font-semibold flex items-center gap-0.5">
                  {isLoading ? <Skeleton /> : data?.hardSolved}
                  <span>/</span>
                  {isLoading ? <Skeleton /> : data?.totalHard}
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-center mt-10">Fiverr Stats</h2>
            <div className="py-6 flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto px-8">
              <div className="flex flex-col items-center bg-black/5 dark:bg-white/10 rounded-md py-3 px-4">
                <div className="text-sm text-green-500 font-bold">5 ⭐</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

function Skeleton() {
  return <p className="w-3 h-4 bg-slate-600 animate-pulse inline-block rounded-xs"></p>;
}
