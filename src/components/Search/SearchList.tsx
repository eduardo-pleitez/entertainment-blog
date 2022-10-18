import React from 'react';
import useFetchSearch from '../../hooks/useFetchSearch';
import LoadingMessage from '../Layout/LoadingMessage';
import ErrorMessage from '../Layout/ErrorMessage';
import Pagination from '../Layout/Pagination';
import { BASE_URL } from '../../assets/globalVariables';
import SearchResultElement from './SearchResultElement';

type searchListProps = {
  url: string;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  textRef: React.MutableRefObject<string>;
}

function SearchList({ url, setUrl, textRef }: searchListProps) {
  const { data, loading, error } = useFetchSearch(url);
  function handlePagination(selectedItem: { selected: number }) {
    if (textRef.current !== '') {
      setUrl(
        `${BASE_URL}search/multi?query=${textRef.current}&language=en-US&page=${
          selectedItem.selected + 1
        }`
      );
    } else {
      setUrl(
        `${BASE_URL}search/multi?query=''&language=en-US&page=${
          selectedItem.selected + 1
        }`
      );
    }
  }
  return (
    <div className='sm:py-4 py-2'>
      <>
        {loading ? <LoadingMessage /> : <SearchResultElement data={data} />}
        {error ? <ErrorMessage>{error}</ErrorMessage> : null}
      </>
      <Pagination apiPagesLimit={data.totalPages} handlePagination={handlePagination} />
    </div>
  );
}
export default React.memo(SearchList);