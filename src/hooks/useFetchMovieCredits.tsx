import { useEffect, useReducer } from 'react';
import fetchMovieCreditsReducer from '../reducers/fetchMovieCreditsReducer';
import {
  Url,
  StateCreditsData,
  ResponseCreditsData,
} from '../interfaces/commonInterfaces';
import interceptorAxios from '../services/axiosInstance';

const useFetchMovieCredits = (url: Url) => {
  const initialState: StateCreditsData = {
    loading: true,
    error: '',
    data: {cast: [], crew: []},
  };
  const [state, dispatch] = useReducer(fetchMovieCreditsReducer, initialState);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await interceptorAxios.get<
          ResponseCreditsData,
          ResponseCreditsData
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
export default useFetchMovieCredits;
