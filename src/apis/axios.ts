import axios from 'axios';
import Cookies from 'js-cookie';
import useSetTokens from '../hooks/useSetTokens';

const getAccessTokenFromCookies = () => Cookies.get('accessCookie');
const getRefreshTokenFromCookies = () => Cookies.get('refreshCookie');

export const instance = axios.create({
  baseURL: 'https://snowmailbox.com',
  headers: {
    Authorization: `Bearer ${getAccessTokenFromCookies()}`,
  },
});

instance.interceptors.request.use(
  config => {
    config.headers.Authorization = `Bearer ${getAccessTokenFromCookies()}`;
    return config;
  },
  error => Promise.reject(error)
);

instance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = getRefreshTokenFromCookies();
      if (!refreshToken) {
        throw new Error('토큰 없음');
      }
      try {
        const response = await sendRefreshToken(refreshToken);
        originalRequest.headers['Authorization'] = `Bearer ${getAccessTokenFromCookies()}`;
        return instance(originalRequest);
      } catch (error) {
        throw error;
      }
    }

    return Promise.reject(error);
  },
);

const sendRefreshToken = async refreshToken => {
  try {
    const response = await instance.get('/auth/token', {
      headers: {
        refreshToken,
      },
    });

    useSetTokens(response.data.accessToken, response.data.refreshToken);
    return response;
  } catch (error) {
    throw error;
  }
};
