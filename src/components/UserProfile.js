// src/components/UserProfile.js
import React, { useEffect, useState } from 'react';

const normalizeUrl = (site) =>
  !site ? '#' : /^(https?:)?\/\//i.test(site) ? site : `https://${site}`;

export default function UserProfile() {
  const [user, setUser]   = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // fetch on mount with cleanup
  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(
          'https://jsonplaceholder.typicode.com/users/1',
          { signal: controller.signal }
        );
        if (!res.ok) throw new Error(`request failed: ${res.status} ${res.statusText}`);
        setUser(await res.json());
      } catch (err) {
        if (err.name !== 'AbortError') setError(err.message || 'unknown error');
      } finally {
        setLoading(false);
      }
    })();

    return () => controller.abort();
  }, []);

  const retry = () => {
    setUser(null);
    setError(null);
    setLoading(true);
  };

  return (
    <div style={{
      display:'flex', flexDirection:'column', gap:16, padding:40,
      fontFamily:'"Geist Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
      background:'var(--surface)', border:'1px solid var(--border)', borderRadius:8,
      maxWidth:480, margin:'0 auto', color:'var(--text)', textTransform:'lowercase'
    }}>
      <h2 style={{ margin:0, fontWeight:'normal' }}>user profile</h2>

      {loading && (
        <div aria-live="polite" style={{ color:'var(--subtext)' }}>loading…</div>
      )}

      {!loading && error && (
        <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
          <div style={{ color:'var(--danger)' }}>error: {error}</div>
          <button
            onClick={() => window.location.reload()} // or implement retry() as noted above
            style={{
              width:'fit-content', background:'var(--primary)', color:'var(--primary-text)',
              border:'1px solid var(--primary-border)', borderRadius:4, padding:'8px 16px',
              fontSize:14, cursor:'pointer', textTransform:'lowercase'
            }}
          >
            try again
          </button>
        </div>
      )}

      {!loading && !error && user && (
        <div style={{ display:'grid', rowGap:8 }}>
          <div><strong style={{ fontWeight:500 }}>name:</strong> {user.name}</div>
          <div>
            <strong style={{ fontWeight:500 }}>email:</strong>{' '}
            <a href={`mailto:${user.email}`} style={{ color:'var(--primary)' }}>
              {user.email}
            </a>
          </div>
          <div>
            <strong style={{ fontWeight:500 }}>website:</strong>{' '}
            <a
              href={normalizeUrl(user.website)}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color:'var(--primary)' }}
            >
              {user.website}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
