// File: src/exercises/Exercise5.js
import React, { useState } from 'react';
import PageLayout from '../components/layout/PageLayout';

export default function Exercise5() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn about useState' },
    { id: 2, text: 'Build a React component' },
    { id: 3, text: 'Render a list' },
    { id: 4, text: 'Add a search filter' },
    { id: 5, text: 'Master React basics' },
  ]);
  const [input, setInput] = useState('');

  const add = () => {
    const t = input.trim();
    if (!t) return;
    setTodos(prev => [...prev, { id: Date.now(), text: t }]);
    setInput('');
  };

  return (
    <PageLayout title="exercise 5: basic todo list">
      <div style={{ display:'flex', flexDirection:'column', alignItems:'center', maxWidth:500, margin:'0 auto' }}>
        <div style={{ width:'100%', display:'flex', gap:10, marginBottom:20 }}>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="add a new todo..."
            style={{ flex:1, padding:10, fontSize:16, border:'1px solid var(--border)', borderRadius:4, background:'var(--surface)', color:'var(--text)' }}
          />
          <button
            onClick={add}
            style={{ background:'var(--primary)', color:'var(--primary-text)', border:'1px solid var(--primary-border)', borderRadius:4, padding:'10px 14px', textTransform:'lowercase', cursor:'pointer' }}
          >
            add
          </button>
        </div>

        <ul style={{ listStyle:'none', padding:0, width:'100%', margin:0 }}>
          {todos.map(todo => (
            <li key={todo.id} style={{ background:'var(--surface)', border:'1px solid var(--border)', color:'var(--text)', padding:12, borderRadius:4, marginBottom:8 }}>
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    </PageLayout>
  );
}
