// src/exercises/ex9/About.js
import React from 'react';

const card = {
  background: 'var(--surface)',
  border: '1px solid var(--border)',
  borderRadius: 8,
  padding: 16
};

export default function About() {
  return (
    <div style={{ textTransform: 'lowercase', color: 'var(--text)', display: 'grid', gap: 16 }}>
      <header style={{ ...card, padding: 20 }}>
        <h2 style={{ margin: '0 0 6px 0', fontWeight: 'normal' }}>about</h2>
        <p style={{ margin: 0, color: 'var(--subtext)' }}>
          a tiny demo of routing patterns that show up in real apps—clean, predictable, and easy to extend.
        </p>
      </header>

      <section style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
        <div style={card}>
          <div style={{ fontWeight: 500 }}>what’s here</div>
          <ul style={{ margin: '8px 0 0 16px', color: 'var(--subtext)' }}>
            <li>base route with nested pages</li>
            <li>active link styling via navlink</li>
            <li>shared page layout wrapper</li>
          </ul>
        </div>

        <div style={card}>
          <div style={{ fontWeight: 500 }}>why it matters</div>
          <ul style={{ margin: '8px 0 0 16px', color: 'var(--subtext)' }}>
            <li>keeps layout stable between pages</li>
            <li>less prop drilling, cleaner mental model</li>
            <li>easy to scale: just add a route</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
