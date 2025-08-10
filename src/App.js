// src/App.js
import React, { useState, useEffect } from 'react';

// Theme
import { useTheme } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

// Component Imports
import NavButton from './components/NavButton';

// Page Imports
import Exercise1 from './exercises/Exercise1';
import Exercise2 from './exercises/Exercise2';
import Exercise3 from './exercises/Exercise3';
import Exercise4 from './exercises/Exercise4';
import Exercise5 from './exercises/Exercise5';
import Exercise6 from './exercises/Exercise6';
import Exercise7 from './exercises/Exercise7';
import Exercise8 from './exercises/Exercise8';
import Exercise9 from './exercises/Exercise9';
import Exercise10 from './exercises/Exercise10';

// CSS Imports
import './App.css';

function App() {
  const { theme } = useTheme();
  const [currentExercise, setCurrentExercise] = useState('home');

  useEffect(() => {
    document.title = `react exercises — ${currentExercise}`;
  }, [currentExercise]);

  const renderPage = () => {
    switch (currentExercise) {
      case 'exercise1':
        return <Exercise1 />;
      case 'exercise2':
        return <Exercise2 />;
      case 'exercise3':
        return <Exercise3 />;
      case 'exercise4':
        return <Exercise4 />;
      case 'exercise5':
        return <Exercise5 />;
      case 'exercise6':
        return <Exercise6 />;
      case 'exercise7':
        return <Exercise7 />;
      case 'exercise8':
        return <Exercise8 />;
      case 'exercise9':
        return <Exercise9 />;
      case 'exercise10':
        return <Exercise10 />;
      default:
        return <HomePage setCurrentExercise={setCurrentExercise} />;
    }
  };

  return (
    <div className="App" style={{ backgroundColor: theme.bg, color: theme.text, minHeight: '100vh' }}>
      <nav className="app-nav" style={{ borderBottom: `1px solid ${theme.border}` }}>
        <div className="app-nav-container" style={{ display: 'flex', gap: 8, alignItems: 'center', justifyContent: 'space-between', padding: '8px 12px' }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <NavButton onClick={() => setCurrentExercise('home')} isActive={currentExercise === 'home'}>
              home
            </NavButton>
            <NavButton onClick={() => setCurrentExercise('exercise1')} isActive={currentExercise === 'exercise1'}>
              exercise 1
            </NavButton>
            <NavButton onClick={() => setCurrentExercise('exercise2')} isActive={currentExercise === 'exercise2'}>
              exercise 2
            </NavButton>
            <NavButton onClick={() => setCurrentExercise('exercise3')} isActive={currentExercise === 'exercise3'}>
              exercise 3
            </NavButton>
            <NavButton onClick={() => setCurrentExercise('exercise4')} isActive={currentExercise === 'exercise4'}>
              exercise 4
            </NavButton>
            <NavButton onClick={() => setCurrentExercise('exercise5')} isActive={currentExercise === 'exercise5'}>
              exercise 5
            </NavButton>
            <NavButton onClick={() => setCurrentExercise('exercise6')} isActive={currentExercise === 'exercise6'}>
              exercise 6
            </NavButton>
            <NavButton onClick={() => setCurrentExercise('exercise7')} isActive={currentExercise === 'exercise7'}>
              exercise 7
            </NavButton>
            <NavButton onClick={() => setCurrentExercise('exercise8')} isActive={currentExercise === 'exercise8'}>
              exercise 8
            </NavButton>
            <NavButton onClick={() => setCurrentExercise('exercise9')} isActive={currentExercise === 'exercise9'}>
              exercise 9
            </NavButton>
            <NavButton onClick={() => setCurrentExercise('exercise10')} isActive={currentExercise === 'exercise10'}>
              exercise 10
            </NavButton>
          </div>
          <ThemeToggle />
        </div>
      </nav>

      {/* Render the selected page */}
      {renderPage()}
    </div>
  );
}

// The HomePage component remains here, acting as the main landing page.
function HomePage({ setCurrentExercise }) {
  const { theme } = useTheme();

  const cardStyle = {
    display: 'block',
    padding: '20px',
    backgroundColor: theme.surface,
    border: `1px solid ${theme.border}`,
    borderRadius: '4px',
    color: theme.text,
    width: '220px',
    textTransform: 'lowercase',
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s',
  };

  // This is a small trick to add a hover effect without CSS files just for this component
  const handleMouseOver = (e) => {
    e.currentTarget.style.transform = 'translateY(-3px)';
    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'none';
  };

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1 style={{
        color: theme.text, marginBottom: '20px', fontSize: '32px', fontWeight: 'normal', textTransform: 'lowercase'
      }}>
        react exercises
      </h1>
      <p style={{
        fontSize: '16px', color: theme.subtext, marginBottom: '40px', textTransform: 'lowercase'
      }}>
        welcome to my react learning journey! navigate through different exercises using the menu above.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <div onClick={() => setCurrentExercise('exercise1')} style={cardStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <h3 style={{ margin: '0 0 10px 0', fontWeight: 'normal' }}>exercise 1</h3>
          <p style={{ margin: '0', color: theme.subtext, fontSize: '14px' }}>hello world component</p>
        </div>
        <div onClick={() => setCurrentExercise('exercise2')} style={cardStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <h3 style={{ margin: '0 0 10px 0', fontWeight: 'normal' }}>exercise 2</h3>
          <p style={{ margin: '0', color: theme.subtext, fontSize: '14px' }}>greeting card component</p>
        </div>
        <div onClick={() => setCurrentExercise('exercise3')} style={cardStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <h3 style={{ margin: '0 0 10px 0', fontWeight: 'normal' }}>exercise 3</h3>
          <p style={{ margin: '0', color: theme.subtext, fontSize: '14px' }}>counter application</p>
        </div>
        <div onClick={() => setCurrentExercise('exercise4')} style={cardStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <h3 style={{ margin: '0 0 10px 0', fontWeight: 'normal' }}>exercise 4</h3>
          <p style={{ margin: '0', color: theme.subtext, fontSize: '14px' }}>toggle visibility</p>
        </div>
        <div onClick={() => setCurrentExercise('exercise5')} style={cardStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <h3 style={{ margin: '0 0 10px 0', fontWeight: 'normal' }}>exercise 5</h3>
          <p style={{ margin: '0', color: theme.subtext, fontSize: '14px' }}>basic todo list</p>
        </div>
        <div onClick={() => setCurrentExercise('exercise6')} style={cardStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <h3 style={{ margin: '0 0 10px 0', fontWeight: 'normal' }}>exercise 6</h3>
          <p style={{ margin: '0', color: theme.subtext, fontSize: '14px' }}>dynamic list filtering</p>
        </div>
        <div onClick={() => setCurrentExercise('exercise7')} style={cardStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <h3 style={{ margin: '0 0 10px 0', fontWeight: 'normal' }}>exercise 7</h3>
          <p style={{ margin: '0', color: theme.subtext, fontSize: '14px' }}>timer / stopwatch</p>
        </div>
        <div onClick={() => setCurrentExercise('exercise8')} style={cardStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <h3 style={{ margin: '0 0 10px 0', fontWeight: 'normal' }}>exercise 8</h3>
          <p style={{ margin: '0', color: theme.subtext, fontSize: '14px' }}>data fetching</p>
        </div>
        <div onClick={() => setCurrentExercise('exercise9')} style={cardStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <h3 style={{ margin: '0 0 10px 0', fontWeight: 'normal' }}>exercise 9</h3>
          <p style={{ margin: '0', color: theme.subtext, fontSize: '14px' }}>simple navigation</p>
        </div>
        <div onClick={() => setCurrentExercise('exercise10')} style={cardStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <h3 style={{ margin: '0 0 10px 0', fontWeight: 'normal' }}>exercise 10</h3>
          <p style={{ margin: '0', color: theme.subtext, fontSize: '14px' }}>login form</p>
        </div>
      </div>
    </div>
  );
}

export default App;
