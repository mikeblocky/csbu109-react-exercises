import React, { useEffect, useState } from 'react';

function normalizeUrl(site) {
  if (!site) return '#';
  return site.startsWith('http://') || site.startsWith('https://')
    ? site
    : `https://${site}`;
}

export default function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function load(signal) {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch('https://jsonplaceholder.typicode.com/users/1', { signal });
      if (!res.ok) {
        throw new Error(`request failed: ${res.status} ${res.statusText}`);
      }
      const data = await res.json();
      setUser(data);
    } catch (err) {
      // Ignore aborts, surface other errors
      if (err.name !== 'AbortError') setError(err.message || 'unknown error');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const controller = new AbortController();
    load(controller.signal);
    return () => controller.abort(); // cleanup on unmount
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      padding: '40px',
      fontFamily: '"Geist Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
      backgroundColor: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: '8px',
      maxWidth: '480px',
      margin: '0 auto',
      color: 'var(--text)',
      textTransform: 'lowercase'
    }}>
      <h2 style={{ margin: 0, fontWeight: 'normal' }}>user profile</h2>

      {/* loading */}
      {loading && (
        <div style={{ color: 'var(--subtext)' }}>loading…</div>
      )}

      {/* error */}
      {!loading && error && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ color: 'var(--danger)' }}>error: {error}</div>
          <button
            onClick={() => load()}
            style={{
              width: 'fit-content',
              backgroundColor: 'var(--primary)',
              color: 'var(--surface)',
              border: '1px solid var(--primary-border)',
              borderRadius: '4px',
              padding: '8px 16px',
              fontFamily: '"Geist Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
              fontSize: '14px',
              cursor: 'pointer',
            }}
          >
            try again
          </button>
        </div>
      )}

      {/* content */}
      {!loading && !error && user && (
        <div style={{ display: 'grid', rowGap: 8 }}>
          <div><strong style={{ fontWeight: 500 }}>name:</strong> {user.name}</div>
          <div><strong style={{ fontWeight: 500 }}>email:</strong> {user.email}</div>
          <div>
            <strong style={{ fontWeight: 500 }}>website:</strong>{' '}
            <a
              href={normalizeUrl(user.website)}
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--primary-border)' }}
            >
              {user.website}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
