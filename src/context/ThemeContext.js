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
    primaryText: 'var(--surface)',
    muted: 'var(--muted)',
    mutedBorder: 'var(--muted-border)',
  },
  dark: {
    name: 'dark',
    bg: '#141312',
    surface: '#1b1a18',
    text: '#f1efe9',
    subtext: '#c7c3bb',
    border: '#3a362d',
    primary: '#b59a7a',
    primaryBorder: '#8e785f',
    primaryText: '#141312',
    muted: '#4a453b',
    mutedBorder: '#3b362d',
  }
};

const ThemeContext = createContext({
  themeName: 'light',
  theme: themes.light,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);
export default ThemeContext;
