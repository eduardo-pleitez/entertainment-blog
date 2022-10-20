import { useEffect, useReducer } from 'react';
import fetchMovieDetailsReducer from '../reducers/fetchMovieDetailsReducer';
import {
  StateMovieDetails,
  Url,
  ResponseMovieDetails,
} from '../interfaces/commonInterfaces';
import interceptorAxios from '../services/axiosInstance';

const useFetchMovieDetails = (url: Url) => {
  const initialState: StateMovieDetails = {
    loading: true,
    error: '',
    data: {id: 0, posterPath: '', title: '', overview: '', genres: [], popularity: 0, releaseDate: ''},
  };
  const [state, dispatch] = useReducer(fetchMovieDetailsReducer, initialState);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await interceptorAxios.get<
          ResponseMovieDetails,
          ResponseMovieDetails
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
export default useFetchMovieDetails;
