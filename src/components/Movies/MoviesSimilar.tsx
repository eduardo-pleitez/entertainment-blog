import React from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../assets/globalVariables';
import LoadingMessage from '../Layout/LoadingMessage';
import ErrorMessage from '../Layout/ErrorMessage';
import useFetch from '../../hooks/useFetch';
import MoviesSimilarSection from '../Layout/MoviesSimilarSection';

export default function MoviesSimilar() {
  const params = useParams();
  const url = `${BASE_URL}movie/${params.movieId}/similar?language=en-US`;
  const { data, loading, error } = useFetch(url);
  return (
    <div>
      {loading ? <LoadingMessage /> : <MoviesSimilarSection data={data} />}
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
    </div>
  );
}