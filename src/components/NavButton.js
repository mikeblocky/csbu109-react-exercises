// File: src/components/NavButton.js
import React from 'react';
import { motion } from 'framer-motion';
import './NavButton.css';

function NavButton({ children, onClick, isActive }) {
  // a11y hint for the current page/section
  const ariaCurrent = isActive ? 'page' : undefined;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`nav-button ${isActive ? 'active' : ''}`}
      aria-current={ariaCurrent}
    >
      {/* animated background that moves between active buttons */}
      {isActive && (
        <motion.span
          layoutId="nav-active-pill"
          className="nav-pill"
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
      )}

      <span className="nav-label">{children}</span>
    </button>
  );
}

export default NavButton;
