import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

function TodoList() {
  // --- STATE MANAGEMENT ---

  // The single source of truth for all todo items.
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn about useState' },
    { id: 2, text: 'Build a React component' },
    { id: 3, text: 'Render a list' },
    { id: 4, text: 'Add a search filter' },
    { id: 5, text: 'Master React basics' },
  ]);

  // State to control the "add new todo" input field.
  const [inputValue, setInputValue] = useState('');

  // State to control the "search/filter" input field.
  const [searchTerm, setSearchTerm] = useState('');


  // --- EVENT HANDLERS ---

  // Function to handle adding a new todo item.
  const handleAddTodo = () => {
    // Prevent adding empty or whitespace-only todos.
    if (inputValue.trim() === '') {
      return;
    }

    // Create a new todo object with a unique ID.
    const newTodo = {
      id: Date.now(),
      text: inputValue,
    };

    // Update the todos state immutably by creating a new array.
    setTodos([...todos, newTodo]);

    // Clear the input field for the next entry.
    setInputValue('');
  };


  // --- DERIVED STATE ---

  // The filtered list is calculated on every render.
  // This is not a separate state variable, but derived from the existing state.
  // This is a core React pattern that prevents state from getting out of sync.
  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );


  // --- STYLES ---

  const searchInputStyle = {
    padding: '10px',
    border: '1px solid var(--border)',
    borderRadius: '4px',
    fontSize: '16px',
    width: '100%',
    marginBottom: '20px',
    backgroundColor: '#fff'
  };

  const addInputStyle = {
    padding: '10px',
    marginRight: '10px',
    border: '1px solid var(--border)',
    borderRadius: '4px',
    fontSize: '16px',
    backgroundColor: '#fff',
    flexGrow: 1, // Allows the input to take up available space
  };

  const buttonStyle = {
    backgroundColor: 'var(--primary)',
    color: 'var(--surface)',
    border: '1px solid var(--primary-border)',
    borderRadius: '4px',
    padding: '10px 15px',
    fontSize: '16px',
    cursor: 'pointer',
    textTransform: 'lowercase',
  };

  const listStyle = {
    listStyleType: 'none',
    padding: 0,
    marginTop: '20px',
    width: '100%',
  };

  const listItemStyle = {
    backgroundColor: 'var(--surface)',
    border: '1px solid #e0e0d1',
    padding: '12px',
    marginBottom: '8px',
    borderRadius: '4px',
    textAlign: 'left',
  };


  // --- JSX (RENDERING) ---

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: '500px',
      margin: '0 auto'
    }}>
      {/* Search Input Field */}
      <input
        type="text"
        placeholder="search todos..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        style={searchInputStyle}
      />

      {/* Add Todo Form */}
      <div style={{ width: '100%', display: 'flex', marginBottom: '20px' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="add a new todo..."
          style={addInputStyle}
        />
        <button onClick={handleAddTodo} style={buttonStyle}>add</button>
      </div>

      {/* Todo List Rendering */}
      <ul style={listStyle}>
        {/* We map over the DERIVED 'filteredTodos' array, not the original 'todos' array */}
        {filteredTodos.map(todo => (
          <li key={todo.id} style={listItemStyle}>
            {todo.text}
          </li>
        ))}
      </ul>

      {/* Conditional Message for "No Results" */}
      {filteredTodos.length === 0 && searchTerm && (
        <p style={{ color: 'var(--subtext)', marginTop: '20px' }}>
          no todos match your search for "{searchTerm}".
        </p>
      )}
    </div>
  );
}

export default TodoList;