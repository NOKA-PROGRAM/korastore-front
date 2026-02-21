import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combine les classes Tailwind proprement
 * - Supprime les doublons
 * - Merge les classes conflictuelles (ex: px-2 + px-4)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}