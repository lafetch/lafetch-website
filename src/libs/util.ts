import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import GATracker from "./components/GATracker";

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}
