import React from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../assets/globalVariables';
import LoadingMessage from '../Layout/LoadingMessage';
import ErrorMessage from '../Layout/ErrorMessage';
import useFetchMovieCredits from '../../hooks/useFetchMovieCredits';
import CreditsSection from '../Layout/CreditsSection';

export default function MovieCredits() {
  const params = useParams();
  const url = `${BASE_URL}movie/${params.movieId}/credits?language=en-US`;
  const { data, loading, error } = useFetchMovieCredits(url);
  return (
    <div>
      {loading ? <LoadingMessage /> : null}
      {error ? <ErrorMessage>{error}</ErrorMessage> : <CreditsSection data={data} />}
    </div>
  );
}