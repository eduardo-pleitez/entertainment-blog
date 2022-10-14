import { useEffect, useReducer } from 'react';
import fetchTvShowDetailsReducer from '../reducers/fetchTvShowDetailsReducer';
import {
  StateTvShowDetails,
  Url,
  ResponseTvShowDetails,
} from '../interfaces/commonInterfaces';
import interceptorAxios from '../services/axiosInstance';

const useFetchTvShowDetails = (url: Url) => {
  const initialState: StateTvShowDetails = {
    loading: true,
    error: '',
    data: {id: 0, posterPath: '', name: '', overview: '', genres: [], popularity: 0},
  };
  const [state, dispatch] = useReducer(fetchTvShowDetailsReducer, initialState);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await interceptorAxios.get<
          ResponseTvShowDetails,
          ResponseTvShowDetails
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
export default useFetchTvShowDetails;
