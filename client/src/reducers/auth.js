import types from '../actions/types';

const INITIAL_STATE = {
  loggedIn: false,
  jwt: '',
  error: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SIGN_UP_SUCCESS:
      return { ...state, loggedIn: true, jwt: action.payload, error: null };
    case types.SIGN_UP_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
