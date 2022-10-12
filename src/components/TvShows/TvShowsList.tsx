import React, {useState} from 'react';
import useFetch from '../../hooks/useFetch';
import { BASE_URL } from '../../assets/globalVariables';
import SectionTitle from '../Layout/SectionTitle';
import LoadingMessage from '../Layout/LoadingMessage';
import ErrorMessage from '../Layout/ErrorMessage';
import TvShowElement from './TvShowElement';
import Pagination from '../Layout/Pagination';

export default function TvShowsList() {
  const [url, setUrl] = useState(`${BASE_URL}tv/popular?language=en-US`);
  const { data, loading, error, totalPages } = useFetch(url);
  function handlePagination(selectedItem: { selected: number; }) {
    setUrl(`${BASE_URL}tv/popular?language=en-US&page=${selectedItem.selected + 1}`);
  }
  return (
    <div className='sm:py-4 py-2'>
      <SectionTitle>TV Shows</SectionTitle>
      <>
        {loading ? (
          <LoadingMessage />
        ) : (
          <TvShowElement data={data} />
        )}
        {error ? <ErrorMessage>{error}</ErrorMessage> : null}
      </>
      <Pagination totalPages={totalPages} handlePagination={handlePagination} />
    </div>
  );
}
