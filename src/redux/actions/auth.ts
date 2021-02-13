import api from 'api';
import { Dispatch } from 'redux';
import { LOGOUT, SET_LOGGED_IN_USER } from 'redux/types/constants/auth';
import setAuthHeader from 'utils/setAuthHeader';

export const login = (credentials: {
  email: string;
  password: string;
}) => async (dispatch: Dispatch): Promise<any> => {
  return new Promise((resolve, reject) => {
    api.auth
      .login(credentials)
      .then((res) => {
        if (res) {
          const { token } = res.data;
          localStorage.setItem(
            'userAuthDetails',
            JSON.stringify(res.data.data),
          );
          console.log(res);
          setAuthHeader(token);
          dispatch(setLoggedInUser(res.data.data));
          resolve('success');
        }
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};
export const setLoggedInUser = (userData) => ({
  type: SET_LOGGED_IN_USER,
  payload: userData,
});

export const logoutUser = () => (dispatch: Dispatch) => {
  dispatch(setLoggedInUser({}));
  localStorage.removeItem('userAuthDetails');
  dispatch({ type: LOGOUT });
};
