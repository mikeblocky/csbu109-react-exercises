// src/exercises/Exercise9.js
import React, { useEffect } from 'react';
import { NavLink, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout'; // keep if you have it
import Home from './ex9/Home';
import About from './ex9/About';
import Contact from './ex9/Contact';

export default function Exercise9() {
  const location = useLocation();
  const navigate = useNavigate();

  // ensure a stable base URL for this exercise
  useEffect(() => {
    if (!location.pathname.startsWith('/exercise9')) {
      navigate('/exercise9', { replace: true });
    }
  }, [location.pathname, navigate]);

  const linkBase = {
    padding: '8px 14px',
    border: '1px solid var(--border)',
    borderRadius: '4px',
    textDecoration: 'none',
    color: 'var(--text)',
    textTransform: 'lowercase',
    fontFamily:
      '"Geist Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace'
  };

  return (
    <PageLayout title="exercise 9: simple navigation">
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        backgroundColor: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 8,
        padding: 24
      }}>
        {/* nav */}
        <nav style={{ display: 'flex', gap: 10 }}>
          <NavLink
            to="/exercise9"
            end
            style={({ isActive }) => ({
              ...linkBase,
              backgroundColor: isActive ? 'var(--primary)' : 'transparent',
              color: isActive ? 'var(--surface)' : 'var(--text)',
              borderColor: isActive ? 'var(--primary-border)' : 'var(--border)'
            })}
          >
            home
          </NavLink>
          <NavLink
            to="/exercise9/about"
            style={({ isActive }) => ({
              ...linkBase,
              backgroundColor: isActive ? 'var(--primary)' : 'transparent',
              color: isActive ? 'var(--surface)' : 'var(--text)',
              borderColor: isActive ? 'var(--primary-border)' : 'var(--border)'
            })}
          >
            about
          </NavLink>
          <NavLink
            to="/exercise9/contact"
            style={({ isActive }) => ({
              ...linkBase,
              backgroundColor: isActive ? 'var(--primary)' : 'transparent',
              color: isActive ? 'var(--surface)' : 'var(--text)',
              borderColor: isActive ? 'var(--primary-border)' : 'var(--border)'
            })}
          >
            contact
          </NavLink>
        </nav>

        {/* routes */}
        <div style={{ paddingTop: 8 }}>
          <Routes>
            <Route path="/exercise9" element={<Home />} />
            <Route path="/exercise9/about" element={<About />} />
            <Route path="/exercise9/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </PageLayout>
  );
}
