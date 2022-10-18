import React from 'react';
import PageLayout from '../components/Layout/PageLayout';
import PersonDetails from '../components/Person/PersonDetails';

export default function PersonDetailsPage() {
  return (
    <PageLayout>
      <div className='lg:w-9/12 md:w-11/12 sm:w-full bg-white md:p-6 p-2 mx-auto'>
        <PersonDetails />
      </div>
    </PageLayout>
  );
}