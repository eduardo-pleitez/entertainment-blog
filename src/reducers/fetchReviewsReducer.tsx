import { StateReviewsData, ActionReviewsData } from '../interfaces/commonInterfaces';

const fetchReviewsReducer = (state: StateReviewsData, action: ActionReviewsData): StateReviewsData => {
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
export default fetchReviewsReducer;
