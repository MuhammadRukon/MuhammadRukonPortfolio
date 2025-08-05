import { capitalize } from "@/lib/utils";
import { usePathname } from "next/navigation";

export const usePageTitle = () => {
  const pathname = usePathname();
  const arrayOfPath = pathname.split("/").filter(Boolean);
  if (arrayOfPath.length === 0) return "Home";
  else {
    const lastElement = arrayOfPath.at(-1);
    return capitalize(lastElement as string);
  }
};
