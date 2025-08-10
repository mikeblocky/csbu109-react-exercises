// HelloWorld.js
import React from 'react';
import { useTheme } from '../context/ThemeContext';

function HelloWorld() {
  const { theme } = useTheme();

  return (
    <h1 style={{
      textAlign: 'center',
      color: 'var(--primary)',
      fontFamily: '"Geist Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
      fontSize: '3rem',
      fontWeight: 'normal',
      textTransform: 'lowercase'
    }}>
      hello, react world!
    </h1>
  );
}

export default HelloWorld;