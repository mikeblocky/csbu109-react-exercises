// src/components/Counter.js
import { useTheme } from '../context/ThemeContext';
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const { theme } = useTheme();

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
      padding: '40px',
      fontFamily: '"Geist Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
      backgroundColor: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: '8px',
      maxWidth: '400px',
      margin: '0 auto'
    }}>
      {/* Counter Display */}
      <div style={{
        fontSize: '3rem',
        fontWeight: 'normal',
        color: 'var(--text)',
        fontFamily: '"Geist Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace'
      }}>
        count: {count}
      </div>

      {/* Buttons */}
      <div style={{
        display: 'flex',
        gap: '10px'
      }}>
        <button
          onClick={increment}
          style={{
            backgroundColor: 'var(--primary)',
            color: 'var(--surface)',
            border: '1px solid var(--primary-border)',
            borderRadius: '4px',
            padding: '8px 16px',
            fontFamily: '"Geist Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
            fontSize: '14px',
            cursor: 'pointer',
            textTransform: 'lowercase'
          }}
        >
          +1
        </button>

        <button
          onClick={decrement}
          style={{
            backgroundColor: 'var(--primary)',
            color: 'var(--surface)',
            border: '1px solid var(--primary-border)',
            borderRadius: '4px',
            padding: '8px 16px',
            fontFamily: '"Geist Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
            fontSize: '14px',
            cursor: 'pointer',
            textTransform: 'lowercase'
          }}
        >
          -1
        </button>

        <button
          onClick={reset}
          style={{
            backgroundColor: 'var(--primary-border)',
            color: 'var(--surface)',
            border: '1px solid #5a4d3a',
            borderRadius: '4px',
            padding: '8px 16px',
            fontFamily: '"Geist Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
            fontSize: '14px',
            cursor: 'pointer',
            textTransform: 'lowercase'
          }}
        >
          reset
        </button>
      </div>

      {/* Status */}
      <div style={{
        fontSize: '14px',
        color: 'var(--subtext)',
        fontFamily: '"Geist Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace'
      }}>
        {count === 0 ? 'zero' : count > 0 ? 'positive' : 'negative'}
      </div>
    </div>
  );
}

export default Counter;