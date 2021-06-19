import { combineReducers } from 'redux';
import { LOGOUT } from 'redux/types/constants/auth';
import authReducer from './authReducer';

const reducers = combineReducers({
  auth: authReducer,
});

const reducer = (state, action) => {
  if (action.type === LOGOUT) {
    state = undefined;
  }
  return reducers(state, action);
};
export default reducer;
