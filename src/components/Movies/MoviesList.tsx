import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { BASE_URL } from '../../assets/globalVariables';
import SectionTitle from '../Layout/SectionTitle';
import LoadingMessage from '../Layout/LoadingMessage';
import ErrorMessage from '../Layout/ErrorMessage';
import MovieElement from './MovieElement';
import Pagination from '../Layout/Pagination';

export default function MoviesList() {
  const [url, setUrl] = useState(`${BASE_URL}movie/popular?language=en-US`);
  const { data, loading, error, totalPages } = useFetch(url);
  function handlePagination(selectedItem: { selected: number }) {
    setUrl(
      `${BASE_URL}movie/popular/?language=en-US&page=${
        selectedItem.selected + 1
      }`
    );
  }
  return (
    <div className='sm:py-4 py-2'>
      <SectionTitle>Movies</SectionTitle>
      <>
        {loading ? <LoadingMessage /> : <MovieElement data={data} />}
        {error ? <ErrorMessage>{error}</ErrorMessage> : null}
      </>
      <Pagination totalPages={totalPages} handlePagination={handlePagination} />
    </div>
  );
}
