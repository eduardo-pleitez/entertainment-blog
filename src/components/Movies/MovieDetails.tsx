import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchMovieDetails from '../../hooks/useFetchMovieDetails';
import { BASE_URL } from '../../assets/globalVariables';
import LoadingMessage from '../Layout/LoadingMessage';
import ErrorMessage from '../Layout/ErrorMessage';
import MovieDetailsElement from './MovieDetailsElement';

export default function MovieDetails() {
  const params = useParams();
  const url = `${BASE_URL}movie/${params.movieId}?language=en-US`;
  const { data, loading, error } = useFetchMovieDetails(url);
  return (
    <div>
      {loading ? <LoadingMessage /> : <MovieDetailsElement data={data} />}
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
    </div>
  );
}
