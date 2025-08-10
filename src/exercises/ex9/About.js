// src/exercises/ex9/About.js
import React from 'react';

export default function About() {
  return (
    <div style={{ textTransform: 'lowercase', color: 'var(--text)' }}>
      <h2 style={{ margin: '0 0 8px 0', fontWeight: 'normal' }}>about</h2>
      <p style={{ margin: 0, color: 'var(--subtext)' }}>
        this tiny demo shows routes, navlink for active styles, and nested routing under /exercise9.
      </p>
    </div>
  );
}
