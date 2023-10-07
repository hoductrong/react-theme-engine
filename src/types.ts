import type { ReactNode } from "react";

export type Theme = {
  [key: string]: Theme | string;
};

export type ThemeProviderProps<T> = {
  children: ReactNode;
};

export type ThemeContextType<T extends Theme> = {
  colors: T[keyof T];
  currentTheme: keyof T;
  changeTheme: (themeName: keyof T) => void;
};
