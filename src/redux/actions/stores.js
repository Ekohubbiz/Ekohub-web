import Api from '../../api';
import { showToast } from '../../utils/helpers';
import { setLoading } from '../reducers/loaderSlice';
import { setPagination } from '../reducers/productSlice';
import {
  setSearchStores,
  setSingleStores,
  setStoreReviews,
  setStores,
} from '../reducers/storeSlice';
import { fetchUser } from './authuser';

// thunks
export const fetchAllStores = (filter) => async (dispatch) => {
  try {
    const res = await Api.stores.all();
    dispatch(setStores(res.data.data.stores));
  } catch (error) {
    console.log(error);
    showToast('An error occurred!', 'error');
    dispatch(setLoading(false));
  }
};

export const createUserStore = (credentials) => async (dispatch) => {
  try {
    const res = await Api.stores.create(credentials);
    if (res.data.hasError) {
      dispatch(setLoading(false));
      showToast(res.data.errors.message, 'error');
      return false;
    } else {
      dispatch(setLoading(false));
      dispatch(fetchUser());
      showToast('Your store has been created!', 'success');
      return true;
    }
    // dispatch(setStores(res.data.data.products));
  } catch (error) {
    console.log(error);
    showToast('An error occurred!', 'error');
    dispatch(setLoading(false));
  }
};

export const viewStore = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await Api.stores.viewOneSlug(id);
    dispatch(setSingleStores(res.data.data.store));
    dispatch(setLoading(false));
  } catch (error) {
    console.log(error);
    // showToast('An error occurred!', 'error');
    dispatch(setLoading(false));
  }
};

export const addStoreReview = (credentials) => async (dispatch) => {
  try {
    const res = await Api.stores.addReview(credentials);
    if (res.data.hasError) {
      showToast(res.data.errors.message, 'error');
      dispatch(setLoading(false));
      return;
    }
    dispatch(fetchStoreReviews(credentials?.store_id));
    dispatch(setLoading(false));
    showToast(res.data.title, 'success');
  } catch (error) {
    console.log(error);
    showToast('An error occurred!', 'error');
    dispatch(setLoading(false));
  }
};

export const fetchStoreReviews = (id) => async (dispatch) => {
  try {
    const res = await Api.stores.reviews(id);
    dispatch(setStoreReviews(res.data.data.store_reviews));
    dispatch(setLoading(false));
  } catch (error) {
    console.log(error);
    // showToast('An error occurred!', 'error');
    dispatch(setLoading(false));
  }
};

export const fetchSearchStores = (filter) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await Api.search.searchStores(filter);
    dispatch(setSearchStores(res.data.data.stores));
    dispatch(setPagination(res.data.data.pagination));
    dispatch(setLoading(false));
  } catch (error) {
    console.log(error);
    showToast('An error occurred!', 'error');
    dispatch(setLoading(false));
  }
};
