// File: src/components/ToggleVisibility.js

import React, { useState } from 'react';

function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(false);
  const handleToggle = () => setIsVisible(!isVisible);

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      gap: '20px', padding: '40px', backgroundColor: 'var(--surface)',
      border: '1px solid var(--border)', borderRadius: '8px', maxWidth: '400px', margin: '0 auto'
    }}>
      <button onClick={handleToggle} style={{
        backgroundColor: 'var(--primary)', color: 'var(--surface)', border: '1px solid var(--primary-border)',
        borderRadius: '4px', padding: '10px 20px', fontSize: '16px',
        cursor: 'pointer', textTransform: 'lowercase', minWidth: '150px'
      }}>
        {isVisible ? 'hide content' : 'show content'}
      </button>

      {isVisible && (
        <p style={{ color: 'var(--text)', textAlign: 'center' }}>
          Tada! You've revealed the hidden text. This is conditional rendering in action.
        </p>
      )}
    </div>
  );
}

export default ToggleVisibility;