import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(word: string): string {
  const firstLetter = word.charAt(0).toUpperCase();
  const rest = word.slice(1);
  return firstLetter + rest;
}

// export function customFetch<T>(endpoint: string) {
//   let data: T | null = null;
//   let error: unknown | null = null;

//     try {
//       const response = await fetch(`/api/${endpoint}`);
//       const d = await response.json();

//       if (!response.ok) {
//         throw new Error(d.message || "Failed to fetch");
//       }

//       data = d.docs as T;
//     } catch (err) {
//       error = err;
//     }å
  


//   return { data, error };
// }
