export type Data = {
  results: [];
  totalPages: number;
};

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

export type StateDetails = {
  loading: boolean;
  error: string;
  data: MovieFullDetails;
};

export type Action =
  | { type: 'FETCH_SUCCESS'; payload: Data }
  | { type: 'FETCH_ERROR' };

export type ActionDetails =
  | { type: 'FETCH_SUCCESS'; payload: MovieFullDetails }
  | { type: 'FETCH_ERROR' };

export type Response = {
  data: Data;
};

export type ResponseDetails = {
  data: MovieFullDetails;
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