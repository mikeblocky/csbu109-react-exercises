// src/components/GreetingCard.js
import React from 'react';
import { useTheme } from '../context/ThemeContext';

function GreetingCard({ name }) {
  const { theme } = useTheme();

  return (
    <div style={{
      border: '1px solid var(--border)',
      borderRadius: '4px',
      padding: '20px',
      margin: '10px',
      backgroundColor: 'var(--surface)',
      textAlign: 'center',
      maxWidth: '300px',
      fontFamily: '"Geist Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace'
    }}>
      <h2 style={{ 
        color: 'var(--text)',
        marginBottom: '10px',
        fontSize: '18px',
        fontWeight: 'normal',
        textTransform: 'lowercase'
      }}>
        hello, {name.toLowerCase()}!
      </h2>
      <p style={{
        color: 'var(--subtext)',
        fontSize: '14px',
        margin: '0',
        textTransform: 'lowercase'
      }}>
        welcome to react.
      </p>
    </div>
  );
}

export default GreetingCard;