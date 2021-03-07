import api from 'api';
import { Dispatch } from 'redux';
import {
  IS_SIGNING_UP,
  LOGOUT,
  SET_LOGGED_IN_USER,
} from 'redux/types/constants/auth';
import setAuthHeader from 'utils/setAuthHeader';

export const signUp = (userData: any) => async (
  dispatch: Dispatch,
): Promise<any> => {
  dispatch({ type: IS_SIGNING_UP, payload: true });
  return new Promise((resolve, reject) => {
    api.auth
      .signUp(userData)
      .then((res) => {
        dispatch({ type: IS_SIGNING_UP, payload: false });
        resolve(res);
      })
      .catch((err) => {
        dispatch({ type: IS_SIGNING_UP, payload: false });
        reject(err);
      });
  });
};

export const login = (credentials: any) => async (
  dispatch: Dispatch,
): Promise<any> => {
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
          setAuthHeader(token);
          dispatch(setLoggedInUser(res.data.data));
          resolve('success');
        }
      })
      .catch((err) => {
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
