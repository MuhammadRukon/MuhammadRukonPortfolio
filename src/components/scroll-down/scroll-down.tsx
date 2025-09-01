import { ArrowDownIcon } from "lucide-react";
import React from "react";

export function ScrollDown() {
  return (
    <p className="absolute bottom-1/5 left-1/2 transform -translate-x-1/2 text-sm sm:text-base">
      Scroll down
      <ArrowDownIcon className="w-3.5 sm:w-6 h-3.5 sm:h-6 mx-auto animate-bounce mt-2" />
    </p>
  );
}
