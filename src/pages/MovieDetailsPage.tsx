import React from 'react';
import MovieDetails from '../components/Movies/MovieDetails';

export default function MovieDetailsPage() {
  return (
    <div className='lg:w-9/12 md:w-11/12 sm:w-full bg-white md:p-6 p-2 mx-auto'>
      <MovieDetails />
    </div>
  );
}
