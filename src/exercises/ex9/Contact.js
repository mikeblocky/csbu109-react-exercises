// src/exercises/ex9/Contact.js
import React from 'react';

const card = {
  background: 'var(--surface)',
  border: '1px solid var(--border)',
  borderRadius: 8,
  padding: 16
};

export default function Contact() {
  return (
    <div style={{ textTransform: 'lowercase', color: 'var(--text)', display: 'grid', gap: 16 }}>
      <header style={{ ...card, padding: 20 }}>
        <h2 style={{ margin: '0 0 6px 0', fontWeight: 'normal' }}>contact</h2>
        <p style={{ margin: 0, color: 'var(--subtext)' }}>
          pretend form, real vibes. we’re keeping it minimal so the routing stays the star.
        </p>
      </header>

      <form
        onSubmit={e => e.preventDefault()}
        style={{ ...card, display: 'grid', gap: 10, maxWidth: 520 }}
      >
        <label>
          name
          <input
            placeholder="your name"
            style={{
              marginTop: 6, width: '100%', padding: '10px',
              background: 'var(--surface)', color: 'var(--text)',
              border: '1px solid var(--border)', borderRadius: 6
            }}
          />
        </label>

        <label>
          email
          <input
            type="email"
            placeholder="you@example.com"
            style={{
              marginTop: 6, width: '100%', padding: '10px',
              background: 'var(--surface)', color: 'var(--text)',
              border: '1px solid var(--border)', borderRadius: 6
            }}
          />
        </label>

        <label>
          message
          <textarea
            rows={4}
            placeholder="say hello"
            style={{
              marginTop: 6, width: '100%', padding: '10px',
              background: 'var(--surface)', color: 'var(--text)',
              border: '1px solid var(--border)', borderRadius: 6
            }}
          />
        </label>

        <button
          type="submit"
          style={{
            justifySelf: 'start',
            background: 'var(--primary)', color: 'var(--primary-text)',
            border: '1px solid var(--primary-border)', borderRadius: 6,
            padding: '8px 14px', cursor: 'pointer', textTransform: 'lowercase'
          }}
        >
          send (not really)
        </button>
      </form>
    </div>
  );
}
