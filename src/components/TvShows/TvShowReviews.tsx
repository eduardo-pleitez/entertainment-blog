import React from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../assets/globalVariables';
import LoadingMessage from '../Layout/LoadingMessage';
import ErrorMessage from '../Layout/ErrorMessage';
import useFetch from '../../hooks/useFetch';
import ReviewsSection from '../Layout/ReviewsSection';

export default function TvShowReviews() {
  const params = useParams();
  const url = `${BASE_URL}tv/${params.tvShowId}/reviews?language=en-US`;
  const { data, loading, error } = useFetch(url);
  return (
    <div>
      {loading ? <LoadingMessage /> : <ReviewsSection data={data} />}
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
    </div>
  );
}
