// src/components/LoginForm.js
import React, { useId, useState } from 'react';

function validate({ email, password }) {
  const errors = {};
  if (!email.includes('@')) errors.email = 'email must include "@"';
  if (password.length < 6) errors.password = 'password must be at least 6 characters';
  return errors;
}

export default function LoginForm() {
  const baseId = useId();
  const [form, setForm] = useState({ email: '', password: '' });
  const [touched, setTouched] = useState({}); // { email: true, password: true }
  const [success, setSuccess] = useState(false);

  const errors = validate(form);
  const isValid = !errors.email && !errors.password;

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setSuccess(false);
  };

  const onBlur = (e) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setTouched({ email: true, password: true });
    if (!isValid) return;
    setSuccess(true);
  };

  // styles
  const wrap = {
    display: 'flex', flexDirection: 'column', gap: 12, padding: 40,
    background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 8,
    maxWidth: 420, margin: '0 auto', color: 'var(--text)', textTransform: 'lowercase',
    fontFamily: '"Geist Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
  };
  const label = { fontSize: 14, color: 'var(--text)' };
  const input = (bad) => ({
    width: '100%', padding: '10px 12px', borderRadius: 6,
    border: `1px solid ${bad ? 'var(--danger)' : 'var(--border)'}`,
    background: 'var(--bg)', color: 'var(--text)', fontSize: 14, outline: 'none',
  });
  const btn = (enabled = true, variant = 'primary') => ({
    background: enabled ? (variant === 'primary' ? 'var(--primary)' : 'var(--primary-border)') : 'var(--muted)',
    color: 'var(--primary-text)',
    border: `1px solid ${enabled ? 'var(--primary-border)' : 'var(--muted-border)'}`,
    borderRadius: 6, padding: '8px 16px', fontSize: 14, cursor: enabled ? 'pointer' : 'not-allowed',
    textTransform: 'lowercase', opacity: enabled ? 1 : 0.8,
  });
  const err = { fontSize: 12, color: 'var(--danger)' };

  return (
    <form onSubmit={onSubmit} noValidate style={wrap}>
      <h2 style={{ margin: 0, fontWeight: 'normal' }}>login</h2>

      {/* email */}
      <label htmlFor={`${baseId}-email`} style={label}>email</label>
      <input
        id={`${baseId}-email`}
        name="email"
        type="email"
        value={form.email}
        onChange={onChange}
        onBlur={onBlur}
        aria-invalid={!!(touched.email && errors.email)}
        aria-describedby={touched.email && errors.email ? `${baseId}-email-error` : undefined}
        placeholder="name@example.com"
        autoComplete="email"
        style={input(touched.email && errors.email)}
      />
      {touched.email && errors.email && (
        <div id={`${baseId}-email-error`} style={err} role="alert">{errors.email}</div>
      )}

      {/* password */}
      <label htmlFor={`${baseId}-password`} style={{ ...label, marginTop: 8 }}>password</label>
      <input
        id={`${baseId}-password`}
        name="password"
        type="password"
        value={form.password}
        onChange={onChange}
        onBlur={onBlur}
        aria-invalid={!!(touched.password && errors.password)}
        aria-describedby={touched.password && errors.password ? `${baseId}-password-error` : undefined}
        placeholder="••••••"
        autoComplete="current-password"
        style={input(touched.password && errors.password)}
      />
      {touched.password && errors.password && (
        <div id={`${baseId}-password-error`} style={err} role="alert">{errors.password}</div>
      )}

      {/* actions */}
      <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
        <button type="submit" disabled={!isValid} style={btn(isValid)}>sign in</button>
        <button
          type="button"
          onClick={() => { setForm({ email: '', password: '' }); setTouched({}); setSuccess(false); }}
          style={btn(true, 'secondary')}
        >
          reset
        </button>
      </div>

      {success && (
        <div style={{ marginTop: 8, fontSize: 14, color: 'var(--success)' }} aria-live="polite">
          success: logged in.
        </div>
      )}
    </form>
  );
}
