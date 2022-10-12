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

