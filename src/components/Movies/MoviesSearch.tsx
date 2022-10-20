import React, { useState, useEffect } from 'react';
import interceptorAxios from '../../services/axiosInstance';
import { ResponseCertification, ResponseGenres, CertificationDetails, GenresDetails, PropsSearch } from '../../interfaces/commonInterfaces';
import { BASE_URL } from '../../assets/globalVariables';

export default function MoviesSearch({handleFiltersChange}:PropsSearch) {
  const [certificationsData, setCertificationsData] = useState<[]>([]);
  const [genresData, setGenresData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await interceptorAxios.get<ResponseCertification, ResponseCertification>(`${BASE_URL}certification/movie/list`);
        setCertificationsData(response.data.certifications.us);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await interceptorAxios.get<ResponseGenres, ResponseGenres>(`${BASE_URL}genre/movie/list`);
        setGenresData(response.data.genres);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='flex justify-evenly items-start sm:flex-row flex-col py-4 px-4'>
      <select
        name='searchMoviesByCertification'
        id='searchMoviesByCertification'
        className='p-2 bg-white border border-black sm:w-auto w-full'
        onChange={handleFiltersChange}
      >
        <option value=''>Filter by certification:</option>
        {certificationsData.map(({certification}:CertificationDetails, index) => {
          return (
            <option value={certification} key={index}>
              {certification}
            </option>
          );
        })}
      </select>
      <select
        name='searchMoviesByGenres'
        id='searchMoviesByGenres'
        className='p-2 bg-white border border-black sm:my-0 my-4 sm:w-auto w-full'
        multiple
        onChange={handleFiltersChange}
      >
        <option value=''>Filter by Genres:</option>
        {genresData.map(({id, name}:GenresDetails) => {
          return (
            <option value={id} key={id}>
              {name}
            </option>
          );
        })}
      </select>
      <select name='searchMoviesByYear' id='searchMoviesByYear' className='p-2 bg-white border border-black sm:w-auto w-full' onChange={handleFiltersChange}>
        <option value=''>Filter By Year:</option>
        <option value='2000'>2000</option>
        <option value='2001'>2001</option>
        <option value='2002'>2002</option>
        <option value='2003'>2003</option>
        <option value='2004'>2004</option>
        <option value='2005'>2005</option>
        <option value='2006'>2006</option>
        <option value='2007'>2007</option>
        <option value='2008'>2008</option>
        <option value='2009'>2009</option>
        <option value='2010'>2010</option>
        <option value='2011'>2011</option>
        <option value='2012'>2012</option>
        <option value='2013'>2013</option>
        <option value='2014'>2014</option>
        <option value='2015'>2015</option>
        <option value='2016'>2016</option>
        <option value='2017'>2017</option>
        <option value='2018'>2018</option>
        <option value='2019'>2019</option>
        <option value='2020'>2020</option>
        <option value='2021'>2021</option>
        <option value='2022'>2022</option>
      </select>
    </div>
  );
}
