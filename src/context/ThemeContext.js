import { createContext, useContext } from 'react';

export const themes = {
  light: {
    name: 'light',
    bg: 'var(--bg)',
    surface: 'var(--surface)',
    text: 'var(--text)',
    subtext: 'var(--subtext)',
    border: 'var(--border)',
    primary: 'var(--primary)',
    primaryBorder: 'var(--primary-border)',
    primaryText: 'var(--primary-text)',
    muted: 'var(--muted)',
    mutedBorder: 'var(--muted-border)',
  },
  dark: {
    name: 'dark',
    bg: 'var(--bg)',
    surface: 'var(--surface)',
    text: 'var(--text)',
    subtext: 'var(--subtext)',
    border: 'var(--border)',
    primary: 'var(--primary)',
    primaryBorder: 'var(--primary-border)',
    primaryText: 'var(--primary-text)',
    muted: 'var(--muted)',
    mutedBorder: 'var(--muted-border)',
  }
};

const ThemeContext = createContext({
  themeName: 'light',
  theme: themes.light,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);
export default ThemeContext;
