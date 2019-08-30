import axios from 'axios';
import types from './types';

export const signUpUser = signUpData => async dispatch => {
  try {
    const response = await axios.post('/api/user', signUpData);
    dispatch({
      type: types.SIGN_UP_SUCCESS,
      payload: response.data.token
    });
  } catch (error) {
    error.response.data.errors.forEach(message => console.error(`Error: ${message}`));
    dispatch({
      type: types.SIGN_UP_ERROR,
      payload: error.response.data.errors[0]
    });
  }
};
