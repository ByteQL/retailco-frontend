import axios from 'axios';
import Auth from './Auth';

const HttpClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

const api = {
  auth: new Auth(HttpClient),
};

export default api;
