import React from 'react';
import {
  PropsCreditsData,
  PropsCastData,
  PropsCrewData,
} from '../../interfaces/commonInterfaces';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function CreditsSection({ data }: PropsCreditsData) {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 1,
    rows: 1,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          rows: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          rows: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className='p-2'>
        <h2 className='text-center lg:text-2xl text-lg'>Cast</h2>
        <div className='lg:w-1/2 mx-auto px-8 my-4 bg-black text-white'>
          <Slider {...settings}>
            {data.cast.map(
              ({ id, name, character, profilePath }: PropsCastData) => {
                return (
                  <div key={id}>
                    <Link to={'/person/' + id}>
                      <img
                        src={`https://image.tmdb.org/t/p/w154/${profilePath}`}
                      />
                      <p>
                        <span>Name: </span>
                        {name}
                      </p>
                      <p>
                        <span>Character: </span>
                        {character}
                      </p>
                    </Link>
                  </div>
                );
              }
            )}
          </Slider>
        </div>
      </div>
      <div className='p-2'>
        <h2 className='lg:text-2xl text-lg'>Crew</h2>
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 sm:gap-x-2'>
          {data.crew.map(({ name, job }: PropsCrewData, index) => {
            return (
              <div key={index} className='py-2'>
                <p>
                  <span>Name: </span>
                  {name}
                </p>
                <p>
                  <span>Job: </span>
                  {job}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
