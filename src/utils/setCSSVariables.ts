import { Obj, Theme } from "src/types";
import { flatObject } from "./flatObject";

export function setCSSVariables<T extends Theme>(theme: T) {
  const flattenTheme = flatObject(theme);

  Object.entries(flattenTheme).forEach(([key, value]) => {
    document.documentElement.style.setProperty(`--${key}`, value);
  });
};