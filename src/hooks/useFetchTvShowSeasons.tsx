import { useEffect, useReducer } from 'react';
import fetchTvShowSeasonsReducer from '../reducers/fetchTvShowSeasonsReducer';
import {
  Url,
  ResponseTvShowSeasons,
  StateTvShowSeasons,
} from '../interfaces/commonInterfaces';
import interceptorAxios from '../services/axiosInstance';

const useFetchTvShowSeasons = (url: Url) => {
  const initialState: StateTvShowSeasons = {
    loading: true,
    error: '',
    data: {seasons: []},
  };
  const [state, dispatch] = useReducer(fetchTvShowSeasonsReducer, initialState);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await interceptorAxios.get<
          ResponseTvShowSeasons,
          ResponseTvShowSeasons
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
export default useFetchTvShowSeasons;