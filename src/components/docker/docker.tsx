import { payload } from "@/lib/payload";
import { FloatingDock } from "../ui/floating-dock";
import { Duration } from "@/constant/static-data";

export const revalidate = Duration.Week;

export async function Docker() {
  // const iconClassName = "w-full h-full";
  const data = await payload.findGlobal({ slug: "nav" });

  //ques: how to get ts inference here?
  const items = data.items as { title: string; icon: React.ReactNode; href: string }[];

  return (
    <FloatingDock
      mobileClassName="right-5 z-50 fixed bottom-5"
      desktopClassName="right-1/2 translate-x-1/2 z-50 fixed bottom-5"
      items={items}
    />
  );
}
