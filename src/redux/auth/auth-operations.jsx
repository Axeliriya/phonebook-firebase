// import axios from 'axios';
import { apiService } from '../../service/service-api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { authSlice } from '.';

const register = (email, password, name) => async dispatch => {
  dispatch(authSlice.actions.registerRequest());

  try {
    await apiService.registerUser(email, password);

    dispatch(authSlice.actions.registerSuccess(email, password, name));
  } catch (error) {
    toast.error(error.message);
    dispatch(authSlice.actions.registerError(error.message));
  }
};

const logIn = (email, password) => async dispatch => {
  dispatch(authSlice.actions.loginRequest());

  try {
    const { user } = await apiService.logInUser(email, password);

    const currentUser = {
      uid: user.uid,
      email: user.email,
      token: user.refreshToken,
    };

    dispatch(authSlice.actions.loginSuccess(currentUser));
  } catch (error) {
    toast.error(error.message);
    dispatch(authSlice.actions.loginError(error.message));
  }
};

const logOut = () => async dispatch => {
  dispatch(authSlice.actions.logoutRequest());

  try {
    await apiService.logOutUser();

    dispatch(authSlice.actions.logoutSuccess());
  } catch (error) {
    toast.error(error.message);
    dispatch(authSlice.actions.logoutError(error.message));
  }
};

const currentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  dispatch(authSlice.actions.getCurrentUserRequest());

  try {
    const user = await apiService.getCurrentUser();

    dispatch(authSlice.actions.getCurrentUserSuccess(user));
  } catch (error) {
    toast.error(error.message);
    dispatch(authSlice.actions.getCurrentUserError(error.message));
  }
};

// eslint-disable-next-line
export default { register, logIn, logOut, currentUser };
