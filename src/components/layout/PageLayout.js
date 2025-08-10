// File: src/components/layout/PageLayout.js

import React from 'react';

// This component accepts a 'title' prop and special 'children' prop.
// 'children' refers to any JSX passed between the <PageLayout> tags.
function PageLayout({ title, children }) {
  return (
    <div style={{ padding: '40px', backgroundColor: 'var(--bg)', minHeight: '80vh' }}>
      <h1 style={{
        textAlign: 'center',
        color: 'var(--text)',
        fontWeight: 'normal',
        textTransform: 'lowercase',
        marginBottom: '40px'
      }}>
        {title}
      </h1>
      <div>
        {/* This is where the unique content of each exercise will go */}
        {children}
      </div>
    </div>
  );
}

export default PageLayout;