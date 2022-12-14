import React from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../assets/globalVariables';
import LoadingMessage from '../Layout/LoadingMessage';
import ErrorMessage from '../Layout/ErrorMessage';
import useFetch from '../../hooks/useFetch';
import TvShowSimilarSection from '../Layout/TvShowSimilarSection';

export default function TvShowsSimilar() {
  const params = useParams();
  const url = `${BASE_URL}tv/${params.tvShowId}/similar?language=en-US`;
  const { data, loading, error } = useFetch(url);
  return (
    <div>
      {loading ? <LoadingMessage /> : <TvShowSimilarSection data={data} />}
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
    </div>
  );
}
