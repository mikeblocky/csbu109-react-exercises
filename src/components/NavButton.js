// File: src/components/NavButton.js (Updated)

import React from 'react';
import './NavButton.css'; // <-- Import the CSS file

// The component function itself doesn't need to change its props
function NavButton({ children, onClick, isActive }) {

  // We construct the className string based on the isActive prop.
  // If active, it will be "nav-button active".
  // If not, it will just be "nav-button".
  const className = `nav-button ${isActive ? 'active' : ''}`;

  return (
    // We now use the 'className' attribute instead of the 'style' attribute.
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export default NavButton;