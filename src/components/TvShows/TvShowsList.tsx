import React, { useState, useRef, useEffect } from 'react';
import useFetchSearch from '../../hooks/useFetchSearch';
import { BASE_URL } from '../../assets/globalVariables';
import SectionTitle from '../Layout/SectionTitle';
import LoadingMessage from '../Layout/LoadingMessage';
import ErrorMessage from '../Layout/ErrorMessage';
import TvShowElement from './TvShowElement';
import Pagination from '../Layout/Pagination';
import TvShowsSearch from './TvShowsSearch';

export default function TvShowsList() {
  const [url, setUrl] = useState(`${BASE_URL}discover/tv?language=en-US`);
  const { data, loading, error } = useFetchSearch(url);
  const urlRef = useRef(`${BASE_URL}discover/tv`);
  const [searchFilters, setSearchFilters] = useState({ genres: '', year: '' });

  if (data.totalPages > 500) {
    data.totalPages = 500;
  }

  useEffect(() => {
    const updateData = () => {
      const inputsArray = Object.values(searchFilters).filter((v) => v !== '');
      if (inputsArray.length === 1) {
        setUrl(`${BASE_URL}discover/tv?${inputsArray[0]}`);
        urlRef.current = `${BASE_URL}discover/tv?${inputsArray[0]}`;
      } else if (inputsArray.length === 2) {
        setUrl(`${BASE_URL}discover/tv?${inputsArray[0]}&${inputsArray[1]}`);
        urlRef.current = `${BASE_URL}discover/tv?${inputsArray[0]}&${inputsArray[1]}`;
      } else {
        setUrl(`${BASE_URL}discover/tv?language=en-US`);
        urlRef.current = `${BASE_URL}discover/tv?language=en-US`;
      }
    };
    updateData();
    const selectedItem = {
      selected: 0,
    };
    handlePagination(selectedItem);
  }, [searchFilters]);

  function handleFiltersChange(e: {
    target: {
      id: string;
      value: React.SetStateAction<string>;
      selectedOptions: HTMLCollectionOf<HTMLOptionElement>;
    };
  }) {
    if (e.target.id === 'searchTvShowsByGenres') {
      const genres = Array.from(
        e.target.selectedOptions,
        (option) => option.value
      );
      if (genres[0] === '') {
        genres.shift();
      }
      const genresString = genres.toString();
      setSearchFilters((prevState) => ({
        ...prevState,
        genres: `with_genres=${genresString}`,
      }));
    }
    if (e.target.id === 'searchTvShowsByYear') {
      setSearchFilters((prevState) => ({
        ...prevState,
        year: `first_air_date_year=${e.target.value}`,
      }));
    }
  }

  function handlePagination(selectedItem: { selected: number }) {
    setUrl(`${urlRef.current}&page=${selectedItem.selected + 1}`);
  }

  return (
    <div className='sm:py-4 py-2'>
      <SectionTitle>TV Shows</SectionTitle>
      <>
        <TvShowsSearch handleFiltersChange={handleFiltersChange} />
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
