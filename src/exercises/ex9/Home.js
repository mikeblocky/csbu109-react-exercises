// src/exercises/ex9/Home.js
import React from 'react';

export default function Home() {
  return (
    <div style={{ textTransform: 'lowercase', color: 'var(--text)' }}>
      <h2 style={{ margin: '0 0 8px 0', fontWeight: 'normal' }}>home</h2>
      <p style={{ margin: 0, color: 'var(--subtext)' }}>
        welcome — this is a single-page app using react router v6. no full page reloads here.
      </p>
    </div>
  );
}
