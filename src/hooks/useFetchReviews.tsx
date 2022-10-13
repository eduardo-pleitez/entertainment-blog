import { useEffect, useReducer } from 'react';
import fetchReviewsReducer from '../reducers/fetchReviewsReducer';
import {
  Url,
  StateReviewsData,
  ResponseReviewsData,
} from '../interfaces/commonInterfaces';
import interceptorAxios from '../services/axiosInstance';

const useFetchReviews = (url: Url) => {
  const initialState: StateReviewsData = {
    loading: true,
    error: '',
    data: {results: []},
  };
  const [state, dispatch] = useReducer(fetchReviewsReducer, initialState);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await interceptorAxios.get<
          ResponseReviewsData,
          ResponseReviewsData
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
export default useFetchReviews;
