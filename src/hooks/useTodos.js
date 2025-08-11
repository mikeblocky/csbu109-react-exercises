// src/hooks/useTodos.js
import { useState } from 'react';

export default function useTodos(initial = [
  { id: 1, text: 'Learn about useState' },
  { id: 2, text: 'Build a React component' },
  { id: 3, text: 'Render a list' },
  { id: 4, text: 'Add a search filter' },
  { id: 5, text: 'Master React basics' },
]) {
  const [todos, setTodos] = useState(initial);

  const addTodo = (text) => {
    const t = text.trim();
    if (!t) return;
    setTodos(prev => [...prev, { id: Date.now(), text: t }]);
  };

  return { todos, addTodo, setTodos };
}
