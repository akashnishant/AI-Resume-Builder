import { createSlice } from '@reduxjs/toolkit';

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loading: false,
    userInfo: userInfoFromStorage,
    error: null,
  },
  reducers: {
    authRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    authSuccess: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
    },
    authFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    authLogout: (state) => {
      state.userInfo = null;
      localStorage.removeItem('userInfo');
    },
  },
});

export const { authRequest, authSuccess, authFail, authLogout } = authSlice.actions;
export default authSlice.reducer;
