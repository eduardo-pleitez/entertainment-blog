import React from 'react';
import {
  PropsResultData,
  SearchResultDetails,
} from '../../interfaces/commonInterfaces';
import { Link } from 'react-router-dom';

export default function SearchResultElement({ data }: PropsResultData) {
  return (
    <div className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 p-3 sm:w-10/12 w-full mx-auto items-stretch justify-items-stretch sm:gap-x-2 lg:gap-y-4 gap-y-2'>
      {data.results.map(
        ({
          id,
          posterPath,
          profilePath,
          mediaType,
          name,
          title,
        }: SearchResultDetails) => {
          if (mediaType == 'tv')
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

          if (mediaType == 'movie')
            return (
              <Link to={'/movie/' + id} key={id}>
                <div>
                  <img
                    className='mx-auto sm:w-9/12'
                    src={`https://image.tmdb.org/t/p/w154/${posterPath}`}
                  />
                  <h3 className='text-center xl:text-xl lg:text-lg text-base'>
                    {title}
                  </h3>
                </div>
              </Link>
            );

          if (mediaType == 'person')
            return (
              <Link to={'/person/' + id} key={id}>
                <div>
                  <img
                    className='mx-auto sm:w-9/12'
                    src={`https://image.tmdb.org/t/p/w154/${profilePath}`}
                  />
                  <h3 className='text-center xl:text-xl lg:text-lg text-base'>
                    {name}
                  </h3>
                </div>
              </Link>
            );
        }
      )}
    </div>
  );
}
