export type Data = {
  results: [];
  totalPages: number;
};

export type ReviewsData = {
  results: [];
}
export type State = {
  loading: boolean;
  error: string;
  data: Data;
  totalPages: number;
};

export type MovieFullDetails = {
  id: number;
  posterPath: string;
  title: string;
  overview: string;
  genres: [];
  popularity: number;
  releaseDate: string;
};

export type TvShowFullDetails = {
  id: number;
  posterPath: string;
  name: string;
  overview: string;
  genres: [];
  popularity: number;
};

export type SeasonFullDetails = {
  id: number;
  name: string;
  overview: string;
  posterPath: string;
  episodes: [];
};

export type SeasonsData = {
  seasons: [];
}

export type CreditsData = {
  cast: [],
  crew: [],
};

export type StateDetails = {
  loading: boolean;
  error: string;
  data: MovieFullDetails;
};

export type StateTvShowDetails = {
  loading: boolean;
  error: string;
  data: TvShowFullDetails;
};

export type StateTvShowSeasons = {
  loading: boolean;
  error: string;
  data: SeasonsData;
};

export type StateCreditsData = {
  loading: boolean;
  error: string;
  data: CreditsData;
}

export type StateReviewsData = {
  loading: boolean;
  error: string;
  data: ReviewsData;
}

export type StateSimilarMoviesData = {
  loading: boolean;
  error: string;
  data: ReviewsData;
}

export type StateSeasonDetails = {
  loading: boolean;
  error: string;
  data: SeasonFullDetails;
};

export type Action =
  | { type: 'FETCH_SUCCESS'; payload: Data }
  | { type: 'FETCH_ERROR' };

export type ActionDetails =
  | { type: 'FETCH_SUCCESS'; payload: MovieFullDetails }
  | { type: 'FETCH_ERROR' };

export type ActionTvShowDetails =
  | { type: 'FETCH_SUCCESS'; payload: TvShowFullDetails }
  | { type: 'FETCH_ERROR' };

export type ActionTvShowSeasons =
  | { type: 'FETCH_SUCCESS'; payload: SeasonsData }
  | { type: 'FETCH_ERROR' };

export type ActionCreditsData =
  | { type: 'FETCH_SUCCESS'; payload: CreditsData }
  | { type: 'FETCH_ERROR' };
 
export type ActionReviewsData =
  | { type: 'FETCH_SUCCESS'; payload: ReviewsData }
  | { type: 'FETCH_ERROR' };

export type ActionSimilarMoviesData =
  | { type: 'FETCH_SUCCESS'; payload: ReviewsData }
  | { type: 'FETCH_ERROR' };

export type ActionSeasonDetails =
  | { type: 'FETCH_SUCCESS'; payload: SeasonFullDetails }
  | { type: 'FETCH_ERROR' };

export type Response = {
  data: Data;
};

export type ResponseDetails = {
  data: MovieFullDetails;
};

export type ResponseTvShowDetails = {
  data: TvShowFullDetails;
};

export type ResponseTvShowSeasons = {
  data: SeasonsData;
};

export type ResponseCreditsData = {
  data: CreditsData;
};

export type ResponseReviewsData = {
  data: ReviewsData;
};

export type ResponseSimilarMoviesData = {
  data: ReviewsData;
};

export type ResponseSeasonDetails = {
  data: SeasonFullDetails;
};

export type Url = string;

export type PropsText = {
  children: string;
};

export type PropsData = {
  data: {
    results: [];
  };
};

export type PropsDetailsData = {
  data: MovieFullDetails;
};

export type PropsTvShowDetailsData = {
  data: TvShowFullDetails;
};

export type PropsCreditsData = {
  data: CreditsData;
}

export type MovieShortDetails = {
  id: number;
  posterPath: string;
  title: string;
};

export type TvShowShortDetails = {
  id: number;
  posterPath: string;
  name: string;
};

export type PropsGenres = {
  id: number,
  name: string,
}

export type PropsCastData = {
  castId: number,
  name: string,
  character: string,
}

export type PropsCrewData = {
  name: string,
  job: string,
}

export type PropsReviewsData = {
  data: ReviewsData;
}

export type PropsReviewElement = {
  author: string,
  content: string,
  createdAt: string,
}

export type PropsMoviesSimilar = {
  data: ReviewsData;
}

export type PropsTvShowSimilar = {
  data: ReviewsData;
}

export type PropsMovieSimilarElement = {
  id: number;
  posterPath: string;
  title: string;
}

export type PropsTvShowSimilarElement = {
  id: number;
  posterPath: string;
  name: string;
}

export type PropsTvShowSeasons = {
  data: SeasonsData;
  tvShowId: string;
}

export type PropsTvShowSeasonElement = {
  id: number;
  posterPath: string;
  name: string;
  seasonNumber: number;
}