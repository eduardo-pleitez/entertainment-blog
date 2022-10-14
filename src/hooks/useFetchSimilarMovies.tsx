import { useEffect, useReducer } from 'react';
import fetchSimilarMoviesReducer from '../reducers/fetchSimilarMoviesReducer';
import {
  Url,
  StateSimilarMoviesData,
  ResponseSimilarMoviesData,
} from '../interfaces/commonInterfaces';
import interceptorAxios from '../services/axiosInstance';

const useFetchSimilarMovies = (url: Url) => {
  const initialState: StateSimilarMoviesData = {
    loading: true,
    error: '',
    data: {results: []},
  };
  const [state, dispatch] = useReducer(fetchSimilarMoviesReducer, initialState);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await interceptorAxios.get<
          ResponseSimilarMoviesData,
          ResponseSimilarMoviesData
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
export default useFetchSimilarMovies;