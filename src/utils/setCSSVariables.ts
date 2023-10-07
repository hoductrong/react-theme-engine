import { Theme, ThemeName } from "src/types";
import { flatObject } from "./flatObject";

export function setCSSVariables<T extends Theme[ThemeName]>(theme: T) {
  const flattenTheme = flatObject(theme);

  Object.entries(flattenTheme).forEach(([key, value]) => {
    document.documentElement.style.setProperty(`--${key}`, value);
  });
};