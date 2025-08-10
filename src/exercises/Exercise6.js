// File: src/exercises/Exercise6.js

import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import TodoList from '../components/ToDoList'; 

function Exercise6() {
  return (
    <PageLayout title="exercise 6: dynamic list filtering">
      <TodoList />
    </PageLayout>
  );
}

export default Exercise6;