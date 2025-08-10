import React, { useMemo, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function LoginForm() {
  const { theme } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [touched, setTouched] = useState({ email: false, password: false });
  const [success, setSuccess] = useState(false);

  // simple rules per brief
  const errors = useMemo(() => {
    const e = {};
    if (!email.includes('@')) e.email = 'email must include "@"';
    if (password.length < 6) e.password = 'password must be at least 6 characters';
    return e;
  }, [email, password]);

  const isValid = Object.keys(errors).length === 0;

  const onSubmit = (ev) => {
    ev.preventDefault();
    // reveal errors if user never blurred
    setTouched({ email: true, password: true });
    if (!isValid) return;
    setSuccess(true);
    // simulate “login” success; keep fields for the lab
  };

  const baseBox = {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    padding: '40px',
    fontFamily: '"Geist Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
    backgroundColor: 'var(--surface)',
    border: '1px solid var(--border)',
    borderRadius: '8px',
    maxWidth: '420px',
    margin: '0 auto',
    color: 'var(--text)',
    textTransform: 'lowercase'
  };

  const inputStyle = (hasError) => ({
    width: '100%',
    padding: '10px 12px',
    borderRadius: '4px',
    border: `1px solid ${hasError ? 'var(--danger)' : 'var(--border)'}`,
    outline: 'none',
    backgroundColor: '#fff',
    fontFamily: '"Geist Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
    fontSize: '14px'
  });

  const labelStyle = { fontSize: '14px', color: 'var(--text)' };
  const errorStyle = { fontSize: '12px', color: 'var(--danger)' };

  return (
    <form onSubmit={onSubmit} noValidate style={baseBox}>
      <h2 style={{ margin: 0, fontWeight: 'normal' }}>login</h2>

      {/* email */}
      <label htmlFor="email" style={labelStyle}>email</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => { setEmail(e.target.value); setSuccess(false); }}
        onBlur={() => setTouched((t) => ({ ...t, email: true }))}
        aria-invalid={touched.email && !!errors.email}
        aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
        placeholder="name@example.com"
        autoComplete="email"
        style={inputStyle(touched.email && !!errors.email)}
      />
      {touched.email && errors.email && (
        <div id="email-error" style={errorStyle}>{errors.email}</div>
      )}

      {/* password */}
      <label htmlFor="password" style={{ ...labelStyle, marginTop: 8 }}>password</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => { setPassword(e.target.value); setSuccess(false); }}
        onBlur={() => setTouched((t) => ({ ...t, password: true }))}
        aria-invalid={touched.password && !!errors.password}
        aria-describedby={touched.password && errors.password ? 'password-error' : undefined}
        placeholder="••••••"
        autoComplete="current-password"
        style={inputStyle(touched.password && !!errors.password)}
      />
      {touched.password && errors.password && (
        <div id="password-error" style={errorStyle}>{errors.password}</div>
      )}

      {/* actions */}
      <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
        <button
          type="submit"
          disabled={!isValid}
          style={{
            backgroundColor: isValid ? 'var(--primary)' : 'var(--muted)',
            color: 'var(--surface)',
            border: `1px solid ${isValid ? 'var(--primary-border)' : 'var(--muted-border)'}`,
            borderRadius: '4px',
            padding: '8px 16px',
            fontFamily: '"Geist Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
            fontSize: '14px',
            cursor: isValid ? 'pointer' : 'not-allowed',
            textTransform: 'lowercase'
          }}
        >
          sign in
        </button>

        <button
          type="button"
          onClick={() => {
            setEmail('');
            setPassword('');
            setTouched({ email: false, password: false });
            setSuccess(false);
          }}
          style={{
            backgroundColor: 'var(--primary-border)',
            color: 'var(--surface)',
            border: '1px solid #5a4d3a',
            borderRadius: '4px',
            padding: '8px 16px',
            fontFamily: '"Geist Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
            fontSize: '14px',
            cursor: 'pointer',
            textTransform: 'lowercase'
          }}
        >
          reset
        </button>
      </div>

      {/* success */}
      {success && (
        <div style={{ marginTop: 8, fontSize: '14px', color: 'var(--success)' }}>
          success: logged in.
        </div>
      )}
    </form>
  );
}
