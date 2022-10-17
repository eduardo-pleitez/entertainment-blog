import React from 'react';
import { PropsTvShowSeasonElement, PropsTvShowSeasons } from '../../interfaces/commonInterfaces';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

export default function TvShowSeasonsSection({ data, tvShowId }: PropsTvShowSeasons) {
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
        }
      },
      {
        breakpoint: 600,
        settings: {
          rows: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 1,
        }
      }
    ]
  };
  return (
    <div className='mt-6 mb-3'>
      <h2 className='text-center lg:text-2xl text-lg'>Tv Show Seasons</h2>
      <div className='px-8 my-4 bg-black sm:w-1/2 mx-auto'>
        <Slider {...settings}>
          {data.seasons.map(({ id, posterPath, name, seasonNumber }: PropsTvShowSeasonElement) => {
            return (
              <div key={id}>
                <Link to={'/tvshow/' + tvShowId + '/season/' + seasonNumber}>
                  <img src={`https://image.tmdb.org/t/p/w154/${posterPath}`} />
                  <p className='text-white'>{name}</p>
                </Link>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}