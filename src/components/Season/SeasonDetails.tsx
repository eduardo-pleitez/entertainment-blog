import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchSeasonDetails from '../../hooks/useFetchSeasonDetails';
import { BASE_URL } from '../../assets/globalVariables';
import LoadingMessage from '../Layout/LoadingMessage';
import ErrorMessage from '../Layout/ErrorMessage';
import SeasonDetailsElement from './SeasonDetailsElement';

export default function SeasonDetails() {
  const params = useParams();
  const url = `${BASE_URL}tv/${params.tvShowId}/season/${params.seasonId}?language=en-US`;
  const { data, loading, error } = useFetchSeasonDetails(url);
  return (
    <div>
      {loading ? <LoadingMessage /> : <SeasonDetailsElement data={data} />}
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
    </div>
  );
}
