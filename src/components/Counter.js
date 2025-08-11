// src/components/Counter.js
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const container = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
    padding: 40,
    fontFamily:
      '"Geist Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
    backgroundColor: 'var(--surface)',
    border: '1px solid var(--border)',
    borderRadius: 8,
    maxWidth: 400,
    margin: '0 auto',
  };

  const display = {
    fontSize: '3rem',
    fontWeight: 'normal',
    color: 'var(--text)',
  };

  const row = { display: 'flex', gap: 10 };

  const btn = (variant = 'primary') => ({
    backgroundColor:
      variant === 'secondary' ? 'var(--primary-border)' : 'var(--primary)',
    color: 'var(--primary-text)',
    border: '1px solid var(--primary-border)',
    borderRadius: 4,
    padding: '8px 16px',
    fontSize: 14,
    cursor: 'pointer',
    textTransform: 'lowercase',
  });

  return (
    <div style={container}>
      <div style={display}>count: {count}</div>

      <div style={row}>
        <button onClick={() => setCount(c => c + 1)} style={btn()}>
          +1
        </button>
        <button onClick={() => setCount(c => c - 1)} style={btn()}>
          -1
        </button>
        <button onClick={() => setCount(0)} style={btn('secondary')}>
          reset
        </button>
      </div>

      <div style={{ fontSize: 14, color: 'var(--subtext)' }}>
        {count === 0 ? 'zero' : count > 0 ? 'positive' : 'negative'}
      </div>
    </div>
  );
}

export default Counter;
