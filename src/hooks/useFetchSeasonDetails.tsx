import { useEffect, useReducer } from 'react';
import fetchSeasonDetailsReducer from '../reducers/fetchSeasonDetailsReducer';
import {
  StateSeasonDetails,
  Url,
  ResponseSeasonDetails,
} from '../interfaces/commonInterfaces';
import interceptorAxios from '../services/axiosInstance';

const useFetchSeasonDetails = (url: Url) => {
  const initialState: StateSeasonDetails = {
    loading: true,
    error: '',
    data: {id: 0, name: '', overview: '', posterPath: '', episodes: []},
  };
  const [state, dispatch] = useReducer(fetchSeasonDetailsReducer, initialState);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await interceptorAxios.get<
          ResponseSeasonDetails,
          ResponseSeasonDetails
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
export default useFetchSeasonDetails;