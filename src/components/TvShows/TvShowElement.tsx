import React from 'react';
import { Link } from 'react-router-dom';
import {
  TvShowShortDetails,
  PropsResultData,
} from '../../interfaces/commonInterfaces';

export default function TvShowElement({ data }: PropsResultData) {
  return (
    <div
      className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 p-3 sm:w-10/12 w-full mx-auto 
items-stretch justify-items-stretch sm:gap-x-2 lg:gap-y-4 gap-y-2'
    >
      {data.results.map(({ id, name, posterPath }: TvShowShortDetails) => {
        return (
          <Link to={'/tvshow/' + id} key={id}>
            <div>
              <img
                className='mx-auto sm:w-9/12'
                src={`https://image.tmdb.org/t/p/w154/${posterPath}`}
              />
              <h3 className='text-center xl:text-xl lg:text-lg text-base'>
                {name}
              </h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
