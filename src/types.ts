export type Obj<T> = {
  [key: string]: string | T;
};

export type Theme = {
  [key: string]: Theme | string;
};

export type ThemeName = keyof Theme;