// src/exercises/Exercise9.js
import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import Home from './ex9/Home';
import About from './ex9/About';
import Contact from './ex9/Contact';

const linkBase = {
  padding: '8px 14px',
  border: '1px solid var(--border)',
  borderRadius: 8,
  textDecoration: 'none',
  color: 'var(--text)',
  textTransform: 'lowercase',
};
const linkStyle = ({ isActive }) => ({
  ...linkBase,
  background: isActive ? 'var(--primary)' : 'transparent',
  color: isActive ? 'var(--primary-text)' : 'var(--text)',
  borderColor: isActive ? 'var(--primary-border)' : 'var(--border)',
});

export default function Exercise9() {
  return (
    <PageLayout title="exercise 9: simple navigation">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 8,
          padding: 24,
        }}
      >
        {/* nav */}
        <nav style={{ display: 'flex', gap: 10 }}>
          <NavLink to="" end style={linkStyle}>home</NavLink>
          <NavLink to="about" style={linkStyle}>about</NavLink>
          <NavLink to="contact" style={linkStyle}>contact</NavLink>
        </nav>

        {/* routes */}
        <div style={{ paddingTop: 8 }}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </PageLayout>
  );
}
