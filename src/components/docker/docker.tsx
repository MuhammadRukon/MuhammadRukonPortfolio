import { localApi } from "@/lib/payload";
import { FloatingDock } from "../ui/floating-dock";

export async function Docker() {
  const iconClassName = "w-full h-full";

  const data = (await localApi("nav", false)) as {
    items: { title: string; icon: React.ReactNode; href: string }[];
  };
  //ques: how to get ts inference here?
  console.log(data);
  const items = data.items;

  return (
    <FloatingDock
      mobileClassName="right-5 z-50 fixed bottom-5"
      desktopClassName="right-1/2 translate-x-1/2 z-50 fixed bottom-5"
      items={items}
    />
  );
}
