import { StateSeasonDetails, ActionSeasonDetails } from '../interfaces/commonInterfaces';

const fetchSeasonDetailsReducer = (state: StateSeasonDetails, action: ActionSeasonDetails):
StateSeasonDetails => {
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
      data: {id: 0, name: '', overview: '', posterPath: '', episodes: []},
      error: 'Something went wrong!',
    };
  default:
    return state;
  }
};
export default fetchSeasonDetailsReducer;
