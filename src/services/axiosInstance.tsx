import axios from 'axios';
import camelCaseKeys from 'camelcase-keys';

const interceptorAxios = axios.create();

interceptorAxios.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params['api_key'] = process.env.REACT_APP_API_KEY;
  return config;
});
interceptorAxios.interceptors.response.use(
  function (response) {
    return {
      ...response,
      data: camelCaseKeys(response.data, { deep: true }),
    };
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default interceptorAxios;
