import React from 'react';
import { PropsTvShowDetailsData, PropsGenres } from '../../interfaces/commonInterfaces';

export default function TvShowDetailsElement({ data }: PropsTvShowDetailsData) {
  return (
    <div key={data.id} className='flex md:flex-row flex-col'>
      <div className='flex my-2 md:pr-5'>
        <img src={`https://image.tmdb.org/t/p/w185/${data.posterPath}`} />
      </div>
      <div className='md:w-3/4'>
        <h1 className='xl:text-3xl lg:text-2xl text-xl mb-4'>{data.name}</h1>
        <div>
          {data.genres.map(({ id, name}: PropsGenres) => {
            return (
              <span key={id} className='inline-block m-1 p-2 bg-black text-white'>{name}</span>
            );
          })}
        </div>
        <p className='text-lg mt-4'>Overview:</p>
        <p>{data.overview}</p>
        <p><span className='text-lg'>Popularity:  </span>{data.popularity}</p> 
      </div>
    </div>
  );
}
