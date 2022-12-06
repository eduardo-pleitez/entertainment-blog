import React, { useState } from 'react';
import useFetchSearch from '../../hooks/useFetchSearch';
import { BASE_URL } from '../../assets/globalVariables';
import SectionTitle from '../Layout/SectionTitle';
import LoadingMessage from '../Layout/LoadingMessage';
import ErrorMessage from '../Layout/ErrorMessage';
import TvShowElement from './TvShowElement';
import Pagination from '../Layout/Pagination';

export default function TvShowsList() {
  const [url, setUrl] = useState(`${BASE_URL}discover/tv?language=en-US`);
  const { data, loading, error } = useFetchSearch(url);

  if (data.totalPages > 500) {
    data.totalPages = 500;
  }

  function handlePagination(selectedItem: { selected: number }) {
    setUrl(`${BASE_URL}discover/tv?language=en-US&page=${selectedItem.selected + 1}`);
  }

  return (
    <div className='sm:py-4 py-2'>
      <SectionTitle>TV Shows</SectionTitle>
      <>
        {loading ? <LoadingMessage /> : <TvShowElement data={data} />}
        {error ? <ErrorMessage>{error}</ErrorMessage> : null}
      </>
      <Pagination
        apiPagesLimit={data.totalPages}
        handlePagination={handlePagination}
      />
    </div>
  );
}
