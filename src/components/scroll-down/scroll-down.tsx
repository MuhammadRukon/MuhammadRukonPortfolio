import { ArrowDownIcon } from "lucide-react";
import React from "react";

export function ScrollDown() {
  return (
    <p className="absolute bottom-1/5 left-1/2 transform -translate-x-1/2 text-xs sm:text-sm">
      Scroll down
      <ArrowDownIcon className="w-2 md:w-4 h-2 md:h-4 mx-auto animate-bounce" />
    </p>
  );
}
