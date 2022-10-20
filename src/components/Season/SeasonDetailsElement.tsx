import React from 'react';
import { PropsSeasonDetailsData, PropsEpisodes } from '../../interfaces/commonInterfaces';

export default function SeasonDetailsElement({ data }: PropsSeasonDetailsData) {
  return (
    <>
      <div key={data.id} className='flex md:flex-row flex-col'>
        <div className='my-2 md:pr-5'>
          <img src={`https://image.tmdb.org/t/p/w185/${data.posterPath}`} />
        </div>
        <div className='md:w-3/4'>
          <h1 className='xl:text-3xl lg:text-2xl text-xl mb-4'>{data.name}</h1>
          {
            data.overview !== '' ? <div><p className='text-lg mt-4'>Overview:</p>
              <p>{data.overview}</p></div> : <div><p className='text-lg mt-4'>Overview: </p><p className='text-red-700'>Details not found.</p></div>
          }
        </div>
      </div>
      <div>
        <h1 className='xl:text-3xl lg:text-2xl text-xl my-3'>Episodes</h1>
        {data.episodes.map(({ id, name, overview, stillPath }: PropsEpisodes) => {
          return (
            <div key={id} className='flex md:flex-row flex-col sm:my-2 my-4'>
              <div className='flex sm:my-2 md:pr-5'>
                {
                  stillPath !== null ? <img src={`https://image.tmdb.org/t/p/w185/${stillPath}`} /> : null
                }
              </div>
              <div className='md:w-3/4 pt-1'>
                <h2 className='text-xl'>{name}</h2>
                {
                  overview !== '' ? <p><span className='font-bold'>Overview:</span> {overview}</p> : <p className='text-red-700'>Details not found.</p>
                }
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
