import React, { useState, useEffect } from 'react';
import interceptorAxios from '../../services/axiosInstance';
import {
  ResponseGenres,
  GenresDetails,
  PropsSearch,
} from '../../interfaces/commonInterfaces';
import { BASE_URL } from '../../assets/globalVariables';

export default function TvShowsSearch({ handleFiltersChange }: PropsSearch) {
  const [genresData, setGenresData] = useState([]);
  const yearsFilter = [
    2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011,
    2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await interceptorAxios.get<
          ResponseGenres,
          ResponseGenres
        >(`${BASE_URL}genre/tv/list`);
        setGenresData(response.data.genres);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='flex justify-center items-start sm:flex-row flex-col py-4 px-4'>
      <select
        name='searchTvShowsByGenres'
        id='searchTvShowsByGenres'
        className='p-2 bg-white border border-black sm:my-0 my-4 sm:w-auto w-full sm:mr-12'
        multiple
        onChange={handleFiltersChange}
      >
        <option value=''>Filter by Genres:</option>
        {genresData.map(({ id, name }: GenresDetails) => {
          return (
            <option value={id} key={id}>
              {name}
            </option>
          );
        })}
      </select>
      <select
        name='searchTvShowsByYear'
        id='searchTvShowsByYear'
        className='p-2 bg-white border border-black sm:w-auto w-full'
        onChange={handleFiltersChange}
      >
        <option value=''>Filter By Year:</option>
        {yearsFilter.map((year, index) => {
          return (
            <option value={year} key={index}>
              {year}
            </option>
          );
        })}
      </select>
    </div>
  );
}