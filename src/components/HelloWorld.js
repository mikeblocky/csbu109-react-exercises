// src/components/HelloWorld.js
import React from 'react';
// (theme isn't needed for plain blue, so you can remove this import)
// import { useTheme } from '../context/ThemeContext';

function HelloWorld() {
  return (
    <h1
      style={{
        textAlign: 'center',
        color: 'blue', // or '#1e90ff' for a nicer blue
        fontFamily:
          '"Geist Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
        fontSize: '3rem',
        fontWeight: 'normal',
        textTransform: 'lowercase',
      }}
    >
      hello, react world!
    </h1>
  );
}

export default HelloWorld;
