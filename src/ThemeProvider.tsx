import React from 'react';
import type { ReactNode } from 'react';
import { setCSSVariables } from './utils/setCSSVariables';
import { Theme, ThemeName } from './types';

type ThemeProviderProps<T> = {
  children: ReactNode;
  theme: T;
};

type ThemeContextType<T extends Theme> = {
  colors: T;
  currentTheme: keyof T;
  toggleTheme: (themeName: ThemeName) => void;
};

const themeDefaultValue: ThemeContextType<{dark: {}, light: {}}> = {
  colors: {dark: {}, light: {}},
  toggleTheme: () => {},
  currentTheme: 'light',
};

const ThemeContext = React.createContext<ThemeContextType<{dark: {}, light: {}}>>(themeDefaultValue);

function ThemeProvider<T extends Theme>({ children, theme }: ThemeProviderProps<T>) {
  const [currentTheme, setCurrentTheme] = React.useState<ThemeName>('');

  const toggleTheme = React.useCallback((themeName: ThemeName) => {
    setCurrentTheme(themeName);
  }, [currentTheme]);

  React.useEffect(() => {
    setCSSVariables(theme[currentTheme]);
  }, [currentTheme]);

  const context = React.useMemo<ThemeContextType<T>>(() => {
    return {
      colors: theme[currentTheme],
      toggleTheme,
      currentTheme,
    };
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return React.useContext(ThemeContext);
};

export default ThemeProvider;
