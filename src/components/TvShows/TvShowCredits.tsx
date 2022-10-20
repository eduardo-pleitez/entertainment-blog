import React from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../assets/globalVariables';
import LoadingMessage from '../Layout/LoadingMessage';
import ErrorMessage from '../Layout/ErrorMessage';
import useFetchCredits from '../../hooks/useFetchCredits';
import CreditsSection from '../Layout/CreditsSection';

export default function TvShowCredits() {
  const params = useParams();
  const url = `${BASE_URL}tv/${params.tvShowId}/credits?language=en-US`;
  const { data, loading, error } = useFetchCredits(url);
  return (
    <div>
      {loading ? <LoadingMessage /> : <CreditsSection data={data} />}
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
    </div>
  );
}
