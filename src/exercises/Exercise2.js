import React from 'react';
import GreetingCard from '../components/GreetingCard';
import PageLayout from '../components/layout/PageLayout';

function Exercise2() {
  return (
    <PageLayout title="exercise 2: greeting cards">
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <GreetingCard name="Alice" />
        <GreetingCard name="Bob" />
        <GreetingCard name="Charlie" />
      </div>
    </PageLayout>
  );
}

export default Exercise2;