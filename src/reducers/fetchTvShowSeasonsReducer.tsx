import { StateTvShowSeasons, ActionTvShowSeasons } from '../interfaces/commonInterfaces';

const fetchTvShowSeasonsReducer = (state: StateTvShowSeasons, action: ActionTvShowSeasons):
StateTvShowSeasons => {
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
      data: {seasons: []},
      error: 'Something went wrong!',
    };
  default:
    return state;
  }
};
export default fetchTvShowSeasonsReducer;
