import React, { useState } from 'react';
import { BASE_URL } from '../../assets/globalVariables';
import SectionTitle from '../Layout/SectionTitle';
import LoadingMessage from '../Layout/LoadingMessage';
import ErrorMessage from '../Layout/ErrorMessage';
import MovieElement from './MovieElement';
import Pagination from '../Layout/Pagination';
import useFetchSearch from '../../hooks/useFetchSearch';

export default function MoviesList() {
  const [url, setUrl] = useState(`${BASE_URL}discover/movie?language=en-US`);
  const { data, loading, error } = useFetchSearch(url);

  if (data.totalPages > 500) {
    data.totalPages = 500;
  }

  function handlePagination(selectedItem: { selected: number }) {
    setUrl(`${BASE_URL}discover/movie?language=en-US&page=${selectedItem.selected + 1}`);
  }
  return (
    <div className='sm:py-4 py-2'>
      <SectionTitle>Movies</SectionTitle>
      <>
        {loading ? <LoadingMessage /> : <MovieElement data={data} />}
        {error ? <ErrorMessage>{error}</ErrorMessage> : null}
      </>
      <Pagination
        apiPagesLimit={data.totalPages}
        handlePagination={handlePagination}
      />
    </div>
  );
}
