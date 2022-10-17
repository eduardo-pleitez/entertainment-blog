import { StateMovieDetails, ActionMovieDetails } from '../interfaces/commonInterfaces';

const fetchDetailsReducer = (state: StateMovieDetails, action: ActionMovieDetails): StateMovieDetails => {
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
      data: {id: 0, posterPath: '', title: '', overview: '', genres: [], popularity: 0, releaseDate: ''},
      error: 'Something went wrong!',
    };
  default:
    return state;
  }
};
export default fetchDetailsReducer;
