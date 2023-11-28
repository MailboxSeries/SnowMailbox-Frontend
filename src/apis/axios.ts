import axios from 'axios';
import Cookies from 'js-cookie';

export const instance = axios.create({
  baseURL: 'https://snowmailbox.com',
});

// 요청 인터셉터를 추가하여 매 요청 시 토큰을 설정합니다.
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken') || Cookies.get('accessToken');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem('refreshToken') || Cookies.get('refreshToken');
      if (!refreshToken) {
        throw new Error('토큰 없음');
      }
      try {
        const response = await sendRefreshToken(refreshToken);
        // 새로운 토큰 저장
        localStorage.setItem('accessToken', response.data.accessToken);
        Cookies.set('accessToken', response.data.accessToken);
        // 재시도
        return instance(originalRequest);
      } catch (error) {
        throw error;
      }
    }
    return Promise.reject(error);
  },
);

const sendRefreshToken = async (refreshToken) => {
  try {
    return await instance.get('/auth/token', {
      headers: {
        refreshToken: `${refreshToken}`,
      },
    });
  } catch (error) {
    throw error;
  }
};
