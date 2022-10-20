import React from 'react';
import DivStyled from '../components/Layout/DivStyled';
import PageLayout from '../components/Layout/PageLayout';
import TvShowCredits from '../components/TvShows/TvShowCredits';
import TvShowDetails from '../components/TvShows/TvShowDetails';
import TvShowReviews from '../components/TvShows/TvShowReviews';
import TvShowSeasons from '../components/TvShows/TvShowSeasons';
import TvShowsSimilar from '../components/TvShows/TvShowsSimilar';

export default function TvShowDetailsPage() {
  return (
    <PageLayout>
      <DivStyled>
        <>
          <TvShowDetails />
          <TvShowSeasons />
          <TvShowCredits />
          <TvShowReviews />
          <TvShowsSimilar />
        </>
      </DivStyled>
    </PageLayout>
  );
}
