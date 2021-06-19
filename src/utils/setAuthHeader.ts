import { HttpClient } from 'api';

const setAuthHeader = (token: string) => {
  if (token) {
    HttpClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
};
export default setAuthHeader;
