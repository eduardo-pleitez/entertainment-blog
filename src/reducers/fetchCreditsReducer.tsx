import { StateCreditsData, ActionCreditsData } from '../interfaces/commonInterfaces';

const fetchCreditsReducer = (state: StateCreditsData, action: ActionCreditsData): StateCreditsData => {
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
      data: {cast: [], crew: []},
      error: 'Something went wrong!',
    };
  default:
    return state;
  }
};
export default fetchCreditsReducer;
