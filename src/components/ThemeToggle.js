import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { themeName, toggleTheme, theme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      aria-label="toggle theme"
      style={{
        backgroundColor: theme.primary,
        color: theme.primaryText,
        border: `1px solid ${theme.primaryBorder}`,
        borderRadius: '4px',
        padding: '8px 12px',
        fontFamily: '"Geist Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
        textTransform: 'lowercase',
        cursor: 'pointer'
      }}
    >
      {themeName === 'light' ? 'dark mode' : 'light mode'}
    </button>
  );
}
