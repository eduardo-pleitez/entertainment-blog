import { StateSimilarMoviesData, ActionSimilarMoviesData } from '../interfaces/commonInterfaces';

const fetchSimilarMoviesReducer = (state: StateSimilarMoviesData, action: ActionSimilarMoviesData): StateSimilarMoviesData => {
  switch (action.type) {
  case 'FETCH_SUCCESS':
    return {
      ...state,
      loading: false,
      data: action.payload,
      error: '',
    };
  case 'FETCH_ERROR':
    return {
      ...state,
      loading: false,
      data: {results: []},
      error: 'Something went wrong!',
    };
  default:
    return state;
  }
};
export default fetchSimilarMoviesReducer;
