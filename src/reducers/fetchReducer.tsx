import { State, Action } from '../interfaces/commonInterfaces';

const fetchReducer = (state: State, action: Action): State => {
  switch (action.type) {
  case 'FETCH_SUCCESS':
    return {
      ...state,
      loading: false,
      data: action.payload,
      totalPages: 500,
      error: '',
    };
  case 'FETCH_ERROR':
    return {
      ...state,
      loading: false,
      data: { results: [], totalPages: 0 },
      totalPages: 0,
      error: 'Something went wrong!',
    };
  default:
    return state;
  }
};
export default fetchReducer;
