import Api from '../../api';
import Auth from '../../middleware/storage';
import { showToast } from '../../utils/helpers';
import { setIsStoreOwner, setStore, setUser } from '../reducers/authSlice';
import { setLoading } from '../reducers/loaderSlice';

// thunks
export const signUpUserEmail = (credentials) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await Api.auth.signUpEmail(credentials);
    if (res.data.hasError) {
      dispatch(setLoading(false));
      showToast(res.data.errors.message, 'error');
      return false;
    } else {
      Auth.setToken(res.data.data?.token, null);
      Auth.setUser({
        firstName: res.data.data.user.first_name,
        lastName: res.data.data.user.last_name,
        picture: res.data.data.user.profile_pic_url,
      });
      dispatch(setUser(res.data.data.user));
      dispatch(setStore(res.data.data?.store));
      dispatch(setIsStoreOwner(res.data.data?.is_store_owner));
      dispatch(setLoading(false));
      dispatch(fetchUser());
      showToast('Welcome! ' + res.data.data.user.first_name, 'success');
      return true;
    }
  } catch (error) {
    console.log(error);
    showToast('An error occurred!', 'error');
    dispatch(setLoading(false));
  }
};

export const signInUserEmail = (credentials) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await Api.auth.signInEmail(credentials);
    if (res.data.hasError) {
      dispatch(setLoading(false));
      showToast(res.data.errors.message, 'error');
      return false;
    } else {
      dispatch(setLoading(false));
      Auth.setToken(res.data.data?.token, null);
      Auth.setUser({
        firstName: res.data.data.user.first_name,
        lastName: res.data.data.user.last_name,
        picture: res.data.data.user.profile_pic_url,
      });
      dispatch(setUser(res.data.data.user));
      dispatch(setStore(res.data.data.store));
      dispatch(setIsStoreOwner(res.data.data.is_store_owner));
      showToast('Welcome! ' + res.data.data.user.first_name, 'success');
      return true;
    }
  } catch (error) {
    dispatch(setLoading(false));
    console.log('signin::', error);
    showToast('An error occurred!', 'error');
  }
};

export const signInGoogle = (token) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await Api.auth.signGoogle(token);
    if (res.data.hasError) {
      dispatch(setLoading(false));
      showToast(res.data.errors.message, 'error');
      return false;
    } else {
      dispatch(setLoading(false));
      Auth.setToken(res.data.data?.token, null);
      Auth.setUser({
        firstName: res.data.data.user.first_name,
        lastName: res.data.data.user.last_name,
        picture: res.data.data.user.profile_pic_url,
      });
      dispatch(setUser(res.data.data.user));
      dispatch(setStore(res.data.data.store));
      dispatch(setIsStoreOwner(res.data.data.is_store_owner));
      showToast('Welcome!', 'success');
      return true;
    }
  } catch (error) {
    dispatch(setLoading(false));
    console.log('signin::', error);
    showToast('An error occurred!', 'error');
  }
};

export const forgotPassword = (credentials) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await Api.auth.forgotPassword(credentials);
    if (res.data.hasError) {
      dispatch(setLoading(false));
      showToast(res.data.errors.message, 'error');
      return false;
    } else {
      dispatch(setLoading(false));
      showToast('Reset code has been sent to you email!', 'success');
      return true;
    }
  } catch (error) {
    dispatch(setLoading(false));
    console.log('forgot::', error);
    showToast('An error occurred!', 'error');
  }
};

export const resendForgotPassword = (credentials) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await Api.auth.resendForgotPassword(credentials);
    if (res.data.hasError) {
      dispatch(setLoading(false));
      showToast(res.data.errors.message, 'error');
      return false;
    } else {
      dispatch(setLoading(false));
      showToast('Code has been resent to you email!', 'success');
      return true;
    }
  } catch (error) {
    dispatch(setLoading(false));
    console.log('forgotresend::', error);
    showToast('An error occurred!', 'error');
  }
};

export const resetPassword = (credentials) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await Api.auth.resetPassword(credentials);
    if (res.data.hasError) {
      dispatch(setLoading(false));
      showToast(res.data.errors.message, 'error');
      return false;
    } else {
      dispatch(setLoading(false));
      showToast('Password reset success!, Please Login', 'success');
      return true;
    }
  } catch (error) {
    dispatch(setLoading(false));
    console.log('resetpassword::', error);
    showToast('An error occurred!', 'error');
  }
};

export const fetchUser = () => async (dispatch) => {
  try {
    const res = await Api.user.userDetails();
    if (res.data.hasError) {
      // showToast('An error occurred!', 'error');
    } else {
      dispatch(setUser(res.data.data.user));
      dispatch(setStore(res.data.data.store));
      dispatch(setIsStoreOwner(res.data.data.is_store_owner));
    }
  } catch (error) {
    console.log(error);
    showToast('An error occurred!', 'error');
    dispatch(setLoading(false));
  }
};

export const updateUser = (credentials) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await Api.auth.editProfile(credentials);
    if (res.data.hasError) {
      dispatch(setLoading(false));
      showToast(res.data.errors.message, 'error');
    } else {
      dispatch(setLoading(false));
      dispatch(fetchUser());
    }
  } catch (error) {
    dispatch(setLoading(false));
    console.log('signin::', error);
    showToast('An error occurred!', 'error');
  }
};

export const updateStore = (credentials) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await Api.stores.edit(credentials);
    if (res.data.hasError) {
      dispatch(setLoading(false));
      showToast(res.data.errors.message, 'error');
    } else {
      dispatch(setLoading(false));
      dispatch(fetchUser());
    }
  } catch (error) {
    dispatch(setLoading(false));
    console.log('signin::', error);
    showToast('An error occurred!', 'error');
  }
};
