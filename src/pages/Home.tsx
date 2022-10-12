import React from 'react';
import PageLayout from '../components/Layout/PageLayout';
import MoviesList from '../components/Movies/MoviesList';

export default function Home() {
  return (
    <PageLayout>
      <>
        <MoviesList />
      </>
    </PageLayout>
  );
}
