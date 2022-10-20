import React from 'react';
import DivStyled from '../components/Layout/DivStyled';
import PageLayout from '../components/Layout/PageLayout';
import PersonDetails from '../components/Person/PersonDetails';

export default function PersonDetailsPage() {
  return (
    <PageLayout>
      <DivStyled>
        <PersonDetails />
      </DivStyled>
    </PageLayout>
  );
}
