import React from 'react';
import DivStyled from '../components/Layout/DivStyled';
import PageLayout from '../components/Layout/PageLayout';
import SeasonDetails from '../components/Season/SeasonDetails';

export default function SeasonDetailsPage() {
  return (
    <PageLayout>
      <DivStyled>
        <SeasonDetails />
      </DivStyled>
    </PageLayout>
  );
}
