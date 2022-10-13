import React from 'react';
import { PropsCreditsData, PropsCastData, PropsCrewData } from '../../interfaces/commonInterfaces';

export default function CreditsSection({ data }: PropsCreditsData) {
  // eslint-disable-next-line no-console
  console.log(data);
  return (
    <>
      <div className='p-2'>
        <h2 className='lg:text-2xl text-lg'>Cast:</h2>
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 sm:gap-x-2'>
          {data.cast.map(({castId, name, character}: PropsCastData) => {
            return (
              <div key={castId} className='py-2'>
                <p><span>Name: </span>{name}</p>
                <p><span>Character: </span>{character}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className='p-2'>
        <h2 className='lg:text-2xl text-lg'>Crew:</h2>
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 sm:gap-x-2'>
          {data.crew.map(({name, job}: PropsCrewData , index) => {
            return (
              <div key={index} className='py-2'>
                <p><span>Name: </span>{name}</p>
                <p><span>Job: </span>{job}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
