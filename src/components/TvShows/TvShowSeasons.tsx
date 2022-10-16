import React from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../assets/globalVariables';
import LoadingMessage from '../Layout/LoadingMessage';
import ErrorMessage from '../Layout/ErrorMessage';
import useFetchTvShowSeasons from '../../hooks/useFetchTvShowSeasons';

export default function TvShowSeasons() {
  const params = useParams();
  const url = `${BASE_URL}tv/${params.tvShowId}?language=en-US`;
  const { data, loading, error } = useFetchTvShowSeasons(url);
  return (
    <div>
      {loading ? <LoadingMessage /> : null}
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
    </div>
  );
}