import React from 'react';
import PageLayout from '../components/Layout/PageLayout';
import MovieCredits from '../components/Movies/MovieCredits';
import MovieDetails from '../components/Movies/MovieDetails';
import MovieReviews from '../components/Movies/MovieReviews';
import MoviesSimilar from '../components/Movies/MoviesSimilar';

export default function MovieDetailsPage() {
  return (
    <PageLayout>
      <div className='lg:w-9/12 md:w-11/12 sm:w-full bg-white md:p-6 p-2 mx-auto'>
        <MovieDetails />
        <MovieCredits />
        <MovieReviews />
        <MoviesSimilar />
      </div>
    </PageLayout>
  );
}
