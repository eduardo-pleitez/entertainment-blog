import { StateTvShowDetails, ActionTvShowDetails } from '../interfaces/commonInterfaces';

const fetchTvShowDetailsReducer = (state: StateTvShowDetails, action: ActionTvShowDetails): StateTvShowDetails => {
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
      data: {id: 0, posterPath: '', name: '', overview: '', genres: [], popularity: 0},
      error: 'Something went wrong!',
    };
  default:
    return state;
  }
};
export default fetchTvShowDetailsReducer;
