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

export type Action =
  | { type: 'FETCH_SUCCESS'; payload: Data }
  | { type: 'FETCH_ERROR' };

export type Response = {
  data: Data;
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

export type MovieShortDetails = {
  id: number;
  posterPath: string;
  title: string;
};
