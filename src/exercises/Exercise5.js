// File: src/exercises/Exercise5.js

import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import TodoList from '../components/ToDoList'; // Import the TodoList component
function Exercise5() {
  return (
    <PageLayout title="exercise 5: basic todo list">
      <TodoList />
    </PageLayout>
  );
}

export default Exercise5;