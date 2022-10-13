import React from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../assets/globalVariables';
import LoadingMessage from '../Layout/LoadingMessage';
import ErrorMessage from '../Layout/ErrorMessage';
import useFetchReviews from '../../hooks/useFetchReviews';

export default function MovieReviews() {
  const params = useParams();
  const url = `${BASE_URL}movie/${params.movieId}/reviews?language=en-US`;
  const { data, loading, error } = useFetchReviews(url);
  return (
    <div>
      {loading ? <LoadingMessage /> : null}
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
    </div>
  );
}