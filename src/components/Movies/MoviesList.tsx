import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { BASE_URL } from '../../assets/globalVariables';
import SectionTitle from '../Layout/SectionTitle';
import LoadingMessage from '../Layout/LoadingMessage';
import ErrorMessage from '../Layout/ErrorMessage';

export default function MoviesList() {
  const [url, setUrl] = useState(`${BASE_URL}movie/popular?language=en-US`);
  const { data, loading, error, totalPages } = useFetch(url);
  return (
    <div className='sm:py-4 py-2'>
      <SectionTitle>Movies</SectionTitle>
      <>
        {loading ? <LoadingMessage /> : null}
        {error ? <ErrorMessage>{error}</ErrorMessage> : null}
      </>
    </div>
  );
}
