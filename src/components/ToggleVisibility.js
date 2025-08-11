// src/components/ToggleVisibility.js
import React, { useState, useId } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(false);
  const contentId = useId();

  const card = {
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20,
    padding: 40, backgroundColor: 'var(--surface)', border: '1px solid var(--border)',
    borderRadius: 8, maxWidth: 400, margin: '0 auto'
  };

  const button = {
    backgroundColor: 'var(--primary)', color: 'var(--primary-text)',
    border: '1px solid var(--primary-border)', borderRadius: 6,
    padding: '10px 20px', fontSize: 16, cursor: 'pointer',
    textTransform: 'lowercase', minWidth: 150
  };

  const text = { color: 'var(--text)', textAlign: 'center', margin: 0 };

  return (
    <div style={card}>
      <button
        type="button"
        onClick={() => setIsVisible(v => !v)}
        aria-pressed={isVisible}
        aria-expanded={isVisible}
        aria-controls={contentId}
        style={button}
      >
        {isVisible ? 'hide content' : 'show content'}
      </button>

      <AnimatePresence initial={false}>
        {isVisible && (
          <motion.div
            id={contentId}
            role="region"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            style={{ overflow: 'hidden', width: '100%' }}
          >
            <p style={text}>
              Tada! you’ve revealed the hidden text. this is conditional rendering in action.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ToggleVisibility;
