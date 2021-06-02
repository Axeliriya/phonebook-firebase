import { createSlice } from '@reduxjs/toolkit';

const initialUserState = {
  user: [],
  name: 'User',
  token: false,
  error: null,
  isLoggedOn: false,
  isLoading: false,
};

const { actions, reducer } = createSlice({
  name: 'auth',
  initialState: initialUserState,
  reducers: {
    registerRequest: state => {
      state.isLoading = true;
    },
    registerSuccess: (state, { payload }) => {
      state.user.push(payload);
      state.name = payload;
      state.token = true;
      state.isLoading = false;
      state.isLoggedOn = true;
    },
    registerError: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
      state.isLoggedOn = false;
    },
    loginRequest: state => {
      state.isLoading = true;
    },
    loginSuccess: (state, { payload }) => {
      state.user.push(payload);
      state.token = true;
      state.isLoading = false;
      state.isLoggedOn = true;
    },
    loginError: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
      state.isLoggedOn = false;
    },
    logoutRequest: state => {
      state.isLoading = true;
    },
    logoutSuccess: state => {
      state.user = [];
      state.token = false;
      state.isLoading = false;
      state.isLoggedOn = false;
    },
    logoutError: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    getCurrentUserRequest: state => {
      state.isLoading = true;
    },
    getCurrentUserSuccess: (state, { payload }) => {
      state.user = payload;
      state.isLoading = false;
      state.isLoggedOn = true;
    },
    getCurrentUserError: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
      state.isLoggedOn = false;
    },
  },
});

// eslint-disable-next-line
export default { actions, reducer };
