import { useEffect, useReducer } from 'react';
import fetchPersonDetailsReducer from '../reducers/fetchPersonDetailsReducer';
import {
  StatePersonDetails,
  Url,
  ResponsePersonDetails,
} from '../interfaces/commonInterfaces';
import interceptorAxios from '../services/axiosInstance';

const useFetchPersonDetails = (url: Url) => {
  const initialState: StatePersonDetails = {
    loading: true,
    error: '',
    data: {id: 0, name: '', profilePath: '', placeOfBirth: '', birthday: '', biography: ''},
  };
  const [state, dispatch] = useReducer(fetchPersonDetailsReducer, initialState);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await interceptorAxios.get<
          ResponsePersonDetails,
          ResponsePersonDetails
          >(url);
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
      } catch (error) {
        dispatch({ type: 'FETCH_ERROR' });
      }
    };
    fetchData();
  }, [url]);

  return state;
};
export default useFetchPersonDetails;
