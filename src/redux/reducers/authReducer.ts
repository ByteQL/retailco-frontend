import { SET_LOGGED_IN_USER } from 'redux/types/constants/auth';
import isEmpty from 'utils/isEmpty';

const defaultState = {
  isAuthenticated: false,
  user: {},
};

const authReducer = (state = defaultState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_LOGGED_IN_USER: {
      return { ...state, isAuthenticated: !isEmpty(payload), user: payload };
    }
    default:
      return state;
  }
};

export default authReducer;
