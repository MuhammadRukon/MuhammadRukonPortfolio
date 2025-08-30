"use client";
import React from "react";
import { useModal } from "./ModalProvider";

export function HireMeModal() {
  const { openModal } = useModal();

  return (
    <div className="flex items-center justify-center">
      <button onClick={openModal} className="p-[1.5px] relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-red-900 via-blue-800 to-purple-700 rounded-full" />
        <div className="px-8 py-2 h-full text-xs sm:text-sm bg-black/80 rounded-full relative group transition duration-200 text-white hover:bg-black/60">
          Contact Me
        </div>
      </button>
    </div>
  );
}
