import axios from 'axios';
import Auth from './Auth';

export const HttpClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

HttpClient.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error.response),
);

const api = {
  auth: new Auth(HttpClient),
};

export default api;
