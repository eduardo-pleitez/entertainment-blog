import React from 'react';
import PageLayout from '../components/Layout/PageLayout';
import MoviesList from '../components/Movies/MoviesList';
import TvShowsList from '../components/TvShows/TvShowsList';

export default function Home() {
  return (
    <PageLayout>
      <>
        <MoviesList />
        <TvShowsList />
      </>
    </PageLayout>
  );
}
