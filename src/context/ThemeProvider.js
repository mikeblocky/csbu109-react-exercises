import React, { useEffect, useMemo, useState } from 'react';
import ThemeContext, { themes } from './ThemeContext';

export default function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark' || saved === 'light' ? saved : 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', themeName);
    // keep body colors in sync so backgrounds outside React also match
    document.body.style.backgroundColor = themes[themeName].bg;
    document.body.style.color = themes[themeName].text;
  }, [themeName]);

  const value = useMemo(() => ({
    themeName,
    theme: themes[themeName],
    toggleTheme: () => setThemeName(t => (t === 'light' ? 'dark' : 'light')),
  }), [themeName]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
