export type Data = {
  results: [];
};

export type CertificationData = {
  certifications: {
    us: [];
  };
};

export type GenresData = {
  genres: [];
};

export type DataSearch = {
  results: [];
  totalPages: number;
};

export type State = {
  loading: boolean;
  error: string;
  data: Data;
};

export type StateSearch = {
  loading: boolean;
  error: string;
  data: DataSearch;
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

export type PersonFullDetails = {
  id: number;
  name: string;
  profilePath: string;
  placeOfBirth: string;
  birthday: string;
  biography: string;
};

export type SeasonsData = {
  seasons: [];
};

export type CreditsData = {
  cast: [];
  crew: [];
};

export type StateMovieDetails = {
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
};

export type StateSeasonDetails = {
  loading: boolean;
  error: string;
  data: SeasonFullDetails;
};

export type StatePersonDetails = {
  loading: boolean;
  error: string;
  data: PersonFullDetails;
};

export type Action =
  | { type: 'FETCH_SUCCESS'; payload: Data }
  | { type: 'FETCH_ERROR' };

export type ActionSearch =
  | { type: 'FETCH_SUCCESS'; payload: DataSearch }
  | { type: 'FETCH_ERROR' };

export type ActionMovieDetails =
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

export type ActionSeasonDetails =
  | { type: 'FETCH_SUCCESS'; payload: SeasonFullDetails }
  | { type: 'FETCH_ERROR' };

export type ActionPersonDetails =
  | { type: 'FETCH_SUCCESS'; payload: PersonFullDetails }
  | { type: 'FETCH_ERROR' };

export type Response = {
  data: Data;
};

export type ResponseCertification = {
  data: CertificationData;
};

export type ResponseGenres = {
  data: GenresData;
};

export type ResponseSearch = {
  data: DataSearch;
};

export type ResponseMovieDetails = {
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

export type ResponseSeasonDetails = {
  data: SeasonFullDetails;
};

export type ResponsePersonDetails = {
  data: PersonFullDetails;
};

export type CertificationDetails = {
  certification: string;
};

export type GenresDetails = {
  id: number;
  name: string;
};

export type Url = string;

export type PropsText = {
  children: string;
};

export type PropsResultData = {
  data: Data;
};

export type PropsPagination = {
  apiPagesLimit: number;
  handlePagination: (selectedItem: { selected: number }) => void;
};

export type PropsDetailsData = {
  data: MovieFullDetails;
};

export type PropsTvShowDetailsData = {
  data: TvShowFullDetails;
};

export type PropsCreditsData = {
  data: CreditsData;
};

export type MovieShortDetails = {
  id: number;
  posterPath: string;
  title: string;
};

export type SearchResultDetails = {
  id: number;
  posterPath: string;
  profilePath: string;
  mediaType: string;
  name: string;
  title: string;
};

export type TvShowShortDetails = {
  id: number;
  posterPath: string;
  name: string;
};

export type PropsGenres = {
  id: number;
  name: string;
};

export type PropsCastData = {
  id: number;
  name: string;
  character: string;
  profilePath: string;
};

export type PropsCrewData = {
  name: string;
  job: string;
};

export type PropsReviewElement = {
  author: string;
  content: string;
  createdAt: string;
};

export type PropsMovieSimilarElement = {
  id: number;
  posterPath: string;
  title: string;
};

export type PropsTvShowSimilarElement = {
  id: number;
  posterPath: string;
  name: string;
};

export type PropsTvShowSeasons = {
  data: SeasonsData;
  tvShowId: string;
};

export type PropsTvShowSeasonElement = {
  id: number;
  posterPath: string;
  name: string;
  seasonNumber: number;
};

export type PropsSeasonDetailsData = {
  data: SeasonFullDetails;
};

export type PropsEpisodes = {
  id: number;
  name: string;
  overview: string;
  stillPath: string;
};

export type PropsPersonDetailsData = {
  data: PersonFullDetails;
};

export type PropsSearch = {
  handleFiltersChange: (e: {
    target: {
      id: string;
      value: React.SetStateAction<string>;
      selectedOptions: HTMLCollectionOf<HTMLOptionElement>;
    };
  }) => void;
};

export type SearchListProps = {
  url: string;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  textRef: React.MutableRefObject<string>;
};
