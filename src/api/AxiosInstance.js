/* eslint-disable */
import axios from 'axios';
import { push } from 'connected-react-router';
import Auth from '../middleware/storage';
import { BASE_URL, paths } from '../constants';

const axiosApiInstance = axios.create();

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  async (config) => {
    const token = await Auth.getToken();
    config.headers = {
      Accept: 'application/json',
    };
    config.headers.authorization = `Bearer ${token}`;
    config.timeout = 120000;
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

// Response interceptor for API calls
axiosApiInstance.interceptors.response.use(
  (response) => {
    if (response.data.hasError) {
      if (response.data.errors?.code == 401) {
        Auth.destroyToken();
        push(paths.SIGIN);
      }
    }
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    const url = error.config.url !== `${BASE_URL}/auth/login`;
    const refreshurl = error.config.url === `${BASE_URL}/auth/refresh-token`;
    console.log(error.config);
    if (error.response.status === 401 && refreshurl) {
      return;
    }

    //refresh token
    // if (error.response.status === 401 && !originalRequest._retry && url) {
    //   originalRequest._retry = true;
    //   const token = await Auth.getToken();
    //   const refreshToken = await Auth.getRefreshToken();

    //   const credentials = {
    //     access_token: token,
    //     refresh_token: refreshToken,
    //   };
    //   const response = await Api.auth.refreshToken(credentials);
    //   const { access_token, refresh_token } = response.data.data;
    //   await Auth.setToken(access_token, refresh_token);
    //   axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
    //   return axiosApiInstance(originalRequest);
    // }
    return Promise.reject(error);
  },
);

export default axiosApiInstance;
