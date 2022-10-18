import { StateSearch, ActionSearch } from '../interfaces/commonInterfaces';

const fetchSearchReducer = (state: StateSearch, action: ActionSearch): StateSearch => {
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
      data: { results: [], totalPages: 0 },
      error: 'Something went wrong!',
    };
  default:
    return state;
  }
};
export default fetchSearchReducer;
