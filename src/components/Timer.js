// src/components/Timer.js
import React, { useEffect, useRef, useState } from 'react';

const pad2 = n => String(n).padStart(2, '0');

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const startRef = useRef(null); 

  useEffect(() => {
    if (!running) return;

    startRef.current = Date.now() - seconds * 1000;
    const id = setInterval(() => {
      const s = Math.floor((Date.now() - startRef.current) / 1000);
      setSeconds(s);
    }, 250); 

    return () => clearInterval(id);
  }, [running]); 

  const start = () => setRunning(true);
  const pause = () => setRunning(false);
  const reset = () => { setRunning(false); setSeconds(0); };

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  const container = {
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20,
    padding: 40, backgroundColor: 'var(--surface)', border: '1px solid var(--border)',
    borderRadius: 8, maxWidth: 400, margin: '0 auto',
    fontFamily: '"Geist Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace'
  };
  const display = { fontSize: '3rem', fontWeight: 'normal', color: 'var(--text)', textTransform: 'lowercase' };
  const row = { display: 'flex', gap: 10 };
  const btn = (disabled, variant = 'primary') => ({
    backgroundColor: variant === 'secondary' ? 'var(--primary-border)' : 'var(--primary)',
    color: 'var(--primary-text)',
    border: '1px solid var(--primary-border)',
    borderRadius: 4,
    padding: '8px 16px',
    fontSize: 14,
    cursor: disabled ? 'not-allowed' : 'pointer',
    textTransform: 'lowercase',
    opacity: disabled ? 0.6 : 1
  });

  return (
    <div style={container}>
      <div style={display}>time: {pad2(minutes)}:{pad2(secs)}</div>

      <div style={row}>
        <button onClick={start}   disabled={running}      style={btn(running)}>start</button>
        <button onClick={pause}   disabled={!running}     style={btn(!running)}>pause</button>
        <button onClick={reset}   disabled={seconds === 0} style={btn(seconds === 0, 'secondary')}>reset</button>
      </div>

      <div style={{ fontSize: 14, color: 'var(--subtext)', textTransform: 'lowercase' }}>
        {running ? 'running' : seconds === 0 ? 'ready' : 'paused'}
      </div>
    </div>
  );
}
