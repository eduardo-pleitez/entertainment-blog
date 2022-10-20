import React from 'react';
import {
  PropsTvShowSimilarElement,
  PropsResultData,
} from '../../interfaces/commonInterfaces';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function TvShowSimilarSection({ data }: PropsResultData) {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 2,
    speed: 500,
    rows: 1,
    slidesPerRow: 2,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          rows: 1,
          slidesToShow: 2,
          slidesToScroll: 1,
          slidesPerRow: 2,
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
    <div className='mt-6 mb-3'>
      <h2 className='text-center lg:text-2xl text-lg'>Similar TV Shows</h2>
      <div className='px-8 my-4 bg-black'>
        <Slider {...settings}>
          {data.results.map(
            ({ id, posterPath, name }: PropsTvShowSimilarElement) => {
              return (
                <div key={id}>
                  <Link to={'/tvshow/' + id}>
                    <img
                      src={`https://image.tmdb.org/t/p/w154/${posterPath}`}
                    />
                    <p className='text-white'>{name}</p>
                  </Link>
                </div>
              );
            }
          )}
        </Slider>
      </div>
    </div>
  );
}
