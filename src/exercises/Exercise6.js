// File: src/exercises/Exercise6.js
import React, { useMemo, useState } from 'react';
import PageLayout from '../components/layout/PageLayout';

export default function Exercise6() {
  const [todos] = useState([
    { id: 1, text: 'Learn about useState' },
    { id: 2, text: 'Build a React component' },
    { id: 3, text: 'Render a list' },
    { id: 4, text: 'Add a search filter' },
    { id: 5, text: 'Master React basics' },
  ]);
  const [input, setInput] = useState('');
  const [q, setQ] = useState('');
  const [list, setList] = useState(todos);

  const add = () => {
    const t = input.trim();
    if (!t) return;
    setList(prev => [...prev, { id: Date.now(), text: t }]);
    setInput('');
  };

  const filtered = useMemo(
    () => list.filter(t => t.text.toLowerCase().includes(q.toLowerCase())),
    [list, q]
  );

  return (
    <PageLayout title="exercise 6: dynamic list filtering">
      <div style={{ display:'flex', flexDirection:'column', alignItems:'center', maxWidth:500, margin:'0 auto' }}>
        <input
          value={q}
          onChange={e => setQ(e.target.value)}
          placeholder="search todos..."
          style={{ width:'100%', marginBottom:20, padding:10, fontSize:16, border:'1px solid var(--border)', borderRadius:4, background:'var(--surface)', color:'var(--text)' }}
        />

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
          {filtered.map(todo => (
            <li key={todo.id} style={{ background:'var(--surface)', border:'1px solid var(--border)', color:'var(--text)', padding:12, borderRadius:4, marginBottom:8 }}>
              {todo.text}
            </li>
          ))}
        </ul>

        {filtered.length === 0 && q && (
          <p style={{ color:'var(--subtext)', marginTop:20 }}>
            no todos match “{q}”.
          </p>
        )}
      </div>
    </PageLayout>
  );
}
