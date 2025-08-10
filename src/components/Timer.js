// src/components/Timer.js
import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

function pad2(n) {
  return String(n).padStart(2, '0');
}

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [running]);

  const start = () => setRunning(true);
  const pause = () => setRunning(false);
  const reset = () => {
    setRunning(false);
    setSeconds(0);
  };

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

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
      {/* Time Display */}
      <div style={{
        fontSize: '3rem',
        fontWeight: 'normal',
        color: 'var(--text)',
        fontFamily: '"Geist Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
        textTransform: 'lowercase'
      }}>
        time: {pad2(minutes)}:{pad2(secs)}
      </div>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: '10px' }}>
        <button
          onClick={start}
          disabled={running}
          style={{
            backgroundColor: 'var(--primary)',
            color: 'var(--surface)',
            border: '1px solid var(--primary-border)',
            borderRadius: '4px',
            padding: '8px 16px',
            fontFamily: '"Geist Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
            fontSize: '14px',
            cursor: running ? 'not-allowed' : 'pointer',
            textTransform: 'lowercase',
            opacity: running ? 0.6 : 1
          }}
        >
          start
        </button>

        <button
          onClick={pause}
          disabled={!running}
          style={{
            backgroundColor: 'var(--primary)',
            color: 'var(--surface)',
            border: '1px solid var(--primary-border)',
            borderRadius: '4px',
            padding: '8px 16px',
            fontFamily: '"Geist Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
            fontSize: '14px',
            cursor: !running ? 'not-allowed' : 'pointer',
            textTransform: 'lowercase',
            opacity: !running ? 0.6 : 1
          }}
        >
          pause
        </button>

        <button
          onClick={reset}
          disabled={seconds === 0}
          style={{
            backgroundColor: 'var(--primary-border)',
            color: 'var(--surface)',
            border: '1px solid #5a4d3a',
            borderRadius: '4px',
            padding: '8px 16px',
            fontFamily: '"Geist Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
            fontSize: '14px',
            cursor: seconds === 0 ? 'not-allowed' : 'pointer',
            textTransform: 'lowercase',
            opacity: seconds === 0 ? 0.6 : 1
          }}
        >
          reset
        </button>
      </div>

      {/* Status */}
      <div style={{
        fontSize: '14px',
        color: 'var(--subtext)',
        fontFamily: '"Geist Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
        textTransform: 'lowercase'
      }}>
        {running ? 'running' : seconds === 0 ? 'ready' : 'paused'}
      </div>
    </div>
  );
}
