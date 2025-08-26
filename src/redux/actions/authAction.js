import axios from 'axios';
import { authRequest, authSuccess, authFail, authLogout } from '../reducers/authReducer';

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch(authRequest());

    const { data } = await axios.post('http://localhost:5000/api/auth/register', {
      name,
      email,
      password,
    });

    dispatch(authSuccess(data));
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch(authFail(error.response?.data?.message || error.message));
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(authRequest());

    const { data } = await axios.post('http://localhost:5000/api/auth/login', {
      email,
      password,
    });

    dispatch(authSuccess(data));
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch(authFail(error.response?.data?.message || error.message));
  }
};

export const logout = () => (dispatch) => {
  dispatch(authLogout());
};
