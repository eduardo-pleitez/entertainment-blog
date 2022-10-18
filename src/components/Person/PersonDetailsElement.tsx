import React from 'react';
import { PropsPersonDetailsData } from '../../interfaces/commonInterfaces';

export default function PersonDetailsElement({ data }: PropsPersonDetailsData) {
  return (
    <div key={data.id} className='flex md:flex-row flex-col'>
      <div className='my-2 md:pr-5'>
        <img src={`https://image.tmdb.org/t/p/w185/${data.profilePath}`} />
      </div>
      <div className='md:w-3/4'>
        <h1 className='xl:text-3xl lg:text-2xl text-xl mb-4'>{data.name}</h1>
        <p className='text-lg mt-4'>Place of Birth:</p>
        <p>{data.placeOfBirth}</p>
        <p className='text-lg mt-4'>Birthday:</p>
        <p>{data.birthday}</p>
        {
          data.biography !== '' ? <div><p className='text-lg mt-4'>Biography:</p>
            <p>{data.biography}</p></div> : <div><p className='text-lg mt-4'>Biography: </p><p
            className='text-red-700'>Details not found.</p></div>
        }
      </div>
    </div>
  );
}
