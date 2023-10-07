import * as React from 'react';
import type { ReactNode } from 'react';
import { setCSSVariables } from './utils/setCSSVariables';
import { Theme, ThemeName } from './types';

type ThemeProviderProps<T> = {
  children: ReactNode;
};

type ThemeContextType<T extends Theme> = {
  colors: T[ThemeName];
  currentTheme: keyof T;
  changeTheme: (themeName: keyof T) => void;
};

let themeProvider: any = null;

export function createTheme<T extends Theme>(theme: T) {
  const selectedThemeName = Object.keys(theme)[0];
  const themeDefaultValue: ThemeContextType<T> = {
    colors: theme[selectedThemeName] as T[ThemeName],
    changeTheme: () => {},
    currentTheme: selectedThemeName,
  };

  const ThemeContext = React.createContext<ThemeContextType<T>>(themeDefaultValue);

  const ThemeProvider = ({ children }: ThemeProviderProps<T>) => {
    const [currentTheme, setCurrentTheme] = React.useState<keyof T>(selectedThemeName);
  
    const changeTheme = React.useCallback((themeName: keyof T) => {
      setCurrentTheme(themeName);
    }, [currentTheme]);
  
    React.useEffect(() => {
      setCSSVariables(theme[currentTheme]);
    }, [currentTheme]);
  
    const context = React.useMemo<ThemeContextType<T>>(() => {
      return {
        colors: theme[currentTheme] as T[ThemeName],
        changeTheme,
        currentTheme,
      };
    }, [currentTheme]);
  
    return (
      <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
    );
  };

  const useTheme = () => {
    return React.useContext(ThemeContext);
  }

  return {
    ThemeProvider,
    useTheme
  }
}