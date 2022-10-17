import { useEffect, useReducer } from 'react';
import fetchReducer from '../reducers/fetchReducer';
import { State, Url, Response } from '../interfaces/commonInterfaces';
import interceptorAxios from '../services/axiosInstance';

const useFetch = (url: Url) => {
  const initialState: State = {
    loading: true,
    error: '',
    data: { results: [] }
  };
  const [state, dispatch] = useReducer(fetchReducer, initialState);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await interceptorAxios.get<Response, Response>(url);
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
      } catch (error) {
        dispatch({ type: 'FETCH_ERROR' });
      }
    };
    fetchData();
  }, [url]);

  return state;
};
export default useFetch;
