// src/exercises/ex9/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const card = {
  background: 'var(--surface)',
  border: '1px solid var(--border)',
  borderRadius: 8,
  padding: 16
};
const chip = {
  display: 'inline-block',
  padding: '2px 8px',
  borderRadius: 999,
  background: 'color-mix(in srgb, var(--primary) 12%, transparent)',
  border: '1px solid var(--primary-border)',
  color: 'var(--text)',
  fontSize: 12,
  marginLeft: 8
};

export default function Home() {
  return (
    <div style={{ textTransform: 'lowercase', color: 'var(--text)', display: 'grid', gap: 16 }}>
      <header style={{ ...card, padding: 20 }}>
        <h2 style={{ margin: '0 0 6px 0', fontWeight: 'normal' }}>
          welcome <span aria-hidden>👋</span>
        </h2>
        <p style={{ margin: 0, color: 'var(--subtext)' }}>
          this mini app shows client-side navigation with react router—no page reloads, just smooth swaps.
        </p>
      </header>

      <section style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
        <div
          style={card}
          onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
        >
          <div style={{ fontWeight: 500 }}>client-side routing</div>
          <p style={{ margin: '6px 0 0 0', color: 'var(--subtext)' }}>
            routes render instantly—your layout stays put.
          </p>
        </div>

        <div
          style={card}
          onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
        >
          <div style={{ fontWeight: 500 }}>
            active link styles <span style={chip}>navlink</span>
          </div>
          <p style={{ margin: '6px 0 0 0', color: 'var(--subtext)' }}>
            current page is highlighted without custom state.
          </p>
        </div>

        <div
          style={card}
          onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
        >
          <div style={{ fontWeight: 500 }}>
            nested routes <span style={chip}>/exercise9/*</span>
          </div>
          <p style={{ margin: '6px 0 0 0', color: 'var(--subtext)' }}>
            child pages share the same wrapper & navigation.
          </p>
        </div>
      </section>

      <footer style={{ ...card, display: 'flex', gap: 8, alignItems: 'center' }}>
        <span style={{ color: 'var(--subtext)' }}>want more?</span>
        <Link to="about" style={{ color: 'var(--primary)' }}>about</Link>
        <span>·</span>
        <Link to="contact" style={{ color: 'var(--primary)' }}>contact</Link>
      </footer>
    </div>
  );
}
