export function createTheme<T extends {
  [themeName: string]: Object;
}>(theme: T): T {
  return theme;
}