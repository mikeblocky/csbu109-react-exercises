import React from 'react';
import NavButton from '../NavButton'; // We can reuse our NavButton!
import './Sidebar.css'; // We'll create this file next for styling.

// It receives the same props as our old nav to manage state
function Sidebar({ currentExercise, setCurrentExercise, exercises }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-title">React Labs</h2>
      </div>
      <nav className="sidebar-nav">
        <NavButton
          onClick={() => setCurrentExercise('home')}
          isActive={currentExercise === 'home'}
        >
          home
        </NavButton>
        {/* We can now generate the exercise buttons dynamically! */}
        {exercises.map(ex => (
          <NavButton
            key={ex.id}
            onClick={() => setCurrentExercise(ex.id)}
            isActive={currentExercise === ex.id}
          >
            {ex.id}
          </NavButton>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;