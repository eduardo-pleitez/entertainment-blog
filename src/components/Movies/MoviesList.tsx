import React, { useState, useRef, useEffect } from 'react';
import { BASE_URL } from '../../assets/globalVariables';
import SectionTitle from '../Layout/SectionTitle';
import LoadingMessage from '../Layout/LoadingMessage';
import ErrorMessage from '../Layout/ErrorMessage';
import MovieElement from './MovieElement';
import Pagination from '../Layout/Pagination';
import MoviesSearch from './MoviesSearch';
import useFetchSearch from '../../hooks/useFetchSearch';

export default function MoviesList() {
  const [url, setUrl] = useState(`${BASE_URL}discover/movie?language=en-US`);
  const { data, loading, error } = useFetchSearch(url);
  const urlRef = useRef(`${BASE_URL}discover/movie`);
  const [searchFilters, setSearchFilters] = useState({
    certification: '',
    genres: '',
    year: '',
  });

  if (data.totalPages > 500) {
    data.totalPages = 500;
  }
  useEffect(() => {
    const updateData = () => {
      const inputsArray = Object.values(searchFilters).filter((v) => v !== '');
      if (inputsArray.length === 1) {
        setUrl(`${BASE_URL}discover/movie?${inputsArray[0]}`);
        urlRef.current = `${BASE_URL}discover/movie?${inputsArray[0]}`;
      } else if (inputsArray.length === 2) {
        setUrl(`${BASE_URL}discover/movie?${inputsArray[0]}&${inputsArray[1]}`);
        urlRef.current = `${BASE_URL}discover/movie?${inputsArray[0]}&${inputsArray[1]}`;
      } else if (inputsArray.length === 3) {
        setUrl(
          `${BASE_URL}discover/movie?${inputsArray[0]}&${inputsArray[1]}&${inputsArray[2]}`
        );
        urlRef.current = `${BASE_URL}discover/movie?${inputsArray[0]}&${inputsArray[1]}&${inputsArray[2]}`;
      } else {
        setUrl(`${BASE_URL}discover/movie?language=en-US`);
        urlRef.current = `${BASE_URL}discover/movie?language=en-US`;
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
    if (e.target.id === 'searchMoviesByCertification') {
      setSearchFilters((prevState) => ({
        ...prevState,
        certification: `certification_country=US&certification=${e.target.value}`,
      }));
    }
    if (e.target.id === 'searchMoviesByGenres') {
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
    if (e.target.id === 'searchMoviesByYear') {
      setSearchFilters((prevState) => ({
        ...prevState,
        year: `primary_release_year=${e.target.value}`,
      }));
    }
  }
  function handlePagination(selectedItem: { selected: number }) {
    setUrl(`${urlRef.current}&page=${selectedItem.selected + 1}`);
  }
  return (
    <div className='sm:py-4 py-2'>
      <SectionTitle>Movies</SectionTitle>
      <>
        <MoviesSearch handleFiltersChange={handleFiltersChange} />
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
