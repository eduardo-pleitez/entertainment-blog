import { useEffect, useReducer } from 'react';
import fetchCreditsReducer from '../reducers/fetchCreditsReducer';
import {
  Url,
  StateCreditsData,
  ResponseCreditsData,
} from '../interfaces/commonInterfaces';
import interceptorAxios from '../services/axiosInstance';

const useFetchCredits = (url: Url) => {
  const initialState: StateCreditsData = {
    loading: true,
    error: '',
    data: {cast: [], crew: []},
  };
  const [state, dispatch] = useReducer(fetchCreditsReducer, initialState);
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
export default useFetchCredits;
