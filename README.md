[![Version][version-badge]][package]
[![MIT License][license-badge]][license]

## About

`react-theme-engine` is lightweight react library to change your theme. 

## Features

- Works in **React**
- Supports CSS variables
- Supports states via hook
- Lightweight react library (~500 bytes)
- Supports typescript

## Getting started

### Installation

```sh
npm install --save react-theme-engine
```

or using yarn

```sh
yarn add react-theme-engine
```

### Usage

Create a file named `theme.ts` to export provider and hook

```js
import { createTheme } from 'react-theme-engine';

const defaultTheme = {
  dark: {
    background: {
      color: 'white'
    },
    color: 'white'
  },
  light: {
    background: {
      color: 'black'
    },
    color: 'black'
  }
}

export const { ThemeProvider, useTheme } = createTheme(defaultTheme);
```

Wrap `ThemeProvider` component in your `App` to make it available to all components.

```jsx
import { ThemeProvider } from './theme.ts' 

<ThemeProvider>
  <App />
</ThemeProvider>
```

Use `css` variables to avoid inline styling
```scss
body {
  background-color: var(--background-color);
  color: var(--color);
}
```

Or use hook to access `colors` from `react`

```jsx
import { useTheme } from './theme.ts' 

function App() {
  const { currentTheme, changeTheme, colors } = useTheme();

  return <button 
    style={{ 
      color: colors.color, 
      background: colors.background.color 
    }}
    onClick={() => changeTheme(currentTheme === 'light' ? 'dark' : 'light')}
    >
      Change Theme
    </button>;
}
```

[version-badge]: https://img.shields.io/npm/v/react-theme-engine?style=flat-square
[package]: https://www.npmjs.com/package/react-theme-engine
[license-badge]: https://img.shields.io/npm/l/react-theme-engine.svg?style=flat-square
[license]: https://opensource.org/licenses/MIT