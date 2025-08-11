import React, { useEffect, useMemo, useState } from 'react';
import ThemeContext, { themes } from './ThemeContext';

export default function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark' || saved === 'light' ? saved : 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', themeName);
    // This is the key line: drives :root[data-theme="..."] in index.css
    document.documentElement.setAttribute('data-theme', themeName);

    // Optional: you can drop these two—CSS already sets body colors via vars
    // document.body.style.backgroundColor = themes[themeName].bg;
    // document.body.style.color = themes[themeName].text;
  }, [themeName]);

  const value = useMemo(() => ({
    themeName,
    theme: themes[themeName],
    toggleTheme: () => setThemeName(t => (t === 'light' ? 'dark' : 'light')),
  }), [themeName]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
