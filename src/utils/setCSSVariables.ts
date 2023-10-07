import { Theme } from "src/types";
import { flatObject } from "./flatObject";

export function setCSSVariables<T extends Theme[keyof Theme]>(theme: T) {
  if (typeof window === 'undefined') return;
  
  const flattenTheme = flatObject(theme);

  Object.entries(flattenTheme).forEach(([key, value]) => {
    document.documentElement.style.setProperty(`--${key}`, value);
  });
};