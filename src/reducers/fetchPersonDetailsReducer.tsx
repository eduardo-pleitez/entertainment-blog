import { StatePersonDetails, ActionPersonDetails } from '../interfaces/commonInterfaces';

const fetchPersonDetailsReducer = (state: StatePersonDetails, action: ActionPersonDetails): StatePersonDetails => {
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
      data: {id: 0, name: '', profilePath: '', placeOfBirth: '', birthday: '', biography: ''},
      error: 'Something went wrong!',
    };
  default:
    return state;
  }
};
export default fetchPersonDetailsReducer;