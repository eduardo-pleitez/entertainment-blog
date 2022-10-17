import React from 'react';
import PageLayout from '../components/Layout/PageLayout';
import TvShowCredits from '../components/TvShows/TvShowCredits';
import TvShowDetails from '../components/TvShows/TvShowDetails';
import TvShowReviews from '../components/TvShows/TvShowReviews';
import TvShowSeasons from '../components/TvShows/TvShowSeasons';
import TvShowsSimilar from '../components/TvShows/TvShowsSimilar';

export default function TvShowDetailsPage() {
  return (
    <PageLayout>
      <div className='lg:w-9/12 md:w-11/12 sm:w-full bg-white md:p-6 p-2 mx-auto'>
        <TvShowDetails />
        <TvShowSeasons />
        <TvShowCredits />
        <TvShowReviews />
        <TvShowsSimilar />
      </div>
    </PageLayout>
  );
}
