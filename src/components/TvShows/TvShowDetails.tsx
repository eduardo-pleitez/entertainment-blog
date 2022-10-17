import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchTvShowDetails from '../../hooks/useFetchTvShowDetails';
import { BASE_URL } from '../../assets/globalVariables';
import LoadingMessage from '../Layout/LoadingMessage';
import ErrorMessage from '../Layout/ErrorMessage';
import TvShowDetailsElement from './TvShowDetailsElement';

export default function TvShowDetails() {
  const params = useParams();
  const url = `${BASE_URL}tv/${params.tvShowId}?language=en-US`;
  const { data, loading, error } = useFetchTvShowDetails(url);
  return (
    <div>
      {loading ? <LoadingMessage /> : <TvShowDetailsElement data={data} />}
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
    </div>
  );
}
