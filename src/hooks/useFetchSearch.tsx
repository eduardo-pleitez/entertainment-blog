import { useEffect, useReducer } from 'react';
import fetchSearchReducer from '../reducers/fetchSearchReducer';
import { StateSearch, Url, ResponseSearch } from '../interfaces/commonInterfaces';
import interceptorAxios from '../services/axiosInstance';

const useFetchSearch = (url: Url) => {
  const initialState: StateSearch = {
    loading: true,
    error: '',
    data: { results: [], totalPages: 0 }
  };
  const [state, dispatch] = useReducer(fetchSearchReducer, initialState);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await interceptorAxios.get<ResponseSearch, ResponseSearch>(url);
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
      } catch (error) {
        dispatch({ type: 'FETCH_ERROR' });
      }
    };
    fetchData();
  }, [url]);

  return state;
};
export default useFetchSearch;
