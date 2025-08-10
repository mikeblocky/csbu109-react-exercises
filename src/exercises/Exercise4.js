// File: src/exercises/Exercise4.js 

import React from 'react';
import ToggleVisibility from '../components/ToggleVisibility';
import PageLayout from '../components/layout/PageLayout'; // <-- Import the layout

function Exercise4() {
  return (
    <PageLayout title="exercise 4: toggle visibility">
      <ToggleVisibility />
    </PageLayout>
  );
}

export default Exercise4;