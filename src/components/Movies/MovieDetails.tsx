import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { BASE_URL } from '../../assets/globalVariables';
import LoadingMessage from '../Layout/LoadingMessage';
import ErrorMessage from '../Layout/ErrorMessage';

export default function MovieDetails() {
  const params = useParams();
  const url = `${BASE_URL}movie/${params.movieId}?language=en-US`;
  const { data, loading, error } = useFetch(url);

  return (
    <div className='sm:py-4 py-2'>
      {loading ? <LoadingMessage /> : null}
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
    </div>
  );
}
