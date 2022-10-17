import React from 'react';
import PageLayout from '../components/Layout/PageLayout';
import SeasonDetails from '../components/Season/SeasonDetails';

export default function SeasonDetailsPage() {
  return (
    <PageLayout>
      <div className='lg:w-9/12 md:w-11/12 sm:w-full bg-white md:p-6 p-2 mx-auto'>
        <SeasonDetails />
      </div>
    </PageLayout>
  );
}
