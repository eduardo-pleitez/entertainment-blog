import React from 'react';
import DivStyled from '../components/Layout/DivStyled';
import PageLayout from '../components/Layout/PageLayout';
import MovieCredits from '../components/Movies/MovieCredits';
import MovieDetails from '../components/Movies/MovieDetails';
import MovieReviews from '../components/Movies/MovieReviews';
import MoviesSimilar from '../components/Movies/MoviesSimilar';

export default function MovieDetailsPage() {
  return (
    <PageLayout>
      <DivStyled>
        <>
          <MovieDetails />
          <MovieCredits />
          <MovieReviews />
          <MoviesSimilar />
        </>
      </DivStyled>
    </PageLayout>
  );
}
