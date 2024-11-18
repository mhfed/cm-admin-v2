
import axios, { AxiosRequestConfig } from 'axios';
import toast from 'react-hot-toast';
import { clear, load } from '@/lib/utils';

// Create an Axios instance
const requestConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_ENDPOINT_URL || 'http://localhost:8000/api/',
  timeout: import.meta.env.VITE_REQUEST_TIMEOUT || 90 * 1000,
  headers: {
    'Content-Type': 'application/json',
  },
};

const httpRequest = axios.create(requestConfig);

//===================== Request Interceptor =====================//

httpRequest.interceptors.request.use(
  config => {
    // Get token from local storage, gắn vào header request
    const token = load('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    // You can modify the request configuration here (e.g., adding headers, tokens, etc.)
    return config;
  },
  async error => {
    return Promise.reject(error);
  },
);

//===================== Response Interceptor =====================//

httpRequest.interceptors.response.use(
  response => {
    // You can modify the response data here if needed
    return response;
  },
  async error => {
    switch (error.response?.status) {
      case 400: {
        return Promise.reject(error.response.data);
      }
      case 401: {
        toast.error('Phiên đăng nhập đã hết hạn, vui lòng đăng nhập lại!', {
            position: 'top-center',
            duration: 20000,
          });
          clear();
        return;
      }
      case 404: {
        window.location.replace('/404');
        return Promise.reject(error.response.data);
      }
      case 500: {
        toast.error('Có lỗi server!');
        return Promise.reject(error.response.data);
      }
      default: {
        toast.error('Có lỗi xảy ra, vui lòng thử lại sau!');
        return Promise.reject(error.response.data);
      }
    }
  },
);

export default httpRequest;
