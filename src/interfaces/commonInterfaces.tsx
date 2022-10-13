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

export type CreditsData = {
  cast: [],
  crew: [],
};

export type StateDetails = {
  loading: boolean;
  error: string;
  data: MovieFullDetails;
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

export type Action =
  | { type: 'FETCH_SUCCESS'; payload: Data }
  | { type: 'FETCH_ERROR' };

export type ActionDetails =
  | { type: 'FETCH_SUCCESS'; payload: MovieFullDetails }
  | { type: 'FETCH_ERROR' };

export type ActionCreditsData =
  | { type: 'FETCH_SUCCESS'; payload: CreditsData }
  | { type: 'FETCH_ERROR' };
 
export type ActionReviewsData =
  | { type: 'FETCH_SUCCESS'; payload: ReviewsData }
  | { type: 'FETCH_ERROR' };
  
export type Response = {
  data: Data;
};

export type ResponseDetails = {
  data: MovieFullDetails;
};

export type ResponseCreditsData = {
  data: CreditsData;
};

export type ResponseReviewsData = {
  data: ReviewsData;
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