import { capitalize } from "@/lib/utils";
import { usePathname } from "next/navigation";

export const usePageName = () => {
  const pathname = usePathname();
  const arrayOfPath = pathname.split("/").filter(Boolean);
  if (arrayOfPath.length === 0) return "Rukon";
  else {
    const lastElement = arrayOfPath.at(-1);
    return capitalize(lastElement as string);
  }
};
